import Company from '../Company'

describe('Company class', () => {
    test('company should have name', () => {
        const testCompanyName = 'test company name'
        const testCompany = new Company({
            name: testCompanyName,
        })
        expect(testCompany.name)
            .toEqual(testCompanyName)
    })
})
