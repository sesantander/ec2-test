const fetch = require('node-fetch');	
// TypeORM Sequelize
// SQL
// https://www.hackerrank.com/domains/sql?filters%5Bsubdomains%5D%5B%5D=select
// 

// NoSQL Mongoose

const Orders = require('./models/user');

module.exports = class PokemonService {
   async get(params) {
    const apiResponse = await fetch(
      'https://pokeapi.co/api/v2/pokemon/ditto' 
    )
    const apiResponseJson = await apiResponse.json()

    Orders.getAll({
      where: {
        name: body.name
      }
    },{
      logging: true
    })

    // SELECT * FROM ORDERS WHERE NAME = ' '

    return { data: apiResponseJson };
  }

  async post(body) {
    const apiResponse = await fetch('https://pokeapi.co/api/v2/pokemon')

    const apiResponseJson = await apiResponse.json();

    Orders.create({
     ...body
    })

    return { data: apiResponseJson };
  }
}