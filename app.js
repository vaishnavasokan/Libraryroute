var express = require("express");
const app=express();
const path=require("path");

var bookrouter=require("./Routes/bookrouter");
var authorrouter=require("./Routes/authorrouter");

app.use("/book",bookrouter);
app.use("/authors",authorrouter);


app.use(express.static(path.join(__dirname,"/public")));

app.set("views","./src/views");
app.set("view engine","ejs");

app.listen("8080",function()
{
    console.log("Server started.");
})

app.get("/",function(req,res)
{
    res.render("index",{pagetitle:"Library",nav:[{link:"/book", title:"BOOKS"},{link:"/authors", title:"AUTHORS"}]});
})


