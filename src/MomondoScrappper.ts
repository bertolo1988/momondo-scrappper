import * as Moment from 'moment';
import * as Flight from './flight-api/Flight';
let phantom = require('phantom');
let cheerio = require('cheerio');
let debug = require('debug')('MomondoScrappper');

let util = require('util')

class MomondoScrappper {

    static scrap = function (route: String, date: any, dateFormat: String, currency: String, directFlight: Boolean, timeout: Number, retries: Number) {

        function waitFor(testFx, onReady, timeOutMillis) {
            var maxtimeOutMillis = timeOutMillis ? timeOutMillis : 3000, //< Default Max Timout is 3s
                start = new Date().getTime(),
                condition = false,
                interval = setInterval(function () {
                    if ((new Date().getTime() - start < maxtimeOutMillis) && !condition) {
                        // If not time-out yet and condition not yet fulfilled
                        condition = (typeof (testFx) === "string" ? eval(testFx) : testFx()); //< defensive code
                    } else {
                        if (!condition) {
                            // If condition still not fulfilled (timeout but condition is 'false')
                            console.log("'waitFor()' timeout");
                            phantom.exit(1);
                        } else {
                            // Condition fulfilled (timeout and/or condition is 'true')
                            console.log("'waitFor()' finished in " + (new Date().getTime() - start) + "ms.");
                            typeof (onReady) === "string" ? eval(onReady) : onReady(); //< Do what it's supposed to do once the condition is fulfilled
                            clearInterval(interval); //< Stop this interval
                        }
                    }
                }, 250); //< repeat check every 250ms
        };

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
                return waitFor(function () {
                    return sitepage.evaluate(function () {
                        return document.getElementById("searchProgressText").offsetLeft > 0;
                    });
                }, function () {
                    console.log("The sign-in dialog should be visible now.");
                    console.log('end');
                }, 5000);
            })
            .then(content => {
                console.log(content);
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