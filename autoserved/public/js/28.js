(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./resources/assets/js/pages/Series/Series.jsx":
/*!*****************************************************!*\
  !*** ./resources/assets/js/pages/Series/Series.jsx ***!
  \*****************************************************/
/*! exports provided: useForm, ModalComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useForm", function() { return useForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
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
/* harmony import */ var store_selectors_series__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! store/selectors/series */ "./resources/assets/js/store/selectors/series.js");
/* harmony import */ var store_selectors_session__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! store/selectors/session */ "./resources/assets/js/store/selectors/session/index.js");
/* harmony import */ var store_action_creators_series__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! store/action-creators/series */ "./resources/assets/js/store/action-creators/series/index.js");
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
  }, "Car Serie Name"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
    type: "text",
    name: "name",
    className: "w-full p-2 border",
    onChange: handleChange,
    value: values.name
  }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "block w-full py-2"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
    htmlFor: "name"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "inline-block mb-2"
  }, "Car Model"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
    type: "text",
    name: "model_id",
    className: "w-full p-2 border",
    onChange: handleChange,
    value: values.model_id
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
    dispatch(Object(store_action_creators_series__WEBPACK_IMPORTED_MODULE_12__["createSerie"])(values));
    dispatch(Object(store_action_creators_series__WEBPACK_IMPORTED_MODULE_12__["getSeries"])());
    hideModal();
    Alert('success', 'Car Serie created!');
  }
})), Object(redux_form__WEBPACK_IMPORTED_MODULE_4__["reduxForm"])({
  form: 'add-car-serie'
}))(ModalComponent);
const UpdateModal = Object(recompose__WEBPACK_IMPORTED_MODULE_3__["compose"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])((state, ownProps) => ({
  initialValues: ownProps
}), (dispatch, {
  hideModal
}) => ({
  onSubmit: values => {
    dispatch(Object(store_action_creators_series__WEBPACK_IMPORTED_MODULE_12__["updateSerie"])(values));
    dispatch(Object(store_action_creators_series__WEBPACK_IMPORTED_MODULE_12__["getSeries"])());
    hideModal();
    Alert('success', 'Car Serie updated!');
  }
})), Object(redux_form__WEBPACK_IMPORTED_MODULE_4__["reduxForm"])({
  form: 'update-car-serie'
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

function SeriesComponent({
  getSeries,
  deleteSerie,
  series,
  user
}) {
  const {
    user_type
  } = user;

  if (user_type != 'admin') {
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Redirect"], {
      from: "/account",
      to: "/account/overview"
    });
  }

  const {
    showModal
  } = Object(react_context_modals__WEBPACK_IMPORTED_MODULE_7__["useModal"])();

  const populateSeries = async () => {
    await getSeries();
  };

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(() => {
    populateSeries();
  }, []);
  console.log(series);
  const columns = react__WEBPACK_IMPORTED_MODULE_6___default.a.useMemo(() => [{
    Header: 'Car Serie Name',
    accessor: 'name',
    sortable: true
  }, {
    id: "vehicle",
    accessor: 'type_id',
    Cell: row => {
      const type_id = row.row.original.type_id;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, type_id == 1 ? 'Car' : 'Truck');
    },
    Header: 'Vehicle Type',
    sortable: false,
    width: 45
  }, {
    id: "action",
    accessor: 'id',
    Cell: row => {
      const id = row.row.original.id;
      const name = row.row.original.name;
      const model_id = row.row.original.model_id;
      const type_id = row.row.original.type_id;
      const header = 'Update Car Serie';
      const className = "rounded-lg hidden md:block w-1/2 lg:w-1/3 overflow-visible";
      const update = "Update Car Serie";
      console.log(row);
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "float-left"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Link"], {
        className: "bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-1 px-4 rounded",
        onClick: () => showModal(UpdateModal, {
          id,
          header,
          name,
          type_id,
          model_id,
          className,
          update
        }),
        to: "#"
      }, "Update"), ' ', react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Link"], {
        className: "bg-red-500 hover:bg-red-700 text-white text-xs font-bold py-1 px-4 rounded",
        onClick: () => deleteSerie(id),
        to: "#"
      }, "Delete"));
    },
    Header: 'Action',
    sortable: false,
    width: 45
  }], []);
  const [filteredData, setFilteredData] = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(series);

  const handleSetData = series => {
    setFilteredData(series);
  };

  const header = "Add New Car Serie";
  const className = "rounded-lg hidden md:block w-1/2 lg:w-1/3 overflow-visible";
  const create = "Create New Car Serie";
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "bb-white px-10 py-5"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_8__["PageHeader"], {
    title: "Car Series",
    subTitle: "Master List"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Link"], {
    className: "ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center",
    onClick: () => showModal(CreateModal, {
      header,
      className,
      create
    }),
    to: "#"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
    className: "material-icons"
  }, "add"), " Add New")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_8__["DataTable"], {
    columns: columns,
    data: series
  })));
}

