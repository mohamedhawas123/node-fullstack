const express = require('express')
const path = require('path')

const router = express.Router()
const products = require('./admin')



router.route("/").get( (req, res) => {
    console.log(products.productss)
    // res.sendFile(path.join(__dirname, '../' ,'views', 'shop.html'))

    const productss = products.productss
   
//     res.render("shop.pug", {prods: productss,
//          docTitle: "Shop", path: "/",
//           hasProdcuct: productss.length > 0,
//           activeShop: true,
//           activeAddProduct: true
//          })
// } )

    res.render("shop.ejs", {prods: productss,
         docTitle: "Shop", path: "/",
          
         })
} )





module.exports = router