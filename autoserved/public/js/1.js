(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/change-emitter/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/change-emitter/lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var createChangeEmitter = exports.createChangeEmitter = function createChangeEmitter() {
  var currentListeners = [];
  var nextListeners = currentListeners;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  function listen(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function () {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  function emit() {
    currentListeners = nextListeners;
    var listeners = currentListeners;
    for (var i = 0; i < listeners.length; i++) {
      listeners[i].apply(listeners, arguments);
    }
  }

  return {
    listen: listen,
    emit: emit
  };
};

/***/ }),

/***/ "./node_modules/fbjs/lib/shallowEqual.js":
/*!***********************************************!*\
  !*** ./node_modules/fbjs/lib/shallowEqual.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 * 
 */

/*eslint-disable no-self-compare */



var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

module.exports = shallowEqual;

/***/ }),

/***/ "./node_modules/recompose/dist/Recompose.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/recompose/dist/Recompose.esm.js ***!
  \******************************************************/
/*! exports provided: mapProps, withProps, withPropsOnChange, withHandlers, defaultProps, renameProp, renameProps, flattenProp, withState, withStateHandlers, withReducer, branch, renderComponent, renderNothing, shouldUpdate, pure, onlyUpdateForKeys, onlyUpdateForPropTypes, withContext, getContext, lifecycle, toClass, toRenderProps, fromRenderProps, setStatic, setPropTypes, setDisplayName, compose, getDisplayName, wrapDisplayName, shallowEqual, isClassComponent, createSink, componentFromProp, nest, hoistStatics, componentFromStream, componentFromStreamWithConfig, mapPropsStream, mapPropsStreamWithConfig, createEventHandler, createEventHandlerWithConfig, setObservableConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapProps", function() { return mapProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withProps", function() { return withProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withPropsOnChange", function() { return withPropsOnChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withHandlers", function() { return withHandlers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultProps", function() { return defaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renameProp", function() { return renameProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renameProps", function() { return renameProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flattenProp", function() { return flattenProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withState", function() { return withState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withStateHandlers", function() { return withStateHandlers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withReducer", function() { return withReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "branch", function() { return branch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderComponent", function() { return renderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderNothing", function() { return renderNothing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldUpdate", function() { return shouldUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pure", function() { return pure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlyUpdateForKeys", function() { return onlyUpdateForKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlyUpdateForPropTypes", function() { return onlyUpdateForPropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withContext", function() { return withContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContext", function() { return getContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lifecycle", function() { return lifecycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toClass", function() { return toClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toRenderProps", function() { return toRenderProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRenderProps", function() { return fromRenderProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStatic", function() { return setStatic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPropTypes", function() { return setPropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDisplayName", function() { return setDisplayName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDisplayName", function() { return getDisplayName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapDisplayName", function() { return wrapDisplayName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isClassComponent", function() { return isClassComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSink", function() { return createSink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentFromProp", function() { return componentFromProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nest", function() { return nest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hoistStatics", function() { return hoistStatics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentFromStream", function() { return componentFromStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentFromStreamWithConfig", function() { return componentFromStreamWithConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapPropsStream", function() { return mapPropsStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapPropsStreamWithConfig", function() { return mapPropsStreamWithConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEventHandler", function() { return createEventHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEventHandlerWithConfig", function() { return createEventHandlerWithConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setObservableConfig", function() { return configureObservable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var fbjs_lib_shallowEqual__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fbjs/lib/shallowEqual */ "./node_modules/fbjs/lib/shallowEqual.js");
/* harmony import */ var fbjs_lib_shallowEqual__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_shallowEqual__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "shallowEqual", function() { return fbjs_lib_shallowEqual__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/recompose/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var change_emitter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! change-emitter */ "./node_modules/change-emitter/lib/index.js");
/* harmony import */ var change_emitter__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(change_emitter__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! symbol-observable */ "./node_modules/symbol-observable/es/index.js");










var setStatic = function setStatic(key, value) {
  return function (BaseComponent) {
    /* eslint-disable no-param-reassign */
    BaseComponent[key] = value;
    /* eslint-enable no-param-reassign */

    return BaseComponent;
  };
};

var setDisplayName = function setDisplayName(displayName) {
  return setStatic('displayName', displayName);
};

var getDisplayName = function getDisplayName(Component$$1) {
  if (typeof Component$$1 === 'string') {
    return Component$$1;
  }

  if (!Component$$1) {
    return undefined;
  }

  return Component$$1.displayName || Component$$1.name || 'Component';
};

var wrapDisplayName = function wrapDisplayName(BaseComponent, hocName) {
  return hocName + "(" + getDisplayName(BaseComponent) + ")";
};

var mapProps = function mapProps(propsMapper) {
  return function (BaseComponent) {
    var factory = Object(react__WEBPACK_IMPORTED_MODULE_0__["createFactory"])(BaseComponent);

    var MapProps = function MapProps(props) {
      return factory(propsMapper(props));
    };

    if (true) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'mapProps'))(MapProps);
    }

    return MapProps;
  };
};

var withProps = function withProps(input) {
  var hoc = mapProps(function (props) {
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, typeof input === 'function' ? input(props) : input);
  });

  if (true) {
    return function (BaseComponent) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'withProps'))(hoc(BaseComponent));
    };
  }

  return hoc;
};

var pick = function pick(obj, keys) {
  var result = {};

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];

    if (obj.hasOwnProperty(key)) {
      result[key] = obj[key];
    }
  }

  return result;
};

var withPropsOnChange = function withPropsOnChange(shouldMapOrKeys, propsMapper) {
  return function (BaseComponent) {
    var factory = Object(react__WEBPACK_IMPORTED_MODULE_0__["createFactory"])(BaseComponent);
    var shouldMap = typeof shouldMapOrKeys === 'function' ? shouldMapOrKeys : function (props, nextProps) {
      return !fbjs_lib_shallowEqual__WEBPACK_IMPORTED_MODULE_2___default()(pick(props, shouldMapOrKeys), pick(nextProps, shouldMapOrKeys));
    };

    var WithPropsOnChange =
    /*#__PURE__*/
    function (_Component) {
      Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(WithPropsOnChange, _Component);

      function WithPropsOnChange() {
        var _this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _Component.call.apply(_Component, [this].concat(args)) || this;
        _this.state = {
          computedProps: propsMapper(_this.props),
          prevProps: _this.props
        };
        return _this;
      }

      WithPropsOnChange.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
        if (shouldMap(prevState.prevProps, nextProps)) {
          return {
            computedProps: propsMapper(nextProps),
            prevProps: nextProps
          };
        }

        return {
          prevProps: nextProps
        };
      };

      var _proto = WithPropsOnChange.prototype;

      _proto.render = function render() {
        return factory(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.props, this.state.computedProps));
      };

      return WithPropsOnChange;
    }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

    Object(react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_4__["polyfill"])(WithPropsOnChange);

    if (true) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'withPropsOnChange'))(WithPropsOnChange);
    }

    return WithPropsOnChange;
  };
};

var mapValues = function mapValues(obj, func) {
  var result = {};
  /* eslint-disable no-restricted-syntax */

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = func(obj[key], key);
    }
  }
  /* eslint-enable no-restricted-syntax */


  return result;
};

var withHandlers = function withHandlers(handlers) {
  return function (BaseComponent) {
    var factory = Object(react__WEBPACK_IMPORTED_MODULE_0__["createFactory"])(BaseComponent);

    var WithHandlers =
    /*#__PURE__*/
    function (_Component) {
      Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(WithHandlers, _Component);

      function WithHandlers() {
        var _this;

        for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
          _args[_key] = arguments[_key];
        }

        _this = _Component.call.apply(_Component, [this].concat(_args)) || this;
        _this.handlers = mapValues(typeof handlers === 'function' ? handlers(_this.props) : handlers, function (createHandler) {
          return function () {
            var handler = createHandler(_this.props);

            if ( true && typeof handler !== 'function') {
              console.error( // eslint-disable-line no-console
              'withHandlers(): Expected a map of higher-order functions. ' + 'Refer to the docs for more info.');
            }

            return handler.apply(void 0, arguments);
          };
        });
        return _this;
      }

      var _proto = WithHandlers.prototype;

      _proto.render = function render() {
        return factory(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.props, this.handlers));
      };

      return WithHandlers;
    }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

    if (true) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'withHandlers'))(WithHandlers);
    }

    return WithHandlers;
  };
};

var defaultProps = function defaultProps(props) {
  return function (BaseComponent) {
    var factory = Object(react__WEBPACK_IMPORTED_MODULE_0__["createFactory"])(BaseComponent);

    var DefaultProps = function DefaultProps(ownerProps) {
      return factory(ownerProps);
    };

    DefaultProps.defaultProps = props;

    if (true) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'defaultProps'))(DefaultProps);
    }

    return DefaultProps;
  };
};

var omit = function omit(obj, keys) {
  var rest = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, obj);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];

    if (rest.hasOwnProperty(key)) {
      delete rest[key];
    }
  }

  return rest;
};

var renameProp = function renameProp(oldName, newName) {
  var hoc = mapProps(function (props) {
    var _extends2;

    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, omit(props, [oldName]), (_extends2 = {}, _extends2[newName] = props[oldName], _extends2));
  });

  if (true) {
    return function (BaseComponent) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'renameProp'))(hoc(BaseComponent));
    };
  }

  return hoc;
};

var keys = Object.keys;

var mapKeys = function mapKeys(obj, func) {
  return keys(obj).reduce(function (result, key) {
    var val = obj[key];
    /* eslint-disable no-param-reassign */

    result[func(val, key)] = val;
    /* eslint-enable no-param-reassign */

    return result;
  }, {});
};

var renameProps = function renameProps(nameMap) {
  var hoc = mapProps(function (props) {
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, omit(props, keys(nameMap)), mapKeys(pick(props, keys(nameMap)), function (_, oldName) {
      return nameMap[oldName];
    }));
  });

  if (true) {
    return function (BaseComponent) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'renameProps'))(hoc(BaseComponent));
    };
  }

  return hoc;
};

var flattenProp = function flattenProp(propName) {
  return function (BaseComponent) {
    var factory = Object(react__WEBPACK_IMPORTED_MODULE_0__["createFactory"])(BaseComponent);

    var FlattenProp = function FlattenProp(props) {
      return factory(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, props[propName]));
    };

    if (true) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'flattenProp'))(FlattenProp);
    }

    return FlattenProp;
  };
};

var withState = function withState(stateName, stateUpdaterName, initialState) {
  return function (BaseComponent) {
    var factory = Object(react__WEBPACK_IMPORTED_MODULE_0__["createFactory"])(BaseComponent);

    var WithState =
    /*#__PURE__*/
    function (_Component) {
      Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(WithState, _Component);

      function WithState() {
        var _this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _Component.call.apply(_Component, [this].concat(args)) || this;
        _this.state = {
          stateValue: typeof initialState === 'function' ? initialState(_this.props) : initialState
        };

        _this.updateStateValue = function (updateFn, callback) {
          return _this.setState(function (_ref) {
            var stateValue = _ref.stateValue;
            return {
              stateValue: typeof updateFn === 'function' ? updateFn(stateValue) : updateFn
            };
          }, callback);
        };

        return _this;
      }

      var _proto = WithState.prototype;

      _proto.render = function render() {
        var _extends2;

        return factory(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.props, (_extends2 = {}, _extends2[stateName] = this.state.stateValue, _extends2[stateUpdaterName] = this.updateStateValue, _extends2)));
      };

      return WithState;
    }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

    if (true) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'withState'))(WithState);
    }

    return WithState;
  };
};

var withStateHandlers = function withStateHandlers(initialState, stateUpdaters) {
  return function (BaseComponent) {
    var factory = Object(react__WEBPACK_IMPORTED_MODULE_0__["createFactory"])(BaseComponent);

    var WithStateHandlers =
    /*#__PURE__*/
    function (_Component) {
      Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(WithStateHandlers, _Component);

      function WithStateHandlers() {
        var _this;

        for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
          _args[_key] = arguments[_key];
        }

        _this = _Component.call.apply(_Component, [this].concat(_args)) || this;
        _this.state = typeof initialState === 'function' ? initialState(_this.props) : initialState;
        _this.stateUpdaters = mapValues(stateUpdaters, function (handler) {
          return function (mayBeEvent) {
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }

            // Having that functional form of setState can be called async
            // we need to persist SyntheticEvent
            if (mayBeEvent && typeof mayBeEvent.persist === 'function') {
              mayBeEvent.persist();
            }

            _this.setState(function (state, props) {
              return handler(state, props).apply(void 0, [mayBeEvent].concat(args));
            });
          };
        });
        return _this;
      }

      var _proto = WithStateHandlers.prototype;

      _proto.render = function render() {
        return factory(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.props, this.state, this.stateUpdaters));
      };

      return WithStateHandlers;
    }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

    if (true) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'withStateHandlers'))(WithStateHandlers);
    }

    return WithStateHandlers;
  };
};

