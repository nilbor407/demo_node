var express = require("express");
var session = require("express-session");
var app = express();
app.use(session({
    "secret":"126546",
    "saveUninitialized":true,
    "resave":true
}));

app.get("/",function(req,res){
    if(!req.session.refresh)
        req.session.refresh = 1
    else
        req.session.refresh += 1

    count = req.session.refresh;
    res.send("Page Refresh Count = "+count);
});

app.listen(1000);
