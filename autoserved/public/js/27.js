(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./resources/assets/js/pages/Overview/Overview.jsx":
/*!*********************************************************!*\
  !*** ./resources/assets/js/pages/Overview/Overview.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_context_modals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-context-modals */ "./node_modules/react-context-modals/dist/main.js");
/* harmony import */ var react_context_modals__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_context_modals__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components */ "./resources/assets/js/components/index.js");
/* harmony import */ var _utils_colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/colors */ "./resources/assets/js/utils/colors.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var store_selectors_overview__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! store/selectors/overview */ "./resources/assets/js/store/selectors/overview.js");
/* harmony import */ var store_action_creators_overview__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! store/action-creators/overview */ "./resources/assets/js/store/action-creators/overview/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var store_selectors_session__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! store/selectors/session */ "./resources/assets/js/store/selectors/session/index.js");



(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};













const OverviewComponent = ({
  smallStats,
  getOverview,
  overview,
  user
}) => {
  const {
    user_type,
    vehicle_count
  } = user;
  const [relocate, setRelocate] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState('');

  const populateOverview = async () => {
    await getOverview();
  };

  console.log(user);

  function showAlerts() {
    if (user_type == 'customer' && vehicle_count < 1) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
        title: 'Before we start requesting estimates',
        text: 'We need to make our vehicle profile first',
        imageUrl: 'https://unsplash.it/400/200',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Create Vehicle Profile'
      }).then(function (result) {
        if (result.value) {
          setRelocate('/account/vehicles/create');
        }
      });
    }
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    populateOverview();
    showAlerts();
  }, []);

  if (relocate != '') {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Redirect"], {
      from: "/account/overview",
      to: relocate
    });
  }

  const ModalExample = props => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "p-12"
  }, props.message);

  const {
    showModal
  } = Object(react_context_modals__WEBPACK_IMPORTED_MODULE_3__["useModal"])();
  console.log(overview);
  console.log(overview.users);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "bb-white px-10 py-5"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_5__["PageHeader"], {
    title: "Dashboard",
    subTitle: "Overview"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
    className: "charts"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "clearfix"
  }), overview && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, Object.values(overview).map(({
    users,
    id
  }) => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    key: id,
    className: "grid grid-cols-4 gap-4 -m-2 mt-2"
  }, users.map((stats, idx) => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    key: idx,
    className: "md:col-span-2 xl:col-span-1 rounded shadow bg-white m-2"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_5__["SmallStats"], {
    id: "small-stats-".concat(idx),
    chartData: Object.values(stats.datasets),
    chartLabels: stats.chartLabels,
    label: stats.label,
    value: stats.value,
    percentage: stats.percentage,
    increase: stats.increase,
    decrease: stats.decrease
  }))))), Object.values(overview).map(({
    operation,
    id
  }) => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    key: id,
    className: "grid grid-cols-4 gap-4 -m-2 mt-2"
  }, operation.map((stats, idx) => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    key: idx,
    className: "md:col-span-2 xl:col-span-1 rounded shadow bg-white m-2"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_5__["SmallStats"], {
    id: "small-stats-".concat(idx),
    chartData: Object.values(stats.datasets),
    chartLabels: stats.chartLabels,
    label: stats.label,
    value: stats.value,
    percentage: stats.percentage,
    increase: stats.increase,
    decrease: stats.decrease
  }))))))));
};

__signature__(OverviewComponent, "useState{[relocate, setRelocate]('')}\nuseEffect{}\nuseModal{{ showModal }}", () => [react_context_modals__WEBPACK_IMPORTED_MODULE_3__["useModal"]]);

