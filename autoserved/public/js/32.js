(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "./resources/assets/js/constants/regexes.js":
/*!**************************************************!*\
  !*** ./resources/assets/js/constants/regexes.js ***!
  \**************************************************/
/*! exports provided: email */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "email", function() { return email; });
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(email, "email", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/constants/regexes.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/pages/ForgotPassword/ForgotPassword.jsx":
/*!*********************************************************************!*\
  !*** ./resources/assets/js/pages/ForgotPassword/ForgotPassword.jsx ***!
  \*********************************************************************/
/*! exports provided: ForgotPasswordComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var utils_history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/history */ "./resources/assets/js/utils/history.js");
/* harmony import */ var store_action_creators_flashMessages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! store/action-creators/flashMessages */ "./resources/assets/js/store/action-creators/flashMessages/index.js");
/* harmony import */ var _ForgotPasswordForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ForgotPasswordForm */ "./resources/assets/js/pages/ForgotPassword/ForgotPasswordForm.jsx");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};







const ForgotPasswordComponent = props => {
  const {
    submitForgotPassword
  } = props;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ForgotPasswordForm__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordForm"], {
    onSubmit: submitForgotPassword
  });
};

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(null, dispatch => ({
  submitForgotPassword: async (values, {
    setErrors
  }) => {
    try {
      await axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/forgot-password', values);
      utils_history__WEBPACK_IMPORTED_MODULE_4__["history"].push('/login');
      dispatch(Object(store_action_creators_flashMessages__WEBPACK_IMPORTED_MODULE_5__["flashMessage"])('success', 'The password reset request has been sent to your Email inbox.'));
    } catch (error) {
      setErrors(error.response.data);
    }
  }
}))(ForgotPasswordComponent);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ForgotPasswordComponent, "ForgotPasswordComponent", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/ForgotPassword/ForgotPassword.jsx");
  reactHotLoader.register(_default, "default", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/ForgotPassword/ForgotPassword.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/pages/ForgotPassword/ForgotPasswordForm.jsx":
/*!*************************************************************************!*\
  !*** ./resources/assets/js/pages/ForgotPassword/ForgotPasswordForm.jsx ***!
  \*************************************************************************/
/*! exports provided: ForgotPasswordForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordForm", function() { return ForgotPasswordForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var constants_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! constants/styles */ "./resources/assets/js/constants/styles.js");
/* harmony import */ var constants_regexes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! constants/regexes */ "./resources/assets/js/constants/regexes.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components */ "./resources/assets/js/components/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};








