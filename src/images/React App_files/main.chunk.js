(this["webpackJsonpreact-pizza-website-v1"] = this["webpackJsonpreact-pizza-website-v1"] || []).push([["main"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _globalStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globalStyles */ "./src/globalStyles.js");
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Hero */ "./src/components/Hero/index.js");
/* harmony import */ var _components_Products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Products */ "./src/components/Products/index.js");
/* harmony import */ var _components_Products_Data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Products/Data */ "./src/components/Products/Data.js");
/* harmony import */ var _components_Feature__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Feature */ "./src/components/Feature/index.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Footer */ "./src/components/Footer/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/sarathvs/react-pizza-website-v1/src/App.js";









function App() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["BrowserRouter"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_globalStyles__WEBPACK_IMPORTED_MODULE_1__["GlobalStyle"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_Hero__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_Products__WEBPACK_IMPORTED_MODULE_3__["default"], {
      data: _components_Products_Data__WEBPACK_IMPORTED_MODULE_4__["productsData"],
      heading: "Choose your favorite"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_Feature__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_Products__WEBPACK_IMPORTED_MODULE_3__["default"], {
      data: _components_Products_Data__WEBPACK_IMPORTED_MODULE_4__["productDataTwo"],
      heading: "Sweet treat for you"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

__webpack_require__.$Refresh$.register(_c, "App");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Feature/FeatureElements.js":
/*!***************************************************!*\
  !*** ./src/components/Feature/FeatureElements.js ***!
  \***************************************************/
/*! exports provided: FeatureContainer, FeatureButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureContainer", function() { return FeatureContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureButton", function() { return FeatureButton; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _images_featured3_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/featured3.jpeg */ "./src/images/featured3.jpeg");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



const FeatureContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    background: linear-gradient(to right,rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.1)),
    url(${_images_featured3_jpeg__WEBPACK_IMPORTED_MODULE_1__["default"]});
    height:100vh;
    max-height: 300px;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    color: #fff;
    justify-content: center;
    align-items: center;
    padding: 0rem 1rem;
    

    h1{
        font-size: clamp(3rem, 5vw, 5rem);
    }
    p{
        margin-bottom: 1rem;
        font-size: clamp(1rem, 3vw, 2rem);
    }
    
    `;
const FeatureButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button`
font-size: 1.4rem;
padding: 0.6rem 3rem;
border: none;
background: #ffc500;
color: #000;
transition: 0.2s ease-out;

&:hover{
    color: #fff;
    background: #e31837;
    transition: 0.2s ease-out;
    cursor: pointer;
}`;

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Feature/index.js":
/*!*****************************************!*\
  !*** ./src/components/Feature/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FeatureElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeatureElements */ "./src/components/Feature/FeatureElements.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/sarathvs/react-pizza-website-v1/src/components/Feature/index.js";




const Feature = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_FeatureElements__WEBPACK_IMPORTED_MODULE_1__["FeatureContainer"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
      children: "Pizza of the Day"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
      children: "Truffle alferdo sause topped with 24 carat gold dust."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_FeatureElements__WEBPACK_IMPORTED_MODULE_1__["FeatureButton"], {
      children: "Order Now"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined);
};

_c = Feature;
/* harmony default export */ __webpack_exports__["default"] = (Feature);

var _c;

__webpack_require__.$Refresh$.register(_c, "Feature");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Footer/FooterElements.js":
/*!*************************************************!*\
  !*** ./src/components/Footer/FooterElements.js ***!
  \*************************************************/
/*! exports provided: FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterContainer", function() { return FooterContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterWrap", function() { return FooterWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialMedia", function() { return SocialMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialMediaWrap", function() { return SocialMediaWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialLogo", function() { return SocialLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialIcons", function() { return SocialIcons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialLink", function() { return SocialLink; });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



const FooterContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].footer`
background:#fff;

`;
const FooterWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
display: flex;
felx=direction: column;
justify-content: center;
align-items: center;
padding: 16px 24px;
max-width: 1300px;
margin: 0 auto;

`;
const SocialMedia = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section`
max-width: 1300px;
width: 100%;
`;
const SocialMediaWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
display: flex;
justify-content: 'space-between;
align-items: center;
max-width: 1100px;
margin: 16px auto 0 auto;

@media screen and(max-width: 820px)
{
    flex-direction: column;
}`;
const SocialLogo = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Link"])`
justify-self: start;
cursor: pointer;
text-decoration: none;

`;
const SocialIcons = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div``;
const SocialLink = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a``;

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Footer/index.js":
/*!****************************************!*\
  !*** ./src/components/Footer/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _FooterElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FooterElements */ "./src/components/Footer/FooterElements.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/sarathvs/react-pizza-website-v1/src/components/Footer/index.js";





const Footer = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_FooterElements__WEBPACK_IMPORTED_MODULE_2__["FooterContainer"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_FooterElements__WEBPACK_IMPORTED_MODULE_2__["FooterWrap"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_FooterElements__WEBPACK_IMPORTED_MODULE_2__["SocialMedia"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_FooterElements__WEBPACK_IMPORTED_MODULE_2__["SocialMediaWrap"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_FooterElements__WEBPACK_IMPORTED_MODULE_2__["SocialLogo"], {
            to: "/",
            children: "Pizza"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_FooterElements__WEBPACK_IMPORTED_MODULE_2__["SocialIcons"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_FooterElements__WEBPACK_IMPORTED_MODULE_2__["SocialLink"], {
              href: "/",
              target: "_blank",
              "aria-label": "Facebook",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaFacebook"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 16,
                columnNumber: 29
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_FooterElements__WEBPACK_IMPORTED_MODULE_2__["SocialLink"], {
              href: "/",
              target: "_blank",
              "aria-label": "Facebook",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaFacebook"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 20,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_FooterElements__WEBPACK_IMPORTED_MODULE_2__["SocialLink"], {
              href: "/",
              target: "_blank",
              "aria-label": "Facebook",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaFacebook"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 24,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined);
};

_c = Footer;
/* harmony default export */ __webpack_exports__["default"] = (Footer);

var _c;

__webpack_require__.$Refresh$.register(_c, "Footer");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Hero/HeroElements.js":
/*!*********************************************!*\
  !*** ./src/components/Hero/HeroElements.js ***!
  \*********************************************/
/*! exports provided: HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroContainer", function() { return HeroContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroContent", function() { return HeroContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroItems", function() { return HeroItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroH1", function() { return HeroH1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroP", function() { return HeroP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroBtn", function() { return HeroBtn; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _images_pizza_3_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/pizza-3.jpeg */ "./src/images/pizza-3.jpeg");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



const HeroContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
background: linear-gradient(to right,rgba(0, 0, 0, 0.7),
rgba(0, 0, 0, 0.1)),
url(${_images_pizza_3_jpeg__WEBPACK_IMPORTED_MODULE_1__["default"]});
height: 100vh;
background-position: center;
back-size:cover;
   
`;
const HeroContent = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
height: calc(100vh -80px);
max-height: 100%;
width: 100vw;
padding: 0rem calc((100vw - 1300px) /2);
`;
const HeroItems = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
height:100vh;
max-height:100%;
padding: 0 2rem;
width: 650px;
color: #fff;
text-transform: uppercase;
line-height:1;
font-weight: bold;

@media screen and (max-width: 650px){
    width: 100%
}
`;
const HeroH1 = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h1`
font-size: clamp(2.5rem, 10vw, 5rem);
margin-bottom: 1rem;
box-shadow: 3px 5px #e9ba23;
letter-spacing: 3px;
`;
const HeroP = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p`
font-size: clamp(2rem, 2.5vw, 3rem);
margin-bottom: 2rem;
`;
const HeroBtn = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button`
font-size: 1.4rem;
padding: 1rem  4rem;
border: none;
background: #e31837;
color: #fff;
transition: 0.2s ease-out;

&:hover{
    background:#ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
}

`;

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Hero/index.js":
/*!**************************************!*\
  !*** ./src/components/Hero/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Navbar */ "./src/components/Navbar/index.js");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Sidebar */ "./src/components/Sidebar/index.js");
