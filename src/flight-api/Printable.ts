export class Printable {

    public toString(): String {
        return JSON.stringify(this).replace(/[_]/g, '');
    }

}