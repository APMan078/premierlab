(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./resources/assets/js/pages/Makes/Makes.jsx":
/*!***************************************************!*\
  !*** ./resources/assets/js/pages/Makes/Makes.jsx ***!
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
/* harmony import */ var store_selectors_makes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! store/selectors/makes */ "./resources/assets/js/store/selectors/makes.js");
/* harmony import */ var store_selectors_session__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! store/selectors/session */ "./resources/assets/js/store/selectors/session/index.js");
/* harmony import */ var store_action_creators_makes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! store/action-creators/makes */ "./resources/assets/js/store/action-creators/makes/index.js");
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
  }, "Car Make Name"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
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
    dispatch(Object(store_action_creators_makes__WEBPACK_IMPORTED_MODULE_12__["createMake"])(values));
    dispatch(Object(store_action_creators_makes__WEBPACK_IMPORTED_MODULE_12__["getMakes"])());
    hideModal();
    Alert('success', 'Car Make created!');
  }
})), Object(redux_form__WEBPACK_IMPORTED_MODULE_4__["reduxForm"])({
  form: 'add-car-make'
}))(ModalComponent);
const UpdateModal = Object(recompose__WEBPACK_IMPORTED_MODULE_3__["compose"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])((state, ownProps) => ({
  initialValues: ownProps
}), (dispatch, {
  hideModal
}) => ({
  onSubmit: values => {
    dispatch(Object(store_action_creators_makes__WEBPACK_IMPORTED_MODULE_12__["updateMake"])(values));
    dispatch(Object(store_action_creators_makes__WEBPACK_IMPORTED_MODULE_12__["getMakes"])());
    hideModal();
    Alert('success', 'Car Make updated!');
  }
})), Object(redux_form__WEBPACK_IMPORTED_MODULE_4__["reduxForm"])({
  form: 'update-car-make'
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

function MakesComponent({
  getMakes,
  deleteMake,
  makes,
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

  const populateMakes = async () => {
    await getMakes();
  };

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(() => {
    populateMakes();
  }, []);
  console.log(makes);
  const columns = react__WEBPACK_IMPORTED_MODULE_6___default.a.useMemo(() => [{
    Header: 'Car Make Name',
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
      const type_id = row.row.original.type_id;
      const header = 'Update Car Make';
      const className = "rounded-lg hidden md:block w-1/2 lg:w-1/3 overflow-visible";
      const update = "Update Car Make";
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
          className,
          update
        }),
        to: "#"
      }, "Update"), ' ', react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Link"], {
        className: "bg-red-500 hover:bg-red-700 text-white text-xs font-bold py-1 px-4 rounded",
        onClick: () => deleteMake(id),
        to: "#"
      }, "Delete"));
    },
    Header: 'Action',
    sortable: false,
    width: 45
  }], []);
  const [filteredData, setFilteredData] = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(makes);

  const handleSetData = makes => {
    setFilteredData(makes);
  };

  const header = "Add New Car Make";
  const className = "rounded-lg hidden md:block w-1/2 lg:w-1/3 overflow-visible";
  const create = "Create New Car Make";
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "bb-white px-10 py-5"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_8__["PageHeader"], {
    title: "Car Makes",
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
    data: makes
  })));
}

