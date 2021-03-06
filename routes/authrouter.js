var express = require('express')
const router = express.Router();
const path = require('path');
var mongoose = require('mongoose')
var url = "mongodb+srv://reuben:1234@cluster0-fcmwh.mongodb.net/Library?retryWrites=true"
var authors = require("../model/Author"); 
mongoose.connect(url,function(err){
    if(err) 
    throw err;
    else
    console.log("database connected")
});
module.exports = router;

router.get("/",function(req,res){
    authors.find({},function(err,result){
        
        res.render("auth",{pTitle:"Authors",nav:[{link:"/book",title:"Book"},{link:"/auth",title:"Author"},{link:"/",title:"Log Out"}],authors:result});
    })
})
router.get("/sa/:author",function(req,res){
    console.log(req.params.author)
    authors.find({author:req.params.author},function(err,result){
       

        res.render("authdesc",{pTitle:"Authors",nav:[{link:"/book",title:"Book"},{link:"/auth",title:"Author"},{link:"/",title:"Log Out"}],authors:result});    })
        
 })

 router.get("/view/:img",function(req,res){    
    res.sendFile(path.join(__dirname+"../../public/images/"+req.params.img))
})

