(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

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

/***/ "./resources/assets/js/pages/Settings/Forms/AppSettingsForm.jsx":
/*!**********************************************************************!*\
  !*** ./resources/assets/js/pages/Settings/Forms/AppSettingsForm.jsx ***!
  \**********************************************************************/
/*! exports provided: AppSettingsForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettingsForm", function() { return AppSettingsForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};


const AppSettingsForm = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Application Settings Placeholder");
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AppSettingsForm, "AppSettingsForm", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Settings/Forms/AppSettingsForm.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/pages/Settings/Forms/BillingSettingsForm.jsx":
/*!**************************************************************************!*\
  !*** ./resources/assets/js/pages/Settings/Forms/BillingSettingsForm.jsx ***!
  \**************************************************************************/
/*! exports provided: BillingSettingsForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingSettingsForm", function() { return BillingSettingsForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};


const BillingSettingsForm = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Billing Settings Placeholder");
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(BillingSettingsForm, "BillingSettingsForm", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Settings/Forms/BillingSettingsForm.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/pages/Settings/Forms/ChangePasswordForm.jsx":
/*!*************************************************************************!*\
  !*** ./resources/assets/js/pages/Settings/Forms/ChangePasswordForm.jsx ***!
  \*************************************************************************/
/*! exports provided: ChangePasswordForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordForm", function() { return ChangePasswordForm; });
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
  const nonEmptyFieldNames = ['old_password', 'new_password', 'new_password_confirmation'];
  nonEmptyFieldNames.forEach(fieldName => {
    if (!values[fieldName]) {
      errors[fieldName] = 'This field is required';
    }
  });

  if (values.new_password && values.new_password_confirmation !== values.new_password) {
    errors.new_password_confirmation = 'This password does not match the new password you entered';
  }

  return errors;
};

const ChangePasswordForm = ({
  onSubmit
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
  validate: validate,
  onSubmit: onSubmit,
  initialValues: {
    old_password: '',
    new_password: '',
    new_password_confirmation: ''
  }
}, props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
  className: "mb-2",
  name: "old_password",
  component: components__WEBPACK_IMPORTED_MODULE_2__["PasswordFormLine"],
  labelText: "Enter your old password"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "flex items-start mb-4"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
  name: "new_password",
  className: "flex-grow",
  labelText: "New Password",
  component: components__WEBPACK_IMPORTED_MODULE_2__["PasswordFormLine"]
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
  className: "flex-grow pl-4",
  component: components__WEBPACK_IMPORTED_MODULE_2__["PasswordFormLine"],
  name: "new_password_confirmation",
  labelText: "Repeat your new password"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "flex border-grey-light hover:text-white"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_2__["PositiveButton"], {
  type: "submit",
  className: "ml-auto hover:bg-gray-800"
}, "Change Password"))));
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(validate, "validate", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Settings/Forms/ChangePasswordForm.jsx");
  reactHotLoader.register(ChangePasswordForm, "ChangePasswordForm", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Settings/Forms/ChangePasswordForm.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/pages/Settings/Forms/UserSettingsForm.jsx":
/*!***********************************************************************!*\
  !*** ./resources/assets/js/pages/Settings/Forms/UserSettingsForm.jsx ***!
  \***********************************************************************/
/*! exports provided: UserSettingsForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSettingsForm", function() { return UserSettingsForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var constants_regexes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! constants/regexes */ "./resources/assets/js/constants/regexes.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components */ "./resources/assets/js/components/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};







function validateNumber(number) {
  const regex = /^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return regex.test(number);
}

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
  } else if (!constants_regexes__WEBPACK_IMPORTED_MODULE_3__["email"].test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (validateNumber(values.mobile) == false) {
    errors.mobile = 'Incorrect Mobile Number Format';
  }

  return errors;
};

const UserSettingsFormComponent = ({
  user,
  onSubmit,
  className = '',
  avatarUploadHandler
}) => {
  const initializeValues = obj => JSON.parse(JSON.stringify(obj, (k, v) => v === null ? '' : v));

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    validate: validate,
    onSubmit: onSubmit,
    initialValues: initializeValues(user),
    validateOnChange: false
  }, () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    className: className
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center my-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    name: "avatar",
    component: components__WEBPACK_IMPORTED_MODULE_4__["PictureUpload"],
    uploadHandler: avatarUploadHandler,
    className: "mr-10"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-grow"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    name: "first_name",
    component: components__WEBPACK_IMPORTED_MODULE_4__["TextFormLine"],
    labelText: "First Name"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    name: "last_name",
    component: components__WEBPACK_IMPORTED_MODULE_4__["TextFormLine"],
    labelText: "Last Name"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-sm text-gray-700 py-2"
  }, "Email Address"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border p-2 text-gray-500"
  }, user.email || ''), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    name: "mobile",
    component: components__WEBPACK_IMPORTED_MODULE_4__["TextFormLine"],
    labelText: "Contact Number"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-sm text-gray-700 py-2"
  }, "Country"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border p-2 text-gray-500"
  }, user.country || ''))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex border-grey-light hover:text-white"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_4__["PositiveButton"], {
    type: "submit",
    className: "ml-auto hover:bg-gray-800"
  }, "Save User Details"))));
};

const UserSettingsForm = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(state => {
  const {
    session: {
      currentUser
    }
  } = state;
  return {
    user: state.entities.users[currentUser]
  };
}, null)(UserSettingsFormComponent);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(validateNumber, "validateNumber", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Settings/Forms/UserSettingsForm.jsx");
  reactHotLoader.register(validate, "validate", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Settings/Forms/UserSettingsForm.jsx");
  reactHotLoader.register(UserSettingsFormComponent, "UserSettingsFormComponent", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Settings/Forms/UserSettingsForm.jsx");
  reactHotLoader.register(UserSettingsForm, "UserSettingsForm", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Settings/Forms/UserSettingsForm.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/pages/Settings/Forms/index.js":
/*!***********************************************************!*\
  !*** ./resources/assets/js/pages/Settings/Forms/index.js ***!
  \***********************************************************/
/*! exports provided: UserSettingsForm, ChangePasswordForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserSettingsForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserSettingsForm */ "./resources/assets/js/pages/Settings/Forms/UserSettingsForm.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserSettingsForm", function() { return _UserSettingsForm__WEBPACK_IMPORTED_MODULE_0__["UserSettingsForm"]; });

/* harmony import */ var _ChangePasswordForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChangePasswordForm */ "./resources/assets/js/pages/Settings/Forms/ChangePasswordForm.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordForm", function() { return _ChangePasswordForm__WEBPACK_IMPORTED_MODULE_1__["ChangePasswordForm"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};




/***/ }),

/***/ "./resources/assets/js/pages/Settings/SettingsRoutes.jsx":
/*!***************************************************************!*\
  !*** ./resources/assets/js/pages/Settings/SettingsRoutes.jsx ***!
  \***************************************************************/
/*! exports provided: SettingsRoutes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsRoutes", function() { return SettingsRoutes; });
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components */ "./resources/assets/js/components/index.js");
/* harmony import */ var constants_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! constants/styles */ "./resources/assets/js/constants/styles.js");
/* harmony import */ var _UserSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UserSettings */ "./resources/assets/js/pages/Settings/UserSettings.jsx");
/* harmony import */ var _Forms_AppSettingsForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Forms/AppSettingsForm */ "./resources/assets/js/pages/Settings/Forms/AppSettingsForm.jsx");
/* harmony import */ var _Forms_BillingSettingsForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Forms/BillingSettingsForm */ "./resources/assets/js/pages/Settings/Forms/BillingSettingsForm.jsx");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};










