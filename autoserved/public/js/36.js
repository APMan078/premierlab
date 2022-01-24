(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

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

/***/ "./resources/assets/js/pages/PreventiveServices/UpdatePreventive.jsx":
/*!***************************************************************************!*\
  !*** ./resources/assets/js/pages/PreventiveServices/UpdatePreventive.jsx ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var store_selectors_session__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! store/selectors/session */ "./resources/assets/js/store/selectors/session/index.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components */ "./resources/assets/js/components/index.js");
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-number-format */ "./node_modules/react-number-format/dist/react-number-format.es.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var store_selectors_shop_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! store/selectors/shop_services */ "./resources/assets/js/store/selectors/shop_services.js");
/* harmony import */ var store_action_creators_shop_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! store/action-creators/shop_services */ "./resources/assets/js/store/action-creators/shop_services/index.js");
/* harmony import */ var store_selectors_pms_lists__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! store/selectors/pms_lists */ "./resources/assets/js/store/selectors/pms_lists.js");
/* harmony import */ var store_action_creators_pms_lists__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! store/action-creators/pms_lists */ "./resources/assets/js/store/action-creators/pms_lists/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");




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













const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.mixin({
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
  const [values, setValues] = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(initialValues || {});
  const [touchedValues, setTouchedValues] = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState({});
  const [errors, setErrors] = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState({});

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
      [name]: parseFloat(value)
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

  return {
    values,
    touchedValues,
    errors,
    handleChange,
    handleSubmit,
    handleBlur
  };
};

__signature__(useForm, "useState{[values, setValues](initialValues || {})}\nuseState{[touchedValues, setTouchedValues]({})}\nuseState{[errors, setErrors]({})}");

function UpdatePreventiveComponent({
  getShop_service,
  getPms_list,
  pms_lists,
  shop_services,
  user,
  match,
  onSubmit
}) {
  const initialValues = shop_services[0];

  if (!initialValues) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["Redirect"], {
      to: "/account/preventive-services"
    });
  }

  const {
    values,
    touchedValues,
    errors,
    handleChange,
    handleSubmit,
    handleBlur
  } = useForm({
    initialValues,
    onSubmit,

    validate(values) {
      const errors = {};
      return errors;
    }

  });
  const query = match.params.id;
  const pms = match.params.pms;

  const populateService = async () => {
    await getShop_service(query);
  };

  const populatePmsList = async () => {
    await getPms_list(pms);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    populateService(), populatePmsList();
  }, []);
  console.log(shop_services);
  console.log(pms_lists);
  const name = shop_services[0].name;
  const title = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_number_format__WEBPACK_IMPORTED_MODULE_8__["default"], {
    value: name,
    displayType: 'text',
    thousandSeparator: true,
    prefix: 'PMS ',
    suffix: ' km',
    renderText: value => react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, value)
  });
  const check = pms_lists[0].check_items;
  const clean = pms_lists[0].clean_items;
  const change = pms_lists[0].change_items;
  console.log(check);
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "bb-white px-10 py-5"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_7__["PageHeader"], {
    title: title,
    subTitle: "Preventive Services"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["Link"], {
    to: "/account/preventive-services/",
    className: "ml-2 bg-gray-300 hover:bg-gray-500 text-gray-700 shadow font-bold py-2 px-4 rounded inline-flex items-center"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
    className: "material-icons text-sm mr-3"
  }, "arrow_back"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, "Go Back")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["Link"], {
    to: "#",
    onClick: handleSubmit,
    className: "ml-2 bg-green-500 hover:bg-green-600 text-white shadow font-bold py-2 px-4 rounded inline-flex items-center"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
    className: "material-icons text-sm mr-3"
  }, "save_alt"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, "Save"))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("form", {
    className: "grid grid-cols-2 gap-4",
    onSubmit: handleSubmit
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "col-span-2 mb-5"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_7__["CollapsibleCard"], {
    title: "Labor"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_7__["LaborFields"], {
    value: values.labor,
    handleChange: handleChange
  }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "col-span-1 mb-5"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_7__["CollapsibleCard"], {
    title: "Regular Oil",
    collapse: "hidden"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_7__["OilFields"], {
    value: values.supplies.regular,
    handleChange: handleChange
  }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "col-span-1 mb-5"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_7__["CollapsibleCard"], {
    title: "Semi-Synthetic Oil",
    collapse: "hidden"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_7__["OilFields"], {
    value: values.supplies.semi,
    handleChange: handleChange
  }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "col-span-1 mb-5"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_7__["CollapsibleCard"], {
    title: "Fully Synthetic Oil",
    collapse: "hidden"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_7__["OilFields"], {
    value: values.supplies.full,
    handleChange: handleChange
  }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "col-span-1 mb-5"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_7__["CollapsibleCard"], {
    title: "Shop Recommendation",
    collapse: "hidden"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_7__["OilFields"], {
    value: values.supplies.recommed,
    handleChange: handleChange
  }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "col-span-2 mb-5"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_7__["CollapsibleCard"], {
    title: "Details"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "grid grid-cols-2 gap-4"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "col-span-1"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "text-xl mb-3"
  }, "Check Items"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("ul", {
    className: "list-disc ml-5"
  }, check.map((item, idx) => {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
      key: idx
    }, item);
  }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "col-span-1"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "text-xl mb-3"
  }, "Clean Items"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("ul", {
    className: "list-disc ml-5"
  }, clean.map((item, idx) => {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
      key: idx
    }, item);
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "text-xl my-3"
  }, "Change Items"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("ul", {
    className: "list-disc ml-5"
  }, change.map((item, idx) => {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
      key: idx
    }, item);
  })))))))));
}

