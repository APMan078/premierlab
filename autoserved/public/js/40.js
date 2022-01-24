(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "./resources/assets/js/pages/PreventiveServices/Preventives.jsx":
/*!**********************************************************************!*\
  !*** ./resources/assets/js/pages/PreventiveServices/Preventives.jsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components */ "./resources/assets/js/components/index.js");
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-number-format */ "./node_modules/react-number-format/dist/react-number-format.es.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var store_selectors_shop_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! store/selectors/shop_services */ "./resources/assets/js/store/selectors/shop_services.js");
/* harmony import */ var store_selectors_session__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! store/selectors/session */ "./resources/assets/js/store/selectors/session/index.js");
/* harmony import */ var store_action_creators_shop_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! store/action-creators/shop_services */ "./resources/assets/js/store/action-creators/shop_services/index.js");
/* harmony import */ var store_selectors_pms_lists__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! store/selectors/pms_lists */ "./resources/assets/js/store/selectors/pms_lists.js");
/* harmony import */ var store_action_creators_pms_lists__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! store/action-creators/pms_lists */ "./resources/assets/js/store/action-creators/pms_lists/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};













const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

const Alert = (type, title) => Toast.fire({
  type: type,
  title: title
});

function PreventivesComponent({
  getPms_lists,
  deletePms_list,
  pms_lists,
  user,
  shop_services,
  getShop_services
}) {
  const {
    user_type
  } = user;

  if (user_type != 'admin' && user_type != 'vendor') {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Redirect"], {
      from: "/account",
      to: "/account/overview"
    });
  }

  const populateShop_services = async () => {
    await getShop_services();
  };

  const populatePms_lists = async () => {
    await getPms_lists();
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    populateShop_services();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    populatePms_lists();
  }, []);
  console.log(shop_services);

  function isActive(query) {
    console.log(query);
    let data = shop_services.filter(pms => pms.meta == query);
    console.log(data);

    if (data.length != 0) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        className: "p-1 rounded px-3 text-xs text-white bg-green-500 font-normal"
      }, "Completed");
    } else {
      return '';
    }
  }

  function manageCreate(query, id) {
    let data = shop_services.filter(pms => pms.meta == query);

    if (data.length != 0) {
      return "/account/preventive-services/update/".concat(data.map(item => item.id), "/").concat(id);
    } else {
      return "/account/preventive-services/create/".concat(id);
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "bb-white px-10 py-5"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_4__["PageHeader"], {
    title: "Preventive Services",
    subTitle: "Services"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "w-full"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_4__["CollapsibleCard"], {
    title: "PMS Mileage"
  }, pms_lists.map((pms, idx) => {
    const id = pms.id;
    const mileage = pms.mileage;
    const change_items = pms.change_items;
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      key: idx,
      className: "flex mb-5"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "w-2/3"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "text-blue-500 text-md font-bold mr-5"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_number_format__WEBPACK_IMPORTED_MODULE_5__["default"], {
      value: mileage,
      displayType: 'text',
      thousandSeparator: true,
      suffix: ' km',
      renderText: value => react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, value)
    })), isActive(mileage), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "text-xs text-gray-700 pt-2"
    }, change_items))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "w-1/3"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Link"], {
      to: manageCreate(mileage, id)
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "w-full rounded py-2 bg-blue-500 text-white text-center"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
      className: "material-icons"
    }, "edit"), " Manage Service"))));
  })))));
}

