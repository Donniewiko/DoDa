export interface ISunriseSunset {
    Sunrise: Date;
    Sunset: Date;
}

export class SunriseSunset implements ISunriseSunset{
    Sunrise : Date;
    Sunset: Date;

    constructor(input: any, addDay : boolean = false) {
       this.Sunrise = this.getDate(input.Sunrise);
       this.Sunset = this.getDate(input.Sunset);

       if(addDay){
        this.Sunrise.setDate(this.Sunrise.getDate() + 1);
        this.Sunset.setDate(this.Sunset.getDate() + 1);
       }
    }

    private getDate(input: string): Date{
        let day = new Date().getDate();
        let year = new Date().getFullYear();
        let month = new Date().getMonth();
        let hours = parseInt(input.split(':')[0]);
        let minutes = parseInt(input.split(':')[1]);
        return new Date(year, month, day, hours, minutes);
    }
}
