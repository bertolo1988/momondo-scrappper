export class FlightTime {

    minute: Number;
    hour: Number;
    day: Number;
    month: Number;
    year: Number;

    constructor(minute: Number, hour: Number, day: Number, month: Number, year: Number) {
        this.minute = minute;
        this.hour = hour;
        this.day = day;
        this.month = month;
        this.year = year;
    }

    public toString(): String {
        return JSON.stringify(this);
    }

}