(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./resources/assets/js/constants/regexes.js":
/*!**************************************************!*\
  !*** ./resources/assets/js/constants/regexes.js ***!
  \**************************************************/
/*! exports provided: email */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "email", function() { return email; });
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(email, "email", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/constants/regexes.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/pages/LogIn/LogIn.jsx":
/*!***************************************************!*\
  !*** ./resources/assets/js/pages/LogIn/LogIn.jsx ***!
  \***************************************************/
/*! exports provided: LogInComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInComponent", function() { return LogInComponent; });
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var utils_history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/history */ "./resources/assets/js/utils/history.js");
/* harmony import */ var store_action_creators_session__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store/action-creators/session */ "./resources/assets/js/store/action-creators/session/index.js");
/* harmony import */ var _LogInForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LogInForm */ "./resources/assets/js/pages/LogIn/LogInForm.jsx");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};






const LogInComponent = props => {
  const {
    attemptLogin
  } = props;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LogInForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onSubmit: attemptLogin
  });
};

const parseValidationFromResponse = response => {
  let errors = {};

  if (response.errors === true && response.message === 'Incorrect login details') {
    errors.email = 'Incorrect login details';
  }

  return errors;
};

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, dispatch => ({
  attemptLogin: async (loginDetails, {
    setErrors
  }) => {
    try {
      await dispatch(Object(store_action_creators_session__WEBPACK_IMPORTED_MODULE_4__["logIn"])(loginDetails));
      utils_history__WEBPACK_IMPORTED_MODULE_3__["history"].push('/account');
    } catch (error) {
      setErrors(parseValidationFromResponse(error.response.data));
    }
  }
}))(LogInComponent);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LogInComponent, "LogInComponent", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/LogIn/LogIn.jsx");
  reactHotLoader.register(parseValidationFromResponse, "parseValidationFromResponse", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/LogIn/LogIn.jsx");
  reactHotLoader.register(_default, "default", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/LogIn/LogIn.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/pages/LogIn/LogInForm.jsx":
/*!*******************************************************!*\
  !*** ./resources/assets/js/pages/LogIn/LogInForm.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var constants_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! constants/styles */ "./resources/assets/js/constants/styles.js");
/* harmony import */ var constants_regexes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! constants/regexes */ "./resources/assets/js/constants/regexes.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components */ "./resources/assets/js/components/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};








const validateLogin = (values = {}) => {
  let errors = {};

  if (!values.email) {
    errors.email = 'This field is required';
  } else if (!constants_regexes__WEBPACK_IMPORTED_MODULE_4__["email"].test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'This field is required';
  }

  return errors;
};