OverviewComponent.propTypes = {
  /**
   * The small stats data.
   */
  smallStats: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array
};
OverviewComponent.defaultProps = {
  smallStats: [{
    label: "Active Customers",
    value: "2,390",
    percentage: "12.4%",
    increase: true,
    chartLabels: [null, null, null, null, null],
    decrease: false,
    datasets: [{
      label: "Today",
      fill: "start",
      borderWidth: 1.5,
      backgroundColor: _utils_colors__WEBPACK_IMPORTED_MODULE_6__["default"].primary.toRGBA(0.1),
      borderColor: _utils_colors__WEBPACK_IMPORTED_MODULE_6__["default"].primary.toRGBA(),
      data: [9, 3, 3, 9, 9]
    }]
  }, {
    label: "Inactive Customers",
    value: "8,391",
    percentage: "7.21%",
    increase: false,
    chartLabels: [null, null, null, null, null],
    decrease: true,
    datasets: [{
      label: "Today",
      fill: "start",
      borderWidth: 1.5,
      backgroundColor: _utils_colors__WEBPACK_IMPORTED_MODULE_6__["default"].success.toRGBA(0.1),
      borderColor: _utils_colors__WEBPACK_IMPORTED_MODULE_6__["default"].success.toRGBA(),
      data: [3.9, 4, 4, 9, 4]
    }]
  }, {
    label: "Recurring Customers",
    value: "21,293",
    percentage: "3.71%",
    increase: true,
    chartLabels: [null, null, null, null, null],
    decrease: false,
    datasets: [{
      label: "Today",
      fill: "start",
      borderWidth: 1.5,
      backgroundColor: _utils_colors__WEBPACK_IMPORTED_MODULE_6__["default"].warning.toRGBA(0.1),
      borderColor: _utils_colors__WEBPACK_IMPORTED_MODULE_6__["default"].warning.toRGBA(),
      data: [6, 6, 9, 3, 3]
    }]
  }, {
    label: "New Customers",
    value: "6.43",
    percentage: "2.71%",
    increase: false,
    chartLabels: [null, null, null, null, null],
    decrease: true,
    datasets: [{
      label: "Today",
      fill: "start",
      borderWidth: 1.5,
      backgroundColor: _utils_colors__WEBPACK_IMPORTED_MODULE_6__["default"].salmon.toRGBA(0.1),
      borderColor: _utils_colors__WEBPACK_IMPORTED_MODULE_6__["default"].salmon.toRGBA(),
      data: [0, 9, 3, 3, 3]
    }]
  }]
};

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(state => ({
  overview: Object(store_selectors_overview__WEBPACK_IMPORTED_MODULE_9__["selectAllOverview"])(state),
  user: Object(store_selectors_session__WEBPACK_IMPORTED_MODULE_12__["currentUserSelector"])(state)
}), dispatch => ({
  getOverview: () => dispatch(Object(store_action_creators_overview__WEBPACK_IMPORTED_MODULE_10__["getOverview"])())
}))(OverviewComponent);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(OverviewComponent, "OverviewComponent", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Overview/Overview.jsx");
  reactHotLoader.register(_default, "default", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Overview/Overview.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/store/action-creators/overview/index.js":
/*!*********************************************************************!*\
  !*** ./resources/assets/js/store/action-creators/overview/index.js ***!
  \*********************************************************************/
/*! exports provided: getOverview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _overview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./overview */ "./resources/assets/js/store/action-creators/overview/overview.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOverview", function() { return _overview__WEBPACK_IMPORTED_MODULE_0__["getOverview"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



/***/ }),

/***/ "./resources/assets/js/store/action-creators/overview/overview.js":
/*!************************************************************************!*\
  !*** ./resources/assets/js/store/action-creators/overview/overview.js ***!
  \************************************************************************/
/*! exports provided: getOverview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOverview", function() { return getOverview; });
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




const getOverview = () => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])('get-overview', () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/overview")));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["overviewActions"].ADD_OVERVIEW,
    overview: response.data.data
  });
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getOverview, "getOverview", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/overview/overview.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/store/selectors/overview.js":
/*!*********************************************************!*\
  !*** ./resources/assets/js/store/selectors/overview.js ***!
  \*********************************************************/
/*! exports provided: selectAllOverview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllOverview", function() { return selectAllOverview; });
/* harmony import */ var normalizr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalizr */ "./node_modules/normalizr/dist/normalizr.es.js");
/* harmony import */ var store_schemas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! store/schemas */ "./resources/assets/js/store/schemas.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



const selectAllOverview = state => {
  const dnEntities = Object(normalizr__WEBPACK_IMPORTED_MODULE_0__["denormalize"])({
    overview: Object.keys(state.entities.overview)
  }, store_schemas__WEBPACK_IMPORTED_MODULE_1__["entities"], state.entities);
  return dnEntities.overview;
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(selectAllOverview, "selectAllOverview", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/selectors/overview.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL092ZXJ2aWV3L092ZXJ2aWV3LmpzeCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL2FjdGlvbi1jcmVhdG9ycy9vdmVydmlldy9vdmVydmlldy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL3NlbGVjdG9ycy9vdmVydmlldy5qcyJdLCJuYW1lcyI6WyJPdmVydmlld0NvbXBvbmVudCIsInNtYWxsU3RhdHMiLCJnZXRPdmVydmlldyIsIm92ZXJ2aWV3IiwidXNlciIsInVzZXJfdHlwZSIsInZlaGljbGVfY291bnQiLCJyZWxvY2F0ZSIsInNldFJlbG9jYXRlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInBvcHVsYXRlT3ZlcnZpZXciLCJjb25zb2xlIiwibG9nIiwic2hvd0FsZXJ0cyIsIlN3YWwiLCJmaXJlIiwidGl0bGUiLCJ0ZXh0IiwiaW1hZ2VVcmwiLCJpbWFnZVdpZHRoIiwiaW1hZ2VIZWlnaHQiLCJpbWFnZUFsdCIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uQ29sb3IiLCJjYW5jZWxCdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwidGhlbiIsInJlc3VsdCIsInZhbHVlIiwidXNlRWZmZWN0IiwiTW9kYWxFeGFtcGxlIiwicHJvcHMiLCJtZXNzYWdlIiwic2hvd01vZGFsIiwidXNlTW9kYWwiLCJ1c2VycyIsIk9iamVjdCIsInZhbHVlcyIsIm1hcCIsImlkIiwic3RhdHMiLCJpZHgiLCJkYXRhc2V0cyIsImNoYXJ0TGFiZWxzIiwibGFiZWwiLCJwZXJjZW50YWdlIiwiaW5jcmVhc2UiLCJkZWNyZWFzZSIsIm9wZXJhdGlvbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5IiwiZGVmYXVsdFByb3BzIiwiZmlsbCIsImJvcmRlcldpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3JzIiwicHJpbWFyeSIsInRvUkdCQSIsImJvcmRlckNvbG9yIiwiZGF0YSIsInN1Y2Nlc3MiLCJ3YXJuaW5nIiwic2FsbW9uIiwiY29ubmVjdCIsInN0YXRlIiwic2VsZWN0QWxsT3ZlcnZpZXciLCJjdXJyZW50VXNlclNlbGVjdG9yIiwiZGlzcGF0Y2giLCJnZXRPdmVydmlld0FjdGlvbiIsInJlc3BvbnNlIiwibWFrZVJlcXVlc3QiLCJheGlvcyIsImdldCIsInR5cGUiLCJhY3Rpb25zIiwiQUREX09WRVJWSUVXIiwiZG5FbnRpdGllcyIsImRlbm9ybWFsaXplIiwia2V5cyIsImVudGl0aWVzIiwiZW50aXRpZXNTY2hlbWEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7O0FBRUEsTUFBTUEsaUJBQWlCLEdBQUcsQ0FBQztBQUFFQyxZQUFGO0FBQWNDLGFBQWQ7QUFBMkJDLFVBQTNCO0FBQXFDQztBQUFyQyxDQUFELEtBQWdEO0FBQ3hFLFFBQU07QUFBRUMsYUFBRjtBQUFhQztBQUFiLE1BQStCRixJQUFyQztBQUNBLFFBQU0sQ0FBQ0csUUFBRCxFQUFXQyxXQUFYLElBQTBCQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUFoQzs7QUFFQSxRQUFNQyxnQkFBZ0IsR0FBRyxZQUFZO0FBQ25DLFVBQU1ULFdBQVcsRUFBakI7QUFDRCxHQUZEOztBQUlBVSxTQUFPLENBQUNDLEdBQVIsQ0FBWVQsSUFBWjs7QUFDQSxXQUFTVSxVQUFULEdBQXNCO0FBQ3BCLFFBQUdULFNBQVMsSUFBSSxVQUFiLElBQTJCQyxhQUFhLEdBQUcsQ0FBOUMsRUFBaUQ7QUFDL0NTLHdEQUFJLENBQUNDLElBQUwsQ0FBVTtBQUNSQyxhQUFLLEVBQUUsc0NBREM7QUFFUkMsWUFBSSxFQUFFLDJDQUZFO0FBR1JDLGdCQUFRLEVBQUUsNkJBSEY7QUFJUkMsa0JBQVUsRUFBRSxHQUpK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LEdBQU4saUJBQXZCLENBRGtCLENBQS9CO0FBSUFMLFVBQVEsQ0FBQztBQUNQTSxRQUFJLEVBQUVDLDZEQUFPLENBQUNDLFlBRFA7QUFFUDFFLFlBQVEsRUFBRW9FLFFBQVEsQ0FBQ1YsSUFBVCxDQUFjQTtBQUZqQixHQUFELENBQVI7QUFJRCxDQVRNOzs7Ozs7Ozs7OzBCQUFNM0QsVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0piO0FBRUE7QUFFTyxNQUFNaUUsaUJBQWlCLEdBQUdELEtBQUssSUFBSTtBQUN4QyxRQUFNWSxVQUFVLEdBQUdDLDZEQUFXLENBQzVCO0FBQUU1RSxZQUFRLEVBQUVrQyxNQUFNLENBQUMyQyxJQUFQLENBQVlkLEtBQUssQ0FBQ2UsUUFBTixDQUFlOUUsUUFBM0I7QUFBWixHQUQ0QixFQUU1QitFLHNEQUY0QixFQUc1QmhCLEtBQUssQ0FBQ2UsUUFIc0IsQ0FBOUI7QUFNQSxTQUFPSCxVQUFVLENBQUMzRSxRQUFsQjtBQUNELENBUk07Ozs7Ozs7Ozs7MEJBQU1nRSxpQiIsImZpbGUiOiJqcy8yNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VNb2RhbCB9IGZyb20gJ3JlYWN0LWNvbnRleHQtbW9kYWxzJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHsgTmV1dHJhbEJ1dHRvbiwgUGFnZUhlYWRlciwgU21hbGxTdGF0cywgT3ZlcnZpZXdBbGVydHMgfSBmcm9tICdjb21wb25lbnRzJ1xuaW1wb3J0IGNvbG9ycyBmcm9tIFwiLi4vLi4vdXRpbHMvY29sb3JzXCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0MidcbmltcG9ydCB7IHNlbGVjdEFsbE92ZXJ2aWV3IH0gZnJvbSAnc3RvcmUvc2VsZWN0b3JzL292ZXJ2aWV3J1xuaW1wb3J0IHtcbiAgZ2V0T3ZlcnZpZXcgYXMgZ2V0T3ZlcnZpZXdBY3Rpb24sXG59IGZyb20gJ3N0b3JlL2FjdGlvbi1jcmVhdG9ycy9vdmVydmlldydcbmltcG9ydCB7IExpbmssIFJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IGN1cnJlbnRVc2VyU2VsZWN0b3IgfSBmcm9tICdzdG9yZS9zZWxlY3RvcnMvc2Vzc2lvbidcblxuY29uc3QgT3ZlcnZpZXdDb21wb25lbnQgPSAoeyBzbWFsbFN0YXRzLCBnZXRPdmVydmlldywgb3ZlcnZpZXcsIHVzZXJ9KSA9PiB7XG4gIGNvbnN0IHsgdXNlcl90eXBlLCB2ZWhpY2xlX2NvdW50IH0gPSB1c2VyXG4gIGNvbnN0IFtyZWxvY2F0ZSwgc2V0UmVsb2NhdGVdID0gUmVhY3QudXNlU3RhdGUoJycpXG5cbiAgY29uc3QgcG9wdWxhdGVPdmVydmlldyA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBnZXRPdmVydmlldygpXG4gIH1cblxuICBjb25zb2xlLmxvZyh1c2VyKVxuICBmdW5jdGlvbiBzaG93QWxlcnRzKCkge1xuICAgIGlmKHVzZXJfdHlwZSA9PSAnY3VzdG9tZXInICYmIHZlaGljbGVfY291bnQgPCAxKSB7XG4gICAgICBTd2FsLmZpcmUoe1xuICAgICAgICB0aXRsZTogJ0JlZm9yZSB3ZSBzdGFydCByZXF1ZXN0aW5nIGVzdGltYXRlcycsXG4gICAgICAgIHRleHQ6ICdXZSBuZWVkIHRvIG1ha2Ugb3VyIHZlaGljbGUgcHJvZmlsZSBmaXJzdCcsXG4gICAgICAgIGltYWdlVXJsOiAnaHR0cHM6Ly91bnNwbGFzaC5pdC80MDAvMjAwJyxcbiAgICAgICAgaW1hZ2VXaWR0aDogNDAwLFxuICAgICAgICBpbWFnZUhlaWdodDogMjAwLFxuICAgICAgICBpbWFnZUFsdDogJ0N1c3RvbSBpbWFnZScsXG4gICAgICAgIHNob3dDYW5jZWxCdXR0b246IGZhbHNlLFxuICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6ICcjMzA4NWQ2JyxcbiAgICAgICAgY2FuY2VsQnV0dG9uQ29sb3I6ICcjZDMzJyxcbiAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdDcmVhdGUgVmVoaWNsZSBQcm9maWxlJ1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICAgICAgICBzZXRSZWxvY2F0ZSgnL2FjY291bnQvdmVoaWNsZXMvY3JlYXRlJylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcG9wdWxhdGVPdmVydmlldygpXG4gICAgc2hvd0FsZXJ0cygpXG4gIH0sIFtdKVxuXG4gIGlmIChyZWxvY2F0ZSAhPSAnJykge1xuICAgIHJldHVybiA8UmVkaXJlY3QgZnJvbT0nL2FjY291bnQvb3ZlcnZpZXcnIHRvPXtyZWxvY2F0ZX0gLz5cbiAgfVxuXG4gIGNvbnN0IE1vZGFsRXhhbXBsZSA9IHByb3BzID0+IDxkaXYgY2xhc3NOYW1lPVwicC0xMlwiPntwcm9wcy5tZXNzYWdlfTwvZGl2PlxuXG4gIGNvbnN0IHsgc2hvd01vZGFsIH0gPSB1c2VNb2RhbCgpXG4gIGNvbnNvbGUubG9nKG92ZXJ2aWV3KVxuICBjb25zb2xlLmxvZyhvdmVydmlldy51c2VycylcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJiLXdoaXRlIHB4LTEwIHB5LTVcIj5cbiAgICAgIDxQYWdlSGVhZGVyIHRpdGxlPVwiRGFzaGJvYXJkXCIgc3ViVGl0bGU9XCJPdmVydmlld1wiIC8+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNoYXJ0c1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj48L2Rpdj5cbiAgICAgICAgICAgIHtvdmVydmlldyAmJiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIHtPYmplY3QudmFsdWVzKG92ZXJ2aWV3KS5tYXAoKHsgdXNlcnMsIGlkIH0pID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aWR9IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTQgZ2FwLTQgLW0tMiBtdC0yXCI+XG4gICAgICAgICAgICAgICAgICB7dXNlcnMubWFwKChzdGF0cywgaWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpZHh9IGNsYXNzTmFtZT1cIm1kOmNvbC1zcGFuLTIgeGw6Y29sLXNwYW4tMSByb3VuZGVkIHNoYWRvdyBiZy13aGl0ZSBtLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8U21hbGxTdGF0c1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2BzbWFsbC1zdGF0cy0ke2lkeH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcnREYXRhPXtPYmplY3QudmFsdWVzKHN0YXRzLmRhdGFzZXRzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJ0TGFiZWxzPXtzdGF0cy5jaGFydExhYmVsc31cbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtzdGF0cy5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0cy52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2U9e3N0YXRzLnBlcmNlbnRhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNyZWFzZT17c3RhdHMuaW5jcmVhc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNyZWFzZT17c3RhdHMuZGVjcmVhc2V9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIHtPYmplY3QudmFsdWVzKG92ZXJ2aWV3KS5tYXAoKHsgb3BlcmF0aW9uLCBpZCB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2lkfSBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy00IGdhcC00IC1tLTIgbXQtMlwiPlxuICAgICAgICAgICAgICAgICAge29wZXJhdGlvbi5tYXAoKHN0YXRzLCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2lkeH0gY2xhc3NOYW1lPVwibWQ6Y29sLXNwYW4tMiB4bDpjb2wtc3Bhbi0xIHJvdW5kZWQgc2hhZG93IGJnLXdoaXRlIG0tMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxTbWFsbFN0YXRzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17YHNtYWxsLXN0YXRzLSR7aWR4fWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFydERhdGE9e09iamVjdC52YWx1ZXMoc3RhdHMuZGF0YXNldHMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcnRMYWJlbHM9e3N0YXRzLmNoYXJ0TGFiZWxzfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3N0YXRzLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRzLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGVyY2VudGFnZT17c3RhdHMucGVyY2VudGFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGluY3JlYXNlPXtzdGF0cy5pbmNyZWFzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY3JlYXNlPXtzdGF0cy5kZWNyZWFzZX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5PdmVydmlld0NvbXBvbmVudC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBUaGUgc21hbGwgc3RhdHMgZGF0YS5cbiAgICovXG4gIHNtYWxsU3RhdHM6IFByb3BUeXBlcy5hcnJheVxufVxuXG5PdmVydmlld0NvbXBvbmVudC5kZWZhdWx0UHJvcHMgPSB7XG4gIHNtYWxsU3RhdHM6IFtcbiAgICB7XG4gICAgICBsYWJlbDogXCJBY3RpdmUgQ3VzdG9tZXJzXCIsXG4gICAgICB2YWx1ZTogXCIyLDM5MFwiLFxuICAgICAgcGVyY2VudGFnZTogXCIxMi40JVwiLFxuICAgICAgaW5jcmVhc2U6IHRydWUsXG4gICAgICBjaGFydExhYmVsczogW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGxdLFxuICAgICAgZGVjcmVhc2U6IGZhbHNlLFxuICAgICAgZGF0YXNldHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIlRvZGF5XCIsXG4gICAgICAgICAgZmlsbDogXCJzdGFydFwiLFxuICAgICAgICAgIGJvcmRlcldpZHRoOiAxLjUsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMucHJpbWFyeS50b1JHQkEoMC4xKSxcbiAgICAgICAgICBib3JkZXJDb2xvcjogY29sb3JzLnByaW1hcnkudG9SR0JBKCksXG4gICAgICAgICAgZGF0YTogWzksIDMsIDMsIDksIDldXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIkluYWN0aXZlIEN1c3RvbWVyc1wiLFxuICAgICAgdmFsdWU6IFwiOCwzOTFcIixcbiAgICAgIHBlcmNlbnRhZ2U6IFwiNy4yMSVcIixcbiAgICAgIGluY3JlYXNlOiBmYWxzZSxcbiAgICAgIGNoYXJ0TGFiZWxzOiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXG4gICAgICBkZWNyZWFzZTogdHJ1ZSxcbiAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJUb2RheVwiLFxuICAgICAgICAgIGZpbGw6IFwic3RhcnRcIixcbiAgICAgICAgICBib3JkZXJXaWR0aDogMS41LFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLnN1Y2Nlc3MudG9SR0JBKDAuMSksXG4gICAgICAgICAgYm9yZGVyQ29sb3I6IGNvbG9ycy5zdWNjZXNzLnRvUkdCQSgpLFxuICAgICAgICAgIGRhdGE6IFszLjksIDQsIDQsIDksIDRdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIlJlY3VycmluZyBDdXN0b21lcnNcIixcbiAgICAgIHZhbHVlOiBcIjIxLDI5M1wiLFxuICAgICAgcGVyY2VudGFnZTogXCIzLjcxJVwiLFxuICAgICAgaW5jcmVhc2U6IHRydWUsXG4gICAgICBjaGFydExhYmVsczogW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGxdLFxuICAgICAgZGVjcmVhc2U6IGZhbHNlLFxuICAgICAgZGF0YXNldHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIlRvZGF5XCIsXG4gICAgICAgICAgZmlsbDogXCJzdGFydFwiLFxuICAgICAgICAgIGJvcmRlcldpZHRoOiAxLjUsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMud2FybmluZy50b1JHQkEoMC4xKSxcbiAgICAgICAgICBib3JkZXJDb2xvcjogY29sb3JzLndhcm5pbmcudG9SR0JBKCksXG4gICAgICAgICAgZGF0YTogWzYsIDYsIDksIDMsIDNdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIk5ldyBDdXN0b21lcnNcIixcbiAgICAgIHZhbHVlOiBcIjYuNDNcIixcbiAgICAgIHBlcmNlbnRhZ2U6IFwiMi43MSVcIixcbiAgICAgIGluY3JlYXNlOiBmYWxzZSxcbiAgICAgIGNoYXJ0TGFiZWxzOiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXG4gICAgICBkZWNyZWFzZTogdHJ1ZSxcbiAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJUb2RheVwiLFxuICAgICAgICAgIGZpbGw6IFwic3RhcnRcIixcbiAgICAgICAgICBib3JkZXJXaWR0aDogMS41LFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLnNhbG1vbi50b1JHQkEoMC4xKSxcbiAgICAgICAgICBib3JkZXJDb2xvcjogY29sb3JzLnNhbG1vbi50b1JHQkEoKSxcbiAgICAgICAgICBkYXRhOiBbMCwgOSwgMywgMywgM11cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiAoe1xuICAgIG92ZXJ2aWV3OiBzZWxlY3RBbGxPdmVydmlldyhzdGF0ZSksXG4gICAgdXNlcjogY3VycmVudFVzZXJTZWxlY3RvcihzdGF0ZSlcbiAgfSksXG4gIGRpc3BhdGNoID0+ICh7XG4gICAgZ2V0T3ZlcnZpZXc6ICgpID0+IGRpc3BhdGNoKGdldE92ZXJ2aWV3QWN0aW9uKCkpLFxuICB9KVxuKShPdmVydmlld0NvbXBvbmVudCkiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyBvdmVydmlld0FjdGlvbnMgYXMgYWN0aW9ucyB9IGZyb20gJ3N0b3JlL2FjdGlvbnMnXG5pbXBvcnQgeyBtYWtlUmVxdWVzdCB9IGZyb20gJ3N0b3JlL2FjdGlvbi1jcmVhdG9ycy9yZXF1ZXN0cydcblxuZXhwb3J0IGNvbnN0IGdldE92ZXJ2aWV3ID0gKCkgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRpc3BhdGNoKFxuICAgIG1ha2VSZXF1ZXN0KCdnZXQtb3ZlcnZpZXcnLCAoKSA9PiBheGlvcy5nZXQoYC9hcGkvb3ZlcnZpZXdgKSlcbiAgKVxuXG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBhY3Rpb25zLkFERF9PVkVSVklFVyxcbiAgICBvdmVydmlldzogcmVzcG9uc2UuZGF0YS5kYXRhXG4gIH0pXG59IiwiaW1wb3J0IHsgZGVub3JtYWxpemUgfSBmcm9tICdub3JtYWxpenInXG5cbmltcG9ydCB7IGVudGl0aWVzIGFzIGVudGl0aWVzU2NoZW1hIH0gZnJvbSAnc3RvcmUvc2NoZW1hcydcblxuZXhwb3J0IGNvbnN0IHNlbGVjdEFsbE92ZXJ2aWV3ID0gc3RhdGUgPT4ge1xuICBjb25zdCBkbkVudGl0aWVzID0gZGVub3JtYWxpemUoXG4gICAgeyBvdmVydmlldzogT2JqZWN0LmtleXMoc3RhdGUuZW50aXRpZXMub3ZlcnZpZXcpIH0sXG4gICAgZW50aXRpZXNTY2hlbWEsXG4gICAgc3RhdGUuZW50aXRpZXNcbiAgKVxuXG4gIHJldHVybiBkbkVudGl0aWVzLm92ZXJ2aWV3XG59XG4iXSwic291cmNlUm9vdCI6IiJ9