const CardLink = ({
  to,
  className = '',
  children
}) => {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    to: to,
    activeClassName: "bg-blue-lightest",
    className: "block border-b border-grey-light p-4 ".concat(constants_styles__WEBPACK_IMPORTED_MODULE_4__["linkStyle"], " ").concat(className)
  }, children);
};

const redirectUserSettings = () => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
  from: "/account/settings",
  to: "/account/settings/user"
});

const SettingsRoutes = ({
  match: {
    url: currentUrl
  }
}) => {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "bb-white px-10 py-5"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_3__["PageHeader"], {
    title: "Settings",
    subTitle: "Accounts"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    to: "".concat(currentUrl, "/user"),
    className: "ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "material-icons"
  }, "fingerprint"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Account")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    to: "".concat(currentUrl, "/app"),
    className: "ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "material-icons"
  }, "touch_app"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Application")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    to: "".concat(currentUrl, "/billing"),
    className: "ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "material-icons"
  }, "account_balance_wallet"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Billing"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: "".concat(currentUrl, "/"),
    component: redirectUserSettings
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: "".concat(currentUrl, "/user"),
    render: () => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UserSettings__WEBPACK_IMPORTED_MODULE_5__["UserSettings"], null)
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: "".concat(currentUrl, "/app"),
    render: () => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Forms_AppSettingsForm__WEBPACK_IMPORTED_MODULE_6__["AppSettingsForm"], null)
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: "".concat(currentUrl, "/billing"),
    render: () => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Forms_BillingSettingsForm__WEBPACK_IMPORTED_MODULE_7__["BillingSettingsForm"], null)
  }))));
};
const _default = SettingsRoutes;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CardLink, "CardLink", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Settings/SettingsRoutes.jsx");
  reactHotLoader.register(redirectUserSettings, "redirectUserSettings", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Settings/SettingsRoutes.jsx");
  reactHotLoader.register(SettingsRoutes, "SettingsRoutes", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Settings/SettingsRoutes.jsx");
  reactHotLoader.register(_default, "default", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Settings/SettingsRoutes.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/pages/Settings/UserSettings.jsx":
/*!*************************************************************!*\
  !*** ./resources/assets/js/pages/Settings/UserSettings.jsx ***!
  \*************************************************************/
/*! exports provided: UserSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSettings", function() { return UserSettings; });
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store/actions */ "./resources/assets/js/store/actions.js");
/* harmony import */ var store_action_creators_avatars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store/action-creators/avatars */ "./resources/assets/js/store/action-creators/avatars/index.js");
/* harmony import */ var store_action_creators_flashMessages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! store/action-creators/flashMessages */ "./resources/assets/js/store/action-creators/flashMessages/index.js");
/* harmony import */ var store_action_creators_users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! store/action-creators/users */ "./resources/assets/js/store/action-creators/users/index.js");
/* harmony import */ var _Forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Forms */ "./resources/assets/js/pages/Settings/Forms/index.js");


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









const UserSettingsComponent = ({
  saveUserSettings,
  avatarUploadHandler,
  handleChangePassword
}) => {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
    className: "p-10 bg-white rounded shadow"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    className: "text-grey-darkest font-normal"
  }, "Your Details"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Forms__WEBPACK_IMPORTED_MODULE_7__["UserSettingsForm"], {
    className: "mb-4",
    onSubmit: saveUserSettings,
    avatarUploadHandler: avatarUploadHandler
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
    className: "p-10 bg-white rounded shadow mt-10"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    className: "text-grey-darkest font-normal"
  }, "Change Your Password"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Forms__WEBPACK_IMPORTED_MODULE_7__["ChangePasswordForm"], {
    onSubmit: handleChangePassword
  })));
};

const userValidationFromResponse = values => {
  let errors = {};
  return errors;
};

const passwordValidationFromResponse = values => {
  let errors = {};
  return errors;
};

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.currentUser]
});

const mapDispatchToProps = dispatch => ({
  saveUserSettings: async (userData, {
    setErrors
  }) => {
    const response = await dispatch(Object(store_action_creators_users__WEBPACK_IMPORTED_MODULE_6__["saveUser"])(userData));

    if (response.status === 400) {
      setErrors(userValidationFromResponse(response.data.data));
    }

    dispatch(Object(store_action_creators_flashMessages__WEBPACK_IMPORTED_MODULE_5__["flashMessage"])('success', 'Successfully saved user info', 4000));
    dispatch({
      type: store_actions__WEBPACK_IMPORTED_MODULE_3__["userActions"].SET_CURRENT_USER_INFO,
      users: response.data.data
    });
  },
  uploadUserAvatar: (fileData, userSlug) => dispatch(Object(store_action_creators_avatars__WEBPACK_IMPORTED_MODULE_4__["uploadUserAvatar"])(fileData, userSlug)),
  changePassword: async (data, {
    setErrors
  }) => {
    try {
      await dispatch(Object(store_action_creators_users__WEBPACK_IMPORTED_MODULE_6__["changePassword"])(data));
      dispatch(Object(store_action_creators_flashMessages__WEBPACK_IMPORTED_MODULE_5__["flashMessage"])('success', 'Your password was successfully changed', 4000));
    } catch (error) {
      if (error.response.status === 422) {
        setErrors(passwordValidationFromResponse(error.response.data.data));
      }

      if (error.response.status === 400) {
        setErrors({
          old_password: 'The current password was incorrect'
        });
      }
    }
  }
});

const mergeProps = (stateProps, dispatchProps, ownProps) => _objectSpread({}, stateProps, {}, dispatchProps, {}, ownProps, {
  avatarUploadHandler: fileData => {
    return dispatchProps.uploadUserAvatar(fileData, stateProps.currentUser.slug);
  },
  handleChangePassword: values => {
    const data = _objectSpread({
      slug: stateProps.currentUser.slug
    }, values);

    return dispatchProps.changePassword(data);
  }
});

