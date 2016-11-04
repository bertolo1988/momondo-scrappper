import { Printable } from './Printable'

export class FlightPrice extends Printable {

    private _amount: Number;
    private _currency: 'EUR' | 'USD' | 'GBP';

    constructor(amount: Number, currency: 'EUR' | 'USD' | 'GBP') {
        super();
        this._amount = amount;
        this._currency = currency;
    }

    public get amount(): Number {
        return this._amount;
    }

    public set amount(value: Number) {
        this._amount = value;
    }

    public get currency(): 'EUR' | 'USD' | 'GBP' {
        return this._currency;
    }

    public set currency(value: 'EUR' | 'USD' | 'GBP') {
        this._currency = value;
    }

}