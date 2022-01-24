(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

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

/***/ "./resources/assets/js/pages/Vehicles/Change-Oil/Brand.jsx":
/*!*****************************************************************!*\
  !*** ./resources/assets/js/pages/Vehicles/Change-Oil/Brand.jsx ***!
  \*****************************************************************/
/*! exports provided: BrandSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandSelect", function() { return BrandSelect; });
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-switch */ "./node_modules/react-switch/index.js");
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_switch__WEBPACK_IMPORTED_MODULE_2__);


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



const BrandSelect = ({
  values,
  setValues,
  handleChange,
  step,
  progress,
  nextStep,
  previousStep
}) => {
  const [switcher, setSwitch] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);

  const handleSwitchChange = event => {
    setSwitch(switcher === true ? false : true);
  };

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    setValues(_objectSpread({}, values, {
      preferrence: [{
        other_brands: switcher
      }]
    }));
  }, [switcher]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "p-10 py-5 pt-0"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mb-5"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "text-2xl my-5"
  }, "Preferred Oil Brand ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "text-red-500"
  }, "*")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    placeholder: "Specify your preferred oil. If any?",
    value: values.preferred_brand,
    onChange: e => handleChange(e),
    className: "p-2 rounded w-full border border-gray-300",
    type: "text",
    name: "preferred_brand"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "text-2xl my-5"
  }, "Other Preferrence ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "text-gray-500"
  }, "(Optional)")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_switch__WEBPACK_IMPORTED_MODULE_2___default.a, {
    uncheckedIcon: false,
    checkedIcon: false,
    onChange: event => handleSwitchChange(event),
    checked: switcher
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: "ml-5 text-gray-800 align-top",
    htmlFor: "type"
  }, "Open for other brands"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "pt-5 pb-5 border-t w-full px-10"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: previousStep,
    className: "float-left rounded rounded-r-0 text-sm bg-blue-500 hover:bg-blue-700 px-5 py-2 text-white mb-5"
  }, "Previous"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "float-right rounded text-sm bg-green-500 hover:bg-green-700 px-5 py-2 text-white mb-5"
  }, "Submit"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "clearfix"
  })));
};

__signature__(BrandSelect, "useState{[switcher, setSwitch](false)}\nuseEffect{}");

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(BrandSelect, "BrandSelect", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Vehicles/Change-Oil/Brand.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/pages/Vehicles/Change-Oil/Modal.jsx":
/*!*****************************************************************!*\
  !*** ./resources/assets/js/pages/Vehicles/Change-Oil/Modal.jsx ***!
  \*****************************************************************/
/*! exports provided: useForm, ChangeOilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useForm", function() { return useForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeOilComponent", function() { return ChangeOilComponent; });
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Pms_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Pms-Modal */ "./resources/assets/js/pages/Vehicles/Pms-Modal/index.js");
/* harmony import */ var _Brand__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Brand */ "./resources/assets/js/pages/Vehicles/Change-Oil/Brand.jsx");


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





const useForm = ({
  initialValues,
  onSubmit,
  validate
}) => {
  const [values, setValues] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(initialValues || {});
  const [touchedValues, setTouchedValues] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState({});
  const [errors, setErrors] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState({});

  const handleChange = event => {
    const target = event.target;
    const value = target.value;
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
    const e = validate(values);
    setErrors(_objectSpread({}, errors, {}, e));
    onSubmit(_objectSpread({}, values, {
      e
    }));
  };

  const [select, setSelect] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]);
  console.log(select);

  const handleSelectChange = event => {
    const value = event.value;
    const label = event.label;
    const name = 'type_id';
    setValues(_objectSpread({}, values, {
      [name]: value
    }));
    setSelect({
      value: value,
      label: label
    });
  };

  const [step, setStep] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1);
  const [progress, setProgress] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    1: false,
    2: false,
    3: false
  });

  const nextStep = e => {
    e.preventDefault();
    const page = step;
    setProgress(_objectSpread({}, progress, {
      [page]: true
    }));
    setStep(step + 1);
  };

  const previousStep = e => {
    e.preventDefault();
    setStep(step - 1);
  };

  return {
    values,
    setValues,
    touchedValues,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
    handleSelectChange,
    select,
    step,
    setStep,
    progress,
    nextStep,
    previousStep
  };
};

__signature__(useForm, "useState{[values, setValues](initialValues || {})}\nuseState{[touchedValues, setTouchedValues]({})}\nuseState{[errors, setErrors]({})}\nuseState{[select, setSelect]([])}\nuseState{[step, setStep](1)}\nuseState{[progress, setProgress]({\n    1: false,\n    2: false,\n    3: false\n  })}");

const ChangeOilComponent = ({
  onSubmit,
  initialValues
}) => {
  initialValues['oil_type'] = '';
  initialValues['preferred_schedule'] = '';
  const {
    values,
    setValues,
    touchedValues,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
    handleSelectChange,
    select,
    step,
    setStep,
    progress,
    nextStep,
    previousStep
  } = useForm({
    initialValues,
    onSubmit,

    validate(values) {
      const errors = {};

      if (values.name === "") {
        errors.name = "Please specify a name";
      }

      return errors;
    }

  });

  function computeProgress() {
    const first = progress[1] == true ? 35 : 0;
    const second = progress[2] == true ? 35 : 0;
    const third = progress[3] == true ? 30 : 0;
    const total = first + second;
    return "".concat(total, "%");
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    onSubmit: handleSubmit
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex-grow"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "pt-5 pb-5 border-b w-full"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "px-10 text-base text-gray-700"
  }, values.header)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "p-10 py-5 pb-0"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "progress-label float-left px-0 pt-0"
  }, "Completion Progress"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "float-right px-0 py-0"
  }, step, "/3"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "clearfix"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "shadow w-full bg-gray-300 my-3"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "bg-blue-500 text-xs leading-none py-1 text-center text-white",
    style: {
      width: computeProgress()
    }
  }))), step == 1 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Pms_Modal__WEBPACK_IMPORTED_MODULE_3__["Schedule"], {
    values: values,
    setValues: setValues,
    handleChange: handleChange,
    step: step,
    progress: progress,
    nextStep: nextStep,
    previousStep: previousStep
  }), step == 2 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Brand__WEBPACK_IMPORTED_MODULE_4__["BrandSelect"], {
    values: values,
    setValues: setValues,
    handleChange: handleChange,
    step: step,
    progress: progress,
    nextStep: nextStep,
    previousStep: previousStep
  })));
};

__signature__(ChangeOilComponent, "useForm{{ \n      values,\n      setValues, \n      touchedValues, \n      errors, \n      handleChange, \n      handleSubmit, \n      handleBlur, \n      handleSelectChange, \n      select,     \n      step,\n      setStep,\n      progress,\n      nextStep,\n      previousStep }}", () => [useForm]);

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useForm, "useForm", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Vehicles/Change-Oil/Modal.jsx");
  reactHotLoader.register(ChangeOilComponent, "ChangeOilComponent", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Vehicles/Change-Oil/Modal.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/pages/Vehicles/Change-Oil/index.js":
/*!****************************************************************!*\
  !*** ./resources/assets/js/pages/Vehicles/Change-Oil/index.js ***!
  \****************************************************************/
/*! exports provided: ChangeOilComponent, BrandSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal */ "./resources/assets/js/pages/Vehicles/Change-Oil/Modal.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChangeOilComponent", function() { return _Modal__WEBPACK_IMPORTED_MODULE_0__["ChangeOilComponent"]; });

/* harmony import */ var _Brand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Brand */ "./resources/assets/js/pages/Vehicles/Change-Oil/Brand.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrandSelect", function() { return _Brand__WEBPACK_IMPORTED_MODULE_1__["BrandSelect"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};




/***/ }),

/***/ "./resources/assets/js/pages/Vehicles/Pms-Modal/CheckList.jsx":
/*!********************************************************************!*\
  !*** ./resources/assets/js/pages/Vehicles/Pms-Modal/CheckList.jsx ***!
  \********************************************************************/
/*! exports provided: CheckList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckList", function() { return CheckList; });
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-switch */ "./node_modules/react-switch/index.js");
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_switch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};




const CheckList = ({
  values,
  setValues,
  step,
  progress,
  nextStep,
  check_items,
  clean_items,
  change_items
}) => {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "p-10 py-5 pt-0"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "p-5 bg-blue-700 text-white rounded text-sm"
  }, "The recommendations below are based on best practices. Refer to your owners manual or qualified technician for vehicle's specific maintenance requirements."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "grid grid-cols-2 gap-4"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-span-1"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "text-lg my-3"
  }, "Check"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "list-disc"
  }, check_items.map((item, idx) => {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "ml-5",
      key: idx
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "flex mb-3"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "flex-auto text-sm"
    }, item)));
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-span-1"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "text-lg my-3"
  }, "Clean"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "list-disc"
  }, clean_items.map((item, idx) => {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "ml-5",
      key: idx
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "flex mb-3"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "flex-auto text-sm"
    }, item)));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "text-lg my-3"
  }, "Change"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "list-disc"
  }, change_items.map((item, idx) => {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "ml-5",
      key: idx
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "flex mb-3"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "flex-auto text-sm"
    }, item)));
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "pt-5 pb-5 border-t w-full px-10"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: nextStep,
    className: "float-right rounded text-sm bg-blue-500 hover:bg-blue-700 px-5 py-2 text-white mb-5"
  }, "Next")));
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CheckList, "CheckList", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Vehicles/Pms-Modal/CheckList.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/pages/Vehicles/Pms-Modal/Modal.jsx":
/*!****************************************************************!*\
  !*** ./resources/assets/js/pages/Vehicles/Pms-Modal/Modal.jsx ***!
  \****************************************************************/
/*! exports provided: useForm, PmsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useForm", function() { return useForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PmsModalComponent", function() { return PmsModalComponent; });
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CheckList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CheckList */ "./resources/assets/js/pages/Vehicles/Pms-Modal/CheckList.jsx");
/* harmony import */ var _Schedule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Schedule */ "./resources/assets/js/pages/Vehicles/Pms-Modal/Schedule.jsx");
/* harmony import */ var _Replacements__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Replacements */ "./resources/assets/js/pages/Vehicles/Pms-Modal/Replacements.jsx");



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






const useForm = ({
  initialValues,
  onSubmit,
  validate
}) => {
  const [values, setValues] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(initialValues || {});
  const [touchedValues, setTouchedValues] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState({});
  const [errors, setErrors] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState({});

  const handleChange = event => {
    const target = event.target;
    const value = target.value;
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
    const e = validate(values);
    setErrors(_objectSpread({}, errors, {}, e));
    onSubmit(_objectSpread({}, values, {
      e
    }));
  };

  const optionTypes = [{
    label: 'Car',
    value: 1
  }, {
    label: 'Truck',
    value: 2
  }, {
    label: 'Motorcycle',
    value: 3
  }];
  console.log(values.type_id);
  const newLabel = optionTypes.filter(option => option.value == values.type_id);
  console.log(newLabel[0]);
  const [select, setSelect] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(newLabel[0]);
  console.log(select);

  const handleSelectChange = event => {
    const value = event.value;
    const label = event.label;
    const name = 'type_id';
    setValues(_objectSpread({}, values, {
      [name]: value
    }));
    setSelect({
      value: value,
      label: label
    });
  };

  const [step, setStep] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(1);
  const [progress, setProgress] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    1: false,
    2: false,
    3: false
  });

  const nextStep = e => {
    e.preventDefault();
    const page = step;
    setProgress(_objectSpread({}, progress, {
      [page]: true
    }));
    setStep(step + 1);
  };

  const previousStep = e => {
    e.preventDefault();
    setStep(step - 1);
  };

  return {
    values,
    setValues,
    touchedValues,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
    handleSelectChange,
    optionTypes,
    select,
    step,
    setStep,
    progress,
    nextStep,
    previousStep
  };
};

__signature__(useForm, "useState{[values, setValues](initialValues || {})}\nuseState{[touchedValues, setTouchedValues]({})}\nuseState{[errors, setErrors]({})}\nuseState{[select, setSelect](newLabel[0])}\nuseState{[step, setStep](1)}\nuseState{[progress, setProgress]({\n    1: false,\n    2: false,\n    3: false\n  })}");

const PmsModalComponent = ({
  onSubmit,
  initialValues
}) => {
  initialValues['oil_type'] = '';
  initialValues['preferred_schedule'] = '';
  initialValues['replacements'] = [];
  const {
    values,
    setValues,
    touchedValues,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
    handleSelectChange,
    optionTypes,
    select,
    step,
    setStep,
    progress,
    nextStep,
    previousStep
  } = useForm({
    initialValues,
    onSubmit,

    validate(values) {
      const errors = {};

      if (values.name === "") {
        errors.name = "Please specify a name";
      }

      return errors;
    }

  });

  function computeProgress() {
    const first = progress[1] == true ? 30 : 0;
    const second = progress[2] == true ? 35 : 0;
    const third = progress[3] == true ? 35 : 0;
    const total = first + second + third;
    return "".concat(total, "%");
  }

  const [check_items, setCheck] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState([]);
  const [clean_items, setClean] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState([]);
  const [change_items, setChange] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState([]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const fetchPms = async () => {
      const result = await axios__WEBPACK_IMPORTED_MODULE_3___default()("/api/pms-lists/".concat(values.service_id));
      setCheck(result.data.data.check_items);
      setClean(result.data.data.clean_items);
      setChange(result.data.data.change_items);
    };

    fetchPms();
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    onSubmit: handleSubmit
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "flex-grow"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "pt-5 pb-5 border-b w-full"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "px-10 text-base text-gray-700"
  }, values.header)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "p-10 py-5 pb-0"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "progress-label float-left px-0 pt-0"
  }, "Completion Progress"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "float-right px-0 py-0"
  }, step, "/3"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "clearfix"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "shadow w-full bg-gray-300 my-3"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "bg-blue-500 text-xs leading-none py-1 text-center text-white",
    style: {
      width: computeProgress()
    }
  }))), step == 1 && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_CheckList__WEBPACK_IMPORTED_MODULE_4__["CheckList"], {
    values: values,
    setValues: setValues,
    step: step,
    progress: progress,
    nextStep: nextStep,
    check_items: check_items,
    clean_items: clean_items,
    change_items: change_items
  }), step == 2 && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Schedule__WEBPACK_IMPORTED_MODULE_5__["Schedule"], {
    values: values,
    setValues: setValues,
    handleChange: handleChange,
    step: step,
    progress: progress,
    nextStep: nextStep,
    previousStep: previousStep
  }), step == 3 && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Replacements__WEBPACK_IMPORTED_MODULE_6__["Replacements"], {
    values: values,
    setValues: setValues,
    handleChange: handleChange,
    handleSubmit: handleSubmit,
    change_items: change_items,
    step: step,
    progress: progress,
    nextStep: nextStep,
    previousStep: previousStep
  })));
};

__signature__(PmsModalComponent, "useForm{{ \n  values,\n  setValues, \n  touchedValues, \n  errors, \n  handleChange, \n  handleSubmit, \n  handleBlur, \n  handleSelectChange, \n  optionTypes, \n  select,     \n  step,\n  setStep,\n  progress,\n  nextStep,\n  previousStep }}\nuseState{[check_items, setCheck]([])}\nuseState{[clean_items, setClean]([])}\nuseState{[change_items, setChange]([])}\nuseEffect{}", () => [useForm]);

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useForm, "useForm", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Vehicles/Pms-Modal/Modal.jsx");
  reactHotLoader.register(PmsModalComponent, "PmsModalComponent", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Vehicles/Pms-Modal/Modal.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/pages/Vehicles/Pms-Modal/Replacements.jsx":
/*!***********************************************************************!*\
  !*** ./resources/assets/js/pages/Vehicles/Pms-Modal/Replacements.jsx ***!
  \***********************************************************************/
/*! exports provided: Replacements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Replacements", function() { return Replacements; });
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-switch */ "./node_modules/react-switch/index.js");
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_switch__WEBPACK_IMPORTED_MODULE_3__);


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




