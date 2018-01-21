import { Component, OnInit, Input } from '@angular/core';
import { DomoticzService } from '../../domoticz.service';
import { RoomTemperature } from './IRoomTemperature';
import {DomoticzBase} from '../domoticzBase';

@Component({
	selector: 'temperature',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})

export class Temperature extends DomoticzBase implements OnInit {
RoomTemperature : RoomTemperature;

  constructor(_domoticzService: DomoticzService) {
  super(_domoticzService);
   }
	
  ngOnInit() {
  	super.getDomoticzResult(result => {
  		this.RoomTemperature = new RoomTemperature(result);
  	});
  }
}