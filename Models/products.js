
/*-----------------------------------------------------------------------
   * @ file        : products.js
   * @ description : Here defines products schema.
   * @ author      : Duddukuri Mahesh
   * @ date        : 03/09/2018.
-----------------------------------------------------------------------*/

// Require modules.
const Mongoose = require ('mongoose');
const Schema   = Mongoose.Schema;

Mongoose.set('debug', true); // console mongo queries in dev mode.
  
// Product Schem.
let ProductSchema = new Schema({

  name        : { type: String, required: true, unique : true, index: true},
  unit_price  : { type: Number },
  description : { type: String }

});

let product = Mongoose.model ('product', ProductSchema);
module.exports = product;
