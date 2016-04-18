var express = require("express"),
    nano = require('nano')('http://localhost:5984'),
    app = express();

var badge = require('gh-badges');

app.get("/badge", function (req, res) {
  badge(
    {
      text: [ "build", "passed" ],
      colorscheme: "green"
    },
    function (svg, err) {
      res.send(svg);
    }
  );
});

app.get("/", function (req, res) {
  res.send("Hey buddy!");
});

app.listen(3000, function () {
  console.log('Express listening on port 3000');
});
