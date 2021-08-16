var express = require("express");
var router = express.Router();
var request = require("sync-request");
const helpers = require("../helpers/dataFormatters");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/all", async function (req, res, next) {
  console.log("req.query", req.query); //DEBUG
  const datasets = req.query.datasets.split(",")
  console.log("datasets", datasets); //DEBUG
  const allDataRaw = await request(
    "GET",
    "https://opendata.paris.fr/api/records/1.0/search/?dataset=respirons-mieux-dans-le-20eme-donnees-mini-stations&q=&lang=fr&rows=100&start=386&facet=date_time"
  );
  allData = JSON.parse(allDataRaw.getBody());
  const dataByDayByPlace = helpers.sortDataByDateByPlace(allData.records, datasets);
  // console.log(dataByDayByPlace);
  res.json(dataByDayByPlace);
});

module.exports = router;
