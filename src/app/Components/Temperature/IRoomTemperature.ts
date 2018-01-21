import { IDomoticzResponse } from '../../objects/IDomoticzResponse';

export interface IRoomTemperature extends IDomoticzResponse {
	Temperature: number;
	TemperatureValue: string;
}

export class RoomTemperature implements IRoomTemperature {
	LastUpdate: Date;
	Temperature: number;
	TemperatureValue: string;
	
	constructor(source: any) {
		this.LastUpdate = source.LastUpdate;
		this.Temperature = source.Temp;
		this.TemperatureValue = source.Data;
	}
}