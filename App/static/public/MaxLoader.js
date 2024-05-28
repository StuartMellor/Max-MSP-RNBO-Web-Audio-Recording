"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _js = require("@rnbo/js");
var _axios = _interopRequireDefault(require("axios"));
var _AudioRecorderUI = _interopRequireDefault(require("./AudioRecorderUI"));
var _ContextResumeOverlay = _interopRequireDefault(require("./ContextResumeOverlay"));
require("./maxloader.styles.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var context = null;
var MaxLoader = /*#__PURE__*/function (_Component) {
  _inherits(MaxLoader, _Component);
  var _super = _createSuper(MaxLoader);
  function MaxLoader() {
    var _this;
    _classCallCheck(this, MaxLoader);
    _this = _super.call(this);
    _defineProperty(_assertThisInitialized(_this), "state", {
      accepted: false,
      loaded: false,
      audio_error: null,
      load_error: null,
      context: context
    });
    _defineProperty(_assertThisInitialized(_this), "setup", function () {
      var maxFileName = _this.props.maxFileName;
      _axios["default"].get("export/".concat(maxFileName, ".export.json")).then(function (response) {
        if (response.status !== 200) {
          throw "Could not retrieve ".concat(maxFileName);
          return;
        }
        (0, _js.createDevice)({
          context: context,
          patcher: response.data
        }).then(function (device) {
          console.log("Max device successfully created!");
          _this.device = device;
          _this.device.parameters.forEach(function (param) {
            console.log(param.name);
          });
          _this.device.messageEvent.subscribe(_this.messageEventHandler);
          _this.setState({
            loaded: true,
            load_error: null
          });
        });
      })["catch"](function (err) {
        console.log('Setup failed because:');
        console.log("----- ".concat(err, " -----"));
        _this.setState({
          load_error: err
        });
      });
    });
    _defineProperty(_assertThisInitialized(_this), "registerListener", function (tag, callback) {
      _this.listeners[tag] = {
        tag: tag,
        callback: callback
      };
    });
    _defineProperty(_assertThisInitialized(_this), "removeListener", function (tag) {
      // need to implement remove.
    });
    _defineProperty(_assertThisInitialized(_this), "messageEventHandler", function (msgEvent) {
      var tag = msgEvent.tag;
      var listenerTags = _this.listeners.keys();
      if (listenerTags.includes(msgEvent.tag)) {
        _this.listeners[msgEvent].callback(msgEvent);
      }
      if (msgEvent.tag === "startedrecording") {
        console.log("Started recording!");
      }
      if (msgEvent.tag === "finishedrecording") {
        console.log("Finished Recording!");
        _this.sendParam('record', 0);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "sendParam", function (param, value) {
      // console.log();
      var paramOBj = _this.device.parametersById.get(param);
      paramOBj.value = value;
    });
    _defineProperty(_assertThisInitialized(_this), "acceptAppLoad", function () {
      console.log(context);
      context.resume();
      _this.setState({
        accepted: true
      });
    });
    _this.device = null;
    _this.listeners = {};
    return _this;
  }
  _createClass(MaxLoader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var WAContext = window.AudioContext || window.webkitAudioContext;
      context = new WAContext();
      console.log(context);
      this.setup(context);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
        accepted = _this$state.accepted,
        loading = _this$state.loading;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "maxloader"
      }, /*#__PURE__*/_react["default"].createElement(_ContextResumeOverlay["default"], {
        accept: this.acceptAppLoad,
        accepted: accepted,
        loading: loading
      }), /*#__PURE__*/_react["default"].createElement(_AudioRecorderUI["default"], {
        sendParam: this.sendParam,
        registerListener: this.registerListener
      }));
    }
  }]);
  return MaxLoader;
}(_react.Component);
exports["default"] = MaxLoader;
MaxLoader.propTypes = {};
MaxLoader.defaultProps = {};