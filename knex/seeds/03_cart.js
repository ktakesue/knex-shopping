exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("cart")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("cart").insert([
        { id: 1, user_id: 1, product_id: 3 },
        { id: 2, user_id: 2, product_id: 2 },
        { id: 3, user_id: 3, product_id: 1 }
      ]);
    });
};
