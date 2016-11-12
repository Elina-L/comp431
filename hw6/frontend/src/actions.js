import Promise from 'bluebird'
import fetch from 'isomorphic-fetch'

const isLocal = false
export const url = isLocal ? 'http://localhost:3000' : 'https://webdev-dummy.herokuapp.com'

const Action = {

    POSTARTICLE: 'POSTARTICLE',
    ARTICLES: 'ARTICLES',

    UPDATEKEYWORD: 'UPDATEKEYWORD',

    UPDATE_AVATARS: 'UPDATEAVATAR',
    UPDATE_HEADLINE: 'UPDATEHEADLINE',
    UPDATE_PROFILE: 'UPDATEPROFILE',
    FOLLOWER_UPDATE: 'UPDATEFOLLOWERS',

    ERROR: 'ERROR',
    SUCCESS: 'SUCCESS',

    NAVIGATION: 'NAVIGATION',

    LOGIN_LOCAL: 'LOGIN_LOCAL',
    LOGOUT: 'LOGOUT',
    REGISTER: 'REGISTER'
}

export default Action

export function updateError(error) { return { type: Action.ERROR, error }}
export function updateSuccess(success) { return { type: Action.SUCCESS, success }}
export function navToProfile() { return { type: Action.NAV_PROFILE }}
export function navToMain() { return { type: Action.NAV_MAIN }}
export function navToOut() { return { type: Action.NAV_OUT }}

export function resource(method, endpoint, payload, submitJson = true) {
    const options = {
        credentials: 'include',
        method
    }
    //if submit a JSON, then set content-type in options tobe json
    if (submitJson) {
        options.headers = {'Content-Type': 'application/json'}
    }
    //if has payload, set options.body=payload in string form
    if (payload) {
        options.body = submitJson ? JSON.stringify(payload) : payload
    }

    return fetch(`${url}/${endpoint}`, options)
        .then((response) => {
            if (response.status == 401) {
                const message = `Error in ${method} ${endpoint} ${JSON.stringify(response.json())}`
                throw new Error(message)
            } else {
                return response.json()
            }
        })
}
