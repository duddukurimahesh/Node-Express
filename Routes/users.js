
/*-----------------------------------------------------------------------
   * @ file        : users.js
   * @ description : Here defines all users routes.
   * @ author      : Duddukuri Mahesh
   * @ date        : 03/09/2018.
-----------------------------------------------------------------------*/

'use strict';

// Include internal and external modules.
const Joi   = require('joi');

const Controllers = require('../Controllers');
const Utils       = require('../Utils');

module.exports = function(app) {


    // Add Transaction Details w.r.t the user.
    app.post('/v1/Users/addTransaction',(request, reply)=>{

        // Request Object validation schema.
        const schema = {
            name        : Joi.string().required(),
            phone       : Joi.string().required(),
            address     : Joi.string().required(),
            transaction : Joi.object().keys({
                product: Joi.object().keys({
                    name: Joi.string().alphanum().min(3).max(30).required(),
                    unit_price: Joi.number().integer().min(1).required(),
                    description: Joi.string().required(),
                    quantity: Joi.number().integer().min(1).required()
                })
            })
        }
        const { error } = Joi.validate(request.body, schema);
        if(error) return reply.status(400).send(error.details[0].message);

        Controllers.users.addTransaction(request.body, (err, res) => reply.send(err || res))
    })

    // List Users.
    app.get('/v1/Users/usersList', function(request, reply){
       
        Controllers.users.usersList((err, res) => reply.send(err || res))
    });
    
}
