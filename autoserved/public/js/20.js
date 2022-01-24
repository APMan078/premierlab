(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

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

/***/ "./resources/assets/js/pages/PmsLists/UpdatePmsList.jsx":
/*!**************************************************************!*\
  !*** ./resources/assets/js/pages/PmsLists/UpdatePmsList.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components */ "./resources/assets/js/components/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var store_selectors_pms_lists__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! store/selectors/pms_lists */ "./resources/assets/js/store/selectors/pms_lists.js");
/* harmony import */ var store_selectors_session__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! store/selectors/session */ "./resources/assets/js/store/selectors/session/index.js");
/* harmony import */ var store_action_creators_pms_lists__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! store/action-creators/pms_lists */ "./resources/assets/js/store/action-creators/pms_lists/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);





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











const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.mixin({
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
  onSubmit,
  validate
}) => {
  const initializeValues = obj => JSON.parse(JSON.stringify(obj, (k, v) => v === null ? '' : v));

  const [values, setValues] = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState(initializeValues(initialValues) || {});
  const [touchedValues, setTouchedValues] = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState({});
  const [errors, setErrors] = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState({});

  function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  function stripString(string) {
    return string.replace('_', ' ');
  }

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

  const handleSubmit = event => {
    event.preventDefault();
    const e = validate(values);
    setErrors(_objectSpread({}, errors, {}, e));
    console.log('preventives:', values);
    onSubmit(_objectSpread({}, values, {
      e
    }));
  };

  const handleDynamicList = (fields, type) => {
    const name = type;
    setValues(_objectSpread({}, values, {
      [name]: fields
    }));
  };

  return {
    values,
    touchedValues,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
    handleDynamicList
  };
};

__signature__(useForm, "useState{[values, setValues](initializeValues(initialValues) || {})}\nuseState{[touchedValues, setTouchedValues]({})}\nuseState{[errors, setErrors]({})}");

function UpdatePmsListComponent({
  onSubmit,
  match,
  getPms_list,
  pms_lists,
  user
}) {
  const {
    user_type
  } = user;
  const query = match.params.id;

  const populatePms_list = async () => {
    await getPms_list(query);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    populatePms_list();
  }, []);
  const initialValues = pms_lists[0];

  if (!initialValues) {
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Redirect"], {
      to: "/account/pms-lists"
    });
  }

  const {
    values,
    touchedValues,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
    handleDynamicList
  } = useForm({
    initialValues,
    onSubmit,

    validate(values) {
      const errors = {};
      return errors;
    }

  });
  console.log(values);

  if (user_type == 'vendor' || user_type == 'fleet') {
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Redirect"], {
      from: "/account",
      to: "/account/overview"
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "px-10 py-5"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "w-full"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_7__["PageHeader"], {
    title: "Details",
    subTitle: "Pms_list"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Link"], {
    to: "/account/pms-lists/",
    className: "ml-2 bg-gray-300 hover:bg-gray-500 text-gray-700 shadow font-bold py-2 px-4 rounded inline-flex items-center"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
    className: "material-icons text-xs mr-5"
  }, "arrow_back"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, "Go Back")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Link"], {
    to: "#",
    onClick: handleSubmit,
    className: "ml-2 bg-green-500 hover:bg-green-600 text-white shadow font-bold py-2 px-4 rounded inline-flex items-center"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
    className: "material-icons text-sm mr-3"
  }, "save_alt"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, "Save")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
    onSubmit: handleSubmit
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "w-full mb-5"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "rounded-lg shadow-lg bg-white"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "p-5"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
    htmlFor: "mileage"
  }, "Mileage"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
    type: "text",
    name: "mileage",
    value: values.mileage ? values.mileage : '',
    onChange: handleChange,
    className: "border border-gray-300 p-2 rounded my-3 block w-full"
  })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "w-full mb-5"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_7__["CollapsibleCard"], {
    title: "Check Items"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_7__["DynamicList"], {
    type: "check_items",
    value: values.check_items ? values.check_items : [],
    handleChange: handleDynamicList
  }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "w-full mb-5"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_7__["CollapsibleCard"], {
    title: "Clean Items",
    collapse: "hidden"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_7__["DynamicList"], {
    type: "clean_items",
    value: values.clean_items ? values.clean_items : [],
    handleChange: handleDynamicList
  }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "w-full mb-5"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_7__["CollapsibleCard"], {
    title: "Change Items",
    collapse: "hidden"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_7__["DynamicList"], {
    type: "change_items",
    value: values.change_items ? values.change_items : [],
    handleChange: handleDynamicList
  }))))));
}

__signature__(UpdatePmsListComponent, "useEffect{}\nuseForm{{ \n    values, \n    touchedValues, \n    errors, \n    handleChange, \n    handleSubmit, \n    handleBlur, \n    handleDynamicList\n }}", () => [useForm]);

const validateFields = values => {
  let errors = {};
  return errors;
};

