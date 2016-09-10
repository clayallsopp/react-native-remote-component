(function main(React, ReactNative, require) {
  "use strict";

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _React = React;
  var _ReactNative = ReactNative;
  var StyleSheet = _ReactNative.StyleSheet;
  var View = _ReactNative.View;
  var Text = _ReactNative.Text;
  var LayoutAnimation = _ReactNative.LayoutAnimation;

  var Test = (function (_React$Component) {
    _inherits(Test, _React$Component);

    function Test() {
      _classCallCheck(this, Test);

      _get(Object.getPrototypeOf(Test.prototype), "constructor", this).apply(this, arguments);

      this.state = { t: 0, direction: 1 };

      this.styles = StyleSheet.create({
        textColor: {
          color: "#F00"
        }
      });
    }

    _createClass(Test, [{
      key: "componentWillMount",
      value: function componentWillMount() {
        // Animate creation
        LayoutAnimation.spring();
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this = this;

        setInterval(function () {
          LayoutAnimation.spring();
          var direction = _this.state.direction;
          if (_this.state.t > 0) {
            direction = -1;
          } else if (_this.state.t < 0) {
            direction = 1;
          }
          _this.setState({ t: _this.state.t + direction, direction: direction });
        }, 1000);
      }
    }, {
      key: "render",
      value: function render() {
        return React.createElement(
          View,
          null,
          React.createElement(
            Text,
            { style: this.styles.textColor },
            "Hello from ",
            this.props.url
          )
        );
      }
    }]);

    return Test;
  })(React.Component);

  return Test;
})
