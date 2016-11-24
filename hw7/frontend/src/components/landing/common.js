import {expect} from 'chai'
import {findId, sleep} from './selenium'

exports.user = {
    username: 'wel1',
    password: 'look-sick-spell'
}

exports.login = () =>
    sleep(1000)
        .then(findId('loginaccn').clear())
        .then(findId('loginpw').clear())
        .then(findId('loginaccn').sendKeys(exports.user.username))
        .then(findId('loginpw').sendKeys(exports.user.password))
        .then(findId('login_btn').click())
        .then(sleep(2000))

exports.logout = () =>
    sleep(1000)
        .then(findId('logout_btn').click())
        .then(sleep(500))
        .then(expect(findId('login_btn')).to.be.ok)
        .then(sleep(500))
