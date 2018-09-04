'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.blockInfo = exports.state = exports.blocks = exports.transactions = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _remme = require('remme');

var _remme2 = _interopRequireDefault(_remme);

var _remmeUtils = require('remme-utils');

var _dotenv = require('dotenv');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(0, _dotenv.config)();
var remme = new _remme2.default.Client({
  networkConfig: {
    nodeAddress: process.env.NODE_ADDRESS || "localhost"
  }
});

var excludeFamilyNames = ["sawtooth_settings", "sawtooth_validator_registry", "block_info"];

function prepareTransaction(data) {
  if (data && data[0].batches) {
    return data.map(function (item) {
      item.batches = item.batches.reduce(function (prev, item) {
        var filter = item.transactions.filter(function (item) {
          return !excludeFamilyNames.includes(item.header.family_name);
        });
        if (filter.length) {
          item.transactions = filter;
          return [].concat(_toConsumableArray(prev), [item]);
        } else {
          return prev;
        }
      }, []);
      return item;
    });
  }
  return data.reduce(function (prev, item) {
    if (excludeFamilyNames.includes(item.header.family_name)) {
      return prev;
    }
    if (item.transactionProtobuf && item.protobuf) {
      item.data = item.protobuf.decode(item.transactionProtobuf.decode((0, _remmeUtils.base64ToArrayBuffer)(item.payload)).data);
    }
    return [].concat(_toConsumableArray(prev), [item]);
  }, []);
}

var initGetRouter = function initGetRouter(method) {
  var router = _express2.default.Router();

  router.get('/', function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
      var _req$query, limit, head, start, address, response;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _req$query = req.query, limit = _req$query.limit, head = _req$query.head, start = _req$query.start, address = _req$query.address;
              _context.next = 3;
              return remme.blockchainInfo['get' + method]({ limit: limit, head: head, start: start, address: address });

            case 3:
              response = _context.sent;

              if (method !== "BlockInfo") {
                response.data = prepareTransaction(response.data);
              }
              res.json(response);

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());

  return router;
};

var transactions = initGetRouter("Transactions");
var blocks = initGetRouter("Blocks");
var state = initGetRouter("State");
var blockInfo = initGetRouter("BlockInfo");

transactions.get('/:id', function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.next = 3;
            return remme.blockchainInfo.getTransactionById(id);

          case 3:
            response = _context2.sent;

            response.data = prepareTransaction([response.data])[0];
            res.json(response);

          case 6:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

blocks.get('/:id', function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, response;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.next = 3;
            return remme.blockchainInfo.getBlockById(id);

          case 3:
            response = _context3.sent;

            response.data = prepareTransaction([response.data])[0];
            res.json(response);

          case 6:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());

state.get('/:address', function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var address, response;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            address = req.params.address;
            _context4.prev = 1;
            _context4.next = 4;
            return remme.blockchainInfo.getStateByAddress(address);

          case 4:
            response = _context4.sent;

            response.addressParse = response.protobuf.decode((0, _remmeUtils.base64ToArrayBuffer)(response.data));
            res.json(response);
            _context4.next = 12;
            break;

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4['catch'](1);

            res.json({ error: _context4.t0.message });

          case 12:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, undefined, [[1, 9]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());

exports.transactions = transactions;
exports.blocks = blocks;
exports.state = state;
exports.blockInfo = blockInfo;