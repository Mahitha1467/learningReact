var express = require("express"),
	path = require("path");

var app = express();
app.use(express.static(path.join(__dirname, "./")));
app.use("/", function(req, res){
	res.sendFile(path.join(__dirname, "index.html"));
})

app.listen(9000);