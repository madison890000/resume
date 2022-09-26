import Company from '../Company'
import { CompanyType } from '../types';

describe('Company class', () => {
    test('company should have name', () => {
        const testCompanyName = 'test company name'
        const testCompany = new Company({
            name: testCompanyName,
        })
        expect(testCompany.name)
            .toEqual(testCompanyName)
    })
    test('company could have company type', () => {
        const testCompanyName = 'test company name'
        const testCompany = new Company({
            name: testCompanyName,
            type: CompanyType.Enterprise,
        })
        expect(testCompany.type)
            .toEqual(CompanyType.Enterprise)
    })
})
