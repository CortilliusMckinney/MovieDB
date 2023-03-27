const Movie = require("../models/movie.model");

module.exports.getAllMovies = (req, res) => {
  Movie.find()
    .then((allMovies) => {
      console.log(allMovies);
      res.json({ movies: allMovies });
    })
    .catch((err) => {
      res.json({ message: "No Movie Was Retreived", error: err });
    });
};

module.exports.createMovie = (req, res) => {
  console.log(req.body); //Debug console.log
 Movie.create(req.body)
    .then((addOneMovie) => {
      res.json({ Movie: addOneMovie });
    })
    .catch((err) => {
      res.json({ message: "No Movie Was Added", error: err });
    });
};

module.exports.getOneMovie = (req, res) => {
  console.log(req.body); //Debug console.log
  Movie.findOne({ _id: req.params.id })
    .then((e) => res.json(e))
    .catch((err) => {
      res.json({ message: "No Movie Was found", error: err });
    });
};

module.exports.DeleteMovie = (req, res) => {
  console.log(req.body); //Debug console.log
  console.log("new paramsID", req.params.id);
  Movie.deleteOne({ _id: req.params.id })
    .then((e) => res.json(e))
    .catch((err) => {
      res.json({ message: "No Movie Was deleted", error: err });
    });
};

module.exports.UpdateMovie = (req, res) => {
  console.log(req.body); //Debug console.log
  console.log("update paramsID", req.params.id);
  Movie.findOneAndUpdate({ _id: req.params.id },req.body, {
    new: true,
    runValidators: true,
  })
    .then((e) => res.json(e))
    .catch((err) => {
      res.json({ message: "No Movie Was Updated", error: err });
    });
};
