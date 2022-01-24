(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

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

/***/ "./resources/assets/js/pages/SignUp/RegistrationLink.jsx":
/*!***************************************************************!*\
  !*** ./resources/assets/js/pages/SignUp/RegistrationLink.jsx ***!
  \***************************************************************/
/*! exports provided: RegistrationLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationLink", function() { return RegistrationLink; });
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.search */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};





const RegistrationLink = () => {
  const items = [{
    title: 'Individual',
    link: '/account/signup'
  }, {
    title: 'Shop',
    link: '/account/shop/signup'
  }, {
    title: 'Business',
    link: '/account/fleet/signup'
  }];
  const params = location ? query_string__WEBPACK_IMPORTED_MODULE_3___default.a.parse(location.search) : null;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex items-center"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mb-4 mx-auto btn-group-sm btn-group"
  }, items.map((item, index) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
    key: index,
    to: item.link,
    className: "cursor-pointer bg-white font-semibold py-2 px-4 border border-gray-400 no-underline text-xs",
    activeClassName: "active"
  }, item.title))));
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(RegistrationLink, "RegistrationLink", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/SignUp/RegistrationLink.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/pages/SignUp/SignUp.jsx":
/*!*****************************************************!*\
  !*** ./resources/assets/js/pages/SignUp/SignUp.jsx ***!
  \*****************************************************/
/*! exports provided: SignUp, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUp", function() { return SignUp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/history */ "./resources/assets/js/utils/history.js");
/* harmony import */ var _SignUpForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SignUpForm */ "./resources/assets/js/pages/SignUp/SignUpForm.jsx");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};






const parseValidationErrorResponse = response => {
  let errors = {};

  if (response.email && response.email.Unique) {
    errors.email = 'This email already exists, please try a different email.';
  }

  return errors;
};

const SignUp = () => {
  const onSubmit = signUpData => {
    console.log(signUpData);
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/signup', signUpData).then(response => {
      if (response.status === 200) {
        utils_history__WEBPACK_IMPORTED_MODULE_2__["history"].push('/account');
      }
    }).catch(error => {
      if (error.response.status === 422) {// throw new SubmissionError(
        //   parseValidationErrorResponse(error.response.data.messages)
        // )
      }
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SignUpForm__WEBPACK_IMPORTED_MODULE_3__["SignUpForm"], {
    onSubmit: onSubmit
  });
};
const _default = SignUp;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(parseValidationErrorResponse, "parseValidationErrorResponse", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/SignUp/SignUp.jsx");
  reactHotLoader.register(SignUp, "SignUp", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/SignUp/SignUp.jsx");
  reactHotLoader.register(_default, "default", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/SignUp/SignUp.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/pages/SignUp/SignUpForm.jsx":
/*!*********************************************************!*\
  !*** ./resources/assets/js/pages/SignUp/SignUpForm.jsx ***!
  \*********************************************************/
/*! exports provided: SignUpForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpForm", function() { return SignUpForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var constants_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! constants/styles */ "./resources/assets/js/constants/styles.js");
/* harmony import */ var constants_regexes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! constants/regexes */ "./resources/assets/js/constants/regexes.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components */ "./resources/assets/js/components/index.js");
/* harmony import */ var _RegistrationLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RegistrationLink */ "./resources/assets/js/pages/SignUp/RegistrationLink.jsx");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};









const validate = (values = {}) => {
  let errors = {};

  if (!values.first_name) {
    errors.first_name = 'This field is required';
  }

  if (!values.last_name) {
    errors.last_name = 'This field is required';
  }

  if (!values.email) {
    errors.email = 'This field is required';
  } else if (!constants_regexes__WEBPACK_IMPORTED_MODULE_4__["email"].test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.mobile) {
    errors.mobile = 'This field is required';
  }

  if (!values.password) {
    errors.password = 'This field is required';
  }

  if (values.password !== values.password_confirmation) {
    errors.password_confirmation = 'Password does not match';
  }

  if (!values.agree) {
    errors.agree = 'This field is required';
  }

  return errors;
};

