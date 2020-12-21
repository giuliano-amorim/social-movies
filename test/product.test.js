const Product = require('../models/product');
const Category = require('../models/category');
const { setupDB } = require('../test-setup')

setupDB()

const data = {
    "highlight": true,
    "status": true,
    "description": "pizza com tudo dentro",
    "complete_description": "não sei todos os ingredientes",
    "price": 30,
    "discount_price": 27,
    "discount_price_percent": 10,
    "title": "Portuguesa ",
    "photo": "path/dummie"
}

test('should save a mock product', async () => {
    const category = await Category.findOne({})
    data.category = category._id
    const p = new Product( data )
    await p.save()
    expect(p).toBeTruthy()
  })
