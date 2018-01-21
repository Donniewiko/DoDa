import { Component, OnInit, Input } from '@angular/core';
import { DomoticzService } from '../../domoticz.service';
import { ISolarPanelData, SolarPanelData } from './ISolarPanelData';
import { SolarpanelService } from './solarpanel.service';
import { SunriseSunset } from '../../objects/iglobal';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable'

@Component({
	selector: 'solarpanel',
	templateUrl: './solarpanel.component.html',
	styleUrls: ['./solarpanel.component.css']
})
export class SolarpanelComponent implements OnInit {

	SolarPanelData: SolarPanelData;
	private runner: any;
	private restartMonitor: any;
	private isRunning = false;
	CurrentSunriseSunset: SunriseSunset;

	constructor(private _domoticzService: DomoticzService, private _solarpanelService: SolarpanelService) {
	}

	ngOnInit() {
		this.setRunningWindow();
	}

	async initMonitor() {
		let manualStart = true;
		let milisecondsToRun = +this.CurrentSunriseSunset.Sunset - +this.CurrentSunriseSunset.Sunrise;

		 this.startMonitoring();
		 await this.sleep(milisecondsToRun);
		
		
		this.stopMonitoring();

		this.restartMonitor = IntervalObservable.create(5000).subscribe(() => {
			// check to see if it is tomorrow, a day later, or the next month	
			if (new Date().getDate() > this.CurrentSunriseSunset.Sunrise.getDate() || new Date().getMonth() > this.CurrentSunriseSunset.Sunrise.getMonth()) {
				this.restartMonitor.unsubscribe();
				this.setRunningWindow();
			}
		});
		// 
	}

	startMonitoring() {
		this.runner = IntervalObservable.create(5000).subscribe(() => {
			this._solarpanelService.getSolarData("donniewiko", result => {
				this.isRunning = true;
				this.SolarPanelData = result;
			});
		});
	}

	stopMonitoring() {
		if (this.runner) this.runner.unsubscribe();
		this.isRunning = false;
	}

	setRunningWindow() {
		this._domoticzService.getSunsetSunrise().subscribe(async result => {
			this.CurrentSunriseSunset = new SunriseSunset(result);

			let milisecondsToStart = +this.CurrentSunriseSunset.Sunrise - +new Date();
			await this.sleep(milisecondsToStart);
			this.initMonitor();
		});
	}

	sleep(ms: number) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}
}
