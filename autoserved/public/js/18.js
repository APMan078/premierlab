(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

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

/***/ "./resources/assets/js/pages/Users/Users.jsx":
/*!***************************************************!*\
  !*** ./resources/assets/js/pages/Users/Users.jsx ***!
  \***************************************************/
/*! exports provided: useForm, CreditModalComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useForm", function() { return useForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditModalComponent", function() { return CreditModalComponent; });
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
/* harmony import */ var _makeData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../makeData */ "./resources/assets/js/makeData.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var store_selectors_members__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! store/selectors/members */ "./resources/assets/js/store/selectors/members.js");
/* harmony import */ var store_selectors_session__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! store/selectors/session */ "./resources/assets/js/store/selectors/session/index.js");
/* harmony import */ var store_action_creators_members__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! store/action-creators/members */ "./resources/assets/js/store/action-creators/members/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");



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

const CreditModalComponent = ({
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
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
    onSubmit: handleSubmit
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "flex-grow"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "pt-5 pb-5 border-b"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "px-10 text-base text-gray-700"
  }, values.header)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "p-10 pt-5 flex pb-0"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "flex-1 pr-5"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "text-sm text-blue-700 py-2"
  }, "Total Credits"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "border p-2 text-blue-700"
  }, values.credit)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "flex-1"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "block w-full py-2"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
    htmlFor: "amount"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "inline-block mb-2"
  }, "Amount"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
    type: "text",
    name: "amount",
    className: "w-full p-2 border",
    placeholder: "Please specify an amount",
    onChange: handleChange,
    value: values.amount
  }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
    type: "hidden",
    name: "slug",
    onChange: handleChange,
    value: values.slug
  }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "flex p-10 pt-0 w-full pb-5"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "block w-full py-2"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
    htmlFor: "amount"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "inline-block mb-2"
  }, "Amount"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
    type: "text",
    name: "message",
    className: "w-full p-2 border",
    placeholder: "Please specify a message",
    onChange: handleChange,
    value: values.message
  })))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "float-right px-10 pb-5"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
    className: "text-white p-3 rounded bg-blue-500 hover:bg-blue-700",
    type: "submit"
  }, values.add, values.deduct, " Credits"))));
};

__signature__(CreditModalComponent, "useForm{{ values, touchedValues, errors, handleChange, handleSubmit, handleBlur }}", () => [useForm]);

const AddCreditModal = Object(recompose__WEBPACK_IMPORTED_MODULE_3__["compose"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])((state, ownProps) => ({
  initialValues: ownProps
}), (dispatch, {
  hideModal
}) => ({
  onSubmit: values => {
    dispatch(Object(store_action_creators_members__WEBPACK_IMPORTED_MODULE_13__["addCredits"])(values));
    dispatch(Object(store_action_creators_members__WEBPACK_IMPORTED_MODULE_13__["getMembers"])());
    hideModal();
    Alert('success', 'Credit successfully updated!');
  }
})), Object(redux_form__WEBPACK_IMPORTED_MODULE_4__["reduxForm"])({
  form: 'add-credit'
}))(CreditModalComponent);
const DeductCreditModal = Object(recompose__WEBPACK_IMPORTED_MODULE_3__["compose"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])((state, ownProps) => ({
  initialValues: ownProps
}), (dispatch, {
  hideModal
}) => ({
  onSubmit: values => {
    dispatch(Object(store_action_creators_members__WEBPACK_IMPORTED_MODULE_13__["deductCredits"])(values));
    dispatch(Object(store_action_creators_members__WEBPACK_IMPORTED_MODULE_13__["getMembers"])());
    hideModal();
    Alert('success', 'Credit successfully updated!');
  }
})), Object(redux_form__WEBPACK_IMPORTED_MODULE_4__["reduxForm"])({
  form: 'deduct-credit'
}))(CreditModalComponent);
const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

const Alert = (type, title) => Toast.fire({
  type: type,
  title: title
});

