(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./resources/assets/js/pages/Services/Services.jsx":
/*!*********************************************************!*\
  !*** ./resources/assets/js/pages/Services/Services.jsx ***!
  \*********************************************************/
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
/* harmony import */ var store_selectors_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! store/selectors/services */ "./resources/assets/js/store/selectors/services.js");
/* harmony import */ var store_selectors_session__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! store/selectors/session */ "./resources/assets/js/store/selectors/session/index.js");
/* harmony import */ var store_action_creators_services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! store/action-creators/services */ "./resources/assets/js/store/action-creators/services/index.js");
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
    label: 'General Services',
    value: 'General Services'
  }, {
    label: 'Brakes',
    value: 'Brakes'
  }, {
    label: 'Engine',
    value: 'Engine'
  }, {
    label: 'Clutch and Transmission',
    value: 'Clutch and Transmission'
  }, {
    label: 'Heating & AC',
    value: 'Heating & AC'
  }, {
    label: 'Suspension & Steering',
    value: 'Suspension & Steering'
  }, {
    label: 'Exterior & Interior',
    value: 'Exterior & Interior'
  }, {
    label: 'Electrical',
    value: 'Electrical'
  }, {
    label: 'Optional Services',
    value: 'Optional Services'
  }];
  console.log(values.type);
  const newLabel = optionTypes.filter(option => option.value == values.type);
  console.log(newLabel[0]);
  const [select, setSelect] = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(newLabel[0]);
  console.log(select);

  const handleSelectChange = event => {
    const value = event.value;
    const label = event.label;
    const name = 'type';
    setValues(_objectSpread({}, values, {
      [name]: value
    }));
    setSelect({
      value: value,
      label: label
    });
  };

  function getTypesOptions() {
    return axios.get("/api/car-makes").then(res => {
      return {
        options: res.data,
        complete: true
      };
    });
  }

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
  }, "Service Name"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
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
  }, "Service Type"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_14__["default"], {
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
  }, values.update, values.create))));
};

__signature__(ModalComponent, "useForm{{ values, touchedValues, errors, handleChange, handleSubmit, handleBlur, handleSelectChange, optionTypes, select }}", () => [useForm]);

const CreateModal = Object(recompose__WEBPACK_IMPORTED_MODULE_3__["compose"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])((state, ownProps) => ({
  initialValues: ownProps
}), (dispatch, {
  hideModal
}) => ({
  onSubmit: values => {
    dispatch(Object(store_action_creators_services__WEBPACK_IMPORTED_MODULE_12__["createService"])(values));
    dispatch(Object(store_action_creators_services__WEBPACK_IMPORTED_MODULE_12__["getServices"])());
    hideModal();
    Alert('success', 'Car Service created!');
  }
})), Object(redux_form__WEBPACK_IMPORTED_MODULE_4__["reduxForm"])({
  form: 'add-car-service'
}))(ModalComponent);
const UpdateModal = Object(recompose__WEBPACK_IMPORTED_MODULE_3__["compose"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])((state, ownProps) => ({
  initialValues: ownProps
}), (dispatch, {
  hideModal
}) => ({
  onSubmit: values => {
    dispatch(Object(store_action_creators_services__WEBPACK_IMPORTED_MODULE_12__["updateService"])(values));
    dispatch(Object(store_action_creators_services__WEBPACK_IMPORTED_MODULE_12__["getServices"])());
    hideModal();
    Alert('success', 'Car Service updated!');
  }
})), Object(redux_form__WEBPACK_IMPORTED_MODULE_4__["reduxForm"])({
  form: 'update-car-service'
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

function ServicesComponent({
  getServices,
  deleteService,
  services,
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

  const populateServices = async () => {
    await getServices();
  };

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(() => {
    populateServices();
  }, []);
  console.log(services);
  const columns = react__WEBPACK_IMPORTED_MODULE_6___default.a.useMemo(() => [{
    Header: 'Service Name',
    accessor: 'name',
    sortable: true
  }, {
    id: "type",
    accessor: 'type',
    Cell: row => {
      const type = row.row.original.type;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, type);
    },
    Header: 'Service Type',
    sortable: true,
    width: 45
  }, {
    id: "action",
    accessor: 'id',
    Cell: row => {
      const id = row.row.original.id;
      const name = row.row.original.name;
      const type = row.row.original.type;
      const header = 'Update Service';
      const className = "rounded-lg hidden md:block w-1/2 lg:w-1/3 overflow-visible";
      const update = "Update Service";
      console.log(row);
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "float-left"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Link"], {
        className: "bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-1 px-4 rounded",
        onClick: () => showModal(UpdateModal, {
          id,
          header,
          name,
          type,
          className,
          update
        }),
        to: "#"
      }, "Update"), ' ', react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Link"], {
        className: "bg-red-500 hover:bg-red-700 text-white text-xs font-bold py-1 px-4 rounded",
        onClick: () => deleteService(id),
        to: "#"
      }, "Delete"));
    },
    Header: 'Action',
    sortable: false,
    width: 45
  }], []);
  const [filteredData, setFilteredData] = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(services);

  const handleSetData = services => {
    setFilteredData(services);
  };

  const header = "Add New Car Service";
  const className = "rounded-lg hidden md:block w-1/2 lg:w-1/3 overflow-visible";
  const create = "Create New Car Service";
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "bb-white px-10 py-5"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_8__["PageHeader"], {
    title: "Car Services",
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
    data: services
  })));
}

