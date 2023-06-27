const { readJsonFile, getUserBalance } = require('./dataProcessor');

const processData = async () => {
  const allPayments = await readJsonFile('./data/payments.json');
  const allOrders = await readJsonFile('./data/orders.json');
  const allPrices = await readJsonFile('./data/prices.json');

  let users = [];
  const getUsers = () => {
    const allUsers = [...new Set([...allPayments.map(({ user }) => user), ...allOrders.map(({ user }) => user)])];
    users = allUsers;
  };
  getUsers();

  const balances = users.map((user) => getUserBalance(allOrders, allPayments, allPrices, user));
  console.log(balances);
};

processData();