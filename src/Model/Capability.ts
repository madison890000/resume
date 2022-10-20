interface ICapability {
    coding: number;
    leaning: number;
    algorithm: number;
    communicate: number;
    engineer: number;
    passion: number;
}


export default class Capability {
    public coding: number;
    public leaning: number;
    public algorithm: number;
    public communicate: number;
    public engineer: number;
    public passion: number;

    constructor({
                    coding,
                    leaning,
                    algorithm,
                    communicate,
                    engineer,
                    passion
                }: ICapability) {
        this.coding = coding;
        this.leaning = leaning;
        this.algorithm = algorithm;
        this.communicate = communicate;
        this.engineer = engineer;
        this.passion = passion;
    }

}
