var express = require('express');
const Aeroplane_controlers= require('../controllers/Aeroplane');
var router = express.Router();

const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }

router.get('/', Aeroplane_controlers.Aeroplane_view_all_Page );
router.get('/Aeroplane/:id', Aeroplane_controlers.Aeroplane_detail); 

router.get('/detail', secured,Aeroplane_controlers.Aeroplane_view_one_Page);

/* GET create Aeroplane page */
router.get('/create',secured, Aeroplane_controlers.Aeroplane_create_Page);

/* GET create Aeroplane page */
router.get('/update', secured,Aeroplane_controlers.Aeroplane_update_Page);

/* GET delete Aeroplane page */
router.get('/delete',secured, Aeroplane_controlers.Aeroplane_delete_Page);

module.exports = router;