/* harmony import */ var _HeroElements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeroElements */ "./src/components/Hero/HeroElements.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/sarathvs/react-pizza-website-v1/src/components/Hero/index.js",
    _s = __webpack_require__.$Refresh$.signature();







const Hero = () => {
  _s();

  const [isOpen, setIsOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_HeroElements__WEBPACK_IMPORTED_MODULE_3__["HeroContainer"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
      toggle: toggle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_Sidebar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      isOpen: isOpen,
      toggle: toggle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_HeroElements__WEBPACK_IMPORTED_MODULE_3__["HeroContent"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_HeroElements__WEBPACK_IMPORTED_MODULE_3__["HeroItems"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_HeroElements__WEBPACK_IMPORTED_MODULE_3__["HeroH1"], {
          children: "Greatest Pizza Ever"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_HeroElements__WEBPACK_IMPORTED_MODULE_3__["HeroP"], {
          children: "Ready in 60 seconds"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_HeroElements__WEBPACK_IMPORTED_MODULE_3__["HeroBtn"], {
          children: "Place Order"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, undefined);
};

_s(Hero, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");

_c = Hero;
/* harmony default export */ __webpack_exports__["default"] = (Hero);

var _c;

__webpack_require__.$Refresh$.register(_c, "Hero");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Navbar/NavbarElements.js":
/*!*************************************************!*\
  !*** ./src/components/Navbar/NavbarElements.js ***!
  \*************************************************/
/*! exports provided: Nav, NavLink, NavIcon, Bars */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return NavLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavIcon", function() { return NavIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bars", function() { return Bars; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);




const Nav = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].nav`
background: transparent;
height: 80px;
display: flex;
justify-content: center;
font-weight: 700;
`;
const NavLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"])`
color: #fff;
font-size: 2rem;
display: flex;
align-items: center;
text-decoration: none;
cursor: pointer;

@media screen and (max-width: 400px){
    position: absolute;
    top:10px;
    left: 25px;

}`;
const NavIcon = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
display: block;
position: absolute;
top: 0;
right: 0;
cursor: pointer;
color: #fff;

p{
    transform: translate(-175%, 100%);
    font-weight: bold;

}`;
const Bars = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaPizzaSlice"])`
font-size: 2rem;
transform: translate(-50%, -15%);
`;

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Navbar/index.js":
/*!****************************************!*\
  !*** ./src/components/Navbar/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavbarElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavbarElements */ "./src/components/Navbar/NavbarElements.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/sarathvs/react-pizza-website-v1/src/components/Navbar/index.js";





const Navbar = ({
  toggle
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_NavbarElements__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_NavbarElements__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        to: "/",
        children: "Pizza"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 15
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_NavbarElements__WEBPACK_IMPORTED_MODULE_1__["NavIcon"], {
        onClick: toggle,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
          children: "Menu"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 19
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_NavbarElements__WEBPACK_IMPORTED_MODULE_1__["Bars"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 19
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 15
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 11
    }, undefined)
  }, void 0, false);
};

_c = Navbar;
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

var _c;

__webpack_require__.$Refresh$.register(_c, "Navbar");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Products/Data.js":
/*!*****************************************!*\
  !*** ./src/components/Products/Data.js ***!
  \*****************************************/
/*! exports provided: productsData, productDataTwo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productsData", function() { return productsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productDataTwo", function() { return productDataTwo; });
/* harmony import */ var _images_product_1_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images/product-1.jpeg */ "./src/images/product-1.jpeg");
/* harmony import */ var _images_product_2_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/product-2.jpeg */ "./src/images/product-2.jpeg");
/* harmony import */ var _images_product_3_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/product-3.jpeg */ "./src/images/product-3.jpeg");
/* harmony import */ var _images_sweet_3_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/sweet-3.jpeg */ "./src/images/sweet-3.jpeg");
/* harmony import */ var _images_sweet_2_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/sweet-2.jpeg */ "./src/images/sweet-2.jpeg");
/* harmony import */ var _images_sweet3_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/sweet3.jpeg */ "./src/images/sweet3.jpeg");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);







const productsData = [{
  image: _images_product_1_jpeg__WEBPACK_IMPORTED_MODULE_0__["default"],
  alt: 'Pizza',
  name: 'Supreme Pizza',
  desc: 'Marinara sauce, basil, italian sausage, roma tomatoes, olives and pesto',
  price: '$19.99',
  button: 'Add to Cart'
}, {
  image: _images_product_2_jpeg__WEBPACK_IMPORTED_MODULE_1__["default"],
  alt: 'Pizza',
  name: 'Hawaiian Paradise',
  desc: 'Marinara sauce, basil, italian sausage, roma tomatoes, olives and pesto',
  price: '$16.99',
  button: 'Add to Cart'
}, {
  image: _images_product_3_jpeg__WEBPACK_IMPORTED_MODULE_2__["default"],
  alt: 'Pizza',
  name: 'Veggie overload',
  desc: 'Marinara sauce, basil, italian sausage, roma tomatoes, olives and pesto',
  price: '$14.99',
  button: 'Add to Cart'
}, {
  image: _images_product_3_jpeg__WEBPACK_IMPORTED_MODULE_2__["default"],
  alt: 'Pizza',
  name: 'Veggie overload',
  desc: 'Marinara sauce, basil, italian sausage, roma tomatoes, olives and pesto',
  price: '$14.99',
  button: 'Add to Cart'
}, {
  image: _images_product_3_jpeg__WEBPACK_IMPORTED_MODULE_2__["default"],
  alt: 'Pizza',
  name: 'Veggie overload',
  desc: 'Marinara sauce, basil, italian sausage, roma tomatoes, olives and pesto',
  price: '$14.99',
  button: 'Add to Cart'
}, {
  image: _images_product_3_jpeg__WEBPACK_IMPORTED_MODULE_2__["default"],
  alt: 'Pizza',
  name: 'Veggie overload',
  desc: 'Marinara sauce, basil, italian sausage, roma tomatoes, olives and pesto',
  price: '$14.99',
  button: 'Add to Cart'
}];
const productDataTwo = [{
  image: _images_sweet_2_jpeg__WEBPACK_IMPORTED_MODULE_4__["default"],
  alt: 'Donuts',
  name: 'Doughlicious',
  desc: 'Belgian chocolate glazed donuts covered in icing with sprinkles on top',
  price: '$9.99',
  button: 'Add to Cart'
}, {
  image: _images_sweet_3_jpeg__WEBPACK_IMPORTED_MODULE_3__["default"],
  alt: 'Ice Cream',
  name: 'Caramel Wonder',
  desc: 'Vanilla ice cream covered with caramel and chocolate glaze topped with a coco stick',
  price: '$12.99',
  button: 'Add to Cart'
}, {
  image: _images_sweet3_jpeg__WEBPACK_IMPORTED_MODULE_5__["default"],
  alt: 'Brownie',
  name: 'Brownie Bunch',
  desc: 'Double fudge brownie squares topped with white chocolate pieces and macadamia nuts',
  price: '$9.99',
  button: 'Add to Cart'
}];

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Products/ProductElements.js":
/*!****************************************************!*\
  !*** ./src/components/Products/ProductElements.js ***!
  \****************************************************/
/*! exports provided: ProductsContainer, ProductWrapper, ProductCard, ProductImg, ProductInfo, ProductHeading, ProductTitle, ProductDesc, ProductPrice, ProductButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsContainer", function() { return ProductsContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductWrapper", function() { return ProductWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCard", function() { return ProductCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductImg", function() { return ProductImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductInfo", function() { return ProductInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductHeading", function() { return ProductHeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductTitle", function() { return ProductTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDesc", function() { return ProductDesc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPrice", function() { return ProductPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductButton", function() { return ProductButton; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const ProductsContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
width: 100vw;
min-height: 100vw;
padding: 5rem calc((100vw - 1300px) /2);
background: #150f0f;
color: #fff;

`;
const ProductWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
 display:flex;
flex-wrap: wrap;
justify-content: center;
 margin: 0 auto;
`;
const ProductCard = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
 margin: 0 2rem;
 line-height: 2;
  width: 300px;
`;
const ProductImg = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img`
height: 300px;
min-width: 300px;
max-width: 100%;
box-shadow: 8px 8px #fdc500;
`;
const ProductInfo = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
display:flex;
flex-direction:column;
align-items:center;
justify-content: center;
text-align: center;
`;
const ProductHeading = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h1`
font-size: calmp(2rem, 2.5vw, 3rem);
text-align: center;
margin-bottom: 5rem;
`;
const ProductTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h2`
font-weight: 400;
font-size: 1.5rem;
`;
const ProductDesc = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p`
margin-bottom: 1rem;
`;
const ProductPrice = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p`
margin-bottom: 1rem;
font-size: 2rem;
`;
const ProductButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button`
font-size: 1rem;
padding: 1rem 4rem;
background: #e31837; ;
color:#fff;
border: none;
transition: 0.2s ease-out;
margin-bottom: 2rem;

&:hover {
    background: #ffc500;
    color: #000;
    cursor: pointer;
    transition: 0.2s ease-out;
}
`;

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Products/index.js":
/*!******************************************!*\
  !*** ./src/components/Products/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProductElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductElements */ "./src/components/Products/ProductElements.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/sarathvs/react-pizza-website-v1/src/components/Products/index.js";




const Products = ({
  data,
  heading
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_ProductElements__WEBPACK_IMPORTED_MODULE_1__["ProductsContainer"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_ProductElements__WEBPACK_IMPORTED_MODULE_1__["ProductHeading"], {
      children: heading
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 12
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_ProductElements__WEBPACK_IMPORTED_MODULE_1__["ProductWrapper"], {
      children: data.map((product, index) => {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_ProductElements__WEBPACK_IMPORTED_MODULE_1__["ProductCard"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_ProductElements__WEBPACK_IMPORTED_MODULE_1__["ProductImg"], {
            src: product.image,
            alt: product.alt
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 28
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_ProductElements__WEBPACK_IMPORTED_MODULE_1__["ProductInfo"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_ProductElements__WEBPACK_IMPORTED_MODULE_1__["ProductTitle"], {
              children: product.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 32
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_ProductElements__WEBPACK_IMPORTED_MODULE_1__["ProductDesc"], {
              children: product.desc
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 32
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_ProductElements__WEBPACK_IMPORTED_MODULE_1__["ProductPrice"], {
              children: product.price
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 32
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_ProductElements__WEBPACK_IMPORTED_MODULE_1__["ProductButton"], {
              children: product.button
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 32
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 28
          }, undefined)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 24
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 12
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 8
  }, undefined);
};

_c = Products;
/* harmony default export */ __webpack_exports__["default"] = (Products);

var _c;

__webpack_require__.$Refresh$.register(_c, "Products");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Sidebar/SidebarElements.js":
/*!***************************************************!*\
  !*** ./src/components/Sidebar/SidebarElements.js ***!
  \***************************************************/
/*! exports provided: SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarContainer", function() { return SidebarContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseIcon", function() { return CloseIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarMenu", function() { return SidebarMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarLink", function() { return SidebarLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBtnWrap", function() { return SideBtnWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarRoute", function() { return SidebarRoute; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);




const SidebarContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].aside`
position: fixed;
z-index: 999;
width: 350px;
height: 100%;
background: #ffc500;
diplay:grid;
align-items: center;
top:0;
transition: 0.3s ease-in-out;
right: ${({
  isOpen
}) => isOpen ? '0' : '-1000px'};
@media screen and (max-width:400px){
    width: 100%;

}`;
const Icon = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
position: absolute;
top:1.2rem;
right:1.5rem;
background: transparent;
border: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`;
const CloseIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaTimes"])`
color:#000;`;
const SidebarMenu = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
display: grid;
grid-template-columns:1fr;
grid-template-rows: repeat(3, 80px);
text-align: center;

@media screen and(max-width: 480px){
    grid-template-rows: repeat(3, 60px);
}
`;
const SidebarLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"])`
display: flex;
align-items: center;
justify-content:center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
color: #000;
cursor: pointer;

&:hover {
    color:#e31837;
    transition: 0.2s ease-in-out;
}
`;
const SideBtnWrap = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
display: flex;
justify-content: center;
`;
const SidebarRoute = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"])`
background: #e31837;
white-space: nowrap;
padding: 16px 64px;
color: #fff;
font-size:16px;
outline: none;
border: none;
cursor: pointer;
text-decoration: none;
transition: 0.2s ease-in-out;

&:hover {
    transition: 0.2s ease-in-out;
    background: #fff;
    color: #010606;
}
`;

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Sidebar/index.js":
/*!*****************************************!*\
  !*** ./src/components/Sidebar/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SidebarElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SidebarElements */ "./src/components/Sidebar/SidebarElements.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/sarathvs/react-pizza-website-v1/src/components/Sidebar/index.js";




const Slidebar = ({
  isOpen,
  toggle
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_SidebarElements__WEBPACK_IMPORTED_MODULE_1__["SidebarContainer"], {
    isOpen: isOpen,
    onClick: toggle,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_SidebarElements__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      onClick: toggle,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_SidebarElements__WEBPACK_IMPORTED_MODULE_1__["CloseIcon"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_SidebarElements__WEBPACK_IMPORTED_MODULE_1__["SidebarMenu"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_SidebarElements__WEBPACK_IMPORTED_MODULE_1__["SidebarLink"], {
        to: "/",
        children: "Pizza"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_SidebarElements__WEBPACK_IMPORTED_MODULE_1__["SidebarLink"], {
        to: "/",
        children: "Desserts"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_SidebarElements__WEBPACK_IMPORTED_MODULE_1__["SidebarLink"], {
        to: "/",
        children: "Full Menu"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_SidebarElements__WEBPACK_IMPORTED_MODULE_1__["SideBtnWrap"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_SidebarElements__WEBPACK_IMPORTED_MODULE_1__["SidebarRoute"], {
        to: "/",
        children: "Order Now"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};

_c = Slidebar;
/* harmony default export */ __webpack_exports__["default"] = (Slidebar);

var _c;

__webpack_require__.$Refresh$.register(_c, "Slidebar");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/globalStyles.js":
/*!*****************************!*\
  !*** ./src/globalStyles.js ***!
  \*****************************/
/*! exports provided: GlobalStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStyle", function() { return GlobalStyle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
*{
    boxing-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Kanit', sans-serif;
}
`;

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/images/featured3.jpeg":
/*!***********************************!*\
  !*** ./src/images/featured3.jpeg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/featured3.66d68644.jpeg");

/***/ }),

/***/ "./src/images/pizza-3.jpeg":
/*!*********************************!*\
  !*** ./src/images/pizza-3.jpeg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/pizza-3.f2f9b9a4.jpeg");

/***/ }),

/***/ "./src/images/product-1.jpeg":
/*!***********************************!*\
  !*** ./src/images/product-1.jpeg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/product-1.36d084f3.jpeg");

/***/ }),

