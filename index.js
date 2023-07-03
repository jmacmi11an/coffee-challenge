const { readJsonFile, getUserBalance } = require('./dataProcessor');

const processData = async () => {
  const allPayments = await readJsonFile('./data/payments.json');
  const allOrders = await readJsonFile('./data/orders.json');
  const allPrices = await readJsonFile('./data/prices.json');

  const users = [...new Set([...allPayments.map(({ user }) => user), ...allOrders.map(({ user }) => user)])];
 
  const balances = users.map((user) => getUserBalance(allOrders, allPayments, allPrices, user));
  return balances
};

processData().then((result) => {
  console.log(result)
}).catch((err) => {
  console.error(err)
});
