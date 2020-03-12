module.exports = () => {
var faker = require('faker');
var database = { users: [], prod: [] };
for (let i=1; i<=15; i++) {
  database.users.push({
    id: i,
    name: faker.internet.userName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    address: {
        city: faker.address.city()
    }
  });

  database.prod.push({
    id: i,
    name: faker.internet.userName()
  });
}
  // console.log(JSON.stringify(database));
  return database;
}