var noop = function noop() {};

var withReducer = function withReducer(stateName, dispatchName, reducer, initialState) {
  return function (BaseComponent) {
    var factory = Object(react__WEBPACK_IMPORTED_MODULE_0__["createFactory"])(BaseComponent);

    var WithReducer =
    /*#__PURE__*/
    function (_Component) {
      Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(WithReducer, _Component);

      function WithReducer() {
        var _this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _Component.call.apply(_Component, [this].concat(args)) || this;
        _this.state = {
          stateValue: _this.initializeStateValue()
        };

        _this.dispatch = function (action, callback) {
          if (callback === void 0) {
            callback = noop;
          }

          return _this.setState(function (_ref) {
            var stateValue = _ref.stateValue;
            return {
              stateValue: reducer(stateValue, action)
            };
          }, function () {
            return callback(_this.state.stateValue);
          });
        };

        return _this;
      }

      var _proto = WithReducer.prototype;

      _proto.initializeStateValue = function initializeStateValue() {
        if (initialState !== undefined) {
          return typeof initialState === 'function' ? initialState(this.props) : initialState;
        }

        return reducer(undefined, {
          type: '@@recompose/INIT'
        });
      };

      _proto.render = function render() {
        var _extends2;

        return factory(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.props, (_extends2 = {}, _extends2[stateName] = this.state.stateValue, _extends2[dispatchName] = this.dispatch, _extends2)));
      };

      return WithReducer;
    }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

    if (true) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'withReducer'))(WithReducer);
    }

    return WithReducer;
  };
};

var identity = function identity(Component$$1) {
  return Component$$1;
};

var branch = function branch(test, left, right) {
  if (right === void 0) {
    right = identity;
  }

  return function (BaseComponent) {
    var leftFactory;
    var rightFactory;

    var Branch = function Branch(props) {
      if (test(props)) {
        leftFactory = leftFactory || Object(react__WEBPACK_IMPORTED_MODULE_0__["createFactory"])(left(BaseComponent));
        return leftFactory(props);
      }

      rightFactory = rightFactory || Object(react__WEBPACK_IMPORTED_MODULE_0__["createFactory"])(right(BaseComponent));
      return rightFactory(props);
    };

    if (true) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'branch'))(Branch);
    }

    return Branch;
  };
};

var renderComponent = function renderComponent(Component$$1) {
  return function (_) {
    var factory = Object(react__WEBPACK_IMPORTED_MODULE_0__["createFactory"])(Component$$1);

    var RenderComponent = function RenderComponent(props) {
      return factory(props);
    };

    if (true) {
      RenderComponent.displayName = wrapDisplayName(Component$$1, 'renderComponent');
    }

    return RenderComponent;
  };
};

var Nothing =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(Nothing, _Component);

  function Nothing() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Nothing.prototype;

  _proto.render = function render() {
    return null;
  };

  return Nothing;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var renderNothing = function renderNothing(_) {
  return Nothing;
};

var shouldUpdate = function shouldUpdate(test) {
  return function (BaseComponent) {
    var factory = Object(react__WEBPACK_IMPORTED_MODULE_0__["createFactory"])(BaseComponent);

    var ShouldUpdate =
    /*#__PURE__*/
    function (_Component) {
      Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(ShouldUpdate, _Component);

      function ShouldUpdate() {
        return _Component.apply(this, arguments) || this;
      }

      var _proto = ShouldUpdate.prototype;

      _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        return test(this.props, nextProps);
      };

      _proto.render = function render() {
        return factory(this.props);
      };

      return ShouldUpdate;
    }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

    if (true) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'shouldUpdate'))(ShouldUpdate);
    }

    return ShouldUpdate;
  };
};

var pure = function pure(BaseComponent) {
  var hoc = shouldUpdate(function (props, nextProps) {
    return !fbjs_lib_shallowEqual__WEBPACK_IMPORTED_MODULE_2___default()(props, nextProps);
  });

  if (true) {
    return setDisplayName(wrapDisplayName(BaseComponent, 'pure'))(hoc(BaseComponent));
  }

  return hoc(BaseComponent);
};

var onlyUpdateForKeys = function onlyUpdateForKeys(propKeys) {
  var hoc = shouldUpdate(function (props, nextProps) {
    return !fbjs_lib_shallowEqual__WEBPACK_IMPORTED_MODULE_2___default()(pick(nextProps, propKeys), pick(props, propKeys));
  });

  if (true) {
    return function (BaseComponent) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'onlyUpdateForKeys'))(hoc(BaseComponent));
    };
  }

  return hoc;
};

var onlyUpdateForPropTypes = function onlyUpdateForPropTypes(BaseComponent) {
  var propTypes = BaseComponent.propTypes;

  if (true) {
    if (!propTypes) {
      /* eslint-disable */
      console.error('A component without any `propTypes` was passed to ' + '`onlyUpdateForPropTypes()`. Check the implementation of the ' + ("component with display name \"" + getDisplayName(BaseComponent) + "\"."));
      /* eslint-enable */
    }
  }

  var propKeys = Object.keys(propTypes || {});
  var OnlyUpdateForPropTypes = onlyUpdateForKeys(propKeys)(BaseComponent);

  if (true) {
    return setDisplayName(wrapDisplayName(BaseComponent, 'onlyUpdateForPropTypes'))(OnlyUpdateForPropTypes);
  }

  return OnlyUpdateForPropTypes;
};

var withContext = function withContext(childContextTypes, getChildContext) {
  return function (BaseComponent) {
    var factory = Object(react__WEBPACK_IMPORTED_MODULE_0__["createFactory"])(BaseComponent);

    var WithContext =
    /*#__PURE__*/
    function (_Component) {
      Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(WithContext, _Component);

      function WithContext() {
        var _this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _Component.call.apply(_Component, [this].concat(args)) || this;

        _this.getChildContext = function () {
          return getChildContext(_this.props);
        };

        return _this;
      }

      var _proto = WithContext.prototype;

      _proto.render = function render() {
        return factory(this.props);
      };

      return WithContext;
    }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

    WithContext.childContextTypes = childContextTypes;

    if (true) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'withContext'))(WithContext);
    }

    return WithContext;
  };
};

var getContext = function getContext(contextTypes) {
  return function (BaseComponent) {
    var factory = Object(react__WEBPACK_IMPORTED_MODULE_0__["createFactory"])(BaseComponent);

    var GetContext = function GetContext(ownerProps, context) {
      return factory(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, ownerProps, context));
    };

    GetContext.contextTypes = contextTypes;

    if (true) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'getContext'))(GetContext);
    }

    return GetContext;
  };
};

var lifecycle = function lifecycle(spec) {
  return function (BaseComponent) {
    var factory = Object(react__WEBPACK_IMPORTED_MODULE_0__["createFactory"])(BaseComponent);

    if ( true && spec.hasOwnProperty('render')) {
      console.error('lifecycle() does not support the render method; its behavior is to ' + 'pass all props and state to the base component.');
    }

    var Lifecycle =
    /*#__PURE__*/
    function (_Component) {
      Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(Lifecycle, _Component);

      function Lifecycle() {
        return _Component.apply(this, arguments) || this;
      }

      var _proto = Lifecycle.prototype;

      _proto.render = function render() {
        return factory(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.props, this.state));
      };

      return Lifecycle;
    }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

    Object.keys(spec).forEach(function (hook) {
      return Lifecycle.prototype[hook] = spec[hook];
    });

    if (true) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'lifecycle'))(Lifecycle);
    }

    return Lifecycle;
  };
};

var isClassComponent = function isClassComponent(Component$$1) {
  return Boolean(Component$$1 && Component$$1.prototype && typeof Component$$1.prototype.render === 'function');
};

var toClass = function toClass(baseComponent) {
  var _class, _temp;

  return isClassComponent(baseComponent) ? baseComponent : (_temp = _class =
  /*#__PURE__*/
  function (_Component) {
    Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(ToClass, _Component);

    function ToClass() {
      return _Component.apply(this, arguments) || this;
    }

    var _proto = ToClass.prototype;

    _proto.render = function render() {
      if (typeof baseComponent === 'string') {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(baseComponent, this.props);
      }

      return baseComponent(this.props, this.context);
    };

    return ToClass;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]), _class.displayName = getDisplayName(baseComponent), _class.propTypes = baseComponent.propTypes, _class.contextTypes = baseComponent.contextTypes, _class.defaultProps = baseComponent.defaultProps, _temp);
};

function toRenderProps(hoc) {
  var RenderPropsComponent = function RenderPropsComponent(props) {
    return props.children(props);
  };

  return hoc(RenderPropsComponent);
}

var fromRenderProps = function fromRenderProps(RenderPropsComponent, propsMapper, renderPropName) {
  if (renderPropName === void 0) {
    renderPropName = 'children';
  }

  return function (BaseComponent) {
    var baseFactory = react__WEBPACK_IMPORTED_MODULE_0___default.a.createFactory(BaseComponent);
    var renderPropsFactory = react__WEBPACK_IMPORTED_MODULE_0___default.a.createFactory(RenderPropsComponent);

    var FromRenderProps = function FromRenderProps(ownerProps) {
      var _renderPropsFactory;

      return renderPropsFactory((_renderPropsFactory = {}, _renderPropsFactory[renderPropName] = function () {
        return baseFactory(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, ownerProps, propsMapper.apply(void 0, arguments)));
      }, _renderPropsFactory));
    };

    if (true) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'fromRenderProps'))(FromRenderProps);
    }

    return FromRenderProps;
  };
};

var setPropTypes = function setPropTypes(propTypes) {
  return setStatic('propTypes', propTypes);
};

var compose = function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  }, function (arg) {
    return arg;
  });
};

var createSink = function createSink(callback) {
  var Sink =
  /*#__PURE__*/
  function (_Component) {
    Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(Sink, _Component);

    function Sink() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _Component.call.apply(_Component, [this].concat(args)) || this;
      _this.state = {};
      return _this;
    }

    Sink.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps) {
      callback(nextProps);
      return null;
    };

    var _proto = Sink.prototype;

    _proto.render = function render() {
      return null;
    };

    return Sink;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

  Object(react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_4__["polyfill"])(Sink);
  return Sink;
};

var componentFromProp = function componentFromProp(propName) {
  var Component$$1 = function Component$$1(props) {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(props[propName], omit(props, [propName]));
  };

  Component$$1.displayName = "componentFromProp(" + propName + ")";
  return Component$$1;
};

var nest = function nest() {
  for (var _len = arguments.length, Components = new Array(_len), _key = 0; _key < _len; _key++) {
    Components[_key] = arguments[_key];
  }

  var factories = Components.map(react__WEBPACK_IMPORTED_MODULE_0__["createFactory"]);

  var Nest = function Nest(_ref) {
    var children = _ref.children,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__["default"])(_ref, ["children"]);

    return factories.reduceRight(function (child, factory) {
      return factory(props, child);
    }, children);
  };

  if (true) {
    var displayNames = Components.map(getDisplayName);
    Nest.displayName = "nest(" + displayNames.join(', ') + ")";
  }

  return Nest;
};

var hoistStatics = function hoistStatics(higherOrderComponent, blacklist) {
  return function (BaseComponent) {
    var NewComponent = higherOrderComponent(BaseComponent);
    hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(NewComponent, BaseComponent, blacklist);
    return NewComponent;
  };
};

var _config = {
  fromESObservable: null,
  toESObservable: null
};

var configureObservable = function configureObservable(c) {
  _config = c;
};

var config = {
  fromESObservable: function fromESObservable(observable) {
    return typeof _config.fromESObservable === 'function' ? _config.fromESObservable(observable) : observable;
  },
  toESObservable: function toESObservable(stream) {
    return typeof _config.toESObservable === 'function' ? _config.toESObservable(stream) : stream;
  }
};