const UpdatePmsList = Object(redux_form__WEBPACK_IMPORTED_MODULE_6__["reduxForm"])({
  form: 'updateService',
  enableReinitialize: true,
  validate: validateFields
})(UpdatePmsListComponent);

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])((state, props) => {
  const query = props.match.params.id;
  return {
    pms_lists: Object(store_selectors_pms_lists__WEBPACK_IMPORTED_MODULE_9__["selectPms_listDetails"])(state, query),
    user: Object(store_selectors_session__WEBPACK_IMPORTED_MODULE_10__["currentUserSelector"])(state)
  };
}, dispatch => ({
  getPms_list: id => dispatch(Object(store_action_creators_pms_lists__WEBPACK_IMPORTED_MODULE_11__["getPms_list"])(id)),
  deletePms_list: id => {
    sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.value) {
        dispatch(Object(store_action_creators_pms_lists__WEBPACK_IMPORTED_MODULE_11__["deletePms_list"])(id));
        Alert('success', 'User successfully deleted!');
      }
    });
  },
  onSubmit: values => {
    dispatch(Object(store_action_creators_pms_lists__WEBPACK_IMPORTED_MODULE_11__["updatePms_list"])(values));
    Alert('success', 'PMS successfully updated!');
  }
}))(UpdatePmsList);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Toast, "Toast", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/PmsLists/UpdatePmsList.jsx");
  reactHotLoader.register(Alert, "Alert", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/PmsLists/UpdatePmsList.jsx");
  reactHotLoader.register(useForm, "useForm", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/PmsLists/UpdatePmsList.jsx");
  reactHotLoader.register(UpdatePmsListComponent, "UpdatePmsListComponent", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/PmsLists/UpdatePmsList.jsx");
  reactHotLoader.register(validateFields, "validateFields", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/PmsLists/UpdatePmsList.jsx");
  reactHotLoader.register(UpdatePmsList, "UpdatePmsList", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/PmsLists/UpdatePmsList.jsx");
  reactHotLoader.register(_default, "default", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/PmsLists/UpdatePmsList.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/store/action-creators/pms_lists/index.js":
/*!**********************************************************************!*\
  !*** ./resources/assets/js/store/action-creators/pms_lists/index.js ***!
  \**********************************************************************/
/*! exports provided: savePms_list, getPms_lists, createPms_list, getPms_list, updatePms_list, deletePms_list */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pms_lists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pms_lists */ "./resources/assets/js/store/action-creators/pms_lists/pms_lists.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "savePms_list", function() { return _pms_lists__WEBPACK_IMPORTED_MODULE_0__["savePms_list"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPms_lists", function() { return _pms_lists__WEBPACK_IMPORTED_MODULE_0__["getPms_lists"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPms_list", function() { return _pms_lists__WEBPACK_IMPORTED_MODULE_0__["createPms_list"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPms_list", function() { return _pms_lists__WEBPACK_IMPORTED_MODULE_0__["getPms_list"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updatePms_list", function() { return _pms_lists__WEBPACK_IMPORTED_MODULE_0__["updatePms_list"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deletePms_list", function() { return _pms_lists__WEBPACK_IMPORTED_MODULE_0__["deletePms_list"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



/***/ }),

/***/ "./resources/assets/js/store/action-creators/pms_lists/pms_lists.js":
/*!**************************************************************************!*\
  !*** ./resources/assets/js/store/action-creators/pms_lists/pms_lists.js ***!
  \**************************************************************************/
/*! exports provided: getPms_lists, getPms_list, createPms_list, updatePms_list, deletePms_list, savePms_list */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPms_lists", function() { return getPms_lists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPms_list", function() { return getPms_list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPms_list", function() { return createPms_list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePms_list", function() { return updatePms_list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePms_list", function() { return deletePms_list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "savePms_list", function() { return savePms_list; });
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




const getPms_lists = () => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])('get-pms_lists', () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/pms-lists")));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["pms_listActions"].ADD_PMS_LISTS,
    pms_lists: response.data.data
  });
};
const getPms_list = id => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])("get-pms_list-".concat(id), () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/pms-lists/".concat(id))));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["pms_listActions"].GET_PMS_LIST,
    pms_lists: response.data.data
  });
};
const createPms_list = data => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])('create-pms_list', () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/pms-lists", data)));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["pms_listActions"].ADD_PMS_LIST,
    pms_lists: response.data.data
  });
};
const updatePms_list = data => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])("update-pms_list-".concat(data.id), () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/pms-lists/".concat(data.id), data)));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["pms_listActions"].UPDATE_PMS_LIST,
    pms_lists: response.data.data
  });
};
const deletePms_list = id => async dispatch => {
  await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])("update-pms_list-".concat(id), () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("/api/pms-lists/".concat(id))));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["pms_listActions"].DELETE_PMS_LIST,
    id
  });
};
const savePms_list = pms_listData => async dispatch => {
  const {
    id
  } = pms_listData;
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])('save-pms_list-settings', () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/pms-lists/".concat(id), pms_listData)));
  return response;
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getPms_lists, "getPms_lists", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/pms_lists/pms_lists.js");
  reactHotLoader.register(getPms_list, "getPms_list", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/pms_lists/pms_lists.js");
  reactHotLoader.register(createPms_list, "createPms_list", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/pms_lists/pms_lists.js");
  reactHotLoader.register(updatePms_list, "updatePms_list", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/pms_lists/pms_lists.js");
  reactHotLoader.register(deletePms_list, "deletePms_list", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/pms_lists/pms_lists.js");
  reactHotLoader.register(savePms_list, "savePms_list", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/pms_lists/pms_lists.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/store/selectors/pms_lists.js":
/*!**********************************************************!*\
  !*** ./resources/assets/js/store/selectors/pms_lists.js ***!
  \**********************************************************/
/*! exports provided: selectAllPms_lists, selectPms_listDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllPms_lists", function() { return selectAllPms_lists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPms_listDetails", function() { return selectPms_listDetails; });
/* harmony import */ var normalizr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalizr */ "./node_modules/normalizr/dist/normalizr.es.js");
/* harmony import */ var store_schemas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! store/schemas */ "./resources/assets/js/store/schemas.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



const selectAllPms_lists = state => {
  const dnEntities = Object(normalizr__WEBPACK_IMPORTED_MODULE_0__["denormalize"])({
    pms_lists: Object.keys(state.entities.pms_lists)
  }, store_schemas__WEBPACK_IMPORTED_MODULE_1__["entities"], state.entities);
  return dnEntities.pms_lists;
};
const selectPms_listDetails = (state, slug) => {
  const dnEntities = Object(normalizr__WEBPACK_IMPORTED_MODULE_0__["denormalize"])({
    pms_lists: [slug]
  }, store_schemas__WEBPACK_IMPORTED_MODULE_1__["entities"], state.entities);
  return dnEntities.pms_lists;
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(selectAllPms_lists, "selectAllPms_lists", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/selectors/pms_lists.js");
  reactHotLoader.register(selectPms_listDetails, "selectPms_listDetails", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/selectors/pms_lists.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5tYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL1Btc0xpc3RzL1VwZGF0ZVBtc0xpc3QuanN4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvYWN0aW9uLWNyZWF0b3JzL3Btc19saXN0cy9wbXNfbGlzdHMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9zZWxlY3RvcnMvcG1zX2xpc3RzLmpzIl0sIm5hbWVzIjpbIlRvYXN0IiwiU3dhbCIsIm1peGluIiwidG9hc3QiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJBbGVydCIsInR5cGUiLCJ0aXRsZSIsImZpcmUiLCJ1c2VGb3JtIiwiaW5pdGlhbFZhbHVlcyIsIm9uU3VibWl0IiwidmFsaWRhdGUiLCJpbml0aWFsaXplVmFsdWVzIiwib2JqIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiayIsInYiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwidG91Y2hlZFZhbHVlcyIsInNldFRvdWNoZWRWYWx1ZXMiLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJjYXBpdGFsaXplRmlyc3RMZXR0ZXIiLCJzdHJpbmciLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwic3RyaXBTdHJpbmciLCJyZXBsYWNlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNoZWNrZWQiLCJjb25zb2xlIiwibG9nIiwibmFtZSIsImhhbmRsZUJsdXIiLCJlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVEeW5hbWljTGlzdCIsImZpZWxkcyIsIlVwZGF0ZVBtc0xpc3RDb21wb25lbnQiLCJtYXRjaCIsImdldFBtc19saXN0IiwicG1zX2xpc3RzIiwidXNlciIsInVzZXJfdHlwZSIsInF1ZXJ5IiwicGFyYW1zIiwiaWQiLCJwb3B1bGF0ZVBtc19saXN0IiwidXNlRWZmZWN0IiwibWlsZWFnZSIsImNoZWNrX2l0ZW1zIiwiY2xlYW5faXRlbXMiLCJjaGFuZ2VfaXRlbXMiLCJ2YWxpZGF0ZUZpZWxkcyIsIlVwZGF0ZVBtc0xpc3QiLCJyZWR1eEZvcm0iLCJmb3JtIiwiZW5hYmxlUmVpbml0aWFsaXplIiwiY29ubmVjdCIsInN0YXRlIiwicHJvcHMiLCJzZWxlY3RQbXNfbGlzdERldGFpbHMiLCJjdXJyZW50VXNlclNlbGVjdG9yIiwiZGlzcGF0Y2giLCJnZXRQbXNfbGlzdEFjdGlvbiIsImRlbGV0ZVBtc19saXN0IiwidGV4dCIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwidGhlbiIsInJlc3VsdCIsImRlbGV0ZVBtc19saXN0QWN0aW9uIiwidXBkYXRlUG1zX2xpc3RBY3Rpb24iLCJnZXRQbXNfbGlzdHMiLCJyZXNwb25zZSIsIm1ha2VSZXF1ZXN0IiwiYXhpb3MiLCJnZXQiLCJhY3Rpb25zIiwiQUREX1BNU19MSVNUUyIsImRhdGEiLCJHRVRfUE1TX0xJU1QiLCJjcmVhdGVQbXNfbGlzdCIsInBvc3QiLCJBRERfUE1TX0xJU1QiLCJ1cGRhdGVQbXNfbGlzdCIsInB1dCIsIlVQREFURV9QTVNfTElTVCIsImRlbGV0ZSIsIkRFTEVURV9QTVNfTElTVCIsInNhdmVQbXNfbGlzdCIsInBtc19saXN0RGF0YSIsInNlbGVjdEFsbFBtc19saXN0cyIsImRuRW50aXRpZXMiLCJkZW5vcm1hbGl6ZSIsIk9iamVjdCIsImtleXMiLCJlbnRpdGllcyIsImVudGl0aWVzU2NoZW1hIiwic2x1ZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhO0FBQ2Isb0NBQW9DLG1CQUFPLENBQUMsK0hBQWlEO0FBQzdGLGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0Ms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UCxDQUFZdkMsS0FBSyxDQUFDd0MsUUFBTixDQUFlMUQsU0FBM0I7QUFBYixHQUQ0QixFQUU1QjJELHNEQUY0QixFQUc1QnpDLEtBQUssQ0FBQ3dDLFFBSHNCLENBQTlCO0FBTUEsU0FBT0osVUFBVSxDQUFDdEQsU0FBbEI7QUFDRCxDQVJNO0FBVUEsTUFBTW9CLHFCQUFxQixHQUFHLENBQUNGLEtBQUQsRUFBUTBDLElBQVIsS0FBaUI7QUFFcEQsUUFBTU4sVUFBVSxHQUFHQyw2REFBVyxDQUM1QjtBQUFFdkQsYUFBUyxFQUFFLENBQUM0RCxJQUFEO0FBQWIsR0FENEIsRUFFNUJELHNEQUY0QixFQUc1QnpDLEtBQUssQ0FBQ3dDLFFBSHNCLENBQTlCO0FBTUEsU0FBT0osVUFBVSxDQUFDdEQsU0FBbEI7QUFDRCxDQVRNOzs7Ozs7Ozs7OzBCQVZNcUQsa0I7MEJBVUFqQyxxQiIsImZpbGUiOiJqcy8yMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbnZhciBmaXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciBhZHZhbmNlU3RyaW5nSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYWR2YW5jZS1zdHJpbmctaW5kZXgnKTtcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG5cbi8vIEBAbWF0Y2ggbG9naWNcbmZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljKCdtYXRjaCcsIDEsIGZ1bmN0aW9uIChNQVRDSCwgbmF0aXZlTWF0Y2gsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICByZXR1cm4gW1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLm1hdGNoYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLm1hdGNoXG4gICAgZnVuY3Rpb24gbWF0Y2gocmVnZXhwKSB7XG4gICAgICB2YXIgTyA9IHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcyk7XG4gICAgICB2YXIgbWF0Y2hlciA9IHJlZ2V4cCA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiByZWdleHBbTUFUQ0hdO1xuICAgICAgcmV0dXJuIG1hdGNoZXIgIT09IHVuZGVmaW5lZCA/IG1hdGNoZXIuY2FsbChyZWdleHAsIE8pIDogbmV3IFJlZ0V4cChyZWdleHApW01BVENIXShTdHJpbmcoTykpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEBtYXRjaF1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEBtYXRjaFxuICAgIGZ1bmN0aW9uIChyZWdleHApIHtcbiAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUobmF0aXZlTWF0Y2gsIHJlZ2V4cCwgdGhpcyk7XG4gICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG5cbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHJlZ2V4cCk7XG4gICAgICB2YXIgUyA9IFN0cmluZyh0aGlzKTtcblxuICAgICAgaWYgKCFyeC5nbG9iYWwpIHJldHVybiByZWdFeHBFeGVjKHJ4LCBTKTtcblxuICAgICAgdmFyIGZ1bGxVbmljb2RlID0gcngudW5pY29kZTtcbiAgICAgIHJ4Lmxhc3RJbmRleCA9IDA7XG4gICAgICB2YXIgQSA9IFtdO1xuICAgICAgdmFyIG4gPSAwO1xuICAgICAgdmFyIHJlc3VsdDtcbiAgICAgIHdoaWxlICgocmVzdWx0ID0gcmVnRXhwRXhlYyhyeCwgUykpICE9PSBudWxsKSB7XG4gICAgICAgIHZhciBtYXRjaFN0ciA9IFN0cmluZyhyZXN1bHRbMF0pO1xuICAgICAgICBBW25dID0gbWF0Y2hTdHI7XG4gICAgICAgIGlmIChtYXRjaFN0ciA9PT0gJycpIHJ4Lmxhc3RJbmRleCA9IGFkdmFuY2VTdHJpbmdJbmRleChTLCB0b0xlbmd0aChyeC5sYXN0SW5kZXgpLCBmdWxsVW5pY29kZSk7XG4gICAgICAgIG4rKztcbiAgICAgIH1cbiAgICAgIHJldHVybiBuID09PSAwID8gbnVsbCA6IEE7XG4gICAgfVxuICBdO1xufSk7XG4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHJlZHV4Rm9ybSB9IGZyb20gJ3JlZHV4LWZvcm0nXG5pbXBvcnQgeyAgUGFnZUhlYWRlciwgRHluYW1pY0xpc3QsIENvbGxhcHNpYmxlQ2FyZCB9IGZyb20gJ2NvbXBvbmVudHMnXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0MidcbmltcG9ydCB7IHNlbGVjdFBtc19saXN0RGV0YWlscyB9IGZyb20gJ3N0b3JlL3NlbGVjdG9ycy9wbXNfbGlzdHMnXG5pbXBvcnQgeyBjdXJyZW50VXNlclNlbGVjdG9yIH0gZnJvbSAnc3RvcmUvc2VsZWN0b3JzL3Nlc3Npb24nXG5pbXBvcnQgeyBcbiAgZ2V0UG1zX2xpc3QgYXMgZ2V0UG1zX2xpc3RBY3Rpb24sXG4gIHVwZGF0ZVBtc19saXN0IGFzIHVwZGF0ZVBtc19saXN0QWN0aW9uLFxuICBkZWxldGVQbXNfbGlzdCBhcyBkZWxldGVQbXNfbGlzdEFjdGlvbiBcblxufSBmcm9tICdzdG9yZS9hY3Rpb24tY3JlYXRvcnMvcG1zX2xpc3RzJ1xuaW1wb3J0IHsgTGluaywgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5cbmNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XG4gIHRvYXN0OiB0cnVlLFxuICBwb3NpdGlvbjogJ3RvcC1lbmQnLFxuICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXG4gIHRpbWVyOiAzMDAwXG59KVxuXG5jb25zdCBBbGVydCA9ICh0eXBlLCB0aXRsZSkgPT4gVG9hc3QuZmlyZSh7XG4gIHR5cGU6IHR5cGUsXG4gIHRpdGxlOiB0aXRsZVxufSlcblxuY29uc3QgdXNlRm9ybSA9ICh7IGluaXRpYWxWYWx1ZXMsIG9uU3VibWl0LCB2YWxpZGF0ZSB9KSA9PiB7XG4gIGNvbnN0IGluaXRpYWxpemVWYWx1ZXMgPSAob2JqKSA9PiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaiwgKGssIHYpID0+ICh2ID09PSBudWxsID8gJycgOiB2KSkpXG4gIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSBSZWFjdC51c2VTdGF0ZShpbml0aWFsaXplVmFsdWVzKGluaXRpYWxWYWx1ZXMpIHx8IHt9KVxuICBjb25zdCBbdG91Y2hlZFZhbHVlcywgc2V0VG91Y2hlZFZhbHVlc10gPSBSZWFjdC51c2VTdGF0ZSh7fSlcbiAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IFJlYWN0LnVzZVN0YXRlKHt9KVxuXG4gIGZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdHJpcFN0cmluZyhzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoJ18nLCAnICcpXG4gIH1cbiAgXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXRcbiAgICBjb25zdCB2YWx1ZSA9IHRhcmdldC50eXBlID09PSBcImNoZWNrYm94XCIgPyB0YXJnZXQuY2hlY2tlZCA6IHRhcmdldC52YWx1ZVxuICAgIGNvbnNvbGUubG9nKHZhbHVlKVxuICAgIGlmICggdGFyZ2V0LnR5cGUgPT09IFwiY2hlY2tib3hcIiApIHtcbiAgICAgIGlmKCB0YXJnZXQudmFsdWUgPT09IDAgKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gZmFsc2VcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gIHRydWVcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdmFsdWUgPSB0YXJnZXQudmFsdWVcbiAgICB9XG4gICAgY29uc3QgbmFtZSA9IHRhcmdldC5uYW1lXG4gICAgc2V0VmFsdWVzKHtcbiAgICAgIC4uLnZhbHVlcyxcbiAgICAgIFtuYW1lXTogdmFsdWVcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQmx1ciA9IGV2ZW50ID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXRcbiAgICBjb25zdCBuYW1lID0gdGFyZ2V0Lm5hbWVcbiAgICBzZXRUb3VjaGVkVmFsdWVzKHtcbiAgICAgIC4uLnRvdWNoZWRWYWx1ZXMsXG4gICAgICBbbmFtZV06IHRydWVcbiAgICB9KVxuICAgIGNvbnN0IGUgPSB2YWxpZGF0ZSh2YWx1ZXMpXG4gICAgc2V0RXJyb3JzKHtcbiAgICAgIC4uLmVycm9ycyxcbiAgICAgIC4uLmVcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gZXZlbnQgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCBlID0gdmFsaWRhdGUodmFsdWVzKVxuICAgIHNldEVycm9ycyh7XG4gICAgICAuLi5lcnJvcnMsXG4gICAgICAuLi5lXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZygncHJldmVudGl2ZXM6JywgdmFsdWVzKTtcbiAgICBvblN1Ym1pdCh7IC4uLnZhbHVlcywgZSB9KVxuICB9XG5cbiAgY29uc3QgaGFuZGxlRHluYW1pY0xpc3QgPSAoZmllbGRzLCB0eXBlKSA9PiB7XG4gICAgY29uc3QgbmFtZSA9IHR5cGVcbiAgICBzZXRWYWx1ZXMoe1xuICAgICAgLi4udmFsdWVzLFxuICAgICAgW25hbWVdOiBmaWVsZHNcbiAgICB9KVxuICB9XG4gIFxuXG4gIHJldHVybiB7XG4gICAgdmFsdWVzLFxuICAgIHRvdWNoZWRWYWx1ZXMsXG4gICAgZXJyb3JzLFxuICAgIGhhbmRsZUNoYW5nZSxcbiAgICBoYW5kbGVTdWJtaXQsXG4gICAgaGFuZGxlQmx1cixcbiAgICBoYW5kbGVEeW5hbWljTGlzdFxuICB9XG59XG5cbmZ1bmN0aW9uIFVwZGF0ZVBtc0xpc3RDb21wb25lbnQoeyBvblN1Ym1pdCwgbWF0Y2gsIGdldFBtc19saXN0LCBwbXNfbGlzdHMsIHVzZXIgfSkge1xuICBjb25zdCB7IHVzZXJfdHlwZSB9ID0gdXNlclxuXG5cbiAgY29uc3QgcXVlcnkgPSBtYXRjaC5wYXJhbXMuaWRcbiAgY29uc3QgcG9wdWxhdGVQbXNfbGlzdCA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBnZXRQbXNfbGlzdChxdWVyeSlcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcG9wdWxhdGVQbXNfbGlzdCgpXG4gIH0sIFtdKSAgXG5cblxuICBjb25zdCBpbml0aWFsVmFsdWVzID0gcG1zX2xpc3RzWzBdXG5cbiAgaWYgKCFpbml0aWFsVmFsdWVzKSB7XG4gICAgcmV0dXJuIDxSZWRpcmVjdCB0bz1cIi9hY2NvdW50L3Btcy1saXN0c1wiIC8+XG4gIH1cbiAgXG4gIGNvbnN0IHsgXG4gICAgdmFsdWVzLCBcbiAgICB0b3VjaGVkVmFsdWVzLCBcbiAgICBlcnJvcnMsIFxuICAgIGhhbmRsZUNoYW5nZSwgXG4gICAgaGFuZGxlU3VibWl0LCBcbiAgICBoYW5kbGVCbHVyLCBcbiAgICBoYW5kbGVEeW5hbWljTGlzdFxuIH0gPSB1c2VGb3JtKHtcbiAgICBpbml0aWFsVmFsdWVzLFxuICAgIG9uU3VibWl0LFxuICAgIHZhbGlkYXRlKHZhbHVlcykge1xuICAgICAgY29uc3QgZXJyb3JzID0ge31cblxuICAgICAgcmV0dXJuIGVycm9yc1xuICAgIH1cbiAgfSlcblxuICBjb25zb2xlLmxvZyh2YWx1ZXMpXG5cbiAgaWYgKHVzZXJfdHlwZSA9PSAndmVuZG9yJyB8fCB1c2VyX3R5cGUgPT0gJ2ZsZWV0Jykge1xuICAgIHJldHVybiA8UmVkaXJlY3QgZnJvbT0nL2FjY291bnQnIHRvPVwiL2FjY291bnQvb3ZlcnZpZXdcIiAvPlxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTEwIHB5LTVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgICAgICA8UGFnZUhlYWRlciB0aXRsZT1cIkRldGFpbHNcIiBzdWJUaXRsZT1cIlBtc19saXN0XCIgPlxuICAgICAgICAgICAgPExpbmsgdG89e2AvYWNjb3VudC9wbXMtbGlzdHMvYH0gY2xhc3NOYW1lPVwibWwtMiBiZy1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTUwMCB0ZXh0LWdyYXktNzAwIHNoYWRvdyBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIHRleHQteHMgbXItNVwiPmFycm93X2JhY2s8L2k+XG4gICAgICAgICAgICAgIDxzcGFuPkdvIEJhY2s8L3NwYW4+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8TGluayB0bz1cIiNcIiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cIm1sLTIgYmctZ3JlZW4tNTAwIGhvdmVyOmJnLWdyZWVuLTYwMCB0ZXh0LXdoaXRlIHNoYWRvdyBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIHRleHQtc20gbXItM1wiPnNhdmVfYWx0PC9pPlxuICAgICAgICAgICAgICA8c3Bhbj5TYXZlPC9zcGFuPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvUGFnZUhlYWRlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1iLTVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIHNoYWRvdy1sZyBiZy13aGl0ZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01XCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1pbGVhZ2VcIj5NaWxlYWdlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJtaWxlYWdlXCIgdmFsdWU9e3ZhbHVlcy5taWxlYWdlID8gdmFsdWVzLm1pbGVhZ2UgOiAnJ30gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBwLTIgcm91bmRlZCBteS0zIGJsb2NrIHctZnVsbFwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1iLTVcIj5cbiAgICAgICAgICAgIDxDb2xsYXBzaWJsZUNhcmQgdGl0bGU9XCJDaGVjayBJdGVtc1wiPlxuICAgICAgICAgICAgICA8RHluYW1pY0xpc3QgdHlwZT1cImNoZWNrX2l0ZW1zXCIgdmFsdWU9e3ZhbHVlcy5jaGVja19pdGVtcyA/IHZhbHVlcy5jaGVja19pdGVtcyA6IFtdfSAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVEeW5hbWljTGlzdH0gLz5cbiAgICAgICAgICAgIDwvQ29sbGFwc2libGVDYXJkPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1iLTVcIj5cbiAgICAgICAgICAgIDxDb2xsYXBzaWJsZUNhcmQgdGl0bGU9XCJDbGVhbiBJdGVtc1wiIGNvbGxhcHNlPVwiaGlkZGVuXCI+XG4gICAgICAgICAgICAgIDxEeW5hbWljTGlzdCB0eXBlPVwiY2xlYW5faXRlbXNcIiB2YWx1ZT17dmFsdWVzLmNsZWFuX2l0ZW1zID8gdmFsdWVzLmNsZWFuX2l0ZW1zIDogW119ICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUR5bmFtaWNMaXN0fSAvPlxuICAgICAgICAgICAgPC9Db2xsYXBzaWJsZUNhcmQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWItNVwiPlxuICAgICAgICAgICAgPENvbGxhcHNpYmxlQ2FyZCB0aXRsZT1cIkNoYW5nZSBJdGVtc1wiIGNvbGxhcHNlPVwiaGlkZGVuXCI+XG4gICAgICAgICAgICAgIDxEeW5hbWljTGlzdCB0eXBlPVwiY2hhbmdlX2l0ZW1zXCIgdmFsdWU9e3ZhbHVlcy5jaGFuZ2VfaXRlbXMgPyB2YWx1ZXMuY2hhbmdlX2l0ZW1zIDogW119ICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUR5bmFtaWNMaXN0fSAvPlxuICAgICAgICAgICAgPC9Db2xsYXBzaWJsZUNhcmQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvRnJhZ21lbnQ+XG4gIClcbn1cblxuY29uc3QgdmFsaWRhdGVGaWVsZHMgPSB2YWx1ZXMgPT4ge1xuICBsZXQgZXJyb3JzID0ge31cblxuICByZXR1cm4gZXJyb3JzXG59XG5cbmNvbnN0IFVwZGF0ZVBtc0xpc3QgPSByZWR1eEZvcm0oe1xuICBmb3JtOiAndXBkYXRlU2VydmljZScsXG4gIGVuYWJsZVJlaW5pdGlhbGl6ZTogdHJ1ZSxcbiAgdmFsaWRhdGU6IHZhbGlkYXRlRmllbGRzXG59KShVcGRhdGVQbXNMaXN0Q29tcG9uZW50KVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAoc3RhdGUsIHByb3BzKSA9PiB7XG4gICAgY29uc3QgcXVlcnkgPSBwcm9wcy5tYXRjaC5wYXJhbXMuaWRcbiAgICByZXR1cm4oe1xuICAgICAgICBwbXNfbGlzdHM6IHNlbGVjdFBtc19saXN0RGV0YWlscyhzdGF0ZSwgcXVlcnkpLFxuICAgICAgICB1c2VyOiBjdXJyZW50VXNlclNlbGVjdG9yKHN0YXRlKVxuICAgICAgfVxuICAgICl9LFxuICBkaXNwYXRjaCA9PiAoe1xuICAgIGdldFBtc19saXN0OiBpZCA9PiBkaXNwYXRjaChnZXRQbXNfbGlzdEFjdGlvbihpZCkpLFxuICAgIGRlbGV0ZVBtc19saXN0OiBpZCA9PiB7XG4gICAgICBTd2FsLmZpcmUoe1xuICAgICAgICB0aXRsZTogJ0FyZSB5b3Ugc3VyZT8nLFxuICAgICAgICB0ZXh0OiBcIllvdSB3b24ndCBiZSBhYmxlIHRvIHJldmVydCB0aGlzIVwiLFxuICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6ICcjMzA4NWQ2JyxcbiAgICAgICAgY2FuY2VsQnV0dG9uQ29sb3I6ICcjZDMzJyxcbiAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdZZXMsIGRlbGV0ZSBpdCEnXG4gICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xuICAgICAgICAgIGRpc3BhdGNoKGRlbGV0ZVBtc19saXN0QWN0aW9uKGlkKSlcbiAgICAgICAgICBBbGVydCgnc3VjY2VzcycsICdVc2VyIHN1Y2Nlc3NmdWxseSBkZWxldGVkIScpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBvblN1Ym1pdDogdmFsdWVzID0+IHtcbiAgICAgIGRpc3BhdGNoKHVwZGF0ZVBtc19saXN0QWN0aW9uKHZhbHVlcykpXG4gICAgICBBbGVydCgnc3VjY2VzcycsICdQTVMgc3VjY2Vzc2Z1bGx5IHVwZGF0ZWQhJylcbiAgICB9XG4gIH0pXG4pKFVwZGF0ZVBtc0xpc3QpIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgcG1zX2xpc3RBY3Rpb25zIGFzIGFjdGlvbnMgfSBmcm9tICdzdG9yZS9hY3Rpb25zJ1xuaW1wb3J0IHsgbWFrZVJlcXVlc3QgfSBmcm9tICdzdG9yZS9hY3Rpb24tY3JlYXRvcnMvcmVxdWVzdHMnXG5cbmV4cG9ydCBjb25zdCBnZXRQbXNfbGlzdHMgPSAoKSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZGlzcGF0Y2goXG4gICAgbWFrZVJlcXVlc3QoJ2dldC1wbXNfbGlzdHMnLCAoKSA9PiBheGlvcy5nZXQoYC9hcGkvcG1zLWxpc3RzYCkpXG4gIClcblxuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogYWN0aW9ucy5BRERfUE1TX0xJU1RTLFxuICAgIHBtc19saXN0czogcmVzcG9uc2UuZGF0YS5kYXRhXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBnZXRQbXNfbGlzdCA9IGlkID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkaXNwYXRjaChcbiAgICBtYWtlUmVxdWVzdChgZ2V0LXBtc19saXN0LSR7aWR9YCwgKCkgPT4gYXhpb3MuZ2V0KGAvYXBpL3Btcy1saXN0cy8ke2lkfWApKVxuICApXG5cbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IGFjdGlvbnMuR0VUX1BNU19MSVNULFxuICAgIHBtc19saXN0czogcmVzcG9uc2UuZGF0YS5kYXRhXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVQbXNfbGlzdCA9IGRhdGEgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRpc3BhdGNoKFxuICAgIG1ha2VSZXF1ZXN0KCdjcmVhdGUtcG1zX2xpc3QnLCAoKSA9PiBheGlvcy5wb3N0KGAvYXBpL3Btcy1saXN0c2AsIGRhdGEpKVxuICApXG5cbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IGFjdGlvbnMuQUREX1BNU19MSVNULFxuICAgIHBtc19saXN0czogcmVzcG9uc2UuZGF0YS5kYXRhXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVQbXNfbGlzdCA9IGRhdGEgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRpc3BhdGNoKFxuICAgIG1ha2VSZXF1ZXN0KGB1cGRhdGUtcG1zX2xpc3QtJHtkYXRhLmlkfWAsICgpID0+XG4gICAgICBheGlvcy5wdXQoYC9hcGkvcG1zLWxpc3RzLyR7ZGF0YS5pZH1gLCBkYXRhKVxuICAgIClcbiAgKVxuXG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBhY3Rpb25zLlVQREFURV9QTVNfTElTVCxcbiAgICBwbXNfbGlzdHM6IHJlc3BvbnNlLmRhdGEuZGF0YVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgZGVsZXRlUG1zX2xpc3QgPSBpZCA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XG4gIGF3YWl0IGRpc3BhdGNoKFxuICAgIG1ha2VSZXF1ZXN0KGB1cGRhdGUtcG1zX2xpc3QtJHtpZH1gLCAoKSA9PiBheGlvcy5kZWxldGUoYC9hcGkvcG1zLWxpc3RzLyR7aWR9YCkpXG4gIClcblxuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogYWN0aW9ucy5ERUxFVEVfUE1TX0xJU1QsXG4gICAgaWRcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IHNhdmVQbXNfbGlzdCA9IHBtc19saXN0RGF0YSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XG4gIGNvbnN0IHsgaWQgfSA9IHBtc19saXN0RGF0YVxuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZGlzcGF0Y2goXG4gICAgbWFrZVJlcXVlc3QoJ3NhdmUtcG1zX2xpc3Qtc2V0dGluZ3MnLCAoKSA9PlxuICAgICAgYXhpb3MucHV0KGAvYXBpL3Btcy1saXN0cy8ke2lkfWAsIHBtc19saXN0RGF0YSlcbiAgICApXG4gIClcblxuICByZXR1cm4gcmVzcG9uc2Vcbn1cblxuXG4iLCJpbXBvcnQgeyBkZW5vcm1hbGl6ZSB9IGZyb20gJ25vcm1hbGl6cidcblxuaW1wb3J0IHsgZW50aXRpZXMgYXMgZW50aXRpZXNTY2hlbWEgfSBmcm9tICdzdG9yZS9zY2hlbWFzJ1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0QWxsUG1zX2xpc3RzID0gc3RhdGUgPT4ge1xuICBjb25zdCBkbkVudGl0aWVzID0gZGVub3JtYWxpemUoXG4gICAgeyBwbXNfbGlzdHM6IE9iamVjdC5rZXlzKHN0YXRlLmVudGl0aWVzLnBtc19saXN0cykgfSxcbiAgICBlbnRpdGllc1NjaGVtYSxcbiAgICBzdGF0ZS5lbnRpdGllc1xuICApXG5cbiAgcmV0dXJuIGRuRW50aXRpZXMucG1zX2xpc3RzXG59XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RQbXNfbGlzdERldGFpbHMgPSAoc3RhdGUsIHNsdWcpID0+IHtcblxuICBjb25zdCBkbkVudGl0aWVzID0gZGVub3JtYWxpemUoXG4gICAgeyBwbXNfbGlzdHM6IFtzbHVnXSB9LFxuICAgIGVudGl0aWVzU2NoZW1hLFxuICAgIHN0YXRlLmVudGl0aWVzXG4gIClcblxuICByZXR1cm4gZG5FbnRpdGllcy5wbXNfbGlzdHNcbn0iXSwic291cmNlUm9vdCI6IiJ9