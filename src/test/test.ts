import * as Flight from '../flight-api/Flight';
import MomondoScrappper = require('../MomondoScrappper');

import { expect } from 'chai';

describe('Hello function', () => {
    it('should return hello world', () => {
        const result = MomondoScrappper.hello();
        expect(result).to.equal('Hello');
    });
});