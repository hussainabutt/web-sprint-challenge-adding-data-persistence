
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'project1',
         description:"take out trash",
        completed:false},
        
        {name: 'project2',
        description:"brush teeth",
        completed:false},
        
        {name: 'project3',
        description:"learn programming",
        completed:false}
      ]);
    });
};
