import DataModel from './types';

interface ICompany {
    name: string;
    location?: string;
    type?: DataModel.CompanyType;
}

export default class Company {
    public name: string;
    public type?: DataModel.CompanyType;
    public location?: string;

    constructor({ name, location, type }: ICompany) {
        this.name = name;
        this.location = location;
        this.type = type;
    }

}
