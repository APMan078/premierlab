(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/react-number-format/dist/react-number-format.es.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-number-format/dist/react-number-format.es.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/**
 * react-number-format - 4.4.1
 * Author : Sudhanshu Yadav
 * Copyright (c) 2016, 2020 to Sudhanshu Yadav, released under the MIT license.
 * https://github.com/s-yadav/react-number-format
 */



function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
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

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

// basic noop function
function noop() {}
function returnTrue() {
  return true;
}
function charIsNumber(_char) {
  return !!(_char || '').match(/\d/);
}
function escapeRegExp(str) {
  return str.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
}
function getThousandsGroupRegex(thousandsGroupStyle) {
  switch (thousandsGroupStyle) {
    case 'lakh':
      return /(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;

    case 'wan':
      return /(\d)(?=(\d{4})+(?!\d))/g;

    case 'thousand':
    default:
      return /(\d)(?=(\d{3})+(?!\d))/g;
  }
}
function applyThousandSeparator(str, thousandSeparator, thousandsGroupStyle) {
  var thousandsGroupRegex = getThousandsGroupRegex(thousandsGroupStyle);
  var index = str.search(/[1-9]/);
  index = index === -1 ? str.length : index;
  return str.substring(0, index) + str.substring(index, str.length).replace(thousandsGroupRegex, '$1' + thousandSeparator);
} //spilt a float number into different parts beforeDecimal, afterDecimal, and negation

function splitDecimal(numStr) {
  var allowNegative = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var hasNagation = numStr[0] === '-';
  var addNegation = hasNagation && allowNegative;
  numStr = numStr.replace('-', '');
  var parts = numStr.split('.');
  var beforeDecimal = parts[0];
  var afterDecimal = parts[1] || '';
  return {
    beforeDecimal: beforeDecimal,
    afterDecimal: afterDecimal,
    hasNagation: hasNagation,
    addNegation: addNegation
  };
}
function fixLeadingZero(numStr) {
  if (!numStr) return numStr;
  var isNegative = numStr[0] === '-';
  if (isNegative) numStr = numStr.substring(1, numStr.length);
  var parts = numStr.split('.');
  var beforeDecimal = parts[0].replace(/^0+/, '') || '0';
  var afterDecimal = parts[1] || '';
  return "".concat(isNegative ? '-' : '').concat(beforeDecimal).concat(afterDecimal ? ".".concat(afterDecimal) : '');
}
/**
 * limit decimal numbers to given scale
 * Not used .fixedTo because that will break with big numbers
 */

function limitToScale(numStr, scale, fixedDecimalScale) {
  var str = '';
  var filler = fixedDecimalScale ? '0' : '';

  for (var i = 0; i <= scale - 1; i++) {
    str += numStr[i] || filler;
  }

  return str;
}
/**
 * This method is required to round prop value to given scale.
 * Not used .round or .fixedTo because that will break with big numbers
 */

function roundToPrecision(numStr, scale, fixedDecimalScale) {
  //if number is empty don't do anything return empty string
  if (['', '-'].indexOf(numStr) !== -1) return numStr;
  var shoudHaveDecimalSeparator = numStr.indexOf('.') !== -1 && scale;

  var _splitDecimal = splitDecimal(numStr),
      beforeDecimal = _splitDecimal.beforeDecimal,
      afterDecimal = _splitDecimal.afterDecimal,
      hasNagation = _splitDecimal.hasNagation;

  var roundedDecimalParts = parseFloat("0.".concat(afterDecimal || '0')).toFixed(scale).split('.');
  var intPart = beforeDecimal.split('').reverse().reduce(function (roundedStr, current, idx) {
    if (roundedStr.length > idx) {
      return (Number(roundedStr[0]) + Number(current)).toString() + roundedStr.substring(1, roundedStr.length);
    }

    return current + roundedStr;
  }, roundedDecimalParts[0]);
  var decimalPart = limitToScale(roundedDecimalParts[1] || '', Math.min(scale, afterDecimal.length), fixedDecimalScale);
  var negation = hasNagation ? '-' : '';
  var decimalSeparator = shoudHaveDecimalSeparator ? '.' : '';
  return "".concat(negation).concat(intPart).concat(decimalSeparator).concat(decimalPart);
}
function omit(obj, keyMaps) {
  var filteredObj = {};
  Object.keys(obj).forEach(function (key) {
    if (!keyMaps[key]) filteredObj[key] = obj[key];
  });
  return filteredObj;
}
/** set the caret positon in an input field **/

function setCaretPosition(el, caretPos) {
  el.value = el.value; // ^ this is used to not only get "focus", but
  // to make sure we don't have it everything -selected-
  // (it causes an issue in chrome, and having it doesn't hurt any other browser)

  if (el !== null) {
    if (el.createTextRange) {
      var range = el.createTextRange();
      range.move('character', caretPos);
      range.select();
      return true;
    } // (el.selectionStart === 0 added for Firefox bug)


    if (el.selectionStart || el.selectionStart === 0) {
      el.focus();
      el.setSelectionRange(caretPos, caretPos);
      return true;
    } // fail city, fortunately this never happens (as far as I've tested) :)


    el.focus();
    return false;
  }
}
/**
  Given previous value and newValue it returns the index
  start - end to which values have changed.
  This function makes assumption about only consecutive
  characters are changed which is correct assumption for caret input.
*/

function findChangedIndex(prevValue, newValue) {
  var i = 0,
      j = 0;
  var prevLength = prevValue.length;
  var newLength = newValue.length;

  while (prevValue[i] === newValue[i] && i < prevLength) {
    i++;
  } //check what has been changed from last


  while (prevValue[prevLength - 1 - j] === newValue[newLength - 1 - j] && newLength - j > i && prevLength - j > i) {
    j++;
  }

  return {
    start: i,
    end: prevLength - j
  };
}
/*
  Returns a number whose value is limited to the given range
*/

function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
}
function getCurrentCaretPosition(el) {
  /*Max of selectionStart and selectionEnd is taken for the patch of pixel and other mobile device caret bug*/
  return Math.max(el.selectionStart, el.selectionEnd);
}

var propTypes$1 = {
  thousandSeparator: propTypes.oneOfType([propTypes.string, propTypes.oneOf([true])]),
  decimalSeparator: propTypes.string,
  allowedDecimalSeparators: propTypes.arrayOf(propTypes.string),
  thousandsGroupStyle: propTypes.oneOf(['thousand', 'lakh', 'wan']),
  decimalScale: propTypes.number,
  fixedDecimalScale: propTypes.bool,
  displayType: propTypes.oneOf(['input', 'text']),
  prefix: propTypes.string,
  suffix: propTypes.string,
  format: propTypes.oneOfType([propTypes.string, propTypes.func]),
  removeFormatting: propTypes.func,
  mask: propTypes.oneOfType([propTypes.string, propTypes.arrayOf(propTypes.string)]),
  value: propTypes.oneOfType([propTypes.number, propTypes.string]),
  defaultValue: propTypes.oneOfType([propTypes.number, propTypes.string]),
  isNumericString: propTypes.bool,
  customInput: propTypes.elementType,
  allowNegative: propTypes.bool,
  allowEmptyFormatting: propTypes.bool,
  allowLeadingZeros: propTypes.bool,
  onValueChange: propTypes.func,
  onKeyDown: propTypes.func,
  onMouseUp: propTypes.func,
  onChange: propTypes.func,
  onFocus: propTypes.func,
  onBlur: propTypes.func,
  type: propTypes.oneOf(['text', 'tel', 'password']),
  isAllowed: propTypes.func,
  renderText: propTypes.func,
  getInputRef: propTypes.oneOfType([propTypes.func, // for legacy refs
  propTypes.shape({
    current: propTypes.any
  })])
};
var defaultProps = {
  displayType: 'input',
  decimalSeparator: '.',
  thousandsGroupStyle: 'thousand',
  fixedDecimalScale: false,
  prefix: '',
  suffix: '',
  allowNegative: true,
  allowEmptyFormatting: false,
  allowLeadingZeros: false,
  isNumericString: false,
  type: 'text',
  onValueChange: noop,
  onChange: noop,
  onKeyDown: noop,
  onMouseUp: noop,
  onFocus: noop,
  onBlur: noop,
  isAllowed: returnTrue
};

var NumberFormat =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NumberFormat, _React$Component);

  function NumberFormat(props) {
    var _this;

    _classCallCheck(this, NumberFormat);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NumberFormat).call(this, props));
    var defaultValue = props.defaultValue; //validate props

    _this.validateProps();

    var formattedValue = _this.formatValueProp(defaultValue);

    _this.state = {
      value: formattedValue,
      numAsString: _this.removeFormatting(formattedValue)
    };
    _this.selectionBeforeInput = {
      selectionStart: 0,
      selectionEnd: 0
    };
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_this));
    _this.onMouseUp = _this.onMouseUp.bind(_assertThisInitialized(_this));
    _this.onFocus = _this.onFocus.bind(_assertThisInitialized(_this));
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(NumberFormat, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      this.updateValueIfRequired(prevProps);
    }
  }, {
    key: "updateValueIfRequired",
    value: function updateValueIfRequired(prevProps) {
      var props = this.props,
          state = this.state,
          focusedElm = this.focusedElm;
      var stateValue = state.value,
          _state$numAsString = state.numAsString,
          lastNumStr = _state$numAsString === void 0 ? '' : _state$numAsString; // If only state changed no need to do any thing

      if (prevProps !== props) {
        //validate props
        this.validateProps();
        var lastValueWithNewFormat = this.formatNumString(lastNumStr);
        var formattedValue = props.value === undefined ? lastValueWithNewFormat : this.formatValueProp();
        var numAsString = this.removeFormatting(formattedValue);
        var floatValue = parseFloat(numAsString);
        var lastFloatValue = parseFloat(lastNumStr);

        if ( //while typing set state only when float value changes
        (!isNaN(floatValue) || !isNaN(lastFloatValue)) && floatValue !== lastFloatValue || //can also set state when float value is same and the format props changes
        lastValueWithNewFormat !== stateValue || //set state always when not in focus and formatted value is changed
        focusedElm === null && formattedValue !== stateValue) {
          this.updateValue({
            formattedValue: formattedValue,
            numAsString: numAsString,
            input: focusedElm
          });
        }
      }
    }
    /** Misc methods **/

  }, {
    key: "getFloatString",
    value: function getFloatString() {
      var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var decimalScale = this.props.decimalScale;

      var _this$getSeparators = this.getSeparators(),
          decimalSeparator = _this$getSeparators.decimalSeparator;

      var numRegex = this.getNumberRegex(true); //remove negation for regex check

      var hasNegation = num[0] === '-';
      if (hasNegation) num = num.replace('-', ''); //if decimal scale is zero remove decimal and number after decimalSeparator

      if (decimalSeparator && decimalScale === 0) {
        num = num.split(decimalSeparator)[0];
      }

      num = (num.match(numRegex) || []).join('').replace(decimalSeparator, '.'); //remove extra decimals

      var firstDecimalIndex = num.indexOf('.');

      if (firstDecimalIndex !== -1) {
        num = "".concat(num.substring(0, firstDecimalIndex), ".").concat(num.substring(firstDecimalIndex + 1, num.length).replace(new RegExp(escapeRegExp(decimalSeparator), 'g'), ''));
      } //add negation back


      if (hasNegation) num = '-' + num;
      return num;
    } //returned regex assumes decimalSeparator is as per prop

  }, {
    key: "getNumberRegex",
    value: function getNumberRegex(g, ignoreDecimalSeparator) {
      var _this$props = this.props,
          format = _this$props.format,
          decimalScale = _this$props.decimalScale;

      var _this$getSeparators2 = this.getSeparators(),
          decimalSeparator = _this$getSeparators2.decimalSeparator;

      return new RegExp('\\d' + (decimalSeparator && decimalScale !== 0 && !ignoreDecimalSeparator && !format ? '|' + escapeRegExp(decimalSeparator) : ''), g ? 'g' : undefined);
    }
  }, {
    key: "getSeparators",
    value: function getSeparators() {
      var decimalSeparator = this.props.decimalSeparator;
      var _this$props2 = this.props,
          thousandSeparator = _this$props2.thousandSeparator,
          allowedDecimalSeparators = _this$props2.allowedDecimalSeparators;

      if (thousandSeparator === true) {
        thousandSeparator = ',';
      }

      if (!allowedDecimalSeparators) {
        allowedDecimalSeparators = [decimalSeparator, '.'];
      }

      return {
        decimalSeparator: decimalSeparator,
        thousandSeparator: thousandSeparator,
        allowedDecimalSeparators: allowedDecimalSeparators
      };
    }
  }, {
    key: "getMaskAtIndex",
    value: function getMaskAtIndex(index) {
      var _this$props$mask = this.props.mask,
          mask = _this$props$mask === void 0 ? ' ' : _this$props$mask;

      if (typeof mask === 'string') {
        return mask;
      }

      return mask[index] || ' ';
    }
  }, {
    key: "getValueObject",
    value: function getValueObject(formattedValue, numAsString) {
      var floatValue = parseFloat(numAsString);
      return {
        formattedValue: formattedValue,
        value: numAsString,
        floatValue: isNaN(floatValue) ? undefined : floatValue
      };
    }
  }, {
    key: "validateProps",
    value: function validateProps() {
      var mask = this.props.mask; //validate decimalSeparator and thousandSeparator

      var _this$getSeparators3 = this.getSeparators(),
          decimalSeparator = _this$getSeparators3.decimalSeparator,
          thousandSeparator = _this$getSeparators3.thousandSeparator;

      if (decimalSeparator === thousandSeparator) {
        throw new Error("\n          Decimal separator can't be same as thousand separator.\n          thousandSeparator: ".concat(thousandSeparator, " (thousandSeparator = {true} is same as thousandSeparator = \",\")\n          decimalSeparator: ").concat(decimalSeparator, " (default value for decimalSeparator is .)\n       "));
      } //validate mask


      if (mask) {
        var maskAsStr = mask === 'string' ? mask : mask.toString();

        if (maskAsStr.match(/\d/g)) {
          throw new Error("\n          Mask ".concat(mask, " should not contain numeric character;\n        "));
        }
      }
    }
    /** Misc methods end **/

    /** caret specific methods **/

  }, {
    key: "setPatchedCaretPosition",
    value: function setPatchedCaretPosition(el, caretPos, currentValue) {
      /* setting caret position within timeout of 0ms is required for mobile chrome,
      otherwise browser resets the caret position after we set it
      We are also setting it without timeout so that in normal browser we don't see the flickering */
      setCaretPosition(el, caretPos);
      setTimeout(function () {
        if (el.value === currentValue) setCaretPosition(el, caretPos);
      }, 0);
    }
    /* This keeps the caret within typing area so people can't type in between prefix or suffix */

  }, {
    key: "correctCaretPosition",
    value: function correctCaretPosition(value, caretPos, direction) {
      var _this$props3 = this.props,
          prefix = _this$props3.prefix,
          suffix = _this$props3.suffix,
          format = _this$props3.format; //if value is empty return 0

      if (value === '') return 0; //caret position should be between 0 and value length

      caretPos = clamp(caretPos, 0, value.length); //in case of format as number limit between prefix and suffix

      if (!format) {
        var hasNegation = value[0] === '-';
        return clamp(caretPos, prefix.length + (hasNegation ? 1 : 0), value.length - suffix.length);
      } //in case if custom format method don't do anything


      if (typeof format === 'function') return caretPos;
      /* in case format is string find the closest # position from the caret position */
      //in case the caretPos have input value on it don't do anything

      if (format[caretPos] === '#' && charIsNumber(value[caretPos])) return caretPos; //if caretPos is just after input value don't do anything

      if (format[caretPos - 1] === '#' && charIsNumber(value[caretPos - 1])) return caretPos; //find the nearest caret position

      var firstHashPosition = format.indexOf('#');
      var lastHashPosition = format.lastIndexOf('#'); //limit the cursor between the first # position and the last # position

      caretPos = clamp(caretPos, firstHashPosition, lastHashPosition + 1);
      var nextPos = format.substring(caretPos, format.length).indexOf('#');
      var caretLeftBound = caretPos;
      var caretRightBound = caretPos + (nextPos === -1 ? 0 : nextPos); //get the position where the last number is present

      while (caretLeftBound > firstHashPosition && (format[caretLeftBound] !== '#' || !charIsNumber(value[caretLeftBound]))) {
        caretLeftBound -= 1;
      }

      var goToLeft = !charIsNumber(value[caretRightBound]) || direction === 'left' && caretPos !== firstHashPosition || caretPos - caretLeftBound < caretRightBound - caretPos;

      if (goToLeft) {
        //check if number should be taken after the bound or after it
        //if number preceding a valid number keep it after
        return charIsNumber(value[caretLeftBound]) ? caretLeftBound + 1 : caretLeftBound;
      }

      return caretRightBound;
    }
  }, {
    key: "getCaretPosition",
    value: function getCaretPosition(inputValue, formattedValue, caretPos) {
      var format = this.props.format;
      var stateValue = this.state.value;
      var numRegex = this.getNumberRegex(true);
      var inputNumber = (inputValue.match(numRegex) || []).join('');
      var formattedNumber = (formattedValue.match(numRegex) || []).join('');
      var j, i;
      j = 0;

      for (i = 0; i < caretPos; i++) {
        var currentInputChar = inputValue[i] || '';
        var currentFormatChar = formattedValue[j] || ''; //no need to increase new cursor position if formatted value does not have those characters
        //case inputValue = 1a23 and formattedValue =  123

        if (!currentInputChar.match(numRegex) && currentInputChar !== currentFormatChar) continue; //When we are striping out leading zeros maintain the new cursor position
        //Case inputValue = 00023 and formattedValue = 23;

        if (currentInputChar === '0' && currentFormatChar.match(numRegex) && currentFormatChar !== '0' && inputNumber.length !== formattedNumber.length) continue; //we are not using currentFormatChar because j can change here

        while (currentInputChar !== formattedValue[j] && j < formattedValue.length) {
          j++;
        }

        j++;
      }

      if (typeof format === 'string' && !stateValue) {
        //set it to the maximum value so it goes after the last number
        j = formattedValue.length;
      } //correct caret position if its outside of editable area


      j = this.correctCaretPosition(formattedValue, j);
      return j;
    }
    /** caret specific methods ends **/

    /** methods to remove formattting **/

  }, {
    key: "removePrefixAndSuffix",
    value: function removePrefixAndSuffix(val) {
      var _this$props4 = this.props,
          format = _this$props4.format,
          prefix = _this$props4.prefix,
          suffix = _this$props4.suffix; //remove prefix and suffix

      if (!format && val) {
        var isNegative = val[0] === '-'; //remove negation sign

        if (isNegative) val = val.substring(1, val.length); //remove prefix

        val = prefix && val.indexOf(prefix) === 0 ? val.substring(prefix.length, val.length) : val; //remove suffix

        var suffixLastIndex = val.lastIndexOf(suffix);
        val = suffix && suffixLastIndex !== -1 && suffixLastIndex === val.length - suffix.length ? val.substring(0, suffixLastIndex) : val; //add negation sign back

        if (isNegative) val = '-' + val;
      }

      return val;
    }
  }, {
    key: "removePatternFormatting",
    value: function removePatternFormatting(val) {
      var format = this.props.format;
      var formatArray = format.split('#').filter(function (str) {
        return str !== '';
      });
      var start = 0;
      var numStr = '';

      for (var i = 0, ln = formatArray.length; i <= ln; i++) {
        var part = formatArray[i] || ''; //if i is the last fragment take the index of end of the value
        //For case like +1 (911) 911 91 91 having pattern +1 (###) ### ## ##

        var index = i === ln ? val.length : val.indexOf(part, start);
        /* in any case if we don't find the pattern part in the value assume the val as numeric string
        This will be also in case if user has started typing, in any other case it will not be -1
        unless wrong prop value is provided */

        if (index === -1) {
          numStr = val;
          break;
        } else {
          numStr += val.substring(start, index);
          start = index + part.length;
        }
      }

      return (numStr.match(/\d/g) || []).join('');
    }
  }, {
    key: "removeFormatting",
    value: function removeFormatting(val) {
      var _this$props5 = this.props,
          format = _this$props5.format,
          removeFormatting = _this$props5.removeFormatting;
      if (!val) return val;

      if (!format) {
        val = this.removePrefixAndSuffix(val);
        val = this.getFloatString(val);
      } else if (typeof format === 'string') {
        val = this.removePatternFormatting(val);
      } else if (typeof removeFormatting === 'function') {
        //condition need to be handled if format method is provide,
        val = removeFormatting(val);
      } else {
        val = (val.match(/\d/g) || []).join('');
      }

      return val;
    }
    /** methods to remove formattting end **/

    /*** format specific methods start ***/

    /**
     * Format when # based string is provided
     * @param  {string} numStr Numeric String
     * @return {string}        formatted Value
     */

  }, {
    key: "formatWithPattern",
    value: function formatWithPattern(numStr) {
      var format = this.props.format;
      var hashCount = 0;
      var formattedNumberAry = format.split('');

      for (var i = 0, ln = format.length; i < ln; i++) {
        if (format[i] === '#') {
          formattedNumberAry[i] = numStr[hashCount] || this.getMaskAtIndex(hashCount);
          hashCount += 1;
        }
      }

      return formattedNumberAry.join('');
    }
    /**
     * @param  {string} numStr Numeric string/floatString] It always have decimalSeparator as .
     * @return {string} formatted Value
     */

  }, {
    key: "formatAsNumber",
    value: function formatAsNumber(numStr) {
      var _this$props6 = this.props,
          decimalScale = _this$props6.decimalScale,
          fixedDecimalScale = _this$props6.fixedDecimalScale,
          prefix = _this$props6.prefix,
          suffix = _this$props6.suffix,
          allowNegative = _this$props6.allowNegative,
          thousandsGroupStyle = _this$props6.thousandsGroupStyle;

      var _this$getSeparators4 = this.getSeparators(),
          thousandSeparator = _this$getSeparators4.thousandSeparator,
          decimalSeparator = _this$getSeparators4.decimalSeparator;

      var hasDecimalSeparator = numStr.indexOf('.') !== -1 || decimalScale && fixedDecimalScale;

      var _splitDecimal = splitDecimal(numStr, allowNegative),
          beforeDecimal = _splitDecimal.beforeDecimal,
          afterDecimal = _splitDecimal.afterDecimal,
          addNegation = _splitDecimal.addNegation; // eslint-disable-line prefer-const
      //apply decimal precision if its defined


      if (decimalScale !== undefined) afterDecimal = limitToScale(afterDecimal, decimalScale, fixedDecimalScale);

      if (thousandSeparator) {
        beforeDecimal = applyThousandSeparator(beforeDecimal, thousandSeparator, thousandsGroupStyle);
      } //add prefix and suffix


      if (prefix) beforeDecimal = prefix + beforeDecimal;
      if (suffix) afterDecimal = afterDecimal + suffix; //restore negation sign

      if (addNegation) beforeDecimal = '-' + beforeDecimal;
      numStr = beforeDecimal + (hasDecimalSeparator && decimalSeparator || '') + afterDecimal;
      return numStr;
    }
  }, {
    key: "formatNumString",
    value: function formatNumString() {
      var numStr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var _this$props7 = this.props,
          format = _this$props7.format,
          allowEmptyFormatting = _this$props7.allowEmptyFormatting;
      var formattedValue = numStr;

      if (numStr === '' && !allowEmptyFormatting) {
        formattedValue = '';
      } else if (numStr === '-' && !format) {
        formattedValue = '-';
      } else if (typeof format === 'string') {
        formattedValue = this.formatWithPattern(formattedValue);
      } else if (typeof format === 'function') {
        formattedValue = format(formattedValue);
      } else {
        formattedValue = this.formatAsNumber(formattedValue);
      }

      return formattedValue;
    }
  }, {
    key: "formatValueProp",
    value: function formatValueProp(defaultValue) {
      var _this$props8 = this.props,
          format = _this$props8.format,
          decimalScale = _this$props8.decimalScale,
          fixedDecimalScale = _this$props8.fixedDecimalScale,
          allowEmptyFormatting = _this$props8.allowEmptyFormatting;
      var _this$props9 = this.props,
          _this$props9$value = _this$props9.value,
          value = _this$props9$value === void 0 ? defaultValue : _this$props9$value,
          isNumericString = _this$props9.isNumericString;
      var isNonNumericFalsy = !value && value !== 0;

      if (isNonNumericFalsy && allowEmptyFormatting) {
        value = '';
      } // if value is not defined return empty string


      if (isNonNumericFalsy && !allowEmptyFormatting) return '';

      if (typeof value === 'number') {
        value = value.toString();
        isNumericString = true;
      } //change infinity value to empty string


      if (value === 'Infinity' && isNumericString) {
        value = '';
      } //round the number based on decimalScale
      //format only if non formatted value is provided


      if (isNumericString && !format && typeof decimalScale === 'number') {
        value = roundToPrecision(value, decimalScale, fixedDecimalScale);
      }

      var formattedValue = isNumericString ? this.formatNumString(value) : this.formatInput(value);
      return formattedValue;
    }
  }, {
    key: "formatNegation",
    value: function formatNegation() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var allowNegative = this.props.allowNegative;
      var negationRegex = new RegExp('(-)');
      var doubleNegationRegex = new RegExp('(-)(.)*(-)'); // Check number has '-' value

      var hasNegation = negationRegex.test(value); // Check number has 2 or more '-' values

      var removeNegation = doubleNegationRegex.test(value); //remove negation

      value = value.replace(/-/g, '');

      if (hasNegation && !removeNegation && allowNegative) {
        value = '-' + value;
      }

      return value;
    }
  }, {
    key: "formatInput",
    value: function formatInput() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var format = this.props.format; //format negation only if we are formatting as number

      if (!format) {
        value = this.removePrefixAndSuffix(value);
        value = this.formatNegation(value);
      } //remove formatting from number


      value = this.removeFormatting(value);
      return this.formatNumString(value);
    }
    /*** format specific methods end ***/

  }, {
    key: "isCharacterAFormat",
    value: function isCharacterAFormat(caretPos, value) {
      var _this$props10 = this.props,
          format = _this$props10.format,
          prefix = _this$props10.prefix,
          suffix = _this$props10.suffix,
          decimalScale = _this$props10.decimalScale,
          fixedDecimalScale = _this$props10.fixedDecimalScale;

      var _this$getSeparators5 = this.getSeparators(),
          decimalSeparator = _this$getSeparators5.decimalSeparator; //check within format pattern


      if (typeof format === 'string' && format[caretPos] !== '#') return true; //check in number format

      if (!format && (caretPos < prefix.length || caretPos >= value.length - suffix.length || decimalScale && fixedDecimalScale && value[caretPos] === decimalSeparator)) {
        return true;
      }

      return false;
    }
  }, {
    key: "checkIfFormatGotDeleted",
    value: function checkIfFormatGotDeleted(start, end, value) {
      for (var i = start; i < end; i++) {
        if (this.isCharacterAFormat(i, value)) return true;
      }

      return false;
    }
    /**
     * This will check if any formatting got removed by the delete or backspace and reset the value
     * It will also work as fallback if android chome keyDown handler does not work
     **/

  }, {
    key: "correctInputValue",
    value: function correctInputValue(caretPos, lastValue, value) {
      var _this$props11 = this.props,
          format = _this$props11.format,
          allowNegative = _this$props11.allowNegative,
          prefix = _this$props11.prefix,
          suffix = _this$props11.suffix,
          decimalScale = _this$props11.decimalScale;

      var _this$getSeparators6 = this.getSeparators(),
          allowedDecimalSeparators = _this$getSeparators6.allowedDecimalSeparators,
          decimalSeparator = _this$getSeparators6.decimalSeparator;

      var lastNumStr = this.state.numAsString || '';
      var _this$selectionBefore = this.selectionBeforeInput,
          selectionStart = _this$selectionBefore.selectionStart,
          selectionEnd = _this$selectionBefore.selectionEnd;

      var _findChangedIndex = findChangedIndex(lastValue, value),
          start = _findChangedIndex.start,
          end = _findChangedIndex.end;
      /** Check for any allowed decimal separator is added in the numeric format and replace it with decimal separator */


      if (!format && start === end && allowedDecimalSeparators.indexOf(value[selectionStart]) !== -1) {
        var separator = decimalScale === 0 ? '' : decimalSeparator;
        return value.substr(0, selectionStart) + separator + value.substr(selectionStart + 1, value.length);
      }
      /* don't do anyhting if something got added,
       or if value is empty string (when whole input is cleared)
       or whole input is replace with a number
      */


      var leftBound = !!format ? 0 : prefix.length;
      var rightBound = lastValue.length - (!!format ? 0 : suffix.length);

      if (value.length > lastValue.length || !value.length || start === end || selectionStart === 0 && selectionEnd === lastValue.length || selectionStart === leftBound && selectionEnd === rightBound) {
        return value;
      } //if format got deleted reset the value to last value


      if (this.checkIfFormatGotDeleted(start, end, lastValue)) {
        value = lastValue;
      } //for numbers check if beforeDecimal got deleted and there is nothing after decimal,
      //clear all numbers in such case while keeping the - sign


      if (!format) {
        var numericString = this.removeFormatting(value);

        var _splitDecimal2 = splitDecimal(numericString, allowNegative),
            beforeDecimal = _splitDecimal2.beforeDecimal,
            afterDecimal = _splitDecimal2.afterDecimal,
            addNegation = _splitDecimal2.addNegation; // eslint-disable-line prefer-const
        //clear only if something got deleted


        var isBeforeDecimalPoint = caretPos < value.indexOf(decimalSeparator) + 1;

        if (numericString.length < lastNumStr.length && isBeforeDecimalPoint && beforeDecimal === '' && !parseFloat(afterDecimal)) {
          return addNegation ? '-' : '';
        }
      }

      return value;
    }
    /** Update value and caret position */

  }, {
    key: "updateValue",
    value: function updateValue(params) {
      var formattedValue = params.formattedValue,
          input = params.input,
          _params$setCaretPosit = params.setCaretPosition,
          setCaretPosition = _params$setCaretPosit === void 0 ? true : _params$setCaretPosit;
      var numAsString = params.numAsString,
          caretPos = params.caretPos;
      var onValueChange = this.props.onValueChange;
      var lastValue = this.state.value;

      if (input) {
        //set caret position, and value imperatively when element is provided
        if (setCaretPosition) {
          //calculate caret position if not defined
          if (!caretPos) {
            var inputValue = params.inputValue || input.value;
            var currentCaretPosition = getCurrentCaretPosition(input);
            /**
             * set the value imperatively, this is required for IE fix
             * This is also required as if new caret position is beyond the previous value.
             * Caret position will not be set correctly
             */

            input.value = formattedValue; //get the caret position

            caretPos = this.getCaretPosition(inputValue, formattedValue, currentCaretPosition);
          } //set caret position


          this.setPatchedCaretPosition(input, caretPos, formattedValue);
        } else {
          /**
           * if we are not setting caret position set the value imperatively.
           * This is required on onBlur method
           */
          input.value = formattedValue;
        }
      } //calculate numeric string if not passed


      if (numAsString === undefined) {
        numAsString = this.removeFormatting(formattedValue);
      } //update state if value is changed


      if (formattedValue !== lastValue) {
        this.setState({
          value: formattedValue,
          numAsString: numAsString
        }); // trigger onValueChange synchronously, so parent is updated along with the number format. Fix for #277, #287

        onValueChange(this.getValueObject(formattedValue, numAsString));
      }
    }
  }, {
    key: "onChange",
    value: function onChange(e) {
      var el = e.target;
      var inputValue = el.value;
      var state = this.state,
          props = this.props;
      var isAllowed = props.isAllowed;
      var lastValue = state.value || '';
      var currentCaretPosition = getCurrentCaretPosition(el);
      inputValue = this.correctInputValue(currentCaretPosition, lastValue, inputValue);
      var formattedValue = this.formatInput(inputValue) || '';
      var numAsString = this.removeFormatting(formattedValue);
      var valueObj = this.getValueObject(formattedValue, numAsString);

      if (!isAllowed(valueObj)) {
        formattedValue = lastValue;
      }

      this.updateValue({
        formattedValue: formattedValue,
        numAsString: numAsString,
        inputValue: inputValue,
        input: el
      });
      props.onChange(e);
    }
  }, {
    key: "onBlur",
    value: function onBlur(e) {
      var props = this.props,
          state = this.state;
      var format = props.format,
          onBlur = props.onBlur,
          allowLeadingZeros = props.allowLeadingZeros;
      var numAsString = state.numAsString;
      var lastValue = state.value;
      this.focusedElm = null;

      if (this.focusTimeout) {
        clearTimeout(this.focusTimeout);
      }

      if (!format) {
        // if the numAsString is not a valid number reset it to empty
        if (isNaN(parseFloat(numAsString))) {
          numAsString = '';
        }

        if (!allowLeadingZeros) {
          numAsString = fixLeadingZero(numAsString);
        }

        var formattedValue = this.formatNumString(numAsString); //change the state

        if (formattedValue !== lastValue) {
          // the event needs to be persisted because its properties can be accessed in an asynchronous way
          this.updateValue({
            formattedValue: formattedValue,
            numAsString: numAsString,
            input: e.target,
            setCaretPosition: false
          });
          onBlur(e);
          return;
        }
      }

      onBlur(e);
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(e) {
      var el = e.target;
      var key = e.key;
      var selectionStart = el.selectionStart,
          selectionEnd = el.selectionEnd,
          _el$value = el.value,
          value = _el$value === void 0 ? '' : _el$value;
      var expectedCaretPosition;
      var _this$props12 = this.props,
          decimalScale = _this$props12.decimalScale,
          fixedDecimalScale = _this$props12.fixedDecimalScale,
          prefix = _this$props12.prefix,
          suffix = _this$props12.suffix,
          format = _this$props12.format,
          onKeyDown = _this$props12.onKeyDown;
      var ignoreDecimalSeparator = decimalScale !== undefined && fixedDecimalScale;
      var numRegex = this.getNumberRegex(false, ignoreDecimalSeparator);
      var negativeRegex = new RegExp('-');
      var isPatternFormat = typeof format === 'string';
      this.selectionBeforeInput = {
        selectionStart: selectionStart,
        selectionEnd: selectionEnd
      }; //Handle backspace and delete against non numerical/decimal characters or arrow keys

      if (key === 'ArrowLeft' || key === 'Backspace') {
        expectedCaretPosition = selectionStart - 1;
      } else if (key === 'ArrowRight') {
        expectedCaretPosition = selectionStart + 1;
      } else if (key === 'Delete') {
        expectedCaretPosition = selectionStart;
      } //if expectedCaretPosition is not set it means we don't want to Handle keyDown
      //also if multiple characters are selected don't handle


      if (expectedCaretPosition === undefined || selectionStart !== selectionEnd) {
        onKeyDown(e);
        return;
      }

      var newCaretPosition = expectedCaretPosition;
      var leftBound = isPatternFormat ? format.indexOf('#') : prefix.length;
      var rightBound = isPatternFormat ? format.lastIndexOf('#') + 1 : value.length - suffix.length;

      if (key === 'ArrowLeft' || key === 'ArrowRight') {
        var direction = key === 'ArrowLeft' ? 'left' : 'right';
        newCaretPosition = this.correctCaretPosition(value, expectedCaretPosition, direction);
      } else if (key === 'Delete' && !numRegex.test(value[expectedCaretPosition]) && !negativeRegex.test(value[expectedCaretPosition])) {
        while (!numRegex.test(value[newCaretPosition]) && newCaretPosition < rightBound) {
          newCaretPosition++;
        }
      } else if (key === 'Backspace' && !numRegex.test(value[expectedCaretPosition])) {
        /* NOTE: This is special case when backspace is pressed on a
        negative value while the cursor position is after prefix. We can't handle it on onChange because
        we will not have any information of keyPress
        */
        if (selectionStart <= leftBound + 1 && value[0] === '-' && typeof format === 'undefined') {
          var newValue = value.substring(1);
          this.updateValue({
            formattedValue: newValue,
            caretPos: newCaretPosition,
            input: el
          });
        } else if (!negativeRegex.test(value[expectedCaretPosition])) {
          while (!numRegex.test(value[newCaretPosition - 1]) && newCaretPosition > leftBound) {
            newCaretPosition--;
          }

          newCaretPosition = this.correctCaretPosition(value, newCaretPosition, 'left');
        }
      }

      if (newCaretPosition !== expectedCaretPosition || expectedCaretPosition < leftBound || expectedCaretPosition > rightBound) {
        e.preventDefault();
        this.setPatchedCaretPosition(el, newCaretPosition, value);
      }
      /* NOTE: this is just required for unit test as we need to get the newCaretPosition,
              Remove this when you find different solution */


      if (e.isUnitTestRun) {
        this.setPatchedCaretPosition(el, newCaretPosition, value);
      }

      onKeyDown(e);
    }
    /** required to handle the caret position when click anywhere within the input **/

  }, {
    key: "onMouseUp",
    value: function onMouseUp(e) {
      var el = e.target;
      /**
       * NOTE: we have to give default value for value as in case when custom input is provided
       * value can come as undefined when nothing is provided on value prop.
      */

      var selectionStart = el.selectionStart,
          selectionEnd = el.selectionEnd,
          _el$value2 = el.value,
          value = _el$value2 === void 0 ? '' : _el$value2;

      if (selectionStart === selectionEnd) {
        var caretPosition = this.correctCaretPosition(value, selectionStart);

        if (caretPosition !== selectionStart) {
          this.setPatchedCaretPosition(el, caretPosition, value);
        }
      }

      this.props.onMouseUp(e);
    }
  }, {
    key: "onFocus",
    value: function onFocus(e) {
      var _this2 = this;

      // Workaround Chrome and Safari bug https://bugs.chromium.org/p/chromium/issues/detail?id=779328
      // (onFocus event target selectionStart is always 0 before setTimeout)
      e.persist();
      this.focusedElm = e.target;
      this.focusTimeout = setTimeout(function () {
        var el = e.target;
        var selectionStart = el.selectionStart,
            selectionEnd = el.selectionEnd,
            _el$value3 = el.value,
            value = _el$value3 === void 0 ? '' : _el$value3;

        var caretPosition = _this2.correctCaretPosition(value, selectionStart); //setPatchedCaretPosition only when everything is not selected on focus (while tabbing into the field)


        if (caretPosition !== selectionStart && !(selectionStart === 0 && selectionEnd === value.length)) {
          _this2.setPatchedCaretPosition(el, caretPosition, value);
        }

        _this2.props.onFocus(e);
      }, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props13 = this.props,
          type = _this$props13.type,
          displayType = _this$props13.displayType,
          customInput = _this$props13.customInput,
          renderText = _this$props13.renderText,
          getInputRef = _this$props13.getInputRef;
      var value = this.state.value;
      var otherProps = omit(this.props, propTypes$1);

      var inputProps = _extends({
        inputMode: 'numeric'
      }, otherProps, {
        type: type,
        value: value,
        onChange: this.onChange,
        onKeyDown: this.onKeyDown,
        onMouseUp: this.onMouseUp,
        onFocus: this.onFocus,
        onBlur: this.onBlur
      });

      if (displayType === 'text') {
        return renderText ? renderText(value) || null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", _extends({}, otherProps, {
          ref: getInputRef
        }), value);
      } else if (customInput) {
        var CustomInput = customInput;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CustomInput, _extends({}, inputProps, {
          ref: getInputRef
        }));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({}, inputProps, {
        ref: getInputRef
      }));
    }
  }]);

  return NumberFormat;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

