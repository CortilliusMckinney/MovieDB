const MovieController = require("../controllers/movies.controllers"); //Imports controller

module.exports = (app) => {
  app.get("/api/getAllMovies", MovieController.getAllMovies);
  app.post("/api/createMovie", MovieController.createMovie);
  app.get("/api/getOneMovie/:id", MovieController.getOneMovie);
  app.delete("/api/deleteMovie/:id", MovieController.DeleteMovie);
  app.put("/api/UpdateOneMovie/:id", MovieController.UpdateMovie);
};
