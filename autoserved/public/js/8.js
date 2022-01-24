(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/core-js/modules/es.string.includes.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.includes.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ "./node_modules/core-js/internals/not-a-regexp.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ "./node_modules/core-js/internals/correct-is-regexp-logic.js");

// `String.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~String(requireObjectCoercible(this))
      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.description.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.description.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.github.io/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "./node_modules/decode-uri-component/index.js":
/*!****************************************************!*\
  !*** ./node_modules/decode-uri-component/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp(token, 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
	try {
		// Try to decode the entire string first
		return decodeURIComponent(components.join(''));
	} catch (err) {
		// Do nothing
	}

	if (components.length === 1) {
		return components;
	}

	split = split || 1;

	// Split the array in 2 parts
	var left = components.slice(0, split);
	var right = components.slice(split);

	return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
	try {
		return decodeURIComponent(input);
	} catch (err) {
		var tokens = input.match(singleMatcher);

		for (var i = 1; i < tokens.length; i++) {
			input = decodeComponents(tokens, i).join('');

			tokens = input.match(singleMatcher);
		}

		return input;
	}
}

function customDecodeURIComponent(input) {
	// Keep track of all the replacements and prefill the map with the `BOM`
	var replaceMap = {
		'%FE%FF': '\uFFFD\uFFFD',
		'%FF%FE': '\uFFFD\uFFFD'
	};

	var match = multiMatcher.exec(input);
	while (match) {
		try {
			// Decode as big chunks as possible
			replaceMap[match[0]] = decodeURIComponent(match[0]);
		} catch (err) {
			var result = decode(match[0]);

			if (result !== match[0]) {
				replaceMap[match[0]] = result;
			}
		}

		match = multiMatcher.exec(input);
	}

	// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
	replaceMap['%C2'] = '\uFFFD';

	var entries = Object.keys(replaceMap);

	for (var i = 0; i < entries.length; i++) {
		// Replace all decoded components
		var key = entries[i];
		input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
	}

	return input;
}

module.exports = function (encodedURI) {
	if (typeof encodedURI !== 'string') {
		throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
	}

	try {
		encodedURI = encodedURI.replace(/\+/g, ' ');

		// Try the built in decoder first
		return decodeURIComponent(encodedURI);
	} catch (err) {
		// Fallback to a more advanced decoder
		return customDecodeURIComponent(encodedURI);
	}
};


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/index.js ***!
  \*******************************************************/
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
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    arguments: true,
    arity: true
};

var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
        var keys = Object.getOwnPropertyNames(sourceComponent);

        /* istanbul ignore else */
        if (isGetOwnPropertySymbolsAvailable) {
            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
                try {
                    targetComponent[keys[i]] = sourceComponent[keys[i]];
                } catch (error) {

                }
            }
        }
    }

    return targetComponent;
};


/***/ }),

/***/ "./node_modules/is-plain-object/index.js":
/*!***********************************************!*\
  !*** ./node_modules/is-plain-object/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var isObject = __webpack_require__(/*! isobject */ "./node_modules/isobject/index.js");

function isObjectObject(o) {
  return isObject(o) === true
    && Object.prototype.toString.call(o) === '[object Object]';
}

module.exports = function isPlainObject(o) {
  var ctor,prot;

  if (isObjectObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (typeof ctor !== 'function') return false;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObjectObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
};


/***/ }),

/***/ "./node_modules/isobject/index.js":
/*!****************************************!*\
  !*** ./node_modules/isobject/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
};


/***/ }),

/***/ "./node_modules/little-loader/lib/little-loader.js":
/*!*********************************************************!*\
  !*** ./node_modules/little-loader/lib/little-loader.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Script loading is difficult thanks to IE. We need callbacks to fire
 * immediately following the script's execution, with no other scripts
 * running in between. If other scripts on the page are able to run
 * between our script and its callback, bad things can happen, such as
 * `jQuery.noConflict` not being called in time, resulting in plugins
 * latching onto our version of jQuery, etc.
 *
 * For IE<10 we use a relatively well-documented "preloading" strategy,
 * which ensures that the script is ready to execute *before* appending
 * it to the DOM. That way when it is finally appended, it is
 * executed immediately.
 *
 * References:
 * - http://www.html5rocks.com/en/tutorials/speed/script-loading/
 * - http://blog.getify.com/ie11-please-bring-real-script-preloading-back/
 * - https://github.com/jrburke/requirejs/issues/526
 * - https://connect.microsoft.com/IE/feedback/details/729164/
 *           ie10-dynamic-script-element-fires-loaded-readystate-prematurely
 */
(function () {

  // Global state.
  var pendingScripts = {};
  var scriptCounter = 0;

  /**
   * Insert script into the DOM
   *
   * @param {Object} script Script DOM object
   * @returns {void}
   */
  var _addScript = function (script) {
    // Get the first script element, we're just going to use it
    // as a reference for where to insert ours. Do NOT try to do
    // this just once at the top and then re-use the same script
    // as a reference later. Some weird loaders *remove* script
    // elements after the browser has executed their contents,
    // so the same reference might not have a parentNode later.
    var firstScript = document.getElementsByTagName("script")[0];

    // Append the script to the DOM, triggering execution.
    firstScript.parentNode.insertBefore(script, firstScript);
  };

  /**
   * Load Script.
   *
   * @param {String}    src       URI of script
   * @param {Function}  callback  (Optional) Called on script load completion
   * @param {Object}    context   (Optional) Callback context (`this`)
   * @returns {void}
   */
  var _lload = function (src, callback, context) {
    /*eslint max-statements: [2, 25]*/
    var script = document.createElement("script");
    var done = false;
    var err;
    var _cleanup; // _must_ be set below.

    /**
     * Final handler for error or completion.
     *
     * **Note**: Will only be called _once_.
     *
     * @returns {void}
     */
    var _finish = function () {
      // Only call once.
      if (done) { return; }
      done = true;

      // Internal cleanup.
      _cleanup();

      // Callback.
      if (callback) {
        callback.call(context, err);
      }
    };

    /**
     * Error handler
     *
     * @returns {void}
     */
    var _error = function () {
      err = new Error(src || "EMPTY");
      _finish();
    };

    if (script.readyState && !("async" in script)) {
      /*eslint-disable consistent-return*/

      // This section is only for IE<10. Some other old browsers may
      // satisfy the above condition and enter this branch, but we don't
      // support those browsers anyway.

      var id = scriptCounter++;
      var isReady = { loaded: true, complete: true };
      var inserted = false;

      // Clear out listeners, state.
      _cleanup = function () {
        script.onreadystatechange = script.onerror = null;
        pendingScripts[id] = void 0;
      };

      // Attach the handler before setting src, otherwise we might
      // miss events (consider that IE could fire them synchronously
      // upon setting src, for example).
      script.onreadystatechange = function () {
        var firstState = script.readyState;

        // Protect against any errors from state change randomness.
        if (err) { return; }

        if (!inserted && isReady[firstState]) {
          inserted = true;

          // Append to DOM.
          _addScript(script);
        }

        // --------------------------------------------------------------------
        //                       GLORIOUS IE8 HACKAGE!!!
        // --------------------------------------------------------------------
        //
        // Oh IE8, how you disappoint. IE8 won't call `script.onerror`, so
        // we have to resort to drastic measures.
        // See, e.g. http://www.quirksmode.org/dom/events/error.html#t02
        //
        // As with all things development, there's a Stack Overflow comment that
        // asserts the following combinations of state changes in IE8 indicate a
        // script load error. And crazily, it seems to work!
        //
        // http://stackoverflow.com/a/18840568/741892
        //
        // The `script.readyState` transitions we're interested are:
        //
        // * If state starts as `loaded`
        // * Call `script.children`, which _should_ change state to `complete`
        // * If state is now `loading`, then **we have a load error**
        //
        // For the reader's amusement, here is HeadJS's catalog of various
        // `readyState` transitions in normal operation for IE:
        // https://github.com/headjs/headjs/blob/master/src/2.0.0/load.js#L379-L419
        if (firstState === "loaded") {
          // The act of accessing the property should change the script's
          // `readyState`.
          //
          // And, oh yeah, this hack is so hacky-ish we need the following
          // eslint disable...
          /*eslint-disable no-unused-expressions*/
          script.children;
          /*eslint-enable no-unused-expressions*/

          if (script.readyState === "loading") {
            // State transitions indicate we've hit the load error.
            //
            // **Note**: We are not intending to _return_ a value, just have
            // a shorter short-circuit code path here.
            return _error();
          }
        }

        // It's possible for readyState to be "complete" immediately
        // after we insert (and execute) the script in the branch
        // above. So check readyState again here and react without
        // waiting for another onreadystatechange.
        if (script.readyState === "complete") {
          _finish();
        }
      };

      // Onerror handler _may_ work here.
      script.onerror = _error;

      // Since we're not appending the script to the DOM yet, the
      // reference to our script element might get garbage collected
      // when this function ends, without onreadystatechange ever being
      // fired. This has been witnessed to happen. Adding it to
      // `pendingScripts` ensures this can't happen.
      pendingScripts[id] = script;

      // This triggers a request for the script, but its contents won't
      // be executed until we append it to the DOM.
      script.src = src;

      // In some cases, the readyState is already "loaded" immediately
      // after setting src. It's a lie! Don't append to the DOM until
      // the onreadystatechange event says so.

    } else {
      // This section is for modern browsers, including IE10+.

      // Clear out listeners.
      _cleanup = function () {
        script.onload = script.onerror = null;
      };

      script.onerror = _error;
      script.onload = _finish;
      script.async = true;
      script.charset = "utf-8";
      script.src = src;

      // Append to DOM.
      _addScript(script);
    }
  };

  // UMD wrapper.
  /*global define:false*/
  if (true) {
    // CommonJS
    module.exports = _lload;

  } else {}
}());


/***/ }),

/***/ "./node_modules/react-geocode/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/react-geocode/lib/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var regeneratorRuntime = __webpack_require__(/*! regenerator-runtime */ "./node_modules/react-geocode/node_modules/regenerator-runtime/runtime.js");function asyncGeneratorStep(e,r,n,t,o,a,c){try{var s=e[a](c),u=s.value}catch(e){return void n(e)}s.done?r(u):Promise.resolve(u).then(t,o)}function _asyncToGenerator(e){return function(){var r=this,n=arguments;return new Promise(function(t,o){var a=e.apply(r,n);function c(e){asyncGeneratorStep(a,t,o,c,s,"next",e)}function s(e){asyncGeneratorStep(a,t,o,c,s,"throw",e)}c(void 0)})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var DEBUG=!1,API_KEY=null,LANGUAGE="en",REGION=null,GOOGLE_API="https://maps.google.com/maps/api/geocode/json";function log(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];DEBUG&&(r?console.warn(e):console.log(e))}function handleUrl(e){return _handleUrl.apply(this,arguments)}function _handleUrl(){return(_handleUrl=_asyncToGenerator(regeneratorRuntime.mark(function e(r){var n,t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(r).catch(function(){return Promise.reject(new Error("Error fetching data"))});case 2:return n=e.sent,e.next=5,n.json().catch(function(){return log("Error parsing server response"),Promise.reject(new Error("Error parsing server response"))});case 5:if("OK"!==(t=e.sent).status){e.next=9;break}return log(t),e.abrupt("return",t);case 9:return log("".concat(t.error_message,".\nServer returned status code ").concat(t.status),!0),e.abrupt("return",Promise.reject(new Error("".concat(t.error_message,".\nServer returned status code ").concat(t.status))));case 11:case"end":return e.stop()}},e)}))).apply(this,arguments)}var _default={setApiKey:function(apiKey){API_KEY=apiKey},setLanguage:function(language){LANGUAGE=language},setRegion:function(region){REGION=region},enableDebug:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];DEBUG=e},fromLatLng:function(lat,lng,apiKey,language,region){return _asyncToGenerator(regeneratorRuntime.mark(function a(){var c,s;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(lat&&lng){a.next=3;break}return log("Provided coordinates are invalid",!0),a.abrupt("return",Promise.reject(new Error("Provided coordinates are invalid")));case 3:return c="".concat(lat,",").concat(lng),s="".concat(GOOGLE_API,"?latlng=").concat(encodeURIComponent(c)),(apiKey||API_KEY)&&(s+="&key=".concat(API_KEY=apiKey||API_KEY)),(language||LANGUAGE)&&(s+="&language=".concat(LANGUAGE=language||LANGUAGE)),(region||REGION)&&(REGION=region||REGION,s+="&region=".concat(encodeURIComponent(REGION))),a.abrupt("return",handleUrl(s));case 9:case"end":return a.stop()}},a)}))()},fromAddress:function(address,apiKey,language,region){return _asyncToGenerator(regeneratorRuntime.mark(function o(){var a;return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(address){o.next=3;break}return log("Provided address is invalid",!0),o.abrupt("return",Promise.reject(new Error("Provided address is invalid")));case 3:return a="".concat(GOOGLE_API,"?address=").concat(encodeURIComponent(address)),(apiKey||API_KEY)&&(a+="&key=".concat(API_KEY=apiKey||API_KEY)),(language||LANGUAGE)&&(a+="&language=".concat(LANGUAGE=language||LANGUAGE)),(region||REGION)&&(REGION=region||REGION,a+="&region=".concat(encodeURIComponent(REGION))),o.abrupt("return",handleUrl(a));case 8:case"end":return o.stop()}},o)}))()}};exports.default=_default;

/***/ }),

/***/ "./node_modules/react-geocode/node_modules/regenerator-runtime/runtime.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-geocode/node_modules/regenerator-runtime/runtime.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/react-google-map/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/react-google-map/lib/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(/*! react */ "./node_modules/react/index.js")):undefined}(this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function i(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(10),p=r(l),d=n(11),y=r(d),v={position:"relative",overflow:"hidden",height:"100%",width:"100%"},h=function(e){function t(){a(this,t);var e=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={map:null,markers:new Map},e}return s(t,e),f(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.coordinates,r=t.googleMaps,o=t.onLoaded,a=i(t,["coordinates","googleMaps","onLoaded"]),u=new r.Map(this.ref_map,c({},a));this.setState({map:u},function(){e.addNewMarkers(n)}),o&&o(r,u)}},{key:"componentWillReceiveProps",value:function(e){var t=this,n=e.coordinates.some(function(e){return!t.state.markers.has(t.getMarkerId(e))}),r=[].concat(o(this.state.markers.keys())).some(function(n){return!e.coordinates.some(function(e){return n===t.getMarkerId(e)})});r&&this.removeOldMarkers(e.coordinates),n&&this.addNewMarkers(e.coordinates)}},{key:"shouldComponentUpdate",value:function(e,t){return JSON.stringify(this.props.coordinates)!==JSON.stringify(e.coordinates)}},{key:"getMarkerId",value:function(e){return e.position.lat+"_"+e.position.lng}},{key:"removeOldMarkers",value:function(e){var t=this,n=this.state.markers,r=this.props.autoFitBounds;n.forEach(function(r,o){var i=e.some(function(e){return t.getMarkerId(e)===o});i||(r.setMap(null),n.delete(o))}),this.setState({markers:n}),r&&this.fitBounds()}},{key:"addNewMarkers",value:function(e){var t=this,n=this.state.markers,r=this.props.autoFitBounds;e.forEach(function(e){var r=t.getMarkerId(e);n.has(r)||n.set(r,t.addMarker(r,e))}),this.setState({markers:n}),r&&this.fitBounds()}},{key:"addMarker",value:function(e,t){var n=this.state.map,r=this.props.googleMaps,o=t.onLoaded,a=i(t,["onLoaded"]),u=new r.Marker(c({map:n},a));return o&&o(r,n,u),u}},{key:"fitBounds",value:function(){var e=this.state,t=e.map,n=e.markers,r=this.props,o=r.boundsOffset,i=r.googleMaps;if(t&&0!==n.size){var a=Array.from(n.values()).reduce(function(e,t){return e.extend(t.getPosition())},new i.LatLngBounds),u=a.getCenter();a.extend(new i.LatLng(u.lat()+o,u.lng()+o)).extend(new i.LatLng(u.lat()-o,u.lng()-o)),t.setCenter(u),t.fitBounds(a)}}},{key:"render",value:function(){var e=this;return y.default.createElement("div",{ref:function(t){return e.ref_map=t},style:v})}}]),t}(y.default.Component);h.propTypes={autoFitBounds:p.default.bool,boundsOffset:p.default.number,coordinates:p.default.arrayOf(p.default.shape({onLoaded:p.default.func})),googleMaps:p.default.object.isRequired,onLoaded:p.default.func},h.defaultProps={autoFitBounds:!1,boundsOffset:.002,coordinates:[],onLoaded:null},t.default=h},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(f===setTimeout)return setTimeout(e,0);if((f===n||!f)&&setTimeout)return f=setTimeout,setTimeout(e,0);try{return f(e,0)}catch(t){try{return f.call(null,e,0)}catch(t){return f.call(this,e,0)}}}function i(e){if(l===clearTimeout)return clearTimeout(e);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(e);try{return l(e)}catch(t){try{return l.call(null,e)}catch(t){return l.call(this,e)}}}function a(){v&&d&&(v=!1,d.length?y=d.concat(y):h=-1,y.length&&u())}function u(){if(!v){var e=o(a);v=!0;for(var t=y.length;t;){for(d=y,y=[];++h<t;)d&&d[h].run();h=-1,t=y.length}d=null,v=!1,i(e)}}function s(e,t){this.fun=e,this.array=t}function c(){}var f,l,p=e.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:n}catch(e){f=n}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(e){l=r}}();var d,y=[],v=!1,h=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];y.push(new s(e,t)),1!==y.length||v||o(u)},s.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.prependListener=c,p.prependOnceListener=c,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(e,t){"use strict";function n(e){return function(){return e}}var r=function(){};r.thatReturns=n,r.thatReturnsFalse=n(!1),r.thatReturnsTrue=n(!0),r.thatReturnsNull=n(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},function(e,t,n){(function(t){"use strict";function n(e,t,n,o,i,a,u,s){if(r(t),!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var f=[n,o,i,a,u,s],l=0;c=new Error(t.replace(/%s/g,function(){return f[l++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}}var r=function(e){};"production"!==t.env.NODE_ENV&&(r=function(e){if(void 0===e)throw new Error("invariant requires an error message argument")}),e.exports=n}).call(t,n(1))},function(e,t){"use strict";var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports=n},function(e,t,n){(function(t){"use strict";var r=n(2),o=r;if("production"!==t.env.NODE_ENV){var i=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,i="Warning: "+e.replace(/%s/g,function(){return n[o++]});"undefined"!=typeof console&&console.error(i);try{throw new Error(i)}catch(e){}};o=function(e,t){if(void 0===t)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(0!==t.indexOf("Failed Composite propType: ")&&!e){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];i.apply(void 0,[t].concat(r))}}}e.exports=o}).call(t,n(1))},function(e,t){/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function r(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==r.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}var o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=r()?Object.assign:function(e,t){for(var r,u,s=n(e),c=1;c<arguments.length;c++){r=Object(arguments[c]);for(var f in r)i.call(r,f)&&(s[f]=r[f]);if(o){u=o(r);for(var l=0;l<u.length;l++)a.call(r,u[l])&&(s[u[l]]=r[u[l]])}}return s}},function(e,t,n){(function(t){"use strict";function r(e,n,r,s,c){if("production"!==t.env.NODE_ENV)for(var f in e)if(e.hasOwnProperty(f)){var l;try{o("function"==typeof e[f],"%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.",s||"React class",r,f,typeof e[f]),l=e[f](n,f,s,r,null,a)}catch(e){l=e}if(i(!l||l instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",s||"React class",r,f,typeof l),l instanceof Error&&!(l.message in u)){u[l.message]=!0;var p=c?c():"";i(!1,"Failed %s type: %s%s",r,l.message,null!=p?p:"")}}}if("production"!==t.env.NODE_ENV)var o=n(3),i=n(5),a=n(4),u={};e.exports=r}).call(t,n(1))},function(e,t,n){"use strict";var r=n(2),o=n(3),i=n(4);e.exports=function(){function e(e,t,n,r,a,u){u!==i&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){(function(t){"use strict";var r=n(2),o=n(3),i=n(5),a=n(6),u=n(4),s=n(7);e.exports=function(e,n){function c(e){var t=e&&(R&&e[R]||e[S]);if("function"==typeof t)return t}function f(e,t){return e===t?0!==e||1/e===1/t:e!==e&&t!==t}function l(e){this.message=e,this.stack=""}function p(e){function r(r,c,f,p,d,y,v){if(p=p||M,y=y||f,v!==u)if(n)o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");else if("production"!==t.env.NODE_ENV&&"undefined"!=typeof console){var h=p+":"+f;!a[h]&&s<3&&(i(!1,"You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",y,p),a[h]=!0,s++)}return null==c[f]?r?new l(null===c[f]?"The "+d+" `"+y+"` is marked as required "+("in `"+p+"`, but its value is `null`."):"The "+d+" `"+y+"` is marked as required in "+("`"+p+"`, but its value is `undefined`.")):null:e(c,f,p,d,y)}if("production"!==t.env.NODE_ENV)var a={},s=0;var c=r.bind(null,!1);return c.isRequired=r.bind(null,!0),c}function d(e){function t(t,n,r,o,i,a){var u=t[n],s=E(u);if(s!==e){var c=N(u);return new l("Invalid "+o+" `"+i+"` of type "+("`"+c+"` supplied to `"+r+"`, expected ")+("`"+e+"`."))}return null}return p(t)}function y(){return p(r.thatReturnsNull)}function v(e){function t(t,n,r,o,i){if("function"!=typeof e)return new l("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var a=t[n];if(!Array.isArray(a)){var s=E(a);return new l("Invalid "+o+" `"+i+"` of type "+("`"+s+"` supplied to `"+r+"`, expected an array."))}for(var c=0;c<a.length;c++){var f=e(a,c,r,o,i+"["+c+"]",u);if(f instanceof Error)return f}return null}return p(t)}function h(){function t(t,n,r,o,i){var a=t[n];if(!e(a)){var u=E(a);return new l("Invalid "+o+" `"+i+"` of type "+("`"+u+"` supplied to `"+r+"`, expected a single ReactElement."))}return null}return p(t)}function m(e){function t(t,n,r,o,i){if(!(t[n]instanceof e)){var a=e.name||M,u=_(t[n]);return new l("Invalid "+o+" `"+i+"` of type "+("`"+u+"` supplied to `"+r+"`, expected ")+("instance of `"+a+"`."))}return null}return p(t)}function g(e){function n(t,n,r,o,i){for(var a=t[n],u=0;u<e.length;u++)if(f(a,e[u]))return null;var s=JSON.stringify(e);return new l("Invalid "+o+" `"+i+"` of value `"+a+"` "+("supplied to `"+r+"`, expected one of "+s+"."))}return Array.isArray(e)?p(n):("production"!==t.env.NODE_ENV?i(!1,"Invalid argument supplied to oneOf, expected an instance of array."):void 0,r.thatReturnsNull)}function b(e){function t(t,n,r,o,i){if("function"!=typeof e)return new l("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var a=t[n],s=E(a);if("object"!==s)return new l("Invalid "+o+" `"+i+"` of type "+("`"+s+"` supplied to `"+r+"`, expected an object."));for(var c in a)if(a.hasOwnProperty(c)){var f=e(a,c,r,o,i+"."+c,u);if(f instanceof Error)return f}return null}return p(t)}function O(e){function n(t,n,r,o,i){for(var a=0;a<e.length;a++){var s=e[a];if(null==s(t,n,r,o,i,u))return null}return new l("Invalid "+o+" `"+i+"` supplied to "+("`"+r+"`."))}if(!Array.isArray(e))return"production"!==t.env.NODE_ENV?i(!1,"Invalid argument supplied to oneOfType, expected an instance of array."):void 0,r.thatReturnsNull;for(var o=0;o<e.length;o++){var a=e[o];if("function"!=typeof a)return i(!1,"Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",P(a),o),r.thatReturnsNull}return p(n)}function w(){function e(e,t,n,r,o){return j(e[t])?null:new l("Invalid "+r+" `"+o+"` supplied to "+("`"+n+"`, expected a ReactNode."))}return p(e)}function k(e){function t(t,n,r,o,i){var a=t[n],s=E(a);if("object"!==s)return new l("Invalid "+o+" `"+i+"` of type `"+s+"` "+("supplied to `"+r+"`, expected `object`."));for(var c in e){var f=e[c];if(f){var p=f(a,c,r,o,i+"."+c,u);if(p)return p}}return null}return p(t)}function T(e){function t(t,n,r,o,i){var s=t[n],c=E(s);if("object"!==c)return new l("Invalid "+o+" `"+i+"` of type `"+c+"` "+("supplied to `"+r+"`, expected `object`."));var f=a({},t[n],e);for(var p in f){var d=e[p];if(!d)return new l("Invalid "+o+" `"+i+"` key `"+p+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var y=d(s,p,r,o,i+"."+p,u);if(y)return y}return null}return p(t)}function j(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(j);if(null===t||e(t))return!0;var n=c(t);if(!n)return!1;var r,o=n.call(t);if(n!==t.entries){for(;!(r=o.next()).done;)if(!j(r.value))return!1}else for(;!(r=o.next()).done;){var i=r.value;if(i&&!j(i[1]))return!1}return!0;default:return!1}}function x(e,t){return"symbol"===e||("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}function E(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":x(t,e)?"symbol":t}function N(e){if("undefined"==typeof e||null===e)return""+e;var t=E(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function P(e){var t=N(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}function _(e){return e.constructor&&e.constructor.name?e.constructor.name:M}var R="function"==typeof Symbol&&Symbol.iterator,S="@@iterator",M="<<anonymous>>",I={array:d("array"),bool:d("boolean"),func:d("function"),number:d("number"),object:d("object"),string:d("string"),symbol:d("symbol"),any:y(),arrayOf:v,element:h(),instanceOf:m,node:w(),objectOf:b,oneOf:g,oneOfType:O,shape:k,exact:T};return l.prototype=Error.prototype,I.checkPropTypes=s,I.PropTypes=I,I}}).call(t,n(1))},function(e,t,n){(function(t){if("production"!==t.env.NODE_ENV){var r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,o=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},i=!0;e.exports=n(9)(o,i)}else e.exports=n(8)()}).call(t,n(1))},function(t,n){t.exports=e}])});

/***/ }),

/***/ "./node_modules/react-google-maps-loader/es/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-google-maps-loader/es/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loadGoogleMapsSdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadGoogleMapsSdk */ "./node_modules/react-google-maps-loader/es/loadGoogleMapsSdk/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var GoogleMapsLoader = function (_React$Component) {
  _inherits(GoogleMapsLoader, _React$Component);

  function GoogleMapsLoader() {
    _classCallCheck(this, GoogleMapsLoader);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this));

    _this._isMounted = false;
    _this.state = {
      googleMaps: null,
      error: null
    };
    return _this;
  }

  GoogleMapsLoader.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this._isMounted = true;
    var params = this.props.params;

    Object(_loadGoogleMapsSdk__WEBPACK_IMPORTED_MODULE_2__["default"])(params, function (_ref) {
      var googleMaps = _ref.googleMaps,
          error = _ref.error;
      return _this2._isMounted && _this2.setState({ googleMaps: googleMaps, error: error });
    });
  };

  GoogleMapsLoader.prototype.componentWillUnmount = function componentWillUnmount() {
    this._isMounted = false;
  };

  GoogleMapsLoader.prototype.render = function render() {
    var _state = this.state,
        googleMaps = _state.googleMaps,
        error = _state.error;
    var render = this.props.render;

    return render(googleMaps, error);
  };

  return GoogleMapsLoader;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

GoogleMapsLoader.propTypes =  true ? {
  params: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    key: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    libraries: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  }).isRequired,
  render: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
} : undefined;

/* harmony default export */ __webpack_exports__["default"] = (GoogleMapsLoader);

/***/ }),

/***/ "./node_modules/react-google-maps-loader/es/loadGoogleMapsSdk/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-google-maps-loader/es/loadGoogleMapsSdk/index.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var little_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! little-loader */ "./node_modules/little-loader/lib/little-loader.js");
/* harmony import */ var little_loader__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(little_loader__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! query-string */ "./node_modules/react-google-maps-loader/node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_1__);



var GOOGLE_MAP_PLACES_API = "https://maps.googleapis.com/maps/api/js";
var NOT_LOADED = 0;
var LOADING = 1;
var LOADED = 2;

var queue = [];
var state = NOT_LOADED;
var googleMaps = null;
var error = null;

function loadGoogleMapsSdk(params, callback) {
  if (typeof window !== "undefined") {
    window.gm_authFailure = function () {
      callback({ googleMaps: googleMaps, error: "SDK Authentication Error" });
    };

    if (state === LOADED) {
      callback({ googleMaps: googleMaps, error: error });
    } else if (state === LOADING) {
      queue.push(callback);
    } else {
      if (!window.google) {
        window.google = undefined;
      }

      state = LOADING;
      queue.push(callback);

      little_loader__WEBPACK_IMPORTED_MODULE_0___default()(GOOGLE_MAP_PLACES_API + "?" + query_string__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(params), function (err) {
        state = LOADED;
        error = err ? "Network Error" : null;
        googleMaps = window.google ? window.google.maps : null;

        while (queue.length > 0) {
          queue.pop()({ googleMaps: googleMaps, error: error });
        }
      });
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (loadGoogleMapsSdk);

/***/ }),

/***/ "./node_modules/react-google-maps-loader/node_modules/query-string/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/react-google-maps-loader/node_modules/query-string/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strictUriEncode = __webpack_require__(/*! strict-uri-encode */ "./node_modules/react-google-maps-loader/node_modules/strict-uri-encode/index.js");
var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
var decodeComponent = __webpack_require__(/*! decode-uri-component */ "./node_modules/decode-uri-component/index.js");

function encoderForArrayFormat(opts) {
	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, index) {
				return value === null ? [
					encode(key, opts),
					'[',
					index,
					']'
				].join('') : [
					encode(key, opts),
					'[',
					encode(index, opts),
					']=',
					encode(value, opts)
				].join('');
			};

		case 'bracket':
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'[]=',
					encode(value, opts)
				].join('');
			};

		default:
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'=',
					encode(value, opts)
				].join('');
			};
	}
}

function parserForArrayFormat(opts) {
	var result;

	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, accumulator) {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return function (key, value, accumulator) {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				} else if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		default:
			return function (key, value, accumulator) {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function encode(value, opts) {
	if (opts.encode) {
		return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	} else if (typeof input === 'object') {
		return keysSorter(Object.keys(input)).sort(function (a, b) {
			return Number(a) - Number(b);
		}).map(function (key) {
			return input[key];
		});
	}

	return input;
}

function extract(str) {
	var queryStart = str.indexOf('?');
	if (queryStart === -1) {
		return '';
	}
	return str.slice(queryStart + 1);
}

function parse(str, opts) {
	opts = objectAssign({arrayFormat: 'none'}, opts);

	var formatter = parserForArrayFormat(opts);

	// Create an object with no prototype
	// https://github.com/sindresorhus/query-string/issues/47
	var ret = Object.create(null);

	if (typeof str !== 'string') {
		return ret;
	}

	str = str.trim().replace(/^[?#&]/, '');

	if (!str) {
		return ret;
	}

	str.split('&').forEach(function (param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		// Firefox (pre 40) decodes `%3D` to `=`
		// https://github.com/sindresorhus/query-string/pull/37
		var key = parts.shift();
		var val = parts.length > 0 ? parts.join('=') : undefined;

		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeComponent(val);

		formatter(decodeComponent(key), val, ret);
	});

	return Object.keys(ret).sort().reduce(function (result, key) {
		var val = ret[key];
		if (Boolean(val) && typeof val === 'object' && !Array.isArray(val)) {
			// Sort object keys, not values
			result[key] = keysSorter(val);
		} else {
			result[key] = val;
		}

		return result;
	}, Object.create(null));
}

exports.extract = extract;
exports.parse = parse;

exports.stringify = function (obj, opts) {
	var defaults = {
		encode: true,
		strict: true,
		arrayFormat: 'none'
	};

	opts = objectAssign(defaults, opts);

	if (opts.sort === false) {
		opts.sort = function () {};
	}

	var formatter = encoderForArrayFormat(opts);

	return obj ? Object.keys(obj).sort(opts.sort).map(function (key) {
		var val = obj[key];

		if (val === undefined) {
			return '';
		}

		if (val === null) {
			return encode(key, opts);
		}

		if (Array.isArray(val)) {
			var result = [];

			val.slice().forEach(function (val2) {
				if (val2 === undefined) {
					return;
				}

				result.push(formatter(key, val2, result.length));
			});

			return result.join('&');
		}

		return encode(key, opts) + '=' + encode(val, opts);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};

exports.parseUrl = function (str, opts) {
	return {
		url: str.split('?')[0] || '',
		query: parse(extract(str), opts)
	};
};


/***/ }),

/***/ "./node_modules/react-google-maps-loader/node_modules/strict-uri-encode/index.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/react-google-maps-loader/node_modules/strict-uri-encode/index.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	});
};


/***/ }),

/***/ "./node_modules/react-google-places-suggest/es/components/List/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-google-places-suggest/es/components/List/index.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/react-google-places-suggest/node_modules/styled-components/dist/styled-components.es.js");
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ListItem */ "./node_modules/react-google-places-suggest/es/components/ListItem/index.js");
/* harmony import */ var _PoweredByGoogleLogo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../PoweredByGoogleLogo */ "./node_modules/react-google-places-suggest/es/components/PoweredByGoogleLogo/index.js");
var _templateObject = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  box-shadow: 0 0.4rem 0.5rem 0.0625rem #dbdbdc;\n  z-index: 2;\n"], ["\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  box-shadow: 0 0.4rem 0.5rem 0.0625rem #dbdbdc;\n  z-index: 2;\n"]);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }







var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject);

var List = function (_React$Component) {
  _inherits(List, _React$Component);

  function List(props) {
    _classCallCheck(this, List);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
    _this.handleMouseLeave = _this.handleMouseLeave.bind(_this);
    return _this;
  }

  List.prototype.renderDefault = function renderDefault() {
    var _props = this.props,
        customRender = _props.customRender,
        items = _props.items,
        activeItemIndex = _props.activeItemIndex,
        displayPoweredByGoogle = _props.displayPoweredByGoogle,
        onSelect = _props.onSelect,
        textNoResults = _props.textNoResults;


    if (items.length > 0) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
        Wrapper,
        {
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave
        },
        items.map(function (item, index) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
            key: index,
            active: activeItemIndex === index,
            customRender: customRender,
            onClick: function onClick(item) {
              return onSelect(item);
            },
            item: item
          });
        }),
        displayPoweredByGoogle && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PoweredByGoogleLogo__WEBPACK_IMPORTED_MODULE_4__["default"], null)
      );
    }

    if (textNoResults || customRender) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
        Wrapper,
        {
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave
        },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], { customRender: customRender, textNoResults: textNoResults }),
        displayPoweredByGoogle && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PoweredByGoogleLogo__WEBPACK_IMPORTED_MODULE_4__["default"], null)
      );
    }

    return null;
  };

  List.prototype.handleMouseEnter = function handleMouseEnter() {
    var onFocusChange = this.props.onFocusChange;

    if (onFocusChange) {
      onFocusChange(true);
    }
  };

  List.prototype.handleMouseLeave = function handleMouseLeave() {
    var onFocusChange = this.props.onFocusChange;

    if (onFocusChange) {
      onFocusChange(false);
    }
  };

  List.prototype.render = function render() {
    var _props2 = this.props,
        customContainerRender = _props2.customContainerRender,
        items = _props2.items;


    return customContainerRender ? customContainerRender(items) : this.renderDefault(items);
  };

  return List;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

List.propTypes =  true ? {
  activeItemIndex: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  items: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    description: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    matched_substrings: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
      length: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
      offset: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired
    }))
  })),
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.instanceOf(_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"])), prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.instanceOf(_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"])]),
  displayPoweredByGoogle: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onFocusChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  customContainerRender: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  customRender: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  textNoResults: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
} : undefined;

List.defaultProps = {
  items: []
};

/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ }),

/***/ "./node_modules/react-google-places-suggest/es/components/ListItem/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/react-google-places-suggest/es/components/ListItem/index.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/react-google-places-suggest/node_modules/styled-components/dist/styled-components.es.js");
/* harmony import */ var _Prediction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Prediction */ "./node_modules/react-google-places-suggest/es/components/Prediction/index.js");
var _templateObject = _taggedTemplateLiteralLoose(["\n  ", " ", ";\n"], ["\n  ", " ", ";\n"]),
    _templateObject2 = _taggedTemplateLiteralLoose(["\n  padding: 0.3125rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 1.875rem;\n  display: flex;\n  align-items: center;\n  font-size: 0.8125rem;\n"], ["\n  padding: 0.3125rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 1.875rem;\n  display: flex;\n  align-items: center;\n  font-size: 0.8125rem;\n"]);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }






var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject, function (props) {
  return props.clickable && "&:hover {background: #f5f5f5;cursor: pointer;} ";
}, function (props) {
  return props.active && "background: #f5f5f5;";
});

var Item = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2);

var ListItem = function (_React$Component) {
  _inherits(ListItem, _React$Component);

  function ListItem() {
    _classCallCheck(this, ListItem);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  ListItem.prototype.renderDefault = function renderDefault(item) {
    var textNoResults = this.props.textNoResults;

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
      Item,
      null,
      item ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Prediction__WEBPACK_IMPORTED_MODULE_3__["default"], { item: item }) : textNoResults
    );
  };

  ListItem.prototype.renderItem = function renderItem(item) {
    var customRender = this.props.customRender;

    return customRender ? customRender(item) : this.renderDefault(item);
  };

  ListItem.prototype.render = function render() {
    var _props = this.props,
        active = _props.active,
        item = _props.item,
        onClick = _props.onClick;

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
      Wrapper,
      {
        active: active,
        clickable: item,
        onClick: item && function () {
          return onClick(item);
        }
      },
      this.renderItem(item)
    );
  };

  return ListItem;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

ListItem.propTypes =  true ? {
  active: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  item: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    description: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    matched_substrings: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
      length: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
      offset: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired
    }))
  }),
  customRender: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  textNoResults: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
} : undefined;

ListItem.defaultProps = {
  active: false
};

/* harmony default export */ __webpack_exports__["default"] = (ListItem);

/***/ }),

/***/ "./node_modules/react-google-places-suggest/es/components/PoweredByGoogleLogo/index.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/react-google-places-suggest/es/components/PoweredByGoogleLogo/index.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/react-google-places-suggest/node_modules/styled-components/dist/styled-components.es.js");
/* harmony import */ var _images_powered_by_google_desktop_PoweredByGoogleImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/powered_by_google/desktop/PoweredByGoogleImage */ "./node_modules/react-google-places-suggest/es/images/powered_by_google/desktop/PoweredByGoogleImage.js");
var _templateObject = _taggedTemplateLiteralLoose(["\n  text-align: end;\n  padding-right: 0.3125rem;\n"], ["\n  text-align: end;\n  padding-right: 0.3125rem;\n"]);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }





var GoogleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject);

var PoweredByGoogleLogo = function (_React$Component) {
  _inherits(PoweredByGoogleLogo, _React$Component);

  function PoweredByGoogleLogo() {
    _classCallCheck(this, PoweredByGoogleLogo);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  PoweredByGoogleLogo.prototype.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      GoogleWrapper,
      null,
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { alt: "Powered By Google", src: _images_powered_by_google_desktop_PoweredByGoogleImage__WEBPACK_IMPORTED_MODULE_2__["default"] })
    );
  };

  return PoweredByGoogleLogo;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PoweredByGoogleLogo);

/***/ }),

/***/ "./node_modules/react-google-places-suggest/es/components/Prediction/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/react-google-places-suggest/es/components/Prediction/index.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/react-google-places-suggest/node_modules/styled-components/dist/styled-components.es.js");
var _templateObject = _taggedTemplateLiteralLoose(["\n  font-weight: bold;\n"], ["\n  font-weight: bold;\n"]),
    _templateObject2 = _taggedTemplateLiteralLoose(["\n  text-align: left;\n  width: 100%;\n"], ["\n  text-align: left;\n  width: 100%;\n"]);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }





var Match = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span(_templateObject);
var UpperDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2);

var Prediction = function Prediction(_ref) {
  var item = _ref.item;
  var description = item.description,
      structured_formatting = item.structured_formatting;

  var firstMatchedString = structured_formatting && structured_formatting.main_text_matched_substrings.length > 0 && structured_formatting.main_text_matched_substrings[0];
  var labelParts = null;

  if (firstMatchedString) {
    labelParts = {
      before: description.substr(0, firstMatchedString.offset),
      match: description.substr(firstMatchedString.offset, firstMatchedString.length),
      after: description.substr(firstMatchedString.offset + firstMatchedString.length)
    };
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
    UpperDiv,
    null,
    labelParts ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
      "span",
      null,
      labelParts.before,
      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
        Match,
        null,
        labelParts.match
      ),
      labelParts.after
    ) : description
  );
};

Prediction.propTypes =  true ? {
  item: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    description: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    structured_formatting: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
      main_text_matched_substrings: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
        length: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
        offset: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired
      }))
    })
  }).isRequired
} : undefined;

/* harmony default export */ __webpack_exports__["default"] = (Prediction);

/***/ }),

/***/ "./node_modules/react-google-places-suggest/es/images/powered_by_google/desktop/PoweredByGoogleImage.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/react-google-places-suggest/es/images/powered_by_google/desktop/PoweredByGoogleImage.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var PoweredByGoogleImage = "data:image/png;base64,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";

/* harmony default export */ __webpack_exports__["default"] = (PoweredByGoogleImage);

/***/ }),

/***/ "./node_modules/react-google-places-suggest/es/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-google-places-suggest/es/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/react-google-places-suggest/node_modules/styled-components/dist/styled-components.es.js");
/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/List */ "./node_modules/react-google-places-suggest/es/components/List/index.js");
var _templateObject = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  position: relative;\n"], ["\n  width: 100%;\n  position: relative;\n"]);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

/* global document */





var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject);

var GooglePlacesSuggest = function (_React$Component) {
  _inherits(GooglePlacesSuggest, _React$Component);

  function GooglePlacesSuggest(props) {
    _classCallCheck(this, GooglePlacesSuggest);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this));

    _this.hasFocus = false;


    _this.state = {
      focusedPredictionIndex: 0,
      predictions: [],
      open: !!props.autocompletionRequest && props.autocompletionRequest.input
    };

    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.onFocusChange = _this.onFocusChange.bind(_this);
    _this.handleDOMClick = _this.handleDOMClick.bind(_this);
    return _this;
  }

  GooglePlacesSuggest.prototype.UNSAFE_componentWillMount = function UNSAFE_componentWillMount() {
    this.updatePredictions(this.props.autocompletionRequest);
    document.addEventListener("click", this.handleDOMClick);
  };

  GooglePlacesSuggest.prototype.componentWillUnmount = function componentWillUnmount() {
    document.removeEventListener("click", this.handleDOMClick);
  };

  GooglePlacesSuggest.prototype.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.autocompletionRequest !== nextProps.autocompletionRequest && nextProps.autocompletionRequest) {
      this.updatePredictions(nextProps.autocompletionRequest);
    }
  };

  GooglePlacesSuggest.prototype.handleSelectPrediction = function handleSelectPrediction(suggest) {
    var _this2 = this;

    var onSelectSuggest = this.props.onSelectSuggest;

    this.setState({
      open: false,
      predictions: []
    }, function () {
      _this2.hasFocus = false;
      _this2.geocodePrediction(suggest.description, function (result) {
        onSelectSuggest(result, suggest);
      });
    });
  };

  GooglePlacesSuggest.prototype.updatePredictions = function updatePredictions(autocompletionRequest) {
    var _this3 = this;

    var googleMaps = this.props.googleMaps;

    var autocompleteService = new googleMaps.places.AutocompleteService();
    if (!autocompletionRequest || !autocompletionRequest.input) {
      this.setState({
        open: false,
        predictions: []
      }, function () {
        return _this3.hasFocus = false;
      });
      return;
    }

    autocompleteService.getPlacePredictions(autocompletionRequest, // https://developers.google.com/maps/documentation/javascript/reference?hl=fr#AutocompletionRequest
    function (predictions, status) {
      _this3.props.onStatusUpdate(status);
      if (!predictions) {
        _this3.setState({ open: true, predictions: [] });
        return;
      }
      _this3.setState({
        focusedPredictionIndex: 0,
        open: true,
        predictions: predictions
      });
    });
  };

  GooglePlacesSuggest.prototype.geocodePrediction = function geocodePrediction(address, callback) {
    var googleMaps = this.props.googleMaps;

    var geocoder = new googleMaps.Geocoder();

    geocoder.geocode({ address: address }, function (results, status) {
      if (status === googleMaps.GeocoderStatus.OK) {
        if (results.length > 0) {
          callback(results[0]);
        }
      } else {
        // eslint-disable-next-line
        console.error("Geocode error: " + status);
      }
    });
  };

  GooglePlacesSuggest.prototype.handleKeyDown = function handleKeyDown(e) {
    var _state = this.state,
        focusedPredictionIndex = _state.focusedPredictionIndex,
        predictions = _state.predictions;


    if (predictions.length > 0) {
      if (e.key === "Enter") {
        e.preventDefault();
        this.handleSelectPrediction(predictions[focusedPredictionIndex]);
      } else if (e.key === "ArrowUp") {
        if (predictions.length > 0 && focusedPredictionIndex > 0) {
          this.focusPrediction(focusedPredictionIndex - 1);
        }
      } else if (e.key === "ArrowDown") {
        if (predictions.length > 0 && focusedPredictionIndex < predictions.length - 1) {
          this.focusPrediction(focusedPredictionIndex + 1);
        }
      }
    } else if (e.key === "Enter") {
      e.preventDefault();
      var onNoResult = this.props.onNoResult;


      onNoResult();
    }
  };

  GooglePlacesSuggest.prototype.focusPrediction = function focusPrediction(index) {
    this.setState({ focusedPredictionIndex: index });
  };

  GooglePlacesSuggest.prototype.onFocusChange = function onFocusChange(val) {
    this.hasFocus = val;
  };

  GooglePlacesSuggest.prototype.handleDOMClick = function handleDOMClick() {
    if (!this.hasFocus && this.state.open) {
      this.setState({ open: false });
    }
  };

  GooglePlacesSuggest.prototype.render = function render() {
    var _this4 = this;

    var _state2 = this.state,
        focusedPredictionIndex = _state2.focusedPredictionIndex,
        open = _state2.open,
        predictions = _state2.predictions;
    var _props = this.props,
        children = _props.children,
        customContainerRender = _props.customContainerRender,
        customRender = _props.customRender,
        displayPoweredByGoogle = _props.displayPoweredByGoogle,
        textNoResults = _props.textNoResults;

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
      Wrapper,
      { onKeyDown: this.handleKeyDown },
      children,
      open && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
        items: predictions,
        activeItemIndex: focusedPredictionIndex,
        customContainerRender: customContainerRender,
        customRender: customRender,
        displayPoweredByGoogle: displayPoweredByGoogle,
        onSelect: function onSelect(suggest) {
          return _this4.handleSelectPrediction(suggest);
        },
        textNoResults: textNoResults,
        onFocusChange: this.onFocusChange
      })
    );
  };

  return GooglePlacesSuggest;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

GooglePlacesSuggest.propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any.isRequired,
  googleMaps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object.isRequired,
  onNoResult: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onSelectSuggest: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onStatusUpdate: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  customContainerRender: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  customRender: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  displayPoweredByGoogle: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  autocompletionRequest: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    input: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired
  }).isRequired,
  textNoResults: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
} : undefined;

GooglePlacesSuggest.defaultProps = {
  displayPoweredByGoogle: true,
  onNoResult: function onNoResult() {},
  onSelectSuggest: function onSelectSuggest() {},
  onStatusUpdate: function onStatusUpdate() {},
  textNoResults: "No results"
};

/* harmony default export */ __webpack_exports__["default"] = (GooglePlacesSuggest);

/***/ }),

/***/ "./node_modules/react-google-places-suggest/node_modules/styled-components/dist/styled-components.es.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/react-google-places-suggest/node_modules/styled-components/dist/styled-components.es.js ***!
  \**************************************************************************************************************/
/*! exports provided: css, keyframes, injectGlobal, ThemeProvider, withTheme, ServerStyleSheet, StyleSheetManager, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectGlobal", function() { return injectGlobal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return wrapWithTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerStyleSheet", function() { return ServerStyleSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetManager", function() { return StyleSheetManager; });
/* harmony import */ var is_plain_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-plain-object */ "./node_modules/is-plain-object/index.js");
/* harmony import */ var is_plain_object__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(is_plain_object__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/stylis.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(stylis__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/index.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__);






/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

var _uppercasePattern = /([A-Z])/g;

/**
 * Hyphenates a camelcased string, for example:
 *
 *   > hyphenate('backgroundColor')
 *   < "background-color"
 *
 * For CSS style names, use `hyphenateStyleName` instead which works properly
 * with all vendor prefixes, including `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenate$2(string) {
  return string.replace(_uppercasePattern, '-$1').toLowerCase();
}

var hyphenate_1 = hyphenate$2;

var hyphenate = hyphenate_1;

var msPattern = /^ms-/;

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, '-ms-');
}

var hyphenateStyleName_1 = hyphenateStyleName;

//      
var objToCss = function objToCss(obj, prevKey) {
  var css = Object.keys(obj).filter(function (key) {
    var chunk = obj[key];
    return chunk !== undefined && chunk !== null && chunk !== false && chunk !== '';
  }).map(function (key) {
    if (is_plain_object__WEBPACK_IMPORTED_MODULE_0___default()(obj[key])) return objToCss(obj[key], key);
    return hyphenateStyleName_1(key) + ': ' + obj[key] + ';';
  }).join(' ');
  return prevKey ? prevKey + ' {\n  ' + css + '\n}' : css;
};

var flatten = function flatten(chunks, executionContext) {
  return chunks.reduce(function (ruleSet, chunk) {
    /* Remove falsey values */
    if (chunk === undefined || chunk === null || chunk === false || chunk === '') {
      return ruleSet;
    }
    /* Flatten ruleSet */
    if (Array.isArray(chunk)) {
      return [].concat(ruleSet, flatten(chunk, executionContext));
    }

    /* Handle other components */
    if (chunk.hasOwnProperty('styledComponentId')) {
      // $FlowFixMe not sure how to make this pass
      return [].concat(ruleSet, ['.' + chunk.styledComponentId]);
    }

    /* Either execute or defer the function */
    if (typeof chunk === 'function') {
      return executionContext ? ruleSet.concat.apply(ruleSet, flatten([chunk(executionContext)], executionContext)) : ruleSet.concat(chunk);
    }

    /* Handle objects */
    return ruleSet.concat(
    // $FlowFixMe have to add %checks somehow to isPlainObject
    is_plain_object__WEBPACK_IMPORTED_MODULE_0___default()(chunk) ? objToCss(chunk) : chunk.toString());
  }, []);
};

//      
var stylis = new stylis__WEBPACK_IMPORTED_MODULE_1___default.a({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: true,
  compress: false,
  semicolon: true
});

var stringifyRules = function stringifyRules(rules, selector, prefix) {
  var flatCSS = rules.join('').replace(/^\s*\/\/.*$/gm, ''); // replace JS comments

  var cssStr = selector && prefix ? prefix + ' ' + selector + ' { ' + flatCSS + ' }' : flatCSS;

  return stylis(prefix || !selector ? '' : selector, cssStr);
};

//      
var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var charsLength = chars.length;

/* Some high number, usually 9-digit base-10. Map it to base-😎 */
var generateAlphabeticName = function generateAlphabeticName(code) {
  var name = '';
  var x = void 0;

  for (x = code; x > charsLength; x = Math.floor(x / charsLength)) {
    name = chars[x % charsLength] + name;
  }

  return chars[x % charsLength] + name;
};

//      


var interleave = (function (strings, interpolations) {
  return interpolations.reduce(function (array, interp, i) {
    return array.concat(interp, strings[i + 1]);
  }, [strings[0]]);
});

//      
var css = (function (strings) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  return flatten(interleave(strings, interpolations));
});

//      
var SC_COMPONENT_ID = /^[^\S\n]*?\/\* sc-component-id:\s+(\S+)\s+\*\//gm;

var extractCompsFromCSS = (function (maybeCSS) {
  var css = '' + (maybeCSS || ''); // Definitely a string, and a clone
  var existingComponents = [];
  css.replace(SC_COMPONENT_ID, function (match, componentId, matchIndex) {
    existingComponents.push({ componentId: componentId, matchIndex: matchIndex });
    return match;
  });
  return existingComponents.map(function (_ref, i) {
    var componentId = _ref.componentId,
        matchIndex = _ref.matchIndex;

    var nextComp = existingComponents[i + 1];
    var cssFromDOM = nextComp ? css.slice(matchIndex, nextComp.matchIndex) : css.slice(matchIndex);
    return { componentId: componentId, cssFromDOM: cssFromDOM };
  });
});

//      
/* eslint-disable camelcase, no-undef */

var getNonce = (function () {
                                     return  true ? __webpack_require__.nc : undefined;
});

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

//      
/* eslint-disable no-underscore-dangle */
/*
 * Browser Style Sheet with Rehydration
 *
 * <style data-styled-components="x y z"
 *        data-styled-components-is-local="true">
 *   /· sc-component-id: a ·/
 *   .sc-a { ... }
 *   .x { ... }
 *   /· sc-component-id: b ·/
 *   .sc-b { ... }
 *   .y { ... }
 *   .z { ... }
 * </style>
 *
 * Note: replace · with * in the above snippet.
 * */
var COMPONENTS_PER_TAG = 40;

var BrowserTag = function () {
  function BrowserTag(el, isLocal) {
    var existingSource = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    classCallCheck(this, BrowserTag);

    this.el = el;
    this.isLocal = isLocal;
    this.ready = false;

    var extractedComps = extractCompsFromCSS(existingSource);

    this.size = extractedComps.length;
    this.components = extractedComps.reduce(function (acc, obj) {
      acc[obj.componentId] = obj; // eslint-disable-line no-param-reassign
      return acc;
    }, {});
  }

  BrowserTag.prototype.isFull = function isFull() {
    return this.size >= COMPONENTS_PER_TAG;
  };

  BrowserTag.prototype.addComponent = function addComponent(componentId) {
    if (!this.ready) this.replaceElement();
    if ( true && this.components[componentId]) {
      throw new Error('Trying to add Component \'' + componentId + '\' twice!');
    }

    var comp = { componentId: componentId, textNode: document.createTextNode('') };
    this.el.appendChild(comp.textNode);

    this.size += 1;
    this.components[componentId] = comp;
  };

  BrowserTag.prototype.inject = function inject(componentId, css, name) {
    if (!this.ready) this.replaceElement();
    var comp = this.components[componentId];

    if ( true && !comp) {
      throw new Error('Must add a new component before you can inject css into it');
    }
    if (comp.textNode.data === '') {
      comp.textNode.appendData('\n/* sc-component-id: ' + componentId + ' */\n');
    }

    comp.textNode.appendData(css);
    if (name) {
      var existingNames = this.el.getAttribute(SC_ATTR);
      this.el.setAttribute(SC_ATTR, existingNames ? existingNames + ' ' + name : name);
    }

    var nonce = getNonce();

    if (nonce) {
      this.el.setAttribute('nonce', nonce);
    }
  };

  BrowserTag.prototype.toHTML = function toHTML() {
    return this.el.outerHTML;
  };

  BrowserTag.prototype.toReactElement = function toReactElement() {
    throw new Error("BrowserTag doesn't implement toReactElement!");
  };

  BrowserTag.prototype.clone = function clone() {
    throw new Error('BrowserTag cannot be cloned!');
  };

  /* Because we care about source order, before we can inject anything we need to
   * create a text node for each component and replace the existing CSS. */


  BrowserTag.prototype.replaceElement = function replaceElement() {
    var _this = this;

    this.ready = true;
    // We have nothing to inject. Use the current el.
    if (this.size === 0) return;

    // Build up our replacement style tag
    var newEl = this.el.cloneNode();
    newEl.appendChild(document.createTextNode('\n'));

    Object.keys(this.components).forEach(function (key) {
      var comp = _this.components[key];

      // eslint-disable-next-line no-param-reassign
      comp.textNode = document.createTextNode(comp.cssFromDOM);
      newEl.appendChild(comp.textNode);
    });

    if (!this.el.parentNode) {
      throw new Error("Trying to replace an element that wasn't mounted!");
    }

    // The ol' switcheroo
    this.el.parentNode.replaceChild(newEl, this.el);
    this.el = newEl;
  };

  return BrowserTag;
}();

/* Factory function to separate DOM operations from logical ones*/


var BrowserStyleSheet = {
  create: function create() {
    var tags = [];
    var names = {};

    /* Construct existing state from DOM */
    var nodes = document.querySelectorAll('[' + SC_ATTR + ']');
    var nodesLength = nodes.length;

    for (var i = 0; i < nodesLength; i += 1) {
      var el = nodes[i];

      tags.push(new BrowserTag(el, el.getAttribute(LOCAL_ATTR) === 'true', el.innerHTML));

      var attr = el.getAttribute(SC_ATTR);
      if (attr) {
        attr.trim().split(/\s+/).forEach(function (name) {
          names[name] = true;
        });
      }
    }

    /* Factory for making more tags */
    var tagConstructor = function tagConstructor(isLocal) {
      var el = document.createElement('style');
      el.type = 'text/css';
      el.setAttribute(SC_ATTR, '');
      el.setAttribute(LOCAL_ATTR, isLocal ? 'true' : 'false');
      if (!document.head) throw new Error('Missing document <head>');
      document.head.appendChild(el);
      return new BrowserTag(el, isLocal);
    };

    return new StyleSheet(tagConstructor, tags, names);
  }
};

//      
var SC_ATTR = 'data-styled-components';
var LOCAL_ATTR = 'data-styled-components-is-local';
var CONTEXT_KEY = '__styled-components-stylesheet__';

/* eslint-disable flowtype/object-type-delimiter */

/* eslint-enable flowtype/object-type-delimiter */

var instance = null;
// eslint-disable-next-line no-use-before-define
var clones = [];

var StyleSheet = function () {
  function StyleSheet(tagConstructor) {
    var tags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var names = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, StyleSheet);
    this.hashes = {};
    this.deferredInjections = {};
    this.stylesCacheable = typeof document !== 'undefined';

    this.tagConstructor = tagConstructor;
    this.tags = tags;
    this.names = names;
    this.constructComponentTagMap();
  }

  // helper for `ComponentStyle` to know when it cache static styles.
  // staticly styled-component can not safely cache styles on the server
  // without all `ComponentStyle` instances saving a reference to the
  // the styleSheet instance they last rendered with,
  // or listening to creation / reset events. otherwise you might create
  // a component with one stylesheet and render it another api response
  // with another, losing styles on from your server-side render.


  StyleSheet.prototype.constructComponentTagMap = function constructComponentTagMap() {
    var _this = this;

    this.componentTags = {};

    this.tags.forEach(function (tag) {
      Object.keys(tag.components).forEach(function (componentId) {
        _this.componentTags[componentId] = tag;
      });
    });
  };

  /* Best level of caching—get the name from the hash straight away. */


  StyleSheet.prototype.getName = function getName(hash) {
    return this.hashes[hash.toString()];
  };

  /* Second level of caching—if the name is already in the dom, don't
   * inject anything and record the hash for getName next time. */


  StyleSheet.prototype.alreadyInjected = function alreadyInjected(hash, name) {
    if (!this.names[name]) return false;

    this.hashes[hash.toString()] = name;
    return true;
  };

  /* Third type of caching—don't inject components' componentId twice. */


  StyleSheet.prototype.hasInjectedComponent = function hasInjectedComponent(componentId) {
    return !!this.componentTags[componentId];
  };

  StyleSheet.prototype.deferredInject = function deferredInject(componentId, isLocal, css) {
    if (this === instance) {
      clones.forEach(function (clone) {
        clone.deferredInject(componentId, isLocal, css);
      });
    }

    this.getOrCreateTag(componentId, isLocal);
    this.deferredInjections[componentId] = css;
  };

  StyleSheet.prototype.inject = function inject(componentId, isLocal, css, hash, name) {
    if (this === instance) {
      clones.forEach(function (clone) {
        clone.inject(componentId, isLocal, css);
      });
    }

    var tag = this.getOrCreateTag(componentId, isLocal);

    var deferredInjection = this.deferredInjections[componentId];
    if (deferredInjection) {
      tag.inject(componentId, deferredInjection);
      delete this.deferredInjections[componentId];
    }

    tag.inject(componentId, css, name);

    if (hash && name) {
      this.hashes[hash.toString()] = name;
    }
  };

  StyleSheet.prototype.toHTML = function toHTML() {
    return this.tags.map(function (tag) {
      return tag.toHTML();
    }).join('');
  };

  StyleSheet.prototype.toReactElements = function toReactElements() {
    return this.tags.map(function (tag, i) {
      return tag.toReactElement('sc-' + i);
    });
  };

  StyleSheet.prototype.getOrCreateTag = function getOrCreateTag(componentId, isLocal) {
    var existingTag = this.componentTags[componentId];
    if (existingTag) {
      return existingTag;
    }

    var lastTag = this.tags[this.tags.length - 1];
    var componentTag = !lastTag || lastTag.isFull() || lastTag.isLocal !== isLocal ? this.createNewTag(isLocal) : lastTag;
    this.componentTags[componentId] = componentTag;
    componentTag.addComponent(componentId);
    return componentTag;
  };

  StyleSheet.prototype.createNewTag = function createNewTag(isLocal) {
    var newTag = this.tagConstructor(isLocal);
    this.tags.push(newTag);
    return newTag;
  };

  StyleSheet.reset = function reset(isServer) {
    instance = StyleSheet.create(isServer);
  };

  /* We can make isServer totally implicit once Jest 20 drops and we
   * can change environment on a per-test basis. */


  StyleSheet.create = function create() {
    var isServer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : typeof document === 'undefined';

    return (isServer ? ServerStyleSheet : BrowserStyleSheet).create();
  };

  StyleSheet.clone = function clone(oldSheet) {
    var newSheet = new StyleSheet(oldSheet.tagConstructor, oldSheet.tags.map(function (tag) {
      return tag.clone();
    }), _extends({}, oldSheet.names));

    newSheet.hashes = _extends({}, oldSheet.hashes);
    newSheet.deferredInjections = _extends({}, oldSheet.deferredInjections);
    clones.push(newSheet);

    return newSheet;
  };

  createClass(StyleSheet, null, [{
    key: 'instance',
    get: function get$$1() {
      return instance || (instance = StyleSheet.create());
    }
  }]);
  return StyleSheet;
}();

var _StyleSheetManager$ch;

//      
var StyleSheetManager = function (_Component) {
  inherits(StyleSheetManager, _Component);

  function StyleSheetManager() {
    classCallCheck(this, StyleSheetManager);
    return possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  StyleSheetManager.prototype.getChildContext = function getChildContext() {
    var _ref;

    return _ref = {}, _ref[CONTEXT_KEY] = this.props.sheet, _ref;
  };

  StyleSheetManager.prototype.render = function render() {
    /* eslint-disable react/prop-types */
    // Flow v0.43.1 will report an error accessing the `children` property,
    // but v0.47.0 will not. It is necessary to use a type cast instead of
    // a "fixme" comment to satisfy both Flow versions.
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.only(this.props.children);
  };

  return StyleSheetManager;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

StyleSheetManager.childContextTypes = (_StyleSheetManager$ch = {}, _StyleSheetManager$ch[CONTEXT_KEY] = prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.instanceOf(StyleSheet), prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.instanceOf(ServerStyleSheet)]).isRequired, _StyleSheetManager$ch);

StyleSheetManager.propTypes = {
  sheet: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.instanceOf(StyleSheet), prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.instanceOf(ServerStyleSheet)]).isRequired
};

//      
/* eslint-disable no-underscore-dangle */
var ServerTag = function () {
  function ServerTag(isLocal) {
    classCallCheck(this, ServerTag);

    this.isLocal = isLocal;
    this.components = {};
    this.size = 0;
    this.names = [];
  }

  ServerTag.prototype.isFull = function isFull() {
    return false;
  };

  ServerTag.prototype.addComponent = function addComponent(componentId) {
    if ( true && this.components[componentId]) {
      throw new Error('Trying to add Component \'' + componentId + '\' twice!');
    }
    this.components[componentId] = { componentId: componentId, css: '' };
    this.size += 1;
  };

  ServerTag.prototype.concatenateCSS = function concatenateCSS() {
    var _this = this;

    return Object.keys(this.components).reduce(function (styles, k) {
      return styles + _this.components[k].css;
    }, '');
  };

  ServerTag.prototype.inject = function inject(componentId, css, name) {
    var comp = this.components[componentId];

    if ( true && !comp) {
      throw new Error('Must add a new component before you can inject css into it');
    }
    if (comp.css === '') comp.css = '/* sc-component-id: ' + componentId + ' */\n';

    comp.css += css.replace(/\n*$/, '\n');

    if (name) this.names.push(name);
  };

  ServerTag.prototype.toHTML = function toHTML() {
    var attrs = ['type="text/css"', SC_ATTR + '="' + this.names.join(' ') + '"', LOCAL_ATTR + '="' + (this.isLocal ? 'true' : 'false') + '"'];

    var nonce = getNonce();

    if (nonce) {
      attrs.push('nonce="' + nonce + '"');
    }

    return '<style ' + attrs.join(' ') + '>' + this.concatenateCSS() + '</style>';
  };

  ServerTag.prototype.toReactElement = function toReactElement(key) {
    var _attrs;

    var attrs = (_attrs = {}, _attrs[SC_ATTR] = this.names.join(' '), _attrs[LOCAL_ATTR] = this.isLocal.toString(), _attrs);

    var nonce = getNonce();

    if (nonce) {
      attrs.nonce = nonce;
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement('style', _extends({
      key: key,
      type: 'text/css'
    }, attrs, {
      dangerouslySetInnerHTML: { __html: this.concatenateCSS() }
    }));
  };

  ServerTag.prototype.clone = function clone() {
    var _this2 = this;

    var copy = new ServerTag(this.isLocal);
    copy.names = [].concat(this.names);
    copy.size = this.size;
    copy.components = Object.keys(this.components).reduce(function (acc, key) {
      acc[key] = _extends({}, _this2.components[key]); // eslint-disable-line no-param-reassign
      return acc;
    }, {});

    return copy;
  };

  return ServerTag;
}();

var ServerStyleSheet = function () {
  function ServerStyleSheet() {
    classCallCheck(this, ServerStyleSheet);

    this.instance = StyleSheet.clone(StyleSheet.instance);
  }

  ServerStyleSheet.prototype.collectStyles = function collectStyles(children) {
    if (this.closed) {
      throw new Error("Can't collect styles once you've called getStyleTags!");
    }
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      StyleSheetManager,
      { sheet: this.instance },
      children
    );
  };

  ServerStyleSheet.prototype.getStyleTags = function getStyleTags() {
    if (!this.closed) {
      clones.splice(clones.indexOf(this.instance), 1);
      this.closed = true;
    }

    return this.instance.toHTML();
  };

  ServerStyleSheet.prototype.getStyleElement = function getStyleElement() {
    if (!this.closed) {
      clones.splice(clones.indexOf(this.instance), 1);
      this.closed = true;
    }

    return this.instance.toReactElements();
  };

  ServerStyleSheet.create = function create() {
    return new StyleSheet(function (isLocal) {
      return new ServerTag(isLocal);
    });
  };

  return ServerStyleSheet;
}();

//      

var LIMIT = 200;

var createWarnTooManyClasses = (function (displayName) {
  var generatedClasses = {};
  var warningSeen = false;

  return function (className) {
    if (!warningSeen) {
      generatedClasses[className] = true;
      if (Object.keys(generatedClasses).length >= LIMIT) {
        // Unable to find latestRule in test environment.
        /* eslint-disable no-console, prefer-template */
        console.warn('Over ' + LIMIT + ' classes were generated for component ' + displayName + '. \n' + 'Consider using the attrs method, together with a style object for frequently changed styles.\n' + 'Example:\n' + '  const Component = styled.div.attrs({\n' + '    style: ({ background }) => ({\n' + '      background,\n' + '    }),\n' + '  })`width: 100%;`\n\n' + '  <Component />');
        warningSeen = true;
        generatedClasses = {};
      }
    }
  };
});

//      
/* eslint-disable max-len */
/**
 * Trying to avoid the unknown-prop errors on styled components by filtering by
 * React's attribute whitelist.
 *
 * To regenerate this regex:
 *
 * 1. `npm i -g regexgen` (https://github.com/devongovett/regexgen)
 * 2. Run `regexgen` with the list of space-separated words below as input
 * 3. Surround the emitted regex with this: `/^(GENERATED_REGEX)$/` -- this will ensure a full string match
 *    and no false positives from partials
 **/
/*
children dangerouslySetInnerHTML key ref autoFocus defaultValue valueLink defaultChecked checkedLink innerHTML suppressContentEditableWarning onFocusIn onFocusOut className onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onReset onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onAnimationStart onAnimationEnd onAnimationIteration onTransitionEnd onCopyCapture onCutCapture onPasteCapture onCompositionEndCapture onCompositionStartCapture onCompositionUpdateCapture onKeyDownCapture onKeyPressCapture onKeyUpCapture onFocusCapture onBlurCapture onChangeCapture onInputCapture onSubmitCapture onResetCapture onClickCapture onContextMenuCapture onDoubleClickCapture onDragCapture onDragEndCapture onDragEnterCapture onDragExitCapture onDragLeaveCapture onDragOverCapture onDragStartCapture onDropCapture onMouseDownCapture onMouseEnterCapture onMouseLeaveCapture onMouseMoveCapture onMouseOutCapture onMouseOverCapture onMouseUpCapture onSelectCapture onTouchCancelCapture onTouchEndCapture onTouchMoveCapture onTouchStartCapture onScrollCapture onWheelCapture onAbortCapture onCanPlayCapture onCanPlayThroughCapture onDurationChangeCapture onEmptiedCapture onEncryptedCapture onEndedCapture onErrorCapture onLoadedDataCapture onLoadedMetadataCapture onLoadStartCapture onPauseCapture onPlayCapture onPlayingCapture onProgressCapture onRateChangeCapture onSeekedCapture onSeekingCapture onStalledCapture onSuspendCapture onTimeUpdateCapture onVolumeChangeCapture onWaitingCapture onLoadCapture onAnimationStartCapture onAnimationEndCapture onAnimationIterationCapture onTransitionEndCapture accept acceptCharset accessKey action allowFullScreen allowTransparency alt as async autoComplete autoPlay capture cellPadding cellSpacing charSet challenge checked cite classID className cols colSpan content contentEditable contextMenu controls coords crossOrigin data dateTime default defer dir disabled download draggable encType form formAction formEncType formMethod formNoValidate formTarget frameBorder headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media mediaGroup method min minLength multiple muted name nonce noValidate open optimum pattern placeholder playsInline poster preload profile radioGroup readOnly referrerPolicy rel required reversed role rows rowSpan sandbox scope scoped scrolling seamless selected shape size sizes span spellCheck src srcDoc srcLang srcSet start step style summary tabIndex target title type useMap value width wmode wrap about datatype inlist prefix property resource typeof vocab autoCapitalize autoCorrect autoSave color itemProp itemScope itemType itemID itemRef results security unselectable accentHeight accumulate additive alignmentBaseline allowReorder alphabetic amplitude arabicForm ascent attributeName attributeType autoReverse azimuth baseFrequency baseProfile baselineShift bbox begin bias by calcMode capHeight clip clipPath clipRule clipPathUnits colorInterpolation colorInterpolationFilters colorProfile colorRendering contentScriptType contentStyleType cursor cx cy d decelerate descent diffuseConstant direction display divisor dominantBaseline dur dx dy edgeMode elevation enableBackground end exponent externalResourcesRequired fill fillOpacity fillRule filter filterRes filterUnits floodColor floodOpacity focusable fontFamily fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontWeight format from fx fy g1 g2 glyphName glyphOrientationHorizontal glyphOrientationVertical glyphRef gradientTransform gradientUnits hanging horizAdvX horizOriginX ideographic imageRendering in in2 intercept k k1 k2 k3 k4 kernelMatrix kernelUnitLength kerning keyPoints keySplines keyTimes lengthAdjust letterSpacing lightingColor limitingConeAngle local markerEnd markerMid markerStart markerHeight markerUnits markerWidth mask maskContentUnits maskUnits mathematical mode numOctaves offset opacity operator order orient orientation origin overflow overlinePosition overlineThickness paintOrder panose1 pathLength patternContentUnits patternTransform patternUnits pointerEvents points pointsAtX pointsAtY pointsAtZ preserveAlpha preserveAspectRatio primitiveUnits r radius refX refY renderingIntent repeatCount repeatDur requiredExtensions requiredFeatures restart result rotate rx ry scale seed shapeRendering slope spacing specularConstant specularExponent speed spreadMethod startOffset stdDeviation stemh stemv stitchTiles stopColor stopOpacity strikethroughPosition strikethroughThickness string stroke strokeDasharray strokeDashoffset strokeLinecap strokeLinejoin strokeMiterlimit strokeOpacity strokeWidth surfaceScale systemLanguage tableValues targetX targetY textAnchor textDecoration textRendering textLength to transform u1 u2 underlinePosition underlineThickness unicode unicodeBidi unicodeRange unitsPerEm vAlphabetic vHanging vIdeographic vMathematical values vectorEffect version vertAdvY vertOriginX vertOriginY viewBox viewTarget visibility widths wordSpacing writingMode x xHeight x1 x2 xChannelSelector xlinkActuate xlinkArcrole xlinkHref xlinkRole xlinkShow xlinkTitle xlinkType xmlBase xmlns xmlnsXlink xmlLang xmlSpace y y1 y2 yChannelSelector z zoomAndPan
*/
/* eslint-enable max-len */

var ATTRIBUTE_REGEX = /^((?:s(?:uppressContentEditableWarn|croll|pac)|(?:shape|image|text)Render|(?:letter|word)Spac|vHang|hang)ing|(?:on(?:AnimationIteration|C(?:o(?:mposition(?:Update|Start|End)|ntextMenu|py)|anPlayThrough|anPlay|hange|lick|ut)|(?:(?:Duration|Volume|Rate)Chang|(?:MouseLea|(?:Touch|Mouse)Mo|DragLea)v|Paus)e|Loaded(?:Metad|D)ata|(?:Animation|Touch|Load|Drag)Start|(?:(?:T(?:ransition|ouch)|Animation)E|Suspe)nd|DoubleClick|(?:TouchCanc|Whe)el|(?:Mouse(?:Ent|Ov)e|Drag(?:Ent|Ov)e|Erro)r|TimeUpdate|(?:E(?:n(?:crypt|d)|mpti)|S(?:tall|eek))ed|MouseDown|P(?:rogress|laying)|(?:MouseOu|DragExi|S(?:elec|ubmi)|Rese|Inpu)t|KeyPress|DragEnd|Key(?:Down|Up)|(?:Wait|Seek)ing|(?:MouseU|Dro)p|Scroll|Paste|Focus|Abort|Drag|Play|Load|Blur)Captur|alignmentBaselin|(?:limitingConeAng|xlink(?:(?:Arcr|R)o|Tit)|s(?:urfaceSca|ty|ca)|unselectab|baseProfi|fontSty|(?:focus|dragg)ab|multip|profi|tit)l|d(?:ominantBaselin|efaultValu)|a(?:uto(?:Capitaliz|Revers|Sav)|dditiv)|(?:(?:formNoValid|xlinkActu|noValid|accumul|rot)a|autoComple|decelera)t|(?:(?:attribute|item)T|datat)yp|(?:attribute|glyph)Nam|playsInlin|(?:formE|e)ncTyp|(?:writing|input|edge)Mod|(?:xlinkTy|itemSco|keyTy|slo)p|(?:amplitu|mo)d|(?:xmlSpa|non)c|fillRul|(?:dateTi|na)m|r(?:esourc|ol)|xmlBas|wmod)e|(?:glyphOrientationHorizont|loc)al|(?:externalResourcesRequir|select|revers|mut)ed|c(?:o(?:lorInterpolationFilter|ntrol|ord)s|o(?:lor(?:Interpolation)?|ntent)|(?:ontentS(?:cript|tyle)Typ|o(?:ntentEditab|lorProfi)l|l(?:assNam|ipRul)|a(?:lcMod|ptur)|it)e|olorRendering|l(?:ipPathUnits|assID)|o(?:ntextMenu|ls)|h(?:eckedLink|a(?:llenge|rSet)|ildren|ecked)|ell(?:Spac|Padd)ing|(?:rossOrigi|olSpa)n|apHeight|lip(?:Path)?|ursor|[xy])|glyphOrientationVertical|d(?:angerouslySetInnerHTML|efaultChecked|ownload|isabled|isplay|[xy])|(?:s(?:trikethroughThickn|eaml)es|(?:und|ov)erlineThicknes|r(?:equiredExtension|adiu)|(?:requiredFeatur|tableValu|stitchTil|numOctav|filterR)e|key(?:(?:Splin|Tim)e|Param)|autoFocu|header|bia)s|(?:(?:st(?:rikethroughPosi|dDevia)|(?:und|ov)erlinePosi|(?:textDecor|elev)a|orienta)tio|(?:strokeLinejo|orig)i|formActio|zoomAndPa|onFocusI|directio|(?:vers|act)io|rowSpa|begi|ico)n|o(?:n(?:AnimationIteration|C(?:o(?:mposition(?:Update|Start|End)|ntextMenu|py)|anPlayThrough|anPlay|hange|lick|ut)|(?:(?:Duration|Volume|Rate)Chang|(?:MouseLea|(?:Touch|Mouse)Mo|DragLea)v|Paus)e|Loaded(?:Metad|D)ata|(?:Animation|Touch|Load|Drag)Start|(?:(?:T(?:ransition|ouch)|Animation)E|Suspe)nd|DoubleClick|(?:TouchCanc|Whe)el|(?:Mouse(?:Ent|Ov)e|Drag(?:Ent|Ov)e|Erro)r|TimeUpdate|(?:E(?:n(?:crypt|d)|mpti)|S(?:tall|eek))ed|MouseDown|P(?:rogress|laying)|(?:MouseOu|DragExi|S(?:elec|ubmi)|Rese|Inpu)t|KeyPress|DragEnd|Key(?:Down|Up)|(?:Wait|Seek)ing|(?:MouseU|Dro)p|Scroll|Paste|Focus|Abort|Drag|Play|Load|Blur)|rient)|p(?:reserveA(?:spectRatio|lpha)|ointsAt[X-Z]|anose1)|(?:patternContent|ma(?:sk(?:Content)?|rker)|primitive|gradient|pattern|filter)Units|(?:gradientT|patternT|t)ransform|(?:(?:allowTranspar|baseFrequ)enc|re(?:ferrerPolic|adOnl)|(?:(?:st(?:roke|op)O|floodO|fillO|o)pac|integr|secur)it|visibilit|fontFamil|accessKe|propert|summar)y|(?:strokeMiterlimi|(?:specularConsta|repeatCou|fontVaria)n|(?:(?:specularE|e)xpon|renderingInt|asc)en|d(?:iffuseConsta|esce)n|(?:fontSizeAdju|lengthAdju|manife)s|baselineShif|vectorEffec|(?:(?:mar(?:ker|gin)|x)H|accentH|fontW)eigh|a(?:utoCorrec|bou)|markerStar|onFocusOu|in(?:tercep|lis)|restar|forma|heigh|lis)t|(?:(?:st(?:rokeDasho|artO)|o)ffs|acceptChars|formTarg|viewTarg|srcS)et|(?:(?:enableBackgrou|markerE)n|s(?:p(?:readMetho|ee)|ee)|formMetho|m(?:arkerMi|etho)|preloa|kin)d|k(?:ernel(?:UnitLength|Matrix)|[1-4])|(?:[xy]ChannelSelect|lightingCol|textAnch|floodCol|stopCol|operat|htmlF)or|(?:allowFullScre|hidd)en|strokeDasharray|systemLanguage|(?:strokeLineca|itemPro|useMa|wra|loo)p|v(?:Mathematical|ert(?:Origin[XY]|AdvY)|alues|ocab)|(?:pointerEve|keyPoi)nts|unicodeRange|(?:(?:allowReord|placehold|frameBord|paintOrd|post|ord)e|repeatDu|d(?:efe|u))r|mathematical|(?:vI|i)deographic|h(?:oriz(?:Origin|Adv)X|ttpEquiv)|u(?:nicodeBidi|[12])|(?:fontStretc|hig)h|(?:(?:mar(?:ker|gin)W|strokeW)id|azimu)th|vAlphabetic|mediaGroup|spellCheck|(?:unitsPerE|optimu|fro)m|r(?:adioGroup|e(?:sults|f[XY]|l)|ows|[xy])|(?:xmlnsXl|valueL)ink|a(?:rabicForm|l(?:phabetic|t)|sync)|pathLength|(?:text|m(?:in|ax))Length|innerHTML|xlinkShow|(?:xlinkHr|glyphR)ef|r(?:e(?:quired|sult|f))?|o(?:verflow|pen)|(?:tabInde|(?:sand|b)bo|viewBo)x|(?:(?:href|xml|src)La|kerni)ng|f(?:o(?:ntSize|rm)|il(?:ter|l))|autoPlay|unicode|p(?:attern|oints)|t(?:arget[XY]|o)|i(?:temRef|n2|s)|divisor|d(?:efault|ata|ir)?|srcDoc|s(?:coped|te(?:m[hv]|p)|pan)|(?:width|size)s|(?:stri|la)ng|prefix|itemID|s(?:t(?:roke|art)|hape|cope|rc)|a(?:ccept|s)|t(?:arget|ype)|typeof|width|value|x(?:mlns)?|label|m(?:edia|a(?:sk|x)|in)|size|href|k(?:ey)?|end|low|x[12]|i[dn]|y[12]|g[12]|by|f[xy]|[yz])$/;

/* From DOMProperty */
var ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040';
var isCustomAttribute = RegExp.prototype.test.bind(new RegExp('^(data|aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$'));

var validAttr = (function (name) {
  return ATTRIBUTE_REGEX.test(name) || isCustomAttribute(name.toLowerCase());
});

//      


function isTag(target) /* : %checks */{
  return typeof target === 'string';
}

//      


function isStyledComponent(target) /* : %checks */{
  return typeof target === 'function' && typeof target.styledComponentId === 'string';
}

//      

/* eslint-disable no-undef */
function getComponentName(target) {
  return target.displayName || target.name || 'Component';
}

//      


var determineTheme = (function (props, fallbackTheme, defaultProps) {
  // Props should take precedence over ThemeProvider, which should take precedence over
  // defaultProps, but React automatically puts defaultProps on props.

  /* eslint-disable react/prop-types */
  var isDefaultTheme = defaultProps && props.theme === defaultProps.theme;
  var theme = props.theme && !isDefaultTheme ? props.theme : fallbackTheme;
  /* eslint-enable */

  return theme;
});

//      
var escapeRegex = /[[\].#*$><+~=|^:(),"'`-]+/g;
var dashesAtEnds = /(^-|-$)/g;

/**
 * TODO: Explore using CSS.escape when it becomes more available
 * in evergreen browsers.
 */
function escape(str) {
  return str
  // Replace all possible CSS selectors
  .replace(escapeRegex, '-')

  // Remove extraneous hyphens at the start and end
  .replace(dashesAtEnds, '');
}

//      
/**
 * Creates a broadcast that can be listened to, i.e. simple event emitter
 *
 * @see https://github.com/ReactTraining/react-broadcast
 */

var createBroadcast = function createBroadcast(initialState) {
  var listeners = {};
  var id = 0;
  var state = initialState;

  function publish(nextState) {
    state = nextState;

    // eslint-disable-next-line guard-for-in, no-restricted-syntax
    for (var key in listeners) {
      var listener = listeners[key];
      if (listener === undefined) {
        // eslint-disable-next-line no-continue
        continue;
      }

      listener(state);
    }
  }

  function subscribe(listener) {
    var currentId = id;
    listeners[currentId] = listener;
    id += 1;
    listener(state);
    return currentId;
  }

  function unsubscribe(unsubID) {
    listeners[unsubID] = undefined;
  }

  return { publish: publish, subscribe: subscribe, unsubscribe: unsubscribe };
};

//      
// Helper to call a given function, only once
var once = (function (cb) {
  var called = false;

  return function () {
    if (!called) {
      called = true;
      cb();
    }
  };
});

var _ThemeProvider$childC;
var _ThemeProvider$contex;

//      
/* globals React$Element */
// NOTE: DO NOT CHANGE, changing this is a semver major change!
var CHANNEL = '__styled-components__';
var CHANNEL_NEXT = CHANNEL + 'next__';

var CONTEXT_CHANNEL_SHAPE = prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
  getTheme: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  subscribe: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  unsubscribe: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
});

var warnChannelDeprecated = void 0;
if (true) {
  warnChannelDeprecated = once(function () {
    // eslint-disable-next-line no-console
    console.error('Warning: Usage of `context.' + CHANNEL + '` as a function is deprecated. It will be replaced with the object on `.context.' + CHANNEL_NEXT + '` in a future version.');
  });
}

var isFunction = function isFunction(test) {
  return typeof test === 'function';
};

/**
 * Provide a theme to an entire react component tree via context and event listeners (have to do
 * both context and event emitter as pure components block context updates)
 */

var ThemeProvider = function (_Component) {
  inherits(ThemeProvider, _Component);

  function ThemeProvider() {
    classCallCheck(this, ThemeProvider);

    var _this = possibleConstructorReturn(this, _Component.call(this));

    _this.unsubscribeToOuterId = -1;

    _this.getTheme = _this.getTheme.bind(_this);
    return _this;
  }

  ThemeProvider.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    // If there is a ThemeProvider wrapper anywhere around this theme provider, merge this theme
    // with the outer theme
    var outerContext = this.context[CHANNEL_NEXT];
    if (outerContext !== undefined) {
      this.unsubscribeToOuterId = outerContext.subscribe(function (theme) {
        _this2.outerTheme = theme;
      });
    }
    this.broadcast = createBroadcast(this.getTheme());
  };

  ThemeProvider.prototype.getChildContext = function getChildContext() {
    var _this3 = this,
        _babelHelpers$extends;

    return _extends({}, this.context, (_babelHelpers$extends = {}, _babelHelpers$extends[CHANNEL_NEXT] = {
      getTheme: this.getTheme,
      subscribe: this.broadcast.subscribe,
      unsubscribe: this.broadcast.unsubscribe
    }, _babelHelpers$extends[CHANNEL] = function (subscriber) {
      if (true) {
        warnChannelDeprecated();
      }

      // Patch the old `subscribe` provide via `CHANNEL` for older clients.
      var unsubscribeId = _this3.broadcast.subscribe(subscriber);
      return function () {
        return _this3.broadcast.unsubscribe(unsubscribeId);
      };
    }, _babelHelpers$extends));
  };

  ThemeProvider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.theme !== nextProps.theme) {
      this.broadcast.publish(this.getTheme(nextProps.theme));
    }
  };

  ThemeProvider.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.unsubscribeToOuterId !== -1) {
      this.context[CHANNEL_NEXT].unsubscribe(this.unsubscribeToOuterId);
    }
  };

  // Get the theme from the props, supporting both (outerTheme) => {} as well as object notation


  ThemeProvider.prototype.getTheme = function getTheme(passedTheme) {
    var theme = passedTheme || this.props.theme;
    if (isFunction(theme)) {
      var mergedTheme = theme(this.outerTheme);
      if ( true && !is_plain_object__WEBPACK_IMPORTED_MODULE_0___default()(mergedTheme)) {
        throw new Error('[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!');
      }
      return mergedTheme;
    }
    if (!is_plain_object__WEBPACK_IMPORTED_MODULE_0___default()(theme)) {
      throw new Error('[ThemeProvider] Please make your theme prop a plain object');
    }
    return _extends({}, this.outerTheme, theme);
  };

  ThemeProvider.prototype.render = function render() {
    if (!this.props.children) {
      return null;
    }
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.only(this.props.children);
  };

  return ThemeProvider;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

ThemeProvider.childContextTypes = (_ThemeProvider$childC = {}, _ThemeProvider$childC[CHANNEL] = prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func, _ThemeProvider$childC[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _ThemeProvider$childC);
ThemeProvider.contextTypes = (_ThemeProvider$contex = {}, _ThemeProvider$contex[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _ThemeProvider$contex);

//      

// HACK for generating all static styles without needing to allocate
// an empty execution context every single time...
var STATIC_EXECUTION_CONTEXT = {};

var _StyledComponent = (function (ComponentStyle, constructWithOptions) {
  var identifiers = {};

  /* We depend on components having unique IDs */
  var generateId = function generateId(_displayName, parentComponentId) {
    var displayName = typeof _displayName !== 'string' ? 'sc' : escape(_displayName);

    var componentId = void 0;

    /**
     * only fall back to hashing the component injection order if
     * a proper displayName isn't provided by the babel plugin
     */
    if (!_displayName) {
      var nr = (identifiers[displayName] || 0) + 1;
      identifiers[displayName] = nr;

      componentId = displayName + '-' + ComponentStyle.generateName(displayName + nr);
    } else {
      componentId = displayName + '-' + ComponentStyle.generateName(displayName);
    }

    return parentComponentId !== undefined ? parentComponentId + '-' + componentId : componentId;
  };

  var BaseStyledComponent = function (_Component) {
    inherits(BaseStyledComponent, _Component);

    function BaseStyledComponent() {
      var _temp, _this, _ret;

      classCallCheck(this, BaseStyledComponent);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.attrs = {}, _this.state = {
        theme: null,
        generatedClassName: ''
      }, _this.unsubscribeId = -1, _temp), possibleConstructorReturn(_this, _ret);
    }

    BaseStyledComponent.prototype.unsubscribeFromContext = function unsubscribeFromContext() {
      if (this.unsubscribeId !== -1) {
        this.context[CHANNEL_NEXT].unsubscribe(this.unsubscribeId);
      }
    };

    BaseStyledComponent.prototype.buildExecutionContext = function buildExecutionContext(theme, props) {
      var attrs = this.constructor.attrs;

      var context = _extends({}, props, { theme: theme });
      if (attrs === undefined) {
        return context;
      }

      this.attrs = Object.keys(attrs).reduce(function (acc, key) {
        var attr = attrs[key];
        // eslint-disable-next-line no-param-reassign
        acc[key] = typeof attr === 'function' ? attr(context) : attr;
        return acc;
      }, {});

      return _extends({}, context, this.attrs);
    };

    BaseStyledComponent.prototype.generateAndInjectStyles = function generateAndInjectStyles(theme, props) {
      var _constructor = this.constructor,
          attrs = _constructor.attrs,
          componentStyle = _constructor.componentStyle,
          warnTooManyClasses = _constructor.warnTooManyClasses;

      var styleSheet = this.context[CONTEXT_KEY] || StyleSheet.instance;

      // staticaly styled-components don't need to build an execution context object,
      // and shouldn't be increasing the number of class names
      if (componentStyle.isStatic && attrs === undefined) {
        return componentStyle.generateAndInjectStyles(STATIC_EXECUTION_CONTEXT, styleSheet);
      } else {
        var executionContext = this.buildExecutionContext(theme, props);
        var className = componentStyle.generateAndInjectStyles(executionContext, styleSheet);

        if ( true && warnTooManyClasses !== undefined) {
          warnTooManyClasses(className);
        }

        return className;
      }
    };

    BaseStyledComponent.prototype.componentWillMount = function componentWillMount() {
      var _this2 = this;

      var componentStyle = this.constructor.componentStyle;

      var styledContext = this.context[CHANNEL_NEXT];

      // If this is a staticaly-styled component, we don't need to the theme
      // to generate or build styles.
      if (componentStyle.isStatic) {
        var generatedClassName = this.generateAndInjectStyles(STATIC_EXECUTION_CONTEXT, this.props);
        this.setState({ generatedClassName: generatedClassName });
        // If there is a theme in the context, subscribe to the event emitter. This
        // is necessary due to pure components blocking context updates, this circumvents
        // that by updating when an event is emitted
      } else if (styledContext !== undefined) {
        var subscribe = styledContext.subscribe;

        this.unsubscribeId = subscribe(function (nextTheme) {
          // This will be called once immediately
          var theme = determineTheme(_this2.props, nextTheme, _this2.constructor.defaultProps);
          var generatedClassName = _this2.generateAndInjectStyles(theme, _this2.props);

          _this2.setState({ theme: theme, generatedClassName: generatedClassName });
        });
      } else {
        // eslint-disable-next-line react/prop-types
        var theme = this.props.theme || {};
        var _generatedClassName = this.generateAndInjectStyles(theme, this.props);
        this.setState({ theme: theme, generatedClassName: _generatedClassName });
      }
    };

    BaseStyledComponent.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      // If this is a staticaly-styled component, we don't need to listen to
      // props changes to update styles
      var componentStyle = this.constructor.componentStyle;

      if (componentStyle.isStatic) {
        return;
      }

      this.setState(function (oldState) {
        var theme = determineTheme(nextProps, oldState.theme, _this3.constructor.defaultProps);
        var generatedClassName = _this3.generateAndInjectStyles(theme, nextProps);

        return { theme: theme, generatedClassName: generatedClassName };
      });
    };

    BaseStyledComponent.prototype.componentWillUnmount = function componentWillUnmount() {
      this.unsubscribeFromContext();
    };

    BaseStyledComponent.prototype.render = function render() {
      var _this4 = this;

      // eslint-disable-next-line react/prop-types
      var innerRef = this.props.innerRef;
      var generatedClassName = this.state.generatedClassName;
      var _constructor2 = this.constructor,
          styledComponentId = _constructor2.styledComponentId,
          target = _constructor2.target;


      var isTargetTag = isTag(target);

      var className = [
      // eslint-disable-next-line react/prop-types
      this.props.className, styledComponentId, this.attrs.className, generatedClassName].filter(Boolean).join(' ');

      var baseProps = _extends({}, this.attrs, {
        className: className
      });

      if (isStyledComponent(target)) {
        baseProps.innerRef = innerRef;
      } else {
        baseProps.ref = innerRef;
      }

      var propsForElement = Object.keys(this.props).reduce(function (acc, propName) {
        // Don't pass through non HTML tags through to HTML elements
        // always omit innerRef
        if (propName !== 'innerRef' && propName !== 'className' && (!isTargetTag || validAttr(propName))) {
          // eslint-disable-next-line no-param-reassign
          acc[propName] = _this4.props[propName];
        }

        return acc;
      }, baseProps);

      return Object(react__WEBPACK_IMPORTED_MODULE_2__["createElement"])(target, propsForElement);
    };

    return BaseStyledComponent;
  }(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

  var createStyledComponent = function createStyledComponent(target, options, rules) {
    var _StyledComponent$cont;

    var _options$displayName = options.displayName,
        displayName = _options$displayName === undefined ? isTag(target) ? 'styled.' + target : 'Styled(' + getComponentName(target) + ')' : _options$displayName,
        _options$componentId = options.componentId,
        componentId = _options$componentId === undefined ? generateId(options.displayName, options.parentComponentId) : _options$componentId,
        _options$ParentCompon = options.ParentComponent,
        ParentComponent = _options$ParentCompon === undefined ? BaseStyledComponent : _options$ParentCompon,
        extendingRules = options.rules,
        attrs = options.attrs;


    var styledComponentId = options.displayName && options.componentId ? escape(options.displayName) + '-' + options.componentId : componentId;

    var componentStyle = new ComponentStyle(extendingRules === undefined ? rules : extendingRules.concat(rules), attrs, styledComponentId);

    var StyledComponent = function (_ParentComponent) {
      inherits(StyledComponent, _ParentComponent);

      function StyledComponent() {
        classCallCheck(this, StyledComponent);
        return possibleConstructorReturn(this, _ParentComponent.apply(this, arguments));
      }

      StyledComponent.withComponent = function withComponent(tag) {
        var previousComponentId = options.componentId,
            optionsToCopy = objectWithoutProperties(options, ['componentId']);


        var newComponentId = previousComponentId && previousComponentId + '-' + (isTag(tag) ? tag : escape(getComponentName(tag)));

        var newOptions = _extends({}, optionsToCopy, {
          componentId: newComponentId,
          ParentComponent: StyledComponent
        });

        return createStyledComponent(tag, newOptions, rules);
      };

      createClass(StyledComponent, null, [{
        key: 'extend',
        get: function get$$1() {
          var rulesFromOptions = options.rules,
              parentComponentId = options.componentId,
              optionsToCopy = objectWithoutProperties(options, ['rules', 'componentId']);


          var newRules = rulesFromOptions === undefined ? rules : rulesFromOptions.concat(rules);

          var newOptions = _extends({}, optionsToCopy, {
            rules: newRules,
            parentComponentId: parentComponentId,
            ParentComponent: StyledComponent
          });

          return constructWithOptions(createStyledComponent, target, newOptions);
        }
      }]);
      return StyledComponent;
    }(ParentComponent);

    StyledComponent.contextTypes = (_StyledComponent$cont = {}, _StyledComponent$cont[CHANNEL] = prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func, _StyledComponent$cont[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _StyledComponent$cont[CONTEXT_KEY] = prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.instanceOf(StyleSheet), prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.instanceOf(ServerStyleSheet)]), _StyledComponent$cont);
    StyledComponent.displayName = displayName;
    StyledComponent.styledComponentId = styledComponentId;
    StyledComponent.attrs = attrs;
    StyledComponent.componentStyle = componentStyle;
    StyledComponent.target = target;


    if (true) {
      StyledComponent.warnTooManyClasses = createWarnTooManyClasses(displayName);
    }

    return StyledComponent;
  };

  return createStyledComponent;
});

// murmurhash2 via https://gist.github.com/raycmorgan/588423

function doHash(str, seed) {
  var m = 0x5bd1e995;
  var r = 24;
  var h = seed ^ str.length;
  var length = str.length;
  var currentIndex = 0;

  while (length >= 4) {
    var k = UInt32(str, currentIndex);

    k = Umul32(k, m);
    k ^= k >>> r;
    k = Umul32(k, m);

    h = Umul32(h, m);
    h ^= k;

    currentIndex += 4;
    length -= 4;
  }

  switch (length) {
    case 3:
      h ^= UInt16(str, currentIndex);
      h ^= str.charCodeAt(currentIndex + 2) << 16;
      h = Umul32(h, m);
      break;

    case 2:
      h ^= UInt16(str, currentIndex);
      h = Umul32(h, m);
      break;

    case 1:
      h ^= str.charCodeAt(currentIndex);
      h = Umul32(h, m);
      break;
  }

  h ^= h >>> 13;
  h = Umul32(h, m);
  h ^= h >>> 15;

  return h >>> 0;
}

function UInt32(str, pos) {
  return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8) + (str.charCodeAt(pos++) << 16) + (str.charCodeAt(pos) << 24);
}

function UInt16(str, pos) {
  return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8);
}

function Umul32(n, m) {
  n = n | 0;
  m = m | 0;
  var nlo = n & 0xffff;
  var nhi = n >>> 16;
  var res = nlo * m + ((nhi * m & 0xffff) << 16) | 0;
  return res;
}

//      
var isStaticRules = function isStaticRules(rules, attrs) {
  for (var i = 0; i < rules.length; i += 1) {
    var rule = rules[i];

    // recursive case
    if (Array.isArray(rule) && !isStaticRules(rule)) {
      return false;
    } else if (typeof rule === 'function' && !isStyledComponent(rule)) {
      // functions are allowed to be static if they're just being
      // used to get the classname of a nested styled copmonent
      return false;
    }
  }

  if (attrs !== undefined) {
    // eslint-disable-next-line guard-for-in, no-restricted-syntax
    for (var key in attrs) {
      var value = attrs[key];
      if (typeof value === 'function') {
        return false;
      }
    }
  }

  return true;
};

var isHRMEnabled =  true && module.hot && false;

/*
 ComponentStyle is all the CSS-specific stuff, not
 the React-specific stuff.
 */
var _ComponentStyle = (function (nameGenerator, flatten, stringifyRules) {
  var ComponentStyle = function () {
    function ComponentStyle(rules, attrs, componentId) {
      classCallCheck(this, ComponentStyle);

      this.rules = rules;
      this.isStatic = !isHRMEnabled && isStaticRules(rules, attrs);
      this.componentId = componentId;
      if (!StyleSheet.instance.hasInjectedComponent(this.componentId)) {
        var placeholder =  true ? '.' + componentId + ' {}' : undefined;
        StyleSheet.instance.deferredInject(componentId, true, placeholder);
      }
    }

    /*
     * Flattens a rule set into valid CSS
     * Hashes it, wraps the whole chunk in a .hash1234 {}
     * Returns the hash to be injected on render()
     * */


    ComponentStyle.prototype.generateAndInjectStyles = function generateAndInjectStyles(executionContext, styleSheet) {
      var isStatic = this.isStatic,
          lastClassName = this.lastClassName;

      if (isStatic && lastClassName !== undefined) {
        return lastClassName;
      }

      var flatCSS = flatten(this.rules, executionContext);
      var hash = doHash(this.componentId + flatCSS.join(''));

      var existingName = styleSheet.getName(hash);
      if (existingName !== undefined) {
        if (styleSheet.stylesCacheable) {
          this.lastClassName = existingName;
        }
        return existingName;
      }

      var name = nameGenerator(hash);
      if (styleSheet.stylesCacheable) {
        this.lastClassName = existingName;
      }
      if (styleSheet.alreadyInjected(hash, name)) {
        return name;
      }

      var css = '\n' + stringifyRules(flatCSS, '.' + name);
      // NOTE: this can only be set when we inject the class-name.
      // For some reason, presumably due to how css is stringifyRules behaves in
      // differently between client and server, styles break.
      styleSheet.inject(this.componentId, true, css, hash, name);
      return name;
    };

    ComponentStyle.generateName = function generateName(str) {
      return nameGenerator(doHash(str));
    };

    return ComponentStyle;
  }();

  return ComponentStyle;
});

//      
// Thanks to ReactDOMFactories for this handy list!

var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr',

// SVG
'circle', 'clipPath', 'defs', 'ellipse', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

//      

var _styled = (function (styledComponent, constructWithOptions) {
  var styled = function styled(tag) {
    return constructWithOptions(styledComponent, tag);
  };

  // Shorthands for all valid HTML Elements
  domElements.forEach(function (domElement) {
    styled[domElement] = styled(domElement);
  });

  return styled;
});

//      
var replaceWhitespace = function replaceWhitespace(str) {
  return str.replace(/\s|\\n/g, '');
};

var _keyframes = (function (nameGenerator, stringifyRules, css) {
  return function (strings) {
    for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      interpolations[_key - 1] = arguments[_key];
    }

    var rules = css.apply(undefined, [strings].concat(interpolations));
    var hash = doHash(replaceWhitespace(JSON.stringify(rules)));

    var existingName = StyleSheet.instance.getName(hash);
    if (existingName) return existingName;

    var name = nameGenerator(hash);
    if (StyleSheet.instance.alreadyInjected(hash, name)) return name;

    var generatedCSS = stringifyRules(rules, name, '@keyframes');
    StyleSheet.instance.inject('sc-keyframes-' + name, true, generatedCSS, hash, name);
    return name;
  };
});

//      
var _injectGlobal = (function (stringifyRules, css) {
  var injectGlobal = function injectGlobal(strings) {
    for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      interpolations[_key - 1] = arguments[_key];
    }

    var rules = css.apply(undefined, [strings].concat(interpolations));
    var hash = doHash(JSON.stringify(rules));

    var componentId = 'sc-global-' + hash;
    if (StyleSheet.instance.hasInjectedComponent(componentId)) return;

    StyleSheet.instance.inject(componentId, false, stringifyRules(rules));
  };

  return injectGlobal;
});

//      


var _constructWithOptions = (function (css) {
  var constructWithOptions = function constructWithOptions(componentConstructor, tag) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if ( true && typeof tag !== 'string' && typeof tag !== 'function') {
      // $FlowInvalidInputTest
      throw new Error('Cannot create styled-component for component: ' + tag);
    }

    /* This is callable directly as a template function */
    var templateFunction = function templateFunction(strings) {
      for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        interpolations[_key - 1] = arguments[_key];
      }

      return componentConstructor(tag, options, css.apply(undefined, [strings].concat(interpolations)));
    };

    /* If config methods are called, wrap up a new template function and merge options */
    templateFunction.withConfig = function (config) {
      return constructWithOptions(componentConstructor, tag, _extends({}, options, config));
    };
    templateFunction.attrs = function (attrs) {
      return constructWithOptions(componentConstructor, tag, _extends({}, options, {
        attrs: _extends({}, options.attrs || {}, attrs)
      }));
    };

    return templateFunction;
  };

  return constructWithOptions;
});

//      
/* globals ReactClass */

var wrapWithTheme = function wrapWithTheme(Component$$1) {
  var _WithTheme$contextTyp;

  var componentName = Component$$1.displayName || Component$$1.name || 'Component';

  var shouldSetInnerRef = isStyledComponent(Component$$1) ||
  // NOTE: We can't pass a ref to a stateless functional component
  typeof Component$$1 === 'function' && !(Component$$1.prototype && 'isReactComponent' in Component$$1.prototype);

  var WithTheme = function (_React$Component) {
    inherits(WithTheme, _React$Component);

    function WithTheme() {
      var _temp, _this, _ret;

      classCallCheck(this, WithTheme);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {}, _this.unsubscribeId = -1, _temp), possibleConstructorReturn(_this, _ret);
    }

    // NOTE: This is so that isStyledComponent passes for the innerRef unwrapping


    WithTheme.prototype.componentWillMount = function componentWillMount() {
      var _this2 = this;

      var defaultProps = this.constructor.defaultProps;

      var styledContext = this.context[CHANNEL_NEXT];
      var themeProp = determineTheme(this.props, undefined, defaultProps);
      if (styledContext === undefined && themeProp === undefined && "development" !== 'production') {
        // eslint-disable-next-line no-console
        console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps');
      } else if (styledContext === undefined && themeProp !== undefined) {
        this.setState({ theme: themeProp });
      } else {
        var subscribe = styledContext.subscribe;

        this.unsubscribeId = subscribe(function (nextTheme) {
          var theme = determineTheme(_this2.props, nextTheme, defaultProps);
          _this2.setState({ theme: theme });
        });
      }
    };

    WithTheme.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var defaultProps = this.constructor.defaultProps;

      this.setState(function (oldState) {
        var theme = determineTheme(nextProps, oldState.theme, defaultProps);

        return { theme: theme };
      });
    };

    WithTheme.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this.unsubscribeId !== -1) {
        this.context[CHANNEL_NEXT].unsubscribe(this.unsubscribeId);
      }
    };

    WithTheme.prototype.render = function render() {
      // eslint-disable-next-line react/prop-types
      var innerRef = this.props.innerRef;
      var theme = this.state.theme;


      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component$$1, _extends({
        theme: theme
      }, this.props, {
        innerRef: shouldSetInnerRef ? innerRef : undefined,
        ref: shouldSetInnerRef ? undefined : innerRef
      }));
    };

    return WithTheme;
  }(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

  WithTheme.displayName = 'WithTheme(' + componentName + ')';
  WithTheme.styledComponentId = 'withTheme';
  WithTheme.contextTypes = (_WithTheme$contextTyp = {}, _WithTheme$contextTyp[CHANNEL] = prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func, _WithTheme$contextTyp[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _WithTheme$contextTyp);


  return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default()(WithTheme, Component$$1);
};

//      

/* Import singletons */
/* Import singleton constructors */
/* Import components */
/* Import Higher Order Components */
/* Instantiate singletons */
var ComponentStyle = _ComponentStyle(generateAlphabeticName, flatten, stringifyRules);
var constructWithOptions = _constructWithOptions(css);
var StyledComponent = _StyledComponent(ComponentStyle, constructWithOptions);

/* Instantiate exported singletons */
var keyframes = _keyframes(generateAlphabeticName, stringifyRules, css);
var injectGlobal = _injectGlobal(stringifyRules, css);
var styled = _styled(StyledComponent, constructWithOptions);

/* harmony default export */ __webpack_exports__["default"] = (styled);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/stylis/stylis.js":
/*!***************************************!*\
  !*** ./node_modules/stylis/stylis.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 *          __        ___
 *    _____/ /___  __/ (_)____
 *   / ___/ __/ / / / / / ___/
 *  (__  ) /_/ /_/ / / (__  )
 * /____/\__/\__, /_/_/____/
 *          /____/
 *
 * light - weight css preprocessor @licence MIT
 */
(function (factory) {/* eslint-disable */
	 true ? (module['exports'] = factory(null)) :
		undefined
}(/** @param {*=} options */function factory (options) {/* eslint-disable */

	'use strict'

	/**
	 * Notes
	 *
	 * The ['<method name>'] pattern is used to support closure compiler
	 * the jsdoc signatures are also used to the same effect
	 *
	 * ----
	 *
	 * int + int + int === n4 [faster]
	 *
	 * vs
	 *
	 * int === n1 && int === n2 && int === n3
	 *
	 * ----
	 *
	 * switch (int) { case ints...} [faster]
	 *
	 * vs
	 *
	 * if (int == 1 && int === 2 ...)
	 *
	 * ----
	 *
	 * The (first*n1 + second*n2 + third*n3) format used in the property parser
	 * is a simple way to hash the sequence of characters
	 * taking into account the index they occur in
	 * since any number of 3 character sequences could produce duplicates.
	 *
	 * On the other hand sequences that are directly tied to the index of the character
	 * resolve a far more accurate measure, it's also faster
	 * to evaluate one condition in a switch statement
	 * than three in an if statement regardless of the added math.
	 *
	 * This allows the vendor prefixer to be both small and fast.
	 */

	var nullptn = /^\0+/g /* matches leading null characters */
	var formatptn = /[\0\r\f]/g /* matches new line, null and formfeed characters */
	var colonptn = /: */g /* splits animation rules */
	var cursorptn = /zoo|gra/ /* assert cursor varient */
	var transformptn = /([,: ])(transform)/g /* vendor prefix transform, older webkit */
	var animationptn = /,+\s*(?![^(]*[)])/g /* splits multiple shorthand notation animations */
	var propertiesptn = / +\s*(?![^(]*[)])/g /* animation properties */
	var elementptn = / *[\0] */g /* selector elements */
	var selectorptn = /,\r+?/g /* splits selectors */
	var andptn = /([\t\r\n ])*\f?&/g /* match & */
	var escapeptn = /:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g /* matches :global(.*) */
	var invalidptn = /\W+/g /* removes invalid characters from keyframes */
	var keyframeptn = /@(k\w+)\s*(\S*)\s*/ /* matches @keyframes $1 */
	var plcholdrptn = /::(place)/g /* match ::placeholder varient */
	var readonlyptn = /:(read-only)/g /* match :read-only varient */
	var beforeptn = /\s+(?=[{\];=:>])/g /* matches \s before ] ; = : */
	var afterptn = /([[}=:>])\s+/g /* matches \s after characters [ } = : */
	var tailptn = /(\{[^{]+?);(?=\})/g /* matches tail semi-colons ;} */
	var whiteptn = /\s{2,}/g /* matches repeating whitespace */
	var pseudoptn = /([^\(])(:+) */g /* pseudo element */
	var writingptn = /[svh]\w+-[tblr]{2}/ /* match writing mode property values */
	var gradientptn = /([\w-]+t\()/g /* match *gradient property */
	var supportsptn = /\(\s*(.*)\s*\)/g /* match supports (groups) */
	var propertyptn = /([\s\S]*?);/g /* match properties leading semicolon */
	var selfptn = /-self|flex-/g /* match flex- and -self in align-self: flex-*; */
	var pseudofmt = /[^]*?(:[rp][el]a[\w-]+)[^]*/ /* extrats :readonly or :placholder from selector */
	var trimptn = /[ \t]+$/ /* match tail whitspace */
	var dimensionptn = /stretch|:\s*\w+\-(?:conte|avail)/ /* match max/min/fit-content, fill-available */
	var imgsrcptn = /([^-])(image-set\()/

	/* vendors */
	var webkit = '-webkit-'
	var moz = '-moz-'
	var ms = '-ms-'

	/* character codes */
	var SEMICOLON = 59 /* ; */
	var CLOSEBRACES = 125 /* } */
	var OPENBRACES = 123 /* { */
	var OPENPARENTHESES = 40 /* ( */
	var CLOSEPARENTHESES = 41 /* ) */
	var OPENBRACKET = 91 /* [ */
	var CLOSEBRACKET = 93 /* ] */
	var NEWLINE = 10 /* \n */
	var CARRIAGE = 13 /* \r */
	var TAB = 9 /* \t */
	var AT = 64 /* @ */
	var SPACE = 32 /*   */
	var AND = 38 /* & */
	var DASH = 45 /* - */
	var UNDERSCORE = 95 /* _ */
	var STAR = 42 /* * */
	var COMMA = 44 /* , */
	var COLON = 58 /* : */
	var SINGLEQUOTE = 39 /* ' */
	var DOUBLEQUOTE = 34 /* " */
	var FOWARDSLASH = 47 /* / */
	var GREATERTHAN = 62 /* > */
	var PLUS = 43 /* + */
	var TILDE = 126 /* ~ */
	var NULL = 0 /* \0 */
	var FORMFEED = 12 /* \f */
	var VERTICALTAB = 11 /* \v */

	/* special identifiers */
	var KEYFRAME = 107 /* k */
	var MEDIA = 109 /* m */
	var SUPPORTS = 115 /* s */
	var PLACEHOLDER = 112 /* p */
	var READONLY = 111 /* o */
	var IMPORT = 105 /* <at>i */
	var CHARSET = 99 /* <at>c */
	var DOCUMENT = 100 /* <at>d */
	var PAGE = 112 /* <at>p */

	var column = 1 /* current column */
	var line = 1 /* current line numebr */
	var pattern = 0 /* :pattern */

	var cascade = 1 /* #id h1 h2 vs h1#id h2#id  */
	var prefix = 1 /* vendor prefix */
	var escape = 1 /* escape :global() pattern */
	var compress = 0 /* compress output */
	var semicolon = 0 /* no/semicolon option */
	var preserve = 0 /* preserve empty selectors */

	/* empty reference */
	var array = []

	/* plugins */
	var plugins = []
	var plugged = 0
	var should = null

	/* plugin context */
	var POSTS = -2
	var PREPS = -1
	var UNKWN = 0
	var PROPS = 1
	var BLCKS = 2
	var ATRUL = 3

	/* plugin newline context */
	var unkwn = 0

	/* keyframe animation */
	var keyed = 1
	var key = ''

	/* selector namespace */
	var nscopealt = ''
	var nscope = ''

	/**
	 * Compile
	 *
	 * @param {Array<string>} parent
	 * @param {Array<string>} current
	 * @param {string} body
	 * @param {number} id
	 * @param {number} depth
	 * @return {string}
	 */
	function compile (parent, current, body, id, depth) {
		var bracket = 0 /* brackets [] */
		var comment = 0 /* comments /* // or /* */
		var parentheses = 0 /* functions () */
		var quote = 0 /* quotes '', "" */

		var first = 0 /* first character code */
		var second = 0 /* second character code */
		var code = 0 /* current character code */
		var tail = 0 /* previous character code */
		var trail = 0 /* character before previous code */
		var peak = 0 /* previous non-whitespace code */

		var counter = 0 /* count sequence termination */
		var context = 0 /* track current context */
		var atrule = 0 /* track @at-rule context */
		var pseudo = 0 /* track pseudo token index */
		var caret = 0 /* current character index */
		var format = 0 /* control character formating context */
		var insert = 0 /* auto semicolon insertion */
		var invert = 0 /* inverted selector pattern */
		var length = 0 /* generic length address */
		var eof = body.length /* end of file(length) */
		var eol = eof - 1 /* end of file(characters) */

		var char = '' /* current character */
		var chars = '' /* current buffer of characters */
		var child = '' /* next buffer of characters */
		var out = '' /* compiled body */
		var children = '' /* compiled children */
		var flat = '' /* compiled leafs */
		var selector /* generic selector address */
		var result /* generic address */

		// ...build body
		while (caret < eof) {
			code = body.charCodeAt(caret)

			// eof varient
			if (caret === eol) {
				// last character + noop context, add synthetic padding for noop context to terminate
				if (comment + quote + parentheses + bracket !== 0) {
					if (comment !== 0) {
						code = comment === FOWARDSLASH ? NEWLINE : FOWARDSLASH
					}

					quote = parentheses = bracket = 0
					eof++
					eol++
				}
			}

			if (comment + quote + parentheses + bracket === 0) {
				// eof varient
				if (caret === eol) {
					if (format > 0) {
						chars = chars.replace(formatptn, '')
					}

					if (chars.trim().length > 0) {
						switch (code) {
							case SPACE:
							case TAB:
							case SEMICOLON:
							case CARRIAGE:
							case NEWLINE: {
								break
							}
							default: {
								chars += body.charAt(caret)
							}
						}

						code = SEMICOLON
					}
				}

				// auto semicolon insertion
				if (insert === 1) {
					switch (code) {
						// false flags
						case OPENBRACES:
						case CLOSEBRACES:
						case SEMICOLON:
						case DOUBLEQUOTE:
						case SINGLEQUOTE:
						case OPENPARENTHESES:
						case CLOSEPARENTHESES:
						case COMMA: {
							insert = 0
						}
						// ignore
						case TAB:
						case CARRIAGE:
						case NEWLINE:
						case SPACE: {
							break
						}
						// valid
						default: {
							insert = 0
							length = caret
							first = code
							caret--
							code = SEMICOLON

							while (length < eof) {
								switch (body.charCodeAt(length++)) {
									case NEWLINE:
									case CARRIAGE:
									case SEMICOLON: {
										++caret
										code = first
										length = eof
										break
									}
									case COLON: {
										if (format > 0) {
											++caret
											code = first
										}
									}
									case OPENBRACES: {
										length = eof
									}
								}
							}
						}
					}
				}

				// token varient
				switch (code) {
					case OPENBRACES: {
						chars = chars.trim()
						first = chars.charCodeAt(0)
						counter = 1
						length = ++caret

						while (caret < eof) {
							switch (code = body.charCodeAt(caret)) {
								case OPENBRACES: {
									counter++
									break
								}
								case CLOSEBRACES: {
									counter--
									break
								}
								case FOWARDSLASH: {
									switch (second = body.charCodeAt(caret + 1)) {
										// /*, //
										case STAR:
										case FOWARDSLASH: {
											caret = delimited(second, caret, eol, body)
										}
									}
									break
								}
								// given "[" === 91 & "]" === 93 hence forth 91 + 1 + 1 === 93
								case OPENBRACKET: {
									code++
								}
								// given "(" === 40 & ")" === 41 hence forth 40 + 1 === 41
								case OPENPARENTHESES: {
									code++
								}
								// quote tail delimiter is identical to the head delimiter hence noop,
								// fallthrough clauses have been shifted to the correct tail delimiter
								case DOUBLEQUOTE:
								case SINGLEQUOTE: {
									while (caret++ < eol) {
										if (body.charCodeAt(caret) === code) {
											break
										}
									}
								}
							}

							if (counter === 0) {
								break
							}

							caret++
						}

						child = body.substring(length, caret)

						if (first === NULL) {
							first = (chars = chars.replace(nullptn, '').trim()).charCodeAt(0)
						}

						switch (first) {
							// @at-rule
							case AT: {
								if (format > 0) {
									chars = chars.replace(formatptn, '')
								}

								second = chars.charCodeAt(1)

								switch (second) {
									case DOCUMENT:
									case MEDIA:
									case SUPPORTS:
									case DASH: {
										selector = current
										break
									}
									default: {
										selector = array
									}
								}

								child = compile(current, selector, child, second, depth+1)
								length = child.length

								// preserve empty @at-rule
								if (preserve > 0 && length === 0) {
									length = chars.length
								}

								// execute plugins, @at-rule context
								if (plugged > 0) {
									selector = select(array, chars, invert)
									result = proxy(ATRUL, child, selector, current, line, column, length, second, depth, id)
									chars = selector.join('')

									if (result !== void 0) {
										if ((length = (child = result.trim()).length) === 0) {
											second = 0
											child = ''
										}
									}
								}

								if (length > 0) {
									switch (second) {
										case SUPPORTS: {
											chars = chars.replace(supportsptn, supports)
										}
										case DOCUMENT:
										case MEDIA:
										case DASH: {
											child = chars + '{' + child + '}'
											break
										}
										case KEYFRAME: {
											chars = chars.replace(keyframeptn, '$1 $2' + (keyed > 0 ? key : ''))
											child = chars + '{' + child + '}'

											if (prefix === 1 || (prefix === 2 && vendor('@'+child, 3))) {
												child = '@' + webkit + child + '@' + child
											} else {
												child = '@' + child
											}
											break
										}
										default: {
											child = chars + child

											if (id === PAGE) {
												child = (out += child, '')
											}
										}
									}
								} else {
									child = ''
								}

								break
							}
							// selector
							default: {
								child = compile(current, select(current, chars, invert), child, id, depth+1)
							}
						}

						children += child

						// reset
						context = 0
						insert = 0
						pseudo = 0
						format = 0
						invert = 0
						atrule = 0
						chars = ''
						child = ''
						code = body.charCodeAt(++caret)
						break
					}
					case CLOSEBRACES:
					case SEMICOLON: {
						chars = (format > 0 ? chars.replace(formatptn, '') : chars).trim()

						if ((length = chars.length) > 1) {
							// monkey-patch missing colon
							if (pseudo === 0) {
								first = chars.charCodeAt(0)

								// first character is a letter or dash, buffer has a space character
								if ((first === DASH || first > 96 && first < 123)) {
									length = (chars = chars.replace(' ', ':')).length
								}
							}

							// execute plugins, property context
							if (plugged > 0) {
								if ((result = proxy(PROPS, chars, current, parent, line, column, out.length, id, depth, id)) !== void 0) {
									if ((length = (chars = result.trim()).length) === 0) {
										chars = '\0\0'
									}
								}
							}

							first = chars.charCodeAt(0)
							second = chars.charCodeAt(1)

							switch (first) {
								case NULL: {
									break
								}
								case AT: {
									if (second === IMPORT || second === CHARSET) {
										flat += chars + body.charAt(caret)
										break
									}
								}
								default: {
									if (chars.charCodeAt(length-1) === COLON) {
										break
									}

									out += property(chars, first, second, chars.charCodeAt(2))
								}
							}
						}

						// reset
						context = 0
						insert = 0
						pseudo = 0
						format = 0
						invert = 0
						chars = ''
						code = body.charCodeAt(++caret)
						break
					}
				}
			}

			// parse characters
			switch (code) {
				case CARRIAGE:
				case NEWLINE: {
					// auto insert semicolon
					if (comment + quote + parentheses + bracket + semicolon === 0) {
						// valid non-whitespace characters that
						// may precede a newline
						switch (peak) {
							case CLOSEPARENTHESES:
							case SINGLEQUOTE:
							case DOUBLEQUOTE:
							case AT:
							case TILDE:
							case GREATERTHAN:
							case STAR:
							case PLUS:
							case FOWARDSLASH:
							case DASH:
							case COLON:
							case COMMA:
							case SEMICOLON:
							case OPENBRACES:
							case CLOSEBRACES: {
								break
							}
							default: {
								// current buffer has a colon
								if (pseudo > 0) {
									insert = 1
								}
							}
						}
					}

					// terminate line comment
					if (comment === FOWARDSLASH) {
						comment = 0
					} else if (cascade + context === 0 && id !== KEYFRAME && chars.length > 0) {
						format = 1
						chars += '\0'
					}

					// execute plugins, newline context
					if (plugged * unkwn > 0) {
						proxy(UNKWN, chars, current, parent, line, column, out.length, id, depth, id)
					}

					// next line, reset column position
					column = 1
					line++
					break
				}
				case SEMICOLON:
				case CLOSEBRACES: {
					if (comment + quote + parentheses + bracket === 0) {
						column++
						break
					}
				}
				default: {
					// increment column position
					column++

					// current character
					char = body.charAt(caret)

					// remove comments, escape functions, strings, attributes and prepare selectors
					switch (code) {
						case TAB:
						case SPACE: {
							if (quote + bracket + comment === 0) {
								switch (tail) {
									case COMMA:
									case COLON:
									case TAB:
									case SPACE: {
										char = ''
										break
									}
									default: {
										if (code !== SPACE) {
											char = ' '
										}
									}
								}
							}
							break
						}
						// escape breaking control characters
						case NULL: {
							char = '\\0'
							break
						}
						case FORMFEED: {
							char = '\\f'
							break
						}
						case VERTICALTAB: {
							char = '\\v'
							break
						}
						// &
						case AND: {
							// inverted selector pattern i.e html &
							if (quote + comment + bracket === 0 && cascade > 0) {
								invert = 1
								format = 1
								char = '\f' + char
							}
							break
						}
						// ::p<l>aceholder, l
						// :read-on<l>y, l
						case 108: {
							if (quote + comment + bracket + pattern === 0 && pseudo > 0) {
								switch (caret - pseudo) {
									// ::placeholder
									case 2: {
										if (tail === PLACEHOLDER && body.charCodeAt(caret-3) === COLON) {
											pattern = tail
										}
									}
									// :read-only
									case 8: {
										if (trail === READONLY) {
											pattern = trail
										}
									}
								}
							}
							break
						}
						// :<pattern>
						case COLON: {
							if (quote + comment + bracket === 0) {
								pseudo = caret
							}
							break
						}
						// selectors
						case COMMA: {
							if (comment + parentheses + quote + bracket === 0) {
								format = 1
								char += '\r'
							}
							break
						}
						// quotes
						case DOUBLEQUOTE:
						case SINGLEQUOTE: {
							if (comment === 0) {
								quote = quote === code ? 0 : (quote === 0 ? code : quote)
							}
							break
						}
						// attributes
						case OPENBRACKET: {
							if (quote + comment + parentheses === 0) {
								bracket++
							}
							break
						}
						case CLOSEBRACKET: {
							if (quote + comment + parentheses === 0) {
								bracket--
							}
							break
						}
						// functions
						case CLOSEPARENTHESES: {
							if (quote + comment + bracket === 0) {
								parentheses--
							}
							break
						}
						case OPENPARENTHESES: {
							if (quote + comment + bracket === 0) {
								if (context === 0) {
									switch (tail*2 + trail*3) {
										// :matches
										case 533: {
											break
										}
										// :global, :not, :nth-child etc...
										default: {
											counter = 0
											context = 1
										}
									}
								}

								parentheses++
							}
							break
						}
						case AT: {
							if (comment + parentheses + quote + bracket + pseudo + atrule === 0) {
								atrule = 1
							}
							break
						}
						// block/line comments
						case STAR:
						case FOWARDSLASH: {
							if (quote + bracket + parentheses > 0) {
								break
							}

							switch (comment) {
								// initialize line/block comment context
								case 0: {
									switch (code*2 + body.charCodeAt(caret+1)*3) {
										// //
										case 235: {
											comment = FOWARDSLASH
											break
										}
										// /*
										case 220: {
											length = caret
											comment = STAR
											break
										}
									}
									break
								}
								// end block comment context
								case STAR: {
									if (code === FOWARDSLASH && tail === STAR && length + 2 !== caret) {
										// /*<!> ... */, !
										if (body.charCodeAt(length+2) === 33) {
											out += body.substring(length, caret+1)
										}
										char = ''
										comment = 0
									}
								}
							}
						}
					}

					// ignore comment blocks
					if (comment === 0) {
						// aggressive isolation mode, divide each individual selector
						// including selectors in :not function but excluding selectors in :global function
						if (cascade + quote + bracket + atrule === 0 && id !== KEYFRAME && code !== SEMICOLON) {
							switch (code) {
								case COMMA:
								case TILDE:
								case GREATERTHAN:
								case PLUS:
								case CLOSEPARENTHESES:
								case OPENPARENTHESES: {
									if (context === 0) {
										// outside of an isolated context i.e nth-child(<...>)
										switch (tail) {
											case TAB:
											case SPACE:
											case NEWLINE:
											case CARRIAGE: {
												char = char + '\0'
												break
											}
											default: {
												char = '\0' + char + (code === COMMA ? '' : '\0')
											}
										}
										format = 1
									} else {
										// within an isolated context, sleep untill it's terminated
										switch (code) {
											case OPENPARENTHESES: {
												// :globa<l>(
												if (pseudo + 7 === caret && tail === 108) {
													pseudo = 0
												}
												context = ++counter
												break
											}
											case CLOSEPARENTHESES: {
												if ((context = --counter) === 0) {
													format = 1
													char += '\0'
												}
												break
											}
										}
									}
									break
								}
								case TAB:
								case SPACE: {
									switch (tail) {
										case NULL:
										case OPENBRACES:
										case CLOSEBRACES:
										case SEMICOLON:
										case COMMA:
										case FORMFEED:
										case TAB:
										case SPACE:
										case NEWLINE:
										case CARRIAGE: {
											break
										}
										default: {
											// ignore in isolated contexts
											if (context === 0) {
												format = 1
												char += '\0'
											}
										}
									}
								}
							}
						}

						// concat buffer of characters
						chars += char

						// previous non-whitespace character code
						if (code !== SPACE && code !== TAB) {
							peak = code
						}
					}
				}
			}

			// tail character codes
			trail = tail
			tail = code

			// visit every character
			caret++
		}

		length = out.length

		// preserve empty selector
 		if (preserve > 0) {
 			if (length === 0 && children.length === 0 && (current[0].length === 0) === false) {
 				if (id !== MEDIA || (current.length === 1 && (cascade > 0 ? nscopealt : nscope) === current[0])) {
					length = current.join(',').length + 2
 				}
 			}
		}

		if (length > 0) {
			// cascade isolation mode?
			selector = cascade === 0 && id !== KEYFRAME ? isolate(current) : current

			// execute plugins, block context
			if (plugged > 0) {
				result = proxy(BLCKS, out, selector, parent, line, column, length, id, depth, id)

				if (result !== void 0 && (out = result).length === 0) {
					return flat + out + children
				}
			}

			out = selector.join(',') + '{' + out + '}'

			if (prefix*pattern !== 0) {
				if (prefix === 2 && !vendor(out, 2))
					pattern = 0

				switch (pattern) {
					// ::read-only
					case READONLY: {
						out = out.replace(readonlyptn, ':'+moz+'$1')+out
						break
					}
					// ::placeholder
					case PLACEHOLDER: {
						out = (
							out.replace(plcholdrptn, '::' + webkit + 'input-$1') +
							out.replace(plcholdrptn, '::' + moz + '$1') +
							out.replace(plcholdrptn, ':' + ms + 'input-$1') + out
						)
						break
					}
				}

				pattern = 0
			}
		}

		return flat + out + children
	}

	/**
	 * Select
	 *
	 * @param {Array<string>} parent
	 * @param {string} current
	 * @param {number} invert
	 * @return {Array<string>}
	 */
	function select (parent, current, invert) {
		var selectors = current.trim().split(selectorptn)
		var out = selectors

		var length = selectors.length
		var l = parent.length

		switch (l) {
			// 0-1 parent selectors
			case 0:
			case 1: {
				for (var i = 0, selector = l === 0 ? '' : parent[0] + ' '; i < length; ++i) {
					out[i] = scope(selector, out[i], invert, l).trim()
				}
				break
			}
			// >2 parent selectors, nested
			default: {
				for (var i = 0, j = 0, out = []; i < length; ++i) {
					for (var k = 0; k < l; ++k) {
						out[j++] = scope(parent[k] + ' ', selectors[i], invert, l).trim()
					}
				}
			}
		}

		return out
	}

	/**
	 * Scope
	 *
	 * @param {string} parent
	 * @param {string} current
	 * @param {number} invert
	 * @param {number} level
	 * @return {string}
	 */
	function scope (parent, current, invert, level) {
		var selector = current
		var code = selector.charCodeAt(0)

		// trim leading whitespace
		if (code < 33) {
			code = (selector = selector.trim()).charCodeAt(0)
		}

		switch (code) {
			// &
			case AND: {
				switch (cascade + level) {
					case 0:
					case 1: {
						if (parent.trim().length === 0) {
							break
						}
					}
					default: {
						return selector.replace(andptn, '$1'+parent.trim())
					}
				}
				break
			}
			// :
			case COLON: {
				switch (selector.charCodeAt(1)) {
					// g in :global
					case 103: {
						if (escape > 0 && cascade > 0) {
							return selector.replace(escapeptn, '$1').replace(andptn, '$1'+nscope)
						}
						break
					}
					default: {
						// :hover
						return parent.trim() + selector.replace(andptn, '$1'+parent.trim())
					}
				}
			}
			default: {
				// html &
				if (invert*cascade > 0 && selector.indexOf('\f') > 0) {
					return selector.replace(andptn, (parent.charCodeAt(0) === COLON ? '' : '$1')+parent.trim())
				}
			}
		}

		return parent + selector
	}

	/**
	 * Property
	 *
	 * @param {string} input
	 * @param {number} first
	 * @param {number} second
	 * @param {number} third
	 * @return {string}
	 */
	function property (input, first, second, third) {
		var index = 0
		var out = input + ';'
		var hash = (first*2) + (second*3) + (third*4)
		var cache

		// animation: a, n, i characters
		if (hash === 944) {
			return animation(out)
		} else if (prefix === 0 || (prefix === 2 && !vendor(out, 1))) {
			return out
		}

		// vendor prefix
		switch (hash) {
			// text-decoration/text-size-adjust/text-shadow/text-align/text-transform: t, e, x
			case 1015: {
				// text-shadow/text-align/text-transform, a
				return out.charCodeAt(10) === 97 ? webkit + out + out : out
			}
			// filter/fill f, i, l
			case 951: {
				// filter, t
				return out.charCodeAt(3) === 116 ? webkit + out + out : out
			}
			// color/column, c, o, l
			case 963: {
				// column, n
				return out.charCodeAt(5) === 110 ? webkit + out + out : out
			}
			// box-decoration-break, b, o, x
			case 1009: {
				if (out.charCodeAt(4) !== 100) {
					break
				}
			}
			// mask, m, a, s
			// clip-path, c, l, i
			case 969:
			case 942: {
				return webkit + out + out
			}
			// appearance: a, p, p
			case 978: {
				return webkit + out + moz + out + out
			}
			// hyphens: h, y, p
			// user-select: u, s, e
			case 1019:
			case 983: {
				return webkit + out + moz + out + ms + out + out
			}
			// background/backface-visibility, b, a, c
			case 883: {
				// backface-visibility, -
				if (out.charCodeAt(8) === DASH) {
					return webkit + out + out
				}

				// image-set(...)
				if (out.indexOf('image-set(', 11) > 0) {
					return out.replace(imgsrcptn, '$1'+webkit+'$2') + out
				}

				return out
			}
			// flex: f, l, e
			case 932: {
				if (out.charCodeAt(4) === DASH) {
					switch (out.charCodeAt(5)) {
						// flex-grow, g
						case 103: {
							return webkit + 'box-' + out.replace('-grow', '') + webkit + out + ms + out.replace('grow', 'positive') + out
						}
						// flex-shrink, s
						case 115: {
							return webkit + out + ms + out.replace('shrink', 'negative') + out
						}
						// flex-basis, b
						case 98: {
							return webkit + out + ms + out.replace('basis', 'preferred-size') + out
						}
					}
				}

				return webkit + out + ms + out + out
			}
			// order: o, r, d
			case 964: {
				return webkit + out + ms + 'flex' + '-' + out + out
			}
			// justify-items/justify-content, j, u, s
			case 1023: {
				// justify-content, c
				if (out.charCodeAt(8) !== 99) {
					break
				}

				cache = out.substring(out.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify')
				return webkit + 'box-pack' + cache + webkit + out + ms + 'flex-pack' + cache + out
			}
			// cursor, c, u, r
			case 1005: {
				return cursorptn.test(out) ? out.replace(colonptn, ':' + webkit) + out.replace(colonptn, ':' + moz) + out : out
			}
			// writing-mode, w, r, i
			case 1000: {
				cache = out.substring(13).trim()
				index = cache.indexOf('-') + 1

				switch (cache.charCodeAt(0)+cache.charCodeAt(index)) {
					// vertical-lr
					case 226: {
						cache = out.replace(writingptn, 'tb')
						break
					}
					// vertical-rl
					case 232: {
						cache = out.replace(writingptn, 'tb-rl')
						break
					}
					// horizontal-tb
					case 220: {
						cache = out.replace(writingptn, 'lr')
						break
					}
					default: {
						return out
					}
				}

				return webkit + out + ms + cache + out
			}
			// position: sticky
			case 1017: {
				if (out.indexOf('sticky', 9) === -1) {
					return out
				}
			}
			// display(flex/inline-flex/inline-box): d, i, s
			case 975: {
				index = (out = input).length - 10
				cache = (out.charCodeAt(index) === 33 ? out.substring(0, index) : out).substring(input.indexOf(':', 7) + 1).trim()

				switch (hash = cache.charCodeAt(0) + (cache.charCodeAt(7)|0)) {
					// inline-
					case 203: {
						// inline-box
						if (cache.charCodeAt(8) < 111) {
							break
						}
					}
					// inline-box/sticky
					case 115: {
						out = out.replace(cache, webkit+cache)+';'+out
						break
					}
					// inline-flex
					// flex
					case 207:
					case 102: {
						out = (
							out.replace(cache, webkit+(hash > 102 ? 'inline-' : '')+'box')+';'+
							out.replace(cache, webkit+cache)+';'+
							out.replace(cache, ms+cache+'box')+';'+
							out
						)
					}
				}

				return out + ';'
			}
			// align-items, align-center, align-self: a, l, i, -
			case 938: {
				if (out.charCodeAt(5) === DASH) {
					switch (out.charCodeAt(6)) {
						// align-items, i
						case 105: {
							cache = out.replace('-items', '')
							return webkit + out + webkit + 'box-' + cache + ms + 'flex-' + cache + out
						}
						// align-self, s
						case 115: {
							return webkit + out + ms + 'flex-item-' + out.replace(selfptn, '') + out
						}
						// align-content
						default: {
							return webkit + out + ms + 'flex-line-pack' + out.replace('align-content', '').replace(selfptn, '') + out
						}
					}
				}
				break
			}
			// min/max
			case 973:
			case 989: {
				// min-/max- height/width/block-size/inline-size
				if (out.charCodeAt(3) !== DASH || out.charCodeAt(4) === 122) {
					break
				}
			}
			// height/width: min-content / width: max-content
			case 931:
			case 953: {
				if (dimensionptn.test(input) === true) {
					// stretch
					if ((cache = input.substring(input.indexOf(':') + 1)).charCodeAt(0) === 115)
						return property(input.replace('stretch', 'fill-available'), first, second, third).replace(':fill-available', ':stretch')
					else
						return out.replace(cache, webkit + cache) + out.replace(cache, moz + cache.replace('fill-', '')) + out
				}
				break
			}
			// transform, transition: t, r, a
			case 962: {
				out = webkit + out + (out.charCodeAt(5) === 102 ? ms + out : '') + out

				// transitions
				if (second + third === 211 && out.charCodeAt(13) === 105 && out.indexOf('transform', 10) > 0) {
					return out.substring(0, out.indexOf(';', 27) + 1).replace(transformptn, '$1' + webkit + '$2') + out
				}

				break
			}
		}

		return out
	}

	/**
	 * Vendor
	 *
	 * @param {string} content
	 * @param {number} context
	 * @return {boolean}
	 */
	function vendor (content, context) {
		var index = content.indexOf(context === 1 ? ':' : '{')
		var key = content.substring(0, context !== 3 ? index : 10)
		var value = content.substring(index + 1, content.length - 1)

		return should(context !== 2 ? key : key.replace(pseudofmt, '$1'), value, context)
	}

	/**
	 * Supports
	 *
	 * @param {string} match
	 * @param {string} group
	 * @return {string}
	 */
	function supports (match, group) {
		var out = property(group, group.charCodeAt(0), group.charCodeAt(1), group.charCodeAt(2))

		return out !== group+';' ? out.replace(propertyptn, ' or ($1)').substring(4) : '('+group+')'
	}

	/**
	 * Animation
	 *
	 * @param {string} input
	 * @return {string}
	 */
	function animation (input) {
		var length = input.length
		var index = input.indexOf(':', 9) + 1
		var declare = input.substring(0, index).trim()
		var out = input.substring(index, length-1).trim()

		switch (input.charCodeAt(9)*keyed) {
			case 0: {
				break
			}
			// animation-*, -
			case DASH: {
				// animation-name, n
				if (input.charCodeAt(10) !== 110) {
					break
				}
			}
			// animation/animation-name
			default: {
				// split in case of multiple animations
				var list = out.split((out = '', animationptn))

				for (var i = 0, index = 0, length = list.length; i < length; index = 0, ++i) {
					var value = list[i]
					var items = value.split(propertiesptn)

					while (value = items[index]) {
						var peak = value.charCodeAt(0)

						if (keyed === 1 && (
							// letters
							(peak > AT && peak < 90) || (peak > 96 && peak < 123) || peak === UNDERSCORE ||
							// dash but not in sequence i.e --
							(peak === DASH && value.charCodeAt(1) !== DASH)
						)) {
							// not a number/function
							switch (isNaN(parseFloat(value)) + (value.indexOf('(') !== -1)) {
								case 1: {
									switch (value) {
										// not a valid reserved keyword
										case 'infinite': case 'alternate': case 'backwards': case 'running':
										case 'normal': case 'forwards': case 'both': case 'none': case 'linear':
										case 'ease': case 'ease-in': case 'ease-out': case 'ease-in-out':
										case 'paused': case 'reverse': case 'alternate-reverse': case 'inherit':
										case 'initial': case 'unset': case 'step-start': case 'step-end': {
											break
										}
										default: {
											value += key
										}
									}
								}
							}
						}

						items[index++] = value
					}

					out += (i === 0 ? '' : ',') + items.join(' ')
				}
			}
		}

		out = declare + out + ';'

		if (prefix === 1 || (prefix === 2 && vendor(out, 1)))
			return webkit + out + out

		return out
	}

	/**
	 * Isolate
	 *
	 * @param {Array<string>} current
	 */
	function isolate (current) {
		for (var i = 0, length = current.length, selector = Array(length), padding, element; i < length; ++i) {
			// split individual elements in a selector i.e h1 h2 === [h1, h2]
			var elements = current[i].split(elementptn)
			var out = ''

			for (var j = 0, size = 0, tail = 0, code = 0, l = elements.length; j < l; ++j) {
				// empty element
				if ((size = (element = elements[j]).length) === 0 && l > 1) {
					continue
				}

				tail = out.charCodeAt(out.length-1)
				code = element.charCodeAt(0)
				padding = ''

				if (j !== 0) {
					// determine if we need padding
					switch (tail) {
						case STAR:
						case TILDE:
						case GREATERTHAN:
						case PLUS:
						case SPACE:
						case OPENPARENTHESES:  {
							break
						}
						default: {
							padding = ' '
						}
					}
				}

				switch (code) {
					case AND: {
						element = padding + nscopealt
					}
					case TILDE:
					case GREATERTHAN:
					case PLUS:
					case SPACE:
					case CLOSEPARENTHESES:
					case OPENPARENTHESES: {
						break
					}
					case OPENBRACKET: {
						element = padding + element + nscopealt
						break
					}
					case COLON: {
						switch (element.charCodeAt(1)*2 + element.charCodeAt(2)*3) {
							// :global
							case 530: {
								if (escape > 0) {
									element = padding + element.substring(8, size - 1)
									break
								}
							}
							// :hover, :nth-child(), ...
							default: {
								if (j < 1 || elements[j-1].length < 1) {
									element = padding + nscopealt + element
								}
							}
						}
						break
					}
					case COMMA: {
						padding = ''
					}
					default: {
						if (size > 1 && element.indexOf(':') > 0) {
							element = padding + element.replace(pseudoptn, '$1' + nscopealt + '$2')
						} else {
							element = padding + element + nscopealt
						}
					}
				}

				out += element
			}

			selector[i] = out.replace(formatptn, '').trim()
		}

		return selector
	}

	/**
	 * Proxy
	 *
	 * @param {number} context
	 * @param {string} content
	 * @param {Array<string>} selectors
	 * @param {Array<string>} parents
	 * @param {number} line
	 * @param {number} column
	 * @param {number} length
	 * @param {number} id
	 * @param {number} depth
	 * @param {number} at
	 * @return {(string|void|*)}
	 */
	function proxy (context, content, selectors, parents, line, column, length, id, depth, at) {
		for (var i = 0, out = content, next; i < plugged; ++i) {
			switch (next = plugins[i].call(stylis, context, out, selectors, parents, line, column, length, id, depth, at)) {
				case void 0:
				case false:
				case true:
				case null: {
					break
				}
				default: {
					out = next
				}
			}
		}
		if (out !== content) {
		  return out
		}
	}

	/**
	 * @param {number} code
	 * @param {number} index
	 * @param {number} length
	 * @param {string} body
	 * @return {number}
	 */
	function delimited (code, index, length, body) {
		for (var i = index + 1; i < length; ++i) {
			switch (body.charCodeAt(i)) {
				// /*
				case FOWARDSLASH: {
					if (code === STAR) {
						if (body.charCodeAt(i - 1) === STAR &&  index + 2 !== i) {
							return i + 1
						}
					}
					break
				}
				// //
				case NEWLINE: {
					if (code === FOWARDSLASH) {
						return i + 1
					}
				}
			}
		}

		return i
	}

	/**
	 * @param {number} type
	 * @param {number} index
	 * @param {number} length
	 * @param {number} find
	 * @param {string} body
	 * @return {number}
	 */
	function match (type, index, length, body) {
		for (var i = index + 1; i < length; ++i) {
			switch (body.charCodeAt(i)) {
				case type: {
					return i
				}
			}
		}

		return i
	}

	/**
	 * Minify
	 *
	 * @param {(string|*)} output
	 * @return {string}
	 */
	function minify (output) {
		return output
			.replace(formatptn, '')
			.replace(beforeptn, '')
			.replace(afterptn, '$1')
			.replace(tailptn, '$1')
			.replace(whiteptn, ' ')
	}

	/**
	 * Use
	 *
	 * @param {(Array<function(...?)>|function(...?)|number|void)?} plugin
	 */
	function use (plugin) {
		switch (plugin) {
			case void 0:
			case null: {
				plugged = plugins.length = 0
				break
			}
			default: {
				if (typeof plugin === 'function') {
					plugins[plugged++] = plugin
				}	else if (typeof plugin === 'object') {
					for (var i = 0, length = plugin.length; i < length; ++i) {
						use(plugin[i])
					}
				} else {
					unkwn = !!plugin|0
				}
			}
 		}

 		return use
	}

	/**
	 * Set
	 *
	 * @param {*} options
	 */
	function set (options) {
		for (var name in options) {
			var value = options[name]
			switch (name) {
				case 'keyframe': keyed = value|0; break
				case 'global': escape = value|0; break
				case 'cascade': cascade = value|0; break
				case 'compress': compress = value|0; break
				case 'semicolon': semicolon = value|0; break
				case 'preserve': preserve = value|0; break
				case 'prefix':
					should = null

					if (!value) {
						prefix = 0
					} else if (typeof value !== 'function') {
						prefix = 1
					} else {
						prefix = 2
						should = value
					}
			}
		}

		return set
	}

	/**
	 * Stylis
	 *
	 * @param {string} selector
	 * @param {string} input
	 * @return {*}
	 */
	function stylis (selector, input) {
		if (this !== void 0 && this.constructor === stylis) {
			return factory(selector)
		}

		// setup
		var ns = selector
		var code = ns.charCodeAt(0)

		// trim leading whitespace
		if (code < 33) {
			code = (ns = ns.trim()).charCodeAt(0)
		}

		// keyframe/animation namespace
		if (keyed > 0) {
			key = ns.replace(invalidptn, code === OPENBRACKET ? '' : '-')
		}

		// reset, used to assert if a plugin is moneky-patching the return value
		code = 1

		// cascade/isolate
		if (cascade === 1) {
			nscope = ns
		} else {
			nscopealt = ns
		}

		var selectors = [nscope]
		var result

		// execute plugins, pre-process context
		if (plugged > 0) {
			result = proxy(PREPS, input, selectors, selectors, line, column, 0, 0, 0, 0)

			if (result !== void 0 && typeof result === 'string') {
				input = result
			}
		}

		// build
		var output = compile(array, selectors, input, 0, 0)

		// execute plugins, post-process context
		if (plugged > 0) {
			result = proxy(POSTS, output, selectors, selectors, line, column, output.length, 0, 0, 0)

			// bypass minification
			if (result !== void 0 && typeof(output = result) !== 'string') {
				code = 0
			}
		}

		// reset
		key = ''
		nscope = ''
		nscopealt = ''
		pattern = 0
		line = 1
		column = 1

		return compress*code === 0 ? output : minify(output)
	}

	stylis['use'] = use
	stylis['set'] = set

	if (options !== void 0) {
		set(options)
	}

	return stylis
}));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN5bWJvbC5kZXNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGVjb2RlLXVyaS1jb21wb25lbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pcy1wbGFpbi1vYmplY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzb2JqZWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saXR0bGUtbG9hZGVyL2xpYi9saXR0bGUtbG9hZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1nZW9jb2RlL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZ2VvY29kZS9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1nb29nbGUtbWFwL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZ29vZ2xlLW1hcHMtbG9hZGVyL2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1nb29nbGUtbWFwcy1sb2FkZXIvZXMvbG9hZEdvb2dsZU1hcHNTZGsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWdvb2dsZS1tYXBzLWxvYWRlci9ub2RlX21vZHVsZXMvcXVlcnktc3RyaW5nL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1nb29nbGUtbWFwcy1sb2FkZXIvbm9kZV9tb2R1bGVzL3N0cmljdC11cmktZW5jb2RlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1nb29nbGUtcGxhY2VzLXN1Z2dlc3QvZXMvY29tcG9uZW50cy9MaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1nb29nbGUtcGxhY2VzLXN1Z2dlc3QvZXMvY29tcG9uZW50cy9MaXN0SXRlbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZ29vZ2xlLXBsYWNlcy1zdWdnZXN0L2VzL2NvbXBvbmVudHMvUG93ZXJlZEJ5R29vZ2xlTG9nby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZ29vZ2xlLXBsYWNlcy1zdWdnZXN0L2VzL2NvbXBvbmVudHMvUHJlZGljdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZ29vZ2xlLXBsYWNlcy1zdWdnZXN0L2VzL2ltYWdlcy9wb3dlcmVkX2J5X2dvb2dsZS9kZXNrdG9wL1Bvd2VyZWRCeUdvb2dsZUltYWdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1nb29nbGUtcGxhY2VzLXN1Z2dlc3QvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWdvb2dsZS1wbGFjZXMtc3VnZ2VzdC9ub2RlX21vZHVsZXMvc3R5bGVkLWNvbXBvbmVudHMvZGlzdC9zdHlsZWQtY29tcG9uZW50cy5lcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGlzL3N0eWxpcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGlCQUFpQixtQkFBTyxDQUFDLG1GQUEyQjtBQUNwRCw2QkFBNkIsbUJBQU8sQ0FBQywyR0FB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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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Q0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFFBQVEsS0FBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixpQkFBaUI7QUFDcEM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLGNBQWM7O0FBRW5CLGlDQUFpQztBQUNqQyw2Q0FBNkM7QUFDN0M7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQkFBb0I7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsNENBQUs7QUFDaEI7O0FBRUE7QUFDQSxDQUFDLENBQUMsK0NBQVM7O0FBRVgsaUVBQWlFLHVDQUF1QyxpREFBUyxZQUFZLGlEQUFTLHlCQUF5QixpREFBUzs7QUFFeEs7QUFDQSxTQUFTLGlEQUFTLFlBQVksaURBQVMseUJBQXlCLGlEQUFTO0FBQ3pFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLEtBQXFDO0FBQzdDO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQSxRQUFRLEtBQXFDO0FBQzdDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw0QkFBNEI7O0FBRTVCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXLDRDQUFLO0FBQ2hCO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsZ0NBQWdDO0FBQ2hDLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDBCQUEwQjtBQUN0RDtBQUNBLEtBQUssSUFBSTs7QUFFVDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsNENBQUs7QUFDaEI7QUFDQSxPQUFPLHVCQUF1QjtBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrUUFBa1Esb0JBQW9CLGFBQWEsT0FBTyxvQ0FBb0MsWUFBWSxjQUFjO0FBQ3hXO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIsaURBQVM7QUFDckMsWUFBWSxpREFBUztBQUNyQixhQUFhLGlEQUFTO0FBQ3RCLGVBQWUsaURBQVM7QUFDeEIsQ0FBQzs7QUFFRDtBQUNBLElBQUksSUFBcUM7QUFDekM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLDJDQUEyQztBQUNqRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsVUFBVSxJQUFxQztBQUMvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFFQUFxRTs7O0FBR3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxLQUFxQyxLQUFLLHNEQUFhO0FBQ2pFLHVHQUF1RyxTQUFTLEVBQUU7QUFDbEg7QUFDQTtBQUNBO0FBQ0EsU0FBUyxzREFBYTtBQUN0QjtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyw0Q0FBSztBQUNoQjs7QUFFQTtBQUNBLENBQUMsQ0FBQywrQ0FBUzs7QUFFWCw2REFBNkQsbUNBQW1DLGlEQUFTO0FBQ3pHLHdEQUF3RDs7QUFFeEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEscUVBQXFFLGFBQWE7QUFDbEY7QUFDQTs7QUFFQSx1SkFBdUo7QUFDdko7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsK0JBQStCLFVBQVUsZUFBZTtBQUN4RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sSUFBSTs7QUFFWCx3QkFBd0I7QUFDeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBLFlBQVksS0FBcUM7QUFDakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix5Q0FBeUM7QUFDaEU7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCQUEyQix1REFBdUQ7QUFDbEYsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsd0RBQXdEO0FBQy9FO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0I7QUFDaEIsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlDQUFpQztBQUNqQztBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTzs7QUFFUCxhQUFhLDJEQUFhO0FBQzFCOztBQUVBO0FBQ0EsR0FBRyxDQUFDLCtDQUFTOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUEsc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7O0FBRUwsOERBQThELG1DQUFtQyxpREFBUyx5R0FBeUcsaURBQVMsWUFBWSxpREFBUyx5QkFBeUIsaURBQVM7QUFDblI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsUUFBUSxJQUFxQztBQUM3QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUJBQW1CLEtBQTZCLGtCQUFrQixLQUFxQzs7QUFFdkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixLQUFxQywyQkFBMkIsSUFBSSxTQUFFO0FBQ2hHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnR0FBZ0csYUFBYTtBQUM3RztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxnR0FBZ0csYUFBYTtBQUM3RztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDs7O0FBR0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsS0FBcUM7QUFDN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrR0FBa0csYUFBYTtBQUMvRztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdFQUF3RTtBQUN4RTtBQUNBO0FBQ0Esd0VBQXdFO0FBQ3hFLDBCQUEwQixxQkFBcUI7QUFDL0MsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLHFFQUFxRSxhQUFhO0FBQ2xGO0FBQ0E7O0FBRUEsbUtBQW1LO0FBQ25LOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxvRUFBb0UsYUFBb0I7QUFDeEY7QUFDQTtBQUNBLE9BQU87QUFDUCx1QkFBdUIsbUJBQW1CO0FBQzFDLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCLGVBQWU7QUFDMUMsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGdCQUFnQjtBQUNoQixPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsYUFBYSw0Q0FBSztBQUNsQjtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0EsR0FBRyxDQUFDLDRDQUFLOztBQUVUO0FBQ0E7QUFDQSxzREFBc0QsbUNBQW1DLGlEQUFTOzs7QUFHbEcsU0FBUyw4REFBWTtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUV1SSxxRUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDM3JEOUk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsQ0FBQyxLQUE0RDtBQUM3RCxFQUFFLFNBQ21DO0FBQ3JDLENBQUMsYUFBYSxHQUFHLHVDQUF1Qzs7QUFFeEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsY0FBYztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsR0FBRyxnQ0FBZ0M7QUFDN0QscUJBQXFCLDZDQUE2QztBQUNsRSxtQkFBbUIsR0FBRyxLQUFLLEtBQUssa0NBQWtDO0FBQ2xFLG9CQUFvQixHQUFHO0FBQ3ZCO0FBQ0EsbUNBQW1DLEVBQUU7QUFDckM7QUFDQTtBQUNBLCtCQUErQjtBQUMvQiw2RUFBNkU7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0I7QUFDeEIsMkJBQTJCO0FBQzNCLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGNBQWM7QUFDMUIsWUFBWSxjQUFjO0FBQzFCLFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU87QUFDbkIsWUFBWSxPQUFPO0FBQ25CLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsY0FBYztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixjQUFjOztBQUUzQztBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdDQUFnQyxZQUFZOztBQUU1QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxjQUFjO0FBQzFCLFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU87QUFDbkIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsWUFBWTtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsWUFBWTtBQUNoRCxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU87QUFDbkIsWUFBWSxPQUFPO0FBQ25CLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU87QUFDbkIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFO0FBQ3hFLDBDQUEwQztBQUMxQyw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDOztBQUVBO0FBQ0E7QUFDQTs7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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0RBQW9EO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsNENBQTRDLFlBQVk7QUFDeEQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksRUFBRTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckMsb0NBQW9DO0FBQ3BDLHNDQUFzQztBQUN0Qyx3Q0FBd0M7QUFDeEMsMENBQTBDO0FBQzFDLHdDQUF3QztBQUN4QztBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU87QUFDbkIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQyIsImZpbGUiOiJqcy84LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgbm90QVJlZ0V4cCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9ub3QtYS1yZWdleHAnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIGNvcnJlY3RJc1JlZ0V4cExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcnJlY3QtaXMtcmVnZXhwLWxvZ2ljJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXNcbiQoeyB0YXJnZXQ6ICdTdHJpbmcnLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhY29ycmVjdElzUmVnRXhwTG9naWMoJ2luY2x1ZGVzJykgfSwge1xuICBpbmNsdWRlczogZnVuY3Rpb24gaW5jbHVkZXMoc2VhcmNoU3RyaW5nIC8qICwgcG9zaXRpb24gPSAwICovKSB7XG4gICAgcmV0dXJuICEhflN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpKVxuICAgICAgLmluZGV4T2Yobm90QVJlZ0V4cChzZWFyY2hTdHJpbmcpLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwiLy8gYFN5bWJvbC5wcm90b3R5cGUuZGVzY3JpcHRpb25gIGdldHRlclxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3ltYm9sLnByb3RvdHlwZS5kZXNjcmlwdGlvblxuJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xudmFyIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzJyk7XG5cbnZhciBOYXRpdmVTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xuXG5pZiAoREVTQ1JJUFRPUlMgJiYgdHlwZW9mIE5hdGl2ZVN5bWJvbCA9PSAnZnVuY3Rpb24nICYmICghKCdkZXNjcmlwdGlvbicgaW4gTmF0aXZlU3ltYm9sLnByb3RvdHlwZSkgfHxcbiAgLy8gU2FmYXJpIDEyIGJ1Z1xuICBOYXRpdmVTeW1ib2woKS5kZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkXG4pKSB7XG4gIHZhciBFbXB0eVN0cmluZ0Rlc2NyaXB0aW9uU3RvcmUgPSB7fTtcbiAgLy8gd3JhcCBTeW1ib2wgY29uc3RydWN0b3IgZm9yIGNvcnJlY3Qgd29yayB3aXRoIHVuZGVmaW5lZCBkZXNjcmlwdGlvblxuICB2YXIgU3ltYm9sV3JhcHBlciA9IGZ1bmN0aW9uIFN5bWJvbCgpIHtcbiAgICB2YXIgZGVzY3JpcHRpb24gPSBhcmd1bWVudHMubGVuZ3RoIDwgMSB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IFN0cmluZyhhcmd1bWVudHNbMF0pO1xuICAgIHZhciByZXN1bHQgPSB0aGlzIGluc3RhbmNlb2YgU3ltYm9sV3JhcHBlclxuICAgICAgPyBuZXcgTmF0aXZlU3ltYm9sKGRlc2NyaXB0aW9uKVxuICAgICAgLy8gaW4gRWRnZSAxMywgU3RyaW5nKFN5bWJvbCh1bmRlZmluZWQpKSA9PT0gJ1N5bWJvbCh1bmRlZmluZWQpJ1xuICAgICAgOiBkZXNjcmlwdGlvbiA9PT0gdW5kZWZpbmVkID8gTmF0aXZlU3ltYm9sKCkgOiBOYXRpdmVTeW1ib2woZGVzY3JpcHRpb24pO1xuICAgIGlmIChkZXNjcmlwdGlvbiA9PT0gJycpIEVtcHR5U3RyaW5nRGVzY3JpcHRpb25TdG9yZVtyZXN1bHRdID0gdHJ1ZTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzKFN5bWJvbFdyYXBwZXIsIE5hdGl2ZVN5bWJvbCk7XG4gIHZhciBzeW1ib2xQcm90b3R5cGUgPSBTeW1ib2xXcmFwcGVyLnByb3RvdHlwZSA9IE5hdGl2ZVN5bWJvbC5wcm90b3R5cGU7XG4gIHN5bWJvbFByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFN5bWJvbFdyYXBwZXI7XG5cbiAgdmFyIHN5bWJvbFRvU3RyaW5nID0gc3ltYm9sUHJvdG90eXBlLnRvU3RyaW5nO1xuICB2YXIgbmF0aXZlID0gU3RyaW5nKE5hdGl2ZVN5bWJvbCgndGVzdCcpKSA9PSAnU3ltYm9sKHRlc3QpJztcbiAgdmFyIHJlZ2V4cCA9IC9eU3ltYm9sXFwoKC4qKVxcKVteKV0rJC87XG4gIGRlZmluZVByb3BlcnR5KHN5bWJvbFByb3RvdHlwZSwgJ2Rlc2NyaXB0aW9uJywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGRlc2NyaXB0aW9uKCkge1xuICAgICAgdmFyIHN5bWJvbCA9IGlzT2JqZWN0KHRoaXMpID8gdGhpcy52YWx1ZU9mKCkgOiB0aGlzO1xuICAgICAgdmFyIHN0cmluZyA9IHN5bWJvbFRvU3RyaW5nLmNhbGwoc3ltYm9sKTtcbiAgICAgIGlmIChoYXMoRW1wdHlTdHJpbmdEZXNjcmlwdGlvblN0b3JlLCBzeW1ib2wpKSByZXR1cm4gJyc7XG4gICAgICB2YXIgZGVzYyA9IG5hdGl2ZSA/IHN0cmluZy5zbGljZSg3LCAtMSkgOiBzdHJpbmcucmVwbGFjZShyZWdleHAsICckMScpO1xuICAgICAgcmV0dXJuIGRlc2MgPT09ICcnID8gdW5kZWZpbmVkIDogZGVzYztcbiAgICB9XG4gIH0pO1xuXG4gICQoeyBnbG9iYWw6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG4gICAgU3ltYm9sOiBTeW1ib2xXcmFwcGVyXG4gIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHRva2VuID0gJyVbYS1mMC05XXsyfSc7XG52YXIgc2luZ2xlTWF0Y2hlciA9IG5ldyBSZWdFeHAodG9rZW4sICdnaScpO1xudmFyIG11bHRpTWF0Y2hlciA9IG5ldyBSZWdFeHAoJygnICsgdG9rZW4gKyAnKSsnLCAnZ2knKTtcblxuZnVuY3Rpb24gZGVjb2RlQ29tcG9uZW50cyhjb21wb25lbnRzLCBzcGxpdCkge1xuXHR0cnkge1xuXHRcdC8vIFRyeSB0byBkZWNvZGUgdGhlIGVudGlyZSBzdHJpbmcgZmlyc3Rcblx0XHRyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGNvbXBvbmVudHMuam9pbignJykpO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBEbyBub3RoaW5nXG5cdH1cblxuXHRpZiAoY29tcG9uZW50cy5sZW5ndGggPT09IDEpIHtcblx0XHRyZXR1cm4gY29tcG9uZW50cztcblx0fVxuXG5cdHNwbGl0ID0gc3BsaXQgfHwgMTtcblxuXHQvLyBTcGxpdCB0aGUgYXJyYXkgaW4gMiBwYXJ0c1xuXHR2YXIgbGVmdCA9IGNvbXBvbmVudHMuc2xpY2UoMCwgc3BsaXQpO1xuXHR2YXIgcmlnaHQgPSBjb21wb25lbnRzLnNsaWNlKHNwbGl0KTtcblxuXHRyZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5jYWxsKFtdLCBkZWNvZGVDb21wb25lbnRzKGxlZnQpLCBkZWNvZGVDb21wb25lbnRzKHJpZ2h0KSk7XG59XG5cbmZ1bmN0aW9uIGRlY29kZShpbnB1dCkge1xuXHR0cnkge1xuXHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoaW5wdXQpO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHR2YXIgdG9rZW5zID0gaW5wdXQubWF0Y2goc2luZ2xlTWF0Y2hlcik7XG5cblx0XHRmb3IgKHZhciBpID0gMTsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aW5wdXQgPSBkZWNvZGVDb21wb25lbnRzKHRva2VucywgaSkuam9pbignJyk7XG5cblx0XHRcdHRva2VucyA9IGlucHV0Lm1hdGNoKHNpbmdsZU1hdGNoZXIpO1xuXHRcdH1cblxuXHRcdHJldHVybiBpbnB1dDtcblx0fVxufVxuXG5mdW5jdGlvbiBjdXN0b21EZWNvZGVVUklDb21wb25lbnQoaW5wdXQpIHtcblx0Ly8gS2VlcCB0cmFjayBvZiBhbGwgdGhlIHJlcGxhY2VtZW50cyBhbmQgcHJlZmlsbCB0aGUgbWFwIHdpdGggdGhlIGBCT01gXG5cdHZhciByZXBsYWNlTWFwID0ge1xuXHRcdCclRkUlRkYnOiAnXFx1RkZGRFxcdUZGRkQnLFxuXHRcdCclRkYlRkUnOiAnXFx1RkZGRFxcdUZGRkQnXG5cdH07XG5cblx0dmFyIG1hdGNoID0gbXVsdGlNYXRjaGVyLmV4ZWMoaW5wdXQpO1xuXHR3aGlsZSAobWF0Y2gpIHtcblx0XHR0cnkge1xuXHRcdFx0Ly8gRGVjb2RlIGFzIGJpZyBjaHVua3MgYXMgcG9zc2libGVcblx0XHRcdHJlcGxhY2VNYXBbbWF0Y2hbMF1dID0gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzBdKTtcblx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdHZhciByZXN1bHQgPSBkZWNvZGUobWF0Y2hbMF0pO1xuXG5cdFx0XHRpZiAocmVzdWx0ICE9PSBtYXRjaFswXSkge1xuXHRcdFx0XHRyZXBsYWNlTWFwW21hdGNoWzBdXSA9IHJlc3VsdDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRtYXRjaCA9IG11bHRpTWF0Y2hlci5leGVjKGlucHV0KTtcblx0fVxuXG5cdC8vIEFkZCBgJUMyYCBhdCB0aGUgZW5kIG9mIHRoZSBtYXAgdG8gbWFrZSBzdXJlIGl0IGRvZXMgbm90IHJlcGxhY2UgdGhlIGNvbWJpbmF0b3IgYmVmb3JlIGV2ZXJ5dGhpbmcgZWxzZVxuXHRyZXBsYWNlTWFwWyclQzInXSA9ICdcXHVGRkZEJztcblxuXHR2YXIgZW50cmllcyA9IE9iamVjdC5rZXlzKHJlcGxhY2VNYXApO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZW50cmllcy5sZW5ndGg7IGkrKykge1xuXHRcdC8vIFJlcGxhY2UgYWxsIGRlY29kZWQgY29tcG9uZW50c1xuXHRcdHZhciBrZXkgPSBlbnRyaWVzW2ldO1xuXHRcdGlucHV0ID0gaW5wdXQucmVwbGFjZShuZXcgUmVnRXhwKGtleSwgJ2cnKSwgcmVwbGFjZU1hcFtrZXldKTtcblx0fVxuXG5cdHJldHVybiBpbnB1dDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZW5jb2RlZFVSSSkge1xuXHRpZiAodHlwZW9mIGVuY29kZWRVUkkgIT09ICdzdHJpbmcnKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYGVuY29kZWRVUklgIHRvIGJlIG9mIHR5cGUgYHN0cmluZ2AsIGdvdCBgJyArIHR5cGVvZiBlbmNvZGVkVVJJICsgJ2AnKTtcblx0fVxuXG5cdHRyeSB7XG5cdFx0ZW5jb2RlZFVSSSA9IGVuY29kZWRVUkkucmVwbGFjZSgvXFwrL2csICcgJyk7XG5cblx0XHQvLyBUcnkgdGhlIGJ1aWx0IGluIGRlY29kZXIgZmlyc3Rcblx0XHRyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGVuY29kZWRVUkkpO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBGYWxsYmFjayB0byBhIG1vcmUgYWR2YW5jZWQgZGVjb2RlclxuXHRcdHJldHVybiBjdXN0b21EZWNvZGVVUklDb21wb25lbnQoZW5jb2RlZFVSSSk7XG5cdH1cbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDE1LCBZYWhvbyEgSW5jLlxuICogQ29weXJpZ2h0cyBsaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBMaWNlbnNlLiBTZWUgdGhlIGFjY29tcGFueWluZyBMSUNFTlNFIGZpbGUgZm9yIHRlcm1zLlxuICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSRUFDVF9TVEFUSUNTID0ge1xuICAgIGNoaWxkQ29udGV4dFR5cGVzOiB0cnVlLFxuICAgIGNvbnRleHRUeXBlczogdHJ1ZSxcbiAgICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gICAgZGlzcGxheU5hbWU6IHRydWUsXG4gICAgZ2V0RGVmYXVsdFByb3BzOiB0cnVlLFxuICAgIG1peGluczogdHJ1ZSxcbiAgICBwcm9wVHlwZXM6IHRydWUsXG4gICAgdHlwZTogdHJ1ZVxufTtcblxudmFyIEtOT1dOX1NUQVRJQ1MgPSB7XG4gICAgbmFtZTogdHJ1ZSxcbiAgICBsZW5ndGg6IHRydWUsXG4gICAgcHJvdG90eXBlOiB0cnVlLFxuICAgIGNhbGxlcjogdHJ1ZSxcbiAgICBhcmd1bWVudHM6IHRydWUsXG4gICAgYXJpdHk6IHRydWVcbn07XG5cbnZhciBpc0dldE93blByb3BlcnR5U3ltYm9sc0F2YWlsYWJsZSA9IHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgc291cmNlQ29tcG9uZW50LCBjdXN0b21TdGF0aWNzKSB7XG4gICAgaWYgKHR5cGVvZiBzb3VyY2VDb21wb25lbnQgIT09ICdzdHJpbmcnKSB7IC8vIGRvbid0IGhvaXN0IG92ZXIgc3RyaW5nIChodG1sKSBjb21wb25lbnRzXG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoc291cmNlQ29tcG9uZW50KTtcblxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgICBpZiAoaXNHZXRPd25Qcm9wZXJ0eVN5bWJvbHNBdmFpbGFibGUpIHtcbiAgICAgICAgICAgIGtleXMgPSBrZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZUNvbXBvbmVudCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpZiAoIVJFQUNUX1NUQVRJQ1Nba2V5c1tpXV0gJiYgIUtOT1dOX1NUQVRJQ1Nba2V5c1tpXV0gJiYgKCFjdXN0b21TdGF0aWNzIHx8ICFjdXN0b21TdGF0aWNzW2tleXNbaV1dKSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldENvbXBvbmVudFtrZXlzW2ldXSA9IHNvdXJjZUNvbXBvbmVudFtrZXlzW2ldXTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldENvbXBvbmVudDtcbn07XG4iLCIvKiFcbiAqIGlzLXBsYWluLW9iamVjdCA8aHR0cHM6Ly9naXRodWIuY29tL2pvbnNjaGxpbmtlcnQvaXMtcGxhaW4tb2JqZWN0PlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNC0yMDE3LCBKb24gU2NobGlua2VydC5cbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJ2lzb2JqZWN0Jyk7XG5cbmZ1bmN0aW9uIGlzT2JqZWN0T2JqZWN0KG8pIHtcbiAgcmV0dXJuIGlzT2JqZWN0KG8pID09PSB0cnVlXG4gICAgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pID09PSAnW29iamVjdCBPYmplY3RdJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KG8pIHtcbiAgdmFyIGN0b3IscHJvdDtcblxuICBpZiAoaXNPYmplY3RPYmplY3QobykgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG5cbiAgLy8gSWYgaGFzIG1vZGlmaWVkIGNvbnN0cnVjdG9yXG4gIGN0b3IgPSBvLmNvbnN0cnVjdG9yO1xuICBpZiAodHlwZW9mIGN0b3IgIT09ICdmdW5jdGlvbicpIHJldHVybiBmYWxzZTtcblxuICAvLyBJZiBoYXMgbW9kaWZpZWQgcHJvdG90eXBlXG4gIHByb3QgPSBjdG9yLnByb3RvdHlwZTtcbiAgaWYgKGlzT2JqZWN0T2JqZWN0KHByb3QpID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIElmIGNvbnN0cnVjdG9yIGRvZXMgbm90IGhhdmUgYW4gT2JqZWN0LXNwZWNpZmljIG1ldGhvZFxuICBpZiAocHJvdC5oYXNPd25Qcm9wZXJ0eSgnaXNQcm90b3R5cGVPZicpID09PSBmYWxzZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIE1vc3QgbGlrZWx5IGEgcGxhaW4gT2JqZWN0XG4gIHJldHVybiB0cnVlO1xufTtcbiIsIi8qIVxuICogaXNvYmplY3QgPGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L2lzb2JqZWN0PlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNC0yMDE3LCBKb24gU2NobGlua2VydC5cbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNPYmplY3QodmFsKSB7XG4gIHJldHVybiB2YWwgIT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0JyAmJiBBcnJheS5pc0FycmF5KHZhbCkgPT09IGZhbHNlO1xufTtcbiIsIi8qKlxuICogU2NyaXB0IGxvYWRpbmcgaXMgZGlmZmljdWx0IHRoYW5rcyB0byBJRS4gV2UgbmVlZCBjYWxsYmFja3MgdG8gZmlyZVxuICogaW1tZWRpYXRlbHkgZm9sbG93aW5nIHRoZSBzY3JpcHQncyBleGVjdXRpb24sIHdpdGggbm8gb3RoZXIgc2NyaXB0c1xuICogcnVubmluZyBpbiBiZXR3ZWVuLiBJZiBvdGhlciBzY3JpcHRzIG9uIHRoZSBwYWdlIGFyZSBhYmxlIHRvIHJ1blxuICogYmV0d2VlbiBvdXIgc2NyaXB0IGFuZCBpdHMgY2FsbGJhY2ssIGJhZCB0aGluZ3MgY2FuIGhhcHBlbiwgc3VjaCBhc1xuICogYGpRdWVyeS5ub0NvbmZsaWN0YCBub3QgYmVpbmcgY2FsbGVkIGluIHRpbWUsIHJlc3VsdGluZyBpbiBwbHVnaW5zXG4gKiBsYXRjaGluZyBvbnRvIG91ciB2ZXJzaW9uIG9mIGpRdWVyeSwgZXRjLlxuICpcbiAqIEZvciBJRTwxMCB3ZSB1c2UgYSByZWxhdGl2ZWx5IHdlbGwtZG9jdW1lbnRlZCBcInByZWxvYWRpbmdcIiBzdHJhdGVneSxcbiAqIHdoaWNoIGVuc3VyZXMgdGhhdCB0aGUgc2NyaXB0IGlzIHJlYWR5IHRvIGV4ZWN1dGUgKmJlZm9yZSogYXBwZW5kaW5nXG4gKiBpdCB0byB0aGUgRE9NLiBUaGF0IHdheSB3aGVuIGl0IGlzIGZpbmFsbHkgYXBwZW5kZWQsIGl0IGlzXG4gKiBleGVjdXRlZCBpbW1lZGlhdGVseS5cbiAqXG4gKiBSZWZlcmVuY2VzOlxuICogLSBodHRwOi8vd3d3Lmh0bWw1cm9ja3MuY29tL2VuL3R1dG9yaWFscy9zcGVlZC9zY3JpcHQtbG9hZGluZy9cbiAqIC0gaHR0cDovL2Jsb2cuZ2V0aWZ5LmNvbS9pZTExLXBsZWFzZS1icmluZy1yZWFsLXNjcmlwdC1wcmVsb2FkaW5nLWJhY2svXG4gKiAtIGh0dHBzOi8vZ2l0aHViLmNvbS9qcmJ1cmtlL3JlcXVpcmVqcy9pc3N1ZXMvNTI2XG4gKiAtIGh0dHBzOi8vY29ubmVjdC5taWNyb3NvZnQuY29tL0lFL2ZlZWRiYWNrL2RldGFpbHMvNzI5MTY0L1xuICogICAgICAgICAgIGllMTAtZHluYW1pYy1zY3JpcHQtZWxlbWVudC1maXJlcy1sb2FkZWQtcmVhZHlzdGF0ZS1wcmVtYXR1cmVseVxuICovXG4oZnVuY3Rpb24gKCkge1xuXG4gIC8vIEdsb2JhbCBzdGF0ZS5cbiAgdmFyIHBlbmRpbmdTY3JpcHRzID0ge307XG4gIHZhciBzY3JpcHRDb3VudGVyID0gMDtcblxuICAvKipcbiAgICogSW5zZXJ0IHNjcmlwdCBpbnRvIHRoZSBET01cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHNjcmlwdCBTY3JpcHQgRE9NIG9iamVjdFxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG4gIHZhciBfYWRkU2NyaXB0ID0gZnVuY3Rpb24gKHNjcmlwdCkge1xuICAgIC8vIEdldCB0aGUgZmlyc3Qgc2NyaXB0IGVsZW1lbnQsIHdlJ3JlIGp1c3QgZ29pbmcgdG8gdXNlIGl0XG4gICAgLy8gYXMgYSByZWZlcmVuY2UgZm9yIHdoZXJlIHRvIGluc2VydCBvdXJzLiBEbyBOT1QgdHJ5IHRvIGRvXG4gICAgLy8gdGhpcyBqdXN0IG9uY2UgYXQgdGhlIHRvcCBhbmQgdGhlbiByZS11c2UgdGhlIHNhbWUgc2NyaXB0XG4gICAgLy8gYXMgYSByZWZlcmVuY2UgbGF0ZXIuIFNvbWUgd2VpcmQgbG9hZGVycyAqcmVtb3ZlKiBzY3JpcHRcbiAgICAvLyBlbGVtZW50cyBhZnRlciB0aGUgYnJvd3NlciBoYXMgZXhlY3V0ZWQgdGhlaXIgY29udGVudHMsXG4gICAgLy8gc28gdGhlIHNhbWUgcmVmZXJlbmNlIG1pZ2h0IG5vdCBoYXZlIGEgcGFyZW50Tm9kZSBsYXRlci5cbiAgICB2YXIgZmlyc3RTY3JpcHQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKVswXTtcblxuICAgIC8vIEFwcGVuZCB0aGUgc2NyaXB0IHRvIHRoZSBET00sIHRyaWdnZXJpbmcgZXhlY3V0aW9uLlxuICAgIGZpcnN0U2NyaXB0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNjcmlwdCwgZmlyc3RTY3JpcHQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBMb2FkIFNjcmlwdC5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9ICAgIHNyYyAgICAgICBVUkkgb2Ygc2NyaXB0XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259ICBjYWxsYmFjayAgKE9wdGlvbmFsKSBDYWxsZWQgb24gc2NyaXB0IGxvYWQgY29tcGxldGlvblxuICAgKiBAcGFyYW0ge09iamVjdH0gICAgY29udGV4dCAgIChPcHRpb25hbCkgQ2FsbGJhY2sgY29udGV4dCAoYHRoaXNgKVxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG4gIHZhciBfbGxvYWQgPSBmdW5jdGlvbiAoc3JjLCBjYWxsYmFjaywgY29udGV4dCkge1xuICAgIC8qZXNsaW50IG1heC1zdGF0ZW1lbnRzOiBbMiwgMjVdKi9cbiAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICB2YXIgZG9uZSA9IGZhbHNlO1xuICAgIHZhciBlcnI7XG4gICAgdmFyIF9jbGVhbnVwOyAvLyBfbXVzdF8gYmUgc2V0IGJlbG93LlxuXG4gICAgLyoqXG4gICAgICogRmluYWwgaGFuZGxlciBmb3IgZXJyb3Igb3IgY29tcGxldGlvbi5cbiAgICAgKlxuICAgICAqICoqTm90ZSoqOiBXaWxsIG9ubHkgYmUgY2FsbGVkIF9vbmNlXy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIHZhciBfZmluaXNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gT25seSBjYWxsIG9uY2UuXG4gICAgICBpZiAoZG9uZSkgeyByZXR1cm47IH1cbiAgICAgIGRvbmUgPSB0cnVlO1xuXG4gICAgICAvLyBJbnRlcm5hbCBjbGVhbnVwLlxuICAgICAgX2NsZWFudXAoKTtcblxuICAgICAgLy8gQ2FsbGJhY2suXG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2suY2FsbChjb250ZXh0LCBlcnIpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBFcnJvciBoYW5kbGVyXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICB2YXIgX2Vycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgZXJyID0gbmV3IEVycm9yKHNyYyB8fCBcIkVNUFRZXCIpO1xuICAgICAgX2ZpbmlzaCgpO1xuICAgIH07XG5cbiAgICBpZiAoc2NyaXB0LnJlYWR5U3RhdGUgJiYgIShcImFzeW5jXCIgaW4gc2NyaXB0KSkge1xuICAgICAgLyplc2xpbnQtZGlzYWJsZSBjb25zaXN0ZW50LXJldHVybiovXG5cbiAgICAgIC8vIFRoaXMgc2VjdGlvbiBpcyBvbmx5IGZvciBJRTwxMC4gU29tZSBvdGhlciBvbGQgYnJvd3NlcnMgbWF5XG4gICAgICAvLyBzYXRpc2Z5IHRoZSBhYm92ZSBjb25kaXRpb24gYW5kIGVudGVyIHRoaXMgYnJhbmNoLCBidXQgd2UgZG9uJ3RcbiAgICAgIC8vIHN1cHBvcnQgdGhvc2UgYnJvd3NlcnMgYW55d2F5LlxuXG4gICAgICB2YXIgaWQgPSBzY3JpcHRDb3VudGVyKys7XG4gICAgICB2YXIgaXNSZWFkeSA9IHsgbG9hZGVkOiB0cnVlLCBjb21wbGV0ZTogdHJ1ZSB9O1xuICAgICAgdmFyIGluc2VydGVkID0gZmFsc2U7XG5cbiAgICAgIC8vIENsZWFyIG91dCBsaXN0ZW5lcnMsIHN0YXRlLlxuICAgICAgX2NsZWFudXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBzY3JpcHQub25lcnJvciA9IG51bGw7XG4gICAgICAgIHBlbmRpbmdTY3JpcHRzW2lkXSA9IHZvaWQgMDtcbiAgICAgIH07XG5cbiAgICAgIC8vIEF0dGFjaCB0aGUgaGFuZGxlciBiZWZvcmUgc2V0dGluZyBzcmMsIG90aGVyd2lzZSB3ZSBtaWdodFxuICAgICAgLy8gbWlzcyBldmVudHMgKGNvbnNpZGVyIHRoYXQgSUUgY291bGQgZmlyZSB0aGVtIHN5bmNocm9ub3VzbHlcbiAgICAgIC8vIHVwb24gc2V0dGluZyBzcmMsIGZvciBleGFtcGxlKS5cbiAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBmaXJzdFN0YXRlID0gc2NyaXB0LnJlYWR5U3RhdGU7XG5cbiAgICAgICAgLy8gUHJvdGVjdCBhZ2FpbnN0IGFueSBlcnJvcnMgZnJvbSBzdGF0ZSBjaGFuZ2UgcmFuZG9tbmVzcy5cbiAgICAgICAgaWYgKGVycikgeyByZXR1cm47IH1cblxuICAgICAgICBpZiAoIWluc2VydGVkICYmIGlzUmVhZHlbZmlyc3RTdGF0ZV0pIHtcbiAgICAgICAgICBpbnNlcnRlZCA9IHRydWU7XG5cbiAgICAgICAgICAvLyBBcHBlbmQgdG8gRE9NLlxuICAgICAgICAgIF9hZGRTY3JpcHQoc2NyaXB0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICBHTE9SSU9VUyBJRTggSEFDS0FHRSEhIVxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAvL1xuICAgICAgICAvLyBPaCBJRTgsIGhvdyB5b3UgZGlzYXBwb2ludC4gSUU4IHdvbid0IGNhbGwgYHNjcmlwdC5vbmVycm9yYCwgc29cbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZXNvcnQgdG8gZHJhc3RpYyBtZWFzdXJlcy5cbiAgICAgICAgLy8gU2VlLCBlLmcuIGh0dHA6Ly93d3cucXVpcmtzbW9kZS5vcmcvZG9tL2V2ZW50cy9lcnJvci5odG1sI3QwMlxuICAgICAgICAvL1xuICAgICAgICAvLyBBcyB3aXRoIGFsbCB0aGluZ3MgZGV2ZWxvcG1lbnQsIHRoZXJlJ3MgYSBTdGFjayBPdmVyZmxvdyBjb21tZW50IHRoYXRcbiAgICAgICAgLy8gYXNzZXJ0cyB0aGUgZm9sbG93aW5nIGNvbWJpbmF0aW9ucyBvZiBzdGF0ZSBjaGFuZ2VzIGluIElFOCBpbmRpY2F0ZSBhXG4gICAgICAgIC8vIHNjcmlwdCBsb2FkIGVycm9yLiBBbmQgY3JhemlseSwgaXQgc2VlbXMgdG8gd29yayFcbiAgICAgICAgLy9cbiAgICAgICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTg4NDA1NjgvNzQxODkyXG4gICAgICAgIC8vXG4gICAgICAgIC8vIFRoZSBgc2NyaXB0LnJlYWR5U3RhdGVgIHRyYW5zaXRpb25zIHdlJ3JlIGludGVyZXN0ZWQgYXJlOlxuICAgICAgICAvL1xuICAgICAgICAvLyAqIElmIHN0YXRlIHN0YXJ0cyBhcyBgbG9hZGVkYFxuICAgICAgICAvLyAqIENhbGwgYHNjcmlwdC5jaGlsZHJlbmAsIHdoaWNoIF9zaG91bGRfIGNoYW5nZSBzdGF0ZSB0byBgY29tcGxldGVgXG4gICAgICAgIC8vICogSWYgc3RhdGUgaXMgbm93IGBsb2FkaW5nYCwgdGhlbiAqKndlIGhhdmUgYSBsb2FkIGVycm9yKipcbiAgICAgICAgLy9cbiAgICAgICAgLy8gRm9yIHRoZSByZWFkZXIncyBhbXVzZW1lbnQsIGhlcmUgaXMgSGVhZEpTJ3MgY2F0YWxvZyBvZiB2YXJpb3VzXG4gICAgICAgIC8vIGByZWFkeVN0YXRlYCB0cmFuc2l0aW9ucyBpbiBub3JtYWwgb3BlcmF0aW9uIGZvciBJRTpcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2hlYWRqcy9oZWFkanMvYmxvYi9tYXN0ZXIvc3JjLzIuMC4wL2xvYWQuanMjTDM3OS1MNDE5XG4gICAgICAgIGlmIChmaXJzdFN0YXRlID09PSBcImxvYWRlZFwiKSB7XG4gICAgICAgICAgLy8gVGhlIGFjdCBvZiBhY2Nlc3NpbmcgdGhlIHByb3BlcnR5IHNob3VsZCBjaGFuZ2UgdGhlIHNjcmlwdCdzXG4gICAgICAgICAgLy8gYHJlYWR5U3RhdGVgLlxuICAgICAgICAgIC8vXG4gICAgICAgICAgLy8gQW5kLCBvaCB5ZWFoLCB0aGlzIGhhY2sgaXMgc28gaGFja3ktaXNoIHdlIG5lZWQgdGhlIGZvbGxvd2luZ1xuICAgICAgICAgIC8vIGVzbGludCBkaXNhYmxlLi4uXG4gICAgICAgICAgLyplc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMqL1xuICAgICAgICAgIHNjcmlwdC5jaGlsZHJlbjtcbiAgICAgICAgICAvKmVzbGludC1lbmFibGUgbm8tdW51c2VkLWV4cHJlc3Npb25zKi9cblxuICAgICAgICAgIGlmIChzY3JpcHQucmVhZHlTdGF0ZSA9PT0gXCJsb2FkaW5nXCIpIHtcbiAgICAgICAgICAgIC8vIFN0YXRlIHRyYW5zaXRpb25zIGluZGljYXRlIHdlJ3ZlIGhpdCB0aGUgbG9hZCBlcnJvci5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAqKk5vdGUqKjogV2UgYXJlIG5vdCBpbnRlbmRpbmcgdG8gX3JldHVybl8gYSB2YWx1ZSwganVzdCBoYXZlXG4gICAgICAgICAgICAvLyBhIHNob3J0ZXIgc2hvcnQtY2lyY3VpdCBjb2RlIHBhdGggaGVyZS5cbiAgICAgICAgICAgIHJldHVybiBfZXJyb3IoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJdCdzIHBvc3NpYmxlIGZvciByZWFkeVN0YXRlIHRvIGJlIFwiY29tcGxldGVcIiBpbW1lZGlhdGVseVxuICAgICAgICAvLyBhZnRlciB3ZSBpbnNlcnQgKGFuZCBleGVjdXRlKSB0aGUgc2NyaXB0IGluIHRoZSBicmFuY2hcbiAgICAgICAgLy8gYWJvdmUuIFNvIGNoZWNrIHJlYWR5U3RhdGUgYWdhaW4gaGVyZSBhbmQgcmVhY3Qgd2l0aG91dFxuICAgICAgICAvLyB3YWl0aW5nIGZvciBhbm90aGVyIG9ucmVhZHlzdGF0ZWNoYW5nZS5cbiAgICAgICAgaWYgKHNjcmlwdC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIpIHtcbiAgICAgICAgICBfZmluaXNoKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIC8vIE9uZXJyb3IgaGFuZGxlciBfbWF5XyB3b3JrIGhlcmUuXG4gICAgICBzY3JpcHQub25lcnJvciA9IF9lcnJvcjtcblxuICAgICAgLy8gU2luY2Ugd2UncmUgbm90IGFwcGVuZGluZyB0aGUgc2NyaXB0IHRvIHRoZSBET00geWV0LCB0aGVcbiAgICAgIC8vIHJlZmVyZW5jZSB0byBvdXIgc2NyaXB0IGVsZW1lbnQgbWlnaHQgZ2V0IGdhcmJhZ2UgY29sbGVjdGVkXG4gICAgICAvLyB3aGVuIHRoaXMgZnVuY3Rpb24gZW5kcywgd2l0aG91dCBvbnJlYWR5c3RhdGVjaGFuZ2UgZXZlciBiZWluZ1xuICAgICAgLy8gZmlyZWQuIFRoaXMgaGFzIGJlZW4gd2l0bmVzc2VkIHRvIGhhcHBlbi4gQWRkaW5nIGl0IHRvXG4gICAgICAvLyBgcGVuZGluZ1NjcmlwdHNgIGVuc3VyZXMgdGhpcyBjYW4ndCBoYXBwZW4uXG4gICAgICBwZW5kaW5nU2NyaXB0c1tpZF0gPSBzY3JpcHQ7XG5cbiAgICAgIC8vIFRoaXMgdHJpZ2dlcnMgYSByZXF1ZXN0IGZvciB0aGUgc2NyaXB0LCBidXQgaXRzIGNvbnRlbnRzIHdvbid0XG4gICAgICAvLyBiZSBleGVjdXRlZCB1bnRpbCB3ZSBhcHBlbmQgaXQgdG8gdGhlIERPTS5cbiAgICAgIHNjcmlwdC5zcmMgPSBzcmM7XG5cbiAgICAgIC8vIEluIHNvbWUgY2FzZXMsIHRoZSByZWFkeVN0YXRlIGlzIGFscmVhZHkgXCJsb2FkZWRcIiBpbW1lZGlhdGVseVxuICAgICAgLy8gYWZ0ZXIgc2V0dGluZyBzcmMuIEl0J3MgYSBsaWUhIERvbid0IGFwcGVuZCB0byB0aGUgRE9NIHVudGlsXG4gICAgICAvLyB0aGUgb25yZWFkeXN0YXRlY2hhbmdlIGV2ZW50IHNheXMgc28uXG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVGhpcyBzZWN0aW9uIGlzIGZvciBtb2Rlcm4gYnJvd3NlcnMsIGluY2x1ZGluZyBJRTEwKy5cblxuICAgICAgLy8gQ2xlYXIgb3V0IGxpc3RlbmVycy5cbiAgICAgIF9jbGVhbnVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzY3JpcHQub25sb2FkID0gc2NyaXB0Lm9uZXJyb3IgPSBudWxsO1xuICAgICAgfTtcblxuICAgICAgc2NyaXB0Lm9uZXJyb3IgPSBfZXJyb3I7XG4gICAgICBzY3JpcHQub25sb2FkID0gX2ZpbmlzaDtcbiAgICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XG4gICAgICBzY3JpcHQuY2hhcnNldCA9IFwidXRmLThcIjtcbiAgICAgIHNjcmlwdC5zcmMgPSBzcmM7XG5cbiAgICAgIC8vIEFwcGVuZCB0byBET00uXG4gICAgICBfYWRkU2NyaXB0KHNjcmlwdCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIFVNRCB3cmFwcGVyLlxuICAvKmdsb2JhbCBkZWZpbmU6ZmFsc2UqL1xuICBpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIikge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfbGxvYWQ7XG5cbiAgfSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZShbXSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gX2xsb2FkOyB9KTtcblxuICB9IGVsc2Uge1xuICAgIC8vIFZhbmlsbGFKU1xuICAgIHdpbmRvdy5fbGxvYWQgPSBfbGxvYWQ7XG4gIH1cbn0oKSk7XG4iLCJcInVzZSBzdHJpY3RcIjt2YXIgcmVnZW5lcmF0b3JSdW50aW1lID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7ZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGUscixuLHQsbyxhLGMpe3RyeXt2YXIgcz1lW2FdKGMpLHU9cy52YWx1ZX1jYXRjaChlKXtyZXR1cm4gdm9pZCBuKGUpfXMuZG9uZT9yKHUpOlByb21pc2UucmVzb2x2ZSh1KS50aGVuKHQsbyl9ZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZSl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIHI9dGhpcyxuPWFyZ3VtZW50cztyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24odCxvKXt2YXIgYT1lLmFwcGx5KHIsbik7ZnVuY3Rpb24gYyhlKXthc3luY0dlbmVyYXRvclN0ZXAoYSx0LG8sYyxzLFwibmV4dFwiLGUpfWZ1bmN0aW9uIHMoZSl7YXN5bmNHZW5lcmF0b3JTdGVwKGEsdCxvLGMscyxcInRocm93XCIsZSl9Yyh2b2lkIDApfSl9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGV4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIERFQlVHPSExLEFQSV9LRVk9bnVsbCxMQU5HVUFHRT1cImVuXCIsUkVHSU9OPW51bGwsR09PR0xFX0FQST1cImh0dHBzOi8vbWFwcy5nb29nbGUuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvblwiO2Z1bmN0aW9uIGxvZyhlKXt2YXIgcj1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXSYmYXJndW1lbnRzWzFdO0RFQlVHJiYocj9jb25zb2xlLndhcm4oZSk6Y29uc29sZS5sb2coZSkpfWZ1bmN0aW9uIGhhbmRsZVVybChlKXtyZXR1cm4gX2hhbmRsZVVybC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gX2hhbmRsZVVybCgpe3JldHVybihfaGFuZGxlVXJsPV9hc3luY1RvR2VuZXJhdG9yKHJlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIGUocil7dmFyIG4sdDtyZXR1cm4gcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24oZSl7Zm9yKDs7KXN3aXRjaChlLnByZXY9ZS5uZXh0KXtjYXNlIDA6cmV0dXJuIGUubmV4dD0yLGZldGNoKHIpLmNhdGNoKGZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkVycm9yIGZldGNoaW5nIGRhdGFcIikpfSk7Y2FzZSAyOnJldHVybiBuPWUuc2VudCxlLm5leHQ9NSxuLmpzb24oKS5jYXRjaChmdW5jdGlvbigpe3JldHVybiBsb2coXCJFcnJvciBwYXJzaW5nIHNlcnZlciByZXNwb25zZVwiKSxQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJFcnJvciBwYXJzaW5nIHNlcnZlciByZXNwb25zZVwiKSl9KTtjYXNlIDU6aWYoXCJPS1wiIT09KHQ9ZS5zZW50KS5zdGF0dXMpe2UubmV4dD05O2JyZWFrfXJldHVybiBsb2codCksZS5hYnJ1cHQoXCJyZXR1cm5cIix0KTtjYXNlIDk6cmV0dXJuIGxvZyhcIlwiLmNvbmNhdCh0LmVycm9yX21lc3NhZ2UsXCIuXFxuU2VydmVyIHJldHVybmVkIHN0YXR1cyBjb2RlIFwiKS5jb25jYXQodC5zdGF0dXMpLCEwKSxlLmFicnVwdChcInJldHVyblwiLFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlwiLmNvbmNhdCh0LmVycm9yX21lc3NhZ2UsXCIuXFxuU2VydmVyIHJldHVybmVkIHN0YXR1cyBjb2RlIFwiKS5jb25jYXQodC5zdGF0dXMpKSkpO2Nhc2UgMTE6Y2FzZVwiZW5kXCI6cmV0dXJuIGUuc3RvcCgpfX0sZSl9KSkpLmFwcGx5KHRoaXMsYXJndW1lbnRzKX12YXIgX2RlZmF1bHQ9e3NldEFwaUtleTpmdW5jdGlvbihhcGlLZXkpe0FQSV9LRVk9YXBpS2V5fSxzZXRMYW5ndWFnZTpmdW5jdGlvbihsYW5ndWFnZSl7TEFOR1VBR0U9bGFuZ3VhZ2V9LHNldFJlZ2lvbjpmdW5jdGlvbihyZWdpb24pe1JFR0lPTj1yZWdpb259LGVuYWJsZURlYnVnOmZ1bmN0aW9uKCl7dmFyIGU9IShhcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXSl8fGFyZ3VtZW50c1swXTtERUJVRz1lfSxmcm9tTGF0TG5nOmZ1bmN0aW9uKGxhdCxsbmcsYXBpS2V5LGxhbmd1YWdlLHJlZ2lvbil7cmV0dXJuIF9hc3luY1RvR2VuZXJhdG9yKHJlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIGEoKXt2YXIgYyxzO3JldHVybiByZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbihhKXtmb3IoOzspc3dpdGNoKGEucHJldj1hLm5leHQpe2Nhc2UgMDppZihsYXQmJmxuZyl7YS5uZXh0PTM7YnJlYWt9cmV0dXJuIGxvZyhcIlByb3ZpZGVkIGNvb3JkaW5hdGVzIGFyZSBpbnZhbGlkXCIsITApLGEuYWJydXB0KFwicmV0dXJuXCIsUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiUHJvdmlkZWQgY29vcmRpbmF0ZXMgYXJlIGludmFsaWRcIikpKTtjYXNlIDM6cmV0dXJuIGM9XCJcIi5jb25jYXQobGF0LFwiLFwiKS5jb25jYXQobG5nKSxzPVwiXCIuY29uY2F0KEdPT0dMRV9BUEksXCI/bGF0bG5nPVwiKS5jb25jYXQoZW5jb2RlVVJJQ29tcG9uZW50KGMpKSwoYXBpS2V5fHxBUElfS0VZKSYmKHMrPVwiJmtleT1cIi5jb25jYXQoQVBJX0tFWT1hcGlLZXl8fEFQSV9LRVkpKSwobGFuZ3VhZ2V8fExBTkdVQUdFKSYmKHMrPVwiJmxhbmd1YWdlPVwiLmNvbmNhdChMQU5HVUFHRT1sYW5ndWFnZXx8TEFOR1VBR0UpKSwocmVnaW9ufHxSRUdJT04pJiYoUkVHSU9OPXJlZ2lvbnx8UkVHSU9OLHMrPVwiJnJlZ2lvbj1cIi5jb25jYXQoZW5jb2RlVVJJQ29tcG9uZW50KFJFR0lPTikpKSxhLmFicnVwdChcInJldHVyblwiLGhhbmRsZVVybChzKSk7Y2FzZSA5OmNhc2VcImVuZFwiOnJldHVybiBhLnN0b3AoKX19LGEpfSkpKCl9LGZyb21BZGRyZXNzOmZ1bmN0aW9uKGFkZHJlc3MsYXBpS2V5LGxhbmd1YWdlLHJlZ2lvbil7cmV0dXJuIF9hc3luY1RvR2VuZXJhdG9yKHJlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIG8oKXt2YXIgYTtyZXR1cm4gcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24obyl7Zm9yKDs7KXN3aXRjaChvLnByZXY9by5uZXh0KXtjYXNlIDA6aWYoYWRkcmVzcyl7by5uZXh0PTM7YnJlYWt9cmV0dXJuIGxvZyhcIlByb3ZpZGVkIGFkZHJlc3MgaXMgaW52YWxpZFwiLCEwKSxvLmFicnVwdChcInJldHVyblwiLFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlByb3ZpZGVkIGFkZHJlc3MgaXMgaW52YWxpZFwiKSkpO2Nhc2UgMzpyZXR1cm4gYT1cIlwiLmNvbmNhdChHT09HTEVfQVBJLFwiP2FkZHJlc3M9XCIpLmNvbmNhdChlbmNvZGVVUklDb21wb25lbnQoYWRkcmVzcykpLChhcGlLZXl8fEFQSV9LRVkpJiYoYSs9XCIma2V5PVwiLmNvbmNhdChBUElfS0VZPWFwaUtleXx8QVBJX0tFWSkpLChsYW5ndWFnZXx8TEFOR1VBR0UpJiYoYSs9XCImbGFuZ3VhZ2U9XCIuY29uY2F0KExBTkdVQUdFPWxhbmd1YWdlfHxMQU5HVUFHRSkpLChyZWdpb258fFJFR0lPTikmJihSRUdJT049cmVnaW9ufHxSRUdJT04sYSs9XCImcmVnaW9uPVwiLmNvbmNhdChlbmNvZGVVUklDb21wb25lbnQoUkVHSU9OKSkpLG8uYWJydXB0KFwicmV0dXJuXCIsaGFuZGxlVXJsKGEpKTtjYXNlIDg6Y2FzZVwiZW5kXCI6cmV0dXJuIG8uc3RvcCgpfX0sbyl9KSkoKX19O2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiIsIiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQocmVxdWlyZShcInJlYWN0XCIpKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcInJlYWN0XCJdLHQpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHNbXCJyZWFjdC1nb29nbGUtbWFwXCJdPXQocmVxdWlyZShcInJlYWN0XCIpKTplW1wicmVhY3QtZ29vZ2xlLW1hcFwiXT10KGUuUmVhY3QpfSh0aGlzLGZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbihlKXtmdW5jdGlvbiB0KHIpe2lmKG5bcl0pcmV0dXJuIG5bcl0uZXhwb3J0czt2YXIgbz1uW3JdPXtleHBvcnRzOnt9LGlkOnIsbG9hZGVkOiExfTtyZXR1cm4gZVtyXS5jYWxsKG8uZXhwb3J0cyxvLG8uZXhwb3J0cyx0KSxvLmxvYWRlZD0hMCxvLmV4cG9ydHN9dmFyIG49e307cmV0dXJuIHQubT1lLHQuYz1uLHQucD1cIlwiLHQoMCl9KFtmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19ZnVuY3Rpb24gbyhlKXtpZihBcnJheS5pc0FycmF5KGUpKXtmb3IodmFyIHQ9MCxuPUFycmF5KGUubGVuZ3RoKTt0PGUubGVuZ3RoO3QrKyluW3RdPWVbdF07cmV0dXJuIG59cmV0dXJuIEFycmF5LmZyb20oZSl9ZnVuY3Rpb24gaShlLHQpe3ZhciBuPXt9O2Zvcih2YXIgciBpbiBlKXQuaW5kZXhPZihyKT49MHx8T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUscikmJihuW3JdPWVbcl0pO3JldHVybiBufWZ1bmN0aW9uIGEoZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfWZ1bmN0aW9uIHUoZSx0KXtpZighZSl0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7cmV0dXJuIXR8fFwib2JqZWN0XCIhPXR5cGVvZiB0JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiB0P2U6dH1mdW5jdGlvbiBzKGUsdCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCYmbnVsbCE9PXQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIrdHlwZW9mIHQpO2UucHJvdG90eXBlPU9iamVjdC5jcmVhdGUodCYmdC5wcm90b3R5cGUse2NvbnN0cnVjdG9yOnt2YWx1ZTplLGVudW1lcmFibGU6ITEsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfX0pLHQmJihPYmplY3Quc2V0UHJvdG90eXBlT2Y/T2JqZWN0LnNldFByb3RvdHlwZU9mKGUsdCk6ZS5fX3Byb3RvX189dCl9T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGM9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIG49YXJndW1lbnRzW3RdO2Zvcih2YXIgciBpbiBuKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLHIpJiYoZVtyXT1uW3JdKX1yZXR1cm4gZX0sZj1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXtmb3IodmFyIG49MDtuPHQubGVuZ3RoO24rKyl7dmFyIHI9dFtuXTtyLmVudW1lcmFibGU9ci5lbnVtZXJhYmxlfHwhMSxyLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiByJiYoci53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsci5rZXkscil9fXJldHVybiBmdW5jdGlvbih0LG4scil7cmV0dXJuIG4mJmUodC5wcm90b3R5cGUsbiksciYmZSh0LHIpLHR9fSgpLGw9bigxMCkscD1yKGwpLGQ9bigxMSkseT1yKGQpLHY9e3Bvc2l0aW9uOlwicmVsYXRpdmVcIixvdmVyZmxvdzpcImhpZGRlblwiLGhlaWdodDpcIjEwMCVcIix3aWR0aDpcIjEwMCVcIn0saD1mdW5jdGlvbihlKXtmdW5jdGlvbiB0KCl7YSh0aGlzLHQpO3ZhciBlPXUodGhpcywodC5fX3Byb3RvX198fE9iamVjdC5nZXRQcm90b3R5cGVPZih0KSkuY2FsbCh0aGlzKSk7cmV0dXJuIGUuc3RhdGU9e21hcDpudWxsLG1hcmtlcnM6bmV3IE1hcH0sZX1yZXR1cm4gcyh0LGUpLGYodCxbe2tleTpcImNvbXBvbmVudERpZE1vdW50XCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9dGhpcy5wcm9wcyxuPXQuY29vcmRpbmF0ZXMscj10Lmdvb2dsZU1hcHMsbz10Lm9uTG9hZGVkLGE9aSh0LFtcImNvb3JkaW5hdGVzXCIsXCJnb29nbGVNYXBzXCIsXCJvbkxvYWRlZFwiXSksdT1uZXcgci5NYXAodGhpcy5yZWZfbWFwLGMoe30sYSkpO3RoaXMuc2V0U3RhdGUoe21hcDp1fSxmdW5jdGlvbigpe2UuYWRkTmV3TWFya2VycyhuKX0pLG8mJm8ocix1KX19LHtrZXk6XCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxuPWUuY29vcmRpbmF0ZXMuc29tZShmdW5jdGlvbihlKXtyZXR1cm4hdC5zdGF0ZS5tYXJrZXJzLmhhcyh0LmdldE1hcmtlcklkKGUpKX0pLHI9W10uY29uY2F0KG8odGhpcy5zdGF0ZS5tYXJrZXJzLmtleXMoKSkpLnNvbWUoZnVuY3Rpb24obil7cmV0dXJuIWUuY29vcmRpbmF0ZXMuc29tZShmdW5jdGlvbihlKXtyZXR1cm4gbj09PXQuZ2V0TWFya2VySWQoZSl9KX0pO3ImJnRoaXMucmVtb3ZlT2xkTWFya2VycyhlLmNvb3JkaW5hdGVzKSxuJiZ0aGlzLmFkZE5ld01hcmtlcnMoZS5jb29yZGluYXRlcyl9fSx7a2V5Olwic2hvdWxkQ29tcG9uZW50VXBkYXRlXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcy5jb29yZGluYXRlcykhPT1KU09OLnN0cmluZ2lmeShlLmNvb3JkaW5hdGVzKX19LHtrZXk6XCJnZXRNYXJrZXJJZFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiBlLnBvc2l0aW9uLmxhdCtcIl9cIitlLnBvc2l0aW9uLmxuZ319LHtrZXk6XCJyZW1vdmVPbGRNYXJrZXJzXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxuPXRoaXMuc3RhdGUubWFya2VycyxyPXRoaXMucHJvcHMuYXV0b0ZpdEJvdW5kcztuLmZvckVhY2goZnVuY3Rpb24ocixvKXt2YXIgaT1lLnNvbWUoZnVuY3Rpb24oZSl7cmV0dXJuIHQuZ2V0TWFya2VySWQoZSk9PT1vfSk7aXx8KHIuc2V0TWFwKG51bGwpLG4uZGVsZXRlKG8pKX0pLHRoaXMuc2V0U3RhdGUoe21hcmtlcnM6bn0pLHImJnRoaXMuZml0Qm91bmRzKCl9fSx7a2V5OlwiYWRkTmV3TWFya2Vyc1wiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMsbj10aGlzLnN0YXRlLm1hcmtlcnMscj10aGlzLnByb3BzLmF1dG9GaXRCb3VuZHM7ZS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciByPXQuZ2V0TWFya2VySWQoZSk7bi5oYXMocil8fG4uc2V0KHIsdC5hZGRNYXJrZXIocixlKSl9KSx0aGlzLnNldFN0YXRlKHttYXJrZXJzOm59KSxyJiZ0aGlzLmZpdEJvdW5kcygpfX0se2tleTpcImFkZE1hcmtlclwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcy5zdGF0ZS5tYXAscj10aGlzLnByb3BzLmdvb2dsZU1hcHMsbz10Lm9uTG9hZGVkLGE9aSh0LFtcIm9uTG9hZGVkXCJdKSx1PW5ldyByLk1hcmtlcihjKHttYXA6bn0sYSkpO3JldHVybiBvJiZvKHIsbix1KSx1fX0se2tleTpcImZpdEJvdW5kc1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5zdGF0ZSx0PWUubWFwLG49ZS5tYXJrZXJzLHI9dGhpcy5wcm9wcyxvPXIuYm91bmRzT2Zmc2V0LGk9ci5nb29nbGVNYXBzO2lmKHQmJjAhPT1uLnNpemUpe3ZhciBhPUFycmF5LmZyb20obi52YWx1ZXMoKSkucmVkdWNlKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUuZXh0ZW5kKHQuZ2V0UG9zaXRpb24oKSl9LG5ldyBpLkxhdExuZ0JvdW5kcyksdT1hLmdldENlbnRlcigpO2EuZXh0ZW5kKG5ldyBpLkxhdExuZyh1LmxhdCgpK28sdS5sbmcoKStvKSkuZXh0ZW5kKG5ldyBpLkxhdExuZyh1LmxhdCgpLW8sdS5sbmcoKS1vKSksdC5zZXRDZW50ZXIodSksdC5maXRCb3VuZHMoYSl9fX0se2tleTpcInJlbmRlclwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztyZXR1cm4geS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7cmVmOmZ1bmN0aW9uKHQpe3JldHVybiBlLnJlZl9tYXA9dH0sc3R5bGU6dn0pfX1dKSx0fSh5LmRlZmF1bHQuQ29tcG9uZW50KTtoLnByb3BUeXBlcz17YXV0b0ZpdEJvdW5kczpwLmRlZmF1bHQuYm9vbCxib3VuZHNPZmZzZXQ6cC5kZWZhdWx0Lm51bWJlcixjb29yZGluYXRlczpwLmRlZmF1bHQuYXJyYXlPZihwLmRlZmF1bHQuc2hhcGUoe29uTG9hZGVkOnAuZGVmYXVsdC5mdW5jfSkpLGdvb2dsZU1hcHM6cC5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkLG9uTG9hZGVkOnAuZGVmYXVsdC5mdW5jfSxoLmRlZmF1bHRQcm9wcz17YXV0b0ZpdEJvdW5kczohMSxib3VuZHNPZmZzZXQ6LjAwMixjb29yZGluYXRlczpbXSxvbkxvYWRlZDpudWxsfSx0LmRlZmF1bHQ9aH0sZnVuY3Rpb24oZSx0KXtmdW5jdGlvbiBuKCl7dGhyb3cgbmV3IEVycm9yKFwic2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZFwiKX1mdW5jdGlvbiByKCl7dGhyb3cgbmV3IEVycm9yKFwiY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkXCIpfWZ1bmN0aW9uIG8oZSl7aWYoZj09PXNldFRpbWVvdXQpcmV0dXJuIHNldFRpbWVvdXQoZSwwKTtpZigoZj09PW58fCFmKSYmc2V0VGltZW91dClyZXR1cm4gZj1zZXRUaW1lb3V0LHNldFRpbWVvdXQoZSwwKTt0cnl7cmV0dXJuIGYoZSwwKX1jYXRjaCh0KXt0cnl7cmV0dXJuIGYuY2FsbChudWxsLGUsMCl9Y2F0Y2godCl7cmV0dXJuIGYuY2FsbCh0aGlzLGUsMCl9fX1mdW5jdGlvbiBpKGUpe2lmKGw9PT1jbGVhclRpbWVvdXQpcmV0dXJuIGNsZWFyVGltZW91dChlKTtpZigobD09PXJ8fCFsKSYmY2xlYXJUaW1lb3V0KXJldHVybiBsPWNsZWFyVGltZW91dCxjbGVhclRpbWVvdXQoZSk7dHJ5e3JldHVybiBsKGUpfWNhdGNoKHQpe3RyeXtyZXR1cm4gbC5jYWxsKG51bGwsZSl9Y2F0Y2godCl7cmV0dXJuIGwuY2FsbCh0aGlzLGUpfX19ZnVuY3Rpb24gYSgpe3YmJmQmJih2PSExLGQubGVuZ3RoP3k9ZC5jb25jYXQoeSk6aD0tMSx5Lmxlbmd0aCYmdSgpKX1mdW5jdGlvbiB1KCl7aWYoIXYpe3ZhciBlPW8oYSk7dj0hMDtmb3IodmFyIHQ9eS5sZW5ndGg7dDspe2ZvcihkPXkseT1bXTsrK2g8dDspZCYmZFtoXS5ydW4oKTtoPS0xLHQ9eS5sZW5ndGh9ZD1udWxsLHY9ITEsaShlKX19ZnVuY3Rpb24gcyhlLHQpe3RoaXMuZnVuPWUsdGhpcy5hcnJheT10fWZ1bmN0aW9uIGMoKXt9dmFyIGYsbCxwPWUuZXhwb3J0cz17fTshZnVuY3Rpb24oKXt0cnl7Zj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBzZXRUaW1lb3V0P3NldFRpbWVvdXQ6bn1jYXRjaChlKXtmPW59dHJ5e2w9XCJmdW5jdGlvblwiPT10eXBlb2YgY2xlYXJUaW1lb3V0P2NsZWFyVGltZW91dDpyfWNhdGNoKGUpe2w9cn19KCk7dmFyIGQseT1bXSx2PSExLGg9LTE7cC5uZXh0VGljaz1mdW5jdGlvbihlKXt2YXIgdD1uZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aC0xKTtpZihhcmd1bWVudHMubGVuZ3RoPjEpZm9yKHZhciBuPTE7bjxhcmd1bWVudHMubGVuZ3RoO24rKyl0W24tMV09YXJndW1lbnRzW25dO3kucHVzaChuZXcgcyhlLHQpKSwxIT09eS5sZW5ndGh8fHZ8fG8odSl9LHMucHJvdG90eXBlLnJ1bj1mdW5jdGlvbigpe3RoaXMuZnVuLmFwcGx5KG51bGwsdGhpcy5hcnJheSl9LHAudGl0bGU9XCJicm93c2VyXCIscC5icm93c2VyPSEwLHAuZW52PXt9LHAuYXJndj1bXSxwLnZlcnNpb249XCJcIixwLnZlcnNpb25zPXt9LHAub249YyxwLmFkZExpc3RlbmVyPWMscC5vbmNlPWMscC5vZmY9YyxwLnJlbW92ZUxpc3RlbmVyPWMscC5yZW1vdmVBbGxMaXN0ZW5lcnM9YyxwLmVtaXQ9YyxwLnByZXBlbmRMaXN0ZW5lcj1jLHAucHJlcGVuZE9uY2VMaXN0ZW5lcj1jLHAubGlzdGVuZXJzPWZ1bmN0aW9uKGUpe3JldHVybltdfSxwLmJpbmRpbmc9ZnVuY3Rpb24oZSl7dGhyb3cgbmV3IEVycm9yKFwicHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWRcIil9LHAuY3dkPWZ1bmN0aW9uKCl7cmV0dXJuXCIvXCJ9LHAuY2hkaXI9ZnVuY3Rpb24oZSl7dGhyb3cgbmV3IEVycm9yKFwicHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkXCIpfSxwLnVtYXNrPWZ1bmN0aW9uKCl7cmV0dXJuIDB9fSxmdW5jdGlvbihlLHQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oZSl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGV9fXZhciByPWZ1bmN0aW9uKCl7fTtyLnRoYXRSZXR1cm5zPW4sci50aGF0UmV0dXJuc0ZhbHNlPW4oITEpLHIudGhhdFJldHVybnNUcnVlPW4oITApLHIudGhhdFJldHVybnNOdWxsPW4obnVsbCksci50aGF0UmV0dXJuc1RoaXM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30sci50aGF0UmV0dXJuc0FyZ3VtZW50PWZ1bmN0aW9uKGUpe3JldHVybiBlfSxlLmV4cG9ydHM9cn0sZnVuY3Rpb24oZSx0LG4peyhmdW5jdGlvbih0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKGUsdCxuLG8saSxhLHUscyl7aWYocih0KSwhZSl7dmFyIGM7aWYodm9pZCAwPT09dCljPW5ldyBFcnJvcihcIk1pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50IGZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuXCIpO2Vsc2V7dmFyIGY9W24sbyxpLGEsdSxzXSxsPTA7Yz1uZXcgRXJyb3IodC5yZXBsYWNlKC8lcy9nLGZ1bmN0aW9uKCl7cmV0dXJuIGZbbCsrXX0pKSxjLm5hbWU9XCJJbnZhcmlhbnQgVmlvbGF0aW9uXCJ9dGhyb3cgYy5mcmFtZXNUb1BvcD0xLGN9fXZhciByPWZ1bmN0aW9uKGUpe307XCJwcm9kdWN0aW9uXCIhPT10LmVudi5OT0RFX0VOViYmKHI9ZnVuY3Rpb24oZSl7aWYodm9pZCAwPT09ZSl0aHJvdyBuZXcgRXJyb3IoXCJpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudFwiKX0pLGUuZXhwb3J0cz1ufSkuY2FsbCh0LG4oMSkpfSxmdW5jdGlvbihlLHQpe1widXNlIHN0cmljdFwiO3ZhciBuPVwiU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRURcIjtlLmV4cG9ydHM9bn0sZnVuY3Rpb24oZSx0LG4peyhmdW5jdGlvbih0KXtcInVzZSBzdHJpY3RcIjt2YXIgcj1uKDIpLG89cjtpZihcInByb2R1Y3Rpb25cIiE9PXQuZW52Lk5PREVfRU5WKXt2YXIgaT1mdW5jdGlvbihlKXtmb3IodmFyIHQ9YXJndW1lbnRzLmxlbmd0aCxuPUFycmF5KHQ+MT90LTE6MCkscj0xO3I8dDtyKyspbltyLTFdPWFyZ3VtZW50c1tyXTt2YXIgbz0wLGk9XCJXYXJuaW5nOiBcIitlLnJlcGxhY2UoLyVzL2csZnVuY3Rpb24oKXtyZXR1cm4gbltvKytdfSk7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGNvbnNvbGUmJmNvbnNvbGUuZXJyb3IoaSk7dHJ5e3Rocm93IG5ldyBFcnJvcihpKX1jYXRjaChlKXt9fTtvPWZ1bmN0aW9uKGUsdCl7aWYodm9pZCAwPT09dCl0aHJvdyBuZXcgRXJyb3IoXCJgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyBtZXNzYWdlIGFyZ3VtZW50XCIpO2lmKDAhPT10LmluZGV4T2YoXCJGYWlsZWQgQ29tcG9zaXRlIHByb3BUeXBlOiBcIikmJiFlKXtmb3IodmFyIG49YXJndW1lbnRzLmxlbmd0aCxyPUFycmF5KG4+Mj9uLTI6MCksbz0yO288bjtvKyspcltvLTJdPWFyZ3VtZW50c1tvXTtpLmFwcGx5KHZvaWQgMCxbdF0uY29uY2F0KHIpKX19fWUuZXhwb3J0cz1vfSkuY2FsbCh0LG4oMSkpfSxmdW5jdGlvbihlLHQpey8qXG5cdG9iamVjdC1hc3NpZ25cblx0KGMpIFNpbmRyZSBTb3JodXNcblx0QGxpY2Vuc2UgTUlUXG5cdCovXG5cInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKGUpe2lmKG51bGw9PT1lfHx2b2lkIDA9PT1lKXRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZFwiKTtyZXR1cm4gT2JqZWN0KGUpfWZ1bmN0aW9uIHIoKXt0cnl7aWYoIU9iamVjdC5hc3NpZ24pcmV0dXJuITE7dmFyIGU9bmV3IFN0cmluZyhcImFiY1wiKTtpZihlWzVdPVwiZGVcIixcIjVcIj09PU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGUpWzBdKXJldHVybiExO2Zvcih2YXIgdD17fSxuPTA7bjwxMDtuKyspdFtcIl9cIitTdHJpbmcuZnJvbUNoYXJDb2RlKG4pXT1uO3ZhciByPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHQpLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gdFtlXX0pO2lmKFwiMDEyMzQ1Njc4OVwiIT09ci5qb2luKFwiXCIpKXJldHVybiExO3ZhciBvPXt9O3JldHVyblwiYWJjZGVmZ2hpamtsbW5vcHFyc3RcIi5zcGxpdChcIlwiKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe29bZV09ZX0pLFwiYWJjZGVmZ2hpamtsbW5vcHFyc3RcIj09PU9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sbykpLmpvaW4oXCJcIil9Y2F0Y2goZSl7cmV0dXJuITF9fXZhciBvPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMsaT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LGE9T2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtlLmV4cG9ydHM9cigpP09iamVjdC5hc3NpZ246ZnVuY3Rpb24oZSx0KXtmb3IodmFyIHIsdSxzPW4oZSksYz0xO2M8YXJndW1lbnRzLmxlbmd0aDtjKyspe3I9T2JqZWN0KGFyZ3VtZW50c1tjXSk7Zm9yKHZhciBmIGluIHIpaS5jYWxsKHIsZikmJihzW2ZdPXJbZl0pO2lmKG8pe3U9byhyKTtmb3IodmFyIGw9MDtsPHUubGVuZ3RoO2wrKylhLmNhbGwocix1W2xdKSYmKHNbdVtsXV09clt1W2xdXSl9fXJldHVybiBzfX0sZnVuY3Rpb24oZSx0LG4peyhmdW5jdGlvbih0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKGUsbixyLHMsYyl7aWYoXCJwcm9kdWN0aW9uXCIhPT10LmVudi5OT0RFX0VOVilmb3IodmFyIGYgaW4gZSlpZihlLmhhc093blByb3BlcnR5KGYpKXt2YXIgbDt0cnl7byhcImZ1bmN0aW9uXCI9PXR5cGVvZiBlW2ZdLFwiJXM6ICVzIHR5cGUgYCVzYCBpcyBpbnZhbGlkOyBpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJXNgLlwiLHN8fFwiUmVhY3QgY2xhc3NcIixyLGYsdHlwZW9mIGVbZl0pLGw9ZVtmXShuLGYscyxyLG51bGwsYSl9Y2F0Y2goZSl7bD1lfWlmKGkoIWx8fGwgaW5zdGFuY2VvZiBFcnJvcixcIiVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMgYCVzYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyIGZ1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiBZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciBjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kIHNoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS5cIixzfHxcIlJlYWN0IGNsYXNzXCIscixmLHR5cGVvZiBsKSxsIGluc3RhbmNlb2YgRXJyb3ImJiEobC5tZXNzYWdlIGluIHUpKXt1W2wubWVzc2FnZV09ITA7dmFyIHA9Yz9jKCk6XCJcIjtpKCExLFwiRmFpbGVkICVzIHR5cGU6ICVzJXNcIixyLGwubWVzc2FnZSxudWxsIT1wP3A6XCJcIil9fX1pZihcInByb2R1Y3Rpb25cIiE9PXQuZW52Lk5PREVfRU5WKXZhciBvPW4oMyksaT1uKDUpLGE9big0KSx1PXt9O2UuZXhwb3J0cz1yfSkuY2FsbCh0LG4oMSkpfSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9bigyKSxvPW4oMyksaT1uKDQpO2UuZXhwb3J0cz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0LG4scixhLHUpe3UhPT1pJiZvKCExLFwiQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gVXNlIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpIHRvIGNhbGwgdGhlbS4gUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlc1wiKX1mdW5jdGlvbiB0KCl7cmV0dXJuIGV9ZS5pc1JlcXVpcmVkPWU7dmFyIG49e2FycmF5OmUsYm9vbDplLGZ1bmM6ZSxudW1iZXI6ZSxvYmplY3Q6ZSxzdHJpbmc6ZSxzeW1ib2w6ZSxhbnk6ZSxhcnJheU9mOnQsZWxlbWVudDplLGluc3RhbmNlT2Y6dCxub2RlOmUsb2JqZWN0T2Y6dCxvbmVPZjp0LG9uZU9mVHlwZTp0LHNoYXBlOnQsZXhhY3Q6dH07cmV0dXJuIG4uY2hlY2tQcm9wVHlwZXM9cixuLlByb3BUeXBlcz1uLG59fSxmdW5jdGlvbihlLHQsbil7KGZ1bmN0aW9uKHQpe1widXNlIHN0cmljdFwiO3ZhciByPW4oMiksbz1uKDMpLGk9big1KSxhPW4oNiksdT1uKDQpLHM9big3KTtlLmV4cG9ydHM9ZnVuY3Rpb24oZSxuKXtmdW5jdGlvbiBjKGUpe3ZhciB0PWUmJihSJiZlW1JdfHxlW1NdKTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiB0KXJldHVybiB0fWZ1bmN0aW9uIGYoZSx0KXtyZXR1cm4gZT09PXQ/MCE9PWV8fDEvZT09PTEvdDplIT09ZSYmdCE9PXR9ZnVuY3Rpb24gbChlKXt0aGlzLm1lc3NhZ2U9ZSx0aGlzLnN0YWNrPVwiXCJ9ZnVuY3Rpb24gcChlKXtmdW5jdGlvbiByKHIsYyxmLHAsZCx5LHYpe2lmKHA9cHx8TSx5PXl8fGYsdiE9PXUpaWYobilvKCExLFwiQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gVXNlIGBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKWAgdG8gY2FsbCB0aGVtLiBSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzXCIpO2Vsc2UgaWYoXCJwcm9kdWN0aW9uXCIhPT10LmVudi5OT0RFX0VOViYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGNvbnNvbGUpe3ZhciBoPXArXCI6XCIrZjshYVtoXSYmczwzJiYoaSghMSxcIllvdSBhcmUgbWFudWFsbHkgY2FsbGluZyBhIFJlYWN0LlByb3BUeXBlcyB2YWxpZGF0aW9uIGZ1bmN0aW9uIGZvciB0aGUgYCVzYCBwcm9wIG9uIGAlc2AuIFRoaXMgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCB0aHJvdyBpbiB0aGUgc3RhbmRhbG9uZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gWW91IG1heSBiZSBzZWVpbmcgdGhpcyB3YXJuaW5nIGR1ZSB0byBhIHRoaXJkLXBhcnR5IFByb3BUeXBlcyBsaWJyYXJ5LiBTZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC13YXJuaW5nLWRvbnQtY2FsbC1wcm9wdHlwZXMgZm9yIGRldGFpbHMuXCIseSxwKSxhW2hdPSEwLHMrKyl9cmV0dXJuIG51bGw9PWNbZl0/cj9uZXcgbChudWxsPT09Y1tmXT9cIlRoZSBcIitkK1wiIGBcIit5K1wiYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgXCIrKFwiaW4gYFwiK3ArXCJgLCBidXQgaXRzIHZhbHVlIGlzIGBudWxsYC5cIik6XCJUaGUgXCIrZCtcIiBgXCIreStcImAgaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluIFwiKyhcImBcIitwK1wiYCwgYnV0IGl0cyB2YWx1ZSBpcyBgdW5kZWZpbmVkYC5cIikpOm51bGw6ZShjLGYscCxkLHkpfWlmKFwicHJvZHVjdGlvblwiIT09dC5lbnYuTk9ERV9FTlYpdmFyIGE9e30scz0wO3ZhciBjPXIuYmluZChudWxsLCExKTtyZXR1cm4gYy5pc1JlcXVpcmVkPXIuYmluZChudWxsLCEwKSxjfWZ1bmN0aW9uIGQoZSl7ZnVuY3Rpb24gdCh0LG4scixvLGksYSl7dmFyIHU9dFtuXSxzPUUodSk7aWYocyE9PWUpe3ZhciBjPU4odSk7cmV0dXJuIG5ldyBsKFwiSW52YWxpZCBcIitvK1wiIGBcIitpK1wiYCBvZiB0eXBlIFwiKyhcImBcIitjK1wiYCBzdXBwbGllZCB0byBgXCIrcitcImAsIGV4cGVjdGVkIFwiKSsoXCJgXCIrZStcImAuXCIpKX1yZXR1cm4gbnVsbH1yZXR1cm4gcCh0KX1mdW5jdGlvbiB5KCl7cmV0dXJuIHAoci50aGF0UmV0dXJuc051bGwpfWZ1bmN0aW9uIHYoZSl7ZnVuY3Rpb24gdCh0LG4scixvLGkpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUpcmV0dXJuIG5ldyBsKFwiUHJvcGVydHkgYFwiK2krXCJgIG9mIGNvbXBvbmVudCBgXCIrcitcImAgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIGFycmF5T2YuXCIpO3ZhciBhPXRbbl07aWYoIUFycmF5LmlzQXJyYXkoYSkpe3ZhciBzPUUoYSk7cmV0dXJuIG5ldyBsKFwiSW52YWxpZCBcIitvK1wiIGBcIitpK1wiYCBvZiB0eXBlIFwiKyhcImBcIitzK1wiYCBzdXBwbGllZCB0byBgXCIrcitcImAsIGV4cGVjdGVkIGFuIGFycmF5LlwiKSl9Zm9yKHZhciBjPTA7YzxhLmxlbmd0aDtjKyspe3ZhciBmPWUoYSxjLHIsbyxpK1wiW1wiK2MrXCJdXCIsdSk7aWYoZiBpbnN0YW5jZW9mIEVycm9yKXJldHVybiBmfXJldHVybiBudWxsfXJldHVybiBwKHQpfWZ1bmN0aW9uIGgoKXtmdW5jdGlvbiB0KHQsbixyLG8saSl7dmFyIGE9dFtuXTtpZighZShhKSl7dmFyIHU9RShhKTtyZXR1cm4gbmV3IGwoXCJJbnZhbGlkIFwiK28rXCIgYFwiK2krXCJgIG9mIHR5cGUgXCIrKFwiYFwiK3UrXCJgIHN1cHBsaWVkIHRvIGBcIityK1wiYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50LlwiKSl9cmV0dXJuIG51bGx9cmV0dXJuIHAodCl9ZnVuY3Rpb24gbShlKXtmdW5jdGlvbiB0KHQsbixyLG8saSl7aWYoISh0W25daW5zdGFuY2VvZiBlKSl7dmFyIGE9ZS5uYW1lfHxNLHU9Xyh0W25dKTtyZXR1cm4gbmV3IGwoXCJJbnZhbGlkIFwiK28rXCIgYFwiK2krXCJgIG9mIHR5cGUgXCIrKFwiYFwiK3UrXCJgIHN1cHBsaWVkIHRvIGBcIityK1wiYCwgZXhwZWN0ZWQgXCIpKyhcImluc3RhbmNlIG9mIGBcIithK1wiYC5cIikpfXJldHVybiBudWxsfXJldHVybiBwKHQpfWZ1bmN0aW9uIGcoZSl7ZnVuY3Rpb24gbih0LG4scixvLGkpe2Zvcih2YXIgYT10W25dLHU9MDt1PGUubGVuZ3RoO3UrKylpZihmKGEsZVt1XSkpcmV0dXJuIG51bGw7dmFyIHM9SlNPTi5zdHJpbmdpZnkoZSk7cmV0dXJuIG5ldyBsKFwiSW52YWxpZCBcIitvK1wiIGBcIitpK1wiYCBvZiB2YWx1ZSBgXCIrYStcImAgXCIrKFwic3VwcGxpZWQgdG8gYFwiK3IrXCJgLCBleHBlY3RlZCBvbmUgb2YgXCIrcytcIi5cIikpfXJldHVybiBBcnJheS5pc0FycmF5KGUpP3Aobik6KFwicHJvZHVjdGlvblwiIT09dC5lbnYuTk9ERV9FTlY/aSghMSxcIkludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LlwiKTp2b2lkIDAsci50aGF0UmV0dXJuc051bGwpfWZ1bmN0aW9uIGIoZSl7ZnVuY3Rpb24gdCh0LG4scixvLGkpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUpcmV0dXJuIG5ldyBsKFwiUHJvcGVydHkgYFwiK2krXCJgIG9mIGNvbXBvbmVudCBgXCIrcitcImAgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIG9iamVjdE9mLlwiKTt2YXIgYT10W25dLHM9RShhKTtpZihcIm9iamVjdFwiIT09cylyZXR1cm4gbmV3IGwoXCJJbnZhbGlkIFwiK28rXCIgYFwiK2krXCJgIG9mIHR5cGUgXCIrKFwiYFwiK3MrXCJgIHN1cHBsaWVkIHRvIGBcIityK1wiYCwgZXhwZWN0ZWQgYW4gb2JqZWN0LlwiKSk7Zm9yKHZhciBjIGluIGEpaWYoYS5oYXNPd25Qcm9wZXJ0eShjKSl7dmFyIGY9ZShhLGMscixvLGkrXCIuXCIrYyx1KTtpZihmIGluc3RhbmNlb2YgRXJyb3IpcmV0dXJuIGZ9cmV0dXJuIG51bGx9cmV0dXJuIHAodCl9ZnVuY3Rpb24gTyhlKXtmdW5jdGlvbiBuKHQsbixyLG8saSl7Zm9yKHZhciBhPTA7YTxlLmxlbmd0aDthKyspe3ZhciBzPWVbYV07aWYobnVsbD09cyh0LG4scixvLGksdSkpcmV0dXJuIG51bGx9cmV0dXJuIG5ldyBsKFwiSW52YWxpZCBcIitvK1wiIGBcIitpK1wiYCBzdXBwbGllZCB0byBcIisoXCJgXCIrcitcImAuXCIpKX1pZighQXJyYXkuaXNBcnJheShlKSlyZXR1cm5cInByb2R1Y3Rpb25cIiE9PXQuZW52Lk5PREVfRU5WP2koITEsXCJJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZSwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuXCIpOnZvaWQgMCxyLnRoYXRSZXR1cm5zTnVsbDtmb3IodmFyIG89MDtvPGUubGVuZ3RoO28rKyl7dmFyIGE9ZVtvXTtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBhKXJldHVybiBpKCExLFwiSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUuIEV4cGVjdGVkIGFuIGFycmF5IG9mIGNoZWNrIGZ1bmN0aW9ucywgYnV0IHJlY2VpdmVkICVzIGF0IGluZGV4ICVzLlwiLFAoYSksbyksci50aGF0UmV0dXJuc051bGx9cmV0dXJuIHAobil9ZnVuY3Rpb24gdygpe2Z1bmN0aW9uIGUoZSx0LG4scixvKXtyZXR1cm4gaihlW3RdKT9udWxsOm5ldyBsKFwiSW52YWxpZCBcIityK1wiIGBcIitvK1wiYCBzdXBwbGllZCB0byBcIisoXCJgXCIrbitcImAsIGV4cGVjdGVkIGEgUmVhY3ROb2RlLlwiKSl9cmV0dXJuIHAoZSl9ZnVuY3Rpb24gayhlKXtmdW5jdGlvbiB0KHQsbixyLG8saSl7dmFyIGE9dFtuXSxzPUUoYSk7aWYoXCJvYmplY3RcIiE9PXMpcmV0dXJuIG5ldyBsKFwiSW52YWxpZCBcIitvK1wiIGBcIitpK1wiYCBvZiB0eXBlIGBcIitzK1wiYCBcIisoXCJzdXBwbGllZCB0byBgXCIrcitcImAsIGV4cGVjdGVkIGBvYmplY3RgLlwiKSk7Zm9yKHZhciBjIGluIGUpe3ZhciBmPWVbY107aWYoZil7dmFyIHA9ZihhLGMscixvLGkrXCIuXCIrYyx1KTtpZihwKXJldHVybiBwfX1yZXR1cm4gbnVsbH1yZXR1cm4gcCh0KX1mdW5jdGlvbiBUKGUpe2Z1bmN0aW9uIHQodCxuLHIsbyxpKXt2YXIgcz10W25dLGM9RShzKTtpZihcIm9iamVjdFwiIT09YylyZXR1cm4gbmV3IGwoXCJJbnZhbGlkIFwiK28rXCIgYFwiK2krXCJgIG9mIHR5cGUgYFwiK2MrXCJgIFwiKyhcInN1cHBsaWVkIHRvIGBcIityK1wiYCwgZXhwZWN0ZWQgYG9iamVjdGAuXCIpKTt2YXIgZj1hKHt9LHRbbl0sZSk7Zm9yKHZhciBwIGluIGYpe3ZhciBkPWVbcF07aWYoIWQpcmV0dXJuIG5ldyBsKFwiSW52YWxpZCBcIitvK1wiIGBcIitpK1wiYCBrZXkgYFwiK3ArXCJgIHN1cHBsaWVkIHRvIGBcIityK1wiYC5cXG5CYWQgb2JqZWN0OiBcIitKU09OLnN0cmluZ2lmeSh0W25dLG51bGwsXCIgIFwiKStcIlxcblZhbGlkIGtleXM6IFwiK0pTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKGUpLG51bGwsXCIgIFwiKSk7dmFyIHk9ZChzLHAscixvLGkrXCIuXCIrcCx1KTtpZih5KXJldHVybiB5fXJldHVybiBudWxsfXJldHVybiBwKHQpfWZ1bmN0aW9uIGoodCl7c3dpdGNoKHR5cGVvZiB0KXtjYXNlXCJudW1iZXJcIjpjYXNlXCJzdHJpbmdcIjpjYXNlXCJ1bmRlZmluZWRcIjpyZXR1cm4hMDtjYXNlXCJib29sZWFuXCI6cmV0dXJuIXQ7Y2FzZVwib2JqZWN0XCI6aWYoQXJyYXkuaXNBcnJheSh0KSlyZXR1cm4gdC5ldmVyeShqKTtpZihudWxsPT09dHx8ZSh0KSlyZXR1cm4hMDt2YXIgbj1jKHQpO2lmKCFuKXJldHVybiExO3ZhciByLG89bi5jYWxsKHQpO2lmKG4hPT10LmVudHJpZXMpe2Zvcig7IShyPW8ubmV4dCgpKS5kb25lOylpZighaihyLnZhbHVlKSlyZXR1cm4hMX1lbHNlIGZvcig7IShyPW8ubmV4dCgpKS5kb25lOyl7dmFyIGk9ci52YWx1ZTtpZihpJiYhaihpWzFdKSlyZXR1cm4hMX1yZXR1cm4hMDtkZWZhdWx0OnJldHVybiExfX1mdW5jdGlvbiB4KGUsdCl7cmV0dXJuXCJzeW1ib2xcIj09PWV8fChcIlN5bWJvbFwiPT09dFtcIkBAdG9TdHJpbmdUYWdcIl18fFwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmdCBpbnN0YW5jZW9mIFN5bWJvbCl9ZnVuY3Rpb24gRShlKXt2YXIgdD10eXBlb2YgZTtyZXR1cm4gQXJyYXkuaXNBcnJheShlKT9cImFycmF5XCI6ZSBpbnN0YW5jZW9mIFJlZ0V4cD9cIm9iamVjdFwiOngodCxlKT9cInN5bWJvbFwiOnR9ZnVuY3Rpb24gTihlKXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgZXx8bnVsbD09PWUpcmV0dXJuXCJcIitlO3ZhciB0PUUoZSk7aWYoXCJvYmplY3RcIj09PXQpe2lmKGUgaW5zdGFuY2VvZiBEYXRlKXJldHVyblwiZGF0ZVwiO2lmKGUgaW5zdGFuY2VvZiBSZWdFeHApcmV0dXJuXCJyZWdleHBcIn1yZXR1cm4gdH1mdW5jdGlvbiBQKGUpe3ZhciB0PU4oZSk7c3dpdGNoKHQpe2Nhc2VcImFycmF5XCI6Y2FzZVwib2JqZWN0XCI6cmV0dXJuXCJhbiBcIit0O2Nhc2VcImJvb2xlYW5cIjpjYXNlXCJkYXRlXCI6Y2FzZVwicmVnZXhwXCI6cmV0dXJuXCJhIFwiK3Q7ZGVmYXVsdDpyZXR1cm4gdH19ZnVuY3Rpb24gXyhlKXtyZXR1cm4gZS5jb25zdHJ1Y3RvciYmZS5jb25zdHJ1Y3Rvci5uYW1lP2UuY29uc3RydWN0b3IubmFtZTpNfXZhciBSPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLml0ZXJhdG9yLFM9XCJAQGl0ZXJhdG9yXCIsTT1cIjw8YW5vbnltb3VzPj5cIixJPXthcnJheTpkKFwiYXJyYXlcIiksYm9vbDpkKFwiYm9vbGVhblwiKSxmdW5jOmQoXCJmdW5jdGlvblwiKSxudW1iZXI6ZChcIm51bWJlclwiKSxvYmplY3Q6ZChcIm9iamVjdFwiKSxzdHJpbmc6ZChcInN0cmluZ1wiKSxzeW1ib2w6ZChcInN5bWJvbFwiKSxhbnk6eSgpLGFycmF5T2Y6dixlbGVtZW50OmgoKSxpbnN0YW5jZU9mOm0sbm9kZTp3KCksb2JqZWN0T2Y6YixvbmVPZjpnLG9uZU9mVHlwZTpPLHNoYXBlOmssZXhhY3Q6VH07cmV0dXJuIGwucHJvdG90eXBlPUVycm9yLnByb3RvdHlwZSxJLmNoZWNrUHJvcFR5cGVzPXMsSS5Qcm9wVHlwZXM9SSxJfX0pLmNhbGwodCxuKDEpKX0sZnVuY3Rpb24oZSx0LG4peyhmdW5jdGlvbih0KXtpZihcInByb2R1Y3Rpb25cIiE9PXQuZW52Lk5PREVfRU5WKXt2YXIgcj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3ImJlN5bWJvbC5mb3IoXCJyZWFjdC5lbGVtZW50XCIpfHw2MDEwMyxvPWZ1bmN0aW9uKGUpe3JldHVyblwib2JqZWN0XCI9PXR5cGVvZiBlJiZudWxsIT09ZSYmZS4kJHR5cGVvZj09PXJ9LGk9ITA7ZS5leHBvcnRzPW4oOSkobyxpKX1lbHNlIGUuZXhwb3J0cz1uKDgpKCl9KS5jYWxsKHQsbigxKSl9LGZ1bmN0aW9uKHQsbil7dC5leHBvcnRzPWV9XSl9KTsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcblxuaW1wb3J0IGxvYWRHb29nbGVNYXBzU2RrIGZyb20gXCIuL2xvYWRHb29nbGVNYXBzU2RrXCI7XG5cbnZhciBHb29nbGVNYXBzTG9hZGVyID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEdvb2dsZU1hcHNMb2FkZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEdvb2dsZU1hcHNMb2FkZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEdvb2dsZU1hcHNMb2FkZXIpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMpKTtcblxuICAgIF90aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGdvb2dsZU1hcHM6IG51bGwsXG4gICAgICBlcnJvcjogbnVsbFxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgR29vZ2xlTWFwc0xvYWRlci5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHRoaXMuX2lzTW91bnRlZCA9IHRydWU7XG4gICAgdmFyIHBhcmFtcyA9IHRoaXMucHJvcHMucGFyYW1zO1xuXG4gICAgbG9hZEdvb2dsZU1hcHNTZGsocGFyYW1zLCBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIGdvb2dsZU1hcHMgPSBfcmVmLmdvb2dsZU1hcHMsXG4gICAgICAgICAgZXJyb3IgPSBfcmVmLmVycm9yO1xuICAgICAgcmV0dXJuIF90aGlzMi5faXNNb3VudGVkICYmIF90aGlzMi5zZXRTdGF0ZSh7IGdvb2dsZU1hcHM6IGdvb2dsZU1hcHMsIGVycm9yOiBlcnJvciB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBHb29nbGVNYXBzTG9hZGVyLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuX2lzTW91bnRlZCA9IGZhbHNlO1xuICB9O1xuXG4gIEdvb2dsZU1hcHNMb2FkZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3N0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgZ29vZ2xlTWFwcyA9IF9zdGF0ZS5nb29nbGVNYXBzLFxuICAgICAgICBlcnJvciA9IF9zdGF0ZS5lcnJvcjtcbiAgICB2YXIgcmVuZGVyID0gdGhpcy5wcm9wcy5yZW5kZXI7XG5cbiAgICByZXR1cm4gcmVuZGVyKGdvb2dsZU1hcHMsIGVycm9yKTtcbiAgfTtcblxuICByZXR1cm4gR29vZ2xlTWFwc0xvYWRlcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuR29vZ2xlTWFwc0xvYWRlci5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIHBhcmFtczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBrZXk6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBsaWJyYXJpZXM6IFByb3BUeXBlcy5zdHJpbmdcbiAgfSkuaXNSZXF1aXJlZCxcbiAgcmVuZGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59IDoge307XG5cbmV4cG9ydCBkZWZhdWx0IEdvb2dsZU1hcHNMb2FkZXI7IiwiaW1wb3J0IGxvYWQgZnJvbSBcImxpdHRsZS1sb2FkZXJcIjtcbmltcG9ydCBxcyBmcm9tIFwicXVlcnktc3RyaW5nXCI7XG5cbnZhciBHT09HTEVfTUFQX1BMQUNFU19BUEkgPSBcImh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qc1wiO1xudmFyIE5PVF9MT0FERUQgPSAwO1xudmFyIExPQURJTkcgPSAxO1xudmFyIExPQURFRCA9IDI7XG5cbnZhciBxdWV1ZSA9IFtdO1xudmFyIHN0YXRlID0gTk9UX0xPQURFRDtcbnZhciBnb29nbGVNYXBzID0gbnVsbDtcbnZhciBlcnJvciA9IG51bGw7XG5cbmZ1bmN0aW9uIGxvYWRHb29nbGVNYXBzU2RrKHBhcmFtcywgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB3aW5kb3cuZ21fYXV0aEZhaWx1cmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBjYWxsYmFjayh7IGdvb2dsZU1hcHM6IGdvb2dsZU1hcHMsIGVycm9yOiBcIlNESyBBdXRoZW50aWNhdGlvbiBFcnJvclwiIH0pO1xuICAgIH07XG5cbiAgICBpZiAoc3RhdGUgPT09IExPQURFRCkge1xuICAgICAgY2FsbGJhY2soeyBnb29nbGVNYXBzOiBnb29nbGVNYXBzLCBlcnJvcjogZXJyb3IgfSk7XG4gICAgfSBlbHNlIGlmIChzdGF0ZSA9PT0gTE9BRElORykge1xuICAgICAgcXVldWUucHVzaChjYWxsYmFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghd2luZG93Lmdvb2dsZSkge1xuICAgICAgICB3aW5kb3cuZ29vZ2xlID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBzdGF0ZSA9IExPQURJTkc7XG4gICAgICBxdWV1ZS5wdXNoKGNhbGxiYWNrKTtcblxuICAgICAgbG9hZChHT09HTEVfTUFQX1BMQUNFU19BUEkgKyBcIj9cIiArIHFzLnN0cmluZ2lmeShwYXJhbXMpLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIHN0YXRlID0gTE9BREVEO1xuICAgICAgICBlcnJvciA9IGVyciA/IFwiTmV0d29yayBFcnJvclwiIDogbnVsbDtcbiAgICAgICAgZ29vZ2xlTWFwcyA9IHdpbmRvdy5nb29nbGUgPyB3aW5kb3cuZ29vZ2xlLm1hcHMgOiBudWxsO1xuXG4gICAgICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgcXVldWUucG9wKCkoeyBnb29nbGVNYXBzOiBnb29nbGVNYXBzLCBlcnJvcjogZXJyb3IgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkR29vZ2xlTWFwc1NkazsiLCIndXNlIHN0cmljdCc7XG52YXIgc3RyaWN0VXJpRW5jb2RlID0gcmVxdWlyZSgnc3RyaWN0LXVyaS1lbmNvZGUnKTtcbnZhciBvYmplY3RBc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG52YXIgZGVjb2RlQ29tcG9uZW50ID0gcmVxdWlyZSgnZGVjb2RlLXVyaS1jb21wb25lbnQnKTtcblxuZnVuY3Rpb24gZW5jb2RlckZvckFycmF5Rm9ybWF0KG9wdHMpIHtcblx0c3dpdGNoIChvcHRzLmFycmF5Rm9ybWF0KSB7XG5cdFx0Y2FzZSAnaW5kZXgnOlxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChrZXksIHZhbHVlLCBpbmRleCkge1xuXHRcdFx0XHRyZXR1cm4gdmFsdWUgPT09IG51bGwgPyBbXG5cdFx0XHRcdFx0ZW5jb2RlKGtleSwgb3B0cyksXG5cdFx0XHRcdFx0J1snLFxuXHRcdFx0XHRcdGluZGV4LFxuXHRcdFx0XHRcdCddJ1xuXHRcdFx0XHRdLmpvaW4oJycpIDogW1xuXHRcdFx0XHRcdGVuY29kZShrZXksIG9wdHMpLFxuXHRcdFx0XHRcdCdbJyxcblx0XHRcdFx0XHRlbmNvZGUoaW5kZXgsIG9wdHMpLFxuXHRcdFx0XHRcdCddPScsXG5cdFx0XHRcdFx0ZW5jb2RlKHZhbHVlLCBvcHRzKVxuXHRcdFx0XHRdLmpvaW4oJycpO1xuXHRcdFx0fTtcblxuXHRcdGNhc2UgJ2JyYWNrZXQnOlxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG5cdFx0XHRcdHJldHVybiB2YWx1ZSA9PT0gbnVsbCA/IGVuY29kZShrZXksIG9wdHMpIDogW1xuXHRcdFx0XHRcdGVuY29kZShrZXksIG9wdHMpLFxuXHRcdFx0XHRcdCdbXT0nLFxuXHRcdFx0XHRcdGVuY29kZSh2YWx1ZSwgb3B0cylcblx0XHRcdFx0XS5qb2luKCcnKTtcblx0XHRcdH07XG5cblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG5cdFx0XHRcdHJldHVybiB2YWx1ZSA9PT0gbnVsbCA/IGVuY29kZShrZXksIG9wdHMpIDogW1xuXHRcdFx0XHRcdGVuY29kZShrZXksIG9wdHMpLFxuXHRcdFx0XHRcdCc9Jyxcblx0XHRcdFx0XHRlbmNvZGUodmFsdWUsIG9wdHMpXG5cdFx0XHRcdF0uam9pbignJyk7XG5cdFx0XHR9O1xuXHR9XG59XG5cbmZ1bmN0aW9uIHBhcnNlckZvckFycmF5Rm9ybWF0KG9wdHMpIHtcblx0dmFyIHJlc3VsdDtcblxuXHRzd2l0Y2ggKG9wdHMuYXJyYXlGb3JtYXQpIHtcblx0XHRjYXNlICdpbmRleCc6XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gKGtleSwgdmFsdWUsIGFjY3VtdWxhdG9yKSB7XG5cdFx0XHRcdHJlc3VsdCA9IC9cXFsoXFxkKilcXF0kLy5leGVjKGtleSk7XG5cblx0XHRcdFx0a2V5ID0ga2V5LnJlcGxhY2UoL1xcW1xcZCpcXF0kLywgJycpO1xuXG5cdFx0XHRcdGlmICghcmVzdWx0KSB7XG5cdFx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IHZhbHVlO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChhY2N1bXVsYXRvcltrZXldID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0ge307XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRhY2N1bXVsYXRvcltrZXldW3Jlc3VsdFsxXV0gPSB2YWx1ZTtcblx0XHRcdH07XG5cblx0XHRjYXNlICdicmFja2V0Jzpcblx0XHRcdHJldHVybiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgYWNjdW11bGF0b3IpIHtcblx0XHRcdFx0cmVzdWx0ID0gLyhcXFtcXF0pJC8uZXhlYyhrZXkpO1xuXHRcdFx0XHRrZXkgPSBrZXkucmVwbGFjZSgvXFxbXFxdJC8sICcnKTtcblxuXHRcdFx0XHRpZiAoIXJlc3VsdCkge1xuXHRcdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSB2YWx1ZTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH0gZWxzZSBpZiAoYWNjdW11bGF0b3Jba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IFt2YWx1ZV07XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IFtdLmNvbmNhdChhY2N1bXVsYXRvcltrZXldLCB2YWx1ZSk7XG5cdFx0XHR9O1xuXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgYWNjdW11bGF0b3IpIHtcblx0XHRcdFx0aWYgKGFjY3VtdWxhdG9yW2tleV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSB2YWx1ZTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0gW10uY29uY2F0KGFjY3VtdWxhdG9yW2tleV0sIHZhbHVlKTtcblx0XHRcdH07XG5cdH1cbn1cblxuZnVuY3Rpb24gZW5jb2RlKHZhbHVlLCBvcHRzKSB7XG5cdGlmIChvcHRzLmVuY29kZSkge1xuXHRcdHJldHVybiBvcHRzLnN0cmljdCA/IHN0cmljdFVyaUVuY29kZSh2YWx1ZSkgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBrZXlzU29ydGVyKGlucHV0KSB7XG5cdGlmIChBcnJheS5pc0FycmF5KGlucHV0KSkge1xuXHRcdHJldHVybiBpbnB1dC5zb3J0KCk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGlucHV0ID09PSAnb2JqZWN0Jykge1xuXHRcdHJldHVybiBrZXlzU29ydGVyKE9iamVjdC5rZXlzKGlucHV0KSkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuXHRcdFx0cmV0dXJuIE51bWJlcihhKSAtIE51bWJlcihiKTtcblx0XHR9KS5tYXAoZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0cmV0dXJuIGlucHV0W2tleV07XG5cdFx0fSk7XG5cdH1cblxuXHRyZXR1cm4gaW5wdXQ7XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3Qoc3RyKSB7XG5cdHZhciBxdWVyeVN0YXJ0ID0gc3RyLmluZGV4T2YoJz8nKTtcblx0aWYgKHF1ZXJ5U3RhcnQgPT09IC0xKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cdHJldHVybiBzdHIuc2xpY2UocXVlcnlTdGFydCArIDEpO1xufVxuXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdHMpIHtcblx0b3B0cyA9IG9iamVjdEFzc2lnbih7YXJyYXlGb3JtYXQ6ICdub25lJ30sIG9wdHMpO1xuXG5cdHZhciBmb3JtYXR0ZXIgPSBwYXJzZXJGb3JBcnJheUZvcm1hdChvcHRzKTtcblxuXHQvLyBDcmVhdGUgYW4gb2JqZWN0IHdpdGggbm8gcHJvdG90eXBlXG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvcXVlcnktc3RyaW5nL2lzc3Vlcy80N1xuXHR2YXIgcmV0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuXHRpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcblx0XHRyZXR1cm4gcmV0O1xuXHR9XG5cblx0c3RyID0gc3RyLnRyaW0oKS5yZXBsYWNlKC9eWz8jJl0vLCAnJyk7XG5cblx0aWYgKCFzdHIpIHtcblx0XHRyZXR1cm4gcmV0O1xuXHR9XG5cblx0c3RyLnNwbGl0KCcmJykuZm9yRWFjaChmdW5jdGlvbiAocGFyYW0pIHtcblx0XHR2YXIgcGFydHMgPSBwYXJhbS5yZXBsYWNlKC9cXCsvZywgJyAnKS5zcGxpdCgnPScpO1xuXHRcdC8vIEZpcmVmb3ggKHByZSA0MCkgZGVjb2RlcyBgJTNEYCB0byBgPWBcblx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL3F1ZXJ5LXN0cmluZy9wdWxsLzM3XG5cdFx0dmFyIGtleSA9IHBhcnRzLnNoaWZ0KCk7XG5cdFx0dmFyIHZhbCA9IHBhcnRzLmxlbmd0aCA+IDAgPyBwYXJ0cy5qb2luKCc9JykgOiB1bmRlZmluZWQ7XG5cblx0XHQvLyBtaXNzaW5nIGA9YCBzaG91bGQgYmUgYG51bGxgOlxuXHRcdC8vIGh0dHA6Ly93My5vcmcvVFIvMjAxMi9XRC11cmwtMjAxMjA1MjQvI2NvbGxlY3QtdXJsLXBhcmFtZXRlcnNcblx0XHR2YWwgPSB2YWwgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBkZWNvZGVDb21wb25lbnQodmFsKTtcblxuXHRcdGZvcm1hdHRlcihkZWNvZGVDb21wb25lbnQoa2V5KSwgdmFsLCByZXQpO1xuXHR9KTtcblxuXHRyZXR1cm4gT2JqZWN0LmtleXMocmV0KS5zb3J0KCkucmVkdWNlKGZ1bmN0aW9uIChyZXN1bHQsIGtleSkge1xuXHRcdHZhciB2YWwgPSByZXRba2V5XTtcblx0XHRpZiAoQm9vbGVhbih2YWwpICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHZhbCkpIHtcblx0XHRcdC8vIFNvcnQgb2JqZWN0IGtleXMsIG5vdCB2YWx1ZXNcblx0XHRcdHJlc3VsdFtrZXldID0ga2V5c1NvcnRlcih2YWwpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXN1bHRba2V5XSA9IHZhbDtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9LCBPYmplY3QuY3JlYXRlKG51bGwpKTtcbn1cblxuZXhwb3J0cy5leHRyYWN0ID0gZXh0cmFjdDtcbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcblxuZXhwb3J0cy5zdHJpbmdpZnkgPSBmdW5jdGlvbiAob2JqLCBvcHRzKSB7XG5cdHZhciBkZWZhdWx0cyA9IHtcblx0XHRlbmNvZGU6IHRydWUsXG5cdFx0c3RyaWN0OiB0cnVlLFxuXHRcdGFycmF5Rm9ybWF0OiAnbm9uZSdcblx0fTtcblxuXHRvcHRzID0gb2JqZWN0QXNzaWduKGRlZmF1bHRzLCBvcHRzKTtcblxuXHRpZiAob3B0cy5zb3J0ID09PSBmYWxzZSkge1xuXHRcdG9wdHMuc29ydCA9IGZ1bmN0aW9uICgpIHt9O1xuXHR9XG5cblx0dmFyIGZvcm1hdHRlciA9IGVuY29kZXJGb3JBcnJheUZvcm1hdChvcHRzKTtcblxuXHRyZXR1cm4gb2JqID8gT2JqZWN0LmtleXMob2JqKS5zb3J0KG9wdHMuc29ydCkubWFwKGZ1bmN0aW9uIChrZXkpIHtcblx0XHR2YXIgdmFsID0gb2JqW2tleV07XG5cblx0XHRpZiAodmFsID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cblx0XHRpZiAodmFsID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gZW5jb2RlKGtleSwgb3B0cyk7XG5cdFx0fVxuXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuXHRcdFx0dmFyIHJlc3VsdCA9IFtdO1xuXG5cdFx0XHR2YWwuc2xpY2UoKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWwyKSB7XG5cdFx0XHRcdGlmICh2YWwyID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXN1bHQucHVzaChmb3JtYXR0ZXIoa2V5LCB2YWwyLCByZXN1bHQubGVuZ3RoKSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIHJlc3VsdC5qb2luKCcmJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGVuY29kZShrZXksIG9wdHMpICsgJz0nICsgZW5jb2RlKHZhbCwgb3B0cyk7XG5cdH0pLmZpbHRlcihmdW5jdGlvbiAoeCkge1xuXHRcdHJldHVybiB4Lmxlbmd0aCA+IDA7XG5cdH0pLmpvaW4oJyYnKSA6ICcnO1xufTtcblxuZXhwb3J0cy5wYXJzZVVybCA9IGZ1bmN0aW9uIChzdHIsIG9wdHMpIHtcblx0cmV0dXJuIHtcblx0XHR1cmw6IHN0ci5zcGxpdCgnPycpWzBdIHx8ICcnLFxuXHRcdHF1ZXJ5OiBwYXJzZShleHRyYWN0KHN0ciksIG9wdHMpXG5cdH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc3RyKSB7XG5cdHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyKS5yZXBsYWNlKC9bIScoKSpdL2csIGZ1bmN0aW9uIChjKSB7XG5cdFx0cmV0dXJuICclJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcblx0fSk7XG59O1xuIiwidmFyIF90ZW1wbGF0ZU9iamVjdCA9IF90YWdnZWRUZW1wbGF0ZUxpdGVyYWxMb29zZShbXCJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2hhZG93OiAwIDAuNHJlbSAwLjVyZW0gMC4wNjI1cmVtICNkYmRiZGM7XFxuICB6LWluZGV4OiAyO1xcblwiXSwgW1wiXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwMCU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNoYWRvdzogMCAwLjRyZW0gMC41cmVtIDAuMDYyNXJlbSAjZGJkYmRjO1xcbiAgei1pbmRleDogMjtcXG5cIl0pO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF90YWdnZWRUZW1wbGF0ZUxpdGVyYWxMb29zZShzdHJpbmdzLCByYXcpIHsgc3RyaW5ncy5yYXcgPSByYXc7IHJldHVybiBzdHJpbmdzOyB9XG5cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSBcIi4uL0xpc3RJdGVtXCI7XG5pbXBvcnQgUG93ZXJlZEJ5R29vZ2xlTG9nbyBmcm9tIFwiLi4vUG93ZXJlZEJ5R29vZ2xlTG9nb1wiO1xuXG52YXIgV3JhcHBlciA9IHN0eWxlZC5kaXYoX3RlbXBsYXRlT2JqZWN0KTtcblxudmFyIExpc3QgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoTGlzdCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTGlzdChwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMaXN0KTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMuaGFuZGxlTW91c2VFbnRlciA9IF90aGlzLmhhbmRsZU1vdXNlRW50ZXIuYmluZChfdGhpcyk7XG4gICAgX3RoaXMuaGFuZGxlTW91c2VMZWF2ZSA9IF90aGlzLmhhbmRsZU1vdXNlTGVhdmUuYmluZChfdGhpcyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgTGlzdC5wcm90b3R5cGUucmVuZGVyRGVmYXVsdCA9IGZ1bmN0aW9uIHJlbmRlckRlZmF1bHQoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGN1c3RvbVJlbmRlciA9IF9wcm9wcy5jdXN0b21SZW5kZXIsXG4gICAgICAgIGl0ZW1zID0gX3Byb3BzLml0ZW1zLFxuICAgICAgICBhY3RpdmVJdGVtSW5kZXggPSBfcHJvcHMuYWN0aXZlSXRlbUluZGV4LFxuICAgICAgICBkaXNwbGF5UG93ZXJlZEJ5R29vZ2xlID0gX3Byb3BzLmRpc3BsYXlQb3dlcmVkQnlHb29nbGUsXG4gICAgICAgIG9uU2VsZWN0ID0gX3Byb3BzLm9uU2VsZWN0LFxuICAgICAgICB0ZXh0Tm9SZXN1bHRzID0gX3Byb3BzLnRleHROb1Jlc3VsdHM7XG5cblxuICAgIGlmIChpdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgV3JhcHBlcixcbiAgICAgICAge1xuICAgICAgICAgIG9uTW91c2VFbnRlcjogdGhpcy5oYW5kbGVNb3VzZUVudGVyLFxuICAgICAgICAgIG9uTW91c2VMZWF2ZTogdGhpcy5oYW5kbGVNb3VzZUxlYXZlXG4gICAgICAgIH0sXG4gICAgICAgIGl0ZW1zLm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0SXRlbSwge1xuICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgIGFjdGl2ZTogYWN0aXZlSXRlbUluZGV4ID09PSBpbmRleCxcbiAgICAgICAgICAgIGN1c3RvbVJlbmRlcjogY3VzdG9tUmVuZGVyLFxuICAgICAgICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljayhpdGVtKSB7XG4gICAgICAgICAgICAgIHJldHVybiBvblNlbGVjdChpdGVtKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpdGVtOiBpdGVtXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pLFxuICAgICAgICBkaXNwbGF5UG93ZXJlZEJ5R29vZ2xlICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUG93ZXJlZEJ5R29vZ2xlTG9nbywgbnVsbClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHRleHROb1Jlc3VsdHMgfHwgY3VzdG9tUmVuZGVyKSB7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgV3JhcHBlcixcbiAgICAgICAge1xuICAgICAgICAgIG9uTW91c2VFbnRlcjogdGhpcy5oYW5kbGVNb3VzZUVudGVyLFxuICAgICAgICAgIG9uTW91c2VMZWF2ZTogdGhpcy5oYW5kbGVNb3VzZUxlYXZlXG4gICAgICAgIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdEl0ZW0sIHsgY3VzdG9tUmVuZGVyOiBjdXN0b21SZW5kZXIsIHRleHROb1Jlc3VsdHM6IHRleHROb1Jlc3VsdHMgfSksXG4gICAgICAgIGRpc3BsYXlQb3dlcmVkQnlHb29nbGUgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChQb3dlcmVkQnlHb29nbGVMb2dvLCBudWxsKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICBMaXN0LnByb3RvdHlwZS5oYW5kbGVNb3VzZUVudGVyID0gZnVuY3Rpb24gaGFuZGxlTW91c2VFbnRlcigpIHtcbiAgICB2YXIgb25Gb2N1c0NoYW5nZSA9IHRoaXMucHJvcHMub25Gb2N1c0NoYW5nZTtcblxuICAgIGlmIChvbkZvY3VzQ2hhbmdlKSB7XG4gICAgICBvbkZvY3VzQ2hhbmdlKHRydWUpO1xuICAgIH1cbiAgfTtcblxuICBMaXN0LnByb3RvdHlwZS5oYW5kbGVNb3VzZUxlYXZlID0gZnVuY3Rpb24gaGFuZGxlTW91c2VMZWF2ZSgpIHtcbiAgICB2YXIgb25Gb2N1c0NoYW5nZSA9IHRoaXMucHJvcHMub25Gb2N1c0NoYW5nZTtcblxuICAgIGlmIChvbkZvY3VzQ2hhbmdlKSB7XG4gICAgICBvbkZvY3VzQ2hhbmdlKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgTGlzdC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY3VzdG9tQ29udGFpbmVyUmVuZGVyID0gX3Byb3BzMi5jdXN0b21Db250YWluZXJSZW5kZXIsXG4gICAgICAgIGl0ZW1zID0gX3Byb3BzMi5pdGVtcztcblxuXG4gICAgcmV0dXJuIGN1c3RvbUNvbnRhaW5lclJlbmRlciA/IGN1c3RvbUNvbnRhaW5lclJlbmRlcihpdGVtcykgOiB0aGlzLnJlbmRlckRlZmF1bHQoaXRlbXMpO1xuICB9O1xuXG4gIHJldHVybiBMaXN0O1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5MaXN0LnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgYWN0aXZlSXRlbUluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICBpdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBtYXRjaGVkX3N1YnN0cmluZ3M6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBsZW5ndGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIG9mZnNldDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXG4gICAgfSkpXG4gIH0pKSxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5pbnN0YW5jZU9mKExpc3RJdGVtKSksIFByb3BUeXBlcy5pbnN0YW5jZU9mKExpc3RJdGVtKV0pLFxuICBkaXNwbGF5UG93ZXJlZEJ5R29vZ2xlOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICBvbkZvY3VzQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgY3VzdG9tQ29udGFpbmVyUmVuZGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgY3VzdG9tUmVuZGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgdGV4dE5vUmVzdWx0czogUHJvcFR5cGVzLnN0cmluZ1xufSA6IHt9O1xuXG5MaXN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgaXRlbXM6IFtdXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaXN0OyIsInZhciBfdGVtcGxhdGVPYmplY3QgPSBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsTG9vc2UoW1wiXFxuICBcIiwgXCIgXCIsIFwiO1xcblwiXSwgW1wiXFxuICBcIiwgXCIgXCIsIFwiO1xcblwiXSksXG4gICAgX3RlbXBsYXRlT2JqZWN0MiA9IF90YWdnZWRUZW1wbGF0ZUxpdGVyYWxMb29zZShbXCJcXG4gIHBhZGRpbmc6IDAuMzEyNXJlbTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICBsaW5lLWhlaWdodDogMS44NzVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xcblwiXSwgW1wiXFxuICBwYWRkaW5nOiAwLjMxMjVyZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgbGluZS1oZWlnaHQ6IDEuODc1cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDAuODEyNXJlbTtcXG5cIl0pO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF90YWdnZWRUZW1wbGF0ZUxpdGVyYWxMb29zZShzdHJpbmdzLCByYXcpIHsgc3RyaW5ncy5yYXcgPSByYXc7IHJldHVybiBzdHJpbmdzOyB9XG5cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgUHJlZGljdGlvbiBmcm9tIFwiLi4vUHJlZGljdGlvblwiO1xuXG52YXIgV3JhcHBlciA9IHN0eWxlZC5kaXYoX3RlbXBsYXRlT2JqZWN0LCBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIHByb3BzLmNsaWNrYWJsZSAmJiBcIiY6aG92ZXIge2JhY2tncm91bmQ6ICNmNWY1ZjU7Y3Vyc29yOiBwb2ludGVyO30gXCI7XG59LCBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIHByb3BzLmFjdGl2ZSAmJiBcImJhY2tncm91bmQ6ICNmNWY1ZjU7XCI7XG59KTtcblxudmFyIEl0ZW0gPSBzdHlsZWQuZGl2KF90ZW1wbGF0ZU9iamVjdDIpO1xuXG52YXIgTGlzdEl0ZW0gPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoTGlzdEl0ZW0sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIExpc3RJdGVtKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMaXN0SXRlbSk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIExpc3RJdGVtLnByb3RvdHlwZS5yZW5kZXJEZWZhdWx0ID0gZnVuY3Rpb24gcmVuZGVyRGVmYXVsdChpdGVtKSB7XG4gICAgdmFyIHRleHROb1Jlc3VsdHMgPSB0aGlzLnByb3BzLnRleHROb1Jlc3VsdHM7XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgIEl0ZW0sXG4gICAgICBudWxsLFxuICAgICAgaXRlbSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoUHJlZGljdGlvbiwgeyBpdGVtOiBpdGVtIH0pIDogdGV4dE5vUmVzdWx0c1xuICAgICk7XG4gIH07XG5cbiAgTGlzdEl0ZW0ucHJvdG90eXBlLnJlbmRlckl0ZW0gPSBmdW5jdGlvbiByZW5kZXJJdGVtKGl0ZW0pIHtcbiAgICB2YXIgY3VzdG9tUmVuZGVyID0gdGhpcy5wcm9wcy5jdXN0b21SZW5kZXI7XG5cbiAgICByZXR1cm4gY3VzdG9tUmVuZGVyID8gY3VzdG9tUmVuZGVyKGl0ZW0pIDogdGhpcy5yZW5kZXJEZWZhdWx0KGl0ZW0pO1xuICB9O1xuXG4gIExpc3RJdGVtLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGFjdGl2ZSA9IF9wcm9wcy5hY3RpdmUsXG4gICAgICAgIGl0ZW0gPSBfcHJvcHMuaXRlbSxcbiAgICAgICAgb25DbGljayA9IF9wcm9wcy5vbkNsaWNrO1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBXcmFwcGVyLFxuICAgICAge1xuICAgICAgICBhY3RpdmU6IGFjdGl2ZSxcbiAgICAgICAgY2xpY2thYmxlOiBpdGVtLFxuICAgICAgICBvbkNsaWNrOiBpdGVtICYmIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gb25DbGljayhpdGVtKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHRoaXMucmVuZGVySXRlbShpdGVtKVxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIExpc3RJdGVtO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5MaXN0SXRlbS5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIGFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBpdGVtOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG1hdGNoZWRfc3Vic3RyaW5nczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGxlbmd0aDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgb2Zmc2V0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbiAgICB9KSlcbiAgfSksXG4gIGN1c3RvbVJlbmRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIHRleHROb1Jlc3VsdHM6IFByb3BUeXBlcy5zdHJpbmdcbn0gOiB7fTtcblxuTGlzdEl0ZW0uZGVmYXVsdFByb3BzID0ge1xuICBhY3RpdmU6IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaXN0SXRlbTsiLCJ2YXIgX3RlbXBsYXRlT2JqZWN0ID0gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbExvb3NlKFtcIlxcbiAgdGV4dC1hbGlnbjogZW5kO1xcbiAgcGFkZGluZy1yaWdodDogMC4zMTI1cmVtO1xcblwiXSwgW1wiXFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjMxMjVyZW07XFxuXCJdKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5mdW5jdGlvbiBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsTG9vc2Uoc3RyaW5ncywgcmF3KSB7IHN0cmluZ3MucmF3ID0gcmF3OyByZXR1cm4gc3RyaW5nczsgfVxuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IFBvd2VyZWRCeUdvb2dsZUltYWdlIGZyb20gXCIuLi8uLi9pbWFnZXMvcG93ZXJlZF9ieV9nb29nbGUvZGVza3RvcC9Qb3dlcmVkQnlHb29nbGVJbWFnZVwiO1xuXG52YXIgR29vZ2xlV3JhcHBlciA9IHN0eWxlZC5kaXYoX3RlbXBsYXRlT2JqZWN0KTtcblxudmFyIFBvd2VyZWRCeUdvb2dsZUxvZ28gPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoUG93ZXJlZEJ5R29vZ2xlTG9nbywgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUG93ZXJlZEJ5R29vZ2xlTG9nbygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUG93ZXJlZEJ5R29vZ2xlTG9nbyk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIFBvd2VyZWRCeUdvb2dsZUxvZ28ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgIEdvb2dsZVdyYXBwZXIsXG4gICAgICBudWxsLFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IGFsdDogXCJQb3dlcmVkIEJ5IEdvb2dsZVwiLCBzcmM6IFBvd2VyZWRCeUdvb2dsZUltYWdlIH0pXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gUG93ZXJlZEJ5R29vZ2xlTG9nbztcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgUG93ZXJlZEJ5R29vZ2xlTG9nbzsiLCJ2YXIgX3RlbXBsYXRlT2JqZWN0ID0gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbExvb3NlKFtcIlxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXCJdLCBbXCJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcblwiXSksXG4gICAgX3RlbXBsYXRlT2JqZWN0MiA9IF90YWdnZWRUZW1wbGF0ZUxpdGVyYWxMb29zZShbXCJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICB3aWR0aDogMTAwJTtcXG5cIl0sIFtcIlxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHdpZHRoOiAxMDAlO1xcblwiXSk7XG5cbmZ1bmN0aW9uIF90YWdnZWRUZW1wbGF0ZUxpdGVyYWxMb29zZShzdHJpbmdzLCByYXcpIHsgc3RyaW5ncy5yYXcgPSByYXc7IHJldHVybiBzdHJpbmdzOyB9XG5cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbnZhciBNYXRjaCA9IHN0eWxlZC5zcGFuKF90ZW1wbGF0ZU9iamVjdCk7XG52YXIgVXBwZXJEaXYgPSBzdHlsZWQuZGl2KF90ZW1wbGF0ZU9iamVjdDIpO1xuXG52YXIgUHJlZGljdGlvbiA9IGZ1bmN0aW9uIFByZWRpY3Rpb24oX3JlZikge1xuICB2YXIgaXRlbSA9IF9yZWYuaXRlbTtcbiAgdmFyIGRlc2NyaXB0aW9uID0gaXRlbS5kZXNjcmlwdGlvbixcbiAgICAgIHN0cnVjdHVyZWRfZm9ybWF0dGluZyA9IGl0ZW0uc3RydWN0dXJlZF9mb3JtYXR0aW5nO1xuXG4gIHZhciBmaXJzdE1hdGNoZWRTdHJpbmcgPSBzdHJ1Y3R1cmVkX2Zvcm1hdHRpbmcgJiYgc3RydWN0dXJlZF9mb3JtYXR0aW5nLm1haW5fdGV4dF9tYXRjaGVkX3N1YnN0cmluZ3MubGVuZ3RoID4gMCAmJiBzdHJ1Y3R1cmVkX2Zvcm1hdHRpbmcubWFpbl90ZXh0X21hdGNoZWRfc3Vic3RyaW5nc1swXTtcbiAgdmFyIGxhYmVsUGFydHMgPSBudWxsO1xuXG4gIGlmIChmaXJzdE1hdGNoZWRTdHJpbmcpIHtcbiAgICBsYWJlbFBhcnRzID0ge1xuICAgICAgYmVmb3JlOiBkZXNjcmlwdGlvbi5zdWJzdHIoMCwgZmlyc3RNYXRjaGVkU3RyaW5nLm9mZnNldCksXG4gICAgICBtYXRjaDogZGVzY3JpcHRpb24uc3Vic3RyKGZpcnN0TWF0Y2hlZFN0cmluZy5vZmZzZXQsIGZpcnN0TWF0Y2hlZFN0cmluZy5sZW5ndGgpLFxuICAgICAgYWZ0ZXI6IGRlc2NyaXB0aW9uLnN1YnN0cihmaXJzdE1hdGNoZWRTdHJpbmcub2Zmc2V0ICsgZmlyc3RNYXRjaGVkU3RyaW5nLmxlbmd0aClcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgVXBwZXJEaXYsXG4gICAgbnVsbCxcbiAgICBsYWJlbFBhcnRzID8gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgIFwic3BhblwiLFxuICAgICAgbnVsbCxcbiAgICAgIGxhYmVsUGFydHMuYmVmb3JlLFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgTWF0Y2gsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGxhYmVsUGFydHMubWF0Y2hcbiAgICAgICksXG4gICAgICBsYWJlbFBhcnRzLmFmdGVyXG4gICAgKSA6IGRlc2NyaXB0aW9uXG4gICk7XG59O1xuXG5QcmVkaWN0aW9uLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgaXRlbTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzdHJ1Y3R1cmVkX2Zvcm1hdHRpbmc6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBtYWluX3RleHRfbWF0Y2hlZF9zdWJzdHJpbmdzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICBsZW5ndGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgb2Zmc2V0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbiAgICAgIH0pKVxuICAgIH0pXG4gIH0pLmlzUmVxdWlyZWRcbn0gOiB7fTtcblxuZXhwb3J0IGRlZmF1bHQgUHJlZGljdGlvbjsiLCJ2YXIgUG93ZXJlZEJ5R29vZ2xlSW1hZ2UgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBSkFBQUFBU0NBWUFBQUMwUGxkckFBQUlIRWxFUVZSNEFlM1pCWERiV0I3SDhlZmdscG1aR1cwSGxoekpEcFNabVprWjNXM3MyRHBtWm1ibUt4MHpNL05kb0dob3R4VGY5eDlMSFkwMjdwYVc4NXY1YkJSUW9wbjMyd2VxYXNxems1Snc3QkU5bkhpakhvNS9Sdy9IZnFhSFlsL2tlbGRaOEdKN3FCZXFaLzZQTkdsUFVUNURlVktOcWt5YzE4UEo2VkRQdGZFZm52VUp6MGRtcGJ3Zm16TVc2azVZRnk5NnBCUlRrQ25MNE1VRGl5OTRvUzBGK1pWWmxELzVxeExMZk5Ga3owRDBmQnRmS09rcENjZmZyRmZHNnZWUTRoRFVjNnlwUUxkREZtTWRNaVdJY2p5d2FPSEVCOHp5blBFRmExcENPV25ITHcyQmVqNW9LdER6cUVDK2NHeW9XWjVZYVREZUdlcjU3cjRMUlBMUkNpNDBsaXkwUVI0ZVZCNUNHMlFoVTNLUW5lRytUTS9xUWh2azQyNEwxQnd0NzNQMjJkOVFvRkQ4YlZCM0t4VlVXVFgrZ3FXMW12dkx0YnI3WjdWK3o2ZnJOTS9VbEZJdUtBRDgzSTJ2NXk2OWVpTDN5OWRQWlAvczJ0ZHlQbjM5Wk43VVZFcTVvQ3o4eCtXdmpDL1NRckV2OC91L3ovTzlzaVNVS05mQzhhZ1dTYnJSYUlIK3AzbEgxUGc5NzZqeGUzOGd6OEp6ekxNL2cyUWhwbUl1SWpDd0IvMGNnNkhqR0F4RXNRUXRJWm1DdGJCbkxiWTRCbmdacHRrR2FRbWlNSEFVaGJDeUVKTXhDeEdzaDZRRmx0cnVPd0l2N0JtRWZUQVF3V3dzdllNQ1RjTXFHS2F0NkFKSkNYWWpEMVpjV0lkWnNFZEs4SzUwZ1pMcm9lejQrbDRHOGoxUFVSbGZBSldhTXllN1Z2ZCtvdGJ2VFZWcjdodlZtdmMvY2kwWXlOZEFpZFRIVlBhMUV6bWZ1SDRpTjBXQmJuRDlIN2x1OFBYYzEwQ0pZRENWeGFudmZmSThuQVp2bG9RVE5lblpNWFl0L1l5SjVZM3RnYXI5bmtDdDVuMnk0VGwwNzMrNVRwclBFSVlTa25XMkFScGtXb3NRT2tGU2lpakswQnR1SE1FMlpHTU1ETFNEcEJNTVUyOWJZYUlZQnhmVzR3QkdvamNtdzhCSVdNOFZ3anE0MFFNdWJNUisyMzFUWUdBWUpOMVFoVlVZZ0VIWWdNZ2RGQ2lDQmVpTFlkaUpJMmlPOW9nNlN0NFhCZ1puS3BBV2ptMkFzbU5aTytFOGpkbG5xenJkdlM0OWFPNGZuZFdMZWtEVmxibUhNb0IvTVFld0FvckNyRE1MODZQNkU4MTZRRDM1bGJ5aHpFUi9TWmNvdXdKS3Ewb3NrZDlQU1g5YVZubTVGMVJKVmJLUXIxM0lWS0NVMjUxYjdYZi9Xd3BjcXhmTWtWbm5nbTlNVytzWjZnSmVEMjROMUJIa3dVb3VEbUkyOGhER0JOalREd1pHSVI5aEZFT2lZeXUyWVJJa1kxR0ZoekFBQnZyQ25wVllieXZRQWVUQXlpQkhLYTJzTlVubVk1L2p2bndjdllNQ2JYRE1tRzFRQlIyU0pkaHUrNWw1Mk5YWU1zcUE3RXNYSS81T0tCdkVobk1LSzdMd3RlUHBnWXk5SElwQitsYkRJR21GYmloTFRjQXpzNkZBdXVlRFVKVGtXMGhkTzVYcmhySmMvMXJlVFBrNkJmc2daTVk3aVpTL0t1bUZzbWloeElGTUJhb05lSHhtaVQvNkg1KzdZNDFlc0pjbDdLL3BtZEQ5TjY0bjR0WkFMWVF6czdFRHZUTU1tZ3RCVzdHV1l5VWsyNkREai8xd1lZSHQrejdiVWhpeE1YRE1WcURGem5HNXpYMUhJZG1ER2JEblR2ZEFHcHpaaEdXTy8ybjZvam5DS0lJekROQ2x3UTFMUm1VOEVUQ1MzYUV5c1U1cjdGSG1RY2tBeVVEOXNXSmdQcFNsTmxBNFNMN08wdkpOcUd0ZnovNmJGS1grU3lvZnl2TGsxL0lHTmN4QVg4djlKcFM4UXBEZlgvSGErbndvQzh2cGxJd0ZZcS9UVUZiTit3OVp4cXI5M3ZwcTNmT0ZXbi9CSkZsaW9ZUTFVRXZnekh4c1JROFk2TmRJZ1k2akRCSTN3dWdHQTUzUXhWYStJQW9nZVF3UjlFQjNoMjdJVkd3ZnFqTGMxeFdTblpnTlo1YmRRWUVDY0dhYnJjZ3ViTVVDUElaanR6dFFXUHNPWnBqdlBScTUyQTdLU2F0S1RwVjNRZnhjWGVuTDYxdEFTVUZrOE03cTdnSW9peXdsNlVGMWZ3QktDbUxPTkFWUWxoc244K2FZWC84QVZFbGw0cFE4aDd4N2dyTElSajlUZ1dvMHo4UHBzbnF2MWVxZXlQOThoWDJoWkNscnJFREgwUXBXV3VJWUppTWJRY3gxVE5XallXQ1FiWThUd1Fic2hKWGRXSStvYmRQZEV3Ykd3SjdpcHlsUUgydlpkTjVuSzlBTUhFVnp4MUpVZVFjRjJ1Vlkrcm9qaW1KWUdZOHE3TWRFWkl5OE1HVHdmbUh1aGY1SmtUYkpleC9meXhKZHRjcExEek5vYjVKTnJibi9tUU1sMkVDdk5wZUtuMXNEVjZNVmpHRXovVTl6V1NtRll1TzgydHpyL1B6SzZmeStVRmRQNW82aE5QOU03NDJ5U3lGTDFWSnJEeFNJWHU0TkpVdW52QVhQVkNBcENmdWZQNXA3cmcxeTJwTVprZXN3WC91K3pJYXdGMGp0d3lPbXZUaGlLNVVYQmhiRGd3a0lZN21qVkt0aG9CUld5bUUwTW5nTGJYc3JOK2JiUzVXaFFDNHNSZ2dWanZ0R1E5SVdRZXhHTVI3QmZqeHhCd1Y2QXB0UmdCSWN4VTdrd2tvT0RpT0N0cmh0Wk9aaGtENTJtMy9LaUZHcytWQ0FkWVQzZnNpY0FlcjVXSWNVNERHZ2hQemN0YS9uZktqaEZQYTEzSHJVeWJXNWZCbFFRazVoV21YaS9mTDNyTm51VGs1aGRYNlBsNzkvd1R3TlhySk9ZYklYT2g5dzk4YXRnVnFBeDdFUHg3QVVIV0RQU0d5MmxhME1PWTM4ekNwMGdaV3VXTlhJYkpPTkFQWWhoSzBZRFNzVG9jR1piSlJtdU05S0o2ekFjZXlIRDQ4OXpZeXhDR013R1lkdHMyNExPTE1XaTNESGtRMHNnL1FxV1U1S3d2RWY0SFBNREhzZURjYzZRVG5KVWlIN0VHYWp6OGc3R1BZaUgyRVdLb095ay9jOXZBZWF4Nnp6R2NyeUF6NSs1UHJKN0RJb08zN1F4VHVmaFJUMEMrekx2c3QxMUZyQzVKUUc1ZjdJckpkNVBqenp4NTZQemg0Q0pjNzZDbnJ5SHVnVlBNZTNPY3FmWVRrTHlta01DcGszMFJuVGxHNjJqZlFMSXI1Z0trZit3VlkyOWxBV1dVTFRNMkhzTWFoNzBWU2d1ODg4YklVTEw0aHcycHFSUGhFbWZpTWJhZG1ieVd6RS91dHFTU2oybnpuQlZCN1V2V2dxME4ybExTSVloeGRPV0w1aytYenEvaXQybWRjR0FhaDdaVjAwZVFsZ3h2RlJwTmZKZXljK0JuMlJLMzJoN3NmL0Flc3FjSEIwMmU2NUFBQUFBRWxGVGtTdVFtQ0NcIjtcblxuZXhwb3J0IGRlZmF1bHQgUG93ZXJlZEJ5R29vZ2xlSW1hZ2U7IiwidmFyIF90ZW1wbGF0ZU9iamVjdCA9IF90YWdnZWRUZW1wbGF0ZUxpdGVyYWxMb29zZShbXCJcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblwiXSwgW1wiXFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cIl0pO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF90YWdnZWRUZW1wbGF0ZUxpdGVyYWxMb29zZShzdHJpbmdzLCByYXcpIHsgc3RyaW5ncy5yYXcgPSByYXc7IHJldHVybiBzdHJpbmdzOyB9XG5cbi8qIGdsb2JhbCBkb2N1bWVudCAqL1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuL2NvbXBvbmVudHMvTGlzdFwiO1xuXG52YXIgV3JhcHBlciA9IHN0eWxlZC5kaXYoX3RlbXBsYXRlT2JqZWN0KTtcblxudmFyIEdvb2dsZVBsYWNlc1N1Z2dlc3QgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoR29vZ2xlUGxhY2VzU3VnZ2VzdCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gR29vZ2xlUGxhY2VzU3VnZ2VzdChwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBHb29nbGVQbGFjZXNTdWdnZXN0KTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzKSk7XG5cbiAgICBfdGhpcy5oYXNGb2N1cyA9IGZhbHNlO1xuXG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZvY3VzZWRQcmVkaWN0aW9uSW5kZXg6IDAsXG4gICAgICBwcmVkaWN0aW9uczogW10sXG4gICAgICBvcGVuOiAhIXByb3BzLmF1dG9jb21wbGV0aW9uUmVxdWVzdCAmJiBwcm9wcy5hdXRvY29tcGxldGlvblJlcXVlc3QuaW5wdXRcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlS2V5RG93biA9IF90aGlzLmhhbmRsZUtleURvd24uYmluZChfdGhpcyk7XG4gICAgX3RoaXMub25Gb2N1c0NoYW5nZSA9IF90aGlzLm9uRm9jdXNDaGFuZ2UuYmluZChfdGhpcyk7XG4gICAgX3RoaXMuaGFuZGxlRE9NQ2xpY2sgPSBfdGhpcy5oYW5kbGVET01DbGljay5iaW5kKF90aGlzKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBHb29nbGVQbGFjZXNTdWdnZXN0LnByb3RvdHlwZS5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50ID0gZnVuY3Rpb24gVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLnVwZGF0ZVByZWRpY3Rpb25zKHRoaXMucHJvcHMuYXV0b2NvbXBsZXRpb25SZXF1ZXN0KTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVET01DbGljayk7XG4gIH07XG5cbiAgR29vZ2xlUGxhY2VzU3VnZ2VzdC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVET01DbGljayk7XG4gIH07XG5cbiAgR29vZ2xlUGxhY2VzU3VnZ2VzdC5wcm90b3R5cGUuVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBmdW5jdGlvbiBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5hdXRvY29tcGxldGlvblJlcXVlc3QgIT09IG5leHRQcm9wcy5hdXRvY29tcGxldGlvblJlcXVlc3QgJiYgbmV4dFByb3BzLmF1dG9jb21wbGV0aW9uUmVxdWVzdCkge1xuICAgICAgdGhpcy51cGRhdGVQcmVkaWN0aW9ucyhuZXh0UHJvcHMuYXV0b2NvbXBsZXRpb25SZXF1ZXN0KTtcbiAgICB9XG4gIH07XG5cbiAgR29vZ2xlUGxhY2VzU3VnZ2VzdC5wcm90b3R5cGUuaGFuZGxlU2VsZWN0UHJlZGljdGlvbiA9IGZ1bmN0aW9uIGhhbmRsZVNlbGVjdFByZWRpY3Rpb24oc3VnZ2VzdCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIG9uU2VsZWN0U3VnZ2VzdCA9IHRoaXMucHJvcHMub25TZWxlY3RTdWdnZXN0O1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBvcGVuOiBmYWxzZSxcbiAgICAgIHByZWRpY3Rpb25zOiBbXVxuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzMi5oYXNGb2N1cyA9IGZhbHNlO1xuICAgICAgX3RoaXMyLmdlb2NvZGVQcmVkaWN0aW9uKHN1Z2dlc3QuZGVzY3JpcHRpb24sIGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgb25TZWxlY3RTdWdnZXN0KHJlc3VsdCwgc3VnZ2VzdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBHb29nbGVQbGFjZXNTdWdnZXN0LnByb3RvdHlwZS51cGRhdGVQcmVkaWN0aW9ucyA9IGZ1bmN0aW9uIHVwZGF0ZVByZWRpY3Rpb25zKGF1dG9jb21wbGV0aW9uUmVxdWVzdCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgdmFyIGdvb2dsZU1hcHMgPSB0aGlzLnByb3BzLmdvb2dsZU1hcHM7XG5cbiAgICB2YXIgYXV0b2NvbXBsZXRlU2VydmljZSA9IG5ldyBnb29nbGVNYXBzLnBsYWNlcy5BdXRvY29tcGxldGVTZXJ2aWNlKCk7XG4gICAgaWYgKCFhdXRvY29tcGxldGlvblJlcXVlc3QgfHwgIWF1dG9jb21wbGV0aW9uUmVxdWVzdC5pbnB1dCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgICBwcmVkaWN0aW9uczogW11cbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMy5oYXNGb2N1cyA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgYXV0b2NvbXBsZXRlU2VydmljZS5nZXRQbGFjZVByZWRpY3Rpb25zKGF1dG9jb21wbGV0aW9uUmVxdWVzdCwgLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlP2hsPWZyI0F1dG9jb21wbGV0aW9uUmVxdWVzdFxuICAgIGZ1bmN0aW9uIChwcmVkaWN0aW9ucywgc3RhdHVzKSB7XG4gICAgICBfdGhpczMucHJvcHMub25TdGF0dXNVcGRhdGUoc3RhdHVzKTtcbiAgICAgIGlmICghcHJlZGljdGlvbnMpIHtcbiAgICAgICAgX3RoaXMzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSwgcHJlZGljdGlvbnM6IFtdIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBfdGhpczMuc2V0U3RhdGUoe1xuICAgICAgICBmb2N1c2VkUHJlZGljdGlvbkluZGV4OiAwLFxuICAgICAgICBvcGVuOiB0cnVlLFxuICAgICAgICBwcmVkaWN0aW9uczogcHJlZGljdGlvbnNcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIEdvb2dsZVBsYWNlc1N1Z2dlc3QucHJvdG90eXBlLmdlb2NvZGVQcmVkaWN0aW9uID0gZnVuY3Rpb24gZ2VvY29kZVByZWRpY3Rpb24oYWRkcmVzcywgY2FsbGJhY2spIHtcbiAgICB2YXIgZ29vZ2xlTWFwcyA9IHRoaXMucHJvcHMuZ29vZ2xlTWFwcztcblxuICAgIHZhciBnZW9jb2RlciA9IG5ldyBnb29nbGVNYXBzLkdlb2NvZGVyKCk7XG5cbiAgICBnZW9jb2Rlci5nZW9jb2RlKHsgYWRkcmVzczogYWRkcmVzcyB9LCBmdW5jdGlvbiAocmVzdWx0cywgc3RhdHVzKSB7XG4gICAgICBpZiAoc3RhdHVzID09PSBnb29nbGVNYXBzLkdlb2NvZGVyU3RhdHVzLk9LKSB7XG4gICAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjYWxsYmFjayhyZXN1bHRzWzBdKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJHZW9jb2RlIGVycm9yOiBcIiArIHN0YXR1cyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgR29vZ2xlUGxhY2VzU3VnZ2VzdC5wcm90b3R5cGUuaGFuZGxlS2V5RG93biA9IGZ1bmN0aW9uIGhhbmRsZUtleURvd24oZSkge1xuICAgIHZhciBfc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICBmb2N1c2VkUHJlZGljdGlvbkluZGV4ID0gX3N0YXRlLmZvY3VzZWRQcmVkaWN0aW9uSW5kZXgsXG4gICAgICAgIHByZWRpY3Rpb25zID0gX3N0YXRlLnByZWRpY3Rpb25zO1xuXG5cbiAgICBpZiAocHJlZGljdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmhhbmRsZVNlbGVjdFByZWRpY3Rpb24ocHJlZGljdGlvbnNbZm9jdXNlZFByZWRpY3Rpb25JbmRleF0pO1xuICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gXCJBcnJvd1VwXCIpIHtcbiAgICAgICAgaWYgKHByZWRpY3Rpb25zLmxlbmd0aCA+IDAgJiYgZm9jdXNlZFByZWRpY3Rpb25JbmRleCA+IDApIHtcbiAgICAgICAgICB0aGlzLmZvY3VzUHJlZGljdGlvbihmb2N1c2VkUHJlZGljdGlvbkluZGV4IC0gMSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09IFwiQXJyb3dEb3duXCIpIHtcbiAgICAgICAgaWYgKHByZWRpY3Rpb25zLmxlbmd0aCA+IDAgJiYgZm9jdXNlZFByZWRpY3Rpb25JbmRleCA8IHByZWRpY3Rpb25zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICB0aGlzLmZvY3VzUHJlZGljdGlvbihmb2N1c2VkUHJlZGljdGlvbkluZGV4ICsgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHZhciBvbk5vUmVzdWx0ID0gdGhpcy5wcm9wcy5vbk5vUmVzdWx0O1xuXG5cbiAgICAgIG9uTm9SZXN1bHQoKTtcbiAgICB9XG4gIH07XG5cbiAgR29vZ2xlUGxhY2VzU3VnZ2VzdC5wcm90b3R5cGUuZm9jdXNQcmVkaWN0aW9uID0gZnVuY3Rpb24gZm9jdXNQcmVkaWN0aW9uKGluZGV4KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWRQcmVkaWN0aW9uSW5kZXg6IGluZGV4IH0pO1xuICB9O1xuXG4gIEdvb2dsZVBsYWNlc1N1Z2dlc3QucHJvdG90eXBlLm9uRm9jdXNDaGFuZ2UgPSBmdW5jdGlvbiBvbkZvY3VzQ2hhbmdlKHZhbCkge1xuICAgIHRoaXMuaGFzRm9jdXMgPSB2YWw7XG4gIH07XG5cbiAgR29vZ2xlUGxhY2VzU3VnZ2VzdC5wcm90b3R5cGUuaGFuZGxlRE9NQ2xpY2sgPSBmdW5jdGlvbiBoYW5kbGVET01DbGljaygpIHtcbiAgICBpZiAoIXRoaXMuaGFzRm9jdXMgJiYgdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UgfSk7XG4gICAgfVxuICB9O1xuXG4gIEdvb2dsZVBsYWNlc1N1Z2dlc3QucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgIHZhciBfc3RhdGUyID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgZm9jdXNlZFByZWRpY3Rpb25JbmRleCA9IF9zdGF0ZTIuZm9jdXNlZFByZWRpY3Rpb25JbmRleCxcbiAgICAgICAgb3BlbiA9IF9zdGF0ZTIub3BlbixcbiAgICAgICAgcHJlZGljdGlvbnMgPSBfc3RhdGUyLnByZWRpY3Rpb25zO1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgY3VzdG9tQ29udGFpbmVyUmVuZGVyID0gX3Byb3BzLmN1c3RvbUNvbnRhaW5lclJlbmRlcixcbiAgICAgICAgY3VzdG9tUmVuZGVyID0gX3Byb3BzLmN1c3RvbVJlbmRlcixcbiAgICAgICAgZGlzcGxheVBvd2VyZWRCeUdvb2dsZSA9IF9wcm9wcy5kaXNwbGF5UG93ZXJlZEJ5R29vZ2xlLFxuICAgICAgICB0ZXh0Tm9SZXN1bHRzID0gX3Byb3BzLnRleHROb1Jlc3VsdHM7XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgIFdyYXBwZXIsXG4gICAgICB7IG9uS2V5RG93bjogdGhpcy5oYW5kbGVLZXlEb3duIH0sXG4gICAgICBjaGlsZHJlbixcbiAgICAgIG9wZW4gJiYgUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0LCB7XG4gICAgICAgIGl0ZW1zOiBwcmVkaWN0aW9ucyxcbiAgICAgICAgYWN0aXZlSXRlbUluZGV4OiBmb2N1c2VkUHJlZGljdGlvbkluZGV4LFxuICAgICAgICBjdXN0b21Db250YWluZXJSZW5kZXI6IGN1c3RvbUNvbnRhaW5lclJlbmRlcixcbiAgICAgICAgY3VzdG9tUmVuZGVyOiBjdXN0b21SZW5kZXIsXG4gICAgICAgIGRpc3BsYXlQb3dlcmVkQnlHb29nbGU6IGRpc3BsYXlQb3dlcmVkQnlHb29nbGUsXG4gICAgICAgIG9uU2VsZWN0OiBmdW5jdGlvbiBvblNlbGVjdChzdWdnZXN0KSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzNC5oYW5kbGVTZWxlY3RQcmVkaWN0aW9uKHN1Z2dlc3QpO1xuICAgICAgICB9LFxuICAgICAgICB0ZXh0Tm9SZXN1bHRzOiB0ZXh0Tm9SZXN1bHRzLFxuICAgICAgICBvbkZvY3VzQ2hhbmdlOiB0aGlzLm9uRm9jdXNDaGFuZ2VcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gR29vZ2xlUGxhY2VzU3VnZ2VzdDtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuR29vZ2xlUGxhY2VzU3VnZ2VzdC5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gIGdvb2dsZU1hcHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgb25Ob1Jlc3VsdDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU2VsZWN0U3VnZ2VzdDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU3RhdHVzVXBkYXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgY3VzdG9tQ29udGFpbmVyUmVuZGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgY3VzdG9tUmVuZGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgZGlzcGxheVBvd2VyZWRCeUdvb2dsZTogUHJvcFR5cGVzLmJvb2wsXG4gIGF1dG9jb21wbGV0aW9uUmVxdWVzdDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBpbnB1dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gIH0pLmlzUmVxdWlyZWQsXG4gIHRleHROb1Jlc3VsdHM6IFByb3BUeXBlcy5zdHJpbmdcbn0gOiB7fTtcblxuR29vZ2xlUGxhY2VzU3VnZ2VzdC5kZWZhdWx0UHJvcHMgPSB7XG4gIGRpc3BsYXlQb3dlcmVkQnlHb29nbGU6IHRydWUsXG4gIG9uTm9SZXN1bHQ6IGZ1bmN0aW9uIG9uTm9SZXN1bHQoKSB7fSxcbiAgb25TZWxlY3RTdWdnZXN0OiBmdW5jdGlvbiBvblNlbGVjdFN1Z2dlc3QoKSB7fSxcbiAgb25TdGF0dXNVcGRhdGU6IGZ1bmN0aW9uIG9uU3RhdHVzVXBkYXRlKCkge30sXG4gIHRleHROb1Jlc3VsdHM6IFwiTm8gcmVzdWx0c1wiXG59O1xuXG5leHBvcnQgZGVmYXVsdCBHb29nbGVQbGFjZXNTdWdnZXN0OyIsImltcG9ydCBpc1BsYWluT2JqZWN0IGZyb20gJ2lzLXBsYWluLW9iamVjdCc7XG5pbXBvcnQgU3R5bGlzIGZyb20gJ3N0eWxpcyc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBjcmVhdGVFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBob2lzdFN0YXRpY3MgZnJvbSAnaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MnO1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHR5cGVjaGVja3NcbiAqL1xuXG52YXIgX3VwcGVyY2FzZVBhdHRlcm4gPSAvKFtBLVpdKS9nO1xuXG4vKipcbiAqIEh5cGhlbmF0ZXMgYSBjYW1lbGNhc2VkIHN0cmluZywgZm9yIGV4YW1wbGU6XG4gKlxuICogICA+IGh5cGhlbmF0ZSgnYmFja2dyb3VuZENvbG9yJylcbiAqICAgPCBcImJhY2tncm91bmQtY29sb3JcIlxuICpcbiAqIEZvciBDU1Mgc3R5bGUgbmFtZXMsIHVzZSBgaHlwaGVuYXRlU3R5bGVOYW1lYCBpbnN0ZWFkIHdoaWNoIHdvcmtzIHByb3Blcmx5XG4gKiB3aXRoIGFsbCB2ZW5kb3IgcHJlZml4ZXMsIGluY2x1ZGluZyBgbXNgLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmdcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gaHlwaGVuYXRlJDIoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZShfdXBwZXJjYXNlUGF0dGVybiwgJy0kMScpLnRvTG93ZXJDYXNlKCk7XG59XG5cbnZhciBoeXBoZW5hdGVfMSA9IGh5cGhlbmF0ZSQyO1xuXG52YXIgaHlwaGVuYXRlID0gaHlwaGVuYXRlXzE7XG5cbnZhciBtc1BhdHRlcm4gPSAvXm1zLS87XG5cbi8qKlxuICogSHlwaGVuYXRlcyBhIGNhbWVsY2FzZWQgQ1NTIHByb3BlcnR5IG5hbWUsIGZvciBleGFtcGxlOlxuICpcbiAqICAgPiBoeXBoZW5hdGVTdHlsZU5hbWUoJ2JhY2tncm91bmRDb2xvcicpXG4gKiAgIDwgXCJiYWNrZ3JvdW5kLWNvbG9yXCJcbiAqICAgPiBoeXBoZW5hdGVTdHlsZU5hbWUoJ01velRyYW5zaXRpb24nKVxuICogICA8IFwiLW1vei10cmFuc2l0aW9uXCJcbiAqICAgPiBoeXBoZW5hdGVTdHlsZU5hbWUoJ21zVHJhbnNpdGlvbicpXG4gKiAgIDwgXCItbXMtdHJhbnNpdGlvblwiXG4gKlxuICogQXMgTW9kZXJuaXpyIHN1Z2dlc3RzIChodHRwOi8vbW9kZXJuaXpyLmNvbS9kb2NzLyNwcmVmaXhlZCksIGFuIGBtc2AgcHJlZml4XG4gKiBpcyBjb252ZXJ0ZWQgdG8gYC1tcy1gLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmdcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gaHlwaGVuYXRlU3R5bGVOYW1lKHN0cmluZykge1xuICByZXR1cm4gaHlwaGVuYXRlKHN0cmluZykucmVwbGFjZShtc1BhdHRlcm4sICctbXMtJyk7XG59XG5cbnZhciBoeXBoZW5hdGVTdHlsZU5hbWVfMSA9IGh5cGhlbmF0ZVN0eWxlTmFtZTtcblxuLy8gICAgICBcbnZhciBvYmpUb0NzcyA9IGZ1bmN0aW9uIG9ialRvQ3NzKG9iaiwgcHJldktleSkge1xuICB2YXIgY3NzID0gT2JqZWN0LmtleXMob2JqKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciBjaHVuayA9IG9ialtrZXldO1xuICAgIHJldHVybiBjaHVuayAhPT0gdW5kZWZpbmVkICYmIGNodW5rICE9PSBudWxsICYmIGNodW5rICE9PSBmYWxzZSAmJiBjaHVuayAhPT0gJyc7XG4gIH0pLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGlzUGxhaW5PYmplY3Qob2JqW2tleV0pKSByZXR1cm4gb2JqVG9Dc3Mob2JqW2tleV0sIGtleSk7XG4gICAgcmV0dXJuIGh5cGhlbmF0ZVN0eWxlTmFtZV8xKGtleSkgKyAnOiAnICsgb2JqW2tleV0gKyAnOyc7XG4gIH0pLmpvaW4oJyAnKTtcbiAgcmV0dXJuIHByZXZLZXkgPyBwcmV2S2V5ICsgJyB7XFxuICAnICsgY3NzICsgJ1xcbn0nIDogY3NzO1xufTtcblxudmFyIGZsYXR0ZW4gPSBmdW5jdGlvbiBmbGF0dGVuKGNodW5rcywgZXhlY3V0aW9uQ29udGV4dCkge1xuICByZXR1cm4gY2h1bmtzLnJlZHVjZShmdW5jdGlvbiAocnVsZVNldCwgY2h1bmspIHtcbiAgICAvKiBSZW1vdmUgZmFsc2V5IHZhbHVlcyAqL1xuICAgIGlmIChjaHVuayA9PT0gdW5kZWZpbmVkIHx8IGNodW5rID09PSBudWxsIHx8IGNodW5rID09PSBmYWxzZSB8fCBjaHVuayA9PT0gJycpIHtcbiAgICAgIHJldHVybiBydWxlU2V0O1xuICAgIH1cbiAgICAvKiBGbGF0dGVuIHJ1bGVTZXQgKi9cbiAgICBpZiAoQXJyYXkuaXNBcnJheShjaHVuaykpIHtcbiAgICAgIHJldHVybiBbXS5jb25jYXQocnVsZVNldCwgZmxhdHRlbihjaHVuaywgZXhlY3V0aW9uQ29udGV4dCkpO1xuICAgIH1cblxuICAgIC8qIEhhbmRsZSBvdGhlciBjb21wb25lbnRzICovXG4gICAgaWYgKGNodW5rLmhhc093blByb3BlcnR5KCdzdHlsZWRDb21wb25lbnRJZCcpKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lIG5vdCBzdXJlIGhvdyB0byBtYWtlIHRoaXMgcGFzc1xuICAgICAgcmV0dXJuIFtdLmNvbmNhdChydWxlU2V0LCBbJy4nICsgY2h1bmsuc3R5bGVkQ29tcG9uZW50SWRdKTtcbiAgICB9XG5cbiAgICAvKiBFaXRoZXIgZXhlY3V0ZSBvciBkZWZlciB0aGUgZnVuY3Rpb24gKi9cbiAgICBpZiAodHlwZW9mIGNodW5rID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gZXhlY3V0aW9uQ29udGV4dCA/IHJ1bGVTZXQuY29uY2F0LmFwcGx5KHJ1bGVTZXQsIGZsYXR0ZW4oW2NodW5rKGV4ZWN1dGlvbkNvbnRleHQpXSwgZXhlY3V0aW9uQ29udGV4dCkpIDogcnVsZVNldC5jb25jYXQoY2h1bmspO1xuICAgIH1cblxuICAgIC8qIEhhbmRsZSBvYmplY3RzICovXG4gICAgcmV0dXJuIHJ1bGVTZXQuY29uY2F0KFxuICAgIC8vICRGbG93Rml4TWUgaGF2ZSB0byBhZGQgJWNoZWNrcyBzb21laG93IHRvIGlzUGxhaW5PYmplY3RcbiAgICBpc1BsYWluT2JqZWN0KGNodW5rKSA/IG9ialRvQ3NzKGNodW5rKSA6IGNodW5rLnRvU3RyaW5nKCkpO1xuICB9LCBbXSk7XG59O1xuXG4vLyAgICAgIFxudmFyIHN0eWxpcyA9IG5ldyBTdHlsaXMoe1xuICBnbG9iYWw6IGZhbHNlLFxuICBjYXNjYWRlOiB0cnVlLFxuICBrZXlmcmFtZTogZmFsc2UsXG4gIHByZWZpeDogdHJ1ZSxcbiAgY29tcHJlc3M6IGZhbHNlLFxuICBzZW1pY29sb246IHRydWVcbn0pO1xuXG52YXIgc3RyaW5naWZ5UnVsZXMgPSBmdW5jdGlvbiBzdHJpbmdpZnlSdWxlcyhydWxlcywgc2VsZWN0b3IsIHByZWZpeCkge1xuICB2YXIgZmxhdENTUyA9IHJ1bGVzLmpvaW4oJycpLnJlcGxhY2UoL15cXHMqXFwvXFwvLiokL2dtLCAnJyk7IC8vIHJlcGxhY2UgSlMgY29tbWVudHNcblxuICB2YXIgY3NzU3RyID0gc2VsZWN0b3IgJiYgcHJlZml4ID8gcHJlZml4ICsgJyAnICsgc2VsZWN0b3IgKyAnIHsgJyArIGZsYXRDU1MgKyAnIH0nIDogZmxhdENTUztcblxuICByZXR1cm4gc3R5bGlzKHByZWZpeCB8fCAhc2VsZWN0b3IgPyAnJyA6IHNlbGVjdG9yLCBjc3NTdHIpO1xufTtcblxuLy8gICAgICBcbnZhciBjaGFycyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ekFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJy5zcGxpdCgnJyk7XG52YXIgY2hhcnNMZW5ndGggPSBjaGFycy5sZW5ndGg7XG5cbi8qIFNvbWUgaGlnaCBudW1iZXIsIHVzdWFsbHkgOS1kaWdpdCBiYXNlLTEwLiBNYXAgaXQgdG8gYmFzZS3wn5iOICovXG52YXIgZ2VuZXJhdGVBbHBoYWJldGljTmFtZSA9IGZ1bmN0aW9uIGdlbmVyYXRlQWxwaGFiZXRpY05hbWUoY29kZSkge1xuICB2YXIgbmFtZSA9ICcnO1xuICB2YXIgeCA9IHZvaWQgMDtcblxuICBmb3IgKHggPSBjb2RlOyB4ID4gY2hhcnNMZW5ndGg7IHggPSBNYXRoLmZsb29yKHggLyBjaGFyc0xlbmd0aCkpIHtcbiAgICBuYW1lID0gY2hhcnNbeCAlIGNoYXJzTGVuZ3RoXSArIG5hbWU7XG4gIH1cblxuICByZXR1cm4gY2hhcnNbeCAlIGNoYXJzTGVuZ3RoXSArIG5hbWU7XG59O1xuXG4vLyAgICAgIFxuXG5cbnZhciBpbnRlcmxlYXZlID0gKGZ1bmN0aW9uIChzdHJpbmdzLCBpbnRlcnBvbGF0aW9ucykge1xuICByZXR1cm4gaW50ZXJwb2xhdGlvbnMucmVkdWNlKGZ1bmN0aW9uIChhcnJheSwgaW50ZXJwLCBpKSB7XG4gICAgcmV0dXJuIGFycmF5LmNvbmNhdChpbnRlcnAsIHN0cmluZ3NbaSArIDFdKTtcbiAgfSwgW3N0cmluZ3NbMF1dKTtcbn0pO1xuXG4vLyAgICAgIFxudmFyIGNzcyA9IChmdW5jdGlvbiAoc3RyaW5ncykge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgaW50ZXJwb2xhdGlvbnMgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgaW50ZXJwb2xhdGlvbnNbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGZsYXR0ZW4oaW50ZXJsZWF2ZShzdHJpbmdzLCBpbnRlcnBvbGF0aW9ucykpO1xufSk7XG5cbi8vICAgICAgXG52YXIgU0NfQ09NUE9ORU5UX0lEID0gL15bXlxcU1xcbl0qP1xcL1xcKiBzYy1jb21wb25lbnQtaWQ6XFxzKyhcXFMrKVxccytcXCpcXC8vZ207XG5cbnZhciBleHRyYWN0Q29tcHNGcm9tQ1NTID0gKGZ1bmN0aW9uIChtYXliZUNTUykge1xuICB2YXIgY3NzID0gJycgKyAobWF5YmVDU1MgfHwgJycpOyAvLyBEZWZpbml0ZWx5IGEgc3RyaW5nLCBhbmQgYSBjbG9uZVxuICB2YXIgZXhpc3RpbmdDb21wb25lbnRzID0gW107XG4gIGNzcy5yZXBsYWNlKFNDX0NPTVBPTkVOVF9JRCwgZnVuY3Rpb24gKG1hdGNoLCBjb21wb25lbnRJZCwgbWF0Y2hJbmRleCkge1xuICAgIGV4aXN0aW5nQ29tcG9uZW50cy5wdXNoKHsgY29tcG9uZW50SWQ6IGNvbXBvbmVudElkLCBtYXRjaEluZGV4OiBtYXRjaEluZGV4IH0pO1xuICAgIHJldHVybiBtYXRjaDtcbiAgfSk7XG4gIHJldHVybiBleGlzdGluZ0NvbXBvbmVudHMubWFwKGZ1bmN0aW9uIChfcmVmLCBpKSB7XG4gICAgdmFyIGNvbXBvbmVudElkID0gX3JlZi5jb21wb25lbnRJZCxcbiAgICAgICAgbWF0Y2hJbmRleCA9IF9yZWYubWF0Y2hJbmRleDtcblxuICAgIHZhciBuZXh0Q29tcCA9IGV4aXN0aW5nQ29tcG9uZW50c1tpICsgMV07XG4gICAgdmFyIGNzc0Zyb21ET00gPSBuZXh0Q29tcCA/IGNzcy5zbGljZShtYXRjaEluZGV4LCBuZXh0Q29tcC5tYXRjaEluZGV4KSA6IGNzcy5zbGljZShtYXRjaEluZGV4KTtcbiAgICByZXR1cm4geyBjb21wb25lbnRJZDogY29tcG9uZW50SWQsIGNzc0Zyb21ET006IGNzc0Zyb21ET00gfTtcbiAgfSk7XG59KTtcblxuLy8gICAgICBcbi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSwgbm8tdW5kZWYgKi9cblxudmFyIGdldE5vbmNlID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbn0pO1xuXG52YXIgY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxudmFyIGNyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG5cblxuXG5cblxuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG5cbnZhciBpbmhlcml0cyA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn07XG5cblxuXG5cblxuXG5cblxuXG52YXIgb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgPSBmdW5jdGlvbiAob2JqLCBrZXlzKSB7XG4gIHZhciB0YXJnZXQgPSB7fTtcblxuICBmb3IgKHZhciBpIGluIG9iaikge1xuICAgIGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7XG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7XG4gICAgdGFyZ2V0W2ldID0gb2JqW2ldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cbnZhciBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuID0gZnVuY3Rpb24gKHNlbGYsIGNhbGwpIHtcbiAgaWYgKCFzZWxmKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG59O1xuXG4vLyAgICAgIFxuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qXG4gKiBCcm93c2VyIFN0eWxlIFNoZWV0IHdpdGggUmVoeWRyYXRpb25cbiAqXG4gKiA8c3R5bGUgZGF0YS1zdHlsZWQtY29tcG9uZW50cz1cInggeSB6XCJcbiAqICAgICAgICBkYXRhLXN0eWxlZC1jb21wb25lbnRzLWlzLWxvY2FsPVwidHJ1ZVwiPlxuICogICAvwrcgc2MtY29tcG9uZW50LWlkOiBhIMK3L1xuICogICAuc2MtYSB7IC4uLiB9XG4gKiAgIC54IHsgLi4uIH1cbiAqICAgL8K3IHNjLWNvbXBvbmVudC1pZDogYiDCty9cbiAqICAgLnNjLWIgeyAuLi4gfVxuICogICAueSB7IC4uLiB9XG4gKiAgIC56IHsgLi4uIH1cbiAqIDwvc3R5bGU+XG4gKlxuICogTm90ZTogcmVwbGFjZSDCtyB3aXRoICogaW4gdGhlIGFib3ZlIHNuaXBwZXQuXG4gKiAqL1xudmFyIENPTVBPTkVOVFNfUEVSX1RBRyA9IDQwO1xuXG52YXIgQnJvd3NlclRhZyA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQnJvd3NlclRhZyhlbCwgaXNMb2NhbCkge1xuICAgIHZhciBleGlzdGluZ1NvdXJjZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogJyc7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgQnJvd3NlclRhZyk7XG5cbiAgICB0aGlzLmVsID0gZWw7XG4gICAgdGhpcy5pc0xvY2FsID0gaXNMb2NhbDtcbiAgICB0aGlzLnJlYWR5ID0gZmFsc2U7XG5cbiAgICB2YXIgZXh0cmFjdGVkQ29tcHMgPSBleHRyYWN0Q29tcHNGcm9tQ1NTKGV4aXN0aW5nU291cmNlKTtcblxuICAgIHRoaXMuc2l6ZSA9IGV4dHJhY3RlZENvbXBzLmxlbmd0aDtcbiAgICB0aGlzLmNvbXBvbmVudHMgPSBleHRyYWN0ZWRDb21wcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgb2JqKSB7XG4gICAgICBhY2Nbb2JqLmNvbXBvbmVudElkXSA9IG9iajsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG4gIH1cblxuICBCcm93c2VyVGFnLnByb3RvdHlwZS5pc0Z1bGwgPSBmdW5jdGlvbiBpc0Z1bGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZSA+PSBDT01QT05FTlRTX1BFUl9UQUc7XG4gIH07XG5cbiAgQnJvd3NlclRhZy5wcm90b3R5cGUuYWRkQ29tcG9uZW50ID0gZnVuY3Rpb24gYWRkQ29tcG9uZW50KGNvbXBvbmVudElkKSB7XG4gICAgaWYgKCF0aGlzLnJlYWR5KSB0aGlzLnJlcGxhY2VFbGVtZW50KCk7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdGhpcy5jb21wb25lbnRzW2NvbXBvbmVudElkXSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUcnlpbmcgdG8gYWRkIENvbXBvbmVudCBcXCcnICsgY29tcG9uZW50SWQgKyAnXFwnIHR3aWNlIScpO1xuICAgIH1cblxuICAgIHZhciBjb21wID0geyBjb21wb25lbnRJZDogY29tcG9uZW50SWQsIHRleHROb2RlOiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJykgfTtcbiAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGNvbXAudGV4dE5vZGUpO1xuXG4gICAgdGhpcy5zaXplICs9IDE7XG4gICAgdGhpcy5jb21wb25lbnRzW2NvbXBvbmVudElkXSA9IGNvbXA7XG4gIH07XG5cbiAgQnJvd3NlclRhZy5wcm90b3R5cGUuaW5qZWN0ID0gZnVuY3Rpb24gaW5qZWN0KGNvbXBvbmVudElkLCBjc3MsIG5hbWUpIHtcbiAgICBpZiAoIXRoaXMucmVhZHkpIHRoaXMucmVwbGFjZUVsZW1lbnQoKTtcbiAgICB2YXIgY29tcCA9IHRoaXMuY29tcG9uZW50c1tjb21wb25lbnRJZF07XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhY29tcCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdXN0IGFkZCBhIG5ldyBjb21wb25lbnQgYmVmb3JlIHlvdSBjYW4gaW5qZWN0IGNzcyBpbnRvIGl0Jyk7XG4gICAgfVxuICAgIGlmIChjb21wLnRleHROb2RlLmRhdGEgPT09ICcnKSB7XG4gICAgICBjb21wLnRleHROb2RlLmFwcGVuZERhdGEoJ1xcbi8qIHNjLWNvbXBvbmVudC1pZDogJyArIGNvbXBvbmVudElkICsgJyAqL1xcbicpO1xuICAgIH1cblxuICAgIGNvbXAudGV4dE5vZGUuYXBwZW5kRGF0YShjc3MpO1xuICAgIGlmIChuYW1lKSB7XG4gICAgICB2YXIgZXhpc3RpbmdOYW1lcyA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlKFNDX0FUVFIpO1xuICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoU0NfQVRUUiwgZXhpc3RpbmdOYW1lcyA/IGV4aXN0aW5nTmFtZXMgKyAnICcgKyBuYW1lIDogbmFtZSk7XG4gICAgfVxuXG4gICAgdmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ25vbmNlJywgbm9uY2UpO1xuICAgIH1cbiAgfTtcblxuICBCcm93c2VyVGFnLnByb3RvdHlwZS50b0hUTUwgPSBmdW5jdGlvbiB0b0hUTUwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWwub3V0ZXJIVE1MO1xuICB9O1xuXG4gIEJyb3dzZXJUYWcucHJvdG90eXBlLnRvUmVhY3RFbGVtZW50ID0gZnVuY3Rpb24gdG9SZWFjdEVsZW1lbnQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQnJvd3NlclRhZyBkb2Vzbid0IGltcGxlbWVudCB0b1JlYWN0RWxlbWVudCFcIik7XG4gIH07XG5cbiAgQnJvd3NlclRhZy5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiBjbG9uZSgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Jyb3dzZXJUYWcgY2Fubm90IGJlIGNsb25lZCEnKTtcbiAgfTtcblxuICAvKiBCZWNhdXNlIHdlIGNhcmUgYWJvdXQgc291cmNlIG9yZGVyLCBiZWZvcmUgd2UgY2FuIGluamVjdCBhbnl0aGluZyB3ZSBuZWVkIHRvXG4gICAqIGNyZWF0ZSBhIHRleHQgbm9kZSBmb3IgZWFjaCBjb21wb25lbnQgYW5kIHJlcGxhY2UgdGhlIGV4aXN0aW5nIENTUy4gKi9cblxuXG4gIEJyb3dzZXJUYWcucHJvdG90eXBlLnJlcGxhY2VFbGVtZW50ID0gZnVuY3Rpb24gcmVwbGFjZUVsZW1lbnQoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHRoaXMucmVhZHkgPSB0cnVlO1xuICAgIC8vIFdlIGhhdmUgbm90aGluZyB0byBpbmplY3QuIFVzZSB0aGUgY3VycmVudCBlbC5cbiAgICBpZiAodGhpcy5zaXplID09PSAwKSByZXR1cm47XG5cbiAgICAvLyBCdWlsZCB1cCBvdXIgcmVwbGFjZW1lbnQgc3R5bGUgdGFnXG4gICAgdmFyIG5ld0VsID0gdGhpcy5lbC5jbG9uZU5vZGUoKTtcbiAgICBuZXdFbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnXFxuJykpO1xuXG4gICAgT2JqZWN0LmtleXModGhpcy5jb21wb25lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBjb21wID0gX3RoaXMuY29tcG9uZW50c1trZXldO1xuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIGNvbXAudGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb21wLmNzc0Zyb21ET00pO1xuICAgICAgbmV3RWwuYXBwZW5kQ2hpbGQoY29tcC50ZXh0Tm9kZSk7XG4gICAgfSk7XG5cbiAgICBpZiAoIXRoaXMuZWwucGFyZW50Tm9kZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVHJ5aW5nIHRvIHJlcGxhY2UgYW4gZWxlbWVudCB0aGF0IHdhc24ndCBtb3VudGVkIVwiKTtcbiAgICB9XG5cbiAgICAvLyBUaGUgb2wnIHN3aXRjaGVyb29cbiAgICB0aGlzLmVsLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld0VsLCB0aGlzLmVsKTtcbiAgICB0aGlzLmVsID0gbmV3RWw7XG4gIH07XG5cbiAgcmV0dXJuIEJyb3dzZXJUYWc7XG59KCk7XG5cbi8qIEZhY3RvcnkgZnVuY3Rpb24gdG8gc2VwYXJhdGUgRE9NIG9wZXJhdGlvbnMgZnJvbSBsb2dpY2FsIG9uZXMqL1xuXG5cbnZhciBCcm93c2VyU3R5bGVTaGVldCA9IHtcbiAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgdmFyIHRhZ3MgPSBbXTtcbiAgICB2YXIgbmFtZXMgPSB7fTtcblxuICAgIC8qIENvbnN0cnVjdCBleGlzdGluZyBzdGF0ZSBmcm9tIERPTSAqL1xuICAgIHZhciBub2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1snICsgU0NfQVRUUiArICddJyk7XG4gICAgdmFyIG5vZGVzTGVuZ3RoID0gbm9kZXMubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlc0xlbmd0aDsgaSArPSAxKSB7XG4gICAgICB2YXIgZWwgPSBub2Rlc1tpXTtcblxuICAgICAgdGFncy5wdXNoKG5ldyBCcm93c2VyVGFnKGVsLCBlbC5nZXRBdHRyaWJ1dGUoTE9DQUxfQVRUUikgPT09ICd0cnVlJywgZWwuaW5uZXJIVE1MKSk7XG5cbiAgICAgIHZhciBhdHRyID0gZWwuZ2V0QXR0cmlidXRlKFNDX0FUVFIpO1xuICAgICAgaWYgKGF0dHIpIHtcbiAgICAgICAgYXR0ci50cmltKCkuc3BsaXQoL1xccysvKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgbmFtZXNbbmFtZV0gPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBGYWN0b3J5IGZvciBtYWtpbmcgbW9yZSB0YWdzICovXG4gICAgdmFyIHRhZ0NvbnN0cnVjdG9yID0gZnVuY3Rpb24gdGFnQ29uc3RydWN0b3IoaXNMb2NhbCkge1xuICAgICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgIGVsLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgICAgZWwuc2V0QXR0cmlidXRlKFNDX0FUVFIsICcnKTtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZShMT0NBTF9BVFRSLCBpc0xvY2FsID8gJ3RydWUnIDogJ2ZhbHNlJyk7XG4gICAgICBpZiAoIWRvY3VtZW50LmhlYWQpIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBkb2N1bWVudCA8aGVhZD4nKTtcbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgcmV0dXJuIG5ldyBCcm93c2VyVGFnKGVsLCBpc0xvY2FsKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIG5ldyBTdHlsZVNoZWV0KHRhZ0NvbnN0cnVjdG9yLCB0YWdzLCBuYW1lcyk7XG4gIH1cbn07XG5cbi8vICAgICAgXG52YXIgU0NfQVRUUiA9ICdkYXRhLXN0eWxlZC1jb21wb25lbnRzJztcbnZhciBMT0NBTF9BVFRSID0gJ2RhdGEtc3R5bGVkLWNvbXBvbmVudHMtaXMtbG9jYWwnO1xudmFyIENPTlRFWFRfS0VZID0gJ19fc3R5bGVkLWNvbXBvbmVudHMtc3R5bGVzaGVldF9fJztcblxuLyogZXNsaW50LWRpc2FibGUgZmxvd3R5cGUvb2JqZWN0LXR5cGUtZGVsaW1pdGVyICovXG5cbi8qIGVzbGludC1lbmFibGUgZmxvd3R5cGUvb2JqZWN0LXR5cGUtZGVsaW1pdGVyICovXG5cbnZhciBpbnN0YW5jZSA9IG51bGw7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbnZhciBjbG9uZXMgPSBbXTtcblxudmFyIFN0eWxlU2hlZXQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFN0eWxlU2hlZXQodGFnQ29uc3RydWN0b3IpIHtcbiAgICB2YXIgdGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogW107XG4gICAgdmFyIG5hbWVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBTdHlsZVNoZWV0KTtcbiAgICB0aGlzLmhhc2hlcyA9IHt9O1xuICAgIHRoaXMuZGVmZXJyZWRJbmplY3Rpb25zID0ge307XG4gICAgdGhpcy5zdHlsZXNDYWNoZWFibGUgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnO1xuXG4gICAgdGhpcy50YWdDb25zdHJ1Y3RvciA9IHRhZ0NvbnN0cnVjdG9yO1xuICAgIHRoaXMudGFncyA9IHRhZ3M7XG4gICAgdGhpcy5uYW1lcyA9IG5hbWVzO1xuICAgIHRoaXMuY29uc3RydWN0Q29tcG9uZW50VGFnTWFwKCk7XG4gIH1cblxuICAvLyBoZWxwZXIgZm9yIGBDb21wb25lbnRTdHlsZWAgdG8ga25vdyB3aGVuIGl0IGNhY2hlIHN0YXRpYyBzdHlsZXMuXG4gIC8vIHN0YXRpY2x5IHN0eWxlZC1jb21wb25lbnQgY2FuIG5vdCBzYWZlbHkgY2FjaGUgc3R5bGVzIG9uIHRoZSBzZXJ2ZXJcbiAgLy8gd2l0aG91dCBhbGwgYENvbXBvbmVudFN0eWxlYCBpbnN0YW5jZXMgc2F2aW5nIGEgcmVmZXJlbmNlIHRvIHRoZVxuICAvLyB0aGUgc3R5bGVTaGVldCBpbnN0YW5jZSB0aGV5IGxhc3QgcmVuZGVyZWQgd2l0aCxcbiAgLy8gb3IgbGlzdGVuaW5nIHRvIGNyZWF0aW9uIC8gcmVzZXQgZXZlbnRzLiBvdGhlcndpc2UgeW91IG1pZ2h0IGNyZWF0ZVxuICAvLyBhIGNvbXBvbmVudCB3aXRoIG9uZSBzdHlsZXNoZWV0IGFuZCByZW5kZXIgaXQgYW5vdGhlciBhcGkgcmVzcG9uc2VcbiAgLy8gd2l0aCBhbm90aGVyLCBsb3Npbmcgc3R5bGVzIG9uIGZyb20geW91ciBzZXJ2ZXItc2lkZSByZW5kZXIuXG5cblxuICBTdHlsZVNoZWV0LnByb3RvdHlwZS5jb25zdHJ1Y3RDb21wb25lbnRUYWdNYXAgPSBmdW5jdGlvbiBjb25zdHJ1Y3RDb21wb25lbnRUYWdNYXAoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHRoaXMuY29tcG9uZW50VGFncyA9IHt9O1xuXG4gICAgdGhpcy50YWdzLmZvckVhY2goZnVuY3Rpb24gKHRhZykge1xuICAgICAgT2JqZWN0LmtleXModGFnLmNvbXBvbmVudHMpLmZvckVhY2goZnVuY3Rpb24gKGNvbXBvbmVudElkKSB7XG4gICAgICAgIF90aGlzLmNvbXBvbmVudFRhZ3NbY29tcG9uZW50SWRdID0gdGFnO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyogQmVzdCBsZXZlbCBvZiBjYWNoaW5n4oCUZ2V0IHRoZSBuYW1lIGZyb20gdGhlIGhhc2ggc3RyYWlnaHQgYXdheS4gKi9cblxuXG4gIFN0eWxlU2hlZXQucHJvdG90eXBlLmdldE5hbWUgPSBmdW5jdGlvbiBnZXROYW1lKGhhc2gpIHtcbiAgICByZXR1cm4gdGhpcy5oYXNoZXNbaGFzaC50b1N0cmluZygpXTtcbiAgfTtcblxuICAvKiBTZWNvbmQgbGV2ZWwgb2YgY2FjaGluZ+KAlGlmIHRoZSBuYW1lIGlzIGFscmVhZHkgaW4gdGhlIGRvbSwgZG9uJ3RcbiAgICogaW5qZWN0IGFueXRoaW5nIGFuZCByZWNvcmQgdGhlIGhhc2ggZm9yIGdldE5hbWUgbmV4dCB0aW1lLiAqL1xuXG5cbiAgU3R5bGVTaGVldC5wcm90b3R5cGUuYWxyZWFkeUluamVjdGVkID0gZnVuY3Rpb24gYWxyZWFkeUluamVjdGVkKGhhc2gsIG5hbWUpIHtcbiAgICBpZiAoIXRoaXMubmFtZXNbbmFtZV0pIHJldHVybiBmYWxzZTtcblxuICAgIHRoaXMuaGFzaGVzW2hhc2gudG9TdHJpbmcoKV0gPSBuYW1lO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIC8qIFRoaXJkIHR5cGUgb2YgY2FjaGluZ+KAlGRvbid0IGluamVjdCBjb21wb25lbnRzJyBjb21wb25lbnRJZCB0d2ljZS4gKi9cblxuXG4gIFN0eWxlU2hlZXQucHJvdG90eXBlLmhhc0luamVjdGVkQ29tcG9uZW50ID0gZnVuY3Rpb24gaGFzSW5qZWN0ZWRDb21wb25lbnQoY29tcG9uZW50SWQpIHtcbiAgICByZXR1cm4gISF0aGlzLmNvbXBvbmVudFRhZ3NbY29tcG9uZW50SWRdO1xuICB9O1xuXG4gIFN0eWxlU2hlZXQucHJvdG90eXBlLmRlZmVycmVkSW5qZWN0ID0gZnVuY3Rpb24gZGVmZXJyZWRJbmplY3QoY29tcG9uZW50SWQsIGlzTG9jYWwsIGNzcykge1xuICAgIGlmICh0aGlzID09PSBpbnN0YW5jZSkge1xuICAgICAgY2xvbmVzLmZvckVhY2goZnVuY3Rpb24gKGNsb25lKSB7XG4gICAgICAgIGNsb25lLmRlZmVycmVkSW5qZWN0KGNvbXBvbmVudElkLCBpc0xvY2FsLCBjc3MpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5nZXRPckNyZWF0ZVRhZyhjb21wb25lbnRJZCwgaXNMb2NhbCk7XG4gICAgdGhpcy5kZWZlcnJlZEluamVjdGlvbnNbY29tcG9uZW50SWRdID0gY3NzO1xuICB9O1xuXG4gIFN0eWxlU2hlZXQucHJvdG90eXBlLmluamVjdCA9IGZ1bmN0aW9uIGluamVjdChjb21wb25lbnRJZCwgaXNMb2NhbCwgY3NzLCBoYXNoLCBuYW1lKSB7XG4gICAgaWYgKHRoaXMgPT09IGluc3RhbmNlKSB7XG4gICAgICBjbG9uZXMuZm9yRWFjaChmdW5jdGlvbiAoY2xvbmUpIHtcbiAgICAgICAgY2xvbmUuaW5qZWN0KGNvbXBvbmVudElkLCBpc0xvY2FsLCBjc3MpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIHRhZyA9IHRoaXMuZ2V0T3JDcmVhdGVUYWcoY29tcG9uZW50SWQsIGlzTG9jYWwpO1xuXG4gICAgdmFyIGRlZmVycmVkSW5qZWN0aW9uID0gdGhpcy5kZWZlcnJlZEluamVjdGlvbnNbY29tcG9uZW50SWRdO1xuICAgIGlmIChkZWZlcnJlZEluamVjdGlvbikge1xuICAgICAgdGFnLmluamVjdChjb21wb25lbnRJZCwgZGVmZXJyZWRJbmplY3Rpb24pO1xuICAgICAgZGVsZXRlIHRoaXMuZGVmZXJyZWRJbmplY3Rpb25zW2NvbXBvbmVudElkXTtcbiAgICB9XG5cbiAgICB0YWcuaW5qZWN0KGNvbXBvbmVudElkLCBjc3MsIG5hbWUpO1xuXG4gICAgaWYgKGhhc2ggJiYgbmFtZSkge1xuICAgICAgdGhpcy5oYXNoZXNbaGFzaC50b1N0cmluZygpXSA9IG5hbWU7XG4gICAgfVxuICB9O1xuXG4gIFN0eWxlU2hlZXQucHJvdG90eXBlLnRvSFRNTCA9IGZ1bmN0aW9uIHRvSFRNTCgpIHtcbiAgICByZXR1cm4gdGhpcy50YWdzLm1hcChmdW5jdGlvbiAodGFnKSB7XG4gICAgICByZXR1cm4gdGFnLnRvSFRNTCgpO1xuICAgIH0pLmpvaW4oJycpO1xuICB9O1xuXG4gIFN0eWxlU2hlZXQucHJvdG90eXBlLnRvUmVhY3RFbGVtZW50cyA9IGZ1bmN0aW9uIHRvUmVhY3RFbGVtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy50YWdzLm1hcChmdW5jdGlvbiAodGFnLCBpKSB7XG4gICAgICByZXR1cm4gdGFnLnRvUmVhY3RFbGVtZW50KCdzYy0nICsgaSk7XG4gICAgfSk7XG4gIH07XG5cbiAgU3R5bGVTaGVldC5wcm90b3R5cGUuZ2V0T3JDcmVhdGVUYWcgPSBmdW5jdGlvbiBnZXRPckNyZWF0ZVRhZyhjb21wb25lbnRJZCwgaXNMb2NhbCkge1xuICAgIHZhciBleGlzdGluZ1RhZyA9IHRoaXMuY29tcG9uZW50VGFnc1tjb21wb25lbnRJZF07XG4gICAgaWYgKGV4aXN0aW5nVGFnKSB7XG4gICAgICByZXR1cm4gZXhpc3RpbmdUYWc7XG4gICAgfVxuXG4gICAgdmFyIGxhc3RUYWcgPSB0aGlzLnRhZ3NbdGhpcy50YWdzLmxlbmd0aCAtIDFdO1xuICAgIHZhciBjb21wb25lbnRUYWcgPSAhbGFzdFRhZyB8fCBsYXN0VGFnLmlzRnVsbCgpIHx8IGxhc3RUYWcuaXNMb2NhbCAhPT0gaXNMb2NhbCA/IHRoaXMuY3JlYXRlTmV3VGFnKGlzTG9jYWwpIDogbGFzdFRhZztcbiAgICB0aGlzLmNvbXBvbmVudFRhZ3NbY29tcG9uZW50SWRdID0gY29tcG9uZW50VGFnO1xuICAgIGNvbXBvbmVudFRhZy5hZGRDb21wb25lbnQoY29tcG9uZW50SWQpO1xuICAgIHJldHVybiBjb21wb25lbnRUYWc7XG4gIH07XG5cbiAgU3R5bGVTaGVldC5wcm90b3R5cGUuY3JlYXRlTmV3VGFnID0gZnVuY3Rpb24gY3JlYXRlTmV3VGFnKGlzTG9jYWwpIHtcbiAgICB2YXIgbmV3VGFnID0gdGhpcy50YWdDb25zdHJ1Y3Rvcihpc0xvY2FsKTtcbiAgICB0aGlzLnRhZ3MucHVzaChuZXdUYWcpO1xuICAgIHJldHVybiBuZXdUYWc7XG4gIH07XG5cbiAgU3R5bGVTaGVldC5yZXNldCA9IGZ1bmN0aW9uIHJlc2V0KGlzU2VydmVyKSB7XG4gICAgaW5zdGFuY2UgPSBTdHlsZVNoZWV0LmNyZWF0ZShpc1NlcnZlcik7XG4gIH07XG5cbiAgLyogV2UgY2FuIG1ha2UgaXNTZXJ2ZXIgdG90YWxseSBpbXBsaWNpdCBvbmNlIEplc3QgMjAgZHJvcHMgYW5kIHdlXG4gICAqIGNhbiBjaGFuZ2UgZW52aXJvbm1lbnQgb24gYSBwZXItdGVzdCBiYXNpcy4gKi9cblxuXG4gIFN0eWxlU2hlZXQuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgIHZhciBpc1NlcnZlciA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJztcblxuICAgIHJldHVybiAoaXNTZXJ2ZXIgPyBTZXJ2ZXJTdHlsZVNoZWV0IDogQnJvd3NlclN0eWxlU2hlZXQpLmNyZWF0ZSgpO1xuICB9O1xuXG4gIFN0eWxlU2hlZXQuY2xvbmUgPSBmdW5jdGlvbiBjbG9uZShvbGRTaGVldCkge1xuICAgIHZhciBuZXdTaGVldCA9IG5ldyBTdHlsZVNoZWV0KG9sZFNoZWV0LnRhZ0NvbnN0cnVjdG9yLCBvbGRTaGVldC50YWdzLm1hcChmdW5jdGlvbiAodGFnKSB7XG4gICAgICByZXR1cm4gdGFnLmNsb25lKCk7XG4gICAgfSksIF9leHRlbmRzKHt9LCBvbGRTaGVldC5uYW1lcykpO1xuXG4gICAgbmV3U2hlZXQuaGFzaGVzID0gX2V4dGVuZHMoe30sIG9sZFNoZWV0Lmhhc2hlcyk7XG4gICAgbmV3U2hlZXQuZGVmZXJyZWRJbmplY3Rpb25zID0gX2V4dGVuZHMoe30sIG9sZFNoZWV0LmRlZmVycmVkSW5qZWN0aW9ucyk7XG4gICAgY2xvbmVzLnB1c2gobmV3U2hlZXQpO1xuXG4gICAgcmV0dXJuIG5ld1NoZWV0O1xuICB9O1xuXG4gIGNyZWF0ZUNsYXNzKFN0eWxlU2hlZXQsIG51bGwsIFt7XG4gICAga2V5OiAnaW5zdGFuY2UnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIGluc3RhbmNlIHx8IChpbnN0YW5jZSA9IFN0eWxlU2hlZXQuY3JlYXRlKCkpO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gU3R5bGVTaGVldDtcbn0oKTtcblxudmFyIF9TdHlsZVNoZWV0TWFuYWdlciRjaDtcblxuLy8gICAgICBcbnZhciBTdHlsZVNoZWV0TWFuYWdlciA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIGluaGVyaXRzKFN0eWxlU2hlZXRNYW5hZ2VyLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBTdHlsZVNoZWV0TWFuYWdlcigpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBTdHlsZVNoZWV0TWFuYWdlcik7XG4gICAgcmV0dXJuIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIFN0eWxlU2hlZXRNYW5hZ2VyLnByb3RvdHlwZS5nZXRDaGlsZENvbnRleHQgPSBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICByZXR1cm4gX3JlZiA9IHt9LCBfcmVmW0NPTlRFWFRfS0VZXSA9IHRoaXMucHJvcHMuc2hlZXQsIF9yZWY7XG4gIH07XG5cbiAgU3R5bGVTaGVldE1hbmFnZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXG4gICAgLy8gRmxvdyB2MC40My4xIHdpbGwgcmVwb3J0IGFuIGVycm9yIGFjY2Vzc2luZyB0aGUgYGNoaWxkcmVuYCBwcm9wZXJ0eSxcbiAgICAvLyBidXQgdjAuNDcuMCB3aWxsIG5vdC4gSXQgaXMgbmVjZXNzYXJ5IHRvIHVzZSBhIHR5cGUgY2FzdCBpbnN0ZWFkIG9mXG4gICAgLy8gYSBcImZpeG1lXCIgY29tbWVudCB0byBzYXRpc2Z5IGJvdGggRmxvdyB2ZXJzaW9ucy5cbiAgICByZXR1cm4gUmVhY3QuQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgfTtcblxuICByZXR1cm4gU3R5bGVTaGVldE1hbmFnZXI7XG59KENvbXBvbmVudCk7XG5cblN0eWxlU2hlZXRNYW5hZ2VyLmNoaWxkQ29udGV4dFR5cGVzID0gKF9TdHlsZVNoZWV0TWFuYWdlciRjaCA9IHt9LCBfU3R5bGVTaGVldE1hbmFnZXIkY2hbQ09OVEVYVF9LRVldID0gUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmluc3RhbmNlT2YoU3R5bGVTaGVldCksIFByb3BUeXBlcy5pbnN0YW5jZU9mKFNlcnZlclN0eWxlU2hlZXQpXSkuaXNSZXF1aXJlZCwgX1N0eWxlU2hlZXRNYW5hZ2VyJGNoKTtcblxuU3R5bGVTaGVldE1hbmFnZXIucHJvcFR5cGVzID0ge1xuICBzaGVldDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmluc3RhbmNlT2YoU3R5bGVTaGVldCksIFByb3BUeXBlcy5pbnN0YW5jZU9mKFNlcnZlclN0eWxlU2hlZXQpXSkuaXNSZXF1aXJlZFxufTtcblxuLy8gICAgICBcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG52YXIgU2VydmVyVGFnID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTZXJ2ZXJUYWcoaXNMb2NhbCkge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFNlcnZlclRhZyk7XG5cbiAgICB0aGlzLmlzTG9jYWwgPSBpc0xvY2FsO1xuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9O1xuICAgIHRoaXMuc2l6ZSA9IDA7XG4gICAgdGhpcy5uYW1lcyA9IFtdO1xuICB9XG5cbiAgU2VydmVyVGFnLnByb3RvdHlwZS5pc0Z1bGwgPSBmdW5jdGlvbiBpc0Z1bGwoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIFNlcnZlclRhZy5wcm90b3R5cGUuYWRkQ29tcG9uZW50ID0gZnVuY3Rpb24gYWRkQ29tcG9uZW50KGNvbXBvbmVudElkKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdGhpcy5jb21wb25lbnRzW2NvbXBvbmVudElkXSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUcnlpbmcgdG8gYWRkIENvbXBvbmVudCBcXCcnICsgY29tcG9uZW50SWQgKyAnXFwnIHR3aWNlIScpO1xuICAgIH1cbiAgICB0aGlzLmNvbXBvbmVudHNbY29tcG9uZW50SWRdID0geyBjb21wb25lbnRJZDogY29tcG9uZW50SWQsIGNzczogJycgfTtcbiAgICB0aGlzLnNpemUgKz0gMTtcbiAgfTtcblxuICBTZXJ2ZXJUYWcucHJvdG90eXBlLmNvbmNhdGVuYXRlQ1NTID0gZnVuY3Rpb24gY29uY2F0ZW5hdGVDU1MoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmNvbXBvbmVudHMpLnJlZHVjZShmdW5jdGlvbiAoc3R5bGVzLCBrKSB7XG4gICAgICByZXR1cm4gc3R5bGVzICsgX3RoaXMuY29tcG9uZW50c1trXS5jc3M7XG4gICAgfSwgJycpO1xuICB9O1xuXG4gIFNlcnZlclRhZy5wcm90b3R5cGUuaW5qZWN0ID0gZnVuY3Rpb24gaW5qZWN0KGNvbXBvbmVudElkLCBjc3MsIG5hbWUpIHtcbiAgICB2YXIgY29tcCA9IHRoaXMuY29tcG9uZW50c1tjb21wb25lbnRJZF07XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhY29tcCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdXN0IGFkZCBhIG5ldyBjb21wb25lbnQgYmVmb3JlIHlvdSBjYW4gaW5qZWN0IGNzcyBpbnRvIGl0Jyk7XG4gICAgfVxuICAgIGlmIChjb21wLmNzcyA9PT0gJycpIGNvbXAuY3NzID0gJy8qIHNjLWNvbXBvbmVudC1pZDogJyArIGNvbXBvbmVudElkICsgJyAqL1xcbic7XG5cbiAgICBjb21wLmNzcyArPSBjc3MucmVwbGFjZSgvXFxuKiQvLCAnXFxuJyk7XG5cbiAgICBpZiAobmFtZSkgdGhpcy5uYW1lcy5wdXNoKG5hbWUpO1xuICB9O1xuXG4gIFNlcnZlclRhZy5wcm90b3R5cGUudG9IVE1MID0gZnVuY3Rpb24gdG9IVE1MKCkge1xuICAgIHZhciBhdHRycyA9IFsndHlwZT1cInRleHQvY3NzXCInLCBTQ19BVFRSICsgJz1cIicgKyB0aGlzLm5hbWVzLmpvaW4oJyAnKSArICdcIicsIExPQ0FMX0FUVFIgKyAnPVwiJyArICh0aGlzLmlzTG9jYWwgPyAndHJ1ZScgOiAnZmFsc2UnKSArICdcIiddO1xuXG4gICAgdmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cnMucHVzaCgnbm9uY2U9XCInICsgbm9uY2UgKyAnXCInKTtcbiAgICB9XG5cbiAgICByZXR1cm4gJzxzdHlsZSAnICsgYXR0cnMuam9pbignICcpICsgJz4nICsgdGhpcy5jb25jYXRlbmF0ZUNTUygpICsgJzwvc3R5bGU+JztcbiAgfTtcblxuICBTZXJ2ZXJUYWcucHJvdG90eXBlLnRvUmVhY3RFbGVtZW50ID0gZnVuY3Rpb24gdG9SZWFjdEVsZW1lbnQoa2V5KSB7XG4gICAgdmFyIF9hdHRycztcblxuICAgIHZhciBhdHRycyA9IChfYXR0cnMgPSB7fSwgX2F0dHJzW1NDX0FUVFJdID0gdGhpcy5uYW1lcy5qb2luKCcgJyksIF9hdHRyc1tMT0NBTF9BVFRSXSA9IHRoaXMuaXNMb2NhbC50b1N0cmluZygpLCBfYXR0cnMpO1xuXG4gICAgdmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cnMubm9uY2UgPSBub25jZTtcbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnc3R5bGUnLCBfZXh0ZW5kcyh7XG4gICAgICBrZXk6IGtleSxcbiAgICAgIHR5cGU6ICd0ZXh0L2NzcydcbiAgICB9LCBhdHRycywge1xuICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHsgX19odG1sOiB0aGlzLmNvbmNhdGVuYXRlQ1NTKCkgfVxuICAgIH0pKTtcbiAgfTtcblxuICBTZXJ2ZXJUYWcucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gY2xvbmUoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgY29weSA9IG5ldyBTZXJ2ZXJUYWcodGhpcy5pc0xvY2FsKTtcbiAgICBjb3B5Lm5hbWVzID0gW10uY29uY2F0KHRoaXMubmFtZXMpO1xuICAgIGNvcHkuc2l6ZSA9IHRoaXMuc2l6ZTtcbiAgICBjb3B5LmNvbXBvbmVudHMgPSBPYmplY3Qua2V5cyh0aGlzLmNvbXBvbmVudHMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBrZXkpIHtcbiAgICAgIGFjY1trZXldID0gX2V4dGVuZHMoe30sIF90aGlzMi5jb21wb25lbnRzW2tleV0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcblxuICAgIHJldHVybiBjb3B5O1xuICB9O1xuXG4gIHJldHVybiBTZXJ2ZXJUYWc7XG59KCk7XG5cbnZhciBTZXJ2ZXJTdHlsZVNoZWV0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTZXJ2ZXJTdHlsZVNoZWV0KCkge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFNlcnZlclN0eWxlU2hlZXQpO1xuXG4gICAgdGhpcy5pbnN0YW5jZSA9IFN0eWxlU2hlZXQuY2xvbmUoU3R5bGVTaGVldC5pbnN0YW5jZSk7XG4gIH1cblxuICBTZXJ2ZXJTdHlsZVNoZWV0LnByb3RvdHlwZS5jb2xsZWN0U3R5bGVzID0gZnVuY3Rpb24gY29sbGVjdFN0eWxlcyhjaGlsZHJlbikge1xuICAgIGlmICh0aGlzLmNsb3NlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgY29sbGVjdCBzdHlsZXMgb25jZSB5b3UndmUgY2FsbGVkIGdldFN0eWxlVGFncyFcIik7XG4gICAgfVxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgU3R5bGVTaGVldE1hbmFnZXIsXG4gICAgICB7IHNoZWV0OiB0aGlzLmluc3RhbmNlIH0sXG4gICAgICBjaGlsZHJlblxuICAgICk7XG4gIH07XG5cbiAgU2VydmVyU3R5bGVTaGVldC5wcm90b3R5cGUuZ2V0U3R5bGVUYWdzID0gZnVuY3Rpb24gZ2V0U3R5bGVUYWdzKCkge1xuICAgIGlmICghdGhpcy5jbG9zZWQpIHtcbiAgICAgIGNsb25lcy5zcGxpY2UoY2xvbmVzLmluZGV4T2YodGhpcy5pbnN0YW5jZSksIDEpO1xuICAgICAgdGhpcy5jbG9zZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmluc3RhbmNlLnRvSFRNTCgpO1xuICB9O1xuXG4gIFNlcnZlclN0eWxlU2hlZXQucHJvdG90eXBlLmdldFN0eWxlRWxlbWVudCA9IGZ1bmN0aW9uIGdldFN0eWxlRWxlbWVudCgpIHtcbiAgICBpZiAoIXRoaXMuY2xvc2VkKSB7XG4gICAgICBjbG9uZXMuc3BsaWNlKGNsb25lcy5pbmRleE9mKHRoaXMuaW5zdGFuY2UpLCAxKTtcbiAgICAgIHRoaXMuY2xvc2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS50b1JlYWN0RWxlbWVudHMoKTtcbiAgfTtcblxuICBTZXJ2ZXJTdHlsZVNoZWV0LmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlU2hlZXQoZnVuY3Rpb24gKGlzTG9jYWwpIHtcbiAgICAgIHJldHVybiBuZXcgU2VydmVyVGFnKGlzTG9jYWwpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBTZXJ2ZXJTdHlsZVNoZWV0O1xufSgpO1xuXG4vLyAgICAgIFxuXG52YXIgTElNSVQgPSAyMDA7XG5cbnZhciBjcmVhdGVXYXJuVG9vTWFueUNsYXNzZXMgPSAoZnVuY3Rpb24gKGRpc3BsYXlOYW1lKSB7XG4gIHZhciBnZW5lcmF0ZWRDbGFzc2VzID0ge307XG4gIHZhciB3YXJuaW5nU2VlbiA9IGZhbHNlO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgaWYgKCF3YXJuaW5nU2Vlbikge1xuICAgICAgZ2VuZXJhdGVkQ2xhc3Nlc1tjbGFzc05hbWVdID0gdHJ1ZTtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhnZW5lcmF0ZWRDbGFzc2VzKS5sZW5ndGggPj0gTElNSVQpIHtcbiAgICAgICAgLy8gVW5hYmxlIHRvIGZpbmQgbGF0ZXN0UnVsZSBpbiB0ZXN0IGVudmlyb25tZW50LlxuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlLCBwcmVmZXItdGVtcGxhdGUgKi9cbiAgICAgICAgY29uc29sZS53YXJuKCdPdmVyICcgKyBMSU1JVCArICcgY2xhc3NlcyB3ZXJlIGdlbmVyYXRlZCBmb3IgY29tcG9uZW50ICcgKyBkaXNwbGF5TmFtZSArICcuIFxcbicgKyAnQ29uc2lkZXIgdXNpbmcgdGhlIGF0dHJzIG1ldGhvZCwgdG9nZXRoZXIgd2l0aCBhIHN0eWxlIG9iamVjdCBmb3IgZnJlcXVlbnRseSBjaGFuZ2VkIHN0eWxlcy5cXG4nICsgJ0V4YW1wbGU6XFxuJyArICcgIGNvbnN0IENvbXBvbmVudCA9IHN0eWxlZC5kaXYuYXR0cnMoe1xcbicgKyAnICAgIHN0eWxlOiAoeyBiYWNrZ3JvdW5kIH0pID0+ICh7XFxuJyArICcgICAgICBiYWNrZ3JvdW5kLFxcbicgKyAnICAgIH0pLFxcbicgKyAnICB9KWB3aWR0aDogMTAwJTtgXFxuXFxuJyArICcgIDxDb21wb25lbnQgLz4nKTtcbiAgICAgICAgd2FybmluZ1NlZW4gPSB0cnVlO1xuICAgICAgICBnZW5lcmF0ZWRDbGFzc2VzID0ge307XG4gICAgICB9XG4gICAgfVxuICB9O1xufSk7XG5cbi8vICAgICAgXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKipcbiAqIFRyeWluZyB0byBhdm9pZCB0aGUgdW5rbm93bi1wcm9wIGVycm9ycyBvbiBzdHlsZWQgY29tcG9uZW50cyBieSBmaWx0ZXJpbmcgYnlcbiAqIFJlYWN0J3MgYXR0cmlidXRlIHdoaXRlbGlzdC5cbiAqXG4gKiBUbyByZWdlbmVyYXRlIHRoaXMgcmVnZXg6XG4gKlxuICogMS4gYG5wbSBpIC1nIHJlZ2V4Z2VuYCAoaHR0cHM6Ly9naXRodWIuY29tL2Rldm9uZ292ZXR0L3JlZ2V4Z2VuKVxuICogMi4gUnVuIGByZWdleGdlbmAgd2l0aCB0aGUgbGlzdCBvZiBzcGFjZS1zZXBhcmF0ZWQgd29yZHMgYmVsb3cgYXMgaW5wdXRcbiAqIDMuIFN1cnJvdW5kIHRoZSBlbWl0dGVkIHJlZ2V4IHdpdGggdGhpczogYC9eKEdFTkVSQVRFRF9SRUdFWCkkL2AgLS0gdGhpcyB3aWxsIGVuc3VyZSBhIGZ1bGwgc3RyaW5nIG1hdGNoXG4gKiAgICBhbmQgbm8gZmFsc2UgcG9zaXRpdmVzIGZyb20gcGFydGlhbHNcbiAqKi9cbi8qXG5jaGlsZHJlbiBkYW5nZXJvdXNseVNldElubmVySFRNTCBrZXkgcmVmIGF1dG9Gb2N1cyBkZWZhdWx0VmFsdWUgdmFsdWVMaW5rIGRlZmF1bHRDaGVja2VkIGNoZWNrZWRMaW5rIGlubmVySFRNTCBzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmcgb25Gb2N1c0luIG9uRm9jdXNPdXQgY2xhc3NOYW1lIG9uQ29weSBvbkN1dCBvblBhc3RlIG9uQ29tcG9zaXRpb25FbmQgb25Db21wb3NpdGlvblN0YXJ0IG9uQ29tcG9zaXRpb25VcGRhdGUgb25LZXlEb3duIG9uS2V5UHJlc3Mgb25LZXlVcCBvbkZvY3VzIG9uQmx1ciBvbkNoYW5nZSBvbklucHV0IG9uU3VibWl0IG9uUmVzZXQgb25DbGljayBvbkNvbnRleHRNZW51IG9uRG91YmxlQ2xpY2sgb25EcmFnIG9uRHJhZ0VuZCBvbkRyYWdFbnRlciBvbkRyYWdFeGl0IG9uRHJhZ0xlYXZlIG9uRHJhZ092ZXIgb25EcmFnU3RhcnQgb25Ecm9wIG9uTW91c2VEb3duIG9uTW91c2VFbnRlciBvbk1vdXNlTGVhdmUgb25Nb3VzZU1vdmUgb25Nb3VzZU91dCBvbk1vdXNlT3ZlciBvbk1vdXNlVXAgb25TZWxlY3Qgb25Ub3VjaENhbmNlbCBvblRvdWNoRW5kIG9uVG91Y2hNb3ZlIG9uVG91Y2hTdGFydCBvblNjcm9sbCBvbldoZWVsIG9uQWJvcnQgb25DYW5QbGF5IG9uQ2FuUGxheVRocm91Z2ggb25EdXJhdGlvbkNoYW5nZSBvbkVtcHRpZWQgb25FbmNyeXB0ZWQgb25FbmRlZCBvbkVycm9yIG9uTG9hZGVkRGF0YSBvbkxvYWRlZE1ldGFkYXRhIG9uTG9hZFN0YXJ0IG9uUGF1c2Ugb25QbGF5IG9uUGxheWluZyBvblByb2dyZXNzIG9uUmF0ZUNoYW5nZSBvblNlZWtlZCBvblNlZWtpbmcgb25TdGFsbGVkIG9uU3VzcGVuZCBvblRpbWVVcGRhdGUgb25Wb2x1bWVDaGFuZ2Ugb25XYWl0aW5nIG9uTG9hZCBvbkFuaW1hdGlvblN0YXJ0IG9uQW5pbWF0aW9uRW5kIG9uQW5pbWF0aW9uSXRlcmF0aW9uIG9uVHJhbnNpdGlvbkVuZCBvbkNvcHlDYXB0dXJlIG9uQ3V0Q2FwdHVyZSBvblBhc3RlQ2FwdHVyZSBvbkNvbXBvc2l0aW9uRW5kQ2FwdHVyZSBvbkNvbXBvc2l0aW9uU3RhcnRDYXB0dXJlIG9uQ29tcG9zaXRpb25VcGRhdGVDYXB0dXJlIG9uS2V5RG93bkNhcHR1cmUgb25LZXlQcmVzc0NhcHR1cmUgb25LZXlVcENhcHR1cmUgb25Gb2N1c0NhcHR1cmUgb25CbHVyQ2FwdHVyZSBvbkNoYW5nZUNhcHR1cmUgb25JbnB1dENhcHR1cmUgb25TdWJtaXRDYXB0dXJlIG9uUmVzZXRDYXB0dXJlIG9uQ2xpY2tDYXB0dXJlIG9uQ29udGV4dE1lbnVDYXB0dXJlIG9uRG91YmxlQ2xpY2tDYXB0dXJlIG9uRHJhZ0NhcHR1cmUgb25EcmFnRW5kQ2FwdHVyZSBvbkRyYWdFbnRlckNhcHR1cmUgb25EcmFnRXhpdENhcHR1cmUgb25EcmFnTGVhdmVDYXB0dXJlIG9uRHJhZ092ZXJDYXB0dXJlIG9uRHJhZ1N0YXJ0Q2FwdHVyZSBvbkRyb3BDYXB0dXJlIG9uTW91c2VEb3duQ2FwdHVyZSBvbk1vdXNlRW50ZXJDYXB0dXJlIG9uTW91c2VMZWF2ZUNhcHR1cmUgb25Nb3VzZU1vdmVDYXB0dXJlIG9uTW91c2VPdXRDYXB0dXJlIG9uTW91c2VPdmVyQ2FwdHVyZSBvbk1vdXNlVXBDYXB0dXJlIG9uU2VsZWN0Q2FwdHVyZSBvblRvdWNoQ2FuY2VsQ2FwdHVyZSBvblRvdWNoRW5kQ2FwdHVyZSBvblRvdWNoTW92ZUNhcHR1cmUgb25Ub3VjaFN0YXJ0Q2FwdHVyZSBvblNjcm9sbENhcHR1cmUgb25XaGVlbENhcHR1cmUgb25BYm9ydENhcHR1cmUgb25DYW5QbGF5Q2FwdHVyZSBvbkNhblBsYXlUaHJvdWdoQ2FwdHVyZSBvbkR1cmF0aW9uQ2hhbmdlQ2FwdHVyZSBvbkVtcHRpZWRDYXB0dXJlIG9uRW5jcnlwdGVkQ2FwdHVyZSBvbkVuZGVkQ2FwdHVyZSBvbkVycm9yQ2FwdHVyZSBvbkxvYWRlZERhdGFDYXB0dXJlIG9uTG9hZGVkTWV0YWRhdGFDYXB0dXJlIG9uTG9hZFN0YXJ0Q2FwdHVyZSBvblBhdXNlQ2FwdHVyZSBvblBsYXlDYXB0dXJlIG9uUGxheWluZ0NhcHR1cmUgb25Qcm9ncmVzc0NhcHR1cmUgb25SYXRlQ2hhbmdlQ2FwdHVyZSBvblNlZWtlZENhcHR1cmUgb25TZWVraW5nQ2FwdHVyZSBvblN0YWxsZWRDYXB0dXJlIG9uU3VzcGVuZENhcHR1cmUgb25UaW1lVXBkYXRlQ2FwdHVyZSBvblZvbHVtZUNoYW5nZUNhcHR1cmUgb25XYWl0aW5nQ2FwdHVyZSBvbkxvYWRDYXB0dXJlIG9uQW5pbWF0aW9uU3RhcnRDYXB0dXJlIG9uQW5pbWF0aW9uRW5kQ2FwdHVyZSBvbkFuaW1hdGlvbkl0ZXJhdGlvbkNhcHR1cmUgb25UcmFuc2l0aW9uRW5kQ2FwdHVyZSBhY2NlcHQgYWNjZXB0Q2hhcnNldCBhY2Nlc3NLZXkgYWN0aW9uIGFsbG93RnVsbFNjcmVlbiBhbGxvd1RyYW5zcGFyZW5jeSBhbHQgYXMgYXN5bmMgYXV0b0NvbXBsZXRlIGF1dG9QbGF5IGNhcHR1cmUgY2VsbFBhZGRpbmcgY2VsbFNwYWNpbmcgY2hhclNldCBjaGFsbGVuZ2UgY2hlY2tlZCBjaXRlIGNsYXNzSUQgY2xhc3NOYW1lIGNvbHMgY29sU3BhbiBjb250ZW50IGNvbnRlbnRFZGl0YWJsZSBjb250ZXh0TWVudSBjb250cm9scyBjb29yZHMgY3Jvc3NPcmlnaW4gZGF0YSBkYXRlVGltZSBkZWZhdWx0IGRlZmVyIGRpciBkaXNhYmxlZCBkb3dubG9hZCBkcmFnZ2FibGUgZW5jVHlwZSBmb3JtIGZvcm1BY3Rpb24gZm9ybUVuY1R5cGUgZm9ybU1ldGhvZCBmb3JtTm9WYWxpZGF0ZSBmb3JtVGFyZ2V0IGZyYW1lQm9yZGVyIGhlYWRlcnMgaGVpZ2h0IGhpZGRlbiBoaWdoIGhyZWYgaHJlZkxhbmcgaHRtbEZvciBodHRwRXF1aXYgaWNvbiBpZCBpbnB1dE1vZGUgaW50ZWdyaXR5IGlzIGtleVBhcmFtcyBrZXlUeXBlIGtpbmQgbGFiZWwgbGFuZyBsaXN0IGxvb3AgbG93IG1hbmlmZXN0IG1hcmdpbkhlaWdodCBtYXJnaW5XaWR0aCBtYXggbWF4TGVuZ3RoIG1lZGlhIG1lZGlhR3JvdXAgbWV0aG9kIG1pbiBtaW5MZW5ndGggbXVsdGlwbGUgbXV0ZWQgbmFtZSBub25jZSBub1ZhbGlkYXRlIG9wZW4gb3B0aW11bSBwYXR0ZXJuIHBsYWNlaG9sZGVyIHBsYXlzSW5saW5lIHBvc3RlciBwcmVsb2FkIHByb2ZpbGUgcmFkaW9Hcm91cCByZWFkT25seSByZWZlcnJlclBvbGljeSByZWwgcmVxdWlyZWQgcmV2ZXJzZWQgcm9sZSByb3dzIHJvd1NwYW4gc2FuZGJveCBzY29wZSBzY29wZWQgc2Nyb2xsaW5nIHNlYW1sZXNzIHNlbGVjdGVkIHNoYXBlIHNpemUgc2l6ZXMgc3BhbiBzcGVsbENoZWNrIHNyYyBzcmNEb2Mgc3JjTGFuZyBzcmNTZXQgc3RhcnQgc3RlcCBzdHlsZSBzdW1tYXJ5IHRhYkluZGV4IHRhcmdldCB0aXRsZSB0eXBlIHVzZU1hcCB2YWx1ZSB3aWR0aCB3bW9kZSB3cmFwIGFib3V0IGRhdGF0eXBlIGlubGlzdCBwcmVmaXggcHJvcGVydHkgcmVzb3VyY2UgdHlwZW9mIHZvY2FiIGF1dG9DYXBpdGFsaXplIGF1dG9Db3JyZWN0IGF1dG9TYXZlIGNvbG9yIGl0ZW1Qcm9wIGl0ZW1TY29wZSBpdGVtVHlwZSBpdGVtSUQgaXRlbVJlZiByZXN1bHRzIHNlY3VyaXR5IHVuc2VsZWN0YWJsZSBhY2NlbnRIZWlnaHQgYWNjdW11bGF0ZSBhZGRpdGl2ZSBhbGlnbm1lbnRCYXNlbGluZSBhbGxvd1Jlb3JkZXIgYWxwaGFiZXRpYyBhbXBsaXR1ZGUgYXJhYmljRm9ybSBhc2NlbnQgYXR0cmlidXRlTmFtZSBhdHRyaWJ1dGVUeXBlIGF1dG9SZXZlcnNlIGF6aW11dGggYmFzZUZyZXF1ZW5jeSBiYXNlUHJvZmlsZSBiYXNlbGluZVNoaWZ0IGJib3ggYmVnaW4gYmlhcyBieSBjYWxjTW9kZSBjYXBIZWlnaHQgY2xpcCBjbGlwUGF0aCBjbGlwUnVsZSBjbGlwUGF0aFVuaXRzIGNvbG9ySW50ZXJwb2xhdGlvbiBjb2xvckludGVycG9sYXRpb25GaWx0ZXJzIGNvbG9yUHJvZmlsZSBjb2xvclJlbmRlcmluZyBjb250ZW50U2NyaXB0VHlwZSBjb250ZW50U3R5bGVUeXBlIGN1cnNvciBjeCBjeSBkIGRlY2VsZXJhdGUgZGVzY2VudCBkaWZmdXNlQ29uc3RhbnQgZGlyZWN0aW9uIGRpc3BsYXkgZGl2aXNvciBkb21pbmFudEJhc2VsaW5lIGR1ciBkeCBkeSBlZGdlTW9kZSBlbGV2YXRpb24gZW5hYmxlQmFja2dyb3VuZCBlbmQgZXhwb25lbnQgZXh0ZXJuYWxSZXNvdXJjZXNSZXF1aXJlZCBmaWxsIGZpbGxPcGFjaXR5IGZpbGxSdWxlIGZpbHRlciBmaWx0ZXJSZXMgZmlsdGVyVW5pdHMgZmxvb2RDb2xvciBmbG9vZE9wYWNpdHkgZm9jdXNhYmxlIGZvbnRGYW1pbHkgZm9udFNpemUgZm9udFNpemVBZGp1c3QgZm9udFN0cmV0Y2ggZm9udFN0eWxlIGZvbnRWYXJpYW50IGZvbnRXZWlnaHQgZm9ybWF0IGZyb20gZnggZnkgZzEgZzIgZ2x5cGhOYW1lIGdseXBoT3JpZW50YXRpb25Ib3Jpem9udGFsIGdseXBoT3JpZW50YXRpb25WZXJ0aWNhbCBnbHlwaFJlZiBncmFkaWVudFRyYW5zZm9ybSBncmFkaWVudFVuaXRzIGhhbmdpbmcgaG9yaXpBZHZYIGhvcml6T3JpZ2luWCBpZGVvZ3JhcGhpYyBpbWFnZVJlbmRlcmluZyBpbiBpbjIgaW50ZXJjZXB0IGsgazEgazIgazMgazQga2VybmVsTWF0cml4IGtlcm5lbFVuaXRMZW5ndGgga2VybmluZyBrZXlQb2ludHMga2V5U3BsaW5lcyBrZXlUaW1lcyBsZW5ndGhBZGp1c3QgbGV0dGVyU3BhY2luZyBsaWdodGluZ0NvbG9yIGxpbWl0aW5nQ29uZUFuZ2xlIGxvY2FsIG1hcmtlckVuZCBtYXJrZXJNaWQgbWFya2VyU3RhcnQgbWFya2VySGVpZ2h0IG1hcmtlclVuaXRzIG1hcmtlcldpZHRoIG1hc2sgbWFza0NvbnRlbnRVbml0cyBtYXNrVW5pdHMgbWF0aGVtYXRpY2FsIG1vZGUgbnVtT2N0YXZlcyBvZmZzZXQgb3BhY2l0eSBvcGVyYXRvciBvcmRlciBvcmllbnQgb3JpZW50YXRpb24gb3JpZ2luIG92ZXJmbG93IG92ZXJsaW5lUG9zaXRpb24gb3ZlcmxpbmVUaGlja25lc3MgcGFpbnRPcmRlciBwYW5vc2UxIHBhdGhMZW5ndGggcGF0dGVybkNvbnRlbnRVbml0cyBwYXR0ZXJuVHJhbnNmb3JtIHBhdHRlcm5Vbml0cyBwb2ludGVyRXZlbnRzIHBvaW50cyBwb2ludHNBdFggcG9pbnRzQXRZIHBvaW50c0F0WiBwcmVzZXJ2ZUFscGhhIHByZXNlcnZlQXNwZWN0UmF0aW8gcHJpbWl0aXZlVW5pdHMgciByYWRpdXMgcmVmWCByZWZZIHJlbmRlcmluZ0ludGVudCByZXBlYXRDb3VudCByZXBlYXREdXIgcmVxdWlyZWRFeHRlbnNpb25zIHJlcXVpcmVkRmVhdHVyZXMgcmVzdGFydCByZXN1bHQgcm90YXRlIHJ4IHJ5IHNjYWxlIHNlZWQgc2hhcGVSZW5kZXJpbmcgc2xvcGUgc3BhY2luZyBzcGVjdWxhckNvbnN0YW50IHNwZWN1bGFyRXhwb25lbnQgc3BlZWQgc3ByZWFkTWV0aG9kIHN0YXJ0T2Zmc2V0IHN0ZERldmlhdGlvbiBzdGVtaCBzdGVtdiBzdGl0Y2hUaWxlcyBzdG9wQ29sb3Igc3RvcE9wYWNpdHkgc3RyaWtldGhyb3VnaFBvc2l0aW9uIHN0cmlrZXRocm91Z2hUaGlja25lc3Mgc3RyaW5nIHN0cm9rZSBzdHJva2VEYXNoYXJyYXkgc3Ryb2tlRGFzaG9mZnNldCBzdHJva2VMaW5lY2FwIHN0cm9rZUxpbmVqb2luIHN0cm9rZU1pdGVybGltaXQgc3Ryb2tlT3BhY2l0eSBzdHJva2VXaWR0aCBzdXJmYWNlU2NhbGUgc3lzdGVtTGFuZ3VhZ2UgdGFibGVWYWx1ZXMgdGFyZ2V0WCB0YXJnZXRZIHRleHRBbmNob3IgdGV4dERlY29yYXRpb24gdGV4dFJlbmRlcmluZyB0ZXh0TGVuZ3RoIHRvIHRyYW5zZm9ybSB1MSB1MiB1bmRlcmxpbmVQb3NpdGlvbiB1bmRlcmxpbmVUaGlja25lc3MgdW5pY29kZSB1bmljb2RlQmlkaSB1bmljb2RlUmFuZ2UgdW5pdHNQZXJFbSB2QWxwaGFiZXRpYyB2SGFuZ2luZyB2SWRlb2dyYXBoaWMgdk1hdGhlbWF0aWNhbCB2YWx1ZXMgdmVjdG9yRWZmZWN0IHZlcnNpb24gdmVydEFkdlkgdmVydE9yaWdpblggdmVydE9yaWdpblkgdmlld0JveCB2aWV3VGFyZ2V0IHZpc2liaWxpdHkgd2lkdGhzIHdvcmRTcGFjaW5nIHdyaXRpbmdNb2RlIHggeEhlaWdodCB4MSB4MiB4Q2hhbm5lbFNlbGVjdG9yIHhsaW5rQWN0dWF0ZSB4bGlua0FyY3JvbGUgeGxpbmtIcmVmIHhsaW5rUm9sZSB4bGlua1Nob3cgeGxpbmtUaXRsZSB4bGlua1R5cGUgeG1sQmFzZSB4bWxucyB4bWxuc1hsaW5rIHhtbExhbmcgeG1sU3BhY2UgeSB5MSB5MiB5Q2hhbm5lbFNlbGVjdG9yIHogem9vbUFuZFBhblxuKi9cbi8qIGVzbGludC1lbmFibGUgbWF4LWxlbiAqL1xuXG52YXIgQVRUUklCVVRFX1JFR0VYID0gL14oKD86cyg/OnVwcHJlc3NDb250ZW50RWRpdGFibGVXYXJufGNyb2xsfHBhYyl8KD86c2hhcGV8aW1hZ2V8dGV4dClSZW5kZXJ8KD86bGV0dGVyfHdvcmQpU3BhY3x2SGFuZ3xoYW5nKWluZ3woPzpvbig/OkFuaW1hdGlvbkl0ZXJhdGlvbnxDKD86byg/Om1wb3NpdGlvbig/OlVwZGF0ZXxTdGFydHxFbmQpfG50ZXh0TWVudXxweSl8YW5QbGF5VGhyb3VnaHxhblBsYXl8aGFuZ2V8bGlja3x1dCl8KD86KD86RHVyYXRpb258Vm9sdW1lfFJhdGUpQ2hhbmd8KD86TW91c2VMZWF8KD86VG91Y2h8TW91c2UpTW98RHJhZ0xlYSl2fFBhdXMpZXxMb2FkZWQoPzpNZXRhZHxEKWF0YXwoPzpBbmltYXRpb258VG91Y2h8TG9hZHxEcmFnKVN0YXJ0fCg/Oig/OlQoPzpyYW5zaXRpb258b3VjaCl8QW5pbWF0aW9uKUV8U3VzcGUpbmR8RG91YmxlQ2xpY2t8KD86VG91Y2hDYW5jfFdoZSllbHwoPzpNb3VzZSg/OkVudHxPdillfERyYWcoPzpFbnR8T3YpZXxFcnJvKXJ8VGltZVVwZGF0ZXwoPzpFKD86big/OmNyeXB0fGQpfG1wdGkpfFMoPzp0YWxsfGVlaykpZWR8TW91c2VEb3dufFAoPzpyb2dyZXNzfGxheWluZyl8KD86TW91c2VPdXxEcmFnRXhpfFMoPzplbGVjfHVibWkpfFJlc2V8SW5wdSl0fEtleVByZXNzfERyYWdFbmR8S2V5KD86RG93bnxVcCl8KD86V2FpdHxTZWVrKWluZ3woPzpNb3VzZVV8RHJvKXB8U2Nyb2xsfFBhc3RlfEZvY3VzfEFib3J0fERyYWd8UGxheXxMb2FkfEJsdXIpQ2FwdHVyfGFsaWdubWVudEJhc2VsaW58KD86bGltaXRpbmdDb25lQW5nfHhsaW5rKD86KD86QXJjcnxSKW98VGl0KXxzKD86dXJmYWNlU2NhfHR5fGNhKXx1bnNlbGVjdGFifGJhc2VQcm9maXxmb250U3R5fCg/OmZvY3VzfGRyYWdnKWFifG11bHRpcHxwcm9maXx0aXQpbHxkKD86b21pbmFudEJhc2VsaW58ZWZhdWx0VmFsdSl8YSg/OnV0byg/OkNhcGl0YWxpenxSZXZlcnN8U2F2KXxkZGl0aXYpfCg/Oig/OmZvcm1Ob1ZhbGlkfHhsaW5rQWN0dXxub1ZhbGlkfGFjY3VtdWx8cm90KWF8YXV0b0NvbXBsZXxkZWNlbGVyYSl0fCg/Oig/OmF0dHJpYnV0ZXxpdGVtKVR8ZGF0YXQpeXB8KD86YXR0cmlidXRlfGdseXBoKU5hbXxwbGF5c0lubGlufCg/OmZvcm1FfGUpbmNUeXB8KD86d3JpdGluZ3xpbnB1dHxlZGdlKU1vZHwoPzp4bGlua1R5fGl0ZW1TY298a2V5VHl8c2xvKXB8KD86YW1wbGl0dXxtbylkfCg/OnhtbFNwYXxub24pY3xmaWxsUnVsfCg/OmRhdGVUaXxuYSltfHIoPzplc291cmN8b2wpfHhtbEJhc3x3bW9kKWV8KD86Z2x5cGhPcmllbnRhdGlvbkhvcml6b250fGxvYylhbHwoPzpleHRlcm5hbFJlc291cmNlc1JlcXVpcnxzZWxlY3R8cmV2ZXJzfG11dCllZHxjKD86byg/OmxvckludGVycG9sYXRpb25GaWx0ZXJ8bnRyb2x8b3JkKXN8byg/Omxvcig/OkludGVycG9sYXRpb24pP3xudGVudCl8KD86b250ZW50Uyg/OmNyaXB0fHR5bGUpVHlwfG8oPzpudGVudEVkaXRhYnxsb3JQcm9maSlsfGwoPzphc3NOYW18aXBSdWwpfGEoPzpsY01vZHxwdHVyKXxpdCllfG9sb3JSZW5kZXJpbmd8bCg/OmlwUGF0aFVuaXRzfGFzc0lEKXxvKD86bnRleHRNZW51fGxzKXxoKD86ZWNrZWRMaW5rfGEoPzpsbGVuZ2V8clNldCl8aWxkcmVufGVja2VkKXxlbGwoPzpTcGFjfFBhZGQpaW5nfCg/OnJvc3NPcmlnaXxvbFNwYSlufGFwSGVpZ2h0fGxpcCg/OlBhdGgpP3x1cnNvcnxbeHldKXxnbHlwaE9yaWVudGF0aW9uVmVydGljYWx8ZCg/OmFuZ2Vyb3VzbHlTZXRJbm5lckhUTUx8ZWZhdWx0Q2hlY2tlZHxvd25sb2FkfGlzYWJsZWR8aXNwbGF5fFt4eV0pfCg/OnMoPzp0cmlrZXRocm91Z2hUaGlja258ZWFtbCllc3woPzp1bmR8b3YpZXJsaW5lVGhpY2tuZXN8cig/OmVxdWlyZWRFeHRlbnNpb258YWRpdSl8KD86cmVxdWlyZWRGZWF0dXJ8dGFibGVWYWx1fHN0aXRjaFRpbHxudW1PY3RhdnxmaWx0ZXJSKWV8a2V5KD86KD86U3BsaW58VGltKWV8UGFyYW0pfGF1dG9Gb2N1fGhlYWRlcnxiaWEpc3woPzooPzpzdCg/OnJpa2V0aHJvdWdoUG9zaXxkRGV2aWEpfCg/OnVuZHxvdillcmxpbmVQb3NpfCg/OnRleHREZWNvcnxlbGV2KWF8b3JpZW50YSl0aW98KD86c3Ryb2tlTGluZWpvfG9yaWcpaXxmb3JtQWN0aW98em9vbUFuZFBhfG9uRm9jdXNJfGRpcmVjdGlvfCg/OnZlcnN8YWN0KWlvfHJvd1NwYXxiZWdpfGljbylufG8oPzpuKD86QW5pbWF0aW9uSXRlcmF0aW9ufEMoPzpvKD86bXBvc2l0aW9uKD86VXBkYXRlfFN0YXJ0fEVuZCl8bnRleHRNZW51fHB5KXxhblBsYXlUaHJvdWdofGFuUGxheXxoYW5nZXxsaWNrfHV0KXwoPzooPzpEdXJhdGlvbnxWb2x1bWV8UmF0ZSlDaGFuZ3woPzpNb3VzZUxlYXwoPzpUb3VjaHxNb3VzZSlNb3xEcmFnTGVhKXZ8UGF1cyllfExvYWRlZCg/Ok1ldGFkfEQpYXRhfCg/OkFuaW1hdGlvbnxUb3VjaHxMb2FkfERyYWcpU3RhcnR8KD86KD86VCg/OnJhbnNpdGlvbnxvdWNoKXxBbmltYXRpb24pRXxTdXNwZSluZHxEb3VibGVDbGlja3woPzpUb3VjaENhbmN8V2hlKWVsfCg/Ok1vdXNlKD86RW50fE92KWV8RHJhZyg/OkVudHxPdillfEVycm8pcnxUaW1lVXBkYXRlfCg/OkUoPzpuKD86Y3J5cHR8ZCl8bXB0aSl8Uyg/OnRhbGx8ZWVrKSllZHxNb3VzZURvd258UCg/OnJvZ3Jlc3N8bGF5aW5nKXwoPzpNb3VzZU91fERyYWdFeGl8Uyg/OmVsZWN8dWJtaSl8UmVzZXxJbnB1KXR8S2V5UHJlc3N8RHJhZ0VuZHxLZXkoPzpEb3dufFVwKXwoPzpXYWl0fFNlZWspaW5nfCg/Ok1vdXNlVXxEcm8pcHxTY3JvbGx8UGFzdGV8Rm9jdXN8QWJvcnR8RHJhZ3xQbGF5fExvYWR8Qmx1cil8cmllbnQpfHAoPzpyZXNlcnZlQSg/OnNwZWN0UmF0aW98bHBoYSl8b2ludHNBdFtYLVpdfGFub3NlMSl8KD86cGF0dGVybkNvbnRlbnR8bWEoPzpzayg/OkNvbnRlbnQpP3xya2VyKXxwcmltaXRpdmV8Z3JhZGllbnR8cGF0dGVybnxmaWx0ZXIpVW5pdHN8KD86Z3JhZGllbnRUfHBhdHRlcm5UfHQpcmFuc2Zvcm18KD86KD86YWxsb3dUcmFuc3BhcnxiYXNlRnJlcXUpZW5jfHJlKD86ZmVycmVyUG9saWN8YWRPbmwpfCg/Oig/OnN0KD86cm9rZXxvcClPfGZsb29kT3xmaWxsT3xvKXBhY3xpbnRlZ3J8c2VjdXIpaXR8dmlzaWJpbGl0fGZvbnRGYW1pbHxhY2Nlc3NLZXxwcm9wZXJ0fHN1bW1hcil5fCg/OnN0cm9rZU1pdGVybGltaXwoPzpzcGVjdWxhckNvbnN0YXxyZXBlYXRDb3V8Zm9udFZhcmlhKW58KD86KD86c3BlY3VsYXJFfGUpeHBvbnxyZW5kZXJpbmdJbnR8YXNjKWVufGQoPzppZmZ1c2VDb25zdGF8ZXNjZSlufCg/OmZvbnRTaXplQWRqdXxsZW5ndGhBZGp1fG1hbmlmZSlzfGJhc2VsaW5lU2hpZnx2ZWN0b3JFZmZlY3woPzooPzptYXIoPzprZXJ8Z2luKXx4KUh8YWNjZW50SHxmb250VyllaWdofGEoPzp1dG9Db3JyZWN8Ym91KXxtYXJrZXJTdGFyfG9uRm9jdXNPdXxpbig/OnRlcmNlcHxsaXMpfHJlc3Rhcnxmb3JtYXxoZWlnaHxsaXMpdHwoPzooPzpzdCg/OnJva2VEYXNob3xhcnRPKXxvKWZmc3xhY2NlcHRDaGFyc3xmb3JtVGFyZ3x2aWV3VGFyZ3xzcmNTKWV0fCg/Oig/OmVuYWJsZUJhY2tncm91fG1hcmtlckUpbnxzKD86cCg/OnJlYWRNZXRob3xlZSl8ZWUpfGZvcm1NZXRob3xtKD86YXJrZXJNaXxldGhvKXxwcmVsb2F8a2luKWR8ayg/OmVybmVsKD86VW5pdExlbmd0aHxNYXRyaXgpfFsxLTRdKXwoPzpbeHldQ2hhbm5lbFNlbGVjdHxsaWdodGluZ0NvbHx0ZXh0QW5jaHxmbG9vZENvbHxzdG9wQ29sfG9wZXJhdHxodG1sRilvcnwoPzphbGxvd0Z1bGxTY3JlfGhpZGQpZW58c3Ryb2tlRGFzaGFycmF5fHN5c3RlbUxhbmd1YWdlfCg/OnN0cm9rZUxpbmVjYXxpdGVtUHJvfHVzZU1hfHdyYXxsb28pcHx2KD86TWF0aGVtYXRpY2FsfGVydCg/Ok9yaWdpbltYWV18QWR2WSl8YWx1ZXN8b2NhYil8KD86cG9pbnRlckV2ZXxrZXlQb2kpbnRzfHVuaWNvZGVSYW5nZXwoPzooPzphbGxvd1Jlb3JkfHBsYWNlaG9sZHxmcmFtZUJvcmR8cGFpbnRPcmR8cG9zdHxvcmQpZXxyZXBlYXREdXxkKD86ZWZlfHUpKXJ8bWF0aGVtYXRpY2FsfCg/OnZJfGkpZGVvZ3JhcGhpY3xoKD86b3Jpeig/Ok9yaWdpbnxBZHYpWHx0dHBFcXVpdil8dSg/Om5pY29kZUJpZGl8WzEyXSl8KD86Zm9udFN0cmV0Y3xoaWcpaHwoPzooPzptYXIoPzprZXJ8Z2luKVd8c3Ryb2tlVylpZHxhemltdSl0aHx2QWxwaGFiZXRpY3xtZWRpYUdyb3VwfHNwZWxsQ2hlY2t8KD86dW5pdHNQZXJFfG9wdGltdXxmcm8pbXxyKD86YWRpb0dyb3VwfGUoPzpzdWx0c3xmW1hZXXxsKXxvd3N8W3h5XSl8KD86eG1sbnNYbHx2YWx1ZUwpaW5rfGEoPzpyYWJpY0Zvcm18bCg/OnBoYWJldGljfHQpfHN5bmMpfHBhdGhMZW5ndGh8KD86dGV4dHxtKD86aW58YXgpKUxlbmd0aHxpbm5lckhUTUx8eGxpbmtTaG93fCg/OnhsaW5rSHJ8Z2x5cGhSKWVmfHIoPzplKD86cXVpcmVkfHN1bHR8ZikpP3xvKD86dmVyZmxvd3xwZW4pfCg/OnRhYkluZGV8KD86c2FuZHxiKWJvfHZpZXdCbyl4fCg/Oig/OmhyZWZ8eG1sfHNyYylMYXxrZXJuaSluZ3xmKD86byg/Om50U2l6ZXxybSl8aWwoPzp0ZXJ8bCkpfGF1dG9QbGF5fHVuaWNvZGV8cCg/OmF0dGVybnxvaW50cyl8dCg/OmFyZ2V0W1hZXXxvKXxpKD86dGVtUmVmfG4yfHMpfGRpdmlzb3J8ZCg/OmVmYXVsdHxhdGF8aXIpP3xzcmNEb2N8cyg/OmNvcGVkfHRlKD86bVtodl18cCl8cGFuKXwoPzp3aWR0aHxzaXplKXN8KD86c3RyaXxsYSluZ3xwcmVmaXh8aXRlbUlEfHMoPzp0KD86cm9rZXxhcnQpfGhhcGV8Y29wZXxyYyl8YSg/OmNjZXB0fHMpfHQoPzphcmdldHx5cGUpfHR5cGVvZnx3aWR0aHx2YWx1ZXx4KD86bWxucyk/fGxhYmVsfG0oPzplZGlhfGEoPzpza3x4KXxpbil8c2l6ZXxocmVmfGsoPzpleSk/fGVuZHxsb3d8eFsxMl18aVtkbl18eVsxMl18Z1sxMl18Ynl8Zlt4eV18W3l6XSkkLztcblxuLyogRnJvbSBET01Qcm9wZXJ0eSAqL1xudmFyIEFUVFJJQlVURV9OQU1FX1NUQVJUX0NIQVIgPSAnOkEtWl9hLXpcXFxcdTAwQzAtXFxcXHUwMEQ2XFxcXHUwMEQ4LVxcXFx1MDBGNlxcXFx1MDBGOC1cXFxcdTAyRkZcXFxcdTAzNzAtXFxcXHUwMzdEXFxcXHUwMzdGLVxcXFx1MUZGRlxcXFx1MjAwQy1cXFxcdTIwMERcXFxcdTIwNzAtXFxcXHUyMThGXFxcXHUyQzAwLVxcXFx1MkZFRlxcXFx1MzAwMS1cXFxcdUQ3RkZcXFxcdUY5MDAtXFxcXHVGRENGXFxcXHVGREYwLVxcXFx1RkZGRCc7XG52YXIgQVRUUklCVVRFX05BTUVfQ0hBUiA9IEFUVFJJQlVURV9OQU1FX1NUQVJUX0NIQVIgKyAnXFxcXC0uMC05XFxcXHUwMEI3XFxcXHUwMzAwLVxcXFx1MDM2RlxcXFx1MjAzRi1cXFxcdTIwNDAnO1xudmFyIGlzQ3VzdG9tQXR0cmlidXRlID0gUmVnRXhwLnByb3RvdHlwZS50ZXN0LmJpbmQobmV3IFJlZ0V4cCgnXihkYXRhfGFyaWEpLVsnICsgQVRUUklCVVRFX05BTUVfQ0hBUiArICddKiQnKSk7XG5cbnZhciB2YWxpZEF0dHIgPSAoZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIEFUVFJJQlVURV9SRUdFWC50ZXN0KG5hbWUpIHx8IGlzQ3VzdG9tQXR0cmlidXRlKG5hbWUudG9Mb3dlckNhc2UoKSk7XG59KTtcblxuLy8gICAgICBcblxuXG5mdW5jdGlvbiBpc1RhZyh0YXJnZXQpIC8qIDogJWNoZWNrcyAqL3tcbiAgcmV0dXJuIHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnO1xufVxuXG4vLyAgICAgIFxuXG5cbmZ1bmN0aW9uIGlzU3R5bGVkQ29tcG9uZW50KHRhcmdldCkgLyogOiAlY2hlY2tzICove1xuICByZXR1cm4gdHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdGFyZ2V0LnN0eWxlZENvbXBvbmVudElkID09PSAnc3RyaW5nJztcbn1cblxuLy8gICAgICBcblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUodGFyZ2V0KSB7XG4gIHJldHVybiB0YXJnZXQuZGlzcGxheU5hbWUgfHwgdGFyZ2V0Lm5hbWUgfHwgJ0NvbXBvbmVudCc7XG59XG5cbi8vICAgICAgXG5cblxudmFyIGRldGVybWluZVRoZW1lID0gKGZ1bmN0aW9uIChwcm9wcywgZmFsbGJhY2tUaGVtZSwgZGVmYXVsdFByb3BzKSB7XG4gIC8vIFByb3BzIHNob3VsZCB0YWtlIHByZWNlZGVuY2Ugb3ZlciBUaGVtZVByb3ZpZGVyLCB3aGljaCBzaG91bGQgdGFrZSBwcmVjZWRlbmNlIG92ZXJcbiAgLy8gZGVmYXVsdFByb3BzLCBidXQgUmVhY3QgYXV0b21hdGljYWxseSBwdXRzIGRlZmF1bHRQcm9wcyBvbiBwcm9wcy5cblxuICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXG4gIHZhciBpc0RlZmF1bHRUaGVtZSA9IGRlZmF1bHRQcm9wcyAmJiBwcm9wcy50aGVtZSA9PT0gZGVmYXVsdFByb3BzLnRoZW1lO1xuICB2YXIgdGhlbWUgPSBwcm9wcy50aGVtZSAmJiAhaXNEZWZhdWx0VGhlbWUgPyBwcm9wcy50aGVtZSA6IGZhbGxiYWNrVGhlbWU7XG4gIC8qIGVzbGludC1lbmFibGUgKi9cblxuICByZXR1cm4gdGhlbWU7XG59KTtcblxuLy8gICAgICBcbnZhciBlc2NhcGVSZWdleCA9IC9bW1xcXS4jKiQ+PCt+PXxeOigpLFwiJ2AtXSsvZztcbnZhciBkYXNoZXNBdEVuZHMgPSAvKF4tfC0kKS9nO1xuXG4vKipcbiAqIFRPRE86IEV4cGxvcmUgdXNpbmcgQ1NTLmVzY2FwZSB3aGVuIGl0IGJlY29tZXMgbW9yZSBhdmFpbGFibGVcbiAqIGluIGV2ZXJncmVlbiBicm93c2Vycy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlKHN0cikge1xuICByZXR1cm4gc3RyXG4gIC8vIFJlcGxhY2UgYWxsIHBvc3NpYmxlIENTUyBzZWxlY3RvcnNcbiAgLnJlcGxhY2UoZXNjYXBlUmVnZXgsICctJylcblxuICAvLyBSZW1vdmUgZXh0cmFuZW91cyBoeXBoZW5zIGF0IHRoZSBzdGFydCBhbmQgZW5kXG4gIC5yZXBsYWNlKGRhc2hlc0F0RW5kcywgJycpO1xufVxuXG4vLyAgICAgIFxuLyoqXG4gKiBDcmVhdGVzIGEgYnJvYWRjYXN0IHRoYXQgY2FuIGJlIGxpc3RlbmVkIHRvLCBpLmUuIHNpbXBsZSBldmVudCBlbWl0dGVyXG4gKlxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vUmVhY3RUcmFpbmluZy9yZWFjdC1icm9hZGNhc3RcbiAqL1xuXG52YXIgY3JlYXRlQnJvYWRjYXN0ID0gZnVuY3Rpb24gY3JlYXRlQnJvYWRjYXN0KGluaXRpYWxTdGF0ZSkge1xuICB2YXIgbGlzdGVuZXJzID0ge307XG4gIHZhciBpZCA9IDA7XG4gIHZhciBzdGF0ZSA9IGluaXRpYWxTdGF0ZTtcblxuICBmdW5jdGlvbiBwdWJsaXNoKG5leHRTdGF0ZSkge1xuICAgIHN0YXRlID0gbmV4dFN0YXRlO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGd1YXJkLWZvci1pbiwgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICBmb3IgKHZhciBrZXkgaW4gbGlzdGVuZXJzKSB7XG4gICAgICB2YXIgbGlzdGVuZXIgPSBsaXN0ZW5lcnNba2V5XTtcbiAgICAgIGlmIChsaXN0ZW5lciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgbGlzdGVuZXIoc3RhdGUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHN1YnNjcmliZShsaXN0ZW5lcikge1xuICAgIHZhciBjdXJyZW50SWQgPSBpZDtcbiAgICBsaXN0ZW5lcnNbY3VycmVudElkXSA9IGxpc3RlbmVyO1xuICAgIGlkICs9IDE7XG4gICAgbGlzdGVuZXIoc3RhdGUpO1xuICAgIHJldHVybiBjdXJyZW50SWQ7XG4gIH1cblxuICBmdW5jdGlvbiB1bnN1YnNjcmliZSh1bnN1YklEKSB7XG4gICAgbGlzdGVuZXJzW3Vuc3ViSURdID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcmV0dXJuIHsgcHVibGlzaDogcHVibGlzaCwgc3Vic2NyaWJlOiBzdWJzY3JpYmUsIHVuc3Vic2NyaWJlOiB1bnN1YnNjcmliZSB9O1xufTtcblxuLy8gICAgICBcbi8vIEhlbHBlciB0byBjYWxsIGEgZ2l2ZW4gZnVuY3Rpb24sIG9ubHkgb25jZVxudmFyIG9uY2UgPSAoZnVuY3Rpb24gKGNiKSB7XG4gIHZhciBjYWxsZWQgPSBmYWxzZTtcblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmICghY2FsbGVkKSB7XG4gICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgY2IoKTtcbiAgICB9XG4gIH07XG59KTtcblxudmFyIF9UaGVtZVByb3ZpZGVyJGNoaWxkQztcbnZhciBfVGhlbWVQcm92aWRlciRjb250ZXg7XG5cbi8vICAgICAgXG4vKiBnbG9iYWxzIFJlYWN0JEVsZW1lbnQgKi9cbi8vIE5PVEU6IERPIE5PVCBDSEFOR0UsIGNoYW5naW5nIHRoaXMgaXMgYSBzZW12ZXIgbWFqb3IgY2hhbmdlIVxudmFyIENIQU5ORUwgPSAnX19zdHlsZWQtY29tcG9uZW50c19fJztcbnZhciBDSEFOTkVMX05FWFQgPSBDSEFOTkVMICsgJ25leHRfXyc7XG5cbnZhciBDT05URVhUX0NIQU5ORUxfU0hBUEUgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICBnZXRUaGVtZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHN1YnNjcmliZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHVuc3Vic2NyaWJlOiBQcm9wVHlwZXMuZnVuY1xufSk7XG5cbnZhciB3YXJuQ2hhbm5lbERlcHJlY2F0ZWQgPSB2b2lkIDA7XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB3YXJuQ2hhbm5lbERlcHJlY2F0ZWQgPSBvbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUuZXJyb3IoJ1dhcm5pbmc6IFVzYWdlIG9mIGBjb250ZXh0LicgKyBDSEFOTkVMICsgJ2AgYXMgYSBmdW5jdGlvbiBpcyBkZXByZWNhdGVkLiBJdCB3aWxsIGJlIHJlcGxhY2VkIHdpdGggdGhlIG9iamVjdCBvbiBgLmNvbnRleHQuJyArIENIQU5ORUxfTkVYVCArICdgIGluIGEgZnV0dXJlIHZlcnNpb24uJyk7XG4gIH0pO1xufVxuXG52YXIgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIGlzRnVuY3Rpb24odGVzdCkge1xuICByZXR1cm4gdHlwZW9mIHRlc3QgPT09ICdmdW5jdGlvbic7XG59O1xuXG4vKipcbiAqIFByb3ZpZGUgYSB0aGVtZSB0byBhbiBlbnRpcmUgcmVhY3QgY29tcG9uZW50IHRyZWUgdmlhIGNvbnRleHQgYW5kIGV2ZW50IGxpc3RlbmVycyAoaGF2ZSB0byBkb1xuICogYm90aCBjb250ZXh0IGFuZCBldmVudCBlbWl0dGVyIGFzIHB1cmUgY29tcG9uZW50cyBibG9jayBjb250ZXh0IHVwZGF0ZXMpXG4gKi9cblxudmFyIFRoZW1lUHJvdmlkZXIgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBpbmhlcml0cyhUaGVtZVByb3ZpZGVyLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBUaGVtZVByb3ZpZGVyKCkge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFRoZW1lUHJvdmlkZXIpO1xuXG4gICAgdmFyIF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQ29tcG9uZW50LmNhbGwodGhpcykpO1xuXG4gICAgX3RoaXMudW5zdWJzY3JpYmVUb091dGVySWQgPSAtMTtcblxuICAgIF90aGlzLmdldFRoZW1lID0gX3RoaXMuZ2V0VGhlbWUuYmluZChfdGhpcyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgVGhlbWVQcm92aWRlci5wcm90b3R5cGUuY29tcG9uZW50V2lsbE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgLy8gSWYgdGhlcmUgaXMgYSBUaGVtZVByb3ZpZGVyIHdyYXBwZXIgYW55d2hlcmUgYXJvdW5kIHRoaXMgdGhlbWUgcHJvdmlkZXIsIG1lcmdlIHRoaXMgdGhlbWVcbiAgICAvLyB3aXRoIHRoZSBvdXRlciB0aGVtZVxuICAgIHZhciBvdXRlckNvbnRleHQgPSB0aGlzLmNvbnRleHRbQ0hBTk5FTF9ORVhUXTtcbiAgICBpZiAob3V0ZXJDb250ZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmVUb091dGVySWQgPSBvdXRlckNvbnRleHQuc3Vic2NyaWJlKGZ1bmN0aW9uICh0aGVtZSkge1xuICAgICAgICBfdGhpczIub3V0ZXJUaGVtZSA9IHRoZW1lO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuYnJvYWRjYXN0ID0gY3JlYXRlQnJvYWRjYXN0KHRoaXMuZ2V0VGhlbWUoKSk7XG4gIH07XG5cbiAgVGhlbWVQcm92aWRlci5wcm90b3R5cGUuZ2V0Q2hpbGRDb250ZXh0ID0gZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzLFxuICAgICAgICBfYmFiZWxIZWxwZXJzJGV4dGVuZHM7XG5cbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIHRoaXMuY29udGV4dCwgKF9iYWJlbEhlbHBlcnMkZXh0ZW5kcyA9IHt9LCBfYmFiZWxIZWxwZXJzJGV4dGVuZHNbQ0hBTk5FTF9ORVhUXSA9IHtcbiAgICAgIGdldFRoZW1lOiB0aGlzLmdldFRoZW1lLFxuICAgICAgc3Vic2NyaWJlOiB0aGlzLmJyb2FkY2FzdC5zdWJzY3JpYmUsXG4gICAgICB1bnN1YnNjcmliZTogdGhpcy5icm9hZGNhc3QudW5zdWJzY3JpYmVcbiAgICB9LCBfYmFiZWxIZWxwZXJzJGV4dGVuZHNbQ0hBTk5FTF0gPSBmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgd2FybkNoYW5uZWxEZXByZWNhdGVkKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFBhdGNoIHRoZSBvbGQgYHN1YnNjcmliZWAgcHJvdmlkZSB2aWEgYENIQU5ORUxgIGZvciBvbGRlciBjbGllbnRzLlxuICAgICAgdmFyIHVuc3Vic2NyaWJlSWQgPSBfdGhpczMuYnJvYWRjYXN0LnN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpczMuYnJvYWRjYXN0LnVuc3Vic2NyaWJlKHVuc3Vic2NyaWJlSWQpO1xuICAgICAgfTtcbiAgICB9LCBfYmFiZWxIZWxwZXJzJGV4dGVuZHMpKTtcbiAgfTtcblxuICBUaGVtZVByb3ZpZGVyLnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAodGhpcy5wcm9wcy50aGVtZSAhPT0gbmV4dFByb3BzLnRoZW1lKSB7XG4gICAgICB0aGlzLmJyb2FkY2FzdC5wdWJsaXNoKHRoaXMuZ2V0VGhlbWUobmV4dFByb3BzLnRoZW1lKSk7XG4gICAgfVxuICB9O1xuXG4gIFRoZW1lUHJvdmlkZXIucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMudW5zdWJzY3JpYmVUb091dGVySWQgIT09IC0xKSB7XG4gICAgICB0aGlzLmNvbnRleHRbQ0hBTk5FTF9ORVhUXS51bnN1YnNjcmliZSh0aGlzLnVuc3Vic2NyaWJlVG9PdXRlcklkKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gR2V0IHRoZSB0aGVtZSBmcm9tIHRoZSBwcm9wcywgc3VwcG9ydGluZyBib3RoIChvdXRlclRoZW1lKSA9PiB7fSBhcyB3ZWxsIGFzIG9iamVjdCBub3RhdGlvblxuXG5cbiAgVGhlbWVQcm92aWRlci5wcm90b3R5cGUuZ2V0VGhlbWUgPSBmdW5jdGlvbiBnZXRUaGVtZShwYXNzZWRUaGVtZSkge1xuICAgIHZhciB0aGVtZSA9IHBhc3NlZFRoZW1lIHx8IHRoaXMucHJvcHMudGhlbWU7XG4gICAgaWYgKGlzRnVuY3Rpb24odGhlbWUpKSB7XG4gICAgICB2YXIgbWVyZ2VkVGhlbWUgPSB0aGVtZSh0aGlzLm91dGVyVGhlbWUpO1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIWlzUGxhaW5PYmplY3QobWVyZ2VkVGhlbWUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW1RoZW1lUHJvdmlkZXJdIFBsZWFzZSByZXR1cm4gYW4gb2JqZWN0IGZyb20geW91ciB0aGVtZSBmdW5jdGlvbiwgaS5lLiB0aGVtZT17KCkgPT4gKHt9KX0hJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbWVyZ2VkVGhlbWU7XG4gICAgfVxuICAgIGlmICghaXNQbGFpbk9iamVjdCh0aGVtZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignW1RoZW1lUHJvdmlkZXJdIFBsZWFzZSBtYWtlIHlvdXIgdGhlbWUgcHJvcCBhIHBsYWluIG9iamVjdCcpO1xuICAgIH1cbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIHRoaXMub3V0ZXJUaGVtZSwgdGhlbWUpO1xuICB9O1xuXG4gIFRoZW1lUHJvdmlkZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuY2hpbGRyZW4pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gUmVhY3QuQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgfTtcblxuICByZXR1cm4gVGhlbWVQcm92aWRlcjtcbn0oQ29tcG9uZW50KTtcblxuVGhlbWVQcm92aWRlci5jaGlsZENvbnRleHRUeXBlcyA9IChfVGhlbWVQcm92aWRlciRjaGlsZEMgPSB7fSwgX1RoZW1lUHJvdmlkZXIkY2hpbGRDW0NIQU5ORUxdID0gUHJvcFR5cGVzLmZ1bmMsIF9UaGVtZVByb3ZpZGVyJGNoaWxkQ1tDSEFOTkVMX05FWFRdID0gQ09OVEVYVF9DSEFOTkVMX1NIQVBFLCBfVGhlbWVQcm92aWRlciRjaGlsZEMpO1xuVGhlbWVQcm92aWRlci5jb250ZXh0VHlwZXMgPSAoX1RoZW1lUHJvdmlkZXIkY29udGV4ID0ge30sIF9UaGVtZVByb3ZpZGVyJGNvbnRleFtDSEFOTkVMX05FWFRdID0gQ09OVEVYVF9DSEFOTkVMX1NIQVBFLCBfVGhlbWVQcm92aWRlciRjb250ZXgpO1xuXG4vLyAgICAgIFxuXG4vLyBIQUNLIGZvciBnZW5lcmF0aW5nIGFsbCBzdGF0aWMgc3R5bGVzIHdpdGhvdXQgbmVlZGluZyB0byBhbGxvY2F0ZVxuLy8gYW4gZW1wdHkgZXhlY3V0aW9uIGNvbnRleHQgZXZlcnkgc2luZ2xlIHRpbWUuLi5cbnZhciBTVEFUSUNfRVhFQ1VUSU9OX0NPTlRFWFQgPSB7fTtcblxudmFyIF9TdHlsZWRDb21wb25lbnQgPSAoZnVuY3Rpb24gKENvbXBvbmVudFN0eWxlLCBjb25zdHJ1Y3RXaXRoT3B0aW9ucykge1xuICB2YXIgaWRlbnRpZmllcnMgPSB7fTtcblxuICAvKiBXZSBkZXBlbmQgb24gY29tcG9uZW50cyBoYXZpbmcgdW5pcXVlIElEcyAqL1xuICB2YXIgZ2VuZXJhdGVJZCA9IGZ1bmN0aW9uIGdlbmVyYXRlSWQoX2Rpc3BsYXlOYW1lLCBwYXJlbnRDb21wb25lbnRJZCkge1xuICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiBfZGlzcGxheU5hbWUgIT09ICdzdHJpbmcnID8gJ3NjJyA6IGVzY2FwZShfZGlzcGxheU5hbWUpO1xuXG4gICAgdmFyIGNvbXBvbmVudElkID0gdm9pZCAwO1xuXG4gICAgLyoqXG4gICAgICogb25seSBmYWxsIGJhY2sgdG8gaGFzaGluZyB0aGUgY29tcG9uZW50IGluamVjdGlvbiBvcmRlciBpZlxuICAgICAqIGEgcHJvcGVyIGRpc3BsYXlOYW1lIGlzbid0IHByb3ZpZGVkIGJ5IHRoZSBiYWJlbCBwbHVnaW5cbiAgICAgKi9cbiAgICBpZiAoIV9kaXNwbGF5TmFtZSkge1xuICAgICAgdmFyIG5yID0gKGlkZW50aWZpZXJzW2Rpc3BsYXlOYW1lXSB8fCAwKSArIDE7XG4gICAgICBpZGVudGlmaWVyc1tkaXNwbGF5TmFtZV0gPSBucjtcblxuICAgICAgY29tcG9uZW50SWQgPSBkaXNwbGF5TmFtZSArICctJyArIENvbXBvbmVudFN0eWxlLmdlbmVyYXRlTmFtZShkaXNwbGF5TmFtZSArIG5yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcG9uZW50SWQgPSBkaXNwbGF5TmFtZSArICctJyArIENvbXBvbmVudFN0eWxlLmdlbmVyYXRlTmFtZShkaXNwbGF5TmFtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudENvbXBvbmVudElkICE9PSB1bmRlZmluZWQgPyBwYXJlbnRDb21wb25lbnRJZCArICctJyArIGNvbXBvbmVudElkIDogY29tcG9uZW50SWQ7XG4gIH07XG5cbiAgdmFyIEJhc2VTdHlsZWRDb21wb25lbnQgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgIGluaGVyaXRzKEJhc2VTdHlsZWRDb21wb25lbnQsIF9Db21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gQmFzZVN0eWxlZENvbXBvbmVudCgpIHtcbiAgICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIEJhc2VTdHlsZWRDb21wb25lbnQpO1xuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudC5jYWxsLmFwcGx5KF9Db21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5hdHRycyA9IHt9LCBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgdGhlbWU6IG51bGwsXG4gICAgICAgIGdlbmVyYXRlZENsYXNzTmFtZTogJydcbiAgICAgIH0sIF90aGlzLnVuc3Vic2NyaWJlSWQgPSAtMSwgX3RlbXApLCBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgICB9XG5cbiAgICBCYXNlU3R5bGVkQ29tcG9uZW50LnByb3RvdHlwZS51bnN1YnNjcmliZUZyb21Db250ZXh0ID0gZnVuY3Rpb24gdW5zdWJzY3JpYmVGcm9tQ29udGV4dCgpIHtcbiAgICAgIGlmICh0aGlzLnVuc3Vic2NyaWJlSWQgIT09IC0xKSB7XG4gICAgICAgIHRoaXMuY29udGV4dFtDSEFOTkVMX05FWFRdLnVuc3Vic2NyaWJlKHRoaXMudW5zdWJzY3JpYmVJZCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIEJhc2VTdHlsZWRDb21wb25lbnQucHJvdG90eXBlLmJ1aWxkRXhlY3V0aW9uQ29udGV4dCA9IGZ1bmN0aW9uIGJ1aWxkRXhlY3V0aW9uQ29udGV4dCh0aGVtZSwgcHJvcHMpIHtcbiAgICAgIHZhciBhdHRycyA9IHRoaXMuY29uc3RydWN0b3IuYXR0cnM7XG5cbiAgICAgIHZhciBjb250ZXh0ID0gX2V4dGVuZHMoe30sIHByb3BzLCB7IHRoZW1lOiB0aGVtZSB9KTtcbiAgICAgIGlmIChhdHRycyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBjb250ZXh0O1xuICAgICAgfVxuXG4gICAgICB0aGlzLmF0dHJzID0gT2JqZWN0LmtleXMoYXR0cnMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBrZXkpIHtcbiAgICAgICAgdmFyIGF0dHIgPSBhdHRyc1trZXldO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgYWNjW2tleV0gPSB0eXBlb2YgYXR0ciA9PT0gJ2Z1bmN0aW9uJyA/IGF0dHIoY29udGV4dCkgOiBhdHRyO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwge30pO1xuXG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIGNvbnRleHQsIHRoaXMuYXR0cnMpO1xuICAgIH07XG5cbiAgICBCYXNlU3R5bGVkQ29tcG9uZW50LnByb3RvdHlwZS5nZW5lcmF0ZUFuZEluamVjdFN0eWxlcyA9IGZ1bmN0aW9uIGdlbmVyYXRlQW5kSW5qZWN0U3R5bGVzKHRoZW1lLCBwcm9wcykge1xuICAgICAgdmFyIF9jb25zdHJ1Y3RvciA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgYXR0cnMgPSBfY29uc3RydWN0b3IuYXR0cnMsXG4gICAgICAgICAgY29tcG9uZW50U3R5bGUgPSBfY29uc3RydWN0b3IuY29tcG9uZW50U3R5bGUsXG4gICAgICAgICAgd2FyblRvb01hbnlDbGFzc2VzID0gX2NvbnN0cnVjdG9yLndhcm5Ub29NYW55Q2xhc3NlcztcblxuICAgICAgdmFyIHN0eWxlU2hlZXQgPSB0aGlzLmNvbnRleHRbQ09OVEVYVF9LRVldIHx8IFN0eWxlU2hlZXQuaW5zdGFuY2U7XG5cbiAgICAgIC8vIHN0YXRpY2FseSBzdHlsZWQtY29tcG9uZW50cyBkb24ndCBuZWVkIHRvIGJ1aWxkIGFuIGV4ZWN1dGlvbiBjb250ZXh0IG9iamVjdCxcbiAgICAgIC8vIGFuZCBzaG91bGRuJ3QgYmUgaW5jcmVhc2luZyB0aGUgbnVtYmVyIG9mIGNsYXNzIG5hbWVzXG4gICAgICBpZiAoY29tcG9uZW50U3R5bGUuaXNTdGF0aWMgJiYgYXR0cnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50U3R5bGUuZ2VuZXJhdGVBbmRJbmplY3RTdHlsZXMoU1RBVElDX0VYRUNVVElPTl9DT05URVhULCBzdHlsZVNoZWV0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBleGVjdXRpb25Db250ZXh0ID0gdGhpcy5idWlsZEV4ZWN1dGlvbkNvbnRleHQodGhlbWUsIHByb3BzKTtcbiAgICAgICAgdmFyIGNsYXNzTmFtZSA9IGNvbXBvbmVudFN0eWxlLmdlbmVyYXRlQW5kSW5qZWN0U3R5bGVzKGV4ZWN1dGlvbkNvbnRleHQsIHN0eWxlU2hlZXQpO1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm5Ub29NYW55Q2xhc3NlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgd2FyblRvb01hbnlDbGFzc2VzKGNsYXNzTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBCYXNlU3R5bGVkQ29tcG9uZW50LnByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIGNvbXBvbmVudFN0eWxlID0gdGhpcy5jb25zdHJ1Y3Rvci5jb21wb25lbnRTdHlsZTtcblxuICAgICAgdmFyIHN0eWxlZENvbnRleHQgPSB0aGlzLmNvbnRleHRbQ0hBTk5FTF9ORVhUXTtcblxuICAgICAgLy8gSWYgdGhpcyBpcyBhIHN0YXRpY2FseS1zdHlsZWQgY29tcG9uZW50LCB3ZSBkb24ndCBuZWVkIHRvIHRoZSB0aGVtZVxuICAgICAgLy8gdG8gZ2VuZXJhdGUgb3IgYnVpbGQgc3R5bGVzLlxuICAgICAgaWYgKGNvbXBvbmVudFN0eWxlLmlzU3RhdGljKSB7XG4gICAgICAgIHZhciBnZW5lcmF0ZWRDbGFzc05hbWUgPSB0aGlzLmdlbmVyYXRlQW5kSW5qZWN0U3R5bGVzKFNUQVRJQ19FWEVDVVRJT05fQ09OVEVYVCwgdGhpcy5wcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBnZW5lcmF0ZWRDbGFzc05hbWU6IGdlbmVyYXRlZENsYXNzTmFtZSB9KTtcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgYSB0aGVtZSBpbiB0aGUgY29udGV4dCwgc3Vic2NyaWJlIHRvIHRoZSBldmVudCBlbWl0dGVyLiBUaGlzXG4gICAgICAgIC8vIGlzIG5lY2Vzc2FyeSBkdWUgdG8gcHVyZSBjb21wb25lbnRzIGJsb2NraW5nIGNvbnRleHQgdXBkYXRlcywgdGhpcyBjaXJjdW12ZW50c1xuICAgICAgICAvLyB0aGF0IGJ5IHVwZGF0aW5nIHdoZW4gYW4gZXZlbnQgaXMgZW1pdHRlZFxuICAgICAgfSBlbHNlIGlmIChzdHlsZWRDb250ZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIHN1YnNjcmliZSA9IHN0eWxlZENvbnRleHQuc3Vic2NyaWJlO1xuXG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmVJZCA9IHN1YnNjcmliZShmdW5jdGlvbiAobmV4dFRoZW1lKSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIGJlIGNhbGxlZCBvbmNlIGltbWVkaWF0ZWx5XG4gICAgICAgICAgdmFyIHRoZW1lID0gZGV0ZXJtaW5lVGhlbWUoX3RoaXMyLnByb3BzLCBuZXh0VGhlbWUsIF90aGlzMi5jb25zdHJ1Y3Rvci5kZWZhdWx0UHJvcHMpO1xuICAgICAgICAgIHZhciBnZW5lcmF0ZWRDbGFzc05hbWUgPSBfdGhpczIuZ2VuZXJhdGVBbmRJbmplY3RTdHlsZXModGhlbWUsIF90aGlzMi5wcm9wcyk7XG5cbiAgICAgICAgICBfdGhpczIuc2V0U3RhdGUoeyB0aGVtZTogdGhlbWUsIGdlbmVyYXRlZENsYXNzTmFtZTogZ2VuZXJhdGVkQ2xhc3NOYW1lIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcm9wLXR5cGVzXG4gICAgICAgIHZhciB0aGVtZSA9IHRoaXMucHJvcHMudGhlbWUgfHwge307XG4gICAgICAgIHZhciBfZ2VuZXJhdGVkQ2xhc3NOYW1lID0gdGhpcy5nZW5lcmF0ZUFuZEluamVjdFN0eWxlcyh0aGVtZSwgdGhpcy5wcm9wcyk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0aGVtZTogdGhlbWUsIGdlbmVyYXRlZENsYXNzTmFtZTogX2dlbmVyYXRlZENsYXNzTmFtZSB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgQmFzZVN0eWxlZENvbXBvbmVudC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgLy8gSWYgdGhpcyBpcyBhIHN0YXRpY2FseS1zdHlsZWQgY29tcG9uZW50LCB3ZSBkb24ndCBuZWVkIHRvIGxpc3RlbiB0b1xuICAgICAgLy8gcHJvcHMgY2hhbmdlcyB0byB1cGRhdGUgc3R5bGVzXG4gICAgICB2YXIgY29tcG9uZW50U3R5bGUgPSB0aGlzLmNvbnN0cnVjdG9yLmNvbXBvbmVudFN0eWxlO1xuXG4gICAgICBpZiAoY29tcG9uZW50U3R5bGUuaXNTdGF0aWMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChvbGRTdGF0ZSkge1xuICAgICAgICB2YXIgdGhlbWUgPSBkZXRlcm1pbmVUaGVtZShuZXh0UHJvcHMsIG9sZFN0YXRlLnRoZW1lLCBfdGhpczMuY29uc3RydWN0b3IuZGVmYXVsdFByb3BzKTtcbiAgICAgICAgdmFyIGdlbmVyYXRlZENsYXNzTmFtZSA9IF90aGlzMy5nZW5lcmF0ZUFuZEluamVjdFN0eWxlcyh0aGVtZSwgbmV4dFByb3BzKTtcblxuICAgICAgICByZXR1cm4geyB0aGVtZTogdGhlbWUsIGdlbmVyYXRlZENsYXNzTmFtZTogZ2VuZXJhdGVkQ2xhc3NOYW1lIH07XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgQmFzZVN0eWxlZENvbXBvbmVudC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmVGcm9tQ29udGV4dCgpO1xuICAgIH07XG5cbiAgICBCYXNlU3R5bGVkQ29tcG9uZW50LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L3Byb3AtdHlwZXNcbiAgICAgIHZhciBpbm5lclJlZiA9IHRoaXMucHJvcHMuaW5uZXJSZWY7XG4gICAgICB2YXIgZ2VuZXJhdGVkQ2xhc3NOYW1lID0gdGhpcy5zdGF0ZS5nZW5lcmF0ZWRDbGFzc05hbWU7XG4gICAgICB2YXIgX2NvbnN0cnVjdG9yMiA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgc3R5bGVkQ29tcG9uZW50SWQgPSBfY29uc3RydWN0b3IyLnN0eWxlZENvbXBvbmVudElkLFxuICAgICAgICAgIHRhcmdldCA9IF9jb25zdHJ1Y3RvcjIudGFyZ2V0O1xuXG5cbiAgICAgIHZhciBpc1RhcmdldFRhZyA9IGlzVGFnKHRhcmdldCk7XG5cbiAgICAgIHZhciBjbGFzc05hbWUgPSBbXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJvcC10eXBlc1xuICAgICAgdGhpcy5wcm9wcy5jbGFzc05hbWUsIHN0eWxlZENvbXBvbmVudElkLCB0aGlzLmF0dHJzLmNsYXNzTmFtZSwgZ2VuZXJhdGVkQ2xhc3NOYW1lXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuXG4gICAgICB2YXIgYmFzZVByb3BzID0gX2V4dGVuZHMoe30sIHRoaXMuYXR0cnMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoaXNTdHlsZWRDb21wb25lbnQodGFyZ2V0KSkge1xuICAgICAgICBiYXNlUHJvcHMuaW5uZXJSZWYgPSBpbm5lclJlZjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJhc2VQcm9wcy5yZWYgPSBpbm5lclJlZjtcbiAgICAgIH1cblxuICAgICAgdmFyIHByb3BzRm9yRWxlbWVudCA9IE9iamVjdC5rZXlzKHRoaXMucHJvcHMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwcm9wTmFtZSkge1xuICAgICAgICAvLyBEb24ndCBwYXNzIHRocm91Z2ggbm9uIEhUTUwgdGFncyB0aHJvdWdoIHRvIEhUTUwgZWxlbWVudHNcbiAgICAgICAgLy8gYWx3YXlzIG9taXQgaW5uZXJSZWZcbiAgICAgICAgaWYgKHByb3BOYW1lICE9PSAnaW5uZXJSZWYnICYmIHByb3BOYW1lICE9PSAnY2xhc3NOYW1lJyAmJiAoIWlzVGFyZ2V0VGFnIHx8IHZhbGlkQXR0cihwcm9wTmFtZSkpKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgICAgYWNjW3Byb3BOYW1lXSA9IF90aGlzNC5wcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwgYmFzZVByb3BzKTtcblxuICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQodGFyZ2V0LCBwcm9wc0ZvckVsZW1lbnQpO1xuICAgIH07XG5cbiAgICByZXR1cm4gQmFzZVN0eWxlZENvbXBvbmVudDtcbiAgfShDb21wb25lbnQpO1xuXG4gIHZhciBjcmVhdGVTdHlsZWRDb21wb25lbnQgPSBmdW5jdGlvbiBjcmVhdGVTdHlsZWRDb21wb25lbnQodGFyZ2V0LCBvcHRpb25zLCBydWxlcykge1xuICAgIHZhciBfU3R5bGVkQ29tcG9uZW50JGNvbnQ7XG5cbiAgICB2YXIgX29wdGlvbnMkZGlzcGxheU5hbWUgPSBvcHRpb25zLmRpc3BsYXlOYW1lLFxuICAgICAgICBkaXNwbGF5TmFtZSA9IF9vcHRpb25zJGRpc3BsYXlOYW1lID09PSB1bmRlZmluZWQgPyBpc1RhZyh0YXJnZXQpID8gJ3N0eWxlZC4nICsgdGFyZ2V0IDogJ1N0eWxlZCgnICsgZ2V0Q29tcG9uZW50TmFtZSh0YXJnZXQpICsgJyknIDogX29wdGlvbnMkZGlzcGxheU5hbWUsXG4gICAgICAgIF9vcHRpb25zJGNvbXBvbmVudElkID0gb3B0aW9ucy5jb21wb25lbnRJZCxcbiAgICAgICAgY29tcG9uZW50SWQgPSBfb3B0aW9ucyRjb21wb25lbnRJZCA9PT0gdW5kZWZpbmVkID8gZ2VuZXJhdGVJZChvcHRpb25zLmRpc3BsYXlOYW1lLCBvcHRpb25zLnBhcmVudENvbXBvbmVudElkKSA6IF9vcHRpb25zJGNvbXBvbmVudElkLFxuICAgICAgICBfb3B0aW9ucyRQYXJlbnRDb21wb24gPSBvcHRpb25zLlBhcmVudENvbXBvbmVudCxcbiAgICAgICAgUGFyZW50Q29tcG9uZW50ID0gX29wdGlvbnMkUGFyZW50Q29tcG9uID09PSB1bmRlZmluZWQgPyBCYXNlU3R5bGVkQ29tcG9uZW50IDogX29wdGlvbnMkUGFyZW50Q29tcG9uLFxuICAgICAgICBleHRlbmRpbmdSdWxlcyA9IG9wdGlvbnMucnVsZXMsXG4gICAgICAgIGF0dHJzID0gb3B0aW9ucy5hdHRycztcblxuXG4gICAgdmFyIHN0eWxlZENvbXBvbmVudElkID0gb3B0aW9ucy5kaXNwbGF5TmFtZSAmJiBvcHRpb25zLmNvbXBvbmVudElkID8gZXNjYXBlKG9wdGlvbnMuZGlzcGxheU5hbWUpICsgJy0nICsgb3B0aW9ucy5jb21wb25lbnRJZCA6IGNvbXBvbmVudElkO1xuXG4gICAgdmFyIGNvbXBvbmVudFN0eWxlID0gbmV3IENvbXBvbmVudFN0eWxlKGV4dGVuZGluZ1J1bGVzID09PSB1bmRlZmluZWQgPyBydWxlcyA6IGV4dGVuZGluZ1J1bGVzLmNvbmNhdChydWxlcyksIGF0dHJzLCBzdHlsZWRDb21wb25lbnRJZCk7XG5cbiAgICB2YXIgU3R5bGVkQ29tcG9uZW50ID0gZnVuY3Rpb24gKF9QYXJlbnRDb21wb25lbnQpIHtcbiAgICAgIGluaGVyaXRzKFN0eWxlZENvbXBvbmVudCwgX1BhcmVudENvbXBvbmVudCk7XG5cbiAgICAgIGZ1bmN0aW9uIFN0eWxlZENvbXBvbmVudCgpIHtcbiAgICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgU3R5bGVkQ29tcG9uZW50KTtcbiAgICAgICAgcmV0dXJuIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1BhcmVudENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICAgIH1cblxuICAgICAgU3R5bGVkQ29tcG9uZW50LndpdGhDb21wb25lbnQgPSBmdW5jdGlvbiB3aXRoQ29tcG9uZW50KHRhZykge1xuICAgICAgICB2YXIgcHJldmlvdXNDb21wb25lbnRJZCA9IG9wdGlvbnMuY29tcG9uZW50SWQsXG4gICAgICAgICAgICBvcHRpb25zVG9Db3B5ID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob3B0aW9ucywgWydjb21wb25lbnRJZCddKTtcblxuXG4gICAgICAgIHZhciBuZXdDb21wb25lbnRJZCA9IHByZXZpb3VzQ29tcG9uZW50SWQgJiYgcHJldmlvdXNDb21wb25lbnRJZCArICctJyArIChpc1RhZyh0YWcpID8gdGFnIDogZXNjYXBlKGdldENvbXBvbmVudE5hbWUodGFnKSkpO1xuXG4gICAgICAgIHZhciBuZXdPcHRpb25zID0gX2V4dGVuZHMoe30sIG9wdGlvbnNUb0NvcHksIHtcbiAgICAgICAgICBjb21wb25lbnRJZDogbmV3Q29tcG9uZW50SWQsXG4gICAgICAgICAgUGFyZW50Q29tcG9uZW50OiBTdHlsZWRDb21wb25lbnRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGNyZWF0ZVN0eWxlZENvbXBvbmVudCh0YWcsIG5ld09wdGlvbnMsIHJ1bGVzKTtcbiAgICAgIH07XG5cbiAgICAgIGNyZWF0ZUNsYXNzKFN0eWxlZENvbXBvbmVudCwgbnVsbCwgW3tcbiAgICAgICAga2V5OiAnZXh0ZW5kJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICAgICAgdmFyIHJ1bGVzRnJvbU9wdGlvbnMgPSBvcHRpb25zLnJ1bGVzLFxuICAgICAgICAgICAgICBwYXJlbnRDb21wb25lbnRJZCA9IG9wdGlvbnMuY29tcG9uZW50SWQsXG4gICAgICAgICAgICAgIG9wdGlvbnNUb0NvcHkgPSBvYmplY3RXaXRob3V0UHJvcGVydGllcyhvcHRpb25zLCBbJ3J1bGVzJywgJ2NvbXBvbmVudElkJ10pO1xuXG5cbiAgICAgICAgICB2YXIgbmV3UnVsZXMgPSBydWxlc0Zyb21PcHRpb25zID09PSB1bmRlZmluZWQgPyBydWxlcyA6IHJ1bGVzRnJvbU9wdGlvbnMuY29uY2F0KHJ1bGVzKTtcblxuICAgICAgICAgIHZhciBuZXdPcHRpb25zID0gX2V4dGVuZHMoe30sIG9wdGlvbnNUb0NvcHksIHtcbiAgICAgICAgICAgIHJ1bGVzOiBuZXdSdWxlcyxcbiAgICAgICAgICAgIHBhcmVudENvbXBvbmVudElkOiBwYXJlbnRDb21wb25lbnRJZCxcbiAgICAgICAgICAgIFBhcmVudENvbXBvbmVudDogU3R5bGVkQ29tcG9uZW50XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICByZXR1cm4gY29uc3RydWN0V2l0aE9wdGlvbnMoY3JlYXRlU3R5bGVkQ29tcG9uZW50LCB0YXJnZXQsIG5ld09wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICB9XSk7XG4gICAgICByZXR1cm4gU3R5bGVkQ29tcG9uZW50O1xuICAgIH0oUGFyZW50Q29tcG9uZW50KTtcblxuICAgIFN0eWxlZENvbXBvbmVudC5jb250ZXh0VHlwZXMgPSAoX1N0eWxlZENvbXBvbmVudCRjb250ID0ge30sIF9TdHlsZWRDb21wb25lbnQkY29udFtDSEFOTkVMXSA9IFByb3BUeXBlcy5mdW5jLCBfU3R5bGVkQ29tcG9uZW50JGNvbnRbQ0hBTk5FTF9ORVhUXSA9IENPTlRFWFRfQ0hBTk5FTF9TSEFQRSwgX1N0eWxlZENvbXBvbmVudCRjb250W0NPTlRFWFRfS0VZXSA9IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5pbnN0YW5jZU9mKFN0eWxlU2hlZXQpLCBQcm9wVHlwZXMuaW5zdGFuY2VPZihTZXJ2ZXJTdHlsZVNoZWV0KV0pLCBfU3R5bGVkQ29tcG9uZW50JGNvbnQpO1xuICAgIFN0eWxlZENvbXBvbmVudC5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xuICAgIFN0eWxlZENvbXBvbmVudC5zdHlsZWRDb21wb25lbnRJZCA9IHN0eWxlZENvbXBvbmVudElkO1xuICAgIFN0eWxlZENvbXBvbmVudC5hdHRycyA9IGF0dHJzO1xuICAgIFN0eWxlZENvbXBvbmVudC5jb21wb25lbnRTdHlsZSA9IGNvbXBvbmVudFN0eWxlO1xuICAgIFN0eWxlZENvbXBvbmVudC50YXJnZXQgPSB0YXJnZXQ7XG5cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBTdHlsZWRDb21wb25lbnQud2FyblRvb01hbnlDbGFzc2VzID0gY3JlYXRlV2FyblRvb01hbnlDbGFzc2VzKGRpc3BsYXlOYW1lKTtcbiAgICB9XG5cbiAgICByZXR1cm4gU3R5bGVkQ29tcG9uZW50O1xuICB9O1xuXG4gIHJldHVybiBjcmVhdGVTdHlsZWRDb21wb25lbnQ7XG59KTtcblxuLy8gbXVybXVyaGFzaDIgdmlhIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3JheWNtb3JnYW4vNTg4NDIzXG5cbmZ1bmN0aW9uIGRvSGFzaChzdHIsIHNlZWQpIHtcbiAgdmFyIG0gPSAweDViZDFlOTk1O1xuICB2YXIgciA9IDI0O1xuICB2YXIgaCA9IHNlZWQgXiBzdHIubGVuZ3RoO1xuICB2YXIgbGVuZ3RoID0gc3RyLmxlbmd0aDtcbiAgdmFyIGN1cnJlbnRJbmRleCA9IDA7XG5cbiAgd2hpbGUgKGxlbmd0aCA+PSA0KSB7XG4gICAgdmFyIGsgPSBVSW50MzIoc3RyLCBjdXJyZW50SW5kZXgpO1xuXG4gICAgayA9IFVtdWwzMihrLCBtKTtcbiAgICBrIF49IGsgPj4+IHI7XG4gICAgayA9IFVtdWwzMihrLCBtKTtcblxuICAgIGggPSBVbXVsMzIoaCwgbSk7XG4gICAgaCBePSBrO1xuXG4gICAgY3VycmVudEluZGV4ICs9IDQ7XG4gICAgbGVuZ3RoIC09IDQ7XG4gIH1cblxuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMzpcbiAgICAgIGggXj0gVUludDE2KHN0ciwgY3VycmVudEluZGV4KTtcbiAgICAgIGggXj0gc3RyLmNoYXJDb2RlQXQoY3VycmVudEluZGV4ICsgMikgPDwgMTY7XG4gICAgICBoID0gVW11bDMyKGgsIG0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIDI6XG4gICAgICBoIF49IFVJbnQxNihzdHIsIGN1cnJlbnRJbmRleCk7XG4gICAgICBoID0gVW11bDMyKGgsIG0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIDE6XG4gICAgICBoIF49IHN0ci5jaGFyQ29kZUF0KGN1cnJlbnRJbmRleCk7XG4gICAgICBoID0gVW11bDMyKGgsIG0pO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICBoIF49IGggPj4+IDEzO1xuICBoID0gVW11bDMyKGgsIG0pO1xuICBoIF49IGggPj4+IDE1O1xuXG4gIHJldHVybiBoID4+PiAwO1xufVxuXG5mdW5jdGlvbiBVSW50MzIoc3RyLCBwb3MpIHtcbiAgcmV0dXJuIHN0ci5jaGFyQ29kZUF0KHBvcysrKSArIChzdHIuY2hhckNvZGVBdChwb3MrKykgPDwgOCkgKyAoc3RyLmNoYXJDb2RlQXQocG9zKyspIDw8IDE2KSArIChzdHIuY2hhckNvZGVBdChwb3MpIDw8IDI0KTtcbn1cblxuZnVuY3Rpb24gVUludDE2KHN0ciwgcG9zKSB7XG4gIHJldHVybiBzdHIuY2hhckNvZGVBdChwb3MrKykgKyAoc3RyLmNoYXJDb2RlQXQocG9zKyspIDw8IDgpO1xufVxuXG5mdW5jdGlvbiBVbXVsMzIobiwgbSkge1xuICBuID0gbiB8IDA7XG4gIG0gPSBtIHwgMDtcbiAgdmFyIG5sbyA9IG4gJiAweGZmZmY7XG4gIHZhciBuaGkgPSBuID4+PiAxNjtcbiAgdmFyIHJlcyA9IG5sbyAqIG0gKyAoKG5oaSAqIG0gJiAweGZmZmYpIDw8IDE2KSB8IDA7XG4gIHJldHVybiByZXM7XG59XG5cbi8vICAgICAgXG52YXIgaXNTdGF0aWNSdWxlcyA9IGZ1bmN0aW9uIGlzU3RhdGljUnVsZXMocnVsZXMsIGF0dHJzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcnVsZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB2YXIgcnVsZSA9IHJ1bGVzW2ldO1xuXG4gICAgLy8gcmVjdXJzaXZlIGNhc2VcbiAgICBpZiAoQXJyYXkuaXNBcnJheShydWxlKSAmJiAhaXNTdGF0aWNSdWxlcyhydWxlKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHJ1bGUgPT09ICdmdW5jdGlvbicgJiYgIWlzU3R5bGVkQ29tcG9uZW50KHJ1bGUpKSB7XG4gICAgICAvLyBmdW5jdGlvbnMgYXJlIGFsbG93ZWQgdG8gYmUgc3RhdGljIGlmIHRoZXkncmUganVzdCBiZWluZ1xuICAgICAgLy8gdXNlZCB0byBnZXQgdGhlIGNsYXNzbmFtZSBvZiBhIG5lc3RlZCBzdHlsZWQgY29wbW9uZW50XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaWYgKGF0dHJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ3VhcmQtZm9yLWluLCBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgIGZvciAodmFyIGtleSBpbiBhdHRycykge1xuICAgICAgdmFyIHZhbHVlID0gYXR0cnNba2V5XTtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxudmFyIGlzSFJNRW5hYmxlZCA9IHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5ob3QgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJztcblxuLypcbiBDb21wb25lbnRTdHlsZSBpcyBhbGwgdGhlIENTUy1zcGVjaWZpYyBzdHVmZiwgbm90XG4gdGhlIFJlYWN0LXNwZWNpZmljIHN0dWZmLlxuICovXG52YXIgX0NvbXBvbmVudFN0eWxlID0gKGZ1bmN0aW9uIChuYW1lR2VuZXJhdG9yLCBmbGF0dGVuLCBzdHJpbmdpZnlSdWxlcykge1xuICB2YXIgQ29tcG9uZW50U3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ29tcG9uZW50U3R5bGUocnVsZXMsIGF0dHJzLCBjb21wb25lbnRJZCkge1xuICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29tcG9uZW50U3R5bGUpO1xuXG4gICAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gICAgICB0aGlzLmlzU3RhdGljID0gIWlzSFJNRW5hYmxlZCAmJiBpc1N0YXRpY1J1bGVzKHJ1bGVzLCBhdHRycyk7XG4gICAgICB0aGlzLmNvbXBvbmVudElkID0gY29tcG9uZW50SWQ7XG4gICAgICBpZiAoIVN0eWxlU2hlZXQuaW5zdGFuY2UuaGFzSW5qZWN0ZWRDb21wb25lbnQodGhpcy5jb21wb25lbnRJZCkpIHtcbiAgICAgICAgdmFyIHBsYWNlaG9sZGVyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICcuJyArIGNvbXBvbmVudElkICsgJyB7fScgOiAnJztcbiAgICAgICAgU3R5bGVTaGVldC5pbnN0YW5jZS5kZWZlcnJlZEluamVjdChjb21wb25lbnRJZCwgdHJ1ZSwgcGxhY2Vob2xkZXIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICogRmxhdHRlbnMgYSBydWxlIHNldCBpbnRvIHZhbGlkIENTU1xuICAgICAqIEhhc2hlcyBpdCwgd3JhcHMgdGhlIHdob2xlIGNodW5rIGluIGEgLmhhc2gxMjM0IHt9XG4gICAgICogUmV0dXJucyB0aGUgaGFzaCB0byBiZSBpbmplY3RlZCBvbiByZW5kZXIoKVxuICAgICAqICovXG5cblxuICAgIENvbXBvbmVudFN0eWxlLnByb3RvdHlwZS5nZW5lcmF0ZUFuZEluamVjdFN0eWxlcyA9IGZ1bmN0aW9uIGdlbmVyYXRlQW5kSW5qZWN0U3R5bGVzKGV4ZWN1dGlvbkNvbnRleHQsIHN0eWxlU2hlZXQpIHtcbiAgICAgIHZhciBpc1N0YXRpYyA9IHRoaXMuaXNTdGF0aWMsXG4gICAgICAgICAgbGFzdENsYXNzTmFtZSA9IHRoaXMubGFzdENsYXNzTmFtZTtcblxuICAgICAgaWYgKGlzU3RhdGljICYmIGxhc3RDbGFzc05hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbGFzdENsYXNzTmFtZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGZsYXRDU1MgPSBmbGF0dGVuKHRoaXMucnVsZXMsIGV4ZWN1dGlvbkNvbnRleHQpO1xuICAgICAgdmFyIGhhc2ggPSBkb0hhc2godGhpcy5jb21wb25lbnRJZCArIGZsYXRDU1Muam9pbignJykpO1xuXG4gICAgICB2YXIgZXhpc3RpbmdOYW1lID0gc3R5bGVTaGVldC5nZXROYW1lKGhhc2gpO1xuICAgICAgaWYgKGV4aXN0aW5nTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChzdHlsZVNoZWV0LnN0eWxlc0NhY2hlYWJsZSkge1xuICAgICAgICAgIHRoaXMubGFzdENsYXNzTmFtZSA9IGV4aXN0aW5nTmFtZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXhpc3RpbmdOYW1lO1xuICAgICAgfVxuXG4gICAgICB2YXIgbmFtZSA9IG5hbWVHZW5lcmF0b3IoaGFzaCk7XG4gICAgICBpZiAoc3R5bGVTaGVldC5zdHlsZXNDYWNoZWFibGUpIHtcbiAgICAgICAgdGhpcy5sYXN0Q2xhc3NOYW1lID0gZXhpc3RpbmdOYW1lO1xuICAgICAgfVxuICAgICAgaWYgKHN0eWxlU2hlZXQuYWxyZWFkeUluamVjdGVkKGhhc2gsIG5hbWUpKSB7XG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgfVxuXG4gICAgICB2YXIgY3NzID0gJ1xcbicgKyBzdHJpbmdpZnlSdWxlcyhmbGF0Q1NTLCAnLicgKyBuYW1lKTtcbiAgICAgIC8vIE5PVEU6IHRoaXMgY2FuIG9ubHkgYmUgc2V0IHdoZW4gd2UgaW5qZWN0IHRoZSBjbGFzcy1uYW1lLlxuICAgICAgLy8gRm9yIHNvbWUgcmVhc29uLCBwcmVzdW1hYmx5IGR1ZSB0byBob3cgY3NzIGlzIHN0cmluZ2lmeVJ1bGVzIGJlaGF2ZXMgaW5cbiAgICAgIC8vIGRpZmZlcmVudGx5IGJldHdlZW4gY2xpZW50IGFuZCBzZXJ2ZXIsIHN0eWxlcyBicmVhay5cbiAgICAgIHN0eWxlU2hlZXQuaW5qZWN0KHRoaXMuY29tcG9uZW50SWQsIHRydWUsIGNzcywgaGFzaCwgbmFtZSk7XG4gICAgICByZXR1cm4gbmFtZTtcbiAgICB9O1xuXG4gICAgQ29tcG9uZW50U3R5bGUuZ2VuZXJhdGVOYW1lID0gZnVuY3Rpb24gZ2VuZXJhdGVOYW1lKHN0cikge1xuICAgICAgcmV0dXJuIG5hbWVHZW5lcmF0b3IoZG9IYXNoKHN0cikpO1xuICAgIH07XG5cbiAgICByZXR1cm4gQ29tcG9uZW50U3R5bGU7XG4gIH0oKTtcblxuICByZXR1cm4gQ29tcG9uZW50U3R5bGU7XG59KTtcblxuLy8gICAgICBcbi8vIFRoYW5rcyB0byBSZWFjdERPTUZhY3RvcmllcyBmb3IgdGhpcyBoYW5keSBsaXN0IVxuXG52YXIgZG9tRWxlbWVudHMgPSBbJ2EnLCAnYWJicicsICdhZGRyZXNzJywgJ2FyZWEnLCAnYXJ0aWNsZScsICdhc2lkZScsICdhdWRpbycsICdiJywgJ2Jhc2UnLCAnYmRpJywgJ2JkbycsICdiaWcnLCAnYmxvY2txdW90ZScsICdib2R5JywgJ2JyJywgJ2J1dHRvbicsICdjYW52YXMnLCAnY2FwdGlvbicsICdjaXRlJywgJ2NvZGUnLCAnY29sJywgJ2NvbGdyb3VwJywgJ2RhdGEnLCAnZGF0YWxpc3QnLCAnZGQnLCAnZGVsJywgJ2RldGFpbHMnLCAnZGZuJywgJ2RpYWxvZycsICdkaXYnLCAnZGwnLCAnZHQnLCAnZW0nLCAnZW1iZWQnLCAnZmllbGRzZXQnLCAnZmlnY2FwdGlvbicsICdmaWd1cmUnLCAnZm9vdGVyJywgJ2Zvcm0nLCAnaDEnLCAnaDInLCAnaDMnLCAnaDQnLCAnaDUnLCAnaDYnLCAnaGVhZCcsICdoZWFkZXInLCAnaGdyb3VwJywgJ2hyJywgJ2h0bWwnLCAnaScsICdpZnJhbWUnLCAnaW1nJywgJ2lucHV0JywgJ2lucycsICdrYmQnLCAna2V5Z2VuJywgJ2xhYmVsJywgJ2xlZ2VuZCcsICdsaScsICdsaW5rJywgJ21haW4nLCAnbWFwJywgJ21hcmsnLCAnbWFycXVlZScsICdtZW51JywgJ21lbnVpdGVtJywgJ21ldGEnLCAnbWV0ZXInLCAnbmF2JywgJ25vc2NyaXB0JywgJ29iamVjdCcsICdvbCcsICdvcHRncm91cCcsICdvcHRpb24nLCAnb3V0cHV0JywgJ3AnLCAncGFyYW0nLCAncGljdHVyZScsICdwcmUnLCAncHJvZ3Jlc3MnLCAncScsICdycCcsICdydCcsICdydWJ5JywgJ3MnLCAnc2FtcCcsICdzY3JpcHQnLCAnc2VjdGlvbicsICdzZWxlY3QnLCAnc21hbGwnLCAnc291cmNlJywgJ3NwYW4nLCAnc3Ryb25nJywgJ3N0eWxlJywgJ3N1YicsICdzdW1tYXJ5JywgJ3N1cCcsICd0YWJsZScsICd0Ym9keScsICd0ZCcsICd0ZXh0YXJlYScsICd0Zm9vdCcsICd0aCcsICd0aGVhZCcsICd0aW1lJywgJ3RpdGxlJywgJ3RyJywgJ3RyYWNrJywgJ3UnLCAndWwnLCAndmFyJywgJ3ZpZGVvJywgJ3dicicsXG5cbi8vIFNWR1xuJ2NpcmNsZScsICdjbGlwUGF0aCcsICdkZWZzJywgJ2VsbGlwc2UnLCAnZycsICdpbWFnZScsICdsaW5lJywgJ2xpbmVhckdyYWRpZW50JywgJ21hc2snLCAncGF0aCcsICdwYXR0ZXJuJywgJ3BvbHlnb24nLCAncG9seWxpbmUnLCAncmFkaWFsR3JhZGllbnQnLCAncmVjdCcsICdzdG9wJywgJ3N2ZycsICd0ZXh0JywgJ3RzcGFuJ107XG5cbi8vICAgICAgXG5cbnZhciBfc3R5bGVkID0gKGZ1bmN0aW9uIChzdHlsZWRDb21wb25lbnQsIGNvbnN0cnVjdFdpdGhPcHRpb25zKSB7XG4gIHZhciBzdHlsZWQgPSBmdW5jdGlvbiBzdHlsZWQodGFnKSB7XG4gICAgcmV0dXJuIGNvbnN0cnVjdFdpdGhPcHRpb25zKHN0eWxlZENvbXBvbmVudCwgdGFnKTtcbiAgfTtcblxuICAvLyBTaG9ydGhhbmRzIGZvciBhbGwgdmFsaWQgSFRNTCBFbGVtZW50c1xuICBkb21FbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChkb21FbGVtZW50KSB7XG4gICAgc3R5bGVkW2RvbUVsZW1lbnRdID0gc3R5bGVkKGRvbUVsZW1lbnQpO1xuICB9KTtcblxuICByZXR1cm4gc3R5bGVkO1xufSk7XG5cbi8vICAgICAgXG52YXIgcmVwbGFjZVdoaXRlc3BhY2UgPSBmdW5jdGlvbiByZXBsYWNlV2hpdGVzcGFjZShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHN8XFxcXG4vZywgJycpO1xufTtcblxudmFyIF9rZXlmcmFtZXMgPSAoZnVuY3Rpb24gKG5hbWVHZW5lcmF0b3IsIHN0cmluZ2lmeVJ1bGVzLCBjc3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmdzKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGludGVycG9sYXRpb25zID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgaW50ZXJwb2xhdGlvbnNbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBydWxlcyA9IGNzcy5hcHBseSh1bmRlZmluZWQsIFtzdHJpbmdzXS5jb25jYXQoaW50ZXJwb2xhdGlvbnMpKTtcbiAgICB2YXIgaGFzaCA9IGRvSGFzaChyZXBsYWNlV2hpdGVzcGFjZShKU09OLnN0cmluZ2lmeShydWxlcykpKTtcblxuICAgIHZhciBleGlzdGluZ05hbWUgPSBTdHlsZVNoZWV0Lmluc3RhbmNlLmdldE5hbWUoaGFzaCk7XG4gICAgaWYgKGV4aXN0aW5nTmFtZSkgcmV0dXJuIGV4aXN0aW5nTmFtZTtcblxuICAgIHZhciBuYW1lID0gbmFtZUdlbmVyYXRvcihoYXNoKTtcbiAgICBpZiAoU3R5bGVTaGVldC5pbnN0YW5jZS5hbHJlYWR5SW5qZWN0ZWQoaGFzaCwgbmFtZSkpIHJldHVybiBuYW1lO1xuXG4gICAgdmFyIGdlbmVyYXRlZENTUyA9IHN0cmluZ2lmeVJ1bGVzKHJ1bGVzLCBuYW1lLCAnQGtleWZyYW1lcycpO1xuICAgIFN0eWxlU2hlZXQuaW5zdGFuY2UuaW5qZWN0KCdzYy1rZXlmcmFtZXMtJyArIG5hbWUsIHRydWUsIGdlbmVyYXRlZENTUywgaGFzaCwgbmFtZSk7XG4gICAgcmV0dXJuIG5hbWU7XG4gIH07XG59KTtcblxuLy8gICAgICBcbnZhciBfaW5qZWN0R2xvYmFsID0gKGZ1bmN0aW9uIChzdHJpbmdpZnlSdWxlcywgY3NzKSB7XG4gIHZhciBpbmplY3RHbG9iYWwgPSBmdW5jdGlvbiBpbmplY3RHbG9iYWwoc3RyaW5ncykge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBpbnRlcnBvbGF0aW9ucyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGludGVycG9sYXRpb25zW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgcnVsZXMgPSBjc3MuYXBwbHkodW5kZWZpbmVkLCBbc3RyaW5nc10uY29uY2F0KGludGVycG9sYXRpb25zKSk7XG4gICAgdmFyIGhhc2ggPSBkb0hhc2goSlNPTi5zdHJpbmdpZnkocnVsZXMpKTtcblxuICAgIHZhciBjb21wb25lbnRJZCA9ICdzYy1nbG9iYWwtJyArIGhhc2g7XG4gICAgaWYgKFN0eWxlU2hlZXQuaW5zdGFuY2UuaGFzSW5qZWN0ZWRDb21wb25lbnQoY29tcG9uZW50SWQpKSByZXR1cm47XG5cbiAgICBTdHlsZVNoZWV0Lmluc3RhbmNlLmluamVjdChjb21wb25lbnRJZCwgZmFsc2UsIHN0cmluZ2lmeVJ1bGVzKHJ1bGVzKSk7XG4gIH07XG5cbiAgcmV0dXJuIGluamVjdEdsb2JhbDtcbn0pO1xuXG4vLyAgICAgIFxuXG5cbnZhciBfY29uc3RydWN0V2l0aE9wdGlvbnMgPSAoZnVuY3Rpb24gKGNzcykge1xuICB2YXIgY29uc3RydWN0V2l0aE9wdGlvbnMgPSBmdW5jdGlvbiBjb25zdHJ1Y3RXaXRoT3B0aW9ucyhjb21wb25lbnRDb25zdHJ1Y3RvciwgdGFnKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIHRhZyAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHRhZyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gJEZsb3dJbnZhbGlkSW5wdXRUZXN0XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBjcmVhdGUgc3R5bGVkLWNvbXBvbmVudCBmb3IgY29tcG9uZW50OiAnICsgdGFnKTtcbiAgICB9XG5cbiAgICAvKiBUaGlzIGlzIGNhbGxhYmxlIGRpcmVjdGx5IGFzIGEgdGVtcGxhdGUgZnVuY3Rpb24gKi9cbiAgICB2YXIgdGVtcGxhdGVGdW5jdGlvbiA9IGZ1bmN0aW9uIHRlbXBsYXRlRnVuY3Rpb24oc3RyaW5ncykge1xuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGludGVycG9sYXRpb25zID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBpbnRlcnBvbGF0aW9uc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb21wb25lbnRDb25zdHJ1Y3Rvcih0YWcsIG9wdGlvbnMsIGNzcy5hcHBseSh1bmRlZmluZWQsIFtzdHJpbmdzXS5jb25jYXQoaW50ZXJwb2xhdGlvbnMpKSk7XG4gICAgfTtcblxuICAgIC8qIElmIGNvbmZpZyBtZXRob2RzIGFyZSBjYWxsZWQsIHdyYXAgdXAgYSBuZXcgdGVtcGxhdGUgZnVuY3Rpb24gYW5kIG1lcmdlIG9wdGlvbnMgKi9cbiAgICB0ZW1wbGF0ZUZ1bmN0aW9uLndpdGhDb25maWcgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICByZXR1cm4gY29uc3RydWN0V2l0aE9wdGlvbnMoY29tcG9uZW50Q29uc3RydWN0b3IsIHRhZywgX2V4dGVuZHMoe30sIG9wdGlvbnMsIGNvbmZpZykpO1xuICAgIH07XG4gICAgdGVtcGxhdGVGdW5jdGlvbi5hdHRycyA9IGZ1bmN0aW9uIChhdHRycykge1xuICAgICAgcmV0dXJuIGNvbnN0cnVjdFdpdGhPcHRpb25zKGNvbXBvbmVudENvbnN0cnVjdG9yLCB0YWcsIF9leHRlbmRzKHt9LCBvcHRpb25zLCB7XG4gICAgICAgIGF0dHJzOiBfZXh0ZW5kcyh7fSwgb3B0aW9ucy5hdHRycyB8fCB7fSwgYXR0cnMpXG4gICAgICB9KSk7XG4gICAgfTtcblxuICAgIHJldHVybiB0ZW1wbGF0ZUZ1bmN0aW9uO1xuICB9O1xuXG4gIHJldHVybiBjb25zdHJ1Y3RXaXRoT3B0aW9ucztcbn0pO1xuXG4vLyAgICAgIFxuLyogZ2xvYmFscyBSZWFjdENsYXNzICovXG5cbnZhciB3cmFwV2l0aFRoZW1lID0gZnVuY3Rpb24gd3JhcFdpdGhUaGVtZShDb21wb25lbnQkJDEpIHtcbiAgdmFyIF9XaXRoVGhlbWUkY29udGV4dFR5cDtcblxuICB2YXIgY29tcG9uZW50TmFtZSA9IENvbXBvbmVudCQkMS5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQkJDEubmFtZSB8fCAnQ29tcG9uZW50JztcblxuICB2YXIgc2hvdWxkU2V0SW5uZXJSZWYgPSBpc1N0eWxlZENvbXBvbmVudChDb21wb25lbnQkJDEpIHx8XG4gIC8vIE5PVEU6IFdlIGNhbid0IHBhc3MgYSByZWYgdG8gYSBzdGF0ZWxlc3MgZnVuY3Rpb25hbCBjb21wb25lbnRcbiAgdHlwZW9mIENvbXBvbmVudCQkMSA9PT0gJ2Z1bmN0aW9uJyAmJiAhKENvbXBvbmVudCQkMS5wcm90b3R5cGUgJiYgJ2lzUmVhY3RDb21wb25lbnQnIGluIENvbXBvbmVudCQkMS5wcm90b3R5cGUpO1xuXG4gIHZhciBXaXRoVGhlbWUgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIGluaGVyaXRzKFdpdGhUaGVtZSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBXaXRoVGhlbWUoKSB7XG4gICAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBXaXRoVGhlbWUpO1xuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHt9LCBfdGhpcy51bnN1YnNjcmliZUlkID0gLTEsIF90ZW1wKSwgcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gICAgfVxuXG4gICAgLy8gTk9URTogVGhpcyBpcyBzbyB0aGF0IGlzU3R5bGVkQ29tcG9uZW50IHBhc3NlcyBmb3IgdGhlIGlubmVyUmVmIHVud3JhcHBpbmdcblxuXG4gICAgV2l0aFRoZW1lLnByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIGRlZmF1bHRQcm9wcyA9IHRoaXMuY29uc3RydWN0b3IuZGVmYXVsdFByb3BzO1xuXG4gICAgICB2YXIgc3R5bGVkQ29udGV4dCA9IHRoaXMuY29udGV4dFtDSEFOTkVMX05FWFRdO1xuICAgICAgdmFyIHRoZW1lUHJvcCA9IGRldGVybWluZVRoZW1lKHRoaXMucHJvcHMsIHVuZGVmaW5lZCwgZGVmYXVsdFByb3BzKTtcbiAgICAgIGlmIChzdHlsZWRDb250ZXh0ID09PSB1bmRlZmluZWQgJiYgdGhlbWVQcm9wID09PSB1bmRlZmluZWQgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICBjb25zb2xlLndhcm4oJ1t3aXRoVGhlbWVdIFlvdSBhcmUgbm90IHVzaW5nIGEgVGhlbWVQcm92aWRlciBub3IgcGFzc2luZyBhIHRoZW1lIHByb3Agb3IgYSB0aGVtZSBpbiBkZWZhdWx0UHJvcHMnKTtcbiAgICAgIH0gZWxzZSBpZiAoc3R5bGVkQ29udGV4dCA9PT0gdW5kZWZpbmVkICYmIHRoZW1lUHJvcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0aGVtZTogdGhlbWVQcm9wIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHN1YnNjcmliZSA9IHN0eWxlZENvbnRleHQuc3Vic2NyaWJlO1xuXG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmVJZCA9IHN1YnNjcmliZShmdW5jdGlvbiAobmV4dFRoZW1lKSB7XG4gICAgICAgICAgdmFyIHRoZW1lID0gZGV0ZXJtaW5lVGhlbWUoX3RoaXMyLnByb3BzLCBuZXh0VGhlbWUsIGRlZmF1bHRQcm9wcyk7XG4gICAgICAgICAgX3RoaXMyLnNldFN0YXRlKHsgdGhlbWU6IHRoZW1lIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgV2l0aFRoZW1lLnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0aGlzLmNvbnN0cnVjdG9yLmRlZmF1bHRQcm9wcztcblxuICAgICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAob2xkU3RhdGUpIHtcbiAgICAgICAgdmFyIHRoZW1lID0gZGV0ZXJtaW5lVGhlbWUobmV4dFByb3BzLCBvbGRTdGF0ZS50aGVtZSwgZGVmYXVsdFByb3BzKTtcblxuICAgICAgICByZXR1cm4geyB0aGVtZTogdGhlbWUgfTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBXaXRoVGhlbWUucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBpZiAodGhpcy51bnN1YnNjcmliZUlkICE9PSAtMSkge1xuICAgICAgICB0aGlzLmNvbnRleHRbQ0hBTk5FTF9ORVhUXS51bnN1YnNjcmliZSh0aGlzLnVuc3Vic2NyaWJlSWQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBXaXRoVGhlbWUucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcm9wLXR5cGVzXG4gICAgICB2YXIgaW5uZXJSZWYgPSB0aGlzLnByb3BzLmlubmVyUmVmO1xuICAgICAgdmFyIHRoZW1lID0gdGhpcy5zdGF0ZS50aGVtZTtcblxuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQkJDEsIF9leHRlbmRzKHtcbiAgICAgICAgdGhlbWU6IHRoZW1lXG4gICAgICB9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgIGlubmVyUmVmOiBzaG91bGRTZXRJbm5lclJlZiA/IGlubmVyUmVmIDogdW5kZWZpbmVkLFxuICAgICAgICByZWY6IHNob3VsZFNldElubmVyUmVmID8gdW5kZWZpbmVkIDogaW5uZXJSZWZcbiAgICAgIH0pKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFdpdGhUaGVtZTtcbiAgfShSZWFjdC5Db21wb25lbnQpO1xuXG4gIFdpdGhUaGVtZS5kaXNwbGF5TmFtZSA9ICdXaXRoVGhlbWUoJyArIGNvbXBvbmVudE5hbWUgKyAnKSc7XG4gIFdpdGhUaGVtZS5zdHlsZWRDb21wb25lbnRJZCA9ICd3aXRoVGhlbWUnO1xuICBXaXRoVGhlbWUuY29udGV4dFR5cGVzID0gKF9XaXRoVGhlbWUkY29udGV4dFR5cCA9IHt9LCBfV2l0aFRoZW1lJGNvbnRleHRUeXBbQ0hBTk5FTF0gPSBQcm9wVHlwZXMuZnVuYywgX1dpdGhUaGVtZSRjb250ZXh0VHlwW0NIQU5ORUxfTkVYVF0gPSBDT05URVhUX0NIQU5ORUxfU0hBUEUsIF9XaXRoVGhlbWUkY29udGV4dFR5cCk7XG5cblxuICByZXR1cm4gaG9pc3RTdGF0aWNzKFdpdGhUaGVtZSwgQ29tcG9uZW50JCQxKTtcbn07XG5cbi8vICAgICAgXG5cbi8qIEltcG9ydCBzaW5nbGV0b25zICovXG4vKiBJbXBvcnQgc2luZ2xldG9uIGNvbnN0cnVjdG9ycyAqL1xuLyogSW1wb3J0IGNvbXBvbmVudHMgKi9cbi8qIEltcG9ydCBIaWdoZXIgT3JkZXIgQ29tcG9uZW50cyAqL1xuLyogSW5zdGFudGlhdGUgc2luZ2xldG9ucyAqL1xudmFyIENvbXBvbmVudFN0eWxlID0gX0NvbXBvbmVudFN0eWxlKGdlbmVyYXRlQWxwaGFiZXRpY05hbWUsIGZsYXR0ZW4sIHN0cmluZ2lmeVJ1bGVzKTtcbnZhciBjb25zdHJ1Y3RXaXRoT3B0aW9ucyA9IF9jb25zdHJ1Y3RXaXRoT3B0aW9ucyhjc3MpO1xudmFyIFN0eWxlZENvbXBvbmVudCA9IF9TdHlsZWRDb21wb25lbnQoQ29tcG9uZW50U3R5bGUsIGNvbnN0cnVjdFdpdGhPcHRpb25zKTtcblxuLyogSW5zdGFudGlhdGUgZXhwb3J0ZWQgc2luZ2xldG9ucyAqL1xudmFyIGtleWZyYW1lcyA9IF9rZXlmcmFtZXMoZ2VuZXJhdGVBbHBoYWJldGljTmFtZSwgc3RyaW5naWZ5UnVsZXMsIGNzcyk7XG52YXIgaW5qZWN0R2xvYmFsID0gX2luamVjdEdsb2JhbChzdHJpbmdpZnlSdWxlcywgY3NzKTtcbnZhciBzdHlsZWQgPSBfc3R5bGVkKFN0eWxlZENvbXBvbmVudCwgY29uc3RydWN0V2l0aE9wdGlvbnMpO1xuXG5leHBvcnQgeyBjc3MsIGtleWZyYW1lcywgaW5qZWN0R2xvYmFsLCBUaGVtZVByb3ZpZGVyLCB3cmFwV2l0aFRoZW1lIGFzIHdpdGhUaGVtZSwgU2VydmVyU3R5bGVTaGVldCwgU3R5bGVTaGVldE1hbmFnZXIgfTtleHBvcnQgZGVmYXVsdCBzdHlsZWQ7XG4iLCIvKlxuICogICAgICAgICAgX18gICAgICAgIF9fX1xuICogICAgX19fX18vIC9fX18gIF9fLyAoXylfX19fXG4gKiAgIC8gX19fLyBfXy8gLyAvIC8gLyAvIF9fXy9cbiAqICAoX18gICkgL18vIC9fLyAvIC8gKF9fICApXG4gKiAvX19fXy9cXF9fL1xcX18sIC9fL18vX19fXy9cbiAqICAgICAgICAgIC9fX19fL1xuICpcbiAqIGxpZ2h0IC0gd2VpZ2h0IGNzcyBwcmVwcm9jZXNzb3IgQGxpY2VuY2UgTUlUXG4gKi9cbihmdW5jdGlvbiAoZmFjdG9yeSkgey8qIGVzbGludC1kaXNhYmxlICovXG5cdHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IChtb2R1bGVbJ2V4cG9ydHMnXSA9IGZhY3RvcnkobnVsbCkpIDpcblx0XHR0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZVsnYW1kJ10gPyBkZWZpbmUoZmFjdG9yeShudWxsKSkgOlxuXHRcdFx0KHdpbmRvd1snc3R5bGlzJ10gPSBmYWN0b3J5KG51bGwpKVxufSgvKiogQHBhcmFtIHsqPX0gb3B0aW9ucyAqL2Z1bmN0aW9uIGZhY3RvcnkgKG9wdGlvbnMpIHsvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG5cdCd1c2Ugc3RyaWN0J1xuXG5cdC8qKlxuXHQgKiBOb3Rlc1xuXHQgKlxuXHQgKiBUaGUgWyc8bWV0aG9kIG5hbWU+J10gcGF0dGVybiBpcyB1c2VkIHRvIHN1cHBvcnQgY2xvc3VyZSBjb21waWxlclxuXHQgKiB0aGUganNkb2Mgc2lnbmF0dXJlcyBhcmUgYWxzbyB1c2VkIHRvIHRoZSBzYW1lIGVmZmVjdFxuXHQgKlxuXHQgKiAtLS0tXG5cdCAqXG5cdCAqIGludCArIGludCArIGludCA9PT0gbjQgW2Zhc3Rlcl1cblx0ICpcblx0ICogdnNcblx0ICpcblx0ICogaW50ID09PSBuMSAmJiBpbnQgPT09IG4yICYmIGludCA9PT0gbjNcblx0ICpcblx0ICogLS0tLVxuXHQgKlxuXHQgKiBzd2l0Y2ggKGludCkgeyBjYXNlIGludHMuLi59IFtmYXN0ZXJdXG5cdCAqXG5cdCAqIHZzXG5cdCAqXG5cdCAqIGlmIChpbnQgPT0gMSAmJiBpbnQgPT09IDIgLi4uKVxuXHQgKlxuXHQgKiAtLS0tXG5cdCAqXG5cdCAqIFRoZSAoZmlyc3QqbjEgKyBzZWNvbmQqbjIgKyB0aGlyZCpuMykgZm9ybWF0IHVzZWQgaW4gdGhlIHByb3BlcnR5IHBhcnNlclxuXHQgKiBpcyBhIHNpbXBsZSB3YXkgdG8gaGFzaCB0aGUgc2VxdWVuY2Ugb2YgY2hhcmFjdGVyc1xuXHQgKiB0YWtpbmcgaW50byBhY2NvdW50IHRoZSBpbmRleCB0aGV5IG9jY3VyIGluXG5cdCAqIHNpbmNlIGFueSBudW1iZXIgb2YgMyBjaGFyYWN0ZXIgc2VxdWVuY2VzIGNvdWxkIHByb2R1Y2UgZHVwbGljYXRlcy5cblx0ICpcblx0ICogT24gdGhlIG90aGVyIGhhbmQgc2VxdWVuY2VzIHRoYXQgYXJlIGRpcmVjdGx5IHRpZWQgdG8gdGhlIGluZGV4IG9mIHRoZSBjaGFyYWN0ZXJcblx0ICogcmVzb2x2ZSBhIGZhciBtb3JlIGFjY3VyYXRlIG1lYXN1cmUsIGl0J3MgYWxzbyBmYXN0ZXJcblx0ICogdG8gZXZhbHVhdGUgb25lIGNvbmRpdGlvbiBpbiBhIHN3aXRjaCBzdGF0ZW1lbnRcblx0ICogdGhhbiB0aHJlZSBpbiBhbiBpZiBzdGF0ZW1lbnQgcmVnYXJkbGVzcyBvZiB0aGUgYWRkZWQgbWF0aC5cblx0ICpcblx0ICogVGhpcyBhbGxvd3MgdGhlIHZlbmRvciBwcmVmaXhlciB0byBiZSBib3RoIHNtYWxsIGFuZCBmYXN0LlxuXHQgKi9cblxuXHR2YXIgbnVsbHB0biA9IC9eXFwwKy9nIC8qIG1hdGNoZXMgbGVhZGluZyBudWxsIGNoYXJhY3RlcnMgKi9cblx0dmFyIGZvcm1hdHB0biA9IC9bXFwwXFxyXFxmXS9nIC8qIG1hdGNoZXMgbmV3IGxpbmUsIG51bGwgYW5kIGZvcm1mZWVkIGNoYXJhY3RlcnMgKi9cblx0dmFyIGNvbG9ucHRuID0gLzogKi9nIC8qIHNwbGl0cyBhbmltYXRpb24gcnVsZXMgKi9cblx0dmFyIGN1cnNvcnB0biA9IC96b298Z3JhLyAvKiBhc3NlcnQgY3Vyc29yIHZhcmllbnQgKi9cblx0dmFyIHRyYW5zZm9ybXB0biA9IC8oWyw6IF0pKHRyYW5zZm9ybSkvZyAvKiB2ZW5kb3IgcHJlZml4IHRyYW5zZm9ybSwgb2xkZXIgd2Via2l0ICovXG5cdHZhciBhbmltYXRpb25wdG4gPSAvLCtcXHMqKD8hW14oXSpbKV0pL2cgLyogc3BsaXRzIG11bHRpcGxlIHNob3J0aGFuZCBub3RhdGlvbiBhbmltYXRpb25zICovXG5cdHZhciBwcm9wZXJ0aWVzcHRuID0gLyArXFxzKig/IVteKF0qWyldKS9nIC8qIGFuaW1hdGlvbiBwcm9wZXJ0aWVzICovXG5cdHZhciBlbGVtZW50cHRuID0gLyAqW1xcMF0gKi9nIC8qIHNlbGVjdG9yIGVsZW1lbnRzICovXG5cdHZhciBzZWxlY3RvcnB0biA9IC8sXFxyKz8vZyAvKiBzcGxpdHMgc2VsZWN0b3JzICovXG5cdHZhciBhbmRwdG4gPSAvKFtcXHRcXHJcXG4gXSkqXFxmPyYvZyAvKiBtYXRjaCAmICovXG5cdHZhciBlc2NhcGVwdG4gPSAvOmdsb2JhbFxcKCgoPzpbXlxcKFxcKVxcW1xcXV0qfFxcWy4qXFxdfFxcKFteXFwoXFwpXSpcXCkpKilcXCkvZyAvKiBtYXRjaGVzIDpnbG9iYWwoLiopICovXG5cdHZhciBpbnZhbGlkcHRuID0gL1xcVysvZyAvKiByZW1vdmVzIGludmFsaWQgY2hhcmFjdGVycyBmcm9tIGtleWZyYW1lcyAqL1xuXHR2YXIga2V5ZnJhbWVwdG4gPSAvQChrXFx3KylcXHMqKFxcUyopXFxzKi8gLyogbWF0Y2hlcyBAa2V5ZnJhbWVzICQxICovXG5cdHZhciBwbGNob2xkcnB0biA9IC86OihwbGFjZSkvZyAvKiBtYXRjaCA6OnBsYWNlaG9sZGVyIHZhcmllbnQgKi9cblx0dmFyIHJlYWRvbmx5cHRuID0gLzoocmVhZC1vbmx5KS9nIC8qIG1hdGNoIDpyZWFkLW9ubHkgdmFyaWVudCAqL1xuXHR2YXIgYmVmb3JlcHRuID0gL1xccysoPz1be1xcXTs9Oj5dKS9nIC8qIG1hdGNoZXMgXFxzIGJlZm9yZSBdIDsgPSA6ICovXG5cdHZhciBhZnRlcnB0biA9IC8oW1t9PTo+XSlcXHMrL2cgLyogbWF0Y2hlcyBcXHMgYWZ0ZXIgY2hhcmFjdGVycyBbIH0gPSA6ICovXG5cdHZhciB0YWlscHRuID0gLyhcXHtbXntdKz8pOyg/PVxcfSkvZyAvKiBtYXRjaGVzIHRhaWwgc2VtaS1jb2xvbnMgO30gKi9cblx0dmFyIHdoaXRlcHRuID0gL1xcc3syLH0vZyAvKiBtYXRjaGVzIHJlcGVhdGluZyB3aGl0ZXNwYWNlICovXG5cdHZhciBwc2V1ZG9wdG4gPSAvKFteXFwoXSkoOispICovZyAvKiBwc2V1ZG8gZWxlbWVudCAqL1xuXHR2YXIgd3JpdGluZ3B0biA9IC9bc3ZoXVxcdystW3RibHJdezJ9LyAvKiBtYXRjaCB3cml0aW5nIG1vZGUgcHJvcGVydHkgdmFsdWVzICovXG5cdHZhciBncmFkaWVudHB0biA9IC8oW1xcdy1dK3RcXCgpL2cgLyogbWF0Y2ggKmdyYWRpZW50IHByb3BlcnR5ICovXG5cdHZhciBzdXBwb3J0c3B0biA9IC9cXChcXHMqKC4qKVxccypcXCkvZyAvKiBtYXRjaCBzdXBwb3J0cyAoZ3JvdXBzKSAqL1xuXHR2YXIgcHJvcGVydHlwdG4gPSAvKFtcXHNcXFNdKj8pOy9nIC8qIG1hdGNoIHByb3BlcnRpZXMgbGVhZGluZyBzZW1pY29sb24gKi9cblx0dmFyIHNlbGZwdG4gPSAvLXNlbGZ8ZmxleC0vZyAvKiBtYXRjaCBmbGV4LSBhbmQgLXNlbGYgaW4gYWxpZ24tc2VsZjogZmxleC0qOyAqL1xuXHR2YXIgcHNldWRvZm10ID0gL1teXSo/KDpbcnBdW2VsXWFbXFx3LV0rKVteXSovIC8qIGV4dHJhdHMgOnJlYWRvbmx5IG9yIDpwbGFjaG9sZGVyIGZyb20gc2VsZWN0b3IgKi9cblx0dmFyIHRyaW1wdG4gPSAvWyBcXHRdKyQvIC8qIG1hdGNoIHRhaWwgd2hpdHNwYWNlICovXG5cdHZhciBkaW1lbnNpb25wdG4gPSAvc3RyZXRjaHw6XFxzKlxcdytcXC0oPzpjb250ZXxhdmFpbCkvIC8qIG1hdGNoIG1heC9taW4vZml0LWNvbnRlbnQsIGZpbGwtYXZhaWxhYmxlICovXG5cdHZhciBpbWdzcmNwdG4gPSAvKFteLV0pKGltYWdlLXNldFxcKCkvXG5cblx0LyogdmVuZG9ycyAqL1xuXHR2YXIgd2Via2l0ID0gJy13ZWJraXQtJ1xuXHR2YXIgbW96ID0gJy1tb3otJ1xuXHR2YXIgbXMgPSAnLW1zLSdcblxuXHQvKiBjaGFyYWN0ZXIgY29kZXMgKi9cblx0dmFyIFNFTUlDT0xPTiA9IDU5IC8qIDsgKi9cblx0dmFyIENMT1NFQlJBQ0VTID0gMTI1IC8qIH0gKi9cblx0dmFyIE9QRU5CUkFDRVMgPSAxMjMgLyogeyAqL1xuXHR2YXIgT1BFTlBBUkVOVEhFU0VTID0gNDAgLyogKCAqL1xuXHR2YXIgQ0xPU0VQQVJFTlRIRVNFUyA9IDQxIC8qICkgKi9cblx0dmFyIE9QRU5CUkFDS0VUID0gOTEgLyogWyAqL1xuXHR2YXIgQ0xPU0VCUkFDS0VUID0gOTMgLyogXSAqL1xuXHR2YXIgTkVXTElORSA9IDEwIC8qIFxcbiAqL1xuXHR2YXIgQ0FSUklBR0UgPSAxMyAvKiBcXHIgKi9cblx0dmFyIFRBQiA9IDkgLyogXFx0ICovXG5cdHZhciBBVCA9IDY0IC8qIEAgKi9cblx0dmFyIFNQQUNFID0gMzIgLyogICAqL1xuXHR2YXIgQU5EID0gMzggLyogJiAqL1xuXHR2YXIgREFTSCA9IDQ1IC8qIC0gKi9cblx0dmFyIFVOREVSU0NPUkUgPSA5NSAvKiBfICovXG5cdHZhciBTVEFSID0gNDIgLyogKiAqL1xuXHR2YXIgQ09NTUEgPSA0NCAvKiAsICovXG5cdHZhciBDT0xPTiA9IDU4IC8qIDogKi9cblx0dmFyIFNJTkdMRVFVT1RFID0gMzkgLyogJyAqL1xuXHR2YXIgRE9VQkxFUVVPVEUgPSAzNCAvKiBcIiAqL1xuXHR2YXIgRk9XQVJEU0xBU0ggPSA0NyAvKiAvICovXG5cdHZhciBHUkVBVEVSVEhBTiA9IDYyIC8qID4gKi9cblx0dmFyIFBMVVMgPSA0MyAvKiArICovXG5cdHZhciBUSUxERSA9IDEyNiAvKiB+ICovXG5cdHZhciBOVUxMID0gMCAvKiBcXDAgKi9cblx0dmFyIEZPUk1GRUVEID0gMTIgLyogXFxmICovXG5cdHZhciBWRVJUSUNBTFRBQiA9IDExIC8qIFxcdiAqL1xuXG5cdC8qIHNwZWNpYWwgaWRlbnRpZmllcnMgKi9cblx0dmFyIEtFWUZSQU1FID0gMTA3IC8qIGsgKi9cblx0dmFyIE1FRElBID0gMTA5IC8qIG0gKi9cblx0dmFyIFNVUFBPUlRTID0gMTE1IC8qIHMgKi9cblx0dmFyIFBMQUNFSE9MREVSID0gMTEyIC8qIHAgKi9cblx0dmFyIFJFQURPTkxZID0gMTExIC8qIG8gKi9cblx0dmFyIElNUE9SVCA9IDEwNSAvKiA8YXQ+aSAqL1xuXHR2YXIgQ0hBUlNFVCA9IDk5IC8qIDxhdD5jICovXG5cdHZhciBET0NVTUVOVCA9IDEwMCAvKiA8YXQ+ZCAqL1xuXHR2YXIgUEFHRSA9IDExMiAvKiA8YXQ+cCAqL1xuXG5cdHZhciBjb2x1bW4gPSAxIC8qIGN1cnJlbnQgY29sdW1uICovXG5cdHZhciBsaW5lID0gMSAvKiBjdXJyZW50IGxpbmUgbnVtZWJyICovXG5cdHZhciBwYXR0ZXJuID0gMCAvKiA6cGF0dGVybiAqL1xuXG5cdHZhciBjYXNjYWRlID0gMSAvKiAjaWQgaDEgaDIgdnMgaDEjaWQgaDIjaWQgICovXG5cdHZhciBwcmVmaXggPSAxIC8qIHZlbmRvciBwcmVmaXggKi9cblx0dmFyIGVzY2FwZSA9IDEgLyogZXNjYXBlIDpnbG9iYWwoKSBwYXR0ZXJuICovXG5cdHZhciBjb21wcmVzcyA9IDAgLyogY29tcHJlc3Mgb3V0cHV0ICovXG5cdHZhciBzZW1pY29sb24gPSAwIC8qIG5vL3NlbWljb2xvbiBvcHRpb24gKi9cblx0dmFyIHByZXNlcnZlID0gMCAvKiBwcmVzZXJ2ZSBlbXB0eSBzZWxlY3RvcnMgKi9cblxuXHQvKiBlbXB0eSByZWZlcmVuY2UgKi9cblx0dmFyIGFycmF5ID0gW11cblxuXHQvKiBwbHVnaW5zICovXG5cdHZhciBwbHVnaW5zID0gW11cblx0dmFyIHBsdWdnZWQgPSAwXG5cdHZhciBzaG91bGQgPSBudWxsXG5cblx0LyogcGx1Z2luIGNvbnRleHQgKi9cblx0dmFyIFBPU1RTID0gLTJcblx0dmFyIFBSRVBTID0gLTFcblx0dmFyIFVOS1dOID0gMFxuXHR2YXIgUFJPUFMgPSAxXG5cdHZhciBCTENLUyA9IDJcblx0dmFyIEFUUlVMID0gM1xuXG5cdC8qIHBsdWdpbiBuZXdsaW5lIGNvbnRleHQgKi9cblx0dmFyIHVua3duID0gMFxuXG5cdC8qIGtleWZyYW1lIGFuaW1hdGlvbiAqL1xuXHR2YXIga2V5ZWQgPSAxXG5cdHZhciBrZXkgPSAnJ1xuXG5cdC8qIHNlbGVjdG9yIG5hbWVzcGFjZSAqL1xuXHR2YXIgbnNjb3BlYWx0ID0gJydcblx0dmFyIG5zY29wZSA9ICcnXG5cblx0LyoqXG5cdCAqIENvbXBpbGVcblx0ICpcblx0ICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBwYXJlbnRcblx0ICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBjdXJyZW50XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBib2R5XG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBpZFxuXHQgKiBAcGFyYW0ge251bWJlcn0gZGVwdGhcblx0ICogQHJldHVybiB7c3RyaW5nfVxuXHQgKi9cblx0ZnVuY3Rpb24gY29tcGlsZSAocGFyZW50LCBjdXJyZW50LCBib2R5LCBpZCwgZGVwdGgpIHtcblx0XHR2YXIgYnJhY2tldCA9IDAgLyogYnJhY2tldHMgW10gKi9cblx0XHR2YXIgY29tbWVudCA9IDAgLyogY29tbWVudHMgLyogLy8gb3IgLyogKi9cblx0XHR2YXIgcGFyZW50aGVzZXMgPSAwIC8qIGZ1bmN0aW9ucyAoKSAqL1xuXHRcdHZhciBxdW90ZSA9IDAgLyogcXVvdGVzICcnLCBcIlwiICovXG5cblx0XHR2YXIgZmlyc3QgPSAwIC8qIGZpcnN0IGNoYXJhY3RlciBjb2RlICovXG5cdFx0dmFyIHNlY29uZCA9IDAgLyogc2Vjb25kIGNoYXJhY3RlciBjb2RlICovXG5cdFx0dmFyIGNvZGUgPSAwIC8qIGN1cnJlbnQgY2hhcmFjdGVyIGNvZGUgKi9cblx0XHR2YXIgdGFpbCA9IDAgLyogcHJldmlvdXMgY2hhcmFjdGVyIGNvZGUgKi9cblx0XHR2YXIgdHJhaWwgPSAwIC8qIGNoYXJhY3RlciBiZWZvcmUgcHJldmlvdXMgY29kZSAqL1xuXHRcdHZhciBwZWFrID0gMCAvKiBwcmV2aW91cyBub24td2hpdGVzcGFjZSBjb2RlICovXG5cblx0XHR2YXIgY291bnRlciA9IDAgLyogY291bnQgc2VxdWVuY2UgdGVybWluYXRpb24gKi9cblx0XHR2YXIgY29udGV4dCA9IDAgLyogdHJhY2sgY3VycmVudCBjb250ZXh0ICovXG5cdFx0dmFyIGF0cnVsZSA9IDAgLyogdHJhY2sgQGF0LXJ1bGUgY29udGV4dCAqL1xuXHRcdHZhciBwc2V1ZG8gPSAwIC8qIHRyYWNrIHBzZXVkbyB0b2tlbiBpbmRleCAqL1xuXHRcdHZhciBjYXJldCA9IDAgLyogY3VycmVudCBjaGFyYWN0ZXIgaW5kZXggKi9cblx0XHR2YXIgZm9ybWF0ID0gMCAvKiBjb250cm9sIGNoYXJhY3RlciBmb3JtYXRpbmcgY29udGV4dCAqL1xuXHRcdHZhciBpbnNlcnQgPSAwIC8qIGF1dG8gc2VtaWNvbG9uIGluc2VydGlvbiAqL1xuXHRcdHZhciBpbnZlcnQgPSAwIC8qIGludmVydGVkIHNlbGVjdG9yIHBhdHRlcm4gKi9cblx0XHR2YXIgbGVuZ3RoID0gMCAvKiBnZW5lcmljIGxlbmd0aCBhZGRyZXNzICovXG5cdFx0dmFyIGVvZiA9IGJvZHkubGVuZ3RoIC8qIGVuZCBvZiBmaWxlKGxlbmd0aCkgKi9cblx0XHR2YXIgZW9sID0gZW9mIC0gMSAvKiBlbmQgb2YgZmlsZShjaGFyYWN0ZXJzKSAqL1xuXG5cdFx0dmFyIGNoYXIgPSAnJyAvKiBjdXJyZW50IGNoYXJhY3RlciAqL1xuXHRcdHZhciBjaGFycyA9ICcnIC8qIGN1cnJlbnQgYnVmZmVyIG9mIGNoYXJhY3RlcnMgKi9cblx0XHR2YXIgY2hpbGQgPSAnJyAvKiBuZXh0IGJ1ZmZlciBvZiBjaGFyYWN0ZXJzICovXG5cdFx0dmFyIG91dCA9ICcnIC8qIGNvbXBpbGVkIGJvZHkgKi9cblx0XHR2YXIgY2hpbGRyZW4gPSAnJyAvKiBjb21waWxlZCBjaGlsZHJlbiAqL1xuXHRcdHZhciBmbGF0ID0gJycgLyogY29tcGlsZWQgbGVhZnMgKi9cblx0XHR2YXIgc2VsZWN0b3IgLyogZ2VuZXJpYyBzZWxlY3RvciBhZGRyZXNzICovXG5cdFx0dmFyIHJlc3VsdCAvKiBnZW5lcmljIGFkZHJlc3MgKi9cblxuXHRcdC8vIC4uLmJ1aWxkIGJvZHlcblx0XHR3aGlsZSAoY2FyZXQgPCBlb2YpIHtcblx0XHRcdGNvZGUgPSBib2R5LmNoYXJDb2RlQXQoY2FyZXQpXG5cblx0XHRcdC8vIGVvZiB2YXJpZW50XG5cdFx0XHRpZiAoY2FyZXQgPT09IGVvbCkge1xuXHRcdFx0XHQvLyBsYXN0IGNoYXJhY3RlciArIG5vb3AgY29udGV4dCwgYWRkIHN5bnRoZXRpYyBwYWRkaW5nIGZvciBub29wIGNvbnRleHQgdG8gdGVybWluYXRlXG5cdFx0XHRcdGlmIChjb21tZW50ICsgcXVvdGUgKyBwYXJlbnRoZXNlcyArIGJyYWNrZXQgIT09IDApIHtcblx0XHRcdFx0XHRpZiAoY29tbWVudCAhPT0gMCkge1xuXHRcdFx0XHRcdFx0Y29kZSA9IGNvbW1lbnQgPT09IEZPV0FSRFNMQVNIID8gTkVXTElORSA6IEZPV0FSRFNMQVNIXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cXVvdGUgPSBwYXJlbnRoZXNlcyA9IGJyYWNrZXQgPSAwXG5cdFx0XHRcdFx0ZW9mKytcblx0XHRcdFx0XHRlb2wrK1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChjb21tZW50ICsgcXVvdGUgKyBwYXJlbnRoZXNlcyArIGJyYWNrZXQgPT09IDApIHtcblx0XHRcdFx0Ly8gZW9mIHZhcmllbnRcblx0XHRcdFx0aWYgKGNhcmV0ID09PSBlb2wpIHtcblx0XHRcdFx0XHRpZiAoZm9ybWF0ID4gMCkge1xuXHRcdFx0XHRcdFx0Y2hhcnMgPSBjaGFycy5yZXBsYWNlKGZvcm1hdHB0biwgJycpXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKGNoYXJzLnRyaW0oKS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRzd2l0Y2ggKGNvZGUpIHtcblx0XHRcdFx0XHRcdFx0Y2FzZSBTUEFDRTpcblx0XHRcdFx0XHRcdFx0Y2FzZSBUQUI6XG5cdFx0XHRcdFx0XHRcdGNhc2UgU0VNSUNPTE9OOlxuXHRcdFx0XHRcdFx0XHRjYXNlIENBUlJJQUdFOlxuXHRcdFx0XHRcdFx0XHRjYXNlIE5FV0xJTkU6IHtcblx0XHRcdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGRlZmF1bHQ6IHtcblx0XHRcdFx0XHRcdFx0XHRjaGFycyArPSBib2R5LmNoYXJBdChjYXJldClcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRjb2RlID0gU0VNSUNPTE9OXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gYXV0byBzZW1pY29sb24gaW5zZXJ0aW9uXG5cdFx0XHRcdGlmIChpbnNlcnQgPT09IDEpIHtcblx0XHRcdFx0XHRzd2l0Y2ggKGNvZGUpIHtcblx0XHRcdFx0XHRcdC8vIGZhbHNlIGZsYWdzXG5cdFx0XHRcdFx0XHRjYXNlIE9QRU5CUkFDRVM6XG5cdFx0XHRcdFx0XHRjYXNlIENMT1NFQlJBQ0VTOlxuXHRcdFx0XHRcdFx0Y2FzZSBTRU1JQ09MT046XG5cdFx0XHRcdFx0XHRjYXNlIERPVUJMRVFVT1RFOlxuXHRcdFx0XHRcdFx0Y2FzZSBTSU5HTEVRVU9URTpcblx0XHRcdFx0XHRcdGNhc2UgT1BFTlBBUkVOVEhFU0VTOlxuXHRcdFx0XHRcdFx0Y2FzZSBDTE9TRVBBUkVOVEhFU0VTOlxuXHRcdFx0XHRcdFx0Y2FzZSBDT01NQToge1xuXHRcdFx0XHRcdFx0XHRpbnNlcnQgPSAwXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyBpZ25vcmVcblx0XHRcdFx0XHRcdGNhc2UgVEFCOlxuXHRcdFx0XHRcdFx0Y2FzZSBDQVJSSUFHRTpcblx0XHRcdFx0XHRcdGNhc2UgTkVXTElORTpcblx0XHRcdFx0XHRcdGNhc2UgU1BBQ0U6IHtcblx0XHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC8vIHZhbGlkXG5cdFx0XHRcdFx0XHRkZWZhdWx0OiB7XG5cdFx0XHRcdFx0XHRcdGluc2VydCA9IDBcblx0XHRcdFx0XHRcdFx0bGVuZ3RoID0gY2FyZXRcblx0XHRcdFx0XHRcdFx0Zmlyc3QgPSBjb2RlXG5cdFx0XHRcdFx0XHRcdGNhcmV0LS1cblx0XHRcdFx0XHRcdFx0Y29kZSA9IFNFTUlDT0xPTlxuXG5cdFx0XHRcdFx0XHRcdHdoaWxlIChsZW5ndGggPCBlb2YpIHtcblx0XHRcdFx0XHRcdFx0XHRzd2l0Y2ggKGJvZHkuY2hhckNvZGVBdChsZW5ndGgrKykpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgTkVXTElORTpcblx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgQ0FSUklBR0U6XG5cdFx0XHRcdFx0XHRcdFx0XHRjYXNlIFNFTUlDT0xPTjoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQrK2NhcmV0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvZGUgPSBmaXJzdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsZW5ndGggPSBlb2Zcblx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgQ09MT046IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKGZvcm1hdCA+IDApIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQrK2NhcmV0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29kZSA9IGZpcnN0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgT1BFTkJSQUNFUzoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRsZW5ndGggPSBlb2Zcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyB0b2tlbiB2YXJpZW50XG5cdFx0XHRcdHN3aXRjaCAoY29kZSkge1xuXHRcdFx0XHRcdGNhc2UgT1BFTkJSQUNFUzoge1xuXHRcdFx0XHRcdFx0Y2hhcnMgPSBjaGFycy50cmltKClcblx0XHRcdFx0XHRcdGZpcnN0ID0gY2hhcnMuY2hhckNvZGVBdCgwKVxuXHRcdFx0XHRcdFx0Y291bnRlciA9IDFcblx0XHRcdFx0XHRcdGxlbmd0aCA9ICsrY2FyZXRcblxuXHRcdFx0XHRcdFx0d2hpbGUgKGNhcmV0IDwgZW9mKSB7XG5cdFx0XHRcdFx0XHRcdHN3aXRjaCAoY29kZSA9IGJvZHkuY2hhckNvZGVBdChjYXJldCkpIHtcblx0XHRcdFx0XHRcdFx0XHRjYXNlIE9QRU5CUkFDRVM6IHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvdW50ZXIrK1xuXHRcdFx0XHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSBDTE9TRUJSQUNFUzoge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y291bnRlci0tXG5cdFx0XHRcdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRjYXNlIEZPV0FSRFNMQVNIOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRzd2l0Y2ggKHNlY29uZCA9IGJvZHkuY2hhckNvZGVBdChjYXJldCArIDEpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIC8qLCAvL1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjYXNlIFNUQVI6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgRk9XQVJEU0xBU0g6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjYXJldCA9IGRlbGltaXRlZChzZWNvbmQsIGNhcmV0LCBlb2wsIGJvZHkpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdC8vIGdpdmVuIFwiW1wiID09PSA5MSAmIFwiXVwiID09PSA5MyBoZW5jZSBmb3J0aCA5MSArIDEgKyAxID09PSA5M1xuXHRcdFx0XHRcdFx0XHRcdGNhc2UgT1BFTkJSQUNLRVQ6IHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvZGUrK1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHQvLyBnaXZlbiBcIihcIiA9PT0gNDAgJiBcIilcIiA9PT0gNDEgaGVuY2UgZm9ydGggNDAgKyAxID09PSA0MVxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgT1BFTlBBUkVOVEhFU0VTOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb2RlKytcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0Ly8gcXVvdGUgdGFpbCBkZWxpbWl0ZXIgaXMgaWRlbnRpY2FsIHRvIHRoZSBoZWFkIGRlbGltaXRlciBoZW5jZSBub29wLFxuXHRcdFx0XHRcdFx0XHRcdC8vIGZhbGx0aHJvdWdoIGNsYXVzZXMgaGF2ZSBiZWVuIHNoaWZ0ZWQgdG8gdGhlIGNvcnJlY3QgdGFpbCBkZWxpbWl0ZXJcblx0XHRcdFx0XHRcdFx0XHRjYXNlIERPVUJMRVFVT1RFOlxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgU0lOR0xFUVVPVEU6IHtcblx0XHRcdFx0XHRcdFx0XHRcdHdoaWxlIChjYXJldCsrIDwgZW9sKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChib2R5LmNoYXJDb2RlQXQoY2FyZXQpID09PSBjb2RlKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdGlmIChjb3VudGVyID09PSAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdGNhcmV0Kytcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Y2hpbGQgPSBib2R5LnN1YnN0cmluZyhsZW5ndGgsIGNhcmV0KVxuXG5cdFx0XHRcdFx0XHRpZiAoZmlyc3QgPT09IE5VTEwpIHtcblx0XHRcdFx0XHRcdFx0Zmlyc3QgPSAoY2hhcnMgPSBjaGFycy5yZXBsYWNlKG51bGxwdG4sICcnKS50cmltKCkpLmNoYXJDb2RlQXQoMClcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0c3dpdGNoIChmaXJzdCkge1xuXHRcdFx0XHRcdFx0XHQvLyBAYXQtcnVsZVxuXHRcdFx0XHRcdFx0XHRjYXNlIEFUOiB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGZvcm1hdCA+IDApIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNoYXJzID0gY2hhcnMucmVwbGFjZShmb3JtYXRwdG4sICcnKVxuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdHNlY29uZCA9IGNoYXJzLmNoYXJDb2RlQXQoMSlcblxuXHRcdFx0XHRcdFx0XHRcdHN3aXRjaCAoc2Vjb25kKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjYXNlIERPQ1VNRU5UOlxuXHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSBNRURJQTpcblx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgU1VQUE9SVFM6XG5cdFx0XHRcdFx0XHRcdFx0XHRjYXNlIERBU0g6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2VsZWN0b3IgPSBjdXJyZW50XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0OiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNlbGVjdG9yID0gYXJyYXlcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRjaGlsZCA9IGNvbXBpbGUoY3VycmVudCwgc2VsZWN0b3IsIGNoaWxkLCBzZWNvbmQsIGRlcHRoKzEpXG5cdFx0XHRcdFx0XHRcdFx0bGVuZ3RoID0gY2hpbGQubGVuZ3RoXG5cblx0XHRcdFx0XHRcdFx0XHQvLyBwcmVzZXJ2ZSBlbXB0eSBAYXQtcnVsZVxuXHRcdFx0XHRcdFx0XHRcdGlmIChwcmVzZXJ2ZSA+IDAgJiYgbGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRsZW5ndGggPSBjaGFycy5sZW5ndGhcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHQvLyBleGVjdXRlIHBsdWdpbnMsIEBhdC1ydWxlIGNvbnRleHRcblx0XHRcdFx0XHRcdFx0XHRpZiAocGx1Z2dlZCA+IDApIHtcblx0XHRcdFx0XHRcdFx0XHRcdHNlbGVjdG9yID0gc2VsZWN0KGFycmF5LCBjaGFycywgaW52ZXJ0KVxuXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0ID0gcHJveHkoQVRSVUwsIGNoaWxkLCBzZWxlY3RvciwgY3VycmVudCwgbGluZSwgY29sdW1uLCBsZW5ndGgsIHNlY29uZCwgZGVwdGgsIGlkKVxuXHRcdFx0XHRcdFx0XHRcdFx0Y2hhcnMgPSBzZWxlY3Rvci5qb2luKCcnKVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAocmVzdWx0ICE9PSB2b2lkIDApIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKChsZW5ndGggPSAoY2hpbGQgPSByZXN1bHQudHJpbSgpKS5sZW5ndGgpID09PSAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2Vjb25kID0gMFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNoaWxkID0gJydcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGlmIChsZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRzd2l0Y2ggKHNlY29uZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjYXNlIFNVUFBPUlRTOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hhcnMgPSBjaGFycy5yZXBsYWNlKHN1cHBvcnRzcHRuLCBzdXBwb3J0cylcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjYXNlIERPQ1VNRU5UOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjYXNlIE1FRElBOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjYXNlIERBU0g6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjaGlsZCA9IGNoYXJzICsgJ3snICsgY2hpbGQgKyAnfSdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgS0VZRlJBTUU6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjaGFycyA9IGNoYXJzLnJlcGxhY2Uoa2V5ZnJhbWVwdG4sICckMSAkMicgKyAoa2V5ZWQgPiAwID8ga2V5IDogJycpKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNoaWxkID0gY2hhcnMgKyAneycgKyBjaGlsZCArICd9J1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKHByZWZpeCA9PT0gMSB8fCAocHJlZml4ID09PSAyICYmIHZlbmRvcignQCcrY2hpbGQsIDMpKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hpbGQgPSAnQCcgKyB3ZWJraXQgKyBjaGlsZCArICdAJyArIGNoaWxkXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNoaWxkID0gJ0AnICsgY2hpbGRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0OiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hpbGQgPSBjaGFycyArIGNoaWxkXG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoaWQgPT09IFBBR0UpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNoaWxkID0gKG91dCArPSBjaGlsZCwgJycpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNoaWxkID0gJydcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC8vIHNlbGVjdG9yXG5cdFx0XHRcdFx0XHRcdGRlZmF1bHQ6IHtcblx0XHRcdFx0XHRcdFx0XHRjaGlsZCA9IGNvbXBpbGUoY3VycmVudCwgc2VsZWN0KGN1cnJlbnQsIGNoYXJzLCBpbnZlcnQpLCBjaGlsZCwgaWQsIGRlcHRoKzEpXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Y2hpbGRyZW4gKz0gY2hpbGRcblxuXHRcdFx0XHRcdFx0Ly8gcmVzZXRcblx0XHRcdFx0XHRcdGNvbnRleHQgPSAwXG5cdFx0XHRcdFx0XHRpbnNlcnQgPSAwXG5cdFx0XHRcdFx0XHRwc2V1ZG8gPSAwXG5cdFx0XHRcdFx0XHRmb3JtYXQgPSAwXG5cdFx0XHRcdFx0XHRpbnZlcnQgPSAwXG5cdFx0XHRcdFx0XHRhdHJ1bGUgPSAwXG5cdFx0XHRcdFx0XHRjaGFycyA9ICcnXG5cdFx0XHRcdFx0XHRjaGlsZCA9ICcnXG5cdFx0XHRcdFx0XHRjb2RlID0gYm9keS5jaGFyQ29kZUF0KCsrY2FyZXQpXG5cdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjYXNlIENMT1NFQlJBQ0VTOlxuXHRcdFx0XHRcdGNhc2UgU0VNSUNPTE9OOiB7XG5cdFx0XHRcdFx0XHRjaGFycyA9IChmb3JtYXQgPiAwID8gY2hhcnMucmVwbGFjZShmb3JtYXRwdG4sICcnKSA6IGNoYXJzKS50cmltKClcblxuXHRcdFx0XHRcdFx0aWYgKChsZW5ndGggPSBjaGFycy5sZW5ndGgpID4gMSkge1xuXHRcdFx0XHRcdFx0XHQvLyBtb25rZXktcGF0Y2ggbWlzc2luZyBjb2xvblxuXHRcdFx0XHRcdFx0XHRpZiAocHNldWRvID09PSAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0Zmlyc3QgPSBjaGFycy5jaGFyQ29kZUF0KDApXG5cblx0XHRcdFx0XHRcdFx0XHQvLyBmaXJzdCBjaGFyYWN0ZXIgaXMgYSBsZXR0ZXIgb3IgZGFzaCwgYnVmZmVyIGhhcyBhIHNwYWNlIGNoYXJhY3RlclxuXHRcdFx0XHRcdFx0XHRcdGlmICgoZmlyc3QgPT09IERBU0ggfHwgZmlyc3QgPiA5NiAmJiBmaXJzdCA8IDEyMykpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGxlbmd0aCA9IChjaGFycyA9IGNoYXJzLnJlcGxhY2UoJyAnLCAnOicpKS5sZW5ndGhcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQvLyBleGVjdXRlIHBsdWdpbnMsIHByb3BlcnR5IGNvbnRleHRcblx0XHRcdFx0XHRcdFx0aWYgKHBsdWdnZWQgPiAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKChyZXN1bHQgPSBwcm94eShQUk9QUywgY2hhcnMsIGN1cnJlbnQsIHBhcmVudCwgbGluZSwgY29sdW1uLCBvdXQubGVuZ3RoLCBpZCwgZGVwdGgsIGlkKSkgIT09IHZvaWQgMCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKChsZW5ndGggPSAoY2hhcnMgPSByZXN1bHQudHJpbSgpKS5sZW5ndGgpID09PSAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNoYXJzID0gJ1xcMFxcMCdcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRmaXJzdCA9IGNoYXJzLmNoYXJDb2RlQXQoMClcblx0XHRcdFx0XHRcdFx0c2Vjb25kID0gY2hhcnMuY2hhckNvZGVBdCgxKVxuXG5cdFx0XHRcdFx0XHRcdHN3aXRjaCAoZmlyc3QpIHtcblx0XHRcdFx0XHRcdFx0XHRjYXNlIE5VTEw6IHtcblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgQVQ6IHtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChzZWNvbmQgPT09IElNUE9SVCB8fCBzZWNvbmQgPT09IENIQVJTRVQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxhdCArPSBjaGFycyArIGJvZHkuY2hhckF0KGNhcmV0KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0OiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoY2hhcnMuY2hhckNvZGVBdChsZW5ndGgtMSkgPT09IENPTE9OKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdG91dCArPSBwcm9wZXJ0eShjaGFycywgZmlyc3QsIHNlY29uZCwgY2hhcnMuY2hhckNvZGVBdCgyKSlcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gcmVzZXRcblx0XHRcdFx0XHRcdGNvbnRleHQgPSAwXG5cdFx0XHRcdFx0XHRpbnNlcnQgPSAwXG5cdFx0XHRcdFx0XHRwc2V1ZG8gPSAwXG5cdFx0XHRcdFx0XHRmb3JtYXQgPSAwXG5cdFx0XHRcdFx0XHRpbnZlcnQgPSAwXG5cdFx0XHRcdFx0XHRjaGFycyA9ICcnXG5cdFx0XHRcdFx0XHRjb2RlID0gYm9keS5jaGFyQ29kZUF0KCsrY2FyZXQpXG5cdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBwYXJzZSBjaGFyYWN0ZXJzXG5cdFx0XHRzd2l0Y2ggKGNvZGUpIHtcblx0XHRcdFx0Y2FzZSBDQVJSSUFHRTpcblx0XHRcdFx0Y2FzZSBORVdMSU5FOiB7XG5cdFx0XHRcdFx0Ly8gYXV0byBpbnNlcnQgc2VtaWNvbG9uXG5cdFx0XHRcdFx0aWYgKGNvbW1lbnQgKyBxdW90ZSArIHBhcmVudGhlc2VzICsgYnJhY2tldCArIHNlbWljb2xvbiA9PT0gMCkge1xuXHRcdFx0XHRcdFx0Ly8gdmFsaWQgbm9uLXdoaXRlc3BhY2UgY2hhcmFjdGVycyB0aGF0XG5cdFx0XHRcdFx0XHQvLyBtYXkgcHJlY2VkZSBhIG5ld2xpbmVcblx0XHRcdFx0XHRcdHN3aXRjaCAocGVhaykge1xuXHRcdFx0XHRcdFx0XHRjYXNlIENMT1NFUEFSRU5USEVTRVM6XG5cdFx0XHRcdFx0XHRcdGNhc2UgU0lOR0xFUVVPVEU6XG5cdFx0XHRcdFx0XHRcdGNhc2UgRE9VQkxFUVVPVEU6XG5cdFx0XHRcdFx0XHRcdGNhc2UgQVQ6XG5cdFx0XHRcdFx0XHRcdGNhc2UgVElMREU6XG5cdFx0XHRcdFx0XHRcdGNhc2UgR1JFQVRFUlRIQU46XG5cdFx0XHRcdFx0XHRcdGNhc2UgU1RBUjpcblx0XHRcdFx0XHRcdFx0Y2FzZSBQTFVTOlxuXHRcdFx0XHRcdFx0XHRjYXNlIEZPV0FSRFNMQVNIOlxuXHRcdFx0XHRcdFx0XHRjYXNlIERBU0g6XG5cdFx0XHRcdFx0XHRcdGNhc2UgQ09MT046XG5cdFx0XHRcdFx0XHRcdGNhc2UgQ09NTUE6XG5cdFx0XHRcdFx0XHRcdGNhc2UgU0VNSUNPTE9OOlxuXHRcdFx0XHRcdFx0XHRjYXNlIE9QRU5CUkFDRVM6XG5cdFx0XHRcdFx0XHRcdGNhc2UgQ0xPU0VCUkFDRVM6IHtcblx0XHRcdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGRlZmF1bHQ6IHtcblx0XHRcdFx0XHRcdFx0XHQvLyBjdXJyZW50IGJ1ZmZlciBoYXMgYSBjb2xvblxuXHRcdFx0XHRcdFx0XHRcdGlmIChwc2V1ZG8gPiAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpbnNlcnQgPSAxXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gdGVybWluYXRlIGxpbmUgY29tbWVudFxuXHRcdFx0XHRcdGlmIChjb21tZW50ID09PSBGT1dBUkRTTEFTSCkge1xuXHRcdFx0XHRcdFx0Y29tbWVudCA9IDBcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGNhc2NhZGUgKyBjb250ZXh0ID09PSAwICYmIGlkICE9PSBLRVlGUkFNRSAmJiBjaGFycy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRmb3JtYXQgPSAxXG5cdFx0XHRcdFx0XHRjaGFycyArPSAnXFwwJ1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIGV4ZWN1dGUgcGx1Z2lucywgbmV3bGluZSBjb250ZXh0XG5cdFx0XHRcdFx0aWYgKHBsdWdnZWQgKiB1bmt3biA+IDApIHtcblx0XHRcdFx0XHRcdHByb3h5KFVOS1dOLCBjaGFycywgY3VycmVudCwgcGFyZW50LCBsaW5lLCBjb2x1bW4sIG91dC5sZW5ndGgsIGlkLCBkZXB0aCwgaWQpXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gbmV4dCBsaW5lLCByZXNldCBjb2x1bW4gcG9zaXRpb25cblx0XHRcdFx0XHRjb2x1bW4gPSAxXG5cdFx0XHRcdFx0bGluZSsrXG5cdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0fVxuXHRcdFx0XHRjYXNlIFNFTUlDT0xPTjpcblx0XHRcdFx0Y2FzZSBDTE9TRUJSQUNFUzoge1xuXHRcdFx0XHRcdGlmIChjb21tZW50ICsgcXVvdGUgKyBwYXJlbnRoZXNlcyArIGJyYWNrZXQgPT09IDApIHtcblx0XHRcdFx0XHRcdGNvbHVtbisrXG5cdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRkZWZhdWx0OiB7XG5cdFx0XHRcdFx0Ly8gaW5jcmVtZW50IGNvbHVtbiBwb3NpdGlvblxuXHRcdFx0XHRcdGNvbHVtbisrXG5cblx0XHRcdFx0XHQvLyBjdXJyZW50IGNoYXJhY3RlclxuXHRcdFx0XHRcdGNoYXIgPSBib2R5LmNoYXJBdChjYXJldClcblxuXHRcdFx0XHRcdC8vIHJlbW92ZSBjb21tZW50cywgZXNjYXBlIGZ1bmN0aW9ucywgc3RyaW5ncywgYXR0cmlidXRlcyBhbmQgcHJlcGFyZSBzZWxlY3RvcnNcblx0XHRcdFx0XHRzd2l0Y2ggKGNvZGUpIHtcblx0XHRcdFx0XHRcdGNhc2UgVEFCOlxuXHRcdFx0XHRcdFx0Y2FzZSBTUEFDRToge1xuXHRcdFx0XHRcdFx0XHRpZiAocXVvdGUgKyBicmFja2V0ICsgY29tbWVudCA9PT0gMCkge1xuXHRcdFx0XHRcdFx0XHRcdHN3aXRjaCAodGFpbCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSBDT01NQTpcblx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgQ09MT046XG5cdFx0XHRcdFx0XHRcdFx0XHRjYXNlIFRBQjpcblx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgU1BBQ0U6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hhciA9ICcnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0OiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChjb2RlICE9PSBTUEFDRSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNoYXIgPSAnICdcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Ly8gZXNjYXBlIGJyZWFraW5nIGNvbnRyb2wgY2hhcmFjdGVyc1xuXHRcdFx0XHRcdFx0Y2FzZSBOVUxMOiB7XG5cdFx0XHRcdFx0XHRcdGNoYXIgPSAnXFxcXDAnXG5cdFx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjYXNlIEZPUk1GRUVEOiB7XG5cdFx0XHRcdFx0XHRcdGNoYXIgPSAnXFxcXGYnXG5cdFx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjYXNlIFZFUlRJQ0FMVEFCOiB7XG5cdFx0XHRcdFx0XHRcdGNoYXIgPSAnXFxcXHYnXG5cdFx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyAmXG5cdFx0XHRcdFx0XHRjYXNlIEFORDoge1xuXHRcdFx0XHRcdFx0XHQvLyBpbnZlcnRlZCBzZWxlY3RvciBwYXR0ZXJuIGkuZSBodG1sICZcblx0XHRcdFx0XHRcdFx0aWYgKHF1b3RlICsgY29tbWVudCArIGJyYWNrZXQgPT09IDAgJiYgY2FzY2FkZSA+IDApIHtcblx0XHRcdFx0XHRcdFx0XHRpbnZlcnQgPSAxXG5cdFx0XHRcdFx0XHRcdFx0Zm9ybWF0ID0gMVxuXHRcdFx0XHRcdFx0XHRcdGNoYXIgPSAnXFxmJyArIGNoYXJcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Ly8gOjpwPGw+YWNlaG9sZGVyLCBsXG5cdFx0XHRcdFx0XHQvLyA6cmVhZC1vbjxsPnksIGxcblx0XHRcdFx0XHRcdGNhc2UgMTA4OiB7XG5cdFx0XHRcdFx0XHRcdGlmIChxdW90ZSArIGNvbW1lbnQgKyBicmFja2V0ICsgcGF0dGVybiA9PT0gMCAmJiBwc2V1ZG8gPiAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0c3dpdGNoIChjYXJldCAtIHBzZXVkbykge1xuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gOjpwbGFjZWhvbGRlclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSAyOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmICh0YWlsID09PSBQTEFDRUhPTERFUiAmJiBib2R5LmNoYXJDb2RlQXQoY2FyZXQtMykgPT09IENPTE9OKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGF0dGVybiA9IHRhaWxcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gOnJlYWQtb25seVxuXHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSA4OiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmICh0cmFpbCA9PT0gUkVBRE9OTFkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYXR0ZXJuID0gdHJhaWxcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Ly8gOjxwYXR0ZXJuPlxuXHRcdFx0XHRcdFx0Y2FzZSBDT0xPTjoge1xuXHRcdFx0XHRcdFx0XHRpZiAocXVvdGUgKyBjb21tZW50ICsgYnJhY2tldCA9PT0gMCkge1xuXHRcdFx0XHRcdFx0XHRcdHBzZXVkbyA9IGNhcmV0XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC8vIHNlbGVjdG9yc1xuXHRcdFx0XHRcdFx0Y2FzZSBDT01NQToge1xuXHRcdFx0XHRcdFx0XHRpZiAoY29tbWVudCArIHBhcmVudGhlc2VzICsgcXVvdGUgKyBicmFja2V0ID09PSAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0Zm9ybWF0ID0gMVxuXHRcdFx0XHRcdFx0XHRcdGNoYXIgKz0gJ1xccidcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Ly8gcXVvdGVzXG5cdFx0XHRcdFx0XHRjYXNlIERPVUJMRVFVT1RFOlxuXHRcdFx0XHRcdFx0Y2FzZSBTSU5HTEVRVU9URToge1xuXHRcdFx0XHRcdFx0XHRpZiAoY29tbWVudCA9PT0gMCkge1xuXHRcdFx0XHRcdFx0XHRcdHF1b3RlID0gcXVvdGUgPT09IGNvZGUgPyAwIDogKHF1b3RlID09PSAwID8gY29kZSA6IHF1b3RlKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyBhdHRyaWJ1dGVzXG5cdFx0XHRcdFx0XHRjYXNlIE9QRU5CUkFDS0VUOiB7XG5cdFx0XHRcdFx0XHRcdGlmIChxdW90ZSArIGNvbW1lbnQgKyBwYXJlbnRoZXNlcyA9PT0gMCkge1xuXHRcdFx0XHRcdFx0XHRcdGJyYWNrZXQrK1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjYXNlIENMT1NFQlJBQ0tFVDoge1xuXHRcdFx0XHRcdFx0XHRpZiAocXVvdGUgKyBjb21tZW50ICsgcGFyZW50aGVzZXMgPT09IDApIHtcblx0XHRcdFx0XHRcdFx0XHRicmFja2V0LS1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Ly8gZnVuY3Rpb25zXG5cdFx0XHRcdFx0XHRjYXNlIENMT1NFUEFSRU5USEVTRVM6IHtcblx0XHRcdFx0XHRcdFx0aWYgKHF1b3RlICsgY29tbWVudCArIGJyYWNrZXQgPT09IDApIHtcblx0XHRcdFx0XHRcdFx0XHRwYXJlbnRoZXNlcy0tXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGNhc2UgT1BFTlBBUkVOVEhFU0VTOiB7XG5cdFx0XHRcdFx0XHRcdGlmIChxdW90ZSArIGNvbW1lbnQgKyBicmFja2V0ID09PSAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGNvbnRleHQgPT09IDApIHtcblx0XHRcdFx0XHRcdFx0XHRcdHN3aXRjaCAodGFpbCoyICsgdHJhaWwqMykge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyA6bWF0Y2hlc1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjYXNlIDUzMzoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gOmdsb2JhbCwgOm5vdCwgOm50aC1jaGlsZCBldGMuLi5cblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvdW50ZXIgPSAwXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29udGV4dCA9IDFcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdHBhcmVudGhlc2VzKytcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Y2FzZSBBVDoge1xuXHRcdFx0XHRcdFx0XHRpZiAoY29tbWVudCArIHBhcmVudGhlc2VzICsgcXVvdGUgKyBicmFja2V0ICsgcHNldWRvICsgYXRydWxlID09PSAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0YXRydWxlID0gMVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyBibG9jay9saW5lIGNvbW1lbnRzXG5cdFx0XHRcdFx0XHRjYXNlIFNUQVI6XG5cdFx0XHRcdFx0XHRjYXNlIEZPV0FSRFNMQVNIOiB7XG5cdFx0XHRcdFx0XHRcdGlmIChxdW90ZSArIGJyYWNrZXQgKyBwYXJlbnRoZXNlcyA+IDApIHtcblx0XHRcdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0c3dpdGNoIChjb21tZW50KSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gaW5pdGlhbGl6ZSBsaW5lL2Jsb2NrIGNvbW1lbnQgY29udGV4dFxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgMDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0c3dpdGNoIChjb2RlKjIgKyBib2R5LmNoYXJDb2RlQXQoY2FyZXQrMSkqMykge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyAvL1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjYXNlIDIzNToge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbW1lbnQgPSBGT1dBUkRTTEFTSFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gLypcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSAyMjA6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsZW5ndGggPSBjYXJldFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbW1lbnQgPSBTVEFSXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0Ly8gZW5kIGJsb2NrIGNvbW1lbnQgY29udGV4dFxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgU1RBUjoge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGNvZGUgPT09IEZPV0FSRFNMQVNIICYmIHRhaWwgPT09IFNUQVIgJiYgbGVuZ3RoICsgMiAhPT0gY2FyZXQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gLyo8IT4gLi4uICovLCAhXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChib2R5LmNoYXJDb2RlQXQobGVuZ3RoKzIpID09PSAzMykge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG91dCArPSBib2R5LnN1YnN0cmluZyhsZW5ndGgsIGNhcmV0KzEpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hhciA9ICcnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbW1lbnQgPSAwXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gaWdub3JlIGNvbW1lbnQgYmxvY2tzXG5cdFx0XHRcdFx0aWYgKGNvbW1lbnQgPT09IDApIHtcblx0XHRcdFx0XHRcdC8vIGFnZ3Jlc3NpdmUgaXNvbGF0aW9uIG1vZGUsIGRpdmlkZSBlYWNoIGluZGl2aWR1YWwgc2VsZWN0b3Jcblx0XHRcdFx0XHRcdC8vIGluY2x1ZGluZyBzZWxlY3RvcnMgaW4gOm5vdCBmdW5jdGlvbiBidXQgZXhjbHVkaW5nIHNlbGVjdG9ycyBpbiA6Z2xvYmFsIGZ1bmN0aW9uXG5cdFx0XHRcdFx0XHRpZiAoY2FzY2FkZSArIHF1b3RlICsgYnJhY2tldCArIGF0cnVsZSA9PT0gMCAmJiBpZCAhPT0gS0VZRlJBTUUgJiYgY29kZSAhPT0gU0VNSUNPTE9OKSB7XG5cdFx0XHRcdFx0XHRcdHN3aXRjaCAoY29kZSkge1xuXHRcdFx0XHRcdFx0XHRcdGNhc2UgQ09NTUE6XG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSBUSUxERTpcblx0XHRcdFx0XHRcdFx0XHRjYXNlIEdSRUFURVJUSEFOOlxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgUExVUzpcblx0XHRcdFx0XHRcdFx0XHRjYXNlIENMT1NFUEFSRU5USEVTRVM6XG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSBPUEVOUEFSRU5USEVTRVM6IHtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChjb250ZXh0ID09PSAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIG91dHNpZGUgb2YgYW4gaXNvbGF0ZWQgY29udGV4dCBpLmUgbnRoLWNoaWxkKDwuLi4+KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzd2l0Y2ggKHRhaWwpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjYXNlIFRBQjpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjYXNlIFNQQUNFOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgTkVXTElORTpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjYXNlIENBUlJJQUdFOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjaGFyID0gY2hhciArICdcXDAnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0OiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjaGFyID0gJ1xcMCcgKyBjaGFyICsgKGNvZGUgPT09IENPTU1BID8gJycgOiAnXFwwJylcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9ybWF0ID0gMVxuXHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gd2l0aGluIGFuIGlzb2xhdGVkIGNvbnRleHQsIHNsZWVwIHVudGlsbCBpdCdzIHRlcm1pbmF0ZWRcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3dpdGNoIChjb2RlKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSBPUEVOUEFSRU5USEVTRVM6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIDpnbG9iYTxsPihcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChwc2V1ZG8gKyA3ID09PSBjYXJldCAmJiB0YWlsID09PSAxMDgpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cHNldWRvID0gMFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29udGV4dCA9ICsrY291bnRlclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSBDTE9TRVBBUkVOVEhFU0VTOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoKGNvbnRleHQgPSAtLWNvdW50ZXIpID09PSAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvcm1hdCA9IDFcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hhciArPSAnXFwwJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgVEFCOlxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgU1BBQ0U6IHtcblx0XHRcdFx0XHRcdFx0XHRcdHN3aXRjaCAodGFpbCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjYXNlIE5VTEw6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgT1BFTkJSQUNFUzpcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSBDTE9TRUJSQUNFUzpcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSBTRU1JQ09MT046XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgQ09NTUE6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgRk9STUZFRUQ6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgVEFCOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjYXNlIFNQQUNFOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjYXNlIE5FV0xJTkU6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgQ0FSUklBR0U6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHQ6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBpZ25vcmUgaW4gaXNvbGF0ZWQgY29udGV4dHNcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoY29udGV4dCA9PT0gMCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9ybWF0ID0gMVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hhciArPSAnXFwwJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBjb25jYXQgYnVmZmVyIG9mIGNoYXJhY3RlcnNcblx0XHRcdFx0XHRcdGNoYXJzICs9IGNoYXJcblxuXHRcdFx0XHRcdFx0Ly8gcHJldmlvdXMgbm9uLXdoaXRlc3BhY2UgY2hhcmFjdGVyIGNvZGVcblx0XHRcdFx0XHRcdGlmIChjb2RlICE9PSBTUEFDRSAmJiBjb2RlICE9PSBUQUIpIHtcblx0XHRcdFx0XHRcdFx0cGVhayA9IGNvZGVcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gdGFpbCBjaGFyYWN0ZXIgY29kZXNcblx0XHRcdHRyYWlsID0gdGFpbFxuXHRcdFx0dGFpbCA9IGNvZGVcblxuXHRcdFx0Ly8gdmlzaXQgZXZlcnkgY2hhcmFjdGVyXG5cdFx0XHRjYXJldCsrXG5cdFx0fVxuXG5cdFx0bGVuZ3RoID0gb3V0Lmxlbmd0aFxuXG5cdFx0Ly8gcHJlc2VydmUgZW1wdHkgc2VsZWN0b3JcbiBcdFx0aWYgKHByZXNlcnZlID4gMCkge1xuIFx0XHRcdGlmIChsZW5ndGggPT09IDAgJiYgY2hpbGRyZW4ubGVuZ3RoID09PSAwICYmIChjdXJyZW50WzBdLmxlbmd0aCA9PT0gMCkgPT09IGZhbHNlKSB7XG4gXHRcdFx0XHRpZiAoaWQgIT09IE1FRElBIHx8IChjdXJyZW50Lmxlbmd0aCA9PT0gMSAmJiAoY2FzY2FkZSA+IDAgPyBuc2NvcGVhbHQgOiBuc2NvcGUpID09PSBjdXJyZW50WzBdKSkge1xuXHRcdFx0XHRcdGxlbmd0aCA9IGN1cnJlbnQuam9pbignLCcpLmxlbmd0aCArIDJcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGxlbmd0aCA+IDApIHtcblx0XHRcdC8vIGNhc2NhZGUgaXNvbGF0aW9uIG1vZGU/XG5cdFx0XHRzZWxlY3RvciA9IGNhc2NhZGUgPT09IDAgJiYgaWQgIT09IEtFWUZSQU1FID8gaXNvbGF0ZShjdXJyZW50KSA6IGN1cnJlbnRcblxuXHRcdFx0Ly8gZXhlY3V0ZSBwbHVnaW5zLCBibG9jayBjb250ZXh0XG5cdFx0XHRpZiAocGx1Z2dlZCA+IDApIHtcblx0XHRcdFx0cmVzdWx0ID0gcHJveHkoQkxDS1MsIG91dCwgc2VsZWN0b3IsIHBhcmVudCwgbGluZSwgY29sdW1uLCBsZW5ndGgsIGlkLCBkZXB0aCwgaWQpXG5cblx0XHRcdFx0aWYgKHJlc3VsdCAhPT0gdm9pZCAwICYmIChvdXQgPSByZXN1bHQpLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdHJldHVybiBmbGF0ICsgb3V0ICsgY2hpbGRyZW5cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRvdXQgPSBzZWxlY3Rvci5qb2luKCcsJykgKyAneycgKyBvdXQgKyAnfSdcblxuXHRcdFx0aWYgKHByZWZpeCpwYXR0ZXJuICE9PSAwKSB7XG5cdFx0XHRcdGlmIChwcmVmaXggPT09IDIgJiYgIXZlbmRvcihvdXQsIDIpKVxuXHRcdFx0XHRcdHBhdHRlcm4gPSAwXG5cblx0XHRcdFx0c3dpdGNoIChwYXR0ZXJuKSB7XG5cdFx0XHRcdFx0Ly8gOjpyZWFkLW9ubHlcblx0XHRcdFx0XHRjYXNlIFJFQURPTkxZOiB7XG5cdFx0XHRcdFx0XHRvdXQgPSBvdXQucmVwbGFjZShyZWFkb25seXB0biwgJzonK21veisnJDEnKStvdXRcblx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIDo6cGxhY2Vob2xkZXJcblx0XHRcdFx0XHRjYXNlIFBMQUNFSE9MREVSOiB7XG5cdFx0XHRcdFx0XHRvdXQgPSAoXG5cdFx0XHRcdFx0XHRcdG91dC5yZXBsYWNlKHBsY2hvbGRycHRuLCAnOjonICsgd2Via2l0ICsgJ2lucHV0LSQxJykgK1xuXHRcdFx0XHRcdFx0XHRvdXQucmVwbGFjZShwbGNob2xkcnB0biwgJzo6JyArIG1veiArICckMScpICtcblx0XHRcdFx0XHRcdFx0b3V0LnJlcGxhY2UocGxjaG9sZHJwdG4sICc6JyArIG1zICsgJ2lucHV0LSQxJykgKyBvdXRcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0cGF0dGVybiA9IDBcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZmxhdCArIG91dCArIGNoaWxkcmVuXG5cdH1cblxuXHQvKipcblx0ICogU2VsZWN0XG5cdCAqXG5cdCAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gcGFyZW50XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjdXJyZW50XG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBpbnZlcnRcblx0ICogQHJldHVybiB7QXJyYXk8c3RyaW5nPn1cblx0ICovXG5cdGZ1bmN0aW9uIHNlbGVjdCAocGFyZW50LCBjdXJyZW50LCBpbnZlcnQpIHtcblx0XHR2YXIgc2VsZWN0b3JzID0gY3VycmVudC50cmltKCkuc3BsaXQoc2VsZWN0b3JwdG4pXG5cdFx0dmFyIG91dCA9IHNlbGVjdG9yc1xuXG5cdFx0dmFyIGxlbmd0aCA9IHNlbGVjdG9ycy5sZW5ndGhcblx0XHR2YXIgbCA9IHBhcmVudC5sZW5ndGhcblxuXHRcdHN3aXRjaCAobCkge1xuXHRcdFx0Ly8gMC0xIHBhcmVudCBzZWxlY3RvcnNcblx0XHRcdGNhc2UgMDpcblx0XHRcdGNhc2UgMToge1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMCwgc2VsZWN0b3IgPSBsID09PSAwID8gJycgOiBwYXJlbnRbMF0gKyAnICc7IGkgPCBsZW5ndGg7ICsraSkge1xuXHRcdFx0XHRcdG91dFtpXSA9IHNjb3BlKHNlbGVjdG9yLCBvdXRbaV0sIGludmVydCwgbCkudHJpbSgpXG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWtcblx0XHRcdH1cblx0XHRcdC8vID4yIHBhcmVudCBzZWxlY3RvcnMsIG5lc3RlZFxuXHRcdFx0ZGVmYXVsdDoge1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMCwgaiA9IDAsIG91dCA9IFtdOyBpIDwgbGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0XHRmb3IgKHZhciBrID0gMDsgayA8IGw7ICsraykge1xuXHRcdFx0XHRcdFx0b3V0W2orK10gPSBzY29wZShwYXJlbnRba10gKyAnICcsIHNlbGVjdG9yc1tpXSwgaW52ZXJ0LCBsKS50cmltKClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gb3V0XG5cdH1cblxuXHQvKipcblx0ICogU2NvcGVcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHBhcmVudFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gY3VycmVudFxuXHQgKiBAcGFyYW0ge251bWJlcn0gaW52ZXJ0XG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBsZXZlbFxuXHQgKiBAcmV0dXJuIHtzdHJpbmd9XG5cdCAqL1xuXHRmdW5jdGlvbiBzY29wZSAocGFyZW50LCBjdXJyZW50LCBpbnZlcnQsIGxldmVsKSB7XG5cdFx0dmFyIHNlbGVjdG9yID0gY3VycmVudFxuXHRcdHZhciBjb2RlID0gc2VsZWN0b3IuY2hhckNvZGVBdCgwKVxuXG5cdFx0Ly8gdHJpbSBsZWFkaW5nIHdoaXRlc3BhY2Vcblx0XHRpZiAoY29kZSA8IDMzKSB7XG5cdFx0XHRjb2RlID0gKHNlbGVjdG9yID0gc2VsZWN0b3IudHJpbSgpKS5jaGFyQ29kZUF0KDApXG5cdFx0fVxuXG5cdFx0c3dpdGNoIChjb2RlKSB7XG5cdFx0XHQvLyAmXG5cdFx0XHRjYXNlIEFORDoge1xuXHRcdFx0XHRzd2l0Y2ggKGNhc2NhZGUgKyBsZXZlbCkge1xuXHRcdFx0XHRcdGNhc2UgMDpcblx0XHRcdFx0XHRjYXNlIDE6IHtcblx0XHRcdFx0XHRcdGlmIChwYXJlbnQudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRkZWZhdWx0OiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gc2VsZWN0b3IucmVwbGFjZShhbmRwdG4sICckMScrcGFyZW50LnRyaW0oKSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWtcblx0XHRcdH1cblx0XHRcdC8vIDpcblx0XHRcdGNhc2UgQ09MT046IHtcblx0XHRcdFx0c3dpdGNoIChzZWxlY3Rvci5jaGFyQ29kZUF0KDEpKSB7XG5cdFx0XHRcdFx0Ly8gZyBpbiA6Z2xvYmFsXG5cdFx0XHRcdFx0Y2FzZSAxMDM6IHtcblx0XHRcdFx0XHRcdGlmIChlc2NhcGUgPiAwICYmIGNhc2NhZGUgPiAwKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBzZWxlY3Rvci5yZXBsYWNlKGVzY2FwZXB0biwgJyQxJykucmVwbGFjZShhbmRwdG4sICckMScrbnNjb3BlKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZGVmYXVsdDoge1xuXHRcdFx0XHRcdFx0Ly8gOmhvdmVyXG5cdFx0XHRcdFx0XHRyZXR1cm4gcGFyZW50LnRyaW0oKSArIHNlbGVjdG9yLnJlcGxhY2UoYW5kcHRuLCAnJDEnK3BhcmVudC50cmltKCkpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRkZWZhdWx0OiB7XG5cdFx0XHRcdC8vIGh0bWwgJlxuXHRcdFx0XHRpZiAoaW52ZXJ0KmNhc2NhZGUgPiAwICYmIHNlbGVjdG9yLmluZGV4T2YoJ1xcZicpID4gMCkge1xuXHRcdFx0XHRcdHJldHVybiBzZWxlY3Rvci5yZXBsYWNlKGFuZHB0biwgKHBhcmVudC5jaGFyQ29kZUF0KDApID09PSBDT0xPTiA/ICcnIDogJyQxJykrcGFyZW50LnRyaW0oKSlcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBwYXJlbnQgKyBzZWxlY3RvclxuXHR9XG5cblx0LyoqXG5cdCAqIFByb3BlcnR5XG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dFxuXHQgKiBAcGFyYW0ge251bWJlcn0gZmlyc3Rcblx0ICogQHBhcmFtIHtudW1iZXJ9IHNlY29uZFxuXHQgKiBAcGFyYW0ge251bWJlcn0gdGhpcmRcblx0ICogQHJldHVybiB7c3RyaW5nfVxuXHQgKi9cblx0ZnVuY3Rpb24gcHJvcGVydHkgKGlucHV0LCBmaXJzdCwgc2Vjb25kLCB0aGlyZCkge1xuXHRcdHZhciBpbmRleCA9IDBcblx0XHR2YXIgb3V0ID0gaW5wdXQgKyAnOydcblx0XHR2YXIgaGFzaCA9IChmaXJzdCoyKSArIChzZWNvbmQqMykgKyAodGhpcmQqNClcblx0XHR2YXIgY2FjaGVcblxuXHRcdC8vIGFuaW1hdGlvbjogYSwgbiwgaSBjaGFyYWN0ZXJzXG5cdFx0aWYgKGhhc2ggPT09IDk0NCkge1xuXHRcdFx0cmV0dXJuIGFuaW1hdGlvbihvdXQpXG5cdFx0fSBlbHNlIGlmIChwcmVmaXggPT09IDAgfHwgKHByZWZpeCA9PT0gMiAmJiAhdmVuZG9yKG91dCwgMSkpKSB7XG5cdFx0XHRyZXR1cm4gb3V0XG5cdFx0fVxuXG5cdFx0Ly8gdmVuZG9yIHByZWZpeFxuXHRcdHN3aXRjaCAoaGFzaCkge1xuXHRcdFx0Ly8gdGV4dC1kZWNvcmF0aW9uL3RleHQtc2l6ZS1hZGp1c3QvdGV4dC1zaGFkb3cvdGV4dC1hbGlnbi90ZXh0LXRyYW5zZm9ybTogdCwgZSwgeFxuXHRcdFx0Y2FzZSAxMDE1OiB7XG5cdFx0XHRcdC8vIHRleHQtc2hhZG93L3RleHQtYWxpZ24vdGV4dC10cmFuc2Zvcm0sIGFcblx0XHRcdFx0cmV0dXJuIG91dC5jaGFyQ29kZUF0KDEwKSA9PT0gOTcgPyB3ZWJraXQgKyBvdXQgKyBvdXQgOiBvdXRcblx0XHRcdH1cblx0XHRcdC8vIGZpbHRlci9maWxsIGYsIGksIGxcblx0XHRcdGNhc2UgOTUxOiB7XG5cdFx0XHRcdC8vIGZpbHRlciwgdFxuXHRcdFx0XHRyZXR1cm4gb3V0LmNoYXJDb2RlQXQoMykgPT09IDExNiA/IHdlYmtpdCArIG91dCArIG91dCA6IG91dFxuXHRcdFx0fVxuXHRcdFx0Ly8gY29sb3IvY29sdW1uLCBjLCBvLCBsXG5cdFx0XHRjYXNlIDk2Mzoge1xuXHRcdFx0XHQvLyBjb2x1bW4sIG5cblx0XHRcdFx0cmV0dXJuIG91dC5jaGFyQ29kZUF0KDUpID09PSAxMTAgPyB3ZWJraXQgKyBvdXQgKyBvdXQgOiBvdXRcblx0XHRcdH1cblx0XHRcdC8vIGJveC1kZWNvcmF0aW9uLWJyZWFrLCBiLCBvLCB4XG5cdFx0XHRjYXNlIDEwMDk6IHtcblx0XHRcdFx0aWYgKG91dC5jaGFyQ29kZUF0KDQpICE9PSAxMDApIHtcblx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBtYXNrLCBtLCBhLCBzXG5cdFx0XHQvLyBjbGlwLXBhdGgsIGMsIGwsIGlcblx0XHRcdGNhc2UgOTY5OlxuXHRcdFx0Y2FzZSA5NDI6IHtcblx0XHRcdFx0cmV0dXJuIHdlYmtpdCArIG91dCArIG91dFxuXHRcdFx0fVxuXHRcdFx0Ly8gYXBwZWFyYW5jZTogYSwgcCwgcFxuXHRcdFx0Y2FzZSA5Nzg6IHtcblx0XHRcdFx0cmV0dXJuIHdlYmtpdCArIG91dCArIG1veiArIG91dCArIG91dFxuXHRcdFx0fVxuXHRcdFx0Ly8gaHlwaGVuczogaCwgeSwgcFxuXHRcdFx0Ly8gdXNlci1zZWxlY3Q6IHUsIHMsIGVcblx0XHRcdGNhc2UgMTAxOTpcblx0XHRcdGNhc2UgOTgzOiB7XG5cdFx0XHRcdHJldHVybiB3ZWJraXQgKyBvdXQgKyBtb3ogKyBvdXQgKyBtcyArIG91dCArIG91dFxuXHRcdFx0fVxuXHRcdFx0Ly8gYmFja2dyb3VuZC9iYWNrZmFjZS12aXNpYmlsaXR5LCBiLCBhLCBjXG5cdFx0XHRjYXNlIDg4Mzoge1xuXHRcdFx0XHQvLyBiYWNrZmFjZS12aXNpYmlsaXR5LCAtXG5cdFx0XHRcdGlmIChvdXQuY2hhckNvZGVBdCg4KSA9PT0gREFTSCkge1xuXHRcdFx0XHRcdHJldHVybiB3ZWJraXQgKyBvdXQgKyBvdXRcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIGltYWdlLXNldCguLi4pXG5cdFx0XHRcdGlmIChvdXQuaW5kZXhPZignaW1hZ2Utc2V0KCcsIDExKSA+IDApIHtcblx0XHRcdFx0XHRyZXR1cm4gb3V0LnJlcGxhY2UoaW1nc3JjcHRuLCAnJDEnK3dlYmtpdCsnJDInKSArIG91dFxuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIG91dFxuXHRcdFx0fVxuXHRcdFx0Ly8gZmxleDogZiwgbCwgZVxuXHRcdFx0Y2FzZSA5MzI6IHtcblx0XHRcdFx0aWYgKG91dC5jaGFyQ29kZUF0KDQpID09PSBEQVNIKSB7XG5cdFx0XHRcdFx0c3dpdGNoIChvdXQuY2hhckNvZGVBdCg1KSkge1xuXHRcdFx0XHRcdFx0Ly8gZmxleC1ncm93LCBnXG5cdFx0XHRcdFx0XHRjYXNlIDEwMzoge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gd2Via2l0ICsgJ2JveC0nICsgb3V0LnJlcGxhY2UoJy1ncm93JywgJycpICsgd2Via2l0ICsgb3V0ICsgbXMgKyBvdXQucmVwbGFjZSgnZ3JvdycsICdwb3NpdGl2ZScpICsgb3V0XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyBmbGV4LXNocmluaywgc1xuXHRcdFx0XHRcdFx0Y2FzZSAxMTU6IHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHdlYmtpdCArIG91dCArIG1zICsgb3V0LnJlcGxhY2UoJ3NocmluaycsICduZWdhdGl2ZScpICsgb3V0XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyBmbGV4LWJhc2lzLCBiXG5cdFx0XHRcdFx0XHRjYXNlIDk4OiB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB3ZWJraXQgKyBvdXQgKyBtcyArIG91dC5yZXBsYWNlKCdiYXNpcycsICdwcmVmZXJyZWQtc2l6ZScpICsgb3V0XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIHdlYmtpdCArIG91dCArIG1zICsgb3V0ICsgb3V0XG5cdFx0XHR9XG5cdFx0XHQvLyBvcmRlcjogbywgciwgZFxuXHRcdFx0Y2FzZSA5NjQ6IHtcblx0XHRcdFx0cmV0dXJuIHdlYmtpdCArIG91dCArIG1zICsgJ2ZsZXgnICsgJy0nICsgb3V0ICsgb3V0XG5cdFx0XHR9XG5cdFx0XHQvLyBqdXN0aWZ5LWl0ZW1zL2p1c3RpZnktY29udGVudCwgaiwgdSwgc1xuXHRcdFx0Y2FzZSAxMDIzOiB7XG5cdFx0XHRcdC8vIGp1c3RpZnktY29udGVudCwgY1xuXHRcdFx0XHRpZiAob3V0LmNoYXJDb2RlQXQoOCkgIT09IDk5KSB7XG5cdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNhY2hlID0gb3V0LnN1YnN0cmluZyhvdXQuaW5kZXhPZignOicsIDE1KSkucmVwbGFjZSgnZmxleC0nLCAnJykucmVwbGFjZSgnc3BhY2UtYmV0d2VlbicsICdqdXN0aWZ5Jylcblx0XHRcdFx0cmV0dXJuIHdlYmtpdCArICdib3gtcGFjaycgKyBjYWNoZSArIHdlYmtpdCArIG91dCArIG1zICsgJ2ZsZXgtcGFjaycgKyBjYWNoZSArIG91dFxuXHRcdFx0fVxuXHRcdFx0Ly8gY3Vyc29yLCBjLCB1LCByXG5cdFx0XHRjYXNlIDEwMDU6IHtcblx0XHRcdFx0cmV0dXJuIGN1cnNvcnB0bi50ZXN0KG91dCkgPyBvdXQucmVwbGFjZShjb2xvbnB0biwgJzonICsgd2Via2l0KSArIG91dC5yZXBsYWNlKGNvbG9ucHRuLCAnOicgKyBtb3opICsgb3V0IDogb3V0XG5cdFx0XHR9XG5cdFx0XHQvLyB3cml0aW5nLW1vZGUsIHcsIHIsIGlcblx0XHRcdGNhc2UgMTAwMDoge1xuXHRcdFx0XHRjYWNoZSA9IG91dC5zdWJzdHJpbmcoMTMpLnRyaW0oKVxuXHRcdFx0XHRpbmRleCA9IGNhY2hlLmluZGV4T2YoJy0nKSArIDFcblxuXHRcdFx0XHRzd2l0Y2ggKGNhY2hlLmNoYXJDb2RlQXQoMCkrY2FjaGUuY2hhckNvZGVBdChpbmRleCkpIHtcblx0XHRcdFx0XHQvLyB2ZXJ0aWNhbC1sclxuXHRcdFx0XHRcdGNhc2UgMjI2OiB7XG5cdFx0XHRcdFx0XHRjYWNoZSA9IG91dC5yZXBsYWNlKHdyaXRpbmdwdG4sICd0YicpXG5cdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyB2ZXJ0aWNhbC1ybFxuXHRcdFx0XHRcdGNhc2UgMjMyOiB7XG5cdFx0XHRcdFx0XHRjYWNoZSA9IG91dC5yZXBsYWNlKHdyaXRpbmdwdG4sICd0Yi1ybCcpXG5cdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBob3Jpem9udGFsLXRiXG5cdFx0XHRcdFx0Y2FzZSAyMjA6IHtcblx0XHRcdFx0XHRcdGNhY2hlID0gb3V0LnJlcGxhY2Uod3JpdGluZ3B0biwgJ2xyJylcblx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGRlZmF1bHQ6IHtcblx0XHRcdFx0XHRcdHJldHVybiBvdXRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gd2Via2l0ICsgb3V0ICsgbXMgKyBjYWNoZSArIG91dFxuXHRcdFx0fVxuXHRcdFx0Ly8gcG9zaXRpb246IHN0aWNreVxuXHRcdFx0Y2FzZSAxMDE3OiB7XG5cdFx0XHRcdGlmIChvdXQuaW5kZXhPZignc3RpY2t5JywgOSkgPT09IC0xKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG91dFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBkaXNwbGF5KGZsZXgvaW5saW5lLWZsZXgvaW5saW5lLWJveCk6IGQsIGksIHNcblx0XHRcdGNhc2UgOTc1OiB7XG5cdFx0XHRcdGluZGV4ID0gKG91dCA9IGlucHV0KS5sZW5ndGggLSAxMFxuXHRcdFx0XHRjYWNoZSA9IChvdXQuY2hhckNvZGVBdChpbmRleCkgPT09IDMzID8gb3V0LnN1YnN0cmluZygwLCBpbmRleCkgOiBvdXQpLnN1YnN0cmluZyhpbnB1dC5pbmRleE9mKCc6JywgNykgKyAxKS50cmltKClcblxuXHRcdFx0XHRzd2l0Y2ggKGhhc2ggPSBjYWNoZS5jaGFyQ29kZUF0KDApICsgKGNhY2hlLmNoYXJDb2RlQXQoNyl8MCkpIHtcblx0XHRcdFx0XHQvLyBpbmxpbmUtXG5cdFx0XHRcdFx0Y2FzZSAyMDM6IHtcblx0XHRcdFx0XHRcdC8vIGlubGluZS1ib3hcblx0XHRcdFx0XHRcdGlmIChjYWNoZS5jaGFyQ29kZUF0KDgpIDwgMTExKSB7XG5cdFx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIGlubGluZS1ib3gvc3RpY2t5XG5cdFx0XHRcdFx0Y2FzZSAxMTU6IHtcblx0XHRcdFx0XHRcdG91dCA9IG91dC5yZXBsYWNlKGNhY2hlLCB3ZWJraXQrY2FjaGUpKyc7JytvdXRcblx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIGlubGluZS1mbGV4XG5cdFx0XHRcdFx0Ly8gZmxleFxuXHRcdFx0XHRcdGNhc2UgMjA3OlxuXHRcdFx0XHRcdGNhc2UgMTAyOiB7XG5cdFx0XHRcdFx0XHRvdXQgPSAoXG5cdFx0XHRcdFx0XHRcdG91dC5yZXBsYWNlKGNhY2hlLCB3ZWJraXQrKGhhc2ggPiAxMDIgPyAnaW5saW5lLScgOiAnJykrJ2JveCcpKyc7Jytcblx0XHRcdFx0XHRcdFx0b3V0LnJlcGxhY2UoY2FjaGUsIHdlYmtpdCtjYWNoZSkrJzsnK1xuXHRcdFx0XHRcdFx0XHRvdXQucmVwbGFjZShjYWNoZSwgbXMrY2FjaGUrJ2JveCcpKyc7Jytcblx0XHRcdFx0XHRcdFx0b3V0XG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIG91dCArICc7J1xuXHRcdFx0fVxuXHRcdFx0Ly8gYWxpZ24taXRlbXMsIGFsaWduLWNlbnRlciwgYWxpZ24tc2VsZjogYSwgbCwgaSwgLVxuXHRcdFx0Y2FzZSA5Mzg6IHtcblx0XHRcdFx0aWYgKG91dC5jaGFyQ29kZUF0KDUpID09PSBEQVNIKSB7XG5cdFx0XHRcdFx0c3dpdGNoIChvdXQuY2hhckNvZGVBdCg2KSkge1xuXHRcdFx0XHRcdFx0Ly8gYWxpZ24taXRlbXMsIGlcblx0XHRcdFx0XHRcdGNhc2UgMTA1OiB7XG5cdFx0XHRcdFx0XHRcdGNhY2hlID0gb3V0LnJlcGxhY2UoJy1pdGVtcycsICcnKVxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gd2Via2l0ICsgb3V0ICsgd2Via2l0ICsgJ2JveC0nICsgY2FjaGUgKyBtcyArICdmbGV4LScgKyBjYWNoZSArIG91dFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Ly8gYWxpZ24tc2VsZiwgc1xuXHRcdFx0XHRcdFx0Y2FzZSAxMTU6IHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHdlYmtpdCArIG91dCArIG1zICsgJ2ZsZXgtaXRlbS0nICsgb3V0LnJlcGxhY2Uoc2VsZnB0biwgJycpICsgb3V0XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyBhbGlnbi1jb250ZW50XG5cdFx0XHRcdFx0XHRkZWZhdWx0OiB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB3ZWJraXQgKyBvdXQgKyBtcyArICdmbGV4LWxpbmUtcGFjaycgKyBvdXQucmVwbGFjZSgnYWxpZ24tY29udGVudCcsICcnKS5yZXBsYWNlKHNlbGZwdG4sICcnKSArIG91dFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRicmVha1xuXHRcdFx0fVxuXHRcdFx0Ly8gbWluL21heFxuXHRcdFx0Y2FzZSA5NzM6XG5cdFx0XHRjYXNlIDk4OToge1xuXHRcdFx0XHQvLyBtaW4tL21heC0gaGVpZ2h0L3dpZHRoL2Jsb2NrLXNpemUvaW5saW5lLXNpemVcblx0XHRcdFx0aWYgKG91dC5jaGFyQ29kZUF0KDMpICE9PSBEQVNIIHx8IG91dC5jaGFyQ29kZUF0KDQpID09PSAxMjIpIHtcblx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBoZWlnaHQvd2lkdGg6IG1pbi1jb250ZW50IC8gd2lkdGg6IG1heC1jb250ZW50XG5cdFx0XHRjYXNlIDkzMTpcblx0XHRcdGNhc2UgOTUzOiB7XG5cdFx0XHRcdGlmIChkaW1lbnNpb25wdG4udGVzdChpbnB1dCkgPT09IHRydWUpIHtcblx0XHRcdFx0XHQvLyBzdHJldGNoXG5cdFx0XHRcdFx0aWYgKChjYWNoZSA9IGlucHV0LnN1YnN0cmluZyhpbnB1dC5pbmRleE9mKCc6JykgKyAxKSkuY2hhckNvZGVBdCgwKSA9PT0gMTE1KVxuXHRcdFx0XHRcdFx0cmV0dXJuIHByb3BlcnR5KGlucHV0LnJlcGxhY2UoJ3N0cmV0Y2gnLCAnZmlsbC1hdmFpbGFibGUnKSwgZmlyc3QsIHNlY29uZCwgdGhpcmQpLnJlcGxhY2UoJzpmaWxsLWF2YWlsYWJsZScsICc6c3RyZXRjaCcpXG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0cmV0dXJuIG91dC5yZXBsYWNlKGNhY2hlLCB3ZWJraXQgKyBjYWNoZSkgKyBvdXQucmVwbGFjZShjYWNoZSwgbW96ICsgY2FjaGUucmVwbGFjZSgnZmlsbC0nLCAnJykpICsgb3V0XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWtcblx0XHRcdH1cblx0XHRcdC8vIHRyYW5zZm9ybSwgdHJhbnNpdGlvbjogdCwgciwgYVxuXHRcdFx0Y2FzZSA5NjI6IHtcblx0XHRcdFx0b3V0ID0gd2Via2l0ICsgb3V0ICsgKG91dC5jaGFyQ29kZUF0KDUpID09PSAxMDIgPyBtcyArIG91dCA6ICcnKSArIG91dFxuXG5cdFx0XHRcdC8vIHRyYW5zaXRpb25zXG5cdFx0XHRcdGlmIChzZWNvbmQgKyB0aGlyZCA9PT0gMjExICYmIG91dC5jaGFyQ29kZUF0KDEzKSA9PT0gMTA1ICYmIG91dC5pbmRleE9mKCd0cmFuc2Zvcm0nLCAxMCkgPiAwKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG91dC5zdWJzdHJpbmcoMCwgb3V0LmluZGV4T2YoJzsnLCAyNykgKyAxKS5yZXBsYWNlKHRyYW5zZm9ybXB0biwgJyQxJyArIHdlYmtpdCArICckMicpICsgb3V0XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRicmVha1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBvdXRcblx0fVxuXG5cdC8qKlxuXHQgKiBWZW5kb3Jcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnRcblx0ICogQHBhcmFtIHtudW1iZXJ9IGNvbnRleHRcblx0ICogQHJldHVybiB7Ym9vbGVhbn1cblx0ICovXG5cdGZ1bmN0aW9uIHZlbmRvciAoY29udGVudCwgY29udGV4dCkge1xuXHRcdHZhciBpbmRleCA9IGNvbnRlbnQuaW5kZXhPZihjb250ZXh0ID09PSAxID8gJzonIDogJ3snKVxuXHRcdHZhciBrZXkgPSBjb250ZW50LnN1YnN0cmluZygwLCBjb250ZXh0ICE9PSAzID8gaW5kZXggOiAxMClcblx0XHR2YXIgdmFsdWUgPSBjb250ZW50LnN1YnN0cmluZyhpbmRleCArIDEsIGNvbnRlbnQubGVuZ3RoIC0gMSlcblxuXHRcdHJldHVybiBzaG91bGQoY29udGV4dCAhPT0gMiA/IGtleSA6IGtleS5yZXBsYWNlKHBzZXVkb2ZtdCwgJyQxJyksIHZhbHVlLCBjb250ZXh0KVxuXHR9XG5cblx0LyoqXG5cdCAqIFN1cHBvcnRzXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBtYXRjaFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZ3JvdXBcblx0ICogQHJldHVybiB7c3RyaW5nfVxuXHQgKi9cblx0ZnVuY3Rpb24gc3VwcG9ydHMgKG1hdGNoLCBncm91cCkge1xuXHRcdHZhciBvdXQgPSBwcm9wZXJ0eShncm91cCwgZ3JvdXAuY2hhckNvZGVBdCgwKSwgZ3JvdXAuY2hhckNvZGVBdCgxKSwgZ3JvdXAuY2hhckNvZGVBdCgyKSlcblxuXHRcdHJldHVybiBvdXQgIT09IGdyb3VwKyc7JyA/IG91dC5yZXBsYWNlKHByb3BlcnR5cHRuLCAnIG9yICgkMSknKS5zdWJzdHJpbmcoNCkgOiAnKCcrZ3JvdXArJyknXG5cdH1cblxuXHQvKipcblx0ICogQW5pbWF0aW9uXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dFxuXHQgKiBAcmV0dXJuIHtzdHJpbmd9XG5cdCAqL1xuXHRmdW5jdGlvbiBhbmltYXRpb24gKGlucHV0KSB7XG5cdFx0dmFyIGxlbmd0aCA9IGlucHV0Lmxlbmd0aFxuXHRcdHZhciBpbmRleCA9IGlucHV0LmluZGV4T2YoJzonLCA5KSArIDFcblx0XHR2YXIgZGVjbGFyZSA9IGlucHV0LnN1YnN0cmluZygwLCBpbmRleCkudHJpbSgpXG5cdFx0dmFyIG91dCA9IGlucHV0LnN1YnN0cmluZyhpbmRleCwgbGVuZ3RoLTEpLnRyaW0oKVxuXG5cdFx0c3dpdGNoIChpbnB1dC5jaGFyQ29kZUF0KDkpKmtleWVkKSB7XG5cdFx0XHRjYXNlIDA6IHtcblx0XHRcdFx0YnJlYWtcblx0XHRcdH1cblx0XHRcdC8vIGFuaW1hdGlvbi0qLCAtXG5cdFx0XHRjYXNlIERBU0g6IHtcblx0XHRcdFx0Ly8gYW5pbWF0aW9uLW5hbWUsIG5cblx0XHRcdFx0aWYgKGlucHV0LmNoYXJDb2RlQXQoMTApICE9PSAxMTApIHtcblx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBhbmltYXRpb24vYW5pbWF0aW9uLW5hbWVcblx0XHRcdGRlZmF1bHQ6IHtcblx0XHRcdFx0Ly8gc3BsaXQgaW4gY2FzZSBvZiBtdWx0aXBsZSBhbmltYXRpb25zXG5cdFx0XHRcdHZhciBsaXN0ID0gb3V0LnNwbGl0KChvdXQgPSAnJywgYW5pbWF0aW9ucHRuKSlcblxuXHRcdFx0XHRmb3IgKHZhciBpID0gMCwgaW5kZXggPSAwLCBsZW5ndGggPSBsaXN0Lmxlbmd0aDsgaSA8IGxlbmd0aDsgaW5kZXggPSAwLCArK2kpIHtcblx0XHRcdFx0XHR2YXIgdmFsdWUgPSBsaXN0W2ldXG5cdFx0XHRcdFx0dmFyIGl0ZW1zID0gdmFsdWUuc3BsaXQocHJvcGVydGllc3B0bilcblxuXHRcdFx0XHRcdHdoaWxlICh2YWx1ZSA9IGl0ZW1zW2luZGV4XSkge1xuXHRcdFx0XHRcdFx0dmFyIHBlYWsgPSB2YWx1ZS5jaGFyQ29kZUF0KDApXG5cblx0XHRcdFx0XHRcdGlmIChrZXllZCA9PT0gMSAmJiAoXG5cdFx0XHRcdFx0XHRcdC8vIGxldHRlcnNcblx0XHRcdFx0XHRcdFx0KHBlYWsgPiBBVCAmJiBwZWFrIDwgOTApIHx8IChwZWFrID4gOTYgJiYgcGVhayA8IDEyMykgfHwgcGVhayA9PT0gVU5ERVJTQ09SRSB8fFxuXHRcdFx0XHRcdFx0XHQvLyBkYXNoIGJ1dCBub3QgaW4gc2VxdWVuY2UgaS5lIC0tXG5cdFx0XHRcdFx0XHRcdChwZWFrID09PSBEQVNIICYmIHZhbHVlLmNoYXJDb2RlQXQoMSkgIT09IERBU0gpXG5cdFx0XHRcdFx0XHQpKSB7XG5cdFx0XHRcdFx0XHRcdC8vIG5vdCBhIG51bWJlci9mdW5jdGlvblxuXHRcdFx0XHRcdFx0XHRzd2l0Y2ggKGlzTmFOKHBhcnNlRmxvYXQodmFsdWUpKSArICh2YWx1ZS5pbmRleE9mKCcoJykgIT09IC0xKSkge1xuXHRcdFx0XHRcdFx0XHRcdGNhc2UgMToge1xuXHRcdFx0XHRcdFx0XHRcdFx0c3dpdGNoICh2YWx1ZSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBub3QgYSB2YWxpZCByZXNlcnZlZCBrZXl3b3JkXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgJ2luZmluaXRlJzogY2FzZSAnYWx0ZXJuYXRlJzogY2FzZSAnYmFja3dhcmRzJzogY2FzZSAncnVubmluZyc6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgJ25vcm1hbCc6IGNhc2UgJ2ZvcndhcmRzJzogY2FzZSAnYm90aCc6IGNhc2UgJ25vbmUnOiBjYXNlICdsaW5lYXInOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjYXNlICdlYXNlJzogY2FzZSAnZWFzZS1pbic6IGNhc2UgJ2Vhc2Utb3V0JzogY2FzZSAnZWFzZS1pbi1vdXQnOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjYXNlICdwYXVzZWQnOiBjYXNlICdyZXZlcnNlJzogY2FzZSAnYWx0ZXJuYXRlLXJldmVyc2UnOiBjYXNlICdpbmhlcml0Jzpcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSAnaW5pdGlhbCc6IGNhc2UgJ3Vuc2V0JzogY2FzZSAnc3RlcC1zdGFydCc6IGNhc2UgJ3N0ZXAtZW5kJzoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlICs9IGtleVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGl0ZW1zW2luZGV4KytdID0gdmFsdWVcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRvdXQgKz0gKGkgPT09IDAgPyAnJyA6ICcsJykgKyBpdGVtcy5qb2luKCcgJylcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdG91dCA9IGRlY2xhcmUgKyBvdXQgKyAnOydcblxuXHRcdGlmIChwcmVmaXggPT09IDEgfHwgKHByZWZpeCA9PT0gMiAmJiB2ZW5kb3Iob3V0LCAxKSkpXG5cdFx0XHRyZXR1cm4gd2Via2l0ICsgb3V0ICsgb3V0XG5cblx0XHRyZXR1cm4gb3V0XG5cdH1cblxuXHQvKipcblx0ICogSXNvbGF0ZVxuXHQgKlxuXHQgKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IGN1cnJlbnRcblx0ICovXG5cdGZ1bmN0aW9uIGlzb2xhdGUgKGN1cnJlbnQpIHtcblx0XHRmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gY3VycmVudC5sZW5ndGgsIHNlbGVjdG9yID0gQXJyYXkobGVuZ3RoKSwgcGFkZGluZywgZWxlbWVudDsgaSA8IGxlbmd0aDsgKytpKSB7XG5cdFx0XHQvLyBzcGxpdCBpbmRpdmlkdWFsIGVsZW1lbnRzIGluIGEgc2VsZWN0b3IgaS5lIGgxIGgyID09PSBbaDEsIGgyXVxuXHRcdFx0dmFyIGVsZW1lbnRzID0gY3VycmVudFtpXS5zcGxpdChlbGVtZW50cHRuKVxuXHRcdFx0dmFyIG91dCA9ICcnXG5cblx0XHRcdGZvciAodmFyIGogPSAwLCBzaXplID0gMCwgdGFpbCA9IDAsIGNvZGUgPSAwLCBsID0gZWxlbWVudHMubGVuZ3RoOyBqIDwgbDsgKytqKSB7XG5cdFx0XHRcdC8vIGVtcHR5IGVsZW1lbnRcblx0XHRcdFx0aWYgKChzaXplID0gKGVsZW1lbnQgPSBlbGVtZW50c1tqXSkubGVuZ3RoKSA9PT0gMCAmJiBsID4gMSkge1xuXHRcdFx0XHRcdGNvbnRpbnVlXG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0YWlsID0gb3V0LmNoYXJDb2RlQXQob3V0Lmxlbmd0aC0xKVxuXHRcdFx0XHRjb2RlID0gZWxlbWVudC5jaGFyQ29kZUF0KDApXG5cdFx0XHRcdHBhZGRpbmcgPSAnJ1xuXG5cdFx0XHRcdGlmIChqICE9PSAwKSB7XG5cdFx0XHRcdFx0Ly8gZGV0ZXJtaW5lIGlmIHdlIG5lZWQgcGFkZGluZ1xuXHRcdFx0XHRcdHN3aXRjaCAodGFpbCkge1xuXHRcdFx0XHRcdFx0Y2FzZSBTVEFSOlxuXHRcdFx0XHRcdFx0Y2FzZSBUSUxERTpcblx0XHRcdFx0XHRcdGNhc2UgR1JFQVRFUlRIQU46XG5cdFx0XHRcdFx0XHRjYXNlIFBMVVM6XG5cdFx0XHRcdFx0XHRjYXNlIFNQQUNFOlxuXHRcdFx0XHRcdFx0Y2FzZSBPUEVOUEFSRU5USEVTRVM6ICB7XG5cdFx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRkZWZhdWx0OiB7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmcgPSAnICdcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzd2l0Y2ggKGNvZGUpIHtcblx0XHRcdFx0XHRjYXNlIEFORDoge1xuXHRcdFx0XHRcdFx0ZWxlbWVudCA9IHBhZGRpbmcgKyBuc2NvcGVhbHRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y2FzZSBUSUxERTpcblx0XHRcdFx0XHRjYXNlIEdSRUFURVJUSEFOOlxuXHRcdFx0XHRcdGNhc2UgUExVUzpcblx0XHRcdFx0XHRjYXNlIFNQQUNFOlxuXHRcdFx0XHRcdGNhc2UgQ0xPU0VQQVJFTlRIRVNFUzpcblx0XHRcdFx0XHRjYXNlIE9QRU5QQVJFTlRIRVNFUzoge1xuXHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y2FzZSBPUEVOQlJBQ0tFVDoge1xuXHRcdFx0XHRcdFx0ZWxlbWVudCA9IHBhZGRpbmcgKyBlbGVtZW50ICsgbnNjb3BlYWx0XG5cdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjYXNlIENPTE9OOiB7XG5cdFx0XHRcdFx0XHRzd2l0Y2ggKGVsZW1lbnQuY2hhckNvZGVBdCgxKSoyICsgZWxlbWVudC5jaGFyQ29kZUF0KDIpKjMpIHtcblx0XHRcdFx0XHRcdFx0Ly8gOmdsb2JhbFxuXHRcdFx0XHRcdFx0XHRjYXNlIDUzMDoge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChlc2NhcGUgPiAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRlbGVtZW50ID0gcGFkZGluZyArIGVsZW1lbnQuc3Vic3RyaW5nKDgsIHNpemUgLSAxKVxuXHRcdFx0XHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Ly8gOmhvdmVyLCA6bnRoLWNoaWxkKCksIC4uLlxuXHRcdFx0XHRcdFx0XHRkZWZhdWx0OiB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGogPCAxIHx8IGVsZW1lbnRzW2otMV0ubGVuZ3RoIDwgMSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0ZWxlbWVudCA9IHBhZGRpbmcgKyBuc2NvcGVhbHQgKyBlbGVtZW50XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjYXNlIENPTU1BOiB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nID0gJydcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZGVmYXVsdDoge1xuXHRcdFx0XHRcdFx0aWYgKHNpemUgPiAxICYmIGVsZW1lbnQuaW5kZXhPZignOicpID4gMCkge1xuXHRcdFx0XHRcdFx0XHRlbGVtZW50ID0gcGFkZGluZyArIGVsZW1lbnQucmVwbGFjZShwc2V1ZG9wdG4sICckMScgKyBuc2NvcGVhbHQgKyAnJDInKVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0ZWxlbWVudCA9IHBhZGRpbmcgKyBlbGVtZW50ICsgbnNjb3BlYWx0XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0b3V0ICs9IGVsZW1lbnRcblx0XHRcdH1cblxuXHRcdFx0c2VsZWN0b3JbaV0gPSBvdXQucmVwbGFjZShmb3JtYXRwdG4sICcnKS50cmltKClcblx0XHR9XG5cblx0XHRyZXR1cm4gc2VsZWN0b3Jcblx0fVxuXG5cdC8qKlxuXHQgKiBQcm94eVxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gY29udGV4dFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29udGVudFxuXHQgKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IHNlbGVjdG9yc1xuXHQgKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IHBhcmVudHNcblx0ICogQHBhcmFtIHtudW1iZXJ9IGxpbmVcblx0ICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtblxuXHQgKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBpZFxuXHQgKiBAcGFyYW0ge251bWJlcn0gZGVwdGhcblx0ICogQHBhcmFtIHtudW1iZXJ9IGF0XG5cdCAqIEByZXR1cm4geyhzdHJpbmd8dm9pZHwqKX1cblx0ICovXG5cdGZ1bmN0aW9uIHByb3h5IChjb250ZXh0LCBjb250ZW50LCBzZWxlY3RvcnMsIHBhcmVudHMsIGxpbmUsIGNvbHVtbiwgbGVuZ3RoLCBpZCwgZGVwdGgsIGF0KSB7XG5cdFx0Zm9yICh2YXIgaSA9IDAsIG91dCA9IGNvbnRlbnQsIG5leHQ7IGkgPCBwbHVnZ2VkOyArK2kpIHtcblx0XHRcdHN3aXRjaCAobmV4dCA9IHBsdWdpbnNbaV0uY2FsbChzdHlsaXMsIGNvbnRleHQsIG91dCwgc2VsZWN0b3JzLCBwYXJlbnRzLCBsaW5lLCBjb2x1bW4sIGxlbmd0aCwgaWQsIGRlcHRoLCBhdCkpIHtcblx0XHRcdFx0Y2FzZSB2b2lkIDA6XG5cdFx0XHRcdGNhc2UgZmFsc2U6XG5cdFx0XHRcdGNhc2UgdHJ1ZTpcblx0XHRcdFx0Y2FzZSBudWxsOiB7XG5cdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0fVxuXHRcdFx0XHRkZWZhdWx0OiB7XG5cdFx0XHRcdFx0b3V0ID0gbmV4dFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChvdXQgIT09IGNvbnRlbnQpIHtcblx0XHQgIHJldHVybiBvdXRcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtudW1iZXJ9IGNvZGVcblx0ICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcblx0ICogQHBhcmFtIHtzdHJpbmd9IGJvZHlcblx0ICogQHJldHVybiB7bnVtYmVyfVxuXHQgKi9cblx0ZnVuY3Rpb24gZGVsaW1pdGVkIChjb2RlLCBpbmRleCwgbGVuZ3RoLCBib2R5KSB7XG5cdFx0Zm9yICh2YXIgaSA9IGluZGV4ICsgMTsgaSA8IGxlbmd0aDsgKytpKSB7XG5cdFx0XHRzd2l0Y2ggKGJvZHkuY2hhckNvZGVBdChpKSkge1xuXHRcdFx0XHQvLyAvKlxuXHRcdFx0XHRjYXNlIEZPV0FSRFNMQVNIOiB7XG5cdFx0XHRcdFx0aWYgKGNvZGUgPT09IFNUQVIpIHtcblx0XHRcdFx0XHRcdGlmIChib2R5LmNoYXJDb2RlQXQoaSAtIDEpID09PSBTVEFSICYmICBpbmRleCArIDIgIT09IGkpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGkgKyAxXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gLy9cblx0XHRcdFx0Y2FzZSBORVdMSU5FOiB7XG5cdFx0XHRcdFx0aWYgKGNvZGUgPT09IEZPV0FSRFNMQVNIKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gaSArIDFcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gaVxuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB0eXBlXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuXHQgKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBmaW5kXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBib2R5XG5cdCAqIEByZXR1cm4ge251bWJlcn1cblx0ICovXG5cdGZ1bmN0aW9uIG1hdGNoICh0eXBlLCBpbmRleCwgbGVuZ3RoLCBib2R5KSB7XG5cdFx0Zm9yICh2YXIgaSA9IGluZGV4ICsgMTsgaSA8IGxlbmd0aDsgKytpKSB7XG5cdFx0XHRzd2l0Y2ggKGJvZHkuY2hhckNvZGVBdChpKSkge1xuXHRcdFx0XHRjYXNlIHR5cGU6IHtcblx0XHRcdFx0XHRyZXR1cm4gaVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGlcblx0fVxuXG5cdC8qKlxuXHQgKiBNaW5pZnlcblx0ICpcblx0ICogQHBhcmFtIHsoc3RyaW5nfCopfSBvdXRwdXRcblx0ICogQHJldHVybiB7c3RyaW5nfVxuXHQgKi9cblx0ZnVuY3Rpb24gbWluaWZ5IChvdXRwdXQpIHtcblx0XHRyZXR1cm4gb3V0cHV0XG5cdFx0XHQucmVwbGFjZShmb3JtYXRwdG4sICcnKVxuXHRcdFx0LnJlcGxhY2UoYmVmb3JlcHRuLCAnJylcblx0XHRcdC5yZXBsYWNlKGFmdGVycHRuLCAnJDEnKVxuXHRcdFx0LnJlcGxhY2UodGFpbHB0biwgJyQxJylcblx0XHRcdC5yZXBsYWNlKHdoaXRlcHRuLCAnICcpXG5cdH1cblxuXHQvKipcblx0ICogVXNlXG5cdCAqXG5cdCAqIEBwYXJhbSB7KEFycmF5PGZ1bmN0aW9uKC4uLj8pPnxmdW5jdGlvbiguLi4/KXxudW1iZXJ8dm9pZCk/fSBwbHVnaW5cblx0ICovXG5cdGZ1bmN0aW9uIHVzZSAocGx1Z2luKSB7XG5cdFx0c3dpdGNoIChwbHVnaW4pIHtcblx0XHRcdGNhc2Ugdm9pZCAwOlxuXHRcdFx0Y2FzZSBudWxsOiB7XG5cdFx0XHRcdHBsdWdnZWQgPSBwbHVnaW5zLmxlbmd0aCA9IDBcblx0XHRcdFx0YnJlYWtcblx0XHRcdH1cblx0XHRcdGRlZmF1bHQ6IHtcblx0XHRcdFx0aWYgKHR5cGVvZiBwbHVnaW4gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRwbHVnaW5zW3BsdWdnZWQrK10gPSBwbHVnaW5cblx0XHRcdFx0fVx0ZWxzZSBpZiAodHlwZW9mIHBsdWdpbiA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0XHRmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gcGx1Z2luLmxlbmd0aDsgaSA8IGxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdFx0XHR1c2UocGx1Z2luW2ldKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR1bmt3biA9ICEhcGx1Z2lufDBcblx0XHRcdFx0fVxuXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHVzZVxuXHR9XG5cblx0LyoqXG5cdCAqIFNldFxuXHQgKlxuXHQgKiBAcGFyYW0geyp9IG9wdGlvbnNcblx0ICovXG5cdGZ1bmN0aW9uIHNldCAob3B0aW9ucykge1xuXHRcdGZvciAodmFyIG5hbWUgaW4gb3B0aW9ucykge1xuXHRcdFx0dmFyIHZhbHVlID0gb3B0aW9uc1tuYW1lXVxuXHRcdFx0c3dpdGNoIChuYW1lKSB7XG5cdFx0XHRcdGNhc2UgJ2tleWZyYW1lJzoga2V5ZWQgPSB2YWx1ZXwwOyBicmVha1xuXHRcdFx0XHRjYXNlICdnbG9iYWwnOiBlc2NhcGUgPSB2YWx1ZXwwOyBicmVha1xuXHRcdFx0XHRjYXNlICdjYXNjYWRlJzogY2FzY2FkZSA9IHZhbHVlfDA7IGJyZWFrXG5cdFx0XHRcdGNhc2UgJ2NvbXByZXNzJzogY29tcHJlc3MgPSB2YWx1ZXwwOyBicmVha1xuXHRcdFx0XHRjYXNlICdzZW1pY29sb24nOiBzZW1pY29sb24gPSB2YWx1ZXwwOyBicmVha1xuXHRcdFx0XHRjYXNlICdwcmVzZXJ2ZSc6IHByZXNlcnZlID0gdmFsdWV8MDsgYnJlYWtcblx0XHRcdFx0Y2FzZSAncHJlZml4Jzpcblx0XHRcdFx0XHRzaG91bGQgPSBudWxsXG5cblx0XHRcdFx0XHRpZiAoIXZhbHVlKSB7XG5cdFx0XHRcdFx0XHRwcmVmaXggPSAwXG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRcdHByZWZpeCA9IDFcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cHJlZml4ID0gMlxuXHRcdFx0XHRcdFx0c2hvdWxkID0gdmFsdWVcblx0XHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHNldFxuXHR9XG5cblx0LyoqXG5cdCAqIFN0eWxpc1xuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3Jcblx0ICogQHBhcmFtIHtzdHJpbmd9IGlucHV0XG5cdCAqIEByZXR1cm4geyp9XG5cdCAqL1xuXHRmdW5jdGlvbiBzdHlsaXMgKHNlbGVjdG9yLCBpbnB1dCkge1xuXHRcdGlmICh0aGlzICE9PSB2b2lkIDAgJiYgdGhpcy5jb25zdHJ1Y3RvciA9PT0gc3R5bGlzKSB7XG5cdFx0XHRyZXR1cm4gZmFjdG9yeShzZWxlY3Rvcilcblx0XHR9XG5cblx0XHQvLyBzZXR1cFxuXHRcdHZhciBucyA9IHNlbGVjdG9yXG5cdFx0dmFyIGNvZGUgPSBucy5jaGFyQ29kZUF0KDApXG5cblx0XHQvLyB0cmltIGxlYWRpbmcgd2hpdGVzcGFjZVxuXHRcdGlmIChjb2RlIDwgMzMpIHtcblx0XHRcdGNvZGUgPSAobnMgPSBucy50cmltKCkpLmNoYXJDb2RlQXQoMClcblx0XHR9XG5cblx0XHQvLyBrZXlmcmFtZS9hbmltYXRpb24gbmFtZXNwYWNlXG5cdFx0aWYgKGtleWVkID4gMCkge1xuXHRcdFx0a2V5ID0gbnMucmVwbGFjZShpbnZhbGlkcHRuLCBjb2RlID09PSBPUEVOQlJBQ0tFVCA/ICcnIDogJy0nKVxuXHRcdH1cblxuXHRcdC8vIHJlc2V0LCB1c2VkIHRvIGFzc2VydCBpZiBhIHBsdWdpbiBpcyBtb25la3ktcGF0Y2hpbmcgdGhlIHJldHVybiB2YWx1ZVxuXHRcdGNvZGUgPSAxXG5cblx0XHQvLyBjYXNjYWRlL2lzb2xhdGVcblx0XHRpZiAoY2FzY2FkZSA9PT0gMSkge1xuXHRcdFx0bnNjb3BlID0gbnNcblx0XHR9IGVsc2Uge1xuXHRcdFx0bnNjb3BlYWx0ID0gbnNcblx0XHR9XG5cblx0XHR2YXIgc2VsZWN0b3JzID0gW25zY29wZV1cblx0XHR2YXIgcmVzdWx0XG5cblx0XHQvLyBleGVjdXRlIHBsdWdpbnMsIHByZS1wcm9jZXNzIGNvbnRleHRcblx0XHRpZiAocGx1Z2dlZCA+IDApIHtcblx0XHRcdHJlc3VsdCA9IHByb3h5KFBSRVBTLCBpbnB1dCwgc2VsZWN0b3JzLCBzZWxlY3RvcnMsIGxpbmUsIGNvbHVtbiwgMCwgMCwgMCwgMClcblxuXHRcdFx0aWYgKHJlc3VsdCAhPT0gdm9pZCAwICYmIHR5cGVvZiByZXN1bHQgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdGlucHV0ID0gcmVzdWx0XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gYnVpbGRcblx0XHR2YXIgb3V0cHV0ID0gY29tcGlsZShhcnJheSwgc2VsZWN0b3JzLCBpbnB1dCwgMCwgMClcblxuXHRcdC8vIGV4ZWN1dGUgcGx1Z2lucywgcG9zdC1wcm9jZXNzIGNvbnRleHRcblx0XHRpZiAocGx1Z2dlZCA+IDApIHtcblx0XHRcdHJlc3VsdCA9IHByb3h5KFBPU1RTLCBvdXRwdXQsIHNlbGVjdG9ycywgc2VsZWN0b3JzLCBsaW5lLCBjb2x1bW4sIG91dHB1dC5sZW5ndGgsIDAsIDAsIDApXG5cblx0XHRcdC8vIGJ5cGFzcyBtaW5pZmljYXRpb25cblx0XHRcdGlmIChyZXN1bHQgIT09IHZvaWQgMCAmJiB0eXBlb2Yob3V0cHV0ID0gcmVzdWx0KSAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0Y29kZSA9IDBcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyByZXNldFxuXHRcdGtleSA9ICcnXG5cdFx0bnNjb3BlID0gJydcblx0XHRuc2NvcGVhbHQgPSAnJ1xuXHRcdHBhdHRlcm4gPSAwXG5cdFx0bGluZSA9IDFcblx0XHRjb2x1bW4gPSAxXG5cblx0XHRyZXR1cm4gY29tcHJlc3MqY29kZSA9PT0gMCA/IG91dHB1dCA6IG1pbmlmeShvdXRwdXQpXG5cdH1cblxuXHRzdHlsaXNbJ3VzZSddID0gdXNlXG5cdHN0eWxpc1snc2V0J10gPSBzZXRcblxuXHRpZiAob3B0aW9ucyAhPT0gdm9pZCAwKSB7XG5cdFx0c2V0KG9wdGlvbnMpXG5cdH1cblxuXHRyZXR1cm4gc3R5bGlzXG59KSk7XG4iXSwic291cmNlUm9vdCI6IiJ9