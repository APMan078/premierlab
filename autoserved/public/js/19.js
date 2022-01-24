(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/core-js/modules/es.string.includes.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.includes.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ "./node_modules/core-js/internals/not-a-regexp.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ "./node_modules/core-js/internals/correct-is-regexp-logic.js");

// `String.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~String(requireObjectCoercible(this))
      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.match.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.match.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

// @@match logic
fixRegExpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : regexp[MATCH];
      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative(nativeMatch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "./node_modules/react-router/es/index.js":
/*!***********************************************!*\
  !*** ./node_modules/react-router/es/index.js ***!
  \***********************************************/
/*! exports provided: MemoryRouter, Prompt, Redirect, Route, Router, StaticRouter, Switch, generatePath, matchPath, withRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MemoryRouter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MemoryRouter */ "./node_modules/react-router/es/MemoryRouter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MemoryRouter", function() { return _MemoryRouter__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Prompt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Prompt */ "./node_modules/react-router/es/Prompt.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Prompt", function() { return _Prompt__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Redirect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Redirect */ "./node_modules/react-router/es/Redirect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return _Redirect__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Route */ "./node_modules/react-router/es/Route.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return _Route__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Router */ "./node_modules/react-router/es/Router.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return _Router__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _StaticRouter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StaticRouter */ "./node_modules/react-router/es/StaticRouter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticRouter", function() { return _StaticRouter__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Switch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Switch */ "./node_modules/react-router/es/Switch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _Switch__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _generatePath__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./generatePath */ "./node_modules/react-router/es/generatePath.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generatePath", function() { return _generatePath__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _matchPath__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./matchPath */ "./node_modules/react-router/es/matchPath.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matchPath", function() { return _matchPath__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _withRouter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./withRouter */ "./node_modules/react-router/es/withRouter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withRouter", function() { return _withRouter__WEBPACK_IMPORTED_MODULE_9__["default"]; });






















/***/ }),

/***/ "./resources/assets/js/pages/PasswordReset/PasswordReset.jsx":
/*!*******************************************************************!*\
  !*** ./resources/assets/js/pages/PasswordReset/PasswordReset.jsx ***!
  \*******************************************************************/
/*! exports provided: PasswordResetComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetComponent", function() { return PasswordResetComponent; });
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");
/* harmony import */ var utils_history__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/history */ "./resources/assets/js/utils/history.js");
/* harmony import */ var store_action_creators_flashMessages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! store/action-creators/flashMessages */ "./resources/assets/js/store/action-creators/flashMessages/index.js");
/* harmony import */ var _PasswordResetForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PasswordResetForm */ "./resources/assets/js/pages/PasswordReset/PasswordResetForm.jsx");




(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};









const PasswordResetComponent = props => {
  const {
    submitPasswordReset
  } = props;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_PasswordResetForm__WEBPACK_IMPORTED_MODULE_10__["PasswordResetForm"], {
    onSubmit: submitPasswordReset
  });
};

const parseValidationFromResponse = data => {
  const errors = {};

  if (data.errors.password && data.errors.password.includes('The password must be at least 6 characters.')) {
    errors.password = 'The password must be at least 6 characters.';
  }

  return errors;
};

