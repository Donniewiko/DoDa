export interface IDomoticzResponse {
	LastUpdate?: Date;
	Idx?: string;
	Data?: string;
	BatteryLevel?: number; //If applicable for that device then it will be from 0-100.
	Description?: string; // Description of the device.
	HardwareName?: string; // See Domoticz devices table in Domoticz GUI.
	HardwareID?: number; // See Domoticz devices table in Domoticz GUI.
	HardwareType?: string; // See Domoticz devices table in Domoticz GUI.
	HardwareTypeVal?: number; // See Domoticz devices table in Domoticz GUI.
	ID?: number; // Index of the device. You can find the index in the device list (idx column) in Domoticz settings. It's not truly an index but is unique enough for dzVents to be treated as an id.
	Lastupdate?: Date; //Object: Time when the device was updated.
	Name?: string; // Name of the device.
	SignalLevel?: number; //If applicable for that device then it will be from 0-100.
	SubType?: string; // See Domoticz devices table in Domoticz GUI.
	Unit?: number; // Device unit. See device list in Domoticz' settings for the unit.
}