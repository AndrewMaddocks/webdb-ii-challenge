exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();

    tbl.string("VIN").unique();

    tbl
      .string("Make", 255)
      .notNullable()
      .index();

    tbl
      .string("Model", 255)
      .notNullable()
      .index();

    tbl.integer("Mileage").notNullable();

    tbl.string("Transmission");

    tbl.string("Status_Of_Title");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
