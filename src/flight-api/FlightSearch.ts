import { Printable } from './Printable'

export class FlightSearch extends Printable {

    private _from: String;
    private _to: String;
    private _source: 'momondo';
    private _queried: Date;

    constructor(from: String, to: String, source: 'momondo', queried: Date) {
        super();
        this._from = from;
        this._to = to;
        this._source = source;
        this._queried = queried;
    }

    public get from(): String {
        return this._from;
    }

    public set from(value: String) {
        this._from = value;
    }

    public get to(): String {
        return this._to;
    }

    public set to(value: String) {
        this._to = value;
    }

    public get source(): 'momondo' {
        return this._source;
    }

    public set source(value: 'momondo') {
        this._source = value;
    }

    public get queried(): Date {
        return this._queried;
    }

    public set queried(value: Date) {
        this._queried = value;
    }

}