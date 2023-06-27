const { readFile } = require('./fileUtils');

const readJsonFile = async (filePath) => {
  const fileData = await readFile(filePath);
  return JSON.parse(fileData);
};

const getDrinkPrice = (allPrices, drink, size) => {
  const selectedDrink = allPrices.find(({ drink_name }) => drink_name === drink);
  return selectedDrink.prices[size];
};

const userOrderTotal = (allOrders, allPrices, userName, getDrinkPrice) => {
  const userOrders = allOrders.filter(({ user }) => user === userName);
  const total = userOrders.reduce(
    (acc, order) => acc + getDrinkPrice(allPrices, order.drink, order.size),
    0
  );
  return total;
};

const userPaymentTotal = (allPayments, userName) => {
  const userPayments = allPayments.filter(({ user }) => user === userName);
  const total = userPayments.reduce((acc, payment) => acc + payment.amount, 0);
  return total;
};

const getUserBalance = (allOrders, allPayments, allPrices, userName) => {
    const orderTotal = userOrderTotal(allOrders, allPrices, userName, getDrinkPrice);
    const paymentTotal = userPaymentTotal(allPayments, userName);
    const balance = orderTotal - paymentTotal;
  
    return {
      user: userName,
      order_total: Number(orderTotal.toFixed(2)),
      payment_total: Number(paymentTotal.toFixed(2)),
      balance: Number(balance.toFixed(2)),
    };
  };

module.exports 
= {
  readJsonFile,
  getDrinkPrice,
  userOrderTotal,
  userPaymentTotal,
  getUserBalance,
};