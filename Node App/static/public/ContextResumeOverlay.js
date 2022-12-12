"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _NarrowButton = _interopRequireDefault(require("./UIComponents/Controls/Buttons/Text/Narrow/NarrowButton"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var overlayStyle = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  left: 0,
  top: 0,
  zIndex: 5,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};
var ContextResumeOverlay = function ContextResumeOverlay(_ref) {
  var accept = _ref.accept,
    overlayColor = _ref.overlayColor,
    accepted = _ref.accepted;
  if (accepted) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "contextresume-overlay-hidden"
    });
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "contextresume-overlay",
    style: _objectSpread(_objectSpread({}, overlayStyle), {}, {
      backgroundColor: overlayColor
    })
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: accept,
    style: {
      position: 'relative',
      background: 'none',
      border: 'none',
      width: '180px',
      height: '70px'
    }
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    style: {
      width: '180px',
      height: '70px',
      position: 'absolute',
      left: 0,
      top: '-3px',
      zIndex: 2,
      lineHeight: '100%'
    }
  }, "Start Max"), /*#__PURE__*/_react["default"].createElement(_NarrowButton["default"], {
    viewBox: "0 0 68 34",
    width: '180px',
    height: '70px',
    style: {
      position: 'absolute',
      left: 0,
      top: 0
    }
  })));
};
ContextResumeOverlay.propTypes = {
  accept: _propTypes["default"].func.isRequired,
  overlayColor: _propTypes["default"].string
};
ContextResumeOverlay.defaultProps = {
  overlayColor: 'rgba(255, 255, 255, 0.6)'
};
var _default = ContextResumeOverlay;
exports["default"] = _default;