import TosBase from "./TosBase.js";

export default class Tos extends TosBase {

    string;
    message;
    joinString;

    constructor(stringValue, message) {
        super();
        this.string = stringValue;
        this.message = message;
    }

    newString(newString) {
        this.joinString = this.message + newString;

        return this;
    }

    getJoinString() {
        return this.joinString;
    }

    setMessage(str) {
        this.message = this.message + str
    }

    sum(one, two) {
        return one + two;
    }
}