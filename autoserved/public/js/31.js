(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./resources/assets/js/pages/Vehicles/Vehicles.jsx":
/*!*********************************************************!*\
  !*** ./resources/assets/js/pages/Vehicles/Vehicles.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components */ "./resources/assets/js/components/index.js");
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-number-format */ "./node_modules/react-number-format/dist/react-number-format.es.js");
/* harmony import */ var color_convert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! color-convert */ "./node_modules/color-convert/index.js");
/* harmony import */ var color_convert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(color_convert__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var store_selectors_vehicles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! store/selectors/vehicles */ "./resources/assets/js/store/selectors/vehicles.js");
/* harmony import */ var store_selectors_session__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! store/selectors/session */ "./resources/assets/js/store/selectors/session/index.js");
/* harmony import */ var store_action_creators_vehicles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! store/action-creators/vehicles */ "./resources/assets/js/store/action-creators/vehicles/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");



(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};












const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

const Alert = (type, title) => Toast.fire({
  type: type,
  title: title
});

function VehicleComponent({
  getVehicles,
  deleteVehicle,
  vehicles,
  user
}) {
  const {
    user_type
  } = user;

  if (user_type != 'admin' && user_type != 'customer') {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Redirect"], {
      from: "/account",
      to: "/account/overview"
    });
  }

  const populateVehicles = async () => {
    await getVehicles();
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    populateVehicles();
  }, []);
  console.log(vehicles);
  const columns = react__WEBPACK_IMPORTED_MODULE_4___default.a.useMemo(() => [{
    id: "car_details",
    accessor: 'car.name',
    Cell: row => {
      const car = row.row.original.car;
      const color = car.color;
      const name = car.name;
      const mileage = car.mileage;
      const last_serviced = car.last_serviced;
      const date_purchased = car.date_purchased;
      const icon = color_convert__WEBPACK_IMPORTED_MODULE_7___default.a.keyword.hex(color);
      console.log(row);
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "flex py-5"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "flex-initial content-center mr-5 self-center"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "p-2 rounded-full text-white text-center align-middle",
        style: {
          backgroundColor: '#' + icon,
          width: '45px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
        className: "material-icons"
      }, "directions_car"))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "flex-auto"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "grid grid-cols-3 gap-1"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "col-span-3 text-blue-500 font-bold"
      }, name), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "col-span-1 text-sm text-gray-700"
      }, "Current Mileage: ", mileage), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "col-span-1 text-sm text-gray-700"
      }, "Date Purchased: ", date_purchased), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "col-span-1 text-sm text-gray-700"
      }, "Last Serviced: ", last_serviced))));
    },
    Header: 'Car Details',
    sortable: true,
    width: 45
  }, {
    id: "plate_number",
    accessor: 'plate_number',
    className: 'md:hidden xl:table-cell text-center',
    Cell: row => {
      const plate_number = row.row.original.plate_number;
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "rounded border border-gray-700 px-3 py-2 text-xs"
      }, plate_number);
    },
    Header: 'Plate Number',
    sortable: true,
    width: 45
  }, {
    id: "type",
    accessor: 'type',
    className: 'md:hidden xl:table-cell text-center text-sm',
    Cell: row => {
      const type = row.row.original.type;
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "text-gray-700"
      }, type.toUpperCase());
    },
    Header: 'Vehicle Type',
    sortable: true,
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
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "float-left"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Link"], {
        className: "bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-1 px-4 rounded",
        to: "/account/vehicle/schedules/".concat(id)
      }, "Schedule"), ' ', react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Link"], {
        className: "bg-orange-500 hover:bg-blue-700 text-white text-xs font-bold py-1 px-4 rounded",
        to: "#"
      }, "Edit"), ' ', react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Link"], {
        className: "bg-red-500 hover:bg-red-700 text-white text-xs font-bold py-1 px-4 rounded",
        onClick: () => deleteMake(id),
        to: "#"
      }, "Delete"));
    },
    Header: 'Action',
    sortable: false,
    width: 45
  }], []);
  const [filteredData, setFilteredData] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(vehicles);

  const handleSetData = vehicles => {
    setFilteredData(vehicles);
  };

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "bb-white px-10 py-5"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_5__["PageHeader"], {
    title: "Vehicles",
    subTitle: "My Garage"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Link"], {
    className: "ml-2 bg-blue-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded inline-flex items-center",
    to: "/account/vehicles/create"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
    className: "material-icons"
  }, "add"), " Create New Vehicle")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_5__["DataTable"], {
    columns: columns,
    data: vehicles
  })));
}

