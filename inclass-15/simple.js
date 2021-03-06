var http = require('http')

var host = '127.0.0.1'
var port = 3333

http.createServer(preprocess).listen(port, host)
console.log('Server running at http://' + host + ':' + port)


// Middle, sitting in between the request and the function that processes the request
function preprocess(req, res) {
     var body = ''
     req.on('data', function(chunk) {
          body += chunk
     })
     req.on('end', function() {
          req.body = body
          server(req, res)
     })
}

function server(req, res) {
     console.log('Request method        :', req.method)
     console.log('Request URL           :', req.url)
     console.log('Request content-type  :', req.headers['content-type'])
     console.log('Request payload       :', req.body)

     // var payload = { 'hello': 'world' }
     // res.setHeader('Content-Type', 'application/json')
     // res.statusCode = 200
     // res.end(JSON.stringify(payload))


     if (req.method == "GET") {
          if (req.url == "/") {
               var payload = { 'hello': 'world' }
               res.setHeader('Content-Type', 'application/json')
               res.statusCode = 200
               res.end(JSON.stringify(payload))      
          }
          if (req.url == "/articles") {
               var payload = { articles: 
                    [ { id:1, author: 'Scott', body:'A post' },
                      { id:2, author: 'Mike', body:'Another post' },
                      { id:3, author: 'Greca', body:'Final post' }]};
               res.setHeader('Content-Type', 'application/json')
               res.statusCode = 200
               res.end(JSON.stringify(payload))      
          }
          else {
               // Don't have anything here...
          }
     }

     if (req.method == "POST") {
          if (req.url == "/login") {
               var payload = req.body + " result: success}";
               res.setHeader('Content-Type', 'application/json')
               res.statusCode = 200
               res.end(JSON.stringify(payload))      
          }
     }

     if (req.method == "PUT") {
          if (req.url == "/logout") {
               var payload = "OK";
               res.setHeader('Content-Type', 'application/json')
               res.statusCode = 200
               res.end(JSON.stringify(payload))      
          }
     }


}

// articles => /articles
// Login => /login -H "Content-Type: application/json" -d {"username":"wel1", "password":"foo"}

// Logout => /logout -X PUT
