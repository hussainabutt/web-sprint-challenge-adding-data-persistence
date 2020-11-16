
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {description: 'something important 1', notes: "an important note 1", completed:false, projectId:1},
        {description: 'something important 2', notes: "an important note 2", completed:false, projectId:2},
        {description: 'something important 3', notes: "an important note 3", completed:false, projectId:3}
      ]);
    });
};
