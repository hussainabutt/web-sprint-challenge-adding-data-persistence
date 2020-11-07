
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'resource 1',description:"something helpful 1"},
        {name: 'resource 2',description:"something helpful 2"},
        {name: 'resource 3',description:"something helpful 3"}
      ])
    })
};
