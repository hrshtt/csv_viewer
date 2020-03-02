const express = require("express");
const router = express.Router();
const csv = require("./csv_files");
// console.log(fileNames);
fileNames = csv.getFiles();

router.get("/", (req, res) => {
  res.render("index");
});

var csv_data;
var keys;
router
  .route("/displayfile")
  .get((req, res) => {
    res.render("displayfile", {
      fileNames: fileNames
    });
  })
  .post((req, res) => {
    csv_data = csv.getDataCSV(req.body.fileName);
    keys = Object.keys(csv_data[0]);
    // console.log(Object.keys(csv_data[0]));

    res
      .status(301)
      .location("/displayCSV")
      .end();
  });

router
  .route("/displayCSV")
  .get((req, res) => {
    res.render("displayCSV", {
      csv_data: csv_data,
      keys: keys
    });
  })
  .post((req, res) => {
    res.render("displayCSV", {
      csv_data: csv_data,
      keys: req.body.new_key
    });
    console.log(typeof req.body.new_key);
  });

module.exports = router;
