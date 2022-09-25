interface ICompany {
    name: string;
    location?: string;
}

export default class Company {
    public name: string;
    public location?: string;

    constructor({ name, location }: ICompany) {
        this.name = name;
        this.location = location;
    }

}
