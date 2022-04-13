const express = require("express");
const router = express.Router();

// #1 import in the Product model
const {Product} = require('../models')

// import in the Forms
const { bootstrapField, createProductForm } = require('../forms');

router.get('/', async (req,res)=>{
    // #2 - fetch all the products (ie, SELECT * from products)
    let products = await Product.collection().fetch();
    res.render('products/index.hbs', {
        'products': products.toJSON() // #3 - convert collection to JSON
    })
})

router.get('/create', async (req, res) => {
    const productForm = createProductForm();
    res.render('products/create.hbs',{
        'form': productForm.toHTML(bootstrapField)
    })
})

router.post('/create', async(req,res)=>{
    const productForm = createProductForm();
    productForm.handle(req, {
        'success': async (form) => {
            const product = new Product();
            product.set('title', form.data.title);
            product.set('cost', form.data.cost);
            product.set('description', form.data.description);
            product.set('stock', form.data.stock);
            product.set('height', form.data.height);
            product.set('width', form.data.width);
            await product.save();
            res.redirect('/products');
        },
        'error': async (form) => {
            res.render('products/create.hbs', {
                'form': form.toHTML(bootstrapField)
            })
        }

    })
})

module.exports = router;