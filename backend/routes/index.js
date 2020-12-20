var express = require("express");
var router = express.Router();

const filter = require('./utils/filter');

const questions = [
  "There is no display on the monitor, what do I do now?",
  "I get a 'no signal input' message on my monitor, what do I do?",
  "The wheel on my mouse isn't working properly, what do I do?",
  "What are the lengths of my trim?",
  "Do your products run true to size?",
  "Why is the letter I used to represent current?",
  "Are 'time period' and 'time constant' the same thing?",
  "What is the difference between organic and other kinds of farming?",
  "How can a local certification body receive recognition in international markets, thus providing market access for local exporters?",
  "What are the rules for labeling of organic products in main international markets?",
  "How can I become eligible for labeling my product 'organic' in Japan?"
]

const category = "clothes";

router.get("/", function (req, res, next) {

  // Standard Filter
  filter.standardFilter(questions, category).then((filteredData) => {
    console.log("Standard Filter results");
    console.log(filteredData);
    console.log('\n');
  });


  // Advanced Filter (May consume more time for search results than the Standard Filter)
  filter.advancedFilter(questions, category).then((filteredData) => {
    console.log("Advanced Filter results");
    console.log(filteredData);
    console.log('\n');
  });

  /* GET home page. */

});

module.exports = router;