__signature__(PreventivesComponent, "useEffect{}\nuseEffect{}");

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(state => ({
  shop_services: Object(store_selectors_shop_services__WEBPACK_IMPORTED_MODULE_7__["selectAllShop_services"])(state),
  pms_lists: Object(store_selectors_pms_lists__WEBPACK_IMPORTED_MODULE_10__["selectAllPms_lists"])(state),
  user: Object(store_selectors_session__WEBPACK_IMPORTED_MODULE_8__["currentUserSelector"])(state)
}), dispatch => ({
  getShop_services: () => dispatch(Object(store_action_creators_shop_services__WEBPACK_IMPORTED_MODULE_9__["getShop_services"])()),
  getPms_lists: () => dispatch(Object(store_action_creators_pms_lists__WEBPACK_IMPORTED_MODULE_11__["getPms_lists"])()),
  deletePms_list: id => {
    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.value) {
        dispatch(Object(store_action_creators_pms_lists__WEBPACK_IMPORTED_MODULE_11__["deletePms_list"])(id));
        Alert('success', 'User successfully deleted!');
      }
    });
  }
}))(PreventivesComponent);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Toast, "Toast", "/Users/rovillesarate/AS_Platform-V2/resources/assets/js/pages/PreventiveServices/Preventives.jsx");
  reactHotLoader.register(Alert, "Alert", "/Users/rovillesarate/AS_Platform-V2/resources/assets/js/pages/PreventiveServices/Preventives.jsx");
  reactHotLoader.register(PreventivesComponent, "PreventivesComponent", "/Users/rovillesarate/AS_Platform-V2/resources/assets/js/pages/PreventiveServices/Preventives.jsx");
  reactHotLoader.register(_default, "default", "/Users/rovillesarate/AS_Platform-V2/resources/assets/js/pages/PreventiveServices/Preventives.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL1ByZXZlbnRpdmVTZXJ2aWNlcy9QcmV2ZW50aXZlcy5qc3giXSwibmFtZXMiOlsiVG9hc3QiLCJTd2FsIiwibWl4aW4iLCJ0b2FzdCIsInBvc2l0aW9uIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsIkFsZXJ0IiwidHlwZSIsInRpdGxlIiwiZmlyZSIsIlByZXZlbnRpdmVzQ29tcG9uZW50IiwiZ2V0UG1zX2xpc3RzIiwiZGVsZXRlUG1zX2xpc3QiLCJwbXNfbGlzdHMiLCJ1c2VyIiwic2hvcF9zZXJ2aWNlcyIsImdldFNob3Bfc2VydmljZXMiLCJ1c2VyX3R5cGUiLCJwb3B1bGF0ZVNob3Bfc2VydmljZXMiLCJwb3B1bGF0ZVBtc19saXN0cyIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJpc0FjdGl2ZSIsInF1ZXJ5IiwiZGF0YSIsImZpbHRlciIsInBtcyIsIm1ldGEiLCJsZW5ndGgiLCJtYW5hZ2VDcmVhdGUiLCJpZCIsIm1hcCIsIml0ZW0iLCJpZHgiLCJtaWxlYWdlIiwiY2hhbmdlX2l0ZW1zIiwidmFsdWUiLCJjb25uZWN0Iiwic3RhdGUiLCJzZWxlY3RBbGxTaG9wX3NlcnZpY2VzIiwic2VsZWN0QWxsUG1zX2xpc3RzIiwiY3VycmVudFVzZXJTZWxlY3RvciIsImRpc3BhdGNoIiwiZ2V0U2hvcF9zZXJ2aWNlc0FjdGlvbiIsImdldFBtc19saXN0c0FjdGlvbiIsInRleHQiLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvbkNvbG9yIiwiY2FuY2VsQnV0dG9uQ29sb3IiLCJjb25maXJtQnV0dG9uVGV4dCIsInRoZW4iLCJyZXN1bHQiLCJkZWxldGVQbXNfbGlzdEFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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akI7QUFHWGpDLGdCQUFjLEVBQUVtQixFQUFFLElBQUk7QUFDcEIvQixzREFBSSxDQUFDUyxJQUFMLENBQVU7QUFDUkQsV0FBSyxFQUFFLGVBREM7QUFFUnNDLFVBQUksRUFBRSxtQ0FGRTtBQUdSQyxzQkFBZ0IsRUFBRSxJQUhWO0FBSVJDLHdCQUFrQixFQUFFLFNBSlo7QUFLUkMsdUJBQWlCLEVBQUUsTUFMWDtBQU1SQyx1QkFBaUIsRUFBRTtBQU5YLEtBQVYsRUFPR0MsSUFQSCxDQU9TQyxNQUFELElBQVk7QUFDbEIsVUFBSUEsTUFBTSxDQUFDZixLQUFYLEVBQWtCO0FBQ2hCTSxnQkFBUSxDQUFDVSx1RkFBb0IsQ0FBQ3RCLEVBQUQsQ0FBckIsQ0FBUjtBQUNBekIsYUFBSyxDQUFDLFNBQUQsRUFBWSw0QkFBWixDQUFMO0FBQ0Q7QUFDRixLQVpEO0FBYUQ7QUFqQlUsQ0FBTCxDQU5VLENBQVAsQ0F5QmJJLG9CQXpCYSxDOztBQUFBOzs7Ozs7Ozs7OzBCQW5HWFgsSzswQkFPQU8sSzswQkFLR0ksb0IiLCJmaWxlIjoianMvNDAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFBhZ2VIZWFkZXIsIENvbGxhcHNpYmxlQ2FyZCB9IGZyb20gJ2NvbXBvbmVudHMnXG5pbXBvcnQgTnVtYmVyRm9ybWF0IGZyb20gJ3JlYWN0LW51bWJlci1mb3JtYXQnXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0MidcbmltcG9ydCB7IHNlbGVjdEFsbFNob3Bfc2VydmljZXMgfSBmcm9tICdzdG9yZS9zZWxlY3RvcnMvc2hvcF9zZXJ2aWNlcydcbmltcG9ydCB7IGN1cnJlbnRVc2VyU2VsZWN0b3IgfSBmcm9tICdzdG9yZS9zZWxlY3RvcnMvc2Vzc2lvbidcbmltcG9ydCB7XG4gICAgZ2V0QWN0aXZlU2VydmljZSBhcyBnZXRBY3RpdmVTZXJ2aWNlQWN0aW9uLFxuICAgIGdldFNob3Bfc2VydmljZXMgYXMgZ2V0U2hvcF9zZXJ2aWNlc0FjdGlvbixcbiAgICB1cGRhdGVTaG9wX3NlcnZpY2UgYXMgdXBkYXRlU2hvcF9zZXJ2aWNlQWN0aW9uLFxuICAgIGNyZWF0ZVNob3Bfc2VydmljZSBhcyBjcmVhdGVTaG9wX3NlcnZpY2VBY3Rpb24sXG4gICAgZGVsZXRlU2hvcF9zZXJ2aWNlIGFzIGRlbGV0ZVNob3Bfc2VydmljZUFjdGlvbixcbn0gZnJvbSAnc3RvcmUvYWN0aW9uLWNyZWF0b3JzL3Nob3Bfc2VydmljZXMnXG5pbXBvcnQgeyBzZWxlY3RBbGxQbXNfbGlzdHMgfSBmcm9tICdzdG9yZS9zZWxlY3RvcnMvcG1zX2xpc3RzJ1xuaW1wb3J0IHtcbiAgICBnZXRQbXNfbGlzdHMgYXMgZ2V0UG1zX2xpc3RzQWN0aW9uLFxuICAgIHVwZGF0ZVBtc19saXN0IGFzIHVwZGF0ZVBtc19saXN0QWN0aW9uLFxuICAgIGNyZWF0ZVBtc19saXN0IGFzIGNyZWF0ZVBtc19saXN0QWN0aW9uLFxuICAgIGRlbGV0ZVBtc19saXN0IGFzIGRlbGV0ZVBtc19saXN0QWN0aW9uLFxuICB9IGZyb20gJ3N0b3JlL2FjdGlvbi1jcmVhdG9ycy9wbXNfbGlzdHMnXG5pbXBvcnQgeyBMaW5rLCBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XG50b2FzdDogdHJ1ZSxcbnBvc2l0aW9uOiAndG9wLWVuZCcsXG5zaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXG50aW1lcjogMzAwMFxufSlcblxuY29uc3QgQWxlcnQgPSAodHlwZSwgdGl0bGUpID0+IFRvYXN0LmZpcmUoe1xudHlwZTogdHlwZSxcbnRpdGxlOiB0aXRsZVxufSlcblxuZnVuY3Rpb24gUHJldmVudGl2ZXNDb21wb25lbnQoeyBnZXRQbXNfbGlzdHMsIGRlbGV0ZVBtc19saXN0LCBwbXNfbGlzdHMsIHVzZXIsIHNob3Bfc2VydmljZXMsIGdldFNob3Bfc2VydmljZXMgfSkge1xuICAgIGNvbnN0IHsgdXNlcl90eXBlIH0gPSB1c2VyXG5cbiAgICBpZiAodXNlcl90eXBlICE9ICdhZG1pbicgJiYgdXNlcl90eXBlICE9ICd2ZW5kb3InKSB7XG4gICAgICByZXR1cm4gPFJlZGlyZWN0IGZyb209Jy9hY2NvdW50JyB0bz1cIi9hY2NvdW50L292ZXJ2aWV3XCIgLz5cbiAgICB9XG5cbiAgICBjb25zdCBwb3B1bGF0ZVNob3Bfc2VydmljZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IGdldFNob3Bfc2VydmljZXMoKVxuICAgIH1cblxuICAgIGNvbnN0IHBvcHVsYXRlUG1zX2xpc3RzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCBnZXRQbXNfbGlzdHMoKVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHBvcHVsYXRlU2hvcF9zZXJ2aWNlcygpXG4gICAgfSwgW10pXG5cbiAgICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBwb3B1bGF0ZVBtc19saXN0cygpXG4gICAgfSwgW10pXG5cblxuXG4gICAgY29uc29sZS5sb2coc2hvcF9zZXJ2aWNlcylcblxuICAgIGZ1bmN0aW9uIGlzQWN0aXZlKHF1ZXJ5KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHF1ZXJ5KVxuICAgICAgICBsZXQgZGF0YSA9IHNob3Bfc2VydmljZXMuZmlsdGVyKCBwbXMgPT4gcG1zLm1ldGEgPT0gcXVlcnkpXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgIGlmIChkYXRhLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwicC0xIHJvdW5kZWQgcHgtMyB0ZXh0LXhzIHRleHQtd2hpdGUgYmctZ3JlZW4tNTAwIGZvbnQtbm9ybWFsXCI+Q29tcGxldGVkPC9zcGFuPlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gbWFuYWdlQ3JlYXRlKHF1ZXJ5LCBpZCkge1xuICAgIGxldCBkYXRhID0gc2hvcF9zZXJ2aWNlcy5maWx0ZXIoIHBtcyA9PiBwbXMubWV0YSA9PSBxdWVyeSlcblxuICAgIGlmKGRhdGEubGVuZ3RoICE9IDApIHtcbiAgICAgICAgcmV0dXJuIGAvYWNjb3VudC9wcmV2ZW50aXZlLXNlcnZpY2VzL3VwZGF0ZS8ke2RhdGEubWFwKCBpdGVtID0+IGl0ZW0uaWQpfS8ke2lkfWBcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC9hY2NvdW50L3ByZXZlbnRpdmUtc2VydmljZXMvY3JlYXRlLyR7aWR9YFxuICAgIH1cbiAgICB9XG4gICAgcmV0dXJuKFxuICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmItd2hpdGUgcHgtMTAgcHktNVwiPlxuICAgICAgICAgIDxQYWdlSGVhZGVyIHRpdGxlPVwiUHJldmVudGl2ZSBTZXJ2aWNlc1wiIHN1YlRpdGxlPVwiU2VydmljZXNcIiA+PC9QYWdlSGVhZGVyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgICA8Q29sbGFwc2libGVDYXJkIHRpdGxlPVwiUE1TIE1pbGVhZ2VcIj5cbiAgICAgICAgICAgICAgICB7cG1zX2xpc3RzLm1hcCgocG1zLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaWQgPSBwbXMuaWRcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWlsZWFnZSA9IHBtcy5taWxlYWdlXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoYW5nZV9pdGVtcyA9IHBtcy5jaGFuZ2VfaXRlbXNcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpZHh9IGNsYXNzTmFtZT1cImZsZXggbWItNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yLzNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDAgdGV4dC1tZCBmb250LWJvbGQgbXItNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1iZXJGb3JtYXQgdmFsdWU9e21pbGVhZ2V9IGRpc3BsYXlUeXBlPXsndGV4dCd9IHRob3VzYW5kU2VwYXJhdG9yPXt0cnVlfSBzdWZmaXg9eycga20nfSByZW5kZXJUZXh0PXt2YWx1ZSA9PiA8Pnt2YWx1ZX08Lz59IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNBY3RpdmUobWlsZWFnZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTcwMCBwdC0yXCI+e2NoYW5nZV9pdGVtc308L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e21hbmFnZUNyZWF0ZShtaWxlYWdlLCBpZCl9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQgcHktMiBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5lZGl0PC9pPiBNYW5hZ2UgU2VydmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L0NvbGxhcHNpYmxlQ2FyZD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgIClcbn1cblxuICBleHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAgIHN0YXRlID0+ICh7XG4gICAgICAgIHNob3Bfc2VydmljZXM6IHNlbGVjdEFsbFNob3Bfc2VydmljZXMoc3RhdGUpLFxuICAgICAgICBwbXNfbGlzdHM6IHNlbGVjdEFsbFBtc19saXN0cyhzdGF0ZSksXG4gICAgICAgIHVzZXI6IGN1cnJlbnRVc2VyU2VsZWN0b3Ioc3RhdGUpXG4gICAgICB9KSxcbiAgICAgIGRpc3BhdGNoID0+ICh7XG4gICAgICAgIGdldFNob3Bfc2VydmljZXM6ICgpID0+IGRpc3BhdGNoKGdldFNob3Bfc2VydmljZXNBY3Rpb24oKSksXG4gICAgICAgIGdldFBtc19saXN0czogKCkgPT4gZGlzcGF0Y2goZ2V0UG1zX2xpc3RzQWN0aW9uKCkpLFxuICAgICAgICBkZWxldGVQbXNfbGlzdDogaWQgPT4ge1xuICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICB0aXRsZTogJ0FyZSB5b3Ugc3VyZT8nLFxuICAgICAgICAgICAgdGV4dDogXCJZb3Ugd29uJ3QgYmUgYWJsZSB0byByZXZlcnQgdGhpcyFcIixcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6ICcjMzA4NWQ2JyxcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiAnI2QzMycsXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ1llcywgZGVsZXRlIGl0ISdcbiAgICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICAgICAgICAgICAgZGlzcGF0Y2goZGVsZXRlUG1zX2xpc3RBY3Rpb24oaWQpKVxuICAgICAgICAgICAgICBBbGVydCgnc3VjY2VzcycsICdVc2VyIHN1Y2Nlc3NmdWxseSBkZWxldGVkIScpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgKShQcmV2ZW50aXZlc0NvbXBvbmVudCkiXSwic291cmNlUm9vdCI6IiJ9