__signature__(VehicleComponent, "useEffect{}\nuseMemo{columns}\nuseState{[filteredData, setFilteredData](vehicles)}");

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(state => ({
  vehicles: Object(store_selectors_vehicles__WEBPACK_IMPORTED_MODULE_9__["selectAllVehicles"])(state),
  user: Object(store_selectors_session__WEBPACK_IMPORTED_MODULE_10__["currentUserSelector"])(state)
}), dispatch => ({
  getVehicles: () => dispatch(Object(store_action_creators_vehicles__WEBPACK_IMPORTED_MODULE_11__["getVehicles"])()),
  deleteVehicle: id => {
    sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.value) {
        dispatch(Object(store_action_creators_vehicles__WEBPACK_IMPORTED_MODULE_11__["deleteVehicle"])(id));
        Alert('success', 'User successfully deleted!');
      }
    });
  }
}))(VehicleComponent);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Toast, "Toast", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Vehicles/Vehicles.jsx");
  reactHotLoader.register(Alert, "Alert", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Vehicles/Vehicles.jsx");
  reactHotLoader.register(VehicleComponent, "VehicleComponent", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Vehicles/Vehicles.jsx");
  reactHotLoader.register(_default, "default", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Vehicles/Vehicles.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

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

/***/ }),

/***/ "./resources/assets/js/store/selectors/vehicles.js":
/*!*********************************************************!*\
  !*** ./resources/assets/js/store/selectors/vehicles.js ***!
  \*********************************************************/
/*! exports provided: selectAllVehicles, selectVehicleDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllVehicles", function() { return selectAllVehicles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectVehicleDetails", function() { return selectVehicleDetails; });
/* harmony import */ var normalizr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalizr */ "./node_modules/normalizr/dist/normalizr.es.js");
/* harmony import */ var store_schemas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! store/schemas */ "./resources/assets/js/store/schemas.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



