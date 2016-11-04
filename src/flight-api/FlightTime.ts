import { Printable } from './Printable'

export class FlightTime extends Printable {

    private _minute: number;
    private _hour: number;
    private _day: number;
    private _month: number;
    private _year: number;

    constructor(minute: number, hour: number, day: number, month: number, year: number) {
        super();
        this._minute = minute;
        this._hour = hour;
        this._day = day;
        this._month = month;
        this._year = year;
    }

    public get day(): number {
        return this._day;
    }

    public set day(value: number) {
        this._day = value;
    }

    public get month(): number {
        return this._month;
    }

    public set month(value: number) {
        this._month = value;
    }

    public get year(): number {
        return this._year;
    }

    public set year(value: number) {
        this._year = value;
    }

    public get hour(): number {
        return this._hour;
    }

    public set hour(value: number) {
        this._hour = value;
    }

    public get minute(): number {
        return this._minute;
    }

    public set minute(value: number) {
        this._minute = value;
    }

}