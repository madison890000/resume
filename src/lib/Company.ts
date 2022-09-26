import { CompanyType } from './types';

interface ICompany {
    name: string;
    location?: string;
    type?: CompanyType;
}

export default class Company {
    public name: string;
    public type?: CompanyType;
    public location?: string;

    constructor({ name, location, type }: ICompany) {
        this.name = name;
        this.location = location;
        this.type = type;
    }

}
