(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/react-select/creatable/dist/react-select.browser.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-select/creatable/dist/react-select.browser.esm.js ***!
  \******************************************************************************/
/*! exports provided: default, defaultProps, makeCreatableSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultProps", function() { return defaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeCreatableSelect", function() { return makeCreatableSelect; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/react-select/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-select/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/react-select/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/react-select/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/react-select/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/react-select/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/react-select/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/react-select/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/react-select/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/react-select/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/react-select/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @emotion/core */ "./node_modules/react-select/node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-dom */ "./node_modules/@hot-loader/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/react-select/node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _dist_chunk_39d3fda8_browser_esm_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../dist/chunk-39d3fda8.browser.esm.js */ "./node_modules/react-select/dist/chunk-39d3fda8.browser.esm.js");
/* harmony import */ var _dist_chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../dist/chunk-80640036.browser.esm.js */ "./node_modules/react-select/dist/chunk-80640036.browser.esm.js");
/* harmony import */ var _dist_base_dist_react_select_cac0a5ae_browser_esm_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../dist/base/dist/react-select-cac0a5ae.browser.esm.js */ "./node_modules/react-select/dist/base/dist/react-select-cac0a5ae.browser.esm.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @emotion/css */ "./node_modules/react-select/node_modules/@emotion/css/dist/css.browser.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/react-select/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-input-autosize */ "./node_modules/react-input-autosize/lib/AutosizeInput.js");
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react_input_autosize__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _dist_chunk_b36baf1a_browser_esm_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../dist/chunk-b36baf1a.browser.esm.js */ "./node_modules/react-select/dist/chunk-b36baf1a.browser.esm.js");

























var compareOption = function compareOption() {
  var inputValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var option = arguments.length > 1 ? arguments[1] : undefined;
  var candidate = String(inputValue).toLowerCase();
  var optionValue = String(option.value).toLowerCase();
  var optionLabel = String(option.label).toLowerCase();
  return optionValue === candidate || optionLabel === candidate;
};

var builtins = {
  formatCreateLabel: function formatCreateLabel(inputValue) {
    return "Create \"".concat(inputValue, "\"");
  },
  isValidNewOption: function isValidNewOption(inputValue, selectValue, selectOptions) {
    return !(!inputValue || selectValue.some(function (option) {
      return compareOption(inputValue, option);
    }) || selectOptions.some(function (option) {
      return compareOption(inputValue, option);
    }));
  },
  getNewOptionData: function getNewOptionData(inputValue, optionLabel) {
    return {
      label: optionLabel,
      value: inputValue,
      __isNew__: true
    };
  }
};
var defaultProps = Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({
  allowCreateWhileLoading: false,
  createOptionPosition: 'last'
}, builtins);
var makeCreatableSelect = function makeCreatableSelect(SelectComponent) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Creatable, _Component);

    function Creatable(props) {
      var _this;

      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Creatable);

      _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Creatable).call(this, props));

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "select", void 0);

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "onChange", function (newValue, actionMeta) {
        var _this$props = _this.props,
            getNewOptionData = _this$props.getNewOptionData,
            inputValue = _this$props.inputValue,
            isMulti = _this$props.isMulti,
            onChange = _this$props.onChange,
            onCreateOption = _this$props.onCreateOption,
            value = _this$props.value,
            name = _this$props.name;

        if (actionMeta.action !== 'select-option') {
          return onChange(newValue, actionMeta);
        }

        var newOption = _this.state.newOption;
        var valueArray = Array.isArray(newValue) ? newValue : [newValue];

        if (valueArray[valueArray.length - 1] === newOption) {
          if (onCreateOption) onCreateOption(inputValue);else {
            var newOptionData = getNewOptionData(inputValue, inputValue);
            var newActionMeta = {
              action: 'create-option',
              name: name
            };

            if (isMulti) {
              onChange([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_dist_chunk_39d3fda8_browser_esm_js__WEBPACK_IMPORTED_MODULE_17__["f"])(value)), [newOptionData]), newActionMeta);
            } else {
              onChange(newOptionData, newActionMeta);
            }
          }
          return;
        }

        onChange(newValue, actionMeta);
      });

      var options = props.options || [];
      _this.state = {
        newOption: undefined,
        options: options
      };
      return _this;
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Creatable, [{
      key: "UNSAFE_componentWillReceiveProps",
      value: function UNSAFE_componentWillReceiveProps(nextProps) {
        var allowCreateWhileLoading = nextProps.allowCreateWhileLoading,
            createOptionPosition = nextProps.createOptionPosition,
            formatCreateLabel = nextProps.formatCreateLabel,
            getNewOptionData = nextProps.getNewOptionData,
            inputValue = nextProps.inputValue,
            isLoading = nextProps.isLoading,
            isValidNewOption = nextProps.isValidNewOption,
            value = nextProps.value;
        var options = nextProps.options || [];
        var newOption = this.state.newOption;

        if (isValidNewOption(inputValue, Object(_dist_chunk_39d3fda8_browser_esm_js__WEBPACK_IMPORTED_MODULE_17__["f"])(value), options)) {
          newOption = getNewOptionData(inputValue, formatCreateLabel(inputValue));
        } else {
          newOption = undefined;
        }

        this.setState({
          newOption: newOption,
          options: (allowCreateWhileLoading || !isLoading) && newOption ? createOptionPosition === 'first' ? [newOption].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(options)) : [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(options), [newOption]) : options
        });
      }
    }, {
      key: "focus",
      value: function focus() {
        this.select.focus();
      }
    }, {
      key: "blur",
      value: function blur() {
        this.select.blur();
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var options = this.state.options;
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(SelectComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.props, {
          ref: function ref(_ref) {
            _this2.select = _ref;
          },
          options: options,
          onChange: this.onChange
        }));
      }
    }]);

    return Creatable;
  }(react__WEBPACK_IMPORTED_MODULE_11__["Component"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(_class, "defaultProps", defaultProps), _temp;
}; // TODO: do this in package entrypoint

var SelectCreatable = makeCreatableSelect(_dist_base_dist_react_select_cac0a5ae_browser_esm_js__WEBPACK_IMPORTED_MODULE_19__["S"]);
var Creatable = Object(_dist_chunk_b36baf1a_browser_esm_js__WEBPACK_IMPORTED_MODULE_23__["m"])(SelectCreatable);

/* harmony default export */ __webpack_exports__["default"] = (Creatable);



/***/ }),

/***/ "./resources/assets/js/pages/Vehicles/CreateVehicle.jsx":
/*!**************************************************************!*\
  !*** ./resources/assets/js/pages/Vehicles/CreateVehicle.jsx ***!
  \**************************************************************/
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
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var color_convert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! color-convert */ "./node_modules/color-convert/index.js");
/* harmony import */ var color_convert__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(color_convert__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var store_selectors_session__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! store/selectors/session */ "./resources/assets/js/store/selectors/session/index.js");
/* harmony import */ var store_action_creators_vehicles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! store/action-creators/vehicles */ "./resources/assets/js/store/action-creators/vehicles/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils/constants */ "./resources/assets/js/utils/constants.js");
/* harmony import */ var react_geocode__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-geocode */ "./node_modules/react-geocode/lib/index.js");
/* harmony import */ var react_geocode__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_geocode__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _Multi_Step__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Multi-Step */ "./resources/assets/js/pages/Vehicles/Multi-Step/index.js");








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













const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_14___default.a.mixin({
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

  const [values, setValues] = react__WEBPACK_IMPORTED_MODULE_10___default.a.useState(initializeValues(initialValues[0]) || {});
  const [touchedValues, setTouchedValues] = react__WEBPACK_IMPORTED_MODULE_10___default.a.useState({});
  const [errors, setErrors] = react__WEBPACK_IMPORTED_MODULE_10___default.a.useState({});
  const [address, setAddress] = react__WEBPACK_IMPORTED_MODULE_10___default.a.useState(values.address || '');
  const [city, setCity] = react__WEBPACK_IMPORTED_MODULE_10___default.a.useState(values.city || '');
  const [longitude, setLongitude] = react__WEBPACK_IMPORTED_MODULE_10___default.a.useState(values.longitude ? values.longitude : 120.984222);
  const [latitude, setLatitude] = react__WEBPACK_IMPORTED_MODULE_10___default.a.useState(values.latitude ? values.latitude : 14.599512);
  const [txtLocation, setTxtLocation] = react__WEBPACK_IMPORTED_MODULE_10___default.a.useState(null);
  const [txtSearch, setTxtSearch] = react__WEBPACK_IMPORTED_MODULE_10___default.a.useState(null);

  const handleSearch = event => {
    const value = event.target.value;
    setTxtSearch(value);
    setTxtLocation(txtSearch);
  };

  react_geocode__WEBPACK_IMPORTED_MODULE_16___default.a.setApiKey(_utils_constants__WEBPACK_IMPORTED_MODULE_15__["MAPS_API_KEY"]);
  react_geocode__WEBPACK_IMPORTED_MODULE_16___default.a.setLanguage("en");
  react_geocode__WEBPACK_IMPORTED_MODULE_16___default.a.setRegion("ph");
  console.log(values);

  const handleMarkerChange = event => {
    react_geocode__WEBPACK_IMPORTED_MODULE_16___default.a.fromLatLng(event.latLng.lat(), event.latLng.lng()).then(response => {
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

    return string;
  }

  const getLabel = values.type;
  const stripLabel = stripString(getLabel);
  const [selectMake, setSelectMake] = react__WEBPACK_IMPORTED_MODULE_10___default.a.useState({
    label: '',
    value: ''
  });

  const handleSelectMakeChange = event => {
    const value = event.value;
    const label = event.label;
    const name = 'make_id';
    setValues(_objectSpread({}, values, {
      [name]: value
    }));
    setSelectMake({
      value: value,
      label: label
    });
    console.log(value);
    console.log(label);
    console.log(selectMake);
  };

  console.log(selectMake);
  const [selectModel, setSelectModel] = react__WEBPACK_IMPORTED_MODULE_10___default.a.useState({
    label: '',
    value: ''
  });

  const handleSelectModelChange = event => {
    const value = event.value;
    const label = event.label;
    const name = 'model_id';
    setValues(_objectSpread({}, values, {
      [name]: value
    }));
    setSelectModel({
      value: value,
      label: label
    });
  };

  const [selectTrim, setSelectTrim] = react__WEBPACK_IMPORTED_MODULE_10___default.a.useState({
    label: '',
    value: ''
  });

  const handleSelectTrimChange = event => {
    const value = event.value;
    const label = event.label;
    const name = 'trim_id';
    setValues(_objectSpread({}, values, {
      [name]: value
    }));
    setSelectTrim({
      value: value,
      label: label
    });
  };

  const [selectType, setSelectType] = react__WEBPACK_IMPORTED_MODULE_10___default.a.useState({
    label: '',
    value: ''
  });

  const handleSelectTypeChange = event => {
    const value = event.value;
    const label = event.label;
    const name = 'type';
    setValues(_objectSpread({}, values, {
      [name]: value
    }));
    setSelectType({
      value: value,
      label: label
    });
  };

  const [selectEngine, setSelectEngine] = react__WEBPACK_IMPORTED_MODULE_10___default.a.useState({
    label: '',
    value: ''
  });

  const handleSelectEngineChange = event => {
    const value = event.value;
    const label = event.label;
    const name = 'engine_type';
    setValues(_objectSpread({}, values, {
      [name]: value
    }));
    setSelectEngine({
      value: value,
      label: label
    });
  };

  const [selectTransmission, setSelectTransmission] = react__WEBPACK_IMPORTED_MODULE_10___default.a.useState({
    label: '',
    value: ''
  });

  const handleSelectTransmissionChange = event => {
    const value = event.value;
    const label = event.label;
    const name = 'transmission';
    setValues(_objectSpread({}, values, {
      [name]: value
    }));
    setSelectTransmission({
      value: value,
      label: label
    });
  };

  const [selectColor, setSelectColor] = react__WEBPACK_IMPORTED_MODULE_10___default.a.useState({
    label: '',
    value: ''
  });

  const handleSelectColorChange = event => {
    const value = event.value;
    const label = event.label;
    const name = 'color';
    setValues(_objectSpread({}, values, {
      [name]: value
    }));
    setSelectColor({
      value: value,
      label: label
    });
  };

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

  const [step, setStep] = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(1);
  const [progress, setProgress] = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])({
    1: false,
    2: false,
    3: false,
    4: false
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

  const handleSubmit = event => {
    event.preventDefault();
    const e = validate(values);
    setErrors(_objectSpread({}, errors, {}, e));
    console.log('Vehicles:', values);
    onSubmit(_objectSpread({}, values, {
      e
    }));
    setProgress(_objectSpread({}, progress, {
      step: true
    }));
    setStep(step + 1);
  };

  return {
    values,
    setValues,
    touchedValues,
    errors,
    selectMake,
    selectModel,
    selectTrim,
    selectType,
    selectEngine,
    selectTransmission,
    setSelectMake,
    setSelectModel,
    setSelectTrim,
    setSelectType,
    setSelectEngine,
    setSelectTransmission,
    selectColor,
    setSelectColor,
    handleSelectColorChange,
    handleChange,
    handleSelectMakeChange,
    handleSelectModelChange,
    handleSelectTrimChange,
    handleSelectTypeChange,
    handleSelectEngineChange,
    handleSelectTransmissionChange,
    handleSubmit,
    handleBlur,
    handleSearch,
    handleSelectSuggest,
    handleMarkerChange,
    longitude,
    latitude,
    txtLocation,
    txtSearch,
    step,
    setStep,
    progress,
    nextStep,
    previousStep
  };
};

__signature__(useForm, "useState{[values, setValues](initializeValues(initialValues[0]) || {})}\nuseState{[touchedValues, setTouchedValues]({})}\nuseState{[errors, setErrors]({})}\nuseState{[address, setAddress](values.address || '')}\nuseState{[city, setCity](values.city || '')}\nuseState{[longitude, setLongitude](values.longitude ? values.longitude : 120.984222)}\nuseState{[latitude, setLatitude](values.latitude ? values.latitude : 14.599512)}\nuseState{[txtLocation, setTxtLocation](null)}\nuseState{[txtSearch, setTxtSearch](null)}\nuseState{[selectMake, setSelectMake]({\n        label: '',\n        value:''\n    })}\nuseState{[selectModel, setSelectModel]({\n        label: '',\n        value:''\n    })}\nuseState{[selectTrim, setSelectTrim]({\n        label: '',\n        value:''\n    })}\nuseState{[selectType, setSelectType]({\n      label: '',\n      value:''\n    })}\nuseState{[selectEngine, setSelectEngine]({\n      label: '',\n      value:''\n    })}\nuseState{[selectTransmission, setSelectTransmission]({\n      label: '',\n      value:''\n    })}\nuseState{[selectColor, setSelectColor]({\n      label: '',\n      value:''\n    })}\nuseState{[step, setStep](1)}\nuseState{[progress, setProgress]({\n      1: false,\n      2: false,\n      3: false,\n      4: false\n    })}");

function CreateVehicleComponent({
  onSubmit,
  user
}) {
  const initialValues = [{
    type: '',
    make_id: '',
    model_id: '',
    trim_id: '',
    car_year: '',
    engine_type: '',
    transmission: '',
    color: '',
    plate_number: '',
    current_mileage: '',
    date_purchased: '',
    last_serviced: '',
    address: '',
    city: '',
    zip: '',
    longitude: '',
    latitude: ''
  }];
  const {
    values,
    setValues,
    touchedValues,
    errors,
    selectMake,
    selectModel,
    selectTrim,
    selectType,
    selectEngine,
    selectTransmission,
    setSelectMake,
    setSelectModel,
    setSelectTrim,
    setSelectType,
    setSelectEngine,
    setSelectTransmission,
    selectColor,
    setSelectColor,
    handleSelectColorChange,
    handleChange,
    handleSelectMakeChange,
    handleSelectModelChange,
    handleSelectTrimChange,
    handleSelectTypeChange,
    handleSelectEngineChange,
    handleSelectTransmissionChange,
    handleSubmit,
    handleBlur,
    handleSearch,
    handleSelectSuggest,
    handleMarkerChange,
    longitude,
    latitude,
    txtLocation,
    txtSearch,
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
      return errors;
    }

  });
  const [makes, setMakes] = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])([]);
  const [vTypes, setVTypes] = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])([]);
  const [eTypes, setETypes] = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])([]);
  const [tTypes, setTTypes] = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])([]);
  console.log(makes);
  Object(react__WEBPACK_IMPORTED_MODULE_10__["useEffect"])(() => {
    const fetchMake = async () => {
      const result = await axios__WEBPACK_IMPORTED_MODULE_17___default()("/api/car-makes/select");
      setMakes(result.data.data);
    };

    const fetchTypes = async () => {
      const result = await axios__WEBPACK_IMPORTED_MODULE_17___default()("/api/vehicles/types");
      setVTypes(result.data);
    };

    const fetchEngines = async () => {
      const result = await axios__WEBPACK_IMPORTED_MODULE_17___default()("/api/vehicles/engines");
      setETypes(result.data);
    };

    const fetchTransmission = async () => {
      const result = await axios__WEBPACK_IMPORTED_MODULE_17___default()("/api/vehicles/transmission");
      setTTypes(result.data);
    };

    fetchMake();
    fetchTypes();
    fetchEngines();
    fetchTransmission();
  }, []);
  const [models, setModels] = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_10__["useEffect"])(() => {
    const fetchModel = async () => {
      const result = await axios__WEBPACK_IMPORTED_MODULE_17___default()("/api/car-models/select/".concat(selectMake.value || ''));
      setModels(result.data.data);
    };

    fetchModel();
  }, [selectMake]);
  const [trims, setTrims] = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])([]);
  console.log(trims);
  Object(react__WEBPACK_IMPORTED_MODULE_10__["useEffect"])(() => {
    const fetchTrims = async () => {
      const result = await axios__WEBPACK_IMPORTED_MODULE_17___default()("/api/car-trims/select/".concat(selectModel.value || ''));
      setTrims(result.data.data);
    };

    fetchTrims();
  }, [selectModel]);

  const handleCreateMake = value => {
    setTimeout(() => {
      const create = async () => {
        const result = await axios__WEBPACK_IMPORTED_MODULE_17___default.a.post("/api/car-makes", {
          name: value,
          type_id: 1
        });
        const data = result.data.data;
        console.log(data);
        setSelectMake({
          label: data.name,
          value: data.id
        });
      };

      create();
    });
  };

  const handleCreateModel = value => {
    setTimeout(() => {
      const create = async () => {
        const result = await axios__WEBPACK_IMPORTED_MODULE_17___default.a.post("/api/car-models", {
          name: value,
          make_id: selectMake.value,
          type_id: 1
        });
        const data = result.data.data;
        console.log(data);
        setSelectModel({
          label: data.name,
          value: data.id
        });
      };

      create();
    });
  };

  const handleCreateTrim = value => {
    setTimeout(() => {
      const create = async () => {
        const result = await axios__WEBPACK_IMPORTED_MODULE_17___default.a.post("/api/car-trims", {
          name: value,
          model_id: selectModel.value,
          type_id: 1
        });
        const data = result.data.data;
        console.log(data);
        setSelectTrim({
          label: data.name,
          value: data.id
        });
      };

      create();
    });
  };

  function computeProgress() {
    const first = progress[1] == true ? 25 : 0;
    const second = progress[2] == true ? 25 : 0;
    const third = progress[3] == true ? 25 : 0;
    const forth = progress[4] == true ? 25 : 0;
    const total = first + second + third + forth;
    return "".concat(total, "%");
  }

  function currentPage(page) {
    if (page == step) {
      return 'col-span-1 text-center py-3 bg-white text-green-500 font-bold';
    } else {
      return progress[page] == true ? 'col-span-1 text-center py-3 bg-white text-gray-800 font-bold' : 'col-span-1 text-center py-3 bg-gray-100 text-gray-500 hover:bg-gray-300 hover:text-gray-60';
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: "bb-white px-10 py-10"
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: "w-full rounded-lg shadow-lg"
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: "bg-white rounded-t-lg"
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: "progress-label float-left p-5"
  }, "Completion Progress"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: "float-right p-5"
  }, step, "/4"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: "clearfix"
  }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: "shadow w-full bg-gray-300"
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: "bg-blue-500 text-xs leading-none py-1 text-center text-white",
    style: {
      width: computeProgress()
    }
  })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: "grid grid-cols-4"
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: currentPage(1)
  }, "Location"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: currentPage(2)
  }, "General Details"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: currentPage(3)
  }, "Engine Details"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: currentPage(4)
  }, "Service Details"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("form", {
    onSubmit: handleSubmit
  }, step == 1 && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Multi_Step__WEBPACK_IMPORTED_MODULE_18__["VehicleLocation"], {
    progress: progress[1],
    values: values,
    nextStep: nextStep,
    txtSearch: txtSearch,
    handleChange: handleChange,
    handleSearch: handleSearch,
    latitude: latitude,
    longitude: longitude,
    handleSelectSuggest: handleSelectSuggest,
    handleMarkerChange: handleMarkerChange
  }), step == 2 && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Multi_Step__WEBPACK_IMPORTED_MODULE_18__["VehicleDetails"], {
    progress: progress[2],
    makes: makes,
    models: models,
    trims: trims,
    handleCreateMake: handleCreateMake,
    selectMake: selectMake,
    handleSelectMakeChange: handleSelectMakeChange,
    handleCreateModel: handleCreateModel,
    selectModel: selectModel,
    handleSelectModelChange: handleSelectModelChange,
    values: values,
    handleChange: handleChange,
    handleCreateTrim: handleCreateTrim,
    selectTrim: selectTrim,
    handleSelectTrimChange: handleSelectTrimChange,
    nextStep: nextStep,
    previousStep: previousStep
  }), step == 3 && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Multi_Step__WEBPACK_IMPORTED_MODULE_18__["AdditionalDetails"], {
    progress: progress[3],
    values: values,
    handleChange: handleChange,
    selectType: selectType,
    handleSelectTypeChange: handleSelectTypeChange,
    vTypes: vTypes,
    selectEngine: selectEngine,
    handleSelectEngineChange: handleSelectEngineChange,
    eTypes: eTypes,
    selectTransmission: selectTransmission,
    handleSelectTransmissionChange: handleSelectTransmissionChange,
    tTypes: tTypes,
    selectColor: selectColor,
    handleSelectColorChange: handleSelectColorChange,
    nextStep: nextStep,
    previousStep: previousStep
  }), step == 4 && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Multi_Step__WEBPACK_IMPORTED_MODULE_18__["ServiceDetails"], {
    progress: progress[4],
    values: values,
    setValues: setValues,
    handleChange: handleChange,
    nextStep: nextStep,
    previousStep: previousStep
  }), step == 5 && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Multi_Step__WEBPACK_IMPORTED_MODULE_18__["Success"], {
    values: values
  })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: "clearfix"
  }))));
}

