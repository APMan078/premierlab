(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

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

/***/ "./resources/assets/js/pages/Shops/UpdateShop.jsx":
/*!********************************************************!*\
  !*** ./resources/assets/js/pages/Shops/UpdateShop.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components */ "./resources/assets/js/components/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var store_selectors_shops__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! store/selectors/shops */ "./resources/assets/js/store/selectors/shops.js");
/* harmony import */ var store_selectors_session__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! store/selectors/session */ "./resources/assets/js/store/selectors/session/index.js");
/* harmony import */ var store_action_creators_shops__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! store/action-creators/shops */ "./resources/assets/js/store/action-creators/shops/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var react_google_map__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-google-map */ "./node_modules/react-google-map/lib/index.js");
/* harmony import */ var react_google_map__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_google_map__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_google_maps_loader__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-google-maps-loader */ "./node_modules/react-google-maps-loader/es/index.js");
/* harmony import */ var react_google_places_suggest__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-google-places-suggest */ "./node_modules/react-google-places-suggest/es/index.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../utils/constants */ "./resources/assets/js/utils/constants.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var react_geocode__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-geocode */ "./node_modules/react-geocode/lib/index.js");
/* harmony import */ var react_geocode__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react_geocode__WEBPACK_IMPORTED_MODULE_23__);









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

const useForm = ({
  initialValues,
  onSubmit,
  validate
}) => {
  const initializeValues = obj => JSON.parse(JSON.stringify(obj, (k, v) => v === null ? '' : v));

  const [values, setValues] = react__WEBPACK_IMPORTED_MODULE_9___default.a.useState(initializeValues(initialValues) || {});
  const [touchedValues, setTouchedValues] = react__WEBPACK_IMPORTED_MODULE_9___default.a.useState({});
  const [errors, setErrors] = react__WEBPACK_IMPORTED_MODULE_9___default.a.useState({});
  const [address, setAddress] = react__WEBPACK_IMPORTED_MODULE_9___default.a.useState(values.address || '');
  const [city, setCity] = react__WEBPACK_IMPORTED_MODULE_9___default.a.useState(values.city || '');
  const [longitude, setLongitude] = react__WEBPACK_IMPORTED_MODULE_9___default.a.useState(values.longitude ? parseFloat(values.longitude) : 120.984222);
  const [latitude, setLatitude] = react__WEBPACK_IMPORTED_MODULE_9___default.a.useState(values.latitude ? parseFloat(values.latitude) : 14.599512);
  const [txtLocation, setTxtLocation] = react__WEBPACK_IMPORTED_MODULE_9___default.a.useState(values.address ? values.address : null);
  const [txtSearch, setTxtSearch] = react__WEBPACK_IMPORTED_MODULE_9___default.a.useState(values.address ? values.address : null);

  const handleSearch = event => {
    const value = event.target.value;
    setTxtSearch(value);
    setTxtLocation(txtSearch);
  };

  react_geocode__WEBPACK_IMPORTED_MODULE_23___default.a.setApiKey(_utils_constants__WEBPACK_IMPORTED_MODULE_21__["MAPS_API_KEY"]);
  react_geocode__WEBPACK_IMPORTED_MODULE_23___default.a.setLanguage("en");
  react_geocode__WEBPACK_IMPORTED_MODULE_23___default.a.setRegion("ph");
  console.log(values);
  console.log(values.operations);

  const handleMarkerChange = event => {
    react_geocode__WEBPACK_IMPORTED_MODULE_23___default.a.fromLatLng(event.latLng.lat(), event.latLng.lng()).then(response => {
      console.log(response.results[0]);
      console.log(response.results[0].address_components);
      console.log(response.results[0].formatted_address);
      const addi = response.results[0].address_components;
      const newAddress = response.results[0].formatted_address;
      const city1 = addi.find(element => {
        const subLocal = element.types.includes('sublocality');
        return subLocal;
      });
      const city2 = addi.find(element => {
        const adminArea = element.types.includes('administrative_area_level_1');
        return adminArea;
      });
      const city = city1.long_name + ', ' + city2.long_name;
      const zip = addi.find(element => {
        const data = element.types.includes('postal_code');
        return data;
      });
      console.log(city1.long_name);
      console.log(city2.long_name);
      console.log(zip.long_name);
      console.log(values);
      setTxtSearch(newAddress);
      setAddress(newAddress);
      setLatitude(event.latLng.lat());
      setLongitude(event.latLng.lng());
      {
        /* when this is removed fixes the problem with state values being refreshed */
      }
      setValues(_objectSpread({}, values, {
        address: newAddress,
        latitude: longitude.toString(),
        longitude: latitude.toString(),
        city: city,
        zip: zip.long_name ? zip.long_name : null
      }));
    }, error => {
      console.error(error);
    });
  };

  const handleSelectSuggest = (suggestion, geocodedPrediction, originalPrediction) => {
    const {
      formatted_address: txtLocation,
      geometry
    } = suggestion;
    const address = 'address';
    const lat = 'latitude';
    const lng = 'longitude';
    const add = geocodedPrediction.description.split(",");
    const count = add.length;
    const city1 = add[count - 3];
    const city2 = add[count - 2];
    setTxtSearch(geocodedPrediction.description);
    console.log(geocodedPrediction);
    setLatitude(geometry.location.lat());
    setLongitude(geometry.location.lng());
    console.log(geometry.location.lat());
    console.log(geometry.location.lng());
    setValues(_objectSpread({}, values, {
      address: geocodedPrediction.description,
      latitude: geometry.location.lng().toString(),
      longitude: geometry.location.lat().toString(),
      city: city1 + ', ' + city2
    }));
  };

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

  const getLabel = values.type;

  const selectTypes = () => {
    const dataType = [];

    if (Array.isArray(values.type)) {
      values.type.map((val, idx) => {
        const stripLabel = stripString(val);
        const label = capitalizeFirstLetter(stripLabel);
        dataType[idx] = {
          label: label,
          value: val
        };
        return dataType;
      });
    } else {
      const stripLabel = stripString(values.type);
      const label = capitalizeFirstLetter(stripLabel);
      const dataType = {
        label: label,
        value: values.type
      };
      return dataType;
    }

    return dataType;
  };

  console.log(selectTypes);
  const [select, setSelect] = react__WEBPACK_IMPORTED_MODULE_9___default.a.useState(selectTypes);

  const payment_types = () => {
    const ret = [];

    if (Array.isArray(values.payment_method)) {
      values.payment_method.map((val, idx) => {
        const stripLabel = stripString(val);
        const label = capitalizeFirstLetter(stripLabel);
        ret[idx] = {
          label: label,
          value: val
        };
        return ret;
      });
    } else {
      const stripLabel = stripString(values.payment_method);
      const label = capitalizeFirstLetter(stripLabel);
      const ret = {
        label: label,
        value: values.payment_method
      };
      return ret;
    }

    return ret;
  };

  console.log(payment_types);
  const [payments, setPayments] = react__WEBPACK_IMPORTED_MODULE_9___default.a.useState(payment_types);

  const handleSelectChange = event => {
    console.log(event);
    setSelect({
      event
    });
    const value = event.map((val, idx) => {
      return val.value;
    });
    const name = 'type';
    setValues(_objectSpread({}, values, {
      [name]: value
    }));
  };

  const handlePaymentChange = event => {
    console.log(event);
    setPayments({
      event
    });
    const value = event.map((val, idx) => {
      return val.value;
    });
    const name = 'payment_method';
    setValues(_objectSpread({}, values, {
      [name]: value
    }));
  };

  console.log(select);

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

  const bannerUploadHandler = fileData => {
    console.log(fileData);
  };

  const avatarUploadHandler = fileData => {
    console.log(fileData);
  };

  const handleOperatingHours = days => {
    const name = 'operations';
    setValues(_objectSpread({}, values, {
      [name]: days
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
    setValues,
    touchedValues,
    errors,
    select,
    handleChange,
    handleSelectChange,
    handleSubmit,
    handleBlur,
    handleSearch,
    handleSelectSuggest,
    handleMarkerChange,
    bannerUploadHandler,
    avatarUploadHandler,
    handleOperatingHours,
    handleDynamicList,
    longitude,
    latitude,
    txtLocation,
    txtSearch,
    payments,
    setPayments,
    handlePaymentChange
  };
};

__signature__(useForm, "useState{[values, setValues](initializeValues(initialValues) || {})}\nuseState{[touchedValues, setTouchedValues]({})}\nuseState{[errors, setErrors]({})}\nuseState{[address, setAddress](values.address || '')}\nuseState{[city, setCity](values.city || '')}\nuseState{[longitude, setLongitude](values.longitude ? parseFloat(values.longitude) : 120.984222)}\nuseState{[latitude, setLatitude](values.latitude ? parseFloat(values.latitude) : 14.599512)}\nuseState{[txtLocation, setTxtLocation](values.address ? values.address : null)}\nuseState{[txtSearch, setTxtSearch](values.address ? values.address : null)}\nuseState{[select, setSelect](selectTypes)}\nuseState{[payments, setPayments](payment_types)}");

function UpdateShopComponent({
  onSubmit,
  match,
  getShop,
  shops,
  user
}) {
  const {
    user_type
  } = user;
  const initialValues = shops[0];

  if (!initialValues) {
    return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__["Redirect"], {
      to: "/account/shops"
    });
  }

  const query = match.params.slug;
  const {
    values,
    setValues,
    touchedValues,
    select,
    errors,
    handleChange,
    handleSelectChange,
    handleSubmit,
    handleBlur,
    handleSearch,
    handleSelectSuggest,
    handleMarkerChange,
    bannerUploadHandler,
    avatarUploadHandler,
    handleOperatingHours,
    handleDynamicList,
    payments,
    setPayments,
    handlePaymentChange,
    longitude,
    latitude,
    txtLocation,
    txtSearch
  } = useForm({
    initialValues,
    onSubmit,

    validate(values) {
      const errors = {};
      return errors;
    }

  });

  const populateShop = async () => {
    await getShop(query);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_9__["useEffect"])(() => {
    populateShop();
  }, []);
  console.log(values);

  if (user_type == 'customer' || user_type == 'fleet') {
    return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__["Redirect"], {
      from: "/account",
      to: "/account/overview"
    });
  }

  const [types, setTypes] = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])({});
  Object(react__WEBPACK_IMPORTED_MODULE_9__["useEffect"])(() => {
    const fetchData = async () => {
      const result = await axios__WEBPACK_IMPORTED_MODULE_22___default()("/api/shops/types");
      setTypes(result.data.data);
    };

    fetchData();
  }, []);
  const paymentTypes = [{
    label: "Cash",
    value: "cash"
  }, {
    label: "Credit Card",
    value: "credit card"
  }, {
    label: "Bank Transfer",
    value: "bank transfer"
  }, {
    label: "Check",
    value: "check"
  }, {
    label: "Online Payment",
    value: "online payment"
  }, {
    label: "Over The Conter",
    value: "counter"
  }, {
    label: "Terms",
    value: "terms"
  }];
  console.log(select);
  console.log(payments);
  return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "flex flex-wrap px-10 py-5"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "w-full"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_11__["PageHeader"], {
    title: "Details",
    subTitle: "Shop"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__["Link"], {
    to: "/account/shops/",
    className: "ml-2 bg-gray-300 hover:bg-gray-500 text-gray-700 shadow font-bold py-2 px-4 rounded inline-flex items-center"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i", {
    className: "material-icons text-sm mr-3"
  }, "arrow_back"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", null, "Go Back")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__["Link"], {
    to: "#",
    onClick: handleSubmit,
    className: "ml-2 bg-green-500 hover:bg-green-600 text-white shadow font-bold py-2 px-4 rounded inline-flex items-center"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i", {
    className: "material-icons text-sm mr-3"
  }, "save_alt"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", null, "Save")))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "w-full lg:w-2/3 lg:pr-10 mb-5"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("form", {
    onSubmit: handleSubmit
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "rounded-lg shadow-lg bg-white"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_11__["BannerUpload"], {
    uploadHandler: bannerUploadHandler,
    name: "banner",
    value: values.banner ? values.banner : null
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "flex py-5 border-b border-gray-300"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "w-2/3 p-5"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "text-md"
  }, "General Settings"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "text-sm"
  }, "Update your shop profile details."), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "grid grid-cols-2 mt-4"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "col-span-2 pr-5 py-1"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
    htmlFor: "name"
  }, "Shop Name"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
    type: "text",
    name: "name",
    value: values.name ? values.name : '',
    onChange: handleChange,
    className: "border border-gray-300 p-2 rounded my-3 block w-full"
  })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "col-span-1 pr-5 py-1"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
    htmlFor: "type"
  }, "Shop Type"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_17__["default"], {
    className: "my-3",
    isMulti: true,
    value: select,
    onChange: handleSelectChange,
    name: "type",
    options: values.type.length > 2 ? select[0] : types
  })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "col-span-1 pr-5 py-1"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
    htmlFor: "type"
  }, "Payment Type"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_17__["default"], {
    className: "my-3",
    isMulti: true,
    value: payments,
    onChange: handlePaymentChange,
    name: "payment_method",
    options: values.payment_method.length > 2 ? payments[0] : paymentTypes
  })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "col-span-2 pr-5 py-1"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
    htmlFor: "contact"
  }, "Mobile Number"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "flex border border-gray-300 rounded my-3"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
    className: "p-2 border-gray-300 inline-flex text-gray-400 border-r"
  }, "+63"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
    type: "text",
    value: values.contact ? values.contact : '',
    onChange: handleChange,
    name: "contact",
    className: "p-2 flex-1"
  }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "col-span-2 pr-5 py-1"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
    htmlFor: "description"
  }, "Description"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("textarea", {
    name: "description",
    value: values.description ? values.description : '',
    onChange: handleChange,
    rows: "4",
    cols: "50",
    className: "border border-gray-300 p-2 rounded my-3 block w-full"
  })))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "w-1/3 p-5"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "text-center"
  }, "Shop Logo"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_11__["AvatarUpload"], {
    uploadHandler: avatarUploadHandler,
    type: "shop",
    className: "mt-10",
    name: "avatar",
    value: values.avatar ? values.avatar : null
  }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "p-5 border-b border-gray-300"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "text-md"
  }, "Location Settings"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "text-sm"
  }, "Setup your shop's location."), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "py-1 block my-5"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
    htmlFor: "address"
  }, "Shop Address"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "border border-gray-300 rounded my-3"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_google_maps_loader__WEBPACK_IMPORTED_MODULE_19__["default"], {
    params: {
      key: _utils_constants__WEBPACK_IMPORTED_MODULE_21__["MAPS_API_KEY"],
      libraries: "places,geocode"
    },
    render: googleMaps => googleMaps && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_google_places_suggest__WEBPACK_IMPORTED_MODULE_20__["default"], {
      autocompletionRequest: {
        input: txtSearch || ""
      },
      googleMaps: googleMaps,
      onSelectSuggest: handleSelectSuggest
    }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
      className: "flex"
    }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
      className: "p-2 border-gray-300 inline-flex text-gray-400 border-r flex-initial"
    }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i", {
      className: "material-icons"
    }, "location_on")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
      placeholder: "Search shop location",
      type: "text",
      name: "txtSearch",
      value: txtSearch || '',
      className: "p-2 flex-1",
      onChange: handleSearch
    })))
  })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "flex border border-gray-300 rounded my-3"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_google_maps_loader__WEBPACK_IMPORTED_MODULE_19__["default"], {
    params: {
      key: _utils_constants__WEBPACK_IMPORTED_MODULE_21__["MAPS_API_KEY"],
      libraries: "places,geocode"
    },
    render: googleMaps => googleMaps && latitude && longitude && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
      style: {
        height: "50vh",
        width: "100%"
      }
    }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_google_map__WEBPACK_IMPORTED_MODULE_18___default.a, {
      autoFitBounds: true,
      googleMaps: googleMaps,
      zoom: 16,
      coordinates: [{
        position: {
          lat: latitude,
          lng: longitude
        },
        draggable: true,
        onLoaded: (googleMaps, map, marker) => {
          // Set Marker animation
          marker.setAnimation(googleMaps.Animation.BOUNCE);
          google.maps.event.addListener(marker, 'dragend', function (event) {
            handleMarkerChange(event);
          });
        }
      }]
    }))
  })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "grid grid-cols-2 mt-4"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "col-span-1 pr-5 py-1"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
    htmlFor: "latitude"
  }, "Latitude"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "w-full p-5 my-3 block border border-gray-300 rounded"
  }, latitude)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "col-span-1 pr-5 py-1"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
    htmlFor: "type"
  }, "Longitude"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "w-full p-5 my-3 block border border-gray-300 rounded"
  }, longitude))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_11__["OperatingHours"], {
    value: values.operations,
    handleChange: handleOperatingHours
  })))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "w-full lg:w-1/3"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "rounded-lg shadow-lg bg-white mb-5"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "mx-auto text-gray-700 text-md p-5 border-b rounded-t-lg border-gray-300"
  }, "Amenities"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "p-5"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_11__["DynamicList"], {
    type: "amenities",
    value: values.amenities,
    handleChange: handleDynamicList
  }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "rounded-lg shadow-lg bg-white mb-5"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "mx-auto text-gray-700 text-md p-5 border-b rounded-t-lg border-gray-300"
  }, "Features"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "p-5"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_11__["DynamicList"], {
    type: "features",
    value: values.features,
    handleChange: handleDynamicList
  }))))));
}

