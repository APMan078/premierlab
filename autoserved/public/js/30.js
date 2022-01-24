(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./resources/assets/js/pages/Trims/Trims.jsx":
/*!***************************************************!*\
  !*** ./resources/assets/js/pages/Trims/Trims.jsx ***!
  \***************************************************/
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
/* harmony import */ var store_selectors_trims__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! store/selectors/trims */ "./resources/assets/js/store/selectors/trims.js");
/* harmony import */ var store_selectors_session__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! store/selectors/session */ "./resources/assets/js/store/selectors/session/index.js");
/* harmony import */ var store_action_creators_trims__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! store/action-creators/trims */ "./resources/assets/js/store/action-creators/trims/index.js");
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
  }, "Car Trim Name"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
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
    htmlFor: "name"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "inline-block mb-2"
  }, "Car Series"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
    type: "text",
    name: "series_id",
    className: "w-full p-2 border",
    onChange: handleChange,
    value: values.series_id
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
    dispatch(Object(store_action_creators_trims__WEBPACK_IMPORTED_MODULE_12__["createTrim"])(values));
    dispatch(Object(store_action_creators_trims__WEBPACK_IMPORTED_MODULE_12__["getTrims"])());
    hideModal();
    Alert('success', 'Car Trim created!');
  }
})), Object(redux_form__WEBPACK_IMPORTED_MODULE_4__["reduxForm"])({
  form: 'add-car-trim'
}))(ModalComponent);
const UpdateModal = Object(recompose__WEBPACK_IMPORTED_MODULE_3__["compose"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])((state, ownProps) => ({
  initialValues: ownProps
}), (dispatch, {
  hideModal
}) => ({
  onSubmit: values => {
    dispatch(Object(store_action_creators_trims__WEBPACK_IMPORTED_MODULE_12__["updateTrim"])(values));
    dispatch(Object(store_action_creators_trims__WEBPACK_IMPORTED_MODULE_12__["getTrims"])());
    hideModal();
    Alert('success', 'Car Trim updated!');
  }
})), Object(redux_form__WEBPACK_IMPORTED_MODULE_4__["reduxForm"])({
  form: 'update-car-trim'
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

function TrimsComponent({
  getTrims,
  deleteTrim,
  trims,
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

  const populateTrims = async () => {
    await getTrims();
  };

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(() => {
    populateTrims();
  }, []);
  console.log(trims);
  const columns = react__WEBPACK_IMPORTED_MODULE_6___default.a.useMemo(() => [{
    Header: 'Car Trim Name',
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
      const series_id = row.row.original.series_id;
      const type_id = row.row.original.type_id;
      const header = 'Update Car Trim';
      const className = "rounded-lg hidden md:block w-1/2 lg:w-1/3 overflow-visible";
      const update = "Update Car Trim";
      console.log(row.row.original);
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
          series_id,
          className,
          update
        }),
        to: "#"
      }, "Update"), ' ', react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Link"], {
        className: "bg-red-500 hover:bg-red-700 text-white text-xs font-bold py-1 px-4 rounded",
        onClick: () => deleteTrim(id),
        to: "#"
      }, "Delete"));
    },
    Header: 'Action',
    sortable: false,
    width: 45
  }], []);
  const [filteredData, setFilteredData] = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(trims);

  const handleSetData = trims => {
    setFilteredData(trims);
  };

  const header = "Add New Car Trim";
  const className = "rounded-lg hidden md:block w-1/2 lg:w-1/3 overflow-visible";
  const create = "Create New Car Trim";
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "bb-white px-10 py-5"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_8__["PageHeader"], {
    title: "Car Trims",
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
    data: trims
  })));
}

