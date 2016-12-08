
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('beer_table').del()
    .then(function () {
        var beers = [
        {
          name: 'Fat Tire',
          abv: 4.9,
          brewery: 'New Belgium',
          rating: 5
        },
        {
          name: 'Coors Light',
          abv: 3.9,
          brewery: 'Coors',
          rating: 1
        },
        {
          name: '90 Shilling',
          abv: 3.9,
          brewery: 'O Dells',
          rating: 4
        },
        {
          name: 'My Brew',
          abv: 9.9,
          brewery: 'Mike Brewing',
          rating: 10
        },
        {
          name: 'Coors Original',
          abv: 3.9,
          brewery: 'Coors',
          rating: 4
        },
        {
          name: 'Bud',
          abv: 3.9,
          brewery: 'Budweiser',
          rating: 1
        }
      ];
      return knex('beer_table').insert(beers);
    });

};
