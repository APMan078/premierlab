(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/core-js/internals/string-repeat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/string-repeat.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `String.prototype.repeat` method implementation
// https://tc39.github.io/ecma262/#sec-string.prototype.repeat
module.exports = ''.repeat || function repeat(count) {
  var str = String(requireObjectCoercible(this));
  var result = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/this-number-value.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/this-number-value.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `thisNumberValue` abstract operation
// https://tc39.github.io/ecma262/#sec-thisnumbervalue
module.exports = function (value) {
  if (typeof value != 'number' && classof(value) != 'Number') {
    throw TypeError('Incorrect invocation');
  }
  return +value;
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.number.to-fixed.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.to-fixed.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var thisNumberValue = __webpack_require__(/*! ../internals/this-number-value */ "./node_modules/core-js/internals/this-number-value.js");
var repeat = __webpack_require__(/*! ../internals/string-repeat */ "./node_modules/core-js/internals/string-repeat.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var nativeToFixed = 1.0.toFixed;
var floor = Math.floor;

var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};

var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

var FORCED = nativeToFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !fails(function () {
  // V8 ~ Android 4.3-
  nativeToFixed.call({});
});

// `Number.prototype.toFixed` method
// https://tc39.github.io/ecma262/#sec-number.prototype.tofixed
$({ target: 'Number', proto: true, forced: FORCED }, {
  // eslint-disable-next-line max-statements
  toFixed: function toFixed(fractionDigits) {
    var number = thisNumberValue(this);
    var fractDigits = toInteger(fractionDigits);
    var data = [0, 0, 0, 0, 0, 0];
    var sign = '';
    var result = '0';
    var e, z, j, k;

    var multiply = function (n, c) {
      var index = -1;
      var c2 = c;
      while (++index < 6) {
        c2 += n * data[index];
        data[index] = c2 % 1e7;
        c2 = floor(c2 / 1e7);
      }
    };

    var divide = function (n) {
      var index = 6;
      var c = 0;
      while (--index >= 0) {
        c += data[index];
        data[index] = floor(c / n);
        c = (c % n) * 1e7;
      }
    };

    var dataToString = function () {
      var index = 6;
      var s = '';
      while (--index >= 0) {
        if (s !== '' || index === 0 || data[index] !== 0) {
          var t = String(data[index]);
          s = s === '' ? t : s + repeat.call('0', 7 - t.length) + t;
        }
      } return s;
    };

    if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits');
    // eslint-disable-next-line no-self-compare
    if (number != number) return 'NaN';
    if (number <= -1e21 || number >= 1e21) return String(number);
    if (number < 0) {
      sign = '-';
      number = -number;
    }
    if (number > 1e-21) {
      e = log(number * pow(2, 69, 1)) - 69;
      z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = fractDigits;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        result = dataToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        result = dataToString() + repeat.call('0', fractDigits);
      }
    }
    if (fractDigits > 0) {
      k = result.length;
      result = sign + (k <= fractDigits
        ? '0.' + repeat.call('0', fractDigits - k) + result
        : result.slice(0, k - fractDigits) + '.' + result.slice(k - fractDigits));
    } else {
      result = sign + result;
    } return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.match.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.match.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

// @@match logic
fixRegExpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : regexp[MATCH];
      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative(nativeMatch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
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

/***/ "./resources/assets/img/default-shop-avatar.png":
/*!******************************************************!*\
  !*** ./resources/assets/img/default-shop-avatar.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/default-shop-avatar.png";

/***/ }),

/***/ "./resources/assets/js/pages/Shops/ViewShop.jsx":
/*!******************************************************!*\
  !*** ./resources/assets/js/pages/Shops/ViewShop.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components */ "./resources/assets/js/components/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var default_shop_avatar_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! default-shop-avatar.png */ "./resources/assets/img/default-shop-avatar.png");
/* harmony import */ var default_shop_avatar_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(default_shop_avatar_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var store_action_creators_shops__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! store/action-creators/shops */ "./resources/assets/js/store/action-creators/shops/index.js");
/* harmony import */ var store_selectors_shops__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! store/selectors/shops */ "./resources/assets/js/store/selectors/shops.js");
/* harmony import */ var store_selectors_session__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! store/selectors/session */ "./resources/assets/js/store/selectors/session/index.js");
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/helper */ "./resources/assets/js/utils/helper/index.js");




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

function ViewShopComponent({
  getShop,
  shops,
  user,
  match
}) {
  const {
    user_type
  } = user;
  const query = match.params.slug;

  const populateShop = async () => {
    await getShop(query);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    populateShop();
  }, []);
  console.log(shops);

  if (!shops[0]) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Redirect"], {
      to: "/account/shops"
    });
  }

  const {
    name,
    slug,
    address,
    city,
    zip,
    type,
    description,
    contact,
    payment_method,
    features,
    amenities,
    tools,
    completion,
    level,
    status,
    operations,
    avatar,
    banner
  } = shops[0];
  const profileItems = Object(_utils_helper__WEBPACK_IMPORTED_MODULE_12__["shopProfileCompletion"])(shops[0]).filter(item => !item.done);
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "flex flex-wrap px-10 py-5"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "w-full"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_5__["PageHeader"], {
    title: "Details",
    subTitle: "Shop"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
    to: "/account/shops/update/".concat(slug),
    className: "ml-2 bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded inline-flex items-center"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
    className: "material-icons"
  }, "view_module"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, "Update Shop Details")))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "w-full md:w-2/3 pr-10"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "rounded-lg shadow-lg bg-white"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "float-left"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "h-48 overflow-hidden"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
    className: "rounded-t-lg",
    src: banner || 'https://via.placeholder.com/975x280.png?text=Your shop background image here'
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
    className: "p-5 w-32 object-fill mx-auto -mt-16 rounded-full",
    src: avatar || default_shop_avatar_png__WEBPACK_IMPORTED_MODULE_8___default.a
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "p-5 border-b border-gray-300 text-center"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "text-3xl"
  }, name ? name : 'Shop Name'), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "text-xs px-5 py-1 my-3 bg-teal-500 text-white w-32 rounded-full m-0 mx-auto"
  }, "Verified - Tier 2"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "text-xs"
  }, type ? type : '-')), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "grid grid-cols-2 gap-4 py-5 border-b border-gray-300 "
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "p-5"
  }, "Description", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    className: "text-blue-500"
  }, description ? description : 'none'))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "grid grid-cols-2 gap-4 py-5"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "p-5"
  }, "Email", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    className: "text-blue-500"
  }, user.email)), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "p-5"
  }, "Address", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    className: "text-blue-500"
  }, address ? address : 'n/a')), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "p-5"
  }, "Phone", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    className: "text-gray-500"
  }, contact ? contact : 'none')), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "p-5"
  }, "Payment Method", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    className: "text-gray-500"
  }, payment_method ? payment_method : 'none')))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "rounded-lg shadow-lg bg-white mt-5"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "mx-auto text-gray-700 text-md p-5 border-b rounded-t-lg border-gray-300"
  }, "Operating Hours"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "p-5"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("table", {
    className: "w-full"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("thead", {
    className: "bg-gray-300 text-gray-900"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    className: "py-3"
  }, "Sunday"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    className: "py-3"
  }, "Monday"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    className: "py-3"
  }, "Tuesday"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    className: "py-3"
  }, "Wednesday"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    className: "py-3"
  }, "Thursday"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    className: "py-3"
  }, "Friday"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    className: "py-3"
  }, "Saturday"))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tbody", {
    className: "text-center"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", null, !operations && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
    className: "py-3 text-red-700"
  }, "Closed"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
    className: "py-3 text-red-700"
  }, "Closed"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
    className: "py-3 text-red-700"
  }, "Closed"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
    className: "py-3 text-red-700"
  }, "Closed"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
    className: "py-3 text-red-700"
  }, "Closed"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
    className: "py-3 text-red-700"
  }, "Closed"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
    className: "py-3 text-red-700"
  }, "Closed")), operations && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, operations.map((operation, idx) => react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
    className: operation.closed ? "py-3 text-red-700" : "py-3 text-gray-700",
    key: idx
  }, operation.closed ? 'closed' : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, operation.start), " ", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, operation.end)))))))))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "grid grid-cols-3 gap-4"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "rounded-lg col-span-1 shadow-lg bg-white mt-5"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "mx-auto text-gray-700 text-md p-5 border-b rounded-t-lg border-gray-300"
  }, "Features"), features && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, features.map((feature, idx) => react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    key: idx,
    className: "py-2"
  }, feature))), features ? '' : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "px-5 py-2"
  }, "None")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "rounded-lg col-span-1 shadow-lg bg-white mt-5"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "mx-auto text-gray-700 text-md p-5 border-b rounded-t-lg border-gray-300"
  }, "Special Tools"), tools && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, tools.map((tool, idx) => react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    key: idx,
    className: "py-2"
  }, tool))), tools ? '' : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "px-5 py-2"
  }, "None")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "rounded-lg col-span-1 shadow-lg bg-white mt-5"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "mx-auto text-gray-700 text-md p-5 border-b rounded-t-lg border-gray-300"
  }, "Amenities"), amenities && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, amenities.map((amenity, idx) => react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    key: idx,
    className: "py-2"
  }, amenity))), amenities ? '' : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "px-5 py-2"
  }, "None")))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "w-full md:w-1/3 rounded-lg"
  }, profileItems.length !== 0 && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "bg-teal-400 text-center rounded-lg text-white py-5 mb-5"
  }, "Complete profile to enable activation requirements submission."), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_5__["ListCompletion"], {
    title: "Profile Completion",
    list: Object(_utils_helper__WEBPACK_IMPORTED_MODULE_12__["shopProfileCompletion"])(shops[0]),
    href: "/account/shop/manage/".concat(slug)
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_5__["ListCompletion"], {
    subTitle: "Your activation requirements will be verified",
    title: "Activation Requirements",
    list: Object(_utils_helper__WEBPACK_IMPORTED_MODULE_12__["shopActivationRequirements"])(shops[0].application),
    points: shops[0].completion ? shops[0].completion * 100 : 0,
    totalPoints: 100,
    href: "/account/shops/activation/r4eNV".concat(slug),
    enabled: profileItems.length !== 0
  }))));
}

