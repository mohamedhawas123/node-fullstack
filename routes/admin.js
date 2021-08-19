const express = require('express')
const path = require('path')



const router = express.Router()

const products =[]

router.route("/add-product").get( (req,res, next) => {

    // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
    res.render("add-product.pug", {path: '/add-product'})

} ).post((req, res, next) => {
    products.push({title: req.body.title})
    console.log(req.body)
    res.redirect("/")
})


exports.routes = router
exports.productss = products