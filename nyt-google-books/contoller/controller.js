const db = require("../models");
const axios  =require("axios")



module.exports = {



    saveArticle : function (req,res){

        db.Books.create(req.body)
        


    },

    deleteArticle: function(req ,res){



    }




}