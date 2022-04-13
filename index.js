const express = require("express");
const hbs = require("hbs");
const wax = require("wax-on");
require("dotenv").config();

let app = express();
app.set("view engine","hbs");
app.use(express.static("public"));

//set up wax on 
wax.on(hbs.handlebars);
wax.setLayoutPath("./views/layouts");

//enable forms
app.use(
    express.urlencoded({
        extended: false
    })
)

// import in routes
const landingRoutes = require('./routes/landing');
const productRoutes = require('./routes/products');


async function main(){
    
    app.use('/', landingRoutes);
    app.use('/products', productRoutes);

}

main();

app.listen(3000, ()=>{
    console.log("server has started")
})