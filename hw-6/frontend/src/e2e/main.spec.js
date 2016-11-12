import { expect } from 'chai'
import { go, sleep, findId, findClassName, findCSS, By } from './selenium'
import common from './common'

describe('Test main page', (done) => {
    before('Should login and navigate to main page', (done) => {
        go().then(common.login).then(sleep(500))
        	.then(done)
    })

    it('update headline and confirm change', (done) => {
    	sleep(500)
    	// Change headline to test
        .then(findId('newHeadline').clear())
    	.then(findId('newHeadline').sendKeys('test'))
    	.then(findId('update-headline').click())
    	.then(sleep(2000))
        .then(findId('headline').getText().then(text=> {
            expect(text.indexOf("test")).to.equal(0)
        }))

        // Change headline to test2
    	.then(findId('newHeadline').clear())
    	.then(findId('newHeadline').sendKeys('test2'))
    	.then(findId('update-headline').click())
    	.then(sleep(2000))
        .then(findId('headline').getText().then(text=> {
            expect(text.indexOf("test2")).to.equal(0)
        }))
        .then(done)
    })

    it('add an article', (done) => {
    	let origLen = 0;
    	let newLen = 0
    	const newArticle = 'new article'
    	sleep(500)
    	.then(findClassName('post').then(
    		(articles) => {
    			console.log(origLen.length)
    			origLen = articles.length
    		}
		))
		.then(findId('shareArea').clear())
		.then(findId('shareArea').sendKeys(newArticle))
		.then(findId('post_btn').click())
		.then(sleep(1000))
    	.then(findClassName('post').then(
    		(articles) => {
    			console.log(articles.length)
    			newLen = articles.length
    			expect(articles.length).to.equal(origLen + 1)
    		}
		))
		// .then(expect(newLen.to.equal(origLen + 1)))
        .then(findClassName('articleText')
        	.then((texts)=>texts[0].getText())
            .then((text)=> {
                    expect(text).to.equal(newArticle);
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
