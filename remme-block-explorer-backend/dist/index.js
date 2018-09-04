"use strict";

require("babel-polyfill");

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

var _dotenv = require("dotenv");

var _routes = require("./routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};

(0, _dotenv.config)();
var app = (0, _express2.default)();
var port = process.env.PORT || 3000;
app.use(_express2.default.static(_path2.default.join(__dirname, '../build')));
app.use((0, _cors2.default)(corsOptions));
app.use(_bodyParser2.default.json());

app.use("/api/transactions", _routes.transactions);
app.use("/api/blocks", _routes.blocks);
app.use("/api/state", _routes.state);
app.use("/api/block-info", _routes.blockInfo);

app.get('*', function (req, res) {
  res.sendFile(_path2.default.join(__dirname, '../build/index.html'));
});

app.listen(port, function () {
  return console.log("Running on localhost:" + port);
});