__signature__(UpdatePreventiveComponent, "useForm{{ values, touchedValues, errors, handleChange, handleSubmit, handleBlur }}\nuseEffect{}", () => [useForm]);

const validateFields = values => {
  let errors = {};
  return errors;
};

const UpdatePreventive = Object(redux_form__WEBPACK_IMPORTED_MODULE_5__["reduxForm"])({
  form: 'update-preventive',
  enableReinitialize: true,
  validate: validateFields
})(UpdatePreventiveComponent);

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])((state, props) => {
  const query = props.match.params.id;
  const pms = props.match.params.pms;
  return {
    shop_services: Object(store_selectors_shop_services__WEBPACK_IMPORTED_MODULE_10__["selectShop_serviceDetails"])(state, query),
    pms_lists: Object(store_selectors_pms_lists__WEBPACK_IMPORTED_MODULE_12__["selectPms_listDetails"])(state, pms),
    user: Object(store_selectors_session__WEBPACK_IMPORTED_MODULE_6__["currentUserSelector"])(state)
  };
}, dispatch => ({
  getShop_service: id => dispatch(Object(store_action_creators_shop_services__WEBPACK_IMPORTED_MODULE_11__["getShop_service"])(id)),
  getPms_list: id => dispatch(Object(store_action_creators_pms_lists__WEBPACK_IMPORTED_MODULE_13__["getPms_list"])(id)),
  onSubmit: values => {
    dispatch(Object(store_action_creators_shop_services__WEBPACK_IMPORTED_MODULE_11__["updateShop_service"])(values));
    AlertMe('success', 'PMS successfully updated!');
  }
}))(UpdatePreventive);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Toast, "Toast", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/PreventiveServices/UpdatePreventive.jsx");
  reactHotLoader.register(Alert, "Alert", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/PreventiveServices/UpdatePreventive.jsx");
  reactHotLoader.register(useForm, "useForm", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/PreventiveServices/UpdatePreventive.jsx");
  reactHotLoader.register(UpdatePreventiveComponent, "UpdatePreventiveComponent", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/PreventiveServices/UpdatePreventive.jsx");
  reactHotLoader.register(validateFields, "validateFields", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/PreventiveServices/UpdatePreventive.jsx");
  reactHotLoader.register(UpdatePreventive, "UpdatePreventive", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/PreventiveServices/UpdatePreventive.jsx");
  reactHotLoader.register(_default, "default", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/PreventiveServices/UpdatePreventive.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5tYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL1ByZXZlbnRpdmVTZXJ2aWNlcy9VcGRhdGVQcmV2ZW50aXZlLmpzeCJdLCJuYW1lcyI6WyJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwiQWxlcnQiLCJ0eXBlIiwidGl0bGUiLCJmaXJlIiwidXNlRm9ybSIsImluaXRpYWxWYWx1ZXMiLCJvblN1Ym1pdCIsInZhbGlkYXRlIiwidmFsdWVzIiwic2V0VmFsdWVzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInRvdWNoZWRWYWx1ZXMiLCJzZXRUb3VjaGVkVmFsdWVzIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNoZWNrZWQiLCJjb25zb2xlIiwibG9nIiwibmFtZSIsInBhcnNlRmxvYXQiLCJoYW5kbGVCbHVyIiwiZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiVXBkYXRlUHJldmVudGl2ZUNvbXBvbmVudCIsImdldFNob3Bfc2VydmljZSIsImdldFBtc19saXN0IiwicG1zX2xpc3RzIiwic2hvcF9zZXJ2aWNlcyIsInVzZXIiLCJtYXRjaCIsInF1ZXJ5IiwicGFyYW1zIiwiaWQiLCJwbXMiLCJwb3B1bGF0ZVNlcnZpY2UiLCJwb3B1bGF0ZVBtc0xpc3QiLCJ1c2VFZmZlY3QiLCJjaGVjayIsImNoZWNrX2l0ZW1zIiwiY2xlYW4iLCJjbGVhbl9pdGVtcyIsImNoYW5nZSIsImNoYW5nZV9pdGVtcyIsImxhYm9yIiwic3VwcGxpZXMiLCJyZWd1bGFyIiwic2VtaSIsImZ1bGwiLCJyZWNvbW1lZCIsIm1hcCIsIml0ZW0iLCJpZHgiLCJ2YWxpZGF0ZUZpZWxkcyIsIlVwZGF0ZVByZXZlbnRpdmUiLCJyZWR1eEZvcm0iLCJmb3JtIiwiZW5hYmxlUmVpbml0aWFsaXplIiwiY29ubmVjdCIsInN0YXRlIiwicHJvcHMiLCJzZWxlY3RTaG9wX3NlcnZpY2VEZXRhaWxzIiwic2VsZWN0UG1zX2xpc3REZXRhaWxzIiwiY3VycmVudFVzZXJTZWxlY3RvciIsImRpc3BhdGNoIiwiZ2V0U2hvcF9zZXJ2aWNlQWN0aW9uIiwiZ2V0UG1zX2xpc3RBY3Rpb24iLCJ1cGRhdGVTaG9wX3NlcnZpY2VBY3Rpb24iLCJBbGVydE1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYixvQ0FBb0MsbUJBQU8sQ0FBQywrSEFBaUQ7QUFDN0YsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyxlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLDZCQUE2QixtQkFBTyxDQUFDLDJHQUF1QztBQUM1RSx5QkFBeUIsbUJBQU8sQ0FBQyxtR0FBbUM7QUFDcEUsaUJBQWlCLG1CQUFPLENBQUMsbUdBQW1DOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBR0E7QUFFQSxNQUFNQSxLQUFLLEdBQUdDLGtEQUFJLENBQUNDLEtBQUwsQ0FBVztBQUN6QkMsT0FBSyxFQUFFLElBRGtCO0FBRXpCQyxVQUFRLEVBQUUsU0FGZTtBQUd6QkMsbUJBQWlCLEVBQUUsS0FITTtBQUl6QkMsT0FBSyxFQUFFO0FBSmtCLENBQVgsQ0FBZDs7QUFPQSxN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QWEsRUFBRWlDLGdHQUF5QixDQUFDRixLQUFELEVBQVE1QixLQUFSLENBRHJDO0FBRUhKLGFBQVMsRUFBRW1DLHdGQUFxQixDQUFDSCxLQUFELEVBQVF6QixHQUFSLENBRjdCO0FBR0hMLFFBQUksRUFBRWtDLG1GQUFtQixDQUFDSixLQUFEO0FBSHRCLEdBQVA7QUFLRSxDQVRnQixFQVVwQkssUUFBUSxLQUFLO0FBQ1h2QyxpQkFBZSxFQUFFUSxFQUFFLElBQUkrQixRQUFRLENBQUNDLDRGQUFxQixDQUFDaEMsRUFBRCxDQUF0QixDQURwQjtBQUVYUCxhQUFXLEVBQUVPLEVBQUUsSUFBSStCLFFBQVEsQ0FBQ0Usb0ZBQWlCLENBQUNqQyxFQUFELENBQWxCLENBRmhCO0FBR1hoQyxVQUFRLEVBQUVFLE1BQU0sSUFBSTtBQUNsQjZELFlBQVEsQ0FBQ0csK0ZBQXdCLENBQUNoRSxNQUFELENBQXpCLENBQVI7QUFDQWlFLFdBQU8sQ0FBQyxTQUFELEVBQVksMkJBQVosQ0FBUDtBQUNEO0FBTlUsQ0FBTCxDQVZZLENBQVAsQ0FrQmJkLGdCQWxCYSxDOztBQUFBOzs7Ozs7Ozs7OzBCQTFNWGxFLEs7MEJBT0FPLEs7MEJBS0FJLE87MEJBNERHeUIseUI7MEJBc0hINkIsYzswQkFNRUMsZ0IiLCJmaWxlIjoianMvMzYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG52YXIgZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgYWR2YW5jZVN0cmluZ0luZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkdmFuY2Utc3RyaW5nLWluZGV4Jyk7XG52YXIgcmVnRXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xuXG4vLyBAQG1hdGNoIGxvZ2ljXG5maXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYygnbWF0Y2gnLCAxLCBmdW5jdGlvbiAoTUFUQ0gsIG5hdGl2ZU1hdGNoLCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgcmV0dXJuIFtcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5tYXRjaGAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5tYXRjaFxuICAgIGZ1bmN0aW9uIG1hdGNoKHJlZ2V4cCkge1xuICAgICAgdmFyIE8gPSByZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpO1xuICAgICAgdmFyIG1hdGNoZXIgPSByZWdleHAgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogcmVnZXhwW01BVENIXTtcbiAgICAgIHJldHVybiBtYXRjaGVyICE9PSB1bmRlZmluZWQgPyBtYXRjaGVyLmNhbGwocmVnZXhwLCBPKSA6IG5ldyBSZWdFeHAocmVnZXhwKVtNQVRDSF0oU3RyaW5nKE8pKTtcbiAgICB9LFxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAbWF0Y2hdYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAbWF0Y2hcbiAgICBmdW5jdGlvbiAocmVnZXhwKSB7XG4gICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKG5hdGl2ZU1hdGNoLCByZWdleHAsIHRoaXMpO1xuICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuXG4gICAgICB2YXIgcnggPSBhbk9iamVjdChyZWdleHApO1xuICAgICAgdmFyIFMgPSBTdHJpbmcodGhpcyk7XG5cbiAgICAgIGlmICghcnguZ2xvYmFsKSByZXR1cm4gcmVnRXhwRXhlYyhyeCwgUyk7XG5cbiAgICAgIHZhciBmdWxsVW5pY29kZSA9IHJ4LnVuaWNvZGU7XG4gICAgICByeC5sYXN0SW5kZXggPSAwO1xuICAgICAgdmFyIEEgPSBbXTtcbiAgICAgIHZhciBuID0gMDtcbiAgICAgIHZhciByZXN1bHQ7XG4gICAgICB3aGlsZSAoKHJlc3VsdCA9IHJlZ0V4cEV4ZWMocngsIFMpKSAhPT0gbnVsbCkge1xuICAgICAgICB2YXIgbWF0Y2hTdHIgPSBTdHJpbmcocmVzdWx0WzBdKTtcbiAgICAgICAgQVtuXSA9IG1hdGNoU3RyO1xuICAgICAgICBpZiAobWF0Y2hTdHIgPT09ICcnKSByeC5sYXN0SW5kZXggPSBhZHZhbmNlU3RyaW5nSW5kZXgoUywgdG9MZW5ndGgocngubGFzdEluZGV4KSwgZnVsbFVuaWNvZGUpO1xuICAgICAgICBuKys7XG4gICAgICB9XG4gICAgICByZXR1cm4gbiA9PT0gMCA/IG51bGwgOiBBO1xuICAgIH1cbiAgXTtcbn0pO1xuIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyByZWR1eEZvcm0gfSBmcm9tICdyZWR1eC1mb3JtJ1xuaW1wb3J0IHsgY3VycmVudFVzZXJTZWxlY3RvciB9IGZyb20gJ3N0b3JlL3NlbGVjdG9ycy9zZXNzaW9uJ1xuaW1wb3J0IHsgUGFnZUhlYWRlciwgQ29sbGFwc2libGVDYXJkLCBMYWJvckZpZWxkcywgT2lsRmllbGRzIH0gZnJvbSAnY29tcG9uZW50cydcbmltcG9ydCBOdW1iZXJGb3JtYXQgZnJvbSAncmVhY3QtbnVtYmVyLWZvcm1hdCdcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJ1xuaW1wb3J0IHsgc2VsZWN0U2hvcF9zZXJ2aWNlRGV0YWlscyB9IGZyb20gJ3N0b3JlL3NlbGVjdG9ycy9zaG9wX3NlcnZpY2VzJ1xuaW1wb3J0IHtcbiAgZ2V0U2hvcF9zZXJ2aWNlIGFzIGdldFNob3Bfc2VydmljZUFjdGlvbixcbiAgdXBkYXRlU2hvcF9zZXJ2aWNlIGFzIHVwZGF0ZVNob3Bfc2VydmljZUFjdGlvbixcbn0gZnJvbSAnc3RvcmUvYWN0aW9uLWNyZWF0b3JzL3Nob3Bfc2VydmljZXMnXG5pbXBvcnQgeyBzZWxlY3RQbXNfbGlzdERldGFpbHMgfSBmcm9tICdzdG9yZS9zZWxlY3RvcnMvcG1zX2xpc3RzJ1xuaW1wb3J0IHtcbiAgZ2V0UG1zX2xpc3QgYXMgZ2V0UG1zX2xpc3RBY3Rpb25cbn0gZnJvbSAnc3RvcmUvYWN0aW9uLWNyZWF0b3JzL3Btc19saXN0cydcbmltcG9ydCB7IExpbmssIFJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcbnRvYXN0OiB0cnVlLFxucG9zaXRpb246ICd0b3AtZW5kJyxcbnNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcbnRpbWVyOiAzMDAwXG59KVxuXG5jb25zdCBBbGVydCA9ICh0eXBlLCB0aXRsZSkgPT4gVG9hc3QuZmlyZSh7XG50eXBlOiB0eXBlLFxudGl0bGU6IHRpdGxlXG59KVxuXG5jb25zdCB1c2VGb3JtID0gKHsgaW5pdGlhbFZhbHVlcywgb25TdWJtaXQsIHZhbGlkYXRlIH0pID0+IHtcbiAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IFJlYWN0LnVzZVN0YXRlKGluaXRpYWxWYWx1ZXMgfHwge30pXG4gIGNvbnN0IFt0b3VjaGVkVmFsdWVzLCBzZXRUb3VjaGVkVmFsdWVzXSA9IFJlYWN0LnVzZVN0YXRlKHt9KVxuICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gUmVhY3QudXNlU3RhdGUoe30pXG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gZXZlbnQgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldFxuICAgIGNvbnN0IHZhbHVlID0gdGFyZ2V0LnR5cGUgPT09IFwiY2hlY2tib3hcIiA/IHRhcmdldC5jaGVja2VkIDogdGFyZ2V0LnZhbHVlXG4gICAgY29uc29sZS5sb2codmFsdWUpXG4gICAgaWYgKCB0YXJnZXQudHlwZSA9PT0gXCJjaGVja2JveFwiICkge1xuICAgICAgaWYoIHRhcmdldC52YWx1ZSA9PT0gMCApIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBmYWxzZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSAgdHJ1ZVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRhcmdldC52YWx1ZVxuICAgIH1cbiAgICBjb25zdCBuYW1lID0gdGFyZ2V0Lm5hbWVcbiAgICBzZXRWYWx1ZXMoe1xuICAgICAgLi4udmFsdWVzLFxuICAgICAgW25hbWVdOiBwYXJzZUZsb2F0KHZhbHVlKVxuICAgIH0pXG4gIH1cblxuICBjb25zdCBoYW5kbGVCbHVyID0gZXZlbnQgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldFxuICAgIGNvbnN0IG5hbWUgPSB0YXJnZXQubmFtZVxuICAgIHNldFRvdWNoZWRWYWx1ZXMoe1xuICAgICAgLi4udG91Y2hlZFZhbHVlcyxcbiAgICAgIFtuYW1lXTogdHJ1ZVxuICAgIH0pXG4gICAgY29uc3QgZSA9IHZhbGlkYXRlKHZhbHVlcylcbiAgICBzZXRFcnJvcnMoe1xuICAgICAgLi4uZXJyb3JzLFxuICAgICAgLi4uZVxuICAgIH0pXG4gIH1cblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBldmVudCA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IGUgPSB2YWxpZGF0ZSh2YWx1ZXMpXG4gICAgc2V0RXJyb3JzKHtcbiAgICAgIC4uLmVycm9ycyxcbiAgICAgIC4uLmVcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKCdwcmV2ZW50aXZlczonLCB2YWx1ZXMpO1xuICAgIG9uU3VibWl0KHsgLi4udmFsdWVzLCBlIH0pXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHZhbHVlcyxcbiAgICB0b3VjaGVkVmFsdWVzLFxuICAgIGVycm9ycyxcbiAgICBoYW5kbGVDaGFuZ2UsXG4gICAgaGFuZGxlU3VibWl0LFxuICAgIGhhbmRsZUJsdXJcbiAgfVxufVxuXG5mdW5jdGlvbiBVcGRhdGVQcmV2ZW50aXZlQ29tcG9uZW50KHsgZ2V0U2hvcF9zZXJ2aWNlLCBnZXRQbXNfbGlzdCwgcG1zX2xpc3RzLCBzaG9wX3NlcnZpY2VzLCB1c2VyLCBtYXRjaCwgb25TdWJtaXQgfSkge1xuICBjb25zdCBpbml0aWFsVmFsdWVzID0gc2hvcF9zZXJ2aWNlc1swXVxuXG4gIGlmICghaW5pdGlhbFZhbHVlcykge1xuICAgIHJldHVybiA8UmVkaXJlY3QgdG89XCIvYWNjb3VudC9wcmV2ZW50aXZlLXNlcnZpY2VzXCIgLz5cbiAgfVxuXG4gIGNvbnN0IHsgdmFsdWVzLCB0b3VjaGVkVmFsdWVzLCBlcnJvcnMsIGhhbmRsZUNoYW5nZSwgaGFuZGxlU3VibWl0LCBoYW5kbGVCbHVyIH0gPSB1c2VGb3JtKHtcbiAgICBpbml0aWFsVmFsdWVzLFxuICAgIG9uU3VibWl0LFxuICAgIHZhbGlkYXRlKHZhbHVlcykge1xuICAgICAgY29uc3QgZXJyb3JzID0ge31cblxuICAgICAgcmV0dXJuIGVycm9yc1xuICAgIH1cbiAgfSlcblxuICBjb25zdCBxdWVyeSA9IG1hdGNoLnBhcmFtcy5pZFxuICBjb25zdCBwbXMgPSBtYXRjaC5wYXJhbXMucG1zIFxuICBjb25zdCBwb3B1bGF0ZVNlcnZpY2UgPSBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgZ2V0U2hvcF9zZXJ2aWNlKHF1ZXJ5KVxuICB9XG4gIGNvbnN0IHBvcHVsYXRlUG1zTGlzdCA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBnZXRQbXNfbGlzdChwbXMpXG4gIH1cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBwb3B1bGF0ZVNlcnZpY2UoKSxcbiAgICBwb3B1bGF0ZVBtc0xpc3QoKVxuICB9LCBbXSkgIFxuXG4gIGNvbnNvbGUubG9nKHNob3Bfc2VydmljZXMpXG4gIGNvbnNvbGUubG9nKHBtc19saXN0cylcbiAgY29uc3QgbmFtZSA9IHNob3Bfc2VydmljZXNbMF0ubmFtZVxuICBjb25zdCB0aXRsZSA9IDxOdW1iZXJGb3JtYXQgdmFsdWU9e25hbWV9IGRpc3BsYXlUeXBlPXsndGV4dCd9IHRob3VzYW5kU2VwYXJhdG9yPXt0cnVlfSBwcmVmaXg9eydQTVMgJ30gc3VmZml4PXsnIGttJ30gcmVuZGVyVGV4dD17dmFsdWUgPT4gPD57dmFsdWV9PC8+fSAvPlxuICBjb25zdCBjaGVjayA9IHBtc19saXN0c1swXS5jaGVja19pdGVtc1xuICBjb25zdCBjbGVhbiA9IHBtc19saXN0c1swXS5jbGVhbl9pdGVtc1xuICBjb25zdCBjaGFuZ2UgPSBwbXNfbGlzdHNbMF0uY2hhbmdlX2l0ZW1zXG5cbiAgY29uc29sZS5sb2coY2hlY2spXG4gICAgcmV0dXJuKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYi13aGl0ZSBweC0xMCBweS01XCI+XG4gICAgICAgIDxQYWdlSGVhZGVyIHRpdGxlPXt0aXRsZX0gc3ViVGl0bGU9XCJQcmV2ZW50aXZlIFNlcnZpY2VzXCIgPlxuICAgICAgICAgICAgPExpbmsgdG89e2AvYWNjb3VudC9wcmV2ZW50aXZlLXNlcnZpY2VzL2B9IGNsYXNzTmFtZT1cIm1sLTIgYmctZ3JheS0zMDAgaG92ZXI6YmctZ3JheS01MDAgdGV4dC1ncmF5LTcwMCBzaGFkb3cgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyB0ZXh0LXNtIG1yLTNcIj5hcnJvd19iYWNrPC9pPlxuICAgICAgICAgICAgICA8c3Bhbj5HbyBCYWNrPC9zcGFuPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgdG89XCIjXCIgb25DbGljaz17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJtbC0yIGJnLWdyZWVuLTUwMCBob3ZlcjpiZy1ncmVlbi02MDAgdGV4dC13aGl0ZSBzaGFkb3cgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyB0ZXh0LXNtIG1yLTNcIj5zYXZlX2FsdDwvaT5cbiAgICAgICAgICAgICAgPHNwYW4+U2F2ZTwvc3Bhbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9QYWdlSGVhZGVyPlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC00XCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yIG1iLTVcIj5cbiAgICAgICAgICAgIDxDb2xsYXBzaWJsZUNhcmQgdGl0bGU9XCJMYWJvclwiPlxuICAgICAgICAgICAgICA8TGFib3JGaWVsZHMgdmFsdWU9e3ZhbHVlcy5sYWJvcn0gaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8L0NvbGxhcHNpYmxlQ2FyZD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgbWItNVwiPlxuICAgICAgICAgICAgPENvbGxhcHNpYmxlQ2FyZCB0aXRsZT1cIlJlZ3VsYXIgT2lsXCIgY29sbGFwc2U9XCJoaWRkZW5cIj5cbiAgICAgICAgICAgICAgPE9pbEZpZWxkcyB2YWx1ZT17dmFsdWVzLnN1cHBsaWVzLnJlZ3VsYXJ9IGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgPC9Db2xsYXBzaWJsZUNhcmQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIG1iLTVcIj5cbiAgICAgICAgICAgIDxDb2xsYXBzaWJsZUNhcmQgdGl0bGU9XCJTZW1pLVN5bnRoZXRpYyBPaWxcIiBjb2xsYXBzZT1cImhpZGRlblwiPlxuICAgICAgICAgICAgICA8T2lsRmllbGRzIHZhbHVlPXt2YWx1ZXMuc3VwcGxpZXMuc2VtaX0gaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+ICAgICAgICAgICAgXG4gICAgICAgICAgICA8L0NvbGxhcHNpYmxlQ2FyZD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgbWItNVwiPlxuICAgICAgICAgICAgPENvbGxhcHNpYmxlQ2FyZCB0aXRsZT1cIkZ1bGx5IFN5bnRoZXRpYyBPaWxcIiBjb2xsYXBzZT1cImhpZGRlblwiPlxuICAgICAgICAgICAgICA8T2lsRmllbGRzIHZhbHVlPXt2YWx1ZXMuc3VwcGxpZXMuZnVsbH0gaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8L0NvbGxhcHNpYmxlQ2FyZD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgbWItNVwiPlxuICAgICAgICAgICAgPENvbGxhcHNpYmxlQ2FyZCB0aXRsZT1cIlNob3AgUmVjb21tZW5kYXRpb25cIiBjb2xsYXBzZT1cImhpZGRlblwiPlxuICAgICAgICAgICAgICA8T2lsRmllbGRzIHZhbHVlPXt2YWx1ZXMuc3VwcGxpZXMucmVjb21tZWR9IGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgPC9Db2xsYXBzaWJsZUNhcmQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yIG1iLTVcIj5cbiAgICAgICAgICAgIDxDb2xsYXBzaWJsZUNhcmQgdGl0bGU9XCJEZXRhaWxzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14bCBtYi0zXCI+Q2hlY2sgSXRlbXM8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWRpc2MgbWwtNVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtjaGVjay5tYXAoKGl0ZW0saWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2lkeH0+e2l0ZW19PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14bCBtYi0zXCI+Q2xlYW4gSXRlbXM8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWRpc2MgbWwtNVwiPlxuICAgICAgICAgICAgICAgICAgICB7Y2xlYW4ubWFwKChpdGVtLGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2lkeH0+e2l0ZW19PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14bCBteS0zXCI+Q2hhbmdlIEl0ZW1zPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1kaXNjIG1sLTVcIj5cbiAgICAgICAgICAgICAgICAgICAge2NoYW5nZS5tYXAoKGl0ZW0saWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aWR4fT57aXRlbX08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29sbGFwc2libGVDYXJkPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L0ZyYWdtZW50PlxuICAgIClcbn1cblxuY29uc3QgdmFsaWRhdGVGaWVsZHMgPSB2YWx1ZXMgPT4ge1xuICAgIGxldCBlcnJvcnMgPSB7fVxuICBcbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cbiAgXG4gIGNvbnN0IFVwZGF0ZVByZXZlbnRpdmUgPSByZWR1eEZvcm0oe1xuICAgIGZvcm06ICd1cGRhdGUtcHJldmVudGl2ZScsXG4gICAgZW5hYmxlUmVpbml0aWFsaXplOiB0cnVlLFxuICAgIHZhbGlkYXRlOiB2YWxpZGF0ZUZpZWxkc1xuICB9KShVcGRhdGVQcmV2ZW50aXZlQ29tcG9uZW50KVxuICBcbiAgZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgICAoc3RhdGUsIHByb3BzKSA9PiB7XG4gICAgICBjb25zdCBxdWVyeSA9IHByb3BzLm1hdGNoLnBhcmFtcy5pZFxuICAgICAgY29uc3QgcG1zID1wcm9wcy5tYXRjaC5wYXJhbXMucG1zXG4gICAgICByZXR1cm4oe1xuICAgICAgICAgIHNob3Bfc2VydmljZXM6IHNlbGVjdFNob3Bfc2VydmljZURldGFpbHMoc3RhdGUsIHF1ZXJ5KSxcbiAgICAgICAgICBwbXNfbGlzdHM6IHNlbGVjdFBtc19saXN0RGV0YWlscyhzdGF0ZSwgcG1zKSxcbiAgICAgICAgICB1c2VyOiBjdXJyZW50VXNlclNlbGVjdG9yKHN0YXRlKVxuICAgICAgICB9XG4gICAgICApfSxcbiAgICBkaXNwYXRjaCA9PiAoe1xuICAgICAgZ2V0U2hvcF9zZXJ2aWNlOiBpZCA9PiBkaXNwYXRjaChnZXRTaG9wX3NlcnZpY2VBY3Rpb24oaWQpKSxcbiAgICAgIGdldFBtc19saXN0OiBpZCA9PiBkaXNwYXRjaChnZXRQbXNfbGlzdEFjdGlvbihpZCkpLFxuICAgICAgb25TdWJtaXQ6IHZhbHVlcyA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHVwZGF0ZVNob3Bfc2VydmljZUFjdGlvbih2YWx1ZXMpKVxuICAgICAgICBBbGVydE1lKCdzdWNjZXNzJywgJ1BNUyBzdWNjZXNzZnVsbHkgdXBkYXRlZCEnKVxuICAgICAgfVxuICAgIH0pXG4gICkoVXBkYXRlUHJldmVudGl2ZSkiXSwic291cmNlUm9vdCI6IiJ9