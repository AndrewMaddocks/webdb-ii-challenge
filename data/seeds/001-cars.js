exports.seed = function(knex) {
  return knex("cars")
    .truncate() //sets back to 0
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          vin: "1GNEK13ZX3R298984",
          make: "Ford",
          model: "Ranger",
          mileage: 100569,
          Transmission: "Automatic",
          Status_Of_Title: "clean"
        },
        {
          vin: "2GNEK13ZX3R298984",
          make: "Honda",
          model: "Civic",
          mileage: 80205,
          Transmission: "Automatic",
          Status_Of_Title: "clean"
        },
        {
          vin: "3GNEK13ZX3R298984",
          make: "Tesla",
          model: "Model X",
          mileage: 2000,
          Transmission: "Automatic",
          Status_Of_Title: "clean"
        }
      ]);
    });
};
