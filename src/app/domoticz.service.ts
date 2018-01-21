import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const domoticzUrl = 'http://192.168.1.10:8080';

@Injectable()
export class DomoticzService {

	constructor(private http: HttpClient) { }

	getDevice(idx:number) : any {
		let targetUrl = `${domoticzUrl}/json.htm?type=devices&rid=${idx}`;
		return this.http.get(targetUrl);

	}

	getSunsetSunrise(){
		let targetUrl = `${domoticzUrl}/json.htm?type=command&param=getSunRiseSet`;
		return this.http.get(targetUrl);
	}
}
