"use strict";

var _client = require("react-dom/client");
var _react = _interopRequireDefault(require("react"));
var _MaxLoader = _interopRequireDefault(require("./MaxLoader"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var App = function App() {
  return /*#__PURE__*/_react["default"].createElement(_MaxLoader["default"], {
    maxFileName: "audiorecorder"
  });
};
var root = (0, _client.createRoot)(document.getElementById('root'));
root.render( /*#__PURE__*/_react["default"].createElement(App, null));