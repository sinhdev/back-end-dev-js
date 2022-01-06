let Parser = require('rss-parser');
let parser = new Parser();

(async () => {

  let feed = await parser.parseURL('http://www.tinhte.vn/rss');
  console.log(feed.title);

  feed.items.forEach(item => {
    console.log(item.title + ':' + item.link)
  });

})();