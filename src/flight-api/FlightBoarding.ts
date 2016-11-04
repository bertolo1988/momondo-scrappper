import { FlightTime } from './FlightTime'
import { Printable } from './Printable'

export class FlightBoarding extends Printable {

    private _time: FlightTime;
    private _airport: String;

    constructor(time: FlightTime, airport: String) {
        super();
        this._time = time;
        this._airport = airport;
    }

    public get time(): FlightTime {
        return this._time;
    }

    public set time(value: FlightTime) {
        this._time = value;
    }

    public get airport(): String {
        return this._airport;
    }

    public set airport(value: String) {
        this._airport = value;
    }

}