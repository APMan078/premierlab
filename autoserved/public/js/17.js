(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

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

/***/ "./resources/assets/img/default-shop-avatar.png":
/*!******************************************************!*\
  !*** ./resources/assets/img/default-shop-avatar.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/default-shop-avatar.png";

/***/ }),

/***/ "./resources/assets/js/pages/Shops/ShopActivation.jsx":
/*!************************************************************!*\
  !*** ./resources/assets/js/pages/Shops/ShopActivation.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components */ "./resources/assets/js/components/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var store_selectors_shops__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! store/selectors/shops */ "./resources/assets/js/store/selectors/shops.js");
/* harmony import */ var store_selectors_session__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! store/selectors/session */ "./resources/assets/js/store/selectors/session/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var default_shop_avatar_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! default-shop-avatar.png */ "./resources/assets/img/default-shop-avatar.png");
/* harmony import */ var default_shop_avatar_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(default_shop_avatar_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var store_action_creators_shops__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! store/action-creators/shops */ "./resources/assets/js/store/action-creators/shops/index.js");



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










const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

const Alert = (type, title) => Toast.fire({
  type: type,
  title: title
});

const useForm = ({
  initialValues,
  validate
}) => {
  const initializeValues = obj => JSON.parse(JSON.stringify(obj, (k, v) => v === null ? '' : v));

  const [values, setValues] = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(initializeValues(initialValues) || {});
  const [touchedValues, setTouchedValues] = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState({});
  const [errors, setErrors] = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState({});

  const handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    console.log(value);

    if (target.type === "checkbox") {
      if (target.value === 0) {
        const value = false;
      } else {
        const value = true;
      }
    } else {
      const value = target.value;
    }

    const name = target.name;
    setValues(_objectSpread({}, values, {
      [name]: value
    }));
  };

  const handleBlur = event => {
    const target = event.target;
    const name = target.name;
    setTouchedValues(_objectSpread({}, touchedValues, {
      [name]: true
    }));
    const e = validate(values);
    setErrors(_objectSpread({}, errors, {}, e));
  };

  const onSubmit = event => {};

  const handleSubmit = event => {
    event.preventDefault();
    const e = validate(values);
    setErrors(_objectSpread({}, errors, {}, e));
    console.log('Application:', values);
    onSubmit(_objectSpread({}, values, {
      e
    }));
  };

  const certificationUploadHandler = fileData => {
    console.log(fileData);
  };

  const registrationUploadHandler = fileData => {
    console.log(fileData);
  };

  const permitUploadHandler = fileData => {
    console.log(fileData);
  };

  const handleDynamicList = (fields, type) => {
    const name = type;
    setValues(_objectSpread({}, values, {
      [name]: fields
    }));
  };

  return {
    values,
    setValues,
    touchedValues,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
    handleDynamicList,
    certificationUploadHandler,
    registrationUploadHandler,
    permitUploadHandler
  };
};

__signature__(useForm, "useState{[values, setValues](initializeValues(initialValues) || {})}\nuseState{[touchedValues, setTouchedValues]({})}\nuseState{[errors, setErrors]({})}");

function ShopActivationComponent({
  getShops,
  deleteShop,
  impersonateShop,
  shops,
  user
}) {
  const {
    user_type
  } = user;
  const initialValues = [{}];
  const {
    values,
    setValues,
    touchedValues,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
    handleDynamicList,
    certificationUploadHandler,
    registrationUploadHandler,
    permitUploadHandler
  } = useForm({
    initialValues,

    validate(values) {
      const errors = {};
      return errors;
    }

  });
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "px-10 py-5"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "w-full"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_4__["PageHeader"], {
    title: "Activation Requirements",
    subTitle: "Shop"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"], {
    to: "/account/shops/",
    className: "ml-2 bg-gray-100 hover:bg-gray-200 text-gray-700 shadow font-bold py-2 px-4 rounded inline-flex items-center"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
    className: "material-icons text-xs mr-5"
  }, "arrow_back"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, "Go Back")))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "w-full rounded-lg bg-white shadow-lg py-10"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("table", {
    className: "w-full border border-gray-300"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("thead", {
    className: "bg-gray-100 border border-gray-300"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("th", {
    className: "md:hidden lg:table-cell"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("th", {
    className: "py-3"
  }, "Name"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("th", null, "Size"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("th", {
    className: "md:hidden lg:table-cell"
  }, "File Name"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("th", null, "Actions"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("tbody", {
    className: "py-5 text-center"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("tr", {
    className: "p-2"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td", {
    className: "border border-gray-300 md:hidden lg:table-cell"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
    className: "material-icons rounded-full p-3 bg-gray-200 border border-gray-400 text-sm text-gray-700"
  }, "insert_drive_file")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td", {
    className: "border border-gray-300"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "text-xl"
  }, "BIR Certificate of Registration"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "text-xs"
  }, "Last updated 6 months ago")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td", {
    className: "border border-gray-300"
  }, "-"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td", {
    className: "border border-gray-300 md:hidden lg:table-cell"
  }, "-"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td", {
    className: "py-5 border border-gray-300"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_4__["FileUpload"], {
    uploadHandler: certificationUploadHandler,
    name: "certification",
    value: values.certification ? values.certification : null
  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("tr", {
    className: "p-2"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td", {
    className: "border border-gray-300 md:hidden lg:table-cell"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
    className: "material-icons rounded-full p-3 bg-gray-200 border border-gray-400 text-sm text-gray-700"
  }, "insert_drive_file")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td", {
    className: "border border-gray-300"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "text-xl"
  }, "Mayor's Permit"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "text-xs"
  }, "Last updated 6 months ago")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td", {
    className: "border border-gray-300"
  }, "-"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td", {
    className: "border border-gray-300 md:hidden lg:table-cell"
  }, "-"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td", {
    className: "py-5 border border-gray-300"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_4__["FileUpload"], {
    uploadHandler: permitUploadHandler,
    name: "permit",
    value: values.permit ? values.permit : null
  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td", {
    className: "border border-gray-300 md:hidden lg:table-cell"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
    className: "material-icons rounded-full p-3 bg-gray-200 border border-gray-400 text-sm text-gray-700"
  }, "insert_drive_file")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td", {
    className: "border border-gray-300"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "text-xl"
  }, "SEC/DTI Certificate of Registration"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "text-xs"
  }, "Last updated 6 months ago")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td", {
    className: "border border-gray-300"
  }, "-"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td", {
    className: "border border-gray-300 md:hidden lg:table-cell"
  }, "-"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td", {
    className: "py-5 border border-gray-300"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_4__["FileUpload"], {
    uploadHandler: registrationUploadHandler,
    name: "registration",
    value: values.registration ? values.registration : null
  })))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("tfoot", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td", {
    colSpan: "5",
    className: "text-right text-sm text-gray-600 py-3 px-10"
  }, "Maximum file size per file: 5MB - (JPEG, PNG, PDF, DOCX)"))))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "w-full rounded-lg bg-white shadow-lg py-2 mt-10"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "text-lg px-5 py-3 border-b border-gray-300"
  }, "Additional Information"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "px-5 py-3 grid grid-cols-2 gap-4"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "col-span-1"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", null, "# of Lifters"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    className: "w-full rounded border border-gray-300 px-3 py-2 my-3",
    type: "number",
    name: "lifters",
    onChange: () => {},
    value: "0"
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "col-span-1"
  }, "\xA0"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "col-span-1"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", null, "Certification"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "mt-2"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_4__["DynamicList"], {
    type: "merch_cert",
    value: values.merch_cert || [[]],
    handleChange: handleDynamicList
  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "col-span-1"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", null, "Special Tools"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "mt-2"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_4__["DynamicList"], {
    type: "special_tools",
    value: values.special_tools || [[]],
    handleChange: handleDynamicList
  })))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "p-5 py-2 border-t border-gray-300"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    type: "submit",
    className: "float-right bg-green-500 hover:bg-green-600 text-white px-5 py-2 my-3 rounded-lg"
  }, "Save Changes")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "clearfix"
  }))));
}

