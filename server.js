'use strict';

var express = require('express');
var cors = require('cors');
var multer = require('multer');

var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.post('/api/fileanalyse', upload.single('upfile'), function(req, resp){
  const { originalname: name, mimetype: type, size } = req.file;
  resp.json({ name, type, size });
});


app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