__signature__(CreateVehicleComponent, "useForm{{ \n        values,\n        setValues,\n        touchedValues,\n        errors,\n        selectMake,\n        selectModel,\n        selectTrim,\n        selectType,\n        selectEngine,\n        selectTransmission,\n        setSelectMake,\n        setSelectModel,\n        setSelectTrim,\n        setSelectType,\n        setSelectEngine,\n        setSelectTransmission,\n        selectColor,\n        setSelectColor,\n        handleSelectColorChange,\n        handleChange,\n        handleSelectMakeChange,\n        handleSelectModelChange,\n        handleSelectTrimChange,\n        handleSelectTypeChange,\n        handleSelectEngineChange,\n        handleSelectTransmissionChange,\n        handleSubmit,\n        handleBlur,\n        handleSearch,\n        handleSelectSuggest,\n        handleMarkerChange,\n        longitude,\n        latitude,\n        txtLocation,\n        txtSearch,\n        step,\n        setStep,\n        progress,\n        nextStep,\n        previousStep }}\nuseState{[makes, setMakes]([])}\nuseState{[vTypes, setVTypes]([])}\nuseState{[eTypes, setETypes]([])}\nuseState{[tTypes, setTTypes]([])}\nuseEffect{}\nuseState{[models, setModels]([])}\nuseEffect{}\nuseState{[trims, setTrims]([])}\nuseEffect{}", () => [useForm]);

const validateFields = values => {
  let errors = {};

  if (!values.address) {
    errors.txtSearch = 'This field is required';
  }

  if (!values.make_id) {
    errors.make_id = 'This field is required';
  }

  if (!values.model_id) {
    errors.model_id = 'This field is required';
  }

  if (!values.trim_id) {
    errors.trim_id = 'This field is required';
  }

  if (!values.car_year) {
    errors.car_year = 'This field is required';
  }

  if (!values.plate_number) {
    errors.plate_number = 'This field is required';
  }

  if (!values.type) {
    errors.type = 'This field is required';
  }

  if (!values.engine_type) {
    errors.engine_type = 'This field is required';
  }

  if (!values.transmission) {
    errors.transmission = 'This field is required';
  }

  if (!values.date_purchased) {
    errors.date_purchased = 'This field is required';
  }

  if (!values.last_serviced) {
    errors.last_serviced = 'This field is required';
  }

  if (!values.current_mileage > 5000) {
    errors.current_mileage = 'Mileage needs to be more than 5000';
  }

  return errors;
};

const CreateVehicle = Object(redux_form__WEBPACK_IMPORTED_MODULE_7__["reduxForm"])({
  form: 'createVehicle',
  enableReinitialize: true,
  validate: validateFields
})(CreateVehicleComponent);

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(state => {
  return {
    user: Object(store_selectors_session__WEBPACK_IMPORTED_MODULE_12__["currentUserSelector"])(state)
  };
}, dispatch => ({
  onSubmit: values => {
    console.log(values);
    dispatch(Object(store_action_creators_vehicles__WEBPACK_IMPORTED_MODULE_13__["createVehicle"])(values));
    Alert('success', 'Successfully create a new vehicle!');
  }
}))(CreateVehicle);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Toast, "Toast", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Vehicles/CreateVehicle.jsx");
  reactHotLoader.register(Alert, "Alert", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Vehicles/CreateVehicle.jsx");
  reactHotLoader.register(useForm, "useForm", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Vehicles/CreateVehicle.jsx");
  reactHotLoader.register(CreateVehicleComponent, "CreateVehicleComponent", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Vehicles/CreateVehicle.jsx");
  reactHotLoader.register(validateFields, "validateFields", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Vehicles/CreateVehicle.jsx");
  reactHotLoader.register(CreateVehicle, "CreateVehicle", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Vehicles/CreateVehicle.jsx");
  reactHotLoader.register(_default, "default", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Vehicles/CreateVehicle.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/pages/Vehicles/Multi-Step/AdditionalDetails.jsx":
/*!*****************************************************************************!*\
  !*** ./resources/assets/js/pages/Vehicles/Multi-Step/AdditionalDetails.jsx ***!
  \*****************************************************************************/
/*! exports provided: AdditionalDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditionalDetails", function() { return AdditionalDetails; });
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);



(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};





const AdditionalDetails = ({
  progress,
  values,
  handleChange,
  selectType,
  handleSelectTypeChange,
  vTypes,
  selectEngine,
  handleSelectEngineChange,
  eTypes,
  selectTransmission,
  handleSelectTransmissionChange,
  tTypes,
  selectColor,
  handleSelectColorChange,
  nextStep,
  previousStep
}) => {
  const [colors, setColors] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState([]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const fetchColors = async () => {
      const result = await axios__WEBPACK_IMPORTED_MODULE_5___default()("/api/vehicles/colors");
      setColors(result.data);
    };

    fetchColors();
  }, []);

  const toggleCompleted = () => {
    const a = values.plate_number != '' ? 0 : 1;
    const b = values.vin != '' || values.vin != null ? 0 : 1;
    const c = selectType.value != '' ? 0 : 1;
    const d = selectEngine.value != '' ? 0 : 1;
    const e = selectTransmission.value != '' ? 0 : 1;
    const f = selectColor.value != '' ? 0 : 1;
    const total = a + b + c + d + e + f;
    console.log(total);
    return total;
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    toggleCompleted();
  }, [values]);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "my-10 px-10 border-b border-gray-200"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "w-full rounded bg-white shadow-lg"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "flex border-b border-gray-200"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "flex-initial self-center"
  }, toggleCompleted() == 0 || progress === true ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "px-4 py-2 rounded bg-green-500 m-5 text-2xl text-2xl text-white"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "material-icons"
  }, "check")) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "px-5 py-2 rounded bg-gray-300 m-5 text-2xl"
  }, "3")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "flex-auto self-center"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "text-lg text-gray-700"
  }, "More car detail"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "text-xs text-gray-700"
  }, "Additional Car Details")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "flex-initial p-5 self-center"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    onClick: previousStep,
    to: "#",
    className: "px-5 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded rounded-r-none mr-1"
  }, "Previous"), toggleCompleted() === 0 ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    onClick: nextStep,
    to: "#",
    className: "px-5 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded rounded-l-none"
  }, "Next") : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    className: "px-5 cursor-not-allowed py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded"
  }, "Next"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "p-5 block"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "grid grid-cols-2 gap-4"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col-span-1"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "type"
  }, "Plate Number"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    name: "plate_number",
    value: values.plate_number ? values.plate_number : '',
    onChange: handleChange,
    className: "border border-gray-300 p-2 rounded my-3 block w-full"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col-span-1"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "type"
  }, "VIN Number"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    name: "vin",
    value: values.vin ? values.vin : '',
    onChange: handleChange,
    className: "border border-gray-300 p-2 rounded my-3 block w-full"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col-span-1"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "type"
  }, "Vehicle Type"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "my-3",
    value: selectType,
    onChange: handleSelectTypeChange,
    name: "type",
    options: vTypes
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col-span-1"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "type"
  }, "Engine Type"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "my-3",
    value: selectEngine,
    onChange: handleSelectEngineChange,
    name: "engine_type",
    options: eTypes
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col-span-1"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "type"
  }, "Transmission Type"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "my-3",
    value: selectTransmission,
    onChange: handleSelectTransmissionChange,
    name: "transmission",
    options: tTypes
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col-span-1"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "type"
  }, "Color"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "my-3",
    value: selectColor,
    onChange: handleSelectColorChange,
    name: "color",
    options: colors
  }))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "clearfix"
  }));
};

__signature__(AdditionalDetails, "useState{[colors, setColors]([])}\nuseEffect{}\nuseEffect{}");

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AdditionalDetails, "AdditionalDetails", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Vehicles/Multi-Step/AdditionalDetails.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/pages/Vehicles/Multi-Step/ServiceDetails.jsx":
/*!**************************************************************************!*\
  !*** ./resources/assets/js/pages/Vehicles/Multi-Step/ServiceDetails.jsx ***!
  \**************************************************************************/
/*! exports provided: ServiceDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceDetails", function() { return ServiceDetails; });
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_date_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-date-picker */ "./node_modules/react-date-picker/dist/entry.js");
/* harmony import */ var react_date_picker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_date_picker__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");




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




const ServiceDetails = ({
  progress,
  values,
  setValues,
  handleChange,
  nextStep,
  previousStep
}) => {
  const [datePurchased, setDatePurchased] = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState();
  const [lastServed, setLastServed] = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState();

  function convertDate(str) {
    const mnths = {
      Jan: "01",
      Feb: "02",
      Mar: "03",
      Apr: "04",
      May: "05",
      Jun: "06",
      Jul: "07",
      Aug: "08",
      Sep: "09",
      Oct: "10",
      Nov: "11",
      Dec: "12"
    },
          date = str.split(" ");
    return [date[3], mnths[date[1]], date[2]].join("-");
  }

  const handleDateChange = date => {
    console.log(date);
    const newDate = convertDate(date.toString());
    const name = 'date_purchased';
    setDatePurchased(date);
    setValues(_objectSpread({}, values, {
      [name]: newDate
    }));
  };

  const handleServicedChange = date => {
    const newDate = convertDate(date.toString());
    const name = 'last_serviced';
    setLastServed(date);
    setValues(_objectSpread({}, values, {
      [name]: newDate
    }));
  };

  console.log(values);
  console.log(values.date_purchased);
  console.log(values.last_serviced);
  console.log(values.current_mileage);

  const toggleCompleted = () => {
    const a = values.date_purchased != '' ? 0 : 1;
    const b = values.last_serviced != '' ? 0 : 1;
    const c = values.current_mileage != '' && values.current_mileage > 5000 ? 0 : 1;
    const total = a + b + c;
    console.log(total);
    return total;
  };

  const onHandleSubmit = () => {};

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    toggleCompleted();
  }, [values]);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "my-10 px-10 border-b border-gray-200"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "w-full rounded bg-white shadow-lg"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "flex border-b border-gray-200"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "flex-initial self-center"
  }, toggleCompleted() < 1 || progress === true ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "px-4 py-2 rounded bg-green-500 m-5 text-2xl text-2xl text-white"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
    className: "material-icons"
  }, "check")) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "px-5 py-2 rounded bg-gray-300 m-5 text-2xl"
  }, "4")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "flex-auto self-center"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "text-lg text-gray-700"
  }, "Service detail"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "text-xs text-gray-700"
  }, "Additional Service Details")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "flex-initial p-5 self-center"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    onClick: previousStep,
    to: "#",
    className: "px-5 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded rounded-r-none mr-1"
  }, "Previous"), toggleCompleted() === 0 ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    type: "submit",
    className: "px-5 py-2 bg-green-500 hover:bg-green-600 text-white rounded rounded-l-none"
  }, "Save Vehicle") : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    className: "px-5 cursor-not-allowed py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded"
  }, "Save Vehicle"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "p-5 block"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "grid grid-cols-2 gap-4"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "col-span-1"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
    htmlFor: "type"
  }, "Date Purchased"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_date_picker__WEBPACK_IMPORTED_MODULE_4___default.a, {
    name: "date_purchased",
    value: datePurchased ? datePurchased : '',
    onChange: handleDateChange,
    className: "border border-gray-300 p-2 rounded my-3 block w-full"
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "col-span-1"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
    htmlFor: "type"
  }, "Last Serviced"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_date_picker__WEBPACK_IMPORTED_MODULE_4___default.a, {
    name: "last_serviced",
    value: lastServed ? lastServed : '',
    onChange: handleServicedChange,
    className: "border border-gray-300 p-2 rounded my-3 block w-full"
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "col-span-1"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
    htmlFor: "type"
  }, "Current Mileage"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    type: "number",
    name: "current_mileage",
    value: values.current_mileage ? values.current_mileage : '',
    onChange: handleChange,
    className: "border border-gray-300 p-2 rounded my-3 block w-full"
  }))))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "clearfix"
  }));
};

__signature__(ServiceDetails, "useState{[datePurchased, setDatePurchased ]}\nuseState{[lastServed, setLastServed ]}\nuseEffect{}");

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ServiceDetails, "ServiceDetails", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Vehicles/Multi-Step/ServiceDetails.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/pages/Vehicles/Multi-Step/Success.jsx":
/*!*******************************************************************!*\
  !*** ./resources/assets/js/pages/Vehicles/Multi-Step/Success.jsx ***!
  \*******************************************************************/
/*! exports provided: Success */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Success", function() { return Success; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



const Success = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "my-10 px-10 border-b border-gray-200"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full rounded bg-white shadow-lg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex border-b border-gray-200"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-initial self-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "px-4 py-2 rounded bg-green-500 m-5 text-2xl text-2xl text-white"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "material-icons"
  }, "check"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-auto self-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-lg text-gray-700"
  }, "Submitted Vehicle Detail"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-xs text-gray-700"
  }, "You have successfully created a vehicle profile")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-initial p-5 self-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    onClick: previousStep,
    to: "#",
    className: "px-5 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
  }, "Create another vehicle"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "p-5 block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "grid grid-cols-2 gap-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-span-1"
  }, "Left"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-span-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-initial mr-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "p-2 rounded-full text-white text-center align-middle",
    style: {
      backgroundColor: '#' + convert.keyword.hex("black"),
      width: '45px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "material-icons"
  }, "directions_car"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-auto"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "2006 Aston Martin Cygnet AT Gasoline 1.3 CVT (98 hp)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "2006 Aston Martin Cygnet AT Gasoline 1.3 CVT (98 hp)"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex pl-16"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-initial mr-5"
  }, "LAT"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-auto"
  }, "LNG")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex pl-16"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-initial mr-5"
  }, "VIN"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-auto"
  }, "Plate Number")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex pl-16"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-initial mr-5"
  }, "Date Purchased: 2019-06-12"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-auto"
  }, "Last Serviced: 2019-06-12")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pl-16"
  }, "Current Mileage: 85242"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/account/vehicles/schedule",
    className: "rounded bg-blue-500 hover:bg-blue-700 text-white px-4 py-2"
  }, "View Schedule"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "clearfix"
  }));
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Success, "Success", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Vehicles/Multi-Step/Success.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/pages/Vehicles/Multi-Step/VehicleDetails.jsx":
/*!**************************************************************************!*\
  !*** ./resources/assets/js/pages/Vehicles/Multi-Step/VehicleDetails.jsx ***!
  \**************************************************************************/
/*! exports provided: VehicleDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleDetails", function() { return VehicleDetails; });
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_select_creatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select/creatable */ "./node_modules/react-select/creatable/dist/react-select.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};




const VehicleDetails = ({
  progress,
  makes,
  models,
  trims,
  handleCreateMake,
  selectMake,
  handleSelectMakeChange,
  handleCreateModel,
  selectModel,
  handleSelectModelChange,
  values,
  handleChange,
  handleCreateTrim,
  selectTrim,
  handleSelectTrimChange,
  nextStep,
  previousStep
}) => {
  console.log(values);

  const toggleCompleted = () => {
    const a = selectMake.value ? 1 : 0;
    const b = selectModel.value ? 1 : 0;
    const c = selectTrim.value ? 1 : 0;
    const d = values.car_year ? 1 : 0;
    const total = a + b + c + d;
    console.log(total);
    return total;
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    toggleCompleted();
  }, [values]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "my-10 px-10 border-b border-gray-200"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "w-full rounded bg-white shadow-lg"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex border-b border-gray-200"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex-initial self-center"
  }, toggleCompleted() === 4 || progress === true ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "px-4 py-2 rounded bg-green-500 m-5 text-2xl text-2xl text-white"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "material-icons"
  }, "check")) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "px-5 py-2 rounded bg-gray-300 m-5 text-2xl"
  }, "2")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex-auto self-center"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "text-lg text-gray-700"
  }, "Choose car details"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "text-xs text-gray-700"
  }, "Provide at least the car make and car model.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex-initial p-5 self-center"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    onClick: previousStep,
    to: "#",
    className: "px-5 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded rounded-r-none mr-1"
  }, "Previous"), toggleCompleted() === 4 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    onClick: nextStep,
    to: "#",
    className: "px-5 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded rounded-l-none"
  }, "Next") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "px-5 cursor-not-allowed py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded"
  }, "Next"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "p-5 block"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "grid grid-cols-2 gap-4"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-span-1"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "type"
  }, "Car Make"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_select_creatable__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onCreateOption: handleCreateMake,
    className: "my-3",
    value: selectMake,
    onChange: handleSelectMakeChange,
    name: "make_id",
    options: makes
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-span-1"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "type"
  }, "Car Model"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_select_creatable__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onCreateOption: handleCreateModel,
    className: "my-3",
    value: selectModel,
    onChange: handleSelectModelChange,
    name: "model_id",
    options: models
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-span-1"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "type"
  }, "Car Trim"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_select_creatable__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onCreateOption: handleCreateTrim,
    className: "my-3",
    value: selectTrim,
    onChange: handleSelectTrimChange,
    name: "trim_id",
    options: trims
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-span-1"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "type"
  }, "Year Model"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    name: "car_year",
    value: values.car_year ? values.car_year : '',
    onChange: handleChange,
    className: "border border-gray-300 p-2 rounded my-3 block w-full"
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "clearfix"
  }));
};

