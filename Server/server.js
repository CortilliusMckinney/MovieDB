const express = require("express");
const app = express();
const cors = require('cors')
const port = 8000;

//require the config file
require("./config/mongoose.config");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    cors({
      origin: 'http://localhost:3000',
    })
  );

//import routes
require("./routes/movie.route")(app);


app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
