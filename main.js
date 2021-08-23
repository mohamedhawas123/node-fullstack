const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const admin = require('./routes/admin')
const shop  = require('./routes/shop')
const expressHbs = require('express-handlebars')

const app = express()

// app.set('view engine', 'pug');
// app.set('views', 'views' )



// app.engine('handlebars', expressHbs({layoutsDir: 'views/laylout/', defaultLayout: 'main-layout', extname: 'handlebars'}))


// app.set('view engine', 'handlebars');
// app.set('views', 'views' )


app.set('view engine', 'ejs');
app.set('views', 'views' )


app.use(bodyParser.urlencoded({
    extended: true
  }));




app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')))
var bb = require('express-busboy');
bb.extend(app);

app.use("/", admin.routes)
app.use("/", shop)

app.use( (req, res, next) => {
    res.render("404")
} )

app.listen(3000, console.log("RUnning right now "))




// app.use("/add-product", (req, res, next) => {

//     res.send('<form action="/product" method="POST" ><input type="text" name="title" /><button type="submit">Click me</button></form>')
// })


// app.post("/product", (req, res) => {
//     console.log(req.body)
//     res.redirect('/')
// })


// app.get("/data", (req, res)=> {
//     res.json({"hey": "bey"})
// })

// app.get("/", (req, res) => {
//     res.send('<h1>YEAH ?</h1>')
// })
