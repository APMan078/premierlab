(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/core-js/internals/string-repeat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/string-repeat.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `String.prototype.repeat` method implementation
// https://tc39.github.io/ecma262/#sec-string.prototype.repeat
module.exports = ''.repeat || function repeat(count) {
  var str = String(requireObjectCoercible(this));
  var result = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/this-number-value.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/this-number-value.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `thisNumberValue` abstract operation
// https://tc39.github.io/ecma262/#sec-thisnumbervalue
module.exports = function (value) {
  if (typeof value != 'number' && classof(value) != 'Number') {
    throw TypeError('Incorrect invocation');
  }
  return +value;
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.number.to-fixed.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.to-fixed.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var thisNumberValue = __webpack_require__(/*! ../internals/this-number-value */ "./node_modules/core-js/internals/this-number-value.js");
var repeat = __webpack_require__(/*! ../internals/string-repeat */ "./node_modules/core-js/internals/string-repeat.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var nativeToFixed = 1.0.toFixed;
var floor = Math.floor;

var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};

var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

var FORCED = nativeToFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !fails(function () {
  // V8 ~ Android 4.3-
  nativeToFixed.call({});
});

// `Number.prototype.toFixed` method
// https://tc39.github.io/ecma262/#sec-number.prototype.tofixed
$({ target: 'Number', proto: true, forced: FORCED }, {
  // eslint-disable-next-line max-statements
  toFixed: function toFixed(fractionDigits) {
    var number = thisNumberValue(this);
    var fractDigits = toInteger(fractionDigits);
    var data = [0, 0, 0, 0, 0, 0];
    var sign = '';
    var result = '0';
    var e, z, j, k;

    var multiply = function (n, c) {
      var index = -1;
      var c2 = c;
      while (++index < 6) {
        c2 += n * data[index];
        data[index] = c2 % 1e7;
        c2 = floor(c2 / 1e7);
      }
    };

    var divide = function (n) {
      var index = 6;
      var c = 0;
      while (--index >= 0) {
        c += data[index];
        data[index] = floor(c / n);
        c = (c % n) * 1e7;
      }
    };

    var dataToString = function () {
      var index = 6;
      var s = '';
      while (--index >= 0) {
        if (s !== '' || index === 0 || data[index] !== 0) {
          var t = String(data[index]);
          s = s === '' ? t : s + repeat.call('0', 7 - t.length) + t;
        }
      } return s;
    };

    if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits');
    // eslint-disable-next-line no-self-compare
    if (number != number) return 'NaN';
    if (number <= -1e21 || number >= 1e21) return String(number);
    if (number < 0) {
      sign = '-';
      number = -number;
    }
    if (number > 1e-21) {
      e = log(number * pow(2, 69, 1)) - 69;
      z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = fractDigits;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        result = dataToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        result = dataToString() + repeat.call('0', fractDigits);
      }
    }
    if (fractDigits > 0) {
      k = result.length;
      result = sign + (k <= fractDigits
        ? '0.' + repeat.call('0', fractDigits - k) + result
        : result.slice(0, k - fractDigits) + '.' + result.slice(k - fractDigits));
    } else {
      result = sign + result;
    } return result;
  }
});


/***/ }),

/***/ "./resources/assets/js/pages/Requests/Requests.jsx":
/*!*********************************************************!*\
  !*** ./resources/assets/js/pages/Requests/Requests.jsx ***!
  \*********************************************************/
/*! exports provided: useForm, ModalComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useForm", function() { return useForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_context_modals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-context-modals */ "./node_modules/react-context-modals/dist/main.js");
/* harmony import */ var react_context_modals__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_context_modals__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components */ "./resources/assets/js/components/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var store_selectors_request__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! store/selectors/request */ "./resources/assets/js/store/selectors/request.js");
/* harmony import */ var store_selectors_session__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! store/selectors/session */ "./resources/assets/js/store/selectors/session/index.js");
/* harmony import */ var store_action_creators_userRequests__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! store/action-creators/userRequests */ "./resources/assets/js/store/action-creators/userRequests/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");




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
  const [values, setValues] = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(initialValues || {});
  const [touchedValues, setTouchedValues] = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState({});
  const [errors, setErrors] = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState({});

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
    label: ' ',
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
  const [select, setSelect] = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(newLabel[0]);
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

  return {
    values,
    touchedValues,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
    handleSelectChange,
    optionTypes,
    select
  };
};

__signature__(useForm, "useState{[values, setValues](initialValues || {})}\nuseState{[touchedValues, setTouchedValues]({})}\nuseState{[errors, setErrors]({})}\nuseState{[select, setSelect](newLabel[0])}");

const ModalComponent = ({
  onSubmit,
  initialValues
}) => {
  console.log(initialValues);
  const {
    values,
    touchedValues,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
    handleSelectChange,
    optionTypes,
    select
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
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
    onSubmit: handleSubmit
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "flex-grow"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "pt-5 pb-5 border-b"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "px-10 text-base text-gray-700"
  }, values.header)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "p-10 pt-5 pb-0"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "block w-full py-2"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
    htmlFor: "name"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "inline-block mb-2"
  }, "  Request Name"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
    type: "text",
    name: "name",
    className: "w-full p-2 border",
    onChange: handleChange,
    value: values.name
  }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "block w-full py-2"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
    htmlFor: "type_id"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "inline-block mb-2"
  }, "Vehicle Type"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: "w-full",
    value: select,
    onChange: handleSelectChange,
    name: "type",
    options: optionTypes
  })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
    type: "hidden",
    name: "id",
    onChange: handleChange,
    value: values.id
  }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "float-right px-10 pb-5"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
    className: "text-white p-3 bg-blue-500 hover:bg-blue-700",
    type: "submit"
  }, values.create, values.update))));
};

__signature__(ModalComponent, "useForm{{ values, touchedValues, errors, handleChange, handleSubmit, handleBlur, handleSelectChange, optionTypes, select }}", () => [useForm]);

const CreateModal = Object(recompose__WEBPACK_IMPORTED_MODULE_3__["compose"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])((state, ownProps) => ({
  initialValues: ownProps
}), (dispatch, {
  hideModal
}) => ({
  onSubmit: values => {
    dispatch(Object(store_action_creators_userRequests__WEBPACK_IMPORTED_MODULE_12__["createRequest"])(values));
    dispatch(Object(store_action_creators_userRequests__WEBPACK_IMPORTED_MODULE_12__["getRequests"])());
    hideModal();
    Alert('success', '  Request created!');
  }
})), Object(redux_form__WEBPACK_IMPORTED_MODULE_4__["reduxForm"])({
  form: 'add- -request'
}))(ModalComponent);
const UpdateModal = Object(recompose__WEBPACK_IMPORTED_MODULE_3__["compose"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])((state, ownProps) => ({
  initialValues: ownProps
}), (dispatch, {
  hideModal
}) => ({
  onSubmit: values => {
    dispatch(Object(store_action_creators_userRequests__WEBPACK_IMPORTED_MODULE_12__["updateRequest"])(values));
    dispatch(Object(store_action_creators_userRequests__WEBPACK_IMPORTED_MODULE_12__["getRequests"])());
    hideModal();
    Alert('success', '  Request updated!');
  }
})), Object(redux_form__WEBPACK_IMPORTED_MODULE_4__["reduxForm"])({
  form: 'update- -request'
}))(ModalComponent);
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