const Replacements = ({
  values,
  value,
  setValues,
  handleChange,
  handleSubmit,
  change_items,
  step,
  progress,
  nextStep,
  previousStep
}) => {
  const types = [{
    label: 'OEM',
    value: 'oem'
  }, {
    label: 'Replacement',
    value: 'replacement'
  }, {
    label: 'Shop Recommendation',
    value: 'recommendation'
  }];
  const [fields, setFields] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(values.replacements || []);
  const [errors, setErrors] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(true);
  const count = change_items.length;

  const checkErrors = () => {
    console.log(fields.length);
    fields.length != change_items.length ? setErrors(true) : setErrors(false);
  };

  const handleSelectChange = (i, event) => {
    const value = event.value;
    const label = event.label;
    const list = [...fields];
    list[i] = {
      label: label,
      value: value
    };
    setFields(list);
    setValues(_objectSpread({}, values, {
      replacements: list
    }));
    setSwitch(_objectSpread({}, switcher, {
      oem: false,
      replacement: false,
      recommendation: false
    }));
  };

  const onSubmit = () => {
    console.log(fields.length);
    console.log(change_items.length);
    fields.length != change_items.length ? setErrors(true) : setErrors(false);

    if (errors === false) {
      handleSubmit();
    }
  };

  const [switcher, setSwitch] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState({
    oem: false,
    replacement: false,
    recommendation: false
  });

  const handleSwitchChange = (event, type) => {
    if (type === 'oem') {
      setSwitch(_objectSpread({}, switcher, {
        oem: switcher.oem === true ? false : true,
        replacement: false,
        recommendation: false
      }));
    } else if (type === 'replacement') {
      setSwitch(_objectSpread({}, switcher, {
        oem: false,
        replacement: switcher.replacement === true ? false : true,
        recommendation: false
      }));
    } else if (type === 'recommendation') {
      setSwitch(_objectSpread({}, switcher, {
        oem: false,
        replacement: false,
        recommendation: switcher.recommendation === true ? false : true
      }));
    }
  };

  const setAllToOem = () => {
    const list = [...fields];
    setFields([]);

    if (switcher.oem === true) {
      for (let i = 0; i < change_items.length; i++) {
        list.push({
          label: 'OEM',
          value: 'oem'
        });
        setFields(list);
        setValues(_objectSpread({}, values, {
          replacements: list
        }));
      }
    } else {
      setFields([]);
      setValues(_objectSpread({}, values, {
        replacements: []
      }));
    }
  };

  const setAllToReplacement = () => {
    const list = [...fields];
    setFields([]);

    if (switcher.replacement === true) {
      for (let i = 0; i < count; i++) {
        list.push({
          label: 'Replacement',
          value: 'replacement'
        });
        setFields(list);
        setValues(_objectSpread({}, values, {
          replacements: list
        }));
      }
    } else {
      setFields([]);
      setValues(_objectSpread({}, values, {
        replacements: []
      }));
    }
  };

  const setAllToRecommendation = () => {
    const list = [...fields];
    setFields([]);

    if (switcher.recommendation === true) {
      for (let i = 0; i < count; i++) {
        list.push({
          label: 'Recommendation',
          value: 'recommendation'
        });
        setFields(list);
        setValues(_objectSpread({}, values, {
          replacements: list
        }));
      }
    } else {
      setFields([]);
      setValues(_objectSpread({}, values, {
        replacements: []
      }));
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    fields.length != change_items.length ? setErrors(true) : setErrors(false);
    console.log(values);
    console.log(fields);
    console.log(switcher);
  }, [fields]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setAllToOem();
  }, [switcher.oem]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setAllToReplacement();
  }, [switcher.replacement]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setAllToRecommendation();
  }, [switcher.recommendation]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "p-10 py-5 pt-0"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "text-2xl mb-5"
  }, "Select Replacement Types ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "text-red-500"
  }, "*")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "w-2/3 pr-20"
  }, change_items.map((item, idx) => {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: idx
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "grid grid-cols-2 gap-4"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "col-span-1 self-center"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "text-gray-800",
      htmlFor: "type"
    }, item)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: idx,
      className: "col-span-1"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
      placeholder: "Select a Replacement Type",
      name: "replacements[".concat(idx, "]"),
      onChange: e => handleSelectChange(idx, e),
      className: "py-2 rounded block w-full",
      options: types,
      value: fields[idx] || ''
    }))));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "w-1/3"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "text-gray-700 mb-10"
  }, "Select types to all (optional)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mb-5"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_switch__WEBPACK_IMPORTED_MODULE_3___default.a, {
    uncheckedIcon: false,
    checkedIcon: false,
    onChange: event => handleSwitchChange(event, "oem"),
    checked: switcher.oem
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: "ml-5 text-gray-800 align-top",
    htmlFor: "type"
  }, "All OEM")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mb-5"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_switch__WEBPACK_IMPORTED_MODULE_3___default.a, {
    uncheckedIcon: false,
    checkedIcon: false,
    onChange: event => handleSwitchChange(event, "replacement"),
    checked: switcher.replacement
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: "ml-5 text-gray-800 align-top",
    htmlFor: "type"
  }, "All Replacement")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mb-5"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_switch__WEBPACK_IMPORTED_MODULE_3___default.a, {
    uncheckedIcon: false,
    checkedIcon: false,
    onChange: event => handleSwitchChange(event, "recommendation"),
    checked: switcher.recommendation
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: "ml-5 text-gray-800 align-top",
    htmlFor: "type"
  }, "All Shop Recommendation")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "pt-5 pb-5 border-t w-full"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: previousStep,
    className: "float-left rounded rounded-r-0 text-sm bg-blue-500 hover:bg-blue-700 px-5 py-2 text-white mb-5"
  }, "Previous"), errors ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "float-right rounded text-sm bg-gray-500 hover:bg-gray-700 px-5 py-2 text-white mb-5 cursor-not-allowed"
  }, "Submit") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: onSubmit,
    className: "float-right rounded text-sm bg-green-500 hover:bg-green-700 px-5 py-2 text-white mb-5"
  }, "Submit"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "clearfix"
  })));
};

__signature__(Replacements, "useState{[fields, setFields](values.replacements || [])}\nuseState{[errors, setErrors](true)}\nuseState{[switcher, setSwitch]({\n            oem: false,\n            replacement: false,\n            recommendation: false\n        })}\nuseEffect{}\nuseEffect{}\nuseEffect{}\nuseEffect{}");

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Replacements, "Replacements", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Vehicles/Pms-Modal/Replacements.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/pages/Vehicles/Pms-Modal/Schedule.jsx":
/*!*******************************************************************!*\
  !*** ./resources/assets/js/pages/Vehicles/Pms-Modal/Schedule.jsx ***!
  \*******************************************************************/
/*! exports provided: Schedule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Schedule", function() { return Schedule; });
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components */ "./resources/assets/js/components/index.js");



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




const Schedule = ({
  values,
  setValues,
  step,
  progress,
  nextStep,
  previousStep
}) => {
  function capitalizeFirstLetter(string) {
    if (string) {
      return string[0].toUpperCase() + string.slice(1);
    }

    return string;
  }

  function stripString(string) {
    if (string) {
      return string.replace('_', ' ');
    }
  }

  const oil_types = () => {
    const ret = [];

    if (Array.isArray(values.oil_types)) {
      values.oil_types.map((val, idx) => {
        const stripLabel = stripString(val);
        const label = capitalizeFirstLetter(stripLabel);
        ret[idx] = {
          label: label,
          value: val
        };
        return ret;
      });
    } else {
      const stripLabel = stripString(values.oil_types);
      const label = capitalizeFirstLetter(stripLabel);
      const ret = {
        label: label,
        value: values.oil_types
      };
      return ret;
    }

    return ret;
  };

  const [oil, setOil] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState('');
  const types = [{
    label: "Regular Oil",
    value: "regular_oil"
  }, {
    label: "Semi Synthetic",
    value: "semi_synthetic"
  }, {
    label: "Fully Synthetic",
    value: "fully_synthetic"
  }, {
    label: "Shop Recommendation",
    value: "shop_recommendation"
  }];

  const handleSelectChange = event => {
    const value = event.value;
    const label = event.label;
    setOil({
      label: label,
      value: value
    });
    setValues(_objectSpread({}, values, {
      oil_type: value
    }));
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "p-10 py-5 pt-0"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "text-2xl"
  }, "Select your preferred schedule (at most 3 time slots) ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "text-red-500"
  }, "*")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "text-xs text-gray-700"
  }, "We suggest to set a schedule a month before the expected scheduled date"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_4__["ScheduleFields"], {
    values: values,
    setValues: setValues,
    type: "preferred_schedule"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "text-2xl mt-5"
  }, "Select Oil Type ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "text-red-500"
  }, "*")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_3__["default"], {
    placeholder: "Select an Oil Type",
    value: oil,
    name: "oil_type",
    onChange: e => handleSelectChange(e),
    className: "py-2 rounded my-3 block w-full",
    options: types
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "pt-5 pb-5 border-t w-full px-10"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: previousStep,
    className: "float-left rounded rounded-r-0 text-sm bg-blue-500 hover:bg-blue-700 px-5 py-2 text-white mb-5"
  }, "Previous"), values.preferred_schedule != '' && values.oil_type != '' ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: nextStep,
    className: "float-right rounded text-sm bg-blue-500 hover:bg-blue-700 px-5 py-2 text-white mb-5"
  }, "Next") : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "float-right rounded text-sm bg-gray-500 hover:bg-gray-700 px-5 py-2 text-white mb-5 cursor-not-allowed"
  }, "Next"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "clearfix"
  })));
};

__signature__(Schedule, "useState{[oil, setOil]('')}");

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Schedule, "Schedule", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Vehicles/Pms-Modal/Schedule.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/pages/Vehicles/Pms-Modal/index.js":
/*!***************************************************************!*\
  !*** ./resources/assets/js/pages/Vehicles/Pms-Modal/index.js ***!
  \***************************************************************/
/*! exports provided: CheckList, Schedule, Replacements, PmsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CheckList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckList */ "./resources/assets/js/pages/Vehicles/Pms-Modal/CheckList.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckList", function() { return _CheckList__WEBPACK_IMPORTED_MODULE_0__["CheckList"]; });

/* harmony import */ var _Schedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Schedule */ "./resources/assets/js/pages/Vehicles/Pms-Modal/Schedule.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Schedule", function() { return _Schedule__WEBPACK_IMPORTED_MODULE_1__["Schedule"]; });

/* harmony import */ var _Replacements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Replacements */ "./resources/assets/js/pages/Vehicles/Pms-Modal/Replacements.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Replacements", function() { return _Replacements__WEBPACK_IMPORTED_MODULE_2__["Replacements"]; });

/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Modal */ "./resources/assets/js/pages/Vehicles/Pms-Modal/Modal.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PmsModalComponent", function() { return _Modal__WEBPACK_IMPORTED_MODULE_3__["PmsModalComponent"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};






/***/ }),

/***/ "./resources/assets/js/pages/Vehicles/VehicleSchedule.jsx":
/*!****************************************************************!*\
  !*** ./resources/assets/js/pages/Vehicles/VehicleSchedule.jsx ***!
  \****************************************************************/
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var react_context_modals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-context-modals */ "./node_modules/react-context-modals/dist/main.js");
/* harmony import */ var react_context_modals__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_context_modals__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components */ "./resources/assets/js/components/index.js");
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-number-format */ "./node_modules/react-number-format/dist/react-number-format.es.js");
/* harmony import */ var color_convert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! color-convert */ "./node_modules/color-convert/index.js");
/* harmony import */ var color_convert__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(color_convert__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var store_selectors_schedules__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! store/selectors/schedules */ "./resources/assets/js/store/selectors/schedules.js");
/* harmony import */ var store_selectors_session__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! store/selectors/session */ "./resources/assets/js/store/selectors/session/index.js");
/* harmony import */ var store_action_creators_schedules__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! store/action-creators/schedules */ "./resources/assets/js/store/action-creators/schedules/index.js");
/* harmony import */ var store_action_creators_userRequests__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! store/action-creators/userRequests */ "./resources/assets/js/store/action-creators/userRequests/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var default_avatar_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! default-avatar.png */ "./resources/assets/img/default-avatar.png");
/* harmony import */ var default_avatar_png__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(default_avatar_png__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _Pms_Modal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Pms-Modal */ "./resources/assets/js/pages/Vehicles/Pms-Modal/index.js");
/* harmony import */ var _Change_Oil__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Change-Oil */ "./resources/assets/js/pages/Vehicles/Change-Oil/index.js");




(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



















const RequestChangeOilModal = Object(recompose__WEBPACK_IMPORTED_MODULE_5__["compose"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])((state, ownProps) => ({
  initialValues: ownProps
}), (dispatch, {
  hideModal
}) => ({
  onSubmit: values => {
    dispatch(Object(store_action_creators_userRequests__WEBPACK_IMPORTED_MODULE_16__["createRequest"])(values));
    dispatch(Object(store_action_creators_userRequests__WEBPACK_IMPORTED_MODULE_16__["getRequests"])());
    hideModal();
    Alert('success', 'Change Oil Request Completed');
  }
})), Object(redux_form__WEBPACK_IMPORTED_MODULE_6__["reduxForm"])({
  form: 'request-change-oil'
}))(_Change_Oil__WEBPACK_IMPORTED_MODULE_20__["ChangeOilComponent"]);
const RequestPmsModal = Object(recompose__WEBPACK_IMPORTED_MODULE_5__["compose"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])((state, ownProps) => ({
  initialValues: ownProps
}), (dispatch, {
  hideModal
}) => ({
  onSubmit: values => {
    dispatch(createRequest(values));
    dispatch(getRequest());
    hideModal();
    Alert('success', 'PMS Request Completed');
  }
})), Object(redux_form__WEBPACK_IMPORTED_MODULE_6__["reduxForm"])({
  form: 'request-pms'
}))(_Pms_Modal__WEBPACK_IMPORTED_MODULE_19__["PmsModalComponent"]);
const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

const Alert = (type, title) => Toast.fire({
  type: type,
  title: title
});

function VehicleScheduleComponent({
  getSchedules,
  deleteSchedule,
  schedules,
  user,
  match
}) {
  const {
    user_type
  } = user;
  const query = match.params.slug;
  const [request, setRequest] = react__WEBPACK_IMPORTED_MODULE_8___default.a.useState();
  const {
    showModal
  } = Object(react_context_modals__WEBPACK_IMPORTED_MODULE_7__["useModal"])();

  if (user_type != 'admin' && user_type != 'customer') {
    return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__["Redirect"], {
      from: "/account",
      to: "/account/overview"
    });
  }

  const populateSchedules = async () => {
    await getSchedules(query);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(() => {
    const fetchRequest = async () => {
      const result = await axios__WEBPACK_IMPORTED_MODULE_4___default()("/api/requests");
      setRequest(result.data.data[0].additional.mileage);
    };

    populateSchedules();
    fetchRequest();
  }, []);
  console.log(schedules);
  console.log(request);
  const sched_list = schedules[0];
  const request_data = request || {};
  const {
    car_sched,
    vehicle
  } = sched_list || {};
  console.log(car_sched);
  const {
    type,
    make_id,
    model_id,
    trim_id,
    car_year,
    engine_type,
    transmission,
    vin,
    plate_number,
    current_mileage,
    address,
    city,
    zip,
    longitude,
    latitude,
    slug,
    car
  } = vehicle || {};
  const {
    color,
    name,
    mileage,
    last_serviced,
    date_purchased,
    updated_at
  } = car || {};
  console.log(request_data);

  function markActive(mileage, data) {
    console.log(data);

    if (request_data == mileage) {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        className: "rounded bg-blue-500 cursor-not-allowed text-white px-4 py-2 my-2 text-sm"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "material-icons text-xs"
      }, "check"), ' ', "Requested");
    } else {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__["Link"], {
        onClick: () => showModal(RequestPmsModal, data),
        to: "#",
        className: "rounded bg-green-500 hover:bg-green-600 text-white px-4 py-2 my-2 text-sm"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "material-icons text-xs"
      }, "build"), ' ', "Request PMS");
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "bb-white px-10 py-5"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_9__["PageHeader"], {
    title: "Schedules",
    subTitle: "My Garage"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__["Link"], {
    className: "ml-2 bg-gray-300 hover:bg-gray-500 text-gray-700 shadow font-bold py-2 px-4 rounded inline-flex items-center",
    to: "/account/vehicles"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
    className: "material-icons"
  }, "arrow_back"), " Go Back")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "py-3 flex"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "w-1/3 pr-5"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "w-full rounded bg-white shadow-lg"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "p-10 border-b border-gray-300"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "clearfix ml-10"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
    className: "p-5 rounded-full w-48 object-fill mx-auto",
    src: default_avatar_png__WEBPACK_IMPORTED_MODULE_18___default.a
  })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "mx-auto text-gray-700 text-xl p-5 pb-10 text-center"
  }, name || ''), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "text-sm mx-auto rounded border border-gray-500 text-center w-32 px-5 py-2"
  }, plate_number || ''), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "text-sm mx-auto text-center py-5"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
    className: "text-blue-500 font-bold"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_number_format__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: mileage,
    displayType: 'text',
    thousandSeparator: true,
    suffix: ' km',
    renderText: value => react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, value)
  })), ' ', "since ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
    className: "font-bold"
  }, date_purchased || ''))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "p-5"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "p-5 px-10 text-gray-600"
  }, "Engine / Transmission", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "text-gray-700"
  }, transmission || '')), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "p-5 px-10 text-gray-600"
  }, "Last Serviced", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "text-gray-700"
  }, last_serviced || '-')), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "p-5 px-10 text-gray-600"
  }, "Last Updated", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "text-gray-700"
  }, updated_at || '-'))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "w-2/3"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_9__["CollapsibleCard"], {
    className: "mb-5",
    padding: "false",
    title: "Available Services",
    subTitle: "You can request these services anytime."
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("table", {
    className: "w-full"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("thead", {
    className: "border-t border-b border-gray-300 bg-gray-200"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("th", {
    className: "py-2"
  }, "Service Name"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("th", {
    className: "py-2"
  }, "Last Serviced"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("th", {
    className: "py-2"
  }, "Action"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
    className: "py-5 border-b border-gray-300 text-center text-blue-500 font-bold"
  }, "Change Oil"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
    className: "py-5 border-b border-gray-300 text-center"
  }, "-"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
    className: "py-5 border-b border-gray-300 text-center"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
    onClick: () => {
      const className = "rounded-lg hidden md:block w-1/2 lg:w-2/3 overflow-visible";
      const header = "Requesting for Change Oil at ".concat(mileage, " km");
      return showModal(RequestChangeOilModal, {
        type,
        transmission,
        current_mileage,
        city,
        longitude,
        latitude,
        car,
        className,
        header
      });
    },
    className: "rounded bg-green-500 hover:bg-green-600 text-white px-4 py-2 my-2 text-sm"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
    className: "material-icons text-xs"
  }, "build"), ' ', "Request Service"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
    className: "py-5 border-b border-gray-300 text-center text-blue-500 font-bold"
  }, "Change Tire"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
    className: "py-5 border-b border-gray-300 text-center"
  }, "-"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
    className: "py-5 border-b border-gray-300 text-center"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
    className: "rounded bg-green-500 hover:bg-green-600 text-white px-4 py-2 my-2 text-sm"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
    className: "material-icons text-xs"
  }, "build"), ' ', "Request Service"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
    className: "py-5 border-b border-gray-300 text-center text-blue-500 font-bold"
  }, "Change Battery"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
    className: "py-5 border-b border-gray-300 text-center"
  }, "-"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
    className: "py-5 border-b border-gray-300 text-center"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
    className: "rounded bg-green-500 hover:bg-green-600 text-white px-4 py-2 my-2 text-sm"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
    className: "material-icons text-xs"
  }, "build"), ' ', "Request Service"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
    className: "py-5 border-b border-gray-300 text-center text-blue-500 font-bold"
  }, "Other"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
    className: "py-5 border-b border-gray-300 text-center"
  }, "-"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
    className: "py-5 border-b border-gray-300 text-center"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "my-2"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__["Link"], {
    to: "#",
    className: "rounded bg-green-500 hover:bg-green-600 text-white px-4 py-2 text-sm"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
    className: "material-icons text-xs"
  }, "build"), ' ', "Request Service"))))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_9__["CollapsibleCard"], {
    className: "mb-5",
    padding: "false",
    title: "List of Schedules",
    subTitle: "You can only make requests if the expected schedule is less than a year."
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("table", {
    className: "w-full"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("thead", {
    className: "border-t border-b border-gray-300 bg-gray-200"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("th", {
    className: "py-2"
  }, "Mileage"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("th", {
    className: "py-2"
  }, "Date"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("th", {
    className: "py-2"
  }, "Action"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tbody", null, car_sched && car_sched.map((item, idx) => {
    const moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

    const {
      schedule,
      car_id,
      type,
      service_id,
      slug,
      mileage
    } = item || {};
    const className = "rounded-lg hidden md:block w-1/2 lg:w-2/3 overflow-visible";
    const header = "Requesting for PMS ".concat(mileage, " km");
    return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tr", {
      key: idx
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
      className: "py-5 border-b border-gray-300 text-center"
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_number_format__WEBPACK_IMPORTED_MODULE_10__["default"], {
      value: mileage,
      displayType: 'text',
      thousandSeparator: true,
      suffix: ' km',
      renderText: value => react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, value)
    })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
      className: "py-5 border-b border-gray-300 text-center"
    }, moment(item.schedule).format('MMMM Do YYYY'), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
      className: "text-sm text-gray-500"
    }, "Approximately ", moment(schedule, "YYYYMMDD").fromNow())), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
      className: "py-5 border-b border-gray-300 text-center"
    }, idx > 1 ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
      className: "rounded bg-gray-500 cursor-not-allowed text-white px-4 py-2 my-2 text-sm"
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
      className: "material-icons text-xs"
    }, "build"), ' ', "Request PMS") : markActive(mileage, {
      schedule,
      car_id,
      type,
      service_id,
      slug,
      mileage,
      className,
      header
    })));
  }))))))));
}