function UsersComponent({
  getMembers,
  deleteMember,
  impersonateMember,
  members,
  user
}) {
  const {
    user_type
  } = user;

  if (user_type != 'admin') {
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["Redirect"], {
      from: "/account",
      to: "/account/overview"
    });
  }

  const {
    showModal
  } = Object(react_context_modals__WEBPACK_IMPORTED_MODULE_7__["useModal"])();

  const populateMembers = async () => {
    await getMembers();
  };

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(() => {
    populateMembers();
  }, []);
  console.log(members);
  const columns = react__WEBPACK_IMPORTED_MODULE_6___default.a.useMemo(() => [{
    Header: 'First Name',
    accessor: 'first_name'
  }, {
    Header: 'Last Name',
    accessor: 'last_name'
  }, {
    Header: 'Email',
    accessor: 'email',
    className: 'md:hidden xl:table-cell'
  }, {
    Header: 'Mobile',
    accessor: 'mobile',
    className: 'md:hidden xl:table-cell'
  }, {
    Header: 'Type',
    accessor: 'user_type'
  }, {
    Header: 'Credits',
    accessor: 'wallet.balance',
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
      const impersonator = row.row.original.impersonator;
      const credit = row.row.original.wallet.balance;
      const header = 'Adjust User Credits';
      const add = "Add";
      const deduct = "Deduct";
      const amount = '';
      const message = '';
      const className = "rounded-lg hidden md:block w-1/2 lg:w-1/3";
      console.log(row);
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "float-left"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["Link"], {
        className: "md:block lg:inline bg-gray-200 hover:bg-gray-400 text-gray-700 text-xs font-bold py-1 px-4 rounded",
        onClick: () => impersonateMember(slug, impersonator),
        to: "#"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "material-icons inline lg:hidden"
      }, "how_to_reg"), " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "hidden lg:inline"
      }, "Impersonate")), ' ', react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["Link"], {
        className: "md:block lg:inline bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-1 px-4 rounded",
        onClick: () => showModal(AddCreditModal, {
          slug,
          credit,
          header,
          add,
          amount,
          message,
          className
        }),
        to: "#"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "material-icons inline lg:hidden"
      }, "how_to_reg"), " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "hidden lg:inline"
      }, "Add Credits")), ' ', react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["Link"], {
        className: "md:block lg:inline bg-green-500 hover:bg-green-700 text-white text-xs font-bold py-1 px-4 rounded",
        onClick: () => showModal(DeductCreditModal, {
          slug,
          credit,
          header,
          deduct,
          amount,
          message,
          className
        }),
        to: "#"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "material-icons inline lg:hidden"
      }, "how_to_reg"), " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "hidden lg:inline"
      }, "Deduct Credits")), ' ', react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["Link"], {
        className: "md:block lg:inline bg-red-500 hover:bg-red-700 text-white text-xs font-bold py-1 px-4 rounded",
        onClick: () => deleteMember(slug),
        to: "#"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "material-icons inline lg:hidden"
      }, "how_to_reg"), " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "hidden lg:inline"
      }, "Delete")));
    },
    Header: 'Action',
    sortable: false,
    width: 45
  }], []);
  const data = react__WEBPACK_IMPORTED_MODULE_6___default.a.useMemo(() => Object(_makeData__WEBPACK_IMPORTED_MODULE_9__["default"])(20), []);
  const [filteredData, setFilteredData] = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(members);

  const handleSetData = members => {
    setFilteredData(members);
  };

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "bb-white px-10 py-5"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_8__["PageHeader"], {
    title: "User",
    subTitle: "Accounts"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["Link"], {
    to: "/account/users/export",
    className: "ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
    className: "material-icons"
  }, "view_module"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", null, "Export"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_8__["DataTable"], {
    columns: columns,
    data: members
  })));
}

