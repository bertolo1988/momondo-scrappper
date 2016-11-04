import * as Moment from 'moment';
import * as Flight from './flight-api/Flight';
let phantom = require('phantom');
let cheerio = require('cheerio');
let debug = require('debug')('MomondoScrappper');

let util = require('util')

class MomondoScrappper {

    static scrap = function (route: String, date: any, dateFormat: String, currency: String, directFlight: Boolean, timeout: Number, retries: Number) {

        function waitFor($config) {
            $config._start = $config._start || new Date();

            if ($config.timeout && (new Date()).getTime() - $config._start > $config.timeout) {
                if ($config.error) $config.error();
                if ($config.debug) console.log('timedout ' + ((new Date()).getTime() - $config._start) + 'ms');
                return;
            }

            if ($config.check()) {
                if ($config.debug) console.log('success ' + ((new Date()).getTime() - $config._start) + 'ms');
                return $config.success();
            }

            setTimeout(waitFor, $config.interval || 0, $config);
        }

        let url = 'http://www.momondo.pt/flightsearch/?Search=true&TripType=1&SegNo=1&SO0=LIS&SD0=NYC&SDP0=11-11-2016&AD=1&TK=ECO&DO=false&NA=false';
        let sitepage;
        let phInstance;
        phantom.create()
            .then(instance => {
                phInstance = instance;
                return instance.createPage();
            })
            .then(page => {
                sitepage = page;
                return page.open(url);
            })
            .then(status => {
                console.log(status);
                return sitepage.property('content');
            })
            .then(content => {
                // console.log(content);
                let $ = cheerio.load('<h2 class="title">Hello world</h2>');
                waitFor({
                    debug: true,  // optional
                    interval: 0,  // optional
                    timeout: 60000,  // optional
                    check: function () {
                        return sitepage.evaluate(function () {
                            return $("#searchProgressText:contains('Search complete')").is(':visible');
                        });
                    },
                    success: function () {
                        console.log('worked');
                    },
                    error: function () {
                        console.log('did not work');
                    }
                });
                sitepage.close();
                phInstance.exit();
            })
            .catch(error => {
                console.log(error);
                phInstance.exit();
            });
    }

}

export = MomondoScrappper;