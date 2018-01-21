export interface ISolarPanelData {
    StationId?: string,
    StationName?: string,
    CurrentProduction: number,
    DayProduction: number,
    TotalProduction: number
}

export class SolarPanelData implements ISolarPanelData {
    CurrentProduction: number;
    DayProduction: number;
    TotalProduction: number;
    Online: boolean;

    constructor(source: any) {
        this.Online = source.status !== "Offline";
        this.CurrentProduction = this.tryParse(source.curpower);
        this.DayProduction = this.tryParse(source.eday);
        this.TotalProduction = this.tryParse(source.etotal);
    }

    private tryParse(input: string): number {
        let strippedInput = input.replace("kwh", "").trim();

        return parseFloat(strippedInput);
    }
}