const fs = require('fs');
const readline = require('readline');


const readKeywords = async (category) => {
  const filePath = './routes/keywords/' + category.toLowerCase() + '.txt';
  const fileStream = fs.createReadStream(filePath);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  var keywords = [];

  for await (const line of rl) {
    if (line.length) {
      keywords.push(line.trim().replace(/[^a-zA-Z ]/g, '').toUpperCase());
    }
  }

  return keywords;
}


module.exports = { readKeywords };