var componentFromStreamWithConfig = function componentFromStreamWithConfig(config$$1) {
  return function (propsToVdom) {
    return (
      /*#__PURE__*/
      function (_Component) {
        Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(ComponentFromStream, _Component);

        function ComponentFromStream() {
          var _config$fromESObserva;

          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.state = {
            vdom: null
          };
          _this.propsEmitter = Object(change_emitter__WEBPACK_IMPORTED_MODULE_7__["createChangeEmitter"])();
          _this.props$ = config$$1.fromESObservable((_config$fromESObserva = {
            subscribe: function subscribe(observer) {
              var unsubscribe = _this.propsEmitter.listen(function (props) {
                if (props) {
                  observer.next(props);
                } else {
                  observer.complete();
                }
              });

              return {
                unsubscribe: unsubscribe
              };
            }
          }, _config$fromESObserva[symbol_observable__WEBPACK_IMPORTED_MODULE_8__["default"]] = function () {
            return this;
          }, _config$fromESObserva));
          _this.vdom$ = config$$1.toESObservable(propsToVdom(_this.props$));
          return _this;
        }

        var _proto = ComponentFromStream.prototype;

        _proto.componentWillMount = function componentWillMount() {
          var _this2 = this;

          // Subscribe to child prop changes so we know when to re-render
          this.subscription = this.vdom$.subscribe({
            next: function next(vdom) {
              _this2.setState({
                vdom: vdom
              });
            }
          });
          this.propsEmitter.emit(this.props);
        };

        _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
          // Receive new props from the owner
          this.propsEmitter.emit(nextProps);
        };

        _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
          return nextState.vdom !== this.state.vdom;
        };

        _proto.componentWillUnmount = function componentWillUnmount() {
          // Call without arguments to complete stream
          this.propsEmitter.emit(); // Clean-up subscription before un-mounting

          this.subscription.unsubscribe();
        };

        _proto.render = function render() {
          return this.state.vdom;
        };

        return ComponentFromStream;
      }(react__WEBPACK_IMPORTED_MODULE_0__["Component"])
    );
  };
};

var componentFromStream = function componentFromStream(propsToVdom) {
  return componentFromStreamWithConfig(config)(propsToVdom);
};

var identity$1 = function identity(t) {
  return t;
};

var mapPropsStreamWithConfig = function mapPropsStreamWithConfig(config$$1) {
  var componentFromStream$$1 = componentFromStreamWithConfig({
    fromESObservable: identity$1,
    toESObservable: identity$1
  });
  return function (transform) {
    return function (BaseComponent) {
      var factory = Object(react__WEBPACK_IMPORTED_MODULE_0__["createFactory"])(BaseComponent);
      var fromESObservable = config$$1.fromESObservable,
          toESObservable = config$$1.toESObservable;
      return componentFromStream$$1(function (props$) {
        var _ref;

        return _ref = {
          subscribe: function subscribe(observer) {
            var subscription = toESObservable(transform(fromESObservable(props$))).subscribe({
              next: function next(childProps) {
                return observer.next(factory(childProps));
              }
            });
            return {
              unsubscribe: function unsubscribe() {
                return subscription.unsubscribe();
              }
            };
          }
        }, _ref[symbol_observable__WEBPACK_IMPORTED_MODULE_8__["default"]] = function () {
          return this;
        }, _ref;
      });
    };
  };
};

var mapPropsStream = function mapPropsStream(transform) {
  var hoc = mapPropsStreamWithConfig(config)(transform);

  if (true) {
    return function (BaseComponent) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'mapPropsStream'))(hoc(BaseComponent));
    };
  }

  return hoc;
};

var createEventHandlerWithConfig = function createEventHandlerWithConfig(config$$1) {
  return function () {
    var _config$fromESObserva;

    var emitter = Object(change_emitter__WEBPACK_IMPORTED_MODULE_7__["createChangeEmitter"])();
    var stream = config$$1.fromESObservable((_config$fromESObserva = {
      subscribe: function subscribe(observer) {
        var unsubscribe = emitter.listen(function (value) {
          return observer.next(value);
        });
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _config$fromESObserva[symbol_observable__WEBPACK_IMPORTED_MODULE_8__["default"]] = function () {
      return this;
    }, _config$fromESObserva));
    return {
      handler: emitter.emit,
      stream: stream
    };
  };
};
var createEventHandler = createEventHandlerWithConfig(config);

// Higher-order component helpers




/***/ }),

