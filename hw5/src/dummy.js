import { connect } from 'react-redux'
import ArticleItem from './components/article/articleitem.js'

const url = 'https://webdev-dummy.herokuapp.com'

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


const signUp = ({success}) => {
  console.log("sign up");

}


const login = ({success}) => {
  console.log(success)
  // alert("login!!!")
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
      flag.innerHTML = `Success`
      // toggle(false)
      success();
    })
    .catch(r => flag.innerHTML = `"${r.message || 'Error'}" when logging in`)
}

const logout = () => {
  // const box = document.querySelector("#message")
  return resource('PUT', 'logout')
    .then(r => console.log("You have logged out") )
    // .then(_ => toggle(true))
    .catch(r => console.log(`"${r.message}" when logging out`) )
}

const register = () => {
  console.log("register");

  const username = document.querySelector("#accName")
  const email = document.querySelector("#email")
  const displayname = document.querySelector("#disName")
  const zipcode = document.querySelector("#zipcode")
  const password = document.querySelector("#password")

  const phone = document.querySelector("#phone")
  const dob = document.querySelector("#bday")

  const message = document.querySelector("#message");
  return resource('POST', 'register', {
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
    console.log(r);
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
  console.log("UPDATING HEADLINE")
  const username = document.querySelector("#username")
  const password = document.querySelector("#password")
  const headline = document.querySelector("#newHeadline").value

  const message = document.querySelector("#headline")
    return resource('PUT', 'headline', { headline })
    .then((response) => {
    console.log(`New headline ${response.headline}`)    // IMPLEMENT ME
    // Update the headline shown on the screen.  Be sure to not
    // repeat yourself (DRY) => you will want to refactor some code.
    })
    .then(r => resource('GET', 'headlines'))
    .then(r => {
      const user = r.headlines[0]
      message.innerHTML = `${user.headline}`
      // toggle(false)
      // dispatch({ type: 'NAVIGATION', location: 'MAIN'})
    })
    .catch(r => message.innerHTML = ``)
}

const getHeadline = () => {
  const username = document.querySelector("#username")
  const password = document.querySelector("#password")
  console.log("username: " + username)
  console.log("pw: " + password)
  const message = document.querySelector("#headline")

  return resource('GET', 'headlines')
    .then(r => {
      const user = r.headlines[0]
      message.innerHTML = `${user.headline}`
      // toggle(false)
      // dispatch({ type: 'NAVIGATION', location: 'MAIN'})
    })
    .catch(r => message.innerHTML = `"${r.message || 'Error'}" when getting headline`)
}


const getArticles = (word) => {

  return resource('GET', 'articles')
  .then((response) => {
    // console.log(response.articles)
    var list = response.articles;
    var word = "sep1"
    var newList = [];
    // response.articles.filter(filterArticles/s)
    for (var article of response.articles) {
      if (article.author.includes(word)) {
        newList.push(article)
      }
      else if (article.text.includes(word)) {
        newList.push(article)
      }
    }
    // console.log(newList)
    var articleParent = document.querySelector("#articlesHere")
    // console.log(articleParent)
    // for (var article of list) {
    //   var node = (<ArticleItem author={article.author} date={article.date} id={article._id} text={article.text} />)
    //   console.log(node);
    //   articleParent.appendChild(node)    
    // }
    return (list)
    // console.log(list)
    // console.log(list.filter(filterArticles))
    // var filteredList = list.filter(filterArticles);
    // console.log("filteredList")
    // console.log(filteredList)
    // return filteredList;
  })
  .catch(r => console.log('getArticles error'))
}

function filterArticles(reponse) {
  var word = "sep1";

  console.log('filtering articles!')
  console.log(reponse)
  console.log("=============")
  console.log(`${response.author}`)
  console.log(response.text())
  console.log("=============")
  if (response.author.includes(word)) {
    console.log(">>>>>>>>author contains ", word)
    return true;
  }
  if (response.text.includes(word)) {
    console.log(">>>>>>>>text contains ", word)
    return true;
  }
}



// connect(null, (dispatch) => {
//   return { 
//     success: () => {
//       console.log("SUCCESS")
//       dispatch({ type: "NAVIGATION", location: "MAIN"})
//     }
//   }
// })

export { url, login, logout, register, updateHeadline, getHeadline, 
    getArticles}
