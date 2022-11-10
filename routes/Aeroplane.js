var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Aeroplane', { title: 'Search Results Aeroplane' });
});
var express = require('express');
const Aeroplane_controlers= require('../controllers/Aeroplane');
var router = express.Router();
/* GET costumes */
router.get('/', Aeroplane_controlers.Aeroplane_view_all_Page );
module.exports = router;