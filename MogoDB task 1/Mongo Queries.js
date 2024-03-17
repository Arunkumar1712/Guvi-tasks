//  Find all the information about each product:
    db.products.find({});

// Find the product price which are between 400 to 800:
db.products.find({ product_price: { $gte: 400, $lte: 800 } });

// Find the product price which are not between 400 to 600:
db.products.find({ $or: [ { product_price: { $lt: 400 } }, { product_price: { $gt: 600 } } ] });

// List the four products which are greater than 500 in price:
db.products.find({ product_price: { $gt: 500 } }).limit(4);

// Find the product name and product material of each product:
db.products.find({}, { product_name: 1, product_material: 1, _id: 0 });

// Find the product with a row id of 10:
db.products.findOne({ id: "10" });

// Find only the product name and product material:
db.products.find({}, { product_name: 1, product_material: 1, _id: 0 });

// Find all products which contain the value 'soft' in product material:
db.products.find({ product_material: { $regex: /soft/i } });

// Find products which contain product color 'indigo' and product price 492.00:

db.products.find({ product_color: "indigo", product_price: 492.00 });

// Delete the products which have the same product price value:
db.product.aggregate([{ $group: { _id: "$product_price", count: { $sum: 1 } } },{ $match: { count: { $gt: 1 } } },]).forEach((doc) => {db.product.deleteMany({ product_price: doc._id });});


