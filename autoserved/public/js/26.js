(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./resources/assets/js/pages/Models/Models.jsx":
/*!*****************************************************!*\
  !*** ./resources/assets/js/pages/Models/Models.jsx ***!
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
/* harmony import */ var store_selectors_models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! store/selectors/models */ "./resources/assets/js/store/selectors/models.js");
/* harmony import */ var store_selectors_session__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! store/selectors/session */ "./resources/assets/js/store/selectors/session/index.js");
/* harmony import */ var store_action_creators_models__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! store/action-creators/models */ "./resources/assets/js/store/action-creators/models/index.js");
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
  }, "Car Model Name"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
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
  }, "Car Make"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
    type: "text",
    name: "make_id",
    className: "w-full p-2 border",
    onChange: handleChange,
    value: values.make_id
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
  }, values.update, values.create))));
};

__signature__(ModalComponent, "useForm{{ values, touchedValues, errors, handleChange, handleSubmit, handleBlur, handleSelectChange, optionTypes, select }}", () => [useForm]);

const CreateModal = Object(recompose__WEBPACK_IMPORTED_MODULE_3__["compose"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])((state, ownProps) => ({
  initialValues: ownProps
}), (dispatch, {
  hideModal
}) => ({
  onSubmit: values => {
    dispatch(Object(store_action_creators_models__WEBPACK_IMPORTED_MODULE_12__["createModel"])(values));
    dispatch(Object(store_action_creators_models__WEBPACK_IMPORTED_MODULE_12__["getModels"])());
    hideModal();
    Alert('success', 'Car Model created!');
  }
})), Object(redux_form__WEBPACK_IMPORTED_MODULE_4__["reduxForm"])({
  form: 'add-car-model'
}))(ModalComponent);
const UpdateModal = Object(recompose__WEBPACK_IMPORTED_MODULE_3__["compose"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])((state, ownProps) => ({
  initialValues: ownProps
}), (dispatch, {
  hideModal
}) => ({
  onSubmit: values => {
    dispatch(Object(store_action_creators_models__WEBPACK_IMPORTED_MODULE_12__["updateModel"])(values));
    dispatch(Object(store_action_creators_models__WEBPACK_IMPORTED_MODULE_12__["getModels"])());
    hideModal();
    Alert('success', 'Car Model updated!');
  }
})), Object(redux_form__WEBPACK_IMPORTED_MODULE_4__["reduxForm"])({
  form: 'update-car-model'
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

function ModelsComponent({
  getModels,
  deleteModel,
  models,
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

  const populateModels = async () => {
    await getModels();
  };

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(() => {
    populateModels();
  }, []);
  console.log(models);
  const columns = react__WEBPACK_IMPORTED_MODULE_6___default.a.useMemo(() => [{
    Header: 'Car Model Name',
    accessor: 'name',
    sortable: true
  }, {
    Header: 'Car Make',
    accessor: 'make_id',
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
      const make_id = row.row.original.make_id;
      const header = 'Update Car Model';
      const className = "rounded-lg hidden md:block w-1/2 lg:w-1/3 overflow-visible";
      const update = "Update Car Model";
      console.log(row);
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "float-left"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Link"], {
        className: "bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-1 px-4 rounded",
        onClick: () => showModal(UpdateModal, {
          id,
          header,
          name,
          make_id,
          type_id,
          className,
          update
        }),
        to: "#"
      }, "Update"), ' ', react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Link"], {
        className: "bg-red-500 hover:bg-red-700 text-white text-xs font-bold py-1 px-4 rounded",
        onClick: () => deleteModel(id),
        to: "#"
      }, "Delete"));
    },
    Header: 'Action',
    sortable: false,
    width: 45
  }], []);
  const [filteredData, setFilteredData] = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(models);

  const handleSetData = models => {
    setFilteredData(models);
  };

  const header = "Add New Car Model";
  const className = "rounded-lg hidden md:block w-1/2 lg:w-1/3 overflow-visible";
  const create = "Create New Car Model";
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "bb-white px-10 py-5"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_8__["PageHeader"], {
    title: "Car Models",
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
    data: models
  })));
}

