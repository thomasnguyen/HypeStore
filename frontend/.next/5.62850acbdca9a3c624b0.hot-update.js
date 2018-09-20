webpackHotUpdate(5,{

/***/ "./components/UpdateItem.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UPDATE_ITEM_MUTATION */
/* unused harmony export SINGLE_ITEM_QUERY */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql_tag__ = __webpack_require__("./node_modules/graphql-tag/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_Form__ = __webpack_require__("./components/styles/Form.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_formatMoney__ = __webpack_require__("./lib/formatMoney.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ErrorMessage__ = __webpack_require__("./components/ErrorMessage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_next_router__);

var _jsxFileName = "/Users/thomas/Desktop/HypeStore/frontend/components/UpdateItem.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n\tquery SINGLE_ITEM_QUERY($id: ID!) {\n\t\titem(where: { id: $id }) {\n\t\t\tid\n\t\t\ttitle\n\t\t\tdescription\n\t\t\tprice\n\t\t}\n\t}\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n\tmutation UPDATE_ITEM_MUTATION(\n\t\t$title: String!\n\t\t$description: String!\n\t\t$image: String\n\t\t$largeImage: String\n\t\t$price: Int!\n\t) {\n\t\tupdateItem(title: $title, description: $description, image: $image, largeImage: $largeImage, price: $price) {\n\t\t\tid\n\t\t}\n\t}\n"]);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var SINGLE_ITEM_QUERY = __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default()(_templateObject);
var UPDATE_ITEM_MUTATION = __WEBPACK_IMPORTED_MODULE_3_graphql_tag___default()(_templateObject2);

var UpdateItem =
/*#__PURE__*/
function (_Component) {
  _inherits(UpdateItem, _Component);

  function UpdateItem() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, UpdateItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = UpdateItem.__proto__ || Object.getPrototypeOf(UpdateItem)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {}
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

  _createClass(UpdateItem, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["Query"], {
        query: SINGLE_ITEM_QUERY,
        variables: {
          id: this.props.id
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, function (_ref2) {
        var data = _ref2.data,
            loading = _ref2.loading;
        if (loading) return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          }
        }, "Loading....");
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["Mutation"], {
          mutation: UPDATE_ITEM_MUTATION,
          variables: _this2.state,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        }, function (createItem, _ref3) {
          var loading = _ref3.loading,
              error = _ref3.error;
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__styles_Form__["a" /* default */], {
            onSubmit:
            /*#__PURE__*/
            function () {
              var _ref4 = _asyncToGenerator(
              /*#__PURE__*/
              __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(e) {
                var res;
                return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        // stop the form from submitting
                        e.preventDefault(); // call mutation

                        _context.next = 3;
                        return createItem();

                      case 3:
                        res = _context.sent;
                        // change them to the single item page
                        __WEBPACK_IMPORTED_MODULE_7_next_router___default.a.push({
                          pathname: '/item',
                          query: {
                            id: res.data.createItem.id
                          }
                        });

                      case 5:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));

              return function (_x) {
                return _ref4.apply(this, arguments);
              };
            }(),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            }
          }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 64
            }
          }, "Sell an Item"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__ErrorMessage__["a" /* default */], {
            error: error,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 65
            }
          }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("fieldset", {
            disabled: loading,
            "aria-busy": loading,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 66
            }
          }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
            htmlFor: "title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 67
            }
          }, "Title", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
            type: "text",
            id: "title",
            name: "title",
            placeholder: "Title",
            required: true,
            defaultValue: data.item.title,
            onChange: _this2.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 69
            }
          })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
            htmlFor: "price",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            }
          }, "Price", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
            type: "number",
            id: "price",
            name: "price",
            placeholder: "price",
            required: true,
            value: data.item.price,
            onChange: _this2.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 82
            }
          })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
            htmlFor: "description",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 93
            }
          }, "description", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("textarea", {
            id: "description",
            name: "description",
            placeholder: "Enter a description",
            required: true,
            value: data.item.description,
            onChange: _this2.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 95
            }
          })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
            type: "submit",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 104
            }
          }, " Submit")));
        });
      });
    }
  }]);

  return UpdateItem;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (UpdateItem);



/***/ })

})
//# sourceMappingURL=5.62850acbdca9a3c624b0.hot-update.js.map