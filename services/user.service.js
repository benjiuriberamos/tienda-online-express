const faker = require('faker');
const boom = require('@hapi/boom');
const { sequelize } = require('../libs/sequelize');

class UserService {

  constructor() {
    this.products = [];
  }

  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  }

  async find() {
    const [data] = await sequelize.query('select * from task')
    return data;
  }

  async find2 () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products);
      }, 5000)
    })
  }

  async findOne(id) {
    const product = this.products.find(item => item.id === id);
    if (!product) {
      throw boom.notFound('Product not found')
    }
    if (product.isBlock) {
      throw boom.conflict('Product is blocked')
    }
    return product;
  }

  async update(id, changes) {
    const index = this.products.findIndex(item => item.id == id)
    if (index === -1 ) {
      throw boom.notFound('Product not found')
    }
    const product = this.products[index]
    this.products[index] = {
      ...product,
      ...changes,
    };
    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1 ) {
      throw boom.notFound('Product not found')
    }
    this.products.pop(index);
    return { id };
  }
}

module.exports = UserService;
