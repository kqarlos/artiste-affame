const db = require("../models");
module.exports = {
    //Get item
    findById: function (req, res) {
        db.Item.findById({ _id: req.params.id })
            .then(item => res.json(item))
            .catch(err => res.status(422).json(err));
    },
    //Insert new item
    create: function (req, res) {
        db.Item.create(req.body)
            .then(item => res.json(item))
            .catch(err => res.status(422).json(err));
    },
    //Update item
    update: function (req, res) {
        db.Item.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(item => res.json(item))
            .catch(err => res.status(422).json(err));
    },
    //Remove item
    remove: function (req, res) {
        db.Item.findById({ _id: req.params.id })
            .then(item => item.remove())
            .then(item => res.json(item))
            .catch(err => res.status(422).json(err));
    },
    //Get all items
    findAll: function (req, res) {
        db.Item.find()
            .then(items => res.json(items))
            .catch(err => res.status(422).json(err));
    }
};
