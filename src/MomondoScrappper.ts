import * as Moment from 'moment';
import * as Flight from './flight-api/Flight';

var debug = require('debug')('MomondoScrappper');

var util = require('util')


class MomondoScrappper {

    static scrap = function (route: String, date: any, dateFormat: String, currency: String, directFlight: Boolean, timeout: Number, retries: Number) {
        debug(3);
    }

}

export = MomondoScrappper;