var express = require("express"),
	app = express(),
	port = process.POST || 3000;
	
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());	
	
app.post("/", function(req, res) {
	console.log(req.body.fname);
	console.log(req.body.lname);
	console.log(req.body.city);
	console.log(req.body.state);
	console.log(req.body.zip);
	
});
	
app.listen(port, function() {
	console.log("APP IS RUNNING ON PORT " + port);
});