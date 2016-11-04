import { FlightBoarding } from './FlightBoarding'
import { FlightClass } from './FlightClass';
import { FlightPrice } from './FlightPrice'
import { Printable } from './Printable'

export class FlightData extends Printable {

    private _duration: Number;
    private _stops: Number;
    private _flightClass: FlightClass;
    private _airline: [String];
    private _price: FlightPrice;
    private _arrival: FlightBoarding;
    private _departure: FlightBoarding;

    constructor(duration: Number, stops: Number, flightClass: FlightClass, airline: [String], price: FlightPrice, arrival: FlightBoarding, departure: FlightBoarding) {
        super();
        this._duration = duration;
        this._stops = stops;
        this._flightClass = flightClass;
        this._airline = airline;
        this._price = price;
        this._arrival = arrival;
        this._departure = departure;
    }

    public get duration(): Number {
        return this._duration;
    }

    public set duration(value: Number) {
        this._duration = value;
    }

    public get stops(): Number {
        return this._stops;
    }

    public set stops(value: Number) {
        this._stops = value;
    }

    public get flightClass(): FlightClass {
        return this._flightClass;
    }

    public set flightClass(value: FlightClass) {
        this._flightClass = value;
    }

    public get airline(): [String] {
        return this._airline;
    }

    public set airline(value: [String]) {
        this._airline = value;
    }

    public get arrival(): FlightBoarding {
        return this._arrival;
    }

    public set arrival(value: FlightBoarding) {
        this._arrival = value;
    }

    public get price(): FlightPrice {
        return this._price;
    }

    public set price(value: FlightPrice) {
        this._price = value;
    }

    public get departure(): FlightBoarding {
        return this._departure;
    }

    public set departure(value: FlightBoarding) {
        this._departure = value;
    }

}
