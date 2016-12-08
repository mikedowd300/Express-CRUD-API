
exports.up = function(knex, Promise) {
  return knex.schema.createTable('beer_table', function(table){
    table.increments();
    table.string('name');
    table.float('abv');
    table.string('brewery');
    table.integer('rating');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('beer_table');
};
