var express=require('express');
var path=require('path');
var app=express();
app.use(express.static(path.join(__dirname, 'html')));

app.get('/',function(req,res) {
	res.sendFile(path.join(__dirname+'/html/my-responsive-nav.html'));
});

app.listen(9999);
console.log('server is running on 9999');