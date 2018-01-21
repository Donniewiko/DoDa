import { Component, OnInit } from '@angular/core';
import {GarbageService} from './garbage.service';
import {GarbagePickup, GarbageType} from './IGarbage';
//import * as Models from './IGarbage';
@Component({ 
  selector: 'garbage',
    templateUrl: './garbage.component.html',
  styleUrls: ['./garbage.component.css']
})
export class GarbageComponent implements OnInit {
  NextGarbagePickup: GarbagePickup;
  NextGarbagePickupType : string;
  constructor(private _garbageService : GarbageService) { }

  ngOnInit() {
    this.NextGarbagePickup = this._garbageService.getNextGarbagePickup();
this.NextGarbagePickupType = GarbageType[this.NextGarbagePickup.GarbageType];
  }

}
