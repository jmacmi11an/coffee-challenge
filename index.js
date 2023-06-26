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

let users = [];
const getUsers = () => {
    const allUsers = []
    const userPayments = allPayments.map(({user}) => allUsers.push(user)) 
    const userOrders = allOrders.map(({user}) => allUsers.push(user));
    users = allUsers.filter((user, index) => allUsers.indexOf(user) === index)
}
getUsers();
// console.log(users)

// Example getDrinkPrice('latte', 'large')
const getDrinkPrice = (drink, size) => {
    const selectedDrink = allPrices.filter(({ drink_name }) => drink_name === drink)
    return selectedDrink[0].prices[size]
}

// Example userOrderTotal('coach', getDrinkPrice)
const userOrderTotal = (userName, getDrinkPrice) => {
    const selectedUser = allOrders.filter(({user}) => user === userName)
    const total = selectedUser.reduce((acc, order) => acc + getDrinkPrice(order.drink, order.size), 0)
    return total;
}
// console.log('coach order total', userOrderTotal('coach', getDrinkPrice))

// Example userPaymentTotal('coach')
const userPaymentTotal = (userName) => {
    const selectedUser = allPayments.filter(({user}) => user === userName)
    const total = selectedUser.reduce((acc, payment) => acc + payment.amount, 0)
    return total
}
// console.log('coach payment total', userPaymentTotal('coach'))

const getUserBalance = (userName) => {
    const userBalance = {
        user: userName,
        order_total: userOrderTotal(userName, getDrinkPrice),
        payment_total: userPaymentTotal(userName),
        balance: userOrderTotal(userName, getDrinkPrice) - userPaymentTotal(userName)
    }
    return userBalance
}
// console.log(getUserBalance('coach'))
