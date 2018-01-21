import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../../data.service';
import { ISolarPanelData, SolarPanelData } from './ISolarPanelData';

@Injectable()
export class SolarpanelService {

  constructor(private http: HttpClient, private dataService: DataService) { }
  getSolarData(userName: string, callback: (data) => void) {
    {
      const url = `http://www.goodwe-power.com/Mobile/GetMyPowerStationById?stationID=737a0dc6-dd61-40a0-b21c-264ca1b16737`;

      this.http.get(url).subscribe(
        data => {

          let result = new SolarPanelData(data);
          if (result.Online) {
            this.dataService.StoreData('inverter', result);
          }
          callback(result);
        });
    }
  }
}
