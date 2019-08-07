var express = require("express");
const router=express.Router();

var book_arr = [
    { 
        title:"The God of Small Things",
        author:"Arundhati Roy",
        category:"Fiction",
        image:"https://dynamic.indigoimages.ca/books/0735273286.jpg?altimages=false&scaleup=true&maxheight=515&width=380&quality=85&sale=0&lang=en"
    },

    { 
        title:"3 Mistakes of my Life",
        author:"Chetan Bhagat",
        category:"Fiction",
        image:"https://images-na.ssl-images-amazon.com/images/I/51nziLHeduL._SX328_BO1,204,203,200_.jpg"
    },

    { 
        title:"The Ministry of Utmost Happiness",
        author:"Arundhati Roy",
        category:"Fiction",
        image:"https://images.penguinrandomhouse.com/cover/9780525434818"
    },
    {
        title:"Playing it my way",
        author:"Sachin Tendulkar, Boria Majumdar",
        category:"Autobiography",
        image:"https://techmarketblog.files.wordpress.com/2014/11/tendulkar-playing-it-my-way.jpg"
    }
]
    

router.get("/",function(req,res)
{
    res.render("books",{pagetitle:"Library",nav:[{link:"/book", title:"BOOKS"},{link:"/authors", title:"AUTHORS"}],
    bookdetails: book_arr });
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