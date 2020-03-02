const express = require("express");
const router = express.Router();
const csv = require("./csv_files");
// console.log(fileNames);
fileNames = csv.getFiles();
router.get("/", (req, res) => {
  res.render("index");
});

router.get("/displayfile", (req, res) => {
  res.render("displayfile", {
    fileNames: fileNames
  });
});

router.post("/displayfile", (req, res) => {
  res.render("displayCSV", {
    csv_data: csv.getDataCSV(req.body.fileName)
  });
});

module.exports = router;