__signature__(ViewShopComponent, "useEffect{}");

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])((state, props) => {
  const query = props.match.params.slug;
  return {
    shops: Object(store_selectors_shops__WEBPACK_IMPORTED_MODULE_10__["selectShopDetails"])(state, query),
    user: Object(store_selectors_session__WEBPACK_IMPORTED_MODULE_11__["currentUserSelector"])(state)
  };
}, dispatch => ({
  getShop: id => dispatch(Object(store_action_creators_shops__WEBPACK_IMPORTED_MODULE_9__["getShop"])(id))
}))(ViewShopComponent);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Toast, "Toast", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Shops/ViewShop.jsx");
  reactHotLoader.register(Alert, "Alert", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Shops/ViewShop.jsx");
  reactHotLoader.register(ViewShopComponent, "ViewShopComponent", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Shops/ViewShop.jsx");
  reactHotLoader.register(_default, "default", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/pages/Shops/ViewShop.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/store/action-creators/shops/index.js":
/*!******************************************************************!*\
  !*** ./resources/assets/js/store/action-creators/shops/index.js ***!
  \******************************************************************/
/*! exports provided: saveShop, getShops, createShop, getShop, updateShop, deleteShop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shops__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shops */ "./resources/assets/js/store/action-creators/shops/shops.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveShop", function() { return _shops__WEBPACK_IMPORTED_MODULE_0__["saveShop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getShops", function() { return _shops__WEBPACK_IMPORTED_MODULE_0__["getShops"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createShop", function() { return _shops__WEBPACK_IMPORTED_MODULE_0__["createShop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getShop", function() { return _shops__WEBPACK_IMPORTED_MODULE_0__["getShop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateShop", function() { return _shops__WEBPACK_IMPORTED_MODULE_0__["updateShop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteShop", function() { return _shops__WEBPACK_IMPORTED_MODULE_0__["deleteShop"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



/***/ }),

/***/ "./resources/assets/js/store/action-creators/shops/shops.js":
/*!******************************************************************!*\
  !*** ./resources/assets/js/store/action-creators/shops/shops.js ***!
  \******************************************************************/
/*! exports provided: getShops, getShop, createShop, updateShop, deleteShop, saveShop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShops", function() { return getShops; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShop", function() { return getShop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createShop", function() { return createShop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateShop", function() { return updateShop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteShop", function() { return deleteShop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveShop", function() { return saveShop; });
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




const getShops = () => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])('get-shops', () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/shops")));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["shopActions"].ADD_SHOPS,
    shops: response.data.data
  });
};
const getShop = slug => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])("get-shop-".concat(slug), () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/shops/".concat(slug))));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["shopActions"].GET_SHOP,
    shops: response.data.data
  });
};
const createShop = data => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])('create-shop', () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/shops", data)));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["shopActions"].ADD_SHOP,
    shops: response.data.data
  });
};
const updateShop = data => async dispatch => {
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])("update-shop-".concat(data.slug), () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/shops/".concat(data.slug), data)));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["shopActions"].UPDATE_SHOP,
    shops: response.data.data
  });
};
const deleteShop = slug => async dispatch => {
  await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])("update-shop-".concat(slug), () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("/api/shops/".concat(slug))));
  dispatch({
    type: store_actions__WEBPACK_IMPORTED_MODULE_2__["shopActions"].DELETE_SHOP,
    slug
  });
};
const saveShop = shopData => async dispatch => {
  const {
    slug
  } = shopData;
  const response = await dispatch(Object(store_action_creators_requests__WEBPACK_IMPORTED_MODULE_3__["makeRequest"])('save-shop-settings', () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/shops/".concat(slug), shopData)));
  return response;
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getShops, "getShops", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/shops/shops.js");
  reactHotLoader.register(getShop, "getShop", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/shops/shops.js");
  reactHotLoader.register(createShop, "createShop", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/shops/shops.js");
  reactHotLoader.register(updateShop, "updateShop", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/shops/shops.js");
  reactHotLoader.register(deleteShop, "deleteShop", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/shops/shops.js");
  reactHotLoader.register(saveShop, "saveShop", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/action-creators/shops/shops.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/store/selectors/shops.js":
/*!******************************************************!*\
  !*** ./resources/assets/js/store/selectors/shops.js ***!
  \******************************************************/
/*! exports provided: selectAllShops, selectShopDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllShops", function() { return selectAllShops; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectShopDetails", function() { return selectShopDetails; });
/* harmony import */ var normalizr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalizr */ "./node_modules/normalizr/dist/normalizr.es.js");
/* harmony import */ var store_schemas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! store/schemas */ "./resources/assets/js/store/schemas.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



const selectAllShops = state => {
  const dnEntities = Object(normalizr__WEBPACK_IMPORTED_MODULE_0__["denormalize"])({
    shops: Object.keys(state.entities.shops)
  }, store_schemas__WEBPACK_IMPORTED_MODULE_1__["entities"], state.entities);
  return dnEntities.shops;
};
const selectShopDetails = (state, slug) => {
  const dnEntities = Object(normalizr__WEBPACK_IMPORTED_MODULE_0__["denormalize"])({
    shops: [slug]
  }, store_schemas__WEBPACK_IMPORTED_MODULE_1__["entities"], state.entities);
  return dnEntities.shops;
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(selectAllShops, "selectAllShops", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/selectors/shops.js");
  reactHotLoader.register(selectShopDetails, "selectShopDetails", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/store/selectors/shops.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/utils/helper/colors.js":
/*!****************************************************!*\
  !*** ./resources/assets/js/utils/helper/colors.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const _default = {
  PLACEHOLDER_COLOR: '#e0e0e0'
};
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/utils/helper/colors.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/utils/helper/currency-formatter.js":
/*!****************************************************************!*\
  !*** ./resources/assets/js/utils/helper/currency-formatter.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const _default = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'PHP',
  minimumFractionDigits: 2
});

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/utils/helper/currency-formatter.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/utils/helper/index.js":
/*!***************************************************!*\
  !*** ./resources/assets/js/utils/helper/index.js ***!
  \***************************************************/
/*! exports provided: colors, formatter, months, nameSplitter, numberFormatter, shopActivationRequirements, shopProfileCompletion, timeFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ "./resources/assets/js/utils/helper/colors.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return _colors__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _currency_formatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currency-formatter */ "./resources/assets/js/utils/helper/currency-formatter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatter", function() { return _currency_formatter__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _months__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./months */ "./resources/assets/js/utils/helper/months.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "months", function() { return _months__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _name_splitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./name-splitter */ "./resources/assets/js/utils/helper/name-splitter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nameSplitter", function() { return _name_splitter__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _number_formatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./number-formatter */ "./resources/assets/js/utils/helper/number-formatter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numberFormatter", function() { return _number_formatter__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _shop_activation_requirements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shop-activation-requirements */ "./resources/assets/js/utils/helper/shop-activation-requirements.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shopActivationRequirements", function() { return _shop_activation_requirements__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _shop_profile_completion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shop-profile-completion */ "./resources/assets/js/utils/helper/shop-profile-completion.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shopProfileCompletion", function() { return _shop_profile_completion__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _time_formatter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./time-formatter */ "./resources/assets/js/utils/helper/time-formatter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeFormatter", function() { return _time_formatter__WEBPACK_IMPORTED_MODULE_7__["default"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};











/***/ }),

/***/ "./resources/assets/js/utils/helper/months.js":
/*!****************************************************!*\
  !*** ./resources/assets/js/utils/helper/months.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const _default = index => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return months[index];
};

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/utils/helper/months.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/utils/helper/name-splitter.js":
/*!***********************************************************!*\
  !*** ./resources/assets/js/utils/helper/name-splitter.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_0__);


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const _default = name => {
  const splitName = name.split(',');
  return {
    lname: splitName[0],
    fname: splitName[1]
  };
};

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/utils/helper/name-splitter.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/utils/helper/number-formatter.js":
/*!**************************************************************!*\
  !*** ./resources/assets/js/utils/helper/number-formatter.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const _default = new Intl.NumberFormat();

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/utils/helper/number-formatter.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/utils/helper/shop-activation-requirements.js":
/*!**************************************************************************!*\
  !*** ./resources/assets/js/utils/helper/shop-activation-requirements.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const _default = application => {
  let result = [];

  if (application) {
    const {
      registration,
      business_permit,
      bir,
      lifters,
      merch_cert,
      special_tools,
      verified_biz_reg,
      verified_permit,
      verified_bir_cert,
      verified_lifters,
      verified_merch_cert,
      verified_special_tools
    } = application;
    result = [{
      title: 'SEC/DTI Certificate of Registration (25)',
      done: registration !== null && verified_biz_reg
    }, {
      title: "Mayor's Permit (25)",
      done: business_permit !== null && verified_permit
    }, {
      title: 'BIR Certificate of Registration (25)',
      done: bir !== null && verified_bir_cert
    }, {
      title: 'Lifters (5)',
      done: lifters !== null && verified_lifters
    }, {
      title: 'Merchant Certification (10)',
      done: merch_cert !== null && verified_merch_cert
    }, {
      title: 'Special Tools (10)',
      done: special_tools !== null && verified_special_tools
    }];
  }

  return result;
};

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/utils/helper/shop-activation-requirements.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/utils/helper/shop-profile-completion.js":
/*!*********************************************************************!*\
  !*** ./resources/assets/js/utils/helper/shop-profile-completion.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__);


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const _default = shop => {
  let result = [];

  if (shop) {
    const {
      avatar,
      banner,
      address,
      type,
      contact,
      description,
      operations,
      features,
      amenities,
      payment_method
    } = shop;
    result = [{
      title: 'Shop Logo',
      done: avatar !== null
    }, {
      title: 'Shop Banner',
      done: banner !== null
    }, {
      title: 'Address',
      done: address !== null
    }, {
      title: 'Shop Type',
      done: type !== null
    }, {
      title: 'Contact Number',
      done: contact !== null
    }, {
      title: 'Description',
      done: description !== null
    }, {
      title: 'Operating Hours',
      done: operations !== null
    }, {
      title: 'Features',
      done: features !== null
    }, {
      title: 'Amenities',
      done: amenities !== null
    }, {
      title: 'Payment Method',
      done: payment_method !== null
    }];
  }

  return result;
};

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/utils/helper/shop-profile-completion.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/utils/helper/time-formatter.js":
/*!************************************************************!*\
  !*** ./resources/assets/js/utils/helper/time-formatter.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_0__);


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const _default = value => {
  const newValue = value < 12 ? value : value === 12 ? 12 : value - 12;
  return "".concat(Number(newValue).toFixed(0), ":00 ").concat(value < 12 ? 'AM' : 'PM');
};

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/home/kobe/Desktop/raksquad/AutoServed/autoserved/resources/assets/js/utils/helper/time-formatter.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLXJlcGVhdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdGhpcy1udW1iZXItdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5udW1iZXIudG8tZml4ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcubWF0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zeW1ib2wuZGVzY3JpcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9pbWcvZGVmYXVsdC1zaG9wLWF2YXRhci5wbmciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9TaG9wcy9WaWV3U2hvcC5qc3giLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9hY3Rpb24tY3JlYXRvcnMvc2hvcHMvc2hvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9zZWxlY3RvcnMvc2hvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy91dGlscy9oZWxwZXIvY29sb3JzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvdXRpbHMvaGVscGVyL2N1cnJlbmN5LWZvcm1hdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3V0aWxzL2hlbHBlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3V0aWxzL2hlbHBlci9tb250aHMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy91dGlscy9oZWxwZXIvbmFtZS1zcGxpdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3V0aWxzL2hlbHBlci9udW1iZXItZm9ybWF0dGVyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvdXRpbHMvaGVscGVyL3Nob3AtYWN0aXZhdGlvbi1yZXF1aXJlbWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy91dGlscy9oZWxwZXIvc2hvcC1wcm9maWxlLWNvbXBsZXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy91dGlscy9oZWxwZXIvdGltZS1mb3JtYXR0ZXIuanMiXSwibmFtZXMiOlsiVG9hc3QiLCJTd2FsIiwibWl4aW4iLCJ0b2FzdCIsInBvc2l0aW9uIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsIkFsZXJ0IiwidHlwZSIsInRpdGxlIiwiZmlyZSIsIlZpZXdTaG9wQ29tcG9uZW50IiwiZ2V0U2hvcCIsInNob3BzIiwidXNlciIsIm1hdGNoIiwidXNlcl90eXBlIiwicXVlcnkiLCJwYXJhbXMiLCJzbHVnIiwicG9wdWxhdGVTaG9wIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJhZGRyZXNzIiwiY2l0eSIsInppcCIsImRlc2NyaXB0aW9uIiwiY29udGFjdCIsInBheW1lbnRfbWV0aG9kIiwiZmVhdHVyZXMiLCJhbWVuaXRpZXMiLCJ0b29scyIsImNvbXBsZXRpb24iLCJsZXZlbCIsInN0YXR1cyIsIm9wZXJhdGlvbnMiLCJhdmF0YXIiLCJiYW5uZXIiLCJwcm9maWxlSXRlbXMiLCJzaG9wUHJvZmlsZUNvbXBsZXRpb24iLCJmaWx0ZXIiLCJpdGVtIiwiZG9uZSIsImRlZmF1bHRTaG9wQXZhdGFyIiwiZW1haWwiLCJtYXAiLCJvcGVyYXRpb24iLCJpZHgiLCJjbG9zZWQiLCJzdGFydCIsImVuZCIsImZlYXR1cmUiLCJ0b29sIiwiYW1lbml0eSIsImxlbmd0aCIsInNob3BBY3RpdmF0aW9uUmVxdWlyZW1lbnRzIiwiYXBwbGljYXRpb24iLCJjb25uZWN0Iiwic3RhdGUiLCJwcm9wcyIsInNlbGVjdFNob3BEZXRhaWxzIiwiY3VycmVudFVzZXJTZWxlY3RvciIsImRpc3BhdGNoIiwiaWQiLCJnZXRTaG9wQWN0aW9uIiwiZ2V0U2hvcHMiLCJyZXNwb25zZSIsIm1ha2VSZXF1ZXN0IiwiYXhpb3MiLCJnZXQiLCJhY3Rpb25zIiwiQUREX1NIT1BTIiwiZGF0YSIsIkdFVF9TSE9QIiwiY3JlYXRlU2hvcCIsInBvc3QiLCJBRERfU0hPUCIsInVwZGF0ZVNob3AiLCJwdXQiLCJVUERBVEVfU0hPUCIsImRlbGV0ZVNob3AiLCJkZWxldGUiLCJERUxFVEVfU0hPUCIsInNhdmVTaG9wIiwic2hvcERhdGEiLCJzZWxlY3RBbGxTaG9wcyIsImRuRW50aXRpZXMiLCJkZW5vcm1hbGl6ZSIsIk9iamVjdCIsImtleXMiLCJlbnRpdGllcyIsImVudGl0aWVzU2NoZW1hIiwiUExBQ0VIT0xERVJfQ09MT1IiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJjdXJyZW5jeSIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsImluZGV4IiwibW9udGhzIiwic3BsaXROYW1lIiwic3BsaXQiLCJsbmFtZSIsImZuYW1lIiwicmVzdWx0IiwicmVnaXN0cmF0aW9uIiwiYnVzaW5lc3NfcGVybWl0IiwiYmlyIiwibGlmdGVycyIsIm1lcmNoX2NlcnQiLCJzcGVjaWFsX3Rvb2xzIiwidmVyaWZpZWRfYml6X3JlZyIsInZlcmlmaWVkX3Blcm1pdCIsInZlcmlmaWVkX2Jpcl9jZXJ0IiwidmVyaWZpZWRfbGlmdGVycyIsInZlcmlmaWVkX21lcmNoX2NlcnQiLCJ2ZXJpZmllZF9zcGVjaWFsX3Rvb2xzIiwic2hvcCIsInZhbHVlIiwibmV3VmFsdWUiLCJOdW1iZXIiLCJ0b0ZpeGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYixnQkFBZ0IsbUJBQU8sQ0FBQywrRUFBeUI7QUFDakQsNkJBQTZCLG1CQUFPLENBQUMsMkdB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QixLQXpCTyxFQTZCUDtBQUNFNUIsV0FBSyxFQUFFLFVBRFQ7QUFFRW1DLFVBQUksRUFBRWIsUUFBUSxLQUFLO0FBRnJCLEtBN0JPLEVBaUNQO0FBQ0V0QixXQUFLLEVBQUUsV0FEVDtBQUVFbUMsVUFBSSxFQUFFWixTQUFTLEtBQUs7QUFGdEIsS0FqQ08sRUFxQ1A7QUFDRXZCLFdBQUssRUFBRSxnQkFEVDtBQUVFbUMsVUFBSSxFQUFFZCxjQUFjLEtBQUs7QUFGM0IsS0FyQ08sQ0FBVDtBQTBDRDs7QUFDRCxTQUFPNEUsTUFBUDtBQUNELEM7O0FBNURjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUJDQUFjLEtBQUssSUFBSTtBQUN0QixRQUFNQyxRQUFRLEdBQUdELEtBQUssR0FBRyxFQUFSLEdBQWFBLEtBQWIsR0FBcUJBLEtBQUssS0FBSyxFQUFWLEdBQWUsRUFBZixHQUFvQkEsS0FBSyxHQUFHLEVBQWxFO0FBQ0EsbUJBQVVFLE1BQU0sQ0FBQ0QsUUFBRCxDQUFOLENBQWlCRSxPQUFqQixDQUF5QixDQUF6QixDQUFWLGlCQUE0Q0gsS0FBSyxHQUFHLEVBQVIsR0FBYSxJQUFiLEdBQW9CLElBQWhFO0FBQ0QsQzs7QUFIYyIsImZpbGUiOiJqcy8xMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlcicpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLnJlcGVhdGAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnJlcGVhdFxubW9kdWxlLmV4cG9ydHMgPSAnJy5yZXBlYXQgfHwgZnVuY3Rpb24gcmVwZWF0KGNvdW50KSB7XG4gIHZhciBzdHIgPSBTdHJpbmcocmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKSk7XG4gIHZhciByZXN1bHQgPSAnJztcbiAgdmFyIG4gPSB0b0ludGVnZXIoY291bnQpO1xuICBpZiAobiA8IDAgfHwgbiA9PSBJbmZpbml0eSkgdGhyb3cgUmFuZ2VFcnJvcignV3JvbmcgbnVtYmVyIG9mIHJlcGV0aXRpb25zJyk7XG4gIGZvciAoO24gPiAwOyAobiA+Pj49IDEpICYmIChzdHIgKz0gc3RyKSkgaWYgKG4gJiAxKSByZXN1bHQgKz0gc3RyO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbi8vIGB0aGlzTnVtYmVyVmFsdWVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdGhpc251bWJlcnZhbHVlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlICE9ICdudW1iZXInICYmIGNsYXNzb2YodmFsdWUpICE9ICdOdW1iZXInKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdJbmNvcnJlY3QgaW52b2NhdGlvbicpO1xuICB9XG4gIHJldHVybiArdmFsdWU7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXInKTtcbnZhciB0aGlzTnVtYmVyVmFsdWUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdGhpcy1udW1iZXItdmFsdWUnKTtcbnZhciByZXBlYXQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXJlcGVhdCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbnZhciBuYXRpdmVUb0ZpeGVkID0gMS4wLnRvRml4ZWQ7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG52YXIgcG93ID0gZnVuY3Rpb24gKHgsIG4sIGFjYykge1xuICByZXR1cm4gbiA9PT0gMCA/IGFjYyA6IG4gJSAyID09PSAxID8gcG93KHgsIG4gLSAxLCBhY2MgKiB4KSA6IHBvdyh4ICogeCwgbiAvIDIsIGFjYyk7XG59O1xuXG52YXIgbG9nID0gZnVuY3Rpb24gKHgpIHtcbiAgdmFyIG4gPSAwO1xuICB2YXIgeDIgPSB4O1xuICB3aGlsZSAoeDIgPj0gNDA5Nikge1xuICAgIG4gKz0gMTI7XG4gICAgeDIgLz0gNDA5NjtcbiAgfVxuICB3aGlsZSAoeDIgPj0gMikge1xuICAgIG4gKz0gMTtcbiAgICB4MiAvPSAyO1xuICB9IHJldHVybiBuO1xufTtcblxudmFyIEZPUkNFRCA9IG5hdGl2ZVRvRml4ZWQgJiYgKFxuICAwLjAwMDA4LnRvRml4ZWQoMykgIT09ICcwLjAwMCcgfHxcbiAgMC45LnRvRml4ZWQoMCkgIT09ICcxJyB8fFxuICAxLjI1NS50b0ZpeGVkKDIpICE9PSAnMS4yNScgfHxcbiAgMTAwMDAwMDAwMDAwMDAwMDEyOC4wLnRvRml4ZWQoMCkgIT09ICcxMDAwMDAwMDAwMDAwMDAwMTI4J1xuKSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBWOCB+IEFuZHJvaWQgNC4zLVxuICBuYXRpdmVUb0ZpeGVkLmNhbGwoe30pO1xufSk7XG5cbi8vIGBOdW1iZXIucHJvdG90eXBlLnRvRml4ZWRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtbnVtYmVyLnByb3RvdHlwZS50b2ZpeGVkXG4kKHsgdGFyZ2V0OiAnTnVtYmVyJywgcHJvdG86IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1zdGF0ZW1lbnRzXG4gIHRvRml4ZWQ6IGZ1bmN0aW9uIHRvRml4ZWQoZnJhY3Rpb25EaWdpdHMpIHtcbiAgICB2YXIgbnVtYmVyID0gdGhpc051bWJlclZhbHVlKHRoaXMpO1xuICAgIHZhciBmcmFjdERpZ2l0cyA9IHRvSW50ZWdlcihmcmFjdGlvbkRpZ2l0cyk7XG4gICAgdmFyIGRhdGEgPSBbMCwgMCwgMCwgMCwgMCwgMF07XG4gICAgdmFyIHNpZ24gPSAnJztcbiAgICB2YXIgcmVzdWx0ID0gJzAnO1xuICAgIHZhciBlLCB6LCBqLCBrO1xuXG4gICAgdmFyIG11bHRpcGx5ID0gZnVuY3Rpb24gKG4sIGMpIHtcbiAgICAgIHZhciBpbmRleCA9IC0xO1xuICAgICAgdmFyIGMyID0gYztcbiAgICAgIHdoaWxlICgrK2luZGV4IDwgNikge1xuICAgICAgICBjMiArPSBuICogZGF0YVtpbmRleF07XG4gICAgICAgIGRhdGFbaW5kZXhdID0gYzIgJSAxZTc7XG4gICAgICAgIGMyID0gZmxvb3IoYzIgLyAxZTcpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgZGl2aWRlID0gZnVuY3Rpb24gKG4pIHtcbiAgICAgIHZhciBpbmRleCA9IDY7XG4gICAgICB2YXIgYyA9IDA7XG4gICAgICB3aGlsZSAoLS1pbmRleCA+PSAwKSB7XG4gICAgICAgIGMgKz0gZGF0YVtpbmRleF07XG4gICAgICAgIGRhdGFbaW5kZXhdID0gZmxvb3IoYyAvIG4pO1xuICAgICAgICBjID0gKGMgJSBuKSAqIDFlNztcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIGRhdGFUb1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpbmRleCA9IDY7XG4gICAgICB2YXIgcyA9ICcnO1xuICAgICAgd2hpbGUgKC0taW5kZXggPj0gMCkge1xuICAgICAgICBpZiAocyAhPT0gJycgfHwgaW5kZXggPT09IDAgfHwgZGF0YVtpbmRleF0gIT09IDApIHtcbiAgICAgICAgICB2YXIgdCA9IFN0cmluZyhkYXRhW2luZGV4XSk7XG4gICAgICAgICAgcyA9IHMgPT09ICcnID8gdCA6IHMgKyByZXBlYXQuY2FsbCgnMCcsIDcgLSB0Lmxlbmd0aCkgKyB0O1xuICAgICAgICB9XG4gICAgICB9IHJldHVybiBzO1xuICAgIH07XG5cbiAgICBpZiAoZnJhY3REaWdpdHMgPCAwIHx8IGZyYWN0RGlnaXRzID4gMjApIHRocm93IFJhbmdlRXJyb3IoJ0luY29ycmVjdCBmcmFjdGlvbiBkaWdpdHMnKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKG51bWJlciAhPSBudW1iZXIpIHJldHVybiAnTmFOJztcbiAgICBpZiAobnVtYmVyIDw9IC0xZTIxIHx8IG51bWJlciA+PSAxZTIxKSByZXR1cm4gU3RyaW5nKG51bWJlcik7XG4gICAgaWYgKG51bWJlciA8IDApIHtcbiAgICAgIHNpZ24gPSAnLSc7XG4gICAgICBudW1iZXIgPSAtbnVtYmVyO1xuICAgIH1cbiAgICBpZiAobnVtYmVyID4gMWUtMjEpIHtcbiAgICAgIGUgPSBsb2cobnVtYmVyICogcG93KDIsIDY5LCAxKSkgLSA2OTtcbiAgICAgIHogPSBlIDwgMCA/IG51bWJlciAqIHBvdygyLCAtZSwgMSkgOiBudW1iZXIgLyBwb3coMiwgZSwgMSk7XG4gICAgICB6ICo9IDB4MTAwMDAwMDAwMDAwMDA7XG4gICAgICBlID0gNTIgLSBlO1xuICAgICAgaWYgKGUgPiAwKSB7XG4gICAgICAgIG11bHRpcGx5KDAsIHopO1xuICAgICAgICBqID0gZnJhY3REaWdpdHM7XG4gICAgICAgIHdoaWxlIChqID49IDcpIHtcbiAgICAgICAgICBtdWx0aXBseSgxZTcsIDApO1xuICAgICAgICAgIGogLT0gNztcbiAgICAgICAgfVxuICAgICAgICBtdWx0aXBseShwb3coMTAsIGosIDEpLCAwKTtcbiAgICAgICAgaiA9IGUgLSAxO1xuICAgICAgICB3aGlsZSAoaiA+PSAyMykge1xuICAgICAgICAgIGRpdmlkZSgxIDw8IDIzKTtcbiAgICAgICAgICBqIC09IDIzO1xuICAgICAgICB9XG4gICAgICAgIGRpdmlkZSgxIDw8IGopO1xuICAgICAgICBtdWx0aXBseSgxLCAxKTtcbiAgICAgICAgZGl2aWRlKDIpO1xuICAgICAgICByZXN1bHQgPSBkYXRhVG9TdHJpbmcoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG11bHRpcGx5KDAsIHopO1xuICAgICAgICBtdWx0aXBseSgxIDw8IC1lLCAwKTtcbiAgICAgICAgcmVzdWx0ID0gZGF0YVRvU3RyaW5nKCkgKyByZXBlYXQuY2FsbCgnMCcsIGZyYWN0RGlnaXRzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGZyYWN0RGlnaXRzID4gMCkge1xuICAgICAgayA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICByZXN1bHQgPSBzaWduICsgKGsgPD0gZnJhY3REaWdpdHNcbiAgICAgICAgPyAnMC4nICsgcmVwZWF0LmNhbGwoJzAnLCBmcmFjdERpZ2l0cyAtIGspICsgcmVzdWx0XG4gICAgICAgIDogcmVzdWx0LnNsaWNlKDAsIGsgLSBmcmFjdERpZ2l0cykgKyAnLicgKyByZXN1bHQuc2xpY2UoayAtIGZyYWN0RGlnaXRzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IHNpZ24gKyByZXN1bHQ7XG4gICAgfSByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmaXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciBhZHZhbmNlU3RyaW5nSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYWR2YW5jZS1zdHJpbmctaW5kZXgnKTtcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG5cbi8vIEBAbWF0Y2ggbG9naWNcbmZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljKCdtYXRjaCcsIDEsIGZ1bmN0aW9uIChNQVRDSCwgbmF0aXZlTWF0Y2gsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICByZXR1cm4gW1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLm1hdGNoYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLm1hdGNoXG4gICAgZnVuY3Rpb24gbWF0Y2gocmVnZXhwKSB7XG4gICAgICB2YXIgTyA9IHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcyk7XG4gICAgICB2YXIgbWF0Y2hlciA9IHJlZ2V4cCA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiByZWdleHBbTUFUQ0hdO1xuICAgICAgcmV0dXJuIG1hdGNoZXIgIT09IHVuZGVmaW5lZCA/IG1hdGNoZXIuY2FsbChyZWdleHAsIE8pIDogbmV3IFJlZ0V4cChyZWdleHApW01BVENIXShTdHJpbmcoTykpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEBtYXRjaF1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEBtYXRjaFxuICAgIGZ1bmN0aW9uIChyZWdleHApIHtcbiAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUobmF0aXZlTWF0Y2gsIHJlZ2V4cCwgdGhpcyk7XG4gICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG5cbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHJlZ2V4cCk7XG4gICAgICB2YXIgUyA9IFN0cmluZyh0aGlzKTtcblxuICAgICAgaWYgKCFyeC5nbG9iYWwpIHJldHVybiByZWdFeHBFeGVjKHJ4LCBTKTtcblxuICAgICAgdmFyIGZ1bGxVbmljb2RlID0gcngudW5pY29kZTtcbiAgICAgIHJ4Lmxhc3RJbmRleCA9IDA7XG4gICAgICB2YXIgQSA9IFtdO1xuICAgICAgdmFyIG4gPSAwO1xuICAgICAgdmFyIHJlc3VsdDtcbiAgICAgIHdoaWxlICgocmVzdWx0ID0gcmVnRXhwRXhlYyhyeCwgUykpICE9PSBudWxsKSB7XG4gICAgICAgIHZhciBtYXRjaFN0ciA9IFN0cmluZyhyZXN1bHRbMF0pO1xuICAgICAgICBBW25dID0gbWF0Y2hTdHI7XG4gICAgICAgIGlmIChtYXRjaFN0ciA9PT0gJycpIHJ4Lmxhc3RJbmRleCA9IGFkdmFuY2VTdHJpbmdJbmRleChTLCB0b0xlbmd0aChyeC5sYXN0SW5kZXgpLCBmdWxsVW5pY29kZSk7XG4gICAgICAgIG4rKztcbiAgICAgIH1cbiAgICAgIHJldHVybiBuID09PSAwID8gbnVsbCA6IEE7XG4gICAgfVxuICBdO1xufSk7XG4iLCIvLyBgU3ltYm9sLnByb3RvdHlwZS5kZXNjcmlwdGlvbmAgZ2V0dGVyXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zeW1ib2wucHJvdG90eXBlLmRlc2NyaXB0aW9uXG4ndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG52YXIgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3B5LWNvbnN0cnVjdG9yLXByb3BlcnRpZXMnKTtcblxudmFyIE5hdGl2ZVN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG5cbmlmIChERVNDUklQVE9SUyAmJiB0eXBlb2YgTmF0aXZlU3ltYm9sID09ICdmdW5jdGlvbicgJiYgKCEoJ2Rlc2NyaXB0aW9uJyBpbiBOYXRpdmVTeW1ib2wucHJvdG90eXBlKSB8fFxuICAvLyBTYWZhcmkgMTIgYnVnXG4gIE5hdGl2ZVN5bWJvbCgpLmRlc2NyaXB0aW9uICE9PSB1bmRlZmluZWRcbikpIHtcbiAgdmFyIEVtcHR5U3RyaW5nRGVzY3JpcHRpb25TdG9yZSA9IHt9O1xuICAvLyB3cmFwIFN5bWJvbCBjb25zdHJ1Y3RvciBmb3IgY29ycmVjdCB3b3JrIHdpdGggdW5kZWZpbmVkIGRlc2NyaXB0aW9uXG4gIHZhciBTeW1ib2xXcmFwcGVyID0gZnVuY3Rpb24gU3ltYm9sKCkge1xuICAgIHZhciBkZXNjcmlwdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPCAxIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogU3RyaW5nKGFyZ3VtZW50c1swXSk7XG4gICAgdmFyIHJlc3VsdCA9IHRoaXMgaW5zdGFuY2VvZiBTeW1ib2xXcmFwcGVyXG4gICAgICA/IG5ldyBOYXRpdmVTeW1ib2woZGVzY3JpcHRpb24pXG4gICAgICAvLyBpbiBFZGdlIDEzLCBTdHJpbmcoU3ltYm9sKHVuZGVmaW5lZCkpID09PSAnU3ltYm9sKHVuZGVmaW5lZCknXG4gICAgICA6IGRlc2NyaXB0aW9uID09PSB1bmRlZmluZWQgPyBOYXRpdmVTeW1ib2woKSA6IE5hdGl2ZVN5bWJvbChkZXNjcmlwdGlvbik7XG4gICAgaWYgKGRlc2NyaXB0aW9uID09PSAnJykgRW1wdHlTdHJpbmdEZXNjcmlwdGlvblN0b3JlW3Jlc3VsdF0gPSB0cnVlO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMoU3ltYm9sV3JhcHBlciwgTmF0aXZlU3ltYm9sKTtcbiAgdmFyIHN5bWJvbFByb3RvdHlwZSA9IFN5bWJvbFdyYXBwZXIucHJvdG90eXBlID0gTmF0aXZlU3ltYm9sLnByb3RvdHlwZTtcbiAgc3ltYm9sUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3ltYm9sV3JhcHBlcjtcblxuICB2YXIgc3ltYm9sVG9TdHJpbmcgPSBzeW1ib2xQcm90b3R5cGUudG9TdHJpbmc7XG4gIHZhciBuYXRpdmUgPSBTdHJpbmcoTmF0aXZlU3ltYm9sKCd0ZXN0JykpID09ICdTeW1ib2wodGVzdCknO1xuICB2YXIgcmVnZXhwID0gL15TeW1ib2xcXCgoLiopXFwpW14pXSskLztcbiAgZGVmaW5lUHJvcGVydHkoc3ltYm9sUHJvdG90eXBlLCAnZGVzY3JpcHRpb24nLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZGVzY3JpcHRpb24oKSB7XG4gICAgICB2YXIgc3ltYm9sID0gaXNPYmplY3QodGhpcykgPyB0aGlzLnZhbHVlT2YoKSA6IHRoaXM7XG4gICAgICB2YXIgc3RyaW5nID0gc3ltYm9sVG9TdHJpbmcuY2FsbChzeW1ib2wpO1xuICAgICAgaWYgKGhhcyhFbXB0eVN0cmluZ0Rlc2NyaXB0aW9uU3RvcmUsIHN5bWJvbCkpIHJldHVybiAnJztcbiAgICAgIHZhciBkZXNjID0gbmF0aXZlID8gc3RyaW5nLnNsaWNlKDcsIC0xKSA6IHN0cmluZy5yZXBsYWNlKHJlZ2V4cCwgJyQxJyk7XG4gICAgICByZXR1cm4gZGVzYyA9PT0gJycgPyB1bmRlZmluZWQgOiBkZXNjO1xuICAgIH1cbiAgfSk7XG5cbiAgJCh7IGdsb2JhbDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcbiAgICBTeW1ib2w6IFN5bWJvbFdyYXBwZXJcbiAgfSk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvZGVmYXVsdC1zaG9wLWF2YXRhci5wbmdcIjsiLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7ICBQYWdlSGVhZGVyLCBMaXN0Q29tcGxldGlvbiB9IGZyb20gJ2NvbXBvbmVudHMnXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0MidcbmltcG9ydCB7IExpbmssIFJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBkZWZhdWx0U2hvcEF2YXRhciBmcm9tICdkZWZhdWx0LXNob3AtYXZhdGFyLnBuZydcbmltcG9ydCB7IGdldFNob3AgYXMgZ2V0U2hvcEFjdGlvbiB9IGZyb20gJ3N0b3JlL2FjdGlvbi1jcmVhdG9ycy9zaG9wcydcbmltcG9ydCB7IHNlbGVjdFNob3BEZXRhaWxzIH0gZnJvbSAnc3RvcmUvc2VsZWN0b3JzL3Nob3BzJ1xuaW1wb3J0IHsgY3VycmVudFVzZXJTZWxlY3RvciB9IGZyb20gJ3N0b3JlL3NlbGVjdG9ycy9zZXNzaW9uJ1xuaW1wb3J0IHsgc2hvcFByb2ZpbGVDb21wbGV0aW9uLCBzaG9wQWN0aXZhdGlvblJlcXVpcmVtZW50cyB9IGZyb20gJy4uLy4uL3V0aWxzL2hlbHBlcidcbmNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XG4gIHRvYXN0OiB0cnVlLFxuICBwb3NpdGlvbjogJ3RvcC1lbmQnLFxuICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXG4gIHRpbWVyOiAzMDAwXG59KVxuXG5jb25zdCBBbGVydCA9ICh0eXBlLCB0aXRsZSkgPT4gVG9hc3QuZmlyZSh7XG4gIHR5cGU6IHR5cGUsXG4gIHRpdGxlOiB0aXRsZVxufSlcblxuXG5cbmZ1bmN0aW9uIFZpZXdTaG9wQ29tcG9uZW50KHsgZ2V0U2hvcCwgc2hvcHMsIHVzZXIsIG1hdGNoIH0pIHtcbiAgY29uc3QgeyB1c2VyX3R5cGUgfSA9IHVzZXJcblxuICBjb25zdCBxdWVyeSA9IG1hdGNoLnBhcmFtcy5zbHVnXG4gIGNvbnN0IHBvcHVsYXRlU2hvcCA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBnZXRTaG9wKHF1ZXJ5KVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBwb3B1bGF0ZVNob3AoKVxuICB9LCBbXSkgIFxuXG4gIGNvbnNvbGUubG9nKHNob3BzKVxuXG5cbiAgaWYgKCFzaG9wc1swXSkge1xuICAgIHJldHVybiA8UmVkaXJlY3QgdG89XCIvYWNjb3VudC9zaG9wc1wiIC8+XG4gIH1cbiAgY29uc3Qge25hbWUsIHNsdWcsIGFkZHJlc3MsIGNpdHksIHppcCwgdHlwZSwgZGVzY3JpcHRpb24sIGNvbnRhY3QsIHBheW1lbnRfbWV0aG9kLCBmZWF0dXJlcywgYW1lbml0aWVzLCB0b29scywgY29tcGxldGlvbiwgbGV2ZWwsIHN0YXR1cywgb3BlcmF0aW9ucywgYXZhdGFyLCBiYW5uZXIgfSA9IHNob3BzWzBdXG4gIGNvbnN0IHByb2ZpbGVJdGVtcyA9IHNob3BQcm9maWxlQ29tcGxldGlvbihzaG9wc1swXSkuZmlsdGVyKGl0ZW0gPT4gIWl0ZW0uZG9uZSk7XG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBweC0xMCBweS01XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgPFBhZ2VIZWFkZXIgdGl0bGU9XCJEZXRhaWxzXCIgc3ViVGl0bGU9XCJTaG9wXCIgPlxuICAgICAgICAgICAgPExpbmsgdG89e2AvYWNjb3VudC9zaG9wcy91cGRhdGUvJHtzbHVnfWB9IGNsYXNzTmFtZT1cIm1sLTIgYmctb3JhbmdlLTQwMCBob3ZlcjpiZy1vcmFuZ2UtNTAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnZpZXdfbW9kdWxlPC9pPlxuICAgICAgICAgICAgICA8c3Bhbj5VcGRhdGUgU2hvcCBEZXRhaWxzPC9zcGFuPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvUGFnZUhlYWRlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctMi8zIHByLTEwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgc2hhZG93LWxnIGJnLXdoaXRlXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtbGVmdFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC00OCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicm91bmRlZC10LWxnXCIgc3JjPXsgYmFubmVyIHx8ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vOTc1eDI4MC5wbmc/dGV4dD1Zb3VyIHNob3AgYmFja2dyb3VuZCBpbWFnZSBoZXJlJyB9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTUgdy0zMiBvYmplY3QtZmlsbCBteC1hdXRvIC1tdC0xNiByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgICBzcmM9e2F2YXRhciB8fCBkZWZhdWx0U2hvcEF2YXRhcn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTUgYm9yZGVyLWIgYm9yZGVyLWdyYXktMzAwIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTN4bFwiPlxuICAgICAgICAgICAgICAgICAgeyBuYW1lID8gbmFtZSA6ICdTaG9wIE5hbWUnIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgcHgtNSBweS0xIG15LTMgYmctdGVhbC01MDAgdGV4dC13aGl0ZSB3LTMyIHJvdW5kZWQtZnVsbCBtLTAgbXgtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgVmVyaWZpZWQgLSBUaWVyIDJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHNcIj5cbiAgICAgICAgICAgICAgICAgIHsgdHlwZSA/IHR5cGUgOiAnLScgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTQgcHktNSBib3JkZXItYiBib3JkZXItZ3JheS0zMDAgXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTVcIj5cbiAgICAgICAgICAgICAgICAgIERlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgIHtkZXNjcmlwdGlvbiA/IGRlc2NyaXB0aW9uIDogJ25vbmUnfVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTQgcHktNVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01XCI+XG4gICAgICAgICAgICAgICAgICBFbWFpbFxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICB7dXNlci5lbWFpbH1cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNVwiPlxuICAgICAgICAgICAgICAgICAgQWRkcmVzcyBcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAge2FkZHJlc3MgPyBhZGRyZXNzIDogJ24vYSd9XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTVcIj5cbiAgICAgICAgICAgICAgICAgIFBob25lXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgIHtjb250YWN0ID8gY29udGFjdCA6ICdub25lJ30gXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTVcIj5cbiAgICAgICAgICAgICAgICAgIFBheW1lbnQgTWV0aG9kXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgIHtwYXltZW50X21ldGhvZCA/IHBheW1lbnRfbWV0aG9kIDogJ25vbmUnfVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBzaGFkb3ctbGcgYmctd2hpdGUgbXQtNVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gdGV4dC1ncmF5LTcwMCB0ZXh0LW1kIHAtNSBib3JkZXItYiByb3VuZGVkLXQtbGcgYm9yZGVyLWdyYXktMzAwXCI+XG4gICAgICAgICAgICAgICAgICBPcGVyYXRpbmcgSG91cnNcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01XCI+XG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT1cImJnLWdyYXktMzAwIHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweS0zXCI+U3VuZGF5PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHktM1wiPk1vbmRheTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB5LTNcIj5UdWVzZGF5PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHktM1wiPldlZG5lc2RheTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB5LTNcIj5UaHVyc2RheTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB5LTNcIj5GcmlkYXk8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweS0zXCI+U2F0dXJkYXk8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgeyAhb3BlcmF0aW9ucyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgPD4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMyB0ZXh0LXJlZC03MDBcIj5DbG9zZWQ8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMyB0ZXh0LXJlZC03MDBcIj5DbG9zZWQ8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMyB0ZXh0LXJlZC03MDBcIj5DbG9zZWQ8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMyB0ZXh0LXJlZC03MDBcIj5DbG9zZWQ8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMyB0ZXh0LXJlZC03MDBcIj5DbG9zZWQ8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMyB0ZXh0LXJlZC03MDBcIj5DbG9zZWQ8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMyB0ZXh0LXJlZC03MDBcIj5DbG9zZWQ8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHsgb3BlcmF0aW9ucyAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgb3BlcmF0aW9ucy5tYXAoKG9wZXJhdGlvbiwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17b3BlcmF0aW9uLmNsb3NlZCA/IFwicHktMyB0ZXh0LXJlZC03MDBcIiA6IFwicHktMyB0ZXh0LWdyYXktNzAwXCIgfSBrZXk9e2lkeH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3BlcmF0aW9uLmNsb3NlZCA/ICdjbG9zZWQnIDogPD48ZGl2PntvcGVyYXRpb24uc3RhcnR9PC9kaXY+IDxkaXY+e29wZXJhdGlvbi5lbmR9PC9kaXY+PC8+IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cblxuICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTMgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGNvbC1zcGFuLTEgc2hhZG93LWxnIGJnLXdoaXRlIG10LTVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gdGV4dC1ncmF5LTcwMCB0ZXh0LW1kIHAtNSBib3JkZXItYiByb3VuZGVkLXQtbGcgYm9yZGVyLWdyYXktMzAwXCI+XG4gICAgICAgICAgICAgICAgICAgIEZlYXR1cmVzXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgeyBmZWF0dXJlcyAmJiBcbiAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIHsgZmVhdHVyZXMubWFwKChmZWF0dXJlLCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aWR4fSBjbGFzc05hbWU9XCJweS0yXCI+e2ZlYXR1cmV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHsgZmVhdHVyZXMgPyAnJyA6IDxkaXYgY2xhc3NOYW1lPVwicHgtNSBweS0yXCI+Tm9uZTwvZGl2PiB9XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBjb2wtc3Bhbi0xIHNoYWRvdy1sZyBiZy13aGl0ZSBtdC01XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIHRleHQtZ3JheS03MDAgdGV4dC1tZCBwLTUgYm9yZGVyLWIgcm91bmRlZC10LWxnIGJvcmRlci1ncmF5LTMwMFwiPlxuICAgICAgICAgICAgICAgICAgICBTcGVjaWFsIFRvb2xzXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgeyB0b29scyAmJiBcbiAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIHsgdG9vbHMubWFwKCh0b29sLCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aWR4fSBjbGFzc05hbWU9XCJweS0yXCI+e3Rvb2x9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHsgdG9vbHMgPyAnJyA6IDxkaXYgY2xhc3NOYW1lPVwicHgtNSBweS0yXCI+Tm9uZTwvZGl2PiB9XG4gICAgICAgICAgICAgIDwvZGl2PiAgXG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGNvbC1zcGFuLTEgc2hhZG93LWxnIGJnLXdoaXRlIG10LTVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gdGV4dC1ncmF5LTcwMCB0ZXh0LW1kIHAtNSBib3JkZXItYiByb3VuZGVkLXQtbGcgYm9yZGVyLWdyYXktMzAwXCI+XG4gICAgICAgICAgICAgICAgICAgIEFtZW5pdGllc1xuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsgYW1lbml0aWVzICYmIFxuICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgeyBhbWVuaXRpZXMubWFwKChhbWVuaXR5LCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aWR4fSBjbGFzc05hbWU9XCJweS0yXCI+e2FtZW5pdHl9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHsgYW1lbml0aWVzID8gJycgOiA8ZGl2IGNsYXNzTmFtZT1cInB4LTUgcHktMlwiPk5vbmU8L2Rpdj4gfVxuICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctMS8zIHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICB7cHJvZmlsZUl0ZW1zLmxlbmd0aCAhPT0gMCAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXRlYWwtNDAwIHRleHQtY2VudGVyIHJvdW5kZWQtbGcgdGV4dC13aGl0ZSBweS01IG1iLTVcIj5Db21wbGV0ZSBwcm9maWxlIHRvIGVuYWJsZSBhY3RpdmF0aW9uIHJlcXVpcmVtZW50cyBzdWJtaXNzaW9uLjwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgICAgPExpc3RDb21wbGV0aW9uXG4gICAgICAgICAgICB0aXRsZT1cIlByb2ZpbGUgQ29tcGxldGlvblwiXG4gICAgICAgICAgICBsaXN0PXtzaG9wUHJvZmlsZUNvbXBsZXRpb24oc2hvcHNbMF0pfVxuICAgICAgICAgICAgaHJlZj17YC9hY2NvdW50L3Nob3AvbWFuYWdlLyR7c2x1Z31gfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8TGlzdENvbXBsZXRpb25cbiAgICAgICAgICAgIHN1YlRpdGxlPVwiWW91ciBhY3RpdmF0aW9uIHJlcXVpcmVtZW50cyB3aWxsIGJlIHZlcmlmaWVkXCJcbiAgICAgICAgICAgIHRpdGxlPVwiQWN0aXZhdGlvbiBSZXF1aXJlbWVudHNcIlxuICAgICAgICAgICAgbGlzdD17c2hvcEFjdGl2YXRpb25SZXF1aXJlbWVudHMoc2hvcHNbMF0uYXBwbGljYXRpb24pfVxuICAgICAgICAgICAgcG9pbnRzPXtzaG9wc1swXS5jb21wbGV0aW9uID8gc2hvcHNbMF0uY29tcGxldGlvbiAqIDEwMCA6IDB9XG4gICAgICAgICAgICB0b3RhbFBvaW50cz17MTAwfVxuICAgICAgICAgICAgaHJlZj17YC9hY2NvdW50L3Nob3BzL2FjdGl2YXRpb24vcjRlTlYke3NsdWd9YH1cbiAgICAgICAgICAgIGVuYWJsZWQ9e3Byb2ZpbGVJdGVtcy5sZW5ndGggIT09IDB9XG4gICAgICAgICAgLz4gICAgXG4gICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9GcmFnbWVudD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAoc3RhdGUsIHByb3BzKSA9PiB7XG4gICAgY29uc3QgcXVlcnkgPSBwcm9wcy5tYXRjaC5wYXJhbXMuc2x1Z1xuICAgIHJldHVybiAoe1xuICAgICAgc2hvcHM6IHNlbGVjdFNob3BEZXRhaWxzKHN0YXRlLCBxdWVyeSksXG4gICAgICB1c2VyOiBjdXJyZW50VXNlclNlbGVjdG9yKHN0YXRlKVxuICAgIH0pXG4gIH0sXG4gIGRpc3BhdGNoID0+ICh7XG4gICAgZ2V0U2hvcDogaWQgPT4gZGlzcGF0Y2goZ2V0U2hvcEFjdGlvbihpZCkpXG4gIH0pXG4pKFZpZXdTaG9wQ29tcG9uZW50KSIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IHNob3BBY3Rpb25zIGFzIGFjdGlvbnMgfSBmcm9tICdzdG9yZS9hY3Rpb25zJ1xuaW1wb3J0IHsgbWFrZVJlcXVlc3QgfSBmcm9tICdzdG9yZS9hY3Rpb24tY3JlYXRvcnMvcmVxdWVzdHMnXG5cbmV4cG9ydCBjb25zdCBnZXRTaG9wcyA9ICgpID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkaXNwYXRjaChcbiAgICBtYWtlUmVxdWVzdCgnZ2V0LXNob3BzJywgKCkgPT4gYXhpb3MuZ2V0KGAvYXBpL3Nob3BzYCkpXG4gIClcblxuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogYWN0aW9ucy5BRERfU0hPUFMsXG4gICAgc2hvcHM6IHJlc3BvbnNlLmRhdGEuZGF0YVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U2hvcCA9IHNsdWcgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRpc3BhdGNoKFxuICAgIG1ha2VSZXF1ZXN0KGBnZXQtc2hvcC0ke3NsdWd9YCwgKCkgPT4gYXhpb3MuZ2V0KGAvYXBpL3Nob3BzLyR7c2x1Z31gKSlcbiAgKVxuXG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBhY3Rpb25zLkdFVF9TSE9QLFxuICAgIHNob3BzOiByZXNwb25zZS5kYXRhLmRhdGFcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVNob3AgPSBkYXRhID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkaXNwYXRjaChcbiAgICBtYWtlUmVxdWVzdCgnY3JlYXRlLXNob3AnLCAoKSA9PiBheGlvcy5wb3N0KGAvYXBpL3Nob3BzYCwgZGF0YSkpXG4gIClcblxuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogYWN0aW9ucy5BRERfU0hPUCxcbiAgICBzaG9wczogcmVzcG9uc2UuZGF0YS5kYXRhXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVTaG9wID0gZGF0YSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZGlzcGF0Y2goXG4gICAgbWFrZVJlcXVlc3QoYHVwZGF0ZS1zaG9wLSR7ZGF0YS5zbHVnfWAsICgpID0+XG4gICAgICBheGlvcy5wdXQoYC9hcGkvc2hvcHMvJHtkYXRhLnNsdWd9YCwgZGF0YSlcbiAgICApXG4gIClcblxuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogYWN0aW9ucy5VUERBVEVfU0hPUCxcbiAgICBzaG9wczogcmVzcG9uc2UuZGF0YS5kYXRhXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVTaG9wID0gc2x1ZyA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XG4gIGF3YWl0IGRpc3BhdGNoKFxuICAgIG1ha2VSZXF1ZXN0KGB1cGRhdGUtc2hvcC0ke3NsdWd9YCwgKCkgPT4gYXhpb3MuZGVsZXRlKGAvYXBpL3Nob3BzLyR7c2x1Z31gKSlcbiAgKVxuXG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBhY3Rpb25zLkRFTEVURV9TSE9QLFxuICAgIHNsdWdcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IHNhdmVTaG9wID0gc2hvcERhdGEgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICBjb25zdCB7IHNsdWcgfSA9IHNob3BEYXRhXG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkaXNwYXRjaChcbiAgICBtYWtlUmVxdWVzdCgnc2F2ZS1zaG9wLXNldHRpbmdzJywgKCkgPT5cbiAgICAgIGF4aW9zLnB1dChgL2FwaS9zaG9wcy8ke3NsdWd9YCwgc2hvcERhdGEpXG4gICAgKVxuICApXG5cbiAgcmV0dXJuIHJlc3BvbnNlXG59XG5cblxuIiwiaW1wb3J0IHsgZGVub3JtYWxpemUgfSBmcm9tICdub3JtYWxpenInXG5cbmltcG9ydCB7IGVudGl0aWVzIGFzIGVudGl0aWVzU2NoZW1hIH0gZnJvbSAnc3RvcmUvc2NoZW1hcydcblxuZXhwb3J0IGNvbnN0IHNlbGVjdEFsbFNob3BzID0gc3RhdGUgPT4ge1xuICBjb25zdCBkbkVudGl0aWVzID0gZGVub3JtYWxpemUoXG4gICAgeyBzaG9wczogT2JqZWN0LmtleXMoc3RhdGUuZW50aXRpZXMuc2hvcHMpIH0sXG4gICAgZW50aXRpZXNTY2hlbWEsXG4gICAgc3RhdGUuZW50aXRpZXNcbiAgKVxuXG4gIHJldHVybiBkbkVudGl0aWVzLnNob3BzXG59XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RTaG9wRGV0YWlscyA9IChzdGF0ZSwgc2x1ZykgPT4ge1xuXG4gIGNvbnN0IGRuRW50aXRpZXMgPSBkZW5vcm1hbGl6ZShcbiAgICB7IHNob3BzOiBbc2x1Z10gfSxcbiAgICBlbnRpdGllc1NjaGVtYSxcbiAgICBzdGF0ZS5lbnRpdGllc1xuICApXG5cbiAgcmV0dXJuIGRuRW50aXRpZXMuc2hvcHNcbn0iLCJleHBvcnQgZGVmYXVsdCB7IFBMQUNFSE9MREVSX0NPTE9SOiAnI2UwZTBlMCcgfTtcbiIsImV4cG9ydCBkZWZhdWx0IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnLCB7XG4gIHN0eWxlOiAnY3VycmVuY3knLFxuICBjdXJyZW5jeTogJ1BIUCcsXG4gIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMlxufSk7XG4iLCJcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi9jb2xvcnMnO1xuaW1wb3J0IGZvcm1hdHRlciBmcm9tICcuL2N1cnJlbmN5LWZvcm1hdHRlcic7XG5pbXBvcnQgbW9udGhzIGZyb20gJy4vbW9udGhzJztcbmltcG9ydCBuYW1lU3BsaXR0ZXIgZnJvbSAnLi9uYW1lLXNwbGl0dGVyJztcbmltcG9ydCBudW1iZXJGb3JtYXR0ZXIgZnJvbSAnLi9udW1iZXItZm9ybWF0dGVyJztcbmltcG9ydCBzaG9wQWN0aXZhdGlvblJlcXVpcmVtZW50cyBmcm9tICcuL3Nob3AtYWN0aXZhdGlvbi1yZXF1aXJlbWVudHMnO1xuaW1wb3J0IHNob3BQcm9maWxlQ29tcGxldGlvbiBmcm9tICcuL3Nob3AtcHJvZmlsZS1jb21wbGV0aW9uJztcbmltcG9ydCB0aW1lRm9ybWF0dGVyIGZyb20gJy4vdGltZS1mb3JtYXR0ZXInO1xuXG5leHBvcnQge1xuICBjb2xvcnMsXG4gIGZvcm1hdHRlcixcbiAgbW9udGhzLFxuICBuYW1lU3BsaXR0ZXIsXG4gIG51bWJlckZvcm1hdHRlcixcbiAgc2hvcEFjdGl2YXRpb25SZXF1aXJlbWVudHMsXG4gIHNob3BQcm9maWxlQ29tcGxldGlvbixcbiAgdGltZUZvcm1hdHRlclxufTtcbiIsImV4cG9ydCBkZWZhdWx0IGluZGV4ID0+IHtcbiAgY29uc3QgbW9udGhzID0gW1xuICAgICdKYW51YXJ5JyxcbiAgICAnRmVicnVhcnknLFxuICAgICdNYXJjaCcsXG4gICAgJ0FwcmlsJyxcbiAgICAnTWF5JyxcbiAgICAnSnVuZScsXG4gICAgJ0p1bHknLFxuICAgICdBdWd1c3QnLFxuICAgICdTZXB0ZW1iZXInLFxuICAgICdPY3RvYmVyJyxcbiAgICAnTm92ZW1iZXInLFxuICAgICdEZWNlbWJlcidcbiAgXTtcblxuICByZXR1cm4gbW9udGhzW2luZGV4XTtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBuYW1lID0+IHtcbiAgY29uc3Qgc3BsaXROYW1lID0gbmFtZS5zcGxpdCgnLCcpO1xuICByZXR1cm4ge1xuICAgIGxuYW1lOiBzcGxpdE5hbWVbMF0sXG4gICAgZm5hbWU6IHNwbGl0TmFtZVsxXVxuICB9O1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IG5ldyBJbnRsLk51bWJlckZvcm1hdCgpO1xuIiwiZXhwb3J0IGRlZmF1bHQgYXBwbGljYXRpb24gPT4ge1xuICBsZXQgcmVzdWx0ID0gW107XG5cbiAgaWYgKGFwcGxpY2F0aW9uKSB7XG4gICAgY29uc3Qge1xuICAgICAgcmVnaXN0cmF0aW9uLFxuICAgICAgYnVzaW5lc3NfcGVybWl0LFxuICAgICAgYmlyLFxuICAgICAgbGlmdGVycyxcbiAgICAgIG1lcmNoX2NlcnQsXG4gICAgICBzcGVjaWFsX3Rvb2xzLFxuICAgICAgdmVyaWZpZWRfYml6X3JlZyxcbiAgICAgIHZlcmlmaWVkX3Blcm1pdCxcbiAgICAgIHZlcmlmaWVkX2Jpcl9jZXJ0LFxuICAgICAgdmVyaWZpZWRfbGlmdGVycyxcbiAgICAgIHZlcmlmaWVkX21lcmNoX2NlcnQsXG4gICAgICB2ZXJpZmllZF9zcGVjaWFsX3Rvb2xzXG4gICAgfSA9IGFwcGxpY2F0aW9uO1xuICAgIHJlc3VsdCA9IFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICdTRUMvRFRJIENlcnRpZmljYXRlIG9mIFJlZ2lzdHJhdGlvbiAoMjUpJyxcbiAgICAgICAgZG9uZTogcmVnaXN0cmF0aW9uICE9PSBudWxsICYmIHZlcmlmaWVkX2Jpel9yZWdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIk1heW9yJ3MgUGVybWl0ICgyNSlcIixcbiAgICAgICAgZG9uZTogYnVzaW5lc3NfcGVybWl0ICE9PSBudWxsICYmIHZlcmlmaWVkX3Blcm1pdFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICdCSVIgQ2VydGlmaWNhdGUgb2YgUmVnaXN0cmF0aW9uICgyNSknLFxuICAgICAgICBkb25lOiBiaXIgIT09IG51bGwgJiYgdmVyaWZpZWRfYmlyX2NlcnRcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnTGlmdGVycyAoNSknLFxuICAgICAgICBkb25lOiBsaWZ0ZXJzICE9PSBudWxsICYmIHZlcmlmaWVkX2xpZnRlcnNcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnTWVyY2hhbnQgQ2VydGlmaWNhdGlvbiAoMTApJyxcbiAgICAgICAgZG9uZTogbWVyY2hfY2VydCAhPT0gbnVsbCAmJiB2ZXJpZmllZF9tZXJjaF9jZXJ0XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ1NwZWNpYWwgVG9vbHMgKDEwKScsXG4gICAgICAgIGRvbmU6IHNwZWNpYWxfdG9vbHMgIT09IG51bGwgJiYgdmVyaWZpZWRfc3BlY2lhbF90b29sc1xuICAgICAgfVxuICAgIF07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBzaG9wID0+IHtcbiAgbGV0IHJlc3VsdCA9IFtdO1xuXG4gIGlmIChzaG9wKSB7XG4gICAgY29uc3Qge1xuICAgICAgYXZhdGFyLFxuICAgICAgYmFubmVyLFxuICAgICAgYWRkcmVzcyxcbiAgICAgIHR5cGUsXG4gICAgICBjb250YWN0LFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBvcGVyYXRpb25zLFxuICAgICAgZmVhdHVyZXMsXG4gICAgICBhbWVuaXRpZXMsXG4gICAgICBwYXltZW50X21ldGhvZFxuICAgIH0gPSBzaG9wO1xuICAgIHJlc3VsdCA9IFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICdTaG9wIExvZ28nLFxuICAgICAgICBkb25lOiBhdmF0YXIgIT09IG51bGxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnU2hvcCBCYW5uZXInLFxuICAgICAgICBkb25lOiBiYW5uZXIgIT09IG51bGxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnQWRkcmVzcycsXG4gICAgICAgIGRvbmU6IGFkZHJlc3MgIT09IG51bGxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnU2hvcCBUeXBlJyxcbiAgICAgICAgZG9uZTogdHlwZSAhPT0gbnVsbFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICdDb250YWN0IE51bWJlcicsXG4gICAgICAgIGRvbmU6IGNvbnRhY3QgIT09IG51bGxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnRGVzY3JpcHRpb24nLFxuICAgICAgICBkb25lOiBkZXNjcmlwdGlvbiAhPT0gbnVsbFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICdPcGVyYXRpbmcgSG91cnMnLFxuICAgICAgICBkb25lOiBvcGVyYXRpb25zICE9PSBudWxsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ0ZlYXR1cmVzJyxcbiAgICAgICAgZG9uZTogZmVhdHVyZXMgIT09IG51bGxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnQW1lbml0aWVzJyxcbiAgICAgICAgZG9uZTogYW1lbml0aWVzICE9PSBudWxsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ1BheW1lbnQgTWV0aG9kJyxcbiAgICAgICAgZG9uZTogcGF5bWVudF9tZXRob2QgIT09IG51bGxcbiAgICAgIH1cbiAgICBdO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgdmFsdWUgPT4ge1xuICBjb25zdCBuZXdWYWx1ZSA9IHZhbHVlIDwgMTIgPyB2YWx1ZSA6IHZhbHVlID09PSAxMiA/IDEyIDogdmFsdWUgLSAxMjtcbiAgcmV0dXJuIGAke051bWJlcihuZXdWYWx1ZSkudG9GaXhlZCgwKX06MDAgJHt2YWx1ZSA8IDEyID8gJ0FNJyA6ICdQTSd9YDtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9