/***/ "./node_modules/recompose/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/recompose/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try { // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY2hhbmdlLWVtaXR0ZXIvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9zaGFsbG93RXF1YWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlY29tcG9zZS9kaXN0L1JlY29tcG9zZS5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlY29tcG9zZS9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvZGlzdC9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy5janMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsdUJBQXVCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDYmE7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUNsREE7QUFD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Q0g7QUFDQTtBQUNBLG9CQUFvQiwyREFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxPQUFPLHlEQUFZO0FBQzVCO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQiwwRUFBbUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHdCQUF3Qix5REFBWTtBQUN6QztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFcXJCOzs7Ozs7Ozs7Ozs7O0FDN2lDeHFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOENBQThDOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHVCQUF1QixpQkFBaUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBIiwiZmlsZSI6ImpzLzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTtcbiAgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7XG4gIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGNyZWF0ZUNoYW5nZUVtaXR0ZXIgPSBleHBvcnRzLmNyZWF0ZUNoYW5nZUVtaXR0ZXIgPSBmdW5jdGlvbiBjcmVhdGVDaGFuZ2VFbWl0dGVyKCkge1xuICB2YXIgY3VycmVudExpc3RlbmVycyA9IFtdO1xuICB2YXIgbmV4dExpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnM7XG5cbiAgZnVuY3Rpb24gZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpIHtcbiAgICBpZiAobmV4dExpc3RlbmVycyA9PT0gY3VycmVudExpc3RlbmVycykge1xuICAgICAgbmV4dExpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnMuc2xpY2UoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBsaXN0ZW4obGlzdGVuZXIpIHtcbiAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGxpc3RlbmVyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgdmFyIGlzU3Vic2NyaWJlZCA9IHRydWU7XG5cbiAgICBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCk7XG4gICAgbmV4dExpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIWlzU3Vic2NyaWJlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlzU3Vic2NyaWJlZCA9IGZhbHNlO1xuXG4gICAgICBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCk7XG4gICAgICB2YXIgaW5kZXggPSBuZXh0TGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpO1xuICAgICAgbmV4dExpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBlbWl0KCkge1xuICAgIGN1cnJlbnRMaXN0ZW5lcnMgPSBuZXh0TGlzdGVuZXJzO1xuICAgIHZhciBsaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsaXN0ZW5lcnNbaV0uYXBwbHkobGlzdGVuZXJzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbGlzdGVuOiBsaXN0ZW4sXG4gICAgZW1pdDogZW1pdFxuICB9O1xufTsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEB0eXBlY2hlY2tzXG4gKiBcbiAqL1xuXG4vKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogaW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwgdG8gYXZvaWQgcmVxdWlyaW5nIGNvbnN1bWVycyBzaGlwIHRoZWlyIG93blxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gKi9cbmZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgLy8gU2FtZVZhbHVlIGFsZ29yaXRobVxuICBpZiAoeCA9PT0geSkge1xuICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgIC8vIFN0ZXBzIDYuYi02LmU6ICswICE9IC0wXG4gICAgLy8gQWRkZWQgdGhlIG5vbnplcm8geSBjaGVjayB0byBtYWtlIEZsb3cgaGFwcHksIGJ1dCBpdCBpcyByZWR1bmRhbnRcbiAgICByZXR1cm4geCAhPT0gMCB8fCB5ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgfSBlbHNlIHtcbiAgICAvLyBTdGVwIDYuYTogTmFOID09IE5hTlxuICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gIH1cbn1cblxuLyoqXG4gKiBQZXJmb3JtcyBlcXVhbGl0eSBieSBpdGVyYXRpbmcgdGhyb3VnaCBrZXlzIG9uIGFuIG9iamVjdCBhbmQgcmV0dXJuaW5nIGZhbHNlXG4gKiB3aGVuIGFueSBrZXkgaGFzIHZhbHVlcyB3aGljaCBhcmUgbm90IHN0cmljdGx5IGVxdWFsIGJldHdlZW4gdGhlIGFyZ3VtZW50cy5cbiAqIFJldHVybnMgdHJ1ZSB3aGVuIHRoZSB2YWx1ZXMgb2YgYWxsIGtleXMgYXJlIHN0cmljdGx5IGVxdWFsLlxuICovXG5mdW5jdGlvbiBzaGFsbG93RXF1YWwob2JqQSwgb2JqQikge1xuICBpZiAoaXMob2JqQSwgb2JqQikpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb2JqQSAhPT0gJ29iamVjdCcgfHwgb2JqQSA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqQiAhPT0gJ29iamVjdCcgfHwgb2JqQiA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBrZXlzQSA9IE9iamVjdC5rZXlzKG9iakEpO1xuICB2YXIga2V5c0IgPSBPYmplY3Qua2V5cyhvYmpCKTtcblxuICBpZiAoa2V5c0EubGVuZ3RoICE9PSBrZXlzQi5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBUZXN0IGZvciBBJ3Mga2V5cyBkaWZmZXJlbnQgZnJvbSBCLlxuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXNBLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iakIsIGtleXNBW2ldKSB8fCAhaXMob2JqQVtrZXlzQVtpXV0sIG9iakJba2V5c0FbaV1dKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNoYWxsb3dFcXVhbDsiLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlRmFjdG9yeSwgQ29tcG9uZW50LCBjcmVhdGVFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IHNoYWxsb3dFcXVhbCBmcm9tICdmYmpzL2xpYi9zaGFsbG93RXF1YWwnO1xuaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2UnO1xuaW1wb3J0IHsgcG9seWZpbGwgfSBmcm9tICdyZWFjdC1saWZlY3ljbGVzLWNvbXBhdCc7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSc7XG5pbXBvcnQgaG9pc3ROb25SZWFjdFN0YXRpY3MgZnJvbSAnaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MnO1xuaW1wb3J0IHsgY3JlYXRlQ2hhbmdlRW1pdHRlciB9IGZyb20gJ2NoYW5nZS1lbWl0dGVyJztcbmltcG9ydCAkJG9ic2VydmFibGUgZnJvbSAnc3ltYm9sLW9ic2VydmFibGUnO1xuXG52YXIgc2V0U3RhdGljID0gZnVuY3Rpb24gc2V0U3RhdGljKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChCYXNlQ29tcG9uZW50KSB7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbiAgICBCYXNlQ29tcG9uZW50W2tleV0gPSB2YWx1ZTtcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5cbiAgICByZXR1cm4gQmFzZUNvbXBvbmVudDtcbiAgfTtcbn07XG5cbnZhciBzZXREaXNwbGF5TmFtZSA9IGZ1bmN0aW9uIHNldERpc3BsYXlOYW1lKGRpc3BsYXlOYW1lKSB7XG4gIHJldHVybiBzZXRTdGF0aWMoJ2Rpc3BsYXlOYW1lJywgZGlzcGxheU5hbWUpO1xufTtcblxudmFyIGdldERpc3BsYXlOYW1lID0gZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50JCQxKSB7XG4gIGlmICh0eXBlb2YgQ29tcG9uZW50JCQxID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBDb21wb25lbnQkJDE7XG4gIH1cblxuICBpZiAoIUNvbXBvbmVudCQkMSkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICByZXR1cm4gQ29tcG9uZW50JCQxLmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudCQkMS5uYW1lIHx8ICdDb21wb25lbnQnO1xufTtcblxudmFyIHdyYXBEaXNwbGF5TmFtZSA9IGZ1bmN0aW9uIHdyYXBEaXNwbGF5TmFtZShCYXNlQ29tcG9uZW50LCBob2NOYW1lKSB7XG4gIHJldHVybiBob2NOYW1lICsgXCIoXCIgKyBnZXREaXNwbGF5TmFtZShCYXNlQ29tcG9uZW50KSArIFwiKVwiO1xufTtcblxudmFyIG1hcFByb3BzID0gZnVuY3Rpb24gbWFwUHJvcHMocHJvcHNNYXBwZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChCYXNlQ29tcG9uZW50KSB7XG4gICAgdmFyIGZhY3RvcnkgPSBjcmVhdGVGYWN0b3J5KEJhc2VDb21wb25lbnQpO1xuXG4gICAgdmFyIE1hcFByb3BzID0gZnVuY3Rpb24gTWFwUHJvcHMocHJvcHMpIHtcbiAgICAgIHJldHVybiBmYWN0b3J5KHByb3BzTWFwcGVyKHByb3BzKSk7XG4gICAgfTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm4gc2V0RGlzcGxheU5hbWUod3JhcERpc3BsYXlOYW1lKEJhc2VDb21wb25lbnQsICdtYXBQcm9wcycpKShNYXBQcm9wcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE1hcFByb3BzO1xuICB9O1xufTtcblxudmFyIHdpdGhQcm9wcyA9IGZ1bmN0aW9uIHdpdGhQcm9wcyhpbnB1dCkge1xuICB2YXIgaG9jID0gbWFwUHJvcHMoZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCBwcm9wcywgdHlwZW9mIGlucHV0ID09PSAnZnVuY3Rpb24nID8gaW5wdXQocHJvcHMpIDogaW5wdXQpO1xuICB9KTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoQmFzZUNvbXBvbmVudCkge1xuICAgICAgcmV0dXJuIHNldERpc3BsYXlOYW1lKHdyYXBEaXNwbGF5TmFtZShCYXNlQ29tcG9uZW50LCAnd2l0aFByb3BzJykpKGhvYyhCYXNlQ29tcG9uZW50KSk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBob2M7XG59O1xuXG52YXIgcGljayA9IGZ1bmN0aW9uIHBpY2sob2JqLCBrZXlzKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmVzdWx0W2tleV0gPSBvYmpba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxudmFyIHdpdGhQcm9wc09uQ2hhbmdlID0gZnVuY3Rpb24gd2l0aFByb3BzT25DaGFuZ2Uoc2hvdWxkTWFwT3JLZXlzLCBwcm9wc01hcHBlcikge1xuICByZXR1cm4gZnVuY3Rpb24gKEJhc2VDb21wb25lbnQpIHtcbiAgICB2YXIgZmFjdG9yeSA9IGNyZWF0ZUZhY3RvcnkoQmFzZUNvbXBvbmVudCk7XG4gICAgdmFyIHNob3VsZE1hcCA9IHR5cGVvZiBzaG91bGRNYXBPcktleXMgPT09ICdmdW5jdGlvbicgPyBzaG91bGRNYXBPcktleXMgOiBmdW5jdGlvbiAocHJvcHMsIG5leHRQcm9wcykge1xuICAgICAgcmV0dXJuICFzaGFsbG93RXF1YWwocGljayhwcm9wcywgc2hvdWxkTWFwT3JLZXlzKSwgcGljayhuZXh0UHJvcHMsIHNob3VsZE1hcE9yS2V5cykpO1xuICAgIH07XG5cbiAgICB2YXIgV2l0aFByb3BzT25DaGFuZ2UgPVxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgICAgX2luaGVyaXRzTG9vc2UoV2l0aFByb3BzT25DaGFuZ2UsIF9Db21wb25lbnQpO1xuXG4gICAgICBmdW5jdGlvbiBXaXRoUHJvcHNPbkNoYW5nZSgpIHtcbiAgICAgICAgdmFyIF90aGlzO1xuXG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcyA9IF9Db21wb25lbnQuY2FsbC5hcHBseShfQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICBjb21wdXRlZFByb3BzOiBwcm9wc01hcHBlcihfdGhpcy5wcm9wcyksXG4gICAgICAgICAgcHJldlByb3BzOiBfdGhpcy5wcm9wc1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICB9XG5cbiAgICAgIFdpdGhQcm9wc09uQ2hhbmdlLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9IGZ1bmN0aW9uIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXh0UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgICAgICBpZiAoc2hvdWxkTWFwKHByZXZTdGF0ZS5wcmV2UHJvcHMsIG5leHRQcm9wcykpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29tcHV0ZWRQcm9wczogcHJvcHNNYXBwZXIobmV4dFByb3BzKSxcbiAgICAgICAgICAgIHByZXZQcm9wczogbmV4dFByb3BzXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcHJldlByb3BzOiBuZXh0UHJvcHNcbiAgICAgICAgfTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBfcHJvdG8gPSBXaXRoUHJvcHNPbkNoYW5nZS5wcm90b3R5cGU7XG5cbiAgICAgIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBmYWN0b3J5KF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB0aGlzLnN0YXRlLmNvbXB1dGVkUHJvcHMpKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBXaXRoUHJvcHNPbkNoYW5nZTtcbiAgICB9KENvbXBvbmVudCk7XG5cbiAgICBwb2x5ZmlsbChXaXRoUHJvcHNPbkNoYW5nZSk7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuIHNldERpc3BsYXlOYW1lKHdyYXBEaXNwbGF5TmFtZShCYXNlQ29tcG9uZW50LCAnd2l0aFByb3BzT25DaGFuZ2UnKSkoV2l0aFByb3BzT25DaGFuZ2UpO1xuICAgIH1cblxuICAgIHJldHVybiBXaXRoUHJvcHNPbkNoYW5nZTtcbiAgfTtcbn07XG5cbnZhciBtYXBWYWx1ZXMgPSBmdW5jdGlvbiBtYXBWYWx1ZXMob2JqLCBmdW5jKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXN1bHRba2V5XSA9IGZ1bmMob2JqW2tleV0sIGtleSk7XG4gICAgfVxuICB9XG4gIC8qIGVzbGludC1lbmFibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cblxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG52YXIgd2l0aEhhbmRsZXJzID0gZnVuY3Rpb24gd2l0aEhhbmRsZXJzKGhhbmRsZXJzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoQmFzZUNvbXBvbmVudCkge1xuICAgIHZhciBmYWN0b3J5ID0gY3JlYXRlRmFjdG9yeShCYXNlQ29tcG9uZW50KTtcblxuICAgIHZhciBXaXRoSGFuZGxlcnMgPVxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgICAgX2luaGVyaXRzTG9vc2UoV2l0aEhhbmRsZXJzLCBfQ29tcG9uZW50KTtcblxuICAgICAgZnVuY3Rpb24gV2l0aEhhbmRsZXJzKCkge1xuICAgICAgICB2YXIgX3RoaXM7XG5cbiAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIF9hcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgIF9hcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMgPSBfQ29tcG9uZW50LmNhbGwuYXBwbHkoX0NvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChfYXJncykpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmhhbmRsZXJzID0gbWFwVmFsdWVzKHR5cGVvZiBoYW5kbGVycyA9PT0gJ2Z1bmN0aW9uJyA/IGhhbmRsZXJzKF90aGlzLnByb3BzKSA6IGhhbmRsZXJzLCBmdW5jdGlvbiAoY3JlYXRlSGFuZGxlcikge1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlciA9IGNyZWF0ZUhhbmRsZXIoX3RoaXMucHJvcHMpO1xuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgaGFuZGxlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICAgICAgJ3dpdGhIYW5kbGVycygpOiBFeHBlY3RlZCBhIG1hcCBvZiBoaWdoZXItb3JkZXIgZnVuY3Rpb25zLiAnICsgJ1JlZmVyIHRvIHRoZSBkb2NzIGZvciBtb3JlIGluZm8uJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVyLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgfVxuXG4gICAgICB2YXIgX3Byb3RvID0gV2l0aEhhbmRsZXJzLnByb3RvdHlwZTtcblxuICAgICAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGZhY3RvcnkoX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHRoaXMuaGFuZGxlcnMpKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBXaXRoSGFuZGxlcnM7XG4gICAgfShDb21wb25lbnQpO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVybiBzZXREaXNwbGF5TmFtZSh3cmFwRGlzcGxheU5hbWUoQmFzZUNvbXBvbmVudCwgJ3dpdGhIYW5kbGVycycpKShXaXRoSGFuZGxlcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBXaXRoSGFuZGxlcnM7XG4gIH07XG59O1xuXG52YXIgZGVmYXVsdFByb3BzID0gZnVuY3Rpb24gZGVmYXVsdFByb3BzKHByb3BzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoQmFzZUNvbXBvbmVudCkge1xuICAgIHZhciBmYWN0b3J5ID0gY3JlYXRlRmFjdG9yeShCYXNlQ29tcG9uZW50KTtcblxuICAgIHZhciBEZWZhdWx0UHJvcHMgPSBmdW5jdGlvbiBEZWZhdWx0UHJvcHMob3duZXJQcm9wcykge1xuICAgICAgcmV0dXJuIGZhY3Rvcnkob3duZXJQcm9wcyk7XG4gICAgfTtcblxuICAgIERlZmF1bHRQcm9wcy5kZWZhdWx0UHJvcHMgPSBwcm9wcztcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm4gc2V0RGlzcGxheU5hbWUod3JhcERpc3BsYXlOYW1lKEJhc2VDb21wb25lbnQsICdkZWZhdWx0UHJvcHMnKSkoRGVmYXVsdFByb3BzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gRGVmYXVsdFByb3BzO1xuICB9O1xufTtcblxudmFyIG9taXQgPSBmdW5jdGlvbiBvbWl0KG9iaiwga2V5cykge1xuICB2YXIgcmVzdCA9IF9leHRlbmRzKHt9LCBvYmopO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgaWYgKHJlc3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgZGVsZXRlIHJlc3Rba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdDtcbn07XG5cbnZhciByZW5hbWVQcm9wID0gZnVuY3Rpb24gcmVuYW1lUHJvcChvbGROYW1lLCBuZXdOYW1lKSB7XG4gIHZhciBob2MgPSBtYXBQcm9wcyhmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgX2V4dGVuZHMyO1xuXG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCBvbWl0KHByb3BzLCBbb2xkTmFtZV0pLCAoX2V4dGVuZHMyID0ge30sIF9leHRlbmRzMltuZXdOYW1lXSA9IHByb3BzW29sZE5hbWVdLCBfZXh0ZW5kczIpKTtcbiAgfSk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKEJhc2VDb21wb25lbnQpIHtcbiAgICAgIHJldHVybiBzZXREaXNwbGF5TmFtZSh3cmFwRGlzcGxheU5hbWUoQmFzZUNvbXBvbmVudCwgJ3JlbmFtZVByb3AnKSkoaG9jKEJhc2VDb21wb25lbnQpKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGhvYztcbn07XG5cbnZhciBrZXlzID0gT2JqZWN0LmtleXM7XG5cbnZhciBtYXBLZXlzID0gZnVuY3Rpb24gbWFwS2V5cyhvYmosIGZ1bmMpIHtcbiAgcmV0dXJuIGtleXMob2JqKS5yZWR1Y2UoZnVuY3Rpb24gKHJlc3VsdCwga2V5KSB7XG4gICAgdmFyIHZhbCA9IG9ialtrZXldO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5cbiAgICByZXN1bHRbZnVuYyh2YWwsIGtleSldID0gdmFsO1xuICAgIC8qIGVzbGludC1lbmFibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sIHt9KTtcbn07XG5cbnZhciByZW5hbWVQcm9wcyA9IGZ1bmN0aW9uIHJlbmFtZVByb3BzKG5hbWVNYXApIHtcbiAgdmFyIGhvYyA9IG1hcFByb3BzKGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgb21pdChwcm9wcywga2V5cyhuYW1lTWFwKSksIG1hcEtleXMocGljayhwcm9wcywga2V5cyhuYW1lTWFwKSksIGZ1bmN0aW9uIChfLCBvbGROYW1lKSB7XG4gICAgICByZXR1cm4gbmFtZU1hcFtvbGROYW1lXTtcbiAgICB9KSk7XG4gIH0pO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChCYXNlQ29tcG9uZW50KSB7XG4gICAgICByZXR1cm4gc2V0RGlzcGxheU5hbWUod3JhcERpc3BsYXlOYW1lKEJhc2VDb21wb25lbnQsICdyZW5hbWVQcm9wcycpKShob2MoQmFzZUNvbXBvbmVudCkpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gaG9jO1xufTtcblxudmFyIGZsYXR0ZW5Qcm9wID0gZnVuY3Rpb24gZmxhdHRlblByb3AocHJvcE5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChCYXNlQ29tcG9uZW50KSB7XG4gICAgdmFyIGZhY3RvcnkgPSBjcmVhdGVGYWN0b3J5KEJhc2VDb21wb25lbnQpO1xuXG4gICAgdmFyIEZsYXR0ZW5Qcm9wID0gZnVuY3Rpb24gRmxhdHRlblByb3AocHJvcHMpIHtcbiAgICAgIHJldHVybiBmYWN0b3J5KF9leHRlbmRzKHt9LCBwcm9wcywgcHJvcHNbcHJvcE5hbWVdKSk7XG4gICAgfTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm4gc2V0RGlzcGxheU5hbWUod3JhcERpc3BsYXlOYW1lKEJhc2VDb21wb25lbnQsICdmbGF0dGVuUHJvcCcpKShGbGF0dGVuUHJvcCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIEZsYXR0ZW5Qcm9wO1xuICB9O1xufTtcblxudmFyIHdpdGhTdGF0ZSA9IGZ1bmN0aW9uIHdpdGhTdGF0ZShzdGF0ZU5hbWUsIHN0YXRlVXBkYXRlck5hbWUsIGluaXRpYWxTdGF0ZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKEJhc2VDb21wb25lbnQpIHtcbiAgICB2YXIgZmFjdG9yeSA9IGNyZWF0ZUZhY3RvcnkoQmFzZUNvbXBvbmVudCk7XG5cbiAgICB2YXIgV2l0aFN0YXRlID1cbiAgICAvKiNfX1BVUkVfXyovXG4gICAgZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICAgIF9pbmhlcml0c0xvb3NlKFdpdGhTdGF0ZSwgX0NvbXBvbmVudCk7XG5cbiAgICAgIGZ1bmN0aW9uIFdpdGhTdGF0ZSgpIHtcbiAgICAgICAgdmFyIF90aGlzO1xuXG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcyA9IF9Db21wb25lbnQuY2FsbC5hcHBseShfQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICBzdGF0ZVZhbHVlOiB0eXBlb2YgaW5pdGlhbFN0YXRlID09PSAnZnVuY3Rpb24nID8gaW5pdGlhbFN0YXRlKF90aGlzLnByb3BzKSA6IGluaXRpYWxTdGF0ZVxuICAgICAgICB9O1xuXG4gICAgICAgIF90aGlzLnVwZGF0ZVN0YXRlVmFsdWUgPSBmdW5jdGlvbiAodXBkYXRlRm4sIGNhbGxiYWNrKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgICAgICB2YXIgc3RhdGVWYWx1ZSA9IF9yZWYuc3RhdGVWYWx1ZTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHN0YXRlVmFsdWU6IHR5cGVvZiB1cGRhdGVGbiA9PT0gJ2Z1bmN0aW9uJyA/IHVwZGF0ZUZuKHN0YXRlVmFsdWUpIDogdXBkYXRlRm5cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSwgY2FsbGJhY2spO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICAgIH1cblxuICAgICAgdmFyIF9wcm90byA9IFdpdGhTdGF0ZS5wcm90b3R5cGU7XG5cbiAgICAgIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBfZXh0ZW5kczI7XG5cbiAgICAgICAgcmV0dXJuIGZhY3RvcnkoX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIChfZXh0ZW5kczIgPSB7fSwgX2V4dGVuZHMyW3N0YXRlTmFtZV0gPSB0aGlzLnN0YXRlLnN0YXRlVmFsdWUsIF9leHRlbmRzMltzdGF0ZVVwZGF0ZXJOYW1lXSA9IHRoaXMudXBkYXRlU3RhdGVWYWx1ZSwgX2V4dGVuZHMyKSkpO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIFdpdGhTdGF0ZTtcbiAgICB9KENvbXBvbmVudCk7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuIHNldERpc3BsYXlOYW1lKHdyYXBEaXNwbGF5TmFtZShCYXNlQ29tcG9uZW50LCAnd2l0aFN0YXRlJykpKFdpdGhTdGF0ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFdpdGhTdGF0ZTtcbiAgfTtcbn07XG5cbnZhciB3aXRoU3RhdGVIYW5kbGVycyA9IGZ1bmN0aW9uIHdpdGhTdGF0ZUhhbmRsZXJzKGluaXRpYWxTdGF0ZSwgc3RhdGVVcGRhdGVycykge1xuICByZXR1cm4gZnVuY3Rpb24gKEJhc2VDb21wb25lbnQpIHtcbiAgICB2YXIgZmFjdG9yeSA9IGNyZWF0ZUZhY3RvcnkoQmFzZUNvbXBvbmVudCk7XG5cbiAgICB2YXIgV2l0aFN0YXRlSGFuZGxlcnMgPVxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgICAgX2luaGVyaXRzTG9vc2UoV2l0aFN0YXRlSGFuZGxlcnMsIF9Db21wb25lbnQpO1xuXG4gICAgICBmdW5jdGlvbiBXaXRoU3RhdGVIYW5kbGVycygpIHtcbiAgICAgICAgdmFyIF90aGlzO1xuXG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBfYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICBfYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzID0gX0NvbXBvbmVudC5jYWxsLmFwcGx5KF9Db21wb25lbnQsIFt0aGlzXS5jb25jYXQoX2FyZ3MpKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zdGF0ZSA9IHR5cGVvZiBpbml0aWFsU3RhdGUgPT09ICdmdW5jdGlvbicgPyBpbml0aWFsU3RhdGUoX3RoaXMucHJvcHMpIDogaW5pdGlhbFN0YXRlO1xuICAgICAgICBfdGhpcy5zdGF0ZVVwZGF0ZXJzID0gbWFwVmFsdWVzKHN0YXRlVXBkYXRlcnMsIGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChtYXlCZUV2ZW50KSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICAgICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBIYXZpbmcgdGhhdCBmdW5jdGlvbmFsIGZvcm0gb2Ygc2V0U3RhdGUgY2FuIGJlIGNhbGxlZCBhc3luY1xuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBwZXJzaXN0IFN5bnRoZXRpY0V2ZW50XG4gICAgICAgICAgICBpZiAobWF5QmVFdmVudCAmJiB0eXBlb2YgbWF5QmVFdmVudC5wZXJzaXN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIG1heUJlRXZlbnQucGVyc2lzdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAoc3RhdGUsIHByb3BzKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGVyKHN0YXRlLCBwcm9wcykuYXBwbHkodm9pZCAwLCBbbWF5QmVFdmVudF0uY29uY2F0KGFyZ3MpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICB9XG5cbiAgICAgIHZhciBfcHJvdG8gPSBXaXRoU3RhdGVIYW5kbGVycy5wcm90b3R5cGU7XG5cbiAgICAgIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBmYWN0b3J5KF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB0aGlzLnN0YXRlLCB0aGlzLnN0YXRlVXBkYXRlcnMpKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBXaXRoU3RhdGVIYW5kbGVycztcbiAgICB9KENvbXBvbmVudCk7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuIHNldERpc3BsYXlOYW1lKHdyYXBEaXNwbGF5TmFtZShCYXNlQ29tcG9uZW50LCAnd2l0aFN0YXRlSGFuZGxlcnMnKSkoV2l0aFN0YXRlSGFuZGxlcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBXaXRoU3RhdGVIYW5kbGVycztcbiAgfTtcbn07XG5cbnZhciBub29wID0gZnVuY3Rpb24gbm9vcCgpIHt9O1xuXG52YXIgd2l0aFJlZHVjZXIgPSBmdW5jdGlvbiB3aXRoUmVkdWNlcihzdGF0ZU5hbWUsIGRpc3BhdGNoTmFtZSwgcmVkdWNlciwgaW5pdGlhbFN0YXRlKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoQmFzZUNvbXBvbmVudCkge1xuICAgIHZhciBmYWN0b3J5ID0gY3JlYXRlRmFjdG9yeShCYXNlQ29tcG9uZW50KTtcblxuICAgIHZhciBXaXRoUmVkdWNlciA9XG4gICAgLyojX19QVVJFX18qL1xuICAgIGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgICBfaW5oZXJpdHNMb29zZShXaXRoUmVkdWNlciwgX0NvbXBvbmVudCk7XG5cbiAgICAgIGZ1bmN0aW9uIFdpdGhSZWR1Y2VyKCkge1xuICAgICAgICB2YXIgX3RoaXM7XG5cbiAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzID0gX0NvbXBvbmVudC5jYWxsLmFwcGx5KF9Db21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICAgIHN0YXRlVmFsdWU6IF90aGlzLmluaXRpYWxpemVTdGF0ZVZhbHVlKClcbiAgICAgICAgfTtcblxuICAgICAgICBfdGhpcy5kaXNwYXRjaCA9IGZ1bmN0aW9uIChhY3Rpb24sIGNhbGxiYWNrKSB7XG4gICAgICAgICAgaWYgKGNhbGxiYWNrID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gbm9vcDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gX3RoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgICAgIHZhciBzdGF0ZVZhbHVlID0gX3JlZi5zdGF0ZVZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgc3RhdGVWYWx1ZTogcmVkdWNlcihzdGF0ZVZhbHVlLCBhY3Rpb24pXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhfdGhpcy5zdGF0ZS5zdGF0ZVZhbHVlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICB9XG5cbiAgICAgIHZhciBfcHJvdG8gPSBXaXRoUmVkdWNlci5wcm90b3R5cGU7XG5cbiAgICAgIF9wcm90by5pbml0aWFsaXplU3RhdGVWYWx1ZSA9IGZ1bmN0aW9uIGluaXRpYWxpemVTdGF0ZVZhbHVlKCkge1xuICAgICAgICBpZiAoaW5pdGlhbFN0YXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHlwZW9mIGluaXRpYWxTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyA/IGluaXRpYWxTdGF0ZSh0aGlzLnByb3BzKSA6IGluaXRpYWxTdGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZWR1Y2VyKHVuZGVmaW5lZCwge1xuICAgICAgICAgIHR5cGU6ICdAQHJlY29tcG9zZS9JTklUJ1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBfZXh0ZW5kczI7XG5cbiAgICAgICAgcmV0dXJuIGZhY3RvcnkoX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIChfZXh0ZW5kczIgPSB7fSwgX2V4dGVuZHMyW3N0YXRlTmFtZV0gPSB0aGlzLnN0YXRlLnN0YXRlVmFsdWUsIF9leHRlbmRzMltkaXNwYXRjaE5hbWVdID0gdGhpcy5kaXNwYXRjaCwgX2V4dGVuZHMyKSkpO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIFdpdGhSZWR1Y2VyO1xuICAgIH0oQ29tcG9uZW50KTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm4gc2V0RGlzcGxheU5hbWUod3JhcERpc3BsYXlOYW1lKEJhc2VDb21wb25lbnQsICd3aXRoUmVkdWNlcicpKShXaXRoUmVkdWNlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIFdpdGhSZWR1Y2VyO1xuICB9O1xufTtcblxudmFyIGlkZW50aXR5ID0gZnVuY3Rpb24gaWRlbnRpdHkoQ29tcG9uZW50JCQxKSB7XG4gIHJldHVybiBDb21wb25lbnQkJDE7XG59O1xuXG52YXIgYnJhbmNoID0gZnVuY3Rpb24gYnJhbmNoKHRlc3QsIGxlZnQsIHJpZ2h0KSB7XG4gIGlmIChyaWdodCA9PT0gdm9pZCAwKSB7XG4gICAgcmlnaHQgPSBpZGVudGl0eTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQmFzZUNvbXBvbmVudCkge1xuICAgIHZhciBsZWZ0RmFjdG9yeTtcbiAgICB2YXIgcmlnaHRGYWN0b3J5O1xuXG4gICAgdmFyIEJyYW5jaCA9IGZ1bmN0aW9uIEJyYW5jaChwcm9wcykge1xuICAgICAgaWYgKHRlc3QocHJvcHMpKSB7XG4gICAgICAgIGxlZnRGYWN0b3J5ID0gbGVmdEZhY3RvcnkgfHwgY3JlYXRlRmFjdG9yeShsZWZ0KEJhc2VDb21wb25lbnQpKTtcbiAgICAgICAgcmV0dXJuIGxlZnRGYWN0b3J5KHByb3BzKTtcbiAgICAgIH1cblxuICAgICAgcmlnaHRGYWN0b3J5ID0gcmlnaHRGYWN0b3J5IHx8IGNyZWF0ZUZhY3RvcnkocmlnaHQoQmFzZUNvbXBvbmVudCkpO1xuICAgICAgcmV0dXJuIHJpZ2h0RmFjdG9yeShwcm9wcyk7XG4gICAgfTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm4gc2V0RGlzcGxheU5hbWUod3JhcERpc3BsYXlOYW1lKEJhc2VDb21wb25lbnQsICdicmFuY2gnKSkoQnJhbmNoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gQnJhbmNoO1xuICB9O1xufTtcblxudmFyIHJlbmRlckNvbXBvbmVudCA9IGZ1bmN0aW9uIHJlbmRlckNvbXBvbmVudChDb21wb25lbnQkJDEpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChfKSB7XG4gICAgdmFyIGZhY3RvcnkgPSBjcmVhdGVGYWN0b3J5KENvbXBvbmVudCQkMSk7XG5cbiAgICB2YXIgUmVuZGVyQ29tcG9uZW50ID0gZnVuY3Rpb24gUmVuZGVyQ29tcG9uZW50KHByb3BzKSB7XG4gICAgICByZXR1cm4gZmFjdG9yeShwcm9wcyk7XG4gICAgfTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBSZW5kZXJDb21wb25lbnQuZGlzcGxheU5hbWUgPSB3cmFwRGlzcGxheU5hbWUoQ29tcG9uZW50JCQxLCAncmVuZGVyQ29tcG9uZW50Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlbmRlckNvbXBvbmVudDtcbiAgfTtcbn07XG5cbnZhciBOb3RoaW5nID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKE5vdGhpbmcsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIE5vdGhpbmcoKSB7XG4gICAgcmV0dXJuIF9Db21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IE5vdGhpbmcucHJvdG90eXBlO1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgcmV0dXJuIE5vdGhpbmc7XG59KENvbXBvbmVudCk7XG5cbnZhciByZW5kZXJOb3RoaW5nID0gZnVuY3Rpb24gcmVuZGVyTm90aGluZyhfKSB7XG4gIHJldHVybiBOb3RoaW5nO1xufTtcblxudmFyIHNob3VsZFVwZGF0ZSA9IGZ1bmN0aW9uIHNob3VsZFVwZGF0ZSh0ZXN0KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoQmFzZUNvbXBvbmVudCkge1xuICAgIHZhciBmYWN0b3J5ID0gY3JlYXRlRmFjdG9yeShCYXNlQ29tcG9uZW50KTtcblxuICAgIHZhciBTaG91bGRVcGRhdGUgPVxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgICAgX2luaGVyaXRzTG9vc2UoU2hvdWxkVXBkYXRlLCBfQ29tcG9uZW50KTtcblxuICAgICAgZnVuY3Rpb24gU2hvdWxkVXBkYXRlKCkge1xuICAgICAgICByZXR1cm4gX0NvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICB9XG5cbiAgICAgIHZhciBfcHJvdG8gPSBTaG91bGRVcGRhdGUucHJvdG90eXBlO1xuXG4gICAgICBfcHJvdG8uc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgICByZXR1cm4gdGVzdCh0aGlzLnByb3BzLCBuZXh0UHJvcHMpO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGZhY3RvcnkodGhpcy5wcm9wcyk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gU2hvdWxkVXBkYXRlO1xuICAgIH0oQ29tcG9uZW50KTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm4gc2V0RGlzcGxheU5hbWUod3JhcERpc3BsYXlOYW1lKEJhc2VDb21wb25lbnQsICdzaG91bGRVcGRhdGUnKSkoU2hvdWxkVXBkYXRlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gU2hvdWxkVXBkYXRlO1xuICB9O1xufTtcblxudmFyIHB1cmUgPSBmdW5jdGlvbiBwdXJlKEJhc2VDb21wb25lbnQpIHtcbiAgdmFyIGhvYyA9IHNob3VsZFVwZGF0ZShmdW5jdGlvbiAocHJvcHMsIG5leHRQcm9wcykge1xuICAgIHJldHVybiAhc2hhbGxvd0VxdWFsKHByb3BzLCBuZXh0UHJvcHMpO1xuICB9KTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHJldHVybiBzZXREaXNwbGF5TmFtZSh3cmFwRGlzcGxheU5hbWUoQmFzZUNvbXBvbmVudCwgJ3B1cmUnKSkoaG9jKEJhc2VDb21wb25lbnQpKTtcbiAgfVxuXG4gIHJldHVybiBob2MoQmFzZUNvbXBvbmVudCk7XG59O1xuXG52YXIgb25seVVwZGF0ZUZvcktleXMgPSBmdW5jdGlvbiBvbmx5VXBkYXRlRm9yS2V5cyhwcm9wS2V5cykge1xuICB2YXIgaG9jID0gc2hvdWxkVXBkYXRlKGZ1bmN0aW9uIChwcm9wcywgbmV4dFByb3BzKSB7XG4gICAgcmV0dXJuICFzaGFsbG93RXF1YWwocGljayhuZXh0UHJvcHMsIHByb3BLZXlzKSwgcGljayhwcm9wcywgcHJvcEtleXMpKTtcbiAgfSk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKEJhc2VDb21wb25lbnQpIHtcbiAgICAgIHJldHVybiBzZXREaXNwbGF5TmFtZSh3cmFwRGlzcGxheU5hbWUoQmFzZUNvbXBvbmVudCwgJ29ubHlVcGRhdGVGb3JLZXlzJykpKGhvYyhCYXNlQ29tcG9uZW50KSk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBob2M7XG59O1xuXG52YXIgb25seVVwZGF0ZUZvclByb3BUeXBlcyA9IGZ1bmN0aW9uIG9ubHlVcGRhdGVGb3JQcm9wVHlwZXMoQmFzZUNvbXBvbmVudCkge1xuICB2YXIgcHJvcFR5cGVzID0gQmFzZUNvbXBvbmVudC5wcm9wVHlwZXM7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIXByb3BUeXBlcykge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0EgY29tcG9uZW50IHdpdGhvdXQgYW55IGBwcm9wVHlwZXNgIHdhcyBwYXNzZWQgdG8gJyArICdgb25seVVwZGF0ZUZvclByb3BUeXBlcygpYC4gQ2hlY2sgdGhlIGltcGxlbWVudGF0aW9uIG9mIHRoZSAnICsgKFwiY29tcG9uZW50IHdpdGggZGlzcGxheSBuYW1lIFxcXCJcIiArIGdldERpc3BsYXlOYW1lKEJhc2VDb21wb25lbnQpICsgXCJcXFwiLlwiKSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlICovXG4gICAgfVxuICB9XG5cbiAgdmFyIHByb3BLZXlzID0gT2JqZWN0LmtleXMocHJvcFR5cGVzIHx8IHt9KTtcbiAgdmFyIE9ubHlVcGRhdGVGb3JQcm9wVHlwZXMgPSBvbmx5VXBkYXRlRm9yS2V5cyhwcm9wS2V5cykoQmFzZUNvbXBvbmVudCk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICByZXR1cm4gc2V0RGlzcGxheU5hbWUod3JhcERpc3BsYXlOYW1lKEJhc2VDb21wb25lbnQsICdvbmx5VXBkYXRlRm9yUHJvcFR5cGVzJykpKE9ubHlVcGRhdGVGb3JQcm9wVHlwZXMpO1xuICB9XG5cbiAgcmV0dXJuIE9ubHlVcGRhdGVGb3JQcm9wVHlwZXM7XG59O1xuXG52YXIgd2l0aENvbnRleHQgPSBmdW5jdGlvbiB3aXRoQ29udGV4dChjaGlsZENvbnRleHRUeXBlcywgZ2V0Q2hpbGRDb250ZXh0KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoQmFzZUNvbXBvbmVudCkge1xuICAgIHZhciBmYWN0b3J5ID0gY3JlYXRlRmFjdG9yeShCYXNlQ29tcG9uZW50KTtcblxuICAgIHZhciBXaXRoQ29udGV4dCA9XG4gICAgLyojX19QVVJFX18qL1xuICAgIGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgICBfaW5oZXJpdHNMb29zZShXaXRoQ29udGV4dCwgX0NvbXBvbmVudCk7XG5cbiAgICAgIGZ1bmN0aW9uIFdpdGhDb250ZXh0KCkge1xuICAgICAgICB2YXIgX3RoaXM7XG5cbiAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzID0gX0NvbXBvbmVudC5jYWxsLmFwcGx5KF9Db21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpIHx8IHRoaXM7XG5cbiAgICAgICAgX3RoaXMuZ2V0Q2hpbGRDb250ZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBnZXRDaGlsZENvbnRleHQoX3RoaXMucHJvcHMpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICAgIH1cblxuICAgICAgdmFyIF9wcm90byA9IFdpdGhDb250ZXh0LnByb3RvdHlwZTtcblxuICAgICAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGZhY3RvcnkodGhpcy5wcm9wcyk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gV2l0aENvbnRleHQ7XG4gICAgfShDb21wb25lbnQpO1xuXG4gICAgV2l0aENvbnRleHQuY2hpbGRDb250ZXh0VHlwZXMgPSBjaGlsZENvbnRleHRUeXBlcztcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm4gc2V0RGlzcGxheU5hbWUod3JhcERpc3BsYXlOYW1lKEJhc2VDb21wb25lbnQsICd3aXRoQ29udGV4dCcpKShXaXRoQ29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFdpdGhDb250ZXh0O1xuICB9O1xufTtcblxudmFyIGdldENvbnRleHQgPSBmdW5jdGlvbiBnZXRDb250ZXh0KGNvbnRleHRUeXBlcykge1xuICByZXR1cm4gZnVuY3Rpb24gKEJhc2VDb21wb25lbnQpIHtcbiAgICB2YXIgZmFjdG9yeSA9IGNyZWF0ZUZhY3RvcnkoQmFzZUNvbXBvbmVudCk7XG5cbiAgICB2YXIgR2V0Q29udGV4dCA9IGZ1bmN0aW9uIEdldENvbnRleHQob3duZXJQcm9wcywgY29udGV4dCkge1xuICAgICAgcmV0dXJuIGZhY3RvcnkoX2V4dGVuZHMoe30sIG93bmVyUHJvcHMsIGNvbnRleHQpKTtcbiAgICB9O1xuXG4gICAgR2V0Q29udGV4dC5jb250ZXh0VHlwZXMgPSBjb250ZXh0VHlwZXM7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuIHNldERpc3BsYXlOYW1lKHdyYXBEaXNwbGF5TmFtZShCYXNlQ29tcG9uZW50LCAnZ2V0Q29udGV4dCcpKShHZXRDb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gR2V0Q29udGV4dDtcbiAgfTtcbn07XG5cbnZhciBsaWZlY3ljbGUgPSBmdW5jdGlvbiBsaWZlY3ljbGUoc3BlYykge1xuICByZXR1cm4gZnVuY3Rpb24gKEJhc2VDb21wb25lbnQpIHtcbiAgICB2YXIgZmFjdG9yeSA9IGNyZWF0ZUZhY3RvcnkoQmFzZUNvbXBvbmVudCk7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBzcGVjLmhhc093blByb3BlcnR5KCdyZW5kZXInKSkge1xuICAgICAgY29uc29sZS5lcnJvcignbGlmZWN5Y2xlKCkgZG9lcyBub3Qgc3VwcG9ydCB0aGUgcmVuZGVyIG1ldGhvZDsgaXRzIGJlaGF2aW9yIGlzIHRvICcgKyAncGFzcyBhbGwgcHJvcHMgYW5kIHN0YXRlIHRvIHRoZSBiYXNlIGNvbXBvbmVudC4nKTtcbiAgICB9XG5cbiAgICB2YXIgTGlmZWN5Y2xlID1cbiAgICAvKiNfX1BVUkVfXyovXG4gICAgZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICAgIF9pbmhlcml0c0xvb3NlKExpZmVjeWNsZSwgX0NvbXBvbmVudCk7XG5cbiAgICAgIGZ1bmN0aW9uIExpZmVjeWNsZSgpIHtcbiAgICAgICAgcmV0dXJuIF9Db21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgfVxuXG4gICAgICB2YXIgX3Byb3RvID0gTGlmZWN5Y2xlLnByb3RvdHlwZTtcblxuICAgICAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGZhY3RvcnkoX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHRoaXMuc3RhdGUpKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBMaWZlY3ljbGU7XG4gICAgfShDb21wb25lbnQpO1xuXG4gICAgT2JqZWN0LmtleXMoc3BlYykuZm9yRWFjaChmdW5jdGlvbiAoaG9vaykge1xuICAgICAgcmV0dXJuIExpZmVjeWNsZS5wcm90b3R5cGVbaG9va10gPSBzcGVjW2hvb2tdO1xuICAgIH0pO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVybiBzZXREaXNwbGF5TmFtZSh3cmFwRGlzcGxheU5hbWUoQmFzZUNvbXBvbmVudCwgJ2xpZmVjeWNsZScpKShMaWZlY3ljbGUpO1xuICAgIH1cblxuICAgIHJldHVybiBMaWZlY3ljbGU7XG4gIH07XG59O1xuXG52YXIgaXNDbGFzc0NvbXBvbmVudCA9IGZ1bmN0aW9uIGlzQ2xhc3NDb21wb25lbnQoQ29tcG9uZW50JCQxKSB7XG4gIHJldHVybiBCb29sZWFuKENvbXBvbmVudCQkMSAmJiBDb21wb25lbnQkJDEucHJvdG90eXBlICYmIHR5cGVvZiBDb21wb25lbnQkJDEucHJvdG90eXBlLnJlbmRlciA9PT0gJ2Z1bmN0aW9uJyk7XG59O1xuXG52YXIgdG9DbGFzcyA9IGZ1bmN0aW9uIHRvQ2xhc3MoYmFzZUNvbXBvbmVudCkge1xuICB2YXIgX2NsYXNzLCBfdGVtcDtcblxuICByZXR1cm4gaXNDbGFzc0NvbXBvbmVudChiYXNlQ29tcG9uZW50KSA/IGJhc2VDb21wb25lbnQgOiAoX3RlbXAgPSBfY2xhc3MgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzTG9vc2UoVG9DbGFzcywgX0NvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBUb0NsYXNzKCkge1xuICAgICAgcmV0dXJuIF9Db21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cblxuICAgIHZhciBfcHJvdG8gPSBUb0NsYXNzLnByb3RvdHlwZTtcblxuICAgIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICBpZiAodHlwZW9mIGJhc2VDb21wb25lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KGJhc2VDb21wb25lbnQsIHRoaXMucHJvcHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYmFzZUNvbXBvbmVudCh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQpO1xuICAgIH07XG5cbiAgICByZXR1cm4gVG9DbGFzcztcbiAgfShDb21wb25lbnQpLCBfY2xhc3MuZGlzcGxheU5hbWUgPSBnZXREaXNwbGF5TmFtZShiYXNlQ29tcG9uZW50KSwgX2NsYXNzLnByb3BUeXBlcyA9IGJhc2VDb21wb25lbnQucHJvcFR5cGVzLCBfY2xhc3MuY29udGV4dFR5cGVzID0gYmFzZUNvbXBvbmVudC5jb250ZXh0VHlwZXMsIF9jbGFzcy5kZWZhdWx0UHJvcHMgPSBiYXNlQ29tcG9uZW50LmRlZmF1bHRQcm9wcywgX3RlbXApO1xufTtcblxuZnVuY3Rpb24gdG9SZW5kZXJQcm9wcyhob2MpIHtcbiAgdmFyIFJlbmRlclByb3BzQ29tcG9uZW50ID0gZnVuY3Rpb24gUmVuZGVyUHJvcHNDb21wb25lbnQocHJvcHMpIHtcbiAgICByZXR1cm4gcHJvcHMuY2hpbGRyZW4ocHJvcHMpO1xuICB9O1xuXG4gIHJldHVybiBob2MoUmVuZGVyUHJvcHNDb21wb25lbnQpO1xufVxuXG52YXIgZnJvbVJlbmRlclByb3BzID0gZnVuY3Rpb24gZnJvbVJlbmRlclByb3BzKFJlbmRlclByb3BzQ29tcG9uZW50LCBwcm9wc01hcHBlciwgcmVuZGVyUHJvcE5hbWUpIHtcbiAgaWYgKHJlbmRlclByb3BOYW1lID09PSB2b2lkIDApIHtcbiAgICByZW5kZXJQcm9wTmFtZSA9ICdjaGlsZHJlbic7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKEJhc2VDb21wb25lbnQpIHtcbiAgICB2YXIgYmFzZUZhY3RvcnkgPSBSZWFjdC5jcmVhdGVGYWN0b3J5KEJhc2VDb21wb25lbnQpO1xuICAgIHZhciByZW5kZXJQcm9wc0ZhY3RvcnkgPSBSZWFjdC5jcmVhdGVGYWN0b3J5KFJlbmRlclByb3BzQ29tcG9uZW50KTtcblxuICAgIHZhciBGcm9tUmVuZGVyUHJvcHMgPSBmdW5jdGlvbiBGcm9tUmVuZGVyUHJvcHMob3duZXJQcm9wcykge1xuICAgICAgdmFyIF9yZW5kZXJQcm9wc0ZhY3Rvcnk7XG5cbiAgICAgIHJldHVybiByZW5kZXJQcm9wc0ZhY3RvcnkoKF9yZW5kZXJQcm9wc0ZhY3RvcnkgPSB7fSwgX3JlbmRlclByb3BzRmFjdG9yeVtyZW5kZXJQcm9wTmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBiYXNlRmFjdG9yeShfZXh0ZW5kcyh7fSwgb3duZXJQcm9wcywgcHJvcHNNYXBwZXIuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpKSk7XG4gICAgICB9LCBfcmVuZGVyUHJvcHNGYWN0b3J5KSk7XG4gICAgfTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm4gc2V0RGlzcGxheU5hbWUod3JhcERpc3BsYXlOYW1lKEJhc2VDb21wb25lbnQsICdmcm9tUmVuZGVyUHJvcHMnKSkoRnJvbVJlbmRlclByb3BzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gRnJvbVJlbmRlclByb3BzO1xuICB9O1xufTtcblxudmFyIHNldFByb3BUeXBlcyA9IGZ1bmN0aW9uIHNldFByb3BUeXBlcyhwcm9wVHlwZXMpIHtcbiAgcmV0dXJuIHNldFN0YXRpYygncHJvcFR5cGVzJywgcHJvcFR5cGVzKTtcbn07XG5cbnZhciBjb21wb3NlID0gZnVuY3Rpb24gY29tcG9zZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZ1bmNzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGZ1bmNzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmNzLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYShiLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKSk7XG4gICAgfTtcbiAgfSwgZnVuY3Rpb24gKGFyZykge1xuICAgIHJldHVybiBhcmc7XG4gIH0pO1xufTtcblxudmFyIGNyZWF0ZVNpbmsgPSBmdW5jdGlvbiBjcmVhdGVTaW5rKGNhbGxiYWNrKSB7XG4gIHZhciBTaW5rID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgIF9pbmhlcml0c0xvb3NlKFNpbmssIF9Db21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gU2luaygpIHtcbiAgICAgIHZhciBfdGhpcztcblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIF90aGlzID0gX0NvbXBvbmVudC5jYWxsLmFwcGx5KF9Db21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpIHx8IHRoaXM7XG4gICAgICBfdGhpcy5zdGF0ZSA9IHt9O1xuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIFNpbmsuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wcykge1xuICAgICAgY2FsbGJhY2sobmV4dFByb3BzKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICB2YXIgX3Byb3RvID0gU2luay5wcm90b3R5cGU7XG5cbiAgICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIHJldHVybiBTaW5rO1xuICB9KENvbXBvbmVudCk7XG5cbiAgcG9seWZpbGwoU2luayk7XG4gIHJldHVybiBTaW5rO1xufTtcblxudmFyIGNvbXBvbmVudEZyb21Qcm9wID0gZnVuY3Rpb24gY29tcG9uZW50RnJvbVByb3AocHJvcE5hbWUpIHtcbiAgdmFyIENvbXBvbmVudCQkMSA9IGZ1bmN0aW9uIENvbXBvbmVudCQkMShwcm9wcykge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KHByb3BzW3Byb3BOYW1lXSwgb21pdChwcm9wcywgW3Byb3BOYW1lXSkpO1xuICB9O1xuXG4gIENvbXBvbmVudCQkMS5kaXNwbGF5TmFtZSA9IFwiY29tcG9uZW50RnJvbVByb3AoXCIgKyBwcm9wTmFtZSArIFwiKVwiO1xuICByZXR1cm4gQ29tcG9uZW50JCQxO1xufTtcblxudmFyIG5lc3QgPSBmdW5jdGlvbiBuZXN0KCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgQ29tcG9uZW50cyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBDb21wb25lbnRzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIGZhY3RvcmllcyA9IENvbXBvbmVudHMubWFwKGNyZWF0ZUZhY3RvcnkpO1xuXG4gIHZhciBOZXN0ID0gZnVuY3Rpb24gTmVzdChfcmVmKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBbXCJjaGlsZHJlblwiXSk7XG5cbiAgICByZXR1cm4gZmFjdG9yaWVzLnJlZHVjZVJpZ2h0KGZ1bmN0aW9uIChjaGlsZCwgZmFjdG9yeSkge1xuICAgICAgcmV0dXJuIGZhY3RvcnkocHJvcHMsIGNoaWxkKTtcbiAgICB9LCBjaGlsZHJlbik7XG4gIH07XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB2YXIgZGlzcGxheU5hbWVzID0gQ29tcG9uZW50cy5tYXAoZ2V0RGlzcGxheU5hbWUpO1xuICAgIE5lc3QuZGlzcGxheU5hbWUgPSBcIm5lc3QoXCIgKyBkaXNwbGF5TmFtZXMuam9pbignLCAnKSArIFwiKVwiO1xuICB9XG5cbiAgcmV0dXJuIE5lc3Q7XG59O1xuXG52YXIgaG9pc3RTdGF0aWNzID0gZnVuY3Rpb24gaG9pc3RTdGF0aWNzKGhpZ2hlck9yZGVyQ29tcG9uZW50LCBibGFja2xpc3QpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChCYXNlQ29tcG9uZW50KSB7XG4gICAgdmFyIE5ld0NvbXBvbmVudCA9IGhpZ2hlck9yZGVyQ29tcG9uZW50KEJhc2VDb21wb25lbnQpO1xuICAgIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKE5ld0NvbXBvbmVudCwgQmFzZUNvbXBvbmVudCwgYmxhY2tsaXN0KTtcbiAgICByZXR1cm4gTmV3Q29tcG9uZW50O1xuICB9O1xufTtcblxudmFyIF9jb25maWcgPSB7XG4gIGZyb21FU09ic2VydmFibGU6IG51bGwsXG4gIHRvRVNPYnNlcnZhYmxlOiBudWxsXG59O1xuXG52YXIgY29uZmlndXJlT2JzZXJ2YWJsZSA9IGZ1bmN0aW9uIGNvbmZpZ3VyZU9ic2VydmFibGUoYykge1xuICBfY29uZmlnID0gYztcbn07XG5cbnZhciBjb25maWcgPSB7XG4gIGZyb21FU09ic2VydmFibGU6IGZ1bmN0aW9uIGZyb21FU09ic2VydmFibGUob2JzZXJ2YWJsZSkge1xuICAgIHJldHVybiB0eXBlb2YgX2NvbmZpZy5mcm9tRVNPYnNlcnZhYmxlID09PSAnZnVuY3Rpb24nID8gX2NvbmZpZy5mcm9tRVNPYnNlcnZhYmxlKG9ic2VydmFibGUpIDogb2JzZXJ2YWJsZTtcbiAgfSxcbiAgdG9FU09ic2VydmFibGU6IGZ1bmN0aW9uIHRvRVNPYnNlcnZhYmxlKHN0cmVhbSkge1xuICAgIHJldHVybiB0eXBlb2YgX2NvbmZpZy50b0VTT2JzZXJ2YWJsZSA9PT0gJ2Z1bmN0aW9uJyA/IF9jb25maWcudG9FU09ic2VydmFibGUoc3RyZWFtKSA6IHN0cmVhbTtcbiAgfVxufTtcblxudmFyIGNvbXBvbmVudEZyb21TdHJlYW1XaXRoQ29uZmlnID0gZnVuY3Rpb24gY29tcG9uZW50RnJvbVN0cmVhbVdpdGhDb25maWcoY29uZmlnJCQxKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocHJvcHNUb1Zkb20pIHtcbiAgICByZXR1cm4gKFxuICAgICAgLyojX19QVVJFX18qL1xuICAgICAgZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICAgICAgX2luaGVyaXRzTG9vc2UoQ29tcG9uZW50RnJvbVN0cmVhbSwgX0NvbXBvbmVudCk7XG5cbiAgICAgICAgZnVuY3Rpb24gQ29tcG9uZW50RnJvbVN0cmVhbSgpIHtcbiAgICAgICAgICB2YXIgX2NvbmZpZyRmcm9tRVNPYnNlcnZhO1xuXG4gICAgICAgICAgdmFyIF90aGlzO1xuXG4gICAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF90aGlzID0gX0NvbXBvbmVudC5jYWxsLmFwcGx5KF9Db21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpIHx8IHRoaXM7XG4gICAgICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB2ZG9tOiBudWxsXG4gICAgICAgICAgfTtcbiAgICAgICAgICBfdGhpcy5wcm9wc0VtaXR0ZXIgPSBjcmVhdGVDaGFuZ2VFbWl0dGVyKCk7XG4gICAgICAgICAgX3RoaXMucHJvcHMkID0gY29uZmlnJCQxLmZyb21FU09ic2VydmFibGUoKF9jb25maWckZnJvbUVTT2JzZXJ2YSA9IHtcbiAgICAgICAgICAgIHN1YnNjcmliZTogZnVuY3Rpb24gc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgICAgICAgICAgIHZhciB1bnN1YnNjcmliZSA9IF90aGlzLnByb3BzRW1pdHRlci5saXN0ZW4oZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzKSB7XG4gICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHByb3BzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdW5zdWJzY3JpYmU6IHVuc3Vic2NyaWJlXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgX2NvbmZpZyRmcm9tRVNPYnNlcnZhWyQkb2JzZXJ2YWJsZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICB9LCBfY29uZmlnJGZyb21FU09ic2VydmEpKTtcbiAgICAgICAgICBfdGhpcy52ZG9tJCA9IGNvbmZpZyQkMS50b0VTT2JzZXJ2YWJsZShwcm9wc1RvVmRvbShfdGhpcy5wcm9wcyQpKTtcbiAgICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgX3Byb3RvID0gQ29tcG9uZW50RnJvbVN0cmVhbS5wcm90b3R5cGU7XG5cbiAgICAgICAgX3Byb3RvLmNvbXBvbmVudFdpbGxNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgIC8vIFN1YnNjcmliZSB0byBjaGlsZCBwcm9wIGNoYW5nZXMgc28gd2Uga25vdyB3aGVuIHRvIHJlLXJlbmRlclxuICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy52ZG9tJC5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24gbmV4dCh2ZG9tKSB7XG4gICAgICAgICAgICAgIF90aGlzMi5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgdmRvbTogdmRvbVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLnByb3BzRW1pdHRlci5lbWl0KHRoaXMucHJvcHMpO1xuICAgICAgICB9O1xuXG4gICAgICAgIF9wcm90by5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgICAvLyBSZWNlaXZlIG5ldyBwcm9wcyBmcm9tIHRoZSBvd25lclxuICAgICAgICAgIHRoaXMucHJvcHNFbWl0dGVyLmVtaXQobmV4dFByb3BzKTtcbiAgICAgICAgfTtcblxuICAgICAgICBfcHJvdG8uc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAgICAgcmV0dXJuIG5leHRTdGF0ZS52ZG9tICE9PSB0aGlzLnN0YXRlLnZkb207XG4gICAgICAgIH07XG5cbiAgICAgICAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgICAgLy8gQ2FsbCB3aXRob3V0IGFyZ3VtZW50cyB0byBjb21wbGV0ZSBzdHJlYW1cbiAgICAgICAgICB0aGlzLnByb3BzRW1pdHRlci5lbWl0KCk7IC8vIENsZWFuLXVwIHN1YnNjcmlwdGlvbiBiZWZvcmUgdW4tbW91bnRpbmdcblxuICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS52ZG9tO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBDb21wb25lbnRGcm9tU3RyZWFtO1xuICAgICAgfShDb21wb25lbnQpXG4gICAgKTtcbiAgfTtcbn07XG5cbnZhciBjb21wb25lbnRGcm9tU3RyZWFtID0gZnVuY3Rpb24gY29tcG9uZW50RnJvbVN0cmVhbShwcm9wc1RvVmRvbSkge1xuICByZXR1cm4gY29tcG9uZW50RnJvbVN0cmVhbVdpdGhDb25maWcoY29uZmlnKShwcm9wc1RvVmRvbSk7XG59O1xuXG52YXIgaWRlbnRpdHkkMSA9IGZ1bmN0aW9uIGlkZW50aXR5KHQpIHtcbiAgcmV0dXJuIHQ7XG59O1xuXG52YXIgbWFwUHJvcHNTdHJlYW1XaXRoQ29uZmlnID0gZnVuY3Rpb24gbWFwUHJvcHNTdHJlYW1XaXRoQ29uZmlnKGNvbmZpZyQkMSkge1xuICB2YXIgY29tcG9uZW50RnJvbVN0cmVhbSQkMSA9IGNvbXBvbmVudEZyb21TdHJlYW1XaXRoQ29uZmlnKHtcbiAgICBmcm9tRVNPYnNlcnZhYmxlOiBpZGVudGl0eSQxLFxuICAgIHRvRVNPYnNlcnZhYmxlOiBpZGVudGl0eSQxXG4gIH0pO1xuICByZXR1cm4gZnVuY3Rpb24gKHRyYW5zZm9ybSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoQmFzZUNvbXBvbmVudCkge1xuICAgICAgdmFyIGZhY3RvcnkgPSBjcmVhdGVGYWN0b3J5KEJhc2VDb21wb25lbnQpO1xuICAgICAgdmFyIGZyb21FU09ic2VydmFibGUgPSBjb25maWckJDEuZnJvbUVTT2JzZXJ2YWJsZSxcbiAgICAgICAgICB0b0VTT2JzZXJ2YWJsZSA9IGNvbmZpZyQkMS50b0VTT2JzZXJ2YWJsZTtcbiAgICAgIHJldHVybiBjb21wb25lbnRGcm9tU3RyZWFtJCQxKGZ1bmN0aW9uIChwcm9wcyQpIHtcbiAgICAgICAgdmFyIF9yZWY7XG5cbiAgICAgICAgcmV0dXJuIF9yZWYgPSB7XG4gICAgICAgICAgc3Vic2NyaWJlOiBmdW5jdGlvbiBzdWJzY3JpYmUob2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHZhciBzdWJzY3JpcHRpb24gPSB0b0VTT2JzZXJ2YWJsZSh0cmFuc2Zvcm0oZnJvbUVTT2JzZXJ2YWJsZShwcm9wcyQpKSkuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24gbmV4dChjaGlsZFByb3BzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9ic2VydmVyLm5leHQoZmFjdG9yeShjaGlsZFByb3BzKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgdW5zdWJzY3JpYmU6IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIF9yZWZbJCRvYnNlcnZhYmxlXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSwgX3JlZjtcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG59O1xuXG52YXIgbWFwUHJvcHNTdHJlYW0gPSBmdW5jdGlvbiBtYXBQcm9wc1N0cmVhbSh0cmFuc2Zvcm0pIHtcbiAgdmFyIGhvYyA9IG1hcFByb3BzU3RyZWFtV2l0aENvbmZpZyhjb25maWcpKHRyYW5zZm9ybSk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKEJhc2VDb21wb25lbnQpIHtcbiAgICAgIHJldHVybiBzZXREaXNwbGF5TmFtZSh3cmFwRGlzcGxheU5hbWUoQmFzZUNvbXBvbmVudCwgJ21hcFByb3BzU3RyZWFtJykpKGhvYyhCYXNlQ29tcG9uZW50KSk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBob2M7XG59O1xuXG52YXIgY3JlYXRlRXZlbnRIYW5kbGVyV2l0aENvbmZpZyA9IGZ1bmN0aW9uIGNyZWF0ZUV2ZW50SGFuZGxlcldpdGhDb25maWcoY29uZmlnJCQxKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9jb25maWckZnJvbUVTT2JzZXJ2YTtcblxuICAgIHZhciBlbWl0dGVyID0gY3JlYXRlQ2hhbmdlRW1pdHRlcigpO1xuICAgIHZhciBzdHJlYW0gPSBjb25maWckJDEuZnJvbUVTT2JzZXJ2YWJsZSgoX2NvbmZpZyRmcm9tRVNPYnNlcnZhID0ge1xuICAgICAgc3Vic2NyaWJlOiBmdW5jdGlvbiBzdWJzY3JpYmUob2JzZXJ2ZXIpIHtcbiAgICAgICAgdmFyIHVuc3Vic2NyaWJlID0gZW1pdHRlci5saXN0ZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIG9ic2VydmVyLm5leHQodmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB1bnN1YnNjcmliZTogdW5zdWJzY3JpYmVcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9LCBfY29uZmlnJGZyb21FU09ic2VydmFbJCRvYnNlcnZhYmxlXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sIF9jb25maWckZnJvbUVTT2JzZXJ2YSkpO1xuICAgIHJldHVybiB7XG4gICAgICBoYW5kbGVyOiBlbWl0dGVyLmVtaXQsXG4gICAgICBzdHJlYW06IHN0cmVhbVxuICAgIH07XG4gIH07XG59O1xudmFyIGNyZWF0ZUV2ZW50SGFuZGxlciA9IGNyZWF0ZUV2ZW50SGFuZGxlcldpdGhDb25maWcoY29uZmlnKTtcblxuLy8gSGlnaGVyLW9yZGVyIGNvbXBvbmVudCBoZWxwZXJzXG5cbmV4cG9ydCB7IG1hcFByb3BzLCB3aXRoUHJvcHMsIHdpdGhQcm9wc09uQ2hhbmdlLCB3aXRoSGFuZGxlcnMsIGRlZmF1bHRQcm9wcywgcmVuYW1lUHJvcCwgcmVuYW1lUHJvcHMsIGZsYXR0ZW5Qcm9wLCB3aXRoU3RhdGUsIHdpdGhTdGF0ZUhhbmRsZXJzLCB3aXRoUmVkdWNlciwgYnJhbmNoLCByZW5kZXJDb21wb25lbnQsIHJlbmRlck5vdGhpbmcsIHNob3VsZFVwZGF0ZSwgcHVyZSwgb25seVVwZGF0ZUZvcktleXMsIG9ubHlVcGRhdGVGb3JQcm9wVHlwZXMsIHdpdGhDb250ZXh0LCBnZXRDb250ZXh0LCBsaWZlY3ljbGUsIHRvQ2xhc3MsIHRvUmVuZGVyUHJvcHMsIGZyb21SZW5kZXJQcm9wcywgc2V0U3RhdGljLCBzZXRQcm9wVHlwZXMsIHNldERpc3BsYXlOYW1lLCBjb21wb3NlLCBnZXREaXNwbGF5TmFtZSwgd3JhcERpc3BsYXlOYW1lLCBzaGFsbG93RXF1YWwsIGlzQ2xhc3NDb21wb25lbnQsIGNyZWF0ZVNpbmssIGNvbXBvbmVudEZyb21Qcm9wLCBuZXN0LCBob2lzdFN0YXRpY3MsIGNvbXBvbmVudEZyb21TdHJlYW0sIGNvbXBvbmVudEZyb21TdHJlYW1XaXRoQ29uZmlnLCBtYXBQcm9wc1N0cmVhbSwgbWFwUHJvcHNTdHJlYW1XaXRoQ29uZmlnLCBjcmVhdGVFdmVudEhhbmRsZXIsIGNyZWF0ZUV2ZW50SGFuZGxlcldpdGhDb25maWcsIGNvbmZpZ3VyZU9ic2VydmFibGUgYXMgc2V0T2JzZXJ2YWJsZUNvbmZpZyB9O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENvcHlyaWdodCAyMDE1LCBZYWhvbyEgSW5jLlxuICogQ29weXJpZ2h0cyBsaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBMaWNlbnNlLiBTZWUgdGhlIGFjY29tcGFueWluZyBMSUNFTlNFIGZpbGUgZm9yIHRlcm1zLlxuICovXG52YXIgUkVBQ1RfU1RBVElDUyA9IHtcbiAgICBjaGlsZENvbnRleHRUeXBlczogdHJ1ZSxcbiAgICBjb250ZXh0VHlwZXM6IHRydWUsXG4gICAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICAgIGRpc3BsYXlOYW1lOiB0cnVlLFxuICAgIGdldERlZmF1bHRQcm9wczogdHJ1ZSxcbiAgICBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM6IHRydWUsXG4gICAgbWl4aW5zOiB0cnVlLFxuICAgIHByb3BUeXBlczogdHJ1ZSxcbiAgICB0eXBlOiB0cnVlXG59O1xuXG52YXIgS05PV05fU1RBVElDUyA9IHtcbiAgICBuYW1lOiB0cnVlLFxuICAgIGxlbmd0aDogdHJ1ZSxcbiAgICBwcm90b3R5cGU6IHRydWUsXG4gICAgY2FsbGVyOiB0cnVlLFxuICAgIGNhbGxlZTogdHJ1ZSxcbiAgICBhcmd1bWVudHM6IHRydWUsXG4gICAgYXJpdHk6IHRydWVcbn07XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xudmFyIG9iamVjdFByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mICYmIGdldFByb3RvdHlwZU9mKE9iamVjdCk7XG5cbmZ1bmN0aW9uIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgc291cmNlQ29tcG9uZW50LCBibGFja2xpc3QpIHtcbiAgICBpZiAodHlwZW9mIHNvdXJjZUNvbXBvbmVudCAhPT0gJ3N0cmluZycpIHsgLy8gZG9uJ3QgaG9pc3Qgb3ZlciBzdHJpbmcgKGh0bWwpIGNvbXBvbmVudHNcblxuICAgICAgICBpZiAob2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICAgICAgICB2YXIgaW5oZXJpdGVkQ29tcG9uZW50ID0gZ2V0UHJvdG90eXBlT2Yoc291cmNlQ29tcG9uZW50KTtcbiAgICAgICAgICAgIGlmIChpbmhlcml0ZWRDb21wb25lbnQgJiYgaW5oZXJpdGVkQ29tcG9uZW50ICE9PSBvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgICAgICAgICAgICBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIGluaGVyaXRlZENvbXBvbmVudCwgYmxhY2tsaXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgICAgIGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgICAgICAgIGtleXMgPSBrZXlzLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlQ29tcG9uZW50KSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgICAgaWYgKCFSRUFDVF9TVEFUSUNTW2tleV0gJiYgIUtOT1dOX1NUQVRJQ1Nba2V5XSAmJiAoIWJsYWNrbGlzdCB8fCAhYmxhY2tsaXN0W2tleV0pKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlQ29tcG9uZW50LCBrZXkpO1xuICAgICAgICAgICAgICAgIHRyeSB7IC8vIEF2b2lkIGZhaWx1cmVzIGZyb20gcmVhZC1vbmx5IHByb3BlcnRpZXNcbiAgICAgICAgICAgICAgICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0Q29tcG9uZW50LCBrZXksIGRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0Q29tcG9uZW50O1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRDb21wb25lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaG9pc3ROb25SZWFjdFN0YXRpY3M7XG4iXSwic291cmNlUm9vdCI6IiJ9