const selectAllVehicles = state => {
  const dnEntities = Object(normalizr__WEBPACK_IMPORTED_MODULE_0__["denormalize"])({
    vehicles: Object.keys(state.entities.vehicles)
  }, store_schemas__WEBPACK_IMPORTED_MODULE_1__["entities"], state.entities);
  return dnEntities.vehicles;
};
const selectVehicleDetails = (state, id) => {
  const dnEntities = Object(normalizr__WEBPACK_IMPORTED_MODULE_0__["denormalize"])({
    vehicles: [id]
  }, store_schemas__WEBPACK_IMPORTED_MODULE_1__["entities"], state.entities);
  return dnEntities.vehicles;
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(selectAllVehicles, "selectAllVehicles", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/selectors/vehicles.js");
  reactHotLoader.register(selectVehicleDetails, "selectVehicleDetails", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/selectors/vehicles.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL1ZlaGljbGVzL1ZlaGljbGVzLmpzeCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL2FjdGlvbi1jcmVhdG9ycy92ZWhpY2xlcy92ZWhpY2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL3NlbGVjdG9ycy92ZWhpY2xlcy5qcyJdLCJuYW1lcyI6WyJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwiQWxlcnQiLCJ0eXBlIiwidGl0bGUiLCJmaXJlIiwiVmVoaWNsZUNvbXBvbmVudCIsImdldFZlaGljbGVzIiwiZGVsZXRlVmVoaWNsZSIsInZlaGljbGVzIiwidXNlciIsInVzZXJfdHlwZSIsInBvcHVsYXRlVmVoaWNsZXMiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwiY29sdW1ucyIsIlJlYWN0IiwidXNlTWVtbyIsImlkIiwiYWNjZXNzb3IiLCJDZWxsIiwicm93IiwiY2FyIiwib3JpZ2luYWwiLCJjb2xvciIsIm5hbWUiLCJtaWxlYWdlIiwibGFzdF9zZXJ2aWNlZCIsImRhdGVfcHVyY2hhc2VkIiwiaWNvbiIsImNvbnZlcnQiLCJrZXl3b3JkIiwiaGV4IiwiYmFja2dyb3VuZENvbG9yIiwid2lkdGgiLCJIZWFkZXIiLCJzb3J0YWJsZSIsImNsYXNzTmFtZSIsInBsYXRlX251bWJlciIsInRvVXBwZXJDYXNlIiwidHlwZV9pZCIsImhlYWRlciIsInVwZGF0ZSIsImRlbGV0ZU1ha2UiLCJmaWx0ZXJlZERhdGEiLCJzZXRGaWx0ZXJlZERhdGEiLCJ1c2VTdGF0ZSIsImhhbmRsZVNldERhdGEiLCJjb25uZWN0Iiwic3RhdGUiLCJzZWxlY3RBbGxWZWhpY2xlcyIsImN1cnJlbnRVc2VyU2VsZWN0b3IiLCJkaXNwYXRjaCIsImdldFZlaGljbGVzQWN0aW9uIiwidGV4dCIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwidGhlbiIsInJlc3VsdCIsInZhbHVlIiwiZGVsZXRlVmVoaWNsZUFjdGlvbiIsInJlc3BvbnNlIiwibWFrZVJlcXVlc3QiLCJheGlvcyIsImdldCIsImFjdGlvbnMiLCJBRERfVkVISUNMRVMiLCJkYXRhIiwiZ2V0VmVoaWNsZSIsIkdFVF9WRUhJQ0xFIiwiY3JlYXRlVmVoaWNsZSIsInBvc3QiLCJBRERfVkVISUNMRSIsInVwZGF0ZVZlaGljbGUiLCJwdXQiLCJVUERBVEVfVkVISUNMRSIsImRlbGV0ZSIsIkRFTEVURV9WRUhJQ0xFIiwic2F2ZVZlaGljbGUiLCJ2ZWhpY2xlRGF0YSIsImRuRW50aXRpZXMiLCJkZW5vcm1hbGl6ZSIsIk9iamVjdCIsImtleXMiLCJlbnRpdGllcyIsImVudGl0aWVzU2NoZW1hIiwic2VsZWN0VmVoaWNsZURldGFpbHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFFQSxNQUFNQSxLQUFLLEdBQUdDLGtEQUFJLENBQUNDLEtBQUwsQ0FBVztBQUN6QkMsT0FBSyxFQUFFLElBRGtCO0FBRXpCQyxVQUFRLEVBQUUsU0FGZTtBQUd6QkMsbUJBQWlCLEVBQUUsS0FITTtBQUl6QkMsT0FBSyxFQUFFO0FBSmtCLENBQVgsQ0FBZDs7QUFPQSxNQUFNQyxLQUFLLEdBQUcsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEtBQWlCVCxLQUFLLENBQUNVLElBQU4sQ0FBVztBQUMxQ0YsTUFBSSxFQUFFQSxJQURvQztBQUUxQ0MsT0FBSyxFQUFFQTtBQUZtQyxDQUFYLENBQS9COztBQUtBLFNBQVNFLGdCQUFULENBQTBCO0FBQUVDLGFBQUY7QUFBZUMsZUFBZjtBQUE4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QUFHQyxXQUFXLElBQUksTUFBTTdCLFFBQU4sSUFBa0I7QUFDMUQsUUFBTTtBQUFFbEM7QUFBRixNQUFTK0QsV0FBZjtBQUVBLFFBQU1sQixRQUFRLEdBQUcsTUFBTVgsUUFBUSxDQUM3Qlksa0ZBQVcsQ0FBQyx1QkFBRCxFQUEwQixNQUNuQ0MsNENBQUssQ0FBQ1csR0FBTix5QkFBMkIxRCxFQUEzQixHQUFpQytELFdBQWpDLENBRFMsQ0FEa0IsQ0FBL0I7QUFNQSxTQUFPbEIsUUFBUDtBQUNELENBVk07Ozs7Ozs7Ozs7MEJBekRNekQsVzswQkFXQWdFLFU7MEJBV0FFLGE7MEJBV0FHLGE7MEJBYUFwRSxhOzBCQVdBeUUsVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RGI7QUFFQTtBQUVPLE1BQU05QixpQkFBaUIsR0FBR0QsS0FBSyxJQUFJO0FBQ3hDLFFBQU1pQyxVQUFVLEdBQUdDLDZEQUFXLENBQzVCO0FBQUUzRSxZQUFRLEVBQUU0RSxNQUFNLENBQUNDLElBQVAsQ0FBWXBDLEtBQUssQ0FBQ3FDLFFBQU4sQ0FBZTlFLFFBQTNCO0FBQVosR0FENEIsRUFFNUIrRSxzREFGNEIsRUFHNUJ0QyxLQUFLLENBQUNxQyxRQUhzQixDQUE5QjtBQU1BLFNBQU9KLFVBQVUsQ0FBQzFFLFFBQWxCO0FBQ0QsQ0FSTTtBQVVBLE1BQU1nRixvQkFBb0IsR0FBRyxDQUFDdkMsS0FBRCxFQUFRL0IsRUFBUixLQUFlO0FBRWpELFFBQU1nRSxVQUFVLEdBQUdDLDZEQUFXLENBQzVCO0FBQUUzRSxZQUFRLEVBQUUsQ0FBQ1UsRUFBRDtBQUFaLEdBRDRCLEVBRTVCcUUsc0RBRjRCLEVBRzVCdEMsS0FBSyxDQUFDcUMsUUFIc0IsQ0FBOUI7QUFNQSxTQUFPSixVQUFVLENBQUMxRSxRQUFsQjtBQUNELENBVE07Ozs7Ozs7Ozs7MEJBVk0wQyxpQjswQkFVQXNDLG9CIiwiZmlsZSI6ImpzLzMxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBQYWdlSGVhZGVyLCBEYXRhVGFibGUgfSBmcm9tICdjb21wb25lbnRzJ1xuaW1wb3J0IE51bWJlckZvcm1hdCBmcm9tICdyZWFjdC1udW1iZXItZm9ybWF0J1xuaW1wb3J0IGNvbnZlcnQgZnJvbSAnY29sb3ItY29udmVydCdcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJ1xuaW1wb3J0IHsgc2VsZWN0QWxsVmVoaWNsZXMgfSBmcm9tICdzdG9yZS9zZWxlY3RvcnMvdmVoaWNsZXMnXG5pbXBvcnQgeyBjdXJyZW50VXNlclNlbGVjdG9yIH0gZnJvbSAnc3RvcmUvc2VsZWN0b3JzL3Nlc3Npb24nXG5pbXBvcnQge1xuICAgIGdldFZlaGljbGVzIGFzIGdldFZlaGljbGVzQWN0aW9uLFxuICAgIHVwZGF0ZVZlaGljbGUgYXMgdXBkYXRlVmVoaWNsZUFjdGlvbixcbiAgICBjcmVhdGVWZWhpY2xlIGFzIGNyZWF0ZVZlaGljbGVBY3Rpb24sXG4gICAgZGVsZXRlVmVoaWNsZSBhcyBkZWxldGVWZWhpY2xlQWN0aW9uLFxuICB9IGZyb20gJ3N0b3JlL2FjdGlvbi1jcmVhdG9ycy92ZWhpY2xlcydcbmltcG9ydCB7IExpbmssIFJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcbnRvYXN0OiB0cnVlLFxucG9zaXRpb246ICd0b3AtZW5kJyxcbnNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcbnRpbWVyOiAzMDAwXG59KVxuXG5jb25zdCBBbGVydCA9ICh0eXBlLCB0aXRsZSkgPT4gVG9hc3QuZmlyZSh7XG50eXBlOiB0eXBlLFxudGl0bGU6IHRpdGxlXG59KVxuXG5mdW5jdGlvbiBWZWhpY2xlQ29tcG9uZW50KHsgZ2V0VmVoaWNsZXMsIGRlbGV0ZVZlaGljbGUsIHZlaGljbGVzLCB1c2VyIH0pIHtcbiAgICBjb25zdCB7IHVzZXJfdHlwZSB9ID0gdXNlclxuXG4gICAgaWYgKHVzZXJfdHlwZSAhPSAnYWRtaW4nICYmIHVzZXJfdHlwZSAhPSAnY3VzdG9tZXInKSB7XG4gICAgICByZXR1cm4gPFJlZGlyZWN0IGZyb209Jy9hY2NvdW50JyB0bz1cIi9hY2NvdW50L292ZXJ2aWV3XCIgLz5cbiAgICB9XG5cbiAgICBjb25zdCBwb3B1bGF0ZVZlaGljbGVzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCBnZXRWZWhpY2xlcygpXG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcG9wdWxhdGVWZWhpY2xlcygpXG4gICAgfSwgW10pXG5cbiAgICBjb25zb2xlLmxvZyh2ZWhpY2xlcylcblxuICAgIGNvbnN0IGNvbHVtbnMgPSBSZWFjdC51c2VNZW1vKFxuICAgICAgKCkgPT4gW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IFwiY2FyX2RldGFpbHNcIixcbiAgICAgICAgICBhY2Nlc3NvcjogJ2Nhci5uYW1lJyxcbiAgICAgICAgICBDZWxsOiByb3cgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2FyID0gcm93LnJvdy5vcmlnaW5hbC5jYXJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gY2FyLmNvbG9yXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gY2FyLm5hbWVcbiAgICAgICAgICAgIGNvbnN0IG1pbGVhZ2UgPSBjYXIubWlsZWFnZVxuICAgICAgICAgICAgY29uc3QgbGFzdF9zZXJ2aWNlZCA9IGNhci5sYXN0X3NlcnZpY2VkXG4gICAgICAgICAgICBjb25zdCBkYXRlX3B1cmNoYXNlZCA9IGNhci5kYXRlX3B1cmNoYXNlZFxuICAgICAgICAgICAgY29uc3QgaWNvbiA9IGNvbnZlcnQua2V5d29yZC5oZXgoY29sb3IpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyb3cpXG4gICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBweS01XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWluaXRpYWwgY29udGVudC1jZW50ZXIgbXItNSBzZWxmLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgcm91bmRlZC1mdWxsIHRleHQtd2hpdGUgdGV4dC1jZW50ZXIgYWxpZ24tbWlkZGxlXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICcjJyArIGljb24sIHdpZHRoOiAnNDVweCd9fT5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5kaXJlY3Rpb25zX2NhcjwvaT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTMgZ2FwLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0zIHRleHQtYmx1ZS01MDAgZm9udC1ib2xkXCI+e25hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSB0ZXh0LXNtIHRleHQtZ3JheS03MDBcIj5DdXJyZW50IE1pbGVhZ2U6IHttaWxlYWdlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgdGV4dC1zbSB0ZXh0LWdyYXktNzAwXCI+RGF0ZSBQdXJjaGFzZWQ6IHtkYXRlX3B1cmNoYXNlZH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIHRleHQtc20gdGV4dC1ncmF5LTcwMFwiPkxhc3QgU2VydmljZWQ6IHtsYXN0X3NlcnZpY2VkfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9LFxuICAgICAgICAgIEhlYWRlcjogJ0NhciBEZXRhaWxzJyxcbiAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgICAgICB3aWR0aDogNDVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBcInBsYXRlX251bWJlclwiLFxuICAgICAgICAgIGFjY2Vzc29yOiAncGxhdGVfbnVtYmVyJyxcbiAgICAgICAgICBjbGFzc05hbWU6ICdtZDpoaWRkZW4geGw6dGFibGUtY2VsbCB0ZXh0LWNlbnRlcicsXG4gICAgICAgICAgQ2VsbDogcm93ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBsYXRlX251bWJlciA9IHJvdy5yb3cub3JpZ2luYWwucGxhdGVfbnVtYmVyXG4gICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZCBib3JkZXIgYm9yZGVyLWdyYXktNzAwIHB4LTMgcHktMiB0ZXh0LXhzXCI+e3BsYXRlX251bWJlcn08L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9LFxuICAgICAgICAgIEhlYWRlcjogJ1BsYXRlIE51bWJlcicsXG4gICAgICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICAgICAgd2lkdGg6IDQ1XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogXCJ0eXBlXCIsXG4gICAgICAgICAgYWNjZXNzb3I6ICd0eXBlJyxcbiAgICAgICAgICBjbGFzc05hbWU6ICdtZDpoaWRkZW4geGw6dGFibGUtY2VsbCB0ZXh0LWNlbnRlciB0ZXh0LXNtJyxcbiAgICAgICAgICBDZWxsOiByb3cgPT4ge1xuICAgICAgICAgICAgY29uc3QgdHlwZSA9IHJvdy5yb3cub3JpZ2luYWwudHlwZVxuICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDBcIj57dHlwZS50b1VwcGVyQ2FzZSgpfTwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgSGVhZGVyOiAnVmVoaWNsZSBUeXBlJyxcbiAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgICAgICB3aWR0aDogNDVcbiAgICAgICAgfSwgICAgIFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IFwiYWN0aW9uXCIsXG4gICAgICAgICAgYWNjZXNzb3I6ICdpZCcsXG4gICAgICAgICAgQ2VsbDogcm93ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gcm93LnJvdy5vcmlnaW5hbC5pZFxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHJvdy5yb3cub3JpZ2luYWwubmFtZVxuICAgICAgICAgICAgY29uc3QgdHlwZV9pZCA9IHJvdy5yb3cub3JpZ2luYWwudHlwZV9pZFxuICAgICAgICAgICAgY29uc3QgaGVhZGVyID0gJ1VwZGF0ZSBDYXIgTWFrZSdcbiAgICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IFwicm91bmRlZC1sZyBoaWRkZW4gbWQ6YmxvY2sgdy0xLzIgbGc6dy0xLzMgb3ZlcmZsb3ctdmlzaWJsZVwiXG4gICAgICAgICAgICBjb25zdCB1cGRhdGUgPSBcIlVwZGF0ZSBDYXIgTWFrZVwiXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyb3cpXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIHRleHQteHMgZm9udC1ib2xkIHB5LTEgcHgtNCByb3VuZGVkXCIgdG89e2AvYWNjb3VudC92ZWhpY2xlL3NjaGVkdWxlcy8ke2lkfWB9PlxuICAgICAgICAgICAgICAgICAgU2NoZWR1bGVcbiAgICAgICAgICAgICAgICA8L0xpbms+eycgJ31cbiAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJiZy1vcmFuZ2UtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgdGV4dC14cyBmb250LWJvbGQgcHktMSBweC00IHJvdW5kZWRcIiB0bz1cIiNcIj5cbiAgICAgICAgICAgICAgICAgIEVkaXRcbiAgICAgICAgICAgICAgICA8L0xpbms+eycgJ31cbiAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJiZy1yZWQtNTAwIGhvdmVyOmJnLXJlZC03MDAgdGV4dC13aGl0ZSB0ZXh0LXhzIGZvbnQtYm9sZCBweS0xIHB4LTQgcm91bmRlZFwiIG9uQ2xpY2s9eygpID0+IGRlbGV0ZU1ha2UoaWQpfSB0bz1cIiNcIj5cbiAgICAgICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSxcbiAgICAgICAgICBIZWFkZXI6ICdBY3Rpb24nLFxuICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcbiAgICAgICAgICB3aWR0aDogNDVcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBbXVxuICAgIClcbiAgXG4gIFxuICAgIGNvbnN0IFtmaWx0ZXJlZERhdGEsIHNldEZpbHRlcmVkRGF0YV0gPSB1c2VTdGF0ZSh2ZWhpY2xlcylcbiAgICBjb25zdCBoYW5kbGVTZXREYXRhID0gdmVoaWNsZXMgPT4ge1xuICAgICAgc2V0RmlsdGVyZWREYXRhKHZlaGljbGVzKVxuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJiLXdoaXRlIHB4LTEwIHB5LTVcIj5cbiAgICAgICAgICA8UGFnZUhlYWRlciB0aXRsZT1cIlZlaGljbGVzXCIgc3ViVGl0bGU9XCJNeSBHYXJhZ2VcIiA+XG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibWwtMiBiZy1ibHVlLTcwMCBob3ZlcjpiZy1ncmF5LTgwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXJcIiB0bz1cIi9hY2NvdW50L3ZlaGljbGVzL2NyZWF0ZVwiPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5hZGQ8L2k+IENyZWF0ZSBOZXcgVmVoaWNsZVxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L1BhZ2VIZWFkZXI+XG4gICAgICAgICAgPERhdGFUYWJsZSBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhPXt2ZWhpY2xlc30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgIClcbn1cblxuICBleHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAgIHN0YXRlID0+ICh7XG4gICAgICAgIHZlaGljbGVzOiBzZWxlY3RBbGxWZWhpY2xlcyhzdGF0ZSksXG4gICAgICAgIHVzZXI6IGN1cnJlbnRVc2VyU2VsZWN0b3Ioc3RhdGUpXG4gICAgICB9KSxcbiAgICAgIGRpc3BhdGNoID0+ICh7XG4gICAgICAgIGdldFZlaGljbGVzOiAoKSA9PiBkaXNwYXRjaChnZXRWZWhpY2xlc0FjdGlvbigpKSxcbiAgICAgICAgZGVsZXRlVmVoaWNsZTogaWQgPT4ge1xuICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICB0aXRsZTogJ0FyZSB5b3Ugc3VyZT8nLFxuICAgICAgICAgICAgdGV4dDogXCJZb3Ugd29uJ3QgYmUgYWJsZSB0byByZXZlcnQgdGhpcyFcIixcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6ICcjMzA4NWQ2JyxcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiAnI2QzMycsXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ1llcywgZGVsZXRlIGl0ISdcbiAgICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICAgICAgICAgICAgZGlzcGF0Y2goZGVsZXRlVmVoaWNsZUFjdGlvbihpZCkpXG4gICAgICAgICAgICAgIEFsZXJ0KCdzdWNjZXNzJywgJ1VzZXIgc3VjY2Vzc2Z1bGx5IGRlbGV0ZWQhJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICApKFZlaGljbGVDb21wb25lbnQpIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgdmVoaWNsZUFjdGlvbnMgYXMgYWN0aW9ucyB9IGZyb20gJ3N0b3JlL2FjdGlvbnMnXG5pbXBvcnQgeyBtYWtlUmVxdWVzdCB9IGZyb20gJ3N0b3JlL2FjdGlvbi1jcmVhdG9ycy9yZXF1ZXN0cydcblxuZXhwb3J0IGNvbnN0IGdldFZlaGljbGVzID0gKCkgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRpc3BhdGNoKFxuICAgIG1ha2VSZXF1ZXN0KCdnZXQtdmVoaWNsZXMnLCAoKSA9PiBheGlvcy5nZXQoYC9hcGkvdmVoaWNsZXNgKSlcbiAgKVxuXG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBhY3Rpb25zLkFERF9WRUhJQ0xFUyxcbiAgICB2ZWhpY2xlczogcmVzcG9uc2UuZGF0YS5kYXRhXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBnZXRWZWhpY2xlID0gaWQgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRpc3BhdGNoKFxuICAgIG1ha2VSZXF1ZXN0KGBnZXQtdmVoaWNsZS0ke2lkfWAsICgpID0+IGF4aW9zLmdldChgL2FwaS92ZWhpY2xlcy8ke2lkfWApKVxuICApXG5cbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IGFjdGlvbnMuR0VUX1ZFSElDTEUsXG4gICAgdmVoaWNsZXM6IHJlc3BvbnNlLmRhdGEuZGF0YVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlVmVoaWNsZSA9IGRhdGEgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRpc3BhdGNoKFxuICAgIG1ha2VSZXF1ZXN0KCdjcmVhdGUtdmVoaWNsZScsICgpID0+IGF4aW9zLnBvc3QoYC9hcGkvdmVoaWNsZXNgLCBkYXRhKSlcbiAgKVxuXG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBhY3Rpb25zLkFERF9WRUhJQ0xFLFxuICAgIHZlaGljbGVzOiByZXNwb25zZS5kYXRhLmRhdGFcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVZlaGljbGUgPSBkYXRhID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkaXNwYXRjaChcbiAgICBtYWtlUmVxdWVzdChgdXBkYXRlLXZlaGljbGUtJHtkYXRhLmlkfWAsICgpID0+XG4gICAgICBheGlvcy5wdXQoYC9hcGkvdmVoaWNsZXMvJHtkYXRhLmlkfWAsIGRhdGEpXG4gICAgKVxuICApXG5cbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IGFjdGlvbnMuVVBEQVRFX1ZFSElDTEUsXG4gICAgdmVoaWNsZXM6IHJlc3BvbnNlLmRhdGEuZGF0YVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgZGVsZXRlVmVoaWNsZSA9IGlkID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgYXdhaXQgZGlzcGF0Y2goXG4gICAgbWFrZVJlcXVlc3QoYHVwZGF0ZS12ZWhpY2xlLSR7aWR9YCwgKCkgPT4gYXhpb3MuZGVsZXRlKGAvYXBpL3ZlaGljbGVzLyR7aWR9YCkpXG4gIClcblxuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogYWN0aW9ucy5ERUxFVEVfVkVISUNMRSxcbiAgICBpZFxuICB9KVxufVxuXG5leHBvcnQgY29uc3Qgc2F2ZVZlaGljbGUgPSB2ZWhpY2xlRGF0YSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XG4gIGNvbnN0IHsgaWQgfSA9IHZlaGljbGVEYXRhXG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkaXNwYXRjaChcbiAgICBtYWtlUmVxdWVzdCgnc2F2ZS12ZWhpY2xlLXNldHRpbmdzJywgKCkgPT5cbiAgICAgIGF4aW9zLnB1dChgL2FwaS92ZWhpY2xlcy8ke2lkfWAsIHZlaGljbGVEYXRhKVxuICAgIClcbiAgKVxuXG4gIHJldHVybiByZXNwb25zZVxufVxuXG5cbiIsImltcG9ydCB7IGRlbm9ybWFsaXplIH0gZnJvbSAnbm9ybWFsaXpyJ1xuXG5pbXBvcnQgeyBlbnRpdGllcyBhcyBlbnRpdGllc1NjaGVtYSB9IGZyb20gJ3N0b3JlL3NjaGVtYXMnXG5cbmV4cG9ydCBjb25zdCBzZWxlY3RBbGxWZWhpY2xlcyA9IHN0YXRlID0+IHtcbiAgY29uc3QgZG5FbnRpdGllcyA9IGRlbm9ybWFsaXplKFxuICAgIHsgdmVoaWNsZXM6IE9iamVjdC5rZXlzKHN0YXRlLmVudGl0aWVzLnZlaGljbGVzKSB9LFxuICAgIGVudGl0aWVzU2NoZW1hLFxuICAgIHN0YXRlLmVudGl0aWVzXG4gIClcblxuICByZXR1cm4gZG5FbnRpdGllcy52ZWhpY2xlc1xufVxuXG5leHBvcnQgY29uc3Qgc2VsZWN0VmVoaWNsZURldGFpbHMgPSAoc3RhdGUsIGlkKSA9PiB7XG5cbiAgY29uc3QgZG5FbnRpdGllcyA9IGRlbm9ybWFsaXplKFxuICAgIHsgdmVoaWNsZXM6IFtpZF0gfSxcbiAgICBlbnRpdGllc1NjaGVtYSxcbiAgICBzdGF0ZS5lbnRpdGllc1xuICApXG5cbiAgcmV0dXJuIGRuRW50aXRpZXMudmVoaWNsZXNcbn0iXSwic291cmNlUm9vdCI6IiJ9