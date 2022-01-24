(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "./resources/assets/js/pages/PmsLists/CreatePmsList.jsx":
/*!**************************************************************!*\
  !*** ./resources/assets/js/pages/PmsLists/CreatePmsList.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components */ "./resources/assets/js/components/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var store_action_creators_pms_lists__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! store/action-creators/pms_lists */ "./resources/assets/js/store/action-creators/pms_lists/index.js");
/* harmony import */ var store_selectors_session__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! store/selectors/session */ "./resources/assets/js/store/selectors/session/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");



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









const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.mixin({
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

  const [values, setValues] = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(initializeValues(initialValues) || {});
  const [touchedValues, setTouchedValues] = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState({});
  const [errors, setErrors] = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState({});

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
    console.log(values);
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

function CreatePmsListComponent({
  onSubmit,
  user
}) {
  const {
    user_type
  } = user;
  const initialValues = [];
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
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Redirect"], {
      from: "/account",
      to: "/account/overview"
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "px-10 py-5"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "w-full"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_5__["PageHeader"], {
    title: "Details",
    subTitle: "Pms_list"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], {
    to: "/account/pms-lists/",
    className: "ml-2 bg-gray-300 hover:bg-gray-500 text-gray-700 shadow font-bold py-2 px-4 rounded inline-flex items-center"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
    className: "material-icons text-xs mr-5"
  }, "arrow_back"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, "Go Back")))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("form", {
    onSubmit: handleSubmit
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "w-full mb-5"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "rounded-lg shadow-lg bg-white"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "p-5"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
    htmlFor: "mileage"
  }, "Mileage"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    type: "text",
    name: "mileage",
    value: values.mileage ? values.mileage : '',
    onChange: handleChange,
    className: "border border-gray-300 p-2 rounded my-3 block w-full"
  })))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "w-full mb-5"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_5__["CollapsibleCard"], {
    title: "Check Items"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_5__["DynamicList"], {
    type: "check_items",
    value: values.check_items ? values.check_items : [],
    handleChange: handleDynamicList
  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "w-full mb-5"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_5__["CollapsibleCard"], {
    title: "Clean Items"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_5__["DynamicList"], {
    type: "clean_items",
    value: values.clean_items ? values.clean_items : [],
    handleChange: handleDynamicList
  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "w-full mb-5"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_5__["CollapsibleCard"], {
    title: "Change Items"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_5__["DynamicList"], {
    type: "change_items",
    value: values.change_items ? values.change_items : [],
    handleChange: handleDynamicList
  }))))));
}

__signature__(CreatePmsListComponent, "useForm{{ \n    values, \n    touchedValues, \n    errors, \n    handleChange, \n    handleSubmit, \n    handleBlur, \n    handleDynamicList\n }}", () => [useForm]);

const validateFields = values => {
  let errors = {};
  return errors;
};