__signature__(SeriesComponent, "useModal{{ showModal }}\nuseEffect{}\nuseMemo{columns}\nuseState{[filteredData, setFilteredData](series)}", () => [react_context_modals__WEBPACK_IMPORTED_MODULE_7__["useModal"]]);

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(state => ({
  series: Object(store_selectors_series__WEBPACK_IMPORTED_MODULE_10__["selectAllSeries"])(state),
  user: Object(store_selectors_session__WEBPACK_IMPORTED_MODULE_11__["currentUserSelector"])(state)
}), dispatch => ({
  getSeries: () => dispatch(Object(store_action_creators_series__WEBPACK_IMPORTED_MODULE_12__["getSeries"])()),
  deleteSerie: id => {
    sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.value) {
        dispatch(Object(store_action_creators_series__WEBPACK_IMPORTED_MODULE_12__["deleteSerie"])(id));
        Alert('success', 'Car Serie successfully deleted!');
      }
    });
  }
}))(SeriesComponent);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useForm, "useForm", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Series/Series.jsx");
  reactHotLoader.register(ModalComponent, "ModalComponent", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Series/Series.jsx");
  reactHotLoader.register(CreateModal, "CreateModal", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Series/Series.jsx");
  reactHotLoader.register(UpdateModal, "UpdateModal", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Series/Series.jsx");
  reactHotLoader.register(Toast, "Toast", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Series/Series.jsx");
  reactHotLoader.register(Alert, "Alert", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Series/Series.jsx");
  reactHotLoader.register(SeriesComponent, "SeriesComponent", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Series/Series.jsx");
  reactHotLoader.register(_default, "default", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Series/Series.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/store/action-creators/series/index.js":
/*!*******************************************************************!*\
  !*** ./resources/assets/js/store/action-creators/series/index.js ***!
  \*******************************************************************/
/*! exports provided: saveSerie, getSeries, createSerie, getSerie, updateSerie, deleteSerie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _series__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./series */ "./resources/assets/js/store/action-creators/series/series.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveSerie", function() { return _series__WEBPACK_IMPORTED_MODULE_0__["saveSerie"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSeries", function() { return _series__WEBPACK_IMPORTED_MODULE_0__["getSeries"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSerie", function() { return _series__WEBPACK_IMPORTED_MODULE_0__["createSerie"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSerie", function() { return _series__WEBPACK_IMPORTED_MODULE_0__["getSerie"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateSerie", function() { return _series__WEBPACK_IMPORTED_MODULE_0__["updateSerie"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteSerie", function() { return _series__WEBPACK_IMPORTED_MODULE_0__["deleteSerie"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



/***/ }),

/***/ "./resources/assets/js/store/action-creators/series/series.js":
/*!********************************************************************!*\
  !*** ./resources/assets/js/store/action-creators/series/series.js ***!
  \********************************************************************/
/*! exports provided: getSeries, getSerie, createSerie, updateSerie, deleteSerie, saveSerie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSeries", function() { return getSeries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSerie", function() { return getSerie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSerie", function() { return createSerie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSerie", function() { return updateSerie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteSerie", function() { return deleteSerie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveSerie", function() { return saveSerie; });
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




const getSeries = () => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])('get-series', () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/car-series")));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["serieActions"].ADD_SERIES,
    series: response.data.data
  });
};
const getSerie = id => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])("get-serie-".concat(id), () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/car-series/".concat(id))));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["serieActions"].GET_SERIE,
    series: response.data.data
  });
};
const createSerie = data => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])('create-serie', () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/car-series", data)));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["serieActions"].ADD_SERIE,
    series: response.data.data
  });
};
const updateSerie = data => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])("update-serie-".concat(data.id), () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/car-series/".concat(data.id), data)));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["serieActions"].UPDATE_SERIE,
    series: response.data.data
  });
};
const deleteSerie = id => async dispatch => {
  await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])("update-serie-".concat(id), () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("/api/car-series/".concat(id))));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["serieActions"].DELETE_SERIE,
    id
  });
};
const saveSerie = serieData => async dispatch => {
  const {
    id
  } = serieData;
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])('save-serie-settings', () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/car-series/".concat(id), serieData)));
  return response;
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getSeries, "getSeries", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/series/series.js");
  reactHotLoader.register(getSerie, "getSerie", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/series/series.js");
  reactHotLoader.register(createSerie, "createSerie", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/series/series.js");
  reactHotLoader.register(updateSerie, "updateSerie", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/series/series.js");
  reactHotLoader.register(deleteSerie, "deleteSerie", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/series/series.js");
  reactHotLoader.register(saveSerie, "saveSerie", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/series/series.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/store/selectors/series.js":
/*!*******************************************************!*\
  !*** ./resources/assets/js/store/selectors/series.js ***!
  \*******************************************************/
/*! exports provided: selectAllSeries, selectSerieDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllSeries", function() { return selectAllSeries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSerieDetails", function() { return selectSerieDetails; });
/* harmony import */ var normalizr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalizr */ "./node_modules/normalizr/dist/normalizr.es.js");
/* harmony import */ var store_schemas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! store/schemas */ "./resources/assets/js/store/schemas.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



const selectAllSeries = state => {
  const dnEntities = Object(normalizr__WEBPACK_IMPORTED_MODULE_0__["denormalize"])({
    series: Object.keys(state.entities.series)
  }, store_schemas__WEBPACK_IMPORTED_MODULE_1__["entities"], state.entities);
  return dnEntities.series;
};
const selectSerieDetails = (state, slug) => {
  const dnEntities = Object(normalizr__WEBPACK_IMPORTED_MODULE_0__["denormalize"])({
    series: [slug]
  }, store_schemas__WEBPACK_IMPORTED_MODULE_1__["entities"], state.entities);
  return dnEntities.series;
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(selectAllSeries, "selectAllSeries", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/selectors/series.js");
  reactHotLoader.register(selectSerieDetails, "selectSerieDetails", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/selectors/series.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL1Nlcmllcy9TZXJpZXMuanN4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvYWN0aW9uLWNyZWF0b3JzL3Nlcmllcy9zZXJpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9zZWxlY3RvcnMvc2VyaWVzLmpzIl0sIm5hbWVzIjpbInVzZUZvcm0iLCJpbml0aWFsVmFsdWVzIiwib25TdWJtaXQiLCJ2YWxpZGF0ZSIsInZhbHVlcyIsInNldFZhbHVlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJ0b3VjaGVkVmFsdWVzIiwic2V0VG91Y2hlZFZhbHVlcyIsImVycm9ycyIsInNldEVycm9ycyIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJuYW1lIiwiaGFuZGxlQmx1ciIsImUiLCJoYW5kbGVTdWJtaXQiLCJvcHRpb25UeXBlcyIsImxhYmVsIiwiY29uc29sZSIsImxvZyIsInR5cGVfaWQiLCJuZXdMYWJlbCIsImZpbHRlciIsIm9wdGlvbiIsInNlbGVjdCIsInNldFNlbGVjdCIsImhhbmRsZVNlbGVjdENoYW5nZSIsIk1vZGFsQ29tcG9uZW50IiwiaGVhZGVyIiwibW9kZWxfaWQiLCJpZCIsImNyZWF0ZSIsInVwZGF0ZSIsIkNyZWF0ZU1vZGFsIiwiY29tcG9zZSIsImNvbm5lY3QiLCJzdGF0ZSIsIm93blByb3BzIiwiZGlzcGF0Y2giLCJoaWRlTW9kYWwiLCJjcmVhdGVTZXJpZUFjdGlvbiIsImdldFNlcmllc0FjdGlvbiIsIkFsZXJ0IiwicmVkdXhGb3JtIiwiZm9ybSIsIlVwZGF0ZU1vZGFsIiwidXBkYXRlU2VyaWVBY3Rpb24iLCJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidHlwZSIsInRpdGxlIiwiZmlyZSIsIlNlcmllc0NvbXBvbmVudCIsImdldFNlcmllcyIsImRlbGV0ZVNlcmllIiwic2VyaWVzIiwidXNlciIsInVzZXJfdHlwZSIsInNob3dNb2RhbCIsInVzZU1vZGFsIiwicG9wdWxhdGVTZXJpZXMiLCJ1c2VFZmZlY3QiLCJjb2x1bW5zIiwidXNlTWVtbyIsIkhlYWRlciIsImFjY2Vzc29yIiwic29ydGFibGUiLCJDZWxsIiwicm93Iiwib3JpZ2luYWwiLCJ3aWR0aCIsImNsYXNzTmFtZSIsImZpbHRlcmVkRGF0YSIsInNldEZpbHRlcmVkRGF0YSIsImhhbmRsZVNldERhdGEiLCJzZWxlY3RBbGxTZXJpZXMiLCJjdXJyZW50VXNlclNlbGVjdG9yIiwidGV4dCIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwidGhlbiIsInJlc3VsdCIsImRlbGV0ZVNlcmllQWN0aW9uIiwicmVzcG9uc2UiLCJtYWtlUmVxdWVzdCIsImF4aW9zIiwiZ2V0IiwiYWN0aW9ucyIsIkFERF9TRVJJRVMiLCJkYXRhIiwiZ2V0U2VyaWUiLCJHRVRfU0VSSUUiLCJjcmVhdGVTZXJpZSIsInBvc3QiLCJBRERfU0VSSUUiLCJ1cGRhdGVTZXJpZSIsInB1dCIsIlVQREFURV9TRVJJRSIsImRlbGV0ZSIsIkRFTEVURV9TRVJJRSIsInNhdmVTZXJpZSIsInNlcmllRGF0YSIsImRuRW50aXRpZXMiLCJkZW5vcm1hbGl6ZSIsIk9iamVjdCIsImtleXMiLCJlbnRpdGllcyIsImVudGl0aWVzU2NoZW1hIiwic2VsZWN0U2VyaWVEZXRhaWxzIiwic2x1ZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBRU8sTUFBTUEsT0FBTyxHQUFHLENBQUM7QUFBRUMsZUFB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RSxLQUFLLENBQUM2RSxRQUhzQixDQUE5QjtBQU1BLFNBQU9KLFVBQVUsQ0FBQ2pELE1BQWxCO0FBQ0QsQ0FUTTs7Ozs7Ozs7OzswQkFWTW9CLGU7MEJBVUFtQyxrQiIsImZpbGUiOiJqcy8yOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWxtZXQgZnJvbSAncmVhY3QtaGVsbWV0J1xuaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gJ3JlY29tcG9zZSdcbmltcG9ydCB7IHJlZHV4Rm9ybSwgRmllbGQgfSBmcm9tICdyZWR1eC1mb3JtJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VNb2RhbCB9IGZyb20gJ3JlYWN0LWNvbnRleHQtbW9kYWxzJ1xuaW1wb3J0IHsgTmV1dHJhbEJ1dHRvbiwgUGFnZUhlYWRlciwgRGF0YVRhYmxlIH0gZnJvbSAnY29tcG9uZW50cydcblxuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXG5pbXBvcnQgeyBzZWxlY3RBbGxTZXJpZXMgfSBmcm9tICdzdG9yZS9zZWxlY3RvcnMvc2VyaWVzJ1xuaW1wb3J0IHsgY3VycmVudFVzZXJTZWxlY3RvciB9IGZyb20gJ3N0b3JlL3NlbGVjdG9ycy9zZXNzaW9uJ1xuaW1wb3J0IHtcbiAgZ2V0U2VyaWVzIGFzIGdldFNlcmllc0FjdGlvbixcbiAgdXBkYXRlU2VyaWUgYXMgdXBkYXRlU2VyaWVBY3Rpb24sXG4gIGNyZWF0ZVNlcmllIGFzIGNyZWF0ZVNlcmllQWN0aW9uLFxuICBkZWxldGVTZXJpZSBhcyBkZWxldGVTZXJpZUFjdGlvblxufSBmcm9tICdzdG9yZS9hY3Rpb24tY3JlYXRvcnMvc2VyaWVzJ1xuaW1wb3J0IHsgTGluaywgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IFNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QnXG5cbmV4cG9ydCBjb25zdCB1c2VGb3JtID0gKHsgaW5pdGlhbFZhbHVlcywgb25TdWJtaXQsIHZhbGlkYXRlIH0pID0+IHtcbiAgICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gUmVhY3QudXNlU3RhdGUoaW5pdGlhbFZhbHVlcyB8fCB7fSlcbiAgICBjb25zdCBbdG91Y2hlZFZhbHVlcywgc2V0VG91Y2hlZFZhbHVlc10gPSBSZWFjdC51c2VTdGF0ZSh7fSlcbiAgICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gUmVhY3QudXNlU3RhdGUoe30pXG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXRcbiAgICAgIGNvbnN0IHZhbHVlID0gdGFyZ2V0LnZhbHVlXG4gICAgICBjb25zdCBuYW1lID0gdGFyZ2V0Lm5hbWVcbiAgICAgIHNldFZhbHVlcyh7XG4gICAgICAgIC4uLnZhbHVlcyxcbiAgICAgICAgW25hbWVdOiB2YWx1ZVxuICAgICAgfSlcbiAgICB9XG4gIFxuICAgIGNvbnN0IGhhbmRsZUJsdXIgPSBldmVudCA9PiB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXRcbiAgICAgIGNvbnN0IG5hbWUgPSB0YXJnZXQubmFtZVxuICAgICAgc2V0VG91Y2hlZFZhbHVlcyh7XG4gICAgICAgIC4uLnRvdWNoZWRWYWx1ZXMsXG4gICAgICAgIFtuYW1lXTogdHJ1ZVxuICAgICAgfSlcbiAgICAgIGNvbnN0IGUgPSB2YWxpZGF0ZSh2YWx1ZXMpXG4gICAgICBzZXRFcnJvcnMoe1xuICAgICAgICAuLi5lcnJvcnMsXG4gICAgICAgIC4uLmVcbiAgICAgIH0pXG4gICAgfVxuICBcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBldmVudCA9PiB7XG5cbiAgICAgIGNvbnN0IGUgPSB2YWxpZGF0ZSh2YWx1ZXMpXG4gICAgICBzZXRFcnJvcnMoe1xuICAgICAgICAuLi5lcnJvcnMsXG4gICAgICAgIC4uLmVcbiAgICAgIH0pXG4gIFxuICAgICAgb25TdWJtaXQoeyAuLi52YWx1ZXMsIGUgfSlcbiAgICB9XG4gICAgY29uc3Qgb3B0aW9uVHlwZXMgPSBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnQ2FyJyxcbiAgICAgICAgdmFsdWU6IDEsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogJ1RydWNrJyxcbiAgICAgICAgdmFsdWU6IDIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogJ01vdG9yY3ljbGUnLFxuICAgICAgICB2YWx1ZTogMyxcbiAgICAgIH1cbiAgICBdXG4gICAgY29uc29sZS5sb2codmFsdWVzLnR5cGVfaWQpXG4gICAgY29uc3QgbmV3TGFiZWwgPSBvcHRpb25UeXBlcy5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi52YWx1ZSA9PSB2YWx1ZXMudHlwZV9pZClcblxuICAgIGNvbnNvbGUubG9nKG5ld0xhYmVsWzBdKVxuICAgIGNvbnN0IFtzZWxlY3QsIHNldFNlbGVjdF0gPSBSZWFjdC51c2VTdGF0ZShuZXdMYWJlbFswXSlcbiAgICBjb25zb2xlLmxvZyhzZWxlY3QpXG4gICAgY29uc3QgaGFuZGxlU2VsZWN0Q2hhbmdlID0gZXZlbnQgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBldmVudC52YWx1ZVxuICAgICAgY29uc3QgbGFiZWwgPSBldmVudC5sYWJlbFxuICAgICAgY29uc3QgbmFtZSA9ICd0eXBlX2lkJ1xuICAgICAgc2V0VmFsdWVzKHtcbiAgICAgICAgLi4udmFsdWVzLFxuICAgICAgICBbbmFtZV06IHZhbHVlXG4gICAgICB9KVxuICAgICAgc2V0U2VsZWN0KHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLCBsYWJlbDogbGFiZWxcbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZXMsXG4gICAgICB0b3VjaGVkVmFsdWVzLFxuICAgICAgZXJyb3JzLFxuICAgICAgaGFuZGxlQ2hhbmdlLFxuICAgICAgaGFuZGxlU3VibWl0LFxuICAgICAgaGFuZGxlQmx1cixcbiAgICAgIGhhbmRsZVNlbGVjdENoYW5nZSxcbiAgICAgIG9wdGlvblR5cGVzLFxuICAgICAgc2VsZWN0XG4gICAgfVxuICB9XG5cbmV4cG9ydCBjb25zdCBNb2RhbENvbXBvbmVudCA9ICh7IG9uU3VibWl0LCBpbml0aWFsVmFsdWVzIH0pID0+IHtcbiAgY29uc29sZS5sb2coaW5pdGlhbFZhbHVlcylcbiAgY29uc3QgeyB2YWx1ZXMsIHRvdWNoZWRWYWx1ZXMsIGVycm9ycywgaGFuZGxlQ2hhbmdlLCBoYW5kbGVTdWJtaXQsIGhhbmRsZUJsdXIsIGhhbmRsZVNlbGVjdENoYW5nZSwgb3B0aW9uVHlwZXMsIHNlbGVjdCB9ID0gdXNlRm9ybSh7XG4gICAgaW5pdGlhbFZhbHVlcyxcbiAgICBvblN1Ym1pdCxcbiAgICB2YWxpZGF0ZSh2YWx1ZXMpIHtcbiAgICAgIGNvbnN0IGVycm9ycyA9IHt9XG5cbiAgICAgIGlmICh2YWx1ZXMubmFtZSA9PT0gXCJcIikge1xuICAgICAgICBlcnJvcnMubmFtZSA9IFwiUGxlYXNlIHNwZWNpZnkgYSBuYW1lXCJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVycm9yc1xuICAgIH1cbiAgfSlcblxuICByZXR1cm4gKFxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC01IHBiLTUgYm9yZGVyLWJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMTAgdGV4dC1iYXNlIHRleHQtZ3JheS03MDBcIj57dmFsdWVzLmhlYWRlcn08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMTAgcHQtNSBwYi0wXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCBweS0yXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBtYi0yXCI+Q2FyIFNlcmllIE5hbWU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0yIGJvcmRlclwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHZhbHVlPXt2YWx1ZXMubmFtZX0vPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCBweS0yXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBtYi0yXCI+Q2FyIE1vZGVsPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJtb2RlbF9pZFwiIGNsYXNzTmFtZT1cInctZnVsbCBwLTIgYm9yZGVyXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gdmFsdWU9e3ZhbHVlcy5tb2RlbF9pZH0vPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmxvY2sgdy1mdWxsIHB5LTInPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInR5cGVfaWRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgbWItMlwiPlZlaGljbGUgVHlwZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8U2VsZWN0IGNsYXNzTmFtZT1cInctZnVsbFwiIHZhbHVlPXtzZWxlY3R9IG9uQ2hhbmdlPXtoYW5kbGVTZWxlY3RDaGFuZ2V9IG5hbWU9XCJ0eXBlXCIgb3B0aW9ucz17b3B0aW9uVHlwZXN9IC8+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImlkXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gdmFsdWU9e3ZhbHVlcy5pZH0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodCBweC0xMCBwYi01XCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgcC0zIGJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwXCIgdHlwZT1cInN1Ym1pdFwiPnt2YWx1ZXMuY3JlYXRlfXt2YWx1ZXMudXBkYXRlfTwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgKVxufVxuXG5jb25zdCBDcmVhdGVNb2RhbCA9IGNvbXBvc2UoXG4gIGNvbm5lY3QoXG4gICAgKHN0YXRlLCBvd25Qcm9wcykgPT4gKHtcbiAgICAgIGluaXRpYWxWYWx1ZXM6IG93blByb3BzXG4gICAgfSksXG4gICAgKGRpc3BhdGNoLCB7IGhpZGVNb2RhbCB9KSA9PiAoe1xuICAgICAgb25TdWJtaXQ6IHZhbHVlcyA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGNyZWF0ZVNlcmllQWN0aW9uKHZhbHVlcykpXG4gICAgICAgIGRpc3BhdGNoKGdldFNlcmllc0FjdGlvbigpKVxuICAgICAgICBoaWRlTW9kYWwoKVxuICAgICAgICBBbGVydCgnc3VjY2VzcycsICdDYXIgU2VyaWUgY3JlYXRlZCEnKVxuICAgICAgfVxuICAgIH0pXG4gICksXG4gIHJlZHV4Rm9ybSh7XG4gICAgZm9ybTogJ2FkZC1jYXItc2VyaWUnXG4gIH0pXG4pKE1vZGFsQ29tcG9uZW50KVxuXG5jb25zdCBVcGRhdGVNb2RhbCA9IGNvbXBvc2UoXG4gIGNvbm5lY3QoXG4gICAgKHN0YXRlLCBvd25Qcm9wcykgPT4gKHtcbiAgICAgIGluaXRpYWxWYWx1ZXM6IG93blByb3BzXG4gICAgfSksXG4gICAgKGRpc3BhdGNoLCB7IGhpZGVNb2RhbCB9KSA9PiAoe1xuICAgICAgb25TdWJtaXQ6IHZhbHVlcyA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHVwZGF0ZVNlcmllQWN0aW9uKHZhbHVlcykpXG4gICAgICAgIGRpc3BhdGNoKGdldFNlcmllc0FjdGlvbigpKVxuICAgICAgICBoaWRlTW9kYWwoKVxuICAgICAgICBBbGVydCgnc3VjY2VzcycsICdDYXIgU2VyaWUgdXBkYXRlZCEnKVxuICAgICAgfVxuICAgIH0pXG4gICksXG4gIHJlZHV4Rm9ybSh7XG4gICAgZm9ybTogJ3VwZGF0ZS1jYXItc2VyaWUnXG4gIH0pXG4pKE1vZGFsQ29tcG9uZW50KVxuXG5jb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xuICB0b2FzdDogdHJ1ZSxcbiAgcG9zaXRpb246ICd0b3AtZW5kJyxcbiAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxuICB0aW1lcjogMzAwMFxufSlcblxuY29uc3QgQWxlcnQgPSAodHlwZSwgdGl0bGUpID0+IFRvYXN0LmZpcmUoe1xuICB0eXBlOiB0eXBlLFxuICB0aXRsZTogdGl0bGVcbn0pXG5cblxuXG5mdW5jdGlvbiBTZXJpZXNDb21wb25lbnQoeyBnZXRTZXJpZXMsIGRlbGV0ZVNlcmllLCBzZXJpZXMsIHVzZXIgfSkge1xuICBjb25zdCB7IHVzZXJfdHlwZSB9ID0gdXNlclxuXG4gIGlmICh1c2VyX3R5cGUgIT0gJ2FkbWluJykge1xuICAgIHJldHVybiA8UmVkaXJlY3QgZnJvbT0nL2FjY291bnQnIHRvPVwiL2FjY291bnQvb3ZlcnZpZXdcIiAvPlxuICB9XG4gIGNvbnN0IHsgc2hvd01vZGFsIH0gPSB1c2VNb2RhbCgpXG4gIGNvbnN0IHBvcHVsYXRlU2VyaWVzID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGdldFNlcmllcygpXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHBvcHVsYXRlU2VyaWVzKClcbiAgfSwgW10pXG5cbiAgY29uc29sZS5sb2coc2VyaWVzKVxuXG4gIGNvbnN0IGNvbHVtbnMgPSBSZWFjdC51c2VNZW1vKFxuICAgICgpID0+IFtcbiAgICAgIHtcbiAgICAgICAgSGVhZGVyOiAnQ2FyIFNlcmllIE5hbWUnLFxuICAgICAgICBhY2Nlc3NvcjogJ25hbWUnLFxuICAgICAgICBzb3J0YWJsZTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwidmVoaWNsZVwiLFxuICAgICAgICBhY2Nlc3NvcjogJ3R5cGVfaWQnLFxuICAgICAgICBDZWxsOiByb3cgPT4ge1xuICAgICAgICAgIGNvbnN0IHR5cGVfaWQgPSByb3cucm93Lm9yaWdpbmFsLnR5cGVfaWRcbiAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8Pnt0eXBlX2lkID09IDEgPyAnQ2FyJyA6ICdUcnVjayd9PC8+XG4gICAgICAgICAgKVxuICAgICAgICB9LFxuICAgICAgICBIZWFkZXI6ICdWZWhpY2xlIFR5cGUnLFxuICAgICAgICBzb3J0YWJsZTogZmFsc2UsXG4gICAgICAgIHdpZHRoOiA0NVxuICAgICAgfSwgICAgXG4gICAgICB7XG4gICAgICAgIGlkOiBcImFjdGlvblwiLFxuICAgICAgICBhY2Nlc3NvcjogJ2lkJyxcbiAgICAgICAgQ2VsbDogcm93ID0+IHtcbiAgICAgICAgICBjb25zdCBpZCA9IHJvdy5yb3cub3JpZ2luYWwuaWRcbiAgICAgICAgICBjb25zdCBuYW1lID0gcm93LnJvdy5vcmlnaW5hbC5uYW1lXG4gICAgICAgICAgY29uc3QgbW9kZWxfaWQgPSByb3cucm93Lm9yaWdpbmFsLm1vZGVsX2lkXG4gICAgICAgICAgY29uc3QgdHlwZV9pZCA9IHJvdy5yb3cub3JpZ2luYWwudHlwZV9pZFxuICAgICAgICAgIGNvbnN0IGhlYWRlciA9ICdVcGRhdGUgQ2FyIFNlcmllJ1xuICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IFwicm91bmRlZC1sZyBoaWRkZW4gbWQ6YmxvY2sgdy0xLzIgbGc6dy0xLzMgb3ZlcmZsb3ctdmlzaWJsZVwiXG4gICAgICAgICAgY29uc3QgdXBkYXRlID0gXCJVcGRhdGUgQ2FyIFNlcmllXCJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyb3cpXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtbGVmdFwiPlxuICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIHRleHQteHMgZm9udC1ib2xkIHB5LTEgcHgtNCByb3VuZGVkXCIgXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgIHNob3dNb2RhbChVcGRhdGVNb2RhbCwgeyBpZCwgaGVhZGVyLCBuYW1lLCB0eXBlX2lkLCBtb2RlbF9pZCwgY2xhc3NOYW1lLCB1cGRhdGUgfSlcbiAgICAgICAgICAgICAgICB9IHRvPVwiI1wiPlxuICAgICAgICAgICAgICAgIFVwZGF0ZVxuICAgICAgICAgICAgICA8L0xpbms+eycgJ31cbiAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiYmctcmVkLTUwMCBob3ZlcjpiZy1yZWQtNzAwIHRleHQtd2hpdGUgdGV4dC14cyBmb250LWJvbGQgcHktMSBweC00IHJvdW5kZWRcIiBvbkNsaWNrPXsoKSA9PiBkZWxldGVTZXJpZShpZCl9IHRvPVwiI1wiPlxuICAgICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH0sXG4gICAgICAgIEhlYWRlcjogJ0FjdGlvbicsXG4gICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcbiAgICAgICAgd2lkdGg6IDQ1XG4gICAgICB9LFxuICAgIF0sXG4gICAgW11cbiAgKVxuXG5cbiAgY29uc3QgW2ZpbHRlcmVkRGF0YSwgc2V0RmlsdGVyZWREYXRhXSA9IHVzZVN0YXRlKHNlcmllcylcbiAgY29uc3QgaGFuZGxlU2V0RGF0YSA9IHNlcmllcyA9PiB7XG4gICAgc2V0RmlsdGVyZWREYXRhKHNlcmllcylcbiAgfVxuICBjb25zdCBoZWFkZXIgPSBcIkFkZCBOZXcgQ2FyIFNlcmllXCJcbiAgY29uc3QgY2xhc3NOYW1lID0gXCJyb3VuZGVkLWxnIGhpZGRlbiBtZDpibG9jayB3LTEvMiBsZzp3LTEvMyBvdmVyZmxvdy12aXNpYmxlXCJcbiAgY29uc3QgY3JlYXRlID0gXCJDcmVhdGUgTmV3IENhciBTZXJpZVwiXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYi13aGl0ZSBweC0xMCBweS01XCI+XG4gICAgICA8UGFnZUhlYWRlciB0aXRsZT1cIkNhciBTZXJpZXNcIiBzdWJUaXRsZT1cIk1hc3RlciBMaXN0XCIgPlxuICAgICAgICA8TGluayBjbGFzc05hbWU9XCJtbC0yIGJnLWdyYXktMzAwIGhvdmVyOmJnLWdyYXktNDAwIHRleHQtZ3JheS04MDAgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlclwiIFxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICBzaG93TW9kYWwoQ3JlYXRlTW9kYWwsIHtoZWFkZXIsIGNsYXNzTmFtZSwgY3JlYXRlfSlcbiAgICAgICAgICB9IHRvPVwiI1wiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+YWRkPC9pPiBBZGQgTmV3XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvUGFnZUhlYWRlcj5cblxuICAgICAgICA8RGF0YVRhYmxlIGNvbHVtbnM9e2NvbHVtbnN9IGRhdGE9e3Nlcmllc30gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvRnJhZ21lbnQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4gKHtcbiAgICBzZXJpZXM6IHNlbGVjdEFsbFNlcmllcyhzdGF0ZSksXG4gICAgdXNlcjogY3VycmVudFVzZXJTZWxlY3RvcihzdGF0ZSlcbiAgfSksXG4gIGRpc3BhdGNoID0+ICh7XG4gICAgZ2V0U2VyaWVzOiAoKSA9PiBkaXNwYXRjaChnZXRTZXJpZXNBY3Rpb24oKSksXG4gICAgZGVsZXRlU2VyaWU6IGlkID0+IHtcbiAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgIHRpdGxlOiAnQXJlIHlvdSBzdXJlPycsXG4gICAgICAgIHRleHQ6IFwiWW91IHdvbid0IGJlIGFibGUgdG8gcmV2ZXJ0IHRoaXMhXCIsXG4gICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyMzMDg1ZDYnLFxuICAgICAgICBjYW5jZWxCdXR0b25Db2xvcjogJyNkMzMnLFxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ1llcywgZGVsZXRlIGl0ISdcbiAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XG4gICAgICAgICAgZGlzcGF0Y2goZGVsZXRlU2VyaWVBY3Rpb24oaWQpKVxuICAgICAgICAgIEFsZXJ0KCdzdWNjZXNzJywgJ0NhciBTZXJpZSBzdWNjZXNzZnVsbHkgZGVsZXRlZCEnKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfSlcbikoU2VyaWVzQ29tcG9uZW50KSIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IHNlcmllQWN0aW9ucyBhcyBhY3Rpb25zIH0gZnJvbSAnc3RvcmUvYWN0aW9ucydcbmltcG9ydCB7IG1ha2VSZXF1ZXN0IH0gZnJvbSAnc3RvcmUvYWN0aW9uLWNyZWF0b3JzL3JlcXVlc3RzJ1xuXG5leHBvcnQgY29uc3QgZ2V0U2VyaWVzID0gKCkgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRpc3BhdGNoKFxuICAgIG1ha2VSZXF1ZXN0KCdnZXQtc2VyaWVzJywgKCkgPT4gYXhpb3MuZ2V0KGAvYXBpL2Nhci1zZXJpZXNgKSlcbiAgKVxuXG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBhY3Rpb25zLkFERF9TRVJJRVMsXG4gICAgc2VyaWVzOiByZXNwb25zZS5kYXRhLmRhdGFcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcmllID0gaWQgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRpc3BhdGNoKFxuICAgIG1ha2VSZXF1ZXN0KGBnZXQtc2VyaWUtJHtpZH1gLCAoKSA9PiBheGlvcy5nZXQoYC9hcGkvY2FyLXNlcmllcy8ke2lkfWApKVxuICApXG5cbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IGFjdGlvbnMuR0VUX1NFUklFLFxuICAgIHNlcmllczogcmVzcG9uc2UuZGF0YS5kYXRhXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVTZXJpZSA9IGRhdGEgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRpc3BhdGNoKFxuICAgIG1ha2VSZXF1ZXN0KCdjcmVhdGUtc2VyaWUnLCAoKSA9PiBheGlvcy5wb3N0KGAvYXBpL2Nhci1zZXJpZXNgLCBkYXRhKSlcbiAgKVxuXG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBhY3Rpb25zLkFERF9TRVJJRSxcbiAgICBzZXJpZXM6IHJlc3BvbnNlLmRhdGEuZGF0YVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlU2VyaWUgPSBkYXRhID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkaXNwYXRjaChcbiAgICBtYWtlUmVxdWVzdChgdXBkYXRlLXNlcmllLSR7ZGF0YS5pZH1gLCAoKSA9PlxuICAgICAgYXhpb3MucHV0KGAvYXBpL2Nhci1zZXJpZXMvJHtkYXRhLmlkfWAsIGRhdGEpXG4gICAgKVxuICApXG5cbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IGFjdGlvbnMuVVBEQVRFX1NFUklFLFxuICAgIHNlcmllczogcmVzcG9uc2UuZGF0YS5kYXRhXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVTZXJpZSA9IGlkID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgYXdhaXQgZGlzcGF0Y2goXG4gICAgbWFrZVJlcXVlc3QoYHVwZGF0ZS1zZXJpZS0ke2lkfWAsICgpID0+IGF4aW9zLmRlbGV0ZShgL2FwaS9jYXItc2VyaWVzLyR7aWR9YCkpXG4gIClcblxuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogYWN0aW9ucy5ERUxFVEVfU0VSSUUsXG4gICAgaWRcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IHNhdmVTZXJpZSA9IHNlcmllRGF0YSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XG4gIGNvbnN0IHsgaWQgfSA9IHNlcmllRGF0YVxuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZGlzcGF0Y2goXG4gICAgbWFrZVJlcXVlc3QoJ3NhdmUtc2VyaWUtc2V0dGluZ3MnLCAoKSA9PlxuICAgICAgYXhpb3MucHV0KGAvYXBpL2Nhci1zZXJpZXMvJHtpZH1gLCBzZXJpZURhdGEpXG4gICAgKVxuICApXG5cbiAgcmV0dXJuIHJlc3BvbnNlXG59XG5cblxuIiwiaW1wb3J0IHsgZGVub3JtYWxpemUgfSBmcm9tICdub3JtYWxpenInXG5cbmltcG9ydCB7IGVudGl0aWVzIGFzIGVudGl0aWVzU2NoZW1hIH0gZnJvbSAnc3RvcmUvc2NoZW1hcydcblxuZXhwb3J0IGNvbnN0IHNlbGVjdEFsbFNlcmllcyA9IHN0YXRlID0+IHtcbiAgY29uc3QgZG5FbnRpdGllcyA9IGRlbm9ybWFsaXplKFxuICAgIHsgc2VyaWVzOiBPYmplY3Qua2V5cyhzdGF0ZS5lbnRpdGllcy5zZXJpZXMpIH0sXG4gICAgZW50aXRpZXNTY2hlbWEsXG4gICAgc3RhdGUuZW50aXRpZXNcbiAgKVxuXG4gIHJldHVybiBkbkVudGl0aWVzLnNlcmllc1xufVxuXG5leHBvcnQgY29uc3Qgc2VsZWN0U2VyaWVEZXRhaWxzID0gKHN0YXRlLCBzbHVnKSA9PiB7XG5cbiAgY29uc3QgZG5FbnRpdGllcyA9IGRlbm9ybWFsaXplKFxuICAgIHsgc2VyaWVzOiBbc2x1Z10gfSxcbiAgICBlbnRpdGllc1NjaGVtYSxcbiAgICBzdGF0ZS5lbnRpdGllc1xuICApXG5cbiAgcmV0dXJuIGRuRW50aXRpZXMuc2VyaWVzXG59Il0sInNvdXJjZVJvb3QiOiIifQ==