import { OnInit, Input } from '@angular/core';
import { DomoticzService } from '../domoticz.service';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable'


export class DomoticzBase implements OnInit {
	constructor(private _domoticzService: DomoticzService) { }
	@Input() idx: number;
	@Input() interval: number = 5000;


	ngOnInit() {

	}

	getDomoticzResult(callback: (data) => void) {
		IntervalObservable.create(this.interval).subscribe(() => {
			this._domoticzService.getDevice(this.idx).subscribe(
				data => {
					let result = data.result[0];
					callback(result);
				}
			);
		});
	}
}


