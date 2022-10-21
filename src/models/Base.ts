import { v4 } from 'uuid';

export default class Base {
    readonly id: string;

    constructor() {
        this.id = v4();
    }
}
