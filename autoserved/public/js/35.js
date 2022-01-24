(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./resources/assets/js/pages/PreventiveServices/CreatePreventive.jsx":
/*!***************************************************************************!*\
  !*** ./resources/assets/js/pages/PreventiveServices/CreatePreventive.jsx ***!
  \***************************************************************************/
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
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components */ "./resources/assets/js/components/index.js");
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-number-format */ "./node_modules/react-number-format/dist/react-number-format.es.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var store_selectors_session__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! store/selectors/session */ "./resources/assets/js/store/selectors/session/index.js");
/* harmony import */ var store_action_creators_shop_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! store/action-creators/shop_services */ "./resources/assets/js/store/action-creators/shop_services/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");



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

function CreatePreventiveComponent({
  getShop_services,
  deleteShop_service,
  shop_services,
  user
}) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null);
}

const validateFields = values => {
  let errors = {};
  return errors;
};

const CreatePreventive = Object(redux_form__WEBPACK_IMPORTED_MODULE_7__["reduxForm"])({
  form: 'create-preventive',
  enableReinitialize: true,
  validate: validateFields
})(CreatePreventiveComponent);

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(state => {
  return {
    user: Object(store_selectors_session__WEBPACK_IMPORTED_MODULE_8__["currentUserSelector"])(state)
  };
}, dispatch => ({
  onSubmit: values => {
    dispatch(Object(store_action_creators_shop_services__WEBPACK_IMPORTED_MODULE_9__["updateShop_service"])(values));
    AlertMe('success', 'PMS successfully updated!');
  }
}))(CreatePreventive);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Toast, "Toast", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/PreventiveServices/CreatePreventive.jsx");
  reactHotLoader.register(Alert, "Alert", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/PreventiveServices/CreatePreventive.jsx");
  reactHotLoader.register(useForm, "useForm", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/PreventiveServices/CreatePreventive.jsx");
  reactHotLoader.register(CreatePreventiveComponent, "CreatePreventiveComponent", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/PreventiveServices/CreatePreventive.jsx");
  reactHotLoader.register(validateFields, "validateFields", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/PreventiveServices/CreatePreventive.jsx");
  reactHotLoader.register(CreatePreventive, "CreatePreventive", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/PreventiveServices/CreatePreventive.jsx");
  reactHotLoader.register(_default, "default", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/PreventiveServices/CreatePreventive.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/store/action-creators/shop_services/index.js":
/*!**************************************************************************!*\
  !*** ./resources/assets/js/store/action-creators/shop_services/index.js ***!
  \**************************************************************************/
/*! exports provided: saveShop_service, getShop_services, createShop_service, getShop_service, updateShop_service, deleteShop_service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shop_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shop_services */ "./resources/assets/js/store/action-creators/shop_services/shop_services.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveShop_service", function() { return _shop_services__WEBPACK_IMPORTED_MODULE_0__["saveShop_service"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getShop_services", function() { return _shop_services__WEBPACK_IMPORTED_MODULE_0__["getShop_services"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createShop_service", function() { return _shop_services__WEBPACK_IMPORTED_MODULE_0__["createShop_service"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getShop_service", function() { return _shop_services__WEBPACK_IMPORTED_MODULE_0__["getShop_service"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateShop_service", function() { return _shop_services__WEBPACK_IMPORTED_MODULE_0__["updateShop_service"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteShop_service", function() { return _shop_services__WEBPACK_IMPORTED_MODULE_0__["deleteShop_service"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



/***/ }),

/***/ "./resources/assets/js/store/action-creators/shop_services/shop_services.js":
/*!**********************************************************************************!*\
  !*** ./resources/assets/js/store/action-creators/shop_services/shop_services.js ***!
  \**********************************************************************************/
/*! exports provided: getShop_services, getShop_service, createShop_service, updateShop_service, deleteShop_service, saveShop_service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShop_services", function() { return getShop_services; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShop_service", function() { return getShop_service; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createShop_service", function() { return createShop_service; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateShop_service", function() { return updateShop_service; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteShop_service", function() { return deleteShop_service; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveShop_service", function() { return saveShop_service; });
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




const getShop_services = () => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])('get-shop_services', () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/shop/services")));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["shop_serviceActions"].ADD_SHOP_SERVICES,
    shop_services: response.data.data
  });
};
const getShop_service = id => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])("get-shop_service-".concat(id), () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/shop/services/".concat(id))));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["shop_serviceActions"].GET_SHOP_SERVICE,
    shop_services: response.data.data
  });
};
const createShop_service = data => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])('create-shop_service', () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/shop/services", data)));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["shop_serviceActions"].ADD_SHOP_SERVICE,
    shop_services: response.data.data
  });
};
const updateShop_service = data => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])("update-shop_service-".concat(data.id), () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/shop/services/".concat(data.id), data)));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["shop_serviceActions"].UPDATE_SHOP_SERVICE,
    shop_services: response.data.data
  });
};
const deleteShop_service = id => async dispatch => {
  await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])("update-shop_service-".concat(id), () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("/api/shop/services/".concat(id))));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["shop_serviceActions"].DELETE_SHOP_SERVICE,
    id
  });
};
const saveShop_service = shop_serviceData => async dispatch => {
  const {
    id
  } = shop_serviceData;
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])('save-shop_service-settings', () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/shop/services/".concat(id), shop_serviceData)));
  return response;
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getShop_services, "getShop_services", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/shop_services/shop_services.js");
  reactHotLoader.register(getShop_service, "getShop_service", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/shop_services/shop_services.js");
  reactHotLoader.register(createShop_service, "createShop_service", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/shop_services/shop_services.js");
  reactHotLoader.register(updateShop_service, "updateShop_service", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/shop_services/shop_services.js");
  reactHotLoader.register(deleteShop_service, "deleteShop_service", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/shop_services/shop_services.js");
  reactHotLoader.register(saveShop_service, "saveShop_service", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/shop_services/shop_services.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL1ByZXZlbnRpdmVTZXJ2aWNlcy9DcmVhdGVQcmV2ZW50aXZlLmpzeCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL2FjdGlvbi1jcmVhdG9ycy9zaG9wX3NlcnZpY2VzL3Nob3Bfc2VydmljZXMuanMiXSwibmFtZXMiOlsiVG9hc3QiLCJTd2FsIiwibWl4aW4iLCJ0b2FzdCIsInBvc2l0aW9uIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsIkFsZXJ0IiwidHlwZSIsInRpdGxlIiwiZmlyZSIsInVzZUZvcm0iLCJpbml0aWFsVmFsdWVzIiwib25TdWJtaXQiLCJ2YWxpZGF0ZSIsImluaXRpYWxpemVWYWx1ZXMiLCJvYmoiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJrIiwidiIsInZhbHVlcyIsInNldFZhbHVlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJ0b3VjaGVkVmFsdWVzIiwic2V0VG91Y2hlZFZhbHVlcyIsImVycm9ycyIsInNldEVycm9ycyIsImNhcGl0YWxpemVGaXJzdExldHRlciIsInN0cmluZyIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJzdHJpcFN0cmluZyIsInJlcGxhY2UiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiY2hlY2tlZCIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwiaGFuZGxlQmx1ciIsImUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUR5bmFtaWNMaXN0IiwiZmllbGRzIiwiQ3JlYXRlUHJldmVudGl2ZUNvbXBvbmVudCIsImdldFNob3Bfc2VydmljZXMiLCJkZWxldGVTaG9wX3NlcnZpY2UiLCJzaG9wX3NlcnZpY2VzIiwidXNlciIsInZhbGlkYXRlRmllbGRzIiwiQ3JlYXRlUHJldmVudGl2ZSIsInJlZHV4Rm9ybSIsImZvcm0iLCJlbmFibGVSZWluaXRpYWxpemUiLCJjb25uZWN0Iiwic3RhdGUiLCJjdXJyZW50VXNlclNlbGVjdG9yIiwiZGlzcGF0Y2giLCJ1cGRhdGVTaG9wX3NlcnZpY2VBY3Rpb24iLCJBbGVydE1lIiwicmVzcG9uc2UiLCJtYWtlUmVxdWVzdCIsImF4aW9zIiwiZ2V0IiwiYWN0aW9ucyIsIkFERF9TSE9QX1NFUlZJQ0VTIiwiZGF0YSIsImdldFNob3Bfc2VydmljZSIsImlkIiwiR0VUX1NIT1BfU0VSVklDRSIsImNyZWF0ZVNob3Bfc2VydmljZSIsInBvc3QiLCJBRERfU0hPUF9TRVJWSUNFIiwidXBkYXRlU2hvcF9zZXJ2aWNlIiwicHV0IiwiVVBEQVRFX1NIT1BfU0VSVklDRSIsImRlbGV0ZSIsIkRFTEVURV9TSE9QX1NFUlZJQ0UiLCJzYXZlU2hvcF9zZXJ2aWNlIiwic2hvcF9zZXJ2aWNlRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFFQSxNQUFNQSxLQUFLLEdBQUdDLGtEQUFJLENBQUNDLEtBQUwsQ0FBVztBQUN6QkMsT0FBSyxFQUFFLElBRGtCO0FBRXpCQyxVQUFRLEVBQUUsU0FGZTtBQUd6QkMsbUJBQWlCLEVBQUUsS0FITTtBQUl6QkMsT0FBSyxFQUFFO0FBSmtCLENBQVgsQ0FBZDs7QUFPQSxNQUFNQyxLQUFLLEdBQUcsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEtBQWlCVCxLQUFLLENBQUNVLElBQU4sQ0FBVztBQUMxQ0YsTUFBSSxFQUFFQSxJQURvQztBQUUxQ0MsT0FBSyxFQUFFQTtBQUZtQyxDQUFYLENBQS9COztBQUtBLE1BQU1FLE9BQU8sR0FBRyxDQUFDO0FBQUVDLGVBQUY7QUFBaUJDLFVBQWpCO0FBQTJCQztBQUEzQixDQUFELEtBQTJDO0FBQ3ZELFFBQU1DLGdCQUFnQixHQUFJQyxHQUFELElBQVNDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLFNB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UUFBUSxHQUFHLE1BQU1ILFFBQVEsQ0FDN0JJLGtGQUFXLCtCQUF3QkssSUFBSSxDQUFDRSxFQUE3QixHQUFtQyxNQUM1Q04sNENBQUssQ0FBQ1ksR0FBTiw4QkFBZ0NSLElBQUksQ0FBQ0UsRUFBckMsR0FBMkNGLElBQTNDLENBRFMsQ0FEa0IsQ0FBL0I7QUFNQVQsVUFBUSxDQUFDO0FBQ1B2RCxRQUFJLEVBQUU4RCxpRUFBTyxDQUFDVyxtQkFEUDtBQUVQNUIsaUJBQWEsRUFBRWEsUUFBUSxDQUFDTSxJQUFULENBQWNBO0FBRnRCLEdBQUQsQ0FBUjtBQUlELENBWE07QUFhQSxNQUFNcEIsa0JBQWtCLEdBQUdzQixFQUFFLElBQUksTUFBTVgsUUFBTixJQUFrQjtBQUN4RCxRQUFNQSxRQUFRLENBQ1pJLGtGQUFXLCtCQUF3Qk8sRUFBeEIsR0FBOEIsTUFBTU4sNENBQUssQ0FBQ2MsTUFBTiw4QkFBbUNSLEVBQW5DLEVBQXBDLENBREMsQ0FBZDtBQUlBWCxVQUFRLENBQUM7QUFDUHZELFFBQUksRUFBRThELGlFQUFPLENBQUNhLG1CQURQO0FBRVBUO0FBRk8sR0FBRCxDQUFSO0FBSUQsQ0FUTTtBQVdBLE1BQU1VLGdCQUFnQixHQUFHQyxnQkFBZ0IsSUFBSSxNQUFNdEIsUUFBTixJQUFrQjtBQUNwRSxRQUFNO0FBQUVXO0FBQUYsTUFBU1csZ0JBQWY7QUFFQSxRQUFNbkIsUUFBUSxHQUFHLE1BQU1ILFFBQVEsQ0FDN0JJLGtGQUFXLENBQUMsNEJBQUQsRUFBK0IsTUFDeENDLDRDQUFLLENBQUNZLEdBQU4sOEJBQWdDTixFQUFoQyxHQUFzQ1csZ0JBQXRDLENBRFMsQ0FEa0IsQ0FBL0I7QUFNQSxTQUFPbkIsUUFBUDtBQUNELENBVk07Ozs7Ozs7Ozs7MEJBekRNZixnQjswQkFXQXNCLGU7MEJBV0FHLGtCOzBCQVdBRyxrQjswQkFhQTNCLGtCOzBCQVdBZ0MsZ0IiLCJmaWxlIjoianMvMzUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFBhZ2VIZWFkZXIgfSBmcm9tICdjb21wb25lbnRzJ1xuaW1wb3J0IE51bWJlckZvcm1hdCBmcm9tICdyZWFjdC1udW1iZXItZm9ybWF0J1xuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXG5pbXBvcnQgeyByZWR1eEZvcm0gfSBmcm9tICdyZWR1eC1mb3JtJ1xuaW1wb3J0IHsgY3VycmVudFVzZXJTZWxlY3RvciB9IGZyb20gJ3N0b3JlL3NlbGVjdG9ycy9zZXNzaW9uJ1xuaW1wb3J0IHtcbmdldFNob3Bfc2VydmljZXMgYXMgZ2V0U2hvcF9zZXJ2aWNlc0FjdGlvbixcbnVwZGF0ZVNob3Bfc2VydmljZSBhcyB1cGRhdGVTaG9wX3NlcnZpY2VBY3Rpb24sXG5jcmVhdGVTaG9wX3NlcnZpY2UgYXMgY3JlYXRlU2hvcF9zZXJ2aWNlQWN0aW9uLFxuZGVsZXRlU2hvcF9zZXJ2aWNlIGFzIGRlbGV0ZVNob3Bfc2VydmljZUFjdGlvbixcbn0gZnJvbSAnc3RvcmUvYWN0aW9uLWNyZWF0b3JzL3Nob3Bfc2VydmljZXMnXG5pbXBvcnQgeyBMaW5rLCBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XG50b2FzdDogdHJ1ZSxcbnBvc2l0aW9uOiAndG9wLWVuZCcsXG5zaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXG50aW1lcjogMzAwMFxufSlcblxuY29uc3QgQWxlcnQgPSAodHlwZSwgdGl0bGUpID0+IFRvYXN0LmZpcmUoe1xudHlwZTogdHlwZSxcbnRpdGxlOiB0aXRsZVxufSlcblxuY29uc3QgdXNlRm9ybSA9ICh7IGluaXRpYWxWYWx1ZXMsIG9uU3VibWl0LCB2YWxpZGF0ZSB9KSA9PiB7XG4gICAgY29uc3QgaW5pdGlhbGl6ZVZhbHVlcyA9IChvYmopID0+IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqLCAoaywgdikgPT4gKHYgPT09IG51bGwgPyAnJyA6IHYpKSlcbiAgICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gUmVhY3QudXNlU3RhdGUoaW5pdGlhbGl6ZVZhbHVlcyhpbml0aWFsVmFsdWVzKSB8fCB7fSlcbiAgICBjb25zdCBbdG91Y2hlZFZhbHVlcywgc2V0VG91Y2hlZFZhbHVlc10gPSBSZWFjdC51c2VTdGF0ZSh7fSlcbiAgICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gUmVhY3QudXNlU3RhdGUoe30pXG4gIFxuICAgIGZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHJpbmcpIHtcbiAgICAgIHJldHVybiBzdHJpbmdbMF0udG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbiAgICB9XG4gIFxuICAgIGZ1bmN0aW9uIHN0cmlwU3RyaW5nKHN0cmluZykge1xuICAgICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKCdfJywgJyAnKVxuICAgIH1cbiAgICBcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXRcbiAgICAgIGNvbnN0IHZhbHVlID0gdGFyZ2V0LnR5cGUgPT09IFwiY2hlY2tib3hcIiA/IHRhcmdldC5jaGVja2VkIDogdGFyZ2V0LnZhbHVlXG4gICAgICBjb25zb2xlLmxvZyh2YWx1ZSlcbiAgICAgIGlmICggdGFyZ2V0LnR5cGUgPT09IFwiY2hlY2tib3hcIiApIHtcbiAgICAgICAgaWYoIHRhcmdldC52YWx1ZSA9PT0gMCApIHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IGZhbHNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSAgdHJ1ZVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgICAgY29uc3QgbmFtZSA9IHRhcmdldC5uYW1lXG4gICAgICBzZXRWYWx1ZXMoe1xuICAgICAgICAuLi52YWx1ZXMsXG4gICAgICAgIFtuYW1lXTogdmFsdWVcbiAgICAgIH0pXG4gICAgfVxuICBcbiAgICBjb25zdCBoYW5kbGVCbHVyID0gZXZlbnQgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0XG4gICAgICBjb25zdCBuYW1lID0gdGFyZ2V0Lm5hbWVcbiAgICAgIHNldFRvdWNoZWRWYWx1ZXMoe1xuICAgICAgICAuLi50b3VjaGVkVmFsdWVzLFxuICAgICAgICBbbmFtZV06IHRydWVcbiAgICAgIH0pXG4gICAgICBjb25zdCBlID0gdmFsaWRhdGUodmFsdWVzKVxuICAgICAgc2V0RXJyb3JzKHtcbiAgICAgICAgLi4uZXJyb3JzLFxuICAgICAgICAuLi5lXG4gICAgICB9KVxuICAgIH1cbiAgXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gZXZlbnQgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgY29uc3QgZSA9IHZhbGlkYXRlKHZhbHVlcylcbiAgICAgIHNldEVycm9ycyh7XG4gICAgICAgIC4uLmVycm9ycyxcbiAgICAgICAgLi4uZVxuICAgICAgfSlcbiAgICAgIGNvbnNvbGUubG9nKCdwcmV2ZW50aXZlczonLCB2YWx1ZXMpO1xuICAgICAgb25TdWJtaXQoeyAuLi52YWx1ZXMsIGUgfSlcbiAgICB9XG4gIFxuICAgIGNvbnN0IGhhbmRsZUR5bmFtaWNMaXN0ID0gKGZpZWxkcywgdHlwZSkgPT4ge1xuICAgICAgY29uc3QgbmFtZSA9IHR5cGVcbiAgICAgIHNldFZhbHVlcyh7XG4gICAgICAgIC4uLnZhbHVlcyxcbiAgICAgICAgW25hbWVdOiBmaWVsZHNcbiAgICAgIH0pXG4gICAgICBjb25zb2xlLmxvZyh2YWx1ZXMpXG4gICAgfVxuICBcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWVzLFxuICAgICAgdG91Y2hlZFZhbHVlcyxcbiAgICAgIGVycm9ycyxcbiAgICAgIGhhbmRsZUNoYW5nZSxcbiAgICAgIGhhbmRsZVN1Ym1pdCxcbiAgICAgIGhhbmRsZUJsdXIsXG4gICAgICBoYW5kbGVEeW5hbWljTGlzdFxuICAgIH1cbiAgfVxuXG5mdW5jdGlvbiBDcmVhdGVQcmV2ZW50aXZlQ29tcG9uZW50KHsgZ2V0U2hvcF9zZXJ2aWNlcywgZGVsZXRlU2hvcF9zZXJ2aWNlLCBzaG9wX3NlcnZpY2VzLCB1c2VyIH0pIHtcblxuICAgIHJldHVybihcbiAgICAgICAgPD5cblxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmNvbnN0IHZhbGlkYXRlRmllbGRzID0gdmFsdWVzID0+IHtcbiAgICBsZXQgZXJyb3JzID0ge31cbiAgXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG4gIFxuICBjb25zdCBDcmVhdGVQcmV2ZW50aXZlID0gcmVkdXhGb3JtKHtcbiAgICBmb3JtOiAnY3JlYXRlLXByZXZlbnRpdmUnLFxuICAgIGVuYWJsZVJlaW5pdGlhbGl6ZTogdHJ1ZSxcbiAgICB2YWxpZGF0ZTogdmFsaWRhdGVGaWVsZHNcbiAgfSkoQ3JlYXRlUHJldmVudGl2ZUNvbXBvbmVudClcbiAgXG4gIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gICAgKHN0YXRlKSA9PiB7XG4gICAgICByZXR1cm4oe1xuICAgICAgICAgIHVzZXI6IGN1cnJlbnRVc2VyU2VsZWN0b3Ioc3RhdGUpXG4gICAgICAgIH1cbiAgICAgICl9LFxuICAgIGRpc3BhdGNoID0+ICh7XG4gICAgICBvblN1Ym1pdDogdmFsdWVzID0+IHtcbiAgICAgICAgZGlzcGF0Y2godXBkYXRlU2hvcF9zZXJ2aWNlQWN0aW9uKHZhbHVlcykpXG4gICAgICAgIEFsZXJ0TWUoJ3N1Y2Nlc3MnLCAnUE1TIHN1Y2Nlc3NmdWxseSB1cGRhdGVkIScpXG4gICAgICB9XG4gICAgfSlcbiAgKShDcmVhdGVQcmV2ZW50aXZlKSIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IHNob3Bfc2VydmljZUFjdGlvbnMgYXMgYWN0aW9ucyB9IGZyb20gJ3N0b3JlL2FjdGlvbnMnXG5pbXBvcnQgeyBtYWtlUmVxdWVzdCB9IGZyb20gJ3N0b3JlL2FjdGlvbi1jcmVhdG9ycy9yZXF1ZXN0cydcblxuZXhwb3J0IGNvbnN0IGdldFNob3Bfc2VydmljZXMgPSAoKSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZGlzcGF0Y2goXG4gICAgbWFrZVJlcXVlc3QoJ2dldC1zaG9wX3NlcnZpY2VzJywgKCkgPT4gYXhpb3MuZ2V0KGAvYXBpL3Nob3Avc2VydmljZXNgKSlcbiAgKVxuXG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBhY3Rpb25zLkFERF9TSE9QX1NFUlZJQ0VTLFxuICAgIHNob3Bfc2VydmljZXM6IHJlc3BvbnNlLmRhdGEuZGF0YVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U2hvcF9zZXJ2aWNlID0gaWQgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRpc3BhdGNoKFxuICAgIG1ha2VSZXF1ZXN0KGBnZXQtc2hvcF9zZXJ2aWNlLSR7aWR9YCwgKCkgPT4gYXhpb3MuZ2V0KGAvYXBpL3Nob3Avc2VydmljZXMvJHtpZH1gKSlcbiAgKVxuXG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBhY3Rpb25zLkdFVF9TSE9QX1NFUlZJQ0UsXG4gICAgc2hvcF9zZXJ2aWNlczogcmVzcG9uc2UuZGF0YS5kYXRhXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVTaG9wX3NlcnZpY2UgPSBkYXRhID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkaXNwYXRjaChcbiAgICBtYWtlUmVxdWVzdCgnY3JlYXRlLXNob3Bfc2VydmljZScsICgpID0+IGF4aW9zLnBvc3QoYC9hcGkvc2hvcC9zZXJ2aWNlc2AsIGRhdGEpKVxuICApXG5cbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IGFjdGlvbnMuQUREX1NIT1BfU0VSVklDRSxcbiAgICBzaG9wX3NlcnZpY2VzOiByZXNwb25zZS5kYXRhLmRhdGFcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVNob3Bfc2VydmljZSA9IGRhdGEgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRpc3BhdGNoKFxuICAgIG1ha2VSZXF1ZXN0KGB1cGRhdGUtc2hvcF9zZXJ2aWNlLSR7ZGF0YS5pZH1gLCAoKSA9PlxuICAgICAgYXhpb3MucHV0KGAvYXBpL3Nob3Avc2VydmljZXMvJHtkYXRhLmlkfWAsIGRhdGEpXG4gICAgKVxuICApXG5cbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IGFjdGlvbnMuVVBEQVRFX1NIT1BfU0VSVklDRSxcbiAgICBzaG9wX3NlcnZpY2VzOiByZXNwb25zZS5kYXRhLmRhdGFcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVNob3Bfc2VydmljZSA9IGlkID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgYXdhaXQgZGlzcGF0Y2goXG4gICAgbWFrZVJlcXVlc3QoYHVwZGF0ZS1zaG9wX3NlcnZpY2UtJHtpZH1gLCAoKSA9PiBheGlvcy5kZWxldGUoYC9hcGkvc2hvcC9zZXJ2aWNlcy8ke2lkfWApKVxuICApXG5cbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IGFjdGlvbnMuREVMRVRFX1NIT1BfU0VSVklDRSxcbiAgICBpZFxuICB9KVxufVxuXG5leHBvcnQgY29uc3Qgc2F2ZVNob3Bfc2VydmljZSA9IHNob3Bfc2VydmljZURhdGEgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICBjb25zdCB7IGlkIH0gPSBzaG9wX3NlcnZpY2VEYXRhXG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkaXNwYXRjaChcbiAgICBtYWtlUmVxdWVzdCgnc2F2ZS1zaG9wX3NlcnZpY2Utc2V0dGluZ3MnLCAoKSA9PlxuICAgICAgYXhpb3MucHV0KGAvYXBpL3Nob3Avc2VydmljZXMvJHtpZH1gLCBzaG9wX3NlcnZpY2VEYXRhKVxuICAgIClcbiAgKVxuXG4gIHJldHVybiByZXNwb25zZVxufVxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=