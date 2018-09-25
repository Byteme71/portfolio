const db = require("../models");

// Defining methods for the contactController

module.exports = {
  
    create: function (req, res) {
        const contact = {
            _id: req.body._id,
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        };
        db.Contact
            .create(contact)
            .then(dbContact => res.json(dbContact))
            .catch(err => res.status(422).json(err));
    },
    
};