const UserSettings = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps, mergeProps)(UserSettingsComponent);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(UserSettingsComponent, "UserSettingsComponent", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Settings/UserSettings.jsx");
  reactHotLoader.register(userValidationFromResponse, "userValidationFromResponse", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Settings/UserSettings.jsx");
  reactHotLoader.register(passwordValidationFromResponse, "passwordValidationFromResponse", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Settings/UserSettings.jsx");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Settings/UserSettings.jsx");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Settings/UserSettings.jsx");
  reactHotLoader.register(mergeProps, "mergeProps", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Settings/UserSettings.jsx");
  reactHotLoader.register(UserSettings, "UserSettings", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Settings/UserSettings.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/store/action-creators/avatars/avatars.js":
/*!**********************************************************************!*\
  !*** ./resources/assets/js/store/action-creators/avatars/avatars.js ***!
  \**********************************************************************/
/*! exports provided: uploadUserAvatar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadUserAvatar", function() { return uploadUserAvatar; });
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var store_action_creators_requests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! store/action-creators/requests */ "./resources/assets/js/store/action-creators/requests/index.js");
/* harmony import */ var store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store/actions */ "./resources/assets/js/store/actions.js");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};




const uploadUserAvatar = (fileData, userSlug) => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_2__["makeRequest"])('set-user-avatar', () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/users/avatar', fileData)));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_3__["userActions"].SET_AVATAR,
    userSlug,
    avatar: response.data.fileUrl
  });
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(uploadUserAvatar, "uploadUserAvatar", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/avatars/avatars.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/store/action-creators/avatars/index.js":
/*!********************************************************************!*\
  !*** ./resources/assets/js/store/action-creators/avatars/index.js ***!
  \********************************************************************/
/*! exports provided: uploadUserAvatar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _avatars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./avatars */ "./resources/assets/js/store/action-creators/avatars/avatars.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uploadUserAvatar", function() { return _avatars__WEBPACK_IMPORTED_MODULE_0__["uploadUserAvatar"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



/***/ }),

/***/ "./resources/assets/js/store/action-creators/users/index.js":
/*!******************************************************************!*\
  !*** ./resources/assets/js/store/action-creators/users/index.js ***!
  \******************************************************************/
/*! exports provided: saveUser, changePassword, getUsers, createUser, getUser, updateUser, deleteUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users */ "./resources/assets/js/store/action-creators/users/users.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveUser", function() { return _users__WEBPACK_IMPORTED_MODULE_0__["saveUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "changePassword", function() { return _users__WEBPACK_IMPORTED_MODULE_0__["changePassword"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUsers", function() { return _users__WEBPACK_IMPORTED_MODULE_0__["getUsers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createUser", function() { return _users__WEBPACK_IMPORTED_MODULE_0__["createUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return _users__WEBPACK_IMPORTED_MODULE_0__["getUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return _users__WEBPACK_IMPORTED_MODULE_0__["updateUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteUser", function() { return _users__WEBPACK_IMPORTED_MODULE_0__["deleteUser"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



/***/ }),

/***/ "./resources/assets/js/store/action-creators/users/users.js":
/*!******************************************************************!*\
  !*** ./resources/assets/js/store/action-creators/users/users.js ***!
  \******************************************************************/
/*! exports provided: getUsers, getUser, createUser, updateUser, deleteUser, saveUser, changePassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsers", function() { return getUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUser", function() { return createUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUser", function() { return deleteUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveUser", function() { return saveUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changePassword", function() { return changePassword; });
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! store/actions */ "./resources/assets/js/store/actions.js");
/* harmony import */ var store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store/action-creators/requests */ "./resources/assets/js/store/action-creators/requests/index.js");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};




const getUsers = () => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])('get-users', () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/users")));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["userActions"].ADD_USERS,
    users: response.data.data
  });
};
const getUser = slug => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])("get-user-".concat(slug), () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/users/".concat(slug))));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["userActions"].GET_USER,
    users: response.data.data
  });
};
const createUser = data => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])('create-user', () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/users", data)));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["userActions"].ADD_USER,
    users: response.data.data
  });
};
const updateUser = data => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])("update-user-".concat(data.slug), () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/users/".concat(data.slug), data)));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["userActions"].UPDATE_USER,
    users: response.data.data
  });
};
const deleteUser = slug => async dispatch => {
  await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])("update-user-".concat(slug), () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("/api/users/".concat(slug))));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["userActions"].DELETE_USER,
    slug
  });
};
const saveUser = userData => async dispatch => {
  const {
    slug
  } = userData;
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])('save-user-settings', () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/users/".concat(slug), userData)));
  return response;
};
const changePassword = data => async dispatch => {
  const {
    slug
  } = data;
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])('change-user-password', () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/users/".concat(slug, "/update-password"), data)));
  return response;
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getUsers, "getUsers", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/users/users.js");
  reactHotLoader.register(getUser, "getUser", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/users/users.js");
  reactHotLoader.register(createUser, "createUser", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/users/users.js");
  reactHotLoader.register(updateUser, "updateUser", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/users/users.js");
  reactHotLoader.register(deleteUser, "deleteUser", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/users/users.js");
  reactHotLoader.register(saveUser, "saveUser", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/users/users.js");
  reactHotLoader.register(changePassword, "changePassword", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/users/users.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5tYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbnN0YW50cy9yZWdleGVzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvU2V0dGluZ3MvRm9ybXMvQXBwU2V0dGluZ3NGb3JtLmpzeCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL1NldHRpbmdzL0Zvcm1zL0JpbGxpbmdTZXR0aW5nc0Zvcm0uanN4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvU2V0dGluZ3MvRm9ybXMvQ2hhbmdlUGFzc3dvcmRGb3JtLmpzeCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL1NldHRpbmdzL0Zvcm1zL1VzZXJTZXR0aW5nc0Zvcm0uanN4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvU2V0dGluZ3MvRm9ybXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9TZXR0aW5ncy9TZXR0aW5nc1JvdXRlcy5qc3giLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9TZXR0aW5ncy9Vc2VyU2V0dGluZ3MuanN4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvYWN0aW9uLWNyZWF0b3JzL2F2YXRhcnMvYXZhdGFycy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL2FjdGlvbi1jcmVhdG9ycy91c2Vycy91c2Vycy5qcyJdLCJuYW1lcyI6WyJlbWFpbCIsIkFwcFNldHRpbmdzRm9ybSIsIkJpbGxpbmdTZXR0aW5nc0Zvcm0iLCJ2YWxpZGF0ZSIsInZhbHVlcyIsImVycm9ycyIsIm5vbkVtcHR5RmllbGROYW1lcyIsImZvckVhY2giLCJmaWVsZE5hbWUiLCJuZXdfcGFzc3dvcmQiLCJuZXdfcGFzc3dvcmRfY29uZmlybWF0aW9uIiwiQ2hhbmdlUGFzc3dvcmRGb3JtIiwib25TdWJtaXQiLCJvbGRfcGFzc3dvcmQiLCJwcm9wcyIsIlBhc3N3b3JkRm9ybUxpbmUiLCJ2YWxpZGF0ZU51bWJlciIsIm51bWJlciIsInJlZ2V4IiwidGVzdCIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJlbWFpbFJlZ2V4IiwibW9iaWxlIiwiVXNlclNldHRpbmdzRm9ybUNvbXBvbmVudCIsInVzZXIiLCJjbGFzc05hbWUiLCJhdmF0YXJVcGxvYWRIYW5kbGVyIiwiaW5pdGlhbGl6ZVZhbHVlcyIsIm9iaiIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImsiLCJ2IiwiUGljdHVyZVVwbG9hZCIsIlRleHRGb3JtTGluZSIsImNvdW50cnkiLCJVc2VyU2V0dGluZ3NGb3JtIiwiY29ubmVjdCIsInN0YXRlIiwic2Vzc2lvbiIsImN1cnJlbnRVc2VyIiwiZW50aXRpZXMiLCJ1c2VycyIsIkNhcmRMaW5rIiwidG8iLCJjaGlsZHJlbiIsImxpbmtTdHlsZSIsInJlZGlyZWN0VXNlclNldHRpbmdzIiwiU2V0dGluZ3NSb3V0ZXMiLCJtYXRjaCIsInVybCIsImN1cnJlbnRVcmwiLCJVc2VyU2V0dGluZ3NDb21wb25lbnQiLCJzYXZlVXNlclNldHRpbmdzIiwiaGFuZGxlQ2hhbmdlUGFzc3dvcmQiLCJ1c2VyVmFsaWRhdGlvbkZyb21SZXNwb25zZSIsInBhc3N3b3JkVmFsaWRhdGlvbkZyb21SZXNwb25zZSIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwidXNlckRhdGEiLCJzZXRFcnJvcnMiLCJyZXNwb25zZSIsInNhdmVVc2VyIiwic3RhdHVzIiwiZGF0YSIsImZsYXNoTWVzc2FnZSIsInR5cGUiLCJ1c2VyQWN0aW9ucyIsIlNFVF9DVVJSRU5UX1VTRVJfSU5GTyIsInVwbG9hZFVzZXJBdmF0YXIiLCJmaWxlRGF0YSIsInVzZXJTbHVnIiwiY2hhbmdlUGFzc3dvcmQiLCJlcnJvciIsIm1lcmdlUHJvcHMiLCJzdGF0ZVByb3BzIiwiZGlzcGF0Y2hQcm9wcyIsIm93blByb3BzIiwic2x1ZyIsIlVzZXJTZXR0aW5ncyIsIm1ha2VSZXF1ZXN0IiwiYXhpb3MiLCJwb3N0IiwiYWN0aW9ucyIsIlNFVF9BVkFUQVIiLCJhdmF0YXIiLCJmaWxlVXJsIiwiZ2V0VXNlcnMiLCJnZXQiLCJBRERfVVNFUlMiLCJnZXRVc2VyIiwiR0VUX1VTRVIiLCJjcmVhdGVVc2VyIiwiQUREX1VTRVIiLCJ1cGRhdGVVc2VyIiwicHV0IiwiVVBEQVRFX1VTRVIiLCJkZWxldGVVc2VyIiwiZGVsZXRlIiwiREVMRVRFX1VTRVIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiLG9DQUFvQyxtQkFBTyxDQUFDLCtIQUFpRDtBQUM3RixlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0MsNkJBQTZCLG1CQUFPLENBQUMsMkdBQXVDO0FBQzVFLHlCQUF5QixtQkFBTyxDQUFDLG1HQUFtQztBQUNwRSxpQkFBaUIsbUJBQU8sQ0FBQyxtR0FBbUM7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDTSxNQUFNQSxLQUFLLEdBQUcsdUpBQWQ7Ozs7Ozs7Ozs7MEJBQU1BLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBYjtBQUVPLE1BQU1DLGVBQWUsR0FBRyxNQUFNLDJHQUE5Qjs7Ozs7Ozs7OzswQkFBTUEsZTs7Ozs7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Zml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgYWR2YW5jZVN0cmluZ0luZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkdmFuY2Utc3RyaW5nLWluZGV4Jyk7XG52YXIgcmVnRXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xuXG4vLyBAQG1hdGNoIGxvZ2ljXG5maXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYygnbWF0Y2gnLCAxLCBmdW5jdGlvbiAoTUFUQ0gsIG5hdGl2ZU1hdGNoLCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgcmV0dXJuIFtcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5tYXRjaGAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5tYXRjaFxuICAgIGZ1bmN0aW9uIG1hdGNoKHJlZ2V4cCkge1xuICAgICAgdmFyIE8gPSByZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpO1xuICAgICAgdmFyIG1hdGNoZXIgPSByZWdleHAgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogcmVnZXhwW01BVENIXTtcbiAgICAgIHJldHVybiBtYXRjaGVyICE9PSB1bmRlZmluZWQgPyBtYXRjaGVyLmNhbGwocmVnZXhwLCBPKSA6IG5ldyBSZWdFeHAocmVnZXhwKVtNQVRDSF0oU3RyaW5nKE8pKTtcbiAgICB9LFxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAbWF0Y2hdYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAbWF0Y2hcbiAgICBmdW5jdGlvbiAocmVnZXhwKSB7XG4gICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKG5hdGl2ZU1hdGNoLCByZWdleHAsIHRoaXMpO1xuICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuXG4gICAgICB2YXIgcnggPSBhbk9iamVjdChyZWdleHApO1xuICAgICAgdmFyIFMgPSBTdHJpbmcodGhpcyk7XG5cbiAgICAgIGlmICghcnguZ2xvYmFsKSByZXR1cm4gcmVnRXhwRXhlYyhyeCwgUyk7XG5cbiAgICAgIHZhciBmdWxsVW5pY29kZSA9IHJ4LnVuaWNvZGU7XG4gICAgICByeC5sYXN0SW5kZXggPSAwO1xuICAgICAgdmFyIEEgPSBbXTtcbiAgICAgIHZhciBuID0gMDtcbiAgICAgIHZhciByZXN1bHQ7XG4gICAgICB3aGlsZSAoKHJlc3VsdCA9IHJlZ0V4cEV4ZWMocngsIFMpKSAhPT0gbnVsbCkge1xuICAgICAgICB2YXIgbWF0Y2hTdHIgPSBTdHJpbmcocmVzdWx0WzBdKTtcbiAgICAgICAgQVtuXSA9IG1hdGNoU3RyO1xuICAgICAgICBpZiAobWF0Y2hTdHIgPT09ICcnKSByeC5sYXN0SW5kZXggPSBhZHZhbmNlU3RyaW5nSW5kZXgoUywgdG9MZW5ndGgocngubGFzdEluZGV4KSwgZnVsbFVuaWNvZGUpO1xuICAgICAgICBuKys7XG4gICAgICB9XG4gICAgICByZXR1cm4gbiA9PT0gMCA/IG51bGwgOiBBO1xuICAgIH1cbiAgXTtcbn0pO1xuIiwiZXhwb3J0IGNvbnN0IGVtYWlsID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBjb25zdCBBcHBTZXR0aW5nc0Zvcm0gPSAoKSA9PiA8ZGl2PkFwcGxpY2F0aW9uIFNldHRpbmdzIFBsYWNlaG9sZGVyPC9kaXY+XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBjb25zdCBCaWxsaW5nU2V0dGluZ3NGb3JtID0gKCkgPT4gPGRpdj5CaWxsaW5nIFNldHRpbmdzIFBsYWNlaG9sZGVyPC9kaXY+XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBGb3JtaWssIEZvcm0sIEZpZWxkIH0gZnJvbSAnZm9ybWlrJ1xuXG5pbXBvcnQgeyBQYXNzd29yZEZvcm1MaW5lLCBQb3NpdGl2ZUJ1dHRvbiB9IGZyb20gJ2NvbXBvbmVudHMnXG5cbmNvbnN0IHZhbGlkYXRlID0gKHZhbHVlcyA9IHt9KSA9PiB7XG4gIGxldCBlcnJvcnMgPSB7fVxuXG4gIGNvbnN0IG5vbkVtcHR5RmllbGROYW1lcyA9IFtcbiAgICAnb2xkX3Bhc3N3b3JkJyxcbiAgICAnbmV3X3Bhc3N3b3JkJyxcbiAgICAnbmV3X3Bhc3N3b3JkX2NvbmZpcm1hdGlvbidcbiAgXVxuXG4gIG5vbkVtcHR5RmllbGROYW1lcy5mb3JFYWNoKGZpZWxkTmFtZSA9PiB7XG4gICAgaWYgKCF2YWx1ZXNbZmllbGROYW1lXSkge1xuICAgICAgZXJyb3JzW2ZpZWxkTmFtZV0gPSAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCdcbiAgICB9XG4gIH0pXG5cbiAgaWYgKFxuICAgIHZhbHVlcy5uZXdfcGFzc3dvcmQgJiZcbiAgICB2YWx1ZXMubmV3X3Bhc3N3b3JkX2NvbmZpcm1hdGlvbiAhPT0gdmFsdWVzLm5ld19wYXNzd29yZFxuICApIHtcbiAgICBlcnJvcnMubmV3X3Bhc3N3b3JkX2NvbmZpcm1hdGlvbiA9XG4gICAgICAnVGhpcyBwYXNzd29yZCBkb2VzIG5vdCBtYXRjaCB0aGUgbmV3IHBhc3N3b3JkIHlvdSBlbnRlcmVkJ1xuICB9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuXG5leHBvcnQgY29uc3QgQ2hhbmdlUGFzc3dvcmRGb3JtID0gKHsgb25TdWJtaXQgfSkgPT4gKFxuICA8Rm9ybWlrXG4gICAgdmFsaWRhdGU9e3ZhbGlkYXRlfVxuICAgIG9uU3VibWl0PXtvblN1Ym1pdH1cbiAgICBpbml0aWFsVmFsdWVzPXt7XG4gICAgICBvbGRfcGFzc3dvcmQ6ICcnLFxuICAgICAgbmV3X3Bhc3N3b3JkOiAnJyxcbiAgICAgIG5ld19wYXNzd29yZF9jb25maXJtYXRpb246ICcnXG4gICAgfX1cbiAgPlxuICAgIHtwcm9wcyA9PiAoXG4gICAgICA8Rm9ybT5cbiAgICAgICAgPEZpZWxkXG4gICAgICAgICAgY2xhc3NOYW1lPVwibWItMlwiXG4gICAgICAgICAgbmFtZT1cIm9sZF9wYXNzd29yZFwiXG4gICAgICAgICAgY29tcG9uZW50PXtQYXNzd29yZEZvcm1MaW5lfVxuICAgICAgICAgIGxhYmVsVGV4dD1cIkVudGVyIHlvdXIgb2xkIHBhc3N3b3JkXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgbWItNFwiPlxuICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgbmFtZT1cIm5ld19wYXNzd29yZFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LWdyb3dcIlxuICAgICAgICAgICAgbGFiZWxUZXh0PVwiTmV3IFBhc3N3b3JkXCJcbiAgICAgICAgICAgIGNvbXBvbmVudD17UGFzc3dvcmRGb3JtTGluZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC1ncm93IHBsLTRcIlxuICAgICAgICAgICAgY29tcG9uZW50PXtQYXNzd29yZEZvcm1MaW5lfVxuICAgICAgICAgICAgbmFtZT1cIm5ld19wYXNzd29yZF9jb25maXJtYXRpb25cIlxuICAgICAgICAgICAgbGFiZWxUZXh0PVwiUmVwZWF0IHlvdXIgbmV3IHBhc3N3b3JkXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYm9yZGVyLWdyZXktbGlnaHQgaG92ZXI6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgIDxQb3NpdGl2ZUJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwibWwtYXV0byBob3ZlcjpiZy1ncmF5LTgwMFwiPlxuICAgICAgICAgICAgQ2hhbmdlIFBhc3N3b3JkXG4gICAgICAgICAgPC9Qb3NpdGl2ZUJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0Zvcm0+XG4gICAgKX1cbiAgPC9Gb3JtaWs+XG4pXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBGb3JtaWssIEZvcm0sIEZpZWxkIH0gZnJvbSAnZm9ybWlrJ1xuXG5pbXBvcnQgeyBlbWFpbCBhcyBlbWFpbFJlZ2V4IH0gZnJvbSAnY29uc3RhbnRzL3JlZ2V4ZXMnXG5pbXBvcnQgeyBQb3NpdGl2ZUJ1dHRvbiwgVGV4dEZvcm1MaW5lLCBQaWN0dXJlVXBsb2FkIH0gZnJvbSAnY29tcG9uZW50cydcblxuZnVuY3Rpb24gdmFsaWRhdGVOdW1iZXIobnVtYmVyKSB7XG4gIGNvbnN0IHJlZ2V4ID0gL15cXCg/KFswLTldezR9KVxcKT9bLS4gXT8oWzAtOV17M30pWy0uIF0/KFswLTldezR9KSQvO1xuICByZXR1cm4gcmVnZXgudGVzdChudW1iZXIpXG59XG5cbmNvbnN0IHZhbGlkYXRlID0gKHZhbHVlcyA9IHt9KSA9PiB7XG4gIGxldCBlcnJvcnMgPSB7fVxuXG4gIGlmICghdmFsdWVzLmZpcnN0X25hbWUpIHtcbiAgICBlcnJvcnMuZmlyc3RfbmFtZSA9ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJ1xuICB9XG5cbiAgaWYgKCF2YWx1ZXMubGFzdF9uYW1lKSB7XG4gICAgZXJyb3JzLmxhc3RfbmFtZSA9ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJ1xuICB9XG5cbiAgaWYgKCF2YWx1ZXMuZW1haWwpIHtcbiAgICBlcnJvcnMuZW1haWwgPSAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCdcbiAgfSBlbHNlIGlmICghZW1haWxSZWdleC50ZXN0KHZhbHVlcy5lbWFpbCkpIHtcbiAgICBlcnJvcnMuZW1haWwgPSAnSW52YWxpZCBlbWFpbCBhZGRyZXNzJ1xuICB9XG5cbiAgaWYgKHZhbGlkYXRlTnVtYmVyKHZhbHVlcy5tb2JpbGUpID09IGZhbHNlKSB7XG4gICAgZXJyb3JzLm1vYmlsZSA9ICdJbmNvcnJlY3QgTW9iaWxlIE51bWJlciBGb3JtYXQnXG4gIH1cbiAgcmV0dXJuIGVycm9yc1xufVxuXG5jb25zdCBVc2VyU2V0dGluZ3NGb3JtQ29tcG9uZW50ID0gKHtcbiAgdXNlcixcbiAgb25TdWJtaXQsXG4gIGNsYXNzTmFtZSA9ICcnLFxuICBhdmF0YXJVcGxvYWRIYW5kbGVyXG59KSA9PntcbiAgY29uc3QgaW5pdGlhbGl6ZVZhbHVlcyA9IChvYmopID0+IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqLCAoaywgdikgPT4gKHYgPT09IG51bGwgPyAnJyA6IHYpKSlcbiAgcmV0dXJuIChcbiAgICA8Rm9ybWlrXG4gICAgICB2YWxpZGF0ZT17dmFsaWRhdGV9XG4gICAgICBvblN1Ym1pdD17b25TdWJtaXR9XG4gICAgICBpbml0aWFsVmFsdWVzPXtpbml0aWFsaXplVmFsdWVzKHVzZXIpfVxuICAgICAgdmFsaWRhdGVPbkNoYW5nZT17ZmFsc2V9XG4gICAgPlxuICAgICAgeygpID0+IChcbiAgICAgICAgPEZvcm0gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbXktNFwiPlxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIG5hbWU9XCJhdmF0YXJcIlxuICAgICAgICAgICAgICBjb21wb25lbnQ9e1BpY3R1cmVVcGxvYWR9XG4gICAgICAgICAgICAgIHVwbG9hZEhhbmRsZXI9e2F2YXRhclVwbG9hZEhhbmRsZXJ9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTEwXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3Jvd1wiPlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwiZmlyc3RfbmFtZVwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0Rm9ybUxpbmV9XG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0PVwiRmlyc3QgTmFtZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJsYXN0X25hbWVcIlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEZvcm1MaW5lfVxuICAgICAgICAgICAgICAgIGxhYmVsVGV4dD1cIkxhc3QgTmFtZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNzAwIHB5LTJcIj5FbWFpbCBBZGRyZXNzPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIHAtMiB0ZXh0LWdyYXktNTAwXCI+e3VzZXIuZW1haWwgfHwgJyd9PC9kaXY+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJtb2JpbGVcIlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEZvcm1MaW5lfVxuICAgICAgICAgICAgICAgIGxhYmVsVGV4dD1cIkNvbnRhY3QgTnVtYmVyXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS03MDAgcHktMlwiPkNvdW50cnk8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgcC0yIHRleHQtZ3JheS01MDBcIj57dXNlci5jb3VudHJ5IHx8ICcnfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYm9yZGVyLWdyZXktbGlnaHQgaG92ZXI6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgPFBvc2l0aXZlQnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJtbC1hdXRvIGhvdmVyOmJnLWdyYXktODAwXCI+XG4gICAgICAgICAgICAgIFNhdmUgVXNlciBEZXRhaWxzXG4gICAgICAgICAgICA8L1Bvc2l0aXZlQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0Zvcm0+XG4gICAgICApfVxuICAgIDwvRm9ybWlrPlxuICApICBcbn0gXG5cbmV4cG9ydCBjb25zdCBVc2VyU2V0dGluZ3NGb3JtID0gY29ubmVjdChzdGF0ZSA9PiB7XG4gIGNvbnN0IHtcbiAgICBzZXNzaW9uOiB7IGN1cnJlbnRVc2VyIH1cbiAgfSA9IHN0YXRlXG4gIHJldHVybiB7XG4gICAgdXNlcjogc3RhdGUuZW50aXRpZXMudXNlcnNbY3VycmVudFVzZXJdXG4gIH1cbn0sIG51bGwpKFVzZXJTZXR0aW5nc0Zvcm1Db21wb25lbnQpXG4iLCJleHBvcnQgeyBVc2VyU2V0dGluZ3NGb3JtIH0gZnJvbSAnLi9Vc2VyU2V0dGluZ3NGb3JtJ1xuZXhwb3J0IHsgQ2hhbmdlUGFzc3dvcmRGb3JtIH0gZnJvbSAnLi9DaGFuZ2VQYXNzd29yZEZvcm0nXG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5hdkxpbmssIFJvdXRlLCBTd2l0Y2gsIFJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IFBhZ2VIZWFkZXIgfSBmcm9tICdjb21wb25lbnRzJ1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQgfSBmcm9tICdjb21wb25lbnRzJ1xuaW1wb3J0IHsgbGlua1N0eWxlIH0gZnJvbSAnY29uc3RhbnRzL3N0eWxlcydcblxuaW1wb3J0IHsgVXNlclNldHRpbmdzIH0gZnJvbSAnLi9Vc2VyU2V0dGluZ3MnXG5pbXBvcnQgeyBBcHBTZXR0aW5nc0Zvcm0gfSBmcm9tICcuL0Zvcm1zL0FwcFNldHRpbmdzRm9ybSdcbmltcG9ydCB7IEJpbGxpbmdTZXR0aW5nc0Zvcm0gfSBmcm9tICcuL0Zvcm1zL0JpbGxpbmdTZXR0aW5nc0Zvcm0nXG5cbmNvbnN0IENhcmRMaW5rID0gKHsgdG8sIGNsYXNzTmFtZSA9ICcnLCBjaGlsZHJlbiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPE5hdkxpbmtcbiAgICAgIHRvPXt0b31cbiAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImJnLWJsdWUtbGlnaHRlc3RcIlxuICAgICAgY2xhc3NOYW1lPXtgYmxvY2sgYm9yZGVyLWIgYm9yZGVyLWdyZXktbGlnaHQgcC00ICR7bGlua1N0eWxlfSAke2NsYXNzTmFtZX1gfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L05hdkxpbms+XG4gIClcbn1cbmNvbnN0IHJlZGlyZWN0VXNlclNldHRpbmdzID0gKCkgPT4gKFxuICA8UmVkaXJlY3QgZnJvbT0nL2FjY291bnQvc2V0dGluZ3MnIHRvPVwiL2FjY291bnQvc2V0dGluZ3MvdXNlclwiIC8+XG4pXG5leHBvcnQgY29uc3QgU2V0dGluZ3NSb3V0ZXMgPSAoeyBtYXRjaDogeyB1cmw6IGN1cnJlbnRVcmwgfSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJiLXdoaXRlIHB4LTEwIHB5LTVcIj5cbiAgICAgICAgICA8UGFnZUhlYWRlciB0aXRsZT1cIlNldHRpbmdzXCIgc3ViVGl0bGU9XCJBY2NvdW50c1wiPlxuICAgICAgICAgICAgPE5hdkxpbmsgdG89e2Ake2N1cnJlbnRVcmx9L3VzZXJgfSBjbGFzc05hbWU9XCJtbC0yIGJnLWdyYXktMzAwIGhvdmVyOmJnLWdyYXktNDAwIHRleHQtZ3JheS04MDAgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmZpbmdlcnByaW50PC9pPlxuICAgICAgICAgICAgICA8c3Bhbj5BY2NvdW50PC9zcGFuPlxuICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgPE5hdkxpbmsgdG89e2Ake2N1cnJlbnRVcmx9L2FwcGB9IGNsYXNzTmFtZT1cIm1sLTIgYmctZ3JheS0zMDAgaG92ZXI6YmctZ3JheS00MDAgdGV4dC1ncmF5LTgwMCBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+dG91Y2hfYXBwPC9pPlxuICAgICAgICAgICAgICA8c3Bhbj5BcHBsaWNhdGlvbjwvc3Bhbj5cbiAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgJHtjdXJyZW50VXJsfS9iaWxsaW5nYH0gY2xhc3NOYW1lPVwibWwtMiBiZy1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTQwMCB0ZXh0LWdyYXktODAwIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5hY2NvdW50X2JhbGFuY2Vfd2FsbGV0PC9pPlxuICAgICAgICAgICAgICA8c3Bhbj5CaWxsaW5nPC9zcGFuPlxuICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgIDwvUGFnZUhlYWRlcj5cbiAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD17YCR7Y3VycmVudFVybH0vYH0gY29tcG9uZW50PXtyZWRpcmVjdFVzZXJTZXR0aW5nc30gLz5cbiAgICAgICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICAgICAgZXhhY3RcbiAgICAgICAgICAgICAgICBwYXRoPXtgJHtjdXJyZW50VXJsfS91c2VyYH1cbiAgICAgICAgICAgICAgICByZW5kZXI9eygpID0+IChcbiAgICAgICAgICAgICAgICAgIDxVc2VyU2V0dGluZ3MgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgICAgICBleGFjdFxuICAgICAgICAgICAgICAgIHBhdGg9e2Ake2N1cnJlbnRVcmx9L2FwcGB9XG4gICAgICAgICAgICAgICAgcmVuZGVyPXsoKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8QXBwU2V0dGluZ3NGb3JtIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICAgICAgZXhhY3RcbiAgICAgICAgICAgICAgICBwYXRoPXtgJHtjdXJyZW50VXJsfS9iaWxsaW5nYH1cbiAgICAgICAgICAgICAgICByZW5kZXI9eygpID0+IChcbiAgICAgICAgICAgICAgICAgIDxCaWxsaW5nU2V0dGluZ3NGb3JtIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvU3dpdGNoPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L0ZyYWdtZW50PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzUm91dGVzXG4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgdXNlckFjdGlvbnMgfSBmcm9tICdzdG9yZS9hY3Rpb25zJ1xuaW1wb3J0IHsgdXBsb2FkVXNlckF2YXRhciB9IGZyb20gJ3N0b3JlL2FjdGlvbi1jcmVhdG9ycy9hdmF0YXJzJ1xuaW1wb3J0IHsgZmxhc2hNZXNzYWdlIH0gZnJvbSAnc3RvcmUvYWN0aW9uLWNyZWF0b3JzL2ZsYXNoTWVzc2FnZXMnXG5pbXBvcnQgeyBzYXZlVXNlciwgY2hhbmdlUGFzc3dvcmQgfSBmcm9tICdzdG9yZS9hY3Rpb24tY3JlYXRvcnMvdXNlcnMnXG5cbmltcG9ydCB7IFVzZXJTZXR0aW5nc0Zvcm0sIENoYW5nZVBhc3N3b3JkRm9ybSB9IGZyb20gJy4vRm9ybXMnXG5cbmNvbnN0IFVzZXJTZXR0aW5nc0NvbXBvbmVudCA9ICh7XG4gIHNhdmVVc2VyU2V0dGluZ3MsXG4gIGF2YXRhclVwbG9hZEhhbmRsZXIsXG4gIGhhbmRsZUNoYW5nZVBhc3N3b3JkXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwLTEwIGJnLXdoaXRlIHJvdW5kZWQgc2hhZG93XCI+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtZ3JleS1kYXJrZXN0IGZvbnQtbm9ybWFsXCI+WW91ciBEZXRhaWxzPC9oMz5cbiAgICAgICAgICA8VXNlclNldHRpbmdzRm9ybVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItNFwiXG4gICAgICAgICAgICBvblN1Ym1pdD17c2F2ZVVzZXJTZXR0aW5nc31cbiAgICAgICAgICAgIGF2YXRhclVwbG9hZEhhbmRsZXI9e2F2YXRhclVwbG9hZEhhbmRsZXJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwLTEwIGJnLXdoaXRlIHJvdW5kZWQgc2hhZG93IG10LTEwXCI+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtZ3JleS1kYXJrZXN0IGZvbnQtbm9ybWFsXCI+Q2hhbmdlIFlvdXIgUGFzc3dvcmQ8L2gzPlxuICAgICAgICAgIDxDaGFuZ2VQYXNzd29yZEZvcm0gb25TdWJtaXQ9e2hhbmRsZUNoYW5nZVBhc3N3b3JkfSAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgPC9GcmFnbWVudD5cbiAgKVxufVxuXG5jb25zdCB1c2VyVmFsaWRhdGlvbkZyb21SZXNwb25zZSA9IHZhbHVlcyA9PiB7XG4gIGxldCBlcnJvcnMgPSB7fVxuXG4gIHJldHVybiBlcnJvcnNcbn1cblxuY29uc3QgcGFzc3dvcmRWYWxpZGF0aW9uRnJvbVJlc3BvbnNlID0gdmFsdWVzID0+IHtcbiAgbGV0IGVycm9ycyA9IHt9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBjdXJyZW50VXNlcjogc3RhdGUuZW50aXRpZXMudXNlcnNbc3RhdGUuc2Vzc2lvbi5jdXJyZW50VXNlcl1cbn0pXG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIHNhdmVVc2VyU2V0dGluZ3M6IGFzeW5jICh1c2VyRGF0YSwgeyBzZXRFcnJvcnMgfSkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZGlzcGF0Y2goc2F2ZVVzZXIodXNlckRhdGEpKVxuXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAwKSB7XG4gICAgICBzZXRFcnJvcnModXNlclZhbGlkYXRpb25Gcm9tUmVzcG9uc2UocmVzcG9uc2UuZGF0YS5kYXRhKSlcbiAgICB9XG5cbiAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ3N1Y2Nlc3MnLCAnU3VjY2Vzc2Z1bGx5IHNhdmVkIHVzZXIgaW5mbycsIDQwMDApKVxuXG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogdXNlckFjdGlvbnMuU0VUX0NVUlJFTlRfVVNFUl9JTkZPLFxuICAgICAgdXNlcnM6IHJlc3BvbnNlLmRhdGEuZGF0YVxuICAgIH0pXG4gIH0sXG5cbiAgdXBsb2FkVXNlckF2YXRhcjogKGZpbGVEYXRhLCB1c2VyU2x1ZykgPT5cbiAgICBkaXNwYXRjaCh1cGxvYWRVc2VyQXZhdGFyKGZpbGVEYXRhLCB1c2VyU2x1ZykpLFxuXG4gIGNoYW5nZVBhc3N3b3JkOiBhc3luYyAoZGF0YSwgeyBzZXRFcnJvcnMgfSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBkaXNwYXRjaChjaGFuZ2VQYXNzd29yZChkYXRhKSlcbiAgICAgIGRpc3BhdGNoKFxuICAgICAgICBmbGFzaE1lc3NhZ2UoJ3N1Y2Nlc3MnLCAnWW91ciBwYXNzd29yZCB3YXMgc3VjY2Vzc2Z1bGx5IGNoYW5nZWQnLCA0MDAwKVxuICAgICAgKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MjIpIHtcbiAgICAgICAgc2V0RXJyb3JzKHBhc3N3b3JkVmFsaWRhdGlvbkZyb21SZXNwb25zZShlcnJvci5yZXNwb25zZS5kYXRhLmRhdGEpKVxuICAgICAgfVxuXG4gICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDApIHtcbiAgICAgICAgc2V0RXJyb3JzKHtcbiAgICAgICAgICBvbGRfcGFzc3dvcmQ6ICdUaGUgY3VycmVudCBwYXNzd29yZCB3YXMgaW5jb3JyZWN0J1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxufSlcblxuY29uc3QgbWVyZ2VQcm9wcyA9IChzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcykgPT4gKHtcbiAgLi4uc3RhdGVQcm9wcyxcbiAgLi4uZGlzcGF0Y2hQcm9wcyxcbiAgLi4ub3duUHJvcHMsXG4gIGF2YXRhclVwbG9hZEhhbmRsZXI6IGZpbGVEYXRhID0+IHtcbiAgICByZXR1cm4gZGlzcGF0Y2hQcm9wcy51cGxvYWRVc2VyQXZhdGFyKGZpbGVEYXRhLCBzdGF0ZVByb3BzLmN1cnJlbnRVc2VyLnNsdWcpXG4gIH0sXG4gIGhhbmRsZUNoYW5nZVBhc3N3b3JkOiB2YWx1ZXMgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBzbHVnOiBzdGF0ZVByb3BzLmN1cnJlbnRVc2VyLnNsdWcsXG4gICAgICAuLi52YWx1ZXNcbiAgICB9XG5cbiAgICByZXR1cm4gZGlzcGF0Y2hQcm9wcy5jaGFuZ2VQYXNzd29yZChkYXRhKVxuICB9XG59KVxuXG5leHBvcnQgY29uc3QgVXNlclNldHRpbmdzID0gY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHMsXG4gIG1lcmdlUHJvcHNcbikoVXNlclNldHRpbmdzQ29tcG9uZW50KVxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5pbXBvcnQgeyBtYWtlUmVxdWVzdCB9IGZyb20gJ3N0b3JlL2FjdGlvbi1jcmVhdG9ycy9yZXF1ZXN0cydcbmltcG9ydCB7IHVzZXJBY3Rpb25zIGFzIGFjdGlvbnMgfSBmcm9tICdzdG9yZS9hY3Rpb25zJ1xuXG5leHBvcnQgY29uc3QgdXBsb2FkVXNlckF2YXRhciA9IChmaWxlRGF0YSwgdXNlclNsdWcpID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkaXNwYXRjaChcbiAgICBtYWtlUmVxdWVzdCgnc2V0LXVzZXItYXZhdGFyJywgKCkgPT4gYXhpb3MucG9zdCgnL2FwaS91c2Vycy9hdmF0YXInLCBmaWxlRGF0YSkpXG4gIClcblxuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogYWN0aW9ucy5TRVRfQVZBVEFSLFxuICAgIHVzZXJTbHVnLFxuICAgIGF2YXRhcjogcmVzcG9uc2UuZGF0YS5maWxlVXJsXG4gIH0pXG59XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyB1c2VyQWN0aW9ucyBhcyBhY3Rpb25zIH0gZnJvbSAnc3RvcmUvYWN0aW9ucydcbmltcG9ydCB7IG1ha2VSZXF1ZXN0IH0gZnJvbSAnc3RvcmUvYWN0aW9uLWNyZWF0b3JzL3JlcXVlc3RzJ1xuXG5leHBvcnQgY29uc3QgZ2V0VXNlcnMgPSAoKSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZGlzcGF0Y2goXG4gICAgbWFrZVJlcXVlc3QoJ2dldC11c2VycycsICgpID0+IGF4aW9zLmdldChgL2FwaS91c2Vyc2ApKVxuICApXG5cbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IGFjdGlvbnMuQUREX1VTRVJTLFxuICAgIHVzZXJzOiByZXNwb25zZS5kYXRhLmRhdGFcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGdldFVzZXIgPSBzbHVnID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkaXNwYXRjaChcbiAgICBtYWtlUmVxdWVzdChgZ2V0LXVzZXItJHtzbHVnfWAsICgpID0+IGF4aW9zLmdldChgL2FwaS91c2Vycy8ke3NsdWd9YCkpXG4gIClcblxuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogYWN0aW9ucy5HRVRfVVNFUixcbiAgICB1c2VyczogcmVzcG9uc2UuZGF0YS5kYXRhXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVVc2VyID0gZGF0YSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZGlzcGF0Y2goXG4gICAgbWFrZVJlcXVlc3QoJ2NyZWF0ZS11c2VyJywgKCkgPT4gYXhpb3MucG9zdChgL2FwaS91c2Vyc2AsIGRhdGEpKVxuICApXG5cbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IGFjdGlvbnMuQUREX1VTRVIsXG4gICAgdXNlcnM6IHJlc3BvbnNlLmRhdGEuZGF0YVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlVXNlciA9IGRhdGEgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRpc3BhdGNoKFxuICAgIG1ha2VSZXF1ZXN0KGB1cGRhdGUtdXNlci0ke2RhdGEuc2x1Z31gLCAoKSA9PlxuICAgICAgYXhpb3MucHV0KGAvYXBpL3VzZXJzLyR7ZGF0YS5zbHVnfWAsIGRhdGEpXG4gICAgKVxuICApXG5cbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IGFjdGlvbnMuVVBEQVRFX1VTRVIsXG4gICAgdXNlcnM6IHJlc3BvbnNlLmRhdGEuZGF0YVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgZGVsZXRlVXNlciA9IHNsdWcgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICBhd2FpdCBkaXNwYXRjaChcbiAgICBtYWtlUmVxdWVzdChgdXBkYXRlLXVzZXItJHtzbHVnfWAsICgpID0+IGF4aW9zLmRlbGV0ZShgL2FwaS91c2Vycy8ke3NsdWd9YCkpXG4gIClcblxuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogYWN0aW9ucy5ERUxFVEVfVVNFUixcbiAgICBzbHVnXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBzYXZlVXNlciA9IHVzZXJEYXRhID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgY29uc3QgeyBzbHVnIH0gPSB1c2VyRGF0YVxuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZGlzcGF0Y2goXG4gICAgbWFrZVJlcXVlc3QoJ3NhdmUtdXNlci1zZXR0aW5ncycsICgpID0+XG4gICAgICBheGlvcy5wdXQoYC9hcGkvdXNlcnMvJHtzbHVnfWAsIHVzZXJEYXRhKVxuICAgIClcbiAgKVxuXG4gIHJldHVybiByZXNwb25zZVxufVxuXG5leHBvcnQgY29uc3QgY2hhbmdlUGFzc3dvcmQgPSBkYXRhID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgY29uc3QgeyBzbHVnIH0gPSBkYXRhXG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkaXNwYXRjaChcbiAgICBtYWtlUmVxdWVzdCgnY2hhbmdlLXVzZXItcGFzc3dvcmQnLCAoKSA9PlxuICAgICAgYXhpb3MucHV0KGAvYXBpL3VzZXJzLyR7c2x1Z30vdXBkYXRlLXBhc3N3b3JkYCwgZGF0YSlcbiAgICApXG4gIClcblxuICByZXR1cm4gcmVzcG9uc2Vcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==