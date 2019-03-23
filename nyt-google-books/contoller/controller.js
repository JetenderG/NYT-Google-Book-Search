const db = require("../models");
const axios  =require("axios")



module.exports = {



    saveArticle : function (req,res){

        db.Books.create({savedBook})
        .then(added => res.send(added));

        


    },

    deleteArticle: function(req ,res){

        db.Books.deleteOne({})


    },

    getAll : function (req,res){

        db.Books.findAll({})
            .then(data => 
                res.send(data))
    }




}