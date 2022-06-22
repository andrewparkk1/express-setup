const express = require("express")
const app = express()

//GLOBAL logger is run before every single other request
//needs to be declared before the routes
app.use(logger)

//routes
app.get('/', (req, res) => {
    console.log('home')
    res.send('home page')
})

app.get('/users', auth, (req, res) => {
    console.log("the req.admin is == " + req.admin)
    console.log('users')
    res.send("user page")
})


// middleware
function logger(req, res, next) {
    console.log(req.originalUrl)
    console.log('before')
    next()
    console.log('after')
}

function auth(req, res, next) {
    if (req.query.admin === 'true') {
        req.admin = true
        console.log('auth')
        next()
    } else {
        res.send("no auth")
    }
}

app.listen(3000)