__signature__(TrimsComponent, "useModal{{ showModal }}\nuseEffect{}\nuseMemo{columns}\nuseState{[filteredData, setFilteredData](trims)}", () => [react_context_modals__WEBPACK_IMPORTED_MODULE_7__["useModal"]]);

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(state => ({
  trims: Object(store_selectors_trims__WEBPACK_IMPORTED_MODULE_10__["selectAllTrims"])(state),
  user: Object(store_selectors_session__WEBPACK_IMPORTED_MODULE_11__["currentUserSelector"])(state)
}), dispatch => ({
  getTrims: () => dispatch(Object(store_action_creators_trims__WEBPACK_IMPORTED_MODULE_12__["getTrims"])()),
  deleteTrim: id => {
    sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.value) {
        dispatch(Object(store_action_creators_trims__WEBPACK_IMPORTED_MODULE_12__["deleteTrim"])(id));
        Alert('success', 'Car Trim successfully deleted!');
      }
    });
  }
}))(TrimsComponent);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useForm, "useForm", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Trims/Trims.jsx");
  reactHotLoader.register(ModalComponent, "ModalComponent", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Trims/Trims.jsx");
  reactHotLoader.register(CreateModal, "CreateModal", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Trims/Trims.jsx");
  reactHotLoader.register(UpdateModal, "UpdateModal", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Trims/Trims.jsx");
  reactHotLoader.register(Toast, "Toast", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Trims/Trims.jsx");
  reactHotLoader.register(Alert, "Alert", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Trims/Trims.jsx");
  reactHotLoader.register(TrimsComponent, "TrimsComponent", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Trims/Trims.jsx");
  reactHotLoader.register(_default, "default", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Trims/Trims.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/store/action-creators/trims/index.js":
/*!******************************************************************!*\
  !*** ./resources/assets/js/store/action-creators/trims/index.js ***!
  \******************************************************************/
/*! exports provided: saveTrim, getTrims, createTrim, getTrim, updateTrim, deleteTrim */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _trims__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trims */ "./resources/assets/js/store/action-creators/trims/trims.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveTrim", function() { return _trims__WEBPACK_IMPORTED_MODULE_0__["saveTrim"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTrims", function() { return _trims__WEBPACK_IMPORTED_MODULE_0__["getTrims"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTrim", function() { return _trims__WEBPACK_IMPORTED_MODULE_0__["createTrim"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTrim", function() { return _trims__WEBPACK_IMPORTED_MODULE_0__["getTrim"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateTrim", function() { return _trims__WEBPACK_IMPORTED_MODULE_0__["updateTrim"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteTrim", function() { return _trims__WEBPACK_IMPORTED_MODULE_0__["deleteTrim"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



/***/ }),

/***/ "./resources/assets/js/store/action-creators/trims/trims.js":
/*!******************************************************************!*\
  !*** ./resources/assets/js/store/action-creators/trims/trims.js ***!
  \******************************************************************/
/*! exports provided: getTrims, getTrim, createTrim, updateTrim, deleteTrim, saveTrim */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTrims", function() { return getTrims; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTrim", function() { return getTrim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTrim", function() { return createTrim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTrim", function() { return updateTrim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteTrim", function() { return deleteTrim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveTrim", function() { return saveTrim; });
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




const getTrims = () => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])('get-trims', () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/car-trims")));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["trimActions"].ADD_TRIMS,
    trims: response.data.data
  });
};
const getTrim = id => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])("get-trim-".concat(id), () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/car-trims/".concat(id))));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["trimActions"].GET_TRIM,
    trims: response.data.data
  });
};
const createTrim = data => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])('create-trim', () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/car-trims", data)));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["trimActions"].ADD_TRIM,
    trims: response.data.data
  });
};
const updateTrim = data => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])("update-trim-".concat(data.id), () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/car-trims/".concat(data.id), data)));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["trimActions"].UPDATE_TRIM,
    trims: response.data.data
  });
};
const deleteTrim = id => async dispatch => {
  await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])("update-trim-".concat(id), () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("/api/car-trims/".concat(id))));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["trimActions"].DELETE_TRIM,
    id
  });
};
const saveTrim = trimData => async dispatch => {
  const {
    id
  } = trimData;
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])('save-trim-settings', () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/car-trims/".concat(id), trimData)));
  return response;
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getTrims, "getTrims", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/trims/trims.js");
  reactHotLoader.register(getTrim, "getTrim", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/trims/trims.js");
  reactHotLoader.register(createTrim, "createTrim", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/trims/trims.js");
  reactHotLoader.register(updateTrim, "updateTrim", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/trims/trims.js");
  reactHotLoader.register(deleteTrim, "deleteTrim", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/trims/trims.js");
  reactHotLoader.register(saveTrim, "saveTrim", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/trims/trims.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/store/selectors/trims.js":
/*!******************************************************!*\
  !*** ./resources/assets/js/store/selectors/trims.js ***!
  \******************************************************/
/*! exports provided: selectAllTrims, selectTrimDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllTrims", function() { return selectAllTrims; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTrimDetails", function() { return selectTrimDetails; });
/* harmony import */ var normalizr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalizr */ "./node_modules/normalizr/dist/normalizr.es.js");
/* harmony import */ var store_schemas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! store/schemas */ "./resources/assets/js/store/schemas.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



const selectAllTrims = state => {
  const dnEntities = Object(normalizr__WEBPACK_IMPORTED_MODULE_0__["denormalize"])({
    trims: Object.keys(state.entities.trims)
  }, store_schemas__WEBPACK_IMPORTED_MODULE_1__["entities"], state.entities);
  return dnEntities.trims;
};
const selectTrimDetails = (state, slug) => {
  const dnEntities = Object(normalizr__WEBPACK_IMPORTED_MODULE_0__["denormalize"])({
    trims: [slug]
  }, store_schemas__WEBPACK_IMPORTED_MODULE_1__["entities"], state.entities);
  return dnEntities.trims;
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(selectAllTrims, "selectAllTrims", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/selectors/trims.js");
  reactHotLoader.register(selectTrimDetails, "selectTrimDetails", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/selectors/trims.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL1RyaW1zL1RyaW1zLmpzeCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL2FjdGlvbi1jcmVhdG9ycy90cmltcy90cmltcy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL3NlbGVjdG9ycy90cmltcy5qcyJdLCJuYW1lcyI6WyJ1c2VGb3JtIiwiaW5pdGlhbFZhbHVlcyIsIm9uU3VibWl0IiwidmFsaWRhdGUiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwidG91Y2hlZFZhbHVlcyIsInNldFRvdWNoZWRWYWx1ZXMiLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwibmFtZSIsImhhbmRsZUJsdXIiLCJlIiwiaGFuZGxlU3VibWl0Iiwib3B0aW9uVHlwZXMiLCJsYWJlbCIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlX2lkIiwibmV3TGFiZWwiLCJmaWx0ZXIiLCJvcHRpb24iLCJzZWxlY3QiLCJzZXRTZWxlY3QiLCJoYW5kbGVTZWxlY3RDaGFuZ2UiLCJNb2RhbENvbXBvbmVudCIsImhlYWRlciIsIm1vZGVsX2lkIiwic2VyaWVzX2lkIiwiaWQiLCJjcmVhdGUiLCJ1cGRhdGUiLCJDcmVhdGVNb2RhbCIsImNvbXBvc2UiLCJjb25uZWN0Iiwic3RhdGUiLCJvd25Qcm9wcyIsImRpc3BhdGNoIiwiaGlkZU1vZGFsIiwiY3JlYXRlVHJpbUFjdGlvbiIsImdldFRyaW1zQWN0aW9uIiwiQWxlcnQiLCJyZWR1eEZvcm0iLCJmb3JtIiwiVXBkYXRlTW9kYWwiLCJ1cGRhdGVUcmltQWN0aW9uIiwiVG9hc3QiLCJTd2FsIiwibWl4aW4iLCJ0b2FzdCIsInBvc2l0aW9uIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsInR5cGUiLCJ0aXRsZSIsImZpcmUiLCJUcmltc0NvbXBvbmVudCIsImdldFRyaW1zIiwiZGVsZXRlVHJpbSIsInRyaW1zIiwidXNlciIsInVzZXJfdHlwZSIsInNob3dNb2RhbCIsInVzZU1vZGFsIiwicG9wdWxhdGVUcmltcyIsInVzZUVmZmVjdCIsImNvbHVtbnMiLCJ1c2VNZW1vIiwiSGVhZGVyIiwiYWNjZXNzb3IiLCJzb3J0YWJsZSIsIkNlbGwiLCJyb3ciLCJvcmlnaW5hbCIsIndpZHRoIiwiY2xhc3NOYW1lIiwiZmlsdGVyZWREYXRhIiwic2V0RmlsdGVyZWREYXRhIiwiaGFuZGxlU2V0RGF0YSIsInNlbGVjdEFsbFRyaW1zIiwiY3VycmVudFVzZXJTZWxlY3RvciIsInRleHQiLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvbkNvbG9yIiwiY2FuY2VsQnV0dG9uQ29sb3IiLCJjb25maXJtQnV0dG9uVGV4dCIsInRoZW4iLCJyZXN1bHQiLCJkZWxldGVUcmltQWN0aW9uIiwicmVzcG9uc2UiLCJtYWtlUmVxdWVzdCIsImF4aW9zIiwiZ2V0IiwiYWN0aW9ucyIsIkFERF9UUklNUyIsImRhdGEiLCJnZXRUcmltIiwiR0VUX1RSSU0iLCJjcmVhdGVUcmltIiwicG9zdCIsIkFERF9UUklNIiwidXBkYXRlVHJpbSIsInB1dCIsIlVQREFURV9UUklNIiwiZGVsZXRlIiwiREVMRVRFX1RSSU0iLCJzYXZlVHJpbSIsInRyaW1EYXRhIiwiZG5FbnRpdGllcyIsImRlbm9ybWFsaXplIiwiT2JqZWN0Iiwia2V5cyIsImVudGl0aWVzIiwiZW50aXRpZXNTY2hlbWEiLCJzZWxlY3RUcmltRGV0YWlscyIsInNsdWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUVPLE1BQU1BLE9BQU8sR0FBRyxDQUFDO0FBQUVDLGVBQUY7QUFBaUJDLFVBQWpC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U0FBSyxFQUFFbUQsTUFBTSxDQUFDQyxJQUFQLENBQVk1RSxLQUFLLENBQUM2RSxRQUFOLENBQWVyRCxLQUEzQjtBQUFULEdBRDRCLEVBRTVCc0Qsc0RBRjRCLEVBRzVCOUUsS0FBSyxDQUFDNkUsUUFIc0IsQ0FBOUI7QUFNQSxTQUFPSixVQUFVLENBQUNqRCxLQUFsQjtBQUNELENBUk07QUFVQSxNQUFNdUQsaUJBQWlCLEdBQUcsQ0FBQy9FLEtBQUQsRUFBUWdGLElBQVIsS0FBaUI7QUFFaEQsUUFBTVAsVUFBVSxHQUFHQyw2REFBVyxDQUM1QjtBQUFFbEQsU0FBSyxFQUFFLENBQUN3RCxJQUFEO0FBQVQsR0FENEIsRUFFNUJGLHNEQUY0QixFQUc1QjlFLEtBQUssQ0FBQzZFLFFBSHNCLENBQTlCO0FBTUEsU0FBT0osVUFBVSxDQUFDakQsS0FBbEI7QUFDRCxDQVRNOzs7Ozs7Ozs7OzBCQVZNb0IsYzswQkFVQW1DLGlCIiwiZmlsZSI6ImpzLzMwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlbG1ldCBmcm9tICdyZWFjdC1oZWxtZXQnXG5pbXBvcnQgeyBjb21wb3NlIH0gZnJvbSAncmVjb21wb3NlJ1xuaW1wb3J0IHsgcmVkdXhGb3JtLCBGaWVsZCB9IGZyb20gJ3JlZHV4LWZvcm0nXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZU1vZGFsIH0gZnJvbSAncmVhY3QtY29udGV4dC1tb2RhbHMnXG5pbXBvcnQgeyBOZXV0cmFsQnV0dG9uLCBQYWdlSGVhZGVyLCBEYXRhVGFibGUgfSBmcm9tICdjb21wb25lbnRzJ1xuXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0MidcbmltcG9ydCB7IHNlbGVjdEFsbFRyaW1zIH0gZnJvbSAnc3RvcmUvc2VsZWN0b3JzL3RyaW1zJ1xuaW1wb3J0IHsgY3VycmVudFVzZXJTZWxlY3RvciB9IGZyb20gJ3N0b3JlL3NlbGVjdG9ycy9zZXNzaW9uJ1xuaW1wb3J0IHtcbiAgZ2V0VHJpbXMgYXMgZ2V0VHJpbXNBY3Rpb24sXG4gIHVwZGF0ZVRyaW0gYXMgdXBkYXRlVHJpbUFjdGlvbixcbiAgY3JlYXRlVHJpbSBhcyBjcmVhdGVUcmltQWN0aW9uLFxuICBkZWxldGVUcmltIGFzIGRlbGV0ZVRyaW1BY3Rpb25cbn0gZnJvbSAnc3RvcmUvYWN0aW9uLWNyZWF0b3JzL3RyaW1zJ1xuaW1wb3J0IHsgTGluaywgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IFNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QnXG5cbmV4cG9ydCBjb25zdCB1c2VGb3JtID0gKHsgaW5pdGlhbFZhbHVlcywgb25TdWJtaXQsIHZhbGlkYXRlIH0pID0+IHtcbiAgICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gUmVhY3QudXNlU3RhdGUoaW5pdGlhbFZhbHVlcyB8fCB7fSlcbiAgICBjb25zdCBbdG91Y2hlZFZhbHVlcywgc2V0VG91Y2hlZFZhbHVlc10gPSBSZWFjdC51c2VTdGF0ZSh7fSlcbiAgICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gUmVhY3QudXNlU3RhdGUoe30pXG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXRcbiAgICAgIGNvbnN0IHZhbHVlID0gdGFyZ2V0LnZhbHVlXG4gICAgICBjb25zdCBuYW1lID0gdGFyZ2V0Lm5hbWVcbiAgICAgIHNldFZhbHVlcyh7XG4gICAgICAgIC4uLnZhbHVlcyxcbiAgICAgICAgW25hbWVdOiB2YWx1ZVxuICAgICAgfSlcbiAgICB9XG4gIFxuICAgIGNvbnN0IGhhbmRsZUJsdXIgPSBldmVudCA9PiB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXRcbiAgICAgIGNvbnN0IG5hbWUgPSB0YXJnZXQubmFtZVxuICAgICAgc2V0VG91Y2hlZFZhbHVlcyh7XG4gICAgICAgIC4uLnRvdWNoZWRWYWx1ZXMsXG4gICAgICAgIFtuYW1lXTogdHJ1ZVxuICAgICAgfSlcbiAgICAgIGNvbnN0IGUgPSB2YWxpZGF0ZSh2YWx1ZXMpXG4gICAgICBzZXRFcnJvcnMoe1xuICAgICAgICAuLi5lcnJvcnMsXG4gICAgICAgIC4uLmVcbiAgICAgIH0pXG4gICAgfVxuICBcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBldmVudCA9PiB7XG5cbiAgICAgIGNvbnN0IGUgPSB2YWxpZGF0ZSh2YWx1ZXMpXG4gICAgICBzZXRFcnJvcnMoe1xuICAgICAgICAuLi5lcnJvcnMsXG4gICAgICAgIC4uLmVcbiAgICAgIH0pXG4gIFxuICAgICAgb25TdWJtaXQoeyAuLi52YWx1ZXMsIGUgfSlcbiAgICB9XG4gICAgY29uc3Qgb3B0aW9uVHlwZXMgPSBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnQ2FyJyxcbiAgICAgICAgdmFsdWU6IDEsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogJ1RydWNrJyxcbiAgICAgICAgdmFsdWU6IDIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogJ01vdG9yY3ljbGUnLFxuICAgICAgICB2YWx1ZTogMyxcbiAgICAgIH1cbiAgICBdXG4gICAgY29uc29sZS5sb2codmFsdWVzLnR5cGVfaWQpXG4gICAgY29uc3QgbmV3TGFiZWwgPSBvcHRpb25UeXBlcy5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi52YWx1ZSA9PSB2YWx1ZXMudHlwZV9pZClcblxuICAgIGNvbnNvbGUubG9nKG5ld0xhYmVsWzBdKVxuICAgIGNvbnN0IFtzZWxlY3QsIHNldFNlbGVjdF0gPSBSZWFjdC51c2VTdGF0ZShuZXdMYWJlbFswXSlcbiAgICBjb25zb2xlLmxvZyhzZWxlY3QpXG4gICAgY29uc3QgaGFuZGxlU2VsZWN0Q2hhbmdlID0gZXZlbnQgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBldmVudC52YWx1ZVxuICAgICAgY29uc3QgbGFiZWwgPSBldmVudC5sYWJlbFxuICAgICAgY29uc3QgbmFtZSA9ICd0eXBlX2lkJ1xuICAgICAgc2V0VmFsdWVzKHtcbiAgICAgICAgLi4udmFsdWVzLFxuICAgICAgICBbbmFtZV06IHZhbHVlXG4gICAgICB9KVxuICAgICAgc2V0U2VsZWN0KHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLCBsYWJlbDogbGFiZWxcbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZXMsXG4gICAgICB0b3VjaGVkVmFsdWVzLFxuICAgICAgZXJyb3JzLFxuICAgICAgaGFuZGxlQ2hhbmdlLFxuICAgICAgaGFuZGxlU3VibWl0LFxuICAgICAgaGFuZGxlQmx1cixcbiAgICAgIGhhbmRsZVNlbGVjdENoYW5nZSxcbiAgICAgIG9wdGlvblR5cGVzLFxuICAgICAgc2VsZWN0XG4gICAgfVxuICB9XG5cbmV4cG9ydCBjb25zdCBNb2RhbENvbXBvbmVudCA9ICh7IG9uU3VibWl0LCBpbml0aWFsVmFsdWVzIH0pID0+IHtcbiAgY29uc29sZS5sb2coaW5pdGlhbFZhbHVlcylcbiAgY29uc3QgeyB2YWx1ZXMsIHRvdWNoZWRWYWx1ZXMsIGVycm9ycywgaGFuZGxlQ2hhbmdlLCBoYW5kbGVTdWJtaXQsIGhhbmRsZUJsdXIsIGhhbmRsZVNlbGVjdENoYW5nZSwgb3B0aW9uVHlwZXMsIHNlbGVjdCB9ID0gdXNlRm9ybSh7XG4gICAgaW5pdGlhbFZhbHVlcyxcbiAgICBvblN1Ym1pdCxcbiAgICB2YWxpZGF0ZSh2YWx1ZXMpIHtcbiAgICAgIGNvbnN0IGVycm9ycyA9IHt9XG5cbiAgICAgIGlmICh2YWx1ZXMubmFtZSA9PT0gXCJcIikge1xuICAgICAgICBlcnJvcnMubmFtZSA9IFwiUGxlYXNlIHNwZWNpZnkgYSBuYW1lXCJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVycm9yc1xuICAgIH1cbiAgfSlcblxuICByZXR1cm4gKFxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC01IHBiLTUgYm9yZGVyLWJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMTAgdGV4dC1iYXNlIHRleHQtZ3JheS03MDBcIj57dmFsdWVzLmhlYWRlcn08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMTAgcHQtNSBwYi0wXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCBweS0yXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBtYi0yXCI+Q2FyIFRyaW0gTmFtZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIGNsYXNzTmFtZT1cInctZnVsbCBwLTIgYm9yZGVyXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gdmFsdWU9e3ZhbHVlcy5uYW1lfS8+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgdy1mdWxsIHB5LTJcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIG1iLTJcIj5DYXIgTW9kZWw8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm1vZGVsX2lkXCIgY2xhc3NOYW1lPVwidy1mdWxsIHAtMiBib3JkZXJcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSB2YWx1ZT17dmFsdWVzLm1vZGVsX2lkfS8+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgdy1mdWxsIHB5LTJcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIG1iLTJcIj5DYXIgU2VyaWVzPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzZXJpZXNfaWRcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0yIGJvcmRlclwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHZhbHVlPXt2YWx1ZXMuc2VyaWVzX2lkfS8+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9jayB3LWZ1bGwgcHktMic+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidHlwZV9pZFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBtYi0yXCI+VmVoaWNsZSBUeXBlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxTZWxlY3QgY2xhc3NOYW1lPVwidy1mdWxsXCIgdmFsdWU9e3NlbGVjdH0gb25DaGFuZ2U9e2hhbmRsZVNlbGVjdENoYW5nZX0gbmFtZT1cInR5cGVcIiBvcHRpb25zPXtvcHRpb25UeXBlc30gLz5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiaWRcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSB2YWx1ZT17dmFsdWVzLmlkfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0IHB4LTEwIHBiLTVcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBwLTMgYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDBcIiB0eXBlPVwic3VibWl0XCI+e3ZhbHVlcy5jcmVhdGV9e3ZhbHVlcy51cGRhdGV9PC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICApXG59XG5cbmNvbnN0IENyZWF0ZU1vZGFsID0gY29tcG9zZShcbiAgY29ubmVjdChcbiAgICAoc3RhdGUsIG93blByb3BzKSA9PiAoe1xuICAgICAgaW5pdGlhbFZhbHVlczogb3duUHJvcHNcbiAgICB9KSxcbiAgICAoZGlzcGF0Y2gsIHsgaGlkZU1vZGFsIH0pID0+ICh7XG4gICAgICBvblN1Ym1pdDogdmFsdWVzID0+IHtcbiAgICAgICAgZGlzcGF0Y2goY3JlYXRlVHJpbUFjdGlvbih2YWx1ZXMpKVxuICAgICAgICBkaXNwYXRjaChnZXRUcmltc0FjdGlvbigpKVxuICAgICAgICBoaWRlTW9kYWwoKVxuICAgICAgICBBbGVydCgnc3VjY2VzcycsICdDYXIgVHJpbSBjcmVhdGVkIScpXG4gICAgICB9XG4gICAgfSlcbiAgKSxcbiAgcmVkdXhGb3JtKHtcbiAgICBmb3JtOiAnYWRkLWNhci10cmltJ1xuICB9KVxuKShNb2RhbENvbXBvbmVudClcblxuY29uc3QgVXBkYXRlTW9kYWwgPSBjb21wb3NlKFxuICBjb25uZWN0KFxuICAgIChzdGF0ZSwgb3duUHJvcHMpID0+ICh7XG4gICAgICBpbml0aWFsVmFsdWVzOiBvd25Qcm9wc1xuICAgIH0pLFxuICAgIChkaXNwYXRjaCwgeyBoaWRlTW9kYWwgfSkgPT4gKHtcbiAgICAgIG9uU3VibWl0OiB2YWx1ZXMgPT4ge1xuICAgICAgICBkaXNwYXRjaCh1cGRhdGVUcmltQWN0aW9uKHZhbHVlcykpXG4gICAgICAgIGRpc3BhdGNoKGdldFRyaW1zQWN0aW9uKCkpXG4gICAgICAgIGhpZGVNb2RhbCgpXG4gICAgICAgIEFsZXJ0KCdzdWNjZXNzJywgJ0NhciBUcmltIHVwZGF0ZWQhJylcbiAgICAgIH1cbiAgICB9KVxuICApLFxuICByZWR1eEZvcm0oe1xuICAgIGZvcm06ICd1cGRhdGUtY2FyLXRyaW0nXG4gIH0pXG4pKE1vZGFsQ29tcG9uZW50KVxuXG5jb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xuICB0b2FzdDogdHJ1ZSxcbiAgcG9zaXRpb246ICd0b3AtZW5kJyxcbiAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxuICB0aW1lcjogMzAwMFxufSlcblxuY29uc3QgQWxlcnQgPSAodHlwZSwgdGl0bGUpID0+IFRvYXN0LmZpcmUoe1xuICB0eXBlOiB0eXBlLFxuICB0aXRsZTogdGl0bGVcbn0pXG5cblxuXG5mdW5jdGlvbiBUcmltc0NvbXBvbmVudCh7IGdldFRyaW1zLCBkZWxldGVUcmltLCB0cmltcywgdXNlciB9KSB7XG4gIGNvbnN0IHsgdXNlcl90eXBlIH0gPSB1c2VyXG5cbiAgaWYgKHVzZXJfdHlwZSAhPSAnYWRtaW4nKSB7XG4gICAgcmV0dXJuIDxSZWRpcmVjdCBmcm9tPScvYWNjb3VudCcgdG89XCIvYWNjb3VudC9vdmVydmlld1wiIC8+XG4gIH1cbiAgY29uc3QgeyBzaG93TW9kYWwgfSA9IHVzZU1vZGFsKClcbiAgY29uc3QgcG9wdWxhdGVUcmltcyA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBnZXRUcmltcygpXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHBvcHVsYXRlVHJpbXMoKVxuICB9LCBbXSlcblxuICBjb25zb2xlLmxvZyh0cmltcylcblxuICBjb25zdCBjb2x1bW5zID0gUmVhY3QudXNlTWVtbyhcbiAgICAoKSA9PiBbXG4gICAgICB7XG4gICAgICAgIEhlYWRlcjogJ0NhciBUcmltIE5hbWUnLFxuICAgICAgICBhY2Nlc3NvcjogJ25hbWUnLFxuICAgICAgICBzb3J0YWJsZTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwidmVoaWNsZVwiLFxuICAgICAgICBhY2Nlc3NvcjogJ3R5cGVfaWQnLFxuICAgICAgICBDZWxsOiByb3cgPT4ge1xuICAgICAgICAgIGNvbnN0IHR5cGVfaWQgPSByb3cucm93Lm9yaWdpbmFsLnR5cGVfaWRcbiAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8Pnt0eXBlX2lkID09IDEgPyAnQ2FyJyA6ICdUcnVjayd9PC8+XG4gICAgICAgICAgKVxuICAgICAgICB9LFxuICAgICAgICBIZWFkZXI6ICdWZWhpY2xlIFR5cGUnLFxuICAgICAgICBzb3J0YWJsZTogZmFsc2UsXG4gICAgICAgIHdpZHRoOiA0NVxuICAgICAgfSwgICAgXG4gICAgICB7XG4gICAgICAgIGlkOiBcImFjdGlvblwiLFxuICAgICAgICBhY2Nlc3NvcjogJ2lkJyxcbiAgICAgICAgQ2VsbDogcm93ID0+IHtcbiAgICAgICAgICBjb25zdCBpZCA9IHJvdy5yb3cub3JpZ2luYWwuaWRcbiAgICAgICAgICBjb25zdCBuYW1lID0gcm93LnJvdy5vcmlnaW5hbC5uYW1lXG4gICAgICAgICAgY29uc3QgbW9kZWxfaWQgPSByb3cucm93Lm9yaWdpbmFsLm1vZGVsX2lkXG4gICAgICAgICAgY29uc3Qgc2VyaWVzX2lkID0gcm93LnJvdy5vcmlnaW5hbC5zZXJpZXNfaWRcbiAgICAgICAgICBjb25zdCB0eXBlX2lkID0gcm93LnJvdy5vcmlnaW5hbC50eXBlX2lkXG4gICAgICAgICAgY29uc3QgaGVhZGVyID0gJ1VwZGF0ZSBDYXIgVHJpbSdcbiAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBcInJvdW5kZWQtbGcgaGlkZGVuIG1kOmJsb2NrIHctMS8yIGxnOnctMS8zIG92ZXJmbG93LXZpc2libGVcIlxuICAgICAgICAgIGNvbnN0IHVwZGF0ZSA9IFwiVXBkYXRlIENhciBUcmltXCJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyb3cucm93Lm9yaWdpbmFsKVxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0LWxlZnRcIj5cbiAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSB0ZXh0LXhzIGZvbnQtYm9sZCBweS0xIHB4LTQgcm91bmRlZFwiIFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICBzaG93TW9kYWwoVXBkYXRlTW9kYWwsIHsgaWQsIGhlYWRlciwgbmFtZSwgdHlwZV9pZCwgbW9kZWxfaWQsIHNlcmllc19pZCwgY2xhc3NOYW1lLCB1cGRhdGUgfSlcbiAgICAgICAgICAgICAgICB9IHRvPVwiI1wiPlxuICAgICAgICAgICAgICAgIFVwZGF0ZVxuICAgICAgICAgICAgICA8L0xpbms+eycgJ31cbiAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiYmctcmVkLTUwMCBob3ZlcjpiZy1yZWQtNzAwIHRleHQtd2hpdGUgdGV4dC14cyBmb250LWJvbGQgcHktMSBweC00IHJvdW5kZWRcIiBvbkNsaWNrPXsoKSA9PiBkZWxldGVUcmltKGlkKX0gdG89XCIjXCI+XG4gICAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfSxcbiAgICAgICAgSGVhZGVyOiAnQWN0aW9uJyxcbiAgICAgICAgc29ydGFibGU6IGZhbHNlLFxuICAgICAgICB3aWR0aDogNDVcbiAgICAgIH0sXG4gICAgXSxcbiAgICBbXVxuICApXG5cblxuICBjb25zdCBbZmlsdGVyZWREYXRhLCBzZXRGaWx0ZXJlZERhdGFdID0gdXNlU3RhdGUodHJpbXMpXG4gIGNvbnN0IGhhbmRsZVNldERhdGEgPSB0cmltcyA9PiB7XG4gICAgc2V0RmlsdGVyZWREYXRhKHRyaW1zKVxuICB9XG4gIGNvbnN0IGhlYWRlciA9IFwiQWRkIE5ldyBDYXIgVHJpbVwiXG4gIGNvbnN0IGNsYXNzTmFtZSA9IFwicm91bmRlZC1sZyBoaWRkZW4gbWQ6YmxvY2sgdy0xLzIgbGc6dy0xLzMgb3ZlcmZsb3ctdmlzaWJsZVwiXG4gIGNvbnN0IGNyZWF0ZSA9IFwiQ3JlYXRlIE5ldyBDYXIgVHJpbVwiXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYi13aGl0ZSBweC0xMCBweS01XCI+XG4gICAgICA8UGFnZUhlYWRlciB0aXRsZT1cIkNhciBUcmltc1wiIHN1YlRpdGxlPVwiTWFzdGVyIExpc3RcIiA+XG4gICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cIm1sLTIgYmctZ3JheS0zMDAgaG92ZXI6YmctZ3JheS00MDAgdGV4dC1ncmF5LTgwMCBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyXCIgXG4gICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgIHNob3dNb2RhbChDcmVhdGVNb2RhbCwge2hlYWRlciwgY2xhc3NOYW1lLCBjcmVhdGV9KVxuICAgICAgICAgIH0gdG89XCIjXCI+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5hZGQ8L2k+IEFkZCBOZXdcbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9QYWdlSGVhZGVyPlxuXG4gICAgICAgIDxEYXRhVGFibGUgY29sdW1ucz17Y29sdW1uc30gZGF0YT17dHJpbXN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L0ZyYWdtZW50PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+ICh7XG4gICAgdHJpbXM6IHNlbGVjdEFsbFRyaW1zKHN0YXRlKSxcbiAgICB1c2VyOiBjdXJyZW50VXNlclNlbGVjdG9yKHN0YXRlKVxuICB9KSxcbiAgZGlzcGF0Y2ggPT4gKHtcbiAgICBnZXRUcmltczogKCkgPT4gZGlzcGF0Y2goZ2V0VHJpbXNBY3Rpb24oKSksXG4gICAgZGVsZXRlVHJpbTogaWQgPT4ge1xuICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgdGl0bGU6ICdBcmUgeW91IHN1cmU/JyxcbiAgICAgICAgdGV4dDogXCJZb3Ugd29uJ3QgYmUgYWJsZSB0byByZXZlcnQgdGhpcyFcIixcbiAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiAnIzMwODVkNicsXG4gICAgICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiAnI2QzMycsXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnWWVzLCBkZWxldGUgaXQhJ1xuICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICAgICAgICBkaXNwYXRjaChkZWxldGVUcmltQWN0aW9uKGlkKSlcbiAgICAgICAgICBBbGVydCgnc3VjY2VzcycsICdDYXIgVHJpbSBzdWNjZXNzZnVsbHkgZGVsZXRlZCEnKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfSlcbikoVHJpbXNDb21wb25lbnQpIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgdHJpbUFjdGlvbnMgYXMgYWN0aW9ucyB9IGZyb20gJ3N0b3JlL2FjdGlvbnMnXG5pbXBvcnQgeyBtYWtlUmVxdWVzdCB9IGZyb20gJ3N0b3JlL2FjdGlvbi1jcmVhdG9ycy9yZXF1ZXN0cydcblxuZXhwb3J0IGNvbnN0IGdldFRyaW1zID0gKCkgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRpc3BhdGNoKFxuICAgIG1ha2VSZXF1ZXN0KCdnZXQtdHJpbXMnLCAoKSA9PiBheGlvcy5nZXQoYC9hcGkvY2FyLXRyaW1zYCkpXG4gIClcblxuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogYWN0aW9ucy5BRERfVFJJTVMsXG4gICAgdHJpbXM6IHJlc3BvbnNlLmRhdGEuZGF0YVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgZ2V0VHJpbSA9IGlkID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkaXNwYXRjaChcbiAgICBtYWtlUmVxdWVzdChgZ2V0LXRyaW0tJHtpZH1gLCAoKSA9PiBheGlvcy5nZXQoYC9hcGkvY2FyLXRyaW1zLyR7aWR9YCkpXG4gIClcblxuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogYWN0aW9ucy5HRVRfVFJJTSxcbiAgICB0cmltczogcmVzcG9uc2UuZGF0YS5kYXRhXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVUcmltID0gZGF0YSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZGlzcGF0Y2goXG4gICAgbWFrZVJlcXVlc3QoJ2NyZWF0ZS10cmltJywgKCkgPT4gYXhpb3MucG9zdChgL2FwaS9jYXItdHJpbXNgLCBkYXRhKSlcbiAgKVxuXG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBhY3Rpb25zLkFERF9UUklNLFxuICAgIHRyaW1zOiByZXNwb25zZS5kYXRhLmRhdGFcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVRyaW0gPSBkYXRhID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkaXNwYXRjaChcbiAgICBtYWtlUmVxdWVzdChgdXBkYXRlLXRyaW0tJHtkYXRhLmlkfWAsICgpID0+XG4gICAgICBheGlvcy5wdXQoYC9hcGkvY2FyLXRyaW1zLyR7ZGF0YS5pZH1gLCBkYXRhKVxuICAgIClcbiAgKVxuXG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBhY3Rpb25zLlVQREFURV9UUklNLFxuICAgIHRyaW1zOiByZXNwb25zZS5kYXRhLmRhdGFcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVRyaW0gPSBpZCA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XG4gIGF3YWl0IGRpc3BhdGNoKFxuICAgIG1ha2VSZXF1ZXN0KGB1cGRhdGUtdHJpbS0ke2lkfWAsICgpID0+IGF4aW9zLmRlbGV0ZShgL2FwaS9jYXItdHJpbXMvJHtpZH1gKSlcbiAgKVxuXG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBhY3Rpb25zLkRFTEVURV9UUklNLFxuICAgIGlkXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBzYXZlVHJpbSA9IHRyaW1EYXRhID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgY29uc3QgeyBpZCB9ID0gdHJpbURhdGFcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRpc3BhdGNoKFxuICAgIG1ha2VSZXF1ZXN0KCdzYXZlLXRyaW0tc2V0dGluZ3MnLCAoKSA9PlxuICAgICAgYXhpb3MucHV0KGAvYXBpL2Nhci10cmltcy8ke2lkfWAsIHRyaW1EYXRhKVxuICAgIClcbiAgKVxuXG4gIHJldHVybiByZXNwb25zZVxufVxuXG5cbiIsImltcG9ydCB7IGRlbm9ybWFsaXplIH0gZnJvbSAnbm9ybWFsaXpyJ1xuXG5pbXBvcnQgeyBlbnRpdGllcyBhcyBlbnRpdGllc1NjaGVtYSB9IGZyb20gJ3N0b3JlL3NjaGVtYXMnXG5cbmV4cG9ydCBjb25zdCBzZWxlY3RBbGxUcmltcyA9IHN0YXRlID0+IHtcbiAgY29uc3QgZG5FbnRpdGllcyA9IGRlbm9ybWFsaXplKFxuICAgIHsgdHJpbXM6IE9iamVjdC5rZXlzKHN0YXRlLmVudGl0aWVzLnRyaW1zKSB9LFxuICAgIGVudGl0aWVzU2NoZW1hLFxuICAgIHN0YXRlLmVudGl0aWVzXG4gIClcblxuICByZXR1cm4gZG5FbnRpdGllcy50cmltc1xufVxuXG5leHBvcnQgY29uc3Qgc2VsZWN0VHJpbURldGFpbHMgPSAoc3RhdGUsIHNsdWcpID0+IHtcblxuICBjb25zdCBkbkVudGl0aWVzID0gZGVub3JtYWxpemUoXG4gICAgeyB0cmltczogW3NsdWddIH0sXG4gICAgZW50aXRpZXNTY2hlbWEsXG4gICAgc3RhdGUuZW50aXRpZXNcbiAgKVxuXG4gIHJldHVybiBkbkVudGl0aWVzLnRyaW1zXG59Il0sInNvdXJjZVJvb3QiOiIifQ==