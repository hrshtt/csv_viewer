const fs = require("fs");
const csv = require("csv-parser-sync-plus-promise");

const directoryPath = "./csv_files/";

const getFiles = () => {
  return fs.readdirSync(directoryPath);
};

const getDataCSV = fileName => {
  let csv_data = csv.readCsvSync(directoryPath + fileName);
  return csv_data;
};

module.exports.getFiles = getFiles;

module.exports.getDataCSV = getDataCSV;
