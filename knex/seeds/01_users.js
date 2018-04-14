exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { email: "donkeykong@gmail.com", password: "bananas" },
        { email: "mariobros@aol.com", password: "luigi" },
        { email: "hamburglar@yahoo.com", password: "boogers" }
      ]);
    });
};
