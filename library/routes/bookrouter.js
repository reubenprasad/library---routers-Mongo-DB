var express = require('express')
const router = express.Router();
var mongoose = require('mongoose')
var url = "mongodb://localhost/Library"
var books = require("../model/Book"); 
mongoose.connect(url,function(err){
    if(err) 
    throw err;
    else
    console.log("database connected")
});
module.exports = router;
router.get("/",function(req,res){
    books.find({},function(err,result){
        
        res.render("books",{pTitle:"Books",nav:[{link:"/book",title:"Books"},{link:"/auth",title:"Author"},{link:"/",title:"Log Out"}],books:result});
    })
})
router.get("/sp/:title",function(req,res){
    console.log(req.params.title)
    books.find({title:req.params.title},function(err,result){
       

        res.render("bookdesc",{pTitle:"Books",nav:[{link:"/book",title:"Book"},{link:"/auth",title:"Author"},{link:"/",title:"Log Out"}],books:result});    })
        
 })
