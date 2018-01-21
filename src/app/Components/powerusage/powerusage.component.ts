import { Component, OnInit } from '@angular/core';
import { DomoticzService } from '../../domoticz.service';
import { DomoticzBase } from '../domoticzBase';
import { Powerusage } from './ipowerusage';

@Component({
	selector: 'powerusage',
	templateUrl: './powerusage.component.html',
	styleUrls: ['./powerusage.component.css']
})
export class PowerusageComponent extends DomoticzBase implements OnInit {

	Powerusage: Powerusage;

	constructor(_domoticzService: DomoticzService) {
		super(_domoticzService);
	}

	ngOnInit() {
		super.getDomoticzResult(result => {
			this.Powerusage = new Powerusage(result);
		});
	}

}