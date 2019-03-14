"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withContext;

var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function withContext(contexts) {
  return function (WrappedComponent) {
    var name = WrappedComponent.displayName || WrappedComponent.name || '<component>';

    var NewComponent = function NewComponent(props) {
      var names = Object.keys(contexts);
      var addedProps = {};

      for (var _i = 0; _i < names.length; _i++) {
        var _name = names[_i];
        addedProps[_name] = _react.default.useContext(contexts[_name]);
      }

      return _react.default.createElement(WrappedComponent, _extends({}, props, addedProps));
    };

    NewComponent.displayName = "withContext(".concat(name, ")");
    (0, _hoistNonReactStatics.default)(NewComponent, WrappedComponent);
    return NewComponent;
  };
}
