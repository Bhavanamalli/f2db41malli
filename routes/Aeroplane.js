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
/* GET detail Aeroplane page */
router.get('/detail', Aeroplane_controlers.Aeroplane_view_one_Page);
/* GET create Aeroplane page */
router.get('/create', Aeroplane_controlers.Aeroplane_create_Page);
/* GET create update page */
router.get('/update', Aeroplane_controlers.Aeroplane_update_Page);
/* GET delete Aeroplane page */
router.get('/delete', Aeroplane_controlers.Aeroplane_delete_Page);