(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/core-js/modules/es.symbol.description.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.description.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.github.io/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "./resources/assets/js/makeData.js":
/*!*****************************************!*\
  !*** ./resources/assets/js/makeData.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return makeData; });
/* harmony import */ var namor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! namor */ "./node_modules/namor/dist/index.js");
/* harmony import */ var namor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(namor__WEBPACK_IMPORTED_MODULE_0__);
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



const range = len => {
  const arr = [];

  for (let i = 0; i < len; i++) {
    arr.push(i);
  }

  return arr;
};

const newPerson = () => {
  const statusChance = Math.random();
  return {
    firstName: namor__WEBPACK_IMPORTED_MODULE_0___default.a.generate({
      words: 1,
      numbers: 0
    }),
    lastName: namor__WEBPACK_IMPORTED_MODULE_0___default.a.generate({
      words: 1,
      numbers: 0
    }),
    email: namor__WEBPACK_IMPORTED_MODULE_0___default.a.generate({
      words: 1,
      numbers: 0
    }) + '@gmail.com',
    mobile: Math.floor(Math.random() * 100)
  };
};

function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map(d => {
      return _objectSpread({}, newPerson(), {
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined
      });
    });
  };

  return makeDataLevel();
}
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(range, "range", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/makeData.js");
  reactHotLoader.register(newPerson, "newPerson", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/makeData.js");
  reactHotLoader.register(makeData, "makeData", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/makeData.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/pages/Shops/Shops.jsx":
/*!***************************************************!*\
  !*** ./resources/assets/js/pages/Shops/Shops.jsx ***!
  \***************************************************/
/*! exports provided: useForm, ShopModalComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useForm", function() { return useForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopModalComponent", function() { return ShopModalComponent; });
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_context_modals__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-context-modals */ "./node_modules/react-context-modals/dist/main.js");
/* harmony import */ var react_context_modals__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_context_modals__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components */ "./resources/assets/js/components/index.js");
/* harmony import */ var _makeData__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../makeData */ "./resources/assets/js/makeData.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var store_selectors_shops__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! store/selectors/shops */ "./resources/assets/js/store/selectors/shops.js");
/* harmony import */ var store_selectors_session__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! store/selectors/session */ "./resources/assets/js/store/selectors/session/index.js");
/* harmony import */ var store_action_creators_shops__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! store/action-creators/shops */ "./resources/assets/js/store/action-creators/shops/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");





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
  const [values, setValues] = react__WEBPACK_IMPORTED_MODULE_8___default.a.useState(initialValues || {});
  const [touchedValues, setTouchedValues] = react__WEBPACK_IMPORTED_MODULE_8___default.a.useState({});
  const [errors, setErrors] = react__WEBPACK_IMPORTED_MODULE_8___default.a.useState({});

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

const ShopModalComponent = ({
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
    handleBlur
  } = useForm({
    initialValues,
    onSubmit,

    validate(values) {
      const errors = {};

      if (values.amount === "") {
        errors.amount = "Please select a customer";
      }

      return errors;
    }

  });
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("form", {
    onSubmit: handleSubmit
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "flex-grow"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "pt-5 pb-5 border-b"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "px-10 text-base text-gray-700"
  }, values.header)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "p-10 pt-5 flex pb-0",
    style: {
      width: '480px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "flex-1 pr-5"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "text-sm text-blue-700 py-2"
  }, "Total Credits"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "border p-2 text-blue-700"
  }, values.credit)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "flex-1"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "block w-full py-2"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
    htmlFor: "amount"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
    className: "inline-block mb-2"
  }, "Amount"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
    type: "text",
    name: "amount",
    className: "w-full p-2 border",
    placeholder: "Please specify an amount",
    onChange: handleChange,
    value: values.amount
  }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
    type: "hidden",
    name: "slug",
    onChange: handleChange,
    value: values.slug
  }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "flex p-10 pt-0 w-full pb-5"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "block w-full py-2"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
    htmlFor: "amount"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
    className: "inline-block mb-2"
  }, "Amount"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
    type: "text",
    name: "message",
    className: "w-full p-2 border",
    placeholder: "Please specify a message",
    onChange: handleChange,
    value: values.message
  })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "float-right px-10 pb-5"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
    className: "text-white p-3 bg-blue-500 hover:bg-blue-700",
    type: "submit"
  }, values.add, values.deduct, " Credits"))));
};

__signature__(ShopModalComponent, "useForm{{ values, touchedValues, errors, handleChange, handleSubmit, handleBlur }}", () => [useForm]);

const NewShopModal = Object(recompose__WEBPACK_IMPORTED_MODULE_5__["compose"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])((state, ownProps) => ({
  initialValues: ownProps
}), (dispatch, {
  hideModal
}) => ({
  onSubmit: values => {
    dispatch(Object(store_action_creators_shops__WEBPACK_IMPORTED_MODULE_15__["createShop"])(values));
    dispatch(Object(store_action_creators_shops__WEBPACK_IMPORTED_MODULE_15__["getShops"])());
    hideModal();
    Alert('success', 'Shop successfully created!');
  }
})), Object(redux_form__WEBPACK_IMPORTED_MODULE_6__["reduxForm"])({
  form: 'new-shop'
}))(ShopModalComponent);
const EditShopModal = Object(recompose__WEBPACK_IMPORTED_MODULE_5__["compose"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])((state, ownProps) => ({
  initialValues: ownProps
}), (dispatch, {
  hideModal
}) => ({
  onSubmit: values => {
    dispatch(Object(store_action_creators_shops__WEBPACK_IMPORTED_MODULE_15__["updateShop"])(values));
    dispatch(Object(store_action_creators_shops__WEBPACK_IMPORTED_MODULE_15__["getShops"])());
    hideModal();
    Alert('success', 'Shop successfully updated!');
  }
})), Object(redux_form__WEBPACK_IMPORTED_MODULE_6__["reduxForm"])({
  form: 'edit-shop'
}))(ShopModalComponent);
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

function ShopsComponent({
  getShops,
  deleteShop,
  shops,
  user
}) {
  const {
    user_type
  } = user;
  const {
    showModal
  } = Object(react_context_modals__WEBPACK_IMPORTED_MODULE_9__["useModal"])();

  const populateShops = async () => {
    await getShops();
  };

  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(() => {
    populateShops();
  }, []);
  console.log(shops);
  const columns = react__WEBPACK_IMPORTED_MODULE_8___default.a.useMemo(() => [{
    Header: 'Shop Name',
    accessor: 'name'
  }, {
    id: 'type',
    Header: 'Type',
    accessor: 'type',
    Cell: row => {
      console.log(row);
      const types = row.row.original.type || {};
      console.log(types);
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, types.map((type, idx) => react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "rounded bg-blue-800 text-white p-2 text-xs mr-2",
        key: idx
      }, type.replace('_', ' '), ' ')));
    },
    sortable: true,
    width: 45
  }, {
    Header: 'City',
    accessor: 'city'
  }, {
    Header: 'Completion',
    accessor: 'completion',
    className: 'md:hidden'
  }, {
    Header: 'Payment Method',
    accessor: 'payment_method'
  }, {
    Header: 'Level',
    accessor: 'level',
    className: 'md:hidden xl:table-cell'
  }, {
    Header: 'Date Joined',
    accessor: 'created_at',
    className: 'md:hidden xl:table-cell'
  }, {
    id: "action",
    accessor: 'slug',
    Cell: row => {
      const slug = row.row.original.slug;
      const name = row.row.original.name;
      const type = row.row.original.type;
      const contact = row.row.original.contact;
      const description = row.row.original.description;
      const address = row.row.original.address;
      const city = row.row.original.city;
      const zip = row.row.original.zip;
      const longitude = row.row.original.longitude;
      const latitude = row.row.original.latitude;
      const operations = row.row.original.operations;
      const features = row.row.original.features;
      const amenities = row.row.original.amenities;
      const payment_method = row.row.original.payment_method;
      const completion = row.row.original.completion;
      const level = row.row.original.level;
      const status = row.row.original.status;
      const pms_enabled = row.row.original.pms_enabled;
      console.log(row);
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "float-left"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__["Link"], {
        className: "bg-gray-200 hover:bg-gray-400 text-gray-700 text-xs font-bold py-1 px-4 rounded",
        to: "/account/shops/".concat(slug)
      }, "View"), ' ', react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__["Link"], {
        className: "bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-1 px-4 rounded",
        to: "/account/shops/update/".concat(slug)
      }, "Update"), ' ', react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__["Link"], {
        className: "bg-green-500 hover:bg-green-700 text-white text-xs font-bold py-1 px-4 rounded",
        to: "/account/shops/activation/".concat(slug)
      }, "Activation"), ' ', react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__["Link"], {
        className: "bg-red-500 hover:bg-red-700 text-white text-xs font-bold py-1 px-4 rounded",
        onClick: () => deleteShop(slug),
        to: "#"
      }, "Delete"));
    },
    Header: 'Action',
    sortable: false,
    width: 45
  }], []);
  const data = react__WEBPACK_IMPORTED_MODULE_8___default.a.useMemo(() => Object(_makeData__WEBPACK_IMPORTED_MODULE_11__["default"])(20), []);
  const [filteredData, setFilteredData] = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(shops);

  const handSetData = shops => {
    setFilteredData(shops);
  };

  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "bb-white px-10 py-5"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_10__["PageHeader"], {
    title: "Shop",
    subTitle: "Accounts"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__["Link"], {
    to: "/account/users/export",
    className: "ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
    className: "material-icons"
  }, "view_module"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, "Export"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_10__["DataTable"], {
    columns: columns,
    data: shops
  })));
}

