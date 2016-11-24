import { expect } from 'chai'
const webdriver = require('selenium-webdriver')
import { go, sleep, findId, findClass, } from './selenium'
import common from './common'

describe('Test landing page', () => {
    before('Create a new account, login, then navigate to main page', (done) => {
        go().then(sleep(1000)).then(done)
    })

    it("Register a new user account", (done)=> {
        sleep(1000)
            .then(findId('accName').clear())
            .then(findId('accName').sendKeys('asd'))
            .then(findId('email').clear())
            .then(findId('email').sendKeys('asd@asd.asd'))
            // .then(findId('bday').sendKeys(new Date('01-01-1900')))
            .then(findId('bday').sendKeys("20-Aug-1985"))
            .then(findId('zipcode').clear())
            .then(findId('zipcode').sendKeys('77005'))
            .then(findId('phone').clear())
            .then(findId('phone').sendKeys('123-456-7890'))
            .then(findId('password').clear())
            .then(findId('password').sendKeys('asd'))
            .then(findId('confirm_password').clear())
            .then(findId('confirm_password').sendKeys('asd'))
            .then(findId('register_btn').click())
            .then(sleep(1000))
            .then(findId('message').getText().then(text=> {
                expect(text.indexOf("Successfully")).to.equal(0)
            }))
            .then(done);
    })

    it("Login as using test user account", (done)=> {
        sleep(500)
            .then(common.login)
            .then(common.logout)
            .then(done);
    })
})