__signature__(ShopActivationComponent, "useForm{{ \n    values,\n    setValues,\n    touchedValues,\n    errors,\n    handleChange,\n    handleSubmit,\n    handleBlur,\n    handleDynamicList,\n    certificationUploadHandler,\n    registrationUploadHandler,\n    permitUploadHandler }}", () => [useForm]);

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])((state, props) => {
  const query = props.match.params.slug;
  return {
    shops: Object(store_selectors_shops__WEBPACK_IMPORTED_MODULE_6__["selectShopDetails"])(state, query),
    user: Object(store_selectors_session__WEBPACK_IMPORTED_MODULE_7__["currentUserSelector"])(state)
  };
}, dispatch => ({
  getShops: () => dispatch(Object(store_action_creators_shops__WEBPACK_IMPORTED_MODULE_10__["getShops"])())
}))(ShopActivationComponent);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Toast, "Toast", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Shops/ShopActivation.jsx");
  reactHotLoader.register(Alert, "Alert", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Shops/ShopActivation.jsx");
  reactHotLoader.register(useForm, "useForm", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Shops/ShopActivation.jsx");
  reactHotLoader.register(ShopActivationComponent, "ShopActivationComponent", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Shops/ShopActivation.jsx");
  reactHotLoader.register(_default, "default", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Shops/ShopActivation.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/store/action-creators/shops/index.js":
/*!******************************************************************!*\
  !*** ./resources/assets/js/store/action-creators/shops/index.js ***!
  \******************************************************************/
/*! exports provided: saveShop, getShops, createShop, getShop, updateShop, deleteShop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shops__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shops */ "./resources/assets/js/store/action-creators/shops/shops.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveShop", function() { return _shops__WEBPACK_IMPORTED_MODULE_0__["saveShop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getShops", function() { return _shops__WEBPACK_IMPORTED_MODULE_0__["getShops"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createShop", function() { return _shops__WEBPACK_IMPORTED_MODULE_0__["createShop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getShop", function() { return _shops__WEBPACK_IMPORTED_MODULE_0__["getShop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateShop", function() { return _shops__WEBPACK_IMPORTED_MODULE_0__["updateShop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteShop", function() { return _shops__WEBPACK_IMPORTED_MODULE_0__["deleteShop"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



/***/ }),

/***/ "./resources/assets/js/store/action-creators/shops/shops.js":
/*!******************************************************************!*\
  !*** ./resources/assets/js/store/action-creators/shops/shops.js ***!
  \******************************************************************/
/*! exports provided: getShops, getShop, createShop, updateShop, deleteShop, saveShop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShops", function() { return getShops; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShop", function() { return getShop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createShop", function() { return createShop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateShop", function() { return updateShop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteShop", function() { return deleteShop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveShop", function() { return saveShop; });
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




const getShops = () => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])('get-shops', () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/shops")));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["shopActions"].ADD_SHOPS,
    shops: response.data.data
  });
};
const getShop = slug => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])("get-shop-".concat(slug), () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/shops/".concat(slug))));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["shopActions"].GET_SHOP,
    shops: response.data.data
  });
};
const createShop = data => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])('create-shop', () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/shops", data)));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["shopActions"].ADD_SHOP,
    shops: response.data.data
  });
};
const updateShop = data => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])("update-shop-".concat(data.slug), () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/shops/".concat(data.slug), data)));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["shopActions"].UPDATE_SHOP,
    shops: response.data.data
  });
};
const deleteShop = slug => async dispatch => {
  await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])("update-shop-".concat(slug), () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("/api/shops/".concat(slug))));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["shopActions"].DELETE_SHOP,
    slug
  });
};
const saveShop = shopData => async dispatch => {
  const {
    slug
  } = shopData;
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])('save-shop-settings', () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/shops/".concat(slug), shopData)));
  return response;
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getShops, "getShops", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/shops/shops.js");
  reactHotLoader.register(getShop, "getShop", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/shops/shops.js");
  reactHotLoader.register(createShop, "createShop", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/shops/shops.js");
  reactHotLoader.register(updateShop, "updateShop", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/shops/shops.js");
  reactHotLoader.register(deleteShop, "deleteShop", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/shops/shops.js");
  reactHotLoader.register(saveShop, "saveShop", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/shops/shops.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/store/selectors/shops.js":
/*!******************************************************!*\
  !*** ./resources/assets/js/store/selectors/shops.js ***!
  \******************************************************/
/*! exports provided: selectAllShops, selectShopDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllShops", function() { return selectAllShops; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectShopDetails", function() { return selectShopDetails; });
/* harmony import */ var normalizr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalizr */ "./node_modules/normalizr/dist/normalizr.es.js");
/* harmony import */ var store_schemas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! store/schemas */ "./resources/assets/js/store/schemas.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



const selectAllShops = state => {
  const dnEntities = Object(normalizr__WEBPACK_IMPORTED_MODULE_0__["denormalize"])({
    shops: Object.keys(state.entities.shops)
  }, store_schemas__WEBPACK_IMPORTED_MODULE_1__["entities"], state.entities);
  return dnEntities.shops;
};
const selectShopDetails = (state, slug) => {
  const dnEntities = Object(normalizr__WEBPACK_IMPORTED_MODULE_0__["denormalize"])({
    shops: [slug]
  }, store_schemas__WEBPACK_IMPORTED_MODULE_1__["entities"], state.entities);
  return dnEntities.shops;
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(selectAllShops, "selectAllShops", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/selectors/shops.js");
  reactHotLoader.register(selectShopDetails, "selectShopDetails", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/selectors/shops.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5tYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2ltZy9kZWZhdWx0LXNob3AtYXZhdGFyLnBuZyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL1Nob3BzL1Nob3BBY3RpdmF0aW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL2FjdGlvbi1jcmVhdG9ycy9zaG9wcy9zaG9wcy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL3NlbGVjdG9ycy9zaG9wcy5qcyJdLCJuYW1lcyI6WyJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwiQWxlcnQiLCJ0eXBlIiwidGl0bGUiLCJmaXJlIiwidXNlRm9ybSIsImluaXRpYWxWYWx1ZXMiLCJ2YWxpZGF0ZSIsImluaXRpYWxpemVWYWx1ZXMiLCJvYmoiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJrIiwidiIsInZhbHVlcyIsInNldFZhbHVlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJ0b3VjaGVkVmFsdWVzIiwic2V0VG91Y2hlZFZhbHVlcyIsImVycm9ycyIsInNldEVycm9ycyIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJjaGVja2VkIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJoYW5kbGVCbHVyIiwiZSIsIm9uU3VibWl0IiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjZXJ0aWZpY2F0aW9uVXBsb2FkSGFuZGxlciIsImZpbGVEYXRhIiwicmVnaXN0cmF0aW9uVXBsb2FkSGFuZGxlciIsInBlcm1pdFVwbG9hZEhhbmRsZXIiLCJoYW5kbGVEeW5hbWljTGlzdCIsImZpZWxkcyIsIlNob3BBY3RpdmF0aW9uQ29tcG9uZW50IiwiZ2V0U2hvcHMiLCJkZWxldGVTaG9wIiwiaW1wZXJzb25hdGVTaG9wIiwic2hvcHMiLCJ1c2VyIiwidXNlcl90eXBlIiwiY2VydGlmaWNhdGlvbiIsInBlcm1pdCIsInJlZ2lzdHJhdGlvbiIsIm1lcmNoX2NlcnQiLCJzcGVjaWFsX3Rvb2xzIiwiY29ubmVjdCIsInN0YXRlIiwicHJvcHMiLCJxdWVyeSIsIm1hdGNoIiwicGFyYW1zIiwic2x1ZyIsInNlbGVjdFNob3BEZXRhaWxzIiwiY3VycmVudFVzZXJTZWxlY3RvciIsImRpc3BhdGNoIiwiZ2V0U2hvcHNBY3Rpb24iLCJyZXNwb25zZSIsIm1ha2VSZXF1ZXN0IiwiYXhpb3MiLCJnZXQiLCJhY3Rpb25zIiwiQUREX1NIT1BTIiwiZGF0YSIsImdldFNob3AiLCJHRVRfU0hPUCIsImNyZWF0ZVNob3AiLCJwb3N0IiwiQUREX1NIT1AiLCJ1cGRhdGVTaG9wIiwicHV0IiwiVVBEQVRFX1NIT1AiLCJkZWxldGUiLCJERUxFVEVfU0hPUCIsInNhdmVTaG9wIiwic2hvcERhdGEiLCJzZWxlY3RBbGxTaG9wcyIsImRuRW50aXRpZXMiLCJkZW5vcm1hbGl6ZSIsIk9iamVjdCIsImtleXMiLCJlbnRpdGllcyIsImVudGl0aWVzU2NoZW1hIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYixvQ0FBb0MsbUJBQU8sQ0FBQywrSEFBaUQ7QUFDN0YsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyxlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLDZCQUE2QixtQkFBTyxDQUFDLDJHQUF1QztBQUM1RSx5QkFBeUIsbUJBQU8sQ0FBQyxtR0FBbUM7QUFDcEUsaUJBQWlCLG1CQUFPLENBQUMsbUdBQW1DOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUMzQ0QsaUJBQWlCLHFCQUF1QixpQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0EsTUFBTUEsS0FBSyxHQUFHQyxrREFBSSxDQUFDQyxLQUFMLENBQVc7QUFDdkJDLE9BQUssRUFBRSxJQURnQjtBQUV2QkMsVUFBUSxFQUFFLFNBRmE7QUFHdkJDLG1CQUFpQixFQUFFLEtBSEk7QUFJdkJDLE9BQUssRUFBRTtBQUpnQixDQUFYLENBQWQ7O0FBT0EsTUFBTUMsS0FBSyxHQUFHLENBQUNDLElBQUQsRUFBT0MsS0FBUCxLQUFpQlQsS0FBSyxDQUFDVSxJQUFOLENBQVc7QUFDeENGLE1BQUksRUFBRUEsSUFEa0M7QUFFeENDLE9BQUssRUFBRUE7QUFGaUMsQ0FBWCxDQUEvQjs7QUFLQSxNQUFNRSxPQUFPLEdBQUcsQ0FBQztBQUFFQyxlQUFGO0FBQWlCQztBQUFqQixDQUFELEtBQWlDO0FBQy9DLFFBQU1DLGdCQUFnQixHQUFJQyxHQUFELElBQVNDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLFNBQUwsQ0FBZUgsR0FBZixFQUFvQixDQUFDSSxDQUFELEVBQUlDLENBQUosS0FBV0EsQ0FBQyxLQUFLLElBQU4sR0FBYSxFQUFiLEdBQWtCQSxDQUFqRCxDQUFYLENBQWxDOztBQUNBLFFBQU0sQ0FBQ0MsTUFBRCxFQUFTQyxTQUFULElBQXNCQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWVWLGdCQUFnQixDQUFDRixhQUFELENBQWhCLElBQW1DLEVBQWxELENBQTVCO0FBQ0EsUUFBTSxDQUFDYSxhQUFELEVBQWdCQyxnQkFBaEIsSUFBb0NILDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBQTFDO0FBQ0EsUUFBTSxDQUFDRyxNQUFELEVBQVNDLFNBQVQsSUFBc0JMLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBQTVCOztBQUVBLFFBQU1LLFlBQVksR0FBR0MsS0FBSyxJQUFJO0FBQzVCLFVBQU1DLE1BQU0sR0FBR0QsS0FBSyxDQUFDQyxNQUFyQjtBQUNBLFVBQU1DLEtBQUssR0FBR0QsTUFBTSxDQUFDdkIsSUFBUCxLQUFnQixVQUFoQixHQUE2QnVCLE1BQU0sQ0FBQ0UsT0FBcEMsR0FBOENGLE1BQU0sQ0FBQ0MsS0FBbkU7QUFDQUUsV0FBTyxDQUFDQyxHQUFSLENBQVlILEtBQVo7O0FBQ0EsUUFBS0QsTUFBTSxDQUFDdkIsSUFBUCxLQUFnQixVQUFyQixFQUFrQztBQUNoQyxVQUFJdUIsTUFBTSxDQUFDQyxLQUFQLEtBQWlCLENBQXJCLEVBQXlCO0FBQ3ZCLGNBQU1BLEtBQUssR0FBRyxLQUFkO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsY0FBTUEsS0FBSyxHQUFJLElBQWY7QUFDRDtBQUNGLEtBTkQsTUFNTztBQUNMLFlBQU1BLEtBQUssR0FBR0QsTUFBTSxDQUFDQyxLQUFyQjtBQUNEOztBQUNELFVBQU1JLElBQUksR0FBR0wsTUFBTSxDQUFDSyxJQUFwQjtBQUNBZCxhQUFTLG1CQUNKRCxNQURJO0FBRVAsT0FBQ2UsSUFBRCxHQUFRSjtBQUZELE9BQVQ7QUFJRCxHQWxCRDs7QUFvQkEsUUFBTUssVUFBVSxHQUFHUCxLQUFLLElBQUk7QUFDMUIsVUFBTUMsTUFBTSxHQUFHRCxLQUFLLENBQUNDLE1BQXJCO0FBQ0EsVUFBTUssSUFBSSxHQUFHTCxNQUFNLENBQUNLLElBQXBCO0FBQ0FWLG9CQUFnQixtQkFDWEQsYUFEVztBQUVkLE9BQUNXLElBQUQsR0FBUTtBQUZNLE9BQWhCO0FBSUEsVUFBTUUsQ0FBQyxHQUFHekIsUUFBUSxDQUFDUSxNQUFELENBQWxCO0FBQ0FPLGFBQVMsbUJBQ0pELE1BREksTUFFSlcsQ0FGSSxFQUFUO0FBSUQsR0FaRDs7QUFjQSxRQUFNQyxRQUFRLEdBQUdULEtBQUssSUFBSSxDQUV6QixDQUZEOztBQUdBLFFBQU1VLFlBQVksR0FBR1YsS0FBSyxJQUFJO0FBQzVCQSxTQUFLLENBQUNXLGNBQU47QUFDQSxVQUFNSCxDQUFDLEdBQUd6QixRQUFRLENBQUNRLE1BQUQsQ0FBbEI7QUFDQU8sYUFBUyxtQkFDSkQsTUFESSxNQUVKVyxDQUZJLEVBQVQ7QUFJQUosV0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWixFQUE0QmQsTUFBNUI7QUFDQWtCLFlBQVEsbUJBQU1sQixNQUFOO0FBQWNpQjtBQUFkLE9BQVI7QUFDRCxHQVREOztBQVdBLFFBQU1JLDBCQUEwQixHQUFHQyxRQUFRLElBQUk7QUFDN0NULFdBQU8sQ0FBQ0MsR0FBUixDQUFZUSxRQUFaO0FBQ0QsR0FGRDs7QUFJQSxRQUFNQyx5QkFBeUIsR0FBR0QsUUFBUSxJQUFJO0FBQzVDVCxXQUFPLENBQUNDLEdBQVIsQ0FBWVEsUUFBWjtBQUNELEdBRkQ7O0FBSUEsUUFBTUUsbUJBQW1CLEdBQUdGLFFBQVEsSUFBSTtBQUN0Q1QsV0FBTyxDQUFDQyxHQUFSLENBQVlRLFFBQVo7QUFDRCxHQUZEOztBQUlBLFFBQU1HLGlCQUFpQixHQUFHLENBQUNDLE1BQUQsRUFBU3ZDLElBQVQsS0FBa0I7QUFDMUMsVUFBTTRCLElBQUksR0FBRzVCLElBQWI7QUFDQWMsYUFBUyxtQkFDSkQsTUFESTtBQUVQLE9BQUNlLElBQUQsR0FBUVc7QUFGRCxPQUFUO0FBSUQsR0FORDs7QUFRQSxTQUFPO0FBQ0wxQixVQURLO0FBRUxDLGFBRks7QUFHTEcsaUJBSEs7QUFJTEUsVUFKSztBQUtMRSxnQkFMSztBQU1MVyxnQkFOSztBQU9MSCxjQVBLO0FBUUxTLHFCQVJLO0FBU0xKLDhCQVRLO0FBVUxFLDZCQVZLO0FBV0xDO0FBWEssR0FBUDtBQWFELENBdkZEOztjQUFNbEMsTzs7QUF5Rk4sU0FBU3FDLHVCQUFULENBQWlDO0FBQUVDLFVBQUY7QUFBWUMsWUFBWjtBQUF3QkMsaUJBQXhCO0FBQXlDQyxPQUF6QztBQUFnREM7QUFBaEQsQ0FBakMsRUFBeUY7QUFDdkYsUUFBTTtBQUFFQztBQUFGLE1BQWdCRCxJQUF0QjtBQUNBLFFBQU16QyxhQUFhLEdBQUcsQ0FBQyxFQUFELENBQXRCO0FBQ0EsUUFBTTtBQUNKUyxVQURJO0FBRUpDLGFBRkk7QUFHSkcsaUJBSEk7QUFJSkUsVUFKSTtBQUtKRSxnQkFMSTtBQU1KVyxnQkFOSTtBQU9KSCxjQVBJO0FBUUpTLHFCQVJJO0FBU0pKLDhCQVRJO0FBVUpFLDZCQVZJO0FBV0pDO0FBWEksTUFXb0JsQyxPQUFPLENBQUM7QUFDaENDLGlCQURnQzs7QUFFaENDLFlBQVEsQ0FBQ1EsTUFBRCxFQUFTO0FBQ2YsWUFBTU0sTUFBTSxHQUFHLEVBQWY7QUFFQSxhQUFPQSxNQUFQO0FBQ0Q7O0FBTitCLEdBQUQsQ0FYakM7QUFvQkEsU0FDRSwyREFBQyw4Q0FBRCxRQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0UsMkRBQUMscURBQUQ7QUFBWSxTQUFLLEVBQUMseUJBQWxCO0FBQTRDLFlBQVEsRUFBQztBQUFyRCxLQUNFLDJEQUFDLHFEQUFEO0FBQU0sTUFBRSxtQkFBUjtBQUE2QixhQUFTLEVBQUM7QUFBdkMsS0FDRTtBQUFHLGFBQVMsRUFBQztBQUFiLGtCQURGLEVBRUUsbUZBRkYsQ0FERixDQURGLENBREYsRUFTRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0k7QUFBTyxhQUFTLEVBQUM7QUFBakIsS0FDSTtBQUFPLGFBQVMsRUFBQztBQUFqQixLQUNJLHVFQUNJO0FBQUksYUFBUyxFQUFDO0FBQWQsSUFESixFQUVJO0FBQUksYUFBUyxFQUFDO0FBQWQsWUFGSixFQUdJLDhFQUhKLEVBSUk7QUFBSSxhQUFTLEVBQUM7QUFBZCxpQkFKSixFQUtJLGlGQUxKLENBREosQ0FESixFQVVJO0FBQU8sYUFBUyxFQUFDO0FBQWpCLEtBQ0k7QUFBSSxhQUFTLEVBQUM7QUFBZCxLQUNJO0FBQUksYUFBUyxFQUFDO0FBQWQsS0FBK0Q7QUFBRyxhQUFTLEVBQUM7QUFBYix5QkFBL0QsQ0FESixFQUVJO0FBQUksYUFBUyxFQUFDO0FBQWQsS0FDSTtBQUFLLGFBQVMsRUFBQztBQUFmLHVDQURKLEVBRUk7QUFBSyxhQUFTLEVBQUM7QUFBZixpQ0FGSixDQUZKLEVBTUk7QUFBSSxhQUFTLEVBQUM7QUFBZCxTQU5KLEVBT0k7QUFBSSxhQUFTLEVBQUM7QUFBZCxTQVBKLEVBUUk7QUFBSSxhQUFTLEVBQUM7QUFBZCxLQUNFLDJEQUFDLHFEQUFEO0FBQVksaUJBQWEsRUFBRWUsMEJBQTNCO0FBQXVELFFBQUksRUFBQyxlQUE1RDtBQUE0RSxTQUFLLEVBQUVyQixNQUFNLENBQUNrQyxhQUFQLEdBQXVCbEMsTUFBTSxDQUFDa0MsYUFBOUIsR0FBOEM7QUFBakksSUFERixDQVJKLENBREosRUFhSTtBQUFJLGFBQVMsRUFBQztBQUFkLEtBQ0k7QUFBSSxhQUFTLEVBQUM7QUFBZCxLQUErRDtBQUFHLGFBQVMsRUFBQztBQUFiLHlCQUEvRCxDQURKLEVBRUk7QUFBSSxhQUFTLEVBQUM7QUFBZCxLQUNJO0FBQUssYUFBUyxFQUFDO0FBQWYsc0JBREosRUFFSTtBQUFLLGFBQVMsRUFBQztBQUFmLGlDQUZKLENBRkosRUFNSTtBQUFJLGFBQVMsRUFBQztBQUFkLFNBTkosRUFPSTtBQUFJLGFBQVMsRUFBQztBQUFkLFNBUEosRUFRSTtBQUFJLGFBQVMsRUFBQztBQUFkLEtBQ0EsMkRBQUMscURBQUQ7QUFBWSxpQkFBYSxFQUFFVixtQkFBM0I7QUFBZ0QsUUFBSSxFQUFDLFFBQXJEO0FBQThELFNBQUssRUFBRXhCLE1BQU0sQ0FBQ21DLE1BQVAsR0FBZ0JuQyxNQUFNLENBQUNtQyxNQUF2QixHQUFnQztBQUFyRyxJQURBLENBUkosQ0FiSixFQXlCSSx1RUFDSTtBQUFJLGFBQVMsRUFBQztBQUFkLEtBQStEO0FBQUcsYUFBUyxFQUFDO0FBQWIseUJBQS9ELENBREosRUFFSTtBQUFJLGFBQVMsRUFBQztBQUFkLEtBQ0k7QUFBSyxhQUFTLEVBQUM7QUFBZiwyQ0FESixFQUVJO0FBQUssYUFBUyxFQUFDO0FBQWYsaUNBRkosQ0FGSixFQU1JO0FBQUksYUFBUyxFQUFDO0FBQWQsU0FOSixFQU9JO0FBQUksYUFBUyxFQUFDO0FBQWQsU0FQSixFQVFJO0FBQUksYUFBUyxFQUFDO0FBQWQsS0FDQSwyREFBQyxxREFBRDtBQUFZLGlCQUFhLEVBQUVaLHlCQUEzQjtBQUFzRCxRQUFJLEVBQUMsY0FBM0Q7QUFBMEUsU0FBSyxFQUFFdkIsTUFBTSxDQUFDb0MsWUFBUCxHQUFzQnBDLE1BQU0sQ0FBQ29DLFlBQTdCLEdBQTRDO0FBQTdILElBREEsQ0FSSixDQXpCSixDQVZKLEVBZ0RJLDBFQUNJLHVFQUNJO0FBQUksV0FBTyxFQUFDLEdBQVo7QUFBZ0IsYUFBUyxFQUFDO0FBQTFCLGdFQURKLENBREosQ0FoREosQ0FESixDQVRGLEVBa0VFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDSTtBQUFLLGFBQVMsRUFBQztBQUFmLDhCQURKLEVBRUk7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNJO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDSSx5RkFESixFQUVJO0FBQU8sYUFBUyxFQUFDLHNEQUFqQjtBQUF3RSxRQUFJLEVBQUMsUUFBN0U7QUFBc0YsUUFBSSxFQUFDLFNBQTNGO0FBQXFHLFlBQVEsRUFBRyxNQUFNLENBQUUsQ0FBeEg7QUFBMkgsU0FBSyxFQUFDO0FBQWpJLElBRkosQ0FESixFQUtJO0FBQUssYUFBUyxFQUFDO0FBQWYsWUFMSixFQVFJO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDSSwwRkFESixFQUVJO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRSwyREFBQyxzREFBRDtBQUFhLFFBQUksRUFBQyxZQUFsQjtBQUErQixTQUFLLEVBQUVwQyxNQUFNLENBQUNxQyxVQUFQLElBQXFCLENBQUMsRUFBRCxDQUEzRDtBQUFrRSxnQkFBWSxFQUFFWjtBQUFoRixJQURGLENBRkosQ0FSSixFQWNJO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDSSwwRkFESixFQUVJO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRSwyREFBQyxzREFBRDtBQUFhLFFBQUksRUFBQyxlQUFsQjtBQUFrQyxTQUFLLEVBQUV6QixNQUFNLENBQUNzQyxhQUFQLElBQXdCLENBQUMsRUFBRCxDQUFqRTtBQUF3RSxnQkFBWSxFQUFFYjtBQUF0RixJQURGLENBRkosQ0FkSixDQUZKLEVBdUJJO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDSTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLGFBQVMsRUFBQztBQUFoQyxvQkFESixDQXZCSixFQTBCRTtBQUFLLGFBQVMsRUFBQztBQUFmLElBMUJGLENBbEVGLENBREYsQ0FERjtBQW1HRDs7Y0ExSFFFLHVCLGlRQWNtQnJDLE87O2lCQThHYmlELDJEQUFPLENBQ3BCLENBQUNDLEtBQUQsRUFBUUMsS0FBUixLQUFrQjtBQUNoQixRQUFNQyxLQUFLLEdBQUdELEtBQUssQ0FBQ0UsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxJQUFqQztBQUNBLFNBQU87QUFDSGQsU0FBSyxFQUFFZSwrRUFBaUIsQ0FBQ04sS0FBRCxFQUFRRSxLQUFSLENBRHJCO0FBRUhWLFFBQUksRUFBRWUsbUZBQW1CLENBQUNQLEtBQUQ7QUFGdEIsR0FBUDtBQUlFLENBUGdCLEVBUXBCUSxRQUFRLEtBQUs7QUFDWHBCLFVBQVEsRUFBRSxNQUFNb0IsUUFBUSxDQUFDQyw2RUFBYyxFQUFmO0FBRGIsQ0FBTCxDQVJZLENBQVAsQ0FXYnRCLHVCQVhhLEM7O0FBQUE7Ozs7Ozs7Ozs7MEJBak9UaEQsSzswQkFPQU8sSzswQkFLQUksTzswQkF5RkdxQyx1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BIVDtBQUNBO0FBQ0E7QUFFTyxNQUFNQyxRQUFRLEdBQUcsTUFBTSxNQUFNb0IsUUFBTixJQUFrQjtBQUM5QyxRQUFNRSxRQUFRLEdBQUcsTUFBTUYsUUFBUSxDQUM3Qkcsa0ZBQVcsQ0FBQyxXQUFELEVBQWMsTUFBTUMsNENBQUssQ0FBQ0MsR0FBTixjQUFwQixDQURrQixDQUEvQjtBQUlBTCxVQUFRLENBQUM7QUFDUDdELFFBQUksRUFBRW1FLHlEQUFPLENBQUNDLFNBRFA7QUFFUHhCLFNBQUssRUFBRW1CLFFBQVEsQ0FBQ00sSUFBVCxDQUFjQTtBQUZkLEdBQUQsQ0FBUjtBQUlELENBVE07QUFXQSxNQUFNQyxPQUFPLEdBQUdaLElBQUksSUFBSSxNQUFNRyxRQUFOLElBQWtCO0FBQy9DLFFBQU1FLFFBQVEsR0FBRyxNQUFNRixRQUFRLENBQzdCRyxrRkFBVyxvQkFBYU4sSUFBYixHQUFxQixNQUFNTyw0Q0FBSyxDQUFDQyxHQUFOLHNCQUF3QlIsSUFBeEIsRUFBM0IsQ0FEa0IsQ0FBL0I7QUFJQUcsVUFBUSxDQUFDO0FBQ1A3RCxRQUFJLEVBQUVtRSx5REFBTyxDQUFDSSxRQURQO0FBRVAzQixTQUFLLEVBQUVtQixRQUFRLENBQUNNLElBQVQsQ0FBY0E7QUFGZCxHQUFELENBQVI7QUFJRCxDQVRNO0FBV0EsTUFBTUcsVUFBVSxHQUFHSCxJQUFJLElBQUksTUFBTVIsUUFBTixJQUFrQjtBQUNsRCxRQUFNRSxRQUFRLEdBQUcsTUFBTUYsUUFBUSxDQUM3Qkcsa0ZBQVcsQ0FBQyxhQUFELEVBQWdCLE1BQU1DLDRDQUFLLENBQUNRLElBQU4sZUFBeUJKLElBQXpCLENBQXRCLENBRGtCLENBQS9CO0FBSUFSLFVBQVEsQ0FBQztBQUNQN0QsUUFBSSxFQUFFbUUseURBQU8sQ0FBQ08sUUFEUDtBQUVQOUIsU0FBSyxFQUFFbUIsUUFBUSxDQUFDTSxJQUFULENBQWNBO0FBRmQsR0FBRCxDQUFSO0FBSUQsQ0FUTTtBQVdBLE1BQU1NLFVBQVUsR0FBR04sSUFBSSxJQUFJLE1BQU1SLFFBQU4sSUFBa0I7QUFDbEQsUUFBTUUsUUFBUSxHQUFHLE1BQU1GLFFBQVEsQ0FDN0JHLGtGQUFXLHVCQUFnQkssSUFBSSxDQUFDWCxJQUFyQixHQUE2QixNQUN0Q08sNENBQUssQ0FBQ1csR0FBTixzQkFBd0JQLElBQUksQ0FBQ1gsSUFBN0IsR0FBcUNXLElBQXJDLENBRFMsQ0FEa0IsQ0FBL0I7QUFNQVIsVUFBUSxDQUFDO0FBQ1A3RCxRQUFJLEVBQUVtRSx5REFBTyxDQUFDVSxXQURQO0FBRVBqQyxTQUFLLEVBQUVtQixRQUFRLENBQUNNLElBQVQsQ0FBY0E7QUFGZCxHQUFELENBQVI7QUFJRCxDQVhNO0FBYUEsTUFBTTNCLFVBQVUsR0FBR2dCLElBQUksSUFBSSxNQUFNRyxRQUFOLElBQWtCO0FBQ2xELFFBQU1BLFFBQVEsQ0FDWkcsa0ZBQVcsdUJBQWdCTixJQUFoQixHQUF3QixNQUFNTyw0Q0FBSyxDQUFDYSxNQUFOLHNCQUEyQnBCLElBQTNCLEVBQTlCLENBREMsQ0FBZDtBQUlBRyxVQUFRLENBQUM7QUFDUDdELFFBQUksRUFBRW1FLHlEQUFPLENBQUNZLFdBRFA7QUFFUHJCO0FBRk8sR0FBRCxDQUFSO0FBSUQsQ0FUTTtBQVdBLE1BQU1zQixRQUFRLEdBQUdDLFFBQVEsSUFBSSxNQUFNcEIsUUFBTixJQUFrQjtBQUNwRCxRQUFNO0FBQUVIO0FBQUYsTUFBV3VCLFFBQWpCO0FBRUEsUUFBTWxCLFFBQVEsR0FBRyxNQUFNRixRQUFRLENBQzdCRyxrRkFBVyxDQUFDLG9CQUFELEVBQXVCLE1BQ2hDQyw0Q0FBSyxDQUFDVyxHQUFOLHNCQUF3QmxCLElBQXhCLEdBQWdDdUIsUUFBaEMsQ0FEUyxDQURrQixDQUEvQjtBQU1BLFNBQU9sQixRQUFQO0FBQ0QsQ0FWTTs7Ozs7Ozs7OzswQkF6RE10QixROzBCQVdBNkIsTzswQkFXQUUsVTswQkFXQUcsVTswQkFhQWpDLFU7MEJBV0FzQyxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEYjtBQUVBO0FBRU8sTUFBTUUsY0FBYyxHQUFHN0IsS0FBSyxJQUFJO0FBQ3JDLFFBQU04QixVQUFVLEdBQUdDLDZEQUFXLENBQzVCO0FBQUV4QyxTQUFLLEVBQUV5QyxNQUFNLENBQUNDLElBQVAsQ0FBWWpDLEtBQUssQ0FBQ2tDLFFBQU4sQ0FBZTNDLEtBQTNCO0FBQVQsR0FENEIsRUFFNUI0QyxzREFGNEIsRUFHNUJuQyxLQUFLLENBQUNrQyxRQUhzQixDQUE5QjtBQU1BLFNBQU9KLFVBQVUsQ0FBQ3ZDLEtBQWxCO0FBQ0QsQ0FSTTtBQVVBLE1BQU1lLGlCQUFpQixHQUFHLENBQUNOLEtBQUQsRUFBUUssSUFBUixLQUFpQjtBQUVoRCxRQUFNeUIsVUFBVSxHQUFHQyw2REFBVyxDQUM1QjtBQUFFeEMsU0FBSyxFQUFFLENBQUNjLElBQUQ7QUFBVCxHQUQ0QixFQUU1QjhCLHNEQUY0QixFQUc1Qm5DLEtBQUssQ0FBQ2tDLFFBSHNCLENBQTlCO0FBTUEsU0FBT0osVUFBVSxDQUFDdkMsS0FBbEI7QUFDRCxDQVRNOzs7Ozs7Ozs7OzBCQVZNc0MsYzswQkFVQXZCLGlCIiwiZmlsZSI6ImpzLzE3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xudmFyIGZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIGFkdmFuY2VTdHJpbmdJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZHZhbmNlLXN0cmluZy1pbmRleCcpO1xudmFyIHJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcblxuLy8gQEBtYXRjaCBsb2dpY1xuZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMoJ21hdGNoJywgMSwgZnVuY3Rpb24gKE1BVENILCBuYXRpdmVNYXRjaCwgbWF5YmVDYWxsTmF0aXZlKSB7XG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUubWF0Y2hgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUubWF0Y2hcbiAgICBmdW5jdGlvbiBtYXRjaChyZWdleHApIHtcbiAgICAgIHZhciBPID0gcmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKTtcbiAgICAgIHZhciBtYXRjaGVyID0gcmVnZXhwID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHJlZ2V4cFtNQVRDSF07XG4gICAgICByZXR1cm4gbWF0Y2hlciAhPT0gdW5kZWZpbmVkID8gbWF0Y2hlci5jYWxsKHJlZ2V4cCwgTykgOiBuZXcgUmVnRXhwKHJlZ2V4cClbTUFUQ0hdKFN0cmluZyhPKSk7XG4gICAgfSxcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQG1hdGNoXWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQG1hdGNoXG4gICAgZnVuY3Rpb24gKHJlZ2V4cCkge1xuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShuYXRpdmVNYXRjaCwgcmVnZXhwLCB0aGlzKTtcbiAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcblxuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QocmVnZXhwKTtcbiAgICAgIHZhciBTID0gU3RyaW5nKHRoaXMpO1xuXG4gICAgICBpZiAoIXJ4Lmdsb2JhbCkgcmV0dXJuIHJlZ0V4cEV4ZWMocngsIFMpO1xuXG4gICAgICB2YXIgZnVsbFVuaWNvZGUgPSByeC51bmljb2RlO1xuICAgICAgcngubGFzdEluZGV4ID0gMDtcbiAgICAgIHZhciBBID0gW107XG4gICAgICB2YXIgbiA9IDA7XG4gICAgICB2YXIgcmVzdWx0O1xuICAgICAgd2hpbGUgKChyZXN1bHQgPSByZWdFeHBFeGVjKHJ4LCBTKSkgIT09IG51bGwpIHtcbiAgICAgICAgdmFyIG1hdGNoU3RyID0gU3RyaW5nKHJlc3VsdFswXSk7XG4gICAgICAgIEFbbl0gPSBtYXRjaFN0cjtcbiAgICAgICAgaWYgKG1hdGNoU3RyID09PSAnJykgcngubGFzdEluZGV4ID0gYWR2YW5jZVN0cmluZ0luZGV4KFMsIHRvTGVuZ3RoKHJ4Lmxhc3RJbmRleCksIGZ1bGxVbmljb2RlKTtcbiAgICAgICAgbisrO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG4gPT09IDAgPyBudWxsIDogQTtcbiAgICB9XG4gIF07XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9kZWZhdWx0LXNob3AtYXZhdGFyLnBuZ1wiOyIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgIFBhZ2VIZWFkZXIsIEZpbGVVcGxvYWQsIER5bmFtaWNMaXN0IH0gZnJvbSAnY29tcG9uZW50cydcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJ1xuaW1wb3J0IHsgc2VsZWN0U2hvcERldGFpbHMgfSBmcm9tICdzdG9yZS9zZWxlY3RvcnMvc2hvcHMnXG5pbXBvcnQgeyBjdXJyZW50VXNlclNlbGVjdG9yIH0gZnJvbSAnc3RvcmUvc2VsZWN0b3JzL3Nlc3Npb24nXG5pbXBvcnQgeyBMaW5rLCBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgZGVmYXVsdFNob3BBdmF0YXIgZnJvbSAnZGVmYXVsdC1zaG9wLWF2YXRhci5wbmcnXG5pbXBvcnQgeyBcbiAgZ2V0U2hvcHMgYXMgZ2V0U2hvcHNBY3Rpb24sXG4gIGdldFNob3AgYXMgZ2V0U2hvcEFjdGlvbixcbiAgdXBkYXRlU2hvcCBhcyB1cGRhdGVTaG9wQWN0aW9uLFxuICBkZWxldGVTaG9wIGFzIGRlbGV0ZVNob3BBY3Rpb24gXG5cbn0gZnJvbSAnc3RvcmUvYWN0aW9uLWNyZWF0b3JzL3Nob3BzJ1xuY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcbiAgdG9hc3Q6IHRydWUsXG4gIHBvc2l0aW9uOiAndG9wLWVuZCcsXG4gIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcbiAgdGltZXI6IDMwMDBcbn0pXG5cbmNvbnN0IEFsZXJ0ID0gKHR5cGUsIHRpdGxlKSA9PiBUb2FzdC5maXJlKHtcbiAgdHlwZTogdHlwZSxcbiAgdGl0bGU6IHRpdGxlXG59KVxuXG5jb25zdCB1c2VGb3JtID0gKHsgaW5pdGlhbFZhbHVlcywgdmFsaWRhdGUgfSkgPT4ge1xuICBjb25zdCBpbml0aWFsaXplVmFsdWVzID0gKG9iaikgPT4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmosIChrLCB2KSA9PiAodiA9PT0gbnVsbCA/ICcnIDogdikpKVxuICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gUmVhY3QudXNlU3RhdGUoaW5pdGlhbGl6ZVZhbHVlcyhpbml0aWFsVmFsdWVzKSB8fCB7fSlcbiAgY29uc3QgW3RvdWNoZWRWYWx1ZXMsIHNldFRvdWNoZWRWYWx1ZXNdID0gUmVhY3QudXNlU3RhdGUoe30pXG4gIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSBSZWFjdC51c2VTdGF0ZSh7fSlcbiAgXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXRcbiAgICBjb25zdCB2YWx1ZSA9IHRhcmdldC50eXBlID09PSBcImNoZWNrYm94XCIgPyB0YXJnZXQuY2hlY2tlZCA6IHRhcmdldC52YWx1ZVxuICAgIGNvbnNvbGUubG9nKHZhbHVlKVxuICAgIGlmICggdGFyZ2V0LnR5cGUgPT09IFwiY2hlY2tib3hcIiApIHtcbiAgICAgIGlmKCB0YXJnZXQudmFsdWUgPT09IDAgKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gZmFsc2VcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gIHRydWVcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdmFsdWUgPSB0YXJnZXQudmFsdWVcbiAgICB9XG4gICAgY29uc3QgbmFtZSA9IHRhcmdldC5uYW1lXG4gICAgc2V0VmFsdWVzKHtcbiAgICAgIC4uLnZhbHVlcyxcbiAgICAgIFtuYW1lXTogdmFsdWVcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQmx1ciA9IGV2ZW50ID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXRcbiAgICBjb25zdCBuYW1lID0gdGFyZ2V0Lm5hbWVcbiAgICBzZXRUb3VjaGVkVmFsdWVzKHtcbiAgICAgIC4uLnRvdWNoZWRWYWx1ZXMsXG4gICAgICBbbmFtZV06IHRydWVcbiAgICB9KVxuICAgIGNvbnN0IGUgPSB2YWxpZGF0ZSh2YWx1ZXMpXG4gICAgc2V0RXJyb3JzKHtcbiAgICAgIC4uLmVycm9ycyxcbiAgICAgIC4uLmVcbiAgICB9KVxuICB9XG5cbiAgY29uc3Qgb25TdWJtaXQgPSBldmVudCA9PiB7XG5cbiAgfVxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBldmVudCA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IGUgPSB2YWxpZGF0ZSh2YWx1ZXMpXG4gICAgc2V0RXJyb3JzKHtcbiAgICAgIC4uLmVycm9ycyxcbiAgICAgIC4uLmVcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKCdBcHBsaWNhdGlvbjonLCB2YWx1ZXMpO1xuICAgIG9uU3VibWl0KHsgLi4udmFsdWVzLCBlIH0pXG4gIH1cblxuICBjb25zdCBjZXJ0aWZpY2F0aW9uVXBsb2FkSGFuZGxlciA9IGZpbGVEYXRhID0+IHtcbiAgICBjb25zb2xlLmxvZyhmaWxlRGF0YSlcbiAgfVxuXG4gIGNvbnN0IHJlZ2lzdHJhdGlvblVwbG9hZEhhbmRsZXIgPSBmaWxlRGF0YSA9PiB7XG4gICAgY29uc29sZS5sb2coZmlsZURhdGEpXG4gIH1cblxuICBjb25zdCBwZXJtaXRVcGxvYWRIYW5kbGVyID0gZmlsZURhdGEgPT4ge1xuICAgIGNvbnNvbGUubG9nKGZpbGVEYXRhKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlRHluYW1pY0xpc3QgPSAoZmllbGRzLCB0eXBlKSA9PiB7XG4gICAgY29uc3QgbmFtZSA9IHR5cGVcbiAgICBzZXRWYWx1ZXMoe1xuICAgICAgLi4udmFsdWVzLFxuICAgICAgW25hbWVdOiBmaWVsZHNcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB2YWx1ZXMsXG4gICAgc2V0VmFsdWVzLFxuICAgIHRvdWNoZWRWYWx1ZXMsXG4gICAgZXJyb3JzLFxuICAgIGhhbmRsZUNoYW5nZSxcbiAgICBoYW5kbGVTdWJtaXQsXG4gICAgaGFuZGxlQmx1cixcbiAgICBoYW5kbGVEeW5hbWljTGlzdCxcbiAgICBjZXJ0aWZpY2F0aW9uVXBsb2FkSGFuZGxlcixcbiAgICByZWdpc3RyYXRpb25VcGxvYWRIYW5kbGVyLFxuICAgIHBlcm1pdFVwbG9hZEhhbmRsZXJcbiAgfVxufVxuXG5mdW5jdGlvbiBTaG9wQWN0aXZhdGlvbkNvbXBvbmVudCh7IGdldFNob3BzLCBkZWxldGVTaG9wLCBpbXBlcnNvbmF0ZVNob3AsIHNob3BzLCB1c2VyIH0pIHtcbiAgY29uc3QgeyB1c2VyX3R5cGUgfSA9IHVzZXJcbiAgY29uc3QgaW5pdGlhbFZhbHVlcyA9IFt7fV1cbiAgY29uc3QgeyBcbiAgICB2YWx1ZXMsXG4gICAgc2V0VmFsdWVzLFxuICAgIHRvdWNoZWRWYWx1ZXMsXG4gICAgZXJyb3JzLFxuICAgIGhhbmRsZUNoYW5nZSxcbiAgICBoYW5kbGVTdWJtaXQsXG4gICAgaGFuZGxlQmx1cixcbiAgICBoYW5kbGVEeW5hbWljTGlzdCxcbiAgICBjZXJ0aWZpY2F0aW9uVXBsb2FkSGFuZGxlcixcbiAgICByZWdpc3RyYXRpb25VcGxvYWRIYW5kbGVyLFxuICAgIHBlcm1pdFVwbG9hZEhhbmRsZXIgfSA9IHVzZUZvcm0oe1xuICAgIGluaXRpYWxWYWx1ZXMsXG4gICAgdmFsaWRhdGUodmFsdWVzKSB7XG4gICAgICBjb25zdCBlcnJvcnMgPSB7fVxuXG4gICAgICByZXR1cm4gZXJyb3JzXG4gICAgfVxuICB9KVxuICBcbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTEwIHB5LTVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgICAgICA8UGFnZUhlYWRlciB0aXRsZT1cIkFjdGl2YXRpb24gUmVxdWlyZW1lbnRzXCIgc3ViVGl0bGU9XCJTaG9wXCIgPlxuICAgICAgICAgICAgPExpbmsgdG89e2AvYWNjb3VudC9zaG9wcy9gfSBjbGFzc05hbWU9XCJtbC0yIGJnLWdyYXktMTAwIGhvdmVyOmJnLWdyYXktMjAwIHRleHQtZ3JheS03MDAgc2hhZG93IGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgdGV4dC14cyBtci01XCI+YXJyb3dfYmFjazwvaT5cbiAgICAgICAgICAgICAgPHNwYW4+R28gQmFjazwvc3Bhbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L1BhZ2VIZWFkZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLWxnIGJnLXdoaXRlIHNoYWRvdy1sZyBweS0xMFwiPlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXIgYm9yZGVyLWdyYXktMzAwXCI+XG4gICAgICAgICAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT1cImJnLWdyYXktMTAwIGJvcmRlciBib3JkZXItZ3JheS0zMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cIm1kOmhpZGRlbiBsZzp0YWJsZS1jZWxsXCI+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweS0zXCI+TmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+U2l6ZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwibWQ6aGlkZGVuIGxnOnRhYmxlLWNlbGxcIj5GaWxlIE5hbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFjdGlvbnM8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cInB5LTUgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cInAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZ3JheS0zMDAgbWQ6aGlkZGVuIGxnOnRhYmxlLWNlbGxcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyByb3VuZGVkLWZ1bGwgcC0zIGJnLWdyYXktMjAwIGJvcmRlciBib3JkZXItZ3JheS00MDAgdGV4dC1zbSB0ZXh0LWdyYXktNzAwXCI+aW5zZXJ0X2RyaXZlX2ZpbGU8L2k+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktMzAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhsXCI+QklSIENlcnRpZmljYXRlIG9mIFJlZ2lzdHJhdGlvbjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14c1wiPkxhc3QgdXBkYXRlZCA2IG1vbnRocyBhZ288L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTMwMFwiPi08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZ3JheS0zMDAgbWQ6aGlkZGVuIGxnOnRhYmxlLWNlbGxcIj4tPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS01IGJvcmRlciBib3JkZXItZ3JheS0zMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpbGVVcGxvYWQgdXBsb2FkSGFuZGxlcj17Y2VydGlmaWNhdGlvblVwbG9hZEhhbmRsZXJ9IG5hbWU9XCJjZXJ0aWZpY2F0aW9uXCIgdmFsdWU9e3ZhbHVlcy5jZXJ0aWZpY2F0aW9uID8gdmFsdWVzLmNlcnRpZmljYXRpb24gOiBudWxsfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cInAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZ3JheS0zMDAgbWQ6aGlkZGVuIGxnOnRhYmxlLWNlbGxcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyByb3VuZGVkLWZ1bGwgcC0zIGJnLWdyYXktMjAwIGJvcmRlciBib3JkZXItZ3JheS00MDAgdGV4dC1zbSB0ZXh0LWdyYXktNzAwXCI+aW5zZXJ0X2RyaXZlX2ZpbGU8L2k+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktMzAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhsXCI+TWF5b3IncyBQZXJtaXQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHNcIj5MYXN0IHVwZGF0ZWQgNiBtb250aHMgYWdvPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZ3JheS0zMDBcIj4tPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktMzAwIG1kOmhpZGRlbiBsZzp0YWJsZS1jZWxsXCI+LTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktNSBib3JkZXIgYm9yZGVyLWdyYXktMzAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmlsZVVwbG9hZCB1cGxvYWRIYW5kbGVyPXtwZXJtaXRVcGxvYWRIYW5kbGVyfSBuYW1lPVwicGVybWl0XCIgdmFsdWU9e3ZhbHVlcy5wZXJtaXQgPyB2YWx1ZXMucGVybWl0IDogbnVsbH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktMzAwIG1kOmhpZGRlbiBsZzp0YWJsZS1jZWxsXCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgcm91bmRlZC1mdWxsIHAtMyBiZy1ncmF5LTIwMCBib3JkZXIgYm9yZGVyLWdyYXktNDAwIHRleHQtc20gdGV4dC1ncmF5LTcwMFwiPmluc2VydF9kcml2ZV9maWxlPC9pPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTMwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14bFwiPlNFQy9EVEkgQ2VydGlmaWNhdGUgb2YgUmVnaXN0cmF0aW9uPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzXCI+TGFzdCB1cGRhdGVkIDYgbW9udGhzIGFnbzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktMzAwXCI+LTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBtZDpoaWRkZW4gbGc6dGFibGUtY2VsbFwiPi08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTUgYm9yZGVyIGJvcmRlci1ncmF5LTMwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpbGVVcGxvYWQgdXBsb2FkSGFuZGxlcj17cmVnaXN0cmF0aW9uVXBsb2FkSGFuZGxlcn0gbmFtZT1cInJlZ2lzdHJhdGlvblwiIHZhbHVlPXt2YWx1ZXMucmVnaXN0cmF0aW9uID8gdmFsdWVzLnJlZ2lzdHJhdGlvbiA6IG51bGx9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPHRmb290PlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj1cIjVcIiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0IHRleHQtc20gdGV4dC1ncmF5LTYwMCBweS0zIHB4LTEwXCI+TWF4aW11bSBmaWxlIHNpemUgcGVyIGZpbGU6IDVNQiAtIChKUEVHLCBQTkcsIFBERiwgRE9DWCk8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGZvb3Q+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLWxnIGJnLXdoaXRlIHNoYWRvdy1sZyBweS0yIG10LTEwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGcgcHgtNSBweS0zIGJvcmRlci1iIGJvcmRlci1ncmF5LTMwMFwiPkFkZGl0aW9uYWwgSW5mb3JtYXRpb248L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNSBweS0zIGdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPiMgb2YgTGlmdGVyczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHB4LTMgcHktMiBteS0zXCIgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJsaWZ0ZXJzXCIgb25DaGFuZ2U9eygoKSA9PiB7fSl9IHZhbHVlPVwiMFwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XG4gICAgICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q2VydGlmaWNhdGlvbjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxEeW5hbWljTGlzdCB0eXBlPVwibWVyY2hfY2VydFwiIHZhbHVlPXt2YWx1ZXMubWVyY2hfY2VydCB8fCBbW11dfSAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVEeW5hbWljTGlzdH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5TcGVjaWFsIFRvb2xzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPER5bmFtaWNMaXN0IHR5cGU9XCJzcGVjaWFsX3Rvb2xzXCIgdmFsdWU9e3ZhbHVlcy5zcGVjaWFsX3Rvb2xzIHx8IFtbXV19ICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUR5bmFtaWNMaXN0fSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTUgcHktMiBib3JkZXItdCBib3JkZXItZ3JheS0zMDBcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodCBiZy1ncmVlbi01MDAgaG92ZXI6YmctZ3JlZW4tNjAwIHRleHQtd2hpdGUgcHgtNSBweS0yIG15LTMgcm91bmRlZC1sZ1wiPlNhdmUgQ2hhbmdlczwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvRnJhZ21lbnQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgKHN0YXRlLCBwcm9wcykgPT4ge1xuICAgIGNvbnN0IHF1ZXJ5ID0gcHJvcHMubWF0Y2gucGFyYW1zLnNsdWdcbiAgICByZXR1cm4oe1xuICAgICAgICBzaG9wczogc2VsZWN0U2hvcERldGFpbHMoc3RhdGUsIHF1ZXJ5KSxcbiAgICAgICAgdXNlcjogY3VycmVudFVzZXJTZWxlY3RvcihzdGF0ZSlcbiAgICAgIH1cbiAgICApfSxcbiAgZGlzcGF0Y2ggPT4gKHtcbiAgICBnZXRTaG9wczogKCkgPT4gZGlzcGF0Y2goZ2V0U2hvcHNBY3Rpb24oKSlcbiAgfSlcbikoU2hvcEFjdGl2YXRpb25Db21wb25lbnQpIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgc2hvcEFjdGlvbnMgYXMgYWN0aW9ucyB9IGZyb20gJ3N0b3JlL2FjdGlvbnMnXG5pbXBvcnQgeyBtYWtlUmVxdWVzdCB9IGZyb20gJ3N0b3JlL2FjdGlvbi1jcmVhdG9ycy9yZXF1ZXN0cydcblxuZXhwb3J0IGNvbnN0IGdldFNob3BzID0gKCkgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRpc3BhdGNoKFxuICAgIG1ha2VSZXF1ZXN0KCdnZXQtc2hvcHMnLCAoKSA9PiBheGlvcy5nZXQoYC9hcGkvc2hvcHNgKSlcbiAgKVxuXG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBhY3Rpb25zLkFERF9TSE9QUyxcbiAgICBzaG9wczogcmVzcG9uc2UuZGF0YS5kYXRhXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTaG9wID0gc2x1ZyA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZGlzcGF0Y2goXG4gICAgbWFrZVJlcXVlc3QoYGdldC1zaG9wLSR7c2x1Z31gLCAoKSA9PiBheGlvcy5nZXQoYC9hcGkvc2hvcHMvJHtzbHVnfWApKVxuICApXG5cbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IGFjdGlvbnMuR0VUX1NIT1AsXG4gICAgc2hvcHM6IHJlc3BvbnNlLmRhdGEuZGF0YVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlU2hvcCA9IGRhdGEgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRpc3BhdGNoKFxuICAgIG1ha2VSZXF1ZXN0KCdjcmVhdGUtc2hvcCcsICgpID0+IGF4aW9zLnBvc3QoYC9hcGkvc2hvcHNgLCBkYXRhKSlcbiAgKVxuXG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBhY3Rpb25zLkFERF9TSE9QLFxuICAgIHNob3BzOiByZXNwb25zZS5kYXRhLmRhdGFcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVNob3AgPSBkYXRhID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkaXNwYXRjaChcbiAgICBtYWtlUmVxdWVzdChgdXBkYXRlLXNob3AtJHtkYXRhLnNsdWd9YCwgKCkgPT5cbiAgICAgIGF4aW9zLnB1dChgL2FwaS9zaG9wcy8ke2RhdGEuc2x1Z31gLCBkYXRhKVxuICAgIClcbiAgKVxuXG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBhY3Rpb25zLlVQREFURV9TSE9QLFxuICAgIHNob3BzOiByZXNwb25zZS5kYXRhLmRhdGFcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVNob3AgPSBzbHVnID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgYXdhaXQgZGlzcGF0Y2goXG4gICAgbWFrZVJlcXVlc3QoYHVwZGF0ZS1zaG9wLSR7c2x1Z31gLCAoKSA9PiBheGlvcy5kZWxldGUoYC9hcGkvc2hvcHMvJHtzbHVnfWApKVxuICApXG5cbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IGFjdGlvbnMuREVMRVRFX1NIT1AsXG4gICAgc2x1Z1xuICB9KVxufVxuXG5leHBvcnQgY29uc3Qgc2F2ZVNob3AgPSBzaG9wRGF0YSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XG4gIGNvbnN0IHsgc2x1ZyB9ID0gc2hvcERhdGFcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRpc3BhdGNoKFxuICAgIG1ha2VSZXF1ZXN0KCdzYXZlLXNob3Atc2V0dGluZ3MnLCAoKSA9PlxuICAgICAgYXhpb3MucHV0KGAvYXBpL3Nob3BzLyR7c2x1Z31gLCBzaG9wRGF0YSlcbiAgICApXG4gIClcblxuICByZXR1cm4gcmVzcG9uc2Vcbn1cblxuXG4iLCJpbXBvcnQgeyBkZW5vcm1hbGl6ZSB9IGZyb20gJ25vcm1hbGl6cidcblxuaW1wb3J0IHsgZW50aXRpZXMgYXMgZW50aXRpZXNTY2hlbWEgfSBmcm9tICdzdG9yZS9zY2hlbWFzJ1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0QWxsU2hvcHMgPSBzdGF0ZSA9PiB7XG4gIGNvbnN0IGRuRW50aXRpZXMgPSBkZW5vcm1hbGl6ZShcbiAgICB7IHNob3BzOiBPYmplY3Qua2V5cyhzdGF0ZS5lbnRpdGllcy5zaG9wcykgfSxcbiAgICBlbnRpdGllc1NjaGVtYSxcbiAgICBzdGF0ZS5lbnRpdGllc1xuICApXG5cbiAgcmV0dXJuIGRuRW50aXRpZXMuc2hvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHNlbGVjdFNob3BEZXRhaWxzID0gKHN0YXRlLCBzbHVnKSA9PiB7XG5cbiAgY29uc3QgZG5FbnRpdGllcyA9IGRlbm9ybWFsaXplKFxuICAgIHsgc2hvcHM6IFtzbHVnXSB9LFxuICAgIGVudGl0aWVzU2NoZW1hLFxuICAgIHN0YXRlLmVudGl0aWVzXG4gIClcblxuICByZXR1cm4gZG5FbnRpdGllcy5zaG9wc1xufSJdLCJzb3VyY2VSb290IjoiIn0=