const _default = Object(recompose__WEBPACK_IMPORTED_MODULE_5__["compose"])(react_router__WEBPACK_IMPORTED_MODULE_7__["withRouter"], Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(null, (dispatch, ownProps) => ({
  submitPasswordReset: async (values, {
    setErrors
  }) => {
    const {
      match
    } = ownProps;

    try {
      await axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('/api/reset-password', _objectSpread({}, values, {
        token: match.params.resetToken
      }));
      utils_history__WEBPACK_IMPORTED_MODULE_8__["history"].push('/account/login');
      dispatch(Object(store_action_creators_flashMessages__WEBPACK_IMPORTED_MODULE_9__["flashMessage"])('success', 'Password successfully reset'));
    } catch (error) {
      setErrors(parseValidationFromResponse(error.response.data));
    }
  }
})))(PasswordResetComponent);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PasswordResetComponent, "PasswordResetComponent", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/PasswordReset/PasswordReset.jsx");
  reactHotLoader.register(parseValidationFromResponse, "parseValidationFromResponse", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/PasswordReset/PasswordReset.jsx");
  reactHotLoader.register(_default, "default", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/PasswordReset/PasswordReset.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/pages/PasswordReset/PasswordResetForm.jsx":
/*!***********************************************************************!*\
  !*** ./resources/assets/js/pages/PasswordReset/PasswordResetForm.jsx ***!
  \***********************************************************************/
/*! exports provided: PasswordResetForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetForm", function() { return PasswordResetForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components */ "./resources/assets/js/components/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};





const validate = (values = {}) => {
  let errors = {};

  if (!values.email) {
    errors.email = 'This field is required';
  }

  if (!values.password) {
    errors.password = 'This field is required';
  }

  if (!values.password_confirmation) {
    errors.password_confirmation = 'This field is required';
  } else if (values.password !== values.password_confirmation) {
    errors.password_confirmation = "The two passwords don't match";
  }

  return errors;
};

const PasswordResetForm = ({
  onSubmit
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
    validate: validate,
    onSubmit: onSubmit
  }, props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    type: "text",
    name: "email",
    labelText: "Enter your Email",
    component: components__WEBPACK_IMPORTED_MODULE_2__["TextFormLine"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    type: "password",
    name: "password",
    labelText: "Enter a New Password",
    component: components__WEBPACK_IMPORTED_MODULE_2__["PasswordFormLine"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    type: "password",
    name: "password_confirmation",
    labelText: "Confirm Your New Password",
    component: components__WEBPACK_IMPORTED_MODULE_2__["PasswordFormLine"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_2__["NeutralButton"], {
    className: "float-right",
    type: "submit"
  }, "Set New Password")));
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(validate, "validate", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/PasswordReset/PasswordResetForm.jsx");
  reactHotLoader.register(PasswordResetForm, "PasswordResetForm", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/PasswordReset/PasswordResetForm.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5tYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvUGFzc3dvcmRSZXNldC9QYXNzd29yZFJlc2V0LmpzeCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL1Bhc3N3b3JkUmVzZXQvUGFzc3dvcmRSZXNldEZvcm0uanN4Il0sIm5hbWVzIjpbIlBhc3N3b3JkUmVzZXRDb21wb25lbnQiLCJwcm9wcyIsInN1Ym1pdFBhc3N3b3JkUmVzZXQiLCJwYXJzZVZhbGlkYXRpb25Gcm9tUmVzcG9uc2UiLCJkYXRhIiwiZXJyb3JzIiwicGFzc3dvcmQiLCJpbmNsdWRlcyIsImNvbXBvc2UiLCJ3aXRoUm91dGVyIiwiY29ubmVjdCIsImRpc3BhdGNoIiwib3duUHJvcHMiLCJ2YWx1ZXMiLCJzZXRFcnJvcnMiLCJtYXRjaCIsImF4aW9zIiwicG9zdCIsInRva2VuIiwicGFyYW1zIiwicmVzZXRUb2tlbiIsImhpc3RvcnkiLCJwdXNoIiwiZmxhc2hNZXNzYWdlIiwiZXJyb3IiLCJyZXNwb25zZSIsInZhbGlkYXRlIiwiZW1haWwiLCJwYXNzd29yZF9jb25maXJtYXRpb24iLCJQYXNzd29yZFJlc2V0Rm9ybSIsIm9uU3VibWl0IiwiVGV4dEZvcm1MaW5lIiwiUGFzc3dvcmRGb3JtTGluZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxpQkFBaUIsbUJBQU8sQ0FBQyxtRkFBMkI7QUFDcEQsNkJBQTZCLG1CQUFPLENBQUMsMkdBQXVDO0FBQzVF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QUFTLEVBQUMsMkJBSFo7QUFJRSxhQUFTLEVBQUVBLDJEQUFnQkE7QUFKN0IsSUFmRixFQXNCRSwyREFBQyx3REFBRDtBQUFlLGFBQVMsRUFBQyxhQUF6QjtBQUF1QyxRQUFJLEVBQUM7QUFBNUMsd0JBdEJGLENBRkosQ0FERjtBQWdDRCxDQWpDTTs7Ozs7Ozs7OzswQkFwQkROLFE7MEJBb0JPRyxpQiIsImZpbGUiOiJqcy8xOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIG5vdEFSZWdFeHAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbm90LWEtcmVnZXhwJyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciBjb3JyZWN0SXNSZWdFeHBMb2dpYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3JyZWN0LWlzLXJlZ2V4cC1sb2dpYycpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzXG4kKHsgdGFyZ2V0OiAnU3RyaW5nJywgcHJvdG86IHRydWUsIGZvcmNlZDogIWNvcnJlY3RJc1JlZ0V4cExvZ2ljKCdpbmNsdWRlcycpIH0sIHtcbiAgaW5jbHVkZXM6IGZ1bmN0aW9uIGluY2x1ZGVzKHNlYXJjaFN0cmluZyAvKiAsIHBvc2l0aW9uID0gMCAqLykge1xuICAgIHJldHVybiAhIX5TdHJpbmcocmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKSlcbiAgICAgIC5pbmRleE9mKG5vdEFSZWdFeHAoc2VhcmNoU3RyaW5nKSwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmaXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciBhZHZhbmNlU3RyaW5nSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYWR2YW5jZS1zdHJpbmctaW5kZXgnKTtcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG5cbi8vIEBAbWF0Y2ggbG9naWNcbmZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljKCdtYXRjaCcsIDEsIGZ1bmN0aW9uIChNQVRDSCwgbmF0aXZlTWF0Y2gsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICByZXR1cm4gW1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLm1hdGNoYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLm1hdGNoXG4gICAgZnVuY3Rpb24gbWF0Y2gocmVnZXhwKSB7XG4gICAgICB2YXIgTyA9IHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcyk7XG4gICAgICB2YXIgbWF0Y2hlciA9IHJlZ2V4cCA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiByZWdleHBbTUFUQ0hdO1xuICAgICAgcmV0dXJuIG1hdGNoZXIgIT09IHVuZGVmaW5lZCA/IG1hdGNoZXIuY2FsbChyZWdleHAsIE8pIDogbmV3IFJlZ0V4cChyZWdleHApW01BVENIXShTdHJpbmcoTykpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEBtYXRjaF1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEBtYXRjaFxuICAgIGZ1bmN0aW9uIChyZWdleHApIHtcbiAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUobmF0aXZlTWF0Y2gsIHJlZ2V4cCwgdGhpcyk7XG4gICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG5cbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHJlZ2V4cCk7XG4gICAgICB2YXIgUyA9IFN0cmluZyh0aGlzKTtcblxuICAgICAgaWYgKCFyeC5nbG9iYWwpIHJldHVybiByZWdFeHBFeGVjKHJ4LCBTKTtcblxuICAgICAgdmFyIGZ1bGxVbmljb2RlID0gcngudW5pY29kZTtcbiAgICAgIHJ4Lmxhc3RJbmRleCA9IDA7XG4gICAgICB2YXIgQSA9IFtdO1xuICAgICAgdmFyIG4gPSAwO1xuICAgICAgdmFyIHJlc3VsdDtcbiAgICAgIHdoaWxlICgocmVzdWx0ID0gcmVnRXhwRXhlYyhyeCwgUykpICE9PSBudWxsKSB7XG4gICAgICAgIHZhciBtYXRjaFN0ciA9IFN0cmluZyhyZXN1bHRbMF0pO1xuICAgICAgICBBW25dID0gbWF0Y2hTdHI7XG4gICAgICAgIGlmIChtYXRjaFN0ciA9PT0gJycpIHJ4Lmxhc3RJbmRleCA9IGFkdmFuY2VTdHJpbmdJbmRleChTLCB0b0xlbmd0aChyeC5sYXN0SW5kZXgpLCBmdWxsVW5pY29kZSk7XG4gICAgICAgIG4rKztcbiAgICAgIH1cbiAgICAgIHJldHVybiBuID09PSAwID8gbnVsbCA6IEE7XG4gICAgfVxuICBdO1xufSk7XG4iLCJpbXBvcnQgX01lbW9yeVJvdXRlciBmcm9tIFwiLi9NZW1vcnlSb3V0ZXJcIjtcbmV4cG9ydCB7IF9NZW1vcnlSb3V0ZXIgYXMgTWVtb3J5Um91dGVyIH07XG5pbXBvcnQgX1Byb21wdCBmcm9tIFwiLi9Qcm9tcHRcIjtcbmV4cG9ydCB7IF9Qcm9tcHQgYXMgUHJvbXB0IH07XG5pbXBvcnQgX1JlZGlyZWN0IGZyb20gXCIuL1JlZGlyZWN0XCI7XG5leHBvcnQgeyBfUmVkaXJlY3QgYXMgUmVkaXJlY3QgfTtcbmltcG9ydCBfUm91dGUgZnJvbSBcIi4vUm91dGVcIjtcbmV4cG9ydCB7IF9Sb3V0ZSBhcyBSb3V0ZSB9O1xuaW1wb3J0IF9Sb3V0ZXIgZnJvbSBcIi4vUm91dGVyXCI7XG5leHBvcnQgeyBfUm91dGVyIGFzIFJvdXRlciB9O1xuaW1wb3J0IF9TdGF0aWNSb3V0ZXIgZnJvbSBcIi4vU3RhdGljUm91dGVyXCI7XG5leHBvcnQgeyBfU3RhdGljUm91dGVyIGFzIFN0YXRpY1JvdXRlciB9O1xuaW1wb3J0IF9Td2l0Y2ggZnJvbSBcIi4vU3dpdGNoXCI7XG5leHBvcnQgeyBfU3dpdGNoIGFzIFN3aXRjaCB9O1xuaW1wb3J0IF9nZW5lcmF0ZVBhdGggZnJvbSBcIi4vZ2VuZXJhdGVQYXRoXCI7XG5leHBvcnQgeyBfZ2VuZXJhdGVQYXRoIGFzIGdlbmVyYXRlUGF0aCB9O1xuaW1wb3J0IF9tYXRjaFBhdGggZnJvbSBcIi4vbWF0Y2hQYXRoXCI7XG5leHBvcnQgeyBfbWF0Y2hQYXRoIGFzIG1hdGNoUGF0aCB9O1xuaW1wb3J0IF93aXRoUm91dGVyIGZyb20gXCIuL3dpdGhSb3V0ZXJcIjtcbmV4cG9ydCB7IF93aXRoUm91dGVyIGFzIHdpdGhSb3V0ZXIgfTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyBjb21wb3NlIH0gZnJvbSAncmVjb21wb3NlJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IHsgaGlzdG9yeSB9IGZyb20gJ3V0aWxzL2hpc3RvcnknXG5pbXBvcnQgeyBmbGFzaE1lc3NhZ2UgfSBmcm9tICdzdG9yZS9hY3Rpb24tY3JlYXRvcnMvZmxhc2hNZXNzYWdlcydcblxuaW1wb3J0IHsgUGFzc3dvcmRSZXNldEZvcm0gfSBmcm9tICcuL1Bhc3N3b3JkUmVzZXRGb3JtJ1xuXG5leHBvcnQgY29uc3QgUGFzc3dvcmRSZXNldENvbXBvbmVudCA9IHByb3BzID0+IHtcbiAgY29uc3QgeyBzdWJtaXRQYXNzd29yZFJlc2V0IH0gPSBwcm9wc1xuICByZXR1cm4gPFBhc3N3b3JkUmVzZXRGb3JtIG9uU3VibWl0PXtzdWJtaXRQYXNzd29yZFJlc2V0fSAvPlxufVxuXG5jb25zdCBwYXJzZVZhbGlkYXRpb25Gcm9tUmVzcG9uc2UgPSBkYXRhID0+IHtcbiAgY29uc3QgZXJyb3JzID0ge31cblxuICBpZiAoXG4gICAgZGF0YS5lcnJvcnMucGFzc3dvcmQgJiZcbiAgICBkYXRhLmVycm9ycy5wYXNzd29yZC5pbmNsdWRlcygnVGhlIHBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzLicpXG4gICkge1xuICAgIGVycm9ycy5wYXNzd29yZCA9ICdUaGUgcGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnMuJ1xuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuICB3aXRoUm91dGVyLFxuICBjb25uZWN0KG51bGwsIChkaXNwYXRjaCwgb3duUHJvcHMpID0+ICh7XG4gICAgc3VibWl0UGFzc3dvcmRSZXNldDogYXN5bmMgKHZhbHVlcywgeyBzZXRFcnJvcnMgfSkgPT4ge1xuICAgICAgY29uc3QgeyBtYXRjaCB9ID0gb3duUHJvcHNcblxuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9yZXNldC1wYXNzd29yZCcsIHtcbiAgICAgICAgICAuLi52YWx1ZXMsXG4gICAgICAgICAgdG9rZW46IG1hdGNoLnBhcmFtcy5yZXNldFRva2VuXG4gICAgICAgIH0pXG5cbiAgICAgICAgaGlzdG9yeS5wdXNoKCcvYWNjb3VudC9sb2dpbicpXG4gICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnc3VjY2VzcycsICdQYXNzd29yZCBzdWNjZXNzZnVsbHkgcmVzZXQnKSlcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHNldEVycm9ycyhwYXJzZVZhbGlkYXRpb25Gcm9tUmVzcG9uc2UoZXJyb3IucmVzcG9uc2UuZGF0YSkpXG4gICAgICB9XG4gICAgfVxuICB9KSlcbikoUGFzc3dvcmRSZXNldENvbXBvbmVudClcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEZvcm1paywgRm9ybSwgRmllbGQgfSBmcm9tICdmb3JtaWsnXG5cbmltcG9ydCB7IFRleHRGb3JtTGluZSwgUGFzc3dvcmRGb3JtTGluZSwgTmV1dHJhbEJ1dHRvbiB9IGZyb20gJ2NvbXBvbmVudHMnXG5cbmNvbnN0IHZhbGlkYXRlID0gKHZhbHVlcyA9IHt9KSA9PiB7XG4gIGxldCBlcnJvcnMgPSB7fVxuXG4gIGlmICghdmFsdWVzLmVtYWlsKSB7XG4gICAgZXJyb3JzLmVtYWlsID0gJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnXG4gIH1cblxuICBpZiAoIXZhbHVlcy5wYXNzd29yZCkge1xuICAgIGVycm9ycy5wYXNzd29yZCA9ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJ1xuICB9XG5cbiAgaWYgKCF2YWx1ZXMucGFzc3dvcmRfY29uZmlybWF0aW9uKSB7XG4gICAgZXJyb3JzLnBhc3N3b3JkX2NvbmZpcm1hdGlvbiA9ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJ1xuICB9IGVsc2UgaWYgKHZhbHVlcy5wYXNzd29yZCAhPT0gdmFsdWVzLnBhc3N3b3JkX2NvbmZpcm1hdGlvbikge1xuICAgIGVycm9ycy5wYXNzd29yZF9jb25maXJtYXRpb24gPSBcIlRoZSB0d28gcGFzc3dvcmRzIGRvbid0IG1hdGNoXCJcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cblxuZXhwb3J0IGNvbnN0IFBhc3N3b3JkUmVzZXRGb3JtID0gKHsgb25TdWJtaXQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxGb3JtaWsgdmFsaWRhdGU9e3ZhbGlkYXRlfSBvblN1Ym1pdD17b25TdWJtaXR9PlxuICAgICAge3Byb3BzID0+IChcbiAgICAgICAgPEZvcm0+XG4gICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgbGFiZWxUZXh0PVwiRW50ZXIgeW91ciBFbWFpbFwiXG4gICAgICAgICAgICBjb21wb25lbnQ9e1RleHRGb3JtTGluZX1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIGxhYmVsVGV4dD1cIkVudGVyIGEgTmV3IFBhc3N3b3JkXCJcbiAgICAgICAgICAgIGNvbXBvbmVudD17UGFzc3dvcmRGb3JtTGluZX1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkX2NvbmZpcm1hdGlvblwiXG4gICAgICAgICAgICBsYWJlbFRleHQ9XCJDb25maXJtIFlvdXIgTmV3IFBhc3N3b3JkXCJcbiAgICAgICAgICAgIGNvbXBvbmVudD17UGFzc3dvcmRGb3JtTGluZX1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPE5ldXRyYWxCdXR0b24gY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICBTZXQgTmV3IFBhc3N3b3JkXG4gICAgICAgICAgPC9OZXV0cmFsQnV0dG9uPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICApfVxuICAgIDwvRm9ybWlrPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9