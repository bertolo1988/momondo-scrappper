import { FlightTime } from '../src/flight-api/FlightTime';
import { FlightPrice } from '../src/flight-api/FlightPrice';
import { FlightBoarding } from '../src/flight-api/FlightBoarding';
import { FlightData } from '../src/flight-api/FlightData';
import { FlightSearch } from '../src/flight-api/FlightSearch';
import { Flight } from '../src/flight-api/Flight';
import { FlightClass } from '../src/flight-api/FlightClass';
import { should } from 'chai';

should();

describe('Flight Api tests', () => {

    it('should create a FlightTime object', () => {
        let time = new FlightTime(16, 3, 10, 5, 2016);
        time.minute.should.eql(16);
        time.hour.should.eql(3);
        time.day.should.eql(10);
        time.month.should.eql(5);
        time.year.should.eql(2016);
        time.toString().should.eql('{"minute":16,"hour":3,"day":10,"month":5,"year":2016}');
    });

    it('should create a FlightPrice object', () => {
        let price = new FlightPrice(3, 'EUR');
        price.amount.should.eql(3);
        price.currency.should.eql('EUR');
        price.toString().should.eql('{"amount":3,"currency":"EUR"}');
    });

    it('should create a FlightBoarding object', () => {
        let time = new FlightTime(15, 3, 10, 5, 2016);
        let boarding = new FlightBoarding(time, 'LON');
        boarding.should.have.property('time')
        boarding.airport.should.eql('LON');
        boarding.toString().should.eql('{"time":{"minute":15,"hour":3,"day":10,"month":5,"year":2016},"airport":"LON"}');
    });

    it('should create a FlightData object', () => {
        let price = new FlightPrice(30, 'EUR');
        let arrivalTime = new FlightTime(25, 14, 3, 11, 2016);
        let arrival = new FlightBoarding(arrivalTime, 'MAD');
        let departureTime = new FlightTime(50, 18, 3, 11, 2016);
        let departure = new FlightBoarding(arrivalTime, 'LHR');
        let data = new FlightData(325, 1, FlightClass.ECONOMY, ['Ryanair'], price, arrival, departure);
        data.duration.should.eql(325);
        data.stops.should.eql(1);
        data.flightClass.should.eql(0);
        data.airline.should.eql(['Ryanair']);
        data.price.should.eql(price);
        data.arrival.should.eql(arrival);
        data.departure.should.eql(departure);
        data.toString().should.eql('{"duration":325,"stops":1,"flightClass":0,"airline":["Ryanair"],"price":{"amount":30,"currency":"EUR"},"arrival":{"time":{"minute":25,"hour":14,"day":3,"month":11,"year":2016},"airport":"MAD"},"departure":{"time":{"minute":25,"hour":14,"day":3,"month":11,"year":2016},"airport":"LHR"}}');
    });

    it('should create a FlightSearch object', () => {
        let today = new Date();
        let search = new FlightSearch('LON', 'LIS', 'momondo', today);
        search.from.should.eql('LON');
        search.to.should.eql('LIS');
        search.source.should.eql('momondo');
        search.queried.should.eql(today);
        search.toString().should.eql('{"from":"LON","to":"LIS","source":"momondo","queried":' + JSON.stringify(today) + '}');
    });

    it('should create a Flight object', () => {
        let today = new Date();
        let search = new FlightSearch('LON', 'LIS', 'momondo', today);
        let price = new FlightPrice(30, 'EUR');
        let arrivalTime = new FlightTime(25, 14, 3, 11, 2016);
        let arrival = new FlightBoarding(arrivalTime, 'MAD');
        let departureTime = new FlightTime(50, 18, 3, 11, 2016);
        let departure = new FlightBoarding(arrivalTime, 'LHR');
        let data = new FlightData(325, 1, FlightClass.ECONOMY, ['Ryanair'], price, arrival, departure);
        let flight = new Flight(search, data);
        flight.should.have.property('search');
        flight.should.have.property('data');
        flight.toString().should.eql('{"search":{"from":"LON","to":"LIS","source":"momondo","queried":' + JSON.stringify(today) + '},"data":{"duration":325,"stops":1,"flightClass":0,"airline":["Ryanair"],"price":{"amount":30,"currency":"EUR"},"arrival":{"time":{"minute":25,"hour":14,"day":3,"month":11,"year":2016},"airport":"MAD"},"departure":{"time":{"minute":25,"hour":14,"day":3,"month":11,"year":2016},"airport":"LHR"}}}');
    });

});