function RequestsComponent({
  getRequests,
  deleteRequest,
  requests,
  user
}) {
  const {
    user_type
  } = user;
  const {
    showModal
  } = Object(react_context_modals__WEBPACK_IMPORTED_MODULE_7__["useModal"])();

  const populateRequests = async () => {
    await getRequests();
  };

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(() => {
    populateRequests();
  }, []);
  console.log(requests);
  const columns = react__WEBPACK_IMPORTED_MODULE_6___default.a.useMemo(() => [{
    Header: 'Request Details',
    accessor: 'service_name',
    sortable: true,
    Cell: row => {
      const created = new Date(row.row.original.updated_at);
      const newDate = new Date();
      const diffTime = newDate.getTime() - created.getTime();
      const diffDays = (diffTime / (1000 * 3600 * 24)).toFixed(0);
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "capitalize text-blue-700"
      }, row.row.original.car.short_name), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "text-gray-500 text-xs"
      }, "Requested: ", diffDays, " ", diffDays < 2 ? 'day' : 'days', " ago"));
    }
  }, {
    id: "schedule",
    Header: 'Schedule',
    sortable: true,
    className: "text-center",
    Cell: row => {
      const schedules = row.row.original.preferred_schedule;
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

      const findDay = date => {
        const weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        return weekday[date.getDay()];
      };

      const parseDate = date => {
        const suffix = date.getDate() < 4 ? 'rd' : 'th';
        return months[date.getMonth()] + '.' + date.getDate() + suffix + ", " + date.getFullYear();
      };

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, schedules.map((schedule, idx) => {
        const date = new Date(schedule.date);
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          key: idx,
          className: "text-white bg-gray-800 rounded p-2 text-xs"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", null, "(", findDay(date), ") ", parseDate(date)), ' ', react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          className: "capitalize"
        }, "- ", schedule.time));
      }));
    }
  }, {
    Header: 'Type',
    accessor: 'service_name',
    sortable: true,
    className: "text-center"
  }, {
    Header: 'City',
    accessor: 'city',
    sortable: true,
    className: "text-center"
  }, {
    Header: 'Status',
    accessor: 'status',
    className: "text-center",
    sortable: true,
    Cell: row => {
      const status = row.row.original.status;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, status === 'open' && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "capitalize text-sm rounded text-white p-2 bg-green-500"
      }, status), status === 'accepted' && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "capitalize text-sm rounded text-white p-2 bg-green-500"
      }, status), status === 'cancelled' && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "capitalize text-sm rounded text-white p-2 bg-red-500"
      }, status), status === 'expired' && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "capitalize text-sm rounded text-white p-2 bg-grey-600"
      }, status));
    }
  }, {
    id: "action",
    accessor: 'id',
    Cell: row => {
      const id = row.row.original.id;
      const name = row.row.original.name;
      const type_id = row.row.original.type_id;
      const header = 'Update Request';
      const className = "rounded-lg hidden md:block w-1/2 lg:w-1/3 overflow-visible";
      const update = "Update Request";
      console.log(row);
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "float-left"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Link"], {
        className: "bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-2 px-4 rounded",
        onClick: () => showModal(UpdateModal, {
          id,
          header,
          name,
          type_id,
          className,
          update
        }),
        to: "#"
      }, "Re-Open"), ' ', react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Link"], {
        className: "bg-red-500 hover:bg-red-700 text-white text-xs font-bold py-2 px-4 rounded",
        onClick: () => deleteRequest(id),
        to: "#"
      }, "Cancel"));
    },
    Header: 'Action',
    sortable: false,
    width: 45
  }], []);
  const shop_columns = react__WEBPACK_IMPORTED_MODULE_6___default.a.useMemo(() => [{
    Header: 'Request Details',
    accessor: 'service_name',
    sortable: true,
    Cell: row => {
      const created = new Date(row.row.original.updated_at);
      const newDate = new Date();
      const diffTime = newDate.getTime() - created.getTime();
      const diffDays = (diffTime / (1000 * 3600 * 24)).toFixed(0);
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "capitalize text-blue-700"
      }, row.row.original.car.short_name), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "text-gray-800 text-xs"
      }, row.row.original.service_name), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "text-gray-500 text-xs"
      }, "Requested: ", diffDays, " ", diffDays < 2 ? 'day' : 'days', " ago"));
    }
  }, {
    id: "schedule",
    Header: 'Schedule',
    sortable: true,
    className: "text-center",
    Cell: row => {
      const schedules = row.row.original.preferred_schedule;
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

      const findDay = date => {
        const weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        return weekday[date.getDay()];
      };

      const parseDate = date => {
        const suffix = date.getDate() < 4 ? 'rd' : 'th';
        return months[date.getMonth()] + '.' + date.getDate() + suffix + ", " + date.getFullYear();
      };

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, schedules.map((schedule, idx) => {
        const date = new Date(schedule.date);
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          key: idx,
          className: "text-white bg-gray-800 rounded p-2 text-xs"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", null, "(", findDay(date), ") ", parseDate(date)), ' ', react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          className: "capitalize"
        }, "- ", schedule.time));
      }));
    }
  }, {
    Header: 'City',
    accessor: 'city',
    sortable: true,
    className: "text-center"
  }, {
    Header: 'Distance',
    accessor: 'distance',
    sortable: true,
    className: "text-center",
    Cell: row => {
      const distance = row.row.original.distance;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, distance.toFixed(4), " km");
    }
  }, {
    id: "action",
    accessor: 'id',
    Cell: row => {
      const id = row.row.original.id;
      const name = row.row.original.name;
      const type_id = row.row.original.type_id;
      const header = 'Update Request';
      const className = "rounded-lg hidden md:block w-1/2 lg:w-1/3 overflow-visible";
      const update = "Update Request";
      console.log(row);
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "float-left"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Link"], {
        className: "bg-green-500 hover:bg-green-700 text-white text-xs font-bold py-2 px-4 rounded",
        onClick: () => showModal(UpdateModal, {
          id,
          header,
          name,
          type_id,
          className,
          update
        }),
        to: "#"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "material-icons mr-2 text-xs"
      }, "check"), "Create Estimate"), ' ');
    },
    Header: 'Action',
    sortable: false,
    width: 45
  }], []);
  const [filteredData, setFilteredData] = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(requests);

  const handleSetData = requests => {
    setFilteredData(requests);
  };

  const header = "Add New Request";
  const className = "rounded-lg hidden md:block w-1/2 lg:w-1/3 overflow-visible";
  const create = "Create New Request";
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "bb-white px-10 py-5"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_8__["PageHeader"], {
    title: "  Requests",
    subTitle: "Account"
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_8__["DataTable"], {
    columns: user_type === 'vendor' ? shop_columns : columns,
    data: requests
  })));
}

