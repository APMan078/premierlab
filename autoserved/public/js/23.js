(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

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

/***/ "./resources/assets/js/pages/SignUp/Shop/ShopSignUp.jsx":
/*!**************************************************************!*\
  !*** ./resources/assets/js/pages/SignUp/Shop/ShopSignUp.jsx ***!
  \**************************************************************/
/*! exports provided: ShopSignUp, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopSignUp", function() { return ShopSignUp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/history */ "./resources/assets/js/utils/history.js");
/* harmony import */ var _SignUpForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SignUpForm */ "./resources/assets/js/pages/SignUp/Shop/SignUpForm.jsx");
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

const ShopSignUp = () => {
  const onSubmit = signUpData => {
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/signup/shop', signUpData).then(response => {
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
const _default = ShopSignUp;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(parseValidationErrorResponse, "parseValidationErrorResponse", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/SignUp/Shop/ShopSignUp.jsx");
  reactHotLoader.register(ShopSignUp, "ShopSignUp", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/SignUp/Shop/ShopSignUp.jsx");
  reactHotLoader.register(_default, "default", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/SignUp/Shop/ShopSignUp.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/pages/SignUp/Shop/SignUpForm.jsx":
/*!**************************************************************!*\
  !*** ./resources/assets/js/pages/SignUp/Shop/SignUpForm.jsx ***!
  \**************************************************************/
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

  if (!values.shop_name) {
    errors.shop_name = 'This field is required';
  }

  if (!values.first_name) {
    errors.first_name = 'This field is required';
  }

  if (!values.last_name) {
    errors.last_name = 'This field is required';
  }

  if (!values.mobile) {
    errors.contact = 'This field is required';
  }

  if (!values.email) {
    errors.email = 'This field is required';
  } else if (!constants_regexes__WEBPACK_IMPORTED_MODULE_4__["email"].test(values.email)) {
    errors.email = 'Invalid email address';
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
    shop_name: '',
    first_name: '',
    last_name: '',
    email: '',
    mobile: '',
    password: '',
    type: 'shop'
  }
}, () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RegistrationLink__WEBPACK_IMPORTED_MODULE_6__["RegistrationLink"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
  component: components__WEBPACK_IMPORTED_MODULE_5__["TextFormLine"],
  type: "text",
  name: "shop_name",
  labelText: "Shop Name"
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

  reactHotLoader.register(validate, "validate", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/SignUp/Shop/SignUpForm.jsx");
  reactHotLoader.register(SignUpForm, "SignUpForm", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/SignUp/Shop/SignUpForm.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbnN0YW50cy9yZWdleGVzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvU2lnblVwL1JlZ2lzdHJhdGlvbkxpbmsuanN4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvU2lnblVwL1Nob3AvU2hvcFNpZ25VcC5qc3giLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9TaWduVXAvU2hvcC9TaWduVXBGb3JtLmpzeCJdLCJuYW1lcyI6WyJlbWFpbCIsIlJlZ2lzdHJhdGlvbkxpbmsiLCJpdGVtcyIsInRpdGxlIiwibGluayIsInBhcmFtcyIsImxvY2F0aW9uIiwicXVlcnlTdHJpbmciLCJwYXJzZSIsInNlYXJjaCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInBhcnNlVmFsaWRhdGlvbkVycm9yUmVzcG9uc2UiLCJyZXNwb25zZSIsImVycm9ycyIsIlVuaXF1ZSIsIlNob3BTaWduVXAiLCJvblN1Ym1pdCIsInNpZ25VcERhdGEiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwic3RhdHVzIiwiaGlzdG9yeSIsInB1c2giLCJjYXRjaCIsImVycm9yIiwidmFsaWRhdGUiLCJ2YWx1ZXMiLCJzaG9wX25hbWUiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwibW9iaWxlIiwiY29udGFjdCIsImVtYWlsUmVnZXgiLCJ0ZXN0IiwiYWdyZWUiLCJTaWduVXBGb3JtIiwicGFzc3dvcmQiLCJ0eXBlIiwiVGV4dEZvcm1MaW5lIiwiQ29udGFjdEdyb3VwTGluZSIsIkFncmVlRm9ybUxpbmUiLCJsaW5rU3R5bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLE1BQU1BLEtBQUssR0FBRyx1SkFBZDs7Ozs7Ozs7OzswQkFBTUEsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0Fi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b3J0IGNvbnN0IGVtYWlsID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgcXVlcnlTdHJpbmcgZnJvbSAncXVlcnktc3RyaW5nJ1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cblxuXG5leHBvcnQgY29uc3QgUmVnaXN0cmF0aW9uTGluayA9ICgpID0+IHtcbiAgICBjb25zdCBpdGVtcyA9IFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICdJbmRpdmlkdWFsJyxcbiAgICAgICAgbGluazogJy9hY2NvdW50L3NpZ251cCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnU2hvcCcsXG4gICAgICAgIGxpbms6ICcvYWNjb3VudC9zaG9wL3NpZ251cCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnQnVzaW5lc3MnLFxuICAgICAgICBsaW5rOiAnL2FjY291bnQvZmxlZXQvc2lnbnVwJ1xuICAgICAgfVxuICAgIF1cblxuICAgIGNvbnN0IHBhcmFtcyA9IGxvY2F0aW9uID8gcXVlcnlTdHJpbmcucGFyc2UobG9jYXRpb24uc2VhcmNoKSA6IG51bGxcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNCBteC1hdXRvIGJ0bi1ncm91cC1zbSBidG4tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICB7aXRlbXMubWFwKChpdGVtLGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGtleT17aW5kZXh9IHRvPXtpdGVtLmxpbmt9IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGJnLXdoaXRlIGZvbnQtc2VtaWJvbGQgcHktMiBweC00IGJvcmRlciBib3JkZXItZ3JheS00MDAgbm8tdW5kZXJsaW5lIHRleHQteHNcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmltcG9ydCB7IGhpc3RvcnkgfSBmcm9tICd1dGlscy9oaXN0b3J5J1xuXG5pbXBvcnQgeyBTaWduVXBGb3JtIH0gZnJvbSAnLi9TaWduVXBGb3JtJ1xuXG5jb25zdCBwYXJzZVZhbGlkYXRpb25FcnJvclJlc3BvbnNlID0gcmVzcG9uc2UgPT4ge1xuICBsZXQgZXJyb3JzID0ge31cblxuICBpZiAocmVzcG9uc2UuZW1haWwgJiYgcmVzcG9uc2UuZW1haWwuVW5pcXVlKSB7XG4gICAgZXJyb3JzLmVtYWlsID0gJ1RoaXMgZW1haWwgYWxyZWFkeSBleGlzdHMsIHBsZWFzZSB0cnkgYSBkaWZmZXJlbnQgZW1haWwuJ1xuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuXG5leHBvcnQgY29uc3QgU2hvcFNpZ25VcCA9ICgpID0+IHtcbiAgY29uc3Qgb25TdWJtaXQgPSBzaWduVXBEYXRhID0+IHtcbiAgICByZXR1cm4gYXhpb3NcbiAgICAgIC5wb3N0KCcvYXBpL3NpZ251cC9zaG9wJywgc2lnblVwRGF0YSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgaGlzdG9yeS5wdXNoKCcvYWNjb3VudCcpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MjIpIHtcbiAgICAgICAgICAvLyB0aHJvdyBuZXcgU3VibWlzc2lvbkVycm9yKFxuICAgICAgICAgIC8vICAgcGFyc2VWYWxpZGF0aW9uRXJyb3JSZXNwb25zZShlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2VzKVxuICAgICAgICAgIC8vIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxuXG4gIHJldHVybiA8U2lnblVwRm9ybSBvblN1Ym1pdD17b25TdWJtaXR9IC8+XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNob3BTaWduVXBcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgRm9ybWlrLCBGb3JtLCBGaWVsZCB9IGZyb20gJ2Zvcm1paydcblxuaW1wb3J0IHsgbGlua1N0eWxlIH0gZnJvbSAnY29uc3RhbnRzL3N0eWxlcydcbmltcG9ydCB7IGVtYWlsIGFzIGVtYWlsUmVnZXggfSBmcm9tICdjb25zdGFudHMvcmVnZXhlcydcbmltcG9ydCB7IFBhc3N3b3JkRm9ybUxpbmUsIFRleHRGb3JtTGluZSwgTmV1dHJhbEJ1dHRvbiwgQ29udGFjdEdyb3VwTGluZSwgQWdyZWVGb3JtTGluZSB9IGZyb20gJ2NvbXBvbmVudHMnXG5pbXBvcnQgeyBSZWdpc3RyYXRpb25MaW5rIH0gZnJvbSAnLi4vUmVnaXN0cmF0aW9uTGluaydcblxuY29uc3QgdmFsaWRhdGUgPSAodmFsdWVzID0ge30pID0+IHtcbiAgbGV0IGVycm9ycyA9IHt9XG5cbiAgaWYgKCF2YWx1ZXMuc2hvcF9uYW1lKSB7XG4gICAgZXJyb3JzLnNob3BfbmFtZSA9ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJ1xuICB9XG5cbiAgaWYgKCF2YWx1ZXMuZmlyc3RfbmFtZSkge1xuICAgIGVycm9ycy5maXJzdF9uYW1lID0gJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnXG4gIH1cblxuICBpZiAoIXZhbHVlcy5sYXN0X25hbWUpIHtcbiAgICBlcnJvcnMubGFzdF9uYW1lID0gJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnXG4gIH1cblxuICBpZiAoIXZhbHVlcy5tb2JpbGUpIHtcbiAgICBlcnJvcnMuY29udGFjdCA9ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJ1xuICB9XG5cbiAgaWYgKCF2YWx1ZXMuZW1haWwpIHtcbiAgICBlcnJvcnMuZW1haWwgPSAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCdcbiAgfSBlbHNlIGlmICghZW1haWxSZWdleC50ZXN0KHZhbHVlcy5lbWFpbCkpIHtcbiAgICBlcnJvcnMuZW1haWwgPSAnSW52YWxpZCBlbWFpbCBhZGRyZXNzJ1xuICB9XG5cbiAgaWYgKCF2YWx1ZXMuYWdyZWUpIHtcbiAgICBlcnJvcnMuYWdyZWUgPSAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCdcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cblxuZXhwb3J0IGNvbnN0IFNpZ25VcEZvcm0gPSAoeyBvblN1Ym1pdCB9KSA9PiAoXG4gIDxGb3JtaWtcbiAgICB2YWxpZGF0ZT17dmFsaWRhdGV9XG4gICAgb25TdWJtaXQ9e29uU3VibWl0fVxuICAgIGluaXRpYWxWYWx1ZXM9e3sgc2hvcF9uYW1lOiAnJywgZmlyc3RfbmFtZTogJycsIGxhc3RfbmFtZTogJycsIGVtYWlsOiAnJywgbW9iaWxlOiAnJywgcGFzc3dvcmQ6ICcnLCB0eXBlOiAnc2hvcCcgfX1cbiAgPlxuICAgIHsoKSA9PiAoXG4gICAgICA8Rm9ybT5cbiAgICAgICAgPFJlZ2lzdHJhdGlvbkxpbms+PC9SZWdpc3RyYXRpb25MaW5rPlxuICAgICAgICA8RmllbGRcbiAgICAgICAgICBjb21wb25lbnQ9e1RleHRGb3JtTGluZX1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgbmFtZT1cInNob3BfbmFtZVwiXG4gICAgICAgICAgbGFiZWxUZXh0PVwiU2hvcCBOYW1lXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCAtbXgtMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHNtOnctMSBtZDp3LTEvMlwiPlxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEZvcm1MaW5lfVxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJmaXJzdF9uYW1lXCJcbiAgICAgICAgICAgICAgbGFiZWxUZXh0PVwiRmlyc3QgTmFtZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBzbTp3LTEgbWQ6dy0xLzJcIj5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRGb3JtTGluZX1cbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwibGFzdF9uYW1lXCJcbiAgICAgICAgICAgICAgbGFiZWxUZXh0PVwiTGFzdCBOYW1lXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEZpZWxkXG4gICAgICAgICAgY29tcG9uZW50PXtDb250YWN0R3JvdXBMaW5lfVxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBuYW1lPVwibW9iaWxlXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LXNocmluayBmbGV4LWdyb3cgZmxleC1hdXRvIGxlYWRpbmctbm9ybWFsIHctcHggZmxleC0xIGJvcmRlciBoLTEwIGJvcmRlci1ncmV5LWxpZ2h0IHJvdW5kZWQgcm91bmRlZC1sLW5vbmUgcHgtMyByZWxhdGl2ZSBmb2N1czpib3JkZXItYmx1ZSBmb2N1czpzaGFkb3dcIlxuICAgICAgICAgIGxhYmVsVGV4dD1cIk1vYmlsZSBOdW1iZXJcIlxuICAgICAgICAvPlxuICAgICAgICA8RmllbGRcbiAgICAgICAgICBjb21wb25lbnQ9e1RleHRGb3JtTGluZX1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICBsYWJlbFRleHQ9XCJFbWFpbFwiXG4gICAgICAgIC8+XG4gICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgbmFtZT1cImFncmVlXCJcbiAgICAgICAgICAgIGNvbXBvbmVudD17QWdyZWVGb3JtTGluZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBpdGVtcy1jZW50ZXIgbWQ6ZmxleFwiPlxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17bGlua1N0eWxlfSB0bz1cIi9hY2NvdW50L2xvZ2luXCI+XG4gICAgICAgICAgICBPciBMb2dpblxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJib3JkZXItMCBiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlIHB5LTIgcHgtNSBtbC1hdXRvIHJvdW5kZWQtZnVsbFwiPlxuICAgICAgICAgICAgICBTaWduIHVwXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIGl0ZW1zLWNlbnRlciBtZDpoaWRkZW5cIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJvcmRlci0wIGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcHktMiBweC01IHJvdW5kZWQtc20gdy1mdWxsIG1iLTMgaG92ZXI6YmctYmx1ZS02MDBcIj5cbiAgICAgICAgICAgICAgU2lnbiB1cFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWNlbnRlciBib3JkZXItMCBiZy1ncmVlbi0zMDAgdGV4dC13aGl0ZSBweS0yIHB4LTUgcm91bmRlZC1zbSB3LWZ1bGwgbWItMyBob3ZlcjpiZy1ncmVlbi00MDBcIiB0bz1cIi9hY2NvdW50L2xvZ2luXCI+XG4gICAgICAgICAgICAgIG9yIExvZ2luXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L0Zvcm0+XG4gICAgKX1cbiAgPC9Gb3JtaWs+XG4pXG4iXSwic291cmNlUm9vdCI6IiJ9