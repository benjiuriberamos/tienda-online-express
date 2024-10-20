const faker = require('faker');
const boom = require('@hapi/boom')

class CategoryService {

  constructor() {
    this.categories = [];
    this.generate()
  }

  async generate() {
    for (let index = 0; index < 3; index++) {
      this.categories.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.department(),
        image: faker.image.imageUrl(),
      });
    }
  }

  async create(data) {
    const newCategory = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.categories.push(newCategory);
    return newCategory;
  }

  async find() {
    return this.categories;
  }

  async find2 () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.categories);
      }, 5000)
    })
  }

  async findOne(id) {
    const category = this.categories.find(item => item.id === id);
    if (!category) {
      throw boom.notFound('Product not found')
    }
    if (category.isBlock) {
      throw boom.conflict('Product is blocked')
    }
    return category;
  }

  async update(id, changes) {
    const index = this.categories.findIndex(item => item.id == id)
    if (index === -1 ) {
      throw boom.notFound('Product not found')
    }
    const category = this.categories[index]
    this.categories[index] = {
      ...category,
      ...changes,
    };
    return this.categories[index];
  }

  async delete(id) {
    const index = this.categories.findIndex(item => item.id === id);
    if (index === -1 ) {
      throw boom.notFound('Product not found')
    }
    this.categories.pop(index);
    return { id };
  }
}

module.exports = CategoryService;
