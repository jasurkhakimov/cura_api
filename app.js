const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


const db = require("./models/index.js");

db.sequelize.sync();

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});

require("./routes/v1/branches.route")(app);
require("./routes/v1/deps.route")(app);
require("./routes/v1/roles.route")(app);
require("./routes/v1/posts.route")(app);
require("./routes/v1/profiles.route")(app);
require("./routes/v1/roletypes.route")(app);
require("./routes/v1/deptypes.route")(app)

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});