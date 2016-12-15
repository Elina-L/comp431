import { connect } from 'react-redux'
import ArticleItem from './components/article/articleitem.js'
import fetch from 'isomorphic-fetch'

const url = 'https://ancient-wave-10555.herokuapp.com'

const resource = (method, endpoint, payload) => {
  const options =  {
    method,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  if (payload) options.body = JSON.stringify(payload)

  return fetch(`${url}/${endpoint}`, options)
    .then(r => {
      if (r.status === 200) {
        return (r.headers.get('Content-Type').indexOf('json') > 0) ? r.json() : r.text()
      } else {
        // useful for debugging, but remove in production
        console.error(`${method} ${endpoint} ${r.statusText}`)
        throw new Error(r.statusText)
      }
    })
}

const login = ({success, updateArticles, updateHeadline, updateAvatar, 
  updateEmail, updateZipcode, updateFriendAvatars, updateUsername, updateDOB,
  updateFollowers }) => {
  const username = document.querySelector("#loginaccn")
  const password = document.querySelector("#loginpw")
  const box = document.querySelector("#message")
  const flag = document.querySelector("#flag")
  return resource('POST', 'login', { 
      username: username.value,
      password: password.value 
    })
    .then(r => resource('GET', 'headlines'))
    .then(r => {
      const user = r.headlines[0]
      box.innerHTML = `you are logged in as ${user.username} "${user.headline}"`
      flag.innerHTML = `Success`;
      updateHeadline(user.headline)
      updateUsername(user.username)
    })

    .then(r => resource('GET','following'))
    .then(r => {
      let followersList = {}
      for (let flw of r.following) {
        let user = {
          username: flw,
          avatar: "",
          headline: ""
        }

        const followerHeadline = resource('GET', 'headlines/' + flw)
        .then(r => {
          const follower = r.headlines[0]
          user.username = follower.username
          user.headline = follower.headline
        })

        const followerAvatar = resource('GET', 'avatars/' + flw)
        .then(r => {
          const follower = r.avatars[0]
          if (follower.username == flw) {
            user.avatar = follower.avatar
          }
        })

        Promise.all([followerHeadline, followerAvatar]).then(() => 
        followersList[user.username] = user
      )}

      updateFollowers(followersList)
    })

    .then(r => resource('GET', 'articles'))
    .then(r => r.articles)
    .then(r => {
      let articles = {}
      r.forEach((article) => {
        articles[article._id] = article
      })
      updateArticles(articles)
    })
    .then(r => resource('GET', 'avatars'))
    .then(r => {
      updateFriendAvatars(r.avatars)
      const user = r.avatars[0]
      updateAvatar(user.avatar)
    })
    .then(r => resource('GET', 'email'))
    .then(r => {
      updateEmail(r.email)
    })
    .then(r => resource('GET', 'zipcode'))
    .then(r => {
      updateZipcode(r.zipcode)
    })
    .then(r => resource('GET', 'dob'))
    .then(r => {
      var date = new Date(r.dob)
      updateDOB(date)
    })
    
    .then(r => {
      success();
    })
    .catch(r => flag.innerHTML = `"${r.message || 'Error'}" when logging in`)
}

const logout = () => {
  return resource('PUT', 'logout')
    .catch(r => console.log(`"${r.message}" when logging out`) )
}

const register = ({username1, email1, phone1, dob1, zipcode1, password1}) => {
  const username = document.querySelector("#accName")
  const email = document.querySelector("#email")
  const displayname = document.querySelector("#disName")
  const zipcode = document.querySelector("#zipcode")
  const password = document.querySelector("#password")

  const phone = document.querySelector("#phone")
  const dob = document.querySelector("#bday")

  const message = document.querySelector("#message");
  resource('POST', 'register', {
    username: username.value,
    email: email.value,
    phone: phone.value,
    dob: dob.value,
    zipcode: zipcode.value,
    password: password.value

  })
  .then(r => {
    const username = r.username
    message.innerHTML = `    Successfully registered as "${username}".`
  
  })
  .catch(r => console.log(`"${r.message}" when registering`) )
}

const toggle = (show) => {
  const toggleElement = _show => id => {
    const el = document.querySelector(id)
    if (el) {
      el.style.display = _show ? 'inline' : 'none'
    }
  }
  ['#username', '#password', '#login'].forEach(toggleElement(show));
  ['#logout', '#headline', '#newHeadline'].forEach(toggleElement(!show));
}

const updateHeadline = () => {
  const username = document.querySelector("#username")
  const password = document.querySelector("#password")
  const headline = document.querySelector("#newHeadline").value
  const message = document.querySelector("#headline")
    return resource('PUT', 'headline', { headline })
    .then((response) => {
    })
    .then(r => resource('GET', 'headlines'))
    .then(r => {
      const user = r.headlines[0]
      message.innerHTML = `${user.headline}`
    })
    .catch(r => message.innerHTML = ``)
}

const getHeadline = () => {
  const username = document.querySelector("#username")
  const password = document.querySelector("#password")
  const message = document.querySelector("#headline")

  return resource('GET', 'headlines')
    .then(r => {
      const user = r.headlines[0]
      message.innerHTML = `${user.headline}`
    })
    .catch(r => message.innerHTML = `"${r.message || 'Error'}" when getting headline`)
}

export { url, login, logout, register, updateHeadline, getHeadline, resource }