__signature__(MakesComponent, "useModal{{ showModal }}\nuseEffect{}\nuseMemo{columns}\nuseState{[filteredData, setFilteredData](makes)}", () => [react_context_modals__WEBPACK_IMPORTED_MODULE_7__["useModal"]]);

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(state => ({
  makes: Object(store_selectors_makes__WEBPACK_IMPORTED_MODULE_10__["selectAllMakes"])(state),
  user: Object(store_selectors_session__WEBPACK_IMPORTED_MODULE_11__["currentUserSelector"])(state)
}), dispatch => ({
  getMakes: () => dispatch(Object(store_action_creators_makes__WEBPACK_IMPORTED_MODULE_12__["getMakes"])()),
  deleteMake: id => {
    sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.value) {
        dispatch(Object(store_action_creators_makes__WEBPACK_IMPORTED_MODULE_12__["deleteMake"])(id));
        Alert('success', 'Car Make successfully deleted!');
      }
    });
  }
}))(MakesComponent);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useForm, "useForm", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Makes/Makes.jsx");
  reactHotLoader.register(ModalComponent, "ModalComponent", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Makes/Makes.jsx");
  reactHotLoader.register(CreateModal, "CreateModal", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Makes/Makes.jsx");
  reactHotLoader.register(UpdateModal, "UpdateModal", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Makes/Makes.jsx");
  reactHotLoader.register(Toast, "Toast", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Makes/Makes.jsx");
  reactHotLoader.register(Alert, "Alert", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Makes/Makes.jsx");
  reactHotLoader.register(MakesComponent, "MakesComponent", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Makes/Makes.jsx");
  reactHotLoader.register(_default, "default", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Makes/Makes.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/store/action-creators/makes/index.js":
/*!******************************************************************!*\
  !*** ./resources/assets/js/store/action-creators/makes/index.js ***!
  \******************************************************************/
/*! exports provided: saveMake, getMakes, createMake, getMake, updateMake, deleteMake */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _makes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makes */ "./resources/assets/js/store/action-creators/makes/makes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveMake", function() { return _makes__WEBPACK_IMPORTED_MODULE_0__["saveMake"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMakes", function() { return _makes__WEBPACK_IMPORTED_MODULE_0__["getMakes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMake", function() { return _makes__WEBPACK_IMPORTED_MODULE_0__["createMake"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMake", function() { return _makes__WEBPACK_IMPORTED_MODULE_0__["getMake"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateMake", function() { return _makes__WEBPACK_IMPORTED_MODULE_0__["updateMake"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteMake", function() { return _makes__WEBPACK_IMPORTED_MODULE_0__["deleteMake"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



/***/ }),

/***/ "./resources/assets/js/store/action-creators/makes/makes.js":
/*!******************************************************************!*\
  !*** ./resources/assets/js/store/action-creators/makes/makes.js ***!
  \******************************************************************/
/*! exports provided: getMakes, getMake, createMake, updateMake, deleteMake, saveMake */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMakes", function() { return getMakes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMake", function() { return getMake; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMake", function() { return createMake; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMake", function() { return updateMake; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteMake", function() { return deleteMake; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveMake", function() { return saveMake; });
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




const getMakes = () => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])('get-makes', () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/car-makes")));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["makeActions"].ADD_MAKES,
    makes: response.data.data
  });
};
const getMake = id => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])("get-make-".concat(id), () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/car-makes/".concat(id))));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["makeActions"].GET_MAKE,
    makes: response.data.data
  });
};
const createMake = data => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])('create-make', () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/car-makes", data)));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["makeActions"].ADD_MAKE,
    makes: response.data.data
  });
};
const updateMake = data => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])("update-make-".concat(data.id), () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/car-makes/".concat(data.id), data)));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["makeActions"].UPDATE_MAKE,
    makes: response.data.data
  });
};
const deleteMake = id => async dispatch => {
  await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])("update-make-".concat(id), () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("/api/car-makes/".concat(id))));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["makeActions"].DELETE_MAKE,
    id
  });
};
const saveMake = makeData => async dispatch => {
  const {
    id
  } = makeData;
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])('save-make-settings', () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/car-makes/".concat(id), makeData)));
  return response;
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getMakes, "getMakes", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/makes/makes.js");
  reactHotLoader.register(getMake, "getMake", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/makes/makes.js");
  reactHotLoader.register(createMake, "createMake", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/makes/makes.js");
  reactHotLoader.register(updateMake, "updateMake", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/makes/makes.js");
  reactHotLoader.register(deleteMake, "deleteMake", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/makes/makes.js");
  reactHotLoader.register(saveMake, "saveMake", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/makes/makes.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/store/selectors/makes.js":
/*!******************************************************!*\
  !*** ./resources/assets/js/store/selectors/makes.js ***!
  \******************************************************/
/*! exports provided: selectAllMakes, selectMakeDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllMakes", function() { return selectAllMakes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectMakeDetails", function() { return selectMakeDetails; });
/* harmony import */ var normalizr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalizr */ "./node_modules/normalizr/dist/normalizr.es.js");
/* harmony import */ var store_schemas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! store/schemas */ "./resources/assets/js/store/schemas.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



const selectAllMakes = state => {
  const dnEntities = Object(normalizr__WEBPACK_IMPORTED_MODULE_0__["denormalize"])({
    makes: Object.keys(state.entities.makes)
  }, store_schemas__WEBPACK_IMPORTED_MODULE_1__["entities"], state.entities);
  return dnEntities.makes;
};
const selectMakeDetails = (state, id) => {
  const dnEntities = Object(normalizr__WEBPACK_IMPORTED_MODULE_0__["denormalize"])({
    makes: [id]
  }, store_schemas__WEBPACK_IMPORTED_MODULE_1__["entities"], state.entities);
  return dnEntities.makes;
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(selectAllMakes, "selectAllMakes", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/selectors/makes.js");
  reactHotLoader.register(selectMakeDetails, "selectMakeDetails", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/selectors/makes.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL01ha2VzL01ha2VzLmpzeCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL2FjdGlvbi1jcmVhdG9ycy9tYWtlcy9tYWtlcy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL3NlbGVjdG9ycy9tYWtlcy5qcyJdLCJuYW1lcyI6WyJ1c2VGb3JtIiwiaW5pdGlhbFZhbHVlcyIsIm9uU3VibWl0IiwidmFsaWRhdGUiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwidG91Y2hlZFZhbHVlcyIsInNldFRvdWNoZWRWYWx1ZXMiLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwibmFtZSIsImhhbmRsZUJsdXIiLCJlIiwiaGFuZGxlU3VibWl0Iiwib3B0aW9uVHlwZXMiLCJsYWJlbCIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlX2lkIiwibmV3TGFiZWwiLCJmaWx0ZXIiLCJvcHRpb24iLCJzZWxlY3QiLCJzZXRTZWxlY3QiLCJoYW5kbGVTZWxlY3RDaGFuZ2UiLCJNb2RhbENvbXBvbmVudCIsImhlYWRlciIsImlkIiwiY3JlYXRlIiwidXBkYXRlIiwiQ3JlYXRlTW9kYWwiLCJjb21wb3NlIiwiY29ubmVjdCIsInN0YXRlIiwib3duUHJvcHMiLCJkaXNwYXRjaCIsImhpZGVNb2RhbCIsImNyZWF0ZU1ha2VBY3Rpb24iLCJnZXRNYWtlc0FjdGlvbiIsIkFsZXJ0IiwicmVkdXhGb3JtIiwiZm9ybSIsIlVwZGF0ZU1vZGFsIiwidXBkYXRlTWFrZUFjdGlvbiIsIlRvYXN0IiwiU3dhbCIsIm1peGluIiwidG9hc3QiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJ0eXBlIiwidGl0bGUiLCJmaXJlIiwiTWFrZXNDb21wb25lbnQiLCJnZXRNYWtlcyIsImRlbGV0ZU1ha2UiLCJtYWtlcyIsInVzZXIiLCJ1c2VyX3R5cGUiLCJzaG93TW9kYWwiLCJ1c2VNb2RhbCIsInBvcHVsYXRlTWFrZXMiLCJ1c2VFZmZlY3QiLCJjb2x1bW5zIiwidXNlTWVtbyIsIkhlYWRlciIsImFjY2Vzc29yIiwic29ydGFibGUiLCJDZWxsIiwicm93Iiwib3JpZ2luYWwiLCJ3aWR0aCIsImNsYXNzTmFtZSIsImZpbHRlcmVkRGF0YSIsInNldEZpbHRlcmVkRGF0YSIsImhhbmRsZVNldERhdGEiLCJzZWxlY3RBbGxNYWtlcyIsImN1cnJlbnRVc2VyU2VsZWN0b3IiLCJ0ZXh0Iiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25Db2xvciIsImNhbmNlbEJ1dHRvbkNvbG9yIiwiY29uZmlybUJ1dHRvblRleHQiLCJ0aGVuIiwicmVzdWx0IiwiZGVsZXRlTWFrZUFjdGlvbiIsInJlc3BvbnNlIiwibWFrZVJlcXVlc3QiLCJheGlvcyIsImdldCIsImFjdGlvbnMiLCJBRERfTUFLRVMiLCJkYXRhIiwiZ2V0TWFrZSIsIkdFVF9NQUtFIiwiY3JlYXRlTWFrZSIsInBvc3QiLCJBRERfTUFLRSIsInVwZGF0ZU1ha2UiLCJwdXQiLCJVUERBVEVfTUFLRSIsImRlbGV0ZSIsIkRFTEVURV9NQUtFIiwic2F2ZU1ha2UiLCJtYWtlRGF0YSIsImRuRW50aXRpZXMiLCJkZW5vcm1hbGl6ZSIsIk9iamVjdCIsImtleXMiLCJlbnRpdGllcyIsImVudGl0aWVzU2NoZW1hIiwic2VsZWN0TWFrZURldGFpbHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUVPLE1BQU1BLE9BQU8sR0FBRyxDQUFDO0FBQUVDLGVBQUY7QUFBaUJDLFVBQWpCO0FBQTJCQztBQUEzQixDQUFELEtBQTJDO0FBQzlE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bEMsQ0FEUyxDQURrQixDQUEvQjtBQU1BLFNBQU9sQixRQUFQO0FBQ0QsQ0FWTTs7Ozs7Ozs7OzswQkF6RE1oQyxROzBCQVdBdUMsTzswQkFXQUUsVTswQkFXQUcsVTswQkFhQTNDLFU7MEJBV0FnRCxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEYjtBQUVBO0FBRU8sTUFBTTNCLGNBQWMsR0FBRzVDLEtBQUssSUFBSTtBQUNyQyxRQUFNeUUsVUFBVSxHQUFHQyw2REFBVyxDQUM1QjtBQUFFbEQsU0FBSyxFQUFFbUQsTUFBTSxDQUFDQyxJQUFQLENBQVk1RSxLQUFLLENBQUM2RSxRQUFOLENBQWVyRCxLQUEzQjtBQUFULEdBRDRCLEVBRTVCc0Qsc0RBRjRCLEVBRzVCOUUsS0FBSyxDQUFDNkUsUUFIc0IsQ0FBOUI7QUFNQSxTQUFPSixVQUFVLENBQUNqRCxLQUFsQjtBQUNELENBUk07QUFVQSxNQUFNdUQsaUJBQWlCLEdBQUcsQ0FBQy9FLEtBQUQsRUFBUU4sRUFBUixLQUFlO0FBRTlDLFFBQU0rRSxVQUFVLEdBQUdDLDZEQUFXLENBQzVCO0FBQUVsRCxTQUFLLEVBQUUsQ0FBQzlCLEVBQUQ7QUFBVCxHQUQ0QixFQUU1Qm9GLHNEQUY0QixFQUc1QjlFLEtBQUssQ0FBQzZFLFFBSHNCLENBQTlCO0FBTUEsU0FBT0osVUFBVSxDQUFDakQsS0FBbEI7QUFDRCxDQVRNOzs7Ozs7Ozs7OzBCQVZNb0IsYzswQkFVQW1DLGlCIiwiZmlsZSI6ImpzLzI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlbG1ldCBmcm9tICdyZWFjdC1oZWxtZXQnXG5pbXBvcnQgeyBjb21wb3NlIH0gZnJvbSAncmVjb21wb3NlJ1xuaW1wb3J0IHsgcmVkdXhGb3JtLCBGaWVsZCB9IGZyb20gJ3JlZHV4LWZvcm0nXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZU1vZGFsIH0gZnJvbSAncmVhY3QtY29udGV4dC1tb2RhbHMnXG5pbXBvcnQgeyBOZXV0cmFsQnV0dG9uLCBQYWdlSGVhZGVyLCBEYXRhVGFibGUgfSBmcm9tICdjb21wb25lbnRzJ1xuXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0MidcbmltcG9ydCB7IHNlbGVjdEFsbE1ha2VzIH0gZnJvbSAnc3RvcmUvc2VsZWN0b3JzL21ha2VzJ1xuaW1wb3J0IHsgY3VycmVudFVzZXJTZWxlY3RvciB9IGZyb20gJ3N0b3JlL3NlbGVjdG9ycy9zZXNzaW9uJ1xuaW1wb3J0IHtcbiAgZ2V0TWFrZXMgYXMgZ2V0TWFrZXNBY3Rpb24sXG4gIHVwZGF0ZU1ha2UgYXMgdXBkYXRlTWFrZUFjdGlvbixcbiAgY3JlYXRlTWFrZSBhcyBjcmVhdGVNYWtlQWN0aW9uLFxuICBkZWxldGVNYWtlIGFzIGRlbGV0ZU1ha2VBY3Rpb25cbn0gZnJvbSAnc3RvcmUvYWN0aW9uLWNyZWF0b3JzL21ha2VzJ1xuaW1wb3J0IHsgTGluaywgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IFNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QnXG5cbmV4cG9ydCBjb25zdCB1c2VGb3JtID0gKHsgaW5pdGlhbFZhbHVlcywgb25TdWJtaXQsIHZhbGlkYXRlIH0pID0+IHtcbiAgICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gUmVhY3QudXNlU3RhdGUoaW5pdGlhbFZhbHVlcyB8fCB7fSlcbiAgICBjb25zdCBbdG91Y2hlZFZhbHVlcywgc2V0VG91Y2hlZFZhbHVlc10gPSBSZWFjdC51c2VTdGF0ZSh7fSlcbiAgICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gUmVhY3QudXNlU3RhdGUoe30pXG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXRcbiAgICAgIGNvbnN0IHZhbHVlID0gdGFyZ2V0LnZhbHVlXG4gICAgICBjb25zdCBuYW1lID0gdGFyZ2V0Lm5hbWVcbiAgICAgIHNldFZhbHVlcyh7XG4gICAgICAgIC4uLnZhbHVlcyxcbiAgICAgICAgW25hbWVdOiB2YWx1ZVxuICAgICAgfSlcbiAgICB9XG4gIFxuICAgIGNvbnN0IGhhbmRsZUJsdXIgPSBldmVudCA9PiB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXRcbiAgICAgIGNvbnN0IG5hbWUgPSB0YXJnZXQubmFtZVxuICAgICAgc2V0VG91Y2hlZFZhbHVlcyh7XG4gICAgICAgIC4uLnRvdWNoZWRWYWx1ZXMsXG4gICAgICAgIFtuYW1lXTogdHJ1ZVxuICAgICAgfSlcbiAgICAgIGNvbnN0IGUgPSB2YWxpZGF0ZSh2YWx1ZXMpXG4gICAgICBzZXRFcnJvcnMoe1xuICAgICAgICAuLi5lcnJvcnMsXG4gICAgICAgIC4uLmVcbiAgICAgIH0pXG4gICAgfVxuICBcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBldmVudCA9PiB7XG5cbiAgICAgIGNvbnN0IGUgPSB2YWxpZGF0ZSh2YWx1ZXMpXG4gICAgICBzZXRFcnJvcnMoe1xuICAgICAgICAuLi5lcnJvcnMsXG4gICAgICAgIC4uLmVcbiAgICAgIH0pXG4gIFxuICAgICAgb25TdWJtaXQoeyAuLi52YWx1ZXMsIGUgfSlcbiAgICB9XG4gICAgY29uc3Qgb3B0aW9uVHlwZXMgPSBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnQ2FyJyxcbiAgICAgICAgdmFsdWU6IDEsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogJ1RydWNrJyxcbiAgICAgICAgdmFsdWU6IDIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogJ01vdG9yY3ljbGUnLFxuICAgICAgICB2YWx1ZTogMyxcbiAgICAgIH1cbiAgICBdXG4gICAgY29uc29sZS5sb2codmFsdWVzLnR5cGVfaWQpXG4gICAgY29uc3QgbmV3TGFiZWwgPSBvcHRpb25UeXBlcy5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi52YWx1ZSA9PSB2YWx1ZXMudHlwZV9pZClcblxuICAgIGNvbnNvbGUubG9nKG5ld0xhYmVsWzBdKVxuICAgIGNvbnN0IFtzZWxlY3QsIHNldFNlbGVjdF0gPSBSZWFjdC51c2VTdGF0ZShuZXdMYWJlbFswXSlcbiAgICBjb25zb2xlLmxvZyhzZWxlY3QpXG4gICAgY29uc3QgaGFuZGxlU2VsZWN0Q2hhbmdlID0gZXZlbnQgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBldmVudC52YWx1ZVxuICAgICAgY29uc3QgbGFiZWwgPSBldmVudC5sYWJlbFxuICAgICAgY29uc3QgbmFtZSA9ICd0eXBlX2lkJ1xuICAgICAgc2V0VmFsdWVzKHtcbiAgICAgICAgLi4udmFsdWVzLFxuICAgICAgICBbbmFtZV06IHZhbHVlXG4gICAgICB9KVxuICAgICAgc2V0U2VsZWN0KHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLCBsYWJlbDogbGFiZWxcbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZXMsXG4gICAgICB0b3VjaGVkVmFsdWVzLFxuICAgICAgZXJyb3JzLFxuICAgICAgaGFuZGxlQ2hhbmdlLFxuICAgICAgaGFuZGxlU3VibWl0LFxuICAgICAgaGFuZGxlQmx1cixcbiAgICAgIGhhbmRsZVNlbGVjdENoYW5nZSxcbiAgICAgIG9wdGlvblR5cGVzLFxuICAgICAgc2VsZWN0XG4gICAgfVxuICB9XG5cbmV4cG9ydCBjb25zdCBNb2RhbENvbXBvbmVudCA9ICh7IG9uU3VibWl0LCBpbml0aWFsVmFsdWVzIH0pID0+IHtcbiAgY29uc29sZS5sb2coaW5pdGlhbFZhbHVlcylcbiAgY29uc3QgeyB2YWx1ZXMsIHRvdWNoZWRWYWx1ZXMsIGVycm9ycywgaGFuZGxlQ2hhbmdlLCBoYW5kbGVTdWJtaXQsIGhhbmRsZUJsdXIsIGhhbmRsZVNlbGVjdENoYW5nZSwgb3B0aW9uVHlwZXMsIHNlbGVjdCB9ID0gdXNlRm9ybSh7XG4gICAgaW5pdGlhbFZhbHVlcyxcbiAgICBvblN1Ym1pdCxcbiAgICB2YWxpZGF0ZSh2YWx1ZXMpIHtcbiAgICAgIGNvbnN0IGVycm9ycyA9IHt9XG5cbiAgICAgIGlmICh2YWx1ZXMubmFtZSA9PT0gXCJcIikge1xuICAgICAgICBlcnJvcnMubmFtZSA9IFwiUGxlYXNlIHNwZWNpZnkgYSBuYW1lXCJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVycm9yc1xuICAgIH1cbiAgfSlcblxuICByZXR1cm4gKFxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC01IHBiLTUgYm9yZGVyLWJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMTAgdGV4dC1iYXNlIHRleHQtZ3JheS03MDBcIj57dmFsdWVzLmhlYWRlcn08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMTAgcHQtNSBwYi0wXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCBweS0yXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBtYi0yXCI+Q2FyIE1ha2UgTmFtZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIGNsYXNzTmFtZT1cInctZnVsbCBwLTIgYm9yZGVyXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gdmFsdWU9e3ZhbHVlcy5uYW1lfS8+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9jayB3LWZ1bGwgcHktMic+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidHlwZV9pZFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBtYi0yXCI+VmVoaWNsZSBUeXBlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxTZWxlY3QgY2xhc3NOYW1lPVwidy1mdWxsXCIgdmFsdWU9e3NlbGVjdH0gb25DaGFuZ2U9e2hhbmRsZVNlbGVjdENoYW5nZX0gbmFtZT1cInR5cGVcIiBvcHRpb25zPXtvcHRpb25UeXBlc30gLz5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiaWRcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSB2YWx1ZT17dmFsdWVzLmlkfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0IHB4LTEwIHBiLTVcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBwLTMgYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDBcIiB0eXBlPVwic3VibWl0XCI+e3ZhbHVlcy5jcmVhdGV9e3ZhbHVlcy51cGRhdGV9PC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICApXG59XG5cbmNvbnN0IENyZWF0ZU1vZGFsID0gY29tcG9zZShcbiAgY29ubmVjdChcbiAgICAoc3RhdGUsIG93blByb3BzKSA9PiAoe1xuICAgICAgaW5pdGlhbFZhbHVlczogb3duUHJvcHNcbiAgICB9KSxcbiAgICAoZGlzcGF0Y2gsIHsgaGlkZU1vZGFsIH0pID0+ICh7XG4gICAgICBvblN1Ym1pdDogdmFsdWVzID0+IHtcbiAgICAgICAgZGlzcGF0Y2goY3JlYXRlTWFrZUFjdGlvbih2YWx1ZXMpKVxuICAgICAgICBkaXNwYXRjaChnZXRNYWtlc0FjdGlvbigpKVxuICAgICAgICBoaWRlTW9kYWwoKVxuICAgICAgICBBbGVydCgnc3VjY2VzcycsICdDYXIgTWFrZSBjcmVhdGVkIScpXG4gICAgICB9XG4gICAgfSlcbiAgKSxcbiAgcmVkdXhGb3JtKHtcbiAgICBmb3JtOiAnYWRkLWNhci1tYWtlJ1xuICB9KVxuKShNb2RhbENvbXBvbmVudClcblxuY29uc3QgVXBkYXRlTW9kYWwgPSBjb21wb3NlKFxuICBjb25uZWN0KFxuICAgIChzdGF0ZSwgb3duUHJvcHMpID0+ICh7XG4gICAgICBpbml0aWFsVmFsdWVzOiBvd25Qcm9wc1xuICAgIH0pLFxuICAgIChkaXNwYXRjaCwgeyBoaWRlTW9kYWwgfSkgPT4gKHtcbiAgICAgIG9uU3VibWl0OiB2YWx1ZXMgPT4ge1xuICAgICAgICBkaXNwYXRjaCh1cGRhdGVNYWtlQWN0aW9uKHZhbHVlcykpXG4gICAgICAgIGRpc3BhdGNoKGdldE1ha2VzQWN0aW9uKCkpXG4gICAgICAgIGhpZGVNb2RhbCgpXG4gICAgICAgIEFsZXJ0KCdzdWNjZXNzJywgJ0NhciBNYWtlIHVwZGF0ZWQhJylcbiAgICAgIH1cbiAgICB9KVxuICApLFxuICByZWR1eEZvcm0oe1xuICAgIGZvcm06ICd1cGRhdGUtY2FyLW1ha2UnXG4gIH0pXG4pKE1vZGFsQ29tcG9uZW50KVxuXG5jb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xuICB0b2FzdDogdHJ1ZSxcbiAgcG9zaXRpb246ICd0b3AtZW5kJyxcbiAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxuICB0aW1lcjogMzAwMFxufSlcblxuY29uc3QgQWxlcnQgPSAodHlwZSwgdGl0bGUpID0+IFRvYXN0LmZpcmUoe1xuICB0eXBlOiB0eXBlLFxuICB0aXRsZTogdGl0bGVcbn0pXG5cblxuXG5mdW5jdGlvbiBNYWtlc0NvbXBvbmVudCh7IGdldE1ha2VzLCBkZWxldGVNYWtlLCBtYWtlcywgdXNlciB9KSB7XG4gIGNvbnN0IHsgdXNlcl90eXBlIH0gPSB1c2VyXG5cbiAgaWYgKHVzZXJfdHlwZSAhPSAnYWRtaW4nKSB7XG4gICAgcmV0dXJuIDxSZWRpcmVjdCBmcm9tPScvYWNjb3VudCcgdG89XCIvYWNjb3VudC9vdmVydmlld1wiIC8+XG4gIH1cbiAgY29uc3QgeyBzaG93TW9kYWwgfSA9IHVzZU1vZGFsKClcbiAgY29uc3QgcG9wdWxhdGVNYWtlcyA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBnZXRNYWtlcygpXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHBvcHVsYXRlTWFrZXMoKVxuICB9LCBbXSlcblxuICBjb25zb2xlLmxvZyhtYWtlcylcblxuICBjb25zdCBjb2x1bW5zID0gUmVhY3QudXNlTWVtbyhcbiAgICAoKSA9PiBbXG4gICAgICB7XG4gICAgICAgIEhlYWRlcjogJ0NhciBNYWtlIE5hbWUnLFxuICAgICAgICBhY2Nlc3NvcjogJ25hbWUnLFxuICAgICAgICBzb3J0YWJsZTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwidmVoaWNsZVwiLFxuICAgICAgICBhY2Nlc3NvcjogJ3R5cGVfaWQnLFxuICAgICAgICBDZWxsOiByb3cgPT4ge1xuICAgICAgICAgIGNvbnN0IHR5cGVfaWQgPSByb3cucm93Lm9yaWdpbmFsLnR5cGVfaWRcbiAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8Pnt0eXBlX2lkID09IDEgPyAnQ2FyJyA6ICdUcnVjayd9PC8+XG4gICAgICAgICAgKVxuICAgICAgICB9LFxuICAgICAgICBIZWFkZXI6ICdWZWhpY2xlIFR5cGUnLFxuICAgICAgICBzb3J0YWJsZTogZmFsc2UsXG4gICAgICAgIHdpZHRoOiA0NVxuICAgICAgfSwgICAgXG4gICAgICB7XG4gICAgICAgIGlkOiBcImFjdGlvblwiLFxuICAgICAgICBhY2Nlc3NvcjogJ2lkJyxcbiAgICAgICAgQ2VsbDogcm93ID0+IHtcbiAgICAgICAgICBjb25zdCBpZCA9IHJvdy5yb3cub3JpZ2luYWwuaWRcbiAgICAgICAgICBjb25zdCBuYW1lID0gcm93LnJvdy5vcmlnaW5hbC5uYW1lXG4gICAgICAgICAgY29uc3QgdHlwZV9pZCA9IHJvdy5yb3cub3JpZ2luYWwudHlwZV9pZFxuICAgICAgICAgIGNvbnN0IGhlYWRlciA9ICdVcGRhdGUgQ2FyIE1ha2UnXG4gICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gXCJyb3VuZGVkLWxnIGhpZGRlbiBtZDpibG9jayB3LTEvMiBsZzp3LTEvMyBvdmVyZmxvdy12aXNpYmxlXCJcbiAgICAgICAgICBjb25zdCB1cGRhdGUgPSBcIlVwZGF0ZSBDYXIgTWFrZVwiXG4gICAgICAgICAgY29uc29sZS5sb2cocm93KVxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0LWxlZnRcIj5cbiAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSB0ZXh0LXhzIGZvbnQtYm9sZCBweS0xIHB4LTQgcm91bmRlZFwiIFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICBzaG93TW9kYWwoVXBkYXRlTW9kYWwsIHsgaWQsIGhlYWRlciwgbmFtZSwgdHlwZV9pZCwgY2xhc3NOYW1lLCB1cGRhdGUgfSlcbiAgICAgICAgICAgICAgICB9IHRvPVwiI1wiPlxuICAgICAgICAgICAgICAgIFVwZGF0ZVxuICAgICAgICAgICAgICA8L0xpbms+eycgJ31cbiAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiYmctcmVkLTUwMCBob3ZlcjpiZy1yZWQtNzAwIHRleHQtd2hpdGUgdGV4dC14cyBmb250LWJvbGQgcHktMSBweC00IHJvdW5kZWRcIiBvbkNsaWNrPXsoKSA9PiBkZWxldGVNYWtlKGlkKX0gdG89XCIjXCI+XG4gICAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfSxcbiAgICAgICAgSGVhZGVyOiAnQWN0aW9uJyxcbiAgICAgICAgc29ydGFibGU6IGZhbHNlLFxuICAgICAgICB3aWR0aDogNDVcbiAgICAgIH0sXG4gICAgXSxcbiAgICBbXVxuICApXG5cblxuICBjb25zdCBbZmlsdGVyZWREYXRhLCBzZXRGaWx0ZXJlZERhdGFdID0gdXNlU3RhdGUobWFrZXMpXG4gIGNvbnN0IGhhbmRsZVNldERhdGEgPSBtYWtlcyA9PiB7XG4gICAgc2V0RmlsdGVyZWREYXRhKG1ha2VzKVxuICB9XG4gIGNvbnN0IGhlYWRlciA9IFwiQWRkIE5ldyBDYXIgTWFrZVwiXG4gIGNvbnN0IGNsYXNzTmFtZSA9IFwicm91bmRlZC1sZyBoaWRkZW4gbWQ6YmxvY2sgdy0xLzIgbGc6dy0xLzMgb3ZlcmZsb3ctdmlzaWJsZVwiXG4gIGNvbnN0IGNyZWF0ZSA9IFwiQ3JlYXRlIE5ldyBDYXIgTWFrZVwiXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYi13aGl0ZSBweC0xMCBweS01XCI+XG4gICAgICA8UGFnZUhlYWRlciB0aXRsZT1cIkNhciBNYWtlc1wiIHN1YlRpdGxlPVwiTWFzdGVyIExpc3RcIiA+XG4gICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cIm1sLTIgYmctZ3JheS0zMDAgaG92ZXI6YmctZ3JheS00MDAgdGV4dC1ncmF5LTgwMCBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyXCIgXG4gICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgIHNob3dNb2RhbChDcmVhdGVNb2RhbCwge2hlYWRlciwgY2xhc3NOYW1lLCBjcmVhdGV9KVxuICAgICAgICAgIH0gdG89XCIjXCI+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5hZGQ8L2k+IEFkZCBOZXdcbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9QYWdlSGVhZGVyPlxuXG4gICAgICAgIDxEYXRhVGFibGUgY29sdW1ucz17Y29sdW1uc30gZGF0YT17bWFrZXN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L0ZyYWdtZW50PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+ICh7XG4gICAgbWFrZXM6IHNlbGVjdEFsbE1ha2VzKHN0YXRlKSxcbiAgICB1c2VyOiBjdXJyZW50VXNlclNlbGVjdG9yKHN0YXRlKVxuICB9KSxcbiAgZGlzcGF0Y2ggPT4gKHtcbiAgICBnZXRNYWtlczogKCkgPT4gZGlzcGF0Y2goZ2V0TWFrZXNBY3Rpb24oKSksXG4gICAgZGVsZXRlTWFrZTogaWQgPT4ge1xuICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgdGl0bGU6ICdBcmUgeW91IHN1cmU/JyxcbiAgICAgICAgdGV4dDogXCJZb3Ugd29uJ3QgYmUgYWJsZSB0byByZXZlcnQgdGhpcyFcIixcbiAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiAnIzMwODVkNicsXG4gICAgICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiAnI2QzMycsXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnWWVzLCBkZWxldGUgaXQhJ1xuICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICAgICAgICBkaXNwYXRjaChkZWxldGVNYWtlQWN0aW9uKGlkKSlcbiAgICAgICAgICBBbGVydCgnc3VjY2VzcycsICdDYXIgTWFrZSBzdWNjZXNzZnVsbHkgZGVsZXRlZCEnKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfSlcbikoTWFrZXNDb21wb25lbnQpIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgbWFrZUFjdGlvbnMgYXMgYWN0aW9ucyB9IGZyb20gJ3N0b3JlL2FjdGlvbnMnXG5pbXBvcnQgeyBtYWtlUmVxdWVzdCB9IGZyb20gJ3N0b3JlL2FjdGlvbi1jcmVhdG9ycy9yZXF1ZXN0cydcblxuZXhwb3J0IGNvbnN0IGdldE1ha2VzID0gKCkgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRpc3BhdGNoKFxuICAgIG1ha2VSZXF1ZXN0KCdnZXQtbWFrZXMnLCAoKSA9PiBheGlvcy5nZXQoYC9hcGkvY2FyLW1ha2VzYCkpXG4gIClcblxuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogYWN0aW9ucy5BRERfTUFLRVMsXG4gICAgbWFrZXM6IHJlc3BvbnNlLmRhdGEuZGF0YVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgZ2V0TWFrZSA9IGlkID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkaXNwYXRjaChcbiAgICBtYWtlUmVxdWVzdChgZ2V0LW1ha2UtJHtpZH1gLCAoKSA9PiBheGlvcy5nZXQoYC9hcGkvY2FyLW1ha2VzLyR7aWR9YCkpXG4gIClcblxuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogYWN0aW9ucy5HRVRfTUFLRSxcbiAgICBtYWtlczogcmVzcG9uc2UuZGF0YS5kYXRhXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVNYWtlID0gZGF0YSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZGlzcGF0Y2goXG4gICAgbWFrZVJlcXVlc3QoJ2NyZWF0ZS1tYWtlJywgKCkgPT4gYXhpb3MucG9zdChgL2FwaS9jYXItbWFrZXNgLCBkYXRhKSlcbiAgKVxuXG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBhY3Rpb25zLkFERF9NQUtFLFxuICAgIG1ha2VzOiByZXNwb25zZS5kYXRhLmRhdGFcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZU1ha2UgPSBkYXRhID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkaXNwYXRjaChcbiAgICBtYWtlUmVxdWVzdChgdXBkYXRlLW1ha2UtJHtkYXRhLmlkfWAsICgpID0+XG4gICAgICBheGlvcy5wdXQoYC9hcGkvY2FyLW1ha2VzLyR7ZGF0YS5pZH1gLCBkYXRhKVxuICAgIClcbiAgKVxuXG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBhY3Rpb25zLlVQREFURV9NQUtFLFxuICAgIG1ha2VzOiByZXNwb25zZS5kYXRhLmRhdGFcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGRlbGV0ZU1ha2UgPSBpZCA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XG4gIGF3YWl0IGRpc3BhdGNoKFxuICAgIG1ha2VSZXF1ZXN0KGB1cGRhdGUtbWFrZS0ke2lkfWAsICgpID0+IGF4aW9zLmRlbGV0ZShgL2FwaS9jYXItbWFrZXMvJHtpZH1gKSlcbiAgKVxuXG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBhY3Rpb25zLkRFTEVURV9NQUtFLFxuICAgIGlkXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBzYXZlTWFrZSA9IG1ha2VEYXRhID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgY29uc3QgeyBpZCB9ID0gbWFrZURhdGFcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRpc3BhdGNoKFxuICAgIG1ha2VSZXF1ZXN0KCdzYXZlLW1ha2Utc2V0dGluZ3MnLCAoKSA9PlxuICAgICAgYXhpb3MucHV0KGAvYXBpL2Nhci1tYWtlcy8ke2lkfWAsIG1ha2VEYXRhKVxuICAgIClcbiAgKVxuXG4gIHJldHVybiByZXNwb25zZVxufVxuXG5cbiIsImltcG9ydCB7IGRlbm9ybWFsaXplIH0gZnJvbSAnbm9ybWFsaXpyJ1xuXG5pbXBvcnQgeyBlbnRpdGllcyBhcyBlbnRpdGllc1NjaGVtYSB9IGZyb20gJ3N0b3JlL3NjaGVtYXMnXG5cbmV4cG9ydCBjb25zdCBzZWxlY3RBbGxNYWtlcyA9IHN0YXRlID0+IHtcbiAgY29uc3QgZG5FbnRpdGllcyA9IGRlbm9ybWFsaXplKFxuICAgIHsgbWFrZXM6IE9iamVjdC5rZXlzKHN0YXRlLmVudGl0aWVzLm1ha2VzKSB9LFxuICAgIGVudGl0aWVzU2NoZW1hLFxuICAgIHN0YXRlLmVudGl0aWVzXG4gIClcblxuICByZXR1cm4gZG5FbnRpdGllcy5tYWtlc1xufVxuXG5leHBvcnQgY29uc3Qgc2VsZWN0TWFrZURldGFpbHMgPSAoc3RhdGUsIGlkKSA9PiB7XG5cbiAgY29uc3QgZG5FbnRpdGllcyA9IGRlbm9ybWFsaXplKFxuICAgIHsgbWFrZXM6IFtpZF0gfSxcbiAgICBlbnRpdGllc1NjaGVtYSxcbiAgICBzdGF0ZS5lbnRpdGllc1xuICApXG5cbiAgcmV0dXJuIGRuRW50aXRpZXMubWFrZXNcbn0iXSwic291cmNlUm9vdCI6IiJ9