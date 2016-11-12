import { expect } from 'chai'
import { go, sleep, findId, findCSS, By } from './selenium'
import common from './common'

describe('Test profile Page', (done) => {
    before('Should login and navigate to profile page', (done) => {
        go().then(common.login).then(sleep(500))
        	.then(findId('profile_btn').click())
        	.then(done)
    })

    it('Update email', (done) => {
	    sleep(1000)
	    .then(findId('inputEmail').clear())
	    .then(findId('inputEmail').sendKeys('asd@asd.asd'))
        .then(findId('submitBtn').click())
        .then(sleep(1000))
            .then(findId('profileMsg').getText().then(text=> {
                expect(text.indexOf("Updated")).to.equal(0)
            }))
            .then(done);
    })

    it('update zipcode', (done) => {
	    sleep(1000)
	    .then(findId('inputZip').clear())
	    .then(findId('inputZip').sendKeys('12345'))
        .then(findId('submitBtn').click())
        .then(sleep(1000))
        .then(findId('profileMsg').getText().then(text=> {
            expect(text.indexOf("Updated")).to.equal(0)
        }))
        .then(done)
    	
    })

    it('update password', (done) => {
	    sleep(1000)
	    .then(findId('inputPass').clear())
	    .then(findId('inputPass').sendKeys('12345'))
	    .then(findId('inputConf').clear())
	    .then(findId('inputConf').sendKeys('12345'))
        .then(findId('submitBtn').click())
        .then(sleep(1000))
        .then(findId('profileMsg').getText().then(text=> {
            expect(text.indexOf("Updated")).to.equal(0)
        }))
        .then(done)    	
    })
    
    after('should logout and nav to landing page', (done) => {
        sleep(500)
            .then(common.logout)
            .then(done);
    })
})
