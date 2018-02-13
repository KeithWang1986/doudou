let http = require("http");
let url = require("url");
let path = require("path");
let fs = require("fs");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

var express = require('express');
var proxy = require('http-proxy-middleware');
var app = express();

app.use('/data', proxy({ target: 'http://localhost:8080', changeOrigin: true }));
app.use('/public', express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(resolveApp('pages/index.html'));
});

var server = app.listen(81);


console.log("简单服务已启动.");
var child_process = require('child_process');
child_process.exec(`\"C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe\" http://localhost:81/`);