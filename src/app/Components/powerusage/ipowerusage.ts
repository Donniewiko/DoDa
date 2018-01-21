import { IDomoticzResponse } from '../../objects/IDomoticzResponse';

export interface IPowerusage extends IDomoticzResponse {
	CurrentUsageValue: string;
    UsageToday: string;
    ActualUsage1: number;
    ActualUsage2: number;
    Title: string;
}

export class Powerusage implements IPowerusage{
    CurrentUsageValue: string;
    UsageToday: string;
    ActualUsage1: number;
    ActualUsage2: number;
    Title: string;
    Name: string;

	constructor(source: any) {
		let powerusages = source.Data.split(';');
		this.ActualUsage1 = parseFloat(powerusages[4]);
		this.CurrentUsageValue = source.Usage;
		this.UsageToday = source.CounterToday;
		this.Title = source.HardwareName;
		this.Name = source.Name;
	}
}

/*


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
*/