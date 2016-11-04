import { FlightData } from './FlightData'
import { FlightSearch } from './FlightSearch'
import { Printable } from './Printable'

export class Flight extends Printable {

    private _search: FlightSearch;
    private _data: FlightData;

    constructor(search: FlightSearch, data: FlightData) {
        super();
        this._search = search;
        this._data = data;
    }

    public get search(): FlightSearch {
        return this._search;
    }

    public set search(value: FlightSearch) {
        this._search = value;
    }

    public get data(): FlightData {
        return this._data;
    }

    public set data(value: FlightData) {
        this._data = value;
    }

}
