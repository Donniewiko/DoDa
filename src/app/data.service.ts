import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  private serverUrl = `http://192.168.1.10:8086/write?db=domoticz&u=Domoticz&p=domoticz`;

  StoreData(measurement: string, input : any){
    let columnNames = Object.keys(input);
    let columnData : string = `${measurement} `;
    for (let i = 0, l = columnNames.length; i < l; i++) {
      columnData +=   `${columnNames[i]}=${input[columnNames[i]]}${i === columnNames.length -1 ? '': ','}`;
    }
    
    this.http.post(this.serverUrl, columnData).subscribe();
  }

}