__signature__(VehicleDetails, "useEffect{}");

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(VehicleDetails, "VehicleDetails", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Vehicles/Multi-Step/VehicleDetails.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/pages/Vehicles/Multi-Step/VehicleLocation.jsx":
/*!***************************************************************************!*\
  !*** ./resources/assets/js/pages/Vehicles/Multi-Step/VehicleLocation.jsx ***!
  \***************************************************************************/
/*! exports provided: VehicleLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleLocation", function() { return VehicleLocation; });
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_google_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-google-map */ "./node_modules/react-google-map/lib/index.js");
/* harmony import */ var react_google_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_google_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_google_maps_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-google-maps-loader */ "./node_modules/react-google-maps-loader/es/index.js");
/* harmony import */ var react_google_places_suggest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-google-places-suggest */ "./node_modules/react-google-places-suggest/es/index.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/constants */ "./resources/assets/js/utils/constants.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};







const VehicleLocation = ({
  nextStep,
  txtSearch,
  handleChange,
  handleMarkerChange,
  handleSelectSuggest,
  handleSearch,
  latitude,
  longitude,
  values,
  progress
}) => {
  console.log(values);

  const toggleCompleted = () => {
    if (txtSearch === null) {
      return false;
    } else {
      return true;
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    toggleCompleted();
  }, [values]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "my-10 px-10 border-b border-gray-200"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "w-full rounded bg-white shadow-lg"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex border-b border-gray-200"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex-initial self-center"
  }, toggleCompleted() === true || progress === true ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "px-4 py-2 rounded bg-green-500 m-5 text-2xl text-2xl text-white"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "material-icons"
  }, "check")) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "px-5 py-2 rounded bg-gray-300 m-5 text-2xl"
  }, "1")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex-auto self-center"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "text-lg text-gray-700"
  }, "Specify your car's location"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "text-xs text-gray-700"
  }, "We will use this information to enhance your experience")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex-initial p-5 self-center"
  }, toggleCompleted() === true ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
    to: "#",
    onClick: nextStep,
    className: "px-5 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded"
  }, "Next") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "px-5 cursor-not-allowed py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded"
  }, "Next"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "p-5 block"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "border border-gray-300 rounded my-3"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_google_maps_loader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    params: {
      key: _utils_constants__WEBPACK_IMPORTED_MODULE_5__["MAPS_API_KEY"],
      libraries: "places,geocode"
    },
    render: googleMaps => googleMaps && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_google_places_suggest__WEBPACK_IMPORTED_MODULE_4__["default"], {
      autocompletionRequest: {
        input: txtSearch || ""
      },
      googleMaps: googleMaps,
      onSelectSuggest: handleSelectSuggest
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "flex"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "p-2 border-gray-300 inline-flex text-gray-400 border-r flex-initial"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "material-icons"
    }, "location_on")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      placeholder: "Search shop location",
      type: "text",
      name: "txtSearch",
      value: txtSearch || '',
      className: "p-2 flex-1",
      onChange: handleSearch
    })))
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex border border-gray-300 rounded my-3"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_google_maps_loader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    params: {
      key: _utils_constants__WEBPACK_IMPORTED_MODULE_5__["MAPS_API_KEY"],
      libraries: "places,geocode"
    },
    render: googleMaps => googleMaps && latitude && longitude && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        height: "50vh",
        width: "100%"
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_google_map__WEBPACK_IMPORTED_MODULE_2___default.a, {
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
  })))));
};

__signature__(VehicleLocation, "useEffect{}");

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(VehicleLocation, "VehicleLocation", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Vehicles/Multi-Step/VehicleLocation.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/pages/Vehicles/Multi-Step/index.js":
/*!****************************************************************!*\
  !*** ./resources/assets/js/pages/Vehicles/Multi-Step/index.js ***!
  \****************************************************************/
/*! exports provided: VehicleLocation, VehicleDetails, AdditionalDetails, ServiceDetails, Success */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VehicleLocation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VehicleLocation */ "./resources/assets/js/pages/Vehicles/Multi-Step/VehicleLocation.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VehicleLocation", function() { return _VehicleLocation__WEBPACK_IMPORTED_MODULE_0__["VehicleLocation"]; });

/* harmony import */ var _VehicleDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VehicleDetails */ "./resources/assets/js/pages/Vehicles/Multi-Step/VehicleDetails.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VehicleDetails", function() { return _VehicleDetails__WEBPACK_IMPORTED_MODULE_1__["VehicleDetails"]; });

/* harmony import */ var _AdditionalDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdditionalDetails */ "./resources/assets/js/pages/Vehicles/Multi-Step/AdditionalDetails.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdditionalDetails", function() { return _AdditionalDetails__WEBPACK_IMPORTED_MODULE_2__["AdditionalDetails"]; });

/* harmony import */ var _ServiceDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ServiceDetails */ "./resources/assets/js/pages/Vehicles/Multi-Step/ServiceDetails.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceDetails", function() { return _ServiceDetails__WEBPACK_IMPORTED_MODULE_3__["ServiceDetails"]; });

/* harmony import */ var _Success__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Success */ "./resources/assets/js/pages/Vehicles/Multi-Step/Success.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Success", function() { return _Success__WEBPACK_IMPORTED_MODULE_4__["Success"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};







/***/ }),

/***/ "./resources/assets/js/store/action-creators/vehicles/index.js":
/*!*********************************************************************!*\
  !*** ./resources/assets/js/store/action-creators/vehicles/index.js ***!
  \*********************************************************************/