__signature__(ShopsComponent, "useModal{{ showModal }}\nuseEffect{}\nuseMemo{columns}\nuseMemo{data}\nuseState{[filteredData, setFilteredData](shops)}", () => [react_context_modals__WEBPACK_IMPORTED_MODULE_9__["useModal"]]);

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(state => ({
  shops: Object(store_selectors_shops__WEBPACK_IMPORTED_MODULE_13__["selectAllShops"])(state),
  user: Object(store_selectors_session__WEBPACK_IMPORTED_MODULE_14__["currentUserSelector"])(state)
}), dispatch => ({
  getShops: () => dispatch(Object(store_action_creators_shops__WEBPACK_IMPORTED_MODULE_15__["getShops"])()),
  deleteShop: id => {
    sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.value) {
        dispatch(Object(store_action_creators_shops__WEBPACK_IMPORTED_MODULE_15__["deleteShop"])(id));
        Alert('success', 'User successfully deleted!');
      }
    });
  }
}))(ShopsComponent);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useForm, "useForm", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Shops/Shops.jsx");
  reactHotLoader.register(ShopModalComponent, "ShopModalComponent", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Shops/Shops.jsx");
  reactHotLoader.register(NewShopModal, "NewShopModal", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Shops/Shops.jsx");
  reactHotLoader.register(EditShopModal, "EditShopModal", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Shops/Shops.jsx");
  reactHotLoader.register(Toast, "Toast", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Shops/Shops.jsx");
  reactHotLoader.register(Alert, "Alert", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Shops/Shops.jsx");
  reactHotLoader.register(ShopsComponent, "ShopsComponent", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Shops/Shops.jsx");
  reactHotLoader.register(_default, "default", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Shops/Shops.jsx");
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

/***/ }),

/***/ 0:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN5bWJvbC5kZXNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21ha2VEYXRhLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvU2hvcHMvU2hvcHMuanN4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvYWN0aW9uLWNyZWF0b3JzL3Nob3BzL3Nob3BzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvc2VsZWN0b3JzL3Nob3BzLmpzIiwid2VicGFjazovLy91dGlsIChpZ25vcmVkKSIsIndlYnBhY2s6Ly8vYnVmZmVyIChpZ25vcmVkKSIsIndlYnBhY2s6Ly8vY3J5cHRvIChpZ25vcmVkKSJdLCJuYW1lcyI6WyJyYW5nZSIsImxlbiIsImFyciIsImkiLCJwdXNoIiwibmV3UGVyc29uIiwic3RhdHVzQ2hhbmNlIiwiTWF0aCIsInJhbmRvbSIsImZpcnN0TmFtZSIsIm5hbW9yIiwiZ2VuZXJhdGUiLCJ3b3JkcyIsIm51bWJlcnMiLCJsYXN0TmFtZSIsImVtYWlsIiwibW9iaWxlIiwiZmxvb3IiLCJtYWtlRGF0YSIsImxlbnMiLCJtYWtlRGF0YUxldmVsIiwiZGVwdGgiLCJtYXAiLCJkIiwic3ViUm93cyIsInVuZGVmaW5lZCIsInVzZUZvcm0iLCJpbml0aWFsVmFsdWVzIiwib25TdWJtaXQiLCJ2YWxpZGF0ZSIsInZhbHVlcyIsInNldFZhbHVlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJ0b3VjaGVkVmFsdWVzIiwic2V0VG91Y2hlZFZhbHVlcyIsImVycm9ycyIsInNldEVycm9ycyIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJuYW1lIiwiaGFuZGxlQmx1ciIsImUiLCJoYW5kbGVTdWJtaXQiLCJTaG9wTW9kYWxDb21wb25lbnQiLCJjb25zb2xlIiwibG9nIiwiYW1vdW50IiwiaGVhZGVyIiwid2lkdGgiLCJjcmVkaXQiLCJzbHVnIiwibWVzc2FnZSIsImFkZCIsImRlZHVjdCIsIk5ld1Nob3BNb2RhbCIsImNvbXBvc2UiLCJjb25uZWN0Iiwic3RhdGUiLCJvd25Qcm9wcyIsImRpc3BhdGNoIiwiaGlkZU1vZGFsIiwiY3JlYXRlU2hvcEFjdGlvbiIsImdldFNob3BzQWN0aW9uIiwiQWxlcnQiLCJyZWR1eEZvcm0iLCJmb3JtIiwiRWRpdFNob3BNb2RhbCIsInVwZGF0ZVNob3BBY3Rpb24iLCJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidHlwZSIsInRpdGxlIiwiZmlyZSIsIlNob3BzQ29tcG9uZW50IiwiZ2V0U2hvcHMiLCJkZWxldGVTaG9wIiwic2hvcHMiLCJ1c2VyIiwidXNlcl90eXBlIiwic2hvd01vZGFsIiwidXNlTW9kYWwiLCJwb3B1bGF0ZVNob3BzIiwidXNlRWZmZWN0IiwiY29sdW1ucyIsInVzZU1lbW8iLCJIZWFkZXIiLCJhY2Nlc3NvciIsImlkIiwiQ2VsbCIsInJvdyIsInR5cGVzIiwib3JpZ2luYWwiLCJpZHgiLCJyZXBsYWNlIiwic29ydGFibGUiLCJjbGFzc05hbWUiLCJjb250YWN0IiwiZGVzY3JpcHRpb24iLCJhZGRyZXNzIiwiY2l0eSIsInppcCIsImxvbmdpdHVkZSIsImxhdGl0dWRlIiwib3BlcmF0aW9ucyIsImZlYXR1cmVzIiwiYW1lbml0aWVzIiwicGF5bWVudF9tZXRob2QiLCJjb21wbGV0aW9uIiwibGV2ZWwiLCJzdGF0dXMiLCJwbXNfZW5hYmxlZCIsImRhdGEiLCJmaWx0ZXJlZERhdGEiLCJzZXRGaWx0ZXJlZERhdGEiLCJoYW5kU2V0RGF0YSIsInNlbGVjdEFsbFNob3BzIiwiY3VycmVudFVzZXJTZWxlY3RvciIsInRleHQiLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvbkNvbG9yIiwiY2FuY2VsQnV0dG9uQ29sb3IiLCJjb25maXJtQnV0dG9uVGV4dCIsInRoZW4iLCJyZXN1bHQiLCJkZWxldGVTaG9wQWN0aW9uIiwicmVzcG9uc2UiLCJtYWtlUmVxdWVzdCIsImF4aW9zIiwiZ2V0IiwiYWN0aW9ucyIsIkFERF9TSE9QUyIsImdldFNob3AiLCJHRVRfU0hPUCIsImNyZWF0ZVNob3AiLCJwb3N0IiwiQUREX1NIT1AiLCJ1cGRhdGVTaG9wIiwicHV0IiwiVVBEQVRFX1NIT1AiLCJkZWxldGUiLCJERUxFVEVfU0hPUCIsInNhdmVTaG9wIiwic2hvcERhdGEiLCJkbkVudGl0aWVzIiwiZGVub3JtYWxpemUiLCJPYmplY3QiLCJrZXlzIiwiZW50aXRpZXMiLCJlbnRpdGllc1NjaGVtYSIsInNlbGVjdFNob3BEZXRhaWxzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNhO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxrQkFBa0IsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDcEQsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxVQUFVLG1CQUFPLENBQUMsaUVBQWtCO0FBQ3BDLGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0MscUJBQXFCLG1CQUFPLENBQUMsdUdBQXFDO0FBQ2xFLGdDQUFnQyxtQkFBTyxDQUFDLGlIQUEwQzs7QUFFbEY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUgsS0FBSyw2QkFBNkI7QUFDbEM7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakRBOztBQUVBLE1BQU1BLEtBQUssR0FBR0MsR0FBRyxJQUFJO0FBQ25CLFFBQU1DLEdBQUcsR0FBRyxFQUFaOztBQUNBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0YsR0FBcEIsRUFBeUJFLENBQUMsRUFBMUIsRUFBOEI7QUFDNUJELE9BQUcsQ0FBQ0UsSUFBSixDQUFTRCxDQUFUO0FBQ0Q7O0FBQ0QsU0FBT0QsR0FBUDtBQUNELENBTkQ7O0FBUUEsTUFBTUcsU0FBUyxHQUFHLE1BQU07QUFDdEIsUUFBTUMsWUFBWSxHQUFHQyxJQUFJLENBQUNDLE1BQUwsRUFBckI7QUFDQSxTQUFPO0FBQ0xDLGFBQVMsRUFBRUMsNENBQUssQ0FBQ0MsUUFBTixDQUFlO0FBQUVDLFdBQUssRUFBRSxDQUFUO0FBQVlDLGFBQU8sRUFBRTtBQUFyQixLQUFmLENBRE47QUFFTEMsWUFBUSxFQUFFSiw0Q0FBSyxDQUFDQyxRQUFOLENBQWU7QUFBRUMsV0FBSyxFQUFFLENBQVQ7QUFBWUMsYUFBTyxFQUFFO0FBQXJCLEtBQWYsQ0FGTDtBQUdMRSxTQUFLLEVBQUVMLDRDQUFLLENBQUNDLFFBQU4sQ0FBZTtBQUFFQyxXQUFLLEVBQUUsQ0FBVDtBQUFZQyxhQUFPLEVBQUU7QUFBckIsS0FBZixJQUEyQyxZQUg3QztBQUlMRyxVQUFNLEVBQUVULElBQUksQ0FBQ1UsS0FBTCxDQUFXVixJQUFJLENBQUNDLE1BQUwsS0FBZ0IsR0FBM0I7QUFKSCxHQUFQO0FBTUQsQ0FSRDs7QUFVZSxTQUFTVSxRQUFULENBQWtCLEdBQUdDLElBQXJCLEVBQTJCO0FBQ3hDLFFBQU1DLGFBQWEsR0FBRyxDQUFDQyxLQUFLLEdBQUcsQ0FBVCxLQUFlO0FBQ25DLFVBQU1wQixHQUFHLEdBQUdrQixJQUFJLENBQUNFLEtBQUQsQ0FBaEI7QUFDQSxXQUFPckIsS0FBSyxDQUFDQyxHQUFELENBQUwsQ0FBV3FCLEdBQVgsQ0FBZUMsQ0FBQyxJQUFJO0FBQ3pCLCtCQUNLbEIsU0FBUyxFQURkO0FBRUVtQixlQUFPLEVBQUVMLElBQUksQ0FBQ0UsS0FBSyxHQUFHLENBQVQsQ0FBSixHQUFrQkQsYUFBYSxDQUFDQyxLQUFLLEdBQUcsQ0FBVCxDQUEvQixHQUE2Q0k7QUFGeEQ7QUFJRCxLQUxNLENBQVA7QUFNRCxHQVJEOztBQVVBLFNBQU9MLGFBQWEsRUFBcEI7QUFDRDs7Ozs7Ozs7OzswQkE5QktwQixLOzBCQVFBSyxTOzBCQVVrQmEsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJ4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUdPLE1BQU1RLE9BQU8sR0FBRyxDQUFDO0FBQUVDLGVBQUY7QUFBaUJDLFVBQWpCO0FBQTJCQztBQUEzQixDQUFELEtBQTJDO0FBQzlELFFBQU0sQ0FBQ0MsTUFBRCxFQUFTQyxTQUFULElBQXNCQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWVOLGFBQWEsSUFBSSxFQUFoQyxDQUE1QjtBQUNBLFFBQU0sQ0FBQ08sYUFBRCxFQUFnQkMsZ0JBQWhCLElBQW9DSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUExQztBQUNBLFFBQU0sQ0FBQ0csTUFBRCxFQUFTQyxTQUFULElBQXNCTCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUE1Qjs7QUFFQSxRQUFNSyxZQUFZLEdBQUdDLEtBQUssSUFBSTtBQUM1QixVQUFNQyxNQUFNLEdBQUdELEtBQUssQ0FBQ0MsTUFBckI7QUFDQSxVQUFNQyxLQUFLLEdBQUdELE1BQU0sQ0FBQ0MsS0FBckI7QUFDQSxVQUFNQyxJQUFJLEdBQUdGLE1BQU0sQ0FBQ0UsSUFBcEI7QUFDQVgsYUFBUyxtQkFDSkQsTUFESTtBQUVQLE9BQUNZLElBQUQsR0FBUUQ7QUFGRCxPQUFUO0FBSUQsR0FSRDs7QUFVQSxRQUFNRSxVQUFVLEdBQUdKLEtBQUssSUFBSTtBQUMxQixVQUFNQyxNQUFNLEdBQUdELEtBQUssQ0FBQ0MsTUFBckI7QUFDQSxVQUFNRSxJQUFJLEdBQUdGLE1BQU0sQ0FBQ0UsSUFBcEI7QUFDQVAsb0JBQWdCLG1CQUNYRCxhQURXO0FBRWQsT0FBQ1EsSUFBRCxHQUFRO0FBRk0sT0FBaEI7QUFJQSxVQUFNRSxDQUFDLEdBQUdmLFFBQVEsQ0FBQ0MsTUFBRCxDQUFsQjtBQUNBTyxhQUFTLG1CQUNKRCxNQURJLE1BRUpRLENBRkksRUFBVDtBQUlELEdBWkQ7O0FBY0EsUUFBTUMsWUFBWSxHQUFHTixLQUFLLElBQUk7QUFFNUIsVUFBTUssQ0FBQyxHQUFHZixRQUFRLENBQUNDLE1BQUQsQ0FBbEI7QUFDQU8sYUFBUyxtQkFDSkQsTUFESSxNQUVKUSxDQUZJLEVBQVQ7QUFLQWhCLFlBQVEsbUJBQU1FLE1BQU47QUFBY2M7QUFBZCxPQUFSO0FBQ0QsR0FURDs7QUFXQSxTQUFPO0FBQ0xkLFVBREs7QUFFTEksaUJBRks7QUFHTEUsVUFISztBQUlMRSxnQkFKSztBQUtMTyxnQkFMSztBQU1MRjtBQU5LLEdBQVA7QUFRRCxDQWhESTs7Y0FBTWpCLE87O0FBa0ROLE1BQU1vQixrQkFBa0IsR0FBRyxDQUFDO0FBQUVsQixVQUFGO0FBQVlEO0FBQVosQ0FBRCxLQUFpQztBQUNqRW9CLFNBQU8sQ0FBQ0MsR0FBUixDQUFZckIsYUFBWjtBQUNBLFFBQU07QUFBRUcsVUFBRjtBQUFVSSxpQkFBVjtBQUF5QkUsVUFBekI7QUFBaUNFLGdCQUFqQztBQUErQ08sZ0JBQS9DO0FBQTZERjtBQUE3RCxNQUE0RWpCLE9BQU8sQ0FBQztBQUN4RkMsaUJBRHdGO0FBRXhGQyxZQUZ3Rjs7QUFHeEZDLFlBQVEsQ0FBQ0MsTUFBRCxFQUFTO0FBQ2YsWUFBTU0sTUFBTSxHQUFHLEVBQWY7O0FBRUEsVUFBSU4sTUFBTSxDQUFDbUIsTUFBUCxLQUFrQixFQUF0QixFQUEwQjtBQUN4QmIsY0FBTSxDQUFDYSxNQUFQLEdBQWdCLDBCQUFoQjtBQUNEOztBQUVELGFBQU9iLE1BQVA7QUFDRDs7QUFYdUYsR0FBRCxDQUF6RjtBQWNBLFNBQ0k7QUFBTSxZQUFRLEVBQUVTO0FBQWhCLEtBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQWdEZixNQUFNLENBQUNvQixNQUF2RCxDQURGLENBREYsRUFJRTtBQUFLLGFBQVMsRUFBQyxxQkFBZjtBQUFxQyxTQUFLLEVBQUU7QUFBRUMsV0FBSyxFQUFFO0FBQVQ7QUFBNUMsS0FDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixxQkFERixFQUVFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FBMkNyQixNQUFNLENBQUNzQixNQUFsRCxDQUZGLENBREYsRUFLRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFO0FBQU8sV0FBTyxFQUFDO0FBQWYsS0FDRTtBQUFNLGFBQVMsRUFBQztBQUFoQixjQURGLEVBRUU7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixRQUFJLEVBQUMsUUFBeEI7QUFBaUMsYUFBUyxFQUFDLG1CQUEzQztBQUErRCxlQUFXLEVBQUMsMEJBQTNFO0FBQXNHLFlBQVEsRUFBRWQsWUFBaEg7QUFBOEgsU0FBSyxFQUFFUixNQUFNLENBQUNtQjtBQUE1SSxJQUZGLENBREYsQ0FERixFQU9FO0FBQU8sUUFBSSxFQUFDLFFBQVo7QUFBcUIsUUFBSSxFQUFDLE1BQTFCO0FBQWlDLFlBQVEsRUFBRVgsWUFBM0M7QUFBeUQsU0FBSyxFQUFFUixNQUFNLENBQUN1QjtBQUF2RSxJQVBGLENBTEYsQ0FKRixFQW1CRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFO0FBQU8sV0FBTyxFQUFDO0FBQWYsS0FDRTtBQUFNLGFBQVMsRUFBQztBQUFoQixjQURGLEVBRUU7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixRQUFJLEVBQUMsU0FBeEI7QUFBa0MsYUFBUyxFQUFDLG1CQUE1QztBQUFnRSxlQUFXLEVBQUMsMEJBQTVFO0FBQXVHLFlBQVEsRUFBRWYsWUFBakg7QUFBK0gsU0FBSyxFQUFFUixNQUFNLENBQUN3QjtBQUE3SSxJQUZGLENBREYsQ0FERixDQW5CRixFQTRCRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0U7QUFBUSxhQUFTLEVBQUMsOENBQWxCO0FBQWlFLFFBQUksRUFBQztBQUF0RSxLQUFnRnhCLE1BQU0sQ0FBQ3lCLEdBQXZGLEVBQTRGekIsTUFBTSxDQUFDMEIsTUFBbkcsYUFERixDQTVCRixDQURGLENBREo7QUFvQ0QsQ0FwRE07O2NBQU1WLGtCLCtGQUV1RXBCLE87O0FBb0RwRixNQUFNK0IsWUFBWSxHQUFHQyx5REFBTyxDQUMxQkMsMkRBQU8sQ0FDTCxDQUFDQyxLQUFELEVBQVFDLFFBQVIsTUFBc0I7QUFDcEJsQyxlQUFhLEVBQUVrQztBQURLLENBQXRCLENBREssRUFJTCxDQUFDQyxRQUFELEVBQVc7QUFBRUM7QUFBRixDQUFYLE1BQThCO0FBQzVCbkMsVUFBUSxFQUFFRSxNQUFNLElBQUk7QUFDbEJnQyxZQUFRLENBQUNFLCtFQUFnQixDQUFDbEMsTUFBRCxDQUFqQixDQUFSO0FBQ0FnQyxZQUFRLENBQUNHLDZFQUFjLEVBQWYsQ0FBUjtBQUNBRixhQUFTO0FBQ1RHLFNBQUssQ0FBQyxTQUFELEVBQVksNEJBQVosQ0FBTDtBQUNEO0FBTjJCLENBQTlCLENBSkssQ0FEbUIsRUFjMUJDLDREQUFTLENBQUM7QUFDUkMsTUFBSSxFQUFFO0FBREUsQ0FBRCxDQWRpQixDQUFQLENBaUJuQnRCLGtCQWpCbUIsQ0FBckI7QUFtQkEsTUFBTXVCLGFBQWEsR0FBR1gseURBQU8sQ0FDM0JDLDJEQUFPLENBQ0wsQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLE1BQXNCO0FBQ3BCbEMsZUFBYSxFQUFFa0M7QUFESyxDQUF0QixDQURLLEVBSUwsQ0FBQ0MsUUFBRCxFQUFXO0FBQUVDO0FBQUYsQ0FBWCxNQUE4QjtBQUM1Qm5DLFVBQVEsRUFBRUUsTUFBTSxJQUFJO0FBQ2xCZ0MsWUFBUSxDQUFDUSwrRUFBZ0IsQ0FBQ3hDLE1BQUQsQ0FBakIsQ0FBUjtBQUNBZ0MsWUFBUSxDQUFDRyw2RUFBYyxFQUFmLENBQVI7QUFDQUYsYUFBUztBQUNURyxTQUFLLENBQUMsU0FBRCxFQUFZLDRCQUFaLENBQUw7QUFDRDtBQU4yQixDQUE5QixDQUpLLENBRG9CLEVBYzNCQyw0REFBUyxDQUFDO0FBQ1JDLE1BQUksRUFBRTtBQURFLENBQUQsQ0Fka0IsQ0FBUCxDQWlCcEJ0QixrQkFqQm9CLENBQXRCO0FBbUJBLE1BQU15QixLQUFLLEdBQUdDLG1EQUFJLENBQUNDLEtBQUwsQ0FBVztBQUN2QkMsT0FBSyxFQUFFLElBRGdCO0FBRXZCQyxVQUFRLEVBQUUsU0FGYTtBQUd2QkMsbUJBQWlCLEVBQUUsS0FISTtBQUl2QkMsT0FBSyxFQUFFO0FBSmdCLENBQVgsQ0FBZDs7QUFPQSxNQUFNWCxLQUFLLEdBQUcsQ0FBQ1ksSUFBRCxFQUFPQyxLQUFQLEtBQWlCUixLQUFLLENBQUNTLElBQU4sQ0FBVztBQUN4Q0YsTUFBSSxFQUFFQSxJQURrQztBQUV4Q0MsT0FBSyxFQUFFQTtBQUZpQyxDQUFYLENBQS9COztBQU9BLFNBQVNFLGNBQVQsQ0FBd0I7QUFBRUMsVUFBRjtBQUFZQyxZQUFaO0FBQXdCQyxPQUF4QjtBQUErQkM7QUFBL0IsQ0FBeEIsRUFBK0Q7QUFDN0QsUUFBTTtBQUFFQztBQUFGLE1BQWdCRCxJQUF0QjtBQUdBLFFBQU07QUFBRUU7QUFBRixNQUFnQkMscUVBQVEsRUFBOUI7O0FBQ0EsUUFBTUMsYUFBYSxHQUFHLFlBQVk7QUFDaEMsVUFBTVAsUUFBUSxFQUFkO0FBQ0QsR0FGRDs7QUFJQVEseURBQVMsQ0FBQyxNQUFNO0FBQ2RELGlCQUFhO0FBQ2QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBMUMsU0FBTyxDQUFDQyxHQUFSLENBQVlvQyxLQUFaO0FBRUEsUUFBTU8sT0FBTyxHQUFHM0QsNENBQUssQ0FBQzRELE9BQU4sQ0FDZCxNQUFNLENBQ0o7QUFDRUMsVUFBTSxFQUFFLFdBRFY7QUFFRUMsWUFBUSxFQUFFO0FBRlosR0FESSxFQUtKO0FBQ0VDLE1BQUUsRUFBRSxNQUROO0FBRUVGLFVBQU0sRUFBRSxNQUZWO0FBR0VDLFlBQVEsRUFBRSxNQUhaO0FBSUVFLFFBQUksRUFBRUMsR0FBRyxJQUFJO0FBQ1hsRCxhQUFPLENBQUNDLEdBQVIsQ0FBWWlELEdBQVo7QUFDQSxZQUFNQyxLQUFLLEdBQUdELEdBQUcsQ0FBQ0EsR0FBSixDQUFRRSxRQUFSLENBQWlCckIsSUFBakIsSUFBeUIsRUFBdkM7QUFDQS9CLGFBQU8sQ0FBQ0MsR0FBUixDQUFZa0QsS0FBWjtBQUNBLGFBQ0Usd0hBQ0VBLEtBQUssQ0FBQzVFLEdBQU4sQ0FBVSxDQUFDd0QsSUFBRCxFQUFPc0IsR0FBUCxLQUNWO0FBQU0saUJBQVMsRUFBQyxpREFBaEI7QUFBa0UsV0FBRyxFQUFFQTtBQUF2RSxTQUE2RXRCLElBQUksQ0FBQ3VCLE9BQUwsQ0FBYSxHQUFiLEVBQWtCLEdBQWxCLENBQTdFLEVBQXFHLEdBQXJHLENBREEsQ0FERixDQURGO0FBT0QsS0FmSDtBQWdCRUMsWUFBUSxFQUFFLElBaEJaO0FBaUJFbkQsU0FBSyxFQUFFO0FBakJULEdBTEksRUF3Qko7QUFDRTBDLFVBQU0sRUFBRSxNQURWO0FBRUVDLFlBQVEsRUFBRTtBQUZaLEdBeEJJLEVBNEJKO0FBQ0VELFVBQU0sRUFBRSxZQURWO0FBRUVDLFlBQVEsRUFBRSxZQUZaO0FBR0VTLGFBQVMsRUFBRTtBQUhiLEdBNUJJLEVBaUNKO0FBQ0VWLFVBQU0sRUFBRSxnQkFEVjtBQUVFQyxZQUFRLEVBQUU7QUFGWixHQWpDSSxFQXFDSjtBQUNFRCxVQUFNLEVBQUUsT0FEVjtBQUVFQyxZQUFRLEVBQUUsT0FGWjtBQUdFUyxhQUFTLEVBQUU7QUFIYixHQXJDSSxFQTBDSjtBQUNFVixVQUFNLEVBQUUsYUFEVjtBQUVFQyxZQUFRLEVBQUUsWUFGWjtBQUdFUyxhQUFTLEVBQUU7QUFIYixHQTFDSSxFQStDSjtBQUNFUixNQUFFLEVBQUUsUUFETjtBQUVFRCxZQUFRLEVBQUUsTUFGWjtBQUdFRSxRQUFJLEVBQUVDLEdBQUcsSUFBSTtBQUNYLFlBQU01QyxJQUFJLEdBQUc0QyxHQUFHLENBQUNBLEdBQUosQ0FBUUUsUUFBUixDQUFpQjlDLElBQTlCO0FBQ0EsWUFBTVgsSUFBSSxHQUFHdUQsR0FBRyxDQUFDQSxHQUFKLENBQVFFLFFBQVIsQ0FBaUJ6RCxJQUE5QjtBQUNBLFlBQU1vQyxJQUFJLEdBQUdtQixHQUFHLENBQUNBLEdBQUosQ0FBUUUsUUFBUixDQUFpQnJCLElBQTlCO0FBQ0EsWUFBTTBCLE9BQU8sR0FBR1AsR0FBRyxDQUFDQSxHQUFKLENBQVFFLFFBQVIsQ0FBaUJLLE9BQWpDO0FBQ0EsWUFBTUMsV0FBVyxHQUFHUixHQUFHLENBQUNBLEdBQUosQ0FBUUUsUUFBUixDQUFpQk0sV0FBckM7QUFDQSxZQUFNQyxPQUFPLEdBQUdULEdBQUcsQ0FBQ0EsR0FBSixDQUFRRSxRQUFSLENBQWlCTyxPQUFqQztBQUNBLFlBQU1DLElBQUksR0FBR1YsR0FBRyxDQUFDQSxHQUFKLENBQVFFLFFBQVIsQ0FBaUJRLElBQTlCO0FBQ0EsWUFBTUMsR0FBRyxHQUFHWCxHQUFHLENBQUNBLEdBQUosQ0FBUUUsUUFBUixDQUFpQlMsR0FBN0I7QUFDQSxZQUFNQyxTQUFTLEdBQUdaLEdBQUcsQ0FBQ0EsR0FBSixDQUFRRSxRQUFSLENBQWlCVSxTQUFuQztBQUNBLFlBQU1DLFFBQVEsR0FBR2IsR0FBRyxDQUFDQSxHQUFKLENBQVFFLFFBQVIsQ0FBaUJXLFFBQWxDO0FBQ0EsWUFBTUMsVUFBVSxHQUFHZCxHQUFHLENBQUNBLEdBQUosQ0FBUUUsUUFBUixDQUFpQlksVUFBcEM7QUFDQSxZQUFNQyxRQUFRLEdBQUdmLEdBQUcsQ0FBQ0EsR0FBSixDQUFRRSxRQUFSLENBQWlCYSxRQUFsQztBQUNBLFlBQU1DLFNBQVMsR0FBR2hCLEdBQUcsQ0FBQ0EsR0FBSixDQUFRRSxRQUFSLENBQWlCYyxTQUFuQztBQUNBLFlBQU1DLGNBQWMsR0FBR2pCLEdBQUcsQ0FBQ0EsR0FBSixDQUFRRSxRQUFSLENBQWlCZSxjQUF4QztBQUNBLFlBQU1DLFVBQVUsR0FBR2xCLEdBQUcsQ0FBQ0EsR0FBSixDQUFRRSxRQUFSLENBQWlCZ0IsVUFBcEM7QUFDQSxZQUFNQyxLQUFLLEdBQUduQixHQUFHLENBQUNBLEdBQUosQ0FBUUUsUUFBUixDQUFpQmlCLEtBQS9CO0FBQ0EsWUFBTUMsTUFBTSxHQUFHcEIsR0FBRyxDQUFDQSxHQUFKLENBQVFFLFFBQVIsQ0FBaUJrQixNQUFoQztBQUNBLFlBQU1DLFdBQVcsR0FBR3JCLEdBQUcsQ0FBQ0EsR0FBSixDQUFRRSxRQUFSLENBQWlCbUIsV0FBckM7QUFDQXZFLGFBQU8sQ0FBQ0MsR0FBUixDQUFZaUQsR0FBWjtBQUNBLGFBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRSwyREFBQyxzREFBRDtBQUFNLGlCQUFTLEVBQUMsaUZBQWhCO0FBQWtHLFVBQUUsMkJBQW9CNUMsSUFBcEI7QUFBcEcsZ0JBREYsRUFHVSxHQUhWLEVBSUUsMkRBQUMsc0RBQUQ7QUFBTSxpQkFBUyxFQUFDLDhFQUFoQjtBQUErRixVQUFFLGtDQUEyQkEsSUFBM0I7QUFBakcsa0JBSkYsRUFNVSxHQU5WLEVBT0UsMkRBQUMsc0RBQUQ7QUFBTSxpQkFBUyxFQUFDLGdGQUFoQjtBQUFpRyxVQUFFLHNDQUErQkEsSUFBL0I7QUFBbkcsc0JBUEYsRUFTVSxHQVRWLEVBVUUsMkRBQUMsc0RBQUQ7QUFBTSxpQkFBUyxFQUFDLDRFQUFoQjtBQUE2RixlQUFPLEVBQUUsTUFBTThCLFVBQVUsQ0FBQzlCLElBQUQsQ0FBdEg7QUFBOEgsVUFBRSxFQUFDO0FBQWpJLGtCQVZGLENBREY7QUFnQkQsS0F2Q0g7QUF3Q0V3QyxVQUFNLEVBQUUsUUF4Q1Y7QUF5Q0VTLFlBQVEsRUFBRSxLQXpDWjtBQTBDRW5ELFNBQUssRUFBRTtBQTFDVCxHQS9DSSxDQURRLEVBNkZkLEVBN0ZjLENBQWhCO0FBZ0dBLFFBQU1vRSxJQUFJLEdBQUd2Riw0Q0FBSyxDQUFDNEQsT0FBTixDQUFjLE1BQU0xRSwwREFBUSxDQUFDLEVBQUQsQ0FBNUIsRUFBa0MsRUFBbEMsQ0FBYjtBQUNBLFFBQU0sQ0FBQ3NHLFlBQUQsRUFBZUMsZUFBZixJQUFrQ3hGLHNEQUFRLENBQUNtRCxLQUFELENBQWhEOztBQUNBLFFBQU1zQyxXQUFXLEdBQUd0QyxLQUFLLElBQUk7QUFDM0JxQyxtQkFBZSxDQUFDckMsS0FBRCxDQUFmO0FBQ0QsR0FGRDs7QUFHQSxTQUNFLDJEQUFDLDhDQUFELFFBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNBLDJEQUFDLHNEQUFEO0FBQVksU0FBSyxFQUFDLE1BQWxCO0FBQXlCLFlBQVEsRUFBQztBQUFsQyxLQUNFLDJEQUFDLHNEQUFEO0FBQU0sTUFBRSxFQUFDLHVCQUFUO0FBQWlDLGFBQVMsRUFBQztBQUEzQyxLQUNFO0FBQUcsYUFBUyxFQUFDO0FBQWIsbUJBREYsRUFFRSxrRkFGRixDQURGLENBREEsRUFRRSwyREFBQyxxREFBRDtBQUFXLFdBQU8sRUFBRU8sT0FBcEI7QUFBNkIsUUFBSSxFQUFFUDtBQUFuQyxJQVJGLENBREYsQ0FERjtBQWNEOztjQWxJUUgsYyxvSUFJZU8sNkQ7O2lCQWdJVDdCLDJEQUFPLENBQ3BCQyxLQUFLLEtBQUs7QUFDUndCLE9BQUssRUFBRXVDLDZFQUFjLENBQUMvRCxLQUFELENBRGI7QUFFUnlCLE1BQUksRUFBRXVDLG9GQUFtQixDQUFDaEUsS0FBRDtBQUZqQixDQUFMLENBRGUsRUFLcEJFLFFBQVEsS0FBSztBQUNYb0IsVUFBUSxFQUFFLE1BQU1wQixRQUFRLENBQUNHLDZFQUFjLEVBQWYsQ0FEYjtBQUVYa0IsWUFBVSxFQUFFWSxFQUFFLElBQUk7QUFDaEJ2Qix1REFBSSxDQUFDUSxJQUFMLENBQVU7QUFDUkQsV0FBSyxFQUFFLGVBREM7QUFFUjhDLFVBQUksRUFBRSxtQ0FGRTtBQUdSQyxzQkFBZ0IsRUFBRSxJQUhWO0FBSVJDLHdCQUFrQixFQUFFLFNBSlo7QUFLUkMsdUJBQWlCLEVBQUUsTUFMWDtBQU1SQyx1QkFBaUIsRUFBRTtBQU5YLEtBQVYsRUFPR0MsSUFQSCxDQU9TQyxNQUFELElBQVk7QUFDbEIsVUFBSUEsTUFBTSxDQUFDMUYsS0FBWCxFQUFrQjtBQUNoQnFCLGdCQUFRLENBQUNzRSwrRUFBZ0IsQ0FBQ3JDLEVBQUQsQ0FBakIsQ0FBUjtBQUNBN0IsYUFBSyxDQUFDLFNBQUQsRUFBWSw0QkFBWixDQUFMO0FBQ0Q7QUFDRixLQVpEO0FBYUQ7QUFoQlUsQ0FBTCxDQUxZLENBQVAsQ0F1QmJlLGNBdkJhLEM7O0FBQUE7Ozs7Ozs7Ozs7MEJBaFNGdkQsTzswQkFrREFvQixrQjswQkFzRFBXLFk7MEJBbUJBWSxhOzBCQW1CQUUsSzswQkFPQUwsSzswQkFPR2UsYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hMVDtBQUNBO0FBQ0E7QUFFTyxNQUFNQyxRQUFRLEdBQUcsTUFBTSxNQUFNcEIsUUFBTixJQUFrQjtBQUM5QyxRQUFNdUUsUUFBUSxHQUFHLE1BQU12RSxRQUFRLENBQzdCd0Usa0ZBQVcsQ0FBQyxXQUFELEVBQWMsTUFBTUMsNENBQUssQ0FBQ0MsR0FBTixjQUFwQixDQURrQixDQUEvQjtBQUlBMUUsVUFBUSxDQUFDO0FBQ1BnQixRQUFJLEVBQUUyRCx5REFBTyxDQUFDQyxTQURQO0FBRVB0RCxTQUFLLEVBQUVpRCxRQUFRLENBQUNkLElBQVQsQ0FBY0E7QUFGZCxHQUFELENBQVI7QUFJRCxDQVRNO0FBV0EsTUFBTW9CLE9BQU8sR0FBR3RGLElBQUksSUFBSSxNQUFNUyxRQUFOLElBQWtCO0FBQy9DLFFBQU11RSxRQUFRLEdBQUcsTUFBTXZFLFFBQVEsQ0FDN0J3RSxrRkFBVyxvQkFBYWpGLElBQWIsR0FBcUIsTUFBTWtGLDRDQUFLLENBQUNDLEdBQU4sc0JBQXdCbkYsSUFBeEIsRUFBM0IsQ0FEa0IsQ0FBL0I7QUFJQVMsVUFBUSxDQUFDO0FBQ1BnQixRQUFJLEVBQUUyRCx5REFBTyxDQUFDRyxRQURQO0FBRVB4RCxTQUFLLEVBQUVpRCxRQUFRLENBQUNkLElBQVQsQ0FBY0E7QUFGZCxHQUFELENBQVI7QUFJRCxDQVRNO0FBV0EsTUFBTXNCLFVBQVUsR0FBR3RCLElBQUksSUFBSSxNQUFNekQsUUFBTixJQUFrQjtBQUNsRCxRQUFNdUUsUUFBUSxHQUFHLE1BQU12RSxRQUFRLENBQzdCd0Usa0ZBQVcsQ0FBQyxhQUFELEVBQWdCLE1BQU1DLDRDQUFLLENBQUNPLElBQU4sZUFBeUJ2QixJQUF6QixDQUF0QixDQURrQixDQUEvQjtBQUlBekQsVUFBUSxDQUFDO0FBQ1BnQixRQUFJLEVBQUUyRCx5REFBTyxDQUFDTSxRQURQO0FBRVAzRCxTQUFLLEVBQUVpRCxRQUFRLENBQUNkLElBQVQsQ0FBY0E7QUFGZCxHQUFELENBQVI7QUFJRCxDQVRNO0FBV0EsTUFBTXlCLFVBQVUsR0FBR3pCLElBQUksSUFBSSxNQUFNekQsUUFBTixJQUFrQjtBQUNsRCxRQUFNdUUsUUFBUSxHQUFHLE1BQU12RSxRQUFRLENBQzdCd0Usa0ZBQVcsdUJBQWdCZixJQUFJLENBQUNsRSxJQUFyQixHQUE2QixNQUN0Q2tGLDRDQUFLLENBQUNVLEdBQU4sc0JBQXdCMUIsSUFBSSxDQUFDbEUsSUFBN0IsR0FBcUNrRSxJQUFyQyxDQURTLENBRGtCLENBQS9CO0FBTUF6RCxVQUFRLENBQUM7QUFDUGdCLFFBQUksRUFBRTJELHlEQUFPLENBQUNTLFdBRFA7QUFFUDlELFNBQUssRUFBRWlELFFBQVEsQ0FBQ2QsSUFBVCxDQUFjQTtBQUZkLEdBQUQsQ0FBUjtBQUlELENBWE07QUFhQSxNQUFNcEMsVUFBVSxHQUFHOUIsSUFBSSxJQUFJLE1BQU1TLFFBQU4sSUFBa0I7QUFDbEQsUUFBTUEsUUFBUSxDQUNad0Usa0ZBQVcsdUJBQWdCakYsSUFBaEIsR0FBd0IsTUFBTWtGLDRDQUFLLENBQUNZLE1BQU4sc0JBQTJCOUYsSUFBM0IsRUFBOUIsQ0FEQyxDQUFkO0FBSUFTLFVBQVEsQ0FBQztBQUNQZ0IsUUFBSSxFQUFFMkQseURBQU8sQ0FBQ1csV0FEUDtBQUVQL0Y7QUFGTyxHQUFELENBQVI7QUFJRCxDQVRNO0FBV0EsTUFBTWdHLFFBQVEsR0FBR0MsUUFBUSxJQUFJLE1BQU14RixRQUFOLElBQWtCO0FBQ3BELFFBQU07QUFBRVQ7QUFBRixNQUFXaUcsUUFBakI7QUFFQSxRQUFNakIsUUFBUSxHQUFHLE1BQU12RSxRQUFRLENBQzdCd0Usa0ZBQVcsQ0FBQyxvQkFBRCxFQUF1QixNQUNoQ0MsNENBQUssQ0FBQ1UsR0FBTixzQkFBd0I1RixJQUF4QixHQUFnQ2lHLFFBQWhDLENBRFMsQ0FEa0IsQ0FBL0I7QUFNQSxTQUFPakIsUUFBUDtBQUNELENBVk07Ozs7Ozs7Ozs7MEJBekRNbkQsUTswQkFXQXlELE87MEJBV0FFLFU7MEJBV0FHLFU7MEJBYUE3RCxVOzBCQVdBa0UsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RGI7QUFFQTtBQUVPLE1BQU0xQixjQUFjLEdBQUcvRCxLQUFLLElBQUk7QUFDckMsUUFBTTJGLFVBQVUsR0FBR0MsNkRBQVcsQ0FDNUI7QUFBRXBFLFNBQUssRUFBRXFFLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZOUYsS0FBSyxDQUFDK0YsUUFBTixDQUFldkUsS0FBM0I7QUFBVCxHQUQ0QixFQUU1QndFLHNEQUY0QixFQUc1QmhHLEtBQUssQ0FBQytGLFFBSHNCLENBQTlCO0FBTUEsU0FBT0osVUFBVSxDQUFDbkUsS0FBbEI7QUFDRCxDQVJNO0FBVUEsTUFBTXlFLGlCQUFpQixHQUFHLENBQUNqRyxLQUFELEVBQVFQLElBQVIsS0FBaUI7QUFFaEQsUUFBTWtHLFVBQVUsR0FBR0MsNkRBQVcsQ0FDNUI7QUFBRXBFLFNBQUssRUFBRSxDQUFDL0IsSUFBRDtBQUFULEdBRDRCLEVBRTVCdUcsc0RBRjRCLEVBRzVCaEcsS0FBSyxDQUFDK0YsUUFIc0IsQ0FBOUI7QUFNQSxTQUFPSixVQUFVLENBQUNuRSxLQUFsQjtBQUNELENBVE07Ozs7Ozs7Ozs7MEJBVk11QyxjOzBCQVVBa0MsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZGIsZTs7Ozs7Ozs7Ozs7QUNBQSxlOzs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoianMvMTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBgU3ltYm9sLnByb3RvdHlwZS5kZXNjcmlwdGlvbmAgZ2V0dGVyXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zeW1ib2wucHJvdG90eXBlLmRlc2NyaXB0aW9uXG4ndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG52YXIgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3B5LWNvbnN0cnVjdG9yLXByb3BlcnRpZXMnKTtcblxudmFyIE5hdGl2ZVN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG5cbmlmIChERVNDUklQVE9SUyAmJiB0eXBlb2YgTmF0aXZlU3ltYm9sID09ICdmdW5jdGlvbicgJiYgKCEoJ2Rlc2NyaXB0aW9uJyBpbiBOYXRpdmVTeW1ib2wucHJvdG90eXBlKSB8fFxuICAvLyBTYWZhcmkgMTIgYnVnXG4gIE5hdGl2ZVN5bWJvbCgpLmRlc2NyaXB0aW9uICE9PSB1bmRlZmluZWRcbikpIHtcbiAgdmFyIEVtcHR5U3RyaW5nRGVzY3JpcHRpb25TdG9yZSA9IHt9O1xuICAvLyB3cmFwIFN5bWJvbCBjb25zdHJ1Y3RvciBmb3IgY29ycmVjdCB3b3JrIHdpdGggdW5kZWZpbmVkIGRlc2NyaXB0aW9uXG4gIHZhciBTeW1ib2xXcmFwcGVyID0gZnVuY3Rpb24gU3ltYm9sKCkge1xuICAgIHZhciBkZXNjcmlwdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPCAxIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogU3RyaW5nKGFyZ3VtZW50c1swXSk7XG4gICAgdmFyIHJlc3VsdCA9IHRoaXMgaW5zdGFuY2VvZiBTeW1ib2xXcmFwcGVyXG4gICAgICA/IG5ldyBOYXRpdmVTeW1ib2woZGVzY3JpcHRpb24pXG4gICAgICAvLyBpbiBFZGdlIDEzLCBTdHJpbmcoU3ltYm9sKHVuZGVmaW5lZCkpID09PSAnU3ltYm9sKHVuZGVmaW5lZCknXG4gICAgICA6IGRlc2NyaXB0aW9uID09PSB1bmRlZmluZWQgPyBOYXRpdmVTeW1ib2woKSA6IE5hdGl2ZVN5bWJvbChkZXNjcmlwdGlvbik7XG4gICAgaWYgKGRlc2NyaXB0aW9uID09PSAnJykgRW1wdHlTdHJpbmdEZXNjcmlwdGlvblN0b3JlW3Jlc3VsdF0gPSB0cnVlO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMoU3ltYm9sV3JhcHBlciwgTmF0aXZlU3ltYm9sKTtcbiAgdmFyIHN5bWJvbFByb3RvdHlwZSA9IFN5bWJvbFdyYXBwZXIucHJvdG90eXBlID0gTmF0aXZlU3ltYm9sLnByb3RvdHlwZTtcbiAgc3ltYm9sUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3ltYm9sV3JhcHBlcjtcblxuICB2YXIgc3ltYm9sVG9TdHJpbmcgPSBzeW1ib2xQcm90b3R5cGUudG9TdHJpbmc7XG4gIHZhciBuYXRpdmUgPSBTdHJpbmcoTmF0aXZlU3ltYm9sKCd0ZXN0JykpID09ICdTeW1ib2wodGVzdCknO1xuICB2YXIgcmVnZXhwID0gL15TeW1ib2xcXCgoLiopXFwpW14pXSskLztcbiAgZGVmaW5lUHJvcGVydHkoc3ltYm9sUHJvdG90eXBlLCAnZGVzY3JpcHRpb24nLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZGVzY3JpcHRpb24oKSB7XG4gICAgICB2YXIgc3ltYm9sID0gaXNPYmplY3QodGhpcykgPyB0aGlzLnZhbHVlT2YoKSA6IHRoaXM7XG4gICAgICB2YXIgc3RyaW5nID0gc3ltYm9sVG9TdHJpbmcuY2FsbChzeW1ib2wpO1xuICAgICAgaWYgKGhhcyhFbXB0eVN0cmluZ0Rlc2NyaXB0aW9uU3RvcmUsIHN5bWJvbCkpIHJldHVybiAnJztcbiAgICAgIHZhciBkZXNjID0gbmF0aXZlID8gc3RyaW5nLnNsaWNlKDcsIC0xKSA6IHN0cmluZy5yZXBsYWNlKHJlZ2V4cCwgJyQxJyk7XG4gICAgICByZXR1cm4gZGVzYyA9PT0gJycgPyB1bmRlZmluZWQgOiBkZXNjO1xuICAgIH1cbiAgfSk7XG5cbiAgJCh7IGdsb2JhbDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcbiAgICBTeW1ib2w6IFN5bWJvbFdyYXBwZXJcbiAgfSk7XG59XG4iLCJpbXBvcnQgbmFtb3IgZnJvbSAnbmFtb3InXG5cbmNvbnN0IHJhbmdlID0gbGVuID0+IHtcbiAgY29uc3QgYXJyID0gW11cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGFyci5wdXNoKGkpXG4gIH1cbiAgcmV0dXJuIGFyclxufVxuXG5jb25zdCBuZXdQZXJzb24gPSAoKSA9PiB7XG4gIGNvbnN0IHN0YXR1c0NoYW5jZSA9IE1hdGgucmFuZG9tKClcbiAgcmV0dXJuIHtcbiAgICBmaXJzdE5hbWU6IG5hbW9yLmdlbmVyYXRlKHsgd29yZHM6IDEsIG51bWJlcnM6IDAgfSksXG4gICAgbGFzdE5hbWU6IG5hbW9yLmdlbmVyYXRlKHsgd29yZHM6IDEsIG51bWJlcnM6IDAgfSksXG4gICAgZW1haWw6IG5hbW9yLmdlbmVyYXRlKHsgd29yZHM6IDEsIG51bWJlcnM6IDAgfSkgKyAnQGdtYWlsLmNvbScsXG4gICAgbW9iaWxlOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFrZURhdGEoLi4ubGVucykge1xuICBjb25zdCBtYWtlRGF0YUxldmVsID0gKGRlcHRoID0gMCkgPT4ge1xuICAgIGNvbnN0IGxlbiA9IGxlbnNbZGVwdGhdXG4gICAgcmV0dXJuIHJhbmdlKGxlbikubWFwKGQgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ubmV3UGVyc29uKCksXG4gICAgICAgIHN1YlJvd3M6IGxlbnNbZGVwdGggKyAxXSA/IG1ha2VEYXRhTGV2ZWwoZGVwdGggKyAxKSA6IHVuZGVmaW5lZCxcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIG1ha2VEYXRhTGV2ZWwoKVxufVxuIiwiaW1wb3J0IEhlbG1ldCBmcm9tICdyZWFjdC1oZWxtZXQnXG5pbXBvcnQgeyBjb21wb3NlIH0gZnJvbSAncmVjb21wb3NlJ1xuaW1wb3J0IHsgcmVkdXhGb3JtLCBGaWVsZCB9IGZyb20gJ3JlZHV4LWZvcm0nXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZU1vZGFsIH0gZnJvbSAncmVhY3QtY29udGV4dC1tb2RhbHMnXG5pbXBvcnQgeyBOZXV0cmFsQnV0dG9uLCBQYWdlSGVhZGVyLCBEYXRhVGFibGUgfSBmcm9tICdjb21wb25lbnRzJ1xuaW1wb3J0IG1ha2VEYXRhIGZyb20gJy4uLy4uL21ha2VEYXRhJ1xuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXG5pbXBvcnQgeyBzZWxlY3RBbGxTaG9wcyB9IGZyb20gJ3N0b3JlL3NlbGVjdG9ycy9zaG9wcydcbmltcG9ydCB7IGN1cnJlbnRVc2VyU2VsZWN0b3IgfSBmcm9tICdzdG9yZS9zZWxlY3RvcnMvc2Vzc2lvbidcbmltcG9ydCB7XG4gIGdldFNob3BzIGFzIGdldFNob3BzQWN0aW9uLFxuICB1cGRhdGVTaG9wIGFzIHVwZGF0ZVNob3BBY3Rpb24sXG4gIGNyZWF0ZVNob3AgYXMgY3JlYXRlU2hvcEFjdGlvbixcbiAgZGVsZXRlU2hvcCBhcyBkZWxldGVTaG9wQWN0aW9uLFxufSBmcm9tICdzdG9yZS9hY3Rpb24tY3JlYXRvcnMvc2hvcHMnXG5pbXBvcnQgeyBMaW5rLCBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cblxuZXhwb3J0IGNvbnN0IHVzZUZvcm0gPSAoeyBpbml0aWFsVmFsdWVzLCBvblN1Ym1pdCwgdmFsaWRhdGUgfSkgPT4ge1xuICAgIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSBSZWFjdC51c2VTdGF0ZShpbml0aWFsVmFsdWVzIHx8IHt9KVxuICAgIGNvbnN0IFt0b3VjaGVkVmFsdWVzLCBzZXRUb3VjaGVkVmFsdWVzXSA9IFJlYWN0LnVzZVN0YXRlKHt9KVxuICAgIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSBSZWFjdC51c2VTdGF0ZSh7fSlcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldFxuICAgICAgY29uc3QgdmFsdWUgPSB0YXJnZXQudmFsdWVcbiAgICAgIGNvbnN0IG5hbWUgPSB0YXJnZXQubmFtZVxuICAgICAgc2V0VmFsdWVzKHtcbiAgICAgICAgLi4udmFsdWVzLFxuICAgICAgICBbbmFtZV06IHZhbHVlXG4gICAgICB9KVxuICAgIH1cbiAgXG4gICAgY29uc3QgaGFuZGxlQmx1ciA9IGV2ZW50ID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldFxuICAgICAgY29uc3QgbmFtZSA9IHRhcmdldC5uYW1lXG4gICAgICBzZXRUb3VjaGVkVmFsdWVzKHtcbiAgICAgICAgLi4udG91Y2hlZFZhbHVlcyxcbiAgICAgICAgW25hbWVdOiB0cnVlXG4gICAgICB9KVxuICAgICAgY29uc3QgZSA9IHZhbGlkYXRlKHZhbHVlcylcbiAgICAgIHNldEVycm9ycyh7XG4gICAgICAgIC4uLmVycm9ycyxcbiAgICAgICAgLi4uZVxuICAgICAgfSlcbiAgICB9XG4gIFxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGV2ZW50ID0+IHtcblxuICAgICAgY29uc3QgZSA9IHZhbGlkYXRlKHZhbHVlcylcbiAgICAgIHNldEVycm9ycyh7XG4gICAgICAgIC4uLmVycm9ycyxcbiAgICAgICAgLi4uZVxuICAgICAgfSlcbiAgXG4gICAgICBvblN1Ym1pdCh7IC4uLnZhbHVlcywgZSB9KVxuICAgIH1cbiAgXG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlcyxcbiAgICAgIHRvdWNoZWRWYWx1ZXMsXG4gICAgICBlcnJvcnMsXG4gICAgICBoYW5kbGVDaGFuZ2UsXG4gICAgICBoYW5kbGVTdWJtaXQsXG4gICAgICBoYW5kbGVCbHVyXG4gICAgfVxuICB9XG5cbmV4cG9ydCBjb25zdCBTaG9wTW9kYWxDb21wb25lbnQgPSAoeyBvblN1Ym1pdCwgaW5pdGlhbFZhbHVlcyB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKGluaXRpYWxWYWx1ZXMpXG4gIGNvbnN0IHsgdmFsdWVzLCB0b3VjaGVkVmFsdWVzLCBlcnJvcnMsIGhhbmRsZUNoYW5nZSwgaGFuZGxlU3VibWl0LCBoYW5kbGVCbHVyIH0gPSB1c2VGb3JtKHtcbiAgICBpbml0aWFsVmFsdWVzLFxuICAgIG9uU3VibWl0LFxuICAgIHZhbGlkYXRlKHZhbHVlcykge1xuICAgICAgY29uc3QgZXJyb3JzID0ge31cblxuICAgICAgaWYgKHZhbHVlcy5hbW91bnQgPT09IFwiXCIpIHtcbiAgICAgICAgZXJyb3JzLmFtb3VudCA9IFwiUGxlYXNlIHNlbGVjdCBhIGN1c3RvbWVyXCJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVycm9yc1xuICAgIH1cbiAgfSlcblxuICByZXR1cm4gKFxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC01IHBiLTUgYm9yZGVyLWJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMTAgdGV4dC1iYXNlIHRleHQtZ3JheS03MDBcIj57dmFsdWVzLmhlYWRlcn08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMTAgcHQtNSBmbGV4IHBiLTBcIiBzdHlsZT17eyB3aWR0aDogJzQ4MHB4J319PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgcHItNVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ibHVlLTcwMCBweS0yXCI+VG90YWwgQ3JlZGl0czwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBwLTIgdGV4dC1ibHVlLTcwMFwiPnt2YWx1ZXMuY3JlZGl0fTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmxvY2sgdy1mdWxsIHB5LTInPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYW1vdW50XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgbWItMlwiPkFtb3VudDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhbW91bnRcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0yIGJvcmRlclwiIHBsYWNlaG9sZGVyPVwiUGxlYXNlIHNwZWNpZnkgYW4gYW1vdW50XCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gdmFsdWU9e3ZhbHVlcy5hbW91bnR9Lz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwic2x1Z1wiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHZhbHVlPXt2YWx1ZXMuc2x1Z30vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHAtMTAgcHQtMCB3LWZ1bGwgcGItNVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jsb2NrIHctZnVsbCBweS0yJz5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhbW91bnRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgbWItMlwiPkFtb3VudDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibWVzc2FnZVwiIGNsYXNzTmFtZT1cInctZnVsbCBwLTIgYm9yZGVyXCIgcGxhY2Vob2xkZXI9XCJQbGVhc2Ugc3BlY2lmeSBhIG1lc3NhZ2VcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSB2YWx1ZT17dmFsdWVzLm1lc3NhZ2V9Lz5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHQgcHgtMTAgcGItNVwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHAtMyBiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTcwMFwiIHR5cGU9XCJzdWJtaXRcIj57dmFsdWVzLmFkZH17dmFsdWVzLmRlZHVjdH0gQ3JlZGl0czwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgKVxufVxuXG5jb25zdCBOZXdTaG9wTW9kYWwgPSBjb21wb3NlKFxuICBjb25uZWN0KFxuICAgIChzdGF0ZSwgb3duUHJvcHMpID0+ICh7XG4gICAgICBpbml0aWFsVmFsdWVzOiBvd25Qcm9wc1xuICAgIH0pLFxuICAgIChkaXNwYXRjaCwgeyBoaWRlTW9kYWwgfSkgPT4gKHtcbiAgICAgIG9uU3VibWl0OiB2YWx1ZXMgPT4ge1xuICAgICAgICBkaXNwYXRjaChjcmVhdGVTaG9wQWN0aW9uKHZhbHVlcykpXG4gICAgICAgIGRpc3BhdGNoKGdldFNob3BzQWN0aW9uKCkpXG4gICAgICAgIGhpZGVNb2RhbCgpXG4gICAgICAgIEFsZXJ0KCdzdWNjZXNzJywgJ1Nob3Agc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQhJylcbiAgICAgIH1cbiAgICB9KVxuICApLFxuICByZWR1eEZvcm0oe1xuICAgIGZvcm06ICduZXctc2hvcCdcbiAgfSlcbikoU2hvcE1vZGFsQ29tcG9uZW50KVxuXG5jb25zdCBFZGl0U2hvcE1vZGFsID0gY29tcG9zZShcbiAgY29ubmVjdChcbiAgICAoc3RhdGUsIG93blByb3BzKSA9PiAoe1xuICAgICAgaW5pdGlhbFZhbHVlczogb3duUHJvcHNcbiAgICB9KSxcbiAgICAoZGlzcGF0Y2gsIHsgaGlkZU1vZGFsIH0pID0+ICh7XG4gICAgICBvblN1Ym1pdDogdmFsdWVzID0+IHtcbiAgICAgICAgZGlzcGF0Y2godXBkYXRlU2hvcEFjdGlvbih2YWx1ZXMpKVxuICAgICAgICBkaXNwYXRjaChnZXRTaG9wc0FjdGlvbigpKVxuICAgICAgICBoaWRlTW9kYWwoKVxuICAgICAgICBBbGVydCgnc3VjY2VzcycsICdTaG9wIHN1Y2Nlc3NmdWxseSB1cGRhdGVkIScpXG4gICAgICB9XG4gICAgfSlcbiAgKSxcbiAgcmVkdXhGb3JtKHtcbiAgICBmb3JtOiAnZWRpdC1zaG9wJ1xuICB9KVxuKShTaG9wTW9kYWxDb21wb25lbnQpXG5cbmNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XG4gIHRvYXN0OiB0cnVlLFxuICBwb3NpdGlvbjogJ3RvcC1lbmQnLFxuICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXG4gIHRpbWVyOiAzMDAwXG59KVxuXG5jb25zdCBBbGVydCA9ICh0eXBlLCB0aXRsZSkgPT4gVG9hc3QuZmlyZSh7XG4gIHR5cGU6IHR5cGUsXG4gIHRpdGxlOiB0aXRsZVxufSlcblxuXG5cbmZ1bmN0aW9uIFNob3BzQ29tcG9uZW50KHsgZ2V0U2hvcHMsIGRlbGV0ZVNob3AsIHNob3BzLCB1c2VyIH0pIHtcbiAgY29uc3QgeyB1c2VyX3R5cGUgfSA9IHVzZXJcblxuXG4gIGNvbnN0IHsgc2hvd01vZGFsIH0gPSB1c2VNb2RhbCgpXG4gIGNvbnN0IHBvcHVsYXRlU2hvcHMgPSBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgZ2V0U2hvcHMoKVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBwb3B1bGF0ZVNob3BzKClcbiAgfSwgW10pXG5cbiAgY29uc29sZS5sb2coc2hvcHMpXG5cbiAgY29uc3QgY29sdW1ucyA9IFJlYWN0LnVzZU1lbW8oXG4gICAgKCkgPT4gW1xuICAgICAge1xuICAgICAgICBIZWFkZXI6ICdTaG9wIE5hbWUnLFxuICAgICAgICBhY2Nlc3NvcjogJ25hbWUnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICd0eXBlJyxcbiAgICAgICAgSGVhZGVyOiAnVHlwZScsXG4gICAgICAgIGFjY2Vzc29yOiAndHlwZScsXG4gICAgICAgIENlbGw6IHJvdyA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2cocm93KVxuICAgICAgICAgIGNvbnN0IHR5cGVzID0gcm93LnJvdy5vcmlnaW5hbC50eXBlIHx8IHt9XG4gICAgICAgICAgY29uc29sZS5sb2codHlwZXMpXG4gICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgIHsgdHlwZXMubWFwKCh0eXBlLCBpZHgpID0+IChcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicm91bmRlZCBiZy1ibHVlLTgwMCB0ZXh0LXdoaXRlIHAtMiB0ZXh0LXhzIG1yLTJcIiBrZXk9e2lkeH0+e3R5cGUucmVwbGFjZSgnXycsICcgJyl9eycgJ308L3NwYW4+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgIClcbiAgICAgICAgfSxcbiAgICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICAgIHdpZHRoOiA0NVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgSGVhZGVyOiAnQ2l0eScsXG4gICAgICAgIGFjY2Vzc29yOiAnY2l0eSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIEhlYWRlcjogJ0NvbXBsZXRpb24nLFxuICAgICAgICBhY2Nlc3NvcjogJ2NvbXBsZXRpb24nLFxuICAgICAgICBjbGFzc05hbWU6ICdtZDpoaWRkZW4nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBIZWFkZXI6ICdQYXltZW50IE1ldGhvZCcsXG4gICAgICAgIGFjY2Vzc29yOiAncGF5bWVudF9tZXRob2QnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBIZWFkZXI6ICdMZXZlbCcsXG4gICAgICAgIGFjY2Vzc29yOiAnbGV2ZWwnLFxuICAgICAgICBjbGFzc05hbWU6ICdtZDpoaWRkZW4geGw6dGFibGUtY2VsbCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIEhlYWRlcjogJ0RhdGUgSm9pbmVkJyxcbiAgICAgICAgYWNjZXNzb3I6ICdjcmVhdGVkX2F0JyxcbiAgICAgICAgY2xhc3NOYW1lOiAnbWQ6aGlkZGVuIHhsOnRhYmxlLWNlbGwnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogXCJhY3Rpb25cIixcbiAgICAgICAgYWNjZXNzb3I6ICdzbHVnJyxcbiAgICAgICAgQ2VsbDogcm93ID0+IHtcbiAgICAgICAgICBjb25zdCBzbHVnID0gcm93LnJvdy5vcmlnaW5hbC5zbHVnXG4gICAgICAgICAgY29uc3QgbmFtZSA9IHJvdy5yb3cub3JpZ2luYWwubmFtZVxuICAgICAgICAgIGNvbnN0IHR5cGUgPSByb3cucm93Lm9yaWdpbmFsLnR5cGVcbiAgICAgICAgICBjb25zdCBjb250YWN0ID0gcm93LnJvdy5vcmlnaW5hbC5jb250YWN0IFxuICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gcm93LnJvdy5vcmlnaW5hbC5kZXNjcmlwdGlvbiBcbiAgICAgICAgICBjb25zdCBhZGRyZXNzID0gcm93LnJvdy5vcmlnaW5hbC5hZGRyZXNzIFxuICAgICAgICAgIGNvbnN0IGNpdHkgPSByb3cucm93Lm9yaWdpbmFsLmNpdHlcbiAgICAgICAgICBjb25zdCB6aXAgPSByb3cucm93Lm9yaWdpbmFsLnppcCBcbiAgICAgICAgICBjb25zdCBsb25naXR1ZGUgPSByb3cucm93Lm9yaWdpbmFsLmxvbmdpdHVkZVxuICAgICAgICAgIGNvbnN0IGxhdGl0dWRlID0gcm93LnJvdy5vcmlnaW5hbC5sYXRpdHVkZSBcbiAgICAgICAgICBjb25zdCBvcGVyYXRpb25zID0gcm93LnJvdy5vcmlnaW5hbC5vcGVyYXRpb25zXG4gICAgICAgICAgY29uc3QgZmVhdHVyZXMgPSByb3cucm93Lm9yaWdpbmFsLmZlYXR1cmVzXG4gICAgICAgICAgY29uc3QgYW1lbml0aWVzID0gcm93LnJvdy5vcmlnaW5hbC5hbWVuaXRpZXNcbiAgICAgICAgICBjb25zdCBwYXltZW50X21ldGhvZCA9IHJvdy5yb3cub3JpZ2luYWwucGF5bWVudF9tZXRob2RcbiAgICAgICAgICBjb25zdCBjb21wbGV0aW9uID0gcm93LnJvdy5vcmlnaW5hbC5jb21wbGV0aW9uIFxuICAgICAgICAgIGNvbnN0IGxldmVsID0gcm93LnJvdy5vcmlnaW5hbC5sZXZlbCBcbiAgICAgICAgICBjb25zdCBzdGF0dXMgPSByb3cucm93Lm9yaWdpbmFsLnN0YXR1cyBcbiAgICAgICAgICBjb25zdCBwbXNfZW5hYmxlZCA9IHJvdy5yb3cub3JpZ2luYWwucG1zX2VuYWJsZWRcbiAgICAgICAgICBjb25zb2xlLmxvZyhyb3cpXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtbGVmdFwiPlxuICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJiZy1ncmF5LTIwMCBob3ZlcjpiZy1ncmF5LTQwMCB0ZXh0LWdyYXktNzAwIHRleHQteHMgZm9udC1ib2xkIHB5LTEgcHgtNCByb3VuZGVkXCIgdG89e2AvYWNjb3VudC9zaG9wcy8ke3NsdWd9YH0+XG4gICAgICAgICAgICAgICAgVmlld1xuICAgICAgICAgICAgICA8L0xpbms+eycgJ31cbiAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSB0ZXh0LXhzIGZvbnQtYm9sZCBweS0xIHB4LTQgcm91bmRlZFwiIHRvPXtgL2FjY291bnQvc2hvcHMvdXBkYXRlLyR7c2x1Z31gfT5cbiAgICAgICAgICAgICAgICBVcGRhdGVcbiAgICAgICAgICAgICAgPC9MaW5rPnsnICd9XG4gICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImJnLWdyZWVuLTUwMCBob3ZlcjpiZy1ncmVlbi03MDAgdGV4dC13aGl0ZSB0ZXh0LXhzIGZvbnQtYm9sZCBweS0xIHB4LTQgcm91bmRlZFwiIHRvPXtgL2FjY291bnQvc2hvcHMvYWN0aXZhdGlvbi8ke3NsdWd9YH0+XG4gICAgICAgICAgICAgICAgQWN0aXZhdGlvblxuICAgICAgICAgICAgICA8L0xpbms+eycgJ31cbiAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiYmctcmVkLTUwMCBob3ZlcjpiZy1yZWQtNzAwIHRleHQtd2hpdGUgdGV4dC14cyBmb250LWJvbGQgcHktMSBweC00IHJvdW5kZWRcIiBvbkNsaWNrPXsoKSA9PiBkZWxldGVTaG9wKHNsdWcpfSB0bz1cIiNcIj5cbiAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9LFxuICAgICAgICBIZWFkZXI6ICdBY3Rpb24nLFxuICAgICAgICBzb3J0YWJsZTogZmFsc2UsXG4gICAgICAgIHdpZHRoOiA0NVxuICAgICAgfSxcbiAgICBdLFxuICAgIFtdXG4gIClcblxuICBjb25zdCBkYXRhID0gUmVhY3QudXNlTWVtbygoKSA9PiBtYWtlRGF0YSgyMCksIFtdKVxuICBjb25zdCBbZmlsdGVyZWREYXRhLCBzZXRGaWx0ZXJlZERhdGFdID0gdXNlU3RhdGUoc2hvcHMpXG4gIGNvbnN0IGhhbmRTZXREYXRhID0gc2hvcHMgPT4ge1xuICAgIHNldEZpbHRlcmVkRGF0YShzaG9wcylcbiAgfVxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmItd2hpdGUgcHgtMTAgcHktNVwiPlxuICAgICAgPFBhZ2VIZWFkZXIgdGl0bGU9XCJTaG9wXCIgc3ViVGl0bGU9XCJBY2NvdW50c1wiID5cbiAgICAgICAgPExpbmsgdG89XCIvYWNjb3VudC91c2Vycy9leHBvcnRcIiBjbGFzc05hbWU9XCJtbC0yIGJnLWdyYXktMzAwIGhvdmVyOmJnLWdyYXktNDAwIHRleHQtZ3JheS04MDAgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+dmlld19tb2R1bGU8L2k+XG4gICAgICAgICAgPHNwYW4+RXhwb3J0PC9zcGFuPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L1BhZ2VIZWFkZXI+XG5cbiAgICAgICAgPERhdGFUYWJsZSBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhPXtzaG9wc30gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvRnJhZ21lbnQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4gKHtcbiAgICBzaG9wczogc2VsZWN0QWxsU2hvcHMoc3RhdGUpLFxuICAgIHVzZXI6IGN1cnJlbnRVc2VyU2VsZWN0b3Ioc3RhdGUpXG4gIH0pLFxuICBkaXNwYXRjaCA9PiAoe1xuICAgIGdldFNob3BzOiAoKSA9PiBkaXNwYXRjaChnZXRTaG9wc0FjdGlvbigpKSxcbiAgICBkZWxldGVTaG9wOiBpZCA9PiB7XG4gICAgICBTd2FsLmZpcmUoe1xuICAgICAgICB0aXRsZTogJ0FyZSB5b3Ugc3VyZT8nLFxuICAgICAgICB0ZXh0OiBcIllvdSB3b24ndCBiZSBhYmxlIHRvIHJldmVydCB0aGlzIVwiLFxuICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6ICcjMzA4NWQ2JyxcbiAgICAgICAgY2FuY2VsQnV0dG9uQ29sb3I6ICcjZDMzJyxcbiAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdZZXMsIGRlbGV0ZSBpdCEnXG4gICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xuICAgICAgICAgIGRpc3BhdGNoKGRlbGV0ZVNob3BBY3Rpb24oaWQpKVxuICAgICAgICAgIEFsZXJ0KCdzdWNjZXNzJywgJ1VzZXIgc3VjY2Vzc2Z1bGx5IGRlbGV0ZWQhJylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG4pKFNob3BzQ29tcG9uZW50KSIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IHNob3BBY3Rpb25zIGFzIGFjdGlvbnMgfSBmcm9tICdzdG9yZS9hY3Rpb25zJ1xuaW1wb3J0IHsgbWFrZVJlcXVlc3QgfSBmcm9tICdzdG9yZS9hY3Rpb24tY3JlYXRvcnMvcmVxdWVzdHMnXG5cbmV4cG9ydCBjb25zdCBnZXRTaG9wcyA9ICgpID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkaXNwYXRjaChcbiAgICBtYWtlUmVxdWVzdCgnZ2V0LXNob3BzJywgKCkgPT4gYXhpb3MuZ2V0KGAvYXBpL3Nob3BzYCkpXG4gIClcblxuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogYWN0aW9ucy5BRERfU0hPUFMsXG4gICAgc2hvcHM6IHJlc3BvbnNlLmRhdGEuZGF0YVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U2hvcCA9IHNsdWcgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRpc3BhdGNoKFxuICAgIG1ha2VSZXF1ZXN0KGBnZXQtc2hvcC0ke3NsdWd9YCwgKCkgPT4gYXhpb3MuZ2V0KGAvYXBpL3Nob3BzLyR7c2x1Z31gKSlcbiAgKVxuXG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBhY3Rpb25zLkdFVF9TSE9QLFxuICAgIHNob3BzOiByZXNwb25zZS5kYXRhLmRhdGFcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVNob3AgPSBkYXRhID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkaXNwYXRjaChcbiAgICBtYWtlUmVxdWVzdCgnY3JlYXRlLXNob3AnLCAoKSA9PiBheGlvcy5wb3N0KGAvYXBpL3Nob3BzYCwgZGF0YSkpXG4gIClcblxuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogYWN0aW9ucy5BRERfU0hPUCxcbiAgICBzaG9wczogcmVzcG9uc2UuZGF0YS5kYXRhXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVTaG9wID0gZGF0YSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZGlzcGF0Y2goXG4gICAgbWFrZVJlcXVlc3QoYHVwZGF0ZS1zaG9wLSR7ZGF0YS5zbHVnfWAsICgpID0+XG4gICAgICBheGlvcy5wdXQoYC9hcGkvc2hvcHMvJHtkYXRhLnNsdWd9YCwgZGF0YSlcbiAgICApXG4gIClcblxuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogYWN0aW9ucy5VUERBVEVfU0hPUCxcbiAgICBzaG9wczogcmVzcG9uc2UuZGF0YS5kYXRhXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVTaG9wID0gc2x1ZyA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XG4gIGF3YWl0IGRpc3BhdGNoKFxuICAgIG1ha2VSZXF1ZXN0KGB1cGRhdGUtc2hvcC0ke3NsdWd9YCwgKCkgPT4gYXhpb3MuZGVsZXRlKGAvYXBpL3Nob3BzLyR7c2x1Z31gKSlcbiAgKVxuXG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBhY3Rpb25zLkRFTEVURV9TSE9QLFxuICAgIHNsdWdcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IHNhdmVTaG9wID0gc2hvcERhdGEgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICBjb25zdCB7IHNsdWcgfSA9IHNob3BEYXRhXG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkaXNwYXRjaChcbiAgICBtYWtlUmVxdWVzdCgnc2F2ZS1zaG9wLXNldHRpbmdzJywgKCkgPT5cbiAgICAgIGF4aW9zLnB1dChgL2FwaS9zaG9wcy8ke3NsdWd9YCwgc2hvcERhdGEpXG4gICAgKVxuICApXG5cbiAgcmV0dXJuIHJlc3BvbnNlXG59XG5cblxuIiwiaW1wb3J0IHsgZGVub3JtYWxpemUgfSBmcm9tICdub3JtYWxpenInXG5cbmltcG9ydCB7IGVudGl0aWVzIGFzIGVudGl0aWVzU2NoZW1hIH0gZnJvbSAnc3RvcmUvc2NoZW1hcydcblxuZXhwb3J0IGNvbnN0IHNlbGVjdEFsbFNob3BzID0gc3RhdGUgPT4ge1xuICBjb25zdCBkbkVudGl0aWVzID0gZGVub3JtYWxpemUoXG4gICAgeyBzaG9wczogT2JqZWN0LmtleXMoc3RhdGUuZW50aXRpZXMuc2hvcHMpIH0sXG4gICAgZW50aXRpZXNTY2hlbWEsXG4gICAgc3RhdGUuZW50aXRpZXNcbiAgKVxuXG4gIHJldHVybiBkbkVudGl0aWVzLnNob3BzXG59XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RTaG9wRGV0YWlscyA9IChzdGF0ZSwgc2x1ZykgPT4ge1xuXG4gIGNvbnN0IGRuRW50aXRpZXMgPSBkZW5vcm1hbGl6ZShcbiAgICB7IHNob3BzOiBbc2x1Z10gfSxcbiAgICBlbnRpdGllc1NjaGVtYSxcbiAgICBzdGF0ZS5lbnRpdGllc1xuICApXG5cbiAgcmV0dXJuIGRuRW50aXRpZXMuc2hvcHNcbn0iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9