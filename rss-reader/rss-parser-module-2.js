let Parser = require('rss-parser');
let parser = new Parser();

parser.parseURL('https://covid19.gov.vn/rss')
  .then(feed => {
    feed.items.forEach(item => {
      console.log(item.title + ':' + item.link)
    });
  }).catch(err => console.log(err));