/*! exports provided: saveVehicle, getVehicles, createVehicle, getVehicle, updateVehicle, deleteVehicle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vehicles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vehicles */ "./resources/assets/js/store/action-creators/vehicles/vehicles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveVehicle", function() { return _vehicles__WEBPACK_IMPORTED_MODULE_0__["saveVehicle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getVehicles", function() { return _vehicles__WEBPACK_IMPORTED_MODULE_0__["getVehicles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createVehicle", function() { return _vehicles__WEBPACK_IMPORTED_MODULE_0__["createVehicle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getVehicle", function() { return _vehicles__WEBPACK_IMPORTED_MODULE_0__["getVehicle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateVehicle", function() { return _vehicles__WEBPACK_IMPORTED_MODULE_0__["updateVehicle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteVehicle", function() { return _vehicles__WEBPACK_IMPORTED_MODULE_0__["deleteVehicle"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



/***/ }),

/***/ "./resources/assets/js/store/action-creators/vehicles/vehicles.js":
/*!************************************************************************!*\
  !*** ./resources/assets/js/store/action-creators/vehicles/vehicles.js ***!
  \************************************************************************/
/*! exports provided: getVehicles, getVehicle, createVehicle, updateVehicle, deleteVehicle, saveVehicle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVehicles", function() { return getVehicles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVehicle", function() { return getVehicle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createVehicle", function() { return createVehicle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateVehicle", function() { return updateVehicle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteVehicle", function() { return deleteVehicle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveVehicle", function() { return saveVehicle; });
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




const getVehicles = () => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])('get-vehicles', () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/vehicles")));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["vehicleActions"].ADD_VEHICLES,
    vehicles: response.data.data
  });
};
const getVehicle = id => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])("get-vehicle-".concat(id), () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/vehicles/".concat(id))));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["vehicleActions"].GET_VEHICLE,
    vehicles: response.data.data
  });
};
const createVehicle = data => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])('create-vehicle', () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/vehicles", data)));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["vehicleActions"].ADD_VEHICLE,
    vehicles: response.data.data
  });
};
const updateVehicle = data => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])("update-vehicle-".concat(data.id), () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/vehicles/".concat(data.id), data)));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["vehicleActions"].UPDATE_VEHICLE,
    vehicles: response.data.data
  });
};
const deleteVehicle = id => async dispatch => {
  await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])("update-vehicle-".concat(id), () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("/api/vehicles/".concat(id))));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["vehicleActions"].DELETE_VEHICLE,
    id
  });
};
const saveVehicle = vehicleData => async dispatch => {
  const {
    id
  } = vehicleData;
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])('save-vehicle-settings', () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/vehicles/".concat(id), vehicleData)));
  return response;
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getVehicles, "getVehicles", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/vehicles/vehicles.js");
  reactHotLoader.register(getVehicle, "getVehicle", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/vehicles/vehicles.js");
  reactHotLoader.register(createVehicle, "createVehicle", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/vehicles/vehicles.js");
  reactHotLoader.register(updateVehicle, "updateVehicle", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/vehicles/vehicles.js");
  reactHotLoader.register(deleteVehicle, "deleteVehicle", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/vehicles/vehicles.js");
  reactHotLoader.register(saveVehicle, "saveVehicle", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/vehicles/vehicles.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2VsZWN0L2NyZWF0YWJsZS9kaXN0L3JlYWN0LXNlbGVjdC5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL1ZlaGljbGVzL0NyZWF0ZVZlaGljbGUuanN4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvVmVoaWNsZXMvTXVsdGktU3RlcC9BZGRpdGlvbmFsRGV0YWlscy5qc3giLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9WZWhpY2xlcy9NdWx0aS1TdGVwL1NlcnZpY2VEZXRhaWxzLmpzeCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL1ZlaGljbGVzL011bHRpLVN0ZXAvU3VjY2Vzcy5qc3giLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9WZWhpY2xlcy9NdWx0aS1TdGVwL1ZlaGljbGVEZXRhaWxzLmpzeCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL1ZlaGljbGVzL011bHRpLVN0ZXAvVmVoaWNsZUxvY2F0aW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL1ZlaGljbGVzL011bHRpLVN0ZXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9hY3Rpb24tY3JlYXRvcnMvdmVoaWNsZXMvdmVoaWNsZXMuanMiXSwibmFtZXMiOlsiVG9hc3QiLCJTd2FsIiwibWl4aW4iLCJ0b2FzdCIsInBvc2l0aW9uIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsIkFsZXJ0IiwidHlwZSIsInRpdGxlIiwiZmlyZSIsInVzZUZvcm0iLCJpbml0aWFsVmFsdWVzIiwib25TdWJtaXQiLCJ2YWxpZGF0ZSIsImluaXRpYWxpemVWYWx1ZXMiLCJvYmoiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJrIiwidiIsInZhbHVlcyIsInNldFZhbHVlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJ0b3VjaGVkVmFsdWVzIiwic2V0VG91Y2hlZFZhbHVlcyIsImVycm9ycyIsInNldEVycm9ycyIsImFkZHJlc3MiLCJzZXRBZGRyZXNzIiwiY2l0eSIsInNldENpdHkiLCJsb25naXR1ZGUiLCJzZXRMb25naXR1ZGUiLCJsYXRpdHVkZSIsInNldExhdGl0dWRlIiwidHh0TG9jYXRpb24iLCJzZXRUeHRMb2NhdGlvbiIsInR4dFNlYXJjaCIsInNldFR4dFNlYXJjaCIsImhhbmRsZVNlYXJjaCIsImV2ZW50IiwidmFsdWUiLCJ0YXJnZXQiLCJHZW9jb2RlIiwic2V0QXBpS2V5IiwiTUFQU19BUElfS0VZIiwic2V0TGFuZ3VhZ2UiLCJzZXRSZWdpb24iLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlTWFya2VyQ2hhbmdlIiwiZnJvbUxhdExuZyIsImxhdExuZyIsImxhdCIsImxuZyIsInRoZW4iLCJyZXNwb25zZSIsInJlc3VsdHMiLCJhZGRyZXNzX2NvbXBvbmVudHMiLCJmb3JtYXR0ZWRfYWRkcmVzcyIsImFkZGkiLCJuZXdBZGRyZXNzIiwiY2l0eTEiLCJmaW5kIiwiZWxlbWVudCIsInN1YkxvY2FsIiwidHlwZXMiLCJpbmNsdWRlcyIsImNpdHkyIiwiYWRtaW5BcmVhIiwibG9uZ19uYW1lIiwiemlwIiwiZGF0YSIsInRvU3RyaW5nIiwiZXJyb3IiLCJoYW5kbGVTZWxlY3RTdWdnZXN0Iiwic3VnZ2VzdGlvbiIsImdlb2NvZGVkUHJlZGljdGlvbiIsIm9yaWdpbmFsUHJlZGljdGlvbiIsImdlb21ldHJ5IiwiYWRkIiwiZGVzY3JpcHRpb24iLCJzcGxpdCIsImNvdW50IiwibGVuZ3RoIiwibG9jYXRpb24iLCJjYXBpdGFsaXplRmlyc3RMZXR0ZXIiLCJzdHJpbmciLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwic3RyaXBTdHJpbmciLCJyZXBsYWNlIiwiZ2V0TGFiZWwiLCJzdHJpcExhYmVsIiwic2VsZWN0TWFrZSIsInNldFNlbGVjdE1ha2UiLCJsYWJlbCIsImhhbmRsZVNlbGVjdE1ha2VDaGFuZ2UiLCJuYW1lIiwic2VsZWN0TW9kZWwiLCJzZXRTZWxlY3RNb2RlbCIsImhhbmRsZVNlbGVjdE1vZGVsQ2hhbmdlIiwic2VsZWN0VHJpbSIsInNldFNlbGVjdFRyaW0iLCJoYW5kbGVTZWxlY3RUcmltQ2hhbmdlIiwic2VsZWN0VHlwZSIsInNldFNlbGVjdFR5cGUiLCJoYW5kbGVTZWxlY3RUeXBlQ2hhbmdlIiwic2VsZWN0RW5naW5lIiwic2V0U2VsZWN0RW5naW5lIiwiaGFuZGxlU2VsZWN0RW5naW5lQ2hhbmdlIiwic2VsZWN0VHJhbnNtaXNzaW9uIiwic2V0U2VsZWN0VHJhbnNtaXNzaW9uIiwiaGFuZGxlU2VsZWN0VHJhbnNtaXNzaW9uQ2hhbmdlIiwic2VsZWN0Q29sb3IiLCJzZXRTZWxlY3RDb2xvciIsImhhbmRsZVNlbGVjdENvbG9yQ2hhbmdlIiwiaGFuZGxlQ2hhbmdlIiwiY2hlY2tlZCIsImhhbmRsZUJsdXIiLCJlIiwic3RlcCIsInNldFN0ZXAiLCJwcm9ncmVzcyIsInNldFByb2dyZXNzIiwibmV4dFN0ZXAiLCJwcmV2ZW50RGVmYXVsdCIsInBhZ2UiLCJwcmV2aW91c1N0ZXAiLCJoYW5kbGVTdWJtaXQiLCJDcmVhdGVWZWhpY2xlQ29tcG9uZW50IiwidXNlciIsIm1ha2VfaWQiLCJtb2RlbF9pZCIsInRyaW1faWQiLCJjYXJfeWVhciIsImVuZ2luZV90eXBlIiwidHJhbnNtaXNzaW9uIiwiY29sb3IiLCJwbGF0ZV9udW1iZXIiLCJjdXJyZW50X21pbGVhZ2UiLCJkYXRlX3B1cmNoYXNlZCIsImxhc3Rfc2VydmljZWQiLCJtYWtlcyIsInNldE1ha2VzIiwidlR5cGVzIiwic2V0VlR5cGVzIiwiZVR5cGVzIiwic2V0RVR5cGVzIiwidFR5cGVzIiwic2V0VFR5cGVzIiwidXNlRWZmZWN0IiwiZmV0Y2hNYWtlIiwicmVzdWx0IiwiYXhpb3MiLCJmZXRjaFR5cGVzIiwiZmV0Y2hFbmdpbmVzIiwiZmV0Y2hUcmFuc21pc3Npb24iLCJtb2RlbHMiLCJzZXRNb2RlbHMiLCJmZXRjaE1vZGVsIiwidHJpbXMiLCJzZXRUcmltcyIsImZldGNoVHJpbXMiLCJoYW5kbGVDcmVhdGVNYWtlIiwic2V0VGltZW91dCIsImNyZWF0ZSIsInBvc3QiLCJ0eXBlX2lkIiwiaWQiLCJoYW5kbGVDcmVhdGVNb2RlbCIsImhhbmRsZUNyZWF0ZVRyaW0iLCJjb21wdXRlUHJvZ3Jlc3MiLCJmaXJzdCIsInNlY29uZCIsInRoaXJkIiwiZm9ydGgiLCJ0b3RhbCIsImN1cnJlbnRQYWdlIiwid2lkdGgiLCJ2YWxpZGF0ZUZpZWxkcyIsIkNyZWF0ZVZlaGljbGUiLCJyZWR1eEZvcm0iLCJmb3JtIiwiZW5hYmxlUmVpbml0aWFsaXplIiwiY29ubmVjdCIsInN0YXRlIiwiY3VycmVudFVzZXJTZWxlY3RvciIsImRpc3BhdGNoIiwiY3JlYXRlVmVoaWNsZUFjdGlvbiIsIkFkZGl0aW9uYWxEZXRhaWxzIiwiY29sb3JzIiwic2V0Q29sb3JzIiwiZmV0Y2hDb2xvcnMiLCJ0b2dnbGVDb21wbGV0ZWQiLCJhIiwiYiIsInZpbiIsImMiLCJkIiwiZiIsIlNlcnZpY2VEZXRhaWxzIiwiZGF0ZVB1cmNoYXNlZCIsInNldERhdGVQdXJjaGFzZWQiLCJsYXN0U2VydmVkIiwic2V0TGFzdFNlcnZlZCIsImNvbnZlcnREYXRlIiwic3RyIiwibW50aHMiLCJKYW4iLCJGZWIiLCJNYXIiLCJBcHIiLCJNYXkiLCJKdW4iLCJKdWwiLCJBdWciLCJTZXAiLCJPY3QiLCJOb3YiLCJEZWMiLCJkYXRlIiwiam9pbiIsImhhbmRsZURhdGVDaGFuZ2UiLCJuZXdEYXRlIiwiaGFuZGxlU2VydmljZWRDaGFuZ2UiLCJvbkhhbmRsZVN1Ym1pdCIsIlN1Y2Nlc3MiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb252ZXJ0Iiwia2V5d29yZCIsImhleCIsIlZlaGljbGVEZXRhaWxzIiwiVmVoaWNsZUxvY2F0aW9uIiwia2V5IiwibGlicmFyaWVzIiwiZ29vZ2xlTWFwcyIsImlucHV0IiwiaGVpZ2h0IiwiZHJhZ2dhYmxlIiwib25Mb2FkZWQiLCJtYXAiLCJtYXJrZXIiLCJzZXRBbmltYXRpb24iLCJBbmltYXRpb24iLCJCT1VOQ0UiLCJnb29nbGUiLCJtYXBzIiwiYWRkTGlzdGVuZXIiLCJnZXRWZWhpY2xlcyIsIm1ha2VSZXF1ZXN0IiwiZ2V0IiwiYWN0aW9ucyIsIkFERF9WRUhJQ0xFUyIsInZlaGljbGVzIiwiZ2V0VmVoaWNsZSIsIkdFVF9WRUhJQ0xFIiwiY3JlYXRlVmVoaWNsZSIsIkFERF9WRUhJQ0xFIiwidXBkYXRlVmVoaWNsZSIsInB1dCIsIlVQREFURV9WRUhJQ0xFIiwiZGVsZXRlVmVoaWNsZSIsImRlbGV0ZSIsIkRFTEVURV9WRUhJQ0xFIiwic2F2ZVZlaGljbGUiLCJ2ZWhpY2xlRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTREO0FBQ0Y7QUFDb0I7QUFDVjtBQUNJO0FBQ047QUFDNEI7QUFDdEI7QUFDWjtBQUMwQjtBQUNkO0FBQy9CO0FBQ3BCO0FBQ0U7QUFDSjtBQUNDO0FBQ3VCO0FBQ2dDO0FBQ3pCO0FBQ3NDO0FBQ2xFO0FBQ29DO0FBQzVCO0FBQzhDOztBQUU1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsdUZBQWE7QUFDaEM7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVB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ZW50IjpbImltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IF90b0NvbnN1bWFibGVBcnJheSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheSc7XG5pbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfZ2V0UHJvdG90eXBlT2YgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZ2V0UHJvdG90eXBlT2YnO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0cyc7XG5pbXBvcnQgX2Fzc2VydFRoaXNJbml0aWFsaXplZCBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQnO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICdtZW1vaXplLW9uZSc7XG5pbXBvcnQgJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0ICdyZWFjdC1kb20nO1xuaW1wb3J0ICdwcm9wLXR5cGVzJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mJztcbmltcG9ydCB7IGYgYXMgY2xlYW5WYWx1ZSB9IGZyb20gJy4uLy4uL2Rpc3QvY2h1bmstMzlkM2ZkYTguYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0ICcuLi8uLi9kaXN0L2NodW5rLTgwNjQwMDM2LmJyb3dzZXIuZXNtLmpzJztcbmltcG9ydCB7IFMgYXMgU2VsZWN0IH0gZnJvbSAnLi4vLi4vZGlzdC9iYXNlL2Rpc3QvcmVhY3Qtc2VsZWN0LWNhYzBhNWFlLmJyb3dzZXIuZXNtLmpzJztcbmltcG9ydCAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdGFnZ2VkVGVtcGxhdGVMaXRlcmFsJztcbmltcG9ydCAncmVhY3QtaW5wdXQtYXV0b3NpemUnO1xuaW1wb3J0IHsgbSBhcyBtYW5hZ2VTdGF0ZSB9IGZyb20gJy4uLy4uL2Rpc3QvY2h1bmstYjM2YmFmMWEuYnJvd3Nlci5lc20uanMnO1xuXG52YXIgY29tcGFyZU9wdGlvbiA9IGZ1bmN0aW9uIGNvbXBhcmVPcHRpb24oKSB7XG4gIHZhciBpbnB1dFZhbHVlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAnJztcbiAgdmFyIG9wdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICB2YXIgY2FuZGlkYXRlID0gU3RyaW5nKGlucHV0VmFsdWUpLnRvTG93ZXJDYXNlKCk7XG4gIHZhciBvcHRpb25WYWx1ZSA9IFN0cmluZyhvcHRpb24udmFsdWUpLnRvTG93ZXJDYXNlKCk7XG4gIHZhciBvcHRpb25MYWJlbCA9IFN0cmluZyhvcHRpb24ubGFiZWwpLnRvTG93ZXJDYXNlKCk7XG4gIHJldHVybiBvcHRpb25WYWx1ZSA9PT0gY2FuZGlkYXRlIHx8IG9wdGlvbkxhYmVsID09PSBjYW5kaWRhdGU7XG59O1xuXG52YXIgYnVpbHRpbnMgPSB7XG4gIGZvcm1hdENyZWF0ZUxhYmVsOiBmdW5jdGlvbiBmb3JtYXRDcmVhdGVMYWJlbChpbnB1dFZhbHVlKSB7XG4gICAgcmV0dXJuIFwiQ3JlYXRlIFxcXCJcIi5jb25jYXQoaW5wdXRWYWx1ZSwgXCJcXFwiXCIpO1xuICB9LFxuICBpc1ZhbGlkTmV3T3B0aW9uOiBmdW5jdGlvbiBpc1ZhbGlkTmV3T3B0aW9uKGlucHV0VmFsdWUsIHNlbGVjdFZhbHVlLCBzZWxlY3RPcHRpb25zKSB7XG4gICAgcmV0dXJuICEoIWlucHV0VmFsdWUgfHwgc2VsZWN0VmFsdWUuc29tZShmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICByZXR1cm4gY29tcGFyZU9wdGlvbihpbnB1dFZhbHVlLCBvcHRpb24pO1xuICAgIH0pIHx8IHNlbGVjdE9wdGlvbnMuc29tZShmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICByZXR1cm4gY29tcGFyZU9wdGlvbihpbnB1dFZhbHVlLCBvcHRpb24pO1xuICAgIH0pKTtcbiAgfSxcbiAgZ2V0TmV3T3B0aW9uRGF0YTogZnVuY3Rpb24gZ2V0TmV3T3B0aW9uRGF0YShpbnB1dFZhbHVlLCBvcHRpb25MYWJlbCkge1xuICAgIHJldHVybiB7XG4gICAgICBsYWJlbDogb3B0aW9uTGFiZWwsXG4gICAgICB2YWx1ZTogaW5wdXRWYWx1ZSxcbiAgICAgIF9faXNOZXdfXzogdHJ1ZVxuICAgIH07XG4gIH1cbn07XG52YXIgZGVmYXVsdFByb3BzID0gX29iamVjdFNwcmVhZCh7XG4gIGFsbG93Q3JlYXRlV2hpbGVMb2FkaW5nOiBmYWxzZSxcbiAgY3JlYXRlT3B0aW9uUG9zaXRpb246ICdsYXN0J1xufSwgYnVpbHRpbnMpO1xudmFyIG1ha2VDcmVhdGFibGVTZWxlY3QgPSBmdW5jdGlvbiBtYWtlQ3JlYXRhYmxlU2VsZWN0KFNlbGVjdENvbXBvbmVudCkge1xuICB2YXIgX2NsYXNzLCBfdGVtcDtcblxuICByZXR1cm4gX3RlbXAgPSBfY2xhc3MgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKENyZWF0YWJsZSwgX0NvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBDcmVhdGFibGUocHJvcHMpIHtcbiAgICAgIHZhciBfdGhpcztcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENyZWF0YWJsZSk7XG5cbiAgICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKENyZWF0YWJsZSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIFwic2VsZWN0XCIsIHZvaWQgMCk7XG5cbiAgICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJvbkNoYW5nZVwiLCBmdW5jdGlvbiAobmV3VmFsdWUsIGFjdGlvbk1ldGEpIHtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICBnZXROZXdPcHRpb25EYXRhID0gX3RoaXMkcHJvcHMuZ2V0TmV3T3B0aW9uRGF0YSxcbiAgICAgICAgICAgIGlucHV0VmFsdWUgPSBfdGhpcyRwcm9wcy5pbnB1dFZhbHVlLFxuICAgICAgICAgICAgaXNNdWx0aSA9IF90aGlzJHByb3BzLmlzTXVsdGksXG4gICAgICAgICAgICBvbkNoYW5nZSA9IF90aGlzJHByb3BzLm9uQ2hhbmdlLFxuICAgICAgICAgICAgb25DcmVhdGVPcHRpb24gPSBfdGhpcyRwcm9wcy5vbkNyZWF0ZU9wdGlvbixcbiAgICAgICAgICAgIHZhbHVlID0gX3RoaXMkcHJvcHMudmFsdWUsXG4gICAgICAgICAgICBuYW1lID0gX3RoaXMkcHJvcHMubmFtZTtcblxuICAgICAgICBpZiAoYWN0aW9uTWV0YS5hY3Rpb24gIT09ICdzZWxlY3Qtb3B0aW9uJykge1xuICAgICAgICAgIHJldHVybiBvbkNoYW5nZShuZXdWYWx1ZSwgYWN0aW9uTWV0YSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbmV3T3B0aW9uID0gX3RoaXMuc3RhdGUubmV3T3B0aW9uO1xuICAgICAgICB2YXIgdmFsdWVBcnJheSA9IEFycmF5LmlzQXJyYXkobmV3VmFsdWUpID8gbmV3VmFsdWUgOiBbbmV3VmFsdWVdO1xuXG4gICAgICAgIGlmICh2YWx1ZUFycmF5W3ZhbHVlQXJyYXkubGVuZ3RoIC0gMV0gPT09IG5ld09wdGlvbikge1xuICAgICAgICAgIGlmIChvbkNyZWF0ZU9wdGlvbikgb25DcmVhdGVPcHRpb24oaW5wdXRWYWx1ZSk7ZWxzZSB7XG4gICAgICAgICAgICB2YXIgbmV3T3B0aW9uRGF0YSA9IGdldE5ld09wdGlvbkRhdGEoaW5wdXRWYWx1ZSwgaW5wdXRWYWx1ZSk7XG4gICAgICAgICAgICB2YXIgbmV3QWN0aW9uTWV0YSA9IHtcbiAgICAgICAgICAgICAgYWN0aW9uOiAnY3JlYXRlLW9wdGlvbicsXG4gICAgICAgICAgICAgIG5hbWU6IG5hbWVcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChpc011bHRpKSB7XG4gICAgICAgICAgICAgIG9uQ2hhbmdlKFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoY2xlYW5WYWx1ZSh2YWx1ZSkpLCBbbmV3T3B0aW9uRGF0YV0pLCBuZXdBY3Rpb25NZXRhKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG9uQ2hhbmdlKG5ld09wdGlvbkRhdGEsIG5ld0FjdGlvbk1ldGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBvbkNoYW5nZShuZXdWYWx1ZSwgYWN0aW9uTWV0YSk7XG4gICAgICB9KTtcblxuICAgICAgdmFyIG9wdGlvbnMgPSBwcm9wcy5vcHRpb25zIHx8IFtdO1xuICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgIG5ld09wdGlvbjogdW5kZWZpbmVkLFxuICAgICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgICB9O1xuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhDcmVhdGFibGUsIFt7XG4gICAgICBrZXk6IFwiVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgdmFyIGFsbG93Q3JlYXRlV2hpbGVMb2FkaW5nID0gbmV4dFByb3BzLmFsbG93Q3JlYXRlV2hpbGVMb2FkaW5nLFxuICAgICAgICAgICAgY3JlYXRlT3B0aW9uUG9zaXRpb24gPSBuZXh0UHJvcHMuY3JlYXRlT3B0aW9uUG9zaXRpb24sXG4gICAgICAgICAgICBmb3JtYXRDcmVhdGVMYWJlbCA9IG5leHRQcm9wcy5mb3JtYXRDcmVhdGVMYWJlbCxcbiAgICAgICAgICAgIGdldE5ld09wdGlvbkRhdGEgPSBuZXh0UHJvcHMuZ2V0TmV3T3B0aW9uRGF0YSxcbiAgICAgICAgICAgIGlucHV0VmFsdWUgPSBuZXh0UHJvcHMuaW5wdXRWYWx1ZSxcbiAgICAgICAgICAgIGlzTG9hZGluZyA9IG5leHRQcm9wcy5pc0xvYWRpbmcsXG4gICAgICAgICAgICBpc1ZhbGlkTmV3T3B0aW9uID0gbmV4dFByb3BzLmlzVmFsaWROZXdPcHRpb24sXG4gICAgICAgICAgICB2YWx1ZSA9IG5leHRQcm9wcy52YWx1ZTtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBuZXh0UHJvcHMub3B0aW9ucyB8fCBbXTtcbiAgICAgICAgdmFyIG5ld09wdGlvbiA9IHRoaXMuc3RhdGUubmV3T3B0aW9uO1xuXG4gICAgICAgIGlmIChpc1ZhbGlkTmV3T3B0aW9uKGlucHV0VmFsdWUsIGNsZWFuVmFsdWUodmFsdWUpLCBvcHRpb25zKSkge1xuICAgICAgICAgIG5ld09wdGlvbiA9IGdldE5ld09wdGlvbkRhdGEoaW5wdXRWYWx1ZSwgZm9ybWF0Q3JlYXRlTGFiZWwoaW5wdXRWYWx1ZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld09wdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG5ld09wdGlvbjogbmV3T3B0aW9uLFxuICAgICAgICAgIG9wdGlvbnM6IChhbGxvd0NyZWF0ZVdoaWxlTG9hZGluZyB8fCAhaXNMb2FkaW5nKSAmJiBuZXdPcHRpb24gPyBjcmVhdGVPcHRpb25Qb3NpdGlvbiA9PT0gJ2ZpcnN0JyA/IFtuZXdPcHRpb25dLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkob3B0aW9ucykpIDogW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShvcHRpb25zKSwgW25ld09wdGlvbl0pIDogb3B0aW9uc1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZm9jdXNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICAgICAgdGhpcy5zZWxlY3QuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiYmx1clwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGJsdXIoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0LmJsdXIoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICB2YXIgb3B0aW9ucyA9IHRoaXMuc3RhdGUub3B0aW9ucztcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2VsZWN0Q29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKF9yZWYpIHtcbiAgICAgICAgICAgIF90aGlzMi5zZWxlY3QgPSBfcmVmO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgICAgICBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZVxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIENyZWF0YWJsZTtcbiAgfShDb21wb25lbnQpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzLCBcImRlZmF1bHRQcm9wc1wiLCBkZWZhdWx0UHJvcHMpLCBfdGVtcDtcbn07IC8vIFRPRE86IGRvIHRoaXMgaW4gcGFja2FnZSBlbnRyeXBvaW50XG5cbnZhciBTZWxlY3RDcmVhdGFibGUgPSBtYWtlQ3JlYXRhYmxlU2VsZWN0KFNlbGVjdCk7XG52YXIgQ3JlYXRhYmxlID0gbWFuYWdlU3RhdGUoU2VsZWN0Q3JlYXRhYmxlKTtcblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRhYmxlO1xuZXhwb3J0IHsgZGVmYXVsdFByb3BzLCBtYWtlQ3JlYXRhYmxlU2VsZWN0IH07XG4iLCJpbXBvcnQgeyByZWR1eEZvcm0sIEZpZWxkIH0gZnJvbSAncmVkdXgtZm9ybSdcbmltcG9ydCBjb252ZXJ0IGZyb20gJ2NvbG9yLWNvbnZlcnQnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmssIFJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IGN1cnJlbnRVc2VyU2VsZWN0b3IgfSBmcm9tICdzdG9yZS9zZWxlY3RvcnMvc2Vzc2lvbidcbmltcG9ydCB7XG4gICAgY3JlYXRlVmVoaWNsZSBhcyBjcmVhdGVWZWhpY2xlQWN0aW9uLFxuICB9IGZyb20gJ3N0b3JlL2FjdGlvbi1jcmVhdG9ycy92ZWhpY2xlcydcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJ1xuaW1wb3J0IHtcbiAgTUFQU19BUElfS0VZLFxufSBmcm9tIFwiLi4vLi4vdXRpbHMvY29uc3RhbnRzXCI7XG5pbXBvcnQgR2VvY29kZSBmcm9tIFwicmVhY3QtZ2VvY29kZVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7VmVoaWNsZUxvY2F0aW9uLCBWZWhpY2xlRGV0YWlscywgQWRkaXRpb25hbERldGFpbHMsIFNlcnZpY2VEZXRhaWxzLCBTdWNjZXNzfSBmcm9tICcuL011bHRpLVN0ZXAnXG5cbmNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XG4gICAgdG9hc3Q6IHRydWUsXG4gICAgcG9zaXRpb246ICd0b3AtZW5kJyxcbiAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXG4gICAgdGltZXI6IDMwMDBcbiAgfSlcbiAgXG4gIGNvbnN0IEFsZXJ0ID0gKHR5cGUsIHRpdGxlKSA9PiBUb2FzdC5maXJlKHtcbiAgICB0eXBlOiB0eXBlLFxuICAgIHRpdGxlOiB0aXRsZVxuICB9KVxuICBcbiAgY29uc3QgdXNlRm9ybSA9ICh7IGluaXRpYWxWYWx1ZXMsIG9uU3VibWl0LCB2YWxpZGF0ZSB9KSA9PiB7XG4gICAgY29uc3QgaW5pdGlhbGl6ZVZhbHVlcyA9IChvYmopID0+IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqLCAoaywgdikgPT4gKHYgPT09IG51bGwgPyAnJyA6IHYpKSlcbiAgICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gUmVhY3QudXNlU3RhdGUoaW5pdGlhbGl6ZVZhbHVlcyhpbml0aWFsVmFsdWVzWzBdKSB8fCB7fSlcbiAgICBjb25zdCBbdG91Y2hlZFZhbHVlcywgc2V0VG91Y2hlZFZhbHVlc10gPSBSZWFjdC51c2VTdGF0ZSh7fSlcbiAgICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gUmVhY3QudXNlU3RhdGUoe30pXG4gICAgY29uc3QgW2FkZHJlc3MsIHNldEFkZHJlc3NdID0gUmVhY3QudXNlU3RhdGUodmFsdWVzLmFkZHJlc3MgfHwgJycpXG4gICAgY29uc3QgW2NpdHksIHNldENpdHldID0gUmVhY3QudXNlU3RhdGUodmFsdWVzLmNpdHkgfHwgJycpXG4gICAgY29uc3QgW2xvbmdpdHVkZSwgc2V0TG9uZ2l0dWRlXSA9IFJlYWN0LnVzZVN0YXRlKHZhbHVlcy5sb25naXR1ZGUgPyB2YWx1ZXMubG9uZ2l0dWRlIDogMTIwLjk4NDIyMilcbiAgICBjb25zdCBbbGF0aXR1ZGUsIHNldExhdGl0dWRlXSA9IFJlYWN0LnVzZVN0YXRlKHZhbHVlcy5sYXRpdHVkZSA/IHZhbHVlcy5sYXRpdHVkZSA6IDE0LjU5OTUxMilcbiAgXG4gICAgY29uc3QgW3R4dExvY2F0aW9uLCBzZXRUeHRMb2NhdGlvbl0gPSBSZWFjdC51c2VTdGF0ZShudWxsKVxuICAgIGNvbnN0IFt0eHRTZWFyY2gsIHNldFR4dFNlYXJjaF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKVxuICAgIFxuICAgIGNvbnN0IGhhbmRsZVNlYXJjaCA9IGV2ZW50ID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICBzZXRUeHRTZWFyY2godmFsdWUpXG4gICAgICBzZXRUeHRMb2NhdGlvbih0eHRTZWFyY2gpXG4gICAgfVxuICAgIEdlb2NvZGUuc2V0QXBpS2V5KE1BUFNfQVBJX0tFWSlcbiAgICBHZW9jb2RlLnNldExhbmd1YWdlKFwiZW5cIilcbiAgICBHZW9jb2RlLnNldFJlZ2lvbihcInBoXCIpXG4gIFxuICAgIGNvbnNvbGUubG9nKHZhbHVlcylcblxuICAgIGNvbnN0IGhhbmRsZU1hcmtlckNoYW5nZSA9IChldmVudCkgPT4ge1xuXG4gICAgICBHZW9jb2RlLmZyb21MYXRMbmcoZXZlbnQubGF0TG5nLmxhdCgpLCBldmVudC5sYXRMbmcubG5nKCkpLnRoZW4oXG4gICAgICAgIHJlc3BvbnNlID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5yZXN1bHRzWzBdKVxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLnJlc3VsdHNbMF0uYWRkcmVzc19jb21wb25lbnRzKVxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLnJlc3VsdHNbMF0uZm9ybWF0dGVkX2FkZHJlc3MpXG4gICAgICAgICAgY29uc3QgYWRkaSA9IHJlc3BvbnNlLnJlc3VsdHNbMF0uYWRkcmVzc19jb21wb25lbnRzXG4gICAgICAgICAgY29uc3QgbmV3QWRkcmVzcyA9IHJlc3BvbnNlLnJlc3VsdHNbMF0uZm9ybWF0dGVkX2FkZHJlc3NcbiAgICAgICAgICBcbiAgICAgICAgICBjb25zdCBjaXR5MSA9IGFkZGkuZmluZCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3ViTG9jYWwgPSBlbGVtZW50LnR5cGVzLmluY2x1ZGVzKCdzdWJsb2NhbGl0eScpXG4gICAgICAgICAgICByZXR1cm4gc3ViTG9jYWxcbiAgICAgICAgICB9KVxuICAgICAgICAgIGNvbnN0IGNpdHkyID0gYWRkaS5maW5kKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhZG1pbkFyZWEgPSBlbGVtZW50LnR5cGVzLmluY2x1ZGVzKCdhZG1pbmlzdHJhdGl2ZV9hcmVhX2xldmVsXzEnKVxuICAgICAgICAgICAgcmV0dXJuIGFkbWluQXJlYVxuICAgICAgICAgIH0pXG4gICAgICAgICAgY29uc3QgY2l0eSA9IGNpdHkxLmxvbmdfbmFtZSArICcsICcgKyBjaXR5Mi5sb25nX25hbWVcbiAgICAgICAgICBjb25zdCB6aXAgPSBhZGRpLmZpbmQoKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBlbGVtZW50LnR5cGVzLmluY2x1ZGVzKCdwb3N0YWxfY29kZScpXG4gICAgICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgICAgIH0pXG4gICAgICAgICAgY29uc29sZS5sb2coY2l0eTEubG9uZ19uYW1lKVxuICAgICAgICAgIGNvbnNvbGUubG9nKGNpdHkyLmxvbmdfbmFtZSlcbiAgICAgICAgICBjb25zb2xlLmxvZyh6aXAubG9uZ19uYW1lKVxuICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlcylcbiAgICAgICAgICBzZXRUeHRTZWFyY2gobmV3QWRkcmVzcylcbiAgICAgICAgICBzZXRBZGRyZXNzKG5ld0FkZHJlc3MpXG4gICAgICAgICAgc2V0TGF0aXR1ZGUoZXZlbnQubGF0TG5nLmxhdCgpKVxuICAgICAgICAgIHNldExvbmdpdHVkZShldmVudC5sYXRMbmcubG5nKCkpIFxuICAgICAgICAgIHsvKiB3aGVuIHRoaXMgaXMgcmVtb3ZlZCBmaXhlcyB0aGUgcHJvYmxlbSB3aXRoIHN0YXRlIHZhbHVlcyBiZWluZyByZWZyZXNoZWQgKi99XG4gICAgICAgICAgc2V0VmFsdWVzKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAuLi52YWx1ZXMsXG4gICAgICAgICAgICAgIGFkZHJlc3M6IG5ld0FkZHJlc3MsXG4gICAgICAgICAgICAgIGxhdGl0dWRlOiBsb25naXR1ZGUudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgbG9uZ2l0dWRlOiBsYXRpdHVkZS50b1N0cmluZygpLFxuICAgICAgICAgICAgICBjaXR5OiBjaXR5LFxuICAgICAgICAgICAgICB6aXA6IHppcC5sb25nX25hbWUgPyB6aXAubG9uZ19uYW1lIDogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgIClcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICApXG4gICAgfVxuICBcbiAgICBjb25zdCBoYW5kbGVTZWxlY3RTdWdnZXN0ID0gKHN1Z2dlc3Rpb24sIGdlb2NvZGVkUHJlZGljdGlvbiwgb3JpZ2luYWxQcmVkaWN0aW9uKSA9PiB7XG4gICAgICBjb25zdCB7IGZvcm1hdHRlZF9hZGRyZXNzOiB0eHRMb2NhdGlvbiwgZ2VvbWV0cnkgfSA9IHN1Z2dlc3Rpb247XG4gICAgICBjb25zdCBhZGRyZXNzID0gJ2FkZHJlc3MnXG4gICAgICBjb25zdCBsYXQgPSAnbGF0aXR1ZGUnXG4gICAgICBjb25zdCBsbmcgPSAnbG9uZ2l0dWRlJ1xuICAgICAgY29uc3QgYWRkID0gZ2VvY29kZWRQcmVkaWN0aW9uLmRlc2NyaXB0aW9uLnNwbGl0KFwiLFwiKVxuICAgICAgY29uc3QgY291bnQgPSBhZGQubGVuZ3RoXG4gICAgICBjb25zdCBjaXR5MSA9IGFkZFtjb3VudCAtIDNdXG4gICAgICBjb25zdCBjaXR5MiA9IGFkZFtjb3VudCAtIDJdXG4gICAgICBzZXRUeHRTZWFyY2goZ2VvY29kZWRQcmVkaWN0aW9uLmRlc2NyaXB0aW9uKVxuICAgICAgY29uc29sZS5sb2coZ2VvY29kZWRQcmVkaWN0aW9uKVxuICAgICAgc2V0TGF0aXR1ZGUoZ2VvbWV0cnkubG9jYXRpb24ubGF0KCkpXG4gICAgICBzZXRMb25naXR1ZGUoZ2VvbWV0cnkubG9jYXRpb24ubG5nKCkpXG4gICAgICBjb25zb2xlLmxvZyhnZW9tZXRyeS5sb2NhdGlvbi5sYXQoKSlcbiAgICAgIGNvbnNvbGUubG9nKGdlb21ldHJ5LmxvY2F0aW9uLmxuZygpKVxuICAgICAgc2V0VmFsdWVzKFxuICAgICAgICB7XG4gICAgICAgICAgLi4udmFsdWVzLFxuICAgICAgICAgIGFkZHJlc3M6IGdlb2NvZGVkUHJlZGljdGlvbi5kZXNjcmlwdGlvbixcbiAgICAgICAgICBsYXRpdHVkZTogZ2VvbWV0cnkubG9jYXRpb24ubG5nKCkudG9TdHJpbmcoKSxcbiAgICAgICAgICBsb25naXR1ZGU6IGdlb21ldHJ5LmxvY2F0aW9uLmxhdCgpLnRvU3RyaW5nKCksXG4gICAgICAgICAgY2l0eTogY2l0eTEgKyAnLCAnICsgY2l0eTJcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH1cbiAgXG4gICAgZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHN0cmluZykge1xuICAgICAgICBpZihzdHJpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdbMF0udG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyaW5nXG4gICAgfVxuICBcbiAgICBmdW5jdGlvbiBzdHJpcFN0cmluZyhzdHJpbmcpIHtcbiAgICAgICAgaWYoc3RyaW5nKSB7XG4gICAgICAgICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKCdfJywgJyAnKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHJpbmdcbiAgICAgIH1cbiAgXG4gICAgY29uc3QgZ2V0TGFiZWwgPSB2YWx1ZXMudHlwZVxuICAgIGNvbnN0IHN0cmlwTGFiZWwgPSBzdHJpcFN0cmluZyhnZXRMYWJlbClcbiAgICBjb25zdCBbc2VsZWN0TWFrZSwgc2V0U2VsZWN0TWFrZV0gPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgICAgIGxhYmVsOiAnJyxcbiAgICAgICAgdmFsdWU6JydcbiAgICB9KVxuICBcbiAgICBjb25zdCBoYW5kbGVTZWxlY3RNYWtlQ2hhbmdlID0gZXZlbnQgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBldmVudC52YWx1ZVxuICAgICAgY29uc3QgbGFiZWwgPSBldmVudC5sYWJlbFxuICAgICAgY29uc3QgbmFtZSA9ICdtYWtlX2lkJ1xuICAgICAgc2V0VmFsdWVzKHtcbiAgICAgICAgLi4udmFsdWVzLFxuICAgICAgICBbbmFtZV06IHZhbHVlXG4gICAgICB9KVxuICAgICAgc2V0U2VsZWN0TWFrZSh7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSwgbGFiZWw6IGxhYmVsXG4gICAgICB9KVxuICAgICAgY29uc29sZS5sb2codmFsdWUpXG4gICAgICBjb25zb2xlLmxvZyhsYWJlbClcbiAgICAgIGNvbnNvbGUubG9nKHNlbGVjdE1ha2UpXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHNlbGVjdE1ha2UpXG4gICAgY29uc3QgW3NlbGVjdE1vZGVsLCBzZXRTZWxlY3RNb2RlbF0gPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgICAgIGxhYmVsOiAnJyxcbiAgICAgICAgdmFsdWU6JydcbiAgICB9KVxuICAgIFxuICAgICAgY29uc3QgaGFuZGxlU2VsZWN0TW9kZWxDaGFuZ2UgPSBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudmFsdWVcbiAgICAgICAgY29uc3QgbGFiZWwgPSBldmVudC5sYWJlbFxuICAgICAgICBjb25zdCBuYW1lID0gJ21vZGVsX2lkJ1xuICAgICAgICBzZXRWYWx1ZXMoe1xuICAgICAgICAgIC4uLnZhbHVlcyxcbiAgICAgICAgICBbbmFtZV06IHZhbHVlXG4gICAgICAgIH0pXG4gICAgICAgIHNldFNlbGVjdE1vZGVsKHtcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsIGxhYmVsOiBsYWJlbFxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgXG4gICAgICBjb25zdCBbc2VsZWN0VHJpbSwgc2V0U2VsZWN0VHJpbV0gPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgICAgIGxhYmVsOiAnJyxcbiAgICAgICAgdmFsdWU6JydcbiAgICB9KVxuICAgIFxuICAgIGNvbnN0IGhhbmRsZVNlbGVjdFRyaW1DaGFuZ2UgPSBldmVudCA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnZhbHVlXG4gICAgICBjb25zdCBsYWJlbCA9IGV2ZW50LmxhYmVsXG4gICAgICBjb25zdCBuYW1lID0gJ3RyaW1faWQnXG4gICAgICBzZXRWYWx1ZXMoe1xuICAgICAgICAuLi52YWx1ZXMsXG4gICAgICAgIFtuYW1lXTogdmFsdWVcbiAgICAgIH0pXG4gICAgICBzZXRTZWxlY3RUcmltKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLCBsYWJlbDogbGFiZWxcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgW3NlbGVjdFR5cGUsIHNldFNlbGVjdFR5cGVdID0gUmVhY3QudXNlU3RhdGUoe1xuICAgICAgbGFiZWw6ICcnLFxuICAgICAgdmFsdWU6JydcbiAgICB9KVxuICAgIFxuICAgIGNvbnN0IGhhbmRsZVNlbGVjdFR5cGVDaGFuZ2UgPSBldmVudCA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnZhbHVlXG4gICAgICBjb25zdCBsYWJlbCA9IGV2ZW50LmxhYmVsXG4gICAgICBjb25zdCBuYW1lID0gJ3R5cGUnXG4gICAgICBzZXRWYWx1ZXMoe1xuICAgICAgICAuLi52YWx1ZXMsXG4gICAgICAgIFtuYW1lXTogdmFsdWVcbiAgICAgIH0pXG4gICAgICBzZXRTZWxlY3RUeXBlKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLCBsYWJlbDogbGFiZWxcbiAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IFtzZWxlY3RFbmdpbmUsIHNldFNlbGVjdEVuZ2luZV0gPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgICBsYWJlbDogJycsXG4gICAgICB2YWx1ZTonJ1xuICAgIH0pXG4gICAgXG4gICAgY29uc3QgaGFuZGxlU2VsZWN0RW5naW5lQ2hhbmdlID0gZXZlbnQgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBldmVudC52YWx1ZVxuICAgICAgY29uc3QgbGFiZWwgPSBldmVudC5sYWJlbFxuICAgICAgY29uc3QgbmFtZSA9ICdlbmdpbmVfdHlwZSdcbiAgICAgIHNldFZhbHVlcyh7XG4gICAgICAgIC4uLnZhbHVlcyxcbiAgICAgICAgW25hbWVdOiB2YWx1ZVxuICAgICAgfSlcbiAgICAgIHNldFNlbGVjdEVuZ2luZSh7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSwgbGFiZWw6IGxhYmVsXG4gICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IFtzZWxlY3RUcmFuc21pc3Npb24sIHNldFNlbGVjdFRyYW5zbWlzc2lvbl0gPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgICBsYWJlbDogJycsXG4gICAgICB2YWx1ZTonJ1xuICAgIH0pXG4gIFxuICAgIGNvbnN0IGhhbmRsZVNlbGVjdFRyYW5zbWlzc2lvbkNoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudmFsdWVcbiAgICAgIGNvbnN0IGxhYmVsID0gZXZlbnQubGFiZWxcbiAgICAgIGNvbnN0IG5hbWUgPSAndHJhbnNtaXNzaW9uJ1xuICAgICAgc2V0VmFsdWVzKHtcbiAgICAgICAgLi4udmFsdWVzLFxuICAgICAgICBbbmFtZV06IHZhbHVlXG4gICAgICB9KVxuICAgICAgc2V0U2VsZWN0VHJhbnNtaXNzaW9uKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLCBsYWJlbDogbGFiZWxcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgW3NlbGVjdENvbG9yLCBzZXRTZWxlY3RDb2xvcl0gPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgICBsYWJlbDogJycsXG4gICAgICB2YWx1ZTonJ1xuICAgIH0pXG4gIFxuICAgIGNvbnN0IGhhbmRsZVNlbGVjdENvbG9yQ2hhbmdlID0gZXZlbnQgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBldmVudC52YWx1ZVxuICAgICAgY29uc3QgbGFiZWwgPSBldmVudC5sYWJlbFxuICAgICAgY29uc3QgbmFtZSA9ICdjb2xvcidcbiAgICAgIHNldFZhbHVlcyh7XG4gICAgICAgIC4uLnZhbHVlcyxcbiAgICAgICAgW25hbWVdOiB2YWx1ZVxuICAgICAgfSlcbiAgICAgIHNldFNlbGVjdENvbG9yKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLCBsYWJlbDogbGFiZWxcbiAgICAgIH0pXG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldFxuICAgICAgY29uc3QgdmFsdWUgPSB0YXJnZXQudHlwZSA9PT0gXCJjaGVja2JveFwiID8gdGFyZ2V0LmNoZWNrZWQgOiB0YXJnZXQudmFsdWVcbiAgICAgIGNvbnNvbGUubG9nKHZhbHVlKVxuICAgICAgaWYgKCB0YXJnZXQudHlwZSA9PT0gXCJjaGVja2JveFwiICkge1xuICAgICAgICBpZiggdGFyZ2V0LnZhbHVlID09PSAwICkge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gZmFsc2VcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9ICB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgICBjb25zdCBuYW1lID0gdGFyZ2V0Lm5hbWVcbiAgICAgIHNldFZhbHVlcyh7XG4gICAgICAgIC4uLnZhbHVlcyxcbiAgICAgICAgW25hbWVdOiB2YWx1ZVxuICAgICAgfSlcbiAgICB9XG4gIFxuICAgIGNvbnN0IGhhbmRsZUJsdXIgPSBldmVudCA9PiB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXRcbiAgICAgIGNvbnN0IG5hbWUgPSB0YXJnZXQubmFtZVxuICAgICAgc2V0VG91Y2hlZFZhbHVlcyh7XG4gICAgICAgIC4uLnRvdWNoZWRWYWx1ZXMsXG4gICAgICAgIFtuYW1lXTogdHJ1ZVxuICAgICAgfSlcbiAgICAgIGNvbnN0IGUgPSB2YWxpZGF0ZSh2YWx1ZXMpXG4gICAgICBzZXRFcnJvcnMoe1xuICAgICAgICAuLi5lcnJvcnMsXG4gICAgICAgIC4uLmVcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgW3N0ZXAsIHNldFN0ZXBdID0gdXNlU3RhdGUoMSlcbiAgICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IHVzZVN0YXRlKHtcbiAgICAgIDE6IGZhbHNlLFxuICAgICAgMjogZmFsc2UsXG4gICAgICAzOiBmYWxzZSxcbiAgICAgIDQ6IGZhbHNlXG4gICAgfSlcbiAgICBcbiAgICBjb25zdCBuZXh0U3RlcCA9IGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBjb25zdCBwYWdlID0gc3RlcFxuICAgICAgc2V0UHJvZ3Jlc3Moe1xuICAgICAgICAuLi5wcm9ncmVzcyxcbiAgICAgICAgW3BhZ2VdOiB0cnVlXG4gICAgICB9KVxuXG4gICAgICBzZXRTdGVwKHN0ZXAgKyAxKVxuICAgIH1cblxuICAgIGNvbnN0IHByZXZpb3VzU3RlcCA9IGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBzZXRTdGVwKHN0ZXAgLSAxKVxuICAgIH1cbiAgICBcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBldmVudCA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBjb25zdCBlID0gdmFsaWRhdGUodmFsdWVzKVxuICAgICAgc2V0RXJyb3JzKHtcbiAgICAgICAgLi4uZXJyb3JzLFxuICAgICAgICAuLi5lXG4gICAgICB9KVxuICAgICAgY29uc29sZS5sb2coJ1ZlaGljbGVzOicsIHZhbHVlcyk7XG4gICAgICBvblN1Ym1pdCh7IC4uLnZhbHVlcywgZSB9KVxuICAgICAgc2V0UHJvZ3Jlc3Moe1xuICAgICAgICAuLi5wcm9ncmVzcyxcbiAgICAgICAgc3RlcDogdHJ1ZVxuICAgICAgfSlcblxuICAgICAgc2V0U3RlcChzdGVwICsgMSlcbiAgICB9XG4gIFxuICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlcyxcbiAgICAgICAgc2V0VmFsdWVzLFxuICAgICAgICB0b3VjaGVkVmFsdWVzLFxuICAgICAgICBlcnJvcnMsXG4gICAgICAgIHNlbGVjdE1ha2UsXG4gICAgICAgIHNlbGVjdE1vZGVsLFxuICAgICAgICBzZWxlY3RUcmltLFxuICAgICAgICBzZWxlY3RUeXBlLFxuICAgICAgICBzZWxlY3RFbmdpbmUsXG4gICAgICAgIHNlbGVjdFRyYW5zbWlzc2lvbixcbiAgICAgICAgc2V0U2VsZWN0TWFrZSxcbiAgICAgICAgc2V0U2VsZWN0TW9kZWwsXG4gICAgICAgIHNldFNlbGVjdFRyaW0sXG4gICAgICAgIHNldFNlbGVjdFR5cGUsXG4gICAgICAgIHNldFNlbGVjdEVuZ2luZSxcbiAgICAgICAgc2V0U2VsZWN0VHJhbnNtaXNzaW9uLFxuICAgICAgICBzZWxlY3RDb2xvcixcbiAgICAgICAgc2V0U2VsZWN0Q29sb3IsXG4gICAgICAgIGhhbmRsZVNlbGVjdENvbG9yQ2hhbmdlLFxuICAgICAgICBoYW5kbGVDaGFuZ2UsXG4gICAgICAgIGhhbmRsZVNlbGVjdE1ha2VDaGFuZ2UsXG4gICAgICAgIGhhbmRsZVNlbGVjdE1vZGVsQ2hhbmdlLFxuICAgICAgICBoYW5kbGVTZWxlY3RUcmltQ2hhbmdlLFxuICAgICAgICBoYW5kbGVTZWxlY3RUeXBlQ2hhbmdlLFxuICAgICAgICBoYW5kbGVTZWxlY3RFbmdpbmVDaGFuZ2UsXG4gICAgICAgIGhhbmRsZVNlbGVjdFRyYW5zbWlzc2lvbkNoYW5nZSxcbiAgICAgICAgaGFuZGxlU3VibWl0LFxuICAgICAgICBoYW5kbGVCbHVyLFxuICAgICAgICBoYW5kbGVTZWFyY2gsXG4gICAgICAgIGhhbmRsZVNlbGVjdFN1Z2dlc3QsXG4gICAgICAgIGhhbmRsZU1hcmtlckNoYW5nZSxcbiAgICAgICAgbG9uZ2l0dWRlLFxuICAgICAgICBsYXRpdHVkZSxcbiAgICAgICAgdHh0TG9jYXRpb24sXG4gICAgICAgIHR4dFNlYXJjaCxcbiAgICAgICAgc3RlcCxcbiAgICAgICAgc2V0U3RlcCxcbiAgICAgICAgcHJvZ3Jlc3MsXG4gICAgICAgIG5leHRTdGVwLFxuICAgICAgICBwcmV2aW91c1N0ZXBcbiAgICB9XG4gIH1cblxuZnVuY3Rpb24gQ3JlYXRlVmVoaWNsZUNvbXBvbmVudCh7b25TdWJtaXQsIHVzZXJ9KXtcblxuICAgIGNvbnN0IGluaXRpYWxWYWx1ZXMgPSBbe1xuICAgICAgICB0eXBlOiAnJyxcbiAgICAgICAgbWFrZV9pZDogJycsXG4gICAgICAgIG1vZGVsX2lkOiAnJyxcbiAgICAgICAgdHJpbV9pZDogJycsXG4gICAgICAgIGNhcl95ZWFyOiAnJyxcbiAgICAgICAgZW5naW5lX3R5cGU6ICcnLFxuICAgICAgICB0cmFuc21pc3Npb246ICcnLFxuICAgICAgICBjb2xvcjogJycsXG4gICAgICAgIHBsYXRlX251bWJlcjogJycsXG4gICAgICAgIGN1cnJlbnRfbWlsZWFnZTogJycsXG4gICAgICAgIGRhdGVfcHVyY2hhc2VkOiAnJyxcbiAgICAgICAgbGFzdF9zZXJ2aWNlZDogJycsXG4gICAgICAgIGFkZHJlc3M6ICcnLFxuICAgICAgICBjaXR5OiAnJyxcbiAgICAgICAgemlwOiAnJyxcbiAgICAgICAgbG9uZ2l0dWRlOiAnJyxcbiAgICAgICAgbGF0aXR1ZGU6ICcnXG4gICAgfV1cbiAgICBjb25zdCB7IFxuICAgICAgICB2YWx1ZXMsXG4gICAgICAgIHNldFZhbHVlcyxcbiAgICAgICAgdG91Y2hlZFZhbHVlcyxcbiAgICAgICAgZXJyb3JzLFxuICAgICAgICBzZWxlY3RNYWtlLFxuICAgICAgICBzZWxlY3RNb2RlbCxcbiAgICAgICAgc2VsZWN0VHJpbSxcbiAgICAgICAgc2VsZWN0VHlwZSxcbiAgICAgICAgc2VsZWN0RW5naW5lLFxuICAgICAgICBzZWxlY3RUcmFuc21pc3Npb24sXG4gICAgICAgIHNldFNlbGVjdE1ha2UsXG4gICAgICAgIHNldFNlbGVjdE1vZGVsLFxuICAgICAgICBzZXRTZWxlY3RUcmltLFxuICAgICAgICBzZXRTZWxlY3RUeXBlLFxuICAgICAgICBzZXRTZWxlY3RFbmdpbmUsXG4gICAgICAgIHNldFNlbGVjdFRyYW5zbWlzc2lvbixcbiAgICAgICAgc2VsZWN0Q29sb3IsXG4gICAgICAgIHNldFNlbGVjdENvbG9yLFxuICAgICAgICBoYW5kbGVTZWxlY3RDb2xvckNoYW5nZSxcbiAgICAgICAgaGFuZGxlQ2hhbmdlLFxuICAgICAgICBoYW5kbGVTZWxlY3RNYWtlQ2hhbmdlLFxuICAgICAgICBoYW5kbGVTZWxlY3RNb2RlbENoYW5nZSxcbiAgICAgICAgaGFuZGxlU2VsZWN0VHJpbUNoYW5nZSxcbiAgICAgICAgaGFuZGxlU2VsZWN0VHlwZUNoYW5nZSxcbiAgICAgICAgaGFuZGxlU2VsZWN0RW5naW5lQ2hhbmdlLFxuICAgICAgICBoYW5kbGVTZWxlY3RUcmFuc21pc3Npb25DaGFuZ2UsXG4gICAgICAgIGhhbmRsZVN1Ym1pdCxcbiAgICAgICAgaGFuZGxlQmx1cixcbiAgICAgICAgaGFuZGxlU2VhcmNoLFxuICAgICAgICBoYW5kbGVTZWxlY3RTdWdnZXN0LFxuICAgICAgICBoYW5kbGVNYXJrZXJDaGFuZ2UsXG4gICAgICAgIGxvbmdpdHVkZSxcbiAgICAgICAgbGF0aXR1ZGUsXG4gICAgICAgIHR4dExvY2F0aW9uLFxuICAgICAgICB0eHRTZWFyY2gsXG4gICAgICAgIHN0ZXAsXG4gICAgICAgIHNldFN0ZXAsXG4gICAgICAgIHByb2dyZXNzLFxuICAgICAgICBuZXh0U3RlcCxcbiAgICAgICAgcHJldmlvdXNTdGVwIH0gPSB1c2VGb3JtKHtcbiAgICAgICAgaW5pdGlhbFZhbHVlcyxcbiAgICAgICAgb25TdWJtaXQsXG4gICAgICAgIHZhbGlkYXRlKHZhbHVlcykge1xuICAgICAgICAgIGNvbnN0IGVycm9ycyA9IHt9XG4gICAgXG4gICAgICAgICAgcmV0dXJuIGVycm9yc1xuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgY29uc3QgW21ha2VzLCBzZXRNYWtlc10gPSB1c2VTdGF0ZShbXSlcbiAgICBjb25zdCBbdlR5cGVzLCBzZXRWVHlwZXNdID0gdXNlU3RhdGUoW10pXG4gICAgY29uc3QgW2VUeXBlcywgc2V0RVR5cGVzXSA9IHVzZVN0YXRlKFtdKVxuICAgIGNvbnN0IFt0VHlwZXMsIHNldFRUeXBlc10gPSB1c2VTdGF0ZShbXSlcblxuXG4gICAgY29uc29sZS5sb2cobWFrZXMpXG4gICAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaE1ha2UgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zKGAvYXBpL2Nhci1tYWtlcy9zZWxlY3RgKVxuICAgICAgICBzZXRNYWtlcyhyZXN1bHQuZGF0YS5kYXRhKTtcbiAgICB9XG4gICAgY29uc3QgZmV0Y2hUeXBlcyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MoYC9hcGkvdmVoaWNsZXMvdHlwZXNgKVxuICAgICAgICBzZXRWVHlwZXMocmVzdWx0LmRhdGEpO1xuICAgIH1cbiAgICBjb25zdCBmZXRjaEVuZ2luZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zKGAvYXBpL3ZlaGljbGVzL2VuZ2luZXNgKVxuICAgICAgICBzZXRFVHlwZXMocmVzdWx0LmRhdGEpO1xuICAgIH1cbiAgICBjb25zdCBmZXRjaFRyYW5zbWlzc2lvbiA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MoYC9hcGkvdmVoaWNsZXMvdHJhbnNtaXNzaW9uYClcbiAgICAgICAgc2V0VFR5cGVzKHJlc3VsdC5kYXRhKTtcbiAgICB9XG4gICAgZmV0Y2hNYWtlKClcbiAgICBmZXRjaFR5cGVzKClcbiAgICBmZXRjaEVuZ2luZXMoKVxuICAgIGZldGNoVHJhbnNtaXNzaW9uKClcbiAgICB9LCBbXSlcbiAgICBjb25zdCBbbW9kZWxzLCBzZXRNb2RlbHNdID0gdXNlU3RhdGUoW10pXG4gICAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaE1vZGVsID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcyhgL2FwaS9jYXItbW9kZWxzL3NlbGVjdC8ke3NlbGVjdE1ha2UudmFsdWUgfHwgJyd9YClcbiAgICAgICAgc2V0TW9kZWxzKHJlc3VsdC5kYXRhLmRhdGEpO1xuICAgIH07XG4gICAgZmV0Y2hNb2RlbCgpXG4gICAgfSwgW3NlbGVjdE1ha2VdKVxuXG4gICAgY29uc3QgW3RyaW1zLCBzZXRUcmltc10gPSB1c2VTdGF0ZShbXSlcbiAgICBjb25zb2xlLmxvZyh0cmltcylcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoVHJpbXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zKGAvYXBpL2Nhci10cmltcy9zZWxlY3QvJHtzZWxlY3RNb2RlbC52YWx1ZSB8fCAnJ31gKVxuICAgICAgICBzZXRUcmltcyhyZXN1bHQuZGF0YS5kYXRhKTtcbiAgICB9O1xuICAgIGZldGNoVHJpbXMoKVxuICAgIH0sIFtzZWxlY3RNb2RlbF0pXG5cbiAgICBjb25zdCBoYW5kbGVDcmVhdGVNYWtlID0gdmFsdWUgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgY29uc3QgY3JlYXRlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvY2FyLW1ha2VzYCwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZV9pZDogMVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlc3VsdC5kYXRhLmRhdGFcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgICAgICAgIHNldFNlbGVjdE1ha2UoeyBsYWJlbDogZGF0YS5uYW1lLCB2YWx1ZTogZGF0YS5pZCB9KVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNyZWF0ZSgpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQ3JlYXRlTW9kZWwgPSB2YWx1ZSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICBjb25zdCBjcmVhdGUgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9jYXItbW9kZWxzYCwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgbWFrZV9pZDogc2VsZWN0TWFrZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZV9pZDogMVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlc3VsdC5kYXRhLmRhdGFcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgICAgICAgIHNldFNlbGVjdE1vZGVsKHsgbGFiZWw6IGRhdGEubmFtZSwgdmFsdWU6IGRhdGEuaWQgfSlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjcmVhdGUoKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUNyZWF0ZVRyaW0gPSB2YWx1ZSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICBjb25zdCBjcmVhdGUgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9jYXItdHJpbXNgLCB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBtb2RlbF9pZDogc2VsZWN0TW9kZWwudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGVfaWQ6IDFcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXN1bHQuZGF0YS5kYXRhXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3RUcmltKHsgbGFiZWw6IGRhdGEubmFtZSwgdmFsdWU6IGRhdGEuaWQgfSlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjcmVhdGUoKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbXB1dGVQcm9ncmVzcygpIHtcbiAgICAgIGNvbnN0IGZpcnN0ID0gcHJvZ3Jlc3NbMV0gPT0gdHJ1ZSA/IDI1IDogMFxuICAgICAgY29uc3Qgc2Vjb25kID0gcHJvZ3Jlc3NbMl0gPT0gdHJ1ZSA/IDI1IDogMFxuICAgICAgY29uc3QgdGhpcmQgPSBwcm9ncmVzc1szXSA9PSB0cnVlID8gMjUgOiAwXG4gICAgICBjb25zdCBmb3J0aCA9IHByb2dyZXNzWzRdID09IHRydWUgPyAyNSA6IDBcbiAgICAgIGNvbnN0IHRvdGFsID0gZmlyc3QgKyBzZWNvbmQgKyB0aGlyZCArIGZvcnRoXG4gICAgICByZXR1cm4gIGAke3RvdGFsfSVgXG4gICAgfVxuICAgIGZ1bmN0aW9uIGN1cnJlbnRQYWdlKHBhZ2UpIHtcbiAgICAgIGlmKHBhZ2UgPT0gc3RlcCkge1xuICAgICAgICByZXR1cm4gJ2NvbC1zcGFuLTEgdGV4dC1jZW50ZXIgcHktMyBiZy13aGl0ZSB0ZXh0LWdyZWVuLTUwMCBmb250LWJvbGQnXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcHJvZ3Jlc3NbcGFnZV0gPT0gdHJ1ZSA/ICdjb2wtc3Bhbi0xIHRleHQtY2VudGVyIHB5LTMgYmctd2hpdGUgdGV4dC1ncmF5LTgwMCBmb250LWJvbGQnIDogJ2NvbC1zcGFuLTEgdGV4dC1jZW50ZXIgcHktMyBiZy1ncmF5LTEwMCB0ZXh0LWdyYXktNTAwIGhvdmVyOmJnLWdyYXktMzAwIGhvdmVyOnRleHQtZ3JheS02MCdcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmItd2hpdGUgcHgtMTAgcHktMTBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLWxnIHNoYWRvdy1sZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtdC1sZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcy1sYWJlbCBmbG9hdC1sZWZ0IHAtNVwiPkNvbXBsZXRpb24gUHJvZ3Jlc3M8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHQgcC01XCI+e3N0ZXB9LzQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93IHctZnVsbCBiZy1ncmF5LTMwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgdGV4dC14cyBsZWFkaW5nLW5vbmUgcHktMSB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCIgc3R5bGU9e3sgd2lkdGg6IGNvbXB1dGVQcm9ncmVzcygpIH19PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3VycmVudFBhZ2UoMSl9PkxvY2F0aW9uPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N1cnJlbnRQYWdlKDIpfT5HZW5lcmFsIERldGFpbHM8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3VycmVudFBhZ2UoMyl9PkVuZ2luZSBEZXRhaWxzPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N1cnJlbnRQYWdlKDQpfT5TZXJ2aWNlIERldGFpbHM8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICAgICAge3N0ZXAgPT0gMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgPFZlaGljbGVMb2NhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzcz17cHJvZ3Jlc3NbMV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcz17dmFsdWVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0U3RlcD17bmV4dFN0ZXB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR4dFNlYXJjaD17dHh0U2VhcmNofVxuICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlU2VhcmNoPXtoYW5kbGVTZWFyY2h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhdGl0dWRlPXtsYXRpdHVkZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG9uZ2l0dWRlPXtsb25naXR1ZGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVNlbGVjdFN1Z2dlc3Q9e2hhbmRsZVNlbGVjdFN1Z2dlc3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU1hcmtlckNoYW5nZT17aGFuZGxlTWFya2VyQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHtzdGVwID09IDIgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICA8VmVoaWNsZURldGFpbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3M9e3Byb2dyZXNzWzJdfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWFrZXM9e21ha2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWxzPXttb2RlbHN9XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmltcz17dHJpbXN9XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDcmVhdGVNYWtlPXtoYW5kbGVDcmVhdGVNYWtlfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0TWFrZT17c2VsZWN0TWFrZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVNlbGVjdE1ha2VDaGFuZ2U9e2hhbmRsZVNlbGVjdE1ha2VDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDcmVhdGVNb2RlbD17aGFuZGxlQ3JlYXRlTW9kZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RNb2RlbD17c2VsZWN0TW9kZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTZWxlY3RNb2RlbENoYW5nZT17aGFuZGxlU2VsZWN0TW9kZWxDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9e3ZhbHVlc31cbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ3JlYXRlVHJpbT17aGFuZGxlQ3JlYXRlVHJpbX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdFRyaW09e3NlbGVjdFRyaW19XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTZWxlY3RUcmltQ2hhbmdlPXtoYW5kbGVTZWxlY3RUcmltQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFN0ZXA9e25leHRTdGVwfVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNTdGVwPXtwcmV2aW91c1N0ZXB9XG4gICAgICAgICAgICAgICAgICAgICAgLz4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHtzdGVwID09IDMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBZGRpdGlvbmFsRGV0YWlsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzcz17cHJvZ3Jlc3NbM119XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcz17dmFsdWVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0VHlwZT17c2VsZWN0VHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlU2VsZWN0VHlwZUNoYW5nZT17aGFuZGxlU2VsZWN0VHlwZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdlR5cGVzPXt2VHlwZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdEVuZ2luZT17c2VsZWN0RW5naW5lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTZWxlY3RFbmdpbmVDaGFuZ2U9e2hhbmRsZVNlbGVjdEVuZ2luZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZVR5cGVzPXtlVHlwZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdFRyYW5zbWlzc2lvbj17c2VsZWN0VHJhbnNtaXNzaW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTZWxlY3RUcmFuc21pc3Npb25DaGFuZ2U9e2hhbmRsZVNlbGVjdFRyYW5zbWlzc2lvbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdFR5cGVzPXt0VHlwZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdENvbG9yPXtzZWxlY3RDb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlU2VsZWN0Q29sb3JDaGFuZ2U9e2hhbmRsZVNlbGVjdENvbG9yQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0U3RlcD17bmV4dFN0ZXB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzU3RlcD17cHJldmlvdXNTdGVwfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAge3N0ZXAgPT0gNCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlcnZpY2VEZXRhaWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzPXtwcm9ncmVzc1s0XX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzPXt2YWx1ZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFZhbHVlcz17c2V0VmFsdWVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFN0ZXA9e25leHRTdGVwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1N0ZXA9e3ByZXZpb3VzU3RlcH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHtzdGVwID09IDUgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3VjY2Vzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9e3ZhbHVlc31cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0ZyYWdtZW50PlxuICAgIClcbn1cblxuY29uc3QgdmFsaWRhdGVGaWVsZHMgPSB2YWx1ZXMgPT4ge1xuICAgIGxldCBlcnJvcnMgPSB7fVxuICAgIGlmICghdmFsdWVzLmFkZHJlc3MpIHsgZXJyb3JzLnR4dFNlYXJjaCA9ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJyB9XG4gICAgaWYgKCF2YWx1ZXMubWFrZV9pZCkgeyBlcnJvcnMubWFrZV9pZCA9ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJyB9XG4gICAgaWYgKCF2YWx1ZXMubW9kZWxfaWQpIHsgZXJyb3JzLm1vZGVsX2lkID0gJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnIH1cbiAgICBpZiAoIXZhbHVlcy50cmltX2lkKSB7IGVycm9ycy50cmltX2lkID0gJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnIH1cbiAgICBpZiAoIXZhbHVlcy5jYXJfeWVhcikgeyBlcnJvcnMuY2FyX3llYXIgPSAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCcgfVxuICAgIGlmICghdmFsdWVzLnBsYXRlX251bWJlcikgeyBlcnJvcnMucGxhdGVfbnVtYmVyID0gJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnIH1cbiAgICBpZiAoIXZhbHVlcy50eXBlKSB7IGVycm9ycy50eXBlID0gJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnIH1cbiAgICBpZiAoIXZhbHVlcy5lbmdpbmVfdHlwZSkgeyBlcnJvcnMuZW5naW5lX3R5cGUgPSAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCcgfVxuICAgIGlmICghdmFsdWVzLnRyYW5zbWlzc2lvbikgeyBlcnJvcnMudHJhbnNtaXNzaW9uID0gJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnIH1cbiAgICBpZiAoIXZhbHVlcy5kYXRlX3B1cmNoYXNlZCkgeyBlcnJvcnMuZGF0ZV9wdXJjaGFzZWQgPSAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCcgfVxuICAgIGlmICghdmFsdWVzLmxhc3Rfc2VydmljZWQpIHsgZXJyb3JzLmxhc3Rfc2VydmljZWQgPSAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCcgfVxuICAgIGlmICghdmFsdWVzLmN1cnJlbnRfbWlsZWFnZSA+IDUwMDApIHsgZXJyb3JzLmN1cnJlbnRfbWlsZWFnZSA9ICdNaWxlYWdlIG5lZWRzIHRvIGJlIG1vcmUgdGhhbiA1MDAwJyB9XG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbmNvbnN0IENyZWF0ZVZlaGljbGUgPSByZWR1eEZvcm0oe1xuICAgIGZvcm06ICdjcmVhdGVWZWhpY2xlJyxcbiAgICBlbmFibGVSZWluaXRpYWxpemU6IHRydWUsXG4gICAgdmFsaWRhdGU6IHZhbGlkYXRlRmllbGRzXG4gIH0pKENyZWF0ZVZlaGljbGVDb21wb25lbnQpXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gICAgc3RhdGUgPT4ge1xuICAgICAgICByZXR1cm4oe1xuICAgICAgICAgICAgdXNlcjogY3VycmVudFVzZXJTZWxlY3RvcihzdGF0ZSlcbiAgICAgICAgICB9XG4gICAgICAgICl9LFxuICAgIGRpc3BhdGNoID0+ICh7XG4gICAgICAgIG9uU3VibWl0OiB2YWx1ZXMgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWVzKVxuICAgICAgICAgICAgZGlzcGF0Y2goY3JlYXRlVmVoaWNsZUFjdGlvbih2YWx1ZXMpKVxuICAgICAgICAgICAgQWxlcnQoJ3N1Y2Nlc3MnLCAnU3VjY2Vzc2Z1bGx5IGNyZWF0ZSBhIG5ldyB2ZWhpY2xlIScpXG4gICAgICAgICAgfVxuICAgIH0pXG4gICkoQ3JlYXRlVmVoaWNsZSkiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5leHBvcnQgY29uc3QgQWRkaXRpb25hbERldGFpbHMgPSAoe1xuICAgIHByb2dyZXNzLFxuICAgIHZhbHVlcyxcbiAgICBoYW5kbGVDaGFuZ2UsXG4gICAgc2VsZWN0VHlwZSxcbiAgICBoYW5kbGVTZWxlY3RUeXBlQ2hhbmdlLFxuICAgIHZUeXBlcyxcbiAgICBzZWxlY3RFbmdpbmUsXG4gICAgaGFuZGxlU2VsZWN0RW5naW5lQ2hhbmdlLFxuICAgIGVUeXBlcyxcbiAgICBzZWxlY3RUcmFuc21pc3Npb24sXG4gICAgaGFuZGxlU2VsZWN0VHJhbnNtaXNzaW9uQ2hhbmdlLFxuICAgIHRUeXBlcyxcbiAgICBzZWxlY3RDb2xvcixcbiAgICBoYW5kbGVTZWxlY3RDb2xvckNoYW5nZSxcbiAgICBuZXh0U3RlcCxcbiAgICBwcmV2aW91c1N0ZXBcbn0pID0+IHtcbiAgICBjb25zdCBbY29sb3JzLCBzZXRDb2xvcnNdID0gUmVhY3QudXNlU3RhdGUoW10pXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZmV0Y2hDb2xvcnMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcyhgL2FwaS92ZWhpY2xlcy9jb2xvcnNgKVxuICAgICAgICAgICAgc2V0Q29sb3JzKHJlc3VsdC5kYXRhKTtcbiAgICAgICAgfTtcbiAgICAgICAgZmV0Y2hDb2xvcnMoKVxuICAgIH0sIFtdKVxuXG4gICAgY29uc3QgdG9nZ2xlQ29tcGxldGVkID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhID0gdmFsdWVzLnBsYXRlX251bWJlciAhPSAnJyA/IDAgOiAxXG4gICAgICAgIGNvbnN0IGIgPSB2YWx1ZXMudmluICE9ICcnIHx8IHZhbHVlcy52aW4gIT0gbnVsbCA/IDAgOiAxXG4gICAgICAgIGNvbnN0IGMgPSBzZWxlY3RUeXBlLnZhbHVlICE9ICcnID8gMCA6IDFcbiAgICAgICAgY29uc3QgZCA9IHNlbGVjdEVuZ2luZS52YWx1ZSAhPSAnJyA/IDAgOiAxXG4gICAgICAgIGNvbnN0IGUgPSBzZWxlY3RUcmFuc21pc3Npb24udmFsdWUgIT0gJycgPyAwIDogMVxuICAgICAgICBjb25zdCBmID0gc2VsZWN0Q29sb3IudmFsdWUgIT0gJycgPyAwIDogMVxuICAgICAgICBjb25zdCB0b3RhbCA9IGEgKyBiICsgYyArIGQgKyBlICsgZlxuICAgICAgICBjb25zb2xlLmxvZyh0b3RhbClcbiAgICAgICAgcmV0dXJuIHRvdGFsXG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpPT4ge1xuICAgICAgICB0b2dnbGVDb21wbGV0ZWQoKVxuICAgIH0sIFt2YWx1ZXNdKVxuXG4gICAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTEwIHB4LTEwIGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkIGJnLXdoaXRlIHNoYWRvdy1sZ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1pbml0aWFsIHNlbGYtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgeyB0b2dnbGVDb21wbGV0ZWQoKSA9PSAwIHx8IHByb2dyZXNzID09PSB0cnVlID8gPGRpdiBjbGFzc05hbWU9XCJweC00IHB5LTIgcm91bmRlZCBiZy1ncmVlbi01MDAgbS01IHRleHQtMnhsIHRleHQtMnhsIHRleHQtd2hpdGVcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmNoZWNrPC9pPjwvZGl2PiA6IDxkaXYgY2xhc3NOYW1lPVwicHgtNSBweS0yIHJvdW5kZWQgYmctZ3JheS0zMDAgbS01IHRleHQtMnhsXCI+MzwvZGl2PiB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWF1dG8gc2VsZi1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtZ3JheS03MDBcIj5Nb3JlIGNhciBkZXRhaWw8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS03MDBcIj5BZGRpdGlvbmFsIENhciBEZXRhaWxzPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWluaXRpYWwgcC01IHNlbGYtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIG9uQ2xpY2s9e3ByZXZpb3VzU3RlcH0gdG89XCIjXCIgY2xhc3NOYW1lPVwicHgtNSBweS0yIGJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgcm91bmRlZCByb3VuZGVkLXItbm9uZSBtci0xXCI+UHJldmlvdXM8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIHsgdG9nZ2xlQ29tcGxldGVkKCkgPT09IDAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBvbkNsaWNrPXtuZXh0U3RlcH0gdG89XCIjXCIgY2xhc3NOYW1lPVwicHgtNSBweS0yIGJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgcm91bmRlZCByb3VuZGVkLWwtbm9uZVwiPk5leHQ8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB4LTUgY3Vyc29yLW5vdC1hbGxvd2VkIHB5LTIgYmctZ3JheS0zMDAgaG92ZXI6YmctZ3JheS00MDAgdGV4dC1ncmF5LTcwMCByb3VuZGVkXCI+TmV4dDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNSBibG9ja1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidHlwZVwiPlBsYXRlIE51bWJlcjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicGxhdGVfbnVtYmVyXCIgdmFsdWU9e3ZhbHVlcy5wbGF0ZV9udW1iZXIgPyB2YWx1ZXMucGxhdGVfbnVtYmVyIDogJyd9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZ3JheS0zMDAgcC0yIHJvdW5kZWQgbXktMyBibG9jayB3LWZ1bGxcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInR5cGVcIj5WSU4gTnVtYmVyPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ2aW5cIiB2YWx1ZT17dmFsdWVzLnZpbiA/IHZhbHVlcy52aW4gOiAnJ30gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBwLTIgcm91bmRlZCBteS0zIGJsb2NrIHctZnVsbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidHlwZVwiPlZlaGljbGUgVHlwZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IGNsYXNzTmFtZT1cIm15LTNcIiB2YWx1ZT17c2VsZWN0VHlwZX0gb25DaGFuZ2U9e2hhbmRsZVNlbGVjdFR5cGVDaGFuZ2V9IG5hbWU9XCJ0eXBlXCIgb3B0aW9ucz17dlR5cGVzfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInR5cGVcIj5FbmdpbmUgVHlwZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IGNsYXNzTmFtZT1cIm15LTNcIiB2YWx1ZT17c2VsZWN0RW5naW5lfSBvbkNoYW5nZT17aGFuZGxlU2VsZWN0RW5naW5lQ2hhbmdlfSBuYW1lPVwiZW5naW5lX3R5cGVcIiBvcHRpb25zPXtlVHlwZXN9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0eXBlXCI+VHJhbnNtaXNzaW9uIFR5cGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBjbGFzc05hbWU9XCJteS0zXCIgdmFsdWU9e3NlbGVjdFRyYW5zbWlzc2lvbn0gb25DaGFuZ2U9e2hhbmRsZVNlbGVjdFRyYW5zbWlzc2lvbkNoYW5nZX0gbmFtZT1cInRyYW5zbWlzc2lvblwiIG9wdGlvbnM9e3RUeXBlc30gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0eXBlXCI+Q29sb3I8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBjbGFzc05hbWU9XCJteS0zXCIgdmFsdWU9e3NlbGVjdENvbG9yfSBvbkNoYW5nZT17aGFuZGxlU2VsZWN0Q29sb3JDaGFuZ2V9IG5hbWU9XCJjb2xvclwiIG9wdGlvbnM9e2NvbG9yc30gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICApXG59IiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gJ3JlYWN0LWRhdGUtcGlja2VyJ1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmV4cG9ydCBjb25zdCBTZXJ2aWNlRGV0YWlscyA9ICh7cHJvZ3Jlc3MsIHZhbHVlcywgc2V0VmFsdWVzLCBoYW5kbGVDaGFuZ2UsIG5leHRTdGVwLCBwcmV2aW91c1N0ZXB9KSA9PiB7XG5cbiAgICBjb25zdCBbZGF0ZVB1cmNoYXNlZCwgc2V0RGF0ZVB1cmNoYXNlZCBdID0gUmVhY3QudXNlU3RhdGUoKVxuICAgIGNvbnN0IFtsYXN0U2VydmVkLCBzZXRMYXN0U2VydmVkIF0gPSBSZWFjdC51c2VTdGF0ZSgpXG4gICAgZnVuY3Rpb24gY29udmVydERhdGUoc3RyKSB7XG4gICAgICAgIGNvbnN0IG1udGhzID0ge1xuICAgICAgICAgICAgSmFuOiBcIjAxXCIsXG4gICAgICAgICAgICBGZWI6IFwiMDJcIixcbiAgICAgICAgICAgIE1hcjogXCIwM1wiLFxuICAgICAgICAgICAgQXByOiBcIjA0XCIsXG4gICAgICAgICAgICBNYXk6IFwiMDVcIixcbiAgICAgICAgICAgIEp1bjogXCIwNlwiLFxuICAgICAgICAgICAgSnVsOiBcIjA3XCIsXG4gICAgICAgICAgICBBdWc6IFwiMDhcIixcbiAgICAgICAgICAgIFNlcDogXCIwOVwiLFxuICAgICAgICAgICAgT2N0OiBcIjEwXCIsXG4gICAgICAgICAgICBOb3Y6IFwiMTFcIixcbiAgICAgICAgICAgIERlYzogXCIxMlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkYXRlID0gc3RyLnNwbGl0KFwiIFwiKTtcbiAgICAgIFxuICAgICAgICByZXR1cm4gW2RhdGVbM10sIG1udGhzW2RhdGVbMV1dLCBkYXRlWzJdXS5qb2luKFwiLVwiKTtcbiAgICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZURhdGVDaGFuZ2UgPSBkYXRlID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0ZSlcbiAgICAgICAgY29uc3QgbmV3RGF0ZSA9IGNvbnZlcnREYXRlKGRhdGUudG9TdHJpbmcoKSlcbiAgICAgICAgY29uc3QgbmFtZSA9ICdkYXRlX3B1cmNoYXNlZCdcbiAgICAgICAgc2V0RGF0ZVB1cmNoYXNlZChkYXRlKVxuICAgICAgICBzZXRWYWx1ZXMoe1xuICAgICAgICAgICAgLi4udmFsdWVzLFxuICAgICAgICAgICAgW25hbWVdOiBuZXdEYXRlXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZVNlcnZpY2VkQ2hhbmdlID0gZGF0ZSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0RhdGUgPSBjb252ZXJ0RGF0ZShkYXRlLnRvU3RyaW5nKCkpXG4gICAgICAgIGNvbnN0IG5hbWUgPSAnbGFzdF9zZXJ2aWNlZCdcbiAgICAgICAgc2V0TGFzdFNlcnZlZChkYXRlKVxuICAgICAgICBzZXRWYWx1ZXMoe1xuICAgICAgICAgICAgLi4udmFsdWVzLFxuICAgICAgICAgICAgW25hbWVdOiBuZXdEYXRlXG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIGNvbnNvbGUubG9nKHZhbHVlcylcbiAgICBjb25zb2xlLmxvZyh2YWx1ZXMuZGF0ZV9wdXJjaGFzZWQpXG4gICAgY29uc29sZS5sb2codmFsdWVzLmxhc3Rfc2VydmljZWQpXG4gICAgY29uc29sZS5sb2codmFsdWVzLmN1cnJlbnRfbWlsZWFnZSlcbiAgICBjb25zdCB0b2dnbGVDb21wbGV0ZWQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGEgPSB2YWx1ZXMuZGF0ZV9wdXJjaGFzZWQgIT0gJycgPyAwIDogMVxuICAgICAgICBjb25zdCBiID0gdmFsdWVzLmxhc3Rfc2VydmljZWQgIT0gJycgPyAwIDogMVxuICAgICAgICBjb25zdCBjID0gdmFsdWVzLmN1cnJlbnRfbWlsZWFnZSAhPSAnJyAmJiB2YWx1ZXMuY3VycmVudF9taWxlYWdlID4gNTAwMCA/IDAgOiAxXG4gICAgICAgIGNvbnN0IHRvdGFsID0gYSArIGIgKyBjXG4gICAgICAgIGNvbnNvbGUubG9nKHRvdGFsKVxuICAgICAgICByZXR1cm4gdG90YWxcbiAgICB9XG5cbiAgICBjb25zdCBvbkhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcblxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKT0+IHtcbiAgICAgICAgdG9nZ2xlQ29tcGxldGVkKClcbiAgICB9LCBbdmFsdWVzXSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTEwIHB4LTEwIGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZCBiZy13aGl0ZSBzaGFkb3ctbGdcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1pbml0aWFsIHNlbGYtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHsgdG9nZ2xlQ29tcGxldGVkKCkgPCAxIHx8IHByb2dyZXNzID09PSB0cnVlID8gPGRpdiBjbGFzc05hbWU9XCJweC00IHB5LTIgcm91bmRlZCBiZy1ncmVlbi01MDAgbS01IHRleHQtMnhsIHRleHQtMnhsIHRleHQtd2hpdGVcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmNoZWNrPC9pPjwvZGl2PiA6IDxkaXYgY2xhc3NOYW1lPVwicHgtNSBweS0yIHJvdW5kZWQgYmctZ3JheS0zMDAgbS01IHRleHQtMnhsXCI+NDwvZGl2PiB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtYXV0byBzZWxmLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtZ3JheS03MDBcIj5TZXJ2aWNlIGRldGFpbDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS03MDBcIj5BZGRpdGlvbmFsIFNlcnZpY2UgRGV0YWlsczwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWluaXRpYWwgcC01IHNlbGYtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBvbkNsaWNrPXtwcmV2aW91c1N0ZXB9IHRvPVwiI1wiIGNsYXNzTmFtZT1cInB4LTUgcHktMiBiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIHJvdW5kZWQgcm91bmRlZC1yLW5vbmUgbXItMVwiPlByZXZpb3VzPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgeyB0b2dnbGVDb21wbGV0ZWQoKSA9PT0gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJweC01IHB5LTIgYmctZ3JlZW4tNTAwIGhvdmVyOmJnLWdyZWVuLTYwMCB0ZXh0LXdoaXRlIHJvdW5kZWQgcm91bmRlZC1sLW5vbmVcIj5TYXZlIFZlaGljbGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJweC01IGN1cnNvci1ub3QtYWxsb3dlZCBweS0yIGJnLWdyYXktMzAwIGhvdmVyOmJnLWdyYXktNDAwIHRleHQtZ3JheS03MDAgcm91bmRlZFwiPlNhdmUgVmVoaWNsZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTUgYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInR5cGVcIj5EYXRlIFB1cmNoYXNlZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXIgbmFtZT1cImRhdGVfcHVyY2hhc2VkXCIgdmFsdWU9e2RhdGVQdXJjaGFzZWQgPyBkYXRlUHVyY2hhc2VkIDogJyd9IG9uQ2hhbmdlPXtoYW5kbGVEYXRlQ2hhbmdlfSBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktMzAwIHAtMiByb3VuZGVkIG15LTMgYmxvY2sgdy1mdWxsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0eXBlXCI+TGFzdCBTZXJ2aWNlZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXIgbmFtZT1cImxhc3Rfc2VydmljZWRcIiB2YWx1ZT17bGFzdFNlcnZlZCA/IGxhc3RTZXJ2ZWQgOiAnJ30gb25DaGFuZ2U9e2hhbmRsZVNlcnZpY2VkQ2hhbmdlfSBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktMzAwIHAtMiByb3VuZGVkIG15LTMgYmxvY2sgdy1mdWxsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0eXBlXCI+Q3VycmVudCBNaWxlYWdlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJjdXJyZW50X21pbGVhZ2VcIiB2YWx1ZT17dmFsdWVzLmN1cnJlbnRfbWlsZWFnZSA/IHZhbHVlcy5jdXJyZW50X21pbGVhZ2UgOiAnJ30gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBwLTIgcm91bmRlZCBteS0zIGJsb2NrIHctZnVsbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5leHBvcnQgY29uc3QgU3VjY2VzcyA9ICgpID0+IHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMTAgcHgtMTAgYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkIGJnLXdoaXRlIHNoYWRvdy1sZ1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBib3JkZXItYiBib3JkZXItZ3JheS0yMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWluaXRpYWwgc2VsZi1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IHB5LTIgcm91bmRlZCBiZy1ncmVlbi01MDAgbS01IHRleHQtMnhsIHRleHQtMnhsIHRleHQtd2hpdGVcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmNoZWNrPC9pPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWF1dG8gc2VsZi1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWdyYXktNzAwXCI+U3VibWl0dGVkIFZlaGljbGUgRGV0YWlsPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTcwMFwiPllvdSBoYXZlIHN1Y2Nlc3NmdWxseSBjcmVhdGVkIGEgdmVoaWNsZSBwcm9maWxlPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtaW5pdGlhbCBwLTUgc2VsZi1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIG9uQ2xpY2s9e3ByZXZpb3VzU3RlcH0gdG89XCIjXCIgY2xhc3NOYW1lPVwicHgtNSBweS0yIGJnLWdyZWVuLTUwMCBob3ZlcjpiZy1ncmVlbi02MDAgdGV4dC13aGl0ZSByb3VuZGVkXCI+Q3JlYXRlIGFub3RoZXIgdmVoaWNsZTwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTUgYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMZWZ0XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtaW5pdGlhbCBtci01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIHJvdW5kZWQtZnVsbCB0ZXh0LXdoaXRlIHRleHQtY2VudGVyIGFsaWduLW1pZGRsZVwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnIycgKyBjb252ZXJ0LmtleXdvcmQuaGV4KFwiYmxhY2tcIiksIHdpZHRoOiAnNDVweCd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+ZGlyZWN0aW9uc19jYXI8L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIwMDYgQXN0b24gTWFydGluIEN5Z25ldCBBVCBHYXNvbGluZSAxLjMgQ1ZUICg5OCBocClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjIwMDYgQXN0b24gTWFydGluIEN5Z25ldCBBVCBHYXNvbGluZSAxLjMgQ1ZUICg5OCBocCk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBwbC0xNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtaW5pdGlhbCBtci01XCI+TEFUPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1hdXRvXCI+TE5HPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHBsLTE2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1pbml0aWFsIG1yLTVcIj5WSU48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWF1dG9cIj5QbGF0ZSBOdW1iZXI8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggcGwtMTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWluaXRpYWwgbXItNVwiPkRhdGUgUHVyY2hhc2VkOiAyMDE5LTA2LTEyPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1hdXRvXCI+TGFzdCBTZXJ2aWNlZDogMjAxOS0wNi0xMjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC0xNlwiPkN1cnJlbnQgTWlsZWFnZTogODUyNDI8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9hY2NvdW50L3ZlaGljbGVzL3NjaGVkdWxlXCIgY2xhc3NOYW1lPVwicm91bmRlZCBiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMlwiPlZpZXcgU2NoZWR1bGU8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ3JlYXRhYmxlU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdC9jcmVhdGFibGUnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuZXhwb3J0IGNvbnN0IFZlaGljbGVEZXRhaWxzID0gKHtcbiAgICBwcm9ncmVzcyxcbiAgICBtYWtlcyxcbiAgICBtb2RlbHMsXG4gICAgdHJpbXMsXG4gICAgaGFuZGxlQ3JlYXRlTWFrZSxcbiAgICBzZWxlY3RNYWtlLFxuICAgIGhhbmRsZVNlbGVjdE1ha2VDaGFuZ2UsXG4gICAgaGFuZGxlQ3JlYXRlTW9kZWwsXG4gICAgc2VsZWN0TW9kZWwsXG4gICAgaGFuZGxlU2VsZWN0TW9kZWxDaGFuZ2UsXG4gICAgdmFsdWVzLFxuICAgIGhhbmRsZUNoYW5nZSxcbiAgICBoYW5kbGVDcmVhdGVUcmltLFxuICAgIHNlbGVjdFRyaW0sXG4gICAgaGFuZGxlU2VsZWN0VHJpbUNoYW5nZSxcbiAgICBuZXh0U3RlcCxcbiAgICBwcmV2aW91c1N0ZXBcbn0pID0+IHtcbiAgICBjb25zb2xlLmxvZyh2YWx1ZXMpXG5cbiAgICBjb25zdCB0b2dnbGVDb21wbGV0ZWQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGEgPSBzZWxlY3RNYWtlLnZhbHVlID8gMSA6IDBcbiAgICAgICAgY29uc3QgYiA9IHNlbGVjdE1vZGVsLnZhbHVlID8gMSA6IDBcbiAgICAgICAgY29uc3QgYyA9IHNlbGVjdFRyaW0udmFsdWUgPyAxIDogMFxuICAgICAgICBjb25zdCBkID0gdmFsdWVzLmNhcl95ZWFyID8gMSA6IDBcbiAgICAgICAgY29uc3QgdG90YWwgPSBhICsgYiArIGMgKyBkXG4gICAgICAgIGNvbnNvbGUubG9nKHRvdGFsKVxuICAgICAgICByZXR1cm4gdG90YWxcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCk9PiB7XG4gICAgICAgIHRvZ2dsZUNvbXBsZXRlZCgpXG4gICAgfSwgW3ZhbHVlc10pXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0xMCBweC0xMCBib3JkZXItYiBib3JkZXItZ3JheS0yMDBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQgYmctd2hpdGUgc2hhZG93LWxnXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtaW5pdGlhbCBzZWxmLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICB7IHRvZ2dsZUNvbXBsZXRlZCgpID09PSA0IHx8IHByb2dyZXNzID09PSB0cnVlID8gPGRpdiBjbGFzc05hbWU9XCJweC00IHB5LTIgcm91bmRlZCBiZy1ncmVlbi01MDAgbS01IHRleHQtMnhsIHRleHQtMnhsIHRleHQtd2hpdGVcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmNoZWNrPC9pPjwvZGl2PiA6IDxkaXYgY2xhc3NOYW1lPVwicHgtNSBweS0yIHJvdW5kZWQgYmctZ3JheS0zMDAgbS01IHRleHQtMnhsXCI+MjwvZGl2PiB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtYXV0byBzZWxmLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtZ3JheS03MDBcIj5DaG9vc2UgY2FyIGRldGFpbHM8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNzAwXCI+UHJvdmlkZSBhdCBsZWFzdCB0aGUgY2FyIG1ha2UgYW5kIGNhciBtb2RlbC48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1pbml0aWFsIHAtNSBzZWxmLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgb25DbGljaz17cHJldmlvdXNTdGVwfSB0bz1cIiNcIiBjbGFzc05hbWU9XCJweC01IHB5LTIgYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSByb3VuZGVkIHJvdW5kZWQtci1ub25lIG1yLTFcIj5QcmV2aW91czwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdG9nZ2xlQ29tcGxldGVkKCkgPT09IDQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgb25DbGljaz17bmV4dFN0ZXB9IHRvPVwiI1wiIGNsYXNzTmFtZT1cInB4LTUgcHktMiBiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIHJvdW5kZWQgcm91bmRlZC1sLW5vbmVcIj5OZXh0PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB4LTUgY3Vyc29yLW5vdC1hbGxvd2VkIHB5LTIgYmctZ3JheS0zMDAgaG92ZXI6YmctZ3JheS00MDAgdGV4dC1ncmF5LTcwMCByb3VuZGVkXCI+TmV4dDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNSBibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidHlwZVwiPkNhciBNYWtlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3JlYXRhYmxlU2VsZWN0IG9uQ3JlYXRlT3B0aW9uPXtoYW5kbGVDcmVhdGVNYWtlfSBjbGFzc05hbWU9XCJteS0zXCIgdmFsdWU9e3NlbGVjdE1ha2V9IG9uQ2hhbmdlPXtoYW5kbGVTZWxlY3RNYWtlQ2hhbmdlfSBuYW1lPVwibWFrZV9pZFwiIG9wdGlvbnM9e21ha2VzfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInR5cGVcIj5DYXIgTW9kZWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDcmVhdGFibGVTZWxlY3Qgb25DcmVhdGVPcHRpb249e2hhbmRsZUNyZWF0ZU1vZGVsfSBjbGFzc05hbWU9XCJteS0zXCIgdmFsdWU9e3NlbGVjdE1vZGVsfSBvbkNoYW5nZT17aGFuZGxlU2VsZWN0TW9kZWxDaGFuZ2V9IG5hbWU9XCJtb2RlbF9pZFwiIG9wdGlvbnM9e21vZGVsc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0eXBlXCI+Q2FyIFRyaW08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDcmVhdGFibGVTZWxlY3Qgb25DcmVhdGVPcHRpb249e2hhbmRsZUNyZWF0ZVRyaW19IGNsYXNzTmFtZT1cIm15LTNcIiB2YWx1ZT17c2VsZWN0VHJpbX0gb25DaGFuZ2U9e2hhbmRsZVNlbGVjdFRyaW1DaGFuZ2V9IG5hbWU9XCJ0cmltX2lkXCIgb3B0aW9ucz17dHJpbXN9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidHlwZVwiPlllYXIgTW9kZWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjYXJfeWVhclwiIHZhbHVlPXt2YWx1ZXMuY2FyX3llYXIgPyB2YWx1ZXMuY2FyX3llYXIgOiAnJ30gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBwLTIgcm91bmRlZCBteS0zIGJsb2NrIHctZnVsbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgR29vZ2xlTWFwIGZyb20gXCJyZWFjdC1nb29nbGUtbWFwXCI7XG5pbXBvcnQgUmVhY3RHb29nbGVNYXBMb2FkZXIgZnJvbSBcInJlYWN0LWdvb2dsZS1tYXBzLWxvYWRlclwiO1xuaW1wb3J0IFJlYWN0R29vZ2xlUGxhY2VzU3VnZ2VzdCBmcm9tIFwicmVhY3QtZ29vZ2xlLXBsYWNlcy1zdWdnZXN0XCI7XG5pbXBvcnQge1xuICAgIE1BUFNfQVBJX0tFWSxcbiAgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuZXhwb3J0IGNvbnN0IFZlaGljbGVMb2NhdGlvbiA9ICh7bmV4dFN0ZXAsIHR4dFNlYXJjaCwgaGFuZGxlQ2hhbmdlLCBoYW5kbGVNYXJrZXJDaGFuZ2UsIGhhbmRsZVNlbGVjdFN1Z2dlc3QsIGhhbmRsZVNlYXJjaCwgbGF0aXR1ZGUsIGxvbmdpdHVkZSwgdmFsdWVzLCBwcm9ncmVzc30gKSA9PiB7XG5cbiAgICBjb25zb2xlLmxvZyh2YWx1ZXMpXG4gICAgY29uc3QgdG9nZ2xlQ29tcGxldGVkID0gKCkgPT4ge1xuICAgICAgICBpZih0eHRTZWFyY2ggPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKT0+IHtcbiAgICAgICAgdG9nZ2xlQ29tcGxldGVkKClcbiAgICB9LCBbdmFsdWVzXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMTAgcHgtMTAgYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQgYmctd2hpdGUgc2hhZG93LWxnXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWluaXRpYWwgc2VsZi1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgeyB0b2dnbGVDb21wbGV0ZWQoKSA9PT0gdHJ1ZSB8fCBwcm9ncmVzcyA9PT0gdHJ1ZSA/IDxkaXYgY2xhc3NOYW1lPVwicHgtNCBweS0yIHJvdW5kZWQgYmctZ3JlZW4tNTAwIG0tNSB0ZXh0LTJ4bCB0ZXh0LTJ4bCB0ZXh0LXdoaXRlXCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5jaGVjazwvaT48L2Rpdj4gOiA8ZGl2IGNsYXNzTmFtZT1cInB4LTUgcHktMiByb3VuZGVkIGJnLWdyYXktMzAwIG0tNSB0ZXh0LTJ4bFwiPjE8L2Rpdj4gfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1hdXRvIHNlbGYtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWdyYXktNzAwXCI+U3BlY2lmeSB5b3VyIGNhcidzIGxvY2F0aW9uPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNzAwXCI+V2Ugd2lsbCB1c2UgdGhpcyBpbmZvcm1hdGlvbiB0byBlbmhhbmNlIHlvdXIgZXhwZXJpZW5jZTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1pbml0aWFsIHAtNSBzZWxmLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICB7IHRvZ2dsZUNvbXBsZXRlZCgpID09PSB0cnVlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIjXCIgb25DbGljaz17bmV4dFN0ZXB9IGNsYXNzTmFtZT1cInB4LTUgcHktMiBiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIHJvdW5kZWRcIj5OZXh0PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJweC01IGN1cnNvci1ub3QtYWxsb3dlZCBweS0yIGJnLWdyYXktMzAwIGhvdmVyOmJnLWdyYXktNDAwIHRleHQtZ3JheS03MDAgcm91bmRlZFwiPk5leHQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTUgYmxvY2tcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZCBteS0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdEdvb2dsZU1hcExvYWRlclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogTUFQU19BUElfS0VZLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlicmFyaWVzOiBcInBsYWNlcyxnZW9jb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXtnb29nbGVNYXBzID0+XG4gICAgICAgICAgICAgICAgICAgICAgICBnb29nbGVNYXBzICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdEdvb2dsZVBsYWNlc1N1Z2dlc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGlvblJlcXVlc3Q9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogdHh0U2VhcmNoIHx8IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdvb2dsZU1hcHM9e2dvb2dsZU1hcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3RTdWdnZXN0PXtoYW5kbGVTZWxlY3RTdWdnZXN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwLTIgYm9yZGVyLWdyYXktMzAwIGlubGluZS1mbGV4IHRleHQtZ3JheS00MDAgYm9yZGVyLXIgZmxleC1pbml0aWFsXCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5sb2NhdGlvbl9vbjwvaT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIlNlYXJjaCBzaG9wIGxvY2F0aW9uXCIgdHlwZT1cInRleHRcIiBuYW1lPVwidHh0U2VhcmNoXCIgdmFsdWU9e3R4dFNlYXJjaCB8fCAnJ30gY2xhc3NOYW1lPVwicC0yIGZsZXgtMVwiIG9uQ2hhbmdlPXtoYW5kbGVTZWFyY2h9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0R29vZ2xlUGxhY2VzU3VnZ2VzdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQgbXktM1wiPlxuICAgIFxuICAgICAgICAgICAgICAgICAgICA8UmVhY3RHb29nbGVNYXBMb2FkZXJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IE1BUFNfQVBJX0tFWSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpYnJhcmllczogXCJwbGFjZXMsZ2VvY29kZVwiXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcj17Z29vZ2xlTWFwcyA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgZ29vZ2xlTWFwcyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbGF0aXR1ZGUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvbmdpdHVkZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNTB2aFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdvb2dsZU1hcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9GaXRCb3VuZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnb29nbGVNYXBzPXtnb29nbGVNYXBzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHpvb209ezE2fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhdDogbGF0aXR1ZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsbmc6IGxvbmdpdHVkZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTG9hZGVkOiAoZ29vZ2xlTWFwcywgbWFwLCBtYXJrZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNldCBNYXJrZXIgYW5pbWF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc2V0QW5pbWF0aW9uKGdvb2dsZU1hcHMuQW5pbWF0aW9uLkJPVU5DRSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlciwgJ2RyYWdlbmQnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVNYXJrZXJDaGFuZ2UoZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIClcbn0gIiwiZXhwb3J0IHsgVmVoaWNsZUxvY2F0aW9uIH0gZnJvbSAnLi9WZWhpY2xlTG9jYXRpb24nXG5leHBvcnQgeyBWZWhpY2xlRGV0YWlscyB9IGZyb20gJy4vVmVoaWNsZURldGFpbHMnXG5leHBvcnQgeyBBZGRpdGlvbmFsRGV0YWlscyB9IGZyb20gJy4vQWRkaXRpb25hbERldGFpbHMnXG5leHBvcnQgeyBTZXJ2aWNlRGV0YWlscyB9IGZyb20gJy4vU2VydmljZURldGFpbHMnXG5leHBvcnQgeyBTdWNjZXNzIH0gZnJvbSAnLi9TdWNjZXNzJyIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IHZlaGljbGVBY3Rpb25zIGFzIGFjdGlvbnMgfSBmcm9tICdzdG9yZS9hY3Rpb25zJ1xuaW1wb3J0IHsgbWFrZVJlcXVlc3QgfSBmcm9tICdzdG9yZS9hY3Rpb24tY3JlYXRvcnMvcmVxdWVzdHMnXG5cbmV4cG9ydCBjb25zdCBnZXRWZWhpY2xlcyA9ICgpID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkaXNwYXRjaChcbiAgICBtYWtlUmVxdWVzdCgnZ2V0LXZlaGljbGVzJywgKCkgPT4gYXhpb3MuZ2V0KGAvYXBpL3ZlaGljbGVzYCkpXG4gIClcblxuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogYWN0aW9ucy5BRERfVkVISUNMRVMsXG4gICAgdmVoaWNsZXM6IHJlc3BvbnNlLmRhdGEuZGF0YVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgZ2V0VmVoaWNsZSA9IGlkID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkaXNwYXRjaChcbiAgICBtYWtlUmVxdWVzdChgZ2V0LXZlaGljbGUtJHtpZH1gLCAoKSA9PiBheGlvcy5nZXQoYC9hcGkvdmVoaWNsZXMvJHtpZH1gKSlcbiAgKVxuXG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBhY3Rpb25zLkdFVF9WRUhJQ0xFLFxuICAgIHZlaGljbGVzOiByZXNwb25zZS5kYXRhLmRhdGFcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVZlaGljbGUgPSBkYXRhID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkaXNwYXRjaChcbiAgICBtYWtlUmVxdWVzdCgnY3JlYXRlLXZlaGljbGUnLCAoKSA9PiBheGlvcy5wb3N0KGAvYXBpL3ZlaGljbGVzYCwgZGF0YSkpXG4gIClcblxuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogYWN0aW9ucy5BRERfVkVISUNMRSxcbiAgICB2ZWhpY2xlczogcmVzcG9uc2UuZGF0YS5kYXRhXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVWZWhpY2xlID0gZGF0YSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZGlzcGF0Y2goXG4gICAgbWFrZVJlcXVlc3QoYHVwZGF0ZS12ZWhpY2xlLSR7ZGF0YS5pZH1gLCAoKSA9PlxuICAgICAgYXhpb3MucHV0KGAvYXBpL3ZlaGljbGVzLyR7ZGF0YS5pZH1gLCBkYXRhKVxuICAgIClcbiAgKVxuXG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBhY3Rpb25zLlVQREFURV9WRUhJQ0xFLFxuICAgIHZlaGljbGVzOiByZXNwb25zZS5kYXRhLmRhdGFcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVZlaGljbGUgPSBpZCA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XG4gIGF3YWl0IGRpc3BhdGNoKFxuICAgIG1ha2VSZXF1ZXN0KGB1cGRhdGUtdmVoaWNsZS0ke2lkfWAsICgpID0+IGF4aW9zLmRlbGV0ZShgL2FwaS92ZWhpY2xlcy8ke2lkfWApKVxuICApXG5cbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IGFjdGlvbnMuREVMRVRFX1ZFSElDTEUsXG4gICAgaWRcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IHNhdmVWZWhpY2xlID0gdmVoaWNsZURhdGEgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICBjb25zdCB7IGlkIH0gPSB2ZWhpY2xlRGF0YVxuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZGlzcGF0Y2goXG4gICAgbWFrZVJlcXVlc3QoJ3NhdmUtdmVoaWNsZS1zZXR0aW5ncycsICgpID0+XG4gICAgICBheGlvcy5wdXQoYC9hcGkvdmVoaWNsZXMvJHtpZH1gLCB2ZWhpY2xlRGF0YSlcbiAgICApXG4gIClcblxuICByZXR1cm4gcmVzcG9uc2Vcbn1cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9