__signature__(RequestsComponent, "useModal{{ showModal }}\nuseEffect{}\nuseMemo{columns}\nuseMemo{shop_columns}\nuseState{[filteredData, setFilteredData](requests)}", () => [react_context_modals__WEBPACK_IMPORTED_MODULE_7__["useModal"]]);

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(state => ({
  requests: Object(store_selectors_request__WEBPACK_IMPORTED_MODULE_10__["selectAllRequests"])(state),
  user: Object(store_selectors_session__WEBPACK_IMPORTED_MODULE_11__["currentUserSelector"])(state)
}), dispatch => ({
  getRequests: () => dispatch(Object(store_action_creators_userRequests__WEBPACK_IMPORTED_MODULE_12__["getRequests"])()),
  deleteRequest: id => {
    sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.value) {
        dispatch(Object(store_action_creators_userRequests__WEBPACK_IMPORTED_MODULE_12__["deleteRequest"])(id));
        Alert('success', '  Request successfully deleted!');
      }
    });
  }
}))(RequestsComponent);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useForm, "useForm", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Requests/Requests.jsx");
  reactHotLoader.register(ModalComponent, "ModalComponent", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Requests/Requests.jsx");
  reactHotLoader.register(CreateModal, "CreateModal", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Requests/Requests.jsx");
  reactHotLoader.register(UpdateModal, "UpdateModal", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Requests/Requests.jsx");
  reactHotLoader.register(Toast, "Toast", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Requests/Requests.jsx");
  reactHotLoader.register(Alert, "Alert", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Requests/Requests.jsx");
  reactHotLoader.register(RequestsComponent, "RequestsComponent", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Requests/Requests.jsx");
  reactHotLoader.register(_default, "default", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Requests/Requests.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

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

/***/ "./resources/assets/js/store/selectors/request.js":
/*!********************************************************!*\
  !*** ./resources/assets/js/store/selectors/request.js ***!
  \********************************************************/
/*! exports provided: selectAllRequests, selectRequestDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllRequests", function() { return selectAllRequests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRequestDetails", function() { return selectRequestDetails; });
/* harmony import */ var normalizr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalizr */ "./node_modules/normalizr/dist/normalizr.es.js");
/* harmony import */ var store_schemas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! store/schemas */ "./resources/assets/js/store/schemas.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



const selectAllRequests = state => {
  const dnEntities = Object(normalizr__WEBPACK_IMPORTED_MODULE_0__["denormalize"])({
    requests: Object.keys(state.entities.requests)
  }, store_schemas__WEBPACK_IMPORTED_MODULE_1__["entities"], state.entities);
  return dnEntities.requests;
};
const selectRequestDetails = (state, id) => {
  const dnEntities = Object(normalizr__WEBPACK_IMPORTED_MODULE_0__["denormalize"])({
    requests: [id]
  }, store_schemas__WEBPACK_IMPORTED_MODULE_1__["entities"], state.entities);
  return dnEntities.requests;
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(selectAllRequests, "selectAllRequests", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/selectors/request.js");
  reactHotLoader.register(selectRequestDetails, "selectRequestDetails", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/selectors/request.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLXJlcGVhdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdGhpcy1udW1iZXItdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5udW1iZXIudG8tZml4ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9SZXF1ZXN0cy9SZXF1ZXN0cy5qc3giLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9hY3Rpb24tY3JlYXRvcnMvdXNlclJlcXVlc3RzL3VzZXJSZXF1ZXN0cy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL3NlbGVjdG9ycy9yZXF1ZXN0LmpzIl0sIm5hbWVzIjpbInVzZUZvcm0iLCJpbml0aWFsVmFsdWVzIiwib25TdWJtaXQiLCJ2YWxpZGF0ZSIsInZhbHVlcyIsInNldFZhbHVlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJ0b3VjaGVkVmFsdWVzIiwic2V0VG91Y2hlZFZhbHVlcyIsImVycm9ycyIsInNldEVycm9ycyIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJuYW1lIiwiaGFuZGxlQmx1ciIsImUiLCJoYW5kbGVTdWJtaXQiLCJvcHRpb25UeXBlcyIsImxhYmVsIiwiY29uc29sZSIsImxvZyIsInR5cGVfaWQiLCJuZXdMYWJlbCIsImZpbHRlciIsIm9wdGlvbiIsInNlbGVjdCIsInNldFNlbGVjdCIsImhhbmRsZVNlbGVjdENoYW5nZSIsIk1vZGFsQ29tcG9uZW50IiwiaGVhZGVyIiwiaWQiLCJjcmVhdGUiLCJ1cGRhdGUiLCJDcmVhdGVNb2RhbCIsImNvbXBvc2UiLCJjb25uZWN0Iiwic3RhdGUiLCJvd25Qcm9wcyIsImRpc3BhdGNoIiwiaGlkZU1vZGFsIiwiY3JlYXRlUmVxdWVzdEFjdGlvbiIsImdldFJlcXVlc3RzQWN0aW9uIiwiQWxlcnQiLCJyZWR1eEZvcm0iLCJmb3JtIiwiVXBkYXRlTW9kYWwiLCJ1cGRhdGVSZXF1ZXN0QWN0aW9uIiwiVG9hc3QiLCJTd2FsIiwibWl4aW4iLCJ0b2FzdCIsInBvc2l0aW9uIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsInR5cGUiLCJ0aXRsZSIsImZpcmUiLCJSZXF1ZXN0c0NvbXBvbmVudCIsImdldFJlcXVlc3RzIiwiZGVsZXRlUmVxdWVzdCIsInJlcXVlc3RzIiwidXNlciIsInVzZXJfdHlwZSIsInNob3dNb2RhbCIsInVzZU1vZGFsIiwicG9wdWxhdGVSZXF1ZXN0cyIsInVzZUVmZmVjdCIsImNvbHVtbnMiLCJ1c2VNZW1vIiwiSGVhZGVyIiwiYWNjZXNzb3IiLCJzb3J0YWJsZSIsIkNlbGwiLCJyb3ciLCJjcmVhdGVkIiwiRGF0ZSIsIm9yaWdpbmFsIiwidXBkYXRlZF9hdCIsIm5ld0RhdGUiLCJkaWZmVGltZSIsImdldFRpbWUiLCJkaWZmRGF5cyIsInRvRml4ZWQiLCJjYXIiLCJzaG9ydF9uYW1lIiwiY2xhc3NOYW1lIiwic2NoZWR1bGVzIiwicHJlZmVycmVkX3NjaGVkdWxlIiwibW9udGhzIiwiZmluZERheSIsImRhdGUiLCJ3ZWVrZGF5IiwiQXJyYXkiLCJnZXREYXkiLCJwYXJzZURhdGUiLCJzdWZmaXgiLCJnZXREYXRlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsIm1hcCIsInNjaGVkdWxlIiwiaWR4IiwidGltZSIsInN0YXR1cyIsIndpZHRoIiwic2hvcF9jb2x1bW5zIiwic2VydmljZV9uYW1lIiwiZGlzdGFuY2UiLCJmaWx0ZXJlZERhdGEiLCJzZXRGaWx0ZXJlZERhdGEiLCJoYW5kbGVTZXREYXRhIiwic2VsZWN0QWxsUmVxdWVzdHMiLCJjdXJyZW50VXNlclNlbGVjdG9yIiwidGV4dCIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwidGhlbiIsInJlc3VsdCIsImRlbGV0ZVJlcXVlc3RBY3Rpb24iLCJzbHVnIiwicmVzcG9uc2UiLCJtYWtlUmVxdWVzdCIsImF4aW9zIiwiZ2V0IiwiYWN0aW9ucyIsIkFERF9SRVFVRVNUUyIsImRhdGEiLCJnZXRSZXF1ZXN0IiwiR0VUX1JFUVVFU1QiLCJjcmVhdGVSZXF1ZXN0IiwicG9zdCIsIkFERF9SRVFVRVNUIiwidXBkYXRlUmVxdWVzdCIsInB1dCIsIlVQREFURV9SRVFVRVNUIiwiZGVsZXRlIiwiREVMRVRFX1JFUVVFU1QiLCJzYXZlUmVxdWVzdCIsInJlcXVlc3REYXRhIiwiZG5FbnRpdGllcyIsImRlbm9ybWFsaXplIiwiT2JqZWN0Iiwia2V5cyIsImVudGl0aWVzIiwiZW50aXRpZXNTY2hlbWEiLCJzZWxlY3RSZXF1ZXN0RGV0YWlscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhO0FBQ2IsZ0JBQWdCLG1CQUFPLENBQUMsK0VBQXlCO0FBQ2pELDZCQUE2QixtQkFBTyxDQUFDLDJHQUF1Qzs7QUFFNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLE1BQU07QUFDZDtBQUNBOzs7Ozs7Ozs7Ozs7QUNiQSxjQUFjLG1CQUFPLENBQUMsaUZBQTBCOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDVGE7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGdCQUFnQixtQkFBTyxDQUFDLCtFQUF5QjtBQUNqRCxzQkFBc0IsbUJBQU8sQ0FBQyw2RkFBZ0M7QUFDOUQsYUFBYSxtQkFBTyxDQUFDLHFGQUE0QjtBQUNqRCxZQUFZLG1CQUFPLENBQUMscUVBQW9COztBQUV4QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtB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c0RBRjRCLEVBRzVCOUcsS0FBSyxDQUFDNkcsUUFIc0IsQ0FBOUI7QUFNQSxTQUFPSixVQUFVLENBQUNqRixRQUFsQjtBQUNELENBUk07QUFVQSxNQUFNdUYsb0JBQW9CLEdBQUcsQ0FBQy9HLEtBQUQsRUFBUU4sRUFBUixLQUFlO0FBRWpELFFBQU0rRyxVQUFVLEdBQUdDLDZEQUFXLENBQzVCO0FBQUVsRixZQUFRLEVBQUUsQ0FBQzlCLEVBQUQ7QUFBWixHQUQ0QixFQUU1Qm9ILHNEQUY0QixFQUc1QjlHLEtBQUssQ0FBQzZHLFFBSHNCLENBQTlCO0FBTUEsU0FBT0osVUFBVSxDQUFDakYsUUFBbEI7QUFDRCxDQVRNOzs7Ozs7Ozs7OzBCQVZNbUQsaUI7MEJBVUFvQyxvQiIsImZpbGUiOiJqcy8xNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlcicpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLnJlcGVhdGAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnJlcGVhdFxubW9kdWxlLmV4cG9ydHMgPSAnJy5yZXBlYXQgfHwgZnVuY3Rpb24gcmVwZWF0KGNvdW50KSB7XG4gIHZhciBzdHIgPSBTdHJpbmcocmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKSk7XG4gIHZhciByZXN1bHQgPSAnJztcbiAgdmFyIG4gPSB0b0ludGVnZXIoY291bnQpO1xuICBpZiAobiA8IDAgfHwgbiA9PSBJbmZpbml0eSkgdGhyb3cgUmFuZ2VFcnJvcignV3JvbmcgbnVtYmVyIG9mIHJlcGV0aXRpb25zJyk7XG4gIGZvciAoO24gPiAwOyAobiA+Pj49IDEpICYmIChzdHIgKz0gc3RyKSkgaWYgKG4gJiAxKSByZXN1bHQgKz0gc3RyO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbi8vIGB0aGlzTnVtYmVyVmFsdWVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdGhpc251bWJlcnZhbHVlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlICE9ICdudW1iZXInICYmIGNsYXNzb2YodmFsdWUpICE9ICdOdW1iZXInKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdJbmNvcnJlY3QgaW52b2NhdGlvbicpO1xuICB9XG4gIHJldHVybiArdmFsdWU7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXInKTtcbnZhciB0aGlzTnVtYmVyVmFsdWUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdGhpcy1udW1iZXItdmFsdWUnKTtcbnZhciByZXBlYXQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXJlcGVhdCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbnZhciBuYXRpdmVUb0ZpeGVkID0gMS4wLnRvRml4ZWQ7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG52YXIgcG93ID0gZnVuY3Rpb24gKHgsIG4sIGFjYykge1xuICByZXR1cm4gbiA9PT0gMCA/IGFjYyA6IG4gJSAyID09PSAxID8gcG93KHgsIG4gLSAxLCBhY2MgKiB4KSA6IHBvdyh4ICogeCwgbiAvIDIsIGFjYyk7XG59O1xuXG52YXIgbG9nID0gZnVuY3Rpb24gKHgpIHtcbiAgdmFyIG4gPSAwO1xuICB2YXIgeDIgPSB4O1xuICB3aGlsZSAoeDIgPj0gNDA5Nikge1xuICAgIG4gKz0gMTI7XG4gICAgeDIgLz0gNDA5NjtcbiAgfVxuICB3aGlsZSAoeDIgPj0gMikge1xuICAgIG4gKz0gMTtcbiAgICB4MiAvPSAyO1xuICB9IHJldHVybiBuO1xufTtcblxudmFyIEZPUkNFRCA9IG5hdGl2ZVRvRml4ZWQgJiYgKFxuICAwLjAwMDA4LnRvRml4ZWQoMykgIT09ICcwLjAwMCcgfHxcbiAgMC45LnRvRml4ZWQoMCkgIT09ICcxJyB8fFxuICAxLjI1NS50b0ZpeGVkKDIpICE9PSAnMS4yNScgfHxcbiAgMTAwMDAwMDAwMDAwMDAwMDEyOC4wLnRvRml4ZWQoMCkgIT09ICcxMDAwMDAwMDAwMDAwMDAwMTI4J1xuKSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBWOCB+IEFuZHJvaWQgNC4zLVxuICBuYXRpdmVUb0ZpeGVkLmNhbGwoe30pO1xufSk7XG5cbi8vIGBOdW1iZXIucHJvdG90eXBlLnRvRml4ZWRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtbnVtYmVyLnByb3RvdHlwZS50b2ZpeGVkXG4kKHsgdGFyZ2V0OiAnTnVtYmVyJywgcHJvdG86IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1zdGF0ZW1lbnRzXG4gIHRvRml4ZWQ6IGZ1bmN0aW9uIHRvRml4ZWQoZnJhY3Rpb25EaWdpdHMpIHtcbiAgICB2YXIgbnVtYmVyID0gdGhpc051bWJlclZhbHVlKHRoaXMpO1xuICAgIHZhciBmcmFjdERpZ2l0cyA9IHRvSW50ZWdlcihmcmFjdGlvbkRpZ2l0cyk7XG4gICAgdmFyIGRhdGEgPSBbMCwgMCwgMCwgMCwgMCwgMF07XG4gICAgdmFyIHNpZ24gPSAnJztcbiAgICB2YXIgcmVzdWx0ID0gJzAnO1xuICAgIHZhciBlLCB6LCBqLCBrO1xuXG4gICAgdmFyIG11bHRpcGx5ID0gZnVuY3Rpb24gKG4sIGMpIHtcbiAgICAgIHZhciBpbmRleCA9IC0xO1xuICAgICAgdmFyIGMyID0gYztcbiAgICAgIHdoaWxlICgrK2luZGV4IDwgNikge1xuICAgICAgICBjMiArPSBuICogZGF0YVtpbmRleF07XG4gICAgICAgIGRhdGFbaW5kZXhdID0gYzIgJSAxZTc7XG4gICAgICAgIGMyID0gZmxvb3IoYzIgLyAxZTcpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgZGl2aWRlID0gZnVuY3Rpb24gKG4pIHtcbiAgICAgIHZhciBpbmRleCA9IDY7XG4gICAgICB2YXIgYyA9IDA7XG4gICAgICB3aGlsZSAoLS1pbmRleCA+PSAwKSB7XG4gICAgICAgIGMgKz0gZGF0YVtpbmRleF07XG4gICAgICAgIGRhdGFbaW5kZXhdID0gZmxvb3IoYyAvIG4pO1xuICAgICAgICBjID0gKGMgJSBuKSAqIDFlNztcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIGRhdGFUb1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpbmRleCA9IDY7XG4gICAgICB2YXIgcyA9ICcnO1xuICAgICAgd2hpbGUgKC0taW5kZXggPj0gMCkge1xuICAgICAgICBpZiAocyAhPT0gJycgfHwgaW5kZXggPT09IDAgfHwgZGF0YVtpbmRleF0gIT09IDApIHtcbiAgICAgICAgICB2YXIgdCA9IFN0cmluZyhkYXRhW2luZGV4XSk7XG4gICAgICAgICAgcyA9IHMgPT09ICcnID8gdCA6IHMgKyByZXBlYXQuY2FsbCgnMCcsIDcgLSB0Lmxlbmd0aCkgKyB0O1xuICAgICAgICB9XG4gICAgICB9IHJldHVybiBzO1xuICAgIH07XG5cbiAgICBpZiAoZnJhY3REaWdpdHMgPCAwIHx8IGZyYWN0RGlnaXRzID4gMjApIHRocm93IFJhbmdlRXJyb3IoJ0luY29ycmVjdCBmcmFjdGlvbiBkaWdpdHMnKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKG51bWJlciAhPSBudW1iZXIpIHJldHVybiAnTmFOJztcbiAgICBpZiAobnVtYmVyIDw9IC0xZTIxIHx8IG51bWJlciA+PSAxZTIxKSByZXR1cm4gU3RyaW5nKG51bWJlcik7XG4gICAgaWYgKG51bWJlciA8IDApIHtcbiAgICAgIHNpZ24gPSAnLSc7XG4gICAgICBudW1iZXIgPSAtbnVtYmVyO1xuICAgIH1cbiAgICBpZiAobnVtYmVyID4gMWUtMjEpIHtcbiAgICAgIGUgPSBsb2cobnVtYmVyICogcG93KDIsIDY5LCAxKSkgLSA2OTtcbiAgICAgIHogPSBlIDwgMCA/IG51bWJlciAqIHBvdygyLCAtZSwgMSkgOiBudW1iZXIgLyBwb3coMiwgZSwgMSk7XG4gICAgICB6ICo9IDB4MTAwMDAwMDAwMDAwMDA7XG4gICAgICBlID0gNTIgLSBlO1xuICAgICAgaWYgKGUgPiAwKSB7XG4gICAgICAgIG11bHRpcGx5KDAsIHopO1xuICAgICAgICBqID0gZnJhY3REaWdpdHM7XG4gICAgICAgIHdoaWxlIChqID49IDcpIHtcbiAgICAgICAgICBtdWx0aXBseSgxZTcsIDApO1xuICAgICAgICAgIGogLT0gNztcbiAgICAgICAgfVxuICAgICAgICBtdWx0aXBseShwb3coMTAsIGosIDEpLCAwKTtcbiAgICAgICAgaiA9IGUgLSAxO1xuICAgICAgICB3aGlsZSAoaiA+PSAyMykge1xuICAgICAgICAgIGRpdmlkZSgxIDw8IDIzKTtcbiAgICAgICAgICBqIC09IDIzO1xuICAgICAgICB9XG4gICAgICAgIGRpdmlkZSgxIDw8IGopO1xuICAgICAgICBtdWx0aXBseSgxLCAxKTtcbiAgICAgICAgZGl2aWRlKDIpO1xuICAgICAgICByZXN1bHQgPSBkYXRhVG9TdHJpbmcoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG11bHRpcGx5KDAsIHopO1xuICAgICAgICBtdWx0aXBseSgxIDw8IC1lLCAwKTtcbiAgICAgICAgcmVzdWx0ID0gZGF0YVRvU3RyaW5nKCkgKyByZXBlYXQuY2FsbCgnMCcsIGZyYWN0RGlnaXRzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGZyYWN0RGlnaXRzID4gMCkge1xuICAgICAgayA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICByZXN1bHQgPSBzaWduICsgKGsgPD0gZnJhY3REaWdpdHNcbiAgICAgICAgPyAnMC4nICsgcmVwZWF0LmNhbGwoJzAnLCBmcmFjdERpZ2l0cyAtIGspICsgcmVzdWx0XG4gICAgICAgIDogcmVzdWx0LnNsaWNlKDAsIGsgLSBmcmFjdERpZ2l0cykgKyAnLicgKyByZXN1bHQuc2xpY2UoayAtIGZyYWN0RGlnaXRzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IHNpZ24gKyByZXN1bHQ7XG4gICAgfSByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcbiIsImltcG9ydCB7IGNvbXBvc2UgfSBmcm9tICdyZWNvbXBvc2UnXG5pbXBvcnQgeyByZWR1eEZvcm0sIEZpZWxkIH0gZnJvbSAncmVkdXgtZm9ybSdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlTW9kYWwgfSBmcm9tICdyZWFjdC1jb250ZXh0LW1vZGFscydcbmltcG9ydCB7IE5ldXRyYWxCdXR0b24sIFBhZ2VIZWFkZXIsIERhdGFUYWJsZSB9IGZyb20gJ2NvbXBvbmVudHMnXG5cbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJ1xuaW1wb3J0IHsgc2VsZWN0QWxsUmVxdWVzdHMgfSBmcm9tICdzdG9yZS9zZWxlY3RvcnMvcmVxdWVzdCdcbmltcG9ydCB7IGN1cnJlbnRVc2VyU2VsZWN0b3IgfSBmcm9tICdzdG9yZS9zZWxlY3RvcnMvc2Vzc2lvbidcbmltcG9ydCB7XG4gIGdldFJlcXVlc3RzIGFzIGdldFJlcXVlc3RzQWN0aW9uLFxuICB1cGRhdGVSZXF1ZXN0IGFzIHVwZGF0ZVJlcXVlc3RBY3Rpb24sXG4gIGNyZWF0ZVJlcXVlc3QgYXMgY3JlYXRlUmVxdWVzdEFjdGlvbixcbiAgZGVsZXRlUmVxdWVzdCBhcyBkZWxldGVSZXF1ZXN0QWN0aW9uXG59IGZyb20gJ3N0b3JlL2FjdGlvbi1jcmVhdG9ycy91c2VyUmVxdWVzdHMnXG5pbXBvcnQgeyBMaW5rLCBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdCdcblxuZXhwb3J0IGNvbnN0IHVzZUZvcm0gPSAoeyBpbml0aWFsVmFsdWVzLCBvblN1Ym1pdCwgdmFsaWRhdGUgfSkgPT4ge1xuICAgIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSBSZWFjdC51c2VTdGF0ZShpbml0aWFsVmFsdWVzIHx8IHt9KVxuICAgIGNvbnN0IFt0b3VjaGVkVmFsdWVzLCBzZXRUb3VjaGVkVmFsdWVzXSA9IFJlYWN0LnVzZVN0YXRlKHt9KVxuICAgIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSBSZWFjdC51c2VTdGF0ZSh7fSlcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldFxuICAgICAgY29uc3QgdmFsdWUgPSB0YXJnZXQudmFsdWVcbiAgICAgIGNvbnN0IG5hbWUgPSB0YXJnZXQubmFtZVxuICAgICAgc2V0VmFsdWVzKHtcbiAgICAgICAgLi4udmFsdWVzLFxuICAgICAgICBbbmFtZV06IHZhbHVlXG4gICAgICB9KVxuICAgIH1cbiAgXG4gICAgY29uc3QgaGFuZGxlQmx1ciA9IGV2ZW50ID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldFxuICAgICAgY29uc3QgbmFtZSA9IHRhcmdldC5uYW1lXG4gICAgICBzZXRUb3VjaGVkVmFsdWVzKHtcbiAgICAgICAgLi4udG91Y2hlZFZhbHVlcyxcbiAgICAgICAgW25hbWVdOiB0cnVlXG4gICAgICB9KVxuICAgICAgY29uc3QgZSA9IHZhbGlkYXRlKHZhbHVlcylcbiAgICAgIHNldEVycm9ycyh7XG4gICAgICAgIC4uLmVycm9ycyxcbiAgICAgICAgLi4uZVxuICAgICAgfSlcbiAgICB9XG4gIFxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGV2ZW50ID0+IHtcblxuICAgICAgY29uc3QgZSA9IHZhbGlkYXRlKHZhbHVlcylcbiAgICAgIHNldEVycm9ycyh7XG4gICAgICAgIC4uLmVycm9ycyxcbiAgICAgICAgLi4uZVxuICAgICAgfSlcbiAgXG4gICAgICBvblN1Ym1pdCh7IC4uLnZhbHVlcywgZSB9KVxuICAgIH1cbiAgICBjb25zdCBvcHRpb25UeXBlcyA9IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICcgJyxcbiAgICAgICAgdmFsdWU6IDEsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogJ1RydWNrJyxcbiAgICAgICAgdmFsdWU6IDIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogJ01vdG9yY3ljbGUnLFxuICAgICAgICB2YWx1ZTogMyxcbiAgICAgIH1cbiAgICBdXG4gICAgY29uc29sZS5sb2codmFsdWVzLnR5cGVfaWQpXG4gICAgY29uc3QgbmV3TGFiZWwgPSBvcHRpb25UeXBlcy5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi52YWx1ZSA9PSB2YWx1ZXMudHlwZV9pZClcblxuICAgIGNvbnNvbGUubG9nKG5ld0xhYmVsWzBdKVxuICAgIGNvbnN0IFtzZWxlY3QsIHNldFNlbGVjdF0gPSBSZWFjdC51c2VTdGF0ZShuZXdMYWJlbFswXSlcbiAgICBjb25zb2xlLmxvZyhzZWxlY3QpXG4gICAgY29uc3QgaGFuZGxlU2VsZWN0Q2hhbmdlID0gZXZlbnQgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBldmVudC52YWx1ZVxuICAgICAgY29uc3QgbGFiZWwgPSBldmVudC5sYWJlbFxuICAgICAgY29uc3QgbmFtZSA9ICd0eXBlX2lkJ1xuICAgICAgc2V0VmFsdWVzKHtcbiAgICAgICAgLi4udmFsdWVzLFxuICAgICAgICBbbmFtZV06IHZhbHVlXG4gICAgICB9KVxuICAgICAgc2V0U2VsZWN0KHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLCBsYWJlbDogbGFiZWxcbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZXMsXG4gICAgICB0b3VjaGVkVmFsdWVzLFxuICAgICAgZXJyb3JzLFxuICAgICAgaGFuZGxlQ2hhbmdlLFxuICAgICAgaGFuZGxlU3VibWl0LFxuICAgICAgaGFuZGxlQmx1cixcbiAgICAgIGhhbmRsZVNlbGVjdENoYW5nZSxcbiAgICAgIG9wdGlvblR5cGVzLFxuICAgICAgc2VsZWN0XG4gICAgfVxuICB9XG5cbmV4cG9ydCBjb25zdCBNb2RhbENvbXBvbmVudCA9ICh7IG9uU3VibWl0LCBpbml0aWFsVmFsdWVzIH0pID0+IHtcbiAgY29uc29sZS5sb2coaW5pdGlhbFZhbHVlcylcbiAgY29uc3QgeyB2YWx1ZXMsIHRvdWNoZWRWYWx1ZXMsIGVycm9ycywgaGFuZGxlQ2hhbmdlLCBoYW5kbGVTdWJtaXQsIGhhbmRsZUJsdXIsIGhhbmRsZVNlbGVjdENoYW5nZSwgb3B0aW9uVHlwZXMsIHNlbGVjdCB9ID0gdXNlRm9ybSh7XG4gICAgaW5pdGlhbFZhbHVlcyxcbiAgICBvblN1Ym1pdCxcbiAgICB2YWxpZGF0ZSh2YWx1ZXMpIHtcbiAgICAgIGNvbnN0IGVycm9ycyA9IHt9XG5cbiAgICAgIGlmICh2YWx1ZXMubmFtZSA9PT0gXCJcIikge1xuICAgICAgICBlcnJvcnMubmFtZSA9IFwiUGxlYXNlIHNwZWNpZnkgYSBuYW1lXCJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVycm9yc1xuICAgIH1cbiAgfSlcblxuICByZXR1cm4gKFxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC01IHBiLTUgYm9yZGVyLWJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMTAgdGV4dC1iYXNlIHRleHQtZ3JheS03MDBcIj57dmFsdWVzLmhlYWRlcn08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMTAgcHQtNSBwYi0wXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCBweS0yXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBtYi0yXCI+ICBSZXF1ZXN0IE5hbWU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0yIGJvcmRlclwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHZhbHVlPXt2YWx1ZXMubmFtZX0vPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmxvY2sgdy1mdWxsIHB5LTInPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInR5cGVfaWRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgbWItMlwiPlZlaGljbGUgVHlwZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8U2VsZWN0IGNsYXNzTmFtZT1cInctZnVsbFwiIHZhbHVlPXtzZWxlY3R9IG9uQ2hhbmdlPXtoYW5kbGVTZWxlY3RDaGFuZ2V9IG5hbWU9XCJ0eXBlXCIgb3B0aW9ucz17b3B0aW9uVHlwZXN9IC8+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImlkXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gdmFsdWU9e3ZhbHVlcy5pZH0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodCBweC0xMCBwYi01XCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgcC0zIGJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwXCIgdHlwZT1cInN1Ym1pdFwiPnt2YWx1ZXMuY3JlYXRlfXt2YWx1ZXMudXBkYXRlfTwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgKVxufVxuXG5jb25zdCBDcmVhdGVNb2RhbCA9IGNvbXBvc2UoXG4gIGNvbm5lY3QoXG4gICAgKHN0YXRlLCBvd25Qcm9wcykgPT4gKHtcbiAgICAgIGluaXRpYWxWYWx1ZXM6IG93blByb3BzXG4gICAgfSksXG4gICAgKGRpc3BhdGNoLCB7IGhpZGVNb2RhbCB9KSA9PiAoe1xuICAgICAgb25TdWJtaXQ6IHZhbHVlcyA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGNyZWF0ZVJlcXVlc3RBY3Rpb24odmFsdWVzKSlcbiAgICAgICAgZGlzcGF0Y2goZ2V0UmVxdWVzdHNBY3Rpb24oKSlcbiAgICAgICAgaGlkZU1vZGFsKClcbiAgICAgICAgQWxlcnQoJ3N1Y2Nlc3MnLCAnICBSZXF1ZXN0IGNyZWF0ZWQhJylcbiAgICAgIH1cbiAgICB9KVxuICApLFxuICByZWR1eEZvcm0oe1xuICAgIGZvcm06ICdhZGQtIC1yZXF1ZXN0J1xuICB9KVxuKShNb2RhbENvbXBvbmVudClcblxuY29uc3QgVXBkYXRlTW9kYWwgPSBjb21wb3NlKFxuICBjb25uZWN0KFxuICAgIChzdGF0ZSwgb3duUHJvcHMpID0+ICh7XG4gICAgICBpbml0aWFsVmFsdWVzOiBvd25Qcm9wc1xuICAgIH0pLFxuICAgIChkaXNwYXRjaCwgeyBoaWRlTW9kYWwgfSkgPT4gKHtcbiAgICAgIG9uU3VibWl0OiB2YWx1ZXMgPT4ge1xuICAgICAgICBkaXNwYXRjaCh1cGRhdGVSZXF1ZXN0QWN0aW9uKHZhbHVlcykpXG4gICAgICAgIGRpc3BhdGNoKGdldFJlcXVlc3RzQWN0aW9uKCkpXG4gICAgICAgIGhpZGVNb2RhbCgpXG4gICAgICAgIEFsZXJ0KCdzdWNjZXNzJywgJyAgUmVxdWVzdCB1cGRhdGVkIScpXG4gICAgICB9XG4gICAgfSlcbiAgKSxcbiAgcmVkdXhGb3JtKHtcbiAgICBmb3JtOiAndXBkYXRlLSAtcmVxdWVzdCdcbiAgfSlcbikoTW9kYWxDb21wb25lbnQpXG5cbmNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XG4gIHRvYXN0OiB0cnVlLFxuICBwb3NpdGlvbjogJ3RvcC1lbmQnLFxuICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXG4gIHRpbWVyOiAzMDAwXG59KVxuXG5jb25zdCBBbGVydCA9ICh0eXBlLCB0aXRsZSkgPT4gVG9hc3QuZmlyZSh7XG4gIHR5cGU6IHR5cGUsXG4gIHRpdGxlOiB0aXRsZVxufSlcblxuXG5cbmZ1bmN0aW9uIFJlcXVlc3RzQ29tcG9uZW50KHsgZ2V0UmVxdWVzdHMsIGRlbGV0ZVJlcXVlc3QsIHJlcXVlc3RzLCB1c2VyIH0pIHtcbiAgY29uc3QgeyB1c2VyX3R5cGUgfSA9IHVzZXJcblxuXG4gIGNvbnN0IHsgc2hvd01vZGFsIH0gPSB1c2VNb2RhbCgpXG4gIGNvbnN0IHBvcHVsYXRlUmVxdWVzdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgZ2V0UmVxdWVzdHMoKVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBwb3B1bGF0ZVJlcXVlc3RzKClcbiAgfSwgW10pXG5cbiAgY29uc29sZS5sb2cocmVxdWVzdHMpXG5cbiAgY29uc3QgY29sdW1ucyA9IFJlYWN0LnVzZU1lbW8oXG4gICAgKCkgPT4gW1xuICAgICAge1xuICAgICAgICBIZWFkZXI6ICdSZXF1ZXN0IERldGFpbHMnLFxuICAgICAgICBhY2Nlc3NvcjogJ3NlcnZpY2VfbmFtZScsXG4gICAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgICBDZWxsOiByb3cgPT4ge1xuICAgICAgICAgIGNvbnN0IGNyZWF0ZWQgPSBuZXcgRGF0ZShyb3cucm93Lm9yaWdpbmFsLnVwZGF0ZWRfYXQpXG4gICAgICAgICAgY29uc3QgbmV3RGF0ZSA9IG5ldyBEYXRlKClcbiAgICAgICAgICBjb25zdCBkaWZmVGltZSA9IG5ld0RhdGUuZ2V0VGltZSgpIC0gY3JlYXRlZC5nZXRUaW1lKClcbiAgICAgICAgICBjb25zdCBkaWZmRGF5cyA9IChkaWZmVGltZSAvICgxMDAwICogMzYwMCAqIDI0KSkudG9GaXhlZCgwKVxuICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcGl0YWxpemUgdGV4dC1ibHVlLTcwMFwiPntyb3cucm93Lm9yaWdpbmFsLmNhci5zaG9ydF9uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIHRleHQteHNcIj5SZXF1ZXN0ZWQ6IHtkaWZmRGF5c30ge2RpZmZEYXlzIDwgMiA/ICdkYXknIDogJ2RheXMnfSBhZ288L2Rpdj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwic2NoZWR1bGVcIixcbiAgICAgICAgSGVhZGVyOiAnU2NoZWR1bGUnLFxuICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgICAgY2xhc3NOYW1lOiBcInRleHQtY2VudGVyXCIsXG4gICAgICAgIENlbGw6IHJvdyA9PiB7XG4gICAgICAgICAgY29uc3Qgc2NoZWR1bGVzID0gcm93LnJvdy5vcmlnaW5hbC5wcmVmZXJyZWRfc2NoZWR1bGVcbiAgICAgICAgICBjb25zdCBtb250aHMgPSBbXCJKYW5cIiwgXCJGZWJcIiwgXCJNYXJcIixcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLCBcIkp1bFwiLCBcIkF1Z1wiLCBcIlNlcFwiLCBcIk9jdFwiLCBcIk5vdlwiLCBcIkRlY1wiXVxuICAgICAgICAgIGNvbnN0IGZpbmREYXkgPSAoZGF0ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgd2Vla2RheSA9IG5ldyBBcnJheSg3KVxuICAgICAgICAgICAgd2Vla2RheVswXSA9IFwiU3VuZGF5XCJcbiAgICAgICAgICAgIHdlZWtkYXlbMV0gPSBcIk1vbmRheVwiXG4gICAgICAgICAgICB3ZWVrZGF5WzJdID0gXCJUdWVzZGF5XCJcbiAgICAgICAgICAgIHdlZWtkYXlbM10gPSBcIldlZG5lc2RheVwiXG4gICAgICAgICAgICB3ZWVrZGF5WzRdID0gXCJUaHVyc2RheVwiXG4gICAgICAgICAgICB3ZWVrZGF5WzVdID0gXCJGcmlkYXlcIlxuICAgICAgICAgICAgd2Vla2RheVs2XSA9IFwiU2F0dXJkYXlcIlxuICAgICAgICAgICAgcmV0dXJuICB3ZWVrZGF5W2RhdGUuZ2V0RGF5KCldXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHBhcnNlRGF0ZSA9IChkYXRlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWZmaXggPSBkYXRlLmdldERhdGUoKSA8IDQgPyAncmQnIDogJ3RoJ1xuICAgICAgICAgICAgcmV0dXJuIG1vbnRoc1tkYXRlLmdldE1vbnRoKCldICsgJy4nICsgZGF0ZS5nZXREYXRlKCkgKyBzdWZmaXggKyBcIiwgXCIgKyBkYXRlLmdldEZ1bGxZZWFyKClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgeyBzY2hlZHVsZXMubWFwKChzY2hlZHVsZSwgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHNjaGVkdWxlLmRhdGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpZHh9IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYmctZ3JheS04MDAgcm91bmRlZCBwLTIgdGV4dC14c1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4oe2ZpbmREYXkoZGF0ZSl9KSB7cGFyc2VEYXRlKGRhdGUpfTwvc3Bhbj57JyAnfTxzcGFuIGNsYXNzTmFtZT1cImNhcGl0YWxpemVcIj4tIHtzY2hlZHVsZS50aW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj4gXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSwgXG4gICAgICB7XG4gICAgICAgIEhlYWRlcjogJ1R5cGUnLFxuICAgICAgICBhY2Nlc3NvcjogJ3NlcnZpY2VfbmFtZScsXG4gICAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgICBjbGFzc05hbWU6IFwidGV4dC1jZW50ZXJcIlxuICAgICAgfSwgXG4gICAgICB7XG4gICAgICAgIEhlYWRlcjogJ0NpdHknLFxuICAgICAgICBhY2Nlc3NvcjogJ2NpdHknLFxuICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgICAgY2xhc3NOYW1lOiBcInRleHQtY2VudGVyXCJcbiAgICAgIH0sIFxuICAgICAge1xuICAgICAgICBIZWFkZXI6ICdTdGF0dXMnLFxuICAgICAgICBhY2Nlc3NvcjogJ3N0YXR1cycsXG4gICAgICAgIGNsYXNzTmFtZTogXCJ0ZXh0LWNlbnRlclwiLFxuICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgICAgQ2VsbDogcm93ID0+IHtcbiAgICAgICAgICBjb25zdCBzdGF0dXMgPSByb3cucm93Lm9yaWdpbmFsLnN0YXR1c1xuICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIHtzdGF0dXMgPT09ICdvcGVuJyAmJlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcGl0YWxpemUgdGV4dC1zbSByb3VuZGVkIHRleHQtd2hpdGUgcC0yIGJnLWdyZWVuLTUwMFwiPntzdGF0dXN9PC9zcGFuPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHtzdGF0dXMgPT09ICdhY2NlcHRlZCcgJiZcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXBpdGFsaXplIHRleHQtc20gcm91bmRlZCB0ZXh0LXdoaXRlIHAtMiBiZy1ncmVlbi01MDBcIj57c3RhdHVzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB7c3RhdHVzID09PSAnY2FuY2VsbGVkJyAmJlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcGl0YWxpemUgdGV4dC1zbSByb3VuZGVkIHRleHQtd2hpdGUgcC0yIGJnLXJlZC01MDBcIj57c3RhdHVzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB7c3RhdHVzID09PSAnZXhwaXJlZCcgJiZcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXBpdGFsaXplIHRleHQtc20gcm91bmRlZCB0ZXh0LXdoaXRlIHAtMiBiZy1ncmV5LTYwMFwiPntzdGF0dXN9PC9zcGFuPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0sIFxuICAgICAge1xuICAgICAgICBpZDogXCJhY3Rpb25cIixcbiAgICAgICAgYWNjZXNzb3I6ICdpZCcsXG4gICAgICAgIENlbGw6IHJvdyA9PiB7XG4gICAgICAgICAgY29uc3QgaWQgPSByb3cucm93Lm9yaWdpbmFsLmlkXG4gICAgICAgICAgY29uc3QgbmFtZSA9IHJvdy5yb3cub3JpZ2luYWwubmFtZVxuICAgICAgICAgIGNvbnN0IHR5cGVfaWQgPSByb3cucm93Lm9yaWdpbmFsLnR5cGVfaWRcbiAgICAgICAgICBjb25zdCBoZWFkZXIgPSAnVXBkYXRlIFJlcXVlc3QnXG4gICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gXCJyb3VuZGVkLWxnIGhpZGRlbiBtZDpibG9jayB3LTEvMiBsZzp3LTEvMyBvdmVyZmxvdy12aXNpYmxlXCJcbiAgICAgICAgICBjb25zdCB1cGRhdGUgPSBcIlVwZGF0ZSBSZXF1ZXN0XCJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyb3cpXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtbGVmdFwiPlxuICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIHRleHQteHMgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkXCIgXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgIHNob3dNb2RhbChVcGRhdGVNb2RhbCwgeyBpZCwgaGVhZGVyLCBuYW1lLCB0eXBlX2lkLCBjbGFzc05hbWUsIHVwZGF0ZSB9KVxuICAgICAgICAgICAgICAgIH0gdG89XCIjXCI+XG4gICAgICAgICAgICAgICAgUmUtT3BlblxuICAgICAgICAgICAgICA8L0xpbms+eycgJ31cbiAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiYmctcmVkLTUwMCBob3ZlcjpiZy1yZWQtNzAwIHRleHQtd2hpdGUgdGV4dC14cyBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWRcIiBvbkNsaWNrPXsoKSA9PiBkZWxldGVSZXF1ZXN0KGlkKX0gdG89XCIjXCI+XG4gICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfSxcbiAgICAgICAgSGVhZGVyOiAnQWN0aW9uJyxcbiAgICAgICAgc29ydGFibGU6IGZhbHNlLFxuICAgICAgICB3aWR0aDogNDVcbiAgICAgIH0sXG4gICAgXSxcbiAgICBbXVxuICApXG5cbiAgY29uc3Qgc2hvcF9jb2x1bW5zID0gUmVhY3QudXNlTWVtbyhcbiAgICAoKSA9PiBbXG4gICAgICB7XG4gICAgICAgIEhlYWRlcjogJ1JlcXVlc3QgRGV0YWlscycsXG4gICAgICAgIGFjY2Vzc29yOiAnc2VydmljZV9uYW1lJyxcbiAgICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICAgIENlbGw6IHJvdyA9PiB7XG4gICAgICAgICAgY29uc3QgY3JlYXRlZCA9IG5ldyBEYXRlKHJvdy5yb3cub3JpZ2luYWwudXBkYXRlZF9hdClcbiAgICAgICAgICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoKVxuICAgICAgICAgIGNvbnN0IGRpZmZUaW1lID0gbmV3RGF0ZS5nZXRUaW1lKCkgLSBjcmVhdGVkLmdldFRpbWUoKVxuICAgICAgICAgIGNvbnN0IGRpZmZEYXlzID0gKGRpZmZUaW1lIC8gKDEwMDAgKiAzNjAwICogMjQpKS50b0ZpeGVkKDApXG4gICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FwaXRhbGl6ZSB0ZXh0LWJsdWUtNzAwXCI+e3Jvdy5yb3cub3JpZ2luYWwuY2FyLnNob3J0X25hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS04MDAgdGV4dC14c1wiPntyb3cucm93Lm9yaWdpbmFsLnNlcnZpY2VfbmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIHRleHQteHNcIj5SZXF1ZXN0ZWQ6IHtkaWZmRGF5c30ge2RpZmZEYXlzIDwgMiA/ICdkYXknIDogJ2RheXMnfSBhZ288L2Rpdj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwic2NoZWR1bGVcIixcbiAgICAgICAgSGVhZGVyOiAnU2NoZWR1bGUnLFxuICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgICAgY2xhc3NOYW1lOiBcInRleHQtY2VudGVyXCIsXG4gICAgICAgIENlbGw6IHJvdyA9PiB7XG4gICAgICAgICAgY29uc3Qgc2NoZWR1bGVzID0gcm93LnJvdy5vcmlnaW5hbC5wcmVmZXJyZWRfc2NoZWR1bGVcbiAgICAgICAgICBjb25zdCBtb250aHMgPSBbXCJKYW5cIiwgXCJGZWJcIiwgXCJNYXJcIixcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLCBcIkp1bFwiLCBcIkF1Z1wiLCBcIlNlcFwiLCBcIk9jdFwiLCBcIk5vdlwiLCBcIkRlY1wiXVxuICAgICAgICAgIGNvbnN0IGZpbmREYXkgPSAoZGF0ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgd2Vla2RheSA9IG5ldyBBcnJheSg3KVxuICAgICAgICAgICAgd2Vla2RheVswXSA9IFwiU3VuZGF5XCJcbiAgICAgICAgICAgIHdlZWtkYXlbMV0gPSBcIk1vbmRheVwiXG4gICAgICAgICAgICB3ZWVrZGF5WzJdID0gXCJUdWVzZGF5XCJcbiAgICAgICAgICAgIHdlZWtkYXlbM10gPSBcIldlZG5lc2RheVwiXG4gICAgICAgICAgICB3ZWVrZGF5WzRdID0gXCJUaHVyc2RheVwiXG4gICAgICAgICAgICB3ZWVrZGF5WzVdID0gXCJGcmlkYXlcIlxuICAgICAgICAgICAgd2Vla2RheVs2XSA9IFwiU2F0dXJkYXlcIlxuICAgICAgICAgICAgcmV0dXJuICB3ZWVrZGF5W2RhdGUuZ2V0RGF5KCldXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHBhcnNlRGF0ZSA9IChkYXRlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWZmaXggPSBkYXRlLmdldERhdGUoKSA8IDQgPyAncmQnIDogJ3RoJ1xuICAgICAgICAgICAgcmV0dXJuIG1vbnRoc1tkYXRlLmdldE1vbnRoKCldICsgJy4nICsgZGF0ZS5nZXREYXRlKCkgKyBzdWZmaXggKyBcIiwgXCIgKyBkYXRlLmdldEZ1bGxZZWFyKClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgeyBzY2hlZHVsZXMubWFwKChzY2hlZHVsZSwgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHNjaGVkdWxlLmRhdGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpZHh9IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYmctZ3JheS04MDAgcm91bmRlZCBwLTIgdGV4dC14c1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4oe2ZpbmREYXkoZGF0ZSl9KSB7cGFyc2VEYXRlKGRhdGUpfTwvc3Bhbj57JyAnfTxzcGFuIGNsYXNzTmFtZT1cImNhcGl0YWxpemVcIj4tIHtzY2hlZHVsZS50aW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj4gXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSwgXG4gICAgICB7XG4gICAgICAgIEhlYWRlcjogJ0NpdHknLFxuICAgICAgICBhY2Nlc3NvcjogJ2NpdHknLFxuICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgICAgY2xhc3NOYW1lOiBcInRleHQtY2VudGVyXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIEhlYWRlcjogJ0Rpc3RhbmNlJyxcbiAgICAgICAgYWNjZXNzb3I6ICdkaXN0YW5jZScsXG4gICAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgICBjbGFzc05hbWU6IFwidGV4dC1jZW50ZXJcIixcbiAgICAgICAgQ2VsbDogcm93ID0+IHtcbiAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IHJvdy5yb3cub3JpZ2luYWwuZGlzdGFuY2VcbiAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICB7ZGlzdGFuY2UudG9GaXhlZCg0KX0ga21cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSwgIFxuICAgICAge1xuICAgICAgICBpZDogXCJhY3Rpb25cIixcbiAgICAgICAgYWNjZXNzb3I6ICdpZCcsXG4gICAgICAgIENlbGw6IHJvdyA9PiB7XG4gICAgICAgICAgY29uc3QgaWQgPSByb3cucm93Lm9yaWdpbmFsLmlkXG4gICAgICAgICAgY29uc3QgbmFtZSA9IHJvdy5yb3cub3JpZ2luYWwubmFtZVxuICAgICAgICAgIGNvbnN0IHR5cGVfaWQgPSByb3cucm93Lm9yaWdpbmFsLnR5cGVfaWRcbiAgICAgICAgICBjb25zdCBoZWFkZXIgPSAnVXBkYXRlIFJlcXVlc3QnXG4gICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gXCJyb3VuZGVkLWxnIGhpZGRlbiBtZDpibG9jayB3LTEvMiBsZzp3LTEvMyBvdmVyZmxvdy12aXNpYmxlXCJcbiAgICAgICAgICBjb25zdCB1cGRhdGUgPSBcIlVwZGF0ZSBSZXF1ZXN0XCJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyb3cpXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtbGVmdFwiPlxuICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJiZy1ncmVlbi01MDAgaG92ZXI6YmctZ3JlZW4tNzAwIHRleHQtd2hpdGUgdGV4dC14cyBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWRcIiBcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgc2hvd01vZGFsKFVwZGF0ZU1vZGFsLCB7IGlkLCBoZWFkZXIsIG5hbWUsIHR5cGVfaWQsIGNsYXNzTmFtZSwgdXBkYXRlIH0pXG4gICAgICAgICAgICAgICAgfSB0bz1cIiNcIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIG1yLTIgdGV4dC14c1wiPmNoZWNrPC9pPlxuICAgICAgICAgICAgICAgIENyZWF0ZSBFc3RpbWF0ZVxuICAgICAgICAgICAgICA8L0xpbms+eycgJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfSxcbiAgICAgICAgSGVhZGVyOiAnQWN0aW9uJyxcbiAgICAgICAgc29ydGFibGU6IGZhbHNlLFxuICAgICAgICB3aWR0aDogNDVcbiAgICAgIH0sXG4gICAgXSxcbiAgICBbXVxuICApXG5cbiAgY29uc3QgW2ZpbHRlcmVkRGF0YSwgc2V0RmlsdGVyZWREYXRhXSA9IHVzZVN0YXRlKHJlcXVlc3RzKVxuICBjb25zdCBoYW5kbGVTZXREYXRhID0gcmVxdWVzdHMgPT4ge1xuICAgIHNldEZpbHRlcmVkRGF0YShyZXF1ZXN0cylcbiAgfVxuICBjb25zdCBoZWFkZXIgPSBcIkFkZCBOZXcgUmVxdWVzdFwiXG4gIGNvbnN0IGNsYXNzTmFtZSA9IFwicm91bmRlZC1sZyBoaWRkZW4gbWQ6YmxvY2sgdy0xLzIgbGc6dy0xLzMgb3ZlcmZsb3ctdmlzaWJsZVwiXG4gIGNvbnN0IGNyZWF0ZSA9IFwiQ3JlYXRlIE5ldyBSZXF1ZXN0XCJcbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJiLXdoaXRlIHB4LTEwIHB5LTVcIj5cbiAgICAgICAgPFBhZ2VIZWFkZXIgdGl0bGU9XCIgIFJlcXVlc3RzXCIgc3ViVGl0bGU9XCJBY2NvdW50XCIgLz5cbiAgICAgICAgPERhdGFUYWJsZSBjb2x1bW5zPXt1c2VyX3R5cGUgPT09ICd2ZW5kb3InID8gc2hvcF9jb2x1bW5zIDogY29sdW1uc30gZGF0YT17cmVxdWVzdHN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L0ZyYWdtZW50PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+ICh7XG4gIHJlcXVlc3RzOiBzZWxlY3RBbGxSZXF1ZXN0cyhzdGF0ZSksXG4gICAgdXNlcjogY3VycmVudFVzZXJTZWxlY3RvcihzdGF0ZSlcbiAgfSksXG4gIGRpc3BhdGNoID0+ICh7XG4gICAgZ2V0UmVxdWVzdHM6ICgpID0+IGRpc3BhdGNoKGdldFJlcXVlc3RzQWN0aW9uKCkpLFxuICAgIGRlbGV0ZVJlcXVlc3Q6IGlkID0+IHtcbiAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgIHRpdGxlOiAnQXJlIHlvdSBzdXJlPycsXG4gICAgICAgIHRleHQ6IFwiWW91IHdvbid0IGJlIGFibGUgdG8gcmV2ZXJ0IHRoaXMhXCIsXG4gICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyMzMDg1ZDYnLFxuICAgICAgICBjYW5jZWxCdXR0b25Db2xvcjogJyNkMzMnLFxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ1llcywgZGVsZXRlIGl0ISdcbiAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XG4gICAgICAgICAgZGlzcGF0Y2goZGVsZXRlUmVxdWVzdEFjdGlvbihpZCkpXG4gICAgICAgICAgQWxlcnQoJ3N1Y2Nlc3MnLCAnICBSZXF1ZXN0IHN1Y2Nlc3NmdWxseSBkZWxldGVkIScpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9KVxuKShSZXF1ZXN0c0NvbXBvbmVudCkiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyB1c2VyUmVxdWVzdEFjdGlvbnMgYXMgYWN0aW9ucyB9IGZyb20gJ3N0b3JlL2FjdGlvbnMnXG5pbXBvcnQgeyBtYWtlUmVxdWVzdCB9IGZyb20gJ3N0b3JlL2FjdGlvbi1jcmVhdG9ycy9yZXF1ZXN0cydcblxuZXhwb3J0IGNvbnN0IGdldFJlcXVlc3RzID0gc2x1ZyA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZGlzcGF0Y2goXG4gICAgbWFrZVJlcXVlc3QoJ2dldC1yZXF1ZXN0cycsICgpID0+IGF4aW9zLmdldChgL2FwaS9yZXF1ZXN0c2ApKVxuICApXG5cbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IGFjdGlvbnMuQUREX1JFUVVFU1RTLFxuICAgIHJlcXVlc3RzOiByZXNwb25zZS5kYXRhLmRhdGFcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGdldFJlcXVlc3QgPSBzbHVnID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkaXNwYXRjaChcbiAgICBtYWtlUmVxdWVzdChgZ2V0LXJlcXVlc3QtJHtzbHVnfWAsICgpID0+IGF4aW9zLmdldChgL2FwaS9yZXF1ZXN0cy9yZXF1ZXN0LyR7c2x1Z31gKSlcbiAgKVxuXG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBhY3Rpb25zLkdFVF9SRVFVRVNULFxuICAgIHJlcXVlc3RzOiByZXNwb25zZS5kYXRhLmRhdGFcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJlcXVlc3QgPSBkYXRhID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkaXNwYXRjaChcbiAgICBtYWtlUmVxdWVzdCgnY3JlYXRlLXJlcXVlc3QnLCAoKSA9PiBheGlvcy5wb3N0KGAvYXBpL3JlcXVlc3RzYCwgZGF0YSkpXG4gIClcblxuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogYWN0aW9ucy5BRERfUkVRVUVTVCxcbiAgICByZXF1ZXN0czogcmVzcG9uc2UuZGF0YS5kYXRhXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVSZXF1ZXN0ID0gZGF0YSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZGlzcGF0Y2goXG4gICAgbWFrZVJlcXVlc3QoYHVwZGF0ZS1yZXF1ZXN0LSR7ZGF0YS5zbHVnfWAsICgpID0+XG4gICAgICBheGlvcy5wdXQoYC9hcGkvcmVxdWVzdHMvJHtkYXRhLnNsdWd9YCwgZGF0YSlcbiAgICApXG4gIClcblxuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogYWN0aW9ucy5VUERBVEVfUkVRVUVTVCxcbiAgICByZXF1ZXN0czogcmVzcG9uc2UuZGF0YS5kYXRhXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVSZXF1ZXN0ID0gc2x1ZyA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XG4gIGF3YWl0IGRpc3BhdGNoKFxuICAgIG1ha2VSZXF1ZXN0KGB1cGRhdGUtcmVxdWVzdC0ke3NsdWd9YCwgKCkgPT4gYXhpb3MuZGVsZXRlKGAvYXBpL3JlcXVlc3RzLyR7c2x1Z31gKSlcbiAgKVxuXG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBhY3Rpb25zLkRFTEVURV9SRVFVRVNULFxuICAgIHNsdWdcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IHNhdmVSZXF1ZXN0ID0gcmVxdWVzdERhdGEgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICBjb25zdCB7IHNsdWcgfSA9IHJlcXVlc3REYXRhXG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkaXNwYXRjaChcbiAgICBtYWtlUmVxdWVzdCgnc2F2ZS1yZXF1ZXN0LXNldHRpbmdzJywgKCkgPT5cbiAgICAgIGF4aW9zLnB1dChgL2FwaS9yZXF1ZXN0cy8ke3NsdWd9YCwgcmVxdWVzdERhdGEpXG4gICAgKVxuICApXG5cbiAgcmV0dXJuIHJlc3BvbnNlXG59XG5cblxuIiwiaW1wb3J0IHsgZGVub3JtYWxpemUgfSBmcm9tICdub3JtYWxpenInXG5cbmltcG9ydCB7IGVudGl0aWVzIGFzIGVudGl0aWVzU2NoZW1hIH0gZnJvbSAnc3RvcmUvc2NoZW1hcydcblxuZXhwb3J0IGNvbnN0IHNlbGVjdEFsbFJlcXVlc3RzID0gc3RhdGUgPT4ge1xuICBjb25zdCBkbkVudGl0aWVzID0gZGVub3JtYWxpemUoXG4gICAgeyByZXF1ZXN0czogT2JqZWN0LmtleXMoc3RhdGUuZW50aXRpZXMucmVxdWVzdHMpIH0sXG4gICAgZW50aXRpZXNTY2hlbWEsXG4gICAgc3RhdGUuZW50aXRpZXNcbiAgKVxuXG4gIHJldHVybiBkbkVudGl0aWVzLnJlcXVlc3RzXG59XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RSZXF1ZXN0RGV0YWlscyA9IChzdGF0ZSwgaWQpID0+IHtcblxuICBjb25zdCBkbkVudGl0aWVzID0gZGVub3JtYWxpemUoXG4gICAgeyByZXF1ZXN0czogW2lkXSB9LFxuICAgIGVudGl0aWVzU2NoZW1hLFxuICAgIHN0YXRlLmVudGl0aWVzXG4gIClcblxuICByZXR1cm4gZG5FbnRpdGllcy5yZXF1ZXN0c1xufSJdLCJzb3VyY2VSb290IjoiIn0=