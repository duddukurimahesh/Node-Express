
/*-----------------------------------------------------------------------
   * @ file        : index.js
   * @ description : Main module to incluse all the Routes.
   * @ author      : Duddukuri Mahesh
   * @ date        : 03/09/2018.
-----------------------------------------------------------------------*/

'use strict';

const users = require('./users');

module.exports = function(app){

   users(app);
   
}
