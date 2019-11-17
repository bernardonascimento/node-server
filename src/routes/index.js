const express = require('express');
var fs = require('fs');
const router = express.Router();

router.get('/', (req, res, next) => {
  fs.readFile(__dirname + "/../dist/index.html", function(err, data) {
    res.end(data);
  });
});

module.exports = router;