/***/ "./src/images/product-2.jpeg":
/*!***********************************!*\
  !*** ./src/images/product-2.jpeg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/product-2.4c066971.jpeg");

/***/ }),

/***/ "./src/images/product-3.jpeg":
/*!***********************************!*\
  !*** ./src/images/product-3.jpeg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/product-3.115cc32b.jpeg");

/***/ }),

/***/ "./src/images/sweet-2.jpeg":
/*!*********************************!*\
  !*** ./src/images/sweet-2.jpeg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/sweet-2.d5cf1ad2.jpeg");

/***/ }),

/***/ "./src/images/sweet-3.jpeg":
/*!*********************************!*\
  !*** ./src/images/sweet-3.jpeg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/sweet-3.badeecbe.jpeg");

/***/ }),

/***/ "./src/images/sweet3.jpeg":
/*!********************************!*\
  !*** ./src/images/sweet3.jpeg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/sweet3.c495c742.jpeg");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _reportWebVitals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reportWebVitals */ "./src/reportWebVitals.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/sarathvs/react-pizza-website-v1/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 3
}, undefined), document.getElementById('root')); // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

Object(_reportWebVitals__WEBPACK_IMPORTED_MODULE_3__["default"])();

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/reportWebVitals.js":
/*!********************************!*\
  !*** ./src/reportWebVitals.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! web-vitals */ "./node_modules/web-vitals/dist/web-vitals.js")).then(({
      getCLS,
      getFID,
      getFCP,
      getLCP,
      getTTFB
    }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reportWebVitals);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ 1:
/*!**********************************************************************************************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/sarathvs/react-pizza-website-v1/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/sarathvs/react-pizza-website-v1/node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js */"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
__webpack_require__(/*! /Users/sarathvs/react-pizza-website-v1/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/sarathvs/react-pizza-website-v1/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main","vendors~main"]]]);
//# sourceMappingURL=main.chunk.js.map