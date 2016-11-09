import * as Moment from 'moment';
import * as Flight from './flight-api/Flight';
let debug = require('debug')('MomondoScrappper');
let Nightmare = require('nightmare');

let util = require('util')

class MomondoScrappper {

    static scrap = function (route: String, date: any, dateFormat: String, currency: String, directFlight: Boolean, timeout: Number, retries: Number, headless: Boolean) {
        let nightmare = Nightmare({ show: true });
        nightmare
            .goto('http://yahoo.com')
            .type('form[action*="/search"] [name=p]', 'github nightmare')
            .click('form[action*="/search"] [type=submit]')
            .wait('#main')
            .evaluate(function () {
                return document.querySelector('#main .searchCenterMiddle li a')["href"];
            })
            .end()
            .then(function (result) {
                console.log(result)
            })
            .catch(function (error) {
                console.error('Search failed:', error);
            });
    }

}

export = MomondoScrappper;