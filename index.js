const fs = require('fs');

// Accessing prices.json
const pricesBuffer = fs.readFileSync('./data/prices.json')
const pricesJSON = pricesBuffer.toString()
const allPrices = JSON.parse(pricesJSON);
// console.log(allPrices)

// Accessing orders.json
const ordersBuffer = fs.readFileSync('./data/orders.json')
const ordersJSON = ordersBuffer.toString()
const allOrders = JSON.parse(ordersJSON);
// console.log(allOrders)

// Accessing payments.json
const paymentsBuffer = fs.readFileSync('./data/payments.json')
const paymentsJSON = paymentsBuffer.toString()
const allPayments = JSON.parse(paymentsJSON);
// console.log(allPayments)