import Base from './Base';

interface ICapability {
    problemSolving: number;
    dataStructure: number;
    algorithm: number;
    communicate: number;
    engineer: number;
    passion: number;
}

export default class Capability extends Base {
    public problemSolving: number;
    public dataStructure: number;
    public algorithm: number;
    public communicate: number;
    public engineer: number;
    public passion: number;

    constructor({ problemSolving, dataStructure, algorithm, communicate, engineer, passion }: ICapability) {
        super();
        this.problemSolving = problemSolving;
        this.dataStructure = dataStructure;
        this.algorithm = algorithm;
        this.communicate = communicate;
        this.engineer = engineer;
        this.passion = passion;
    }
}