__signature__(ServicesComponent, "useModal{{ showModal }}\nuseEffect{}\nuseMemo{columns}\nuseState{[filteredData, setFilteredData](services)}", () => [react_context_modals__WEBPACK_IMPORTED_MODULE_7__["useModal"]]);

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(state => ({
  services: Object(store_selectors_services__WEBPACK_IMPORTED_MODULE_10__["selectAllServices"])(state),
  user: Object(store_selectors_session__WEBPACK_IMPORTED_MODULE_11__["currentUserSelector"])(state)
}), dispatch => ({
  getServices: () => dispatch(Object(store_action_creators_services__WEBPACK_IMPORTED_MODULE_12__["getServices"])()),
  deleteService: id => {
    sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.value) {
        dispatch(Object(store_action_creators_services__WEBPACK_IMPORTED_MODULE_12__["deleteService"])(id));
        Alert('success', 'Car Service successfully deleted!');
      }
    });
  }
}))(ServicesComponent);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useForm, "useForm", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Services/Services.jsx");
  reactHotLoader.register(ModalComponent, "ModalComponent", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Services/Services.jsx");
  reactHotLoader.register(CreateModal, "CreateModal", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Services/Services.jsx");
  reactHotLoader.register(UpdateModal, "UpdateModal", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Services/Services.jsx");
  reactHotLoader.register(Toast, "Toast", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Services/Services.jsx");
  reactHotLoader.register(Alert, "Alert", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Services/Services.jsx");
  reactHotLoader.register(ServicesComponent, "ServicesComponent", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Services/Services.jsx");
  reactHotLoader.register(_default, "default", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Services/Services.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/store/action-creators/services/index.js":
/*!*********************************************************************!*\
  !*** ./resources/assets/js/store/action-creators/services/index.js ***!
  \*********************************************************************/
/*! exports provided: saveService, getServices, createService, getService, updateService, deleteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ "./resources/assets/js/store/action-creators/services/services.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveService", function() { return _services__WEBPACK_IMPORTED_MODULE_0__["saveService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getServices", function() { return _services__WEBPACK_IMPORTED_MODULE_0__["getServices"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createService", function() { return _services__WEBPACK_IMPORTED_MODULE_0__["createService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getService", function() { return _services__WEBPACK_IMPORTED_MODULE_0__["getService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateService", function() { return _services__WEBPACK_IMPORTED_MODULE_0__["updateService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteService", function() { return _services__WEBPACK_IMPORTED_MODULE_0__["deleteService"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



/***/ }),

/***/ "./resources/assets/js/store/action-creators/services/services.js":
/*!************************************************************************!*\
  !*** ./resources/assets/js/store/action-creators/services/services.js ***!
  \************************************************************************/
/*! exports provided: getServices, getService, createService, updateService, deleteService, saveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServices", function() { return getServices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getService", function() { return getService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createService", function() { return createService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateService", function() { return updateService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteService", function() { return deleteService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveService", function() { return saveService; });
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




const getServices = () => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])('get-services', () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/services")));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["serviceActions"].ADD_SERVICES,
    services: response.data.data
  });
};
const getService = id => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])("get-service-".concat(id), () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/services/".concat(id))));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["serviceActions"].GET_SERVICE,
    services: response.data.data
  });
};
const createService = data => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])('create-service', () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/services", data)));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["serviceActions"].ADD_SERVICE,
    services: response.data.data
  });
};
const updateService = data => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])("update-service-".concat(data.id), () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/services/".concat(data.id), data)));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["serviceActions"].UPDATE_SERVICE,
    services: response.data.data
  });
};
const deleteService = id => async dispatch => {
  await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])("update-service-".concat(id), () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("/api/services/".concat(id))));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["serviceActions"].DELETE_SERVICE,
    id
  });
};
const saveService = serviceData => async dispatch => {
  const {
    id
  } = serviceData;
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])('save-service-settings', () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/services/".concat(id), serviceData)));
  return response;
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getServices, "getServices", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/services/services.js");
  reactHotLoader.register(getService, "getService", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/services/services.js");
  reactHotLoader.register(createService, "createService", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/services/services.js");
  reactHotLoader.register(updateService, "updateService", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/services/services.js");
  reactHotLoader.register(deleteService, "deleteService", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/services/services.js");
  reactHotLoader.register(saveService, "saveService", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/services/services.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/store/selectors/services.js":
/*!*********************************************************!*\
  !*** ./resources/assets/js/store/selectors/services.js ***!
  \*********************************************************/
/*! exports provided: selectAllServices, selectServiceDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllServices", function() { return selectAllServices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectServiceDetails", function() { return selectServiceDetails; });
/* harmony import */ var normalizr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalizr */ "./node_modules/normalizr/dist/normalizr.es.js");
/* harmony import */ var store_schemas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! store/schemas */ "./resources/assets/js/store/schemas.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



const selectAllServices = state => {
  const dnEntities = Object(normalizr__WEBPACK_IMPORTED_MODULE_0__["denormalize"])({
    services: Object.keys(state.entities.services)
  }, store_schemas__WEBPACK_IMPORTED_MODULE_1__["entities"], state.entities);
  return dnEntities.services;
};
const selectServiceDetails = (state, slug) => {
  const dnEntities = Object(normalizr__WEBPACK_IMPORTED_MODULE_0__["denormalize"])({
    services: [slug]
  }, store_schemas__WEBPACK_IMPORTED_MODULE_1__["entities"], state.entities);
  return dnEntities.services;
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(selectAllServices, "selectAllServices", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/selectors/services.js");
  reactHotLoader.register(selectServiceDetails, "selectServiceDetails", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/selectors/services.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL1NlcnZpY2VzL1NlcnZpY2VzLmpzeCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL2FjdGlvbi1jcmVhdG9ycy9zZXJ2aWNlcy9zZXJ2aWNlcy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL3NlbGVjdG9ycy9zZXJ2aWNlcy5qcyJdLCJuYW1lcyI6WyJ1c2VGb3JtIiwiaW5pdGlhbFZhbHVlcyIsIm9uU3VibWl0IiwidmFsaWRhdGUiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwidG91Y2hlZFZhbHVlcyIsInNldFRvdWNoZWRWYWx1ZXMiLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwibmFtZSIsImhhbmRsZUJsdXIiLCJlIiwiaGFuZGxlU3VibWl0Iiwib3B0aW9uVHlwZXMiLCJsYWJlbCIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwibmV3TGFiZWwiLCJmaWx0ZXIiLCJvcHRpb24iLCJzZWxlY3QiLCJzZXRTZWxlY3QiLCJoYW5kbGVTZWxlY3RDaGFuZ2UiLCJnZXRUeXBlc09wdGlvbnMiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJvcHRpb25zIiwiZGF0YSIsImNvbXBsZXRlIiwiTW9kYWxDb21wb25lbnQiLCJoZWFkZXIiLCJpZCIsInVwZGF0ZSIsImNyZWF0ZSIsIkNyZWF0ZU1vZGFsIiwiY29tcG9zZSIsImNvbm5lY3QiLCJzdGF0ZSIsIm93blByb3BzIiwiZGlzcGF0Y2giLCJoaWRlTW9kYWwiLCJjcmVhdGVTZXJ2aWNlQWN0aW9uIiwiZ2V0U2VydmljZXNBY3Rpb24iLCJBbGVydCIsInJlZHV4Rm9ybSIsImZvcm0iLCJVcGRhdGVNb2RhbCIsInVwZGF0ZVNlcnZpY2VBY3Rpb24iLCJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGl0bGUiLCJmaXJlIiwiU2VydmljZXNDb21wb25lbnQiLCJnZXRTZXJ2aWNlcyIsImRlbGV0ZVNlcnZpY2UiLCJzZXJ2aWNlcyIsInVzZXIiLCJ1c2VyX3R5cGUiLCJzaG93TW9kYWwiLCJ1c2VNb2RhbCIsInBvcHVsYXRlU2VydmljZXMiLCJ1c2VFZmZlY3QiLCJjb2x1bW5zIiwidXNlTWVtbyIsIkhlYWRlciIsImFjY2Vzc29yIiwic29ydGFibGUiLCJDZWxsIiwicm93Iiwib3JpZ2luYWwiLCJ3aWR0aCIsImNsYXNzTmFtZSIsImZpbHRlcmVkRGF0YSIsInNldEZpbHRlcmVkRGF0YSIsImhhbmRsZVNldERhdGEiLCJzZWxlY3RBbGxTZXJ2aWNlcyIsImN1cnJlbnRVc2VyU2VsZWN0b3IiLCJ0ZXh0Iiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25Db2xvciIsImNhbmNlbEJ1dHRvbkNvbG9yIiwiY29uZmlybUJ1dHRvblRleHQiLCJyZXN1bHQiLCJkZWxldGVTZXJ2aWNlQWN0aW9uIiwicmVzcG9uc2UiLCJtYWtlUmVxdWVzdCIsImFjdGlvbnMiLCJBRERfU0VSVklDRVMiLCJnZXRTZXJ2aWNlIiwiR0VUX1NFUlZJQ0UiLCJjcmVhdGVTZXJ2aWNlIiwicG9zdCIsIkFERF9TRVJWSUNFIiwidXBkYXRlU2VydmljZSIsInB1dCIsIlVQREFURV9TRVJWSUNFIiwiZGVsZXRlIiwiREVMRVRFX1NFUlZJQ0UiLCJzYXZlU2VydmljZSIsInNlcnZpY2VEYXRhIiwiZG5FbnRpdGllcyIsImRlbm9ybWFsaXplIiwiT2JqZWN0Iiwia2V5cyIsImVudGl0aWVzIiwiZW50aXRpZXNTY2hlbWEiLCJzZWxlY3RTZXJ2aWNlRGV0YWlscyIsInNsdWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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SUFBUCxDQUFZdkUsS0FBSyxDQUFDd0UsUUFBTixDQUFlakQsUUFBM0I7QUFBWixHQUQ0QixFQUU1QmtELHNEQUY0QixFQUc1QnpFLEtBQUssQ0FBQ3dFLFFBSHNCLENBQTlCO0FBTUEsU0FBT0osVUFBVSxDQUFDN0MsUUFBbEI7QUFDRCxDQVJNO0FBVUEsTUFBTW1ELG9CQUFvQixHQUFHLENBQUMxRSxLQUFELEVBQVEyRSxJQUFSLEtBQWlCO0FBRW5ELFFBQU1QLFVBQVUsR0FBR0MsNkRBQVcsQ0FDNUI7QUFBRTlDLFlBQVEsRUFBRSxDQUFDb0QsSUFBRDtBQUFaLEdBRDRCLEVBRTVCRixzREFGNEIsRUFHNUJ6RSxLQUFLLENBQUN3RSxRQUhzQixDQUE5QjtBQU1BLFNBQU9KLFVBQVUsQ0FBQzdDLFFBQWxCO0FBQ0QsQ0FUTTs7Ozs7Ozs7OzswQkFWTW9CLGlCOzBCQVVBK0Isb0IiLCJmaWxlIjoianMvMjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVsbWV0IGZyb20gJ3JlYWN0LWhlbG1ldCdcbmltcG9ydCB7IGNvbXBvc2UgfSBmcm9tICdyZWNvbXBvc2UnXG5pbXBvcnQgeyByZWR1eEZvcm0sIEZpZWxkIH0gZnJvbSAncmVkdXgtZm9ybSdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlTW9kYWwgfSBmcm9tICdyZWFjdC1jb250ZXh0LW1vZGFscydcbmltcG9ydCB7IE5ldXRyYWxCdXR0b24sIFBhZ2VIZWFkZXIsIERhdGFUYWJsZSB9IGZyb20gJ2NvbXBvbmVudHMnXG5cbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJ1xuaW1wb3J0IHsgc2VsZWN0QWxsU2VydmljZXMgfSBmcm9tICdzdG9yZS9zZWxlY3RvcnMvc2VydmljZXMnXG5pbXBvcnQgeyBjdXJyZW50VXNlclNlbGVjdG9yIH0gZnJvbSAnc3RvcmUvc2VsZWN0b3JzL3Nlc3Npb24nXG5pbXBvcnQge1xuICBnZXRTZXJ2aWNlcyBhcyBnZXRTZXJ2aWNlc0FjdGlvbixcbiAgdXBkYXRlU2VydmljZSBhcyB1cGRhdGVTZXJ2aWNlQWN0aW9uLFxuICBjcmVhdGVTZXJ2aWNlIGFzIGNyZWF0ZVNlcnZpY2VBY3Rpb24sXG4gIGRlbGV0ZVNlcnZpY2UgYXMgZGVsZXRlU2VydmljZUFjdGlvblxufSBmcm9tICdzdG9yZS9hY3Rpb24tY3JlYXRvcnMvc2VydmljZXMnXG5pbXBvcnQgeyBMaW5rLCBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdCdcblxuZXhwb3J0IGNvbnN0IHVzZUZvcm0gPSAoeyBpbml0aWFsVmFsdWVzLCBvblN1Ym1pdCwgdmFsaWRhdGUgfSkgPT4ge1xuICAgIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSBSZWFjdC51c2VTdGF0ZShpbml0aWFsVmFsdWVzIHx8IHt9KVxuICAgIGNvbnN0IFt0b3VjaGVkVmFsdWVzLCBzZXRUb3VjaGVkVmFsdWVzXSA9IFJlYWN0LnVzZVN0YXRlKHt9KVxuICAgIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSBSZWFjdC51c2VTdGF0ZSh7fSlcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldFxuICAgICAgY29uc3QgdmFsdWUgPSB0YXJnZXQudmFsdWVcbiAgICAgIGNvbnN0IG5hbWUgPSB0YXJnZXQubmFtZVxuICAgICAgc2V0VmFsdWVzKHtcbiAgICAgICAgLi4udmFsdWVzLFxuICAgICAgICBbbmFtZV06IHZhbHVlXG4gICAgICB9KVxuICAgIH1cbiAgXG4gICAgY29uc3QgaGFuZGxlQmx1ciA9IGV2ZW50ID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldFxuICAgICAgY29uc3QgbmFtZSA9IHRhcmdldC5uYW1lXG4gICAgICBzZXRUb3VjaGVkVmFsdWVzKHtcbiAgICAgICAgLi4udG91Y2hlZFZhbHVlcyxcbiAgICAgICAgW25hbWVdOiB0cnVlXG4gICAgICB9KVxuICAgICAgY29uc3QgZSA9IHZhbGlkYXRlKHZhbHVlcylcbiAgICAgIHNldEVycm9ycyh7XG4gICAgICAgIC4uLmVycm9ycyxcbiAgICAgICAgLi4uZVxuICAgICAgfSlcbiAgICB9XG4gIFxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGV2ZW50ID0+IHtcblxuICAgICAgY29uc3QgZSA9IHZhbGlkYXRlKHZhbHVlcylcbiAgICAgIHNldEVycm9ycyh7XG4gICAgICAgIC4uLmVycm9ycyxcbiAgICAgICAgLi4uZVxuICAgICAgfSlcbiAgXG4gICAgICBvblN1Ym1pdCh7IC4uLnZhbHVlcywgZSB9KVxuICAgIH1cbiAgICBjb25zdCBvcHRpb25UeXBlcyA9IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdHZW5lcmFsIFNlcnZpY2VzJyxcbiAgICAgICAgdmFsdWU6ICdHZW5lcmFsIFNlcnZpY2VzJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnQnJha2VzJyxcbiAgICAgICAgdmFsdWU6ICdCcmFrZXMnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdFbmdpbmUnLFxuICAgICAgICB2YWx1ZTogJ0VuZ2luZScsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogJ0NsdXRjaCBhbmQgVHJhbnNtaXNzaW9uJyxcbiAgICAgICAgdmFsdWU6ICdDbHV0Y2ggYW5kIFRyYW5zbWlzc2lvbicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogJ0hlYXRpbmcgJiBBQycsXG4gICAgICAgIHZhbHVlOiAnSGVhdGluZyAmIEFDJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnU3VzcGVuc2lvbiAmIFN0ZWVyaW5nJyxcbiAgICAgICAgdmFsdWU6ICdTdXNwZW5zaW9uICYgU3RlZXJpbmcnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdFeHRlcmlvciAmIEludGVyaW9yJyxcbiAgICAgICAgdmFsdWU6ICdFeHRlcmlvciAmIEludGVyaW9yJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnRWxlY3RyaWNhbCcsXG4gICAgICAgIHZhbHVlOiAnRWxlY3RyaWNhbCcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogJ09wdGlvbmFsIFNlcnZpY2VzJyxcbiAgICAgICAgdmFsdWU6ICdPcHRpb25hbCBTZXJ2aWNlcycsXG4gICAgICB9XG4gICAgXVxuICAgIGNvbnNvbGUubG9nKHZhbHVlcy50eXBlKVxuICAgIGNvbnN0IG5ld0xhYmVsID0gb3B0aW9uVHlwZXMuZmlsdGVyKG9wdGlvbiA9PiBvcHRpb24udmFsdWUgPT0gdmFsdWVzLnR5cGUpXG5cbiAgICBjb25zb2xlLmxvZyhuZXdMYWJlbFswXSlcbiAgICBjb25zdCBbc2VsZWN0LCBzZXRTZWxlY3RdID0gUmVhY3QudXNlU3RhdGUobmV3TGFiZWxbMF0pXG4gICAgY29uc29sZS5sb2coc2VsZWN0KVxuICAgIGNvbnN0IGhhbmRsZVNlbGVjdENoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudmFsdWVcbiAgICAgIGNvbnN0IGxhYmVsID0gZXZlbnQubGFiZWxcbiAgICAgIGNvbnN0IG5hbWUgPSAndHlwZSdcbiAgICAgIHNldFZhbHVlcyh7XG4gICAgICAgIC4uLnZhbHVlcyxcbiAgICAgICAgW25hbWVdOiB2YWx1ZVxuICAgICAgfSlcbiAgICAgIHNldFNlbGVjdCh7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSwgbGFiZWw6IGxhYmVsXG4gICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFR5cGVzT3B0aW9ucyAoKSB7XG5cbiAgICAgIHJldHVybiBheGlvcy5nZXQoYC9hcGkvY2FyLW1ha2VzYClcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgcmV0dXJuIHtvcHRpb25zOiByZXMuZGF0YSwgY29tcGxldGU6IHRydWV9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWVzLFxuICAgICAgdG91Y2hlZFZhbHVlcyxcbiAgICAgIGVycm9ycyxcbiAgICAgIGhhbmRsZUNoYW5nZSxcbiAgICAgIGhhbmRsZVN1Ym1pdCxcbiAgICAgIGhhbmRsZUJsdXIsXG4gICAgICBoYW5kbGVTZWxlY3RDaGFuZ2UsXG4gICAgICBvcHRpb25UeXBlcyxcbiAgICAgIHNlbGVjdFxuICAgIH1cbiAgfVxuXG5leHBvcnQgY29uc3QgTW9kYWxDb21wb25lbnQgPSAoeyBvblN1Ym1pdCwgaW5pdGlhbFZhbHVlcyB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKGluaXRpYWxWYWx1ZXMpXG4gIGNvbnN0IHsgdmFsdWVzLCB0b3VjaGVkVmFsdWVzLCBlcnJvcnMsIGhhbmRsZUNoYW5nZSwgaGFuZGxlU3VibWl0LCBoYW5kbGVCbHVyLCBoYW5kbGVTZWxlY3RDaGFuZ2UsIG9wdGlvblR5cGVzLCBzZWxlY3QgfSA9IHVzZUZvcm0oe1xuICAgIGluaXRpYWxWYWx1ZXMsXG4gICAgb25TdWJtaXQsXG4gICAgdmFsaWRhdGUodmFsdWVzKSB7XG4gICAgICBjb25zdCBlcnJvcnMgPSB7fVxuXG4gICAgICBpZiAodmFsdWVzLm5hbWUgPT09IFwiXCIpIHtcbiAgICAgICAgZXJyb3JzLm5hbWUgPSBcIlBsZWFzZSBzcGVjaWZ5IGEgbmFtZVwiXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBlcnJvcnNcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3Jvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNSBwYi01IGJvcmRlci1iXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTEwIHRleHQtYmFzZSB0ZXh0LWdyYXktNzAwXCI+e3ZhbHVlcy5oZWFkZXJ9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTEwIHB0LTUgcGItMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGwgcHktMlwiPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgbWItMlwiPlNlcnZpY2UgTmFtZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIGNsYXNzTmFtZT1cInctZnVsbCBwLTIgYm9yZGVyXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gdmFsdWU9e3ZhbHVlcy5uYW1lfS8+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9jayB3LWZ1bGwgcHktMic+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidHlwZV9pZFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBtYi0yXCI+U2VydmljZSBUeXBlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxTZWxlY3QgY2xhc3NOYW1lPVwidy1mdWxsXCIgdmFsdWU9e3NlbGVjdH0gb25DaGFuZ2U9e2hhbmRsZVNlbGVjdENoYW5nZX0gbmFtZT1cInR5cGVcIiBvcHRpb25zPXtvcHRpb25UeXBlc30gLz5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiaWRcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSB2YWx1ZT17dmFsdWVzLmlkfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0IHB4LTEwIHBiLTVcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBwLTMgYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDBcIiB0eXBlPVwic3VibWl0XCI+e3ZhbHVlcy51cGRhdGV9e3ZhbHVlcy5jcmVhdGV9PC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICApXG59XG5cbmNvbnN0IENyZWF0ZU1vZGFsID0gY29tcG9zZShcbiAgY29ubmVjdChcbiAgICAoc3RhdGUsIG93blByb3BzKSA9PiAoe1xuICAgICAgaW5pdGlhbFZhbHVlczogb3duUHJvcHNcbiAgICB9KSxcbiAgICAoZGlzcGF0Y2gsIHsgaGlkZU1vZGFsIH0pID0+ICh7XG4gICAgICBvblN1Ym1pdDogdmFsdWVzID0+IHtcbiAgICAgICAgZGlzcGF0Y2goY3JlYXRlU2VydmljZUFjdGlvbih2YWx1ZXMpKVxuICAgICAgICBkaXNwYXRjaChnZXRTZXJ2aWNlc0FjdGlvbigpKVxuICAgICAgICBoaWRlTW9kYWwoKVxuICAgICAgICBBbGVydCgnc3VjY2VzcycsICdDYXIgU2VydmljZSBjcmVhdGVkIScpXG4gICAgICB9XG4gICAgfSlcbiAgKSxcbiAgcmVkdXhGb3JtKHtcbiAgICBmb3JtOiAnYWRkLWNhci1zZXJ2aWNlJ1xuICB9KVxuKShNb2RhbENvbXBvbmVudClcblxuY29uc3QgVXBkYXRlTW9kYWwgPSBjb21wb3NlKFxuICBjb25uZWN0KFxuICAgIChzdGF0ZSwgb3duUHJvcHMpID0+ICh7XG4gICAgICBpbml0aWFsVmFsdWVzOiBvd25Qcm9wc1xuICAgIH0pLFxuICAgIChkaXNwYXRjaCwgeyBoaWRlTW9kYWwgfSkgPT4gKHtcbiAgICAgIG9uU3VibWl0OiB2YWx1ZXMgPT4ge1xuICAgICAgICBkaXNwYXRjaCh1cGRhdGVTZXJ2aWNlQWN0aW9uKHZhbHVlcykpXG4gICAgICAgIGRpc3BhdGNoKGdldFNlcnZpY2VzQWN0aW9uKCkpXG4gICAgICAgIGhpZGVNb2RhbCgpXG4gICAgICAgIEFsZXJ0KCdzdWNjZXNzJywgJ0NhciBTZXJ2aWNlIHVwZGF0ZWQhJylcbiAgICAgIH1cbiAgICB9KVxuICApLFxuICByZWR1eEZvcm0oe1xuICAgIGZvcm06ICd1cGRhdGUtY2FyLXNlcnZpY2UnXG4gIH0pXG4pKE1vZGFsQ29tcG9uZW50KVxuXG5jb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xuICB0b2FzdDogdHJ1ZSxcbiAgcG9zaXRpb246ICd0b3AtZW5kJyxcbiAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxuICB0aW1lcjogMzAwMFxufSlcblxuY29uc3QgQWxlcnQgPSAodHlwZSwgdGl0bGUpID0+IFRvYXN0LmZpcmUoe1xuICB0eXBlOiB0eXBlLFxuICB0aXRsZTogdGl0bGVcbn0pXG5cblxuXG5mdW5jdGlvbiBTZXJ2aWNlc0NvbXBvbmVudCh7IGdldFNlcnZpY2VzLCBkZWxldGVTZXJ2aWNlLCBzZXJ2aWNlcywgdXNlciB9KSB7XG4gIGNvbnN0IHsgdXNlcl90eXBlIH0gPSB1c2VyXG5cbiAgaWYgKHVzZXJfdHlwZSAhPSAnYWRtaW4nKSB7XG4gICAgcmV0dXJuIDxSZWRpcmVjdCBmcm9tPScvYWNjb3VudCcgdG89XCIvYWNjb3VudC9vdmVydmlld1wiIC8+XG4gIH1cbiAgY29uc3QgeyBzaG93TW9kYWwgfSA9IHVzZU1vZGFsKClcbiAgY29uc3QgcG9wdWxhdGVTZXJ2aWNlcyA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBnZXRTZXJ2aWNlcygpXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHBvcHVsYXRlU2VydmljZXMoKVxuICB9LCBbXSlcblxuICBjb25zb2xlLmxvZyhzZXJ2aWNlcylcblxuICBjb25zdCBjb2x1bW5zID0gUmVhY3QudXNlTWVtbyhcbiAgICAoKSA9PiBbXG4gICAgICB7XG4gICAgICAgIEhlYWRlcjogJ1NlcnZpY2UgTmFtZScsXG4gICAgICAgIGFjY2Vzc29yOiAnbmFtZScsXG4gICAgICAgIHNvcnRhYmxlOiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogXCJ0eXBlXCIsXG4gICAgICAgIGFjY2Vzc29yOiAndHlwZScsXG4gICAgICAgIENlbGw6IHJvdyA9PiB7XG4gICAgICAgICAgY29uc3QgdHlwZSA9IHJvdy5yb3cub3JpZ2luYWwudHlwZVxuICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDw+e3R5cGV9PC8+XG4gICAgICAgICAgKVxuICAgICAgICB9LFxuICAgICAgICBIZWFkZXI6ICdTZXJ2aWNlIFR5cGUnLFxuICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgICAgd2lkdGg6IDQ1XG4gICAgICB9LCAgICBcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwiYWN0aW9uXCIsXG4gICAgICAgIGFjY2Vzc29yOiAnaWQnLFxuICAgICAgICBDZWxsOiByb3cgPT4ge1xuICAgICAgICAgIGNvbnN0IGlkID0gcm93LnJvdy5vcmlnaW5hbC5pZFxuICAgICAgICAgIGNvbnN0IG5hbWUgPSByb3cucm93Lm9yaWdpbmFsLm5hbWVcbiAgICAgICAgICBjb25zdCB0eXBlID0gcm93LnJvdy5vcmlnaW5hbC50eXBlXG4gICAgICAgICAgY29uc3QgaGVhZGVyID0gJ1VwZGF0ZSBTZXJ2aWNlJ1xuICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IFwicm91bmRlZC1sZyBoaWRkZW4gbWQ6YmxvY2sgdy0xLzIgbGc6dy0xLzMgb3ZlcmZsb3ctdmlzaWJsZVwiXG4gICAgICAgICAgY29uc3QgdXBkYXRlID0gXCJVcGRhdGUgU2VydmljZVwiXG4gICAgICAgICAgY29uc29sZS5sb2cocm93KVxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0LWxlZnRcIj5cbiAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSB0ZXh0LXhzIGZvbnQtYm9sZCBweS0xIHB4LTQgcm91bmRlZFwiIFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICBzaG93TW9kYWwoVXBkYXRlTW9kYWwsIHsgaWQsIGhlYWRlciwgbmFtZSwgdHlwZSwgY2xhc3NOYW1lLCB1cGRhdGUgfSlcbiAgICAgICAgICAgICAgICB9IHRvPVwiI1wiPlxuICAgICAgICAgICAgICAgIFVwZGF0ZVxuICAgICAgICAgICAgICA8L0xpbms+eycgJ31cbiAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiYmctcmVkLTUwMCBob3ZlcjpiZy1yZWQtNzAwIHRleHQtd2hpdGUgdGV4dC14cyBmb250LWJvbGQgcHktMSBweC00IHJvdW5kZWRcIiBvbkNsaWNrPXsoKSA9PiBkZWxldGVTZXJ2aWNlKGlkKX0gdG89XCIjXCI+XG4gICAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfSxcbiAgICAgICAgSGVhZGVyOiAnQWN0aW9uJyxcbiAgICAgICAgc29ydGFibGU6IGZhbHNlLFxuICAgICAgICB3aWR0aDogNDVcbiAgICAgIH0sXG4gICAgXSxcbiAgICBbXVxuICApXG5cblxuICBjb25zdCBbZmlsdGVyZWREYXRhLCBzZXRGaWx0ZXJlZERhdGFdID0gdXNlU3RhdGUoc2VydmljZXMpXG4gIGNvbnN0IGhhbmRsZVNldERhdGEgPSBzZXJ2aWNlcyA9PiB7XG4gICAgc2V0RmlsdGVyZWREYXRhKHNlcnZpY2VzKVxuICB9XG4gIGNvbnN0IGhlYWRlciA9IFwiQWRkIE5ldyBDYXIgU2VydmljZVwiXG4gIGNvbnN0IGNsYXNzTmFtZSA9IFwicm91bmRlZC1sZyBoaWRkZW4gbWQ6YmxvY2sgdy0xLzIgbGc6dy0xLzMgb3ZlcmZsb3ctdmlzaWJsZVwiXG4gIGNvbnN0IGNyZWF0ZSA9IFwiQ3JlYXRlIE5ldyBDYXIgU2VydmljZVwiXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYi13aGl0ZSBweC0xMCBweS01XCI+XG4gICAgICA8UGFnZUhlYWRlciB0aXRsZT1cIkNhciBTZXJ2aWNlc1wiIHN1YlRpdGxlPVwiTWFzdGVyIExpc3RcIiA+XG4gICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cIm1sLTIgYmctZ3JheS0zMDAgaG92ZXI6YmctZ3JheS00MDAgdGV4dC1ncmF5LTgwMCBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyXCIgXG4gICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgIHNob3dNb2RhbChDcmVhdGVNb2RhbCwge2hlYWRlciwgY2xhc3NOYW1lLCBjcmVhdGV9KVxuICAgICAgICAgIH0gdG89XCIjXCI+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5hZGQ8L2k+IEFkZCBOZXdcbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9QYWdlSGVhZGVyPlxuXG4gICAgICAgIDxEYXRhVGFibGUgY29sdW1ucz17Y29sdW1uc30gZGF0YT17c2VydmljZXN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L0ZyYWdtZW50PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+ICh7XG4gICAgc2VydmljZXM6IHNlbGVjdEFsbFNlcnZpY2VzKHN0YXRlKSxcbiAgICB1c2VyOiBjdXJyZW50VXNlclNlbGVjdG9yKHN0YXRlKVxuICB9KSxcbiAgZGlzcGF0Y2ggPT4gKHtcbiAgICBnZXRTZXJ2aWNlczogKCkgPT4gZGlzcGF0Y2goZ2V0U2VydmljZXNBY3Rpb24oKSksXG4gICAgZGVsZXRlU2VydmljZTogaWQgPT4ge1xuICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgdGl0bGU6ICdBcmUgeW91IHN1cmU/JyxcbiAgICAgICAgdGV4dDogXCJZb3Ugd29uJ3QgYmUgYWJsZSB0byByZXZlcnQgdGhpcyFcIixcbiAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiAnIzMwODVkNicsXG4gICAgICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiAnI2QzMycsXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnWWVzLCBkZWxldGUgaXQhJ1xuICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICAgICAgICBkaXNwYXRjaChkZWxldGVTZXJ2aWNlQWN0aW9uKGlkKSlcbiAgICAgICAgICBBbGVydCgnc3VjY2VzcycsICdDYXIgU2VydmljZSBzdWNjZXNzZnVsbHkgZGVsZXRlZCEnKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfSlcbikoU2VydmljZXNDb21wb25lbnQpIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgc2VydmljZUFjdGlvbnMgYXMgYWN0aW9ucyB9IGZyb20gJ3N0b3JlL2FjdGlvbnMnXG5pbXBvcnQgeyBtYWtlUmVxdWVzdCB9IGZyb20gJ3N0b3JlL2FjdGlvbi1jcmVhdG9ycy9yZXF1ZXN0cydcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZpY2VzID0gKCkgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRpc3BhdGNoKFxuICAgIG1ha2VSZXF1ZXN0KCdnZXQtc2VydmljZXMnLCAoKSA9PiBheGlvcy5nZXQoYC9hcGkvc2VydmljZXNgKSlcbiAgKVxuXG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBhY3Rpb25zLkFERF9TRVJWSUNFUyxcbiAgICBzZXJ2aWNlczogcmVzcG9uc2UuZGF0YS5kYXRhXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2aWNlID0gaWQgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRpc3BhdGNoKFxuICAgIG1ha2VSZXF1ZXN0KGBnZXQtc2VydmljZS0ke2lkfWAsICgpID0+IGF4aW9zLmdldChgL2FwaS9zZXJ2aWNlcy8ke2lkfWApKVxuICApXG5cbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IGFjdGlvbnMuR0VUX1NFUlZJQ0UsXG4gICAgc2VydmljZXM6IHJlc3BvbnNlLmRhdGEuZGF0YVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlU2VydmljZSA9IGRhdGEgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRpc3BhdGNoKFxuICAgIG1ha2VSZXF1ZXN0KCdjcmVhdGUtc2VydmljZScsICgpID0+IGF4aW9zLnBvc3QoYC9hcGkvc2VydmljZXNgLCBkYXRhKSlcbiAgKVxuXG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBhY3Rpb25zLkFERF9TRVJWSUNFLFxuICAgIHNlcnZpY2VzOiByZXNwb25zZS5kYXRhLmRhdGFcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVNlcnZpY2UgPSBkYXRhID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkaXNwYXRjaChcbiAgICBtYWtlUmVxdWVzdChgdXBkYXRlLXNlcnZpY2UtJHtkYXRhLmlkfWAsICgpID0+XG4gICAgICBheGlvcy5wdXQoYC9hcGkvc2VydmljZXMvJHtkYXRhLmlkfWAsIGRhdGEpXG4gICAgKVxuICApXG5cbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IGFjdGlvbnMuVVBEQVRFX1NFUlZJQ0UsXG4gICAgc2VydmljZXM6IHJlc3BvbnNlLmRhdGEuZGF0YVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgZGVsZXRlU2VydmljZSA9IGlkID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgYXdhaXQgZGlzcGF0Y2goXG4gICAgbWFrZVJlcXVlc3QoYHVwZGF0ZS1zZXJ2aWNlLSR7aWR9YCwgKCkgPT4gYXhpb3MuZGVsZXRlKGAvYXBpL3NlcnZpY2VzLyR7aWR9YCkpXG4gIClcblxuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogYWN0aW9ucy5ERUxFVEVfU0VSVklDRSxcbiAgICBpZFxuICB9KVxufVxuXG5leHBvcnQgY29uc3Qgc2F2ZVNlcnZpY2UgPSBzZXJ2aWNlRGF0YSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XG4gIGNvbnN0IHsgaWQgfSA9IHNlcnZpY2VEYXRhXG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkaXNwYXRjaChcbiAgICBtYWtlUmVxdWVzdCgnc2F2ZS1zZXJ2aWNlLXNldHRpbmdzJywgKCkgPT5cbiAgICAgIGF4aW9zLnB1dChgL2FwaS9zZXJ2aWNlcy8ke2lkfWAsIHNlcnZpY2VEYXRhKVxuICAgIClcbiAgKVxuXG4gIHJldHVybiByZXNwb25zZVxufVxuXG5cbiIsImltcG9ydCB7IGRlbm9ybWFsaXplIH0gZnJvbSAnbm9ybWFsaXpyJ1xuXG5pbXBvcnQgeyBlbnRpdGllcyBhcyBlbnRpdGllc1NjaGVtYSB9IGZyb20gJ3N0b3JlL3NjaGVtYXMnXG5cbmV4cG9ydCBjb25zdCBzZWxlY3RBbGxTZXJ2aWNlcyA9IHN0YXRlID0+IHtcbiAgY29uc3QgZG5FbnRpdGllcyA9IGRlbm9ybWFsaXplKFxuICAgIHsgc2VydmljZXM6IE9iamVjdC5rZXlzKHN0YXRlLmVudGl0aWVzLnNlcnZpY2VzKSB9LFxuICAgIGVudGl0aWVzU2NoZW1hLFxuICAgIHN0YXRlLmVudGl0aWVzXG4gIClcblxuICByZXR1cm4gZG5FbnRpdGllcy5zZXJ2aWNlc1xufVxuXG5leHBvcnQgY29uc3Qgc2VsZWN0U2VydmljZURldGFpbHMgPSAoc3RhdGUsIHNsdWcpID0+IHtcblxuICBjb25zdCBkbkVudGl0aWVzID0gZGVub3JtYWxpemUoXG4gICAgeyBzZXJ2aWNlczogW3NsdWddIH0sXG4gICAgZW50aXRpZXNTY2hlbWEsXG4gICAgc3RhdGUuZW50aXRpZXNcbiAgKVxuXG4gIHJldHVybiBkbkVudGl0aWVzLnNlcnZpY2VzXG59Il0sInNvdXJjZVJvb3QiOiIifQ==