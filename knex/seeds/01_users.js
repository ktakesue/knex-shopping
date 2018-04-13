exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { id: 1, email: "donkeykong@gmail.com", password: "bananas" },
        { id: 2, email: "mariobros@aol.com", password: "luigi" },
        { id: 3, email: "hamburglar@yahoo.com", password: "boogers" }
      ]);
    });
};
