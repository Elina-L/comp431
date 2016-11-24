import {expect} from 'chai'
const webdriver = require('selenium-webdriver')
import {go, sleep, findId, findClassName} from './selenium'
import common from './common'

describe('Test main Page: following', () => {
	let followerLen = 0

    before('Should login and navigate to main page', (done) => {
        go().then(common.login).then(sleep(500)).then(done)
    })

    it('add a follower', (done) => {

     	sleep(500)
     	.then(findClassName('followerItem').then(
     		(followers) => {
     			followerLen = followers.length
     		}
 		))
     	.then(findId('search2').clear())
     	.then(findId('search2').sendKeys('wel1test'))
     	.then(findId('searchfollower-btn').click())
     	.then(sleep(1000))
     	.then(findClassName('followerItem').then(
     		(followers) => {
     			followerLen = followers.length
     		}
 		))
    	.then(done)
   	
    })
    it('remove a follower', (done) => {
    	sleep(500)
    	.then(findClassName('unfollow-btn').then(
    		(btn) => {
    			btn[0].click()
			}
		))
    	.then(done)

    })


    after('should logout and nav to landing page', (done) => {
        sleep(500)
            .then(common.logout)
            .then(done);
    })


})

