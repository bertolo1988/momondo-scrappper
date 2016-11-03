import { FlightTime } from '../src/flight-api/FlightTime';
import MomondoScrappper = require('../src/MomondoScrappper');
import { should } from 'chai';
should();

describe('FlightApi tests', () => {

    it('should create a FlightTime object', () => {
        let flight = new FlightTime(15, 3, 10, 5, 2016);
        flight.minute.should.equal(15);
        flight.hour.should.equal(3);
        flight.day.should.equal(10);
        flight.month.should.equal(5);
        flight.year.should.equal(2016);
    });
});