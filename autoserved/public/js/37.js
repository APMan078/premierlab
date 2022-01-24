(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "./resources/assets/img/default-shop-avatar.png":
/*!******************************************************!*\
  !*** ./resources/assets/img/default-shop-avatar.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/default-shop-avatar.png";

/***/ }),

/***/ "./resources/assets/js/pages/Profile/Profile.jsx":
/*!*******************************************************!*\
  !*** ./resources/assets/js/pages/Profile/Profile.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_context_modals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-context-modals */ "./node_modules/react-context-modals/dist/main.js");
/* harmony import */ var react_context_modals__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_context_modals__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var store_selectors_session__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store/selectors/session */ "./resources/assets/js/store/selectors/session/index.js");
/* harmony import */ var default_avatar_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! default-avatar.png */ "./resources/assets/img/default-avatar.png");
/* harmony import */ var default_avatar_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(default_avatar_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var default_shop_avatar_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! default-shop-avatar.png */ "./resources/assets/img/default-shop-avatar.png");
/* harmony import */ var default_shop_avatar_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(default_shop_avatar_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};









const ProfileComponent = ({
  user
}) => {
  console.log(user);
  const {
    first_name: firstName,
    last_name: lastName,
    avatar,
    impersonated,
    email,
    country,
    mobile,
    credit
  } = user;
  const fullName = lastName !== undefined ? [firstName, lastName].join(' ') : firstName;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-wrap"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full md:w-1/3 lg:w-1/3 p-2 pt-5 pr-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pt-5 bg-white rounded shadow-lg mb-5 pb-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
    className: "w-10 float-right pr-5 text-gray-600 hover:text-gray-700",
    to: "/account/settings"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "material-icons"
  }, "edit")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "clearfix ml-10"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "p-5 rounded-full w-48 object-fill mx-auto",
    src: avatar || default_avatar_png__WEBPACK_IMPORTED_MODULE_4___default.a
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mx-auto text-gray-700 text-xl p-5 pb-10 text-center border-b-2 border-gray-300 mb-5"
  }, fullName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "p-5 pl-10 text-gray-600"
  }, "Email", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-gray-700"
  }, email)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "p-5 pl-10 text-gray-600"
  }, "Country", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-gray-700"
  }, country || '-')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "p-5 pl-10 text-gray-600"
  }, "Mobile Number", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-gray-700"
  }, mobile || '-'))), user.user_type != 'admin' || user.user_type != 'vendor' || user.user_type != 'fleet admin' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-white rounded shadow-lg mb-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mx-auto text-gray-700 text-md p-5 border-b-2 border-gray-300"
  }, "Managed Shops"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "p-5 clearfix border-b border-gray-200"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "w-12 object-fill float-left mr-5",
    src: avatar || default_shop_avatar_png__WEBPACK_IMPORTED_MODULE_5___default.a
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "float-left"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
    to: "#",
    className: "text-md text-blue-500 text-gray-500"
  }, "Shop Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-sm"
  }, "Service Center"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "p-5 clearfix border-b border-gray-200"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "w-12 object-fill float-left mr-5",
    src: avatar || default_shop_avatar_png__WEBPACK_IMPORTED_MODULE_5___default.a
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "float-left"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
    to: "#",
    className: "text-md text-blue-500 text-gray-500"
  }, "Shop Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-sm"
  }, "Service Center"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "p-5 clearfix border-b border-gray-200"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "w-12 object-fill float-left mr-5",
    src: avatar || default_shop_avatar_png__WEBPACK_IMPORTED_MODULE_5___default.a
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "float-left"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
    to: "#",
    className: "text-md text-blue-500 text-gray-500"
  }, "Shop Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-sm"
  }, "Service Center"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full md:w-2/3 lg:w-2/3 p-2 pt-5"
  }, user.user_type != 'admin' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "p-10 bg-white rounded shadow-lg mb-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-1 text-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "font-bold text-4xl text-green-500"
  }, "PHP ", credit), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uppercase text-md text-gray-500"
  }, "Wallet Value")), user.user_type == 'vendor' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-1 text-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "font-bold text-4xl text-blue-500"
  }, "3"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uppercase text-md text-gray-500"
  }, "Shop Owned")), user.user_type == 'customer' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-1 text-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "font-bold text-4xl text-blue-500"
  }, "3"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uppercase text-md text-gray-500"
  }, "Cars Owned")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-white rounded shadow-lg mb-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mx-auto text-gray-700 text-md p-5 border-b-2 border-gray-300"
  }, "Recent Activities"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user-activity ml-10 border-b border-l-2 border-gray-300 h-20 pt-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "material-icons float-left -m-3 mt-3 mr-5 text-gray-600 bg-white"
  }, "account_circle"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "activity-details float-left"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-xs text-gray-500"
  }, "2 months ago"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-xs rounded-full bg-yellow-500 p-1 ml-4"
  }, "Updated"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-sm"
  }, "User has been updated"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user-activity ml-10 border-b border-l-2 border-gray-300 h-20 pt-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "material-icons float-left -m-3 mt-3 mr-5 text-gray-600 bg-white"
  }, "attach_file"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "activity-details float-left"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-xs text-gray-500"
  }, "2 months ago"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-xs rounded-full bg-green-500 p-1 ml-4"
  }, "Created"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-sm"
  }, "A file has been created"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user-activity ml-10 border-b border-l-2 border-gray-300 h-20 pt-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "material-icons float-left -m-3 mt-3 mr-5 text-gray-600 bg-white"
  }, "attach_file"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "activity-details float-left"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-xs text-gray-500"
  }, "2 months ago"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-xs rounded-full bg-green-500 p-1 ml-4"
  }, "Created"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-sm"
  }, "A file has been created")))))));
};

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(state => ({
  user: Object(store_selectors_session__WEBPACK_IMPORTED_MODULE_3__["currentUserSelector"])(state)
}), dispatch => ({}))(ProfileComponent);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ProfileComponent, "ProfileComponent", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Profile/Profile.jsx");
  reactHotLoader.register(_default, "default", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Profile/Profile.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2ltZy9kZWZhdWx0LXNob3AtYXZhdGFyLnBuZyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL1Byb2ZpbGUvUHJvZmlsZS5qc3giXSwibmFtZXMiOlsiUHJvZmlsZUNvbXBvbmVudCIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwiZmlyc3RfbmFtZSIsImZpcnN0TmFtZSIsImxhc3RfbmFtZSIsImxhc3ROYW1lIiwiYXZhdGFyIiwiaW1wZXJzb25hdGVkIiwiZW1haWwiLCJjb3VudHJ5IiwibW9iaWxlIiwiY3JlZGl0IiwiZnVsbE5hbWUiLCJ1bmRlZmluZWQiLCJqb2luIiwiZGVmYXVsdFByb2ZpbGVJbWFnZSIsInVzZXJfdHlwZSIsImRlZmF1bHRTaG9wQXZhdGFyIiwiY29ubmVjdCIsInN0YXRlIiwiY3VycmVudFVzZXJTZWxlY3RvciIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxpQkFBaUIscUJBQXVCLGlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsZ0JBQWdCLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBYztBQUNuQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFDQSxRQUFNO0FBQUVHLGNBQVUsRUFBRUMsU0FBZDtBQUF5QkMsYUFBUyxFQUFFQyxRQUFwQztBQUE4Q0MsVUFBOUM7QUFBc0RDLGdCQUF0RDtBQUFvRUMsU0FBcEU7QUFBMkVDLFdBQTNFO0FBQW9GQyxVQUFwRjtBQUE0RkM7QUFBNUYsTUFBdUdaLElBQTdHO0FBQ0EsUUFBTWEsUUFBUSxHQUNkUCxRQUFRLEtBQUtRLFNBQWIsR0FBeUIsQ0FBQ1YsU0FBRCxFQUFZRSxRQUFaLEVBQXNCUyxJQUF0QixDQUEyQixHQUEzQixDQUF6QixHQUEyRFgsU0FEM0Q7QUFHQSxT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Ozs7Ozs7OzBCQXBJVEEsZ0IiLCJmaWxlIjoianMvMzcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvZGVmYXVsdC1zaG9wLWF2YXRhci5wbmdcIjsiLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlTW9kYWwgfSBmcm9tICdyZWFjdC1jb250ZXh0LW1vZGFscydcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGN1cnJlbnRVc2VyU2VsZWN0b3IgfSBmcm9tICdzdG9yZS9zZWxlY3RvcnMvc2Vzc2lvbidcbmltcG9ydCBkZWZhdWx0UHJvZmlsZUltYWdlIGZyb20gJ2RlZmF1bHQtYXZhdGFyLnBuZydcbmltcG9ydCBkZWZhdWx0U2hvcEF2YXRhciBmcm9tICdkZWZhdWx0LXNob3AtYXZhdGFyLnBuZydcbmltcG9ydCB7IExpbmssIFJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuY29uc3QgUHJvZmlsZUNvbXBvbmVudCA9ICh7IHVzZXIgfSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHVzZXIpXG4gICAgY29uc3QgeyBmaXJzdF9uYW1lOiBmaXJzdE5hbWUsIGxhc3RfbmFtZTogbGFzdE5hbWUsIGF2YXRhciwgaW1wZXJzb25hdGVkLCBlbWFpbCwgY291bnRyeSwgbW9iaWxlLCBjcmVkaXQgfSA9IHVzZXJcbiAgICBjb25zdCBmdWxsTmFtZSA9XG4gICAgbGFzdE5hbWUgIT09IHVuZGVmaW5lZCA/IFtmaXJzdE5hbWUsIGxhc3ROYW1lXS5qb2luKCcgJykgOiBmaXJzdE5hbWVcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctMS8zIGxnOnctMS8zIHAtMiBwdC01IHByLTNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTUgYmctd2hpdGUgcm91bmRlZCBzaGFkb3ctbGcgbWItNSBwYi01XCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cInctMTAgZmxvYXQtcmlnaHQgcHItNSB0ZXh0LWdyYXktNjAwIGhvdmVyOnRleHQtZ3JheS03MDBcIiB0bz1cIi9hY2NvdW50L3NldHRpbmdzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmVkaXQ8L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeCBtbC0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtNSByb3VuZGVkLWZ1bGwgdy00OCBvYmplY3QtZmlsbCBteC1hdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2F2YXRhciB8fCBkZWZhdWx0UHJvZmlsZUltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byB0ZXh0LWdyYXktNzAwIHRleHQteGwgcC01IHBiLTEwIHRleHQtY2VudGVyIGJvcmRlci1iLTIgYm9yZGVyLWdyYXktMzAwIG1iLTVcIj57ZnVsbE5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01IHBsLTEwIHRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEVtYWlsXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDBcIj57ZW1haWx9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNSBwbC0xMCB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBDb3VudHJ5XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDBcIj57Y291bnRyeSB8fCAnLSd9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNSBwbC0xMCB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBNb2JpbGUgTnVtYmVyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDBcIj57bW9iaWxlIHx8ICctJ308L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge3VzZXIudXNlcl90eXBlICE9ICdhZG1pbicgfHwgdXNlci51c2VyX3R5cGUgIT0gJ3ZlbmRvcicgfHwgdXNlci51c2VyX3R5cGUgIT0gJ2ZsZWV0IGFkbWluJyAmJlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQgc2hhZG93LWxnIG1iLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byB0ZXh0LWdyYXktNzAwIHRleHQtbWQgcC01IGJvcmRlci1iLTIgYm9yZGVyLWdyYXktMzAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFuYWdlZCBTaG9wc1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNSBjbGVhcmZpeCBib3JkZXItYiBib3JkZXItZ3JheS0yMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTIgb2JqZWN0LWZpbGwgZmxvYXQtbGVmdCBtci01XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXthdmF0YXIgfHwgZGVmYXVsdFNob3BBdmF0YXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIjXCIgY2xhc3NOYW1lPVwidGV4dC1tZCB0ZXh0LWJsdWUtNTAwIHRleHQtZ3JheS01MDBcIj5TaG9wIE5hbWU8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc21cIj5TZXJ2aWNlIENlbnRlcjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTUgY2xlYXJmaXggYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEyIG9iamVjdC1maWxsIGZsb2F0LWxlZnQgbXItNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YXZhdGFyIHx8IGRlZmF1bHRTaG9wQXZhdGFyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiI1wiIGNsYXNzTmFtZT1cInRleHQtbWQgdGV4dC1ibHVlLTUwMCB0ZXh0LWdyYXktNTAwXCI+U2hvcCBOYW1lPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+U2VydmljZSBDZW50ZXI8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01IGNsZWFyZml4IGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMiBvYmplY3QtZmlsbCBmbG9hdC1sZWZ0IG1yLTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2F2YXRhciB8fCBkZWZhdWx0U2hvcEF2YXRhcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIiNcIiBjbGFzc05hbWU9XCJ0ZXh0LW1kIHRleHQtYmx1ZS01MDAgdGV4dC1ncmF5LTUwMFwiPlNob3AgTmFtZTwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbVwiPlNlcnZpY2UgQ2VudGVyPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy0yLzMgbGc6dy0yLzMgcC0yIHB0LTVcIj5cbiAgICAgICAgICAgICAgICB7dXNlci51c2VyX3R5cGUgIT0gJ2FkbWluJyAmJlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMTAgYmctd2hpdGUgcm91bmRlZCBzaGFkb3ctbGcgbWItNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtNHhsIHRleHQtZ3JlZW4tNTAwXCI+UEhQIHtjcmVkaXR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdGV4dC1tZCB0ZXh0LWdyYXktNTAwXCI+V2FsbGV0IFZhbHVlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyLnVzZXJfdHlwZSA9PSAndmVuZG9yJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtNHhsIHRleHQtYmx1ZS01MDBcIj4zPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQtbWQgdGV4dC1ncmF5LTUwMFwiPlNob3AgT3duZWQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlci51c2VyX3R5cGUgPT0gJ2N1c3RvbWVyJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtNHhsIHRleHQtYmx1ZS01MDBcIj4zPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQtbWQgdGV4dC1ncmF5LTUwMFwiPkNhcnMgT3duZWQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkIHNoYWRvdy1sZyBtYi01XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byB0ZXh0LWdyYXktNzAwIHRleHQtbWQgcC01IGJvcmRlci1iLTIgYm9yZGVyLWdyYXktMzAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBSZWNlbnQgQWN0aXZpdGllc1xuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWFjdGl2aXR5IG1sLTEwIGJvcmRlci1iIGJvcmRlci1sLTIgYm9yZGVyLWdyYXktMzAwIGgtMjAgcHQtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgZmxvYXQtbGVmdCAtbS0zIG10LTMgbXItNSB0ZXh0LWdyYXktNjAwIGJnLXdoaXRlXCI+YWNjb3VudF9jaXJjbGU8L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGl2aXR5LWRldGFpbHMgZmxvYXQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMFwiPjIgbW9udGhzIGFnbzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHJvdW5kZWQtZnVsbCBiZy15ZWxsb3ctNTAwIHAtMSBtbC00XCI+VXBkYXRlZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+VXNlciBoYXMgYmVlbiB1cGRhdGVkPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItYWN0aXZpdHkgbWwtMTAgYm9yZGVyLWIgYm9yZGVyLWwtMiBib3JkZXItZ3JheS0zMDAgaC0yMCBwdC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBmbG9hdC1sZWZ0IC1tLTMgbXQtMyBtci01IHRleHQtZ3JheS02MDAgYmctd2hpdGVcIj5hdHRhY2hfZmlsZTwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aXZpdHktZGV0YWlscyBmbG9hdC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwXCI+MiBtb250aHMgYWdvPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgcm91bmRlZC1mdWxsIGJnLWdyZWVuLTUwMCBwLTEgbWwtNFwiPkNyZWF0ZWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbVwiPkEgZmlsZSBoYXMgYmVlbiBjcmVhdGVkPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItYWN0aXZpdHkgbWwtMTAgYm9yZGVyLWIgYm9yZGVyLWwtMiBib3JkZXItZ3JheS0zMDAgaC0yMCBwdC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBmbG9hdC1sZWZ0IC1tLTMgbXQtMyBtci01IHRleHQtZ3JheS02MDAgYmctd2hpdGVcIj5hdHRhY2hfZmlsZTwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aXZpdHktZGV0YWlscyBmbG9hdC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwXCI+MiBtb250aHMgYWdvPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgcm91bmRlZC1mdWxsIGJnLWdyZWVuLTUwMCBwLTEgbWwtNFwiPkNyZWF0ZWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbVwiPkEgZmlsZSBoYXMgYmVlbiBjcmVhdGVkPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAgIHN0YXRlID0+ICh7XG4gICAgICAgIHVzZXI6IGN1cnJlbnRVc2VyU2VsZWN0b3Ioc3RhdGUpXG4gICAgfSksXG4gICAgZGlzcGF0Y2ggPT4gKHsgfSlcbikoUHJvZmlsZUNvbXBvbmVudCkiXSwic291cmNlUm9vdCI6IiJ9