const CreatePmsList = Object(redux_form__WEBPACK_IMPORTED_MODULE_4__["reduxForm"])({
  form: 'updateService',
  enableReinitialize: true,
  validate: validateFields
})(CreatePmsListComponent);

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(state => {
  return {
    user: Object(store_selectors_session__WEBPACK_IMPORTED_MODULE_8__["currentUserSelector"])(state)
  };
}, dispatch => ({
  onSubmit: values => {
    dispatch(Object(store_action_creators_pms_lists__WEBPACK_IMPORTED_MODULE_7__["createPms_list"])(values));
    AlertMe('success', 'PMS successfully updated!');
  }
}))(CreatePmsListComponent);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Toast, "Toast", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/PmsLists/CreatePmsList.jsx");
  reactHotLoader.register(Alert, "Alert", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/PmsLists/CreatePmsList.jsx");
  reactHotLoader.register(useForm, "useForm", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/PmsLists/CreatePmsList.jsx");
  reactHotLoader.register(CreatePmsListComponent, "CreatePmsListComponent", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/PmsLists/CreatePmsList.jsx");
  reactHotLoader.register(validateFields, "validateFields", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/PmsLists/CreatePmsList.jsx");
  reactHotLoader.register(CreatePmsList, "CreatePmsList", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/PmsLists/CreatePmsList.jsx");
  reactHotLoader.register(_default, "default", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/PmsLists/CreatePmsList.jsx");
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL1Btc0xpc3RzL0NyZWF0ZVBtc0xpc3QuanN4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvYWN0aW9uLWNyZWF0b3JzL3Btc19saXN0cy9wbXNfbGlzdHMuanMiXSwibmFtZXMiOlsiVG9hc3QiLCJTd2FsIiwibWl4aW4iLCJ0b2FzdCIsInBvc2l0aW9uIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsIkFsZXJ0IiwidHlwZSIsInRpdGxlIiwiZmlyZSIsInVzZUZvcm0iLCJpbml0aWFsVmFsdWVzIiwib25TdWJtaXQiLCJ2YWxpZGF0ZSIsImluaXRpYWxpemVWYWx1ZXMiLCJvYmoiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJrIiwidiIsInZhbHVlcyIsInNldFZhbHVlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJ0b3VjaGVkVmFsdWVzIiwic2V0VG91Y2hlZFZhbHVlcyIsImVycm9ycyIsInNldEVycm9ycyIsImNhcGl0YWxpemVGaXJzdExldHRlciIsInN0cmluZyIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJzdHJpcFN0cmluZyIsInJlcGxhY2UiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiY2hlY2tlZCIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwiaGFuZGxlQmx1ciIsImUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUR5bmFtaWNMaXN0IiwiZmllbGRzIiwiQ3JlYXRlUG1zTGlzdENvbXBvbmVudCIsInVzZXIiLCJ1c2VyX3R5cGUiLCJtaWxlYWdlIiwiY2hlY2tfaXRlbXMiLCJjbGVhbl9pdGVtcyIsImNoYW5nZV9pdGVtcyIsInZhbGlkYXRlRmllbGRzIiwiQ3JlYXRlUG1zTGlzdCIsInJlZHV4Rm9ybSIsImZvcm0iLCJlbmFibGVSZWluaXRpYWxpemUiLCJjb25uZWN0Iiwic3RhdGUiLCJjdXJyZW50VXNlclNlbGVjdG9yIiwiZGlzcGF0Y2giLCJjcmVhdGVQbXNfbGlzdEFjdGlvbiIsIkFsZXJ0TWUiLCJnZXRQbXNfbGlzdHMiLCJyZXNwb25zZSIsIm1ha2VSZXF1ZXN0IiwiYXhpb3MiLCJnZXQiLCJhY3Rpb25zIiwiQUREX1BNU19MSVNUUyIsInBtc19saXN0cyIsImRhdGEiLCJnZXRQbXNfbGlzdCIsImlkIiwiR0VUX1BNU19MSVNUIiwiY3JlYXRlUG1zX2xpc3QiLCJwb3N0IiwiQUREX1BNU19MSVNUIiwidXBkYXRlUG1zX2xpc3QiLCJwdXQiLCJVUERBVEVfUE1TX0xJU1QiLCJkZWxldGVQbXNfbGlzdCIsImRlbGV0ZSIsIkRFTEVURV9QTVNfTElTVCIsInNhdmVQbXNfbGlzdCIsInBtc19saXN0RGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFFQSxNQUFNQSxLQUFLLEdBQUdDLGtEQUFJLENBQUNDLEtBQUwsQ0FBVztBQUN2QkMsT0FBSyxFQUFFLElBRGdCO0FBRXZCQyxVQUFRLEVBQUUsU0FGYTtBQUd2QkMsbUJBQWlCLEVBQUUsS0FISTtBQUl2QkMsT0FBSyxFQUFFO0FBSmdCLENBQVgsQ0FBZDs7QUFPQSxNQUFNQyxLQUFLLEdBQUcsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEtBQWlCVCxLQUFLLENBQUNVLElBQU4sQ0FBVztBQUN4Q0YsTUFBSSxFQUFFQSxJQURrQztBQUV4Q0MsT0FBSyxFQUFFQTtBQUZpQyxDQUFYLENBQS9COztBQUtBLE1BQU1FLE9BQU8sR0FBRyxDQUFDO0FBQUVDLGVBQUY7QUFBaUJDLFVBQWpCO0FBQTJCQztBQUEzQixDQUFELEtBQTJDO0FBQ3pELFFBQU1DLGdCQUFnQixHQUFJQyxHQUFELElBQVNDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLFNBQUwsQ0FBZUgsR0FBZixFQUFvQixDQUFD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QURQO0FBRVBWLGFBQVMsRUFBRU4sUUFBUSxDQUFDTyxJQUFULENBQWNBO0FBRmxCLEdBQUQsQ0FBUjtBQUlELENBWE07QUFhQSxNQUFNVSxjQUFjLEdBQUdSLEVBQUUsSUFBSSxNQUFNYixRQUFOLElBQWtCO0FBQ3BELFFBQU1BLFFBQVEsQ0FDWkssa0ZBQVcsMkJBQW9CUSxFQUFwQixHQUEwQixNQUFNUCw0Q0FBSyxDQUFDZ0IsTUFBTiwwQkFBK0JULEVBQS9CLEVBQWhDLENBREMsQ0FBZDtBQUlBYixVQUFRLENBQUM7QUFDUHpELFFBQUksRUFBRWlFLDZEQUFPLENBQUNlLGVBRFA7QUFFUFY7QUFGTyxHQUFELENBQVI7QUFJRCxDQVRNO0FBV0EsTUFBTVcsWUFBWSxHQUFHQyxZQUFZLElBQUksTUFBTXpCLFFBQU4sSUFBa0I7QUFDNUQsUUFBTTtBQUFFYTtBQUFGLE1BQVNZLFlBQWY7QUFFQSxRQUFNckIsUUFBUSxHQUFHLE1BQU1KLFFBQVEsQ0FDN0JLLGtGQUFXLENBQUMsd0JBQUQsRUFBMkIsTUFDcENDLDRDQUFLLENBQUNhLEdBQU4sMEJBQTRCTixFQUE1QixHQUFrQ1ksWUFBbEMsQ0FEUyxDQURrQixDQUEvQjtBQU1BLFNBQU9yQixRQUFQO0FBQ0QsQ0FWTTs7Ozs7Ozs7OzswQkF6RE1ELFk7MEJBV0FTLFc7MEJBV0FHLGM7MEJBV0FHLGM7MEJBYUFHLGM7MEJBV0FHLFkiLCJmaWxlIjoianMvMzQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHJlZHV4Rm9ybSB9IGZyb20gJ3JlZHV4LWZvcm0nXG5pbXBvcnQgeyAgUGFnZUhlYWRlciwgRHluYW1pY0xpc3QsIENvbGxhcHNpYmxlQ2FyZCB9IGZyb20gJ2NvbXBvbmVudHMnXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0MidcbmltcG9ydCB7IFxuICAgIGNyZWF0ZVBtc19saXN0IGFzIGNyZWF0ZVBtc19saXN0QWN0aW9uLFxuXG59IGZyb20gJ3N0b3JlL2FjdGlvbi1jcmVhdG9ycy9wbXNfbGlzdHMnXG5pbXBvcnQgeyBjdXJyZW50VXNlclNlbGVjdG9yIH0gZnJvbSAnc3RvcmUvc2VsZWN0b3JzL3Nlc3Npb24nXG5pbXBvcnQgeyBMaW5rLCBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XG4gIHRvYXN0OiB0cnVlLFxuICBwb3NpdGlvbjogJ3RvcC1lbmQnLFxuICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXG4gIHRpbWVyOiAzMDAwXG59KVxuXG5jb25zdCBBbGVydCA9ICh0eXBlLCB0aXRsZSkgPT4gVG9hc3QuZmlyZSh7XG4gIHR5cGU6IHR5cGUsXG4gIHRpdGxlOiB0aXRsZVxufSlcblxuY29uc3QgdXNlRm9ybSA9ICh7IGluaXRpYWxWYWx1ZXMsIG9uU3VibWl0LCB2YWxpZGF0ZSB9KSA9PiB7XG4gIGNvbnN0IGluaXRpYWxpemVWYWx1ZXMgPSAob2JqKSA9PiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaiwgKGssIHYpID0+ICh2ID09PSBudWxsID8gJycgOiB2KSkpXG4gIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSBSZWFjdC51c2VTdGF0ZShpbml0aWFsaXplVmFsdWVzKGluaXRpYWxWYWx1ZXMpIHx8IHt9KVxuICBjb25zdCBbdG91Y2hlZFZhbHVlcywgc2V0VG91Y2hlZFZhbHVlc10gPSBSZWFjdC51c2VTdGF0ZSh7fSlcbiAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IFJlYWN0LnVzZVN0YXRlKHt9KVxuXG4gIGZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdHJpcFN0cmluZyhzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoJ18nLCAnICcpXG4gIH1cbiAgXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXRcbiAgICBjb25zdCB2YWx1ZSA9IHRhcmdldC50eXBlID09PSBcImNoZWNrYm94XCIgPyB0YXJnZXQuY2hlY2tlZCA6IHRhcmdldC52YWx1ZVxuICAgIGNvbnNvbGUubG9nKHZhbHVlKVxuICAgIGlmICggdGFyZ2V0LnR5cGUgPT09IFwiY2hlY2tib3hcIiApIHtcbiAgICAgIGlmKCB0YXJnZXQudmFsdWUgPT09IDAgKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gZmFsc2VcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gIHRydWVcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdmFsdWUgPSB0YXJnZXQudmFsdWVcbiAgICB9XG4gICAgY29uc3QgbmFtZSA9IHRhcmdldC5uYW1lXG4gICAgc2V0VmFsdWVzKHtcbiAgICAgIC4uLnZhbHVlcyxcbiAgICAgIFtuYW1lXTogdmFsdWVcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQmx1ciA9IGV2ZW50ID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXRcbiAgICBjb25zdCBuYW1lID0gdGFyZ2V0Lm5hbWVcbiAgICBzZXRUb3VjaGVkVmFsdWVzKHtcbiAgICAgIC4uLnRvdWNoZWRWYWx1ZXMsXG4gICAgICBbbmFtZV06IHRydWVcbiAgICB9KVxuICAgIGNvbnN0IGUgPSB2YWxpZGF0ZSh2YWx1ZXMpXG4gICAgc2V0RXJyb3JzKHtcbiAgICAgIC4uLmVycm9ycyxcbiAgICAgIC4uLmVcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gZXZlbnQgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCBlID0gdmFsaWRhdGUodmFsdWVzKVxuICAgIHNldEVycm9ycyh7XG4gICAgICAuLi5lcnJvcnMsXG4gICAgICAuLi5lXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZygncHJldmVudGl2ZXM6JywgdmFsdWVzKTtcbiAgICBvblN1Ym1pdCh7IC4uLnZhbHVlcywgZSB9KVxuICB9XG5cbiAgY29uc3QgaGFuZGxlRHluYW1pY0xpc3QgPSAoZmllbGRzLCB0eXBlKSA9PiB7XG4gICAgY29uc3QgbmFtZSA9IHR5cGVcbiAgICBzZXRWYWx1ZXMoe1xuICAgICAgLi4udmFsdWVzLFxuICAgICAgW25hbWVdOiBmaWVsZHNcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKHZhbHVlcylcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdmFsdWVzLFxuICAgIHRvdWNoZWRWYWx1ZXMsXG4gICAgZXJyb3JzLFxuICAgIGhhbmRsZUNoYW5nZSxcbiAgICBoYW5kbGVTdWJtaXQsXG4gICAgaGFuZGxlQmx1cixcbiAgICBoYW5kbGVEeW5hbWljTGlzdFxuICB9XG59XG5cbmZ1bmN0aW9uIENyZWF0ZVBtc0xpc3RDb21wb25lbnQoeyBvblN1Ym1pdCwgdXNlciB9KSB7XG4gIGNvbnN0IHsgdXNlcl90eXBlIH0gPSB1c2VyXG5cbiAgY29uc3QgaW5pdGlhbFZhbHVlcyA9IFtdXG4gIFxuICBjb25zdCB7IFxuICAgIHZhbHVlcywgXG4gICAgdG91Y2hlZFZhbHVlcywgXG4gICAgZXJyb3JzLCBcbiAgICBoYW5kbGVDaGFuZ2UsIFxuICAgIGhhbmRsZVN1Ym1pdCwgXG4gICAgaGFuZGxlQmx1ciwgXG4gICAgaGFuZGxlRHluYW1pY0xpc3RcbiB9ID0gdXNlRm9ybSh7XG4gICAgaW5pdGlhbFZhbHVlcyxcbiAgICBvblN1Ym1pdCxcbiAgICB2YWxpZGF0ZSh2YWx1ZXMpIHtcbiAgICAgIGNvbnN0IGVycm9ycyA9IHt9XG5cbiAgICAgIHJldHVybiBlcnJvcnNcbiAgICB9XG4gIH0pXG5cbiAgY29uc29sZS5sb2codmFsdWVzKVxuXG4gIGlmICh1c2VyX3R5cGUgPT0gJ3ZlbmRvcicgfHwgdXNlcl90eXBlID09ICdmbGVldCcpIHtcbiAgICByZXR1cm4gPFJlZGlyZWN0IGZyb209Jy9hY2NvdW50JyB0bz1cIi9hY2NvdW50L292ZXJ2aWV3XCIgLz5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0xMCBweS01XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgPFBhZ2VIZWFkZXIgdGl0bGU9XCJEZXRhaWxzXCIgc3ViVGl0bGU9XCJQbXNfbGlzdFwiID5cbiAgICAgICAgICAgIDxMaW5rIHRvPXtgL2FjY291bnQvcG1zLWxpc3RzL2B9IGNsYXNzTmFtZT1cIm1sLTIgYmctZ3JheS0zMDAgaG92ZXI6YmctZ3JheS01MDAgdGV4dC1ncmF5LTcwMCBzaGFkb3cgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyB0ZXh0LXhzIG1yLTVcIj5hcnJvd19iYWNrPC9pPlxuICAgICAgICAgICAgICA8c3Bhbj5HbyBCYWNrPC9zcGFuPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvUGFnZUhlYWRlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1iLTVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIHNoYWRvdy1sZyBiZy13aGl0ZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01XCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1pbGVhZ2VcIj5NaWxlYWdlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJtaWxlYWdlXCIgdmFsdWU9e3ZhbHVlcy5taWxlYWdlID8gdmFsdWVzLm1pbGVhZ2UgOiAnJ30gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBwLTIgcm91bmRlZCBteS0zIGJsb2NrIHctZnVsbFwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1iLTVcIj5cbiAgICAgICAgICAgIDxDb2xsYXBzaWJsZUNhcmQgdGl0bGU9XCJDaGVjayBJdGVtc1wiPlxuICAgICAgICAgICAgICA8RHluYW1pY0xpc3QgdHlwZT1cImNoZWNrX2l0ZW1zXCIgdmFsdWU9e3ZhbHVlcy5jaGVja19pdGVtcyA/IHZhbHVlcy5jaGVja19pdGVtcyA6IFtdfSAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVEeW5hbWljTGlzdH0gLz5cbiAgICAgICAgICAgIDwvQ29sbGFwc2libGVDYXJkPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1iLTVcIj5cbiAgICAgICAgICAgIDxDb2xsYXBzaWJsZUNhcmQgdGl0bGU9XCJDbGVhbiBJdGVtc1wiPlxuICAgICAgICAgICAgICA8RHluYW1pY0xpc3QgdHlwZT1cImNsZWFuX2l0ZW1zXCIgdmFsdWU9e3ZhbHVlcy5jbGVhbl9pdGVtcyA/IHZhbHVlcy5jbGVhbl9pdGVtcyA6IFtdfSAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVEeW5hbWljTGlzdH0gLz5cbiAgICAgICAgICAgIDwvQ29sbGFwc2libGVDYXJkPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1iLTVcIj5cbiAgICAgICAgICAgICAgPENvbGxhcHNpYmxlQ2FyZCB0aXRsZT1cIkNoYW5nZSBJdGVtc1wiPlxuICAgICAgICAgICAgICAgIDxEeW5hbWljTGlzdCB0eXBlPVwiY2hhbmdlX2l0ZW1zXCIgdmFsdWU9e3ZhbHVlcy5jaGFuZ2VfaXRlbXMgPyB2YWx1ZXMuY2hhbmdlX2l0ZW1zIDogW119ICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUR5bmFtaWNMaXN0fSAvPlxuICAgICAgICAgICAgICA8L0NvbGxhcHNpYmxlQ2FyZD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9GcmFnbWVudD5cbiAgKVxufVxuXG5jb25zdCB2YWxpZGF0ZUZpZWxkcyA9IHZhbHVlcyA9PiB7XG4gIGxldCBlcnJvcnMgPSB7fVxuXG4gIHJldHVybiBlcnJvcnNcbn1cblxuY29uc3QgQ3JlYXRlUG1zTGlzdCA9IHJlZHV4Rm9ybSh7XG4gIGZvcm06ICd1cGRhdGVTZXJ2aWNlJyxcbiAgZW5hYmxlUmVpbml0aWFsaXplOiB0cnVlLFxuICB2YWxpZGF0ZTogdmFsaWRhdGVGaWVsZHNcbn0pKENyZWF0ZVBtc0xpc3RDb21wb25lbnQpXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gICAgKHN0YXRlKSA9PiB7XG5cbiAgICAgICAgcmV0dXJuKHtcbiAgICAgICAgICAgIHVzZXI6IGN1cnJlbnRVc2VyU2VsZWN0b3Ioc3RhdGUpXG4gICAgICAgICAgfVxuICAgICAgICApfSxcbiAgZGlzcGF0Y2ggPT4gKHtcbiAgICBvblN1Ym1pdDogdmFsdWVzID0+IHtcbiAgICAgIGRpc3BhdGNoKGNyZWF0ZVBtc19saXN0QWN0aW9uKHZhbHVlcykpXG4gICAgICBBbGVydE1lKCdzdWNjZXNzJywgJ1BNUyBzdWNjZXNzZnVsbHkgdXBkYXRlZCEnKVxuICAgIH1cbiAgfSlcbikoQ3JlYXRlUG1zTGlzdENvbXBvbmVudCkiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyBwbXNfbGlzdEFjdGlvbnMgYXMgYWN0aW9ucyB9IGZyb20gJ3N0b3JlL2FjdGlvbnMnXG5pbXBvcnQgeyBtYWtlUmVxdWVzdCB9IGZyb20gJ3N0b3JlL2FjdGlvbi1jcmVhdG9ycy9yZXF1ZXN0cydcblxuZXhwb3J0IGNvbnN0IGdldFBtc19saXN0cyA9ICgpID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkaXNwYXRjaChcbiAgICBtYWtlUmVxdWVzdCgnZ2V0LXBtc19saXN0cycsICgpID0+IGF4aW9zLmdldChgL2FwaS9wbXMtbGlzdHNgKSlcbiAgKVxuXG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBhY3Rpb25zLkFERF9QTVNfTElTVFMsXG4gICAgcG1zX2xpc3RzOiByZXNwb25zZS5kYXRhLmRhdGFcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGdldFBtc19saXN0ID0gaWQgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRpc3BhdGNoKFxuICAgIG1ha2VSZXF1ZXN0KGBnZXQtcG1zX2xpc3QtJHtpZH1gLCAoKSA9PiBheGlvcy5nZXQoYC9hcGkvcG1zLWxpc3RzLyR7aWR9YCkpXG4gIClcblxuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogYWN0aW9ucy5HRVRfUE1TX0xJU1QsXG4gICAgcG1zX2xpc3RzOiByZXNwb25zZS5kYXRhLmRhdGFcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVBtc19saXN0ID0gZGF0YSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZGlzcGF0Y2goXG4gICAgbWFrZVJlcXVlc3QoJ2NyZWF0ZS1wbXNfbGlzdCcsICgpID0+IGF4aW9zLnBvc3QoYC9hcGkvcG1zLWxpc3RzYCwgZGF0YSkpXG4gIClcblxuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogYWN0aW9ucy5BRERfUE1TX0xJU1QsXG4gICAgcG1zX2xpc3RzOiByZXNwb25zZS5kYXRhLmRhdGFcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVBtc19saXN0ID0gZGF0YSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZGlzcGF0Y2goXG4gICAgbWFrZVJlcXVlc3QoYHVwZGF0ZS1wbXNfbGlzdC0ke2RhdGEuaWR9YCwgKCkgPT5cbiAgICAgIGF4aW9zLnB1dChgL2FwaS9wbXMtbGlzdHMvJHtkYXRhLmlkfWAsIGRhdGEpXG4gICAgKVxuICApXG5cbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IGFjdGlvbnMuVVBEQVRFX1BNU19MSVNULFxuICAgIHBtc19saXN0czogcmVzcG9uc2UuZGF0YS5kYXRhXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVQbXNfbGlzdCA9IGlkID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgYXdhaXQgZGlzcGF0Y2goXG4gICAgbWFrZVJlcXVlc3QoYHVwZGF0ZS1wbXNfbGlzdC0ke2lkfWAsICgpID0+IGF4aW9zLmRlbGV0ZShgL2FwaS9wbXMtbGlzdHMvJHtpZH1gKSlcbiAgKVxuXG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBhY3Rpb25zLkRFTEVURV9QTVNfTElTVCxcbiAgICBpZFxuICB9KVxufVxuXG5leHBvcnQgY29uc3Qgc2F2ZVBtc19saXN0ID0gcG1zX2xpc3REYXRhID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgY29uc3QgeyBpZCB9ID0gcG1zX2xpc3REYXRhXG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkaXNwYXRjaChcbiAgICBtYWtlUmVxdWVzdCgnc2F2ZS1wbXNfbGlzdC1zZXR0aW5ncycsICgpID0+XG4gICAgICBheGlvcy5wdXQoYC9hcGkvcG1zLWxpc3RzLyR7aWR9YCwgcG1zX2xpc3REYXRhKVxuICAgIClcbiAgKVxuXG4gIHJldHVybiByZXNwb25zZVxufVxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=