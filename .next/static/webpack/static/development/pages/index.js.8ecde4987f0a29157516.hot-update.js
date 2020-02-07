webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/MyLayout.js":
/*!********************************!*\
  !*** ./components/MyLayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar */ "./components/Sidebar.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./components/header.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ "./components/footer.js");
var _jsxFileName = "/Users/tema/my-app/123/components/MyLayout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var styles = {
  root: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    flexWrap: "nowrap",
    width: "100%",
    height: "100%"
  },
  header: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap"
  },
  main: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
    width: "100%",
    height: "100%" // [theme.breakpoints.down('sm')]: {
    //   color:'yellow'
    // },
    // "@media only screen and (max-width: 768px)": {
    //   color:'red'
    // }

  },
  mainmain: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    width: "100%"
  },
  posts: {
    display: "flex",
    flexBasis: "100%",
    flexShrink: 0,
    overflow: "auto",
    flexGrow: 1,
    height: "100%"
  }
};
function Layout(props) {
  return __jsx("div", {
    style: styles.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), __jsx("div", {
    style: styles.main,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(_Sidebar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), __jsx("div", {
    style: styles.mainmain,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("div", {
    style: styles.posts,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, props.children), __jsx(_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }))));
}

/***/ })

})
//# sourceMappingURL=index.js.8ecde4987f0a29157516.hot-update.js.map