__signature__(UsersComponent, "useModal{{ showModal }}\nuseEffect{}\nuseMemo{columns}\nuseMemo{data}\nuseState{[filteredData, setFilteredData](members)}", () => [react_context_modals__WEBPACK_IMPORTED_MODULE_7__["useModal"]]);

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(state => ({
  members: Object(store_selectors_members__WEBPACK_IMPORTED_MODULE_11__["selectAllMembers"])(state),
  user: Object(store_selectors_session__WEBPACK_IMPORTED_MODULE_12__["currentUserSelector"])(state)
}), dispatch => ({
  getMembers: () => dispatch(Object(store_action_creators_members__WEBPACK_IMPORTED_MODULE_13__["getMembers"])()),
  deleteMember: id => {
    sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.value) {
        dispatch(Object(store_action_creators_members__WEBPACK_IMPORTED_MODULE_13__["deleteMember"])(id));
        Alert('success', 'User successfully deleted!');
      }
    });
  },
  impersonateMember: (id, impersonator) => {
    sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, impersonate user!'
    }).then(result => {
      if (result.value) {
        dispatch(Object(store_action_creators_members__WEBPACK_IMPORTED_MODULE_13__["impersonateMember"])(id, impersonator));
        Alert('success', 'Successfully impersonate user!');
        window.location.reload();
      }
    });
  }
}))(UsersComponent);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useForm, "useForm", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Users/Users.jsx");
  reactHotLoader.register(CreditModalComponent, "CreditModalComponent", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Users/Users.jsx");
  reactHotLoader.register(AddCreditModal, "AddCreditModal", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Users/Users.jsx");
  reactHotLoader.register(DeductCreditModal, "DeductCreditModal", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Users/Users.jsx");
  reactHotLoader.register(Toast, "Toast", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Users/Users.jsx");
  reactHotLoader.register(Alert, "Alert", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Users/Users.jsx");
  reactHotLoader.register(UsersComponent, "UsersComponent", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Users/Users.jsx");
  reactHotLoader.register(_default, "default", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Users/Users.jsx");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21ha2VEYXRhLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvVXNlcnMvVXNlcnMuanN4Iiwid2VicGFjazovLy91dGlsIChpZ25vcmVkKSIsIndlYnBhY2s6Ly8vYnVmZmVyIChpZ25vcmVkKSIsIndlYnBhY2s6Ly8vY3J5cHRvIChpZ25vcmVkKSJdLCJuYW1lcyI6WyJyYW5nZSIsImxlbiIsImFyciIsImkiLCJwdXNoIiwibmV3UGVyc29uIiwic3RhdHVzQ2hhbmNlIiwiTWF0aCIsInJhbmRvbSIsImZpcnN0TmFtZSIsIm5hbW9yIiwiZ2VuZXJhdGUiLCJ3b3JkcyIsIm51bWJlcnMiLCJsYXN0TmFtZSIsImVtYWlsIiwibW9iaWxlIiwiZmxvb3IiLCJtYWtlRGF0YSIsImxlbnMiLCJtYWtlRGF0YUxldmVsIiwiZGVwdGgiLCJtYXAiLCJkIiwic3ViUm93cyIsInVuZGVmaW5lZCIsInVzZUZvcm0iLCJpbml0aWFsVmFsdWVzIiwib25TdWJtaXQiLCJ2YWxpZGF0ZSIsInZhbHVlcyIsInNldFZhbHVlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJ0b3VjaGVkVmFsdWVzIiwic2V0VG91Y2hlZFZhbHVlcyIsImVycm9ycyIsInNldEVycm9ycyIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJuYW1lIiwiaGFuZGxlQmx1ciIsImUiLCJoYW5kbGVTdWJtaXQiLCJDcmVkaXRNb2RhbENvbXBvbmVudCIsImNvbnNvbGUiLCJsb2ciLCJhbW91bnQiLCJoZWFkZXIiLCJjcmVkaXQiLCJzbHVnIiwibWVzc2FnZSIsImFkZCIsImRlZHVjdCIsIkFkZENyZWRpdE1vZGFsIiwiY29tcG9zZSIsImNvbm5lY3QiLCJzdGF0ZSIsIm93blByb3BzIiwiZGlzcGF0Y2giLCJoaWRlTW9kYWwiLCJhZGRDcmVkaXRzQWN0aW9uIiwiZ2V0TWVtYmVyc0FjdGlvbiIsIkFsZXJ0IiwicmVkdXhGb3JtIiwiZm9ybSIsIkRlZHVjdENyZWRpdE1vZGFsIiwiZGVkdWN0Q3JlZGl0c0FjdGlvbiIsIlRvYXN0IiwiU3dhbCIsIm1peGluIiwidG9hc3QiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJ0eXBlIiwidGl0bGUiLCJmaXJlIiwiVXNlcnNDb21wb25lbnQiLCJnZXRNZW1iZXJzIiwiZGVsZXRlTWVtYmVyIiwiaW1wZXJzb25hdGVNZW1iZXIiLCJtZW1iZXJzIiwidXNlciIsInVzZXJfdHlwZSIsInNob3dNb2RhbCIsInVzZU1vZGFsIiwicG9wdWxhdGVNZW1iZXJzIiwidXNlRWZmZWN0IiwiY29sdW1ucyIsInVzZU1lbW8iLCJIZWFkZXIiLCJhY2Nlc3NvciIsImNsYXNzTmFtZSIsImlkIiwiQ2VsbCIsInJvdyIsIm9yaWdpbmFsIiwiaW1wZXJzb25hdG9yIiwid2FsbGV0IiwiYmFsYW5jZSIsInNvcnRhYmxlIiwid2lkdGgiLCJkYXRhIiwiZmlsdGVyZWREYXRhIiwic2V0RmlsdGVyZWREYXRhIiwiaGFuZGxlU2V0RGF0YSIsInNlbGVjdEFsbE1lbWJlcnMiLCJjdXJyZW50VXNlclNlbGVjdG9yIiwidGV4dCIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwidGhlbiIsInJlc3VsdCIsImRlbGV0ZU1lbWJlckFjdGlvbiIsImltcGVyc29uYXRlTWVtYmVyQWN0aW9uIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsS0FBSyxHQUFHQyxHQUFHLElBQUk7QUFDbkIsUUFBTUMsR0FBRyxHQUFHLEVBQVo7O0FBQ0EsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRixHQUFwQixFQUF5QkUsQ0FBQyxFQUExQixFQUE4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MEJBbUJBRSxLOzBCQU9BTCxLOzBCQU9HZSxjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuTFQsZTs7Ozs7Ozs7Ozs7QUNBQSxlOzs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoianMvMTguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbmFtb3IgZnJvbSAnbmFtb3InXG5cbmNvbnN0IHJhbmdlID0gbGVuID0+IHtcbiAgY29uc3QgYXJyID0gW11cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGFyci5wdXNoKGkpXG4gIH1cbiAgcmV0dXJuIGFyclxufVxuXG5jb25zdCBuZXdQZXJzb24gPSAoKSA9PiB7XG4gIGNvbnN0IHN0YXR1c0NoYW5jZSA9IE1hdGgucmFuZG9tKClcbiAgcmV0dXJuIHtcbiAgICBmaXJzdE5hbWU6IG5hbW9yLmdlbmVyYXRlKHsgd29yZHM6IDEsIG51bWJlcnM6IDAgfSksXG4gICAgbGFzdE5hbWU6IG5hbW9yLmdlbmVyYXRlKHsgd29yZHM6IDEsIG51bWJlcnM6IDAgfSksXG4gICAgZW1haWw6IG5hbW9yLmdlbmVyYXRlKHsgd29yZHM6IDEsIG51bWJlcnM6IDAgfSkgKyAnQGdtYWlsLmNvbScsXG4gICAgbW9iaWxlOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFrZURhdGEoLi4ubGVucykge1xuICBjb25zdCBtYWtlRGF0YUxldmVsID0gKGRlcHRoID0gMCkgPT4ge1xuICAgIGNvbnN0IGxlbiA9IGxlbnNbZGVwdGhdXG4gICAgcmV0dXJuIHJhbmdlKGxlbikubWFwKGQgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ubmV3UGVyc29uKCksXG4gICAgICAgIHN1YlJvd3M6IGxlbnNbZGVwdGggKyAxXSA/IG1ha2VEYXRhTGV2ZWwoZGVwdGggKyAxKSA6IHVuZGVmaW5lZCxcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIG1ha2VEYXRhTGV2ZWwoKVxufVxuIiwiaW1wb3J0IEhlbG1ldCBmcm9tICdyZWFjdC1oZWxtZXQnXG5pbXBvcnQgeyBjb21wb3NlIH0gZnJvbSAncmVjb21wb3NlJ1xuaW1wb3J0IHsgcmVkdXhGb3JtLCBGaWVsZCB9IGZyb20gJ3JlZHV4LWZvcm0nXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZU1vZGFsIH0gZnJvbSAncmVhY3QtY29udGV4dC1tb2RhbHMnXG5pbXBvcnQgeyBOZXV0cmFsQnV0dG9uLCBQYWdlSGVhZGVyLCBEYXRhVGFibGUgfSBmcm9tICdjb21wb25lbnRzJ1xuaW1wb3J0IG1ha2VEYXRhIGZyb20gJy4uLy4uL21ha2VEYXRhJ1xuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXG5pbXBvcnQgeyBzZWxlY3RBbGxNZW1iZXJzIH0gZnJvbSAnc3RvcmUvc2VsZWN0b3JzL21lbWJlcnMnXG5pbXBvcnQgeyBjdXJyZW50VXNlclNlbGVjdG9yIH0gZnJvbSAnc3RvcmUvc2VsZWN0b3JzL3Nlc3Npb24nXG5pbXBvcnQge1xuICBnZXRNZW1iZXJzIGFzIGdldE1lbWJlcnNBY3Rpb24sXG4gIHVwZGF0ZU1lbWJlciBhcyB1cGRhdGVNZW1iZXJBY3Rpb24sXG4gIGNyZWF0ZU1lbWJlciBhcyBjcmVhdGVNZW1iZXJBY3Rpb24sXG4gIGRlbGV0ZU1lbWJlciBhcyBkZWxldGVNZW1iZXJBY3Rpb24sXG4gIGFkZENyZWRpdHMgYXMgYWRkQ3JlZGl0c0FjdGlvbixcbiAgZGVkdWN0Q3JlZGl0cyBhcyBkZWR1Y3RDcmVkaXRzQWN0aW9uLFxuICBpbXBlcnNvbmF0ZU1lbWJlciBhcyBpbXBlcnNvbmF0ZU1lbWJlckFjdGlvbixcbiAgbGVhdmVJbXBlcnNvbmF0ZSBhcyBsZWF2ZUltcGVyc29uYXRlQWN0aW9uXG59IGZyb20gJ3N0b3JlL2FjdGlvbi1jcmVhdG9ycy9tZW1iZXJzJ1xuaW1wb3J0IHsgTGluaywgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5leHBvcnQgY29uc3QgdXNlRm9ybSA9ICh7IGluaXRpYWxWYWx1ZXMsIG9uU3VibWl0LCB2YWxpZGF0ZSB9KSA9PiB7XG4gICAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IFJlYWN0LnVzZVN0YXRlKGluaXRpYWxWYWx1ZXMgfHwge30pXG4gICAgY29uc3QgW3RvdWNoZWRWYWx1ZXMsIHNldFRvdWNoZWRWYWx1ZXNdID0gUmVhY3QudXNlU3RhdGUoe30pXG4gICAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IFJlYWN0LnVzZVN0YXRlKHt9KVxuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gZXZlbnQgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0XG4gICAgICBjb25zdCB2YWx1ZSA9IHRhcmdldC52YWx1ZVxuICAgICAgY29uc3QgbmFtZSA9IHRhcmdldC5uYW1lXG4gICAgICBzZXRWYWx1ZXMoe1xuICAgICAgICAuLi52YWx1ZXMsXG4gICAgICAgIFtuYW1lXTogdmFsdWVcbiAgICAgIH0pXG4gICAgfVxuICBcbiAgICBjb25zdCBoYW5kbGVCbHVyID0gZXZlbnQgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0XG4gICAgICBjb25zdCBuYW1lID0gdGFyZ2V0Lm5hbWVcbiAgICAgIHNldFRvdWNoZWRWYWx1ZXMoe1xuICAgICAgICAuLi50b3VjaGVkVmFsdWVzLFxuICAgICAgICBbbmFtZV06IHRydWVcbiAgICAgIH0pXG4gICAgICBjb25zdCBlID0gdmFsaWRhdGUodmFsdWVzKVxuICAgICAgc2V0RXJyb3JzKHtcbiAgICAgICAgLi4uZXJyb3JzLFxuICAgICAgICAuLi5lXG4gICAgICB9KVxuICAgIH1cbiAgXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gZXZlbnQgPT4ge1xuXG4gICAgICBjb25zdCBlID0gdmFsaWRhdGUodmFsdWVzKVxuICAgICAgc2V0RXJyb3JzKHtcbiAgICAgICAgLi4uZXJyb3JzLFxuICAgICAgICAuLi5lXG4gICAgICB9KVxuICBcbiAgICAgIG9uU3VibWl0KHsgLi4udmFsdWVzLCBlIH0pXG4gICAgfVxuICBcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWVzLFxuICAgICAgdG91Y2hlZFZhbHVlcyxcbiAgICAgIGVycm9ycyxcbiAgICAgIGhhbmRsZUNoYW5nZSxcbiAgICAgIGhhbmRsZVN1Ym1pdCxcbiAgICAgIGhhbmRsZUJsdXJcbiAgICB9XG4gIH1cblxuZXhwb3J0IGNvbnN0IENyZWRpdE1vZGFsQ29tcG9uZW50ID0gKHsgb25TdWJtaXQsIGluaXRpYWxWYWx1ZXMgfSkgPT4ge1xuICBjb25zb2xlLmxvZyhpbml0aWFsVmFsdWVzKVxuICBjb25zdCB7IHZhbHVlcywgdG91Y2hlZFZhbHVlcywgZXJyb3JzLCBoYW5kbGVDaGFuZ2UsIGhhbmRsZVN1Ym1pdCwgaGFuZGxlQmx1ciB9ID0gdXNlRm9ybSh7XG4gICAgaW5pdGlhbFZhbHVlcyxcbiAgICBvblN1Ym1pdCxcbiAgICB2YWxpZGF0ZSh2YWx1ZXMpIHtcbiAgICAgIGNvbnN0IGVycm9ycyA9IHt9XG5cbiAgICAgIGlmICh2YWx1ZXMuYW1vdW50ID09PSBcIlwiKSB7XG4gICAgICAgIGVycm9ycy5hbW91bnQgPSBcIlBsZWFzZSBzZWxlY3QgYSBjdXN0b21lclwiXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBlcnJvcnNcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3Jvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNSBwYi01IGJvcmRlci1iXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTEwIHRleHQtYmFzZSB0ZXh0LWdyYXktNzAwXCI+e3ZhbHVlcy5oZWFkZXJ9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTEwIHB0LTUgZmxleCBwYi0wXCIgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgcHItNVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ibHVlLTcwMCBweS0yXCI+VG90YWwgQ3JlZGl0czwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBwLTIgdGV4dC1ibHVlLTcwMFwiPnt2YWx1ZXMuY3JlZGl0fTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmxvY2sgdy1mdWxsIHB5LTInPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYW1vdW50XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgbWItMlwiPkFtb3VudDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhbW91bnRcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0yIGJvcmRlclwiIHBsYWNlaG9sZGVyPVwiUGxlYXNlIHNwZWNpZnkgYW4gYW1vdW50XCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gdmFsdWU9e3ZhbHVlcy5hbW91bnR9Lz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwic2x1Z1wiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHZhbHVlPXt2YWx1ZXMuc2x1Z30vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHAtMTAgcHQtMCB3LWZ1bGwgcGItNVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jsb2NrIHctZnVsbCBweS0yJz5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhbW91bnRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgbWItMlwiPkFtb3VudDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibWVzc2FnZVwiIGNsYXNzTmFtZT1cInctZnVsbCBwLTIgYm9yZGVyXCIgcGxhY2Vob2xkZXI9XCJQbGVhc2Ugc3BlY2lmeSBhIG1lc3NhZ2VcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSB2YWx1ZT17dmFsdWVzLm1lc3NhZ2V9Lz5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHQgcHgtMTAgcGItNVwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHAtMyByb3VuZGVkIGJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwXCIgdHlwZT1cInN1Ym1pdFwiPnt2YWx1ZXMuYWRkfXt2YWx1ZXMuZGVkdWN0fSBDcmVkaXRzPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICApXG59XG5cbmNvbnN0IEFkZENyZWRpdE1vZGFsID0gY29tcG9zZShcbiAgY29ubmVjdChcbiAgICAoc3RhdGUsIG93blByb3BzKSA9PiAoe1xuICAgICAgaW5pdGlhbFZhbHVlczogb3duUHJvcHNcbiAgICB9KSxcbiAgICAoZGlzcGF0Y2gsIHsgaGlkZU1vZGFsIH0pID0+ICh7XG4gICAgICBvblN1Ym1pdDogdmFsdWVzID0+IHtcbiAgICAgICAgZGlzcGF0Y2goYWRkQ3JlZGl0c0FjdGlvbih2YWx1ZXMpKVxuICAgICAgICBkaXNwYXRjaChnZXRNZW1iZXJzQWN0aW9uKCkpXG4gICAgICAgIGhpZGVNb2RhbCgpXG4gICAgICAgIEFsZXJ0KCdzdWNjZXNzJywgJ0NyZWRpdCBzdWNjZXNzZnVsbHkgdXBkYXRlZCEnKVxuICAgICAgfVxuICAgIH0pXG4gICksXG4gIHJlZHV4Rm9ybSh7XG4gICAgZm9ybTogJ2FkZC1jcmVkaXQnXG4gIH0pXG4pKENyZWRpdE1vZGFsQ29tcG9uZW50KVxuXG5jb25zdCBEZWR1Y3RDcmVkaXRNb2RhbCA9IGNvbXBvc2UoXG4gIGNvbm5lY3QoXG4gICAgKHN0YXRlLCBvd25Qcm9wcykgPT4gKHtcbiAgICAgIGluaXRpYWxWYWx1ZXM6IG93blByb3BzXG4gICAgfSksXG4gICAgKGRpc3BhdGNoLCB7IGhpZGVNb2RhbCB9KSA9PiAoe1xuICAgICAgb25TdWJtaXQ6IHZhbHVlcyA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGRlZHVjdENyZWRpdHNBY3Rpb24odmFsdWVzKSlcbiAgICAgICAgZGlzcGF0Y2goZ2V0TWVtYmVyc0FjdGlvbigpKVxuICAgICAgICBoaWRlTW9kYWwoKVxuICAgICAgICBBbGVydCgnc3VjY2VzcycsICdDcmVkaXQgc3VjY2Vzc2Z1bGx5IHVwZGF0ZWQhJylcbiAgICAgIH1cbiAgICB9KVxuICApLFxuICByZWR1eEZvcm0oe1xuICAgIGZvcm06ICdkZWR1Y3QtY3JlZGl0J1xuICB9KVxuKShDcmVkaXRNb2RhbENvbXBvbmVudClcblxuY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcbiAgdG9hc3Q6IHRydWUsXG4gIHBvc2l0aW9uOiAndG9wLWVuZCcsXG4gIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcbiAgdGltZXI6IDMwMDBcbn0pXG5cbmNvbnN0IEFsZXJ0ID0gKHR5cGUsIHRpdGxlKSA9PiBUb2FzdC5maXJlKHtcbiAgdHlwZTogdHlwZSxcbiAgdGl0bGU6IHRpdGxlXG59KVxuXG5cblxuZnVuY3Rpb24gVXNlcnNDb21wb25lbnQoeyBnZXRNZW1iZXJzLCBkZWxldGVNZW1iZXIsIGltcGVyc29uYXRlTWVtYmVyLCBtZW1iZXJzLCB1c2VyIH0pIHtcbiAgY29uc3QgeyB1c2VyX3R5cGUgfSA9IHVzZXJcblxuICBpZiAodXNlcl90eXBlICE9ICdhZG1pbicpIHtcbiAgICByZXR1cm4gPFJlZGlyZWN0IGZyb209Jy9hY2NvdW50JyB0bz1cIi9hY2NvdW50L292ZXJ2aWV3XCIgLz5cbiAgfVxuICBjb25zdCB7IHNob3dNb2RhbCB9ID0gdXNlTW9kYWwoKVxuICBjb25zdCBwb3B1bGF0ZU1lbWJlcnMgPSBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgZ2V0TWVtYmVycygpXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHBvcHVsYXRlTWVtYmVycygpXG4gIH0sIFtdKVxuXG4gIGNvbnNvbGUubG9nKG1lbWJlcnMpXG5cbiAgY29uc3QgY29sdW1ucyA9IFJlYWN0LnVzZU1lbW8oXG4gICAgKCkgPT4gW1xuICAgICAge1xuICAgICAgICBIZWFkZXI6ICdGaXJzdCBOYW1lJyxcbiAgICAgICAgYWNjZXNzb3I6ICdmaXJzdF9uYW1lJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIEhlYWRlcjogJ0xhc3QgTmFtZScsXG4gICAgICAgIGFjY2Vzc29yOiAnbGFzdF9uYW1lJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIEhlYWRlcjogJ0VtYWlsJyxcbiAgICAgICAgYWNjZXNzb3I6ICdlbWFpbCcsXG4gICAgICAgIGNsYXNzTmFtZTogJ21kOmhpZGRlbiB4bDp0YWJsZS1jZWxsJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgSGVhZGVyOiAnTW9iaWxlJyxcbiAgICAgICAgYWNjZXNzb3I6ICdtb2JpbGUnLFxuICAgICAgICBjbGFzc05hbWU6ICdtZDpoaWRkZW4geGw6dGFibGUtY2VsbCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIEhlYWRlcjogJ1R5cGUnLFxuICAgICAgICBhY2Nlc3NvcjogJ3VzZXJfdHlwZSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIEhlYWRlcjogJ0NyZWRpdHMnLFxuICAgICAgICBhY2Nlc3NvcjogJ3dhbGxldC5iYWxhbmNlJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnbWQ6aGlkZGVuIHhsOnRhYmxlLWNlbGwnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBIZWFkZXI6ICdEYXRlIEpvaW5lZCcsXG4gICAgICAgIGFjY2Vzc29yOiAnY3JlYXRlZF9hdCcsXG4gICAgICAgIGNsYXNzTmFtZTogJ21kOmhpZGRlbiB4bDp0YWJsZS1jZWxsJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwiYWN0aW9uXCIsXG4gICAgICAgIGFjY2Vzc29yOiAnc2x1ZycsXG4gICAgICAgIENlbGw6IHJvdyA9PiB7XG4gICAgICAgICAgY29uc3Qgc2x1ZyA9IHJvdy5yb3cub3JpZ2luYWwuc2x1Z1xuICAgICAgICAgIGNvbnN0IGltcGVyc29uYXRvciA9IHJvdy5yb3cub3JpZ2luYWwuaW1wZXJzb25hdG9yXG4gICAgICAgICAgY29uc3QgY3JlZGl0ID0gcm93LnJvdy5vcmlnaW5hbC53YWxsZXQuYmFsYW5jZVxuICAgICAgICAgIGNvbnN0IGhlYWRlciA9ICdBZGp1c3QgVXNlciBDcmVkaXRzJ1xuICAgICAgICAgIGNvbnN0IGFkZCA9IFwiQWRkXCJcbiAgICAgICAgICBjb25zdCBkZWR1Y3QgPSBcIkRlZHVjdFwiXG4gICAgICAgICAgY29uc3QgYW1vdW50ID0gJydcbiAgICAgICAgICBjb25zdCBtZXNzYWdlID0gJydcbiAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBcInJvdW5kZWQtbGcgaGlkZGVuIG1kOmJsb2NrIHctMS8yIGxnOnctMS8zXCJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyb3cpXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtbGVmdFwiPlxuICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJtZDpibG9jayBsZzppbmxpbmUgYmctZ3JheS0yMDAgaG92ZXI6YmctZ3JheS00MDAgdGV4dC1ncmF5LTcwMCB0ZXh0LXhzIGZvbnQtYm9sZCBweS0xIHB4LTQgcm91bmRlZFwiIG9uQ2xpY2s9eygpID0+IGltcGVyc29uYXRlTWVtYmVyKHNsdWcsIGltcGVyc29uYXRvcil9IHRvPVwiI1wiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIGlubGluZSBsZzpoaWRkZW5cIj5ob3dfdG9fcmVnPC9pPiA8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6aW5saW5lXCI+SW1wZXJzb25hdGU8L3NwYW4+XG4gICAgICAgICAgICAgIDwvTGluaz57JyAnfSBcbiAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibWQ6YmxvY2sgbGc6aW5saW5lIGJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgdGV4dC14cyBmb250LWJvbGQgcHktMSBweC00IHJvdW5kZWRcIiBcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgc2hvd01vZGFsKEFkZENyZWRpdE1vZGFsLCB7IHNsdWcsIGNyZWRpdCwgaGVhZGVyLCBhZGQsIGFtb3VudCwgbWVzc2FnZSwgY2xhc3NOYW1lIH0pXG4gICAgICAgICAgICAgICAgfSB0bz1cIiNcIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIGlubGluZSBsZzpoaWRkZW5cIj5ob3dfdG9fcmVnPC9pPiA8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6aW5saW5lXCI+QWRkIENyZWRpdHM8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9MaW5rPnsnICd9XG4gICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cIm1kOmJsb2NrIGxnOmlubGluZSBiZy1ncmVlbi01MDAgaG92ZXI6YmctZ3JlZW4tNzAwIHRleHQtd2hpdGUgdGV4dC14cyBmb250LWJvbGQgcHktMSBweC00IHJvdW5kZWRcIiBcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgc2hvd01vZGFsKERlZHVjdENyZWRpdE1vZGFsLCB7IHNsdWcsIGNyZWRpdCwgaGVhZGVyLCBkZWR1Y3QsIGFtb3VudCwgbWVzc2FnZSwgY2xhc3NOYW1lIH0pXG4gICAgICAgICAgICAgICAgfSB0bz1cIiNcIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIGlubGluZSBsZzpoaWRkZW5cIj5ob3dfdG9fcmVnPC9pPiA8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6aW5saW5lXCI+RGVkdWN0IENyZWRpdHM8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9MaW5rPnsnICd9XG4gICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cIm1kOmJsb2NrIGxnOmlubGluZSBiZy1yZWQtNTAwIGhvdmVyOmJnLXJlZC03MDAgdGV4dC13aGl0ZSB0ZXh0LXhzIGZvbnQtYm9sZCBweS0xIHB4LTQgcm91bmRlZFwiIG9uQ2xpY2s9eygpID0+IGRlbGV0ZU1lbWJlcihzbHVnKX0gdG89XCIjXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgaW5saW5lIGxnOmhpZGRlblwiPmhvd190b19yZWc8L2k+IDxzcGFuIGNsYXNzTmFtZT1cImhpZGRlbiBsZzppbmxpbmVcIj5EZWxldGU8L3NwYW4+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfSxcbiAgICAgICAgSGVhZGVyOiAnQWN0aW9uJyxcbiAgICAgICAgc29ydGFibGU6IGZhbHNlLFxuICAgICAgICB3aWR0aDogNDVcbiAgICAgIH0sXG4gICAgXSxcbiAgICBbXVxuICApXG5cbiAgY29uc3QgZGF0YSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gbWFrZURhdGEoMjApLCBbXSlcbiAgY29uc3QgW2ZpbHRlcmVkRGF0YSwgc2V0RmlsdGVyZWREYXRhXSA9IHVzZVN0YXRlKG1lbWJlcnMpXG4gIGNvbnN0IGhhbmRsZVNldERhdGEgPSBtZW1iZXJzID0+IHtcbiAgICBzZXRGaWx0ZXJlZERhdGEobWVtYmVycylcbiAgfVxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmItd2hpdGUgcHgtMTAgcHktNVwiPlxuICAgICAgPFBhZ2VIZWFkZXIgdGl0bGU9XCJVc2VyXCIgc3ViVGl0bGU9XCJBY2NvdW50c1wiID5cbiAgICAgICAgPExpbmsgdG89XCIvYWNjb3VudC91c2Vycy9leHBvcnRcIiBjbGFzc05hbWU9XCJtbC0yIGJnLWdyYXktMzAwIGhvdmVyOmJnLWdyYXktNDAwIHRleHQtZ3JheS04MDAgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+dmlld19tb2R1bGU8L2k+XG4gICAgICAgICAgPHNwYW4+RXhwb3J0PC9zcGFuPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L1BhZ2VIZWFkZXI+XG5cbiAgICAgICAgPERhdGFUYWJsZSBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhPXttZW1iZXJzfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9GcmFnbWVudD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiAoe1xuICAgIG1lbWJlcnM6IHNlbGVjdEFsbE1lbWJlcnMoc3RhdGUpLFxuICAgIHVzZXI6IGN1cnJlbnRVc2VyU2VsZWN0b3Ioc3RhdGUpXG4gIH0pLFxuICBkaXNwYXRjaCA9PiAoe1xuICAgIGdldE1lbWJlcnM6ICgpID0+IGRpc3BhdGNoKGdldE1lbWJlcnNBY3Rpb24oKSksXG4gICAgZGVsZXRlTWVtYmVyOiBpZCA9PiB7XG4gICAgICBTd2FsLmZpcmUoe1xuICAgICAgICB0aXRsZTogJ0FyZSB5b3Ugc3VyZT8nLFxuICAgICAgICB0ZXh0OiBcIllvdSB3b24ndCBiZSBhYmxlIHRvIHJldmVydCB0aGlzIVwiLFxuICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6ICcjMzA4NWQ2JyxcbiAgICAgICAgY2FuY2VsQnV0dG9uQ29sb3I6ICcjZDMzJyxcbiAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdZZXMsIGRlbGV0ZSBpdCEnXG4gICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xuICAgICAgICAgIGRpc3BhdGNoKGRlbGV0ZU1lbWJlckFjdGlvbihpZCkpXG4gICAgICAgICAgQWxlcnQoJ3N1Y2Nlc3MnLCAnVXNlciBzdWNjZXNzZnVsbHkgZGVsZXRlZCEnKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG5cbiAgICBpbXBlcnNvbmF0ZU1lbWJlcjogKGlkLCBpbXBlcnNvbmF0b3IpID0+IHtcbiAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgIHRpdGxlOiAnQXJlIHlvdSBzdXJlPycsXG4gICAgICAgIHRleHQ6IFwiWW91IHdvbid0IGJlIGFibGUgdG8gcmV2ZXJ0IHRoaXMhXCIsXG4gICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogJyMzMDg1ZDYnLFxuICAgICAgICBjYW5jZWxCdXR0b25Db2xvcjogJyNkMzMnLFxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ1llcywgaW1wZXJzb25hdGUgdXNlciEnXG4gICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xuICAgICAgICAgIGRpc3BhdGNoKGltcGVyc29uYXRlTWVtYmVyQWN0aW9uKGlkLCBpbXBlcnNvbmF0b3IpKVxuICAgICAgICAgIEFsZXJ0KCdzdWNjZXNzJywgJ1N1Y2Nlc3NmdWxseSBpbXBlcnNvbmF0ZSB1c2VyIScpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfSlcbikoVXNlcnNDb21wb25lbnQpIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==