import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as GarbageData from './data/garbage-2018.json';
import * as _ from 'lodash';
import { GarbagePickup } from "./IGarbage";
@Injectable()
export class GarbageService {

  constructor(private http: HttpClient) { }

  getNextGarbagePickup(): GarbagePickup {
    const nextPickup = (<any>GarbageData).filter(pickupDate => {

      return (<any>new Date(pickupDate.PickupDate)) - (<any>new Date()) > 0;
    });
    return new GarbagePickup(nextPickup[0]);
  }
  getRovaData(callback: (data) => void) {

  }

}
