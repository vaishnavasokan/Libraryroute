var express = require("express");
const router=express.Router();

var mongoose=require("mongoose");
var url="mongodb://localhost/library"

var book =require("../model/books")

mongoose.connect(url,function(err)
{
    if(err)
    throw err;
    else
        console.log("DB Connected!");
})


router.get("/",function(req,res)
{
    book.find({},function(err,result)
    {
        if(err) 
        throw err;
        else
        {
            console.log(result);
            res.render("books",{pagetitle:"Library",nav:[{link:"/book", title:"BOOKS"},{link:"/authors", title:"AUTHORS"}],bookdetails: result});
        }
    })
   
})

router.get("/:id",function(req,res)
{
    var id=req.params.id;
    console.log(id);
    console.log(book_arr[id].title);
    res.render("viewbook",{pagetitle:"Library",nav:[{link:"/book", title:"BOOKS"},{link:"/authors", title:"AUTHORS"}],
    bookdetails: book_arr[id]});
})


module.exports=router;