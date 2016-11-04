import { FlightTime } from '../src/flight-api/FlightTime';
import { Flight } from '../src/flight-api/Flight';
import { should } from 'chai';
should();

describe('Flight Api tests', () => {

    function testFlightTime(time: FlightTime) {
        time.minute.should.be.within(0, 60);
        time.hour.should.be.within(0, 24);
        time.day.should.be.within(1, 31);
        time.month.should.be.within(1, 12);
        time.year.should.be.above(2000);
    }

    it('should create a FlightTime object', () => {
        let time = new FlightTime(16, 3, 10, 5, 2016);
        testFlightTime(time);
        time.toString().should.eql('{"minute":16,"hour":3,"day":10,"month":5,"year":2016}');
    });

    it('should create a Flight object', () => {
        let arrivalTime = new FlightTime(25, 19, 3, 11, 2016);
        let departureTime = new FlightTime(50, 17, 3, 11, 2016);
        let today = new Date();
        let flight = new Flight('MAD', 'LON', today, 155, 0, 0, ['Ryanair'], 91, 'EUR', departureTime, arrivalTime, 'MAD', 'STN');
        flight.search.from.should.be.a('String').and.have.length.of(3);
        flight.search.to.should.be.a('String').and.have.length.of(3);
        flight.search.source.should.eql('momondo').and.be.a('String');
        flight.search.queried.should.be.a('Date');
        flight.data.duration.should.be.a('Number').and.be.above(0);
        flight.data.stops.should.be.a('Number').and.be.at.least(0);
        flight.data.flightClass.should.be.a('Number').and.be.within(0, 3);
        flight.data.airline.should.have.length.of.at.least(1);
        flight.data.price.amount.should.be.a('Number').and.be.above(0);
        flight.data.price.currency.should.be.a('String').and.have.length.of(3);
        testFlightTime(flight.data.departure.time);
        flight.data.departure.airport.should.be.a('String').and.have.length.of(3);
        testFlightTime(flight.data.arrival.time);
        flight.data.arrival.airport.should.be.a('String').and.have.length.of(3);
        flight.toString().should.eql('{"search":{"from":"MAD","to":"LON","source":"momondo","queried":' + JSON.stringify(today) + '},"data":{"duration":155,"stops":0,"flightClass":0,"airline":["Ryanair"],"price":{"amount":91,"currency":"EUR"},"departure":{"time":{"minute":50,"hour":17,"day":3,"month":11,"year":2016},"airport":"MAD"},"arrival":{"time":{"minute":25,"hour":19,"day":3,"month":11,"year":2016},"airport":"STN"}}}');
    });

});