NumberFormat.propTypes = propTypes$1;
NumberFormat.defaultProps = defaultProps;

/* harmony default export */ __webpack_exports__["default"] = (NumberFormat);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtbnVtYmVyLWZvcm1hdC9kaXN0L3JlYWN0LW51bWJlci1mb3JtYXQuZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFMEI7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixZQUFZLEVBQUU7QUFDaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLEVBQUU7O0FBRTNCO0FBQ0E7QUFDQSx5QkFBeUIsRUFBRTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixnQkFBZ0I7QUFDakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsMENBQTBDOztBQUUxQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRTs7QUFFL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLCtDQUErQzs7QUFFL0M7QUFDQSxrREFBa0Q7O0FBRWxEO0FBQ0E7QUFDQTs7QUFFQSxnRkFBZ0Y7O0FBRWhGOztBQUVBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUNBQWlDOztBQUVqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4S0FBOEssS0FBSztBQUNuTCxPQUFPOzs7QUFHUDtBQUNBOztBQUVBO0FBQ0Esa0dBQWtHO0FBQ2xHO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7O0FBRXZDLGlDQUFpQzs7QUFFakMsa0RBQWtEOztBQUVsRDtBQUNBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0E7O0FBRUEscUZBQXFGOztBQUVyRiw2RkFBNkY7O0FBRTdGO0FBQ0EscURBQXFEOztBQUVyRDtBQUNBO0FBQ0E7QUFDQSxzRUFBc0U7O0FBRXRFO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixjQUFjO0FBQy9CO0FBQ0Esd0RBQXdEO0FBQ3hEOztBQUVBLGtHQUFrRztBQUNsRzs7QUFFQSxrS0FBa0s7O0FBRWxLO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDOztBQUV2QztBQUNBLHdDQUF3Qzs7QUFFeEMsMkRBQTJEOztBQUUzRCxtR0FBbUc7O0FBRW5HO0FBQ0EsMklBQTJJOztBQUUzSTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBLDhDQUE4QyxTQUFTO0FBQ3ZELHdDQUF3QztBQUN4Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixPQUFPO0FBQ3ZCOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlDQUF5QyxRQUFRO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCLE9BQU87QUFDdkI7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQSx1REFBdUQ7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNBLE9BQU87QUFDUDs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEOztBQUV6RCxrREFBa0Q7O0FBRWxELDJEQUEyRDs7QUFFM0Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1FQUFtRTs7O0FBR25FLDhFQUE4RTs7QUFFOUU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLHlCQUF5QixTQUFTO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNBLE9BQU87QUFDUDs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlDQUF5Qzs7QUFFekM7QUFDQSxXQUFXOzs7QUFHWDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLEVBQUU7O0FBRVg7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLCtEQUErRDs7QUFFL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0VBQStFOzs7QUFHL0U7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0Esd0RBQXdELDRDQUFLLGtDQUFrQztBQUMvRjtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxlQUFlLDRDQUFLLHVDQUF1QztBQUMzRDtBQUNBLFNBQVM7QUFDVDs7QUFFQSxhQUFhLDRDQUFLLG1DQUFtQztBQUNyRDtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDLENBQUMsNENBQUs7O0FBRVA7QUFDQTs7QUFFZSwyRUFBWSxFQUFDIiwiZmlsZSI6ImpzLzQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIHJlYWN0LW51bWJlci1mb3JtYXQgLSA0LjQuMVxuICogQXV0aG9yIDogU3VkaGFuc2h1IFlhZGF2XG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYsIDIwMjAgdG8gU3VkaGFuc2h1IFlhZGF2LCByZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vcy15YWRhdi9yZWFjdC1udW1iZXItZm9ybWF0XG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZuLCBtb2R1bGUpIHtcblx0cmV0dXJuIG1vZHVsZSA9IHsgZXhwb3J0czoge30gfSwgZm4obW9kdWxlLCBtb2R1bGUuZXhwb3J0cyksIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldF8xID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fVxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvbldpdGhSZXNldCgpIHt9XG5lbXB0eUZ1bmN0aW9uV2l0aFJlc2V0LnJlc2V0V2FybmluZ0NhY2hlID0gZW1wdHlGdW5jdGlvbjtcblxudmFyIGZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcyA9IGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBzaGltKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgaWYgKHNlY3JldCA9PT0gUmVhY3RQcm9wVHlwZXNTZWNyZXRfMSkge1xuICAgICAgLy8gSXQgaXMgc3RpbGwgc2FmZSB3aGVuIGNhbGxlZCBmcm9tIFJlYWN0LlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKFxuICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgJ1VzZSBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKSB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgKTtcbiAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB0aHJvdyBlcnI7XG4gIH0gIHNoaW0uaXNSZXF1aXJlZCA9IHNoaW07XG4gIGZ1bmN0aW9uIGdldFNoaW0oKSB7XG4gICAgcmV0dXJuIHNoaW07XG4gIH0gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogc2hpbSxcbiAgICBib29sOiBzaGltLFxuICAgIGZ1bmM6IHNoaW0sXG4gICAgbnVtYmVyOiBzaGltLFxuICAgIG9iamVjdDogc2hpbSxcbiAgICBzdHJpbmc6IHNoaW0sXG4gICAgc3ltYm9sOiBzaGltLFxuXG4gICAgYW55OiBzaGltLFxuICAgIGFycmF5T2Y6IGdldFNoaW0sXG4gICAgZWxlbWVudDogc2hpbSxcbiAgICBlbGVtZW50VHlwZTogc2hpbSxcbiAgICBpbnN0YW5jZU9mOiBnZXRTaGltLFxuICAgIG5vZGU6IHNoaW0sXG4gICAgb2JqZWN0T2Y6IGdldFNoaW0sXG4gICAgb25lT2Y6IGdldFNoaW0sXG4gICAgb25lT2ZUeXBlOiBnZXRTaGltLFxuICAgIHNoYXBlOiBnZXRTaGltLFxuICAgIGV4YWN0OiBnZXRTaGltLFxuXG4gICAgY2hlY2tQcm9wVHlwZXM6IGVtcHR5RnVuY3Rpb25XaXRoUmVzZXQsXG4gICAgcmVzZXRXYXJuaW5nQ2FjaGU6IGVtcHR5RnVuY3Rpb25cbiAgfTtcblxuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuXG52YXIgcHJvcFR5cGVzID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSkge1xuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG57XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5V2l0aFRocm93aW5nU2hpbXMoKTtcbn1cbn0pO1xuXG4vLyBiYXNpYyBub29wIGZ1bmN0aW9uXG5mdW5jdGlvbiBub29wKCkge31cbmZ1bmN0aW9uIHJldHVyblRydWUoKSB7XG4gIHJldHVybiB0cnVlO1xufVxuZnVuY3Rpb24gY2hhcklzTnVtYmVyKF9jaGFyKSB7XG4gIHJldHVybiAhIShfY2hhciB8fCAnJykubWF0Y2goL1xcZC8pO1xufVxuZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1stW1xcXS97fSgpKis/LlxcXFxeJHxdL2csIFwiXFxcXCQmXCIpO1xufVxuZnVuY3Rpb24gZ2V0VGhvdXNhbmRzR3JvdXBSZWdleCh0aG91c2FuZHNHcm91cFN0eWxlKSB7XG4gIHN3aXRjaCAodGhvdXNhbmRzR3JvdXBTdHlsZSkge1xuICAgIGNhc2UgJ2xha2gnOlxuICAgICAgcmV0dXJuIC8oXFxkKz8pKD89KFxcZFxcZCkrKFxcZCkoPyFcXGQpKShcXC5cXGQrKT8vZztcblxuICAgIGNhc2UgJ3dhbic6XG4gICAgICByZXR1cm4gLyhcXGQpKD89KFxcZHs0fSkrKD8hXFxkKSkvZztcblxuICAgIGNhc2UgJ3Rob3VzYW5kJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIC8oXFxkKSg/PShcXGR7M30pKyg/IVxcZCkpL2c7XG4gIH1cbn1cbmZ1bmN0aW9uIGFwcGx5VGhvdXNhbmRTZXBhcmF0b3Ioc3RyLCB0aG91c2FuZFNlcGFyYXRvciwgdGhvdXNhbmRzR3JvdXBTdHlsZSkge1xuICB2YXIgdGhvdXNhbmRzR3JvdXBSZWdleCA9IGdldFRob3VzYW5kc0dyb3VwUmVnZXgodGhvdXNhbmRzR3JvdXBTdHlsZSk7XG4gIHZhciBpbmRleCA9IHN0ci5zZWFyY2goL1sxLTldLyk7XG4gIGluZGV4ID0gaW5kZXggPT09IC0xID8gc3RyLmxlbmd0aCA6IGluZGV4O1xuICByZXR1cm4gc3RyLnN1YnN0cmluZygwLCBpbmRleCkgKyBzdHIuc3Vic3RyaW5nKGluZGV4LCBzdHIubGVuZ3RoKS5yZXBsYWNlKHRob3VzYW5kc0dyb3VwUmVnZXgsICckMScgKyB0aG91c2FuZFNlcGFyYXRvcik7XG59IC8vc3BpbHQgYSBmbG9hdCBudW1iZXIgaW50byBkaWZmZXJlbnQgcGFydHMgYmVmb3JlRGVjaW1hbCwgYWZ0ZXJEZWNpbWFsLCBhbmQgbmVnYXRpb25cblxuZnVuY3Rpb24gc3BsaXREZWNpbWFsKG51bVN0cikge1xuICB2YXIgYWxsb3dOZWdhdGl2ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdHJ1ZTtcbiAgdmFyIGhhc05hZ2F0aW9uID0gbnVtU3RyWzBdID09PSAnLSc7XG4gIHZhciBhZGROZWdhdGlvbiA9IGhhc05hZ2F0aW9uICYmIGFsbG93TmVnYXRpdmU7XG4gIG51bVN0ciA9IG51bVN0ci5yZXBsYWNlKCctJywgJycpO1xuICB2YXIgcGFydHMgPSBudW1TdHIuc3BsaXQoJy4nKTtcbiAgdmFyIGJlZm9yZURlY2ltYWwgPSBwYXJ0c1swXTtcbiAgdmFyIGFmdGVyRGVjaW1hbCA9IHBhcnRzWzFdIHx8ICcnO1xuICByZXR1cm4ge1xuICAgIGJlZm9yZURlY2ltYWw6IGJlZm9yZURlY2ltYWwsXG4gICAgYWZ0ZXJEZWNpbWFsOiBhZnRlckRlY2ltYWwsXG4gICAgaGFzTmFnYXRpb246IGhhc05hZ2F0aW9uLFxuICAgIGFkZE5lZ2F0aW9uOiBhZGROZWdhdGlvblxuICB9O1xufVxuZnVuY3Rpb24gZml4TGVhZGluZ1plcm8obnVtU3RyKSB7XG4gIGlmICghbnVtU3RyKSByZXR1cm4gbnVtU3RyO1xuICB2YXIgaXNOZWdhdGl2ZSA9IG51bVN0clswXSA9PT0gJy0nO1xuICBpZiAoaXNOZWdhdGl2ZSkgbnVtU3RyID0gbnVtU3RyLnN1YnN0cmluZygxLCBudW1TdHIubGVuZ3RoKTtcbiAgdmFyIHBhcnRzID0gbnVtU3RyLnNwbGl0KCcuJyk7XG4gIHZhciBiZWZvcmVEZWNpbWFsID0gcGFydHNbMF0ucmVwbGFjZSgvXjArLywgJycpIHx8ICcwJztcbiAgdmFyIGFmdGVyRGVjaW1hbCA9IHBhcnRzWzFdIHx8ICcnO1xuICByZXR1cm4gXCJcIi5jb25jYXQoaXNOZWdhdGl2ZSA/ICctJyA6ICcnKS5jb25jYXQoYmVmb3JlRGVjaW1hbCkuY29uY2F0KGFmdGVyRGVjaW1hbCA/IFwiLlwiLmNvbmNhdChhZnRlckRlY2ltYWwpIDogJycpO1xufVxuLyoqXG4gKiBsaW1pdCBkZWNpbWFsIG51bWJlcnMgdG8gZ2l2ZW4gc2NhbGVcbiAqIE5vdCB1c2VkIC5maXhlZFRvIGJlY2F1c2UgdGhhdCB3aWxsIGJyZWFrIHdpdGggYmlnIG51bWJlcnNcbiAqL1xuXG5mdW5jdGlvbiBsaW1pdFRvU2NhbGUobnVtU3RyLCBzY2FsZSwgZml4ZWREZWNpbWFsU2NhbGUpIHtcbiAgdmFyIHN0ciA9ICcnO1xuICB2YXIgZmlsbGVyID0gZml4ZWREZWNpbWFsU2NhbGUgPyAnMCcgOiAnJztcblxuICBmb3IgKHZhciBpID0gMDsgaSA8PSBzY2FsZSAtIDE7IGkrKykge1xuICAgIHN0ciArPSBudW1TdHJbaV0gfHwgZmlsbGVyO1xuICB9XG5cbiAgcmV0dXJuIHN0cjtcbn1cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgcmVxdWlyZWQgdG8gcm91bmQgcHJvcCB2YWx1ZSB0byBnaXZlbiBzY2FsZS5cbiAqIE5vdCB1c2VkIC5yb3VuZCBvciAuZml4ZWRUbyBiZWNhdXNlIHRoYXQgd2lsbCBicmVhayB3aXRoIGJpZyBudW1iZXJzXG4gKi9cblxuZnVuY3Rpb24gcm91bmRUb1ByZWNpc2lvbihudW1TdHIsIHNjYWxlLCBmaXhlZERlY2ltYWxTY2FsZSkge1xuICAvL2lmIG51bWJlciBpcyBlbXB0eSBkb24ndCBkbyBhbnl0aGluZyByZXR1cm4gZW1wdHkgc3RyaW5nXG4gIGlmIChbJycsICctJ10uaW5kZXhPZihudW1TdHIpICE9PSAtMSkgcmV0dXJuIG51bVN0cjtcbiAgdmFyIHNob3VkSGF2ZURlY2ltYWxTZXBhcmF0b3IgPSBudW1TdHIuaW5kZXhPZignLicpICE9PSAtMSAmJiBzY2FsZTtcblxuICB2YXIgX3NwbGl0RGVjaW1hbCA9IHNwbGl0RGVjaW1hbChudW1TdHIpLFxuICAgICAgYmVmb3JlRGVjaW1hbCA9IF9zcGxpdERlY2ltYWwuYmVmb3JlRGVjaW1hbCxcbiAgICAgIGFmdGVyRGVjaW1hbCA9IF9zcGxpdERlY2ltYWwuYWZ0ZXJEZWNpbWFsLFxuICAgICAgaGFzTmFnYXRpb24gPSBfc3BsaXREZWNpbWFsLmhhc05hZ2F0aW9uO1xuXG4gIHZhciByb3VuZGVkRGVjaW1hbFBhcnRzID0gcGFyc2VGbG9hdChcIjAuXCIuY29uY2F0KGFmdGVyRGVjaW1hbCB8fCAnMCcpKS50b0ZpeGVkKHNjYWxlKS5zcGxpdCgnLicpO1xuICB2YXIgaW50UGFydCA9IGJlZm9yZURlY2ltYWwuc3BsaXQoJycpLnJldmVyc2UoKS5yZWR1Y2UoZnVuY3Rpb24gKHJvdW5kZWRTdHIsIGN1cnJlbnQsIGlkeCkge1xuICAgIGlmIChyb3VuZGVkU3RyLmxlbmd0aCA+IGlkeCkge1xuICAgICAgcmV0dXJuIChOdW1iZXIocm91bmRlZFN0clswXSkgKyBOdW1iZXIoY3VycmVudCkpLnRvU3RyaW5nKCkgKyByb3VuZGVkU3RyLnN1YnN0cmluZygxLCByb3VuZGVkU3RyLmxlbmd0aCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGN1cnJlbnQgKyByb3VuZGVkU3RyO1xuICB9LCByb3VuZGVkRGVjaW1hbFBhcnRzWzBdKTtcbiAgdmFyIGRlY2ltYWxQYXJ0ID0gbGltaXRUb1NjYWxlKHJvdW5kZWREZWNpbWFsUGFydHNbMV0gfHwgJycsIE1hdGgubWluKHNjYWxlLCBhZnRlckRlY2ltYWwubGVuZ3RoKSwgZml4ZWREZWNpbWFsU2NhbGUpO1xuICB2YXIgbmVnYXRpb24gPSBoYXNOYWdhdGlvbiA/ICctJyA6ICcnO1xuICB2YXIgZGVjaW1hbFNlcGFyYXRvciA9IHNob3VkSGF2ZURlY2ltYWxTZXBhcmF0b3IgPyAnLicgOiAnJztcbiAgcmV0dXJuIFwiXCIuY29uY2F0KG5lZ2F0aW9uKS5jb25jYXQoaW50UGFydCkuY29uY2F0KGRlY2ltYWxTZXBhcmF0b3IpLmNvbmNhdChkZWNpbWFsUGFydCk7XG59XG5mdW5jdGlvbiBvbWl0KG9iaiwga2V5TWFwcykge1xuICB2YXIgZmlsdGVyZWRPYmogPSB7fTtcbiAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoIWtleU1hcHNba2V5XSkgZmlsdGVyZWRPYmpba2V5XSA9IG9ialtrZXldO1xuICB9KTtcbiAgcmV0dXJuIGZpbHRlcmVkT2JqO1xufVxuLyoqIHNldCB0aGUgY2FyZXQgcG9zaXRvbiBpbiBhbiBpbnB1dCBmaWVsZCAqKi9cblxuZnVuY3Rpb24gc2V0Q2FyZXRQb3NpdGlvbihlbCwgY2FyZXRQb3MpIHtcbiAgZWwudmFsdWUgPSBlbC52YWx1ZTsgLy8gXiB0aGlzIGlzIHVzZWQgdG8gbm90IG9ubHkgZ2V0IFwiZm9jdXNcIiwgYnV0XG4gIC8vIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCBoYXZlIGl0IGV2ZXJ5dGhpbmcgLXNlbGVjdGVkLVxuICAvLyAoaXQgY2F1c2VzIGFuIGlzc3VlIGluIGNocm9tZSwgYW5kIGhhdmluZyBpdCBkb2Vzbid0IGh1cnQgYW55IG90aGVyIGJyb3dzZXIpXG5cbiAgaWYgKGVsICE9PSBudWxsKSB7XG4gICAgaWYgKGVsLmNyZWF0ZVRleHRSYW5nZSkge1xuICAgICAgdmFyIHJhbmdlID0gZWwuY3JlYXRlVGV4dFJhbmdlKCk7XG4gICAgICByYW5nZS5tb3ZlKCdjaGFyYWN0ZXInLCBjYXJldFBvcyk7XG4gICAgICByYW5nZS5zZWxlY3QoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gLy8gKGVsLnNlbGVjdGlvblN0YXJ0ID09PSAwIGFkZGVkIGZvciBGaXJlZm94IGJ1ZylcblxuXG4gICAgaWYgKGVsLnNlbGVjdGlvblN0YXJ0IHx8IGVsLnNlbGVjdGlvblN0YXJ0ID09PSAwKSB7XG4gICAgICBlbC5mb2N1cygpO1xuICAgICAgZWwuc2V0U2VsZWN0aW9uUmFuZ2UoY2FyZXRQb3MsIGNhcmV0UG9zKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gLy8gZmFpbCBjaXR5LCBmb3J0dW5hdGVseSB0aGlzIG5ldmVyIGhhcHBlbnMgKGFzIGZhciBhcyBJJ3ZlIHRlc3RlZCkgOilcblxuXG4gICAgZWwuZm9jdXMoKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbi8qKlxuICBHaXZlbiBwcmV2aW91cyB2YWx1ZSBhbmQgbmV3VmFsdWUgaXQgcmV0dXJucyB0aGUgaW5kZXhcbiAgc3RhcnQgLSBlbmQgdG8gd2hpY2ggdmFsdWVzIGhhdmUgY2hhbmdlZC5cbiAgVGhpcyBmdW5jdGlvbiBtYWtlcyBhc3N1bXB0aW9uIGFib3V0IG9ubHkgY29uc2VjdXRpdmVcbiAgY2hhcmFjdGVycyBhcmUgY2hhbmdlZCB3aGljaCBpcyBjb3JyZWN0IGFzc3VtcHRpb24gZm9yIGNhcmV0IGlucHV0LlxuKi9cblxuZnVuY3Rpb24gZmluZENoYW5nZWRJbmRleChwcmV2VmFsdWUsIG5ld1ZhbHVlKSB7XG4gIHZhciBpID0gMCxcbiAgICAgIGogPSAwO1xuICB2YXIgcHJldkxlbmd0aCA9IHByZXZWYWx1ZS5sZW5ndGg7XG4gIHZhciBuZXdMZW5ndGggPSBuZXdWYWx1ZS5sZW5ndGg7XG5cbiAgd2hpbGUgKHByZXZWYWx1ZVtpXSA9PT0gbmV3VmFsdWVbaV0gJiYgaSA8IHByZXZMZW5ndGgpIHtcbiAgICBpKys7XG4gIH0gLy9jaGVjayB3aGF0IGhhcyBiZWVuIGNoYW5nZWQgZnJvbSBsYXN0XG5cblxuICB3aGlsZSAocHJldlZhbHVlW3ByZXZMZW5ndGggLSAxIC0gal0gPT09IG5ld1ZhbHVlW25ld0xlbmd0aCAtIDEgLSBqXSAmJiBuZXdMZW5ndGggLSBqID4gaSAmJiBwcmV2TGVuZ3RoIC0gaiA+IGkpIHtcbiAgICBqKys7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHN0YXJ0OiBpLFxuICAgIGVuZDogcHJldkxlbmd0aCAtIGpcbiAgfTtcbn1cbi8qXG4gIFJldHVybnMgYSBudW1iZXIgd2hvc2UgdmFsdWUgaXMgbGltaXRlZCB0byB0aGUgZ2l2ZW4gcmFuZ2VcbiovXG5cbmZ1bmN0aW9uIGNsYW1wKG51bSwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG51bSwgbWluKSwgbWF4KTtcbn1cbmZ1bmN0aW9uIGdldEN1cnJlbnRDYXJldFBvc2l0aW9uKGVsKSB7XG4gIC8qTWF4IG9mIHNlbGVjdGlvblN0YXJ0IGFuZCBzZWxlY3Rpb25FbmQgaXMgdGFrZW4gZm9yIHRoZSBwYXRjaCBvZiBwaXhlbCBhbmQgb3RoZXIgbW9iaWxlIGRldmljZSBjYXJldCBidWcqL1xuICByZXR1cm4gTWF0aC5tYXgoZWwuc2VsZWN0aW9uU3RhcnQsIGVsLnNlbGVjdGlvbkVuZCk7XG59XG5cbnZhciBwcm9wVHlwZXMkMSA9IHtcbiAgdGhvdXNhbmRTZXBhcmF0b3I6IHByb3BUeXBlcy5vbmVPZlR5cGUoW3Byb3BUeXBlcy5zdHJpbmcsIHByb3BUeXBlcy5vbmVPZihbdHJ1ZV0pXSksXG4gIGRlY2ltYWxTZXBhcmF0b3I6IHByb3BUeXBlcy5zdHJpbmcsXG4gIGFsbG93ZWREZWNpbWFsU2VwYXJhdG9yczogcHJvcFR5cGVzLmFycmF5T2YocHJvcFR5cGVzLnN0cmluZyksXG4gIHRob3VzYW5kc0dyb3VwU3R5bGU6IHByb3BUeXBlcy5vbmVPZihbJ3Rob3VzYW5kJywgJ2xha2gnLCAnd2FuJ10pLFxuICBkZWNpbWFsU2NhbGU6IHByb3BUeXBlcy5udW1iZXIsXG4gIGZpeGVkRGVjaW1hbFNjYWxlOiBwcm9wVHlwZXMuYm9vbCxcbiAgZGlzcGxheVR5cGU6IHByb3BUeXBlcy5vbmVPZihbJ2lucHV0JywgJ3RleHQnXSksXG4gIHByZWZpeDogcHJvcFR5cGVzLnN0cmluZyxcbiAgc3VmZml4OiBwcm9wVHlwZXMuc3RyaW5nLFxuICBmb3JtYXQ6IHByb3BUeXBlcy5vbmVPZlR5cGUoW3Byb3BUeXBlcy5zdHJpbmcsIHByb3BUeXBlcy5mdW5jXSksXG4gIHJlbW92ZUZvcm1hdHRpbmc6IHByb3BUeXBlcy5mdW5jLFxuICBtYXNrOiBwcm9wVHlwZXMub25lT2ZUeXBlKFtwcm9wVHlwZXMuc3RyaW5nLCBwcm9wVHlwZXMuYXJyYXlPZihwcm9wVHlwZXMuc3RyaW5nKV0pLFxuICB2YWx1ZTogcHJvcFR5cGVzLm9uZU9mVHlwZShbcHJvcFR5cGVzLm51bWJlciwgcHJvcFR5cGVzLnN0cmluZ10pLFxuICBkZWZhdWx0VmFsdWU6IHByb3BUeXBlcy5vbmVPZlR5cGUoW3Byb3BUeXBlcy5udW1iZXIsIHByb3BUeXBlcy5zdHJpbmddKSxcbiAgaXNOdW1lcmljU3RyaW5nOiBwcm9wVHlwZXMuYm9vbCxcbiAgY3VzdG9tSW5wdXQ6IHByb3BUeXBlcy5lbGVtZW50VHlwZSxcbiAgYWxsb3dOZWdhdGl2ZTogcHJvcFR5cGVzLmJvb2wsXG4gIGFsbG93RW1wdHlGb3JtYXR0aW5nOiBwcm9wVHlwZXMuYm9vbCxcbiAgYWxsb3dMZWFkaW5nWmVyb3M6IHByb3BUeXBlcy5ib29sLFxuICBvblZhbHVlQ2hhbmdlOiBwcm9wVHlwZXMuZnVuYyxcbiAgb25LZXlEb3duOiBwcm9wVHlwZXMuZnVuYyxcbiAgb25Nb3VzZVVwOiBwcm9wVHlwZXMuZnVuYyxcbiAgb25DaGFuZ2U6IHByb3BUeXBlcy5mdW5jLFxuICBvbkZvY3VzOiBwcm9wVHlwZXMuZnVuYyxcbiAgb25CbHVyOiBwcm9wVHlwZXMuZnVuYyxcbiAgdHlwZTogcHJvcFR5cGVzLm9uZU9mKFsndGV4dCcsICd0ZWwnLCAncGFzc3dvcmQnXSksXG4gIGlzQWxsb3dlZDogcHJvcFR5cGVzLmZ1bmMsXG4gIHJlbmRlclRleHQ6IHByb3BUeXBlcy5mdW5jLFxuICBnZXRJbnB1dFJlZjogcHJvcFR5cGVzLm9uZU9mVHlwZShbcHJvcFR5cGVzLmZ1bmMsIC8vIGZvciBsZWdhY3kgcmVmc1xuICBwcm9wVHlwZXMuc2hhcGUoe1xuICAgIGN1cnJlbnQ6IHByb3BUeXBlcy5hbnlcbiAgfSldKVxufTtcbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIGRpc3BsYXlUeXBlOiAnaW5wdXQnLFxuICBkZWNpbWFsU2VwYXJhdG9yOiAnLicsXG4gIHRob3VzYW5kc0dyb3VwU3R5bGU6ICd0aG91c2FuZCcsXG4gIGZpeGVkRGVjaW1hbFNjYWxlOiBmYWxzZSxcbiAgcHJlZml4OiAnJyxcbiAgc3VmZml4OiAnJyxcbiAgYWxsb3dOZWdhdGl2ZTogdHJ1ZSxcbiAgYWxsb3dFbXB0eUZvcm1hdHRpbmc6IGZhbHNlLFxuICBhbGxvd0xlYWRpbmdaZXJvczogZmFsc2UsXG4gIGlzTnVtZXJpY1N0cmluZzogZmFsc2UsXG4gIHR5cGU6ICd0ZXh0JyxcbiAgb25WYWx1ZUNoYW5nZTogbm9vcCxcbiAgb25DaGFuZ2U6IG5vb3AsXG4gIG9uS2V5RG93bjogbm9vcCxcbiAgb25Nb3VzZVVwOiBub29wLFxuICBvbkZvY3VzOiBub29wLFxuICBvbkJsdXI6IG5vb3AsXG4gIGlzQWxsb3dlZDogcmV0dXJuVHJ1ZVxufTtcblxudmFyIE51bWJlckZvcm1hdCA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoTnVtYmVyRm9ybWF0LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBOdW1iZXJGb3JtYXQocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTnVtYmVyRm9ybWF0KTtcblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKE51bWJlckZvcm1hdCkuY2FsbCh0aGlzLCBwcm9wcykpO1xuICAgIHZhciBkZWZhdWx0VmFsdWUgPSBwcm9wcy5kZWZhdWx0VmFsdWU7IC8vdmFsaWRhdGUgcHJvcHNcblxuICAgIF90aGlzLnZhbGlkYXRlUHJvcHMoKTtcblxuICAgIHZhciBmb3JtYXR0ZWRWYWx1ZSA9IF90aGlzLmZvcm1hdFZhbHVlUHJvcChkZWZhdWx0VmFsdWUpO1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICB2YWx1ZTogZm9ybWF0dGVkVmFsdWUsXG4gICAgICBudW1Bc1N0cmluZzogX3RoaXMucmVtb3ZlRm9ybWF0dGluZyhmb3JtYXR0ZWRWYWx1ZSlcbiAgICB9O1xuICAgIF90aGlzLnNlbGVjdGlvbkJlZm9yZUlucHV0ID0ge1xuICAgICAgc2VsZWN0aW9uU3RhcnQ6IDAsXG4gICAgICBzZWxlY3Rpb25FbmQ6IDBcbiAgICB9O1xuICAgIF90aGlzLm9uQ2hhbmdlID0gX3RoaXMub25DaGFuZ2UuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25LZXlEb3duID0gX3RoaXMub25LZXlEb3duLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uTW91c2VVcCA9IF90aGlzLm9uTW91c2VVcC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5vbkZvY3VzID0gX3RoaXMub25Gb2N1cy5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5vbkJsdXIgPSBfdGhpcy5vbkJsdXIuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE51bWJlckZvcm1hdCwgW3tcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgIHRoaXMudXBkYXRlVmFsdWVJZlJlcXVpcmVkKHByZXZQcm9wcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInVwZGF0ZVZhbHVlSWZSZXF1aXJlZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVWYWx1ZUlmUmVxdWlyZWQocHJldlByb3BzKSB7XG4gICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHN0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBmb2N1c2VkRWxtID0gdGhpcy5mb2N1c2VkRWxtO1xuICAgICAgdmFyIHN0YXRlVmFsdWUgPSBzdGF0ZS52YWx1ZSxcbiAgICAgICAgICBfc3RhdGUkbnVtQXNTdHJpbmcgPSBzdGF0ZS5udW1Bc1N0cmluZyxcbiAgICAgICAgICBsYXN0TnVtU3RyID0gX3N0YXRlJG51bUFzU3RyaW5nID09PSB2b2lkIDAgPyAnJyA6IF9zdGF0ZSRudW1Bc1N0cmluZzsgLy8gSWYgb25seSBzdGF0ZSBjaGFuZ2VkIG5vIG5lZWQgdG8gZG8gYW55IHRoaW5nXG5cbiAgICAgIGlmIChwcmV2UHJvcHMgIT09IHByb3BzKSB7XG4gICAgICAgIC8vdmFsaWRhdGUgcHJvcHNcbiAgICAgICAgdGhpcy52YWxpZGF0ZVByb3BzKCk7XG4gICAgICAgIHZhciBsYXN0VmFsdWVXaXRoTmV3Rm9ybWF0ID0gdGhpcy5mb3JtYXROdW1TdHJpbmcobGFzdE51bVN0cik7XG4gICAgICAgIHZhciBmb3JtYXR0ZWRWYWx1ZSA9IHByb3BzLnZhbHVlID09PSB1bmRlZmluZWQgPyBsYXN0VmFsdWVXaXRoTmV3Rm9ybWF0IDogdGhpcy5mb3JtYXRWYWx1ZVByb3AoKTtcbiAgICAgICAgdmFyIG51bUFzU3RyaW5nID0gdGhpcy5yZW1vdmVGb3JtYXR0aW5nKGZvcm1hdHRlZFZhbHVlKTtcbiAgICAgICAgdmFyIGZsb2F0VmFsdWUgPSBwYXJzZUZsb2F0KG51bUFzU3RyaW5nKTtcbiAgICAgICAgdmFyIGxhc3RGbG9hdFZhbHVlID0gcGFyc2VGbG9hdChsYXN0TnVtU3RyKTtcblxuICAgICAgICBpZiAoIC8vd2hpbGUgdHlwaW5nIHNldCBzdGF0ZSBvbmx5IHdoZW4gZmxvYXQgdmFsdWUgY2hhbmdlc1xuICAgICAgICAoIWlzTmFOKGZsb2F0VmFsdWUpIHx8ICFpc05hTihsYXN0RmxvYXRWYWx1ZSkpICYmIGZsb2F0VmFsdWUgIT09IGxhc3RGbG9hdFZhbHVlIHx8IC8vY2FuIGFsc28gc2V0IHN0YXRlIHdoZW4gZmxvYXQgdmFsdWUgaXMgc2FtZSBhbmQgdGhlIGZvcm1hdCBwcm9wcyBjaGFuZ2VzXG4gICAgICAgIGxhc3RWYWx1ZVdpdGhOZXdGb3JtYXQgIT09IHN0YXRlVmFsdWUgfHwgLy9zZXQgc3RhdGUgYWx3YXlzIHdoZW4gbm90IGluIGZvY3VzIGFuZCBmb3JtYXR0ZWQgdmFsdWUgaXMgY2hhbmdlZFxuICAgICAgICBmb2N1c2VkRWxtID09PSBudWxsICYmIGZvcm1hdHRlZFZhbHVlICE9PSBzdGF0ZVZhbHVlKSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSh7XG4gICAgICAgICAgICBmb3JtYXR0ZWRWYWx1ZTogZm9ybWF0dGVkVmFsdWUsXG4gICAgICAgICAgICBudW1Bc1N0cmluZzogbnVtQXNTdHJpbmcsXG4gICAgICAgICAgICBpbnB1dDogZm9jdXNlZEVsbVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8qKiBNaXNjIG1ldGhvZHMgKiovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRGbG9hdFN0cmluZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRGbG9hdFN0cmluZygpIHtcbiAgICAgIHZhciBudW0gPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICcnO1xuICAgICAgdmFyIGRlY2ltYWxTY2FsZSA9IHRoaXMucHJvcHMuZGVjaW1hbFNjYWxlO1xuXG4gICAgICB2YXIgX3RoaXMkZ2V0U2VwYXJhdG9ycyA9IHRoaXMuZ2V0U2VwYXJhdG9ycygpLFxuICAgICAgICAgIGRlY2ltYWxTZXBhcmF0b3IgPSBfdGhpcyRnZXRTZXBhcmF0b3JzLmRlY2ltYWxTZXBhcmF0b3I7XG5cbiAgICAgIHZhciBudW1SZWdleCA9IHRoaXMuZ2V0TnVtYmVyUmVnZXgodHJ1ZSk7IC8vcmVtb3ZlIG5lZ2F0aW9uIGZvciByZWdleCBjaGVja1xuXG4gICAgICB2YXIgaGFzTmVnYXRpb24gPSBudW1bMF0gPT09ICctJztcbiAgICAgIGlmIChoYXNOZWdhdGlvbikgbnVtID0gbnVtLnJlcGxhY2UoJy0nLCAnJyk7IC8vaWYgZGVjaW1hbCBzY2FsZSBpcyB6ZXJvIHJlbW92ZSBkZWNpbWFsIGFuZCBudW1iZXIgYWZ0ZXIgZGVjaW1hbFNlcGFyYXRvclxuXG4gICAgICBpZiAoZGVjaW1hbFNlcGFyYXRvciAmJiBkZWNpbWFsU2NhbGUgPT09IDApIHtcbiAgICAgICAgbnVtID0gbnVtLnNwbGl0KGRlY2ltYWxTZXBhcmF0b3IpWzBdO1xuICAgICAgfVxuXG4gICAgICBudW0gPSAobnVtLm1hdGNoKG51bVJlZ2V4KSB8fCBbXSkuam9pbignJykucmVwbGFjZShkZWNpbWFsU2VwYXJhdG9yLCAnLicpOyAvL3JlbW92ZSBleHRyYSBkZWNpbWFsc1xuXG4gICAgICB2YXIgZmlyc3REZWNpbWFsSW5kZXggPSBudW0uaW5kZXhPZignLicpO1xuXG4gICAgICBpZiAoZmlyc3REZWNpbWFsSW5kZXggIT09IC0xKSB7XG4gICAgICAgIG51bSA9IFwiXCIuY29uY2F0KG51bS5zdWJzdHJpbmcoMCwgZmlyc3REZWNpbWFsSW5kZXgpLCBcIi5cIikuY29uY2F0KG51bS5zdWJzdHJpbmcoZmlyc3REZWNpbWFsSW5kZXggKyAxLCBudW0ubGVuZ3RoKS5yZXBsYWNlKG5ldyBSZWdFeHAoZXNjYXBlUmVnRXhwKGRlY2ltYWxTZXBhcmF0b3IpLCAnZycpLCAnJykpO1xuICAgICAgfSAvL2FkZCBuZWdhdGlvbiBiYWNrXG5cblxuICAgICAgaWYgKGhhc05lZ2F0aW9uKSBudW0gPSAnLScgKyBudW07XG4gICAgICByZXR1cm4gbnVtO1xuICAgIH0gLy9yZXR1cm5lZCByZWdleCBhc3N1bWVzIGRlY2ltYWxTZXBhcmF0b3IgaXMgYXMgcGVyIHByb3BcblxuICB9LCB7XG4gICAga2V5OiBcImdldE51bWJlclJlZ2V4XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldE51bWJlclJlZ2V4KGcsIGlnbm9yZURlY2ltYWxTZXBhcmF0b3IpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgZm9ybWF0ID0gX3RoaXMkcHJvcHMuZm9ybWF0LFxuICAgICAgICAgIGRlY2ltYWxTY2FsZSA9IF90aGlzJHByb3BzLmRlY2ltYWxTY2FsZTtcblxuICAgICAgdmFyIF90aGlzJGdldFNlcGFyYXRvcnMyID0gdGhpcy5nZXRTZXBhcmF0b3JzKCksXG4gICAgICAgICAgZGVjaW1hbFNlcGFyYXRvciA9IF90aGlzJGdldFNlcGFyYXRvcnMyLmRlY2ltYWxTZXBhcmF0b3I7XG5cbiAgICAgIHJldHVybiBuZXcgUmVnRXhwKCdcXFxcZCcgKyAoZGVjaW1hbFNlcGFyYXRvciAmJiBkZWNpbWFsU2NhbGUgIT09IDAgJiYgIWlnbm9yZURlY2ltYWxTZXBhcmF0b3IgJiYgIWZvcm1hdCA/ICd8JyArIGVzY2FwZVJlZ0V4cChkZWNpbWFsU2VwYXJhdG9yKSA6ICcnKSwgZyA/ICdnJyA6IHVuZGVmaW5lZCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFNlcGFyYXRvcnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U2VwYXJhdG9ycygpIHtcbiAgICAgIHZhciBkZWNpbWFsU2VwYXJhdG9yID0gdGhpcy5wcm9wcy5kZWNpbWFsU2VwYXJhdG9yO1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgdGhvdXNhbmRTZXBhcmF0b3IgPSBfdGhpcyRwcm9wczIudGhvdXNhbmRTZXBhcmF0b3IsXG4gICAgICAgICAgYWxsb3dlZERlY2ltYWxTZXBhcmF0b3JzID0gX3RoaXMkcHJvcHMyLmFsbG93ZWREZWNpbWFsU2VwYXJhdG9ycztcblxuICAgICAgaWYgKHRob3VzYW5kU2VwYXJhdG9yID09PSB0cnVlKSB7XG4gICAgICAgIHRob3VzYW5kU2VwYXJhdG9yID0gJywnO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWFsbG93ZWREZWNpbWFsU2VwYXJhdG9ycykge1xuICAgICAgICBhbGxvd2VkRGVjaW1hbFNlcGFyYXRvcnMgPSBbZGVjaW1hbFNlcGFyYXRvciwgJy4nXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGVjaW1hbFNlcGFyYXRvcjogZGVjaW1hbFNlcGFyYXRvcixcbiAgICAgICAgdGhvdXNhbmRTZXBhcmF0b3I6IHRob3VzYW5kU2VwYXJhdG9yLFxuICAgICAgICBhbGxvd2VkRGVjaW1hbFNlcGFyYXRvcnM6IGFsbG93ZWREZWNpbWFsU2VwYXJhdG9yc1xuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0TWFza0F0SW5kZXhcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TWFza0F0SW5kZXgoaW5kZXgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyRtYXNrID0gdGhpcy5wcm9wcy5tYXNrLFxuICAgICAgICAgIG1hc2sgPSBfdGhpcyRwcm9wcyRtYXNrID09PSB2b2lkIDAgPyAnICcgOiBfdGhpcyRwcm9wcyRtYXNrO1xuXG4gICAgICBpZiAodHlwZW9mIG1hc2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBtYXNrO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbWFza1tpbmRleF0gfHwgJyAnO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRWYWx1ZU9iamVjdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRWYWx1ZU9iamVjdChmb3JtYXR0ZWRWYWx1ZSwgbnVtQXNTdHJpbmcpIHtcbiAgICAgIHZhciBmbG9hdFZhbHVlID0gcGFyc2VGbG9hdChudW1Bc1N0cmluZyk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBmb3JtYXR0ZWRWYWx1ZTogZm9ybWF0dGVkVmFsdWUsXG4gICAgICAgIHZhbHVlOiBudW1Bc1N0cmluZyxcbiAgICAgICAgZmxvYXRWYWx1ZTogaXNOYU4oZmxvYXRWYWx1ZSkgPyB1bmRlZmluZWQgOiBmbG9hdFZhbHVlXG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ2YWxpZGF0ZVByb3BzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbGlkYXRlUHJvcHMoKSB7XG4gICAgICB2YXIgbWFzayA9IHRoaXMucHJvcHMubWFzazsgLy92YWxpZGF0ZSBkZWNpbWFsU2VwYXJhdG9yIGFuZCB0aG91c2FuZFNlcGFyYXRvclxuXG4gICAgICB2YXIgX3RoaXMkZ2V0U2VwYXJhdG9yczMgPSB0aGlzLmdldFNlcGFyYXRvcnMoKSxcbiAgICAgICAgICBkZWNpbWFsU2VwYXJhdG9yID0gX3RoaXMkZ2V0U2VwYXJhdG9yczMuZGVjaW1hbFNlcGFyYXRvcixcbiAgICAgICAgICB0aG91c2FuZFNlcGFyYXRvciA9IF90aGlzJGdldFNlcGFyYXRvcnMzLnRob3VzYW5kU2VwYXJhdG9yO1xuXG4gICAgICBpZiAoZGVjaW1hbFNlcGFyYXRvciA9PT0gdGhvdXNhbmRTZXBhcmF0b3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiXFxuICAgICAgICAgIERlY2ltYWwgc2VwYXJhdG9yIGNhbid0IGJlIHNhbWUgYXMgdGhvdXNhbmQgc2VwYXJhdG9yLlxcbiAgICAgICAgICB0aG91c2FuZFNlcGFyYXRvcjogXCIuY29uY2F0KHRob3VzYW5kU2VwYXJhdG9yLCBcIiAodGhvdXNhbmRTZXBhcmF0b3IgPSB7dHJ1ZX0gaXMgc2FtZSBhcyB0aG91c2FuZFNlcGFyYXRvciA9IFxcXCIsXFxcIilcXG4gICAgICAgICAgZGVjaW1hbFNlcGFyYXRvcjogXCIpLmNvbmNhdChkZWNpbWFsU2VwYXJhdG9yLCBcIiAoZGVmYXVsdCB2YWx1ZSBmb3IgZGVjaW1hbFNlcGFyYXRvciBpcyAuKVxcbiAgICAgICBcIikpO1xuICAgICAgfSAvL3ZhbGlkYXRlIG1hc2tcblxuXG4gICAgICBpZiAobWFzaykge1xuICAgICAgICB2YXIgbWFza0FzU3RyID0gbWFzayA9PT0gJ3N0cmluZycgPyBtYXNrIDogbWFzay50b1N0cmluZygpO1xuXG4gICAgICAgIGlmIChtYXNrQXNTdHIubWF0Y2goL1xcZC9nKSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlxcbiAgICAgICAgICBNYXNrIFwiLmNvbmNhdChtYXNrLCBcIiBzaG91bGQgbm90IGNvbnRhaW4gbnVtZXJpYyBjaGFyYWN0ZXI7XFxuICAgICAgICBcIikpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8qKiBNaXNjIG1ldGhvZHMgZW5kICoqL1xuXG4gICAgLyoqIGNhcmV0IHNwZWNpZmljIG1ldGhvZHMgKiovXG5cbiAgfSwge1xuICAgIGtleTogXCJzZXRQYXRjaGVkQ2FyZXRQb3NpdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRQYXRjaGVkQ2FyZXRQb3NpdGlvbihlbCwgY2FyZXRQb3MsIGN1cnJlbnRWYWx1ZSkge1xuICAgICAgLyogc2V0dGluZyBjYXJldCBwb3NpdGlvbiB3aXRoaW4gdGltZW91dCBvZiAwbXMgaXMgcmVxdWlyZWQgZm9yIG1vYmlsZSBjaHJvbWUsXG4gICAgICBvdGhlcndpc2UgYnJvd3NlciByZXNldHMgdGhlIGNhcmV0IHBvc2l0aW9uIGFmdGVyIHdlIHNldCBpdFxuICAgICAgV2UgYXJlIGFsc28gc2V0dGluZyBpdCB3aXRob3V0IHRpbWVvdXQgc28gdGhhdCBpbiBub3JtYWwgYnJvd3NlciB3ZSBkb24ndCBzZWUgdGhlIGZsaWNrZXJpbmcgKi9cbiAgICAgIHNldENhcmV0UG9zaXRpb24oZWwsIGNhcmV0UG9zKTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoZWwudmFsdWUgPT09IGN1cnJlbnRWYWx1ZSkgc2V0Q2FyZXRQb3NpdGlvbihlbCwgY2FyZXRQb3MpO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICAgIC8qIFRoaXMga2VlcHMgdGhlIGNhcmV0IHdpdGhpbiB0eXBpbmcgYXJlYSBzbyBwZW9wbGUgY2FuJ3QgdHlwZSBpbiBiZXR3ZWVuIHByZWZpeCBvciBzdWZmaXggKi9cblxuICB9LCB7XG4gICAga2V5OiBcImNvcnJlY3RDYXJldFBvc2l0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvcnJlY3RDYXJldFBvc2l0aW9uKHZhbHVlLCBjYXJldFBvcywgZGlyZWN0aW9uKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBwcmVmaXggPSBfdGhpcyRwcm9wczMucHJlZml4LFxuICAgICAgICAgIHN1ZmZpeCA9IF90aGlzJHByb3BzMy5zdWZmaXgsXG4gICAgICAgICAgZm9ybWF0ID0gX3RoaXMkcHJvcHMzLmZvcm1hdDsgLy9pZiB2YWx1ZSBpcyBlbXB0eSByZXR1cm4gMFxuXG4gICAgICBpZiAodmFsdWUgPT09ICcnKSByZXR1cm4gMDsgLy9jYXJldCBwb3NpdGlvbiBzaG91bGQgYmUgYmV0d2VlbiAwIGFuZCB2YWx1ZSBsZW5ndGhcblxuICAgICAgY2FyZXRQb3MgPSBjbGFtcChjYXJldFBvcywgMCwgdmFsdWUubGVuZ3RoKTsgLy9pbiBjYXNlIG9mIGZvcm1hdCBhcyBudW1iZXIgbGltaXQgYmV0d2VlbiBwcmVmaXggYW5kIHN1ZmZpeFxuXG4gICAgICBpZiAoIWZvcm1hdCkge1xuICAgICAgICB2YXIgaGFzTmVnYXRpb24gPSB2YWx1ZVswXSA9PT0gJy0nO1xuICAgICAgICByZXR1cm4gY2xhbXAoY2FyZXRQb3MsIHByZWZpeC5sZW5ndGggKyAoaGFzTmVnYXRpb24gPyAxIDogMCksIHZhbHVlLmxlbmd0aCAtIHN1ZmZpeC5sZW5ndGgpO1xuICAgICAgfSAvL2luIGNhc2UgaWYgY3VzdG9tIGZvcm1hdCBtZXRob2QgZG9uJ3QgZG8gYW55dGhpbmdcblxuXG4gICAgICBpZiAodHlwZW9mIGZvcm1hdCA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIGNhcmV0UG9zO1xuICAgICAgLyogaW4gY2FzZSBmb3JtYXQgaXMgc3RyaW5nIGZpbmQgdGhlIGNsb3Nlc3QgIyBwb3NpdGlvbiBmcm9tIHRoZSBjYXJldCBwb3NpdGlvbiAqL1xuICAgICAgLy9pbiBjYXNlIHRoZSBjYXJldFBvcyBoYXZlIGlucHV0IHZhbHVlIG9uIGl0IGRvbid0IGRvIGFueXRoaW5nXG5cbiAgICAgIGlmIChmb3JtYXRbY2FyZXRQb3NdID09PSAnIycgJiYgY2hhcklzTnVtYmVyKHZhbHVlW2NhcmV0UG9zXSkpIHJldHVybiBjYXJldFBvczsgLy9pZiBjYXJldFBvcyBpcyBqdXN0IGFmdGVyIGlucHV0IHZhbHVlIGRvbid0IGRvIGFueXRoaW5nXG5cbiAgICAgIGlmIChmb3JtYXRbY2FyZXRQb3MgLSAxXSA9PT0gJyMnICYmIGNoYXJJc051bWJlcih2YWx1ZVtjYXJldFBvcyAtIDFdKSkgcmV0dXJuIGNhcmV0UG9zOyAvL2ZpbmQgdGhlIG5lYXJlc3QgY2FyZXQgcG9zaXRpb25cblxuICAgICAgdmFyIGZpcnN0SGFzaFBvc2l0aW9uID0gZm9ybWF0LmluZGV4T2YoJyMnKTtcbiAgICAgIHZhciBsYXN0SGFzaFBvc2l0aW9uID0gZm9ybWF0Lmxhc3RJbmRleE9mKCcjJyk7IC8vbGltaXQgdGhlIGN1cnNvciBiZXR3ZWVuIHRoZSBmaXJzdCAjIHBvc2l0aW9uIGFuZCB0aGUgbGFzdCAjIHBvc2l0aW9uXG5cbiAgICAgIGNhcmV0UG9zID0gY2xhbXAoY2FyZXRQb3MsIGZpcnN0SGFzaFBvc2l0aW9uLCBsYXN0SGFzaFBvc2l0aW9uICsgMSk7XG4gICAgICB2YXIgbmV4dFBvcyA9IGZvcm1hdC5zdWJzdHJpbmcoY2FyZXRQb3MsIGZvcm1hdC5sZW5ndGgpLmluZGV4T2YoJyMnKTtcbiAgICAgIHZhciBjYXJldExlZnRCb3VuZCA9IGNhcmV0UG9zO1xuICAgICAgdmFyIGNhcmV0UmlnaHRCb3VuZCA9IGNhcmV0UG9zICsgKG5leHRQb3MgPT09IC0xID8gMCA6IG5leHRQb3MpOyAvL2dldCB0aGUgcG9zaXRpb24gd2hlcmUgdGhlIGxhc3QgbnVtYmVyIGlzIHByZXNlbnRcblxuICAgICAgd2hpbGUgKGNhcmV0TGVmdEJvdW5kID4gZmlyc3RIYXNoUG9zaXRpb24gJiYgKGZvcm1hdFtjYXJldExlZnRCb3VuZF0gIT09ICcjJyB8fCAhY2hhcklzTnVtYmVyKHZhbHVlW2NhcmV0TGVmdEJvdW5kXSkpKSB7XG4gICAgICAgIGNhcmV0TGVmdEJvdW5kIC09IDE7XG4gICAgICB9XG5cbiAgICAgIHZhciBnb1RvTGVmdCA9ICFjaGFySXNOdW1iZXIodmFsdWVbY2FyZXRSaWdodEJvdW5kXSkgfHwgZGlyZWN0aW9uID09PSAnbGVmdCcgJiYgY2FyZXRQb3MgIT09IGZpcnN0SGFzaFBvc2l0aW9uIHx8IGNhcmV0UG9zIC0gY2FyZXRMZWZ0Qm91bmQgPCBjYXJldFJpZ2h0Qm91bmQgLSBjYXJldFBvcztcblxuICAgICAgaWYgKGdvVG9MZWZ0KSB7XG4gICAgICAgIC8vY2hlY2sgaWYgbnVtYmVyIHNob3VsZCBiZSB0YWtlbiBhZnRlciB0aGUgYm91bmQgb3IgYWZ0ZXIgaXRcbiAgICAgICAgLy9pZiBudW1iZXIgcHJlY2VkaW5nIGEgdmFsaWQgbnVtYmVyIGtlZXAgaXQgYWZ0ZXJcbiAgICAgICAgcmV0dXJuIGNoYXJJc051bWJlcih2YWx1ZVtjYXJldExlZnRCb3VuZF0pID8gY2FyZXRMZWZ0Qm91bmQgKyAxIDogY2FyZXRMZWZ0Qm91bmQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjYXJldFJpZ2h0Qm91bmQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldENhcmV0UG9zaXRpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q2FyZXRQb3NpdGlvbihpbnB1dFZhbHVlLCBmb3JtYXR0ZWRWYWx1ZSwgY2FyZXRQb3MpIHtcbiAgICAgIHZhciBmb3JtYXQgPSB0aGlzLnByb3BzLmZvcm1hdDtcbiAgICAgIHZhciBzdGF0ZVZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZTtcbiAgICAgIHZhciBudW1SZWdleCA9IHRoaXMuZ2V0TnVtYmVyUmVnZXgodHJ1ZSk7XG4gICAgICB2YXIgaW5wdXROdW1iZXIgPSAoaW5wdXRWYWx1ZS5tYXRjaChudW1SZWdleCkgfHwgW10pLmpvaW4oJycpO1xuICAgICAgdmFyIGZvcm1hdHRlZE51bWJlciA9IChmb3JtYXR0ZWRWYWx1ZS5tYXRjaChudW1SZWdleCkgfHwgW10pLmpvaW4oJycpO1xuICAgICAgdmFyIGosIGk7XG4gICAgICBqID0gMDtcblxuICAgICAgZm9yIChpID0gMDsgaSA8IGNhcmV0UG9zOyBpKyspIHtcbiAgICAgICAgdmFyIGN1cnJlbnRJbnB1dENoYXIgPSBpbnB1dFZhbHVlW2ldIHx8ICcnO1xuICAgICAgICB2YXIgY3VycmVudEZvcm1hdENoYXIgPSBmb3JtYXR0ZWRWYWx1ZVtqXSB8fCAnJzsgLy9ubyBuZWVkIHRvIGluY3JlYXNlIG5ldyBjdXJzb3IgcG9zaXRpb24gaWYgZm9ybWF0dGVkIHZhbHVlIGRvZXMgbm90IGhhdmUgdGhvc2UgY2hhcmFjdGVyc1xuICAgICAgICAvL2Nhc2UgaW5wdXRWYWx1ZSA9IDFhMjMgYW5kIGZvcm1hdHRlZFZhbHVlID0gIDEyM1xuXG4gICAgICAgIGlmICghY3VycmVudElucHV0Q2hhci5tYXRjaChudW1SZWdleCkgJiYgY3VycmVudElucHV0Q2hhciAhPT0gY3VycmVudEZvcm1hdENoYXIpIGNvbnRpbnVlOyAvL1doZW4gd2UgYXJlIHN0cmlwaW5nIG91dCBsZWFkaW5nIHplcm9zIG1haW50YWluIHRoZSBuZXcgY3Vyc29yIHBvc2l0aW9uXG4gICAgICAgIC8vQ2FzZSBpbnB1dFZhbHVlID0gMDAwMjMgYW5kIGZvcm1hdHRlZFZhbHVlID0gMjM7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRJbnB1dENoYXIgPT09ICcwJyAmJiBjdXJyZW50Rm9ybWF0Q2hhci5tYXRjaChudW1SZWdleCkgJiYgY3VycmVudEZvcm1hdENoYXIgIT09ICcwJyAmJiBpbnB1dE51bWJlci5sZW5ndGggIT09IGZvcm1hdHRlZE51bWJlci5sZW5ndGgpIGNvbnRpbnVlOyAvL3dlIGFyZSBub3QgdXNpbmcgY3VycmVudEZvcm1hdENoYXIgYmVjYXVzZSBqIGNhbiBjaGFuZ2UgaGVyZVxuXG4gICAgICAgIHdoaWxlIChjdXJyZW50SW5wdXRDaGFyICE9PSBmb3JtYXR0ZWRWYWx1ZVtqXSAmJiBqIDwgZm9ybWF0dGVkVmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgaisrO1xuICAgICAgICB9XG5cbiAgICAgICAgaisrO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGZvcm1hdCA9PT0gJ3N0cmluZycgJiYgIXN0YXRlVmFsdWUpIHtcbiAgICAgICAgLy9zZXQgaXQgdG8gdGhlIG1heGltdW0gdmFsdWUgc28gaXQgZ29lcyBhZnRlciB0aGUgbGFzdCBudW1iZXJcbiAgICAgICAgaiA9IGZvcm1hdHRlZFZhbHVlLmxlbmd0aDtcbiAgICAgIH0gLy9jb3JyZWN0IGNhcmV0IHBvc2l0aW9uIGlmIGl0cyBvdXRzaWRlIG9mIGVkaXRhYmxlIGFyZWFcblxuXG4gICAgICBqID0gdGhpcy5jb3JyZWN0Q2FyZXRQb3NpdGlvbihmb3JtYXR0ZWRWYWx1ZSwgaik7XG4gICAgICByZXR1cm4gajtcbiAgICB9XG4gICAgLyoqIGNhcmV0IHNwZWNpZmljIG1ldGhvZHMgZW5kcyAqKi9cblxuICAgIC8qKiBtZXRob2RzIHRvIHJlbW92ZSBmb3JtYXR0dGluZyAqKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZVByZWZpeEFuZFN1ZmZpeFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVQcmVmaXhBbmRTdWZmaXgodmFsKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM0ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBmb3JtYXQgPSBfdGhpcyRwcm9wczQuZm9ybWF0LFxuICAgICAgICAgIHByZWZpeCA9IF90aGlzJHByb3BzNC5wcmVmaXgsXG4gICAgICAgICAgc3VmZml4ID0gX3RoaXMkcHJvcHM0LnN1ZmZpeDsgLy9yZW1vdmUgcHJlZml4IGFuZCBzdWZmaXhcblxuICAgICAgaWYgKCFmb3JtYXQgJiYgdmFsKSB7XG4gICAgICAgIHZhciBpc05lZ2F0aXZlID0gdmFsWzBdID09PSAnLSc7IC8vcmVtb3ZlIG5lZ2F0aW9uIHNpZ25cblxuICAgICAgICBpZiAoaXNOZWdhdGl2ZSkgdmFsID0gdmFsLnN1YnN0cmluZygxLCB2YWwubGVuZ3RoKTsgLy9yZW1vdmUgcHJlZml4XG5cbiAgICAgICAgdmFsID0gcHJlZml4ICYmIHZhbC5pbmRleE9mKHByZWZpeCkgPT09IDAgPyB2YWwuc3Vic3RyaW5nKHByZWZpeC5sZW5ndGgsIHZhbC5sZW5ndGgpIDogdmFsOyAvL3JlbW92ZSBzdWZmaXhcblxuICAgICAgICB2YXIgc3VmZml4TGFzdEluZGV4ID0gdmFsLmxhc3RJbmRleE9mKHN1ZmZpeCk7XG4gICAgICAgIHZhbCA9IHN1ZmZpeCAmJiBzdWZmaXhMYXN0SW5kZXggIT09IC0xICYmIHN1ZmZpeExhc3RJbmRleCA9PT0gdmFsLmxlbmd0aCAtIHN1ZmZpeC5sZW5ndGggPyB2YWwuc3Vic3RyaW5nKDAsIHN1ZmZpeExhc3RJbmRleCkgOiB2YWw7IC8vYWRkIG5lZ2F0aW9uIHNpZ24gYmFja1xuXG4gICAgICAgIGlmIChpc05lZ2F0aXZlKSB2YWwgPSAnLScgKyB2YWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZVBhdHRlcm5Gb3JtYXR0aW5nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZVBhdHRlcm5Gb3JtYXR0aW5nKHZhbCkge1xuICAgICAgdmFyIGZvcm1hdCA9IHRoaXMucHJvcHMuZm9ybWF0O1xuICAgICAgdmFyIGZvcm1hdEFycmF5ID0gZm9ybWF0LnNwbGl0KCcjJykuZmlsdGVyKGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgcmV0dXJuIHN0ciAhPT0gJyc7XG4gICAgICB9KTtcbiAgICAgIHZhciBzdGFydCA9IDA7XG4gICAgICB2YXIgbnVtU3RyID0gJyc7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwLCBsbiA9IGZvcm1hdEFycmF5Lmxlbmd0aDsgaSA8PSBsbjsgaSsrKSB7XG4gICAgICAgIHZhciBwYXJ0ID0gZm9ybWF0QXJyYXlbaV0gfHwgJyc7IC8vaWYgaSBpcyB0aGUgbGFzdCBmcmFnbWVudCB0YWtlIHRoZSBpbmRleCBvZiBlbmQgb2YgdGhlIHZhbHVlXG4gICAgICAgIC8vRm9yIGNhc2UgbGlrZSArMSAoOTExKSA5MTEgOTEgOTEgaGF2aW5nIHBhdHRlcm4gKzEgKCMjIykgIyMjICMjICMjXG5cbiAgICAgICAgdmFyIGluZGV4ID0gaSA9PT0gbG4gPyB2YWwubGVuZ3RoIDogdmFsLmluZGV4T2YocGFydCwgc3RhcnQpO1xuICAgICAgICAvKiBpbiBhbnkgY2FzZSBpZiB3ZSBkb24ndCBmaW5kIHRoZSBwYXR0ZXJuIHBhcnQgaW4gdGhlIHZhbHVlIGFzc3VtZSB0aGUgdmFsIGFzIG51bWVyaWMgc3RyaW5nXG4gICAgICAgIFRoaXMgd2lsbCBiZSBhbHNvIGluIGNhc2UgaWYgdXNlciBoYXMgc3RhcnRlZCB0eXBpbmcsIGluIGFueSBvdGhlciBjYXNlIGl0IHdpbGwgbm90IGJlIC0xXG4gICAgICAgIHVubGVzcyB3cm9uZyBwcm9wIHZhbHVlIGlzIHByb3ZpZGVkICovXG5cbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgIG51bVN0ciA9IHZhbDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBudW1TdHIgKz0gdmFsLnN1YnN0cmluZyhzdGFydCwgaW5kZXgpO1xuICAgICAgICAgIHN0YXJ0ID0gaW5kZXggKyBwYXJ0Lmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gKG51bVN0ci5tYXRjaCgvXFxkL2cpIHx8IFtdKS5qb2luKCcnKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlRm9ybWF0dGluZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVGb3JtYXR0aW5nKHZhbCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzNSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgZm9ybWF0ID0gX3RoaXMkcHJvcHM1LmZvcm1hdCxcbiAgICAgICAgICByZW1vdmVGb3JtYXR0aW5nID0gX3RoaXMkcHJvcHM1LnJlbW92ZUZvcm1hdHRpbmc7XG4gICAgICBpZiAoIXZhbCkgcmV0dXJuIHZhbDtcblxuICAgICAgaWYgKCFmb3JtYXQpIHtcbiAgICAgICAgdmFsID0gdGhpcy5yZW1vdmVQcmVmaXhBbmRTdWZmaXgodmFsKTtcbiAgICAgICAgdmFsID0gdGhpcy5nZXRGbG9hdFN0cmluZyh2YWwpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZm9ybWF0ID09PSAnc3RyaW5nJykge1xuICAgICAgICB2YWwgPSB0aGlzLnJlbW92ZVBhdHRlcm5Gb3JtYXR0aW5nKHZhbCk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiByZW1vdmVGb3JtYXR0aW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vY29uZGl0aW9uIG5lZWQgdG8gYmUgaGFuZGxlZCBpZiBmb3JtYXQgbWV0aG9kIGlzIHByb3ZpZGUsXG4gICAgICAgIHZhbCA9IHJlbW92ZUZvcm1hdHRpbmcodmFsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbCA9ICh2YWwubWF0Y2goL1xcZC9nKSB8fCBbXSkuam9pbignJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuICAgIC8qKiBtZXRob2RzIHRvIHJlbW92ZSBmb3JtYXR0dGluZyBlbmQgKiovXG5cbiAgICAvKioqIGZvcm1hdCBzcGVjaWZpYyBtZXRob2RzIHN0YXJ0ICoqKi9cblxuICAgIC8qKlxuICAgICAqIEZvcm1hdCB3aGVuICMgYmFzZWQgc3RyaW5nIGlzIHByb3ZpZGVkXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBudW1TdHIgTnVtZXJpYyBTdHJpbmdcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9ICAgICAgICBmb3JtYXR0ZWQgVmFsdWVcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImZvcm1hdFdpdGhQYXR0ZXJuXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvcm1hdFdpdGhQYXR0ZXJuKG51bVN0cikge1xuICAgICAgdmFyIGZvcm1hdCA9IHRoaXMucHJvcHMuZm9ybWF0O1xuICAgICAgdmFyIGhhc2hDb3VudCA9IDA7XG4gICAgICB2YXIgZm9ybWF0dGVkTnVtYmVyQXJ5ID0gZm9ybWF0LnNwbGl0KCcnKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDAsIGxuID0gZm9ybWF0Lmxlbmd0aDsgaSA8IGxuOyBpKyspIHtcbiAgICAgICAgaWYgKGZvcm1hdFtpXSA9PT0gJyMnKSB7XG4gICAgICAgICAgZm9ybWF0dGVkTnVtYmVyQXJ5W2ldID0gbnVtU3RyW2hhc2hDb3VudF0gfHwgdGhpcy5nZXRNYXNrQXRJbmRleChoYXNoQ291bnQpO1xuICAgICAgICAgIGhhc2hDb3VudCArPSAxO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmb3JtYXR0ZWROdW1iZXJBcnkuam9pbignJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gbnVtU3RyIE51bWVyaWMgc3RyaW5nL2Zsb2F0U3RyaW5nXSBJdCBhbHdheXMgaGF2ZSBkZWNpbWFsU2VwYXJhdG9yIGFzIC5cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IGZvcm1hdHRlZCBWYWx1ZVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZm9ybWF0QXNOdW1iZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9ybWF0QXNOdW1iZXIobnVtU3RyKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM2ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBkZWNpbWFsU2NhbGUgPSBfdGhpcyRwcm9wczYuZGVjaW1hbFNjYWxlLFxuICAgICAgICAgIGZpeGVkRGVjaW1hbFNjYWxlID0gX3RoaXMkcHJvcHM2LmZpeGVkRGVjaW1hbFNjYWxlLFxuICAgICAgICAgIHByZWZpeCA9IF90aGlzJHByb3BzNi5wcmVmaXgsXG4gICAgICAgICAgc3VmZml4ID0gX3RoaXMkcHJvcHM2LnN1ZmZpeCxcbiAgICAgICAgICBhbGxvd05lZ2F0aXZlID0gX3RoaXMkcHJvcHM2LmFsbG93TmVnYXRpdmUsXG4gICAgICAgICAgdGhvdXNhbmRzR3JvdXBTdHlsZSA9IF90aGlzJHByb3BzNi50aG91c2FuZHNHcm91cFN0eWxlO1xuXG4gICAgICB2YXIgX3RoaXMkZ2V0U2VwYXJhdG9yczQgPSB0aGlzLmdldFNlcGFyYXRvcnMoKSxcbiAgICAgICAgICB0aG91c2FuZFNlcGFyYXRvciA9IF90aGlzJGdldFNlcGFyYXRvcnM0LnRob3VzYW5kU2VwYXJhdG9yLFxuICAgICAgICAgIGRlY2ltYWxTZXBhcmF0b3IgPSBfdGhpcyRnZXRTZXBhcmF0b3JzNC5kZWNpbWFsU2VwYXJhdG9yO1xuXG4gICAgICB2YXIgaGFzRGVjaW1hbFNlcGFyYXRvciA9IG51bVN0ci5pbmRleE9mKCcuJykgIT09IC0xIHx8IGRlY2ltYWxTY2FsZSAmJiBmaXhlZERlY2ltYWxTY2FsZTtcblxuICAgICAgdmFyIF9zcGxpdERlY2ltYWwgPSBzcGxpdERlY2ltYWwobnVtU3RyLCBhbGxvd05lZ2F0aXZlKSxcbiAgICAgICAgICBiZWZvcmVEZWNpbWFsID0gX3NwbGl0RGVjaW1hbC5iZWZvcmVEZWNpbWFsLFxuICAgICAgICAgIGFmdGVyRGVjaW1hbCA9IF9zcGxpdERlY2ltYWwuYWZ0ZXJEZWNpbWFsLFxuICAgICAgICAgIGFkZE5lZ2F0aW9uID0gX3NwbGl0RGVjaW1hbC5hZGROZWdhdGlvbjsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBwcmVmZXItY29uc3RcbiAgICAgIC8vYXBwbHkgZGVjaW1hbCBwcmVjaXNpb24gaWYgaXRzIGRlZmluZWRcblxuXG4gICAgICBpZiAoZGVjaW1hbFNjYWxlICE9PSB1bmRlZmluZWQpIGFmdGVyRGVjaW1hbCA9IGxpbWl0VG9TY2FsZShhZnRlckRlY2ltYWwsIGRlY2ltYWxTY2FsZSwgZml4ZWREZWNpbWFsU2NhbGUpO1xuXG4gICAgICBpZiAodGhvdXNhbmRTZXBhcmF0b3IpIHtcbiAgICAgICAgYmVmb3JlRGVjaW1hbCA9IGFwcGx5VGhvdXNhbmRTZXBhcmF0b3IoYmVmb3JlRGVjaW1hbCwgdGhvdXNhbmRTZXBhcmF0b3IsIHRob3VzYW5kc0dyb3VwU3R5bGUpO1xuICAgICAgfSAvL2FkZCBwcmVmaXggYW5kIHN1ZmZpeFxuXG5cbiAgICAgIGlmIChwcmVmaXgpIGJlZm9yZURlY2ltYWwgPSBwcmVmaXggKyBiZWZvcmVEZWNpbWFsO1xuICAgICAgaWYgKHN1ZmZpeCkgYWZ0ZXJEZWNpbWFsID0gYWZ0ZXJEZWNpbWFsICsgc3VmZml4OyAvL3Jlc3RvcmUgbmVnYXRpb24gc2lnblxuXG4gICAgICBpZiAoYWRkTmVnYXRpb24pIGJlZm9yZURlY2ltYWwgPSAnLScgKyBiZWZvcmVEZWNpbWFsO1xuICAgICAgbnVtU3RyID0gYmVmb3JlRGVjaW1hbCArIChoYXNEZWNpbWFsU2VwYXJhdG9yICYmIGRlY2ltYWxTZXBhcmF0b3IgfHwgJycpICsgYWZ0ZXJEZWNpbWFsO1xuICAgICAgcmV0dXJuIG51bVN0cjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZm9ybWF0TnVtU3RyaW5nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvcm1hdE51bVN0cmluZygpIHtcbiAgICAgIHZhciBudW1TdHIgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICcnO1xuICAgICAgdmFyIF90aGlzJHByb3BzNyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgZm9ybWF0ID0gX3RoaXMkcHJvcHM3LmZvcm1hdCxcbiAgICAgICAgICBhbGxvd0VtcHR5Rm9ybWF0dGluZyA9IF90aGlzJHByb3BzNy5hbGxvd0VtcHR5Rm9ybWF0dGluZztcbiAgICAgIHZhciBmb3JtYXR0ZWRWYWx1ZSA9IG51bVN0cjtcblxuICAgICAgaWYgKG51bVN0ciA9PT0gJycgJiYgIWFsbG93RW1wdHlGb3JtYXR0aW5nKSB7XG4gICAgICAgIGZvcm1hdHRlZFZhbHVlID0gJyc7XG4gICAgICB9IGVsc2UgaWYgKG51bVN0ciA9PT0gJy0nICYmICFmb3JtYXQpIHtcbiAgICAgICAgZm9ybWF0dGVkVmFsdWUgPSAnLSc7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBmb3JtYXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGZvcm1hdHRlZFZhbHVlID0gdGhpcy5mb3JtYXRXaXRoUGF0dGVybihmb3JtYXR0ZWRWYWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBmb3JtYXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZm9ybWF0dGVkVmFsdWUgPSBmb3JtYXQoZm9ybWF0dGVkVmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9ybWF0dGVkVmFsdWUgPSB0aGlzLmZvcm1hdEFzTnVtYmVyKGZvcm1hdHRlZFZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZvcm1hdHRlZFZhbHVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmb3JtYXRWYWx1ZVByb3BcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9ybWF0VmFsdWVQcm9wKGRlZmF1bHRWYWx1ZSkge1xuICAgICAgdmFyIF90aGlzJHByb3BzOCA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgZm9ybWF0ID0gX3RoaXMkcHJvcHM4LmZvcm1hdCxcbiAgICAgICAgICBkZWNpbWFsU2NhbGUgPSBfdGhpcyRwcm9wczguZGVjaW1hbFNjYWxlLFxuICAgICAgICAgIGZpeGVkRGVjaW1hbFNjYWxlID0gX3RoaXMkcHJvcHM4LmZpeGVkRGVjaW1hbFNjYWxlLFxuICAgICAgICAgIGFsbG93RW1wdHlGb3JtYXR0aW5nID0gX3RoaXMkcHJvcHM4LmFsbG93RW1wdHlGb3JtYXR0aW5nO1xuICAgICAgdmFyIF90aGlzJHByb3BzOSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgX3RoaXMkcHJvcHM5JHZhbHVlID0gX3RoaXMkcHJvcHM5LnZhbHVlLFxuICAgICAgICAgIHZhbHVlID0gX3RoaXMkcHJvcHM5JHZhbHVlID09PSB2b2lkIDAgPyBkZWZhdWx0VmFsdWUgOiBfdGhpcyRwcm9wczkkdmFsdWUsXG4gICAgICAgICAgaXNOdW1lcmljU3RyaW5nID0gX3RoaXMkcHJvcHM5LmlzTnVtZXJpY1N0cmluZztcbiAgICAgIHZhciBpc05vbk51bWVyaWNGYWxzeSA9ICF2YWx1ZSAmJiB2YWx1ZSAhPT0gMDtcblxuICAgICAgaWYgKGlzTm9uTnVtZXJpY0ZhbHN5ICYmIGFsbG93RW1wdHlGb3JtYXR0aW5nKSB7XG4gICAgICAgIHZhbHVlID0gJyc7XG4gICAgICB9IC8vIGlmIHZhbHVlIGlzIG5vdCBkZWZpbmVkIHJldHVybiBlbXB0eSBzdHJpbmdcblxuXG4gICAgICBpZiAoaXNOb25OdW1lcmljRmFsc3kgJiYgIWFsbG93RW1wdHlGb3JtYXR0aW5nKSByZXR1cm4gJyc7XG5cbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgaXNOdW1lcmljU3RyaW5nID0gdHJ1ZTtcbiAgICAgIH0gLy9jaGFuZ2UgaW5maW5pdHkgdmFsdWUgdG8gZW1wdHkgc3RyaW5nXG5cblxuICAgICAgaWYgKHZhbHVlID09PSAnSW5maW5pdHknICYmIGlzTnVtZXJpY1N0cmluZykge1xuICAgICAgICB2YWx1ZSA9ICcnO1xuICAgICAgfSAvL3JvdW5kIHRoZSBudW1iZXIgYmFzZWQgb24gZGVjaW1hbFNjYWxlXG4gICAgICAvL2Zvcm1hdCBvbmx5IGlmIG5vbiBmb3JtYXR0ZWQgdmFsdWUgaXMgcHJvdmlkZWRcblxuXG4gICAgICBpZiAoaXNOdW1lcmljU3RyaW5nICYmICFmb3JtYXQgJiYgdHlwZW9mIGRlY2ltYWxTY2FsZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgdmFsdWUgPSByb3VuZFRvUHJlY2lzaW9uKHZhbHVlLCBkZWNpbWFsU2NhbGUsIGZpeGVkRGVjaW1hbFNjYWxlKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGZvcm1hdHRlZFZhbHVlID0gaXNOdW1lcmljU3RyaW5nID8gdGhpcy5mb3JtYXROdW1TdHJpbmcodmFsdWUpIDogdGhpcy5mb3JtYXRJbnB1dCh2YWx1ZSk7XG4gICAgICByZXR1cm4gZm9ybWF0dGVkVmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZvcm1hdE5lZ2F0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvcm1hdE5lZ2F0aW9uKCkge1xuICAgICAgdmFyIHZhbHVlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAnJztcbiAgICAgIHZhciBhbGxvd05lZ2F0aXZlID0gdGhpcy5wcm9wcy5hbGxvd05lZ2F0aXZlO1xuICAgICAgdmFyIG5lZ2F0aW9uUmVnZXggPSBuZXcgUmVnRXhwKCcoLSknKTtcbiAgICAgIHZhciBkb3VibGVOZWdhdGlvblJlZ2V4ID0gbmV3IFJlZ0V4cCgnKC0pKC4pKigtKScpOyAvLyBDaGVjayBudW1iZXIgaGFzICctJyB2YWx1ZVxuXG4gICAgICB2YXIgaGFzTmVnYXRpb24gPSBuZWdhdGlvblJlZ2V4LnRlc3QodmFsdWUpOyAvLyBDaGVjayBudW1iZXIgaGFzIDIgb3IgbW9yZSAnLScgdmFsdWVzXG5cbiAgICAgIHZhciByZW1vdmVOZWdhdGlvbiA9IGRvdWJsZU5lZ2F0aW9uUmVnZXgudGVzdCh2YWx1ZSk7IC8vcmVtb3ZlIG5lZ2F0aW9uXG5cbiAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvLS9nLCAnJyk7XG5cbiAgICAgIGlmIChoYXNOZWdhdGlvbiAmJiAhcmVtb3ZlTmVnYXRpb24gJiYgYWxsb3dOZWdhdGl2ZSkge1xuICAgICAgICB2YWx1ZSA9ICctJyArIHZhbHVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZvcm1hdElucHV0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvcm1hdElucHV0KCkge1xuICAgICAgdmFyIHZhbHVlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAnJztcbiAgICAgIHZhciBmb3JtYXQgPSB0aGlzLnByb3BzLmZvcm1hdDsgLy9mb3JtYXQgbmVnYXRpb24gb25seSBpZiB3ZSBhcmUgZm9ybWF0dGluZyBhcyBudW1iZXJcblxuICAgICAgaWYgKCFmb3JtYXQpIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLnJlbW92ZVByZWZpeEFuZFN1ZmZpeCh2YWx1ZSk7XG4gICAgICAgIHZhbHVlID0gdGhpcy5mb3JtYXROZWdhdGlvbih2YWx1ZSk7XG4gICAgICB9IC8vcmVtb3ZlIGZvcm1hdHRpbmcgZnJvbSBudW1iZXJcblxuXG4gICAgICB2YWx1ZSA9IHRoaXMucmVtb3ZlRm9ybWF0dGluZyh2YWx1ZSk7XG4gICAgICByZXR1cm4gdGhpcy5mb3JtYXROdW1TdHJpbmcodmFsdWUpO1xuICAgIH1cbiAgICAvKioqIGZvcm1hdCBzcGVjaWZpYyBtZXRob2RzIGVuZCAqKiovXG5cbiAgfSwge1xuICAgIGtleTogXCJpc0NoYXJhY3RlckFGb3JtYXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNDaGFyYWN0ZXJBRm9ybWF0KGNhcmV0UG9zLCB2YWx1ZSkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMTAgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGZvcm1hdCA9IF90aGlzJHByb3BzMTAuZm9ybWF0LFxuICAgICAgICAgIHByZWZpeCA9IF90aGlzJHByb3BzMTAucHJlZml4LFxuICAgICAgICAgIHN1ZmZpeCA9IF90aGlzJHByb3BzMTAuc3VmZml4LFxuICAgICAgICAgIGRlY2ltYWxTY2FsZSA9IF90aGlzJHByb3BzMTAuZGVjaW1hbFNjYWxlLFxuICAgICAgICAgIGZpeGVkRGVjaW1hbFNjYWxlID0gX3RoaXMkcHJvcHMxMC5maXhlZERlY2ltYWxTY2FsZTtcblxuICAgICAgdmFyIF90aGlzJGdldFNlcGFyYXRvcnM1ID0gdGhpcy5nZXRTZXBhcmF0b3JzKCksXG4gICAgICAgICAgZGVjaW1hbFNlcGFyYXRvciA9IF90aGlzJGdldFNlcGFyYXRvcnM1LmRlY2ltYWxTZXBhcmF0b3I7IC8vY2hlY2sgd2l0aGluIGZvcm1hdCBwYXR0ZXJuXG5cblxuICAgICAgaWYgKHR5cGVvZiBmb3JtYXQgPT09ICdzdHJpbmcnICYmIGZvcm1hdFtjYXJldFBvc10gIT09ICcjJykgcmV0dXJuIHRydWU7IC8vY2hlY2sgaW4gbnVtYmVyIGZvcm1hdFxuXG4gICAgICBpZiAoIWZvcm1hdCAmJiAoY2FyZXRQb3MgPCBwcmVmaXgubGVuZ3RoIHx8IGNhcmV0UG9zID49IHZhbHVlLmxlbmd0aCAtIHN1ZmZpeC5sZW5ndGggfHwgZGVjaW1hbFNjYWxlICYmIGZpeGVkRGVjaW1hbFNjYWxlICYmIHZhbHVlW2NhcmV0UG9zXSA9PT0gZGVjaW1hbFNlcGFyYXRvcikpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2hlY2tJZkZvcm1hdEdvdERlbGV0ZWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2hlY2tJZkZvcm1hdEdvdERlbGV0ZWQoc3RhcnQsIGVuZCwgdmFsdWUpIHtcbiAgICAgIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQ2hhcmFjdGVyQUZvcm1hdChpLCB2YWx1ZSkpIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoaXMgd2lsbCBjaGVjayBpZiBhbnkgZm9ybWF0dGluZyBnb3QgcmVtb3ZlZCBieSB0aGUgZGVsZXRlIG9yIGJhY2tzcGFjZSBhbmQgcmVzZXQgdGhlIHZhbHVlXG4gICAgICogSXQgd2lsbCBhbHNvIHdvcmsgYXMgZmFsbGJhY2sgaWYgYW5kcm9pZCBjaG9tZSBrZXlEb3duIGhhbmRsZXIgZG9lcyBub3Qgd29ya1xuICAgICAqKi9cblxuICB9LCB7XG4gICAga2V5OiBcImNvcnJlY3RJbnB1dFZhbHVlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvcnJlY3RJbnB1dFZhbHVlKGNhcmV0UG9zLCBsYXN0VmFsdWUsIHZhbHVlKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMxMSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgZm9ybWF0ID0gX3RoaXMkcHJvcHMxMS5mb3JtYXQsXG4gICAgICAgICAgYWxsb3dOZWdhdGl2ZSA9IF90aGlzJHByb3BzMTEuYWxsb3dOZWdhdGl2ZSxcbiAgICAgICAgICBwcmVmaXggPSBfdGhpcyRwcm9wczExLnByZWZpeCxcbiAgICAgICAgICBzdWZmaXggPSBfdGhpcyRwcm9wczExLnN1ZmZpeCxcbiAgICAgICAgICBkZWNpbWFsU2NhbGUgPSBfdGhpcyRwcm9wczExLmRlY2ltYWxTY2FsZTtcblxuICAgICAgdmFyIF90aGlzJGdldFNlcGFyYXRvcnM2ID0gdGhpcy5nZXRTZXBhcmF0b3JzKCksXG4gICAgICAgICAgYWxsb3dlZERlY2ltYWxTZXBhcmF0b3JzID0gX3RoaXMkZ2V0U2VwYXJhdG9yczYuYWxsb3dlZERlY2ltYWxTZXBhcmF0b3JzLFxuICAgICAgICAgIGRlY2ltYWxTZXBhcmF0b3IgPSBfdGhpcyRnZXRTZXBhcmF0b3JzNi5kZWNpbWFsU2VwYXJhdG9yO1xuXG4gICAgICB2YXIgbGFzdE51bVN0ciA9IHRoaXMuc3RhdGUubnVtQXNTdHJpbmcgfHwgJyc7XG4gICAgICB2YXIgX3RoaXMkc2VsZWN0aW9uQmVmb3JlID0gdGhpcy5zZWxlY3Rpb25CZWZvcmVJbnB1dCxcbiAgICAgICAgICBzZWxlY3Rpb25TdGFydCA9IF90aGlzJHNlbGVjdGlvbkJlZm9yZS5zZWxlY3Rpb25TdGFydCxcbiAgICAgICAgICBzZWxlY3Rpb25FbmQgPSBfdGhpcyRzZWxlY3Rpb25CZWZvcmUuc2VsZWN0aW9uRW5kO1xuXG4gICAgICB2YXIgX2ZpbmRDaGFuZ2VkSW5kZXggPSBmaW5kQ2hhbmdlZEluZGV4KGxhc3RWYWx1ZSwgdmFsdWUpLFxuICAgICAgICAgIHN0YXJ0ID0gX2ZpbmRDaGFuZ2VkSW5kZXguc3RhcnQsXG4gICAgICAgICAgZW5kID0gX2ZpbmRDaGFuZ2VkSW5kZXguZW5kO1xuICAgICAgLyoqIENoZWNrIGZvciBhbnkgYWxsb3dlZCBkZWNpbWFsIHNlcGFyYXRvciBpcyBhZGRlZCBpbiB0aGUgbnVtZXJpYyBmb3JtYXQgYW5kIHJlcGxhY2UgaXQgd2l0aCBkZWNpbWFsIHNlcGFyYXRvciAqL1xuXG5cbiAgICAgIGlmICghZm9ybWF0ICYmIHN0YXJ0ID09PSBlbmQgJiYgYWxsb3dlZERlY2ltYWxTZXBhcmF0b3JzLmluZGV4T2YodmFsdWVbc2VsZWN0aW9uU3RhcnRdKSAhPT0gLTEpIHtcbiAgICAgICAgdmFyIHNlcGFyYXRvciA9IGRlY2ltYWxTY2FsZSA9PT0gMCA/ICcnIDogZGVjaW1hbFNlcGFyYXRvcjtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnN1YnN0cigwLCBzZWxlY3Rpb25TdGFydCkgKyBzZXBhcmF0b3IgKyB2YWx1ZS5zdWJzdHIoc2VsZWN0aW9uU3RhcnQgKyAxLCB2YWx1ZS5sZW5ndGgpO1xuICAgICAgfVxuICAgICAgLyogZG9uJ3QgZG8gYW55aHRpbmcgaWYgc29tZXRoaW5nIGdvdCBhZGRlZCxcbiAgICAgICBvciBpZiB2YWx1ZSBpcyBlbXB0eSBzdHJpbmcgKHdoZW4gd2hvbGUgaW5wdXQgaXMgY2xlYXJlZClcbiAgICAgICBvciB3aG9sZSBpbnB1dCBpcyByZXBsYWNlIHdpdGggYSBudW1iZXJcbiAgICAgICovXG5cblxuICAgICAgdmFyIGxlZnRCb3VuZCA9ICEhZm9ybWF0ID8gMCA6IHByZWZpeC5sZW5ndGg7XG4gICAgICB2YXIgcmlnaHRCb3VuZCA9IGxhc3RWYWx1ZS5sZW5ndGggLSAoISFmb3JtYXQgPyAwIDogc3VmZml4Lmxlbmd0aCk7XG5cbiAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiBsYXN0VmFsdWUubGVuZ3RoIHx8ICF2YWx1ZS5sZW5ndGggfHwgc3RhcnQgPT09IGVuZCB8fCBzZWxlY3Rpb25TdGFydCA9PT0gMCAmJiBzZWxlY3Rpb25FbmQgPT09IGxhc3RWYWx1ZS5sZW5ndGggfHwgc2VsZWN0aW9uU3RhcnQgPT09IGxlZnRCb3VuZCAmJiBzZWxlY3Rpb25FbmQgPT09IHJpZ2h0Qm91bmQpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSAvL2lmIGZvcm1hdCBnb3QgZGVsZXRlZCByZXNldCB0aGUgdmFsdWUgdG8gbGFzdCB2YWx1ZVxuXG5cbiAgICAgIGlmICh0aGlzLmNoZWNrSWZGb3JtYXRHb3REZWxldGVkKHN0YXJ0LCBlbmQsIGxhc3RWYWx1ZSkpIHtcbiAgICAgICAgdmFsdWUgPSBsYXN0VmFsdWU7XG4gICAgICB9IC8vZm9yIG51bWJlcnMgY2hlY2sgaWYgYmVmb3JlRGVjaW1hbCBnb3QgZGVsZXRlZCBhbmQgdGhlcmUgaXMgbm90aGluZyBhZnRlciBkZWNpbWFsLFxuICAgICAgLy9jbGVhciBhbGwgbnVtYmVycyBpbiBzdWNoIGNhc2Ugd2hpbGUga2VlcGluZyB0aGUgLSBzaWduXG5cblxuICAgICAgaWYgKCFmb3JtYXQpIHtcbiAgICAgICAgdmFyIG51bWVyaWNTdHJpbmcgPSB0aGlzLnJlbW92ZUZvcm1hdHRpbmcodmFsdWUpO1xuXG4gICAgICAgIHZhciBfc3BsaXREZWNpbWFsMiA9IHNwbGl0RGVjaW1hbChudW1lcmljU3RyaW5nLCBhbGxvd05lZ2F0aXZlKSxcbiAgICAgICAgICAgIGJlZm9yZURlY2ltYWwgPSBfc3BsaXREZWNpbWFsMi5iZWZvcmVEZWNpbWFsLFxuICAgICAgICAgICAgYWZ0ZXJEZWNpbWFsID0gX3NwbGl0RGVjaW1hbDIuYWZ0ZXJEZWNpbWFsLFxuICAgICAgICAgICAgYWRkTmVnYXRpb24gPSBfc3BsaXREZWNpbWFsMi5hZGROZWdhdGlvbjsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBwcmVmZXItY29uc3RcbiAgICAgICAgLy9jbGVhciBvbmx5IGlmIHNvbWV0aGluZyBnb3QgZGVsZXRlZFxuXG5cbiAgICAgICAgdmFyIGlzQmVmb3JlRGVjaW1hbFBvaW50ID0gY2FyZXRQb3MgPCB2YWx1ZS5pbmRleE9mKGRlY2ltYWxTZXBhcmF0b3IpICsgMTtcblxuICAgICAgICBpZiAobnVtZXJpY1N0cmluZy5sZW5ndGggPCBsYXN0TnVtU3RyLmxlbmd0aCAmJiBpc0JlZm9yZURlY2ltYWxQb2ludCAmJiBiZWZvcmVEZWNpbWFsID09PSAnJyAmJiAhcGFyc2VGbG9hdChhZnRlckRlY2ltYWwpKSB7XG4gICAgICAgICAgcmV0dXJuIGFkZE5lZ2F0aW9uID8gJy0nIDogJyc7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICAvKiogVXBkYXRlIHZhbHVlIGFuZCBjYXJldCBwb3NpdGlvbiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidXBkYXRlVmFsdWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlVmFsdWUocGFyYW1zKSB7XG4gICAgICB2YXIgZm9ybWF0dGVkVmFsdWUgPSBwYXJhbXMuZm9ybWF0dGVkVmFsdWUsXG4gICAgICAgICAgaW5wdXQgPSBwYXJhbXMuaW5wdXQsXG4gICAgICAgICAgX3BhcmFtcyRzZXRDYXJldFBvc2l0ID0gcGFyYW1zLnNldENhcmV0UG9zaXRpb24sXG4gICAgICAgICAgc2V0Q2FyZXRQb3NpdGlvbiA9IF9wYXJhbXMkc2V0Q2FyZXRQb3NpdCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9wYXJhbXMkc2V0Q2FyZXRQb3NpdDtcbiAgICAgIHZhciBudW1Bc1N0cmluZyA9IHBhcmFtcy5udW1Bc1N0cmluZyxcbiAgICAgICAgICBjYXJldFBvcyA9IHBhcmFtcy5jYXJldFBvcztcbiAgICAgIHZhciBvblZhbHVlQ2hhbmdlID0gdGhpcy5wcm9wcy5vblZhbHVlQ2hhbmdlO1xuICAgICAgdmFyIGxhc3RWYWx1ZSA9IHRoaXMuc3RhdGUudmFsdWU7XG5cbiAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAvL3NldCBjYXJldCBwb3NpdGlvbiwgYW5kIHZhbHVlIGltcGVyYXRpdmVseSB3aGVuIGVsZW1lbnQgaXMgcHJvdmlkZWRcbiAgICAgICAgaWYgKHNldENhcmV0UG9zaXRpb24pIHtcbiAgICAgICAgICAvL2NhbGN1bGF0ZSBjYXJldCBwb3NpdGlvbiBpZiBub3QgZGVmaW5lZFxuICAgICAgICAgIGlmICghY2FyZXRQb3MpIHtcbiAgICAgICAgICAgIHZhciBpbnB1dFZhbHVlID0gcGFyYW1zLmlucHV0VmFsdWUgfHwgaW5wdXQudmFsdWU7XG4gICAgICAgICAgICB2YXIgY3VycmVudENhcmV0UG9zaXRpb24gPSBnZXRDdXJyZW50Q2FyZXRQb3NpdGlvbihpbnB1dCk7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIHNldCB0aGUgdmFsdWUgaW1wZXJhdGl2ZWx5LCB0aGlzIGlzIHJlcXVpcmVkIGZvciBJRSBmaXhcbiAgICAgICAgICAgICAqIFRoaXMgaXMgYWxzbyByZXF1aXJlZCBhcyBpZiBuZXcgY2FyZXQgcG9zaXRpb24gaXMgYmV5b25kIHRoZSBwcmV2aW91cyB2YWx1ZS5cbiAgICAgICAgICAgICAqIENhcmV0IHBvc2l0aW9uIHdpbGwgbm90IGJlIHNldCBjb3JyZWN0bHlcbiAgICAgICAgICAgICAqL1xuXG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGZvcm1hdHRlZFZhbHVlOyAvL2dldCB0aGUgY2FyZXQgcG9zaXRpb25cblxuICAgICAgICAgICAgY2FyZXRQb3MgPSB0aGlzLmdldENhcmV0UG9zaXRpb24oaW5wdXRWYWx1ZSwgZm9ybWF0dGVkVmFsdWUsIGN1cnJlbnRDYXJldFBvc2l0aW9uKTtcbiAgICAgICAgICB9IC8vc2V0IGNhcmV0IHBvc2l0aW9uXG5cblxuICAgICAgICAgIHRoaXMuc2V0UGF0Y2hlZENhcmV0UG9zaXRpb24oaW5wdXQsIGNhcmV0UG9zLCBmb3JtYXR0ZWRWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogaWYgd2UgYXJlIG5vdCBzZXR0aW5nIGNhcmV0IHBvc2l0aW9uIHNldCB0aGUgdmFsdWUgaW1wZXJhdGl2ZWx5LlxuICAgICAgICAgICAqIFRoaXMgaXMgcmVxdWlyZWQgb24gb25CbHVyIG1ldGhvZFxuICAgICAgICAgICAqL1xuICAgICAgICAgIGlucHV0LnZhbHVlID0gZm9ybWF0dGVkVmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0gLy9jYWxjdWxhdGUgbnVtZXJpYyBzdHJpbmcgaWYgbm90IHBhc3NlZFxuXG5cbiAgICAgIGlmIChudW1Bc1N0cmluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG51bUFzU3RyaW5nID0gdGhpcy5yZW1vdmVGb3JtYXR0aW5nKGZvcm1hdHRlZFZhbHVlKTtcbiAgICAgIH0gLy91cGRhdGUgc3RhdGUgaWYgdmFsdWUgaXMgY2hhbmdlZFxuXG5cbiAgICAgIGlmIChmb3JtYXR0ZWRWYWx1ZSAhPT0gbGFzdFZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHZhbHVlOiBmb3JtYXR0ZWRWYWx1ZSxcbiAgICAgICAgICBudW1Bc1N0cmluZzogbnVtQXNTdHJpbmdcbiAgICAgICAgfSk7IC8vIHRyaWdnZXIgb25WYWx1ZUNoYW5nZSBzeW5jaHJvbm91c2x5LCBzbyBwYXJlbnQgaXMgdXBkYXRlZCBhbG9uZyB3aXRoIHRoZSBudW1iZXIgZm9ybWF0LiBGaXggZm9yICMyNzcsICMyODdcblxuICAgICAgICBvblZhbHVlQ2hhbmdlKHRoaXMuZ2V0VmFsdWVPYmplY3QoZm9ybWF0dGVkVmFsdWUsIG51bUFzU3RyaW5nKSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uQ2hhbmdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2hhbmdlKGUpIHtcbiAgICAgIHZhciBlbCA9IGUudGFyZ2V0O1xuICAgICAgdmFyIGlucHV0VmFsdWUgPSBlbC52YWx1ZTtcbiAgICAgIHZhciBzdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIGlzQWxsb3dlZCA9IHByb3BzLmlzQWxsb3dlZDtcbiAgICAgIHZhciBsYXN0VmFsdWUgPSBzdGF0ZS52YWx1ZSB8fCAnJztcbiAgICAgIHZhciBjdXJyZW50Q2FyZXRQb3NpdGlvbiA9IGdldEN1cnJlbnRDYXJldFBvc2l0aW9uKGVsKTtcbiAgICAgIGlucHV0VmFsdWUgPSB0aGlzLmNvcnJlY3RJbnB1dFZhbHVlKGN1cnJlbnRDYXJldFBvc2l0aW9uLCBsYXN0VmFsdWUsIGlucHV0VmFsdWUpO1xuICAgICAgdmFyIGZvcm1hdHRlZFZhbHVlID0gdGhpcy5mb3JtYXRJbnB1dChpbnB1dFZhbHVlKSB8fCAnJztcbiAgICAgIHZhciBudW1Bc1N0cmluZyA9IHRoaXMucmVtb3ZlRm9ybWF0dGluZyhmb3JtYXR0ZWRWYWx1ZSk7XG4gICAgICB2YXIgdmFsdWVPYmogPSB0aGlzLmdldFZhbHVlT2JqZWN0KGZvcm1hdHRlZFZhbHVlLCBudW1Bc1N0cmluZyk7XG5cbiAgICAgIGlmICghaXNBbGxvd2VkKHZhbHVlT2JqKSkge1xuICAgICAgICBmb3JtYXR0ZWRWYWx1ZSA9IGxhc3RWYWx1ZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy51cGRhdGVWYWx1ZSh7XG4gICAgICAgIGZvcm1hdHRlZFZhbHVlOiBmb3JtYXR0ZWRWYWx1ZSxcbiAgICAgICAgbnVtQXNTdHJpbmc6IG51bUFzU3RyaW5nLFxuICAgICAgICBpbnB1dFZhbHVlOiBpbnB1dFZhbHVlLFxuICAgICAgICBpbnB1dDogZWxcbiAgICAgIH0pO1xuICAgICAgcHJvcHMub25DaGFuZ2UoZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uQmx1clwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkJsdXIoZSkge1xuICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBzdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgICB2YXIgZm9ybWF0ID0gcHJvcHMuZm9ybWF0LFxuICAgICAgICAgIG9uQmx1ciA9IHByb3BzLm9uQmx1cixcbiAgICAgICAgICBhbGxvd0xlYWRpbmdaZXJvcyA9IHByb3BzLmFsbG93TGVhZGluZ1plcm9zO1xuICAgICAgdmFyIG51bUFzU3RyaW5nID0gc3RhdGUubnVtQXNTdHJpbmc7XG4gICAgICB2YXIgbGFzdFZhbHVlID0gc3RhdGUudmFsdWU7XG4gICAgICB0aGlzLmZvY3VzZWRFbG0gPSBudWxsO1xuXG4gICAgICBpZiAodGhpcy5mb2N1c1RpbWVvdXQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZm9jdXNUaW1lb3V0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFmb3JtYXQpIHtcbiAgICAgICAgLy8gaWYgdGhlIG51bUFzU3RyaW5nIGlzIG5vdCBhIHZhbGlkIG51bWJlciByZXNldCBpdCB0byBlbXB0eVxuICAgICAgICBpZiAoaXNOYU4ocGFyc2VGbG9hdChudW1Bc1N0cmluZykpKSB7XG4gICAgICAgICAgbnVtQXNTdHJpbmcgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghYWxsb3dMZWFkaW5nWmVyb3MpIHtcbiAgICAgICAgICBudW1Bc1N0cmluZyA9IGZpeExlYWRpbmdaZXJvKG51bUFzU3RyaW5nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBmb3JtYXR0ZWRWYWx1ZSA9IHRoaXMuZm9ybWF0TnVtU3RyaW5nKG51bUFzU3RyaW5nKTsgLy9jaGFuZ2UgdGhlIHN0YXRlXG5cbiAgICAgICAgaWYgKGZvcm1hdHRlZFZhbHVlICE9PSBsYXN0VmFsdWUpIHtcbiAgICAgICAgICAvLyB0aGUgZXZlbnQgbmVlZHMgdG8gYmUgcGVyc2lzdGVkIGJlY2F1c2UgaXRzIHByb3BlcnRpZXMgY2FuIGJlIGFjY2Vzc2VkIGluIGFuIGFzeW5jaHJvbm91cyB3YXlcbiAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHtcbiAgICAgICAgICAgIGZvcm1hdHRlZFZhbHVlOiBmb3JtYXR0ZWRWYWx1ZSxcbiAgICAgICAgICAgIG51bUFzU3RyaW5nOiBudW1Bc1N0cmluZyxcbiAgICAgICAgICAgIGlucHV0OiBlLnRhcmdldCxcbiAgICAgICAgICAgIHNldENhcmV0UG9zaXRpb246IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgb25CbHVyKGUpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBvbkJsdXIoZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uS2V5RG93blwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbktleURvd24oZSkge1xuICAgICAgdmFyIGVsID0gZS50YXJnZXQ7XG4gICAgICB2YXIga2V5ID0gZS5rZXk7XG4gICAgICB2YXIgc2VsZWN0aW9uU3RhcnQgPSBlbC5zZWxlY3Rpb25TdGFydCxcbiAgICAgICAgICBzZWxlY3Rpb25FbmQgPSBlbC5zZWxlY3Rpb25FbmQsXG4gICAgICAgICAgX2VsJHZhbHVlID0gZWwudmFsdWUsXG4gICAgICAgICAgdmFsdWUgPSBfZWwkdmFsdWUgPT09IHZvaWQgMCA/ICcnIDogX2VsJHZhbHVlO1xuICAgICAgdmFyIGV4cGVjdGVkQ2FyZXRQb3NpdGlvbjtcbiAgICAgIHZhciBfdGhpcyRwcm9wczEyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBkZWNpbWFsU2NhbGUgPSBfdGhpcyRwcm9wczEyLmRlY2ltYWxTY2FsZSxcbiAgICAgICAgICBmaXhlZERlY2ltYWxTY2FsZSA9IF90aGlzJHByb3BzMTIuZml4ZWREZWNpbWFsU2NhbGUsXG4gICAgICAgICAgcHJlZml4ID0gX3RoaXMkcHJvcHMxMi5wcmVmaXgsXG4gICAgICAgICAgc3VmZml4ID0gX3RoaXMkcHJvcHMxMi5zdWZmaXgsXG4gICAgICAgICAgZm9ybWF0ID0gX3RoaXMkcHJvcHMxMi5mb3JtYXQsXG4gICAgICAgICAgb25LZXlEb3duID0gX3RoaXMkcHJvcHMxMi5vbktleURvd247XG4gICAgICB2YXIgaWdub3JlRGVjaW1hbFNlcGFyYXRvciA9IGRlY2ltYWxTY2FsZSAhPT0gdW5kZWZpbmVkICYmIGZpeGVkRGVjaW1hbFNjYWxlO1xuICAgICAgdmFyIG51bVJlZ2V4ID0gdGhpcy5nZXROdW1iZXJSZWdleChmYWxzZSwgaWdub3JlRGVjaW1hbFNlcGFyYXRvcik7XG4gICAgICB2YXIgbmVnYXRpdmVSZWdleCA9IG5ldyBSZWdFeHAoJy0nKTtcbiAgICAgIHZhciBpc1BhdHRlcm5Gb3JtYXQgPSB0eXBlb2YgZm9ybWF0ID09PSAnc3RyaW5nJztcbiAgICAgIHRoaXMuc2VsZWN0aW9uQmVmb3JlSW5wdXQgPSB7XG4gICAgICAgIHNlbGVjdGlvblN0YXJ0OiBzZWxlY3Rpb25TdGFydCxcbiAgICAgICAgc2VsZWN0aW9uRW5kOiBzZWxlY3Rpb25FbmRcbiAgICAgIH07IC8vSGFuZGxlIGJhY2tzcGFjZSBhbmQgZGVsZXRlIGFnYWluc3Qgbm9uIG51bWVyaWNhbC9kZWNpbWFsIGNoYXJhY3RlcnMgb3IgYXJyb3cga2V5c1xuXG4gICAgICBpZiAoa2V5ID09PSAnQXJyb3dMZWZ0JyB8fCBrZXkgPT09ICdCYWNrc3BhY2UnKSB7XG4gICAgICAgIGV4cGVjdGVkQ2FyZXRQb3NpdGlvbiA9IHNlbGVjdGlvblN0YXJ0IC0gMTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnQXJyb3dSaWdodCcpIHtcbiAgICAgICAgZXhwZWN0ZWRDYXJldFBvc2l0aW9uID0gc2VsZWN0aW9uU3RhcnQgKyAxO1xuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdEZWxldGUnKSB7XG4gICAgICAgIGV4cGVjdGVkQ2FyZXRQb3NpdGlvbiA9IHNlbGVjdGlvblN0YXJ0O1xuICAgICAgfSAvL2lmIGV4cGVjdGVkQ2FyZXRQb3NpdGlvbiBpcyBub3Qgc2V0IGl0IG1lYW5zIHdlIGRvbid0IHdhbnQgdG8gSGFuZGxlIGtleURvd25cbiAgICAgIC8vYWxzbyBpZiBtdWx0aXBsZSBjaGFyYWN0ZXJzIGFyZSBzZWxlY3RlZCBkb24ndCBoYW5kbGVcblxuXG4gICAgICBpZiAoZXhwZWN0ZWRDYXJldFBvc2l0aW9uID09PSB1bmRlZmluZWQgfHwgc2VsZWN0aW9uU3RhcnQgIT09IHNlbGVjdGlvbkVuZCkge1xuICAgICAgICBvbktleURvd24oZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIG5ld0NhcmV0UG9zaXRpb24gPSBleHBlY3RlZENhcmV0UG9zaXRpb247XG4gICAgICB2YXIgbGVmdEJvdW5kID0gaXNQYXR0ZXJuRm9ybWF0ID8gZm9ybWF0LmluZGV4T2YoJyMnKSA6IHByZWZpeC5sZW5ndGg7XG4gICAgICB2YXIgcmlnaHRCb3VuZCA9IGlzUGF0dGVybkZvcm1hdCA/IGZvcm1hdC5sYXN0SW5kZXhPZignIycpICsgMSA6IHZhbHVlLmxlbmd0aCAtIHN1ZmZpeC5sZW5ndGg7XG5cbiAgICAgIGlmIChrZXkgPT09ICdBcnJvd0xlZnQnIHx8IGtleSA9PT0gJ0Fycm93UmlnaHQnKSB7XG4gICAgICAgIHZhciBkaXJlY3Rpb24gPSBrZXkgPT09ICdBcnJvd0xlZnQnID8gJ2xlZnQnIDogJ3JpZ2h0JztcbiAgICAgICAgbmV3Q2FyZXRQb3NpdGlvbiA9IHRoaXMuY29ycmVjdENhcmV0UG9zaXRpb24odmFsdWUsIGV4cGVjdGVkQ2FyZXRQb3NpdGlvbiwgZGlyZWN0aW9uKTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnRGVsZXRlJyAmJiAhbnVtUmVnZXgudGVzdCh2YWx1ZVtleHBlY3RlZENhcmV0UG9zaXRpb25dKSAmJiAhbmVnYXRpdmVSZWdleC50ZXN0KHZhbHVlW2V4cGVjdGVkQ2FyZXRQb3NpdGlvbl0pKSB7XG4gICAgICAgIHdoaWxlICghbnVtUmVnZXgudGVzdCh2YWx1ZVtuZXdDYXJldFBvc2l0aW9uXSkgJiYgbmV3Q2FyZXRQb3NpdGlvbiA8IHJpZ2h0Qm91bmQpIHtcbiAgICAgICAgICBuZXdDYXJldFBvc2l0aW9uKys7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnQmFja3NwYWNlJyAmJiAhbnVtUmVnZXgudGVzdCh2YWx1ZVtleHBlY3RlZENhcmV0UG9zaXRpb25dKSkge1xuICAgICAgICAvKiBOT1RFOiBUaGlzIGlzIHNwZWNpYWwgY2FzZSB3aGVuIGJhY2tzcGFjZSBpcyBwcmVzc2VkIG9uIGFcbiAgICAgICAgbmVnYXRpdmUgdmFsdWUgd2hpbGUgdGhlIGN1cnNvciBwb3NpdGlvbiBpcyBhZnRlciBwcmVmaXguIFdlIGNhbid0IGhhbmRsZSBpdCBvbiBvbkNoYW5nZSBiZWNhdXNlXG4gICAgICAgIHdlIHdpbGwgbm90IGhhdmUgYW55IGluZm9ybWF0aW9uIG9mIGtleVByZXNzXG4gICAgICAgICovXG4gICAgICAgIGlmIChzZWxlY3Rpb25TdGFydCA8PSBsZWZ0Qm91bmQgKyAxICYmIHZhbHVlWzBdID09PSAnLScgJiYgdHlwZW9mIGZvcm1hdCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB2YXIgbmV3VmFsdWUgPSB2YWx1ZS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSh7XG4gICAgICAgICAgICBmb3JtYXR0ZWRWYWx1ZTogbmV3VmFsdWUsXG4gICAgICAgICAgICBjYXJldFBvczogbmV3Q2FyZXRQb3NpdGlvbixcbiAgICAgICAgICAgIGlucHV0OiBlbFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKCFuZWdhdGl2ZVJlZ2V4LnRlc3QodmFsdWVbZXhwZWN0ZWRDYXJldFBvc2l0aW9uXSkpIHtcbiAgICAgICAgICB3aGlsZSAoIW51bVJlZ2V4LnRlc3QodmFsdWVbbmV3Q2FyZXRQb3NpdGlvbiAtIDFdKSAmJiBuZXdDYXJldFBvc2l0aW9uID4gbGVmdEJvdW5kKSB7XG4gICAgICAgICAgICBuZXdDYXJldFBvc2l0aW9uLS07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV3Q2FyZXRQb3NpdGlvbiA9IHRoaXMuY29ycmVjdENhcmV0UG9zaXRpb24odmFsdWUsIG5ld0NhcmV0UG9zaXRpb24sICdsZWZ0Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG5ld0NhcmV0UG9zaXRpb24gIT09IGV4cGVjdGVkQ2FyZXRQb3NpdGlvbiB8fCBleHBlY3RlZENhcmV0UG9zaXRpb24gPCBsZWZ0Qm91bmQgfHwgZXhwZWN0ZWRDYXJldFBvc2l0aW9uID4gcmlnaHRCb3VuZCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2V0UGF0Y2hlZENhcmV0UG9zaXRpb24oZWwsIG5ld0NhcmV0UG9zaXRpb24sIHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIC8qIE5PVEU6IHRoaXMgaXMganVzdCByZXF1aXJlZCBmb3IgdW5pdCB0ZXN0IGFzIHdlIG5lZWQgdG8gZ2V0IHRoZSBuZXdDYXJldFBvc2l0aW9uLFxuICAgICAgICAgICAgICBSZW1vdmUgdGhpcyB3aGVuIHlvdSBmaW5kIGRpZmZlcmVudCBzb2x1dGlvbiAqL1xuXG5cbiAgICAgIGlmIChlLmlzVW5pdFRlc3RSdW4pIHtcbiAgICAgICAgdGhpcy5zZXRQYXRjaGVkQ2FyZXRQb3NpdGlvbihlbCwgbmV3Q2FyZXRQb3NpdGlvbiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBvbktleURvd24oZSk7XG4gICAgfVxuICAgIC8qKiByZXF1aXJlZCB0byBoYW5kbGUgdGhlIGNhcmV0IHBvc2l0aW9uIHdoZW4gY2xpY2sgYW55d2hlcmUgd2l0aGluIHRoZSBpbnB1dCAqKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm9uTW91c2VVcFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbk1vdXNlVXAoZSkge1xuICAgICAgdmFyIGVsID0gZS50YXJnZXQ7XG4gICAgICAvKipcbiAgICAgICAqIE5PVEU6IHdlIGhhdmUgdG8gZ2l2ZSBkZWZhdWx0IHZhbHVlIGZvciB2YWx1ZSBhcyBpbiBjYXNlIHdoZW4gY3VzdG9tIGlucHV0IGlzIHByb3ZpZGVkXG4gICAgICAgKiB2YWx1ZSBjYW4gY29tZSBhcyB1bmRlZmluZWQgd2hlbiBub3RoaW5nIGlzIHByb3ZpZGVkIG9uIHZhbHVlIHByb3AuXG4gICAgICAqL1xuXG4gICAgICB2YXIgc2VsZWN0aW9uU3RhcnQgPSBlbC5zZWxlY3Rpb25TdGFydCxcbiAgICAgICAgICBzZWxlY3Rpb25FbmQgPSBlbC5zZWxlY3Rpb25FbmQsXG4gICAgICAgICAgX2VsJHZhbHVlMiA9IGVsLnZhbHVlLFxuICAgICAgICAgIHZhbHVlID0gX2VsJHZhbHVlMiA9PT0gdm9pZCAwID8gJycgOiBfZWwkdmFsdWUyO1xuXG4gICAgICBpZiAoc2VsZWN0aW9uU3RhcnQgPT09IHNlbGVjdGlvbkVuZCkge1xuICAgICAgICB2YXIgY2FyZXRQb3NpdGlvbiA9IHRoaXMuY29ycmVjdENhcmV0UG9zaXRpb24odmFsdWUsIHNlbGVjdGlvblN0YXJ0KTtcblxuICAgICAgICBpZiAoY2FyZXRQb3NpdGlvbiAhPT0gc2VsZWN0aW9uU3RhcnQpIHtcbiAgICAgICAgICB0aGlzLnNldFBhdGNoZWRDYXJldFBvc2l0aW9uKGVsLCBjYXJldFBvc2l0aW9uLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5wcm9wcy5vbk1vdXNlVXAoZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uRm9jdXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25Gb2N1cyhlKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgLy8gV29ya2Fyb3VuZCBDaHJvbWUgYW5kIFNhZmFyaSBidWcgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9Nzc5MzI4XG4gICAgICAvLyAob25Gb2N1cyBldmVudCB0YXJnZXQgc2VsZWN0aW9uU3RhcnQgaXMgYWx3YXlzIDAgYmVmb3JlIHNldFRpbWVvdXQpXG4gICAgICBlLnBlcnNpc3QoKTtcbiAgICAgIHRoaXMuZm9jdXNlZEVsbSA9IGUudGFyZ2V0O1xuICAgICAgdGhpcy5mb2N1c1RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVsID0gZS50YXJnZXQ7XG4gICAgICAgIHZhciBzZWxlY3Rpb25TdGFydCA9IGVsLnNlbGVjdGlvblN0YXJ0LFxuICAgICAgICAgICAgc2VsZWN0aW9uRW5kID0gZWwuc2VsZWN0aW9uRW5kLFxuICAgICAgICAgICAgX2VsJHZhbHVlMyA9IGVsLnZhbHVlLFxuICAgICAgICAgICAgdmFsdWUgPSBfZWwkdmFsdWUzID09PSB2b2lkIDAgPyAnJyA6IF9lbCR2YWx1ZTM7XG5cbiAgICAgICAgdmFyIGNhcmV0UG9zaXRpb24gPSBfdGhpczIuY29ycmVjdENhcmV0UG9zaXRpb24odmFsdWUsIHNlbGVjdGlvblN0YXJ0KTsgLy9zZXRQYXRjaGVkQ2FyZXRQb3NpdGlvbiBvbmx5IHdoZW4gZXZlcnl0aGluZyBpcyBub3Qgc2VsZWN0ZWQgb24gZm9jdXMgKHdoaWxlIHRhYmJpbmcgaW50byB0aGUgZmllbGQpXG5cblxuICAgICAgICBpZiAoY2FyZXRQb3NpdGlvbiAhPT0gc2VsZWN0aW9uU3RhcnQgJiYgIShzZWxlY3Rpb25TdGFydCA9PT0gMCAmJiBzZWxlY3Rpb25FbmQgPT09IHZhbHVlLmxlbmd0aCkpIHtcbiAgICAgICAgICBfdGhpczIuc2V0UGF0Y2hlZENhcmV0UG9zaXRpb24oZWwsIGNhcmV0UG9zaXRpb24sIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzMi5wcm9wcy5vbkZvY3VzKGUpO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMxMyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgdHlwZSA9IF90aGlzJHByb3BzMTMudHlwZSxcbiAgICAgICAgICBkaXNwbGF5VHlwZSA9IF90aGlzJHByb3BzMTMuZGlzcGxheVR5cGUsXG4gICAgICAgICAgY3VzdG9tSW5wdXQgPSBfdGhpcyRwcm9wczEzLmN1c3RvbUlucHV0LFxuICAgICAgICAgIHJlbmRlclRleHQgPSBfdGhpcyRwcm9wczEzLnJlbmRlclRleHQsXG4gICAgICAgICAgZ2V0SW5wdXRSZWYgPSBfdGhpcyRwcm9wczEzLmdldElucHV0UmVmO1xuICAgICAgdmFyIHZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZTtcbiAgICAgIHZhciBvdGhlclByb3BzID0gb21pdCh0aGlzLnByb3BzLCBwcm9wVHlwZXMkMSk7XG5cbiAgICAgIHZhciBpbnB1dFByb3BzID0gX2V4dGVuZHMoe1xuICAgICAgICBpbnB1dE1vZGU6ICdudW1lcmljJ1xuICAgICAgfSwgb3RoZXJQcm9wcywge1xuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uQ2hhbmdlLFxuICAgICAgICBvbktleURvd246IHRoaXMub25LZXlEb3duLFxuICAgICAgICBvbk1vdXNlVXA6IHRoaXMub25Nb3VzZVVwLFxuICAgICAgICBvbkZvY3VzOiB0aGlzLm9uRm9jdXMsXG4gICAgICAgIG9uQmx1cjogdGhpcy5vbkJsdXJcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZGlzcGxheVR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgICByZXR1cm4gcmVuZGVyVGV4dCA/IHJlbmRlclRleHQodmFsdWUpIHx8IG51bGwgOiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBfZXh0ZW5kcyh7fSwgb3RoZXJQcm9wcywge1xuICAgICAgICAgIHJlZjogZ2V0SW5wdXRSZWZcbiAgICAgICAgfSksIHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoY3VzdG9tSW5wdXQpIHtcbiAgICAgICAgdmFyIEN1c3RvbUlucHV0ID0gY3VzdG9tSW5wdXQ7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEN1c3RvbUlucHV0LCBfZXh0ZW5kcyh7fSwgaW5wdXRQcm9wcywge1xuICAgICAgICAgIHJlZjogZ2V0SW5wdXRSZWZcbiAgICAgICAgfSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIF9leHRlbmRzKHt9LCBpbnB1dFByb3BzLCB7XG4gICAgICAgIHJlZjogZ2V0SW5wdXRSZWZcbiAgICAgIH0pKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTnVtYmVyRm9ybWF0O1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5OdW1iZXJGb3JtYXQucHJvcFR5cGVzID0gcHJvcFR5cGVzJDE7XG5OdW1iZXJGb3JtYXQuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJGb3JtYXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9