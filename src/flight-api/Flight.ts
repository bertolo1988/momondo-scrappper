import { FlightTime } from './FlightTime'

export class Flight {

    search: any;
    data: any;

    constructor(from: String, to: String, queried: Date, duration: Number, stops: Number, flightClass: 0 | 1 | 2 | 3, airline: [String], amount: Number, currency: 'EUR' | 'USD', departureTime: FlightTime, arrivalTime: FlightTime, departureAirport: String, arrivalAirport: String) {
        this.search = {};
        this.search.from = from;
        this.search.to = to;
        this.search.source = 'momondo';
        this.search.queried = queried;
        this.data = {};
        this.data.duration = duration;
        this.data.stops = stops;
        this.data.flightClass = flightClass;
        this.data.airline = airline;
        this.data.price = {};
        this.data.price.amount = amount;
        this.data.price.currency = currency;
        this.data.departure = {};
        this.data.departure.time = departureTime;
        this.data.departure.airport = departureAirport;
        this.data.arrival = {};
        this.data.arrival.time = arrivalTime;
        this.data.arrival.airport = arrivalAirport;
    }

    public toString(): String {
        return JSON.stringify(this);
    }

}