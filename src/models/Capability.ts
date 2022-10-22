import Base from './Base';

interface ICapability {
    coding: number;
    leaning: number;
    algorithm: number;
    communicate: number;
    engineer: number;
    passion: number;
}

export default class Capability extends Base {
    public coding: number;
    public leaning: number;
    public algorithm: number;
    public communicate: number;
    public engineer: number;
    public passion: number;

    constructor({ coding, leaning, algorithm, communicate, engineer, passion }: ICapability) {
        super();
        this.coding = coding;
        this.leaning = leaning;
        this.algorithm = algorithm;
        this.communicate = communicate;
        this.engineer = engineer;
        this.passion = passion;
    }
}