const validate = (values = {}) => {
  let errors = {};

  if (!values.email) {
    errors.email = 'This field is required';
  } else if (!constants_regexes__WEBPACK_IMPORTED_MODULE_4__["email"].test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const ForgotPasswordForm = ({
  onSubmit
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    validate: validate,
    onSubmit: onSubmit,
    initialValues: {
      email: ''
    }
  }, () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    type: "text",
    name: "email",
    labelText: "Enter Your Email Address",
    component: components__WEBPACK_IMPORTED_MODULE_5__["TextFormLine"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-xs"
  }, "You will receive an email with a unique token."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: constants_styles__WEBPACK_IMPORTED_MODULE_3__["linkStyle"],
    to: "/account/login"
  }, "Back to Login"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "border-0 bg-blue hover:bg-blue-dark text-white py-2 px-5 ml-auto rounded-full"
  }, "Request"))));
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(validate, "validate", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/ForgotPassword/ForgotPasswordForm.jsx");
  reactHotLoader.register(ForgotPasswordForm, "ForgotPasswordForm", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/ForgotPassword/ForgotPasswordForm.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbnN0YW50cy9yZWdleGVzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvRm9yZ290UGFzc3dvcmQvRm9yZ290UGFzc3dvcmQuanN4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvRm9yZ290UGFzc3dvcmQvRm9yZ290UGFzc3dvcmRGb3JtLmpzeCJdLCJuYW1lcyI6WyJlbWFpbCIsIkZvcmdvdFBhc3N3b3JkQ29tcG9uZW50IiwicHJvcHMiLCJzdWJtaXRGb3Jnb3RQYXNzd29yZCIsImNvbm5lY3QiLCJkaXNwYXRjaCIsInZhbHVlcyIsInNldEVycm9ycyIsImF4aW9zIiwicG9zdCIsImhpc3RvcnkiLCJwdXNoIiwiZmxhc2hNZXNzYWdlIiwiZXJyb3IiLCJyZXNwb25zZSIsImRhdGEiLCJ2YWxpZGF0ZSIsImVycm9ycyIsImVtYWlsUmVnZXgiLCJ0ZXN0IiwiRm9yZ290UGFzc3dvcmRGb3JtIiwib25TdWJtaXQiLCJUZXh0Rm9ybUxpbmUiLCJsaW5rU3R5bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLE1BQU1BLEtBQUssR0FBRyx1SkFBZDs7Ozs7Ozs7OzswQkFBTUEsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBYjtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFTyxNQUFNQyx1QkFBdUIsR0FBR0MsS0FBSyxJQUFJO0FBQzlDLFFBQU07QUFBRUM7QUFBRixNQUEyQkQsS0FBakM7QUFDQSxTQUFPLDJEQUFDLHNFQUFEO0FBQW9CLFlBQVEsRUFBRUM7QUFBOUIsSUFBUDtBQUNELENBSE07O2lCQUtRQywyREFBTyxDQUFDLElBQUQsRUFBT0MsUUFBUSxLQUFLO0FBQ3hDRixzQkFBb0IsRUFBRSxPQUFPRyxNQUFQLEVBQWU7QUFBRUM7QUFBRixHQUFmLEtBQWlDO0FBQ3JELFFBQUk7QUFDRixZQUFNQyw0Q0FBSyxDQUFDQyxJQUFOLENBQVcsc0JBQVgsRUFBbUNILE1BQW5DLENBQU47QUFFQUksMkRBQU8sQ0FBQ0MsSUFBUixDQUFhLFFBQWI7QUFDQU4sY0FBUSxDQUNOTyx3RkFBWSxDQUNWLFNBRFUsRUFFViwrREFGVSxDQUROLENBQVI7QUFNRCxLQVZELENBVUUsT0FBT0MsS0FBUCxFQUFjO0FBQ2ROLGVBQVMsQ0FBQ00sS0FBSyxDQUFDQyxRQUFOLENBQWVDLElBQWhCLENBQVQ7QUFDRDtBQUNGO0FBZnVDLENBQUwsQ0FBZixDQUFQLENBZ0JYZCx1QkFoQlcsQzs7QUFBQTs7Ozs7Ozs7OzswQkFMRkEsdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUYjtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTWUsUUFBUSxHQUFHLENBQUNWLE1BQU0sR0FBRyxFQUFWLEtBQWlCO0FBQ2hDLE1BQUlXLE1BQU0sR0FBRyxFQUFiOztBQUVBLE1BQUksQ0FBQ1gsTUFBTSxDQUFDTixLQUFaLEVBQW1CO0FBQ2pCaUIsVUFBTSxDQUFDakIsS0FBUCxHQUFlLHdCQUFmO0FBQ0QsR0FGRCxNQUVPLElBQUksQ0FBQ2tCLHVEQUFVLENBQUNDLElBQVgsQ0FBZ0JiLE1BQU0sQ0FBQ04sS0FBdkIsQ0FBTCxFQUFvQztBQUN6Q2lCLFVBQU0sQ0FBQ2pCLEtBQVAsR0FBZSx1QkFBZjtBQUNEOztBQUVELFNBQU9pQixNQUFQO0FBQ0QsQ0FWRDs7QUFZTyxNQUFNRyxrQkFBa0IsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFrQjtBQUNsRCxTQUNFLDJEQUFDLDZDQUFEO0FBQ0UsWUFBUSxFQUFFTCxRQURaO0FBRUUsWUFBUSxFQUFFSyxRQUZaO0FBR0UsaUJBQWEsRUFBRTtBQUFFckIsV0FBSyxFQUFFO0FBQVQ7QUFIakIsS0FLRyxNQUNDLDJEQUFDLDJDQUFELFFBQ0UsMkRBQUMsNENBQUQ7QUFDRSxRQUFJLEVBQUMsTUFEUDtBQUVFLFFBQUksRUFBQyxPQUZQO0FBR0UsYUFBUyxFQUFDLDBCQUhaO0FBSUUsYUFBUyxFQUFFc0IsdURBQVlBO0FBSnpCLElBREYsRUFPRTtBQUFHLGFBQVMsRUFBQztBQUFiLHNEQVBGLEVBU0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFLDJEQUFDLHFEQUFEO0FBQU0sYUFBUyxFQUFFQywwREFBakI7QUFBNEIsTUFBRSxFQUFDO0FBQS9CLHFCQURGLEVBSUU7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFTLEVBQUM7QUFBaEMsZUFKRixDQVRGLENBTkosQ0FERjtBQTRCRCxDQTdCTTs7Ozs7Ozs7OzswQkFaRFAsUTswQkFZT0ksa0IiLCJmaWxlIjoianMvMzIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZW1haWwgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC9cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHsgaGlzdG9yeSB9IGZyb20gJ3V0aWxzL2hpc3RvcnknXG5pbXBvcnQgeyBmbGFzaE1lc3NhZ2UgfSBmcm9tICdzdG9yZS9hY3Rpb24tY3JlYXRvcnMvZmxhc2hNZXNzYWdlcydcblxuaW1wb3J0IHsgRm9yZ290UGFzc3dvcmRGb3JtIH0gZnJvbSAnLi9Gb3Jnb3RQYXNzd29yZEZvcm0nXG5cbmV4cG9ydCBjb25zdCBGb3Jnb3RQYXNzd29yZENvbXBvbmVudCA9IHByb3BzID0+IHtcbiAgY29uc3QgeyBzdWJtaXRGb3Jnb3RQYXNzd29yZCB9ID0gcHJvcHNcbiAgcmV0dXJuIDxGb3Jnb3RQYXNzd29yZEZvcm0gb25TdWJtaXQ9e3N1Ym1pdEZvcmdvdFBhc3N3b3JkfSAvPlxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIGRpc3BhdGNoID0+ICh7XG4gIHN1Ym1pdEZvcmdvdFBhc3N3b3JkOiBhc3luYyAodmFsdWVzLCB7IHNldEVycm9ycyB9KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvZm9yZ290LXBhc3N3b3JkJywgdmFsdWVzKVxuXG4gICAgICBoaXN0b3J5LnB1c2goJy9sb2dpbicpXG4gICAgICBkaXNwYXRjaChcbiAgICAgICAgZmxhc2hNZXNzYWdlKFxuICAgICAgICAgICdzdWNjZXNzJyxcbiAgICAgICAgICAnVGhlIHBhc3N3b3JkIHJlc2V0IHJlcXVlc3QgaGFzIGJlZW4gc2VudCB0byB5b3VyIEVtYWlsIGluYm94LidcbiAgICAgICAgKVxuICAgICAgKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBzZXRFcnJvcnMoZXJyb3IucmVzcG9uc2UuZGF0YSlcbiAgICB9XG4gIH1cbn0pKShGb3Jnb3RQYXNzd29yZENvbXBvbmVudClcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgRm9ybWlrLCBGb3JtLCBGaWVsZCB9IGZyb20gJ2Zvcm1paydcblxuaW1wb3J0IHsgbGlua1N0eWxlIH0gZnJvbSAnY29uc3RhbnRzL3N0eWxlcydcbmltcG9ydCB7IGVtYWlsIGFzIGVtYWlsUmVnZXggfSBmcm9tICdjb25zdGFudHMvcmVnZXhlcydcbmltcG9ydCB7IE5ldXRyYWxCdXR0b24sIFRleHRGb3JtTGluZSB9IGZyb20gJ2NvbXBvbmVudHMnXG5cbmNvbnN0IHZhbGlkYXRlID0gKHZhbHVlcyA9IHt9KSA9PiB7XG4gIGxldCBlcnJvcnMgPSB7fVxuXG4gIGlmICghdmFsdWVzLmVtYWlsKSB7XG4gICAgZXJyb3JzLmVtYWlsID0gJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnXG4gIH0gZWxzZSBpZiAoIWVtYWlsUmVnZXgudGVzdCh2YWx1ZXMuZW1haWwpKSB7XG4gICAgZXJyb3JzLmVtYWlsID0gJ0ludmFsaWQgZW1haWwgYWRkcmVzcydcbiAgfVxuXG4gIHJldHVybiBlcnJvcnNcbn1cblxuZXhwb3J0IGNvbnN0IEZvcmdvdFBhc3N3b3JkRm9ybSA9ICh7IG9uU3VibWl0IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Rm9ybWlrXG4gICAgICB2YWxpZGF0ZT17dmFsaWRhdGV9XG4gICAgICBvblN1Ym1pdD17b25TdWJtaXR9XG4gICAgICBpbml0aWFsVmFsdWVzPXt7IGVtYWlsOiAnJyB9fVxuICAgID5cbiAgICAgIHsoKSA9PiAoXG4gICAgICAgIDxGb3JtPlxuICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgIGxhYmVsVGV4dD1cIkVudGVyIFlvdXIgRW1haWwgQWRkcmVzc1wiXG4gICAgICAgICAgICBjb21wb25lbnQ9e1RleHRGb3JtTGluZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHNcIj5Zb3Ugd2lsbCByZWNlaXZlIGFuIGVtYWlsIHdpdGggYSB1bmlxdWUgdG9rZW4uPC9wPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtsaW5rU3R5bGV9IHRvPVwiL2FjY291bnQvbG9naW5cIj5cbiAgICAgICAgICAgICAgQmFjayB0byBMb2dpblxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYm9yZGVyLTAgYmctYmx1ZSBob3ZlcjpiZy1ibHVlLWRhcmsgdGV4dC13aGl0ZSBweS0yIHB4LTUgbWwtYXV0byByb3VuZGVkLWZ1bGxcIj5cbiAgICAgICAgICAgICAgUmVxdWVzdFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgICl9XG4gICAgPC9Gb3JtaWs+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=