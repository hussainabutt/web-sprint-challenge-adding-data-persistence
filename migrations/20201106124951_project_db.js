
exports.up = function(knex) {
  return knex.schema 
  .createTable("projects", tbl =>{
      tbl.increments("id"); 
      tbl
      .string("name")
      .unique()
      .notNullable();
      tbl.string("description")
      tbl.boolean("completed").defaultTo(false)    
  })
  .createTable("resources", tbl =>{
      tbl.increments("id");
      tbl
      .string("name")
      .notNullable()
      .unique();
      tbl.string("description");
  })
  .createTable("tasks", tbl => {
      tbl.increments("id");
      tbl.string("description").notNullable();
      tbl.string("notes");
      tbl.boolean("completed").defaultTo("false")
      tbl
      .integer("projectId")
      .notNullable()
      .unsigned()
      .references("id").inTable("projects")
      .onUpdate("CASCADE").onDelete("CASCADE");
  })
  .createTable("projectResource", tbl =>{
      tbl
      .integer("projectId")
      .unsigned()
      .notNullable()
      .references("id").inTable("projects")
      .onUpdate("CASCADE").onDelete("CASCADE");
      tbl
      .integer("resourceId")
      .unsigned()
      .notNullable()
      .references("id").inTable("resources")
      .onDelete("CASCADE").onUpdate("CASCADE")
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("projectResource")
  .dropTableIfExists("tasks")
  .dropTableIfExists("resources")
  .dropTableIfExists("projects")
};
