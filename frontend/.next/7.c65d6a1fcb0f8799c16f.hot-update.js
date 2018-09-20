webpackHotUpdate(7,{

/***/ "./components/CreateItem.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CREATE_ITEM_MUTATION */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo__ = __webpack_require__("./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag__ = __webpack_require__("./node_modules/graphql-tag/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_Form__ = __webpack_require__("./components/styles/Form.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_formatMoney__ = __webpack_require__("./lib/formatMoney.js");
var _jsxFileName = "/Users/thomas/Desktop/HypeStore/frontend/components/CreateItem.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n\tmutation CREATE_ITEM_MUTATION(\n\t\t$title: String!\n\t\t$description: String!\n\t\t$image: String\n\t\t$largeImage: String\n\t\t$price: Int!\n\t) {\n\t\tcreateItem(title: $title, description: $description, image: $image, largeImage: $largeImage, price: $price) {\n\t\t\tid\n\t\t}\n\t}\n"]);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var CREATE_ITEM_MUTATION = __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default()(_templateObject);

var CreateItem =
/*#__PURE__*/
function (_Component) {
  _inherits(CreateItem, _Component);

  function CreateItem() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, CreateItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = CreateItem.__proto__ || Object.getPrototypeOf(CreateItem)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        title: 'Cool Shoes',
        description: 'fff',
        image: 'fff',
        largeImage: 'ssss',
        price: 0
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var _e$target = e.target,
            name = _e$target.name,
            type = _e$target.type,
            value = _e$target.value;
        var val = type === 'number' ? parseFloat(value) : value;

        _this.setState(_defineProperty({}, name, val));
      }
    }), _temp));
  }

  _createClass(CreateItem, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_apollo__["Mutation"], {
        mutation: CREATE_ITEM_MUTATION,
        variables: this.state,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, function (createItem, _ref2) {
        var loading = _ref2.loading,
            error = _ref2.error;
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__styles_Form__["a" /* default */], {
          onSubmit: function onSubmit(e) {
            e.preventDefault();
            console.log(_this2.state);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          }
        }, "Sell an Item"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("fieldset", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
          htmlFor: "title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        }, "Title", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
          type: "text",
          id: "title",
          name: "title",
          placeholder: "Title",
          required: true,
          value: _this2.state.title,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
          htmlFor: "price",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          }
        }, "Price", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
          type: "number",
          id: "price",
          name: "price",
          placeholder: "price",
          required: true,
          value: _this2.state.price,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          }
        })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
          htmlFor: "description",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          }
        }, "description", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("textarea", {
          id: "description",
          name: "description",
          placeholder: "Enter a description",
          required: true,
          value: _this2.state.description,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          }
        })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
          type: "submit",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          }
        }, " Submit")));
      });
    }
  }]);

  return CreateItem;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (CreateItem);


/***/ })

})
//# sourceMappingURL=7.c65d6a1fcb0f8799c16f.hot-update.js.map