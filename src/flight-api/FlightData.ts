import { FlightTime } from './FlightTime'

export class FlightData {
    arrival: any;
    departure: any;
    price: any;
    constructor(duration: Number, stops: Number, flightClass: Number, airline: Array<String>, amount: Number, currency: String, departureTime: FlightTime, departureAirport: String, arrivalTime: FlightTime, arrivalAirport: String) {
        this.arrival = {};
        this.arrival.time = arrivalTime;
        this.arrival.airport = arrivalAirport;
        this.departure = {};
        this.departure.time = departureTime;
        this.departure.airport = departureAirport;
        this.price = {};
        this.price.amount = amount;
        this.price.currency = currency;
    }
}
