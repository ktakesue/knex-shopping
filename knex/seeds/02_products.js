exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("products")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("products").insert([
        {
          title: "cheese",
          description: "cheesy goodness",
          inventory: 8,
          price: 3.0
        },
        {
          title: "tomatoes",
          description: "red crunchy juicy things",
          inventory: 3,
          price: 5.5
        },
        {
          title: "balloons",
          description: "helium is so much fun",
          inventory: 69,
          price: 6.69
        }
      ]);
    });
};
