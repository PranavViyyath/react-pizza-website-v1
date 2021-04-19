webpackHotUpdate("main",{

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
background:#0d0909;

`;
const FooterWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
display: flex;
flex-direction: column;
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
justify-content: space-between;
align-items: center;
max-width: 1100px;
margin: 16px auto 0 auto;

@media screen and(max-width: 820px)
{
    flex-direction: column;
}`;
const SocialLogo = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Link"])`
color: #fff;
justify-self: start;
cursor: pointer;
text-decoration: none;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-bottom: 16px;
font-weight: bold;

`;
const SocialIcons = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
display: flex;
justify-content: space-between;
align-items: center;
width: 10px;
`;
const SocialLink = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a`
color: #fff;
font-size: 36px;
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

/***/ })

})
//# sourceMappingURL=main.0500fb63b69945da6520.hot-update.js.map