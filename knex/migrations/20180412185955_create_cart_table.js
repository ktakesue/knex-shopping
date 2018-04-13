exports.up = function(knex, Promise) {
  return knex.schema.createTable("cart", table => {
    table.increments();
    table
      .integer("user_id")
      .references("id")
      .inTable("users")
      .onDelete("cascade");
    table
      .integer("product_id")
      .references("id")
      .inTable("products")
      .onDelete("cascade");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("cart");
};
