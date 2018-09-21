webpackHotUpdate(5,{

/***/ "./components/DeleteItem.js":
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: SyntaxError: /Users/thomas/Desktop/HypeStore/frontend/components/DeleteItem.js: Unexpected token, expected \"${\" (20:1)\n\n  18 | \n  19 | export default DeleteItem;\n> 20 | `\n     |  ^\n    at _class.raise (/Users/thomas/Desktop/HypeStore/frontend/node_modules/babylon/lib/index.js:778:15)\n    at _class.unexpected (/Users/thomas/Desktop/HypeStore/frontend/node_modules/babylon/lib/index.js:2063:16)\n    at _class.expect (/Users/thomas/Desktop/HypeStore/frontend/node_modules/babylon/lib/index.js:2051:28)\n    at _class.parseTemplate (/Users/thomas/Desktop/HypeStore/frontend/node_modules/babylon/lib/index.js:3410:12)\n    at _class.parseExprAtom (/Users/thomas/Desktop/HypeStore/frontend/node_modules/babylon/lib/index.js:3108:21)\n    at _class.parseExprAtom (/Users/thomas/Desktop/HypeStore/frontend/node_modules/babylon/lib/index.js:8086:52)\n    at _class.parseExprAtom (/Users/thomas/Desktop/HypeStore/frontend/node_modules/babylon/lib/index.js:8086:52)\n    at _class.parseExprAtom (/Users/thomas/Desktop/HypeStore/frontend/node_modules/babylon/lib/index.js:8086:52)\n    at _class.parseExprSubscripts (/Users/thomas/Desktop/HypeStore/frontend/node_modules/babylon/lib/index.js:2725:21)\n    at _class.parseMaybeUnary (/Users/thomas/Desktop/HypeStore/frontend/node_modules/babylon/lib/index.js:2704:21)\n    at _class.parseExprOps (/Users/thomas/Desktop/HypeStore/frontend/node_modules/babylon/lib/index.js:2616:21)\n    at _class.parseMaybeConditional (/Users/thomas/Desktop/HypeStore/frontend/node_modules/babylon/lib/index.js:2588:21)\n    at _class.parseMaybeAssign (/Users/thomas/Desktop/HypeStore/frontend/node_modules/babylon/lib/index.js:2546:21)\n    at _class.parseExpression (/Users/thomas/Desktop/HypeStore/frontend/node_modules/babylon/lib/index.js:2499:21)\n    at _class.parseStatementContent (/Users/thomas/Desktop/HypeStore/frontend/node_modules/babylon/lib/index.js:4040:21)\n    at _class.parseStatement (/Users/thomas/Desktop/HypeStore/frontend/node_modules/babylon/lib/index.js:3926:17)");

/***/ }),

/***/ "./components/Item.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return componentName; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_formatMoney__ = __webpack_require__("./lib/formatMoney.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_Title__ = __webpack_require__("./components/styles/Title.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_ItemStyles__ = __webpack_require__("./components/styles/ItemStyles.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styles_PriceTag__ = __webpack_require__("./components/styles/PriceTag.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__DeleteItem__ = __webpack_require__("./components/DeleteItem.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__DeleteItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__DeleteItem__);
var _jsxFileName = "/Users/thomas/Desktop/HypeStore/frontend/components/Item.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var componentName =
/*#__PURE__*/
function (_Component) {
  _inherits(componentName, _Component);

  function componentName() {
    _classCallCheck(this, componentName);

    return _possibleConstructorReturn(this, (componentName.__proto__ || Object.getPrototypeOf(componentName)).apply(this, arguments));
  }

  _createClass(componentName, [{
    key: "render",
    value: function render() {
      var item = this.props.item;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__styles_ItemStyles__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, item.largeImage && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: item.largeImage,
        alt: item.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__styles_Title__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        href: {
          pathname: '/item',
          query: {
            id: item.id
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, item.title))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__styles_PriceTag__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, Object(__WEBPACK_IMPORTED_MODULE_3__lib_formatMoney__["a" /* default */])(item.price)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, item.description), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "buttonList",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        href: {
          pathname: 'update',
          query: {
            id: item.id
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, " Edit \u270F\uFE0F")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, " Add to Cart "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__DeleteItem__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, "Delete This Item")));
    }
  }]);

  return componentName;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Object.defineProperty(componentName, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    item: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
  }
});


/***/ })

})
//# sourceMappingURL=5.3e900f1bd99930826628.hot-update.js.map