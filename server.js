
/*-----------------------------------------------------------------------
   * @ file        : server.js
   * @ description : Here defines all users routes.
   * @ author      : Duddukuri Mahesh
   * @ date        : 03/09/2018.
-----------------------------------------------------------------------*/

'use strict';

/*--------------------------------------------
    * Include internal and external modules.
---------------------------------------------*/
const express  = require('express');
const app      = express();
const routes   = require('./Routes');
const mongoose = require('mongoose');


// To parse the request data.
app.use(express.json());

// To serve static files.
//app.use('/', express.static('client'));

// Routes configuration.
routes(app);

// Creating the env variable.
const port = process.env.PORT || 9010;

// Starting Node server.
app.listen(port, ()=> console.log(`Server listening on port ${port}....`))


// DB Settings.
const Db_Options = {
    db     : { useNewUrlParser: true },
    server : { poolSize: 5 },
    user   : "",
    pass   : ""
};

// DB Url String.
const mongoUrl = 'mongodb://127.0.0.1:27017/taskDb';

mongoose.Promise = global.Promise;
//Connecting DB through Mongoose.
mongoose.connect(mongoUrl,Db_Options,function(err) {
    if (err) {
        console.log('\x1b[31m',"DB Error: "+ err);
        process.exit(1);
    } else{
        console.log('\x1b[32m','MongoDB Connected :'+ mongoUrl);
    }
});
