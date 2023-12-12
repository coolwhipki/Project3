let express = require("express");

let app = require("express");

// random route to landing page
app.get("/", (req, res) => {
    res.render('index');
});
app.listen(3000, () => console.log("Hey babbyy server is runnin sweet thang"))