__signature__(UpdateShopComponent, "useForm{{ \n    values, \n    setValues,\n    touchedValues, \n    select, \n    errors, \n    handleChange, \n    handleSelectChange, \n    handleSubmit, \n    handleBlur, \n    handleSearch,\n    handleSelectSuggest,\n    handleMarkerChange,\n    bannerUploadHandler,\n    avatarUploadHandler,\n    handleOperatingHours,\n    handleDynamicList,\n    payments,\n    setPayments,\n    handlePaymentChange,\n    longitude,\n    latitude,\n    txtLocation,\n    txtSearch }}\nuseEffect{}\nuseState{[types, setTypes]({})}\nuseEffect{}", () => [useForm]);

const validateFields = values => {
  let errors = {};
  return errors;
};

const UpdateShop = Object(redux_form__WEBPACK_IMPORTED_MODULE_10__["reduxForm"])({
  form: 'updateService',
  enableReinitialize: true,
  validate: validateFields
})(UpdateShopComponent);

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])((state, props) => {
  const query = props.match.params.slug;
  return {
    shops: Object(store_selectors_shops__WEBPACK_IMPORTED_MODULE_13__["selectShopDetails"])(state, query),
    user: Object(store_selectors_session__WEBPACK_IMPORTED_MODULE_14__["currentUserSelector"])(state)
  };
}, dispatch => ({
  getShop: id => dispatch(Object(store_action_creators_shops__WEBPACK_IMPORTED_MODULE_15__["getShop"])(id)),
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
  },
  onSubmit: values => {
    dispatch(Object(store_action_creators_shops__WEBPACK_IMPORTED_MODULE_15__["updateShop"])(values));
    Alert('success', 'PMS successfully updated!');
  }
}))(UpdateShop);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Toast, "Toast", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Shops/UpdateShop.jsx");
  reactHotLoader.register(Alert, "Alert", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Shops/UpdateShop.jsx");
  reactHotLoader.register(useForm, "useForm", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Shops/UpdateShop.jsx");
  reactHotLoader.register(UpdateShopComponent, "UpdateShopComponent", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Shops/UpdateShop.jsx");
  reactHotLoader.register(validateFields, "validateFields", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Shops/UpdateShop.jsx");
  reactHotLoader.register(UpdateShop, "UpdateShop", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Shops/UpdateShop.jsx");
  reactHotLoader.register(_default, "default", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Shops/UpdateShop.jsx");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5tYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL1Nob3BzL1VwZGF0ZVNob3AuanN4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvYWN0aW9uLWNyZWF0b3JzL3Nob3BzL3Nob3BzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvc2VsZWN0b3JzL3Nob3BzLmpzIl0sIm5hbWVzIjpbIlRvYXN0IiwiU3dhbCIsIm1peGluIiwidG9hc3QiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJBbGVydCIsInR5cGUiLCJ0aXRsZSIsImZpcmUiLCJ1c2VGb3JtIiwiaW5pdGlhbFZhbHVlcyIsIm9uU3VibWl0IiwidmFsaWRhdGUiLCJpbml0aWFsaXplVmFsdWVzIiwib2JqIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiayIsInYiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwidG91Y2hlZFZhbHVlcyIsInNldFRvdWNoZWRWYWx1ZXMiLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJhZGRyZXNzIiwic2V0QWRkcmVzcyIsImNpdHkiLCJzZXRDaXR5IiwibG9uZ2l0dWRlIiwic2V0TG9uZ2l0dWRlIiwicGFyc2VGbG9hdCIsImxhdGl0dWRlIiwic2V0TGF0aXR1ZGUiLCJ0eHRMb2NhdGlvbiIsInNldFR4dExvY2F0aW9uIiwidHh0U2VhcmNoIiwic2V0VHh0U2VhcmNoIiwiaGFuZGxlU2VhcmNoIiwiZXZlbnQiLCJ2YWx1ZSIsInRhcmdldCIsIkdlb2NvZGUiLCJzZXRBcGlLZXkiLCJNQVBTX0FQSV9LRVkiLCJzZXRMYW5ndWFnZSIsInNldFJlZ2lvbiIsImNvbnNvbGUiLCJsb2ciLCJvcGVyYXRpb25zIiwiaGFuZGxlTWFya2VyQ2hhbmdlIiwiZnJvbUxhdExuZyIsImxhdExuZyIsImxhdCIsImxuZyIsInRoZW4iLCJyZXNwb25zZSIsInJlc3VsdHMiLCJhZGRyZXNzX2NvbXBvbmVudHMiLCJmb3JtYXR0ZWRfYWRkcmVzcyIsImFkZGkiLCJuZXdBZGRyZXNzIiwiY2l0eTEiLCJmaW5kIiwiZWxlbWVudCIsInN1YkxvY2FsIiwidHlwZXMiLCJpbmNsdWRlcyIsImNpdHkyIiwiYWRtaW5BcmVhIiwibG9uZ19uYW1lIiwiemlwIiwiZGF0YSIsInRvU3RyaW5nIiwiZXJyb3IiLCJoYW5kbGVTZWxlY3RTdWdnZXN0Iiwic3VnZ2VzdGlvbiIsImdlb2NvZGVkUHJlZGljdGlvbiIsIm9yaWdpbmFsUHJlZGljdGlvbiIsImdlb21ldHJ5IiwiYWRkIiwiZGVzY3JpcHRpb24iLCJzcGxpdCIsImNvdW50IiwibGVuZ3RoIiwibG9jYXRpb24iLCJjYXBpdGFsaXplRmlyc3RMZXR0ZXIiLCJzdHJpbmciLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwic3RyaXBTdHJpbmciLCJyZXBsYWNlIiwiZ2V0TGFiZWwiLCJzZWxlY3RUeXBlcyIsImRhdGFUeXBlIiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwidmFsIiwiaWR4Iiwic3RyaXBMYWJlbCIsImxhYmVsIiwic2VsZWN0Iiwic2V0U2VsZWN0IiwicGF5bWVudF90eXBlcyIsInJldCIsInBheW1lbnRfbWV0aG9kIiwicGF5bWVudHMiLCJzZXRQYXltZW50cyIsImhhbmRsZVNlbGVjdENoYW5nZSIsIm5hbWUiLCJoYW5kbGVQYXltZW50Q2hhbmdlIiwiaGFuZGxlQ2hhbmdlIiwiY2hlY2tlZCIsImhhbmRsZUJsdXIiLCJlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJiYW5uZXJVcGxvYWRIYW5kbGVyIiwiZmlsZURhdGEiLCJhdmF0YXJVcGxvYWRIYW5kbGVyIiwiaGFuZGxlT3BlcmF0aW5nSG91cnMiLCJkYXlzIiwiaGFuZGxlRHluYW1pY0xpc3QiLCJmaWVsZHMiLCJVcGRhdGVTaG9wQ29tcG9uZW50IiwibWF0Y2giLCJnZXRTaG9wIiwic2hvcHMiLCJ1c2VyIiwidXNlcl90eXBlIiwicXVlcnkiLCJwYXJhbXMiLCJzbHVnIiwicG9wdWxhdGVTaG9wIiwidXNlRWZmZWN0Iiwic2V0VHlwZXMiLCJmZXRjaERhdGEiLCJyZXN1bHQiLCJheGlvcyIsInBheW1lbnRUeXBlcyIsImJhbm5lciIsImNvbnRhY3QiLCJhdmF0YXIiLCJrZXkiLCJsaWJyYXJpZXMiLCJnb29nbGVNYXBzIiwiaW5wdXQiLCJoZWlnaHQiLCJ3aWR0aCIsImRyYWdnYWJsZSIsIm9uTG9hZGVkIiwibWFya2VyIiwic2V0QW5pbWF0aW9uIiwiQW5pbWF0aW9uIiwiQk9VTkNFIiwiZ29vZ2xlIiwibWFwcyIsImFkZExpc3RlbmVyIiwiYW1lbml0aWVzIiwiZmVhdHVyZXMiLCJ2YWxpZGF0ZUZpZWxkcyIsIlVwZGF0ZVNob3AiLCJyZWR1eEZvcm0iLCJmb3JtIiwiZW5hYmxlUmVpbml0aWFsaXplIiwiY29ubmVjdCIsInN0YXRlIiwicHJvcHMiLCJzZWxlY3RTaG9wRGV0YWlscyIsImN1cnJlbnRVc2VyU2VsZWN0b3IiLCJkaXNwYXRjaCIsImlkIiwiZ2V0U2hvcEFjdGlvbiIsImRlbGV0ZVNob3AiLCJ0ZXh0Iiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25Db2xvciIsImNhbmNlbEJ1dHRvbkNvbG9yIiwiY29uZmlybUJ1dHRvblRleHQiLCJkZWxldGVTaG9wQWN0aW9uIiwidXBkYXRlU2hvcEFjdGlvbiIsImdldFNob3BzIiwibWFrZVJlcXVlc3QiLCJnZXQiLCJhY3Rpb25zIiwiQUREX1NIT1BTIiwiR0VUX1NIT1AiLCJjcmVhdGVTaG9wIiwicG9zdCIsIkFERF9TSE9QIiwidXBkYXRlU2hvcCIsInB1dCIsIlVQREFURV9TSE9QIiwiZGVsZXRlIiwiREVMRVRFX1NIT1AiLCJzYXZlU2hvcCIsInNob3BEYXRhIiwic2VsZWN0QWxsU2hvcHMiLCJkbkVudGl0aWVzIiwiZGVub3JtYWxpemUiLCJPYmpl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QUFjLEdBQUcvQixLQUFLLElBQUk7QUFDckMsUUFBTWdDLFVBQVUsR0FBR0MsNkRBQVcsQ0FDNUI7QUFBRXhFLFNBQUssRUFBRXlFLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZbkMsS0FBSyxDQUFDb0MsUUFBTixDQUFlM0UsS0FBM0I7QUFBVCxHQUQ0QixFQUU1QjRFLHNEQUY0QixFQUc1QnJDLEtBQUssQ0FBQ29DLFFBSHNCLENBQTlCO0FBTUEsU0FBT0osVUFBVSxDQUFDdkUsS0FBbEI7QUFDRCxDQVJNO0FBVUEsTUFBTXlDLGlCQUFpQixHQUFHLENBQUNGLEtBQUQsRUFBUWxDLElBQVIsS0FBaUI7QUFFaEQsUUFBTWtFLFVBQVUsR0FBR0MsNkRBQVcsQ0FDNUI7QUFBRXhFLFNBQUssRUFBRSxDQUFDSyxJQUFEO0FBQVQsR0FENEIsRUFFNUJ1RSxzREFGNEIsRUFHNUJyQyxLQUFLLENBQUNvQyxRQUhzQixDQUE5QjtBQU1BLFNBQU9KLFVBQVUsQ0FBQ3ZFLEtBQWxCO0FBQ0QsQ0FUTTs7Ozs7Ozs7OzswQkFWTXNFLGM7MEJBVUE3QixpQiIsImZpbGUiOiJqcy8yMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbnZhciBmaXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciBhZHZhbmNlU3RyaW5nSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYWR2YW5jZS1zdHJpbmctaW5kZXgnKTtcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG5cbi8vIEBAbWF0Y2ggbG9naWNcbmZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljKCdtYXRjaCcsIDEsIGZ1bmN0aW9uIChNQVRDSCwgbmF0aXZlTWF0Y2gsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICByZXR1cm4gW1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLm1hdGNoYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLm1hdGNoXG4gICAgZnVuY3Rpb24gbWF0Y2gocmVnZXhwKSB7XG4gICAgICB2YXIgTyA9IHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcyk7XG4gICAgICB2YXIgbWF0Y2hlciA9IHJlZ2V4cCA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiByZWdleHBbTUFUQ0hdO1xuICAgICAgcmV0dXJuIG1hdGNoZXIgIT09IHVuZGVmaW5lZCA/IG1hdGNoZXIuY2FsbChyZWdleHAsIE8pIDogbmV3IFJlZ0V4cChyZWdleHApW01BVENIXShTdHJpbmcoTykpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEBtYXRjaF1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEBtYXRjaFxuICAgIGZ1bmN0aW9uIChyZWdleHApIHtcbiAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUobmF0aXZlTWF0Y2gsIHJlZ2V4cCwgdGhpcyk7XG4gICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG5cbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHJlZ2V4cCk7XG4gICAgICB2YXIgUyA9IFN0cmluZyh0aGlzKTtcblxuICAgICAgaWYgKCFyeC5nbG9iYWwpIHJldHVybiByZWdFeHBFeGVjKHJ4LCBTKTtcblxuICAgICAgdmFyIGZ1bGxVbmljb2RlID0gcngudW5pY29kZTtcbiAgICAgIHJ4Lmxhc3RJbmRleCA9IDA7XG4gICAgICB2YXIgQSA9IFtdO1xuICAgICAgdmFyIG4gPSAwO1xuICAgICAgdmFyIHJlc3VsdDtcbiAgICAgIHdoaWxlICgocmVzdWx0ID0gcmVnRXhwRXhlYyhyeCwgUykpICE9PSBudWxsKSB7XG4gICAgICAgIHZhciBtYXRjaFN0ciA9IFN0cmluZyhyZXN1bHRbMF0pO1xuICAgICAgICBBW25dID0gbWF0Y2hTdHI7XG4gICAgICAgIGlmIChtYXRjaFN0ciA9PT0gJycpIHJ4Lmxhc3RJbmRleCA9IGFkdmFuY2VTdHJpbmdJbmRleChTLCB0b0xlbmd0aChyeC5sYXN0SW5kZXgpLCBmdWxsVW5pY29kZSk7XG4gICAgICAgIG4rKztcbiAgICAgIH1cbiAgICAgIHJldHVybiBuID09PSAwID8gbnVsbCA6IEE7XG4gICAgfVxuICBdO1xufSk7XG4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHJlZHV4Rm9ybSB9IGZyb20gJ3JlZHV4LWZvcm0nXG5pbXBvcnQgeyAgUGFnZUhlYWRlciwgT3BlcmF0aW5nSG91cnMsIEF2YXRhclVwbG9hZCwgQmFubmVyVXBsb2FkLCBEeW5hbWljTGlzdCB9IGZyb20gJ2NvbXBvbmVudHMnXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0MidcbmltcG9ydCB7IHNlbGVjdFNob3BEZXRhaWxzIH0gZnJvbSAnc3RvcmUvc2VsZWN0b3JzL3Nob3BzJ1xuaW1wb3J0IHsgY3VycmVudFVzZXJTZWxlY3RvciB9IGZyb20gJ3N0b3JlL3NlbGVjdG9ycy9zZXNzaW9uJ1xuaW1wb3J0IHsgXG4gIGdldFNob3AgYXMgZ2V0U2hvcEFjdGlvbixcbiAgdXBkYXRlU2hvcCBhcyB1cGRhdGVTaG9wQWN0aW9uLFxuICBkZWxldGVTaG9wIGFzIGRlbGV0ZVNob3BBY3Rpb24gXG5cbn0gZnJvbSAnc3RvcmUvYWN0aW9uLWNyZWF0b3JzL3Nob3BzJ1xuaW1wb3J0IHsgTGluaywgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IFNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QnXG5pbXBvcnQgR29vZ2xlTWFwIGZyb20gXCJyZWFjdC1nb29nbGUtbWFwXCI7XG5pbXBvcnQgUmVhY3RHb29nbGVNYXBMb2FkZXIgZnJvbSBcInJlYWN0LWdvb2dsZS1tYXBzLWxvYWRlclwiO1xuaW1wb3J0IFJlYWN0R29vZ2xlUGxhY2VzU3VnZ2VzdCBmcm9tIFwicmVhY3QtZ29vZ2xlLXBsYWNlcy1zdWdnZXN0XCI7XG5pbXBvcnQge1xuICBNQVBTX0FQSV9LRVksXG59IGZyb20gXCIuLi8uLi91dGlscy9jb25zdGFudHNcIjtcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgR2VvY29kZSBmcm9tIFwicmVhY3QtZ2VvY29kZVwiO1xuXG5jb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xuICB0b2FzdDogdHJ1ZSxcbiAgcG9zaXRpb246ICd0b3AtZW5kJyxcbiAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxuICB0aW1lcjogMzAwMFxufSlcblxuY29uc3QgQWxlcnQgPSAodHlwZSwgdGl0bGUpID0+IFRvYXN0LmZpcmUoe1xuICB0eXBlOiB0eXBlLFxuICB0aXRsZTogdGl0bGVcbn0pXG5cbmNvbnN0IHVzZUZvcm0gPSAoeyBpbml0aWFsVmFsdWVzLCBvblN1Ym1pdCwgdmFsaWRhdGUgfSkgPT4ge1xuICBjb25zdCBpbml0aWFsaXplVmFsdWVzID0gKG9iaikgPT4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmosIChrLCB2KSA9PiAodiA9PT0gbnVsbCA/ICcnIDogdikpKVxuICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gUmVhY3QudXNlU3RhdGUoaW5pdGlhbGl6ZVZhbHVlcyhpbml0aWFsVmFsdWVzKSB8fCB7fSlcbiAgY29uc3QgW3RvdWNoZWRWYWx1ZXMsIHNldFRvdWNoZWRWYWx1ZXNdID0gUmVhY3QudXNlU3RhdGUoe30pXG4gIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSBSZWFjdC51c2VTdGF0ZSh7fSlcbiAgY29uc3QgW2FkZHJlc3MsIHNldEFkZHJlc3NdID0gUmVhY3QudXNlU3RhdGUodmFsdWVzLmFkZHJlc3MgfHwgJycpXG4gIGNvbnN0IFtjaXR5LCBzZXRDaXR5XSA9IFJlYWN0LnVzZVN0YXRlKHZhbHVlcy5jaXR5IHx8ICcnKVxuICBjb25zdCBbbG9uZ2l0dWRlLCBzZXRMb25naXR1ZGVdID0gUmVhY3QudXNlU3RhdGUodmFsdWVzLmxvbmdpdHVkZSA/IHBhcnNlRmxvYXQodmFsdWVzLmxvbmdpdHVkZSkgOiAxMjAuOTg0MjIyKVxuICBjb25zdCBbbGF0aXR1ZGUsIHNldExhdGl0dWRlXSA9IFJlYWN0LnVzZVN0YXRlKHZhbHVlcy5sYXRpdHVkZSA/IHBhcnNlRmxvYXQodmFsdWVzLmxhdGl0dWRlKSA6IDE0LjU5OTUxMilcblxuICBjb25zdCBbdHh0TG9jYXRpb24sIHNldFR4dExvY2F0aW9uXSA9IFJlYWN0LnVzZVN0YXRlKHZhbHVlcy5hZGRyZXNzID8gdmFsdWVzLmFkZHJlc3MgOiBudWxsKVxuICBjb25zdCBbdHh0U2VhcmNoLCBzZXRUeHRTZWFyY2hdID0gUmVhY3QudXNlU3RhdGUodmFsdWVzLmFkZHJlc3MgPyB2YWx1ZXMuYWRkcmVzcyA6IG51bGwpXG4gIFxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSBldmVudCA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWVcbiAgICBzZXRUeHRTZWFyY2godmFsdWUpXG4gICAgc2V0VHh0TG9jYXRpb24odHh0U2VhcmNoKVxuICB9XG4gIEdlb2NvZGUuc2V0QXBpS2V5KE1BUFNfQVBJX0tFWSlcbiAgR2VvY29kZS5zZXRMYW5ndWFnZShcImVuXCIpXG4gIEdlb2NvZGUuc2V0UmVnaW9uKFwicGhcIilcblxuICBjb25zb2xlLmxvZyh2YWx1ZXMpXG5cbiAgY29uc29sZS5sb2codmFsdWVzLm9wZXJhdGlvbnMpXG4gIGNvbnN0IGhhbmRsZU1hcmtlckNoYW5nZSA9IChldmVudCkgPT4ge1xuXG4gICAgR2VvY29kZS5mcm9tTGF0TG5nKGV2ZW50LmxhdExuZy5sYXQoKSwgZXZlbnQubGF0TG5nLmxuZygpKS50aGVuKFxuICAgICAgcmVzcG9uc2UgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5yZXN1bHRzWzBdKVxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5yZXN1bHRzWzBdLmFkZHJlc3NfY29tcG9uZW50cylcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UucmVzdWx0c1swXS5mb3JtYXR0ZWRfYWRkcmVzcylcbiAgICAgICAgY29uc3QgYWRkaSA9IHJlc3BvbnNlLnJlc3VsdHNbMF0uYWRkcmVzc19jb21wb25lbnRzXG4gICAgICAgIGNvbnN0IG5ld0FkZHJlc3MgPSByZXNwb25zZS5yZXN1bHRzWzBdLmZvcm1hdHRlZF9hZGRyZXNzXG4gICAgICAgIFxuICAgICAgICBjb25zdCBjaXR5MSA9IGFkZGkuZmluZCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN1YkxvY2FsID0gZWxlbWVudC50eXBlcy5pbmNsdWRlcygnc3VibG9jYWxpdHknKVxuICAgICAgICAgIHJldHVybiBzdWJMb2NhbFxuICAgICAgICB9KVxuICAgICAgICBjb25zdCBjaXR5MiA9IGFkZGkuZmluZCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGFkbWluQXJlYSA9IGVsZW1lbnQudHlwZXMuaW5jbHVkZXMoJ2FkbWluaXN0cmF0aXZlX2FyZWFfbGV2ZWxfMScpXG4gICAgICAgICAgcmV0dXJuIGFkbWluQXJlYVxuICAgICAgICB9KVxuICAgICAgICBjb25zdCBjaXR5ID0gY2l0eTEubG9uZ19uYW1lICsgJywgJyArIGNpdHkyLmxvbmdfbmFtZVxuICAgICAgICBjb25zdCB6aXAgPSBhZGRpLmZpbmQoKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBkYXRhID0gZWxlbWVudC50eXBlcy5pbmNsdWRlcygncG9zdGFsX2NvZGUnKVxuICAgICAgICAgIHJldHVybiBkYXRhXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKGNpdHkxLmxvbmdfbmFtZSlcbiAgICAgICAgY29uc29sZS5sb2coY2l0eTIubG9uZ19uYW1lKVxuICAgICAgICBjb25zb2xlLmxvZyh6aXAubG9uZ19uYW1lKVxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZXMpXG4gICAgICAgIHNldFR4dFNlYXJjaChuZXdBZGRyZXNzKVxuICAgICAgICBzZXRBZGRyZXNzKG5ld0FkZHJlc3MpXG4gICAgICAgIHNldExhdGl0dWRlKGV2ZW50LmxhdExuZy5sYXQoKSlcbiAgICAgICAgc2V0TG9uZ2l0dWRlKGV2ZW50LmxhdExuZy5sbmcoKSkgXG4gICAgICAgIHsvKiB3aGVuIHRoaXMgaXMgcmVtb3ZlZCBmaXhlcyB0aGUgcHJvYmxlbSB3aXRoIHN0YXRlIHZhbHVlcyBiZWluZyByZWZyZXNoZWQgKi99XG4gICAgICAgIHNldFZhbHVlcyhcbiAgICAgICAgICB7XG4gICAgICAgICAgICAuLi52YWx1ZXMsXG4gICAgICAgICAgICBhZGRyZXNzOiBuZXdBZGRyZXNzLFxuICAgICAgICAgICAgbGF0aXR1ZGU6IGxvbmdpdHVkZS50b1N0cmluZygpLFxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBsYXRpdHVkZS50b1N0cmluZygpLFxuICAgICAgICAgICAgY2l0eTogY2l0eSxcbiAgICAgICAgICAgIHppcDogemlwLmxvbmdfbmFtZSA/IHppcC5sb25nX25hbWUgOiBudWxsXG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICB9LFxuICAgICAgZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBjb25zdCBoYW5kbGVTZWxlY3RTdWdnZXN0ID0gKHN1Z2dlc3Rpb24sIGdlb2NvZGVkUHJlZGljdGlvbiwgb3JpZ2luYWxQcmVkaWN0aW9uKSA9PiB7XG4gICAgY29uc3QgeyBmb3JtYXR0ZWRfYWRkcmVzczogdHh0TG9jYXRpb24sIGdlb21ldHJ5IH0gPSBzdWdnZXN0aW9uO1xuICAgIGNvbnN0IGFkZHJlc3MgPSAnYWRkcmVzcydcbiAgICBjb25zdCBsYXQgPSAnbGF0aXR1ZGUnXG4gICAgY29uc3QgbG5nID0gJ2xvbmdpdHVkZSdcbiAgICBjb25zdCBhZGQgPSBnZW9jb2RlZFByZWRpY3Rpb24uZGVzY3JpcHRpb24uc3BsaXQoXCIsXCIpXG4gICAgY29uc3QgY291bnQgPSBhZGQubGVuZ3RoXG4gICAgY29uc3QgY2l0eTEgPSBhZGRbY291bnQgLSAzXVxuICAgIGNvbnN0IGNpdHkyID0gYWRkW2NvdW50IC0gMl1cbiAgICBzZXRUeHRTZWFyY2goZ2VvY29kZWRQcmVkaWN0aW9uLmRlc2NyaXB0aW9uKVxuICAgIGNvbnNvbGUubG9nKGdlb2NvZGVkUHJlZGljdGlvbilcbiAgICBzZXRMYXRpdHVkZShnZW9tZXRyeS5sb2NhdGlvbi5sYXQoKSlcbiAgICBzZXRMb25naXR1ZGUoZ2VvbWV0cnkubG9jYXRpb24ubG5nKCkpXG4gICAgY29uc29sZS5sb2coZ2VvbWV0cnkubG9jYXRpb24ubGF0KCkpXG4gICAgY29uc29sZS5sb2coZ2VvbWV0cnkubG9jYXRpb24ubG5nKCkpXG4gICAgc2V0VmFsdWVzKFxuICAgICAge1xuICAgICAgICAuLi52YWx1ZXMsXG4gICAgICAgIGFkZHJlc3M6IGdlb2NvZGVkUHJlZGljdGlvbi5kZXNjcmlwdGlvbixcbiAgICAgICAgbGF0aXR1ZGU6IGdlb21ldHJ5LmxvY2F0aW9uLmxuZygpLnRvU3RyaW5nKCksXG4gICAgICAgIGxvbmdpdHVkZTogZ2VvbWV0cnkubG9jYXRpb24ubGF0KCkudG9TdHJpbmcoKSxcbiAgICAgICAgY2l0eTogY2l0eTEgKyAnLCAnICsgY2l0eTJcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBmdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyaW5nKSB7XG4gICAgaWYoc3RyaW5nKSB7XG4gICAgICByZXR1cm4gc3RyaW5nWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG4gICAgfVxuICAgIHJldHVybiBzdHJpbmdcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0cmlwU3RyaW5nKHN0cmluZykge1xuICAgIGlmKHN0cmluZykge1xuICAgICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKCdfJywgJyAnKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGdldExhYmVsID0gdmFsdWVzLnR5cGVcblxuXG4gIGNvbnN0IHNlbGVjdFR5cGVzID0gKCkgPT4ge1xuICAgIGNvbnN0IGRhdGFUeXBlID0gW11cbiAgICBpZihBcnJheS5pc0FycmF5KHZhbHVlcy50eXBlKSkge1xuICAgICAgdmFsdWVzLnR5cGUubWFwKCh2YWwsIGlkeCkgPT4ge1xuICAgICAgICBjb25zdCBzdHJpcExhYmVsID0gc3RyaXBTdHJpbmcodmFsKVxuICAgICAgICBjb25zdCBsYWJlbCA9IGNhcGl0YWxpemVGaXJzdExldHRlcihzdHJpcExhYmVsKVxuICAgICAgICBkYXRhVHlwZVtpZHhdID0ge1xuICAgICAgICAgIGxhYmVsOiBsYWJlbCxcbiAgICAgICAgICB2YWx1ZTogdmFsXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGFUeXBlXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdHJpcExhYmVsID0gc3RyaXBTdHJpbmcodmFsdWVzLnR5cGUpXG4gICAgICBjb25zdCBsYWJlbCA9IGNhcGl0YWxpemVGaXJzdExldHRlcihzdHJpcExhYmVsKVxuICAgICAgY29uc3QgZGF0YVR5cGUgPSB7XG4gICAgICAgIGxhYmVsOiBsYWJlbCxcbiAgICAgICAgdmFsdWU6IHZhbHVlcy50eXBlXG4gICAgICB9XG4gICAgICByZXR1cm4gZGF0YVR5cGVcbiAgICB9XG4gICAgcmV0dXJuIGRhdGFUeXBlXG4gIH1cbiAgY29uc29sZS5sb2coc2VsZWN0VHlwZXMpXG4gIGNvbnN0IFtzZWxlY3QsIHNldFNlbGVjdF0gPSBSZWFjdC51c2VTdGF0ZShzZWxlY3RUeXBlcylcbiAgY29uc3QgcGF5bWVudF90eXBlcyA9ICgpID0+IHtcbiAgICBjb25zdCByZXQgPSBbXVxuICAgIGlmKEFycmF5LmlzQXJyYXkodmFsdWVzLnBheW1lbnRfbWV0aG9kKSkge1xuICAgICAgdmFsdWVzLnBheW1lbnRfbWV0aG9kLm1hcCgodmFsLCBpZHgpID0+IHtcbiAgICAgICAgY29uc3Qgc3RyaXBMYWJlbCA9IHN0cmlwU3RyaW5nKHZhbClcbiAgICAgICAgY29uc3QgbGFiZWwgPSBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyaXBMYWJlbClcbiAgICAgICAgcmV0W2lkeF0gPSB7XG4gICAgICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgICAgIHZhbHVlOiB2YWxcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0XG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdHJpcExhYmVsID0gc3RyaXBTdHJpbmcodmFsdWVzLnBheW1lbnRfbWV0aG9kKVxuICAgICAgY29uc3QgbGFiZWwgPSBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyaXBMYWJlbClcbiAgICAgIGNvbnN0IHJldCA9IHtcbiAgICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgICB2YWx1ZTogdmFsdWVzLnBheW1lbnRfbWV0aG9kXG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0XG4gICAgfVxuICAgIHJldHVybiByZXRcbiAgfVxuICBjb25zb2xlLmxvZyhwYXltZW50X3R5cGVzKVxuICBjb25zdCBbcGF5bWVudHMsIHNldFBheW1lbnRzXSA9IFJlYWN0LnVzZVN0YXRlKHBheW1lbnRfdHlwZXMpXG4gIGNvbnN0IGhhbmRsZVNlbGVjdENoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICBjb25zb2xlLmxvZyhldmVudClcbiAgICBzZXRTZWxlY3Qoe2V2ZW50fSlcbiAgICBjb25zdCB2YWx1ZSA9IGV2ZW50Lm1hcCgodmFsLCBpZHgpID0+IHtcbiAgICAgIHJldHVybiB2YWwudmFsdWVcbiAgICB9KVxuXG4gICAgY29uc3QgbmFtZSA9ICd0eXBlJ1xuICAgIHNldFZhbHVlcyh7XG4gICAgICAuLi52YWx1ZXMsXG4gICAgICBbbmFtZV06IHZhbHVlXG4gICAgfSlcblxuICB9XG5cbiAgY29uc3QgaGFuZGxlUGF5bWVudENoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICBjb25zb2xlLmxvZyhldmVudClcbiAgICBzZXRQYXltZW50cyh7ZXZlbnR9KVxuICAgIGNvbnN0IHZhbHVlID0gZXZlbnQubWFwKCh2YWwsIGlkeCkgPT4ge1xuICAgICAgcmV0dXJuIHZhbC52YWx1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBuYW1lID0gJ3BheW1lbnRfbWV0aG9kJ1xuICAgIHNldFZhbHVlcyh7XG4gICAgICAuLi52YWx1ZXMsXG4gICAgICBbbmFtZV06IHZhbHVlXG4gICAgfSlcblxuICB9XG4gIGNvbnNvbGUubG9nKHNlbGVjdClcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gZXZlbnQgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldFxuICAgIGNvbnN0IHZhbHVlID0gdGFyZ2V0LnR5cGUgPT09IFwiY2hlY2tib3hcIiA/IHRhcmdldC5jaGVja2VkIDogdGFyZ2V0LnZhbHVlXG4gICAgY29uc29sZS5sb2codmFsdWUpXG4gICAgaWYgKCB0YXJnZXQudHlwZSA9PT0gXCJjaGVja2JveFwiICkge1xuICAgICAgaWYoIHRhcmdldC52YWx1ZSA9PT0gMCApIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBmYWxzZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSAgdHJ1ZVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRhcmdldC52YWx1ZVxuICAgIH1cbiAgICBjb25zdCBuYW1lID0gdGFyZ2V0Lm5hbWVcbiAgICBzZXRWYWx1ZXMoe1xuICAgICAgLi4udmFsdWVzLFxuICAgICAgW25hbWVdOiB2YWx1ZVxuICAgIH0pXG4gIH1cblxuICBjb25zdCBoYW5kbGVCbHVyID0gZXZlbnQgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldFxuICAgIGNvbnN0IG5hbWUgPSB0YXJnZXQubmFtZVxuICAgIHNldFRvdWNoZWRWYWx1ZXMoe1xuICAgICAgLi4udG91Y2hlZFZhbHVlcyxcbiAgICAgIFtuYW1lXTogdHJ1ZVxuICAgIH0pXG4gICAgY29uc3QgZSA9IHZhbGlkYXRlKHZhbHVlcylcbiAgICBzZXRFcnJvcnMoe1xuICAgICAgLi4uZXJyb3JzLFxuICAgICAgLi4uZVxuICAgIH0pXG4gIH1cblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBldmVudCA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IGUgPSB2YWxpZGF0ZSh2YWx1ZXMpXG4gICAgc2V0RXJyb3JzKHtcbiAgICAgIC4uLmVycm9ycyxcbiAgICAgIC4uLmVcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKCdwcmV2ZW50aXZlczonLCB2YWx1ZXMpO1xuICAgIG9uU3VibWl0KHsgLi4udmFsdWVzLCBlIH0pXG4gIH1cblxuICBjb25zdCBiYW5uZXJVcGxvYWRIYW5kbGVyID0gZmlsZURhdGEgPT4ge1xuICAgIGNvbnNvbGUubG9nKGZpbGVEYXRhKVxuICB9XG5cbiAgY29uc3QgYXZhdGFyVXBsb2FkSGFuZGxlciA9IGZpbGVEYXRhID0+IHtcbiAgICBjb25zb2xlLmxvZyhmaWxlRGF0YSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZU9wZXJhdGluZ0hvdXJzID0gZGF5cyA9PiB7XG4gICAgY29uc3QgbmFtZSA9ICdvcGVyYXRpb25zJ1xuICAgIHNldFZhbHVlcyh7XG4gICAgICAuLi52YWx1ZXMsXG4gICAgICBbbmFtZV06IGRheXNcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgaGFuZGxlRHluYW1pY0xpc3QgPSAoZmllbGRzLCB0eXBlKSA9PiB7XG4gICAgY29uc3QgbmFtZSA9IHR5cGVcbiAgICBzZXRWYWx1ZXMoe1xuICAgICAgLi4udmFsdWVzLFxuICAgICAgW25hbWVdOiBmaWVsZHNcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB2YWx1ZXMsXG4gICAgc2V0VmFsdWVzLFxuICAgIHRvdWNoZWRWYWx1ZXMsXG4gICAgZXJyb3JzLFxuICAgIHNlbGVjdCxcbiAgICBoYW5kbGVDaGFuZ2UsXG4gICAgaGFuZGxlU2VsZWN0Q2hhbmdlLFxuICAgIGhhbmRsZVN1Ym1pdCxcbiAgICBoYW5kbGVCbHVyLFxuICAgIGhhbmRsZVNlYXJjaCxcbiAgICBoYW5kbGVTZWxlY3RTdWdnZXN0LFxuICAgIGhhbmRsZU1hcmtlckNoYW5nZSxcbiAgICBiYW5uZXJVcGxvYWRIYW5kbGVyLFxuICAgIGF2YXRhclVwbG9hZEhhbmRsZXIsXG4gICAgaGFuZGxlT3BlcmF0aW5nSG91cnMsXG4gICAgaGFuZGxlRHluYW1pY0xpc3QsXG4gICAgbG9uZ2l0dWRlLFxuICAgIGxhdGl0dWRlLFxuICAgIHR4dExvY2F0aW9uLFxuICAgIHR4dFNlYXJjaCxcbiAgICBwYXltZW50cyxcbiAgICBzZXRQYXltZW50cyxcbiAgICBoYW5kbGVQYXltZW50Q2hhbmdlXG4gIH1cbn1cblxuZnVuY3Rpb24gVXBkYXRlU2hvcENvbXBvbmVudCh7IG9uU3VibWl0LCBtYXRjaCwgZ2V0U2hvcCwgc2hvcHMsIHVzZXIgfSkge1xuICBjb25zdCB7IHVzZXJfdHlwZSB9ID0gdXNlclxuXG4gIGNvbnN0IGluaXRpYWxWYWx1ZXMgPSBzaG9wc1swXVxuXG4gIGlmICghaW5pdGlhbFZhbHVlcykge1xuICAgIHJldHVybiA8UmVkaXJlY3QgdG89XCIvYWNjb3VudC9zaG9wc1wiIC8+XG4gIH1cbiAgY29uc3QgcXVlcnkgPSBtYXRjaC5wYXJhbXMuc2x1Z1xuICBjb25zdCB7IFxuICAgIHZhbHVlcywgXG4gICAgc2V0VmFsdWVzLFxuICAgIHRvdWNoZWRWYWx1ZXMsIFxuICAgIHNlbGVjdCwgXG4gICAgZXJyb3JzLCBcbiAgICBoYW5kbGVDaGFuZ2UsIFxuICAgIGhhbmRsZVNlbGVjdENoYW5nZSwgXG4gICAgaGFuZGxlU3VibWl0LCBcbiAgICBoYW5kbGVCbHVyLCBcbiAgICBoYW5kbGVTZWFyY2gsXG4gICAgaGFuZGxlU2VsZWN0U3VnZ2VzdCxcbiAgICBoYW5kbGVNYXJrZXJDaGFuZ2UsXG4gICAgYmFubmVyVXBsb2FkSGFuZGxlcixcbiAgICBhdmF0YXJVcGxvYWRIYW5kbGVyLFxuICAgIGhhbmRsZU9wZXJhdGluZ0hvdXJzLFxuICAgIGhhbmRsZUR5bmFtaWNMaXN0LFxuICAgIHBheW1lbnRzLFxuICAgIHNldFBheW1lbnRzLFxuICAgIGhhbmRsZVBheW1lbnRDaGFuZ2UsXG4gICAgbG9uZ2l0dWRlLFxuICAgIGxhdGl0dWRlLFxuICAgIHR4dExvY2F0aW9uLFxuICAgIHR4dFNlYXJjaCB9ID0gdXNlRm9ybSh7XG4gICAgaW5pdGlhbFZhbHVlcyxcbiAgICBvblN1Ym1pdCxcbiAgICB2YWxpZGF0ZSh2YWx1ZXMpIHtcbiAgICAgIGNvbnN0IGVycm9ycyA9IHt9XG5cbiAgICAgIHJldHVybiBlcnJvcnNcbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgcG9wdWxhdGVTaG9wID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGdldFNob3AocXVlcnkpXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHBvcHVsYXRlU2hvcCgpXG4gIH0sIFtdKSAgXG5cbiAgY29uc29sZS5sb2codmFsdWVzKVxuXG4gIGlmICh1c2VyX3R5cGUgPT0gJ2N1c3RvbWVyJyB8fCB1c2VyX3R5cGUgPT0gJ2ZsZWV0Jykge1xuICAgIHJldHVybiA8UmVkaXJlY3QgZnJvbT0nL2FjY291bnQnIHRvPVwiL2FjY291bnQvb3ZlcnZpZXdcIiAvPlxuICB9XG5cblxuXG4gIGNvbnN0IFt0eXBlcywgc2V0VHlwZXNdID0gdXNlU3RhdGUoe30pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zKGAvYXBpL3Nob3BzL3R5cGVzYClcbiAgICAgIHNldFR5cGVzKHJlc3VsdC5kYXRhLmRhdGEpO1xuICAgIH07XG4gICAgZmV0Y2hEYXRhKClcbiAgfSwgW10pXG5cbiAgY29uc3QgcGF5bWVudFR5cGVzID0gW1xuICAgIHtcbiAgICAgIGxhYmVsOiBcIkNhc2hcIixcbiAgICAgIHZhbHVlOiBcImNhc2hcIlxuICAgIH0se1xuICAgICAgbGFiZWw6IFwiQ3JlZGl0IENhcmRcIixcbiAgICAgIHZhbHVlOiBcImNyZWRpdCBjYXJkXCJcbiAgICB9LHtcbiAgICAgIGxhYmVsOiBcIkJhbmsgVHJhbnNmZXJcIixcbiAgICAgIHZhbHVlOiBcImJhbmsgdHJhbnNmZXJcIiAgICAgIFxuICAgIH0sIHtcbiAgICAgIGxhYmVsOiBcIkNoZWNrXCIsXG4gICAgICB2YWx1ZTogXCJjaGVja1wiXG4gICAgfSwge1xuICAgICAgbGFiZWw6IFwiT25saW5lIFBheW1lbnRcIixcbiAgICAgIHZhbHVlOiBcIm9ubGluZSBwYXltZW50XCJcbiAgICB9LCB7XG4gICAgICBsYWJlbDogXCJPdmVyIFRoZSBDb250ZXJcIixcbiAgICAgIHZhbHVlOiBcImNvdW50ZXJcIlxuICAgIH0sIHtcbiAgICAgIGxhYmVsOiBcIlRlcm1zXCIsXG4gICAgICB2YWx1ZTogXCJ0ZXJtc1wiXG4gICAgfVxuICBdXG4gIGNvbnNvbGUubG9nKHNlbGVjdClcbiAgY29uc29sZS5sb2cocGF5bWVudHMpXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBweC0xMCBweS01XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgPFBhZ2VIZWFkZXIgdGl0bGU9XCJEZXRhaWxzXCIgc3ViVGl0bGU9XCJTaG9wXCIgPlxuICAgICAgICAgICAgPExpbmsgdG89e2AvYWNjb3VudC9zaG9wcy9gfSBjbGFzc05hbWU9XCJtbC0yIGJnLWdyYXktMzAwIGhvdmVyOmJnLWdyYXktNTAwIHRleHQtZ3JheS03MDAgc2hhZG93IGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgdGV4dC1zbSBtci0zXCI+YXJyb3dfYmFjazwvaT5cbiAgICAgICAgICAgICAgPHNwYW4+R28gQmFjazwvc3Bhbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiI1wiIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwibWwtMiBiZy1ncmVlbi01MDAgaG92ZXI6YmctZ3JlZW4tNjAwIHRleHQtd2hpdGUgc2hhZG93IGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgdGV4dC1zbSBtci0zXCI+c2F2ZV9hbHQ8L2k+XG4gICAgICAgICAgICAgIDxzcGFuPlNhdmU8L3NwYW4+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9QYWdlSGVhZGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy0yLzMgbGc6cHItMTAgbWItNVwiPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIHNoYWRvdy1sZyBiZy13aGl0ZVwiPlxuICAgICAgICAgICAgICA8QmFubmVyVXBsb2FkIHVwbG9hZEhhbmRsZXI9e2Jhbm5lclVwbG9hZEhhbmRsZXJ9IG5hbWU9XCJiYW5uZXJcIiB2YWx1ZT17dmFsdWVzLmJhbm5lciA/IHZhbHVlcy5iYW5uZXIgOiBudWxsfSAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggcHktNSBib3JkZXItYiBib3JkZXItZ3JheS0zMDBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMi8zIHAtNVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LW1kXCI+R2VuZXJhbCBTZXR0aW5nczwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+VXBkYXRlIHlvdXIgc2hvcCBwcm9maWxlIGRldGFpbHMuPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBtdC00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiBwci01IHB5LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5TaG9wIE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgdmFsdWU9e3ZhbHVlcy5uYW1lID8gdmFsdWVzLm5hbWUgOiAnJ30gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBwLTIgcm91bmRlZCBteS0zIGJsb2NrIHctZnVsbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgcHItNSBweS0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0eXBlXCI+U2hvcCBUeXBlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IGNsYXNzTmFtZT1cIm15LTNcIiBpc011bHRpIHZhbHVlPXtzZWxlY3R9IG9uQ2hhbmdlPXtoYW5kbGVTZWxlY3RDaGFuZ2V9IG5hbWU9XCJ0eXBlXCIgb3B0aW9ucz17dmFsdWVzLnR5cGUubGVuZ3RoID4gMiA/IHNlbGVjdFswXSA6IHR5cGVzfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIHByLTUgcHktMVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidHlwZVwiPlBheW1lbnQgVHlwZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBjbGFzc05hbWU9XCJteS0zXCIgaXNNdWx0aSB2YWx1ZT17cGF5bWVudHN9IG9uQ2hhbmdlPXtoYW5kbGVQYXltZW50Q2hhbmdlfSBuYW1lPVwicGF5bWVudF9tZXRob2RcIiBvcHRpb25zPXt2YWx1ZXMucGF5bWVudF9tZXRob2QubGVuZ3RoID4gMiA/IHBheW1lbnRzWzBdIDogcGF5bWVudFR5cGVzfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yIHByLTUgcHktMVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29udGFjdFwiPk1vYmlsZSBOdW1iZXI8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQgbXktM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicC0yIGJvcmRlci1ncmF5LTMwMCBpbmxpbmUtZmxleCB0ZXh0LWdyYXktNDAwIGJvcmRlci1yXCI+KzYzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3ZhbHVlcy5jb250YWN0ID8gdmFsdWVzLmNvbnRhY3QgOiAnJ30gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gIG5hbWU9XCJjb250YWN0XCIgY2xhc3NOYW1lPVwicC0yIGZsZXgtMVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTIgcHItNSBweS0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cImRlc2NyaXB0aW9uXCIgdmFsdWU9e3ZhbHVlcy5kZXNjcmlwdGlvbiA/IHZhbHVlcy5kZXNjcmlwdGlvbiA6ICcnfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAgcm93cz1cIjRcIiBjb2xzPVwiNTBcIiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktMzAwIHAtMiByb3VuZGVkIG15LTMgYmxvY2sgdy1mdWxsXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8zIHAtNVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICBTaG9wIExvZ29cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPEF2YXRhclVwbG9hZCB1cGxvYWRIYW5kbGVyPXthdmF0YXJVcGxvYWRIYW5kbGVyfSB0eXBlPVwic2hvcFwiIGNsYXNzTmFtZT1cIm10LTEwXCIgbmFtZT1cImF2YXRhclwiIHZhbHVlPXt2YWx1ZXMuYXZhdGFyID8gdmFsdWVzLmF2YXRhciA6IG51bGx9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01IGJvcmRlci1iIGJvcmRlci1ncmF5LTMwMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1tZFwiPkxvY2F0aW9uIFNldHRpbmdzPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+U2V0dXAgeW91ciBzaG9wJ3MgbG9jYXRpb24uPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0xIGJsb2NrIG15LTVcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYWRkcmVzc1wiPlNob3AgQWRkcmVzczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZCBteS0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdEdvb2dsZU1hcExvYWRlclxuICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcz17e1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBNQVBTX0FQSV9LRVksXG4gICAgICAgICAgICAgICAgICAgICAgICBsaWJyYXJpZXM6IFwicGxhY2VzLGdlb2NvZGVcIlxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXtnb29nbGVNYXBzID0+XG4gICAgICAgICAgICAgICAgICAgICAgICBnb29nbGVNYXBzICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0R29vZ2xlUGxhY2VzU3VnZ2VzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0aW9uUmVxdWVzdD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IHR4dFNlYXJjaCB8fCBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnb29nbGVNYXBzPXtnb29nbGVNYXBzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0U3VnZ2VzdD17aGFuZGxlU2VsZWN0U3VnZ2VzdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicC0yIGJvcmRlci1ncmF5LTMwMCBpbmxpbmUtZmxleCB0ZXh0LWdyYXktNDAwIGJvcmRlci1yIGZsZXgtaW5pdGlhbFwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+bG9jYXRpb25fb248L2k+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiU2VhcmNoIHNob3AgbG9jYXRpb25cIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0eHRTZWFyY2hcIiB2YWx1ZT17dHh0U2VhcmNoIHx8ICcnfSBjbGFzc05hbWU9XCJwLTIgZmxleC0xXCIgb25DaGFuZ2U9e2hhbmRsZVNlYXJjaH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdEdvb2dsZVBsYWNlc1N1Z2dlc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkIG15LTNcIj5cblxuICAgICAgICAgICAgICAgICAgICA8UmVhY3RHb29nbGVNYXBMb2FkZXJcbiAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogTUFQU19BUElfS0VZLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlicmFyaWVzOiBcInBsYWNlcyxnZW9jb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcj17Z29vZ2xlTWFwcyA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgZ29vZ2xlTWFwcyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbGF0aXR1ZGUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvbmdpdHVkZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjUwdmhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R29vZ2xlTWFwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvRml0Qm91bmRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnb29nbGVNYXBzPXtnb29nbGVNYXBzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgem9vbT17MTZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlcz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhdDogbGF0aXR1ZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsbmc6IGxvbmdpdHVkZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTG9hZGVkOiAoZ29vZ2xlTWFwcywgbWFwLCBtYXJrZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNldCBNYXJrZXIgYW5pbWF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc2V0QW5pbWF0aW9uKGdvb2dsZU1hcHMuQW5pbWF0aW9uLkJPVU5DRSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlciwgJ2RyYWdlbmQnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlTWFya2VyQ2hhbmdlKGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgbXQtNFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgcHItNSBweS0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsYXRpdHVkZVwiPkxhdGl0dWRlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwLTUgbXktMyBibG9jayBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWRcIj57bGF0aXR1ZGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgcHItNSBweS0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0eXBlXCI+TG9uZ2l0dWRlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwLTUgbXktMyBibG9jayBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWRcIj57bG9uZ2l0dWRlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8T3BlcmF0aW5nSG91cnMgdmFsdWU9e3ZhbHVlcy5vcGVyYXRpb25zfSBoYW5kbGVDaGFuZ2U9e2hhbmRsZU9wZXJhdGluZ0hvdXJzfSAgLz5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy0xLzNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgc2hhZG93LWxnIGJnLXdoaXRlIG1iLTVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byB0ZXh0LWdyYXktNzAwIHRleHQtbWQgcC01IGJvcmRlci1iIHJvdW5kZWQtdC1sZyBib3JkZXItZ3JheS0zMDBcIj5cbiAgICAgICAgICAgICAgICAgIEFtZW5pdGllc1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNVwiPlxuICAgICAgICAgICAgICA8RHluYW1pY0xpc3QgdHlwZT1cImFtZW5pdGllc1wiIHZhbHVlPXt2YWx1ZXMuYW1lbml0aWVzfSAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVEeW5hbWljTGlzdH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIHNoYWRvdy1sZyBiZy13aGl0ZSBtYi01XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gdGV4dC1ncmF5LTcwMCB0ZXh0LW1kIHAtNSBib3JkZXItYiByb3VuZGVkLXQtbGcgYm9yZGVyLWdyYXktMzAwXCI+XG4gICAgICAgICAgICAgICAgICBGZWF0dXJlc1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNVwiPlxuICAgICAgICAgICAgICA8RHluYW1pY0xpc3QgdHlwZT1cImZlYXR1cmVzXCIgdmFsdWU9e3ZhbHVlcy5mZWF0dXJlc30gIGhhbmRsZUNoYW5nZT17aGFuZGxlRHluYW1pY0xpc3R9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0ZyYWdtZW50PlxuICApXG59XG5cbmNvbnN0IHZhbGlkYXRlRmllbGRzID0gdmFsdWVzID0+IHtcbiAgbGV0IGVycm9ycyA9IHt9XG5cbiAgcmV0dXJuIGVycm9yc1xufVxuXG5jb25zdCBVcGRhdGVTaG9wID0gcmVkdXhGb3JtKHtcbiAgZm9ybTogJ3VwZGF0ZVNlcnZpY2UnLFxuICBlbmFibGVSZWluaXRpYWxpemU6IHRydWUsXG4gIHZhbGlkYXRlOiB2YWxpZGF0ZUZpZWxkc1xufSkoVXBkYXRlU2hvcENvbXBvbmVudClcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgKHN0YXRlLCBwcm9wcykgPT4ge1xuICAgIGNvbnN0IHF1ZXJ5ID0gcHJvcHMubWF0Y2gucGFyYW1zLnNsdWdcbiAgICByZXR1cm4oe1xuICAgICAgICBzaG9wczogc2VsZWN0U2hvcERldGFpbHMoc3RhdGUsIHF1ZXJ5KSxcbiAgICAgICAgdXNlcjogY3VycmVudFVzZXJTZWxlY3RvcihzdGF0ZSlcbiAgICAgIH1cbiAgICApfSxcbiAgZGlzcGF0Y2ggPT4gKHtcbiAgICBnZXRTaG9wOiBpZCA9PiBkaXNwYXRjaChnZXRTaG9wQWN0aW9uKGlkKSksXG4gICAgZGVsZXRlU2hvcDogaWQgPT4ge1xuICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgdGl0bGU6ICdBcmUgeW91IHN1cmU/JyxcbiAgICAgICAgdGV4dDogXCJZb3Ugd29uJ3QgYmUgYWJsZSB0byByZXZlcnQgdGhpcyFcIixcbiAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiAnIzMwODVkNicsXG4gICAgICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiAnI2QzMycsXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnWWVzLCBkZWxldGUgaXQhJ1xuICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICAgICAgICBkaXNwYXRjaChkZWxldGVTaG9wQWN0aW9uKGlkKSlcbiAgICAgICAgICBBbGVydCgnc3VjY2VzcycsICdVc2VyIHN1Y2Nlc3NmdWxseSBkZWxldGVkIScpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBvblN1Ym1pdDogdmFsdWVzID0+IHtcbiAgICAgIGRpc3BhdGNoKHVwZGF0ZVNob3BBY3Rpb24odmFsdWVzKSlcbiAgICAgIEFsZXJ0KCdzdWNjZXNzJywgJ1BNUyBzdWNjZXNzZnVsbHkgdXBkYXRlZCEnKVxuICAgIH1cbiAgfSlcbikoVXBkYXRlU2hvcCkiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyBzaG9wQWN0aW9ucyBhcyBhY3Rpb25zIH0gZnJvbSAnc3RvcmUvYWN0aW9ucydcbmltcG9ydCB7IG1ha2VSZXF1ZXN0IH0gZnJvbSAnc3RvcmUvYWN0aW9uLWNyZWF0b3JzL3JlcXVlc3RzJ1xuXG5leHBvcnQgY29uc3QgZ2V0U2hvcHMgPSAoKSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZGlzcGF0Y2goXG4gICAgbWFrZVJlcXVlc3QoJ2dldC1zaG9wcycsICgpID0+IGF4aW9zLmdldChgL2FwaS9zaG9wc2ApKVxuICApXG5cbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IGFjdGlvbnMuQUREX1NIT1BTLFxuICAgIHNob3BzOiByZXNwb25zZS5kYXRhLmRhdGFcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNob3AgPSBzbHVnID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkaXNwYXRjaChcbiAgICBtYWtlUmVxdWVzdChgZ2V0LXNob3AtJHtzbHVnfWAsICgpID0+IGF4aW9zLmdldChgL2FwaS9zaG9wcy8ke3NsdWd9YCkpXG4gIClcblxuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogYWN0aW9ucy5HRVRfU0hPUCxcbiAgICBzaG9wczogcmVzcG9uc2UuZGF0YS5kYXRhXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVTaG9wID0gZGF0YSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZGlzcGF0Y2goXG4gICAgbWFrZVJlcXVlc3QoJ2NyZWF0ZS1zaG9wJywgKCkgPT4gYXhpb3MucG9zdChgL2FwaS9zaG9wc2AsIGRhdGEpKVxuICApXG5cbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IGFjdGlvbnMuQUREX1NIT1AsXG4gICAgc2hvcHM6IHJlc3BvbnNlLmRhdGEuZGF0YVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlU2hvcCA9IGRhdGEgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRpc3BhdGNoKFxuICAgIG1ha2VSZXF1ZXN0KGB1cGRhdGUtc2hvcC0ke2RhdGEuc2x1Z31gLCAoKSA9PlxuICAgICAgYXhpb3MucHV0KGAvYXBpL3Nob3BzLyR7ZGF0YS5zbHVnfWAsIGRhdGEpXG4gICAgKVxuICApXG5cbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IGFjdGlvbnMuVVBEQVRFX1NIT1AsXG4gICAgc2hvcHM6IHJlc3BvbnNlLmRhdGEuZGF0YVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgZGVsZXRlU2hvcCA9IHNsdWcgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICBhd2FpdCBkaXNwYXRjaChcbiAgICBtYWtlUmVxdWVzdChgdXBkYXRlLXNob3AtJHtzbHVnfWAsICgpID0+IGF4aW9zLmRlbGV0ZShgL2FwaS9zaG9wcy8ke3NsdWd9YCkpXG4gIClcblxuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogYWN0aW9ucy5ERUxFVEVfU0hPUCxcbiAgICBzbHVnXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBzYXZlU2hvcCA9IHNob3BEYXRhID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgY29uc3QgeyBzbHVnIH0gPSBzaG9wRGF0YVxuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZGlzcGF0Y2goXG4gICAgbWFrZVJlcXVlc3QoJ3NhdmUtc2hvcC1zZXR0aW5ncycsICgpID0+XG4gICAgICBheGlvcy5wdXQoYC9hcGkvc2hvcHMvJHtzbHVnfWAsIHNob3BEYXRhKVxuICAgIClcbiAgKVxuXG4gIHJldHVybiByZXNwb25zZVxufVxuXG5cbiIsImltcG9ydCB7IGRlbm9ybWFsaXplIH0gZnJvbSAnbm9ybWFsaXpyJ1xuXG5pbXBvcnQgeyBlbnRpdGllcyBhcyBlbnRpdGllc1NjaGVtYSB9IGZyb20gJ3N0b3JlL3NjaGVtYXMnXG5cbmV4cG9ydCBjb25zdCBzZWxlY3RBbGxTaG9wcyA9IHN0YXRlID0+IHtcbiAgY29uc3QgZG5FbnRpdGllcyA9IGRlbm9ybWFsaXplKFxuICAgIHsgc2hvcHM6IE9iamVjdC5rZXlzKHN0YXRlLmVudGl0aWVzLnNob3BzKSB9LFxuICAgIGVudGl0aWVzU2NoZW1hLFxuICAgIHN0YXRlLmVudGl0aWVzXG4gIClcblxuICByZXR1cm4gZG5FbnRpdGllcy5zaG9wc1xufVxuXG5leHBvcnQgY29uc3Qgc2VsZWN0U2hvcERldGFpbHMgPSAoc3RhdGUsIHNsdWcpID0+IHtcblxuICBjb25zdCBkbkVudGl0aWVzID0gZGVub3JtYWxpemUoXG4gICAgeyBzaG9wczogW3NsdWddIH0sXG4gICAgZW50aXRpZXNTY2hlbWEsXG4gICAgc3RhdGUuZW50aXRpZXNcbiAgKVxuXG4gIHJldHVybiBkbkVudGl0aWVzLnNob3BzXG59Il0sInNvdXJjZVJvb3QiOiIifQ==