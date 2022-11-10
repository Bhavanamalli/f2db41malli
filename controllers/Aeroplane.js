var Aeroplane = require('../models/Aeroplane');
// List of all Costumes
exports.Aeroplane_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Aeroplane list');
};
// for a specific Costume.
exports.Aeroplane_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Aeroplane detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.Aeroplane_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Aeroplane create POST');
};
// Handle Costume delete form on DELETE.
exports.Aeroplane_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Aeroplane delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.Aeroplane_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Aeroplane update PUT' + req.params.id);
};
// VIEWS

   // List of all Costumes
exports.Aeroplane_list = async function(req, res) {
    try{
    theAeroplane = await Aeroplane.find();
    res.send(theAeroplane);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // VIEWS
// Handle a show all view
exports.Aeroplane_view_all_Page = async function(req, res) {
    try{
    theAeroplane = await Aeroplane.find();
    res.render('Aeroplane', { title: 'Aeroplane Search Results', results: theAeroplane });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // Handle Costume create on POST.
exports.Aeroplane_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Aeroplane();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.travel_name = req.body.travel_name;
    document.travel_price = req.body.travel_price;
    document.travel_type = req.body.travel_type;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
}