__signature__(ModelsComponent, "useModal{{ showModal }}\nuseEffect{}\nuseMemo{columns}\nuseState{[filteredData, setFilteredData](models)}", () => [react_context_modals__WEBPACK_IMPORTED_MODULE_7__["useModal"]]);

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(state => ({
  models: Object(store_selectors_models__WEBPACK_IMPORTED_MODULE_10__["selectAllModels"])(state),
  user: Object(store_selectors_session__WEBPACK_IMPORTED_MODULE_11__["currentUserSelector"])(state)
}), dispatch => ({
  getModels: () => dispatch(Object(store_action_creators_models__WEBPACK_IMPORTED_MODULE_12__["getModels"])()),
  deleteModel: id => {
    sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.value) {
        dispatch(Object(store_action_creators_models__WEBPACK_IMPORTED_MODULE_12__["deleteModel"])(id));
        Alert('success', 'Car Model successfully deleted!');
      }
    });
  }
}))(ModelsComponent);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useForm, "useForm", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Models/Models.jsx");
  reactHotLoader.register(ModalComponent, "ModalComponent", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Models/Models.jsx");
  reactHotLoader.register(CreateModal, "CreateModal", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Models/Models.jsx");
  reactHotLoader.register(UpdateModal, "UpdateModal", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Models/Models.jsx");
  reactHotLoader.register(Toast, "Toast", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Models/Models.jsx");
  reactHotLoader.register(Alert, "Alert", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Models/Models.jsx");
  reactHotLoader.register(ModelsComponent, "ModelsComponent", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Models/Models.jsx");
  reactHotLoader.register(_default, "default", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Models/Models.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/store/action-creators/models/index.js":
/*!*******************************************************************!*\
  !*** ./resources/assets/js/store/action-creators/models/index.js ***!
  \*******************************************************************/
/*! exports provided: saveModel, getModels, createModel, getModel, updateModel, deleteModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models */ "./resources/assets/js/store/action-creators/models/models.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveModel", function() { return _models__WEBPACK_IMPORTED_MODULE_0__["saveModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getModels", function() { return _models__WEBPACK_IMPORTED_MODULE_0__["getModels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createModel", function() { return _models__WEBPACK_IMPORTED_MODULE_0__["createModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getModel", function() { return _models__WEBPACK_IMPORTED_MODULE_0__["getModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateModel", function() { return _models__WEBPACK_IMPORTED_MODULE_0__["updateModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteModel", function() { return _models__WEBPACK_IMPORTED_MODULE_0__["deleteModel"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



/***/ }),

/***/ "./resources/assets/js/store/action-creators/models/models.js":
/*!********************************************************************!*\
  !*** ./resources/assets/js/store/action-creators/models/models.js ***!
  \********************************************************************/
/*! exports provided: getModels, getModel, createModel, updateModel, deleteModel, saveModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getModels", function() { return getModels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getModel", function() { return getModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createModel", function() { return createModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateModel", function() { return updateModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteModel", function() { return deleteModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveModel", function() { return saveModel; });
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




const getModels = () => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])('get-models', () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/car-models")));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["modelActions"].ADD_MODELS,
    models: response.data.data
  });
};
const getModel = id => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])("get-model-".concat(id), () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/car-models/".concat(id))));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["modelActions"].GET_MODEL,
    models: response.data.data
  });
};
const createModel = data => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])('create-model', () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/car-models", data)));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["modelActions"].ADD_MODEL,
    models: response.data.data
  });
};
const updateModel = data => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])("update-model-".concat(data.id), () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/car-models/".concat(data.id), data)));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["modelActions"].UPDATE_MODEL,
    models: response.data.data
  });
};
const deleteModel = id => async dispatch => {
  await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])("update-model-".concat(id), () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("/api/car-models/".concat(id))));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["modelActions"].DELETE_MODEL,
    id
  });
};
const saveModel = modelData => async dispatch => {
  const {
    id
  } = modelData;
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])('save-model-settings', () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/car-models/".concat(id), modelData)));
  return response;
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getModels, "getModels", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/models/models.js");
  reactHotLoader.register(getModel, "getModel", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/models/models.js");
  reactHotLoader.register(createModel, "createModel", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/models/models.js");
  reactHotLoader.register(updateModel, "updateModel", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/models/models.js");
  reactHotLoader.register(deleteModel, "deleteModel", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/models/models.js");
  reactHotLoader.register(saveModel, "saveModel", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/models/models.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/store/selectors/models.js":
/*!*******************************************************!*\
  !*** ./resources/assets/js/store/selectors/models.js ***!
  \*******************************************************/
/*! exports provided: selectAllModels, selectModelDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllModels", function() { return selectAllModels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectModelDetails", function() { return selectModelDetails; });
/* harmony import */ var normalizr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalizr */ "./node_modules/normalizr/dist/normalizr.es.js");
/* harmony import */ var store_schemas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! store/schemas */ "./resources/assets/js/store/schemas.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



const selectAllModels = state => {
  const dnEntities = Object(normalizr__WEBPACK_IMPORTED_MODULE_0__["denormalize"])({
    models: Object.keys(state.entities.models)
  }, store_schemas__WEBPACK_IMPORTED_MODULE_1__["entities"], state.entities);
  return dnEntities.models;
};
const selectModelDetails = (state, id) => {
  const dnEntities = Object(normalizr__WEBPACK_IMPORTED_MODULE_0__["denormalize"])({
    models: [id]
  }, store_schemas__WEBPACK_IMPORTED_MODULE_1__["entities"], state.entities);
  return dnEntities.models;
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(selectAllModels, "selectAllModels", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/selectors/models.js");
  reactHotLoader.register(selectModelDetails, "selectModelDetails", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/selectors/models.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL01vZGVscy9Nb2RlbHMuanN4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvYWN0aW9uLWNyZWF0b3JzL21vZGVscy9tb2RlbHMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9zZWxlY3RvcnMvbW9kZWxzLmpzIl0sIm5hbWVzIjpbInVzZUZvcm0iLCJpbml0aWFsVmFsdWVzIiwib25TdWJtaXQiLCJ2YWxpZGF0ZSIsInZhbHVlcyIsInNldFZhbHVlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJ0b3VjaGVkVmFsdWVzIiwic2V0VG91Y2hlZFZhbHVlcyIsImVycm9ycyIsInNldEVycm9ycyIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJuYW1lIiwiaGFuZGxlQmx1ciIsImUiLCJoYW5kbGVTdWJtaXQiLCJvcHRpb25UeXBlcyIsImxhYmVsIiwiY29uc29sZSIsImxvZyIsInR5cGVfaWQiLCJuZXdMYWJlbCIsImZpbHRlciIsIm9wdGlvbiIsInNlbGVjdCIsInNldFNlbGVjdCIsImhhbmRsZVNlbGVjdENoYW5nZSIsImdldFR5cGVzT3B0aW9ucyIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsIm9wdGlvbnMiLCJkYXRhIiwiY29tcGxldGUiLCJNb2RhbENvbXBvbmVudCIsImhlYWRlciIsIm1ha2VfaWQiLCJpZCIsInVwZGF0ZSIsImNyZWF0ZSIsIkNyZWF0ZU1vZGFsIiwiY29tcG9zZSIsImNvbm5lY3QiLCJzdGF0ZSIsIm93blByb3BzIiwiZGlzcGF0Y2giLCJoaWRlTW9kYWwiLCJjcmVhdGVNb2RlbEFjdGlvbiIsImdldE1vZGVsc0FjdGlvbiIsIkFsZXJ0IiwicmVkdXhGb3JtIiwiZm9ybSIsIlVwZGF0ZU1vZGFsIiwidXBkYXRlTW9kZWxBY3Rpb24iLCJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidHlwZSIsInRpdGxlIiwiZmlyZSIsIk1vZGVsc0NvbXBvbmVudCIsImdldE1vZGVscyIsImRlbGV0ZU1vZGVsIiwibW9kZWxzIiwidXNlciIsInVzZXJfdHlwZSIsInNob3dNb2RhbCIsInVzZU1vZGFsIiwicG9wdWxhdGVNb2RlbHMiLCJ1c2VFZmZlY3QiLCJjb2x1bW5zIiwidXNlTWVtbyIsIkhlYWRlciIsImFjY2Vzc29yIiwic29ydGFibGUiLCJDZWxsIiwicm93Iiwib3JpZ2luYWwiLCJ3aWR0aCIsImNsYXNzTmFtZSIsImZpbHRlcmVkRGF0YSIsInNldEZpbHRlcmVkRGF0YSIsImhhbmRsZVNldERhdGEiLCJzZWxlY3RBbGxNb2RlbHMiLCJjdXJyZW50VXNlclNlbGVjdG9yIiwidGV4dCIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwicmVzdWx0IiwiZGVsZXRlTW9kZWxBY3Rpb24iLCJyZXNwb25zZSIsIm1ha2VSZXF1ZXN0IiwiYWN0aW9ucyIsIkFERF9NT0RFTFMiLCJnZXRNb2RlbCIsIkdFVF9NT0RFTCIsImNyZWF0ZU1vZGVsIiwicG9zdCIsIkFERF9NT0RFTCIsInVwZGF0ZU1vZGVsIiwicHV0IiwiVVBEQVRFX01PREVMIiwiZGVsZXRlIiwiREVMRVRFX01PREVMIiwic2F2ZU1vZGVsIiwibW9kZWxEYXRhIiwiZG5FbnRpdGllcyIsImRlbm9ybWFsaXplIiwiT2JqZWN0Iiwia2V5cyIsImVudGl0aWVzIiwiZW50aXRpZXNTY2hlbWEiLCJzZWxlY3RNb2RlbERldGFpbHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFD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QUNDLElBQVAsQ0FBWXhFLEtBQUssQ0FBQ3lFLFFBQU4sQ0FBZWpELE1BQTNCO0FBQVYsR0FENEIsRUFFNUJrRCxzREFGNEIsRUFHNUIxRSxLQUFLLENBQUN5RSxRQUhzQixDQUE5QjtBQU1BLFNBQU9KLFVBQVUsQ0FBQzdDLE1BQWxCO0FBQ0QsQ0FSTTtBQVVBLE1BQU1tRCxrQkFBa0IsR0FBRyxDQUFDM0UsS0FBRCxFQUFRTixFQUFSLEtBQWU7QUFFL0MsUUFBTTJFLFVBQVUsR0FBR0MsNkRBQVcsQ0FDNUI7QUFBRTlDLFVBQU0sRUFBRSxDQUFDOUIsRUFBRDtBQUFWLEdBRDRCLEVBRTVCZ0Ysc0RBRjRCLEVBRzVCMUUsS0FBSyxDQUFDeUUsUUFIc0IsQ0FBOUI7QUFNQSxTQUFPSixVQUFVLENBQUM3QyxNQUFsQjtBQUNELENBVE07Ozs7Ozs7Ozs7MEJBVk1vQixlOzBCQVVBK0Isa0IiLCJmaWxlIjoianMvMjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVsbWV0IGZyb20gJ3JlYWN0LWhlbG1ldCdcbmltcG9ydCB7IGNvbXBvc2UgfSBmcm9tICdyZWNvbXBvc2UnXG5pbXBvcnQgeyByZWR1eEZvcm0sIEZpZWxkIH0gZnJvbSAncmVkdXgtZm9ybSdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlTW9kYWwgfSBmcm9tICdyZWFjdC1jb250ZXh0LW1vZGFscydcbmltcG9ydCB7IE5ldXRyYWxCdXR0b24sIFBhZ2VIZWFkZXIsIERhdGFUYWJsZSB9IGZyb20gJ2NvbXBvbmVudHMnXG5cbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJ1xuaW1wb3J0IHsgc2VsZWN0QWxsTW9kZWxzIH0gZnJvbSAnc3RvcmUvc2VsZWN0b3JzL21vZGVscydcbmltcG9ydCB7IGN1cnJlbnRVc2VyU2VsZWN0b3IgfSBmcm9tICdzdG9yZS9zZWxlY3RvcnMvc2Vzc2lvbidcbmltcG9ydCB7XG4gIGdldE1vZGVscyBhcyBnZXRNb2RlbHNBY3Rpb24sXG4gIHVwZGF0ZU1vZGVsIGFzIHVwZGF0ZU1vZGVsQWN0aW9uLFxuICBjcmVhdGVNb2RlbCBhcyBjcmVhdGVNb2RlbEFjdGlvbixcbiAgZGVsZXRlTW9kZWwgYXMgZGVsZXRlTW9kZWxBY3Rpb25cbn0gZnJvbSAnc3RvcmUvYWN0aW9uLWNyZWF0b3JzL21vZGVscydcbmltcG9ydCB7IExpbmssIFJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0J1xuXG5leHBvcnQgY29uc3QgdXNlRm9ybSA9ICh7IGluaXRpYWxWYWx1ZXMsIG9uU3VibWl0LCB2YWxpZGF0ZSB9KSA9PiB7XG4gICAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IFJlYWN0LnVzZVN0YXRlKGluaXRpYWxWYWx1ZXMgfHwge30pXG4gICAgY29uc3QgW3RvdWNoZWRWYWx1ZXMsIHNldFRvdWNoZWRWYWx1ZXNdID0gUmVhY3QudXNlU3RhdGUoe30pXG4gICAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IFJlYWN0LnVzZVN0YXRlKHt9KVxuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gZXZlbnQgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0XG4gICAgICBjb25zdCB2YWx1ZSA9IHRhcmdldC52YWx1ZVxuICAgICAgY29uc3QgbmFtZSA9IHRhcmdldC5uYW1lXG4gICAgICBzZXRWYWx1ZXMoe1xuICAgICAgICAuLi52YWx1ZXMsXG4gICAgICAgIFtuYW1lXTogdmFsdWVcbiAgICAgIH0pXG4gICAgfVxuICBcbiAgICBjb25zdCBoYW5kbGVCbHVyID0gZXZlbnQgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0XG4gICAgICBjb25zdCBuYW1lID0gdGFyZ2V0Lm5hbWVcbiAgICAgIHNldFRvdWNoZWRWYWx1ZXMoe1xuICAgICAgICAuLi50b3VjaGVkVmFsdWVzLFxuICAgICAgICBbbmFtZV06IHRydWVcbiAgICAgIH0pXG4gICAgICBjb25zdCBlID0gdmFsaWRhdGUodmFsdWVzKVxuICAgICAgc2V0RXJyb3JzKHtcbiAgICAgICAgLi4uZXJyb3JzLFxuICAgICAgICAuLi5lXG4gICAgICB9KVxuICAgIH1cbiAgXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gZXZlbnQgPT4ge1xuXG4gICAgICBjb25zdCBlID0gdmFsaWRhdGUodmFsdWVzKVxuICAgICAgc2V0RXJyb3JzKHtcbiAgICAgICAgLi4uZXJyb3JzLFxuICAgICAgICAuLi5lXG4gICAgICB9KVxuICBcbiAgICAgIG9uU3VibWl0KHsgLi4udmFsdWVzLCBlIH0pXG4gICAgfVxuICAgIGNvbnN0IG9wdGlvblR5cGVzID0gW1xuICAgICAge1xuICAgICAgICBsYWJlbDogJ0NhcicsXG4gICAgICAgIHZhbHVlOiAxLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdUcnVjaycsXG4gICAgICAgIHZhbHVlOiAyLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdNb3RvcmN5Y2xlJyxcbiAgICAgICAgdmFsdWU6IDMsXG4gICAgICB9XG4gICAgXVxuICAgIGNvbnNvbGUubG9nKHZhbHVlcy50eXBlX2lkKVxuICAgIGNvbnN0IG5ld0xhYmVsID0gb3B0aW9uVHlwZXMuZmlsdGVyKG9wdGlvbiA9PiBvcHRpb24udmFsdWUgPT0gdmFsdWVzLnR5cGVfaWQpXG5cbiAgICBjb25zb2xlLmxvZyhuZXdMYWJlbFswXSlcbiAgICBjb25zdCBbc2VsZWN0LCBzZXRTZWxlY3RdID0gUmVhY3QudXNlU3RhdGUobmV3TGFiZWxbMF0pXG4gICAgY29uc29sZS5sb2coc2VsZWN0KVxuICAgIGNvbnN0IGhhbmRsZVNlbGVjdENoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudmFsdWVcbiAgICAgIGNvbnN0IGxhYmVsID0gZXZlbnQubGFiZWxcbiAgICAgIGNvbnN0IG5hbWUgPSAndHlwZV9pZCdcbiAgICAgIHNldFZhbHVlcyh7XG4gICAgICAgIC4uLnZhbHVlcyxcbiAgICAgICAgW25hbWVdOiB2YWx1ZVxuICAgICAgfSlcbiAgICAgIHNldFNlbGVjdCh7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSwgbGFiZWw6IGxhYmVsXG4gICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFR5cGVzT3B0aW9ucyAoKSB7XG5cbiAgICAgIHJldHVybiBheGlvcy5nZXQoYC9hcGkvY2FyLW1ha2VzYClcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgcmV0dXJuIHtvcHRpb25zOiByZXMuZGF0YSwgY29tcGxldGU6IHRydWV9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWVzLFxuICAgICAgdG91Y2hlZFZhbHVlcyxcbiAgICAgIGVycm9ycyxcbiAgICAgIGhhbmRsZUNoYW5nZSxcbiAgICAgIGhhbmRsZVN1Ym1pdCxcbiAgICAgIGhhbmRsZUJsdXIsXG4gICAgICBoYW5kbGVTZWxlY3RDaGFuZ2UsXG4gICAgICBvcHRpb25UeXBlcyxcbiAgICAgIHNlbGVjdFxuICAgIH1cbiAgfVxuXG5leHBvcnQgY29uc3QgTW9kYWxDb21wb25lbnQgPSAoeyBvblN1Ym1pdCwgaW5pdGlhbFZhbHVlcyB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKGluaXRpYWxWYWx1ZXMpXG4gIGNvbnN0IHsgdmFsdWVzLCB0b3VjaGVkVmFsdWVzLCBlcnJvcnMsIGhhbmRsZUNoYW5nZSwgaGFuZGxlU3VibWl0LCBoYW5kbGVCbHVyLCBoYW5kbGVTZWxlY3RDaGFuZ2UsIG9wdGlvblR5cGVzLCBzZWxlY3QgfSA9IHVzZUZvcm0oe1xuICAgIGluaXRpYWxWYWx1ZXMsXG4gICAgb25TdWJtaXQsXG4gICAgdmFsaWRhdGUodmFsdWVzKSB7XG4gICAgICBjb25zdCBlcnJvcnMgPSB7fVxuXG4gICAgICBpZiAodmFsdWVzLm5hbWUgPT09IFwiXCIpIHtcbiAgICAgICAgZXJyb3JzLm5hbWUgPSBcIlBsZWFzZSBzcGVjaWZ5IGEgbmFtZVwiXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBlcnJvcnNcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3Jvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNSBwYi01IGJvcmRlci1iXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTEwIHRleHQtYmFzZSB0ZXh0LWdyYXktNzAwXCI+e3ZhbHVlcy5oZWFkZXJ9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTEwIHB0LTUgcGItMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGwgcHktMlwiPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgbWItMlwiPkNhciBNb2RlbCBOYW1lPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgY2xhc3NOYW1lPVwidy1mdWxsIHAtMiBib3JkZXJcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSB2YWx1ZT17dmFsdWVzLm5hbWV9Lz5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGwgcHktMlwiPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgbWItMlwiPkNhciBNYWtlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJtYWtlX2lkXCIgY2xhc3NOYW1lPVwidy1mdWxsIHAtMiBib3JkZXJcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSB2YWx1ZT17dmFsdWVzLm1ha2VfaWR9Lz5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jsb2NrIHctZnVsbCBweS0yJz5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0eXBlX2lkXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIG1iLTJcIj5WZWhpY2xlIFR5cGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPFNlbGVjdCBjbGFzc05hbWU9XCJ3LWZ1bGxcIiB2YWx1ZT17c2VsZWN0fSBvbkNoYW5nZT17aGFuZGxlU2VsZWN0Q2hhbmdlfSBuYW1lPVwidHlwZVwiIG9wdGlvbnM9e29wdGlvblR5cGVzfSAvPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJpZFwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHZhbHVlPXt2YWx1ZXMuaWR9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHQgcHgtMTAgcGItNVwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHAtMyBiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTcwMFwiIHR5cGU9XCJzdWJtaXRcIj57dmFsdWVzLnVwZGF0ZX17dmFsdWVzLmNyZWF0ZX08L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gIClcbn1cblxuY29uc3QgQ3JlYXRlTW9kYWwgPSBjb21wb3NlKFxuICBjb25uZWN0KFxuICAgIChzdGF0ZSwgb3duUHJvcHMpID0+ICh7XG4gICAgICBpbml0aWFsVmFsdWVzOiBvd25Qcm9wc1xuICAgIH0pLFxuICAgIChkaXNwYXRjaCwgeyBoaWRlTW9kYWwgfSkgPT4gKHtcbiAgICAgIG9uU3VibWl0OiB2YWx1ZXMgPT4ge1xuICAgICAgICBkaXNwYXRjaChjcmVhdGVNb2RlbEFjdGlvbih2YWx1ZXMpKVxuICAgICAgICBkaXNwYXRjaChnZXRNb2RlbHNBY3Rpb24oKSlcbiAgICAgICAgaGlkZU1vZGFsKClcbiAgICAgICAgQWxlcnQoJ3N1Y2Nlc3MnLCAnQ2FyIE1vZGVsIGNyZWF0ZWQhJylcbiAgICAgIH1cbiAgICB9KVxuICApLFxuICByZWR1eEZvcm0oe1xuICAgIGZvcm06ICdhZGQtY2FyLW1vZGVsJ1xuICB9KVxuKShNb2RhbENvbXBvbmVudClcblxuY29uc3QgVXBkYXRlTW9kYWwgPSBjb21wb3NlKFxuICBjb25uZWN0KFxuICAgIChzdGF0ZSwgb3duUHJvcHMpID0+ICh7XG4gICAgICBpbml0aWFsVmFsdWVzOiBvd25Qcm9wc1xuICAgIH0pLFxuICAgIChkaXNwYXRjaCwgeyBoaWRlTW9kYWwgfSkgPT4gKHtcbiAgICAgIG9uU3VibWl0OiB2YWx1ZXMgPT4ge1xuICAgICAgICBkaXNwYXRjaCh1cGRhdGVNb2RlbEFjdGlvbih2YWx1ZXMpKVxuICAgICAgICBkaXNwYXRjaChnZXRNb2RlbHNBY3Rpb24oKSlcbiAgICAgICAgaGlkZU1vZGFsKClcbiAgICAgICAgQWxlcnQoJ3N1Y2Nlc3MnLCAnQ2FyIE1vZGVsIHVwZGF0ZWQhJylcbiAgICAgIH1cbiAgICB9KVxuICApLFxuICByZWR1eEZvcm0oe1xuICAgIGZvcm06ICd1cGRhdGUtY2FyLW1vZGVsJ1xuICB9KVxuKShNb2RhbENvbXBvbmVudClcblxuY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcbiAgdG9hc3Q6IHRydWUsXG4gIHBvc2l0aW9uOiAndG9wLWVuZCcsXG4gIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcbiAgdGltZXI6IDMwMDBcbn0pXG5cbmNvbnN0IEFsZXJ0ID0gKHR5cGUsIHRpdGxlKSA9PiBUb2FzdC5maXJlKHtcbiAgdHlwZTogdHlwZSxcbiAgdGl0bGU6IHRpdGxlXG59KVxuXG5cblxuZnVuY3Rpb24gTW9kZWxzQ29tcG9uZW50KHsgZ2V0TW9kZWxzLCBkZWxldGVNb2RlbCwgbW9kZWxzLCB1c2VyIH0pIHtcbiAgY29uc3QgeyB1c2VyX3R5cGUgfSA9IHVzZXJcblxuICBpZiAodXNlcl90eXBlICE9ICdhZG1pbicpIHtcbiAgICByZXR1cm4gPFJlZGlyZWN0IGZyb209Jy9hY2NvdW50JyB0bz1cIi9hY2NvdW50L292ZXJ2aWV3XCIgLz5cbiAgfVxuICBjb25zdCB7IHNob3dNb2RhbCB9ID0gdXNlTW9kYWwoKVxuICBjb25zdCBwb3B1bGF0ZU1vZGVscyA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBnZXRNb2RlbHMoKVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBwb3B1bGF0ZU1vZGVscygpXG4gIH0sIFtdKVxuXG4gIGNvbnNvbGUubG9nKG1vZGVscylcblxuICBjb25zdCBjb2x1bW5zID0gUmVhY3QudXNlTWVtbyhcbiAgICAoKSA9PiBbXG4gICAgICB7XG4gICAgICAgIEhlYWRlcjogJ0NhciBNb2RlbCBOYW1lJyxcbiAgICAgICAgYWNjZXNzb3I6ICduYW1lJyxcbiAgICAgICAgc29ydGFibGU6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIEhlYWRlcjogJ0NhciBNYWtlJyxcbiAgICAgICAgYWNjZXNzb3I6ICdtYWtlX2lkJyxcbiAgICAgICAgc29ydGFibGU6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiBcInZlaGljbGVcIixcbiAgICAgICAgYWNjZXNzb3I6ICd0eXBlX2lkJyxcbiAgICAgICAgQ2VsbDogcm93ID0+IHtcbiAgICAgICAgICBjb25zdCB0eXBlX2lkID0gcm93LnJvdy5vcmlnaW5hbC50eXBlX2lkXG4gICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPD57dHlwZV9pZCA9PSAxID8gJ0NhcicgOiAnVHJ1Y2snfTwvPlxuICAgICAgICAgIClcbiAgICAgICAgfSxcbiAgICAgICAgSGVhZGVyOiAnVmVoaWNsZSBUeXBlJyxcbiAgICAgICAgc29ydGFibGU6IGZhbHNlLFxuICAgICAgICB3aWR0aDogNDVcbiAgICAgIH0sICAgIFxuICAgICAge1xuICAgICAgICBpZDogXCJhY3Rpb25cIixcbiAgICAgICAgYWNjZXNzb3I6ICdpZCcsXG4gICAgICAgIENlbGw6IHJvdyA9PiB7XG4gICAgICAgICAgY29uc3QgaWQgPSByb3cucm93Lm9yaWdpbmFsLmlkXG4gICAgICAgICAgY29uc3QgbmFtZSA9IHJvdy5yb3cub3JpZ2luYWwubmFtZVxuICAgICAgICAgIGNvbnN0IHR5cGVfaWQgPSByb3cucm93Lm9yaWdpbmFsLnR5cGVfaWRcbiAgICAgICAgICBjb25zdCBtYWtlX2lkID0gcm93LnJvdy5vcmlnaW5hbC5tYWtlX2lkXG4gICAgICAgICAgY29uc3QgaGVhZGVyID0gJ1VwZGF0ZSBDYXIgTW9kZWwnXG4gICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gXCJyb3VuZGVkLWxnIGhpZGRlbiBtZDpibG9jayB3LTEvMiBsZzp3LTEvMyBvdmVyZmxvdy12aXNpYmxlXCJcbiAgICAgICAgICBjb25zdCB1cGRhdGUgPSBcIlVwZGF0ZSBDYXIgTW9kZWxcIlxuICAgICAgICAgIGNvbnNvbGUubG9nKHJvdylcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdC1sZWZ0XCI+XG4gICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgdGV4dC14cyBmb250LWJvbGQgcHktMSBweC00IHJvdW5kZWRcIiBcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgc2hvd01vZGFsKFVwZGF0ZU1vZGFsLCB7IGlkLCBoZWFkZXIsIG5hbWUsIG1ha2VfaWQsIHR5cGVfaWQsIGNsYXNzTmFtZSwgdXBkYXRlIH0pXG4gICAgICAgICAgICAgICAgfSB0bz1cIiNcIj5cbiAgICAgICAgICAgICAgICBVcGRhdGVcbiAgICAgICAgICAgICAgPC9MaW5rPnsnICd9XG4gICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImJnLXJlZC01MDAgaG92ZXI6YmctcmVkLTcwMCB0ZXh0LXdoaXRlIHRleHQteHMgZm9udC1ib2xkIHB5LTEgcHgtNCByb3VuZGVkXCIgb25DbGljaz17KCkgPT4gZGVsZXRlTW9kZWwoaWQpfSB0bz1cIiNcIj5cbiAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9LFxuICAgICAgICBIZWFkZXI6ICdBY3Rpb24nLFxuICAgICAgICBzb3J0YWJsZTogZmFsc2UsXG4gICAgICAgIHdpZHRoOiA0NVxuICAgICAgfSxcbiAgICBdLFxuICAgIFtdXG4gIClcblxuXG4gIGNvbnN0IFtmaWx0ZXJlZERhdGEsIHNldEZpbHRlcmVkRGF0YV0gPSB1c2VTdGF0ZShtb2RlbHMpXG4gIGNvbnN0IGhhbmRsZVNldERhdGEgPSBtb2RlbHMgPT4ge1xuICAgIHNldEZpbHRlcmVkRGF0YShtb2RlbHMpXG4gIH1cbiAgY29uc3QgaGVhZGVyID0gXCJBZGQgTmV3IENhciBNb2RlbFwiXG4gIGNvbnN0IGNsYXNzTmFtZSA9IFwicm91bmRlZC1sZyBoaWRkZW4gbWQ6YmxvY2sgdy0xLzIgbGc6dy0xLzMgb3ZlcmZsb3ctdmlzaWJsZVwiXG4gIGNvbnN0IGNyZWF0ZSA9IFwiQ3JlYXRlIE5ldyBDYXIgTW9kZWxcIlxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmItd2hpdGUgcHgtMTAgcHktNVwiPlxuICAgICAgPFBhZ2VIZWFkZXIgdGl0bGU9XCJDYXIgTW9kZWxzXCIgc3ViVGl0bGU9XCJNYXN0ZXIgTGlzdFwiID5cbiAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibWwtMiBiZy1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTQwMCB0ZXh0LWdyYXktODAwIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXJcIiBcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgc2hvd01vZGFsKENyZWF0ZU1vZGFsLCB7aGVhZGVyLCBjbGFzc05hbWUsIGNyZWF0ZX0pXG4gICAgICAgICAgfSB0bz1cIiNcIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmFkZDwvaT4gQWRkIE5ld1xuICAgICAgICA8L0xpbms+XG4gICAgICA8L1BhZ2VIZWFkZXI+XG5cbiAgICAgICAgPERhdGFUYWJsZSBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhPXttb2RlbHN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L0ZyYWdtZW50PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+ICh7XG4gICAgbW9kZWxzOiBzZWxlY3RBbGxNb2RlbHMoc3RhdGUpLFxuICAgIHVzZXI6IGN1cnJlbnRVc2VyU2VsZWN0b3Ioc3RhdGUpXG4gIH0pLFxuICBkaXNwYXRjaCA9PiAoe1xuICAgIGdldE1vZGVsczogKCkgPT4gZGlzcGF0Y2goZ2V0TW9kZWxzQWN0aW9uKCkpLFxuICAgIGRlbGV0ZU1vZGVsOiBpZCA9PiB7XG4gICAgICBTd2FsLmZpcmUoe1xuICAgICAgICB0aXRsZTogJ0FyZSB5b3Ugc3VyZT8nLFxuICAgICAgICB0ZXh0OiBcIllvdSB3b24ndCBiZSBhYmxlIHRvIHJldmVydCB0aGlzIVwiLFxuICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6ICcjMzA4NWQ2JyxcbiAgICAgICAgY2FuY2VsQnV0dG9uQ29sb3I6ICcjZDMzJyxcbiAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdZZXMsIGRlbGV0ZSBpdCEnXG4gICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xuICAgICAgICAgIGRpc3BhdGNoKGRlbGV0ZU1vZGVsQWN0aW9uKGlkKSlcbiAgICAgICAgICBBbGVydCgnc3VjY2VzcycsICdDYXIgTW9kZWwgc3VjY2Vzc2Z1bGx5IGRlbGV0ZWQhJylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG4pKE1vZGVsc0NvbXBvbmVudCkiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyBtb2RlbEFjdGlvbnMgYXMgYWN0aW9ucyB9IGZyb20gJ3N0b3JlL2FjdGlvbnMnXG5pbXBvcnQgeyBtYWtlUmVxdWVzdCB9IGZyb20gJ3N0b3JlL2FjdGlvbi1jcmVhdG9ycy9yZXF1ZXN0cydcblxuZXhwb3J0IGNvbnN0IGdldE1vZGVscyA9ICgpID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkaXNwYXRjaChcbiAgICBtYWtlUmVxdWVzdCgnZ2V0LW1vZGVscycsICgpID0+IGF4aW9zLmdldChgL2FwaS9jYXItbW9kZWxzYCkpXG4gIClcblxuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogYWN0aW9ucy5BRERfTU9ERUxTLFxuICAgIG1vZGVsczogcmVzcG9uc2UuZGF0YS5kYXRhXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBnZXRNb2RlbCA9IGlkID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkaXNwYXRjaChcbiAgICBtYWtlUmVxdWVzdChgZ2V0LW1vZGVsLSR7aWR9YCwgKCkgPT4gYXhpb3MuZ2V0KGAvYXBpL2Nhci1tb2RlbHMvJHtpZH1gKSlcbiAgKVxuXG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBhY3Rpb25zLkdFVF9NT0RFTCxcbiAgICBtb2RlbHM6IHJlc3BvbnNlLmRhdGEuZGF0YVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlTW9kZWwgPSBkYXRhID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkaXNwYXRjaChcbiAgICBtYWtlUmVxdWVzdCgnY3JlYXRlLW1vZGVsJywgKCkgPT4gYXhpb3MucG9zdChgL2FwaS9jYXItbW9kZWxzYCwgZGF0YSkpXG4gIClcblxuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogYWN0aW9ucy5BRERfTU9ERUwsXG4gICAgbW9kZWxzOiByZXNwb25zZS5kYXRhLmRhdGFcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZU1vZGVsID0gZGF0YSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZGlzcGF0Y2goXG4gICAgbWFrZVJlcXVlc3QoYHVwZGF0ZS1tb2RlbC0ke2RhdGEuaWR9YCwgKCkgPT5cbiAgICAgIGF4aW9zLnB1dChgL2FwaS9jYXItbW9kZWxzLyR7ZGF0YS5pZH1gLCBkYXRhKVxuICAgIClcbiAgKVxuXG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBhY3Rpb25zLlVQREFURV9NT0RFTCxcbiAgICBtb2RlbHM6IHJlc3BvbnNlLmRhdGEuZGF0YVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgZGVsZXRlTW9kZWwgPSBpZCA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XG4gIGF3YWl0IGRpc3BhdGNoKFxuICAgIG1ha2VSZXF1ZXN0KGB1cGRhdGUtbW9kZWwtJHtpZH1gLCAoKSA9PiBheGlvcy5kZWxldGUoYC9hcGkvY2FyLW1vZGVscy8ke2lkfWApKVxuICApXG5cbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IGFjdGlvbnMuREVMRVRFX01PREVMLFxuICAgIGlkXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBzYXZlTW9kZWwgPSBtb2RlbERhdGEgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICBjb25zdCB7IGlkIH0gPSBtb2RlbERhdGFcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRpc3BhdGNoKFxuICAgIG1ha2VSZXF1ZXN0KCdzYXZlLW1vZGVsLXNldHRpbmdzJywgKCkgPT5cbiAgICAgIGF4aW9zLnB1dChgL2FwaS9jYXItbW9kZWxzLyR7aWR9YCwgbW9kZWxEYXRhKVxuICAgIClcbiAgKVxuXG4gIHJldHVybiByZXNwb25zZVxufVxuXG5cbiIsImltcG9ydCB7IGRlbm9ybWFsaXplIH0gZnJvbSAnbm9ybWFsaXpyJ1xuXG5pbXBvcnQgeyBlbnRpdGllcyBhcyBlbnRpdGllc1NjaGVtYSB9IGZyb20gJ3N0b3JlL3NjaGVtYXMnXG5cbmV4cG9ydCBjb25zdCBzZWxlY3RBbGxNb2RlbHMgPSBzdGF0ZSA9PiB7XG4gIGNvbnN0IGRuRW50aXRpZXMgPSBkZW5vcm1hbGl6ZShcbiAgICB7IG1vZGVsczogT2JqZWN0LmtleXMoc3RhdGUuZW50aXRpZXMubW9kZWxzKSB9LFxuICAgIGVudGl0aWVzU2NoZW1hLFxuICAgIHN0YXRlLmVudGl0aWVzXG4gIClcblxuICByZXR1cm4gZG5FbnRpdGllcy5tb2RlbHNcbn1cblxuZXhwb3J0IGNvbnN0IHNlbGVjdE1vZGVsRGV0YWlscyA9IChzdGF0ZSwgaWQpID0+IHtcblxuICBjb25zdCBkbkVudGl0aWVzID0gZGVub3JtYWxpemUoXG4gICAgeyBtb2RlbHM6IFtpZF0gfSxcbiAgICBlbnRpdGllc1NjaGVtYSxcbiAgICBzdGF0ZS5lbnRpdGllc1xuICApXG5cbiAgcmV0dXJuIGRuRW50aXRpZXMubW9kZWxzXG59Il0sInNvdXJjZVJvb3QiOiIifQ==