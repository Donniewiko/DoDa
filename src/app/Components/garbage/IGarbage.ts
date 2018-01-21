export interface IGarbage {
    PickupDate : Date;
    GarbageType: GarbageType;
    RegularDay: Boolean;
}

export class GarbagePickup implements IGarbage{
    PickupDate : Date;
    GarbageType: GarbageType;
    RegularDay: Boolean;

    constructor(input : any) {
        this.PickupDate= input.PickupDate;
        this.GarbageType = input.GarbageType;
        this.RegularDay = input.RegularDay;
    }
}

export enum GarbageType{
    Papier,
    GFT,
    Plastic
}