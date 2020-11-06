
exports.up = function(knex) {
  return knex.schema 
  .createTable("projects", tbl =>{
      tbl.increments("id"); 
      tbl
      .string("name")
      .unique()
      .notNullable();
      tbl.string("description")
          
      
  })
};

exports.down = function(knex) {
  
};