const _default = ({
  onSubmit
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    onSubmit: onSubmit,
    validate: validateLogin,
    initialValues: {
      email: '',
      password: ''
    }
  }, props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    name: "email",
    labelText: "Email",
    component: components__WEBPACK_IMPORTED_MODULE_5__["TextFormLine"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "password",
    name: "password",
    labelText: "Password",
    component: components__WEBPACK_IMPORTED_MODULE_5__["PasswordFormLine"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "checkbox",
    name: "remember_me",
    labelText: "Remember me",
    component: components__WEBPACK_IMPORTED_MODULE_5__["CheckBoxFormLine"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hidden items-center md:flex"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: constants_styles__WEBPACK_IMPORTED_MODULE_3__["linkStyle"],
    to: "/account/signup"
  }, "Create a new account"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "inline-block px-2"
  }, "|"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: constants_styles__WEBPACK_IMPORTED_MODULE_3__["linkStyle"],
    to: "/account/forgot-password"
  }, "Forgot Password?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "border-0 bg-blue-500 hover:bg-blue-600 text-white py-2 px-5 ml-auto rounded-full"
  }, "Log In")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block items-center md:hidden"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "border-0 bg-blue-500 text-white py-2 px-5 rounded-sm w-full mb-3 hover:bg-blue-600"
  }, "Log In"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "block text-center border-0 bg-green-300 text-white py-2 px-5 rounded-sm w-full mb-3 hover:bg-green-400",
    to: "/account/signup"
  }, "Create a new account"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "block text-center border-0 bg-gray-400 text-white py-2 px-5 rounded-sm w-full mb-3 hover:bg-gray-500",
    to: "/account/forgot-password"
  }, "Forgot Password?"))));
};

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(validateLogin, "validateLogin", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/LogIn/LogInForm.jsx");
  reactHotLoader.register(_default, "default", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/LogIn/LogInForm.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbnN0YW50cy9yZWdleGVzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvTG9nSW4vTG9nSW4uanN4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvTG9nSW4vTG9nSW5Gb3JtLmpzeCJdLCJuYW1lcyI6WyJlbWFpbCIsIkxvZ0luQ29tcG9uZW50IiwicHJvcHMiLCJhdHRlbXB0TG9naW4iLCJwYXJzZVZhbGlkYXRpb25Gcm9tUmVzcG9uc2UiLCJyZXNwb25zZSIsImVycm9ycyIsIm1lc3NhZ2UiLCJjb25uZWN0IiwiZGlzcGF0Y2giLCJsb2dpbkRldGFpbHMiLCJzZXRFcnJvcnMiLCJsb2dJbiIsImhpc3RvcnkiLCJwdXNoIiwiZXJyb3IiLCJkYXRhIiwidmFsaWRhdGVMb2dpbiIsInZhbHVlcyIsImVtYWlsUmVnZXgiLCJ0ZXN0IiwicGFzc3dvcmQiLCJvblN1Ym1pdCIsIlRleHRGb3JtTGluZSIsIlBhc3N3b3JkRm9ybUxpbmUiLCJDaGVja0JveEZvcm1MaW5lIiwibGlua1N0eWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxNQUFNQSxLQUFLLEdBQUcsdUpBQWQ7Ozs7Ozs7Ozs7MEJBQU1BLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FiO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFTyxNQUFNQyxjQUFjLEdBQUdDLEtBQUssSUFBSTtBQUNyQyxRQUFNO0FBQUVDO0FBQUYsTUFBbUJELEtBQXpCO0FBRUEsU0FBTywyREFBQyxrREFBRDtBQUFXLFlBQVEsRUFBRUM7QUFBckIsSUFBUDtBQUNELENBSk07O0FBTVAsTUFBTUMsMkJBQTJCLEdBQUdDLFFBQVEsSUFBSTtBQUM5QyxNQUFJQyxNQUFNLEdBQUcsRUFBYjs7QUFDQSxNQUNFRCxRQUFRLENBQUNDLE1BQVQsS0FB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LHFEQUFEO0FBQU0sYUFBUyxFQUFDLHdHQUFoQjtBQUF5SCxNQUFFLEVBQUM7QUFBNUgsNEJBSkYsRUFPRSwyREFBQyxxREFBRDtBQUFNLGFBQVMsRUFBQyxzR0FBaEI7QUFBdUgsTUFBRSxFQUFDO0FBQTFILHdCQVBGLENBaENGLENBTkosQ0FERjtBQXVERCxDOztBQXhEYzs7Ozs7Ozs7OzswQkFoQlRULGEiLCJmaWxlIjoianMvMzMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZW1haWwgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC9cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHsgaGlzdG9yeSB9IGZyb20gJ3V0aWxzL2hpc3RvcnknXG5pbXBvcnQgeyBsb2dJbiB9IGZyb20gJ3N0b3JlL2FjdGlvbi1jcmVhdG9ycy9zZXNzaW9uJ1xuXG5pbXBvcnQgTG9nSW5Gb3JtIGZyb20gJy4vTG9nSW5Gb3JtJ1xuXG5leHBvcnQgY29uc3QgTG9nSW5Db21wb25lbnQgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgYXR0ZW1wdExvZ2luIH0gPSBwcm9wc1xuXG4gIHJldHVybiA8TG9nSW5Gb3JtIG9uU3VibWl0PXthdHRlbXB0TG9naW59IC8+XG59XG5cbmNvbnN0IHBhcnNlVmFsaWRhdGlvbkZyb21SZXNwb25zZSA9IHJlc3BvbnNlID0+IHtcbiAgbGV0IGVycm9ycyA9IHt9XG4gIGlmIChcbiAgICByZXNwb25zZS5lcnJvcnMgPT09IHRydWUgJiZcbiAgICByZXNwb25zZS5tZXNzYWdlID09PSAnSW5jb3JyZWN0IGxvZ2luIGRldGFpbHMnXG4gICkge1xuICAgIGVycm9ycy5lbWFpbCA9ICdJbmNvcnJlY3QgbG9naW4gZGV0YWlscydcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBkaXNwYXRjaCA9PiAoe1xuICBhdHRlbXB0TG9naW46IGFzeW5jIChsb2dpbkRldGFpbHMsIHsgc2V0RXJyb3JzIH0pID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgZGlzcGF0Y2gobG9nSW4obG9naW5EZXRhaWxzKSlcbiAgICAgIGhpc3RvcnkucHVzaCgnL2FjY291bnQnKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBzZXRFcnJvcnMocGFyc2VWYWxpZGF0aW9uRnJvbVJlc3BvbnNlKGVycm9yLnJlc3BvbnNlLmRhdGEpKVxuICAgIH1cbiAgfVxufSkpKExvZ0luQ29tcG9uZW50KVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBGb3JtaWssIEZvcm0sIEZpZWxkIH0gZnJvbSAnZm9ybWlrJ1xuXG5pbXBvcnQgeyBsaW5rU3R5bGUgfSBmcm9tICdjb25zdGFudHMvc3R5bGVzJ1xuaW1wb3J0IHsgZW1haWwgYXMgZW1haWxSZWdleCB9IGZyb20gJ2NvbnN0YW50cy9yZWdleGVzJ1xuaW1wb3J0IHsgUGFzc3dvcmRGb3JtTGluZSwgVGV4dEZvcm1MaW5lLCBOZXV0cmFsQnV0dG9uLCBDaGVja0JveEZvcm1MaW5lIH0gZnJvbSAnY29tcG9uZW50cydcblxuY29uc3QgdmFsaWRhdGVMb2dpbiA9ICh2YWx1ZXMgPSB7fSkgPT4ge1xuICBsZXQgZXJyb3JzID0ge31cblxuICBpZiAoIXZhbHVlcy5lbWFpbCkge1xuICAgIGVycm9ycy5lbWFpbCA9ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJ1xuICB9IGVsc2UgaWYgKCFlbWFpbFJlZ2V4LnRlc3QodmFsdWVzLmVtYWlsKSkge1xuICAgIGVycm9ycy5lbWFpbCA9ICdJbnZhbGlkIGVtYWlsIGFkZHJlc3MnXG4gIH1cblxuICBpZiAoIXZhbHVlcy5wYXNzd29yZCkge1xuICAgIGVycm9ycy5wYXNzd29yZCA9ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJ1xuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuXG5leHBvcnQgZGVmYXVsdCAoeyBvblN1Ym1pdCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEZvcm1pa1xuICAgICAgb25TdWJtaXQ9e29uU3VibWl0fVxuICAgICAgdmFsaWRhdGU9e3ZhbGlkYXRlTG9naW59XG4gICAgICBpbml0aWFsVmFsdWVzPXt7IGVtYWlsOiAnJywgcGFzc3dvcmQ6ICcnIH19XG4gICAgPlxuICAgICAge3Byb3BzID0+IChcbiAgICAgICAgPEZvcm0+XG4gICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgbGFiZWxUZXh0PVwiRW1haWxcIlxuICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0Rm9ybUxpbmV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgbGFiZWxUZXh0PVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgY29tcG9uZW50PXtQYXNzd29yZEZvcm1MaW5lfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgbmFtZT1cInJlbWVtYmVyX21lXCJcbiAgICAgICAgICAgIGxhYmVsVGV4dD1cIlJlbWVtYmVyIG1lXCJcbiAgICAgICAgICAgIGNvbXBvbmVudD17Q2hlY2tCb3hGb3JtTGluZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIGl0ZW1zLWNlbnRlciBtZDpmbGV4XCI+XG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9e2xpbmtTdHlsZX0gdG89XCIvYWNjb3VudC9zaWdudXBcIj5cbiAgICAgICAgICAgICAgQ3JlYXRlIGEgbmV3IGFjY291bnRcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBweC0yXCI+fDwvc3Bhbj5cbiAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17bGlua1N0eWxlfSB0bz1cIi9hY2NvdW50L2ZvcmdvdC1wYXNzd29yZFwiPlxuICAgICAgICAgICAgICBGb3Jnb3QgUGFzc3dvcmQ/XG4gICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJvcmRlci0wIGJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNjAwIHRleHQtd2hpdGUgcHktMiBweC01IG1sLWF1dG8gcm91bmRlZC1mdWxsXCI+XG4gICAgICAgICAgICAgIExvZyBJblxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayBpdGVtcy1jZW50ZXIgbWQ6aGlkZGVuXCI+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJib3JkZXItMCBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHB5LTIgcHgtNSByb3VuZGVkLXNtIHctZnVsbCBtYi0zIGhvdmVyOmJnLWJsdWUtNjAwXCI+XG4gICAgICAgICAgICAgIExvZyBJblxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWNlbnRlciBib3JkZXItMCBiZy1ncmVlbi0zMDAgdGV4dC13aGl0ZSBweS0yIHB4LTUgcm91bmRlZC1zbSB3LWZ1bGwgbWItMyBob3ZlcjpiZy1ncmVlbi00MDBcIiB0bz1cIi9hY2NvdW50L3NpZ251cFwiPlxuICAgICAgICAgICAgICBDcmVhdGUgYSBuZXcgYWNjb3VudFxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1jZW50ZXIgYm9yZGVyLTAgYmctZ3JheS00MDAgdGV4dC13aGl0ZSBweS0yIHB4LTUgcm91bmRlZC1zbSB3LWZ1bGwgbWItMyBob3ZlcjpiZy1ncmF5LTUwMFwiIHRvPVwiL2FjY291bnQvZm9yZ290LXBhc3N3b3JkXCI+XG4gICAgICAgICAgICAgIEZvcmdvdCBQYXNzd29yZD9cbiAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0Zvcm0+XG4gICAgICApfVxuICAgIDwvRm9ybWlrPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9