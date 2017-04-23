const uuid = require('uuid');

// this module provides volatile storage, using a `Recipes` model. 


function StorageException(message) {
   this.message = message;
   this.name = "StorageException";
}

const Recipes = {
  create: function(name, ingredients) {
    console.log('Creating a new recipe item');
    const item = {
      name: name,
      id: uuid.v4(),
      ingredients: ingredients
    };
    this.items[item.id] = item;
    return item;
  },
  get: function() {
    console.log('Retrieving the list of recipes');
    return Object.keys(this.items).map(key => this.items[key]);
  },
  delete: function(Itemid) {
    console.log(`Deleting a recipe \`${Itemid}\``);
    delete this.items[id];
  },
  update: function(updatedItem) {
    console.log(`Deleting a recipe with id \`${updatedItem.id}\``);
    const {id} = updatedItem;
    if (!(id in this.items)) {
      throw StorageException(
        `Can't update item \`${id}\` because doesn't exist.`)
    }
    this.items[updatedItem.id] = updatedItem;
    return updatedItem;
  }
};



function createRecipes() {
  const storage = Object.create(Recipes);
  storage.items = {};
  return storage;
}

module.exports = {
  Recipes: createRecipes()
};
