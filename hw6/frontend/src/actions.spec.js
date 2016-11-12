import mockery from 'mockery'
import fetch, {mock} from 'mock-fetch'
import { expect } from 'chai'

import { url, resource } from './actions'
describe('Validate actions (these are functions that dispatch actions)', () => {

    let Action, actions

    beforeEach(() => {
        if(mockery.enable) {
            mockery.enable({warnOnUnregistered: false, useCleanCache:true})
            mockery.registerMock('node-fetch', fetch)
            require('node-fetch')
        }
        Action = require('./actions').default
        actions = require('./actions')
    })

    afterEach(() => {
        if (mockery.enable) {
            mockery.deregisterMock('node-fetch')
            mockery.disable()
        }
    })


    it('resource should be a resource (i.e., mock a request)', (done)=> {
        mock(`${url}/sample`, {
            method: 'GET',
            headers: {'Content-Type':'application/json'},
            json:{articles:[{id:1, author:'wel1',text:'test'}]}
        })

        resource('GET', 'sample').then((response) => {
            expect(response.articles).to.exist;
        })
            .then(done)
            .catch(done)
    })


    it('resource should give me the http error', (done)=> {

        resource('POST', 'login_invalid_address').catch((err) => {
            expect(err).to.exist;
        })
            .then(done)
            .catch(done)
    })


    it('resource should be POSTable', (done)=> {
        const username = 'wel1'
        const password = 'look-sick-spell'

        mock(`${url}/login`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            json: {username, result:"success"}
        })

        resource('POST', 'login', {username, password}).then((response) => {
            expect(response).to.eql({username: "wel1", result: "success"})
        })
            .then(done)
            .catch(done)
    })


    it('should update error message (for displaying error mesage to user)', ()=>{
        const msg = 'test error message';
        const expectAction = {
            type: Action.ERROR,
            errorMsg: msg
        }
        expect(displayErrorMsg(msg)).to.eql(expectAction);
    })


    it('should update success message (for displaying success message to user)', ()=>{
        const msg = 'test success message';
        const expectAction = {
            type: Action.SUCCESS,
            successMsg: msg
        }
        expect(displaySuccessMsg(msg)).to.eql(expectAction);
    })


    it('should navigate (to profile, main, or landing)', ()=>{
        expect(nav2Index()).to.eql({type: Action.NAV2INDEX});
        expect(nav2Main()).to.eql({type: Action.NAV2MAIN});
        expect(nav2Profile()).to.eql({type: Action.NAV2PROFILE});
    })
})