const SignUpForm = ({
  onSubmit
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
  validate: validate,
  onSubmit: onSubmit,
  initialValues: {
    first_name: '',
    last_name: '',
    mobile: '',
    email: '',
    password: '',
    password_confirmation: ''
  }
}, () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RegistrationLink__WEBPACK_IMPORTED_MODULE_6__["RegistrationLink"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "flex flex-wrap -mx-2"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "w-full sm:w-1 md:w-1/2"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
  component: components__WEBPACK_IMPORTED_MODULE_5__["TextFormLine"],
  type: "text",
  name: "first_name",
  labelText: "First Name",
  className: "px-2"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "w-full sm:w-1 md:w-1/2"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
  component: components__WEBPACK_IMPORTED_MODULE_5__["TextFormLine"],
  type: "text",
  name: "last_name",
  labelText: "Last Name",
  className: "px-2"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
  component: components__WEBPACK_IMPORTED_MODULE_5__["TextFormLine"],
  type: "text",
  name: "mobile",
  labelText: "Mobile Number"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
  component: components__WEBPACK_IMPORTED_MODULE_5__["TextFormLine"],
  type: "text",
  name: "email",
  labelText: "Email"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
  component: components__WEBPACK_IMPORTED_MODULE_5__["PasswordFormLine"],
  type: "password",
  name: "password",
  labelText: "Password"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
  component: components__WEBPACK_IMPORTED_MODULE_5__["PasswordFormLine"],
  type: "password",
  name: "password_confirmation",
  labelText: "Confirm Password"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
  type: "checkbox",
  name: "agree",
  component: components__WEBPACK_IMPORTED_MODULE_5__["AgreeFormLine"]
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "hidden items-center md:flex"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
  className: constants_styles__WEBPACK_IMPORTED_MODULE_3__["linkStyle"],
  to: "/account/login"
}, "Or Login"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
  type: "submit",
  className: "border-0 bg-blue-500 hover:bg-blue-600 text-white py-2 px-5 ml-auto rounded-full"
}, "Signup")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "block items-center md:hidden"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
  type: "submit",
  className: "border-0 bg-blue-500 text-white py-2 px-5 rounded-sm w-full mb-3 hover:bg-blue-600"
}, "Sign up"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
  className: "block text-center border-0 bg-green-300 text-white py-2 px-5 rounded-sm w-full mb-3 hover:bg-green-400",
  to: "/account/login"
}, "or Login"))));
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(validate, "validate", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/SignUp/SignUpForm.jsx");
  reactHotLoader.register(SignUpForm, "SignUpForm", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/SignUp/SignUpForm.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbnN0YW50cy9yZWdleGVzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvU2lnblVwL1JlZ2lzdHJhdGlvbkxpbmsuanN4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvU2lnblVwL1NpZ25VcC5qc3giLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9TaWduVXAvU2lnblVwRm9ybS5qc3giXSwibmFtZXMiOlsiZW1haWwiLCJSZWdpc3RyYXRpb25MaW5rIiwiaXRlbXMiLCJ0aXRsZSIsImxpbmsiLCJwYXJhbXMiLCJsb2NhdGlvbiIsInF1ZXJ5U3RyaW5nIiwicGFyc2UiLCJzZWFyY2giLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJwYXJzZVZhbGlkYXRpb25FcnJvclJlc3BvbnNlIiwicmVzcG9uc2UiLCJlcnJvcnMiLCJVbmlxdWUiLCJTaWduVXAiLCJvblN1Ym1pdCIsInNpZ25VcERhdGEiLCJjb25zb2xlIiwibG9nIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInN0YXR1cyIsImhpc3RvcnkiLCJwdXNoIiwiY2F0Y2giLCJlcnJvciIsInZhbGlkYXRlIiwidmFsdWVzIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsImVtYWlsUmVnZXgiLCJ0ZXN0IiwibW9iaWxlIiwicGFzc3dvcmQiLCJwYXNzd29yZF9jb25maXJtYXRpb24iLCJhZ3JlZSIsIlNpZ25VcEZvcm0iLCJUZXh0Rm9ybUxpbmUiLCJQYXNzd29yZEZvcm1MaW5lIiwiQWdyZWVGb3JtTGluZSIsImxpbmtTdHlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sTUFBTUEsS0FBSyxHQUFHLHVKQUFkOzs7Ozs7Ozs7OzBCQUFNQSxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWI7QUFDQTtB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QUFBUSxNQUFJLEVBQUMsUUFBYjtBQUFzQixXQUFTLEVBQUM7QUFBaEMsYUFERixFQUlFLDJEQUFDLHFEQUFEO0FBQU0sV0FBUyxFQUFDLHdHQUFoQjtBQUF5SCxJQUFFLEVBQUM7QUFBNUgsY0FKRixDQTNERixDQU5KLENBREs7Ozs7Ozs7Ozs7MEJBcENEZCxROzBCQW9DT1UsVSIsImZpbGUiOiJqcy8yNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBlbWFpbCA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkL1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHF1ZXJ5U3RyaW5nIGZyb20gJ3F1ZXJ5LXN0cmluZydcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5cblxuZXhwb3J0IGNvbnN0IFJlZ2lzdHJhdGlvbkxpbmsgPSAoKSA9PiB7XG4gICAgY29uc3QgaXRlbXMgPSBbXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnSW5kaXZpZHVhbCcsXG4gICAgICAgIGxpbms6ICcvYWNjb3VudC9zaWdudXAnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ1Nob3AnLFxuICAgICAgICBsaW5rOiAnL2FjY291bnQvc2hvcC9zaWdudXAnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ0J1c2luZXNzJyxcbiAgICAgICAgbGluazogJy9hY2NvdW50L2ZsZWV0L3NpZ251cCdcbiAgICAgIH1cbiAgICBdXG5cbiAgICBjb25zdCBwYXJhbXMgPSBsb2NhdGlvbiA/IHF1ZXJ5U3RyaW5nLnBhcnNlKGxvY2F0aW9uLnNlYXJjaCkgOiBudWxsXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTQgbXgtYXV0byBidG4tZ3JvdXAtc20gYnRuLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSxpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8TmF2TGluayBrZXk9e2luZGV4fSB0bz17aXRlbS5saW5rfSBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBiZy13aGl0ZSBmb250LXNlbWlib2xkIHB5LTIgcHgtNCBib3JkZXIgYm9yZGVyLWdyYXktNDAwIG5vLXVuZGVybGluZSB0ZXh0LXhzXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5pbXBvcnQgeyBoaXN0b3J5IH0gZnJvbSAndXRpbHMvaGlzdG9yeSdcblxuaW1wb3J0IHsgU2lnblVwRm9ybSB9IGZyb20gJy4vU2lnblVwRm9ybSdcblxuY29uc3QgcGFyc2VWYWxpZGF0aW9uRXJyb3JSZXNwb25zZSA9IHJlc3BvbnNlID0+IHtcbiAgbGV0IGVycm9ycyA9IHt9XG5cbiAgaWYgKHJlc3BvbnNlLmVtYWlsICYmIHJlc3BvbnNlLmVtYWlsLlVuaXF1ZSkge1xuICAgIGVycm9ycy5lbWFpbCA9ICdUaGlzIGVtYWlsIGFscmVhZHkgZXhpc3RzLCBwbGVhc2UgdHJ5IGEgZGlmZmVyZW50IGVtYWlsLidcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cblxuZXhwb3J0IGNvbnN0IFNpZ25VcCA9ICgpID0+IHtcbiAgY29uc3Qgb25TdWJtaXQgPSBzaWduVXBEYXRhID0+IHtcbiAgICBjb25zb2xlLmxvZyhzaWduVXBEYXRhKVxuICAgIHJldHVybiBheGlvc1xuICAgICAgLnBvc3QoJy9hcGkvc2lnbnVwJywgc2lnblVwRGF0YSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgaGlzdG9yeS5wdXNoKCcvYWNjb3VudCcpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MjIpIHtcbiAgICAgICAgICAvLyB0aHJvdyBuZXcgU3VibWlzc2lvbkVycm9yKFxuICAgICAgICAgIC8vICAgcGFyc2VWYWxpZGF0aW9uRXJyb3JSZXNwb25zZShlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2VzKVxuICAgICAgICAgIC8vIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxuXG4gIHJldHVybiA8U2lnblVwRm9ybSBvblN1Ym1pdD17b25TdWJtaXR9IC8+XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25VcFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBGb3JtaWssIEZvcm0sIEZpZWxkIH0gZnJvbSAnZm9ybWlrJ1xuXG5pbXBvcnQgeyBsaW5rU3R5bGUgfSBmcm9tICdjb25zdGFudHMvc3R5bGVzJ1xuaW1wb3J0IHsgZW1haWwgYXMgZW1haWxSZWdleCB9IGZyb20gJ2NvbnN0YW50cy9yZWdleGVzJ1xuaW1wb3J0IHsgUGFzc3dvcmRGb3JtTGluZSwgVGV4dEZvcm1MaW5lLCBOZXV0cmFsQnV0dG9uLCBBZ3JlZUZvcm1MaW5lIH0gZnJvbSAnY29tcG9uZW50cydcbmltcG9ydCB7IFJlZ2lzdHJhdGlvbkxpbmsgfSBmcm9tICcuL1JlZ2lzdHJhdGlvbkxpbmsnXG5cbmNvbnN0IHZhbGlkYXRlID0gKHZhbHVlcyA9IHt9KSA9PiB7XG4gIGxldCBlcnJvcnMgPSB7fVxuXG4gIGlmICghdmFsdWVzLmZpcnN0X25hbWUpIHtcbiAgICBlcnJvcnMuZmlyc3RfbmFtZSA9ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJ1xuICB9XG5cbiAgaWYgKCF2YWx1ZXMubGFzdF9uYW1lKSB7XG4gICAgZXJyb3JzLmxhc3RfbmFtZSA9ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJ1xuICB9XG5cbiAgaWYgKCF2YWx1ZXMuZW1haWwpIHtcbiAgICBlcnJvcnMuZW1haWwgPSAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCdcbiAgfSBlbHNlIGlmICghZW1haWxSZWdleC50ZXN0KHZhbHVlcy5lbWFpbCkpIHtcbiAgICBlcnJvcnMuZW1haWwgPSAnSW52YWxpZCBlbWFpbCBhZGRyZXNzJ1xuICB9XG5cbiAgaWYgKCF2YWx1ZXMubW9iaWxlKSB7XG4gICAgZXJyb3JzLm1vYmlsZSA9ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJ1xuICB9XG5cbiAgaWYgKCF2YWx1ZXMucGFzc3dvcmQpIHtcbiAgICBlcnJvcnMucGFzc3dvcmQgPSAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCdcbiAgfVxuXG4gIGlmICh2YWx1ZXMucGFzc3dvcmQgIT09IHZhbHVlcy5wYXNzd29yZF9jb25maXJtYXRpb24pIHtcbiAgICBlcnJvcnMucGFzc3dvcmRfY29uZmlybWF0aW9uID0gJ1Bhc3N3b3JkIGRvZXMgbm90IG1hdGNoJ1xuICB9XG5cbiAgaWYgKCF2YWx1ZXMuYWdyZWUpIHtcbiAgICBlcnJvcnMuYWdyZWUgPSAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCdcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cblxuZXhwb3J0IGNvbnN0IFNpZ25VcEZvcm0gPSAoeyBvblN1Ym1pdCB9KSA9PiAoXG4gIDxGb3JtaWtcbiAgICB2YWxpZGF0ZT17dmFsaWRhdGV9XG4gICAgb25TdWJtaXQ9e29uU3VibWl0fVxuICAgIGluaXRpYWxWYWx1ZXM9e3sgZmlyc3RfbmFtZTogJycsIGxhc3RfbmFtZTogJycsIG1vYmlsZTogJycsIGVtYWlsOiAnJywgcGFzc3dvcmQ6ICcnLCBwYXNzd29yZF9jb25maXJtYXRpb246ICcnIH19XG4gID5cbiAgICB7KCkgPT4gKFxuICAgICAgPEZvcm0+XG4gICAgICAgIDxSZWdpc3RyYXRpb25MaW5rPjwvUmVnaXN0cmF0aW9uTGluaz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCAtbXgtMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHNtOnctMSBtZDp3LTEvMlwiPlxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEZvcm1MaW5lfVxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJmaXJzdF9uYW1lXCJcbiAgICAgICAgICAgICAgbGFiZWxUZXh0PVwiRmlyc3QgTmFtZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBzbTp3LTEgbWQ6dy0xLzJcIj5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRGb3JtTGluZX1cbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwibGFzdF9uYW1lXCJcbiAgICAgICAgICAgICAgbGFiZWxUZXh0PVwiTGFzdCBOYW1lXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEZpZWxkXG4gICAgICAgICAgY29tcG9uZW50PXtUZXh0Rm9ybUxpbmV9XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJtb2JpbGVcIlxuICAgICAgICAgIGxhYmVsVGV4dD1cIk1vYmlsZSBOdW1iZXJcIlxuICAgICAgICAvPlxuICAgICAgICA8RmllbGRcbiAgICAgICAgICBjb21wb25lbnQ9e1RleHRGb3JtTGluZX1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICBsYWJlbFRleHQ9XCJFbWFpbFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxGaWVsZFxuICAgICAgICAgIGNvbXBvbmVudD17UGFzc3dvcmRGb3JtTGluZX1cbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgbGFiZWxUZXh0PVwiUGFzc3dvcmRcIlxuICAgICAgICAvPlxuICAgICAgICA8RmllbGRcbiAgICAgICAgICBjb21wb25lbnQ9e1Bhc3N3b3JkRm9ybUxpbmV9XG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICBuYW1lPVwicGFzc3dvcmRfY29uZmlybWF0aW9uXCJcbiAgICAgICAgICBsYWJlbFRleHQ9XCJDb25maXJtIFBhc3N3b3JkXCJcbiAgICAgICAgLz5cbiAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICBuYW1lPVwiYWdyZWVcIlxuICAgICAgICAgICAgY29tcG9uZW50PXtBZ3JlZUZvcm1MaW5lfVxuICAgICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIGl0ZW1zLWNlbnRlciBtZDpmbGV4XCI+XG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtsaW5rU3R5bGV9IHRvPVwiL2FjY291bnQvbG9naW5cIj5cbiAgICAgICAgICAgIE9yIExvZ2luXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJvcmRlci0wIGJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNjAwIHRleHQtd2hpdGUgcHktMiBweC01IG1sLWF1dG8gcm91bmRlZC1mdWxsXCI+XG4gICAgICAgICAgICAgIFNpZ251cFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayBpdGVtcy1jZW50ZXIgbWQ6aGlkZGVuXCI+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYm9yZGVyLTAgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBweS0yIHB4LTUgcm91bmRlZC1zbSB3LWZ1bGwgbWItMyBob3ZlcjpiZy1ibHVlLTYwMFwiPlxuICAgICAgICAgICAgU2lnbiB1cFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtY2VudGVyIGJvcmRlci0wIGJnLWdyZWVuLTMwMCB0ZXh0LXdoaXRlIHB5LTIgcHgtNSByb3VuZGVkLXNtIHctZnVsbCBtYi0zIGhvdmVyOmJnLWdyZWVuLTQwMFwiIHRvPVwiL2FjY291bnQvbG9naW5cIj5cbiAgICAgICAgICAgIG9yIExvZ2luXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRm9ybT5cbiAgICApfVxuICA8L0Zvcm1paz5cbilcbiJdLCJzb3VyY2VSb290IjoiIn0=