"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgNarrowButton = function SvgNarrowButton(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    // width={68}
    // height={34}
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/_react["default"].createElement("g", {
    filter: "url(#NarrowButton_svg__a)"
  }, /*#__PURE__*/_react["default"].createElement("rect", {
    x: 4,
    width: 60,
    height: 26,
    rx: 2.5,
    fill: "#D9D9D9"
  })), /*#__PURE__*/_react["default"].createElement("rect", {
    x: 4,
    width: 60,
    height: 22.148,
    rx: 2.5,
    fill: "#ECECEC"
  }), /*#__PURE__*/_react["default"].createElement("defs", null, /*#__PURE__*/_react["default"].createElement("filter", {
    id: "NarrowButton_svg__a",
    x: 0,
    y: 0,
    width: 68,
    height: 34,
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /*#__PURE__*/_react["default"].createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/_react["default"].createElement("feColorMatrix", {
    "in": "SourceAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha"
  }), /*#__PURE__*/_react["default"].createElement("feOffset", {
    dy: 4
  }), /*#__PURE__*/_react["default"].createElement("feGaussianBlur", {
    stdDeviation: 2
  }), /*#__PURE__*/_react["default"].createElement("feComposite", {
    in2: "hardAlpha",
    operator: "out"
  }), /*#__PURE__*/_react["default"].createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/_react["default"].createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_23_8"
  }), /*#__PURE__*/_react["default"].createElement("feBlend", {
    "in": "SourceGraphic",
    in2: "effect1_dropShadow_23_8",
    result: "shape"
  }))));
};
var _default = SvgNarrowButton;
exports["default"] = _default;