__signature__(VehicleScheduleComponent, "useState{[request, setRequest]}\nuseModal{{ showModal }}\nuseEffect{}", () => [react_context_modals__WEBPACK_IMPORTED_MODULE_7__["useModal"]]);

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(state => ({
  schedules: Object(store_selectors_schedules__WEBPACK_IMPORTED_MODULE_13__["selectAllSchedules"])(state),
  user: Object(store_selectors_session__WEBPACK_IMPORTED_MODULE_14__["currentUserSelector"])(state)
}), dispatch => ({
  getSchedules: slug => dispatch(Object(store_action_creators_schedules__WEBPACK_IMPORTED_MODULE_15__["getSchedules"])(slug))
}))(VehicleScheduleComponent);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(RequestChangeOilModal, "RequestChangeOilModal", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Vehicles/VehicleSchedule.jsx");
  reactHotLoader.register(RequestPmsModal, "RequestPmsModal", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Vehicles/VehicleSchedule.jsx");
  reactHotLoader.register(Toast, "Toast", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Vehicles/VehicleSchedule.jsx");
  reactHotLoader.register(Alert, "Alert", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Vehicles/VehicleSchedule.jsx");
  reactHotLoader.register(VehicleScheduleComponent, "VehicleScheduleComponent", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Vehicles/VehicleSchedule.jsx");
  reactHotLoader.register(_default, "default", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Vehicles/VehicleSchedule.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/store/action-creators/schedules/index.js":
/*!**********************************************************************!*\
  !*** ./resources/assets/js/store/action-creators/schedules/index.js ***!
  \**********************************************************************/
/*! exports provided: saveSchedule, getSchedules, createSchedule, getSchedule, updateSchedule, deleteSchedule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _schedules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedules */ "./resources/assets/js/store/action-creators/schedules/schedules.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveSchedule", function() { return _schedules__WEBPACK_IMPORTED_MODULE_0__["saveSchedule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSchedules", function() { return _schedules__WEBPACK_IMPORTED_MODULE_0__["getSchedules"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSchedule", function() { return _schedules__WEBPACK_IMPORTED_MODULE_0__["createSchedule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSchedule", function() { return _schedules__WEBPACK_IMPORTED_MODULE_0__["getSchedule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateSchedule", function() { return _schedules__WEBPACK_IMPORTED_MODULE_0__["updateSchedule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteSchedule", function() { return _schedules__WEBPACK_IMPORTED_MODULE_0__["deleteSchedule"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



/***/ }),

/***/ "./resources/assets/js/store/action-creators/schedules/schedules.js":
/*!**************************************************************************!*\
  !*** ./resources/assets/js/store/action-creators/schedules/schedules.js ***!
  \**************************************************************************/
/*! exports provided: getSchedules, getSchedule, createSchedule, updateSchedule, deleteSchedule, saveSchedule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchedules", function() { return getSchedules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchedule", function() { return getSchedule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSchedule", function() { return createSchedule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSchedule", function() { return updateSchedule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteSchedule", function() { return deleteSchedule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveSchedule", function() { return saveSchedule; });
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




const getSchedules = slug => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])('get-schedules', () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/car-schedules/".concat(slug))));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["scheduleActions"].ADD_SCHEDULES,
    schedules: response.data.data
  });
};
const getSchedule = slug => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])("get-schedule-".concat(slug), () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/car-schedules/schedule/".concat(slug))));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["scheduleActions"].GET_SCHEDULE,
    schedules: response.data.data
  });
};
const createSchedule = data => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])('create-schedule', () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/car-schedules", data)));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["scheduleActions"].ADD_SCHEDULE,
    schedules: response.data.data
  });
};
const updateSchedule = data => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])("update-schedule-".concat(data.slug), () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/car-schedules/".concat(data.slug), data)));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["scheduleActions"].UPDATE_SCHEDULE,
    schedules: response.data.data
  });
};
const deleteSchedule = slug => async dispatch => {
  await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])("update-schedule-".concat(slug), () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("/api/car-schedules/".concat(slug))));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["scheduleActions"].DELETE_SCHEDULE,
    slug
  });
};
const saveSchedule = scheduleData => async dispatch => {
  const {
    slug
  } = scheduleData;
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])('save-schedule-settings', () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/car-schedules/".concat(slug), scheduleData)));
  return response;
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getSchedules, "getSchedules", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/schedules/schedules.js");
  reactHotLoader.register(getSchedule, "getSchedule", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/schedules/schedules.js");
  reactHotLoader.register(createSchedule, "createSchedule", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/schedules/schedules.js");
  reactHotLoader.register(updateSchedule, "updateSchedule", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/schedules/schedules.js");
  reactHotLoader.register(deleteSchedule, "deleteSchedule", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/schedules/schedules.js");
  reactHotLoader.register(saveSchedule, "saveSchedule", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/schedules/schedules.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/store/action-creators/userRequests/index.js":
/*!*************************************************************************!*\
  !*** ./resources/assets/js/store/action-creators/userRequests/index.js ***!
  \*************************************************************************/
/*! exports provided: saveRequest, getRequests, createRequest, getRequest, updateRequest, deleteRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _userRequests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userRequests */ "./resources/assets/js/store/action-creators/userRequests/userRequests.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveRequest", function() { return _userRequests__WEBPACK_IMPORTED_MODULE_0__["saveRequest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRequests", function() { return _userRequests__WEBPACK_IMPORTED_MODULE_0__["getRequests"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRequest", function() { return _userRequests__WEBPACK_IMPORTED_MODULE_0__["createRequest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRequest", function() { return _userRequests__WEBPACK_IMPORTED_MODULE_0__["getRequest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateRequest", function() { return _userRequests__WEBPACK_IMPORTED_MODULE_0__["updateRequest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteRequest", function() { return _userRequests__WEBPACK_IMPORTED_MODULE_0__["deleteRequest"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



/***/ }),

/***/ "./resources/assets/js/store/action-creators/userRequests/userRequests.js":
/*!********************************************************************************!*\
  !*** ./resources/assets/js/store/action-creators/userRequests/userRequests.js ***!
  \********************************************************************************/
/*! exports provided: getRequests, getRequest, createRequest, updateRequest, deleteRequest, saveRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRequests", function() { return getRequests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRequest", function() { return getRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRequest", function() { return createRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateRequest", function() { return updateRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteRequest", function() { return deleteRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveRequest", function() { return saveRequest; });
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




const getRequests = slug => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])('get-requests', () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/requests")));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["userRequestActions"].ADD_REQUESTS,
    requests: response.data.data
  });
};
const getRequest = slug => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])("get-request-".concat(slug), () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/requests/request/".concat(slug))));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["userRequestActions"].GET_REQUEST,
    requests: response.data.data
  });
};
const createRequest = data => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])('create-request', () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/requests", data)));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["userRequestActions"].ADD_REQUEST,
    requests: response.data.data
  });
};
const updateRequest = data => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])("update-request-".concat(data.slug), () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/requests/".concat(data.slug), data)));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["userRequestActions"].UPDATE_REQUEST,
    requests: response.data.data
  });
};
const deleteRequest = slug => async dispatch => {
  await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])("update-request-".concat(slug), () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("/api/requests/".concat(slug))));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["userRequestActions"].DELETE_REQUEST,
    slug
  });
};
const saveRequest = requestData => async dispatch => {
  const {
    slug
  } = requestData;
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])('save-request-settings', () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/requests/".concat(slug), requestData)));
  return response;
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getRequests, "getRequests", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/userRequests/userRequests.js");
  reactHotLoader.register(getRequest, "getRequest", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/userRequests/userRequests.js");
  reactHotLoader.register(createRequest, "createRequest", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/userRequests/userRequests.js");
  reactHotLoader.register(updateRequest, "updateRequest", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/userRequests/userRequests.js");
  reactHotLoader.register(deleteRequest, "deleteRequest", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/userRequests/userRequests.js");
  reactHotLoader.register(saveRequest, "saveRequest", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/userRequests/userRequests.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/store/selectors/schedules.js":
/*!**********************************************************!*\
  !*** ./resources/assets/js/store/selectors/schedules.js ***!
  \**********************************************************/
/*! exports provided: selectAllSchedules, selectScheduleDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllSchedules", function() { return selectAllSchedules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectScheduleDetails", function() { return selectScheduleDetails; });
/* harmony import */ var normalizr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalizr */ "./node_modules/normalizr/dist/normalizr.es.js");
/* harmony import */ var store_schemas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! store/schemas */ "./resources/assets/js/store/schemas.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



const selectAllSchedules = state => {
  const dnEntities = Object(normalizr__WEBPACK_IMPORTED_MODULE_0__["denormalize"])({
    schedules: Object.keys(state.entities.schedules)
  }, store_schemas__WEBPACK_IMPORTED_MODULE_1__["entities"], state.entities);
  return dnEntities.schedules;
};
const selectScheduleDetails = (state, id) => {
  const dnEntities = Object(normalizr__WEBPACK_IMPORTED_MODULE_0__["denormalize"])({
    schedules: [id]
  }, store_schemas__WEBPACK_IMPORTED_MODULE_1__["entities"], state.entities);
  return dnEntities.schedules;
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(selectAllSchedules, "selectAllSchedules", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/selectors/schedules.js");
  reactHotLoader.register(selectScheduleDetails, "selectScheduleDetails", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/selectors/schedules.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5tYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL1ZlaGljbGVzL0NoYW5nZS1PaWwvQnJhbmQuanN4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvVmVoaWNsZXMvQ2hhbmdlLU9pbC9Nb2RhbC5qc3giLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9WZWhpY2xlcy9DaGFuZ2UtT2lsL2luZGV4LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvVmVoaWNsZXMvUG1zLU1vZGFsL0NoZWNrTGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9WZWhpY2xlcy9QbXMtTW9kYWwvTW9kYWwuanN4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvVmVoaWNsZXMvUG1zLU1vZGFsL1JlcGxhY2VtZW50cy5qc3giLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9WZWhpY2xlcy9QbXMtTW9kYWwvU2NoZWR1bGUuanN4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvVmVoaWNsZXMvUG1zLU1vZGFsL2luZGV4LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvVmVoaWNsZXMvVmVoaWNsZVNjaGVkdWxlLmpzeCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL2FjdGlvbi1jcmVhdG9ycy9zY2hlZHVsZXMvc2NoZWR1bGVzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvYWN0aW9uLWNyZWF0b3JzL3VzZXJSZXF1ZXN0cy91c2VyUmVxdWVzdHMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9zZWxlY3RvcnMvc2NoZWR1bGVzLmpzIl0sIm5hbWVzIjpbIkJyYW5kU2VsZWN0IiwidmFsdWVzIiwic2V0VmFsdWVzIiwiaGFuZGxlQ2hhbmdlIiwic3RlcCIsInByb2dyZXNzIiwibmV4dFN0ZXAiLCJwcmV2aW91c1N0ZXAiLCJzd2l0Y2hlciIsInNldFN3aXRjaCIsIlJlYWN0IiwidXNlU3RhdGUiLCJoYW5kbGVTd2l0Y2hDaGFuZ2UiLCJldmVudCIsInVzZUVmZmVjdCIsInByZWZlcnJlbmNlIiwib3RoZXJfYnJhbmRzIiwicHJlZmVycmVkX2JyYW5kIiwiZSIsInVzZUZvcm0iLCJpbml0aWFsVmFsdWVzIiwib25TdWJtaXQiLCJ2YWxpZGF0ZSIsInRvdWNoZWRWYWx1ZXMiLCJzZXRUb3VjaGVkVmFsdWVzIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwidGFyZ2V0IiwidmFsdWUiLCJuYW1lIiwiaGFuZGxlQmx1ciIsImhhbmRsZVN1Ym1pdCIsInNlbGVjdCIsInNldFNlbGVjdCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTZWxlY3RDaGFuZ2UiLCJsYWJlbCIsInNldFN0ZXAiLCJzZXRQcm9ncmVzcyIsInByZXZlbnREZWZhdWx0IiwicGFnZSIsIkNoYW5nZU9pbENvbXBvbmVudCIsImNvbXB1dGVQcm9ncmVzcyIsImZpcnN0Iiwic2Vjb25kIiwidGhpcmQiLCJ0b3RhbCIsImhlYWRlciIsIndpZHRoIiwiQ2hlY2tMaXN0IiwiY2hlY2tfaXRlbXMiLCJjbGVhbl9pdGVtcyIsImNoYW5nZV9pdGVtcyIsIm1hcCIsIml0ZW0iLCJpZHgiLCJvcHRpb25UeXBlcyIsInR5cGVfaWQiLCJuZXdMYWJlbCIsImZpbHRlciIsIm9wdGlvbiIsIlBtc01vZGFsQ29tcG9uZW50Iiwic2V0Q2hlY2siLCJzZXRDbGVhbiIsInNldENoYW5nZSIsImZldGNoUG1zIiwicmVzdWx0IiwiYXhpb3MiLCJzZXJ2aWNlX2lkIiwiZGF0YSIsIlJlcGxhY2VtZW50cyIsInR5cGVzIiwiZmllbGRzIiwic2V0RmllbGRzIiwicmVwbGFjZW1lbnRzIiwiY291bnQiLCJsZW5ndGgiLCJjaGVja0Vycm9ycyIsImkiLCJsaXN0Iiwib2VtIiwicmVwbGFjZW1lbnQiLCJyZWNvbW1lbmRhdGlvbiIsInR5cGUiLCJzZXRBbGxUb09lbSIsInB1c2giLCJzZXRBbGxUb1JlcGxhY2VtZW50Iiwic2V0QWxsVG9SZWNvbW1lbmRhdGlvbiIsIlNjaGVkdWxlIiwiY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIiwic3RyaW5nIiwidG9VcHBlckNhc2UiLCJzbGljZSIsInN0cmlwU3RyaW5nIiwicmVwbGFjZSIsIm9pbF90eXBlcyIsInJldCIsIkFycmF5IiwiaXNBcnJheSIsInZhbCIsInN0cmlwTGFiZWwiLCJvaWwiLCJzZXRPaWwiLCJvaWxfdHlwZSIsInByZWZlcnJlZF9zY2hlZHVsZSIsIlJlcXVlc3RDaGFuZ2VPaWxNb2RhbCIsImNvbXBvc2UiLCJjb25uZWN0Iiwic3RhdGUiLCJvd25Qcm9wcyIsImRpc3BhdGNoIiwiaGlkZU1vZGFsIiwiY3JlYXRlUmVxdWVzdEFjdGlvbiIsImdldFJlcXVlc3RzQWN0aW9uIiwiQWxlcnQiLCJyZWR1eEZvcm0iLCJmb3JtIiwiUmVxdWVzdFBtc01vZGFsIiwiY3JlYXRlUmVxdWVzdCIsImdldFJlcXVlc3QiLCJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGl0bGUiLCJmaXJlIiwiVmVoaWNsZVNjaGVkdWxlQ29tcG9uZW50IiwiZ2V0U2NoZWR1bGVzIiwiZGVsZXRlU2NoZWR1bGUiLCJzY2hlZHVsZXMiLCJ1c2VyIiwibWF0Y2giLCJ1c2VyX3R5cGUiLCJxdWVyeSIsInBhcmFtcyIsInNsdWciLCJyZXF1ZXN0Iiwic2V0UmVxdWVzdCIsInNob3dNb2RhbCIsInVzZU1vZGFsIiwicG9wdWxhdGVTY2hlZHVsZXMiLCJmZXRjaFJlcXVlc3QiLCJhZGRpdGlvbmFsIiwibWlsZWFnZSIsInNjaGVkX2xpc3QiLCJyZXF1ZXN0X2RhdGEiLCJjYXJfc2NoZWQiLCJ2ZWhpY2xlIiwibWFrZV9pZCIsIm1vZGVsX2lkIiwidHJpbV9pZCIsImNhcl95ZWFyIiwiZW5naW5lX3R5cGUiLCJ0cmFuc21pc3Npb24iLCJ2aW4iLCJwbGF0ZV9udW1iZXIiLCJjdXJyZW50X21pbGVhZ2UiLCJhZGRyZXNzIiwiY2l0eSIsInppcCIsImxvbmdpdHVkZSIsImxhdGl0dWRlIiwiY2FyIiwiY29sb3IiLCJsYXN0X3NlcnZpY2VkIiwiZGF0ZV9wdXJjaGFzZWQiLCJ1cGRhdGVkX2F0IiwibWFya0FjdGl2ZSIsImRlZmF1bHRQcm9maWxlSW1hZ2UiLCJjbGFzc05hbWUiLCJtb21lbnQiLCJyZXF1aXJlIiwic2NoZWR1bGUiLCJjYXJfaWQiLCJmb3JtYXQiLCJmcm9tTm93Iiwic2VsZWN0QWxsU2NoZWR1bGVzIiwiY3VycmVudFVzZXJTZWxlY3RvciIsImdldFNjaGVkdWxlc0FjdGlvbiIsInJlc3BvbnNlIiwibWFrZVJlcXVlc3QiLCJnZXQiLCJhY3Rpb25zIiwiQUREX1NDSEVEVUxFUyIsImdldFNjaGVkdWxlIiwiR0VUX1NDSEVEVUxFIiwiY3JlYXRlU2NoZWR1bGUiLCJwb3N0IiwiQUREX1NDSEVEVUxFIiwidXBkYXRlU2NoZWR1bGUiLCJwdXQiLCJVUERBVEVfU0NIRURVTEUiLCJkZWxldGUiLCJERUxFVEVfU0NIRURVTEUiLCJzYXZlU2NoZWR1bGUiLCJzY2hlZHVsZURhdGEiLCJnZXRSZXF1ZXN0cyIsIkFERF9SRVFVRVNUUyIsInJlcXVlc3RzIiwiR0VUX1JFUVVFU1QiLCJBRERfUkVRVUVTVCIsInVwZGF0ZVJlcXVlc3QiLCJVUERBVEVfUkVRVUVTVCIsImRlbGV0ZVJlcXVlc3QiLCJERUxFVEVfUkVRVUVTVCIsInNhdmVSZXF1ZXN0IiwicmVxdWVzdERhdGEiLCJkbkVudGl0aWVzIiwiZGVub3JtYWxpemUiLCJPYmplY3QiLCJrZXlzIiwiZW50aXRpZXMiLCJlbnRpdGllc1NjaGVtYSIsInNl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YTswQkFhQUUsYTswQkFXQUUsVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RGI7QUFFQTtBQUVPLE1BQU03QixrQkFBa0IsR0FBR3ZFLEtBQUssSUFBSTtBQUN6QyxRQUFNc0csVUFBVSxHQUFHQyw2REFBVyxDQUM1QjtBQUFFL0UsYUFBUyxFQUFFZ0YsTUFBTSxDQUFDQyxJQUFQLENBQVl6RyxLQUFLLENBQUMwRyxRQUFOLENBQWVsRixTQUEzQjtBQUFiLEdBRDRCLEVBRTVCbUYsc0RBRjRCLEVBRzVCM0csS0FBSyxDQUFDMEcsUUFIc0IsQ0FBOUI7QUFNQSxTQUFPSixVQUFVLENBQUM5RSxTQUFsQjtBQUNELENBUk07QUFVQSxNQUFNb0YscUJBQXFCLEdBQUcsQ0FBQzVHLEtBQUQsRUFBUTZHLEVBQVIsS0FBZTtBQUVsRCxRQUFNUCxVQUFVLEdBQUdDLDZEQUFXLENBQzVCO0FBQUUvRSxhQUFTLEVBQUUsQ0FBQ3FGLEVBQUQ7QUFBYixHQUQ0QixFQUU1QkYsc0RBRjRCLEVBRzVCM0csS0FBSyxDQUFDMEcsUUFIc0IsQ0FBOUI7QUFNQSxTQUFPSixVQUFVLENBQUM5RSxTQUFsQjtBQUNELENBVE07Ozs7Ozs7Ozs7MEJBVk0rQyxrQjswQkFVQXFDLHFCIiwiZmlsZSI6ImpzLzExLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xudmFyIGZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIGFkdmFuY2VTdHJpbmdJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZHZhbmNlLXN0cmluZy1pbmRleCcpO1xudmFyIHJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcblxuLy8gQEBtYXRjaCBsb2dpY1xuZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMoJ21hdGNoJywgMSwgZnVuY3Rpb24gKE1BVENILCBuYXRpdmVNYXRjaCwgbWF5YmVDYWxsTmF0aXZlKSB7XG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUubWF0Y2hgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUubWF0Y2hcbiAgICBmdW5jdGlvbiBtYXRjaChyZWdleHApIHtcbiAgICAgIHZhciBPID0gcmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKTtcbiAgICAgIHZhciBtYXRjaGVyID0gcmVnZXhwID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHJlZ2V4cFtNQVRDSF07XG4gICAgICByZXR1cm4gbWF0Y2hlciAhPT0gdW5kZWZpbmVkID8gbWF0Y2hlci5jYWxsKHJlZ2V4cCwgTykgOiBuZXcgUmVnRXhwKHJlZ2V4cClbTUFUQ0hdKFN0cmluZyhPKSk7XG4gICAgfSxcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQG1hdGNoXWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQG1hdGNoXG4gICAgZnVuY3Rpb24gKHJlZ2V4cCkge1xuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShuYXRpdmVNYXRjaCwgcmVnZXhwLCB0aGlzKTtcbiAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcblxuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QocmVnZXhwKTtcbiAgICAgIHZhciBTID0gU3RyaW5nKHRoaXMpO1xuXG4gICAgICBpZiAoIXJ4Lmdsb2JhbCkgcmV0dXJuIHJlZ0V4cEV4ZWMocngsIFMpO1xuXG4gICAgICB2YXIgZnVsbFVuaWNvZGUgPSByeC51bmljb2RlO1xuICAgICAgcngubGFzdEluZGV4ID0gMDtcbiAgICAgIHZhciBBID0gW107XG4gICAgICB2YXIgbiA9IDA7XG4gICAgICB2YXIgcmVzdWx0O1xuICAgICAgd2hpbGUgKChyZXN1bHQgPSByZWdFeHBFeGVjKHJ4LCBTKSkgIT09IG51bGwpIHtcbiAgICAgICAgdmFyIG1hdGNoU3RyID0gU3RyaW5nKHJlc3VsdFswXSk7XG4gICAgICAgIEFbbl0gPSBtYXRjaFN0cjtcbiAgICAgICAgaWYgKG1hdGNoU3RyID09PSAnJykgcngubGFzdEluZGV4ID0gYWR2YW5jZVN0cmluZ0luZGV4KFMsIHRvTGVuZ3RoKHJ4Lmxhc3RJbmRleCksIGZ1bGxVbmljb2RlKTtcbiAgICAgICAgbisrO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG4gPT09IDAgPyBudWxsIDogQTtcbiAgICB9XG4gIF07XG59KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBTd2l0Y2ggZnJvbSBcInJlYWN0LXN3aXRjaFwiXG5cbmV4cG9ydCBjb25zdCBCcmFuZFNlbGVjdCA9ICh7IHZhbHVlcywgc2V0VmFsdWVzLCBoYW5kbGVDaGFuZ2UsIHN0ZXAsIHByb2dyZXNzLCBuZXh0U3RlcCwgcHJldmlvdXNTdGVwIH0pID0+IHtcbiAgICBjb25zdCBbc3dpdGNoZXIsIHNldFN3aXRjaF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBoYW5kbGVTd2l0Y2hDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgc2V0U3dpdGNoKHN3aXRjaGVyID09PSB0cnVlID8gZmFsc2UgOiB0cnVlKVxuICAgIH1cblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldFZhbHVlcyh7XG4gICAgICAgICAgICAuLi52YWx1ZXMsXG4gICAgICAgICAgICBwcmVmZXJyZW5jZTogW3tcbiAgICAgICAgICAgICAgICBvdGhlcl9icmFuZHM6IHN3aXRjaGVyXG4gICAgICAgICAgICB9XVxuICAgICAgICB9KVxuICAgIH0sIFtzd2l0Y2hlcl0pXG4gICAgcmV0dXJuKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTEwIHB5LTUgcHQtMFwiPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi01XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0yeGwgbXktNVwiPlByZWZlcnJlZCBPaWwgQnJhbmQgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwXCI+Kjwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiU3BlY2lmeSB5b3VyIHByZWZlcnJlZCBvaWwuIElmIGFueT9cIiB2YWx1ZT17dmFsdWVzLnByZWZlcnJlZF9icmFuZH0gb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSl9IGNsYXNzTmFtZT1cInAtMiByb3VuZGVkIHctZnVsbCBib3JkZXIgYm9yZGVyLWdyYXktMzAwXCIgdHlwZT1cInRleHRcIiBuYW1lPVwicHJlZmVycmVkX2JyYW5kXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtMnhsIG15LTVcIj5PdGhlciBQcmVmZXJyZW5jZSA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+KE9wdGlvbmFsKTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPFN3aXRjaCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuY2hlY2tlZEljb249e2ZhbHNlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWRJY29uPXtmYWxzZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlU3dpdGNoQ2hhbmdlKGV2ZW50KX0gXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzd2l0Y2hlcn0gXG4gICAgICAgICAgICAgICAgICAgIC8+IFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWwtNSB0ZXh0LWdyYXktODAwIGFsaWduLXRvcFwiIGh0bWxGb3I9XCJ0eXBlXCI+T3BlbiBmb3Igb3RoZXIgYnJhbmRzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC01IHBiLTUgYm9yZGVyLXQgdy1mdWxsIHB4LTEwXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcmV2aW91c1N0ZXB9IGNsYXNzTmFtZT1cImZsb2F0LWxlZnQgcm91bmRlZCByb3VuZGVkLXItMCB0ZXh0LXNtIGJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHB4LTUgcHktMiB0ZXh0LXdoaXRlIG1iLTVcIj5QcmV2aW91czwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHQgcm91bmRlZCB0ZXh0LXNtIGJnLWdyZWVuLTUwMCBob3ZlcjpiZy1ncmVlbi03MDAgcHgtNSBweS0yIHRleHQtd2hpdGUgbWItNVwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59IiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyBTY2hlZHVsZSB9IGZyb20gJy4uL1Btcy1Nb2RhbCdcbmltcG9ydCB7IEJyYW5kU2VsZWN0IH0gZnJvbSAnLi9CcmFuZCdcbmV4cG9ydCBjb25zdCB1c2VGb3JtID0gKHsgaW5pdGlhbFZhbHVlcywgb25TdWJtaXQsIHZhbGlkYXRlIH0pID0+IHtcbiAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IFJlYWN0LnVzZVN0YXRlKGluaXRpYWxWYWx1ZXMgfHwge30pXG5cbiAgY29uc3QgW3RvdWNoZWRWYWx1ZXMsIHNldFRvdWNoZWRWYWx1ZXNdID0gUmVhY3QudXNlU3RhdGUoe30pXG4gIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSBSZWFjdC51c2VTdGF0ZSh7fSlcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0XG4gICAgY29uc3QgdmFsdWUgPSB0YXJnZXQudmFsdWVcbiAgICBjb25zdCBuYW1lID0gdGFyZ2V0Lm5hbWVcbiAgICBzZXRWYWx1ZXMoe1xuICAgICAgLi4udmFsdWVzLFxuICAgICAgW25hbWVdOiB2YWx1ZVxuICAgIH0pXG4gIH1cblxuICBjb25zdCBoYW5kbGVCbHVyID0gZXZlbnQgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldFxuICAgIGNvbnN0IG5hbWUgPSB0YXJnZXQubmFtZVxuICAgIHNldFRvdWNoZWRWYWx1ZXMoe1xuICAgICAgLi4udG91Y2hlZFZhbHVlcyxcbiAgICAgIFtuYW1lXTogdHJ1ZVxuICAgIH0pXG4gICAgY29uc3QgZSA9IHZhbGlkYXRlKHZhbHVlcylcbiAgICBzZXRFcnJvcnMoe1xuICAgICAgLi4uZXJyb3JzLFxuICAgICAgLi4uZVxuICAgIH0pXG4gIH1cblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBldmVudCA9PiB7XG5cbiAgICBjb25zdCBlID0gdmFsaWRhdGUodmFsdWVzKVxuICAgIHNldEVycm9ycyh7XG4gICAgICAuLi5lcnJvcnMsXG4gICAgICAuLi5lXG4gICAgfSlcblxuICAgIG9uU3VibWl0KHsgLi4udmFsdWVzLCBlIH0pXG4gIH1cblxuICBjb25zdCBbc2VsZWN0LCBzZXRTZWxlY3RdID0gUmVhY3QudXNlU3RhdGUoW10pXG4gIGNvbnNvbGUubG9nKHNlbGVjdClcbiAgY29uc3QgaGFuZGxlU2VsZWN0Q2hhbmdlID0gZXZlbnQgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudmFsdWVcbiAgICBjb25zdCBsYWJlbCA9IGV2ZW50LmxhYmVsXG4gICAgY29uc3QgbmFtZSA9ICd0eXBlX2lkJ1xuICAgIHNldFZhbHVlcyh7XG4gICAgICAuLi52YWx1ZXMsXG4gICAgICBbbmFtZV06IHZhbHVlXG4gICAgfSlcbiAgICBzZXRTZWxlY3Qoe1xuICAgICAgdmFsdWU6IHZhbHVlLCBsYWJlbDogbGFiZWxcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgW3N0ZXAsIHNldFN0ZXBdID0gdXNlU3RhdGUoMSlcbiAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSB1c2VTdGF0ZSh7XG4gICAgMTogZmFsc2UsXG4gICAgMjogZmFsc2UsXG4gICAgMzogZmFsc2VcbiAgfSlcbiAgXG4gIGNvbnN0IG5leHRTdGVwID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgcGFnZSA9IHN0ZXBcbiAgICBzZXRQcm9ncmVzcyh7XG4gICAgICAuLi5wcm9ncmVzcyxcbiAgICAgIFtwYWdlXTogdHJ1ZVxuICAgIH0pXG5cbiAgICBzZXRTdGVwKHN0ZXAgKyAxKVxuICB9XG5cbiAgY29uc3QgcHJldmlvdXNTdGVwID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgc2V0U3RlcChzdGVwIC0gMSlcbiAgfVxuICByZXR1cm4ge1xuICAgIHZhbHVlcyxcbiAgICBzZXRWYWx1ZXMsXG4gICAgdG91Y2hlZFZhbHVlcyxcbiAgICBlcnJvcnMsXG4gICAgaGFuZGxlQ2hhbmdlLFxuICAgIGhhbmRsZVN1Ym1pdCxcbiAgICBoYW5kbGVCbHVyLFxuICAgIGhhbmRsZVNlbGVjdENoYW5nZSxcbiAgICBzZWxlY3QsXG4gICAgc3RlcCxcbiAgICBzZXRTdGVwLFxuICAgIHByb2dyZXNzLFxuICAgIG5leHRTdGVwLFxuICAgIHByZXZpb3VzU3RlcFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBDaGFuZ2VPaWxDb21wb25lbnQgPSAoeyBvblN1Ym1pdCwgaW5pdGlhbFZhbHVlcyB9KSA9PiB7XG4gICAgaW5pdGlhbFZhbHVlc1snb2lsX3R5cGUnXSA9ICcnXG4gICAgaW5pdGlhbFZhbHVlc1sncHJlZmVycmVkX3NjaGVkdWxlJ10gPSAnJ1xuICAgIGNvbnN0IHsgXG4gICAgICB2YWx1ZXMsXG4gICAgICBzZXRWYWx1ZXMsIFxuICAgICAgdG91Y2hlZFZhbHVlcywgXG4gICAgICBlcnJvcnMsIFxuICAgICAgaGFuZGxlQ2hhbmdlLCBcbiAgICAgIGhhbmRsZVN1Ym1pdCwgXG4gICAgICBoYW5kbGVCbHVyLCBcbiAgICAgIGhhbmRsZVNlbGVjdENoYW5nZSwgXG4gICAgICBzZWxlY3QsICAgICBcbiAgICAgIHN0ZXAsXG4gICAgICBzZXRTdGVwLFxuICAgICAgcHJvZ3Jlc3MsXG4gICAgICBuZXh0U3RlcCxcbiAgICAgIHByZXZpb3VzU3RlcCB9ID0gdXNlRm9ybSh7XG4gICAgICBpbml0aWFsVmFsdWVzLFxuICAgICAgb25TdWJtaXQsXG4gICAgICB2YWxpZGF0ZSh2YWx1ZXMpIHtcbiAgICAgICAgY29uc3QgZXJyb3JzID0ge31cbiAgICBcbiAgICAgICAgaWYgKHZhbHVlcy5uYW1lID09PSBcIlwiKSB7XG4gICAgICAgICAgZXJyb3JzLm5hbWUgPSBcIlBsZWFzZSBzcGVjaWZ5IGEgbmFtZVwiXG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgcmV0dXJuIGVycm9yc1xuICAgICAgfVxuICAgIH0pXG4gICAgZnVuY3Rpb24gY29tcHV0ZVByb2dyZXNzKCkge1xuICAgICAgY29uc3QgZmlyc3QgPSBwcm9ncmVzc1sxXSA9PSB0cnVlID8gMzUgOiAwXG4gICAgICBjb25zdCBzZWNvbmQgPSBwcm9ncmVzc1syXSA9PSB0cnVlID8gMzUgOiAwXG4gICAgICBjb25zdCB0aGlyZCA9IHByb2dyZXNzWzNdID09IHRydWUgPyAzMCA6IDBcbiAgICAgIGNvbnN0IHRvdGFsID0gZmlyc3QgKyBzZWNvbmRcbiAgICAgIHJldHVybiAgYCR7dG90YWx9JWBcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3Jvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC01IHBiLTUgYm9yZGVyLWIgdy1mdWxsXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMTAgdGV4dC1iYXNlIHRleHQtZ3JheS03MDBcIj57dmFsdWVzLmhlYWRlcn08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTEwIHB5LTUgcGItMFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzLWxhYmVsIGZsb2F0LWxlZnQgcHgtMCBwdC0wXCI+Q29tcGxldGlvbiBQcm9ncmVzczwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0IHB4LTAgcHktMFwiPntzdGVwfS8zPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cgdy1mdWxsIGJnLWdyYXktMzAwIG15LTNcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgdGV4dC14cyBsZWFkaW5nLW5vbmUgcHktMSB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCIgc3R5bGU9e3sgd2lkdGg6IGNvbXB1dGVQcm9ncmVzcygpIH19PjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge3N0ZXAgPT0gMSAmJlxuICAgICAgICAgICAgICAgIDxTY2hlZHVsZVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9e3ZhbHVlc30gXG4gICAgICAgICAgICAgICAgICAgIHNldFZhbHVlcz17c2V0VmFsdWVzfVxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZX0gXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA9e3N0ZXB9XG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzPXtwcm9ncmVzc31cbiAgICAgICAgICAgICAgICAgICAgbmV4dFN0ZXA9e25leHRTdGVwfVxuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1N0ZXA9e3ByZXZpb3VzU3RlcH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAge3N0ZXAgPT0gMiAmJlxuICAgICAgICAgICAgICAgIDxCcmFuZFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9e3ZhbHVlc31cbiAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWVzPXtzZXRWYWx1ZXN9XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfSBcbiAgICAgICAgICAgICAgICAgICAgc3RlcD17c3RlcH1cbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3M9e3Byb2dyZXNzfVxuICAgICAgICAgICAgICAgICAgICBuZXh0U3RlcD17bmV4dFN0ZXB9XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzU3RlcD17cHJldmlvdXNTdGVwfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIClcbiAgICB9IiwiZXhwb3J0IHsgQ2hhbmdlT2lsQ29tcG9uZW50IH0gZnJvbSAnLi9Nb2RhbCdcbmV4cG9ydCB7IEJyYW5kU2VsZWN0IH0gZnJvbSAnLi9CcmFuZCciLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFN3aXRjaCBmcm9tIFwicmVhY3Qtc3dpdGNoXCJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmV4cG9ydCBjb25zdCBDaGVja0xpc3QgPSAoe1xuICAgIHZhbHVlcyxcbiAgICBzZXRWYWx1ZXMsXG4gICAgc3RlcCxcbiAgICBwcm9ncmVzcyxcbiAgICBuZXh0U3RlcCxcbiAgICBjaGVja19pdGVtcyxcbiAgICBjbGVhbl9pdGVtcyxcbiAgICBjaGFuZ2VfaXRlbXNcbn0pID0+IHtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTEwIHB5LTUgcHQtMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTUgYmctYmx1ZS03MDAgdGV4dC13aGl0ZSByb3VuZGVkIHRleHQtc21cIj5cbiAgICAgICAgICAgICAgICBUaGUgcmVjb21tZW5kYXRpb25zIGJlbG93IGFyZSBiYXNlZCBvbiBiZXN0IHByYWN0aWNlcy4gUmVmZXIgdG8geW91ciBvd25lcnMgbWFudWFsIG9yIHF1YWxpZmllZCB0ZWNobmljaWFuIGZvciB2ZWhpY2xlJ3Mgc3BlY2lmaWMgbWFpbnRlbmFuY2UgcmVxdWlyZW1lbnRzLlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC00XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGcgbXktM1wiPkNoZWNrPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1kaXNjXCI+XG4gICAgICAgICAgICAgICAgICAgIHtjaGVja19pdGVtcy5tYXAoKGl0ZW0sIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtbC01XCIga2V5PXtpZHh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXgtYXV0byB0ZXh0LXNtXCI+e2l0ZW19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGcgbXktM1wiPkNsZWFuPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1kaXNjXCI+XG4gICAgICAgICAgICAgICAgICAgIHtjbGVhbl9pdGVtcy5tYXAoKGl0ZW0sIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtbC01XCIga2V5PXtpZHh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXgtYXV0byB0ZXh0LXNtXCI+e2l0ZW19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGcgbXktM1wiPkNoYW5nZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZGlzY1wiPlxuICAgICAgICAgICAgICAgICAgICB7Y2hhbmdlX2l0ZW1zLm1hcCgoaXRlbSwgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1sLTVcIiBrZXk9e2lkeH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleC1hdXRvIHRleHQtc21cIj57aXRlbX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC01IHBiLTUgYm9yZGVyLXQgdy1mdWxsIHB4LTEwXCI+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtuZXh0U3RlcH0gY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHQgcm91bmRlZCB0ZXh0LXNtIGJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHB4LTUgcHktMiB0ZXh0LXdoaXRlIG1iLTVcIj5OZXh0PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59IiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyBDaGVja0xpc3QgfSBmcm9tICcuL0NoZWNrTGlzdCdcbmltcG9ydCB7IFNjaGVkdWxlIH0gZnJvbSAnLi9TY2hlZHVsZSdcbmltcG9ydCB7IFJlcGxhY2VtZW50cyB9IGZyb20gJy4vUmVwbGFjZW1lbnRzJ1xuZXhwb3J0IGNvbnN0IHVzZUZvcm0gPSAoeyBpbml0aWFsVmFsdWVzLCBvblN1Ym1pdCwgdmFsaWRhdGUgfSkgPT4ge1xuICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gUmVhY3QudXNlU3RhdGUoaW5pdGlhbFZhbHVlcyB8fCB7fSlcblxuICBjb25zdCBbdG91Y2hlZFZhbHVlcywgc2V0VG91Y2hlZFZhbHVlc10gPSBSZWFjdC51c2VTdGF0ZSh7fSlcbiAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IFJlYWN0LnVzZVN0YXRlKHt9KVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXRcbiAgICBjb25zdCB2YWx1ZSA9IHRhcmdldC52YWx1ZVxuICAgIGNvbnN0IG5hbWUgPSB0YXJnZXQubmFtZVxuICAgIHNldFZhbHVlcyh7XG4gICAgICAuLi52YWx1ZXMsXG4gICAgICBbbmFtZV06IHZhbHVlXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUJsdXIgPSBldmVudCA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0XG4gICAgY29uc3QgbmFtZSA9IHRhcmdldC5uYW1lXG4gICAgc2V0VG91Y2hlZFZhbHVlcyh7XG4gICAgICAuLi50b3VjaGVkVmFsdWVzLFxuICAgICAgW25hbWVdOiB0cnVlXG4gICAgfSlcbiAgICBjb25zdCBlID0gdmFsaWRhdGUodmFsdWVzKVxuICAgIHNldEVycm9ycyh7XG4gICAgICAuLi5lcnJvcnMsXG4gICAgICAuLi5lXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGV2ZW50ID0+IHtcblxuICAgIGNvbnN0IGUgPSB2YWxpZGF0ZSh2YWx1ZXMpXG4gICAgc2V0RXJyb3JzKHtcbiAgICAgIC4uLmVycm9ycyxcbiAgICAgIC4uLmVcbiAgICB9KVxuXG4gICAgb25TdWJtaXQoeyAuLi52YWx1ZXMsIGUgfSlcbiAgfVxuICBjb25zdCBvcHRpb25UeXBlcyA9IFtcbiAgICB7XG4gICAgICBsYWJlbDogJ0NhcicsXG4gICAgICB2YWx1ZTogMSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiAnVHJ1Y2snLFxuICAgICAgdmFsdWU6IDIsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogJ01vdG9yY3ljbGUnLFxuICAgICAgdmFsdWU6IDMsXG4gICAgfVxuICBdXG4gIGNvbnNvbGUubG9nKHZhbHVlcy50eXBlX2lkKVxuICBjb25zdCBuZXdMYWJlbCA9IG9wdGlvblR5cGVzLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLnZhbHVlID09IHZhbHVlcy50eXBlX2lkKVxuXG4gIGNvbnNvbGUubG9nKG5ld0xhYmVsWzBdKVxuICBjb25zdCBbc2VsZWN0LCBzZXRTZWxlY3RdID0gUmVhY3QudXNlU3RhdGUobmV3TGFiZWxbMF0pXG4gIGNvbnNvbGUubG9nKHNlbGVjdClcbiAgY29uc3QgaGFuZGxlU2VsZWN0Q2hhbmdlID0gZXZlbnQgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudmFsdWVcbiAgICBjb25zdCBsYWJlbCA9IGV2ZW50LmxhYmVsXG4gICAgY29uc3QgbmFtZSA9ICd0eXBlX2lkJ1xuICAgIHNldFZhbHVlcyh7XG4gICAgICAuLi52YWx1ZXMsXG4gICAgICBbbmFtZV06IHZhbHVlXG4gICAgfSlcbiAgICBzZXRTZWxlY3Qoe1xuICAgICAgdmFsdWU6IHZhbHVlLCBsYWJlbDogbGFiZWxcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgW3N0ZXAsIHNldFN0ZXBdID0gdXNlU3RhdGUoMSlcbiAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSB1c2VTdGF0ZSh7XG4gICAgMTogZmFsc2UsXG4gICAgMjogZmFsc2UsXG4gICAgMzogZmFsc2VcbiAgfSlcbiAgXG4gIGNvbnN0IG5leHRTdGVwID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgcGFnZSA9IHN0ZXBcbiAgICBzZXRQcm9ncmVzcyh7XG4gICAgICAuLi5wcm9ncmVzcyxcbiAgICAgIFtwYWdlXTogdHJ1ZVxuICAgIH0pXG5cbiAgICBzZXRTdGVwKHN0ZXAgKyAxKVxuICB9XG5cbiAgY29uc3QgcHJldmlvdXNTdGVwID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgc2V0U3RlcChzdGVwIC0gMSlcbiAgfVxuICByZXR1cm4ge1xuICAgIHZhbHVlcyxcbiAgICBzZXRWYWx1ZXMsXG4gICAgdG91Y2hlZFZhbHVlcyxcbiAgICBlcnJvcnMsXG4gICAgaGFuZGxlQ2hhbmdlLFxuICAgIGhhbmRsZVN1Ym1pdCxcbiAgICBoYW5kbGVCbHVyLFxuICAgIGhhbmRsZVNlbGVjdENoYW5nZSxcbiAgICBvcHRpb25UeXBlcyxcbiAgICBzZWxlY3QsXG4gICAgc3RlcCxcbiAgICBzZXRTdGVwLFxuICAgIHByb2dyZXNzLFxuICAgIG5leHRTdGVwLFxuICAgIHByZXZpb3VzU3RlcFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBQbXNNb2RhbENvbXBvbmVudCA9ICh7IG9uU3VibWl0LCBpbml0aWFsVmFsdWVzIH0pID0+IHtcbmluaXRpYWxWYWx1ZXNbJ29pbF90eXBlJ10gPSAnJ1xuaW5pdGlhbFZhbHVlc1sncHJlZmVycmVkX3NjaGVkdWxlJ10gPSAnJ1xuaW5pdGlhbFZhbHVlc1sncmVwbGFjZW1lbnRzJ10gPSBbXVxuY29uc3QgeyBcbiAgdmFsdWVzLFxuICBzZXRWYWx1ZXMsIFxuICB0b3VjaGVkVmFsdWVzLCBcbiAgZXJyb3JzLCBcbiAgaGFuZGxlQ2hhbmdlLCBcbiAgaGFuZGxlU3VibWl0LCBcbiAgaGFuZGxlQmx1ciwgXG4gIGhhbmRsZVNlbGVjdENoYW5nZSwgXG4gIG9wdGlvblR5cGVzLCBcbiAgc2VsZWN0LCAgICAgXG4gIHN0ZXAsXG4gIHNldFN0ZXAsXG4gIHByb2dyZXNzLFxuICBuZXh0U3RlcCxcbiAgcHJldmlvdXNTdGVwIH0gPSB1c2VGb3JtKHtcbiAgaW5pdGlhbFZhbHVlcyxcbiAgb25TdWJtaXQsXG4gIHZhbGlkYXRlKHZhbHVlcykge1xuICAgIGNvbnN0IGVycm9ycyA9IHt9XG5cbiAgICBpZiAodmFsdWVzLm5hbWUgPT09IFwiXCIpIHtcbiAgICAgIGVycm9ycy5uYW1lID0gXCJQbGVhc2Ugc3BlY2lmeSBhIG5hbWVcIlxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnNcbiAgfVxufSlcbmZ1bmN0aW9uIGNvbXB1dGVQcm9ncmVzcygpIHtcbiAgY29uc3QgZmlyc3QgPSBwcm9ncmVzc1sxXSA9PSB0cnVlID8gMzAgOiAwXG4gIGNvbnN0IHNlY29uZCA9IHByb2dyZXNzWzJdID09IHRydWUgPyAzNSA6IDBcbiAgY29uc3QgdGhpcmQgPSBwcm9ncmVzc1szXSA9PSB0cnVlID8gMzUgOiAwXG5cbiAgY29uc3QgdG90YWwgPSBmaXJzdCArIHNlY29uZCArIHRoaXJkXG4gIHJldHVybiAgYCR7dG90YWx9JWBcbn1cbmNvbnN0IFtjaGVja19pdGVtcywgc2V0Q2hlY2tdID0gUmVhY3QudXNlU3RhdGUoW10pXG5jb25zdCBbY2xlYW5faXRlbXMsIHNldENsZWFuXSA9IFJlYWN0LnVzZVN0YXRlKFtdKVxuY29uc3QgW2NoYW5nZV9pdGVtcywgc2V0Q2hhbmdlXSA9IFJlYWN0LnVzZVN0YXRlKFtdKVxuXG51c2VFZmZlY3QoKCkgPT4ge1xuICBjb25zdCBmZXRjaFBtcyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zKGAvYXBpL3Btcy1saXN0cy8ke3ZhbHVlcy5zZXJ2aWNlX2lkfWApXG4gICAgICBzZXRDaGVjayhyZXN1bHQuZGF0YS5kYXRhLmNoZWNrX2l0ZW1zKTtcbiAgICAgIHNldENsZWFuKHJlc3VsdC5kYXRhLmRhdGEuY2xlYW5faXRlbXMpO1xuICAgICAgc2V0Q2hhbmdlKHJlc3VsdC5kYXRhLmRhdGEuY2hhbmdlX2l0ZW1zKTtcbiAgfVxuICBmZXRjaFBtcygpXG59LCBbXSlcbnJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3Jvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTUgcGItNSBib3JkZXItYiB3LWZ1bGxcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTEwIHRleHQtYmFzZSB0ZXh0LWdyYXktNzAwXCI+e3ZhbHVlcy5oZWFkZXJ9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMTAgcHktNSBwYi0wXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcy1sYWJlbCBmbG9hdC1sZWZ0IHB4LTAgcHQtMFwiPkNvbXBsZXRpb24gUHJvZ3Jlc3M8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0IHB4LTAgcHktMFwiPntzdGVwfS8zPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93IHctZnVsbCBiZy1ncmF5LTMwMCBteS0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgdGV4dC14cyBsZWFkaW5nLW5vbmUgcHktMSB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCIgc3R5bGU9e3sgd2lkdGg6IGNvbXB1dGVQcm9ncmVzcygpIH19PjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3N0ZXAgPT0gMSAmJlxuICAgICAgICAgIDxDaGVja0xpc3QgXG4gICAgICAgICAgICB2YWx1ZXM9e3ZhbHVlc30gXG4gICAgICAgICAgICBzZXRWYWx1ZXM9e3NldFZhbHVlc30gXG4gICAgICAgICAgICBzdGVwPXtzdGVwfVxuICAgICAgICAgICAgcHJvZ3Jlc3M9e3Byb2dyZXNzfVxuICAgICAgICAgICAgbmV4dFN0ZXA9e25leHRTdGVwfVxuICAgICAgICAgICAgY2hlY2tfaXRlbXM9e2NoZWNrX2l0ZW1zfVxuICAgICAgICAgICAgY2xlYW5faXRlbXM9e2NsZWFuX2l0ZW1zfVxuICAgICAgICAgICAgY2hhbmdlX2l0ZW1zPXtjaGFuZ2VfaXRlbXN9XG4gICAgICAgICAgLz5cbiAgICAgICAgfVxuICAgICAgICB7c3RlcCA9PSAyICYmXG4gICAgICAgICAgPFNjaGVkdWxlXG4gICAgICAgICAgICB2YWx1ZXM9e3ZhbHVlc30gXG4gICAgICAgICAgICBzZXRWYWx1ZXM9e3NldFZhbHVlc31cbiAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfSBcbiAgICAgICAgICAgIHN0ZXA9e3N0ZXB9XG4gICAgICAgICAgICBwcm9ncmVzcz17cHJvZ3Jlc3N9XG4gICAgICAgICAgICBuZXh0U3RlcD17bmV4dFN0ZXB9XG4gICAgICAgICAgICBwcmV2aW91c1N0ZXA9e3ByZXZpb3VzU3RlcH1cbiAgICAgICAgLz5cbiAgICAgICAgfVxuICAgICAgICB7c3RlcCA9PSAzICYmXG4gICAgICAgIDxSZXBsYWNlbWVudHNcbiAgICAgICAgICAgIHZhbHVlcz17dmFsdWVzfSBcbiAgICAgICAgICAgIHNldFZhbHVlcz17c2V0VmFsdWVzfVxuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IFxuICAgICAgICAgICAgaGFuZGxlU3VibWl0PXtoYW5kbGVTdWJtaXR9ICAgXG4gICAgICAgICAgICBjaGFuZ2VfaXRlbXM9e2NoYW5nZV9pdGVtc30gICAgICAgICBcbiAgICAgICAgICAgIHN0ZXA9e3N0ZXB9XG4gICAgICAgICAgICBwcm9ncmVzcz17cHJvZ3Jlc3N9XG4gICAgICAgICAgICBuZXh0U3RlcD17bmV4dFN0ZXB9XG4gICAgICAgICAgICBwcmV2aW91c1N0ZXA9e3ByZXZpb3VzU3RlcH1cbiAgICAgICAgLz5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICApXG59IiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCBTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0J1xuaW1wb3J0IFN3aXRjaCBmcm9tIFwicmVhY3Qtc3dpdGNoXCJcblxuZXhwb3J0IGNvbnN0IFJlcGxhY2VtZW50cyA9ICh7XG4gICAgdmFsdWVzLFxuICAgIHZhbHVlLFxuICAgIHNldFZhbHVlcyxcbiAgICBoYW5kbGVDaGFuZ2UsXG4gICAgaGFuZGxlU3VibWl0LFxuICAgIGNoYW5nZV9pdGVtcyxcbiAgICBzdGVwLFxuICAgIHByb2dyZXNzLFxuICAgIG5leHRTdGVwLFxuICAgIHByZXZpb3VzU3RlcFxufSkgPT4ge1xuXG4gICAgY29uc3QgdHlwZXMgPSBbXG4gICAgICAgIHsgICBcbiAgICAgICAgICAgIGxhYmVsOiAnT0VNJyxcbiAgICAgICAgICAgIHZhbHVlOiAnb2VtJyxcbiAgICAgICAgfSxcbiAgICAgICAgeyAgIFxuICAgICAgICAgICAgbGFiZWw6ICdSZXBsYWNlbWVudCcsXG4gICAgICAgICAgICB2YWx1ZTogJ3JlcGxhY2VtZW50JyxcbiAgICAgICAgfSxcbiAgICAgICAgeyAgIFxuICAgICAgICAgICAgbGFiZWw6ICdTaG9wIFJlY29tbWVuZGF0aW9uJyxcbiAgICAgICAgICAgIHZhbHVlOiAncmVjb21tZW5kYXRpb24nLFxuICAgICAgICB9LCAgICAgICAgXG4gICAgXVxuICAgIGNvbnN0IFtmaWVsZHMsIHNldEZpZWxkc10gPSBSZWFjdC51c2VTdGF0ZSh2YWx1ZXMucmVwbGFjZW1lbnRzIHx8IFtdKVxuICAgIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKVxuICAgIGNvbnN0IGNvdW50ID0gY2hhbmdlX2l0ZW1zLmxlbmd0aFxuICAgIGNvbnN0IGNoZWNrRXJyb3JzID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhmaWVsZHMubGVuZ3RoKVxuICAgICAgICBmaWVsZHMubGVuZ3RoICE9IGNoYW5nZV9pdGVtcy5sZW5ndGggPyBzZXRFcnJvcnModHJ1ZSkgOiBzZXRFcnJvcnMoZmFsc2UpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlU2VsZWN0Q2hhbmdlID0gKGksIGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudmFsdWVcbiAgICAgICAgY29uc3QgbGFiZWwgPSBldmVudC5sYWJlbFxuICAgICAgICBjb25zdCBsaXN0ID0gWy4uLmZpZWxkc11cbiAgICAgICAgbGlzdFtpXSA9IHtcbiAgICAgICAgICAgIGxhYmVsOiBsYWJlbCxcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9XG4gICAgICAgIHNldEZpZWxkcyhsaXN0KVxuICAgICAgICBzZXRWYWx1ZXMoe1xuICAgICAgICAgIC4uLnZhbHVlcyxcbiAgICAgICAgICByZXBsYWNlbWVudHM6IGxpc3RcbiAgICAgICAgfSlcbiAgICAgICAgc2V0U3dpdGNoKHtcbiAgICAgICAgICAgIC4uLnN3aXRjaGVyLCBcbiAgICAgICAgICAgIG9lbTogZmFsc2UsXG4gICAgICAgICAgICByZXBsYWNlbWVudDogZmFsc2UsIFxuICAgICAgICAgICAgcmVjb21tZW5kYXRpb246IGZhbHNlXG4gICAgICAgIH0pXG5cbiAgICB9XG5cblxuICAgIGNvbnN0IG9uU3VibWl0ID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhmaWVsZHMubGVuZ3RoKVxuICAgICAgICBjb25zb2xlLmxvZyhjaGFuZ2VfaXRlbXMubGVuZ3RoKVxuICAgICAgICBmaWVsZHMubGVuZ3RoICE9IGNoYW5nZV9pdGVtcy5sZW5ndGggPyBzZXRFcnJvcnModHJ1ZSkgOiBzZXRFcnJvcnMoZmFsc2UpXG4gICAgICAgIGlmIChlcnJvcnMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBoYW5kbGVTdWJtaXQoKVxuICAgICAgICB9IFxuICAgIH1cblxuICAgIGNvbnN0IFtzd2l0Y2hlciwgc2V0U3dpdGNoXSA9IFJlYWN0LnVzZVN0YXRlKFxuICAgICAgICB7XG4gICAgICAgICAgICBvZW06IGZhbHNlLFxuICAgICAgICAgICAgcmVwbGFjZW1lbnQ6IGZhbHNlLFxuICAgICAgICAgICAgcmVjb21tZW5kYXRpb246IGZhbHNlXG4gICAgICAgIH1cbiAgICApXG5cbiAgICBjb25zdCBoYW5kbGVTd2l0Y2hDaGFuZ2UgPSAoZXZlbnQsIHR5cGUpID0+IHtcbiAgICAgICAgaWYodHlwZSA9PT0gJ29lbScpIHtcbiAgICAgICAgICAgIHNldFN3aXRjaCh7XG4gICAgICAgICAgICAgICAgLi4uc3dpdGNoZXIsIFxuICAgICAgICAgICAgICAgIG9lbTogc3dpdGNoZXIub2VtID09PSB0cnVlID8gZmFsc2UgOiB0cnVlLCBcbiAgICAgICAgICAgICAgICByZXBsYWNlbWVudDogZmFsc2UsXG4gICAgICAgICAgICAgICAgcmVjb21tZW5kYXRpb246IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG5cbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAncmVwbGFjZW1lbnQnKSB7XG4gICAgICAgICAgICBzZXRTd2l0Y2goe1xuICAgICAgICAgICAgICAgIC4uLnN3aXRjaGVyLCBcbiAgICAgICAgICAgICAgICBvZW06IGZhbHNlLFxuICAgICAgICAgICAgICAgIHJlcGxhY2VtZW50OiBzd2l0Y2hlci5yZXBsYWNlbWVudCA9PT0gdHJ1ZSA/IGZhbHNlIDogdHJ1ZSwgXG4gICAgICAgICAgICAgICAgcmVjb21tZW5kYXRpb246IGZhbHNlXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3JlY29tbWVuZGF0aW9uJykge1xuICAgICAgICAgICAgc2V0U3dpdGNoKHtcbiAgICAgICAgICAgICAgICAuLi5zd2l0Y2hlciwgXG4gICAgICAgICAgICAgICAgb2VtOiBmYWxzZSxcbiAgICAgICAgICAgICAgICByZXBsYWNlbWVudDogZmFsc2UsXG4gICAgICAgICAgICAgICAgcmVjb21tZW5kYXRpb246IHN3aXRjaGVyLnJlY29tbWVuZGF0aW9uID09PSB0cnVlID8gZmFsc2UgOiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0QWxsVG9PZW0gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBbLi4uZmllbGRzXVxuICAgICAgICBzZXRGaWVsZHMoW10pXG4gICAgICAgIGlmICggc3dpdGNoZXIub2VtID09PSB0cnVlKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoYW5nZV9pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnT0VNJyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdvZW0nXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHNldEZpZWxkcyhsaXN0KVxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7XG4gICAgICAgICAgICAgICAgLi4udmFsdWVzLFxuICAgICAgICAgICAgICAgIHJlcGxhY2VtZW50czogbGlzdFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRGaWVsZHMoW10pXG4gICAgICAgICAgICBzZXRWYWx1ZXMoe1xuICAgICAgICAgICAgLi4udmFsdWVzLFxuICAgICAgICAgICAgcmVwbGFjZW1lbnRzOiBbXVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNldEFsbFRvUmVwbGFjZW1lbnQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBbLi4uZmllbGRzXVxuICAgICAgICBzZXRGaWVsZHMoW10pXG4gICAgICAgIGlmICggc3dpdGNoZXIucmVwbGFjZW1lbnQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGxpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnUmVwbGFjZW1lbnQnLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ3JlcGxhY2VtZW50J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNldEZpZWxkcyhsaXN0KVxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7XG4gICAgICAgICAgICAgICAgICAgIC4uLnZhbHVlcyxcbiAgICAgICAgICAgICAgICAgICAgcmVwbGFjZW1lbnRzOiBsaXN0XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRGaWVsZHMoW10pXG4gICAgICAgICAgICBzZXRWYWx1ZXMoe1xuICAgICAgICAgICAgLi4udmFsdWVzLFxuICAgICAgICAgICAgcmVwbGFjZW1lbnRzOiBbXVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNldEFsbFRvUmVjb21tZW5kYXRpb24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBbLi4uZmllbGRzXVxuICAgICAgICBzZXRGaWVsZHMoW10pXG4gICAgICAgIGlmICggc3dpdGNoZXIucmVjb21tZW5kYXRpb24gPT09IHRydWUpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGxpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnUmVjb21tZW5kYXRpb24nLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ3JlY29tbWVuZGF0aW9uJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNldEZpZWxkcyhsaXN0KVxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7XG4gICAgICAgICAgICAgICAgICAgIC4uLnZhbHVlcyxcbiAgICAgICAgICAgICAgICAgICAgcmVwbGFjZW1lbnRzOiBsaXN0XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRGaWVsZHMoW10pXG4gICAgICAgICAgICBzZXRWYWx1ZXMoe1xuICAgICAgICAgICAgLi4udmFsdWVzLFxuICAgICAgICAgICAgcmVwbGFjZW1lbnRzOiBbXVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICB1c2VFZmZlY3QoKCk9PiB7XG4gICAgICAgIGZpZWxkcy5sZW5ndGggIT0gY2hhbmdlX2l0ZW1zLmxlbmd0aCA/IHNldEVycm9ycyh0cnVlKSA6IHNldEVycm9ycyhmYWxzZSlcbiAgICAgICAgY29uc29sZS5sb2codmFsdWVzKVxuICAgICAgICBjb25zb2xlLmxvZyhmaWVsZHMpXG4gICAgICAgIGNvbnNvbGUubG9nKHN3aXRjaGVyKVxuICAgIH0sIFtmaWVsZHNdKVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldEFsbFRvT2VtKClcbiAgICB9LCBbc3dpdGNoZXIub2VtXSlcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRBbGxUb1JlcGxhY2VtZW50KClcbiAgICB9LCBbc3dpdGNoZXIucmVwbGFjZW1lbnRdKVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldEFsbFRvUmVjb21tZW5kYXRpb24oKVxuICAgIH0sIFtzd2l0Y2hlci5yZWNvbW1lbmRhdGlvbl0pXG4gICAgXG4gICAgXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMTAgcHktNSBwdC0wXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtMnhsIG1iLTVcIj5TZWxlY3QgUmVwbGFjZW1lbnQgVHlwZXMgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwXCI+Kjwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yLzMgcHItMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjaGFuZ2VfaXRlbXMubWFwKChpdGVtLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpZHh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIHNlbGYtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktODAwXCIgaHRtbEZvcj1cInR5cGVcIj57aXRlbX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpZHh9IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IGEgUmVwbGFjZW1lbnQgVHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtgcmVwbGFjZW1lbnRzWyR7aWR4fV1gfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGhhbmRsZVNlbGVjdENoYW5nZShpZHgsIGUpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTIgcm91bmRlZCBibG9jayB3LWZ1bGxcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3R5cGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZpZWxkc1tpZHhdIHx8ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwIG1iLTEwXCI+U2VsZWN0IHR5cGVzIHRvIGFsbCAob3B0aW9uYWwpPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNVwiPiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2ggXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5jaGVja2VkSWNvbj17ZmFsc2V9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWRJY29uPXtmYWxzZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZVN3aXRjaENoYW5nZShldmVudCwgXCJvZW1cIil9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3N3aXRjaGVyLm9lbX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAvPiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtbC01IHRleHQtZ3JheS04MDAgYWxpZ24tdG9wXCIgaHRtbEZvcj1cInR5cGVcIj5BbGwgT0VNPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNVwiPiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2ggXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5jaGVja2VkSWNvbj17ZmFsc2V9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWRJY29uPXtmYWxzZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZVN3aXRjaENoYW5nZShldmVudCwgXCJyZXBsYWNlbWVudFwiKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c3dpdGNoZXIucmVwbGFjZW1lbnR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgLz4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWwtNSB0ZXh0LWdyYXktODAwIGFsaWduLXRvcFwiIGh0bWxGb3I9XCJ0eXBlXCI+QWxsIFJlcGxhY2VtZW50PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNVwiPiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2ggXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5jaGVja2VkSWNvbj17ZmFsc2V9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWRJY29uPXtmYWxzZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZVN3aXRjaENoYW5nZShldmVudCwgXCJyZWNvbW1lbmRhdGlvblwiKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c3dpdGNoZXIucmVjb21tZW5kYXRpb259IFxuICAgICAgICAgICAgICAgICAgICAgICAgLz4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWwtNSB0ZXh0LWdyYXktODAwIGFsaWduLXRvcFwiIGh0bWxGb3I9XCJ0eXBlXCI+QWxsIFNob3AgUmVjb21tZW5kYXRpb248L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC01IHBiLTUgYm9yZGVyLXQgdy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcmV2aW91c1N0ZXB9IGNsYXNzTmFtZT1cImZsb2F0LWxlZnQgcm91bmRlZCByb3VuZGVkLXItMCB0ZXh0LXNtIGJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHB4LTUgcHktMiB0ZXh0LXdoaXRlIG1iLTVcIj5QcmV2aW91czwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIHtlcnJvcnMgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHQgcm91bmRlZCB0ZXh0LXNtIGJnLWdyYXktNTAwIGhvdmVyOmJnLWdyYXktNzAwIHB4LTUgcHktMiB0ZXh0LXdoaXRlIG1iLTUgY3Vyc29yLW5vdC1hbGxvd2VkXCI+U3VibWl0PC9kaXY+XG4gICAgICAgICAgICAgICAgKTogKFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uU3VibWl0fSBjbGFzc05hbWU9XCJmbG9hdC1yaWdodCByb3VuZGVkIHRleHQtc20gYmctZ3JlZW4tNTAwIGhvdmVyOmJnLWdyZWVuLTcwMCBweC01IHB5LTIgdGV4dC13aGl0ZSBtYi01XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4XCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0J1xuaW1wb3J0IHtTY2hlZHVsZUZpZWxkc30gZnJvbSAnY29tcG9uZW50cydcbmV4cG9ydCBjb25zdCBTY2hlZHVsZSA9ICh7XG4gICAgdmFsdWVzLFxuICAgIHNldFZhbHVlcyxcbiAgICBzdGVwLFxuICAgIHByb2dyZXNzLFxuICAgIG5leHRTdGVwLFxuICAgIHByZXZpb3VzU3RlcFxufSkgPT4ge1xuICAgIGZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHJpbmcpIHtcbiAgICAgICAgaWYoc3RyaW5nKSB7XG4gICAgICAgICAgcmV0dXJuIHN0cmluZ1swXS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHJpbmdcbiAgICAgIH1cbiAgICBcbiAgICAgIGZ1bmN0aW9uIHN0cmlwU3RyaW5nKHN0cmluZykge1xuICAgICAgICBpZihzdHJpbmcpIHtcbiAgICAgICAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoJ18nLCAnICcpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIGNvbnN0IG9pbF90eXBlcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcmV0ID0gW11cbiAgICAgICAgaWYoQXJyYXkuaXNBcnJheSh2YWx1ZXMub2lsX3R5cGVzKSkge1xuICAgICAgICAgIHZhbHVlcy5vaWxfdHlwZXMubWFwKCh2YWwsIGlkeCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RyaXBMYWJlbCA9IHN0cmlwU3RyaW5nKHZhbClcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHN0cmlwTGFiZWwpXG4gICAgICAgICAgICByZXRbaWR4XSA9IHtcbiAgICAgICAgICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgICAgICAgICB2YWx1ZTogdmFsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmV0XG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBzdHJpcExhYmVsID0gc3RyaXBTdHJpbmcodmFsdWVzLm9pbF90eXBlcylcbiAgICAgICAgICBjb25zdCBsYWJlbCA9IGNhcGl0YWxpemVGaXJzdExldHRlcihzdHJpcExhYmVsKVxuICAgICAgICAgIGNvbnN0IHJldCA9IHtcbiAgICAgICAgICAgIGxhYmVsOiBsYWJlbCxcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZXMub2lsX3R5cGVzXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXRcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0XG4gICAgICB9XG4gICAgY29uc3QgW29pbCwgc2V0T2lsXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IHR5cGVzID0gW1xuICAgICAgICB7bGFiZWw6IFwiUmVndWxhciBPaWxcIiwgdmFsdWU6IFwicmVndWxhcl9vaWxcIn0sXG4gICAgICAgIHtsYWJlbDogXCJTZW1pIFN5bnRoZXRpY1wiLCB2YWx1ZTogXCJzZW1pX3N5bnRoZXRpY1wifSxcbiAgICAgICAge2xhYmVsOiBcIkZ1bGx5IFN5bnRoZXRpY1wiLCB2YWx1ZTogXCJmdWxseV9zeW50aGV0aWNcIn0sXG4gICAgICAgIHtsYWJlbDogXCJTaG9wIFJlY29tbWVuZGF0aW9uXCIsIHZhbHVlOiBcInNob3BfcmVjb21tZW5kYXRpb25cIn1cbiAgICBdXG4gICAgY29uc3QgaGFuZGxlU2VsZWN0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudmFsdWVcbiAgICAgICAgY29uc3QgbGFiZWwgPSBldmVudC5sYWJlbFxuICAgICAgICBzZXRPaWwoe1xuICAgICAgICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH0pXG4gICAgICAgIHNldFZhbHVlcyh7XG4gICAgICAgICAgLi4udmFsdWVzLFxuICAgICAgICAgIG9pbF90eXBlOiB2YWx1ZVxuICAgICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4oXG4gICAgICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0xMCBweS01IHB0LTBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0yeGxcIj5TZWxlY3QgeW91ciBwcmVmZXJyZWQgc2NoZWR1bGUgKGF0IG1vc3QgMyB0aW1lIHNsb3RzKSA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDBcIj4qPC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS03MDBcIj5cbiAgICAgICAgICAgICAgICBXZSBzdWdnZXN0IHRvIHNldCBhIHNjaGVkdWxlIGEgbW9udGggYmVmb3JlIHRoZSBleHBlY3RlZCBzY2hlZHVsZWQgZGF0ZVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8U2NoZWR1bGVGaWVsZHNcbiAgICAgICAgICAgICAgICB2YWx1ZXM9e3ZhbHVlc31cbiAgICAgICAgICAgICAgICBzZXRWYWx1ZXM9e3NldFZhbHVlc31cbiAgICAgICAgICAgICAgICB0eXBlPVwicHJlZmVycmVkX3NjaGVkdWxlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtMnhsIG10LTVcIj5TZWxlY3QgT2lsIFR5cGUgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwXCI+Kjwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgIDxTZWxlY3QgXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgYW4gT2lsIFR5cGVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtvaWx9XG4gICAgICAgICAgICAgICAgbmFtZT1cIm9pbF90eXBlXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBoYW5kbGVTZWxlY3RDaGFuZ2UoZSl9IFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTIgcm91bmRlZCBteS0zIGJsb2NrIHctZnVsbFwiIFxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e3R5cGVzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNSBwYi01IGJvcmRlci10IHctZnVsbCBweC0xMFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcmV2aW91c1N0ZXB9IGNsYXNzTmFtZT1cImZsb2F0LWxlZnQgcm91bmRlZCByb3VuZGVkLXItMCB0ZXh0LXNtIGJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHB4LTUgcHktMiB0ZXh0LXdoaXRlIG1iLTVcIj5QcmV2aW91czwvYnV0dG9uPlxuICAgICAgICAgICAge3ZhbHVlcy5wcmVmZXJyZWRfc2NoZWR1bGUgIT0gJycgJiYgdmFsdWVzLm9pbF90eXBlICE9ICcnID8gKFxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e25leHRTdGVwfSBjbGFzc05hbWU9XCJmbG9hdC1yaWdodCByb3VuZGVkIHRleHQtc20gYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgcHgtNSBweS0yIHRleHQtd2hpdGUgbWItNVwiPk5leHQ8L2J1dHRvbj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHQgcm91bmRlZCB0ZXh0LXNtIGJnLWdyYXktNTAwIGhvdmVyOmJnLWdyYXktNzAwIHB4LTUgcHktMiB0ZXh0LXdoaXRlIG1iLTUgY3Vyc29yLW5vdC1hbGxvd2VkXCI+TmV4dDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufSIsImV4cG9ydCB7IENoZWNrTGlzdCB9IGZyb20gJy4vQ2hlY2tMaXN0J1xuZXhwb3J0IHsgU2NoZWR1bGUgfSBmcm9tICcuL1NjaGVkdWxlJ1xuZXhwb3J0IHsgUmVwbGFjZW1lbnRzIH0gZnJvbSAnLi9SZXBsYWNlbWVudHMnXG5leHBvcnQgeyBQbXNNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vTW9kYWwnIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gJ3JlY29tcG9zZSdcbmltcG9ydCB7IHJlZHV4Rm9ybSwgRmllbGQgfSBmcm9tICdyZWR1eC1mb3JtJ1xuaW1wb3J0IHsgdXNlTW9kYWwgfSBmcm9tICdyZWFjdC1jb250ZXh0LW1vZGFscydcbmltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUGFnZUhlYWRlciwgQ29sbGFwc2libGVDYXJkIH0gZnJvbSAnY29tcG9uZW50cydcbmltcG9ydCBOdW1iZXJGb3JtYXQgZnJvbSAncmVhY3QtbnVtYmVyLWZvcm1hdCdcbmltcG9ydCBjb252ZXJ0IGZyb20gJ2NvbG9yLWNvbnZlcnQnXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0MidcbmltcG9ydCB7IHNlbGVjdEFsbFNjaGVkdWxlcyB9IGZyb20gJ3N0b3JlL3NlbGVjdG9ycy9zY2hlZHVsZXMnXG5pbXBvcnQgeyBjdXJyZW50VXNlclNlbGVjdG9yIH0gZnJvbSAnc3RvcmUvc2VsZWN0b3JzL3Nlc3Npb24nXG5pbXBvcnQge1xuICAgIGdldFNjaGVkdWxlcyBhcyBnZXRTY2hlZHVsZXNBY3Rpb25cbiAgfSBmcm9tICdzdG9yZS9hY3Rpb24tY3JlYXRvcnMvc2NoZWR1bGVzJ1xuaW1wb3J0IHtcbiAgICBnZXRSZXF1ZXN0cyBhcyBnZXRSZXF1ZXN0c0FjdGlvbixcbiAgICB1cGRhdGVSZXF1ZXN0IGFzIHVwZGF0ZVJlcXVlc3RBY3Rpb24sXG4gICAgY3JlYXRlUmVxdWVzdCBhcyBjcmVhdGVSZXF1ZXN0QWN0aW9uLFxuICAgIGRlbGV0ZVJlcXVlc3QgYXMgZGVsZXRlUmVxdWVzdEFjdGlvbixcbiAgfSBmcm9tICdzdG9yZS9hY3Rpb24tY3JlYXRvcnMvdXNlclJlcXVlc3RzJ1xuaW1wb3J0IHsgTGluaywgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IGRlZmF1bHRQcm9maWxlSW1hZ2UgZnJvbSAnZGVmYXVsdC1hdmF0YXIucG5nJ1xuaW1wb3J0IHsgUG1zTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL1Btcy1Nb2RhbCdcbmltcG9ydCB7IENoYW5nZU9pbENvbXBvbmVudCB9IGZyb20gJy4vQ2hhbmdlLU9pbCdcblxuXG5jb25zdCBSZXF1ZXN0Q2hhbmdlT2lsTW9kYWwgPSBjb21wb3NlKFxuY29ubmVjdChcbiAgKHN0YXRlLCBvd25Qcm9wcykgPT4gKHtcbiAgICBpbml0aWFsVmFsdWVzOiBvd25Qcm9wc1xuICB9KSxcbiAgKGRpc3BhdGNoLCB7IGhpZGVNb2RhbCB9KSA9PiAoe1xuICAgIG9uU3VibWl0OiB2YWx1ZXMgPT4ge1xuICAgICAgZGlzcGF0Y2goY3JlYXRlUmVxdWVzdEFjdGlvbih2YWx1ZXMpKVxuICAgICAgZGlzcGF0Y2goZ2V0UmVxdWVzdHNBY3Rpb24oKSlcbiAgICAgIGhpZGVNb2RhbCgpXG4gICAgICBBbGVydCgnc3VjY2VzcycsICdDaGFuZ2UgT2lsIFJlcXVlc3QgQ29tcGxldGVkJylcbiAgICB9XG4gIH0pXG4pLFxucmVkdXhGb3JtKHtcbiAgZm9ybTogJ3JlcXVlc3QtY2hhbmdlLW9pbCdcbn0pXG4pKENoYW5nZU9pbENvbXBvbmVudClcblxuY29uc3QgUmVxdWVzdFBtc01vZGFsID0gY29tcG9zZShcbmNvbm5lY3QoXG4gIChzdGF0ZSwgb3duUHJvcHMpID0+ICh7XG4gICAgaW5pdGlhbFZhbHVlczogb3duUHJvcHNcbiAgfSksXG4gIChkaXNwYXRjaCwgeyBoaWRlTW9kYWwgfSkgPT4gKHtcbiAgICBvblN1Ym1pdDogdmFsdWVzID0+IHtcbiAgICAgIGRpc3BhdGNoKGNyZWF0ZVJlcXVlc3QodmFsdWVzKSlcbiAgICAgIGRpc3BhdGNoKGdldFJlcXVlc3QoKSlcbiAgICAgIGhpZGVNb2RhbCgpXG4gICAgICBBbGVydCgnc3VjY2VzcycsICdQTVMgUmVxdWVzdCBDb21wbGV0ZWQnKVxuICAgIH1cbiAgfSlcbiksXG5yZWR1eEZvcm0oe1xuICBmb3JtOiAncmVxdWVzdC1wbXMnXG59KVxuKShQbXNNb2RhbENvbXBvbmVudClcblxuY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcbnRvYXN0OiB0cnVlLFxucG9zaXRpb246ICd0b3AtZW5kJyxcbnNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcbnRpbWVyOiAzMDAwXG59KVxuXG5jb25zdCBBbGVydCA9ICh0eXBlLCB0aXRsZSkgPT4gVG9hc3QuZmlyZSh7XG50eXBlOiB0eXBlLFxudGl0bGU6IHRpdGxlXG59KVxuXG5mdW5jdGlvbiBWZWhpY2xlU2NoZWR1bGVDb21wb25lbnQoeyBnZXRTY2hlZHVsZXMsIGRlbGV0ZVNjaGVkdWxlLCBzY2hlZHVsZXMsIHVzZXIsIG1hdGNoIH0pIHtcbiAgICBjb25zdCB7IHVzZXJfdHlwZSB9ID0gdXNlclxuICAgIGNvbnN0IHF1ZXJ5ID0gbWF0Y2gucGFyYW1zLnNsdWdcbiAgICBjb25zdCBbcmVxdWVzdCwgc2V0UmVxdWVzdF0gPSBSZWFjdC51c2VTdGF0ZSgpXG4gICAgY29uc3QgeyBzaG93TW9kYWwgfSA9IHVzZU1vZGFsKClcbiAgICBpZiAodXNlcl90eXBlICE9ICdhZG1pbicgJiYgdXNlcl90eXBlICE9ICdjdXN0b21lcicpIHtcbiAgICAgIHJldHVybiA8UmVkaXJlY3QgZnJvbT0nL2FjY291bnQnIHRvPVwiL2FjY291bnQvb3ZlcnZpZXdcIiAvPlxuICAgIH1cblxuICAgIGNvbnN0IHBvcHVsYXRlU2NoZWR1bGVzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCBnZXRTY2hlZHVsZXMocXVlcnkpXG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnN0IGZldGNoUmVxdWVzdCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcyhgL2FwaS9yZXF1ZXN0c2ApXG4gICAgICAgICAgc2V0UmVxdWVzdChyZXN1bHQuZGF0YS5kYXRhWzBdLmFkZGl0aW9uYWwubWlsZWFnZSk7XG4gICAgICB9XG4gICAgICBwb3B1bGF0ZVNjaGVkdWxlcygpXG4gICAgICBmZXRjaFJlcXVlc3QoKVxuICAgIH0sIFtdKVxuXG4gICAgY29uc29sZS5sb2coc2NoZWR1bGVzKVxuICAgIGNvbnNvbGUubG9nKHJlcXVlc3QpXG4gICAgY29uc3Qgc2NoZWRfbGlzdCA9IHNjaGVkdWxlc1swXVxuICAgIGNvbnN0IHJlcXVlc3RfZGF0YSA9IHJlcXVlc3QgfHwge31cbiAgICBjb25zdCB7Y2FyX3NjaGVkLCB2ZWhpY2xlfSA9IHNjaGVkX2xpc3QgfHwge31cbiAgICBjb25zb2xlLmxvZyhjYXJfc2NoZWQpXG4gICAgY29uc3QgeyB0eXBlLCBtYWtlX2lkLCBtb2RlbF9pZCwgdHJpbV9pZCwgY2FyX3llYXIsIGVuZ2luZV90eXBlLCB0cmFuc21pc3Npb24sIHZpbiwgcGxhdGVfbnVtYmVyLCBjdXJyZW50X21pbGVhZ2UsIGFkZHJlc3MsIGNpdHksIHppcCwgbG9uZ2l0dWRlLCBsYXRpdHVkZSwgc2x1ZywgY2FyIH0gPSB2ZWhpY2xlIHx8IHt9XG4gICAgY29uc3QgeyBjb2xvciwgbmFtZSwgbWlsZWFnZSwgbGFzdF9zZXJ2aWNlZCwgZGF0ZV9wdXJjaGFzZWQsIHVwZGF0ZWRfYXQgfSA9IGNhciB8fCB7fVxuXG4gICAgY29uc29sZS5sb2cocmVxdWVzdF9kYXRhKVxuICAgIGZ1bmN0aW9uIG1hcmtBY3RpdmUobWlsZWFnZSAsIGRhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICBpZihyZXF1ZXN0X2RhdGEgPT0gbWlsZWFnZSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicm91bmRlZCBiZy1ibHVlLTUwMCBjdXJzb3Itbm90LWFsbG93ZWQgdGV4dC13aGl0ZSBweC00IHB5LTIgbXktMiB0ZXh0LXNtXCI+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyB0ZXh0LXhzXCI+Y2hlY2s8L2k+eycgJ31SZXF1ZXN0ZWRcbiAgICAgICAgICA8L2J1dHRvbiA+XG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPExpbmsgb25DbGljaz17KCkgPT4gc2hvd01vZGFsKFJlcXVlc3RQbXNNb2RhbCwgZGF0YSkgfSB0bz1cIiNcIiBjbGFzc05hbWU9XCJyb3VuZGVkIGJnLWdyZWVuLTUwMCBob3ZlcjpiZy1ncmVlbi02MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgbXktMiB0ZXh0LXNtXCI+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyB0ZXh0LXhzXCI+YnVpbGQ8L2k+eycgJ31SZXF1ZXN0IFBNU1xuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4oXG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYi13aGl0ZSBweC0xMCBweS01XCI+XG4gICAgICAgICAgPFBhZ2VIZWFkZXIgdGl0bGU9XCJTY2hlZHVsZXNcIiBzdWJUaXRsZT1cIk15IEdhcmFnZVwiID5cbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJtbC0yIGJnLWdyYXktMzAwIGhvdmVyOmJnLWdyYXktNTAwIHRleHQtZ3JheS03MDAgc2hhZG93IGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXJcIiB0bz1cIi9hY2NvdW50L3ZlaGljbGVzXCI+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmFycm93X2JhY2s8L2k+IEdvIEJhY2tcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9QYWdlSGVhZGVyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMyBmbGV4XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8zIHByLTVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZCBiZy13aGl0ZSBzaGFkb3ctbGdcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMTAgYm9yZGVyLWIgYm9yZGVyLWdyYXktMzAwXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4IG1sLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTUgcm91bmRlZC1mdWxsIHctNDggb2JqZWN0LWZpbGwgbXgtYXV0b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZGVmYXVsdFByb2ZpbGVJbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gdGV4dC1ncmF5LTcwMCB0ZXh0LXhsIHAtNSBwYi0xMCB0ZXh0LWNlbnRlclwiPntuYW1lIHx8ICcnfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIG14LWF1dG8gcm91bmRlZCBib3JkZXIgYm9yZGVyLWdyYXktNTAwIHRleHQtY2VudGVyIHctMzIgcHgtNSBweS0yXCI+e3BsYXRlX251bWJlciB8fCAnJ308L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBteC1hdXRvIHRleHQtY2VudGVyIHB5LTVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTUwMCBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8TnVtYmVyRm9ybWF0IHZhbHVlPXttaWxlYWdlfSBkaXNwbGF5VHlwZT17J3RleHQnfSB0aG91c2FuZFNlcGFyYXRvcj17dHJ1ZX0gc3VmZml4PXsnIGttJ30gcmVuZGVyVGV4dD17dmFsdWUgPT4gPD57dmFsdWV9PC8+fSAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+eycgJ30gXG4gICAgICAgICAgICAgICAgICAgIHNpbmNlIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPntkYXRlX3B1cmNoYXNlZCB8fCAnJ308L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTUgcHgtMTAgdGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIEVuZ2luZSAvIFRyYW5zbWlzc2lvblxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMFwiPnt0cmFuc21pc3Npb24gfHwgJyd9PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01IHB4LTEwIHRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICBMYXN0IFNlcnZpY2VkXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwXCI+e2xhc3Rfc2VydmljZWQgfHwgJy0nfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNSBweC0xMCB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgTGFzdCBVcGRhdGVkXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwXCI+e3VwZGF0ZWRfYXQgfHwgJy0nfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMi8zXCI+XG4gICAgICAgICAgICAgIDxDb2xsYXBzaWJsZUNhcmQgY2xhc3NOYW1lPVwibWItNVwiIHBhZGRpbmc9XCJmYWxzZVwiIHRpdGxlPVwiQXZhaWxhYmxlIFNlcnZpY2VzXCIgc3ViVGl0bGU9XCJZb3UgY2FuIHJlcXVlc3QgdGhlc2Ugc2VydmljZXMgYW55dGltZS5cIj5cbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPVwiYm9yZGVyLXQgYm9yZGVyLWIgYm9yZGVyLWdyYXktMzAwIGJnLWdyYXktMjAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHktMlwiPlNlcnZpY2UgTmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB5LTJcIj5MYXN0IFNlcnZpY2VkPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHktMlwiPkFjdGlvbjwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTUgYm9yZGVyLWIgYm9yZGVyLWdyYXktMzAwIHRleHQtY2VudGVyIHRleHQtYmx1ZS01MDAgZm9udC1ib2xkXCI+Q2hhbmdlIE9pbDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTUgYm9yZGVyLWIgYm9yZGVyLWdyYXktMzAwIHRleHQtY2VudGVyXCI+LTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTUgYm9yZGVyLWIgYm9yZGVyLWdyYXktMzAwIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBoaWRkZW4gbWQ6YmxvY2sgdy0xLzIgbGc6dy0yLzMgb3ZlcmZsb3ctdmlzaWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRlciA9IGBSZXF1ZXN0aW5nIGZvciBDaGFuZ2UgT2lsIGF0ICR7bWlsZWFnZX0ga21gXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93TW9kYWwoUmVxdWVzdENoYW5nZU9pbE1vZGFsLCB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSwgdHJhbnNtaXNzaW9uLCBjdXJyZW50X21pbGVhZ2UsIGNpdHksIGxvbmdpdHVkZSwgbGF0aXR1ZGUsIGNhciwgY2xhc3NOYW1lLCBoZWFkZXIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0gY2xhc3NOYW1lPVwicm91bmRlZCBiZy1ncmVlbi01MDAgaG92ZXI6YmctZ3JlZW4tNjAwIHRleHQtd2hpdGUgcHgtNCBweS0yIG15LTIgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyB0ZXh0LXhzXCI+YnVpbGQ8L2k+eycgJ31SZXF1ZXN0IFNlcnZpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uID5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTUgYm9yZGVyLWIgYm9yZGVyLWdyYXktMzAwIHRleHQtY2VudGVyIHRleHQtYmx1ZS01MDAgZm9udC1ib2xkXCI+Q2hhbmdlIFRpcmU8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS01IGJvcmRlci1iIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWNlbnRlclwiPi08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS01IGJvcmRlci1iIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJyb3VuZGVkIGJnLWdyZWVuLTUwMCBob3ZlcjpiZy1ncmVlbi02MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgbXktMiB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIHRleHQteHNcIj5idWlsZDwvaT57JyAnfVJlcXVlc3QgU2VydmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24gPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktNSBib3JkZXItYiBib3JkZXItZ3JheS0zMDAgdGV4dC1jZW50ZXIgdGV4dC1ibHVlLTUwMCBmb250LWJvbGRcIj5DaGFuZ2UgQmF0dGVyeTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTUgYm9yZGVyLWIgYm9yZGVyLWdyYXktMzAwIHRleHQtY2VudGVyXCI+LTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTUgYm9yZGVyLWIgYm9yZGVyLWdyYXktMzAwIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInJvdW5kZWQgYmctZ3JlZW4tNTAwIGhvdmVyOmJnLWdyZWVuLTYwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMiBteS0yIHRleHQtc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgdGV4dC14c1wiPmJ1aWxkPC9pPnsnICd9UmVxdWVzdCBTZXJ2aWNlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbiA+XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS01IGJvcmRlci1iIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWNlbnRlciB0ZXh0LWJsdWUtNTAwIGZvbnQtYm9sZFwiPk90aGVyPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktNSBib3JkZXItYiBib3JkZXItZ3JheS0zMDAgdGV4dC1jZW50ZXJcIj4tPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktNSBib3JkZXItYiBib3JkZXItZ3JheS0zMDAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIiNcIiBjbGFzc05hbWU9XCJyb3VuZGVkIGJnLWdyZWVuLTUwMCBob3ZlcjpiZy1ncmVlbi02MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIHRleHQteHNcIj5idWlsZDwvaT57JyAnfVJlcXVlc3QgU2VydmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbmsgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgPC9Db2xsYXBzaWJsZUNhcmQ+XG4gICAgICAgICAgICAgIDxDb2xsYXBzaWJsZUNhcmQgY2xhc3NOYW1lPVwibWItNVwiIHBhZGRpbmc9XCJmYWxzZVwiIHRpdGxlPVwiTGlzdCBvZiBTY2hlZHVsZXNcIiBzdWJUaXRsZT1cIllvdSBjYW4gb25seSBtYWtlIHJlcXVlc3RzIGlmIHRoZSBleHBlY3RlZCBzY2hlZHVsZSBpcyBsZXNzIHRoYW4gYSB5ZWFyLlwiPlxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJib3JkZXItdCBib3JkZXItYiBib3JkZXItZ3JheS0zMDAgYmctZ3JheS0yMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweS0yXCI+TWlsZWFnZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB5LTJcIj5EYXRlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHktMlwiPkFjdGlvbjwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAge2Nhcl9zY2hlZCAmJiBjYXJfc2NoZWQubWFwKChpdGVtLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9tZW50ID0gcmVxdWlyZSgnbW9tZW50Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgc2NoZWR1bGUsIGNhcl9pZCwgdHlwZSwgc2VydmljZV9pZCwgc2x1ZywgbWlsZWFnZX0gPSBpdGVtIHx8IHt9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgaGlkZGVuIG1kOmJsb2NrIHctMS8yIGxnOnctMi8zIG92ZXJmbG93LXZpc2libGVcIlxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRlciA9IGBSZXF1ZXN0aW5nIGZvciBQTVMgJHttaWxlYWdlfSBrbWBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2lkeH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktNSBib3JkZXItYiBib3JkZXItZ3JheS0zMDAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE51bWJlckZvcm1hdCB2YWx1ZT17bWlsZWFnZX0gZGlzcGxheVR5cGU9eyd0ZXh0J30gdGhvdXNhbmRTZXBhcmF0b3I9e3RydWV9IHN1ZmZpeD17JyBrbSd9IHJlbmRlclRleHQ9e3ZhbHVlID0+IDw+e3ZhbHVlfTwvPn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktNSBib3JkZXItYiBib3JkZXItZ3JheS0zMDAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge21vbWVudChpdGVtLnNjaGVkdWxlKS5mb3JtYXQoJ01NTU0gRG8gWVlZWScpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMFwiPkFwcHJveGltYXRlbHkge21vbWVudChzY2hlZHVsZSwgXCJZWVlZTU1ERFwiKS5mcm9tTm93KCl9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTUgYm9yZGVyLWIgYm9yZGVyLWdyYXktMzAwIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpZHggPiAxID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicm91bmRlZCBiZy1ncmF5LTUwMCBjdXJzb3Itbm90LWFsbG93ZWQgdGV4dC13aGl0ZSBweC00IHB5LTIgbXktMiB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyB0ZXh0LXhzXCI+YnVpbGQ8L2k+eycgJ31SZXF1ZXN0IFBNU1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrQWN0aXZlKG1pbGVhZ2UsIHsgc2NoZWR1bGUsIGNhcl9pZCwgdHlwZSwgc2VydmljZV9pZCwgc2x1ZywgbWlsZWFnZSwgY2xhc3NOYW1lLCBoZWFkZXIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgIDwvQ29sbGFwc2libGVDYXJkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApXG59XG5cbiAgZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgICBzdGF0ZSA9PiAoe1xuICAgICAgICBzY2hlZHVsZXM6IHNlbGVjdEFsbFNjaGVkdWxlcyhzdGF0ZSksXG4gICAgICAgIHVzZXI6IGN1cnJlbnRVc2VyU2VsZWN0b3Ioc3RhdGUpXG4gICAgICB9KSxcbiAgICAgIGRpc3BhdGNoID0+ICh7XG4gICAgICAgIGdldFNjaGVkdWxlczogc2x1ZyA9PiBkaXNwYXRjaChnZXRTY2hlZHVsZXNBY3Rpb24oc2x1ZykpXG4gICAgICB9KVxuICApKFZlaGljbGVTY2hlZHVsZUNvbXBvbmVudCkiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyBzY2hlZHVsZUFjdGlvbnMgYXMgYWN0aW9ucyB9IGZyb20gJ3N0b3JlL2FjdGlvbnMnXG5pbXBvcnQgeyBtYWtlUmVxdWVzdCB9IGZyb20gJ3N0b3JlL2FjdGlvbi1jcmVhdG9ycy9yZXF1ZXN0cydcblxuZXhwb3J0IGNvbnN0IGdldFNjaGVkdWxlcyA9IHNsdWcgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRpc3BhdGNoKFxuICAgIG1ha2VSZXF1ZXN0KCdnZXQtc2NoZWR1bGVzJywgKCkgPT4gYXhpb3MuZ2V0KGAvYXBpL2Nhci1zY2hlZHVsZXMvJHtzbHVnfWApKVxuICApXG5cbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IGFjdGlvbnMuQUREX1NDSEVEVUxFUyxcbiAgICBzY2hlZHVsZXM6IHJlc3BvbnNlLmRhdGEuZGF0YVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U2NoZWR1bGUgPSBzbHVnID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkaXNwYXRjaChcbiAgICBtYWtlUmVxdWVzdChgZ2V0LXNjaGVkdWxlLSR7c2x1Z31gLCAoKSA9PiBheGlvcy5nZXQoYC9hcGkvY2FyLXNjaGVkdWxlcy9zY2hlZHVsZS8ke3NsdWd9YCkpXG4gIClcblxuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogYWN0aW9ucy5HRVRfU0NIRURVTEUsXG4gICAgc2NoZWR1bGVzOiByZXNwb25zZS5kYXRhLmRhdGFcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVNjaGVkdWxlID0gZGF0YSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZGlzcGF0Y2goXG4gICAgbWFrZVJlcXVlc3QoJ2NyZWF0ZS1zY2hlZHVsZScsICgpID0+IGF4aW9zLnBvc3QoYC9hcGkvY2FyLXNjaGVkdWxlc2AsIGRhdGEpKVxuICApXG5cbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IGFjdGlvbnMuQUREX1NDSEVEVUxFLFxuICAgIHNjaGVkdWxlczogcmVzcG9uc2UuZGF0YS5kYXRhXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVTY2hlZHVsZSA9IGRhdGEgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRpc3BhdGNoKFxuICAgIG1ha2VSZXF1ZXN0KGB1cGRhdGUtc2NoZWR1bGUtJHtkYXRhLnNsdWd9YCwgKCkgPT5cbiAgICAgIGF4aW9zLnB1dChgL2FwaS9jYXItc2NoZWR1bGVzLyR7ZGF0YS5zbHVnfWAsIGRhdGEpXG4gICAgKVxuICApXG5cbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IGFjdGlvbnMuVVBEQVRFX1NDSEVEVUxFLFxuICAgIHNjaGVkdWxlczogcmVzcG9uc2UuZGF0YS5kYXRhXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVTY2hlZHVsZSA9IHNsdWcgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICBhd2FpdCBkaXNwYXRjaChcbiAgICBtYWtlUmVxdWVzdChgdXBkYXRlLXNjaGVkdWxlLSR7c2x1Z31gLCAoKSA9PiBheGlvcy5kZWxldGUoYC9hcGkvY2FyLXNjaGVkdWxlcy8ke3NsdWd9YCkpXG4gIClcblxuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogYWN0aW9ucy5ERUxFVEVfU0NIRURVTEUsXG4gICAgc2x1Z1xuICB9KVxufVxuXG5leHBvcnQgY29uc3Qgc2F2ZVNjaGVkdWxlID0gc2NoZWR1bGVEYXRhID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgY29uc3QgeyBzbHVnIH0gPSBzY2hlZHVsZURhdGFcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRpc3BhdGNoKFxuICAgIG1ha2VSZXF1ZXN0KCdzYXZlLXNjaGVkdWxlLXNldHRpbmdzJywgKCkgPT5cbiAgICAgIGF4aW9zLnB1dChgL2FwaS9jYXItc2NoZWR1bGVzLyR7c2x1Z31gLCBzY2hlZHVsZURhdGEpXG4gICAgKVxuICApXG5cbiAgcmV0dXJuIHJlc3BvbnNlXG59XG5cblxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgdXNlclJlcXVlc3RBY3Rpb25zIGFzIGFjdGlvbnMgfSBmcm9tICdzdG9yZS9hY3Rpb25zJ1xuaW1wb3J0IHsgbWFrZVJlcXVlc3QgfSBmcm9tICdzdG9yZS9hY3Rpb24tY3JlYXRvcnMvcmVxdWVzdHMnXG5cbmV4cG9ydCBjb25zdCBnZXRSZXF1ZXN0cyA9IHNsdWcgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRpc3BhdGNoKFxuICAgIG1ha2VSZXF1ZXN0KCdnZXQtcmVxdWVzdHMnLCAoKSA9PiBheGlvcy5nZXQoYC9hcGkvcmVxdWVzdHNgKSlcbiAgKVxuXG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBhY3Rpb25zLkFERF9SRVFVRVNUUyxcbiAgICByZXF1ZXN0czogcmVzcG9uc2UuZGF0YS5kYXRhXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBnZXRSZXF1ZXN0ID0gc2x1ZyA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZGlzcGF0Y2goXG4gICAgbWFrZVJlcXVlc3QoYGdldC1yZXF1ZXN0LSR7c2x1Z31gLCAoKSA9PiBheGlvcy5nZXQoYC9hcGkvcmVxdWVzdHMvcmVxdWVzdC8ke3NsdWd9YCkpXG4gIClcblxuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogYWN0aW9ucy5HRVRfUkVRVUVTVCxcbiAgICByZXF1ZXN0czogcmVzcG9uc2UuZGF0YS5kYXRhXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVSZXF1ZXN0ID0gZGF0YSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZGlzcGF0Y2goXG4gICAgbWFrZVJlcXVlc3QoJ2NyZWF0ZS1yZXF1ZXN0JywgKCkgPT4gYXhpb3MucG9zdChgL2FwaS9yZXF1ZXN0c2AsIGRhdGEpKVxuICApXG5cbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IGFjdGlvbnMuQUREX1JFUVVFU1QsXG4gICAgcmVxdWVzdHM6IHJlc3BvbnNlLmRhdGEuZGF0YVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlUmVxdWVzdCA9IGRhdGEgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRpc3BhdGNoKFxuICAgIG1ha2VSZXF1ZXN0KGB1cGRhdGUtcmVxdWVzdC0ke2RhdGEuc2x1Z31gLCAoKSA9PlxuICAgICAgYXhpb3MucHV0KGAvYXBpL3JlcXVlc3RzLyR7ZGF0YS5zbHVnfWAsIGRhdGEpXG4gICAgKVxuICApXG5cbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IGFjdGlvbnMuVVBEQVRFX1JFUVVFU1QsXG4gICAgcmVxdWVzdHM6IHJlc3BvbnNlLmRhdGEuZGF0YVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgZGVsZXRlUmVxdWVzdCA9IHNsdWcgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICBhd2FpdCBkaXNwYXRjaChcbiAgICBtYWtlUmVxdWVzdChgdXBkYXRlLXJlcXVlc3QtJHtzbHVnfWAsICgpID0+IGF4aW9zLmRlbGV0ZShgL2FwaS9yZXF1ZXN0cy8ke3NsdWd9YCkpXG4gIClcblxuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogYWN0aW9ucy5ERUxFVEVfUkVRVUVTVCxcbiAgICBzbHVnXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBzYXZlUmVxdWVzdCA9IHJlcXVlc3REYXRhID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgY29uc3QgeyBzbHVnIH0gPSByZXF1ZXN0RGF0YVxuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZGlzcGF0Y2goXG4gICAgbWFrZVJlcXVlc3QoJ3NhdmUtcmVxdWVzdC1zZXR0aW5ncycsICgpID0+XG4gICAgICBheGlvcy5wdXQoYC9hcGkvcmVxdWVzdHMvJHtzbHVnfWAsIHJlcXVlc3REYXRhKVxuICAgIClcbiAgKVxuXG4gIHJldHVybiByZXNwb25zZVxufVxuXG5cbiIsImltcG9ydCB7IGRlbm9ybWFsaXplIH0gZnJvbSAnbm9ybWFsaXpyJ1xuXG5pbXBvcnQgeyBlbnRpdGllcyBhcyBlbnRpdGllc1NjaGVtYSB9IGZyb20gJ3N0b3JlL3NjaGVtYXMnXG5cbmV4cG9ydCBjb25zdCBzZWxlY3RBbGxTY2hlZHVsZXMgPSBzdGF0ZSA9PiB7XG4gIGNvbnN0IGRuRW50aXRpZXMgPSBkZW5vcm1hbGl6ZShcbiAgICB7IHNjaGVkdWxlczogT2JqZWN0LmtleXMoc3RhdGUuZW50aXRpZXMuc2NoZWR1bGVzKSB9LFxuICAgIGVudGl0aWVzU2NoZW1hLFxuICAgIHN0YXRlLmVudGl0aWVzXG4gIClcblxuICByZXR1cm4gZG5FbnRpdGllcy5zY2hlZHVsZXNcbn1cblxuZXhwb3J0IGNvbnN0IHNlbGVjdFNjaGVkdWxlRGV0YWlscyA9IChzdGF0ZSwgaWQpID0+IHtcblxuICBjb25zdCBkbkVudGl0aWVzID0gZGVub3JtYWxpemUoXG4gICAgeyBzY2hlZHVsZXM6IFtpZF0gfSxcbiAgICBlbnRpdGllc1NjaGVtYSxcbiAgICBzdGF0ZS5lbnRpdGllc1xuICApXG5cbiAgcmV0dXJuIGRuRW50aXRpZXMuc2NoZWR1bGVzXG59Il0sInNvdXJjZVJvb3QiOiIifQ==