import Base from './Base';

export default class StringWithID extends Base {
    public text: string;

    constructor(text: string) {
        super();
        this.text = text;
    }

    toString() {
        return this.text;
    }
}
