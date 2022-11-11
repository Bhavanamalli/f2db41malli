var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Aeroplane_controller = require('../controllers/Aeroplane');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/Aeroplane', Aeroplane_controller.Aeroplane_create_post);
// DELETE request to delete Costume.
router.delete('/Aeroplane/:id', Aeroplane_controller.Aeroplane_delete);
// PUT request to update Costume.
router.put('/Aeroplane/:id', Aeroplane_controller.Aeroplane_update_put);
// GET request for one Aeroplane.
router.get('/Aeroplane/:id', Aeroplane_controller.Aeroplane_detail);
// GET request for list of all Aeroplane items.
router.get('/Aeroplane', Aeroplane_controller.Aeroplane_list);
module.exports = router;
// GET request for one costume. 
router.get('/Aeroplane/:id', Aeroplane_controller.Aeroplane_detail); 