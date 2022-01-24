(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

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

/***/ "./resources/assets/js/pages/SignUp/Fleet/FleetSignUp.jsx":
/*!****************************************************************!*\
  !*** ./resources/assets/js/pages/SignUp/Fleet/FleetSignUp.jsx ***!
  \****************************************************************/
/*! exports provided: FleetSignUp, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FleetSignUp", function() { return FleetSignUp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/history */ "./resources/assets/js/utils/history.js");
/* harmony import */ var _SignUpForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SignUpForm */ "./resources/assets/js/pages/SignUp/Fleet/SignUpForm.jsx");
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

const FleetSignUp = () => {
  const onSubmit = signUpData => {
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/signup/fleet', signUpData).then(response => {
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
const _default = FleetSignUp;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(parseValidationErrorResponse, "parseValidationErrorResponse", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/SignUp/Fleet/FleetSignUp.jsx");
  reactHotLoader.register(FleetSignUp, "FleetSignUp", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/SignUp/Fleet/FleetSignUp.jsx");
  reactHotLoader.register(_default, "default", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/SignUp/Fleet/FleetSignUp.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/pages/SignUp/Fleet/SignUpForm.jsx":
/*!***************************************************************!*\
  !*** ./resources/assets/js/pages/SignUp/Fleet/SignUpForm.jsx ***!
  \***************************************************************/
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
/* harmony import */ var _RegistrationLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../RegistrationLink */ "./resources/assets/js/pages/SignUp/RegistrationLink.jsx");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};









const validate = (values = {}) => {
  let errors = {};

  if (!values.fleet_name) {
    errors.fleet_name = 'This field is required';
  }

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
    fleet_name: '',
    first_name: '',
    last_name: '',
    mobile: '',
    email: '',
    password: '',
    type: 'fleet'
  }
}, () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RegistrationLink__WEBPACK_IMPORTED_MODULE_6__["RegistrationLink"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
  component: components__WEBPACK_IMPORTED_MODULE_5__["TextFormLine"],
  type: "text",
  name: "fleet_name",
  labelText: "Fleet Name"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
  component: components__WEBPACK_IMPORTED_MODULE_5__["ContactGroupLine"],
  type: "text",
  name: "mobile",
  className: "flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-blue focus:shadow",
  labelText: "Mobile Number"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
  component: components__WEBPACK_IMPORTED_MODULE_5__["TextFormLine"],
  type: "text",
  name: "email",
  labelText: "Email"
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
}, "Sign up")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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

  reactHotLoader.register(validate, "validate", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/SignUp/Fleet/SignUpForm.jsx");
  reactHotLoader.register(SignUpForm, "SignUpForm", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/SignUp/Fleet/SignUpForm.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbnN0YW50cy9yZWdleGVzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvU2lnblVwL0ZsZWV0L0ZsZWV0U2lnblVwLmpzeCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL1NpZ25VcC9GbGVldC9TaWduVXBGb3JtLmpzeCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL1NpZ25VcC9SZWdpc3RyYXRpb25MaW5rLmpzeCJdLCJuYW1lcyI6WyJlbWFpbCIsInBhcnNlVmFsaWRhdGlvbkVycm9yUmVzcG9uc2UiLCJyZXNwb25zZSIsImVycm9ycyIsIlVuaXF1ZSIsIkZsZWV0U2lnblVwIiwib25TdWJtaXQiLCJzaWduVXBEYXRhIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInN0YXR1cyIsImhpc3RvcnkiLCJwdXNoIiwiY2F0Y2giLCJlcnJvciIsInZhbGlkYXRlIiwidmFsdWVzIiwiZmxlZXRfbmFtZSIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJlbWFpbFJlZ2V4IiwidGVzdCIsIm1vYmlsZSIsImFncmVlIiwiU2lnblVwRm9ybSIsInBhc3N3b3JkIiwidHlwZSIsIlRleHRGb3JtTGluZSIsIkNvbnRhY3RHcm91cExpbmUiLCJBZ3JlZUZvcm1MaW5lIiwibGlua1N0eWxlIiwiUmVnaXN0cmF0aW9uTGluayIsIml0ZW1zIiwidGl0bGUiLCJsaW5rIiwicGFyYW1zIiwibG9jYXRpb24iLCJxdWVyeVN0cmluZyIsInBhcnNlIiwic2VhcmNoIiwibWFwIiwiaXRlbSIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxNQUFNQSxLQUFLLEdBQUcsdUpBQWQ7Ozs7Ozs7Ozs7MEJBQU1BLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWI7QUFDQTtBQUVB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bnN0IGVtYWlsID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmltcG9ydCB7IGhpc3RvcnkgfSBmcm9tICd1dGlscy9oaXN0b3J5J1xuXG5pbXBvcnQgeyBTaWduVXBGb3JtIH0gZnJvbSAnLi9TaWduVXBGb3JtJ1xuXG5jb25zdCBwYXJzZVZhbGlkYXRpb25FcnJvclJlc3BvbnNlID0gcmVzcG9uc2UgPT4ge1xuICBsZXQgZXJyb3JzID0ge31cblxuICBpZiAocmVzcG9uc2UuZW1haWwgJiYgcmVzcG9uc2UuZW1haWwuVW5pcXVlKSB7XG4gICAgZXJyb3JzLmVtYWlsID0gJ1RoaXMgZW1haWwgYWxyZWFkeSBleGlzdHMsIHBsZWFzZSB0cnkgYSBkaWZmZXJlbnQgZW1haWwuJ1xuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuXG5leHBvcnQgY29uc3QgRmxlZXRTaWduVXAgPSAoKSA9PiB7XG4gIGNvbnN0IG9uU3VibWl0ID0gc2lnblVwRGF0YSA9PiB7XG4gICAgcmV0dXJuIGF4aW9zXG4gICAgICAucG9zdCgnL2FwaS9zaWdudXAvZmxlZXQnLCBzaWduVXBEYXRhKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICBoaXN0b3J5LnB1c2goJy9hY2NvdW50JylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQyMikge1xuICAgICAgICAgIC8vIHRocm93IG5ldyBTdWJtaXNzaW9uRXJyb3IoXG4gICAgICAgICAgLy8gICBwYXJzZVZhbGlkYXRpb25FcnJvclJlc3BvbnNlKGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZXMpXG4gICAgICAgICAgLy8gKVxuICAgICAgICB9XG4gICAgICB9KVxuICB9XG5cbiAgcmV0dXJuIDxTaWduVXBGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0gLz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmxlZXRTaWduVXBcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgRm9ybWlrLCBGb3JtLCBGaWVsZCB9IGZyb20gJ2Zvcm1paydcblxuaW1wb3J0IHsgbGlua1N0eWxlIH0gZnJvbSAnY29uc3RhbnRzL3N0eWxlcydcbmltcG9ydCB7IGVtYWlsIGFzIGVtYWlsUmVnZXggfSBmcm9tICdjb25zdGFudHMvcmVnZXhlcydcbmltcG9ydCB7IFBhc3N3b3JkRm9ybUxpbmUsIFRleHRGb3JtTGluZSwgTmV1dHJhbEJ1dHRvbiwgQ29udGFjdEdyb3VwTGluZSwgQWdyZWVGb3JtTGluZSB9IGZyb20gJ2NvbXBvbmVudHMnXG5pbXBvcnQgeyBSZWdpc3RyYXRpb25MaW5rIH0gZnJvbSAnLi4vUmVnaXN0cmF0aW9uTGluaydcblxuY29uc3QgdmFsaWRhdGUgPSAodmFsdWVzID0ge30pID0+IHtcbiAgbGV0IGVycm9ycyA9IHt9XG5cbiAgaWYgKCF2YWx1ZXMuZmxlZXRfbmFtZSkge1xuICAgIGVycm9ycy5mbGVldF9uYW1lID0gJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnXG4gIH1cblxuICBpZiAoIXZhbHVlcy5maXJzdF9uYW1lKSB7XG4gICAgZXJyb3JzLmZpcnN0X25hbWUgPSAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCdcbiAgfVxuXG4gIGlmICghdmFsdWVzLmxhc3RfbmFtZSkge1xuICAgIGVycm9ycy5sYXN0X25hbWUgPSAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCdcbiAgfVxuXG4gIGlmICghdmFsdWVzLmVtYWlsKSB7XG4gICAgZXJyb3JzLmVtYWlsID0gJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnXG4gIH0gZWxzZSBpZiAoIWVtYWlsUmVnZXgudGVzdCh2YWx1ZXMuZW1haWwpKSB7XG4gICAgZXJyb3JzLmVtYWlsID0gJ0ludmFsaWQgZW1haWwgYWRkcmVzcydcbiAgfVxuXG4gIGlmICghdmFsdWVzLm1vYmlsZSkge1xuICAgIGVycm9ycy5tb2JpbGUgPSAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCdcbiAgfVxuXG4gIGlmICghdmFsdWVzLmFncmVlKSB7XG4gICAgZXJyb3JzLmFncmVlID0gJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnXG4gIH1cblxuICByZXR1cm4gZXJyb3JzXG59XG5cbmV4cG9ydCBjb25zdCBTaWduVXBGb3JtID0gKHsgb25TdWJtaXQgfSkgPT4gKFxuICA8Rm9ybWlrXG4gICAgdmFsaWRhdGU9e3ZhbGlkYXRlfVxuICAgIG9uU3VibWl0PXtvblN1Ym1pdH1cbiAgICBpbml0aWFsVmFsdWVzPXt7IGZsZWV0X25hbWU6ICcnLCBmaXJzdF9uYW1lOiAnJywgbGFzdF9uYW1lOiAnJywgbW9iaWxlOiAnJywgZW1haWw6ICcnLCBwYXNzd29yZDogJycsIHR5cGU6ICdmbGVldCcgfX1cbiAgPlxuICAgIHsoKSA9PiAoXG4gICAgICA8Rm9ybT5cbiAgICAgICAgPFJlZ2lzdHJhdGlvbkxpbms+PC9SZWdpc3RyYXRpb25MaW5rPlxuICAgICAgICA8RmllbGRcbiAgICAgICAgICBjb21wb25lbnQ9e1RleHRGb3JtTGluZX1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgbmFtZT1cImZsZWV0X25hbWVcIlxuICAgICAgICAgIGxhYmVsVGV4dD1cIkZsZWV0IE5hbWVcIlxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIC1teC0yXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgc206dy0xIG1kOnctMS8yXCI+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0Rm9ybUxpbmV9XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT1cImZpcnN0X25hbWVcIlxuICAgICAgICAgICAgICBsYWJlbFRleHQ9XCJGaXJzdCBOYW1lXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHNtOnctMSBtZDp3LTEvMlwiPlxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEZvcm1MaW5lfVxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJsYXN0X25hbWVcIlxuICAgICAgICAgICAgICBsYWJlbFRleHQ9XCJMYXN0IE5hbWVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC0yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8RmllbGRcbiAgICAgICAgICBjb21wb25lbnQ9e0NvbnRhY3RHcm91cExpbmV9XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJtb2JpbGVcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rIGZsZXgtZ3JvdyBmbGV4LWF1dG8gbGVhZGluZy1ub3JtYWwgdy1weCBmbGV4LTEgYm9yZGVyIGgtMTAgYm9yZGVyLWdyZXktbGlnaHQgcm91bmRlZCByb3VuZGVkLWwtbm9uZSBweC0zIHJlbGF0aXZlIGZvY3VzOmJvcmRlci1ibHVlIGZvY3VzOnNoYWRvd1wiXG4gICAgICAgICAgbGFiZWxUZXh0PVwiTW9iaWxlIE51bWJlclwiXG4gICAgICAgIC8+XG4gICAgICAgIDxGaWVsZFxuICAgICAgICAgIGNvbXBvbmVudD17VGV4dEZvcm1MaW5lfVxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgIGxhYmVsVGV4dD1cIkVtYWlsXCJcbiAgICAgICAgLz5cbiAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICBuYW1lPVwiYWdyZWVcIlxuICAgICAgICAgICAgY29tcG9uZW50PXtBZ3JlZUZvcm1MaW5lfVxuICAgICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIGl0ZW1zLWNlbnRlciBtZDpmbGV4XCI+XG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtsaW5rU3R5bGV9IHRvPVwiL2FjY291bnQvbG9naW5cIj5cbiAgICAgICAgICAgIE9yIExvZ2luXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJvcmRlci0wIGJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNjAwIHRleHQtd2hpdGUgcHktMiBweC01IG1sLWF1dG8gcm91bmRlZC1mdWxsXCI+XG4gICAgICAgICAgICAgIFNpZ24gdXBcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgaXRlbXMtY2VudGVyIG1kOmhpZGRlblwiPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJvcmRlci0wIGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcHktMiBweC01IHJvdW5kZWQtc20gdy1mdWxsIG1iLTMgaG92ZXI6YmctYmx1ZS02MDBcIj5cbiAgICAgICAgICAgIFNpZ24gdXBcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWNlbnRlciBib3JkZXItMCBiZy1ncmVlbi0zMDAgdGV4dC13aGl0ZSBweS0yIHB4LTUgcm91bmRlZC1zbSB3LWZ1bGwgbWItMyBob3ZlcjpiZy1ncmVlbi00MDBcIiB0bz1cIi9hY2NvdW50L2xvZ2luXCI+XG4gICAgICAgICAgICBvciBMb2dpblxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0Zvcm0+XG4gICAgKX1cbiAgPC9Gb3JtaWs+XG4pXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgcXVlcnlTdHJpbmcgZnJvbSAncXVlcnktc3RyaW5nJ1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cblxuXG5leHBvcnQgY29uc3QgUmVnaXN0cmF0aW9uTGluayA9ICgpID0+IHtcbiAgICBjb25zdCBpdGVtcyA9IFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICdJbmRpdmlkdWFsJyxcbiAgICAgICAgbGluazogJy9hY2NvdW50L3NpZ251cCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnU2hvcCcsXG4gICAgICAgIGxpbms6ICcvYWNjb3VudC9zaG9wL3NpZ251cCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnQnVzaW5lc3MnLFxuICAgICAgICBsaW5rOiAnL2FjY291bnQvZmxlZXQvc2lnbnVwJ1xuICAgICAgfVxuICAgIF1cblxuICAgIGNvbnN0IHBhcmFtcyA9IGxvY2F0aW9uID8gcXVlcnlTdHJpbmcucGFyc2UobG9jYXRpb24uc2VhcmNoKSA6IG51bGxcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNCBteC1hdXRvIGJ0bi1ncm91cC1zbSBidG4tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICB7aXRlbXMubWFwKChpdGVtLGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGtleT17aW5kZXh9IHRvPXtpdGVtLmxpbmt9IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGJnLXdoaXRlIGZvbnQtc2VtaWJvbGQgcHktMiBweC00IGJvcmRlciBib3JkZXItZ3JheS00MDAgbm8tdW5kZXJsaW5lIHRleHQteHNcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9