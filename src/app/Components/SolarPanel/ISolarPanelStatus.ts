import {IDomoticzResponse} from '../../objects/IDomoticzResponse';

export interface IsolarPanelStatus extends IDomoticzResponse  {
	Status: PanelStatusType;
}


export class SolarPanelStatus implements IsolarPanelStatus{
	LastUpdate: Date;
	Data: string;
	Status: PanelStatusType;
	
	constructor(source: any) {
		this.LastUpdate = source.LastUpdate;
		this.Data = source.Data;
		this.Status = PanelStatusType[this.Data];
	}
}

export enum PanelStatusType{
	Offline,
	Wait,
	Normal
}
