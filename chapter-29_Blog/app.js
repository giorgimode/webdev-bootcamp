var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

mongoose.Promise = require('bluebird');
mongoose.connect("mongodb://localhost/yelp_camp");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var blogSchema = new mongoose.Schema({
    title: String,
    body: String,
    image: String,
    created:  {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

Blog.create({
    title: "Little Fluffy Unicorn",
    body: "https://s-media-cache-ak0.pinimg.com/originals/74/3a/68/743a68f3f619fd1c0f19190f032fca97.jpg",
    image: "This is a unicorn"
});


app.get("/", function(req, res){
    res.redirect("/blogs");
});

app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs){
        if(err){
            console.log(err);
        } else {
            res.render("index", {blogs: blogs});
        }
    })
});



app.listen(4949, "localhost", function () {
    console.log("Blog Server has started!");
});