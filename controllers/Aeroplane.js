var Aeroplane = require('../models/Aeroplane');
// List of all Aeroplanes
exports.Aeroplane_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Aeroplane list');
};
// for a specific Aeroplane. 
exports.Aeroplane_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Aeroplane.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
// Handle Aeroplane create on POST.
exports.Aeroplane_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Aeroplane create POST');
};
// Handle Aeroplane delete form on DELETE.
exports.Aeroplane_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Aeroplane delete DELETE ' + req.params.id);
};
// Handle Aeroplane update form on PUT.
exports.Aeroplane_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Aeroplane update PUT' + req.params.id);
};
//Handle Aeroplane update form on PUT. 
exports.Aeroplane_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Aeroplane.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.travel_name)  
               toUpdate.travel_name = req.body.travel_name; 
        if(req.body.travel_price) toUpdate.travel_price = req.body.travel_price; 
        if(req.body.travel_type) toUpdate.travel_type = req.body.travel_type; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 
// VIEWS

   // List of all Aeroplanes
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
   // Handle Aeroplane create on POST.
exports.Aeroplane_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Aeroplane();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Aeroplane_type":"goat", "cost":12, "size":"large"}
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