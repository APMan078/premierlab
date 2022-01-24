(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/react-fast-compare/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-fast-compare/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;
var hasElementType = typeof Element !== 'undefined';

function equal(a, b) {
  // fast-deep-equal index.js 2.0.1
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    var arrA = isArray(a)
      , arrB = isArray(b)
      , i
      , length
      , key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    if (arrA != arrB) return false;

    var dateA = a instanceof Date
      , dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();

    var regexpA = a instanceof RegExp
      , regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();

    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length)
      return false;

    for (i = length; i-- !== 0;)
      if (!hasProp.call(b, keys[i])) return false;
    // end fast-deep-equal

    // start react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element && b instanceof Element)
      return a === b;

    // custom handling for React
    for (i = length; i-- !== 0;) {
      key = keys[i];
      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of a react element
        continue;
      } else {
        // all other properties should be traversed as usual
        if (!equal(a[key], b[key])) return false;
      }
    }
    // end react-fast-compare

    // fast-deep-equal index.js 2.0.1
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

module.exports = function exportedEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if ((error.message && error.message.match(/stack|recursion/i)) || (error.number === -2146828260)) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('Warning: react-fast-compare does not handle circular references.', error.name, error.message);
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};


/***/ }),

/***/ "./node_modules/react-helmet/lib/Helmet.js":
/*!*************************************************!*\
  !*** ./node_modules/react-helmet/lib/Helmet.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.__esModule = true;
exports.Helmet = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSideEffect = __webpack_require__(/*! react-side-effect */ "./node_modules/react-side-effect/lib/index.js");

var _reactSideEffect2 = _interopRequireDefault(_reactSideEffect);

var _reactFastCompare = __webpack_require__(/*! react-fast-compare */ "./node_modules/react-fast-compare/index.js");

var _reactFastCompare2 = _interopRequireDefault(_reactFastCompare);

var _HelmetUtils = __webpack_require__(/*! ./HelmetUtils.js */ "./node_modules/react-helmet/lib/HelmetUtils.js");

var _HelmetConstants = __webpack_require__(/*! ./HelmetConstants.js */ "./node_modules/react-helmet/lib/HelmetConstants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Helmet = function Helmet(Component) {
    var _class, _temp;

    return _temp = _class = function (_React$Component) {
        _inherits(HelmetWrapper, _React$Component);

        function HelmetWrapper() {
            _classCallCheck(this, HelmetWrapper);

            return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
        }

        HelmetWrapper.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
            return !(0, _reactFastCompare2.default)(this.props, nextProps);
        };

        HelmetWrapper.prototype.mapNestedChildrenToProps = function mapNestedChildrenToProps(child, nestedChildren) {
            if (!nestedChildren) {
                return null;
            }

            switch (child.type) {
                case _HelmetConstants.TAG_NAMES.SCRIPT:
                case _HelmetConstants.TAG_NAMES.NOSCRIPT:
                    return {
                        innerHTML: nestedChildren
                    };

                case _HelmetConstants.TAG_NAMES.STYLE:
                    return {
                        cssText: nestedChildren
                    };
            }

            throw new Error("<" + child.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
        };

        HelmetWrapper.prototype.flattenArrayTypeChildren = function flattenArrayTypeChildren(_ref) {
            var _extends2;

            var child = _ref.child,
                arrayTypeChildren = _ref.arrayTypeChildren,
                newChildProps = _ref.newChildProps,
                nestedChildren = _ref.nestedChildren;

            return _extends({}, arrayTypeChildren, (_extends2 = {}, _extends2[child.type] = [].concat(arrayTypeChildren[child.type] || [], [_extends({}, newChildProps, this.mapNestedChildrenToProps(child, nestedChildren))]), _extends2));
        };

        HelmetWrapper.prototype.mapObjectTypeChildren = function mapObjectTypeChildren(_ref2) {
            var _extends3, _extends4;

            var child = _ref2.child,
                newProps = _ref2.newProps,
                newChildProps = _ref2.newChildProps,
                nestedChildren = _ref2.nestedChildren;

            switch (child.type) {
                case _HelmetConstants.TAG_NAMES.TITLE:
                    return _extends({}, newProps, (_extends3 = {}, _extends3[child.type] = nestedChildren, _extends3.titleAttributes = _extends({}, newChildProps), _extends3));

                case _HelmetConstants.TAG_NAMES.BODY:
                    return _extends({}, newProps, {
                        bodyAttributes: _extends({}, newChildProps)
                    });

                case _HelmetConstants.TAG_NAMES.HTML:
                    return _extends({}, newProps, {
                        htmlAttributes: _extends({}, newChildProps)
                    });
            }

            return _extends({}, newProps, (_extends4 = {}, _extends4[child.type] = _extends({}, newChildProps), _extends4));
        };

        HelmetWrapper.prototype.mapArrayTypeChildrenToProps = function mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
            var newFlattenedProps = _extends({}, newProps);

            Object.keys(arrayTypeChildren).forEach(function (arrayChildName) {
                var _extends5;

                newFlattenedProps = _extends({}, newFlattenedProps, (_extends5 = {}, _extends5[arrayChildName] = arrayTypeChildren[arrayChildName], _extends5));
            });

            return newFlattenedProps;
        };

        HelmetWrapper.prototype.warnOnInvalidChildren = function warnOnInvalidChildren(child, nestedChildren) {
            if (true) {
                if (!_HelmetConstants.VALID_TAG_NAMES.some(function (name) {
                    return child.type === name;
                })) {
                    if (typeof child.type === "function") {
                        return (0, _HelmetUtils.warn)("You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.");
                    }

                    return (0, _HelmetUtils.warn)("Only elements types " + _HelmetConstants.VALID_TAG_NAMES.join(", ") + " are allowed. Helmet does not support rendering <" + child.type + "> elements. Refer to our API for more information.");
                }

                if (nestedChildren && typeof nestedChildren !== "string" && (!Array.isArray(nestedChildren) || nestedChildren.some(function (nestedChild) {
                    return typeof nestedChild !== "string";
                }))) {
                    throw new Error("Helmet expects a string as a child of <" + child.type + ">. Did you forget to wrap your children in braces? ( <" + child.type + ">{``}</" + child.type + "> ) Refer to our API for more information.");
                }
            }

            return true;
        };

        HelmetWrapper.prototype.mapChildrenToProps = function mapChildrenToProps(children, newProps) {
            var _this2 = this;

            var arrayTypeChildren = {};

            _react2.default.Children.forEach(children, function (child) {
                if (!child || !child.props) {
                    return;
                }

                var _child$props = child.props,
                    nestedChildren = _child$props.children,
                    childProps = _objectWithoutProperties(_child$props, ["children"]);

                var newChildProps = (0, _HelmetUtils.convertReactPropstoHtmlAttributes)(childProps);

                _this2.warnOnInvalidChildren(child, nestedChildren);

                switch (child.type) {
                    case _HelmetConstants.TAG_NAMES.LINK:
                    case _HelmetConstants.TAG_NAMES.META:
                    case _HelmetConstants.TAG_NAMES.NOSCRIPT:
                    case _HelmetConstants.TAG_NAMES.SCRIPT:
                    case _HelmetConstants.TAG_NAMES.STYLE:
                        arrayTypeChildren = _this2.flattenArrayTypeChildren({
                            child: child,
                            arrayTypeChildren: arrayTypeChildren,
                            newChildProps: newChildProps,
                            nestedChildren: nestedChildren
                        });
                        break;

                    default:
                        newProps = _this2.mapObjectTypeChildren({
                            child: child,
                            newProps: newProps,
                            newChildProps: newChildProps,
                            nestedChildren: nestedChildren
                        });
                        break;
                }
            });

            newProps = this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
            return newProps;
        };

        HelmetWrapper.prototype.render = function render() {
            var _props = this.props,
                children = _props.children,
                props = _objectWithoutProperties(_props, ["children"]);

            var newProps = _extends({}, props);

            if (children) {
                newProps = this.mapChildrenToProps(children, newProps);
            }

            return _react2.default.createElement(Component, newProps);
        };

        _createClass(HelmetWrapper, null, [{
            key: "canUseDOM",


            // Component.peek comes from react-side-effect:
            // For testing, you may use a static peek() method available on the returned component.
            // It lets you get the current state without resetting the mounted instance stack.
            // Don’t use it for anything other than testing.

            /**
             * @param {Object} base: {"target": "_blank", "href": "http://mysite.com/"}
             * @param {Object} bodyAttributes: {"className": "root"}
             * @param {String} defaultTitle: "Default Title"
             * @param {Boolean} defer: true
             * @param {Boolean} encodeSpecialCharacters: true
             * @param {Object} htmlAttributes: {"lang": "en", "amp": undefined}
             * @param {Array} link: [{"rel": "canonical", "href": "http://mysite.com/example"}]
             * @param {Array} meta: [{"name": "description", "content": "Test description"}]
             * @param {Array} noscript: [{"innerHTML": "<img src='http://mysite.com/js/test.js'"}]
             * @param {Function} onChangeClientState: "(newState) => console.log(newState)"
             * @param {Array} script: [{"type": "text/javascript", "src": "http://mysite.com/js/test.js"}]
             * @param {Array} style: [{"type": "text/css", "cssText": "div { display: block; color: blue; }"}]
             * @param {String} title: "Title"
             * @param {Object} titleAttributes: {"itemprop": "name"}
             * @param {String} titleTemplate: "MySite.com - %s"
             */
            set: function set(canUseDOM) {
                Component.canUseDOM = canUseDOM;
            }
        }]);

        return HelmetWrapper;
    }(_react2.default.Component), _class.propTypes = {
        base: _propTypes2.default.object,
        bodyAttributes: _propTypes2.default.object,
        children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
        defaultTitle: _propTypes2.default.string,
        defer: _propTypes2.default.bool,
        encodeSpecialCharacters: _propTypes2.default.bool,
        htmlAttributes: _propTypes2.default.object,
        link: _propTypes2.default.arrayOf(_propTypes2.default.object),
        meta: _propTypes2.default.arrayOf(_propTypes2.default.object),
        noscript: _propTypes2.default.arrayOf(_propTypes2.default.object),
        onChangeClientState: _propTypes2.default.func,
        script: _propTypes2.default.arrayOf(_propTypes2.default.object),
        style: _propTypes2.default.arrayOf(_propTypes2.default.object),
        title: _propTypes2.default.string,
        titleAttributes: _propTypes2.default.object,
        titleTemplate: _propTypes2.default.string
    }, _class.defaultProps = {
        defer: true,
        encodeSpecialCharacters: true
    }, _class.peek = Component.peek, _class.rewind = function () {
        var mappedState = Component.rewind();
        if (!mappedState) {
            // provide fallback if mappedState is undefined
            mappedState = (0, _HelmetUtils.mapStateOnServer)({
                baseTag: [],
                bodyAttributes: {},
                encodeSpecialCharacters: true,
                htmlAttributes: {},
                linkTags: [],
                metaTags: [],
                noscriptTags: [],
                scriptTags: [],
                styleTags: [],
                title: "",
                titleAttributes: {}
            });
        }

        return mappedState;
    }, _temp;
};

var NullComponent = function NullComponent() {
    return null;
};

var HelmetSideEffects = (0, _reactSideEffect2.default)(_HelmetUtils.reducePropsToState, _HelmetUtils.handleClientStateChange, _HelmetUtils.mapStateOnServer)(NullComponent);

var HelmetExport = Helmet(HelmetSideEffects);
HelmetExport.renderStatic = HelmetExport.rewind;

exports.Helmet = HelmetExport;
exports.default = HelmetExport;

/***/ }),

/***/ "./node_modules/react-helmet/lib/HelmetConstants.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-helmet/lib/HelmetConstants.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.__esModule = true;
var ATTRIBUTE_NAMES = exports.ATTRIBUTE_NAMES = {
    BODY: "bodyAttributes",
    HTML: "htmlAttributes",
    TITLE: "titleAttributes"
};

var TAG_NAMES = exports.TAG_NAMES = {
    BASE: "base",
    BODY: "body",
    HEAD: "head",
    HTML: "html",
    LINK: "link",
    META: "meta",
    NOSCRIPT: "noscript",
    SCRIPT: "script",
    STYLE: "style",
    TITLE: "title"
};

var VALID_TAG_NAMES = exports.VALID_TAG_NAMES = Object.keys(TAG_NAMES).map(function (name) {
    return TAG_NAMES[name];
});

var TAG_PROPERTIES = exports.TAG_PROPERTIES = {
    CHARSET: "charset",
    CSS_TEXT: "cssText",
    HREF: "href",
    HTTPEQUIV: "http-equiv",
    INNER_HTML: "innerHTML",
    ITEM_PROP: "itemprop",
    NAME: "name",
    PROPERTY: "property",
    REL: "rel",
    SRC: "src"
};

var REACT_TAG_MAP = exports.REACT_TAG_MAP = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex"
};

var HELMET_PROPS = exports.HELMET_PROPS = {
    DEFAULT_TITLE: "defaultTitle",
    DEFER: "defer",
    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
    TITLE_TEMPLATE: "titleTemplate"
};

var HTML_TAG_MAP = exports.HTML_TAG_MAP = Object.keys(REACT_TAG_MAP).reduce(function (obj, key) {
    obj[REACT_TAG_MAP[key]] = key;
    return obj;
}, {});

var SELF_CLOSING_TAGS = exports.SELF_CLOSING_TAGS = [TAG_NAMES.NOSCRIPT, TAG_NAMES.SCRIPT, TAG_NAMES.STYLE];

var HELMET_ATTRIBUTE = exports.HELMET_ATTRIBUTE = "data-react-helmet";

/***/ }),

/***/ "./node_modules/react-helmet/lib/HelmetUtils.js":
/*!******************************************************!*\
  !*** ./node_modules/react-helmet/lib/HelmetUtils.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports.__esModule = true;
exports.warn = exports.requestAnimationFrame = exports.reducePropsToState = exports.mapStateOnServer = exports.handleClientStateChange = exports.convertReactPropstoHtmlAttributes = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _HelmetConstants = __webpack_require__(/*! ./HelmetConstants.js */ "./node_modules/react-helmet/lib/HelmetConstants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var encodeSpecialCharacters = function encodeSpecialCharacters(str) {
    var encode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (encode === false) {
        return String(str);
    }

    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
};

var getTitleFromPropsList = function getTitleFromPropsList(propsList) {
    var innermostTitle = getInnermostProperty(propsList, _HelmetConstants.TAG_NAMES.TITLE);
    var innermostTemplate = getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.TITLE_TEMPLATE);

    if (innermostTemplate && innermostTitle) {
        // use function arg to avoid need to escape $ characters
        return innermostTemplate.replace(/%s/g, function () {
            return innermostTitle;
        });
    }

    var innermostDefaultTitle = getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.DEFAULT_TITLE);

    return innermostTitle || innermostDefaultTitle || undefined;
};

var getOnChangeClientState = function getOnChangeClientState(propsList) {
    return getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function () {};
};

var getAttributesFromPropsList = function getAttributesFromPropsList(tagType, propsList) {
    return propsList.filter(function (props) {
        return typeof props[tagType] !== "undefined";
    }).map(function (props) {
        return props[tagType];
    }).reduce(function (tagAttrs, current) {
        return _extends({}, tagAttrs, current);
    }, {});
};

var getBaseTagFromPropsList = function getBaseTagFromPropsList(primaryAttributes, propsList) {
    return propsList.filter(function (props) {
        return typeof props[_HelmetConstants.TAG_NAMES.BASE] !== "undefined";
    }).map(function (props) {
        return props[_HelmetConstants.TAG_NAMES.BASE];
    }).reverse().reduce(function (innermostBaseTag, tag) {
        if (!innermostBaseTag.length) {
            var keys = Object.keys(tag);

            for (var i = 0; i < keys.length; i++) {
                var attributeKey = keys[i];
                var lowerCaseAttributeKey = attributeKey.toLowerCase();

                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
                    return innermostBaseTag.concat(tag);
                }
            }
        }

        return innermostBaseTag;
    }, []);
};

var getTagsFromPropsList = function getTagsFromPropsList(tagName, primaryAttributes, propsList) {
    // Calculate list of tags, giving priority innermost component (end of the propslist)
    var approvedSeenTags = {};

    return propsList.filter(function (props) {
        if (Array.isArray(props[tagName])) {
            return true;
        }
        if (typeof props[tagName] !== "undefined") {
            warn("Helmet: " + tagName + " should be of type \"Array\". Instead found type \"" + _typeof(props[tagName]) + "\"");
        }
        return false;
    }).map(function (props) {
        return props[tagName];
    }).reverse().reduce(function (approvedTags, instanceTags) {
        var instanceSeenTags = {};

        instanceTags.filter(function (tag) {
            var primaryAttributeKey = void 0;
            var keys = Object.keys(tag);
            for (var i = 0; i < keys.length; i++) {
                var attributeKey = keys[i];
                var lowerCaseAttributeKey = attributeKey.toLowerCase();

                // Special rule with link tags, since rel and href are both primary tags, rel takes priority
                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
                    primaryAttributeKey = lowerCaseAttributeKey;
                }
                // Special case for innerHTML which doesn't work lowercased
                if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attributeKey === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT || attributeKey === _HelmetConstants.TAG_PROPERTIES.ITEM_PROP)) {
                    primaryAttributeKey = attributeKey;
                }
            }

            if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
                return false;
            }

            var value = tag[primaryAttributeKey].toLowerCase();

            if (!approvedSeenTags[primaryAttributeKey]) {
                approvedSeenTags[primaryAttributeKey] = {};
            }

            if (!instanceSeenTags[primaryAttributeKey]) {
                instanceSeenTags[primaryAttributeKey] = {};
            }

            if (!approvedSeenTags[primaryAttributeKey][value]) {
                instanceSeenTags[primaryAttributeKey][value] = true;
                return true;
            }

            return false;
        }).reverse().forEach(function (tag) {
            return approvedTags.push(tag);
        });

        // Update seen tags with tags from this instance
        var keys = Object.keys(instanceSeenTags);
        for (var i = 0; i < keys.length; i++) {
            var attributeKey = keys[i];
            var tagUnion = (0, _objectAssign2.default)({}, approvedSeenTags[attributeKey], instanceSeenTags[attributeKey]);

            approvedSeenTags[attributeKey] = tagUnion;
        }

        return approvedTags;
    }, []).reverse();
};

var getInnermostProperty = function getInnermostProperty(propsList, property) {
    for (var i = propsList.length - 1; i >= 0; i--) {
        var props = propsList[i];

        if (props.hasOwnProperty(property)) {
            return props[property];
        }
    }

    return null;
};

var reducePropsToState = function reducePropsToState(propsList) {
    return {
        baseTag: getBaseTagFromPropsList([_HelmetConstants.TAG_PROPERTIES.HREF], propsList),
        bodyAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.BODY, propsList),
        defer: getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.DEFER),
        encode: getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
        htmlAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.HTML, propsList),
        linkTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.LINK, [_HelmetConstants.TAG_PROPERTIES.REL, _HelmetConstants.TAG_PROPERTIES.HREF], propsList),
        metaTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.META, [_HelmetConstants.TAG_PROPERTIES.NAME, _HelmetConstants.TAG_PROPERTIES.CHARSET, _HelmetConstants.TAG_PROPERTIES.HTTPEQUIV, _HelmetConstants.TAG_PROPERTIES.PROPERTY, _HelmetConstants.TAG_PROPERTIES.ITEM_PROP], propsList),
        noscriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.NOSCRIPT, [_HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),
        onChangeClientState: getOnChangeClientState(propsList),
        scriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.SCRIPT, [_HelmetConstants.TAG_PROPERTIES.SRC, _HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),
        styleTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.STYLE, [_HelmetConstants.TAG_PROPERTIES.CSS_TEXT], propsList),
        title: getTitleFromPropsList(propsList),
        titleAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.TITLE, propsList)
    };
};

var rafPolyfill = function () {
    var clock = Date.now();

    return function (callback) {
        var currentTime = Date.now();

        if (currentTime - clock > 16) {
            clock = currentTime;
            callback(currentTime);
        } else {
            setTimeout(function () {
                rafPolyfill(callback);
            }, 0);
        }
    };
}();

var cafPolyfill = function cafPolyfill(id) {
    return clearTimeout(id);
};

var requestAnimationFrame = typeof window !== "undefined" ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || rafPolyfill : global.requestAnimationFrame || rafPolyfill;

var cancelAnimationFrame = typeof window !== "undefined" ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || cafPolyfill : global.cancelAnimationFrame || cafPolyfill;

var warn = function warn(msg) {
    return console && typeof console.warn === "function" && console.warn(msg);
};

var _helmetCallback = null;

var handleClientStateChange = function handleClientStateChange(newState) {
    if (_helmetCallback) {
        cancelAnimationFrame(_helmetCallback);
    }

    if (newState.defer) {
        _helmetCallback = requestAnimationFrame(function () {
            commitTagChanges(newState, function () {
                _helmetCallback = null;
            });
        });
    } else {
        commitTagChanges(newState);
        _helmetCallback = null;
    }
};

var commitTagChanges = function commitTagChanges(newState, cb) {
    var baseTag = newState.baseTag,
        bodyAttributes = newState.bodyAttributes,
        htmlAttributes = newState.htmlAttributes,
        linkTags = newState.linkTags,
        metaTags = newState.metaTags,
        noscriptTags = newState.noscriptTags,
        onChangeClientState = newState.onChangeClientState,
        scriptTags = newState.scriptTags,
        styleTags = newState.styleTags,
        title = newState.title,
        titleAttributes = newState.titleAttributes;

    updateAttributes(_HelmetConstants.TAG_NAMES.BODY, bodyAttributes);
    updateAttributes(_HelmetConstants.TAG_NAMES.HTML, htmlAttributes);

    updateTitle(title, titleAttributes);

    var tagUpdates = {
        baseTag: updateTags(_HelmetConstants.TAG_NAMES.BASE, baseTag),
        linkTags: updateTags(_HelmetConstants.TAG_NAMES.LINK, linkTags),
        metaTags: updateTags(_HelmetConstants.TAG_NAMES.META, metaTags),
        noscriptTags: updateTags(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags),
        scriptTags: updateTags(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags),
        styleTags: updateTags(_HelmetConstants.TAG_NAMES.STYLE, styleTags)
    };

    var addedTags = {};
    var removedTags = {};

    Object.keys(tagUpdates).forEach(function (tagType) {
        var _tagUpdates$tagType = tagUpdates[tagType],
            newTags = _tagUpdates$tagType.newTags,
            oldTags = _tagUpdates$tagType.oldTags;


        if (newTags.length) {
            addedTags[tagType] = newTags;
        }
        if (oldTags.length) {
            removedTags[tagType] = tagUpdates[tagType].oldTags;
        }
    });

    cb && cb();

    onChangeClientState(newState, addedTags, removedTags);
};

var flattenArray = function flattenArray(possibleArray) {
    return Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
};

var updateTitle = function updateTitle(title, attributes) {
    if (typeof title !== "undefined" && document.title !== title) {
        document.title = flattenArray(title);
    }

    updateAttributes(_HelmetConstants.TAG_NAMES.TITLE, attributes);
};

var updateAttributes = function updateAttributes(tagName, attributes) {
    var elementTag = document.getElementsByTagName(tagName)[0];

    if (!elementTag) {
        return;
    }

    var helmetAttributeString = elementTag.getAttribute(_HelmetConstants.HELMET_ATTRIBUTE);
    var helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
    var attributesToRemove = [].concat(helmetAttributes);
    var attributeKeys = Object.keys(attributes);

    for (var i = 0; i < attributeKeys.length; i++) {
        var attribute = attributeKeys[i];
        var value = attributes[attribute] || "";

        if (elementTag.getAttribute(attribute) !== value) {
            elementTag.setAttribute(attribute, value);
        }

        if (helmetAttributes.indexOf(attribute) === -1) {
            helmetAttributes.push(attribute);
        }

        var indexToSave = attributesToRemove.indexOf(attribute);
        if (indexToSave !== -1) {
            attributesToRemove.splice(indexToSave, 1);
        }
    }

    for (var _i = attributesToRemove.length - 1; _i >= 0; _i--) {
        elementTag.removeAttribute(attributesToRemove[_i]);
    }

    if (helmetAttributes.length === attributesToRemove.length) {
        elementTag.removeAttribute(_HelmetConstants.HELMET_ATTRIBUTE);
    } else if (elementTag.getAttribute(_HelmetConstants.HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
        elementTag.setAttribute(_HelmetConstants.HELMET_ATTRIBUTE, attributeKeys.join(","));
    }
};

var updateTags = function updateTags(type, tags) {
    var headElement = document.head || document.querySelector(_HelmetConstants.TAG_NAMES.HEAD);
    var tagNodes = headElement.querySelectorAll(type + "[" + _HelmetConstants.HELMET_ATTRIBUTE + "]");
    var oldTags = Array.prototype.slice.call(tagNodes);
    var newTags = [];
    var indexToDelete = void 0;

    if (tags && tags.length) {
        tags.forEach(function (tag) {
            var newElement = document.createElement(type);

            for (var attribute in tag) {
                if (tag.hasOwnProperty(attribute)) {
                    if (attribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML) {
                        newElement.innerHTML = tag.innerHTML;
                    } else if (attribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {
                        if (newElement.styleSheet) {
                            newElement.styleSheet.cssText = tag.cssText;
                        } else {
                            newElement.appendChild(document.createTextNode(tag.cssText));
                        }
                    } else {
                        var value = typeof tag[attribute] === "undefined" ? "" : tag[attribute];
                        newElement.setAttribute(attribute, value);
                    }
                }
            }

            newElement.setAttribute(_HelmetConstants.HELMET_ATTRIBUTE, "true");

            // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.
            if (oldTags.some(function (existingTag, index) {
                indexToDelete = index;
                return newElement.isEqualNode(existingTag);
            })) {
                oldTags.splice(indexToDelete, 1);
            } else {
                newTags.push(newElement);
            }
        });
    }

    oldTags.forEach(function (tag) {
        return tag.parentNode.removeChild(tag);
    });
    newTags.forEach(function (tag) {
        return headElement.appendChild(tag);
    });

    return {
        oldTags: oldTags,
        newTags: newTags
    };
};

var generateElementAttributesAsString = function generateElementAttributesAsString(attributes) {
    return Object.keys(attributes).reduce(function (str, key) {
        var attr = typeof attributes[key] !== "undefined" ? key + "=\"" + attributes[key] + "\"" : "" + key;
        return str ? str + " " + attr : attr;
    }, "");
};

var generateTitleAsString = function generateTitleAsString(type, title, attributes, encode) {
    var attributeString = generateElementAttributesAsString(attributes);
    var flattenedTitle = flattenArray(title);
    return attributeString ? "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\" " + attributeString + ">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">" : "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">";
};

var generateTagsAsString = function generateTagsAsString(type, tags, encode) {
    return tags.reduce(function (str, tag) {
        var attributeHtml = Object.keys(tag).filter(function (attribute) {
            return !(attribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT);
        }).reduce(function (string, attribute) {
            var attr = typeof tag[attribute] === "undefined" ? attribute : attribute + "=\"" + encodeSpecialCharacters(tag[attribute], encode) + "\"";
            return string ? string + " " + attr : attr;
        }, "");

        var tagContent = tag.innerHTML || tag.cssText || "";

        var isSelfClosing = _HelmetConstants.SELF_CLOSING_TAGS.indexOf(type) === -1;

        return str + "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\" " + attributeHtml + (isSelfClosing ? "/>" : ">" + tagContent + "</" + type + ">");
    }, "");
};

var convertElementAttributestoReactProps = function convertElementAttributestoReactProps(attributes) {
    var initProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return Object.keys(attributes).reduce(function (obj, key) {
        obj[_HelmetConstants.REACT_TAG_MAP[key] || key] = attributes[key];
        return obj;
    }, initProps);
};

var convertReactPropstoHtmlAttributes = function convertReactPropstoHtmlAttributes(props) {
    var initAttributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return Object.keys(props).reduce(function (obj, key) {
        obj[_HelmetConstants.HTML_TAG_MAP[key] || key] = props[key];
        return obj;
    }, initAttributes);
};

var generateTitleAsReactComponent = function generateTitleAsReactComponent(type, title, attributes) {
    var _initProps;

    // assigning into an array to define toString function on it
    var initProps = (_initProps = {
        key: title
    }, _initProps[_HelmetConstants.HELMET_ATTRIBUTE] = true, _initProps);
    var props = convertElementAttributestoReactProps(attributes, initProps);

    return [_react2.default.createElement(_HelmetConstants.TAG_NAMES.TITLE, props, title)];
};

var generateTagsAsReactComponent = function generateTagsAsReactComponent(type, tags) {
    return tags.map(function (tag, i) {
        var _mappedTag;

        var mappedTag = (_mappedTag = {
            key: i
        }, _mappedTag[_HelmetConstants.HELMET_ATTRIBUTE] = true, _mappedTag);

        Object.keys(tag).forEach(function (attribute) {
            var mappedAttribute = _HelmetConstants.REACT_TAG_MAP[attribute] || attribute;

            if (mappedAttribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || mappedAttribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {
                var content = tag.innerHTML || tag.cssText;
                mappedTag.dangerouslySetInnerHTML = { __html: content };
            } else {
                mappedTag[mappedAttribute] = tag[attribute];
            }
        });

        return _react2.default.createElement(type, mappedTag);
    });
};

var getMethodsForTag = function getMethodsForTag(type, tags, encode) {
    switch (type) {
        case _HelmetConstants.TAG_NAMES.TITLE:
            return {
                toComponent: function toComponent() {
                    return generateTitleAsReactComponent(type, tags.title, tags.titleAttributes, encode);
                },
                toString: function toString() {
                    return generateTitleAsString(type, tags.title, tags.titleAttributes, encode);
                }
            };
        case _HelmetConstants.ATTRIBUTE_NAMES.BODY:
        case _HelmetConstants.ATTRIBUTE_NAMES.HTML:
            return {
                toComponent: function toComponent() {
                    return convertElementAttributestoReactProps(tags);
                },
                toString: function toString() {
                    return generateElementAttributesAsString(tags);
                }
            };
        default:
            return {
                toComponent: function toComponent() {
                    return generateTagsAsReactComponent(type, tags);
                },
                toString: function toString() {
                    return generateTagsAsString(type, tags, encode);
                }
            };
    }
};

var mapStateOnServer = function mapStateOnServer(_ref) {
    var baseTag = _ref.baseTag,
        bodyAttributes = _ref.bodyAttributes,
        encode = _ref.encode,
        htmlAttributes = _ref.htmlAttributes,
        linkTags = _ref.linkTags,
        metaTags = _ref.metaTags,
        noscriptTags = _ref.noscriptTags,
        scriptTags = _ref.scriptTags,
        styleTags = _ref.styleTags,
        _ref$title = _ref.title,
        title = _ref$title === undefined ? "" : _ref$title,
        titleAttributes = _ref.titleAttributes;
    return {
        base: getMethodsForTag(_HelmetConstants.TAG_NAMES.BASE, baseTag, encode),
        bodyAttributes: getMethodsForTag(_HelmetConstants.ATTRIBUTE_NAMES.BODY, bodyAttributes, encode),
        htmlAttributes: getMethodsForTag(_HelmetConstants.ATTRIBUTE_NAMES.HTML, htmlAttributes, encode),
        link: getMethodsForTag(_HelmetConstants.TAG_NAMES.LINK, linkTags, encode),
        meta: getMethodsForTag(_HelmetConstants.TAG_NAMES.META, metaTags, encode),
        noscript: getMethodsForTag(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags, encode),
        script: getMethodsForTag(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags, encode),
        style: getMethodsForTag(_HelmetConstants.TAG_NAMES.STYLE, styleTags, encode),
        title: getMethodsForTag(_HelmetConstants.TAG_NAMES.TITLE, { title: title, titleAttributes: titleAttributes }, encode)
    };
};

exports.convertReactPropstoHtmlAttributes = convertReactPropstoHtmlAttributes;
exports.handleClientStateChange = handleClientStateChange;
exports.mapStateOnServer = mapStateOnServer;
exports.reducePropsToState = reducePropsToState;
exports.requestAnimationFrame = requestAnimationFrame;
exports.warn = warn;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/react-side-effect/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-side-effect/lib/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var React__default = _interopDefault(React);
var shallowEqual = _interopDefault(__webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js"));

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function withSideEffect(reducePropsToState, handleStateChangeOnClient, mapStateOnServer) {
  if (typeof reducePropsToState !== 'function') {
    throw new Error('Expected reducePropsToState to be a function.');
  }

  if (typeof handleStateChangeOnClient !== 'function') {
    throw new Error('Expected handleStateChangeOnClient to be a function.');
  }

  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {
    throw new Error('Expected mapStateOnServer to either be undefined or a function.');
  }

  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  return function wrap(WrappedComponent) {
    if (typeof WrappedComponent !== 'function') {
      throw new Error('Expected WrappedComponent to be a React component.');
    }

    var mountedInstances = [];
    var state;

    function emitChange() {
      state = reducePropsToState(mountedInstances.map(function (instance) {
        return instance.props;
      }));

      if (SideEffect.canUseDOM) {
        handleStateChangeOnClient(state);
      } else if (mapStateOnServer) {
        state = mapStateOnServer(state);
      }
    }

    var SideEffect =
    /*#__PURE__*/
    function (_Component) {
      _inheritsLoose(SideEffect, _Component);

      function SideEffect() {
        return _Component.apply(this, arguments) || this;
      }

      // Try to use displayName of wrapped component
      // Expose canUseDOM so tests can monkeypatch it
      SideEffect.peek = function peek() {
        return state;
      };

      SideEffect.rewind = function rewind() {
        if (SideEffect.canUseDOM) {
          throw new Error('You may only call rewind() on the server. Call peek() to read the current state.');
        }

        var recordedState = state;
        state = undefined;
        mountedInstances = [];
        return recordedState;
      };

      var _proto = SideEffect.prototype;

      _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        return !shallowEqual(nextProps, this.props);
      };

      _proto.componentWillMount = function componentWillMount() {
        mountedInstances.push(this);
        emitChange();
      };

      _proto.componentDidUpdate = function componentDidUpdate() {
        emitChange();
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        var index = mountedInstances.indexOf(this);
        mountedInstances.splice(index, 1);
        emitChange();
      };

      _proto.render = function render() {
        return React__default.createElement(WrappedComponent, this.props);
      };

      return SideEffect;
    }(React.Component);

    _defineProperty(SideEffect, "displayName", "SideEffect(" + getDisplayName(WrappedComponent) + ")");

    _defineProperty(SideEffect, "canUseDOM", canUseDOM);

    return SideEffect;
  };
}

module.exports = withSideEffect;


/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZmFzdC1jb21wYXJlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1oZWxtZXQvbGliL0hlbG1ldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtaGVsbWV0L2xpYi9IZWxtZXRDb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWhlbG1ldC9saWIvSGVsbWV0VXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNpZGUtZWZmZWN0L2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2hhbGxvd2VxdWFsL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixXQUFXO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0JBQW9CLFdBQVc7QUFDL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixXQUFXO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzdGQTtBQUNBOztBQUVBLG1EQUFtRCxnQkFB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QTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQiwwQkFBMEI7QUFDN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0RBQWdELFNBQVM7QUFDekQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNB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QUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJmaWxlIjoianMvMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xudmFyIGtleUxpc3QgPSBPYmplY3Qua2V5cztcbnZhciBoYXNQcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBoYXNFbGVtZW50VHlwZSA9IHR5cGVvZiBFbGVtZW50ICE9PSAndW5kZWZpbmVkJztcblxuZnVuY3Rpb24gZXF1YWwoYSwgYikge1xuICAvLyBmYXN0LWRlZXAtZXF1YWwgaW5kZXguanMgMi4wLjFcbiAgaWYgKGEgPT09IGIpIHJldHVybiB0cnVlO1xuXG4gIGlmIChhICYmIGIgJiYgdHlwZW9mIGEgPT0gJ29iamVjdCcgJiYgdHlwZW9mIGIgPT0gJ29iamVjdCcpIHtcbiAgICB2YXIgYXJyQSA9IGlzQXJyYXkoYSlcbiAgICAgICwgYXJyQiA9IGlzQXJyYXkoYilcbiAgICAgICwgaVxuICAgICAgLCBsZW5ndGhcbiAgICAgICwga2V5O1xuXG4gICAgaWYgKGFyckEgJiYgYXJyQikge1xuICAgICAgbGVuZ3RoID0gYS5sZW5ndGg7XG4gICAgICBpZiAobGVuZ3RoICE9IGIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSAhPT0gMDspXG4gICAgICAgIGlmICghZXF1YWwoYVtpXSwgYltpXSkpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChhcnJBICE9IGFyckIpIHJldHVybiBmYWxzZTtcblxuICAgIHZhciBkYXRlQSA9IGEgaW5zdGFuY2VvZiBEYXRlXG4gICAgICAsIGRhdGVCID0gYiBpbnN0YW5jZW9mIERhdGU7XG4gICAgaWYgKGRhdGVBICE9IGRhdGVCKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKGRhdGVBICYmIGRhdGVCKSByZXR1cm4gYS5nZXRUaW1lKCkgPT0gYi5nZXRUaW1lKCk7XG5cbiAgICB2YXIgcmVnZXhwQSA9IGEgaW5zdGFuY2VvZiBSZWdFeHBcbiAgICAgICwgcmVnZXhwQiA9IGIgaW5zdGFuY2VvZiBSZWdFeHA7XG4gICAgaWYgKHJlZ2V4cEEgIT0gcmVnZXhwQikgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChyZWdleHBBICYmIHJlZ2V4cEIpIHJldHVybiBhLnRvU3RyaW5nKCkgPT0gYi50b1N0cmluZygpO1xuXG4gICAgdmFyIGtleXMgPSBrZXlMaXN0KGEpO1xuICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuXG4gICAgaWYgKGxlbmd0aCAhPT0ga2V5TGlzdChiKS5sZW5ndGgpXG4gICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSAhPT0gMDspXG4gICAgICBpZiAoIWhhc1Byb3AuY2FsbChiLCBrZXlzW2ldKSkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIGVuZCBmYXN0LWRlZXAtZXF1YWxcblxuICAgIC8vIHN0YXJ0IHJlYWN0LWZhc3QtY29tcGFyZVxuICAgIC8vIGN1c3RvbSBoYW5kbGluZyBmb3IgRE9NIGVsZW1lbnRzXG4gICAgaWYgKGhhc0VsZW1lbnRUeXBlICYmIGEgaW5zdGFuY2VvZiBFbGVtZW50ICYmIGIgaW5zdGFuY2VvZiBFbGVtZW50KVxuICAgICAgcmV0dXJuIGEgPT09IGI7XG5cbiAgICAvLyBjdXN0b20gaGFuZGxpbmcgZm9yIFJlYWN0XG4gICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gIT09IDA7KSB7XG4gICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgaWYgKGtleSA9PT0gJ19vd25lcicgJiYgYS4kJHR5cGVvZikge1xuICAgICAgICAvLyBSZWFjdC1zcGVjaWZpYzogYXZvaWQgdHJhdmVyc2luZyBSZWFjdCBlbGVtZW50cycgX293bmVyLlxuICAgICAgICAvLyAgX293bmVyIGNvbnRhaW5zIGNpcmN1bGFyIHJlZmVyZW5jZXNcbiAgICAgICAgLy8gYW5kIGlzIG5vdCBuZWVkZWQgd2hlbiBjb21wYXJpbmcgdGhlIGFjdHVhbCBlbGVtZW50cyAoYW5kIG5vdCB0aGVpciBvd25lcnMpXG4gICAgICAgIC8vIC4kJHR5cGVvZiBhbmQgLl9zdG9yZSBvbiBqdXN0IHJlYXNvbmFibGUgbWFya2VycyBvZiBhIHJlYWN0IGVsZW1lbnRcbiAgICAgICAgY29udGludWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBhbGwgb3RoZXIgcHJvcGVydGllcyBzaG91bGQgYmUgdHJhdmVyc2VkIGFzIHVzdWFsXG4gICAgICAgIGlmICghZXF1YWwoYVtrZXldLCBiW2tleV0pKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGVuZCByZWFjdC1mYXN0LWNvbXBhcmVcblxuICAgIC8vIGZhc3QtZGVlcC1lcXVhbCBpbmRleC5qcyAyLjAuMVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGEgIT09IGEgJiYgYiAhPT0gYjtcbn1cbi8vIGVuZCBmYXN0LWRlZXAtZXF1YWxcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBleHBvcnRlZEVxdWFsKGEsIGIpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZXF1YWwoYSwgYik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaWYgKChlcnJvci5tZXNzYWdlICYmIGVycm9yLm1lc3NhZ2UubWF0Y2goL3N0YWNrfHJlY3Vyc2lvbi9pKSkgfHwgKGVycm9yLm51bWJlciA9PT0gLTIxNDY4MjgyNjApKSB7XG4gICAgICAvLyB3YXJuIG9uIGNpcmN1bGFyIHJlZmVyZW5jZXMsIGRvbid0IGNyYXNoXG4gICAgICAvLyBicm93c2VycyBnaXZlIHRoaXMgZGlmZmVyZW50IGVycm9ycyBuYW1lIGFuZCBtZXNzYWdlczpcbiAgICAgIC8vIGNocm9tZS9zYWZhcmk6IFwiUmFuZ2VFcnJvclwiLCBcIk1heGltdW0gY2FsbCBzdGFjayBzaXplIGV4Y2VlZGVkXCJcbiAgICAgIC8vIGZpcmVmb3g6IFwiSW50ZXJuYWxFcnJvclwiLCB0b28gbXVjaCByZWN1cnNpb25cIlxuICAgICAgLy8gZWRnZTogXCJFcnJvclwiLCBcIk91dCBvZiBzdGFjayBzcGFjZVwiXG4gICAgICBjb25zb2xlLndhcm4oJ1dhcm5pbmc6IHJlYWN0LWZhc3QtY29tcGFyZSBkb2VzIG5vdCBoYW5kbGUgY2lyY3VsYXIgcmVmZXJlbmNlcy4nLCBlcnJvci5uYW1lLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gc29tZSBvdGhlciBlcnJvci4gd2Ugc2hvdWxkIGRlZmluaXRlbHkga25vdyBhYm91dCB0aGVzZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuIiwiZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuSGVsbWV0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9yZWFjdFNpZGVFZmZlY3QgPSByZXF1aXJlKFwicmVhY3Qtc2lkZS1lZmZlY3RcIik7XG5cbnZhciBfcmVhY3RTaWRlRWZmZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0U2lkZUVmZmVjdCk7XG5cbnZhciBfcmVhY3RGYXN0Q29tcGFyZSA9IHJlcXVpcmUoXCJyZWFjdC1mYXN0LWNvbXBhcmVcIik7XG5cbnZhciBfcmVhY3RGYXN0Q29tcGFyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdEZhc3RDb21wYXJlKTtcblxudmFyIF9IZWxtZXRVdGlscyA9IHJlcXVpcmUoXCIuL0hlbG1ldFV0aWxzLmpzXCIpO1xuXG52YXIgX0hlbG1ldENvbnN0YW50cyA9IHJlcXVpcmUoXCIuL0hlbG1ldENvbnN0YW50cy5qc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBIZWxtZXQgPSBmdW5jdGlvbiBIZWxtZXQoQ29tcG9uZW50KSB7XG4gICAgdmFyIF9jbGFzcywgX3RlbXA7XG5cbiAgICByZXR1cm4gX3RlbXAgPSBfY2xhc3MgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgICAgICBfaW5oZXJpdHMoSGVsbWV0V3JhcHBlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICAgICAgZnVuY3Rpb24gSGVsbWV0V3JhcHBlcigpIHtcbiAgICAgICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIZWxtZXRXcmFwcGVyKTtcblxuICAgICAgICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgICAgIH1cblxuICAgICAgICBIZWxtZXRXcmFwcGVyLnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgICAgICAgICByZXR1cm4gISgwLCBfcmVhY3RGYXN0Q29tcGFyZTIuZGVmYXVsdCkodGhpcy5wcm9wcywgbmV4dFByb3BzKTtcbiAgICAgICAgfTtcblxuICAgICAgICBIZWxtZXRXcmFwcGVyLnByb3RvdHlwZS5tYXBOZXN0ZWRDaGlsZHJlblRvUHJvcHMgPSBmdW5jdGlvbiBtYXBOZXN0ZWRDaGlsZHJlblRvUHJvcHMoY2hpbGQsIG5lc3RlZENoaWxkcmVuKSB7XG4gICAgICAgICAgICBpZiAoIW5lc3RlZENoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN3aXRjaCAoY2hpbGQudHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuU0NSSVBUOlxuICAgICAgICAgICAgICAgIGNhc2UgX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuTk9TQ1JJUFQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IG5lc3RlZENoaWxkcmVuXG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBjYXNlIF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLlNUWUxFOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3NzVGV4dDogbmVzdGVkQ2hpbGRyZW5cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiPFwiICsgY2hpbGQudHlwZSArIFwiIC8+IGVsZW1lbnRzIGFyZSBzZWxmLWNsb3NpbmcgYW5kIGNhbiBub3QgY29udGFpbiBjaGlsZHJlbi4gUmVmZXIgdG8gb3VyIEFQSSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cIik7XG4gICAgICAgIH07XG5cbiAgICAgICAgSGVsbWV0V3JhcHBlci5wcm90b3R5cGUuZmxhdHRlbkFycmF5VHlwZUNoaWxkcmVuID0gZnVuY3Rpb24gZmxhdHRlbkFycmF5VHlwZUNoaWxkcmVuKF9yZWYpIHtcbiAgICAgICAgICAgIHZhciBfZXh0ZW5kczI7XG5cbiAgICAgICAgICAgIHZhciBjaGlsZCA9IF9yZWYuY2hpbGQsXG4gICAgICAgICAgICAgICAgYXJyYXlUeXBlQ2hpbGRyZW4gPSBfcmVmLmFycmF5VHlwZUNoaWxkcmVuLFxuICAgICAgICAgICAgICAgIG5ld0NoaWxkUHJvcHMgPSBfcmVmLm5ld0NoaWxkUHJvcHMsXG4gICAgICAgICAgICAgICAgbmVzdGVkQ2hpbGRyZW4gPSBfcmVmLm5lc3RlZENoaWxkcmVuO1xuXG4gICAgICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIGFycmF5VHlwZUNoaWxkcmVuLCAoX2V4dGVuZHMyID0ge30sIF9leHRlbmRzMltjaGlsZC50eXBlXSA9IFtdLmNvbmNhdChhcnJheVR5cGVDaGlsZHJlbltjaGlsZC50eXBlXSB8fCBbXSwgW19leHRlbmRzKHt9LCBuZXdDaGlsZFByb3BzLCB0aGlzLm1hcE5lc3RlZENoaWxkcmVuVG9Qcm9wcyhjaGlsZCwgbmVzdGVkQ2hpbGRyZW4pKV0pLCBfZXh0ZW5kczIpKTtcbiAgICAgICAgfTtcblxuICAgICAgICBIZWxtZXRXcmFwcGVyLnByb3RvdHlwZS5tYXBPYmplY3RUeXBlQ2hpbGRyZW4gPSBmdW5jdGlvbiBtYXBPYmplY3RUeXBlQ2hpbGRyZW4oX3JlZjIpIHtcbiAgICAgICAgICAgIHZhciBfZXh0ZW5kczMsIF9leHRlbmRzNDtcblxuICAgICAgICAgICAgdmFyIGNoaWxkID0gX3JlZjIuY2hpbGQsXG4gICAgICAgICAgICAgICAgbmV3UHJvcHMgPSBfcmVmMi5uZXdQcm9wcyxcbiAgICAgICAgICAgICAgICBuZXdDaGlsZFByb3BzID0gX3JlZjIubmV3Q2hpbGRQcm9wcyxcbiAgICAgICAgICAgICAgICBuZXN0ZWRDaGlsZHJlbiA9IF9yZWYyLm5lc3RlZENoaWxkcmVuO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKGNoaWxkLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLlRJVExFOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIG5ld1Byb3BzLCAoX2V4dGVuZHMzID0ge30sIF9leHRlbmRzM1tjaGlsZC50eXBlXSA9IG5lc3RlZENoaWxkcmVuLCBfZXh0ZW5kczMudGl0bGVBdHRyaWJ1dGVzID0gX2V4dGVuZHMoe30sIG5ld0NoaWxkUHJvcHMpLCBfZXh0ZW5kczMpKTtcblxuICAgICAgICAgICAgICAgIGNhc2UgX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuQk9EWTpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBuZXdQcm9wcywge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keUF0dHJpYnV0ZXM6IF9leHRlbmRzKHt9LCBuZXdDaGlsZFByb3BzKVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGNhc2UgX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuSFRNTDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBuZXdQcm9wcywge1xuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEF0dHJpYnV0ZXM6IF9leHRlbmRzKHt9LCBuZXdDaGlsZFByb3BzKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBuZXdQcm9wcywgKF9leHRlbmRzNCA9IHt9LCBfZXh0ZW5kczRbY2hpbGQudHlwZV0gPSBfZXh0ZW5kcyh7fSwgbmV3Q2hpbGRQcm9wcyksIF9leHRlbmRzNCkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIEhlbG1ldFdyYXBwZXIucHJvdG90eXBlLm1hcEFycmF5VHlwZUNoaWxkcmVuVG9Qcm9wcyA9IGZ1bmN0aW9uIG1hcEFycmF5VHlwZUNoaWxkcmVuVG9Qcm9wcyhhcnJheVR5cGVDaGlsZHJlbiwgbmV3UHJvcHMpIHtcbiAgICAgICAgICAgIHZhciBuZXdGbGF0dGVuZWRQcm9wcyA9IF9leHRlbmRzKHt9LCBuZXdQcm9wcyk7XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGFycmF5VHlwZUNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uIChhcnJheUNoaWxkTmFtZSkge1xuICAgICAgICAgICAgICAgIHZhciBfZXh0ZW5kczU7XG5cbiAgICAgICAgICAgICAgICBuZXdGbGF0dGVuZWRQcm9wcyA9IF9leHRlbmRzKHt9LCBuZXdGbGF0dGVuZWRQcm9wcywgKF9leHRlbmRzNSA9IHt9LCBfZXh0ZW5kczVbYXJyYXlDaGlsZE5hbWVdID0gYXJyYXlUeXBlQ2hpbGRyZW5bYXJyYXlDaGlsZE5hbWVdLCBfZXh0ZW5kczUpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gbmV3RmxhdHRlbmVkUHJvcHM7XG4gICAgICAgIH07XG5cbiAgICAgICAgSGVsbWV0V3JhcHBlci5wcm90b3R5cGUud2Fybk9uSW52YWxpZENoaWxkcmVuID0gZnVuY3Rpb24gd2Fybk9uSW52YWxpZENoaWxkcmVuKGNoaWxkLCBuZXN0ZWRDaGlsZHJlbikge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgICAgICAgIGlmICghX0hlbG1ldENvbnN0YW50cy5WQUxJRF9UQUdfTkFNRVMuc29tZShmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGQudHlwZSA9PT0gbmFtZTtcbiAgICAgICAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnR5cGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgwLCBfSGVsbWV0VXRpbHMud2FybikoXCJZb3UgbWF5IGJlIGF0dGVtcHRpbmcgdG8gbmVzdCA8SGVsbWV0PiBjb21wb25lbnRzIHdpdGhpbiBlYWNoIG90aGVyLCB3aGljaCBpcyBub3QgYWxsb3dlZC4gUmVmZXIgdG8gb3VyIEFQSSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cIik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDAsIF9IZWxtZXRVdGlscy53YXJuKShcIk9ubHkgZWxlbWVudHMgdHlwZXMgXCIgKyBfSGVsbWV0Q29uc3RhbnRzLlZBTElEX1RBR19OQU1FUy5qb2luKFwiLCBcIikgKyBcIiBhcmUgYWxsb3dlZC4gSGVsbWV0IGRvZXMgbm90IHN1cHBvcnQgcmVuZGVyaW5nIDxcIiArIGNoaWxkLnR5cGUgKyBcIj4gZWxlbWVudHMuIFJlZmVyIHRvIG91ciBBUEkgZm9yIG1vcmUgaW5mb3JtYXRpb24uXCIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChuZXN0ZWRDaGlsZHJlbiAmJiB0eXBlb2YgbmVzdGVkQ2hpbGRyZW4gIT09IFwic3RyaW5nXCIgJiYgKCFBcnJheS5pc0FycmF5KG5lc3RlZENoaWxkcmVuKSB8fCBuZXN0ZWRDaGlsZHJlbi5zb21lKGZ1bmN0aW9uIChuZXN0ZWRDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIG5lc3RlZENoaWxkICE9PSBcInN0cmluZ1wiO1xuICAgICAgICAgICAgICAgIH0pKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJIZWxtZXQgZXhwZWN0cyBhIHN0cmluZyBhcyBhIGNoaWxkIG9mIDxcIiArIGNoaWxkLnR5cGUgKyBcIj4uIERpZCB5b3UgZm9yZ2V0IHRvIHdyYXAgeW91ciBjaGlsZHJlbiBpbiBicmFjZXM/ICggPFwiICsgY2hpbGQudHlwZSArIFwiPntgYH08L1wiICsgY2hpbGQudHlwZSArIFwiPiApIFJlZmVyIHRvIG91ciBBUEkgZm9yIG1vcmUgaW5mb3JtYXRpb24uXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH07XG5cbiAgICAgICAgSGVsbWV0V3JhcHBlci5wcm90b3R5cGUubWFwQ2hpbGRyZW5Ub1Byb3BzID0gZnVuY3Rpb24gbWFwQ2hpbGRyZW5Ub1Byb3BzKGNoaWxkcmVuLCBuZXdQcm9wcykge1xuICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBhcnJheVR5cGVDaGlsZHJlbiA9IHt9O1xuXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjaGlsZCB8fCAhY2hpbGQucHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBfY2hpbGQkcHJvcHMgPSBjaGlsZC5wcm9wcyxcbiAgICAgICAgICAgICAgICAgICAgbmVzdGVkQ2hpbGRyZW4gPSBfY2hpbGQkcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX2NoaWxkJHByb3BzLCBbXCJjaGlsZHJlblwiXSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgbmV3Q2hpbGRQcm9wcyA9ICgwLCBfSGVsbWV0VXRpbHMuY29udmVydFJlYWN0UHJvcHN0b0h0bWxBdHRyaWJ1dGVzKShjaGlsZFByb3BzKTtcblxuICAgICAgICAgICAgICAgIF90aGlzMi53YXJuT25JbnZhbGlkQ2hpbGRyZW4oY2hpbGQsIG5lc3RlZENoaWxkcmVuKTtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAoY2hpbGQudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLkxJTks6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuTUVUQTpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5OT1NDUklQVDpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5TQ1JJUFQ6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuU1RZTEU6XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheVR5cGVDaGlsZHJlbiA9IF90aGlzMi5mbGF0dGVuQXJyYXlUeXBlQ2hpbGRyZW4oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkOiBjaGlsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVR5cGVDaGlsZHJlbjogYXJyYXlUeXBlQ2hpbGRyZW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q2hpbGRQcm9wczogbmV3Q2hpbGRQcm9wcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXN0ZWRDaGlsZHJlbjogbmVzdGVkQ2hpbGRyZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Byb3BzID0gX3RoaXMyLm1hcE9iamVjdFR5cGVDaGlsZHJlbih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQ6IGNoaWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Byb3BzOiBuZXdQcm9wcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdDaGlsZFByb3BzOiBuZXdDaGlsZFByb3BzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5lc3RlZENoaWxkcmVuOiBuZXN0ZWRDaGlsZHJlblxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbmV3UHJvcHMgPSB0aGlzLm1hcEFycmF5VHlwZUNoaWxkcmVuVG9Qcm9wcyhhcnJheVR5cGVDaGlsZHJlbiwgbmV3UHJvcHMpO1xuICAgICAgICAgICAgcmV0dXJuIG5ld1Byb3BzO1xuICAgICAgICB9O1xuXG4gICAgICAgIEhlbG1ldFdyYXBwZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICAgICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgW1wiY2hpbGRyZW5cIl0pO1xuXG4gICAgICAgICAgICB2YXIgbmV3UHJvcHMgPSBfZXh0ZW5kcyh7fSwgcHJvcHMpO1xuXG4gICAgICAgICAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICBuZXdQcm9wcyA9IHRoaXMubWFwQ2hpbGRyZW5Ub1Byb3BzKGNoaWxkcmVuLCBuZXdQcm9wcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIG5ld1Byb3BzKTtcbiAgICAgICAgfTtcblxuICAgICAgICBfY3JlYXRlQ2xhc3MoSGVsbWV0V3JhcHBlciwgbnVsbCwgW3tcbiAgICAgICAgICAgIGtleTogXCJjYW5Vc2VET01cIixcblxuXG4gICAgICAgICAgICAvLyBDb21wb25lbnQucGVlayBjb21lcyBmcm9tIHJlYWN0LXNpZGUtZWZmZWN0OlxuICAgICAgICAgICAgLy8gRm9yIHRlc3RpbmcsIHlvdSBtYXkgdXNlIGEgc3RhdGljIHBlZWsoKSBtZXRob2QgYXZhaWxhYmxlIG9uIHRoZSByZXR1cm5lZCBjb21wb25lbnQuXG4gICAgICAgICAgICAvLyBJdCBsZXRzIHlvdSBnZXQgdGhlIGN1cnJlbnQgc3RhdGUgd2l0aG91dCByZXNldHRpbmcgdGhlIG1vdW50ZWQgaW5zdGFuY2Ugc3RhY2suXG4gICAgICAgICAgICAvLyBEb27igJl0IHVzZSBpdCBmb3IgYW55dGhpbmcgb3RoZXIgdGhhbiB0ZXN0aW5nLlxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBiYXNlOiB7XCJ0YXJnZXRcIjogXCJfYmxhbmtcIiwgXCJocmVmXCI6IFwiaHR0cDovL215c2l0ZS5jb20vXCJ9XG4gICAgICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gYm9keUF0dHJpYnV0ZXM6IHtcImNsYXNzTmFtZVwiOiBcInJvb3RcIn1cbiAgICAgICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZWZhdWx0VGl0bGU6IFwiRGVmYXVsdCBUaXRsZVwiXG4gICAgICAgICAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGRlZmVyOiB0cnVlXG4gICAgICAgICAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGVuY29kZVNwZWNpYWxDaGFyYWN0ZXJzOiB0cnVlXG4gICAgICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gaHRtbEF0dHJpYnV0ZXM6IHtcImxhbmdcIjogXCJlblwiLCBcImFtcFwiOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBsaW5rOiBbe1wicmVsXCI6IFwiY2Fub25pY2FsXCIsIFwiaHJlZlwiOiBcImh0dHA6Ly9teXNpdGUuY29tL2V4YW1wbGVcIn1dXG4gICAgICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBtZXRhOiBbe1wibmFtZVwiOiBcImRlc2NyaXB0aW9uXCIsIFwiY29udGVudFwiOiBcIlRlc3QgZGVzY3JpcHRpb25cIn1dXG4gICAgICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBub3NjcmlwdDogW3tcImlubmVySFRNTFwiOiBcIjxpbWcgc3JjPSdodHRwOi8vbXlzaXRlLmNvbS9qcy90ZXN0LmpzJ1wifV1cbiAgICAgICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IG9uQ2hhbmdlQ2xpZW50U3RhdGU6IFwiKG5ld1N0YXRlKSA9PiBjb25zb2xlLmxvZyhuZXdTdGF0ZSlcIlxuICAgICAgICAgICAgICogQHBhcmFtIHtBcnJheX0gc2NyaXB0OiBbe1widHlwZVwiOiBcInRleHQvamF2YXNjcmlwdFwiLCBcInNyY1wiOiBcImh0dHA6Ly9teXNpdGUuY29tL2pzL3Rlc3QuanNcIn1dXG4gICAgICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBzdHlsZTogW3tcInR5cGVcIjogXCJ0ZXh0L2Nzc1wiLCBcImNzc1RleHRcIjogXCJkaXYgeyBkaXNwbGF5OiBibG9jazsgY29sb3I6IGJsdWU7IH1cIn1dXG4gICAgICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gdGl0bGU6IFwiVGl0bGVcIlxuICAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IHRpdGxlQXR0cmlidXRlczoge1wiaXRlbXByb3BcIjogXCJuYW1lXCJ9XG4gICAgICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gdGl0bGVUZW1wbGF0ZTogXCJNeVNpdGUuY29tIC0gJXNcIlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChjYW5Vc2VET00pIHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQuY2FuVXNlRE9NID0gY2FuVXNlRE9NO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XSk7XG5cbiAgICAgICAgcmV0dXJuIEhlbG1ldFdyYXBwZXI7XG4gICAgfShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KSwgX2NsYXNzLnByb3BUeXBlcyA9IHtcbiAgICAgICAgYmFzZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gICAgICAgIGJvZHlBdHRyaWJ1dGVzOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgICAgICAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LmFycmF5T2YoX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlKSwgX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlXSksXG4gICAgICAgIGRlZmF1bHRUaXRsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gICAgICAgIGRlZmVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gICAgICAgIGVuY29kZVNwZWNpYWxDaGFyYWN0ZXJzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gICAgICAgIGh0bWxBdHRyaWJ1dGVzOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgICAgICAgbGluazogX3Byb3BUeXBlczIuZGVmYXVsdC5hcnJheU9mKF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0KSxcbiAgICAgICAgbWV0YTogX3Byb3BUeXBlczIuZGVmYXVsdC5hcnJheU9mKF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0KSxcbiAgICAgICAgbm9zY3JpcHQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYXJyYXlPZihfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCksXG4gICAgICAgIG9uQ2hhbmdlQ2xpZW50U3RhdGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgICAgICAgc2NyaXB0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFycmF5T2YoX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QpLFxuICAgICAgICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5hcnJheU9mKF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0KSxcbiAgICAgICAgdGl0bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAgICAgICB0aXRsZUF0dHJpYnV0ZXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAgICAgICB0aXRsZVRlbXBsYXRlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZ1xuICAgIH0sIF9jbGFzcy5kZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGRlZmVyOiB0cnVlLFxuICAgICAgICBlbmNvZGVTcGVjaWFsQ2hhcmFjdGVyczogdHJ1ZVxuICAgIH0sIF9jbGFzcy5wZWVrID0gQ29tcG9uZW50LnBlZWssIF9jbGFzcy5yZXdpbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBtYXBwZWRTdGF0ZSA9IENvbXBvbmVudC5yZXdpbmQoKTtcbiAgICAgICAgaWYgKCFtYXBwZWRTdGF0ZSkge1xuICAgICAgICAgICAgLy8gcHJvdmlkZSBmYWxsYmFjayBpZiBtYXBwZWRTdGF0ZSBpcyB1bmRlZmluZWRcbiAgICAgICAgICAgIG1hcHBlZFN0YXRlID0gKDAsIF9IZWxtZXRVdGlscy5tYXBTdGF0ZU9uU2VydmVyKSh7XG4gICAgICAgICAgICAgICAgYmFzZVRhZzogW10sXG4gICAgICAgICAgICAgICAgYm9keUF0dHJpYnV0ZXM6IHt9LFxuICAgICAgICAgICAgICAgIGVuY29kZVNwZWNpYWxDaGFyYWN0ZXJzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGh0bWxBdHRyaWJ1dGVzOiB7fSxcbiAgICAgICAgICAgICAgICBsaW5rVGFnczogW10sXG4gICAgICAgICAgICAgICAgbWV0YVRhZ3M6IFtdLFxuICAgICAgICAgICAgICAgIG5vc2NyaXB0VGFnczogW10sXG4gICAgICAgICAgICAgICAgc2NyaXB0VGFnczogW10sXG4gICAgICAgICAgICAgICAgc3R5bGVUYWdzOiBbXSxcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgICAgICAgICB0aXRsZUF0dHJpYnV0ZXM6IHt9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtYXBwZWRTdGF0ZTtcbiAgICB9LCBfdGVtcDtcbn07XG5cbnZhciBOdWxsQ29tcG9uZW50ID0gZnVuY3Rpb24gTnVsbENvbXBvbmVudCgpIHtcbiAgICByZXR1cm4gbnVsbDtcbn07XG5cbnZhciBIZWxtZXRTaWRlRWZmZWN0cyA9ICgwLCBfcmVhY3RTaWRlRWZmZWN0Mi5kZWZhdWx0KShfSGVsbWV0VXRpbHMucmVkdWNlUHJvcHNUb1N0YXRlLCBfSGVsbWV0VXRpbHMuaGFuZGxlQ2xpZW50U3RhdGVDaGFuZ2UsIF9IZWxtZXRVdGlscy5tYXBTdGF0ZU9uU2VydmVyKShOdWxsQ29tcG9uZW50KTtcblxudmFyIEhlbG1ldEV4cG9ydCA9IEhlbG1ldChIZWxtZXRTaWRlRWZmZWN0cyk7XG5IZWxtZXRFeHBvcnQucmVuZGVyU3RhdGljID0gSGVsbWV0RXhwb3J0LnJld2luZDtcblxuZXhwb3J0cy5IZWxtZXQgPSBIZWxtZXRFeHBvcnQ7XG5leHBvcnRzLmRlZmF1bHQgPSBIZWxtZXRFeHBvcnQ7IiwiZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBBVFRSSUJVVEVfTkFNRVMgPSBleHBvcnRzLkFUVFJJQlVURV9OQU1FUyA9IHtcbiAgICBCT0RZOiBcImJvZHlBdHRyaWJ1dGVzXCIsXG4gICAgSFRNTDogXCJodG1sQXR0cmlidXRlc1wiLFxuICAgIFRJVExFOiBcInRpdGxlQXR0cmlidXRlc1wiXG59O1xuXG52YXIgVEFHX05BTUVTID0gZXhwb3J0cy5UQUdfTkFNRVMgPSB7XG4gICAgQkFTRTogXCJiYXNlXCIsXG4gICAgQk9EWTogXCJib2R5XCIsXG4gICAgSEVBRDogXCJoZWFkXCIsXG4gICAgSFRNTDogXCJodG1sXCIsXG4gICAgTElOSzogXCJsaW5rXCIsXG4gICAgTUVUQTogXCJtZXRhXCIsXG4gICAgTk9TQ1JJUFQ6IFwibm9zY3JpcHRcIixcbiAgICBTQ1JJUFQ6IFwic2NyaXB0XCIsXG4gICAgU1RZTEU6IFwic3R5bGVcIixcbiAgICBUSVRMRTogXCJ0aXRsZVwiXG59O1xuXG52YXIgVkFMSURfVEFHX05BTUVTID0gZXhwb3J0cy5WQUxJRF9UQUdfTkFNRVMgPSBPYmplY3Qua2V5cyhUQUdfTkFNRVMpLm1hcChmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiBUQUdfTkFNRVNbbmFtZV07XG59KTtcblxudmFyIFRBR19QUk9QRVJUSUVTID0gZXhwb3J0cy5UQUdfUFJPUEVSVElFUyA9IHtcbiAgICBDSEFSU0VUOiBcImNoYXJzZXRcIixcbiAgICBDU1NfVEVYVDogXCJjc3NUZXh0XCIsXG4gICAgSFJFRjogXCJocmVmXCIsXG4gICAgSFRUUEVRVUlWOiBcImh0dHAtZXF1aXZcIixcbiAgICBJTk5FUl9IVE1MOiBcImlubmVySFRNTFwiLFxuICAgIElURU1fUFJPUDogXCJpdGVtcHJvcFwiLFxuICAgIE5BTUU6IFwibmFtZVwiLFxuICAgIFBST1BFUlRZOiBcInByb3BlcnR5XCIsXG4gICAgUkVMOiBcInJlbFwiLFxuICAgIFNSQzogXCJzcmNcIlxufTtcblxudmFyIFJFQUNUX1RBR19NQVAgPSBleHBvcnRzLlJFQUNUX1RBR19NQVAgPSB7XG4gICAgYWNjZXNza2V5OiBcImFjY2Vzc0tleVwiLFxuICAgIGNoYXJzZXQ6IFwiY2hhclNldFwiLFxuICAgIGNsYXNzOiBcImNsYXNzTmFtZVwiLFxuICAgIGNvbnRlbnRlZGl0YWJsZTogXCJjb250ZW50RWRpdGFibGVcIixcbiAgICBjb250ZXh0bWVudTogXCJjb250ZXh0TWVudVwiLFxuICAgIFwiaHR0cC1lcXVpdlwiOiBcImh0dHBFcXVpdlwiLFxuICAgIGl0ZW1wcm9wOiBcIml0ZW1Qcm9wXCIsXG4gICAgdGFiaW5kZXg6IFwidGFiSW5kZXhcIlxufTtcblxudmFyIEhFTE1FVF9QUk9QUyA9IGV4cG9ydHMuSEVMTUVUX1BST1BTID0ge1xuICAgIERFRkFVTFRfVElUTEU6IFwiZGVmYXVsdFRpdGxlXCIsXG4gICAgREVGRVI6IFwiZGVmZXJcIixcbiAgICBFTkNPREVfU1BFQ0lBTF9DSEFSQUNURVJTOiBcImVuY29kZVNwZWNpYWxDaGFyYWN0ZXJzXCIsXG4gICAgT05fQ0hBTkdFX0NMSUVOVF9TVEFURTogXCJvbkNoYW5nZUNsaWVudFN0YXRlXCIsXG4gICAgVElUTEVfVEVNUExBVEU6IFwidGl0bGVUZW1wbGF0ZVwiXG59O1xuXG52YXIgSFRNTF9UQUdfTUFQID0gZXhwb3J0cy5IVE1MX1RBR19NQVAgPSBPYmplY3Qua2V5cyhSRUFDVF9UQUdfTUFQKS5yZWR1Y2UoZnVuY3Rpb24gKG9iaiwga2V5KSB7XG4gICAgb2JqW1JFQUNUX1RBR19NQVBba2V5XV0gPSBrZXk7XG4gICAgcmV0dXJuIG9iajtcbn0sIHt9KTtcblxudmFyIFNFTEZfQ0xPU0lOR19UQUdTID0gZXhwb3J0cy5TRUxGX0NMT1NJTkdfVEFHUyA9IFtUQUdfTkFNRVMuTk9TQ1JJUFQsIFRBR19OQU1FUy5TQ1JJUFQsIFRBR19OQU1FUy5TVFlMRV07XG5cbnZhciBIRUxNRVRfQVRUUklCVVRFID0gZXhwb3J0cy5IRUxNRVRfQVRUUklCVVRFID0gXCJkYXRhLXJlYWN0LWhlbG1ldFwiOyIsImV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLndhcm4gPSBleHBvcnRzLnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGV4cG9ydHMucmVkdWNlUHJvcHNUb1N0YXRlID0gZXhwb3J0cy5tYXBTdGF0ZU9uU2VydmVyID0gZXhwb3J0cy5oYW5kbGVDbGllbnRTdGF0ZUNoYW5nZSA9IGV4cG9ydHMuY29udmVydFJlYWN0UHJvcHN0b0h0bWxBdHRyaWJ1dGVzID0gdW5kZWZpbmVkO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX29iamVjdEFzc2lnbiA9IHJlcXVpcmUoXCJvYmplY3QtYXNzaWduXCIpO1xuXG52YXIgX29iamVjdEFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RBc3NpZ24pO1xuXG52YXIgX0hlbG1ldENvbnN0YW50cyA9IHJlcXVpcmUoXCIuL0hlbG1ldENvbnN0YW50cy5qc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGVuY29kZVNwZWNpYWxDaGFyYWN0ZXJzID0gZnVuY3Rpb24gZW5jb2RlU3BlY2lhbENoYXJhY3RlcnMoc3RyKSB7XG4gICAgdmFyIGVuY29kZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdHJ1ZTtcblxuICAgIGlmIChlbmNvZGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcoc3RyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gU3RyaW5nKHN0cikucmVwbGFjZSgvJi9nLCBcIiZhbXA7XCIpLnJlcGxhY2UoLzwvZywgXCImbHQ7XCIpLnJlcGxhY2UoLz4vZywgXCImZ3Q7XCIpLnJlcGxhY2UoL1wiL2csIFwiJnF1b3Q7XCIpLnJlcGxhY2UoLycvZywgXCImI3gyNztcIik7XG59O1xuXG52YXIgZ2V0VGl0bGVGcm9tUHJvcHNMaXN0ID0gZnVuY3Rpb24gZ2V0VGl0bGVGcm9tUHJvcHNMaXN0KHByb3BzTGlzdCkge1xuICAgIHZhciBpbm5lcm1vc3RUaXRsZSA9IGdldElubmVybW9zdFByb3BlcnR5KHByb3BzTGlzdCwgX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuVElUTEUpO1xuICAgIHZhciBpbm5lcm1vc3RUZW1wbGF0ZSA9IGdldElubmVybW9zdFByb3BlcnR5KHByb3BzTGlzdCwgX0hlbG1ldENvbnN0YW50cy5IRUxNRVRfUFJPUFMuVElUTEVfVEVNUExBVEUpO1xuXG4gICAgaWYgKGlubmVybW9zdFRlbXBsYXRlICYmIGlubmVybW9zdFRpdGxlKSB7XG4gICAgICAgIC8vIHVzZSBmdW5jdGlvbiBhcmcgdG8gYXZvaWQgbmVlZCB0byBlc2NhcGUgJCBjaGFyYWN0ZXJzXG4gICAgICAgIHJldHVybiBpbm5lcm1vc3RUZW1wbGF0ZS5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5uZXJtb3N0VGl0bGU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBpbm5lcm1vc3REZWZhdWx0VGl0bGUgPSBnZXRJbm5lcm1vc3RQcm9wZXJ0eShwcm9wc0xpc3QsIF9IZWxtZXRDb25zdGFudHMuSEVMTUVUX1BST1BTLkRFRkFVTFRfVElUTEUpO1xuXG4gICAgcmV0dXJuIGlubmVybW9zdFRpdGxlIHx8IGlubmVybW9zdERlZmF1bHRUaXRsZSB8fCB1bmRlZmluZWQ7XG59O1xuXG52YXIgZ2V0T25DaGFuZ2VDbGllbnRTdGF0ZSA9IGZ1bmN0aW9uIGdldE9uQ2hhbmdlQ2xpZW50U3RhdGUocHJvcHNMaXN0KSB7XG4gICAgcmV0dXJuIGdldElubmVybW9zdFByb3BlcnR5KHByb3BzTGlzdCwgX0hlbG1ldENvbnN0YW50cy5IRUxNRVRfUFJPUFMuT05fQ0hBTkdFX0NMSUVOVF9TVEFURSkgfHwgZnVuY3Rpb24gKCkge307XG59O1xuXG52YXIgZ2V0QXR0cmlidXRlc0Zyb21Qcm9wc0xpc3QgPSBmdW5jdGlvbiBnZXRBdHRyaWJ1dGVzRnJvbVByb3BzTGlzdCh0YWdUeXBlLCBwcm9wc0xpc3QpIHtcbiAgICByZXR1cm4gcHJvcHNMaXN0LmZpbHRlcihmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBwcm9wc1t0YWdUeXBlXSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICB9KS5tYXAoZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgIHJldHVybiBwcm9wc1t0YWdUeXBlXTtcbiAgICB9KS5yZWR1Y2UoZnVuY3Rpb24gKHRhZ0F0dHJzLCBjdXJyZW50KSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgdGFnQXR0cnMsIGN1cnJlbnQpO1xuICAgIH0sIHt9KTtcbn07XG5cbnZhciBnZXRCYXNlVGFnRnJvbVByb3BzTGlzdCA9IGZ1bmN0aW9uIGdldEJhc2VUYWdGcm9tUHJvcHNMaXN0KHByaW1hcnlBdHRyaWJ1dGVzLCBwcm9wc0xpc3QpIHtcbiAgICByZXR1cm4gcHJvcHNMaXN0LmZpbHRlcihmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBwcm9wc1tfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5CQVNFXSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICB9KS5tYXAoZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgIHJldHVybiBwcm9wc1tfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5CQVNFXTtcbiAgICB9KS5yZXZlcnNlKCkucmVkdWNlKGZ1bmN0aW9uIChpbm5lcm1vc3RCYXNlVGFnLCB0YWcpIHtcbiAgICAgICAgaWYgKCFpbm5lcm1vc3RCYXNlVGFnLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0YWcpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgYXR0cmlidXRlS2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICAgICAgICB2YXIgbG93ZXJDYXNlQXR0cmlidXRlS2V5ID0gYXR0cmlidXRlS2V5LnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAocHJpbWFyeUF0dHJpYnV0ZXMuaW5kZXhPZihsb3dlckNhc2VBdHRyaWJ1dGVLZXkpICE9PSAtMSAmJiB0YWdbbG93ZXJDYXNlQXR0cmlidXRlS2V5XSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5uZXJtb3N0QmFzZVRhZy5jb25jYXQodGFnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5uZXJtb3N0QmFzZVRhZztcbiAgICB9LCBbXSk7XG59O1xuXG52YXIgZ2V0VGFnc0Zyb21Qcm9wc0xpc3QgPSBmdW5jdGlvbiBnZXRUYWdzRnJvbVByb3BzTGlzdCh0YWdOYW1lLCBwcmltYXJ5QXR0cmlidXRlcywgcHJvcHNMaXN0KSB7XG4gICAgLy8gQ2FsY3VsYXRlIGxpc3Qgb2YgdGFncywgZ2l2aW5nIHByaW9yaXR5IGlubmVybW9zdCBjb21wb25lbnQgKGVuZCBvZiB0aGUgcHJvcHNsaXN0KVxuICAgIHZhciBhcHByb3ZlZFNlZW5UYWdzID0ge307XG5cbiAgICByZXR1cm4gcHJvcHNMaXN0LmZpbHRlcihmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcHNbdGFnTmFtZV0pKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHByb3BzW3RhZ05hbWVdICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICB3YXJuKFwiSGVsbWV0OiBcIiArIHRhZ05hbWUgKyBcIiBzaG91bGQgYmUgb2YgdHlwZSBcXFwiQXJyYXlcXFwiLiBJbnN0ZWFkIGZvdW5kIHR5cGUgXFxcIlwiICsgX3R5cGVvZihwcm9wc1t0YWdOYW1lXSkgKyBcIlxcXCJcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pLm1hcChmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHByb3BzW3RhZ05hbWVdO1xuICAgIH0pLnJldmVyc2UoKS5yZWR1Y2UoZnVuY3Rpb24gKGFwcHJvdmVkVGFncywgaW5zdGFuY2VUYWdzKSB7XG4gICAgICAgIHZhciBpbnN0YW5jZVNlZW5UYWdzID0ge307XG5cbiAgICAgICAgaW5zdGFuY2VUYWdzLmZpbHRlcihmdW5jdGlvbiAodGFnKSB7XG4gICAgICAgICAgICB2YXIgcHJpbWFyeUF0dHJpYnV0ZUtleSA9IHZvaWQgMDtcbiAgICAgICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModGFnKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBhdHRyaWJ1dGVLZXkgPSBrZXlzW2ldO1xuICAgICAgICAgICAgICAgIHZhciBsb3dlckNhc2VBdHRyaWJ1dGVLZXkgPSBhdHRyaWJ1dGVLZXkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgICAgICAgIC8vIFNwZWNpYWwgcnVsZSB3aXRoIGxpbmsgdGFncywgc2luY2UgcmVsIGFuZCBocmVmIGFyZSBib3RoIHByaW1hcnkgdGFncywgcmVsIHRha2VzIHByaW9yaXR5XG4gICAgICAgICAgICAgICAgaWYgKHByaW1hcnlBdHRyaWJ1dGVzLmluZGV4T2YobG93ZXJDYXNlQXR0cmlidXRlS2V5KSAhPT0gLTEgJiYgIShwcmltYXJ5QXR0cmlidXRlS2V5ID09PSBfSGVsbWV0Q29uc3RhbnRzLlRBR19QUk9QRVJUSUVTLlJFTCAmJiB0YWdbcHJpbWFyeUF0dHJpYnV0ZUtleV0udG9Mb3dlckNhc2UoKSA9PT0gXCJjYW5vbmljYWxcIikgJiYgIShsb3dlckNhc2VBdHRyaWJ1dGVLZXkgPT09IF9IZWxtZXRDb25zdGFudHMuVEFHX1BST1BFUlRJRVMuUkVMICYmIHRhZ1tsb3dlckNhc2VBdHRyaWJ1dGVLZXldLnRvTG93ZXJDYXNlKCkgPT09IFwic3R5bGVzaGVldFwiKSkge1xuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5QXR0cmlidXRlS2V5ID0gbG93ZXJDYXNlQXR0cmlidXRlS2V5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBTcGVjaWFsIGNhc2UgZm9yIGlubmVySFRNTCB3aGljaCBkb2Vzbid0IHdvcmsgbG93ZXJjYXNlZFxuICAgICAgICAgICAgICAgIGlmIChwcmltYXJ5QXR0cmlidXRlcy5pbmRleE9mKGF0dHJpYnV0ZUtleSkgIT09IC0xICYmIChhdHRyaWJ1dGVLZXkgPT09IF9IZWxtZXRDb25zdGFudHMuVEFHX1BST1BFUlRJRVMuSU5ORVJfSFRNTCB8fCBhdHRyaWJ1dGVLZXkgPT09IF9IZWxtZXRDb25zdGFudHMuVEFHX1BST1BFUlRJRVMuQ1NTX1RFWFQgfHwgYXR0cmlidXRlS2V5ID09PSBfSGVsbWV0Q29uc3RhbnRzLlRBR19QUk9QRVJUSUVTLklURU1fUFJPUCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJpbWFyeUF0dHJpYnV0ZUtleSA9IGF0dHJpYnV0ZUtleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghcHJpbWFyeUF0dHJpYnV0ZUtleSB8fCAhdGFnW3ByaW1hcnlBdHRyaWJ1dGVLZXldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0YWdbcHJpbWFyeUF0dHJpYnV0ZUtleV0udG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgICAgaWYgKCFhcHByb3ZlZFNlZW5UYWdzW3ByaW1hcnlBdHRyaWJ1dGVLZXldKSB7XG4gICAgICAgICAgICAgICAgYXBwcm92ZWRTZWVuVGFnc1twcmltYXJ5QXR0cmlidXRlS2V5XSA9IHt9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWluc3RhbmNlU2VlblRhZ3NbcHJpbWFyeUF0dHJpYnV0ZUtleV0pIHtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZVNlZW5UYWdzW3ByaW1hcnlBdHRyaWJ1dGVLZXldID0ge307XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghYXBwcm92ZWRTZWVuVGFnc1twcmltYXJ5QXR0cmlidXRlS2V5XVt2YWx1ZV0pIHtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZVNlZW5UYWdzW3ByaW1hcnlBdHRyaWJ1dGVLZXldW3ZhbHVlXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSkucmV2ZXJzZSgpLmZvckVhY2goZnVuY3Rpb24gKHRhZykge1xuICAgICAgICAgICAgcmV0dXJuIGFwcHJvdmVkVGFncy5wdXNoKHRhZyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBzZWVuIHRhZ3Mgd2l0aCB0YWdzIGZyb20gdGhpcyBpbnN0YW5jZVxuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGluc3RhbmNlU2VlblRhZ3MpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBhdHRyaWJ1dGVLZXkgPSBrZXlzW2ldO1xuICAgICAgICAgICAgdmFyIHRhZ1VuaW9uID0gKDAsIF9vYmplY3RBc3NpZ24yLmRlZmF1bHQpKHt9LCBhcHByb3ZlZFNlZW5UYWdzW2F0dHJpYnV0ZUtleV0sIGluc3RhbmNlU2VlblRhZ3NbYXR0cmlidXRlS2V5XSk7XG5cbiAgICAgICAgICAgIGFwcHJvdmVkU2VlblRhZ3NbYXR0cmlidXRlS2V5XSA9IHRhZ1VuaW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFwcHJvdmVkVGFncztcbiAgICB9LCBbXSkucmV2ZXJzZSgpO1xufTtcblxudmFyIGdldElubmVybW9zdFByb3BlcnR5ID0gZnVuY3Rpb24gZ2V0SW5uZXJtb3N0UHJvcGVydHkocHJvcHNMaXN0LCBwcm9wZXJ0eSkge1xuICAgIGZvciAodmFyIGkgPSBwcm9wc0xpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgdmFyIHByb3BzID0gcHJvcHNMaXN0W2ldO1xuXG4gICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9wc1twcm9wZXJ0eV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbn07XG5cbnZhciByZWR1Y2VQcm9wc1RvU3RhdGUgPSBmdW5jdGlvbiByZWR1Y2VQcm9wc1RvU3RhdGUocHJvcHNMaXN0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYmFzZVRhZzogZ2V0QmFzZVRhZ0Zyb21Qcm9wc0xpc3QoW19IZWxtZXRDb25zdGFudHMuVEFHX1BST1BFUlRJRVMuSFJFRl0sIHByb3BzTGlzdCksXG4gICAgICAgIGJvZHlBdHRyaWJ1dGVzOiBnZXRBdHRyaWJ1dGVzRnJvbVByb3BzTGlzdChfSGVsbWV0Q29uc3RhbnRzLkFUVFJJQlVURV9OQU1FUy5CT0RZLCBwcm9wc0xpc3QpLFxuICAgICAgICBkZWZlcjogZ2V0SW5uZXJtb3N0UHJvcGVydHkocHJvcHNMaXN0LCBfSGVsbWV0Q29uc3RhbnRzLkhFTE1FVF9QUk9QUy5ERUZFUiksXG4gICAgICAgIGVuY29kZTogZ2V0SW5uZXJtb3N0UHJvcGVydHkocHJvcHNMaXN0LCBfSGVsbWV0Q29uc3RhbnRzLkhFTE1FVF9QUk9QUy5FTkNPREVfU1BFQ0lBTF9DSEFSQUNURVJTKSxcbiAgICAgICAgaHRtbEF0dHJpYnV0ZXM6IGdldEF0dHJpYnV0ZXNGcm9tUHJvcHNMaXN0KF9IZWxtZXRDb25zdGFudHMuQVRUUklCVVRFX05BTUVTLkhUTUwsIHByb3BzTGlzdCksXG4gICAgICAgIGxpbmtUYWdzOiBnZXRUYWdzRnJvbVByb3BzTGlzdChfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5MSU5LLCBbX0hlbG1ldENvbnN0YW50cy5UQUdfUFJPUEVSVElFUy5SRUwsIF9IZWxtZXRDb25zdGFudHMuVEFHX1BST1BFUlRJRVMuSFJFRl0sIHByb3BzTGlzdCksXG4gICAgICAgIG1ldGFUYWdzOiBnZXRUYWdzRnJvbVByb3BzTGlzdChfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5NRVRBLCBbX0hlbG1ldENvbnN0YW50cy5UQUdfUFJPUEVSVElFUy5OQU1FLCBfSGVsbWV0Q29uc3RhbnRzLlRBR19QUk9QRVJUSUVTLkNIQVJTRVQsIF9IZWxtZXRDb25zdGFudHMuVEFHX1BST1BFUlRJRVMuSFRUUEVRVUlWLCBfSGVsbWV0Q29uc3RhbnRzLlRBR19QUk9QRVJUSUVTLlBST1BFUlRZLCBfSGVsbWV0Q29uc3RhbnRzLlRBR19QUk9QRVJUSUVTLklURU1fUFJPUF0sIHByb3BzTGlzdCksXG4gICAgICAgIG5vc2NyaXB0VGFnczogZ2V0VGFnc0Zyb21Qcm9wc0xpc3QoX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuTk9TQ1JJUFQsIFtfSGVsbWV0Q29uc3RhbnRzLlRBR19QUk9QRVJUSUVTLklOTkVSX0hUTUxdLCBwcm9wc0xpc3QpLFxuICAgICAgICBvbkNoYW5nZUNsaWVudFN0YXRlOiBnZXRPbkNoYW5nZUNsaWVudFN0YXRlKHByb3BzTGlzdCksXG4gICAgICAgIHNjcmlwdFRhZ3M6IGdldFRhZ3NGcm9tUHJvcHNMaXN0KF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLlNDUklQVCwgW19IZWxtZXRDb25zdGFudHMuVEFHX1BST1BFUlRJRVMuU1JDLCBfSGVsbWV0Q29uc3RhbnRzLlRBR19QUk9QRVJUSUVTLklOTkVSX0hUTUxdLCBwcm9wc0xpc3QpLFxuICAgICAgICBzdHlsZVRhZ3M6IGdldFRhZ3NGcm9tUHJvcHNMaXN0KF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLlNUWUxFLCBbX0hlbG1ldENvbnN0YW50cy5UQUdfUFJPUEVSVElFUy5DU1NfVEVYVF0sIHByb3BzTGlzdCksXG4gICAgICAgIHRpdGxlOiBnZXRUaXRsZUZyb21Qcm9wc0xpc3QocHJvcHNMaXN0KSxcbiAgICAgICAgdGl0bGVBdHRyaWJ1dGVzOiBnZXRBdHRyaWJ1dGVzRnJvbVByb3BzTGlzdChfSGVsbWV0Q29uc3RhbnRzLkFUVFJJQlVURV9OQU1FUy5USVRMRSwgcHJvcHNMaXN0KVxuICAgIH07XG59O1xuXG52YXIgcmFmUG9seWZpbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNsb2NrID0gRGF0ZS5ub3coKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGN1cnJlbnRUaW1lID0gRGF0ZS5ub3coKTtcblxuICAgICAgICBpZiAoY3VycmVudFRpbWUgLSBjbG9jayA+IDE2KSB7XG4gICAgICAgICAgICBjbG9jayA9IGN1cnJlbnRUaW1lO1xuICAgICAgICAgICAgY2FsbGJhY2soY3VycmVudFRpbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmFmUG9seWZpbGwoY2FsbGJhY2spO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgIH1cbiAgICB9O1xufSgpO1xuXG52YXIgY2FmUG9seWZpbGwgPSBmdW5jdGlvbiBjYWZQb2x5ZmlsbChpZCkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpO1xufTtcblxudmFyIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCByYWZQb2x5ZmlsbCA6IGdsb2JhbC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgcmFmUG9seWZpbGw7XG5cbnZhciBjYW5jZWxBbmltYXRpb25GcmFtZSA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tb3pDYW5jZWxBbmltYXRpb25GcmFtZSB8fCBjYWZQb2x5ZmlsbCA6IGdsb2JhbC5jYW5jZWxBbmltYXRpb25GcmFtZSB8fCBjYWZQb2x5ZmlsbDtcblxudmFyIHdhcm4gPSBmdW5jdGlvbiB3YXJuKG1zZykge1xuICAgIHJldHVybiBjb25zb2xlICYmIHR5cGVvZiBjb25zb2xlLndhcm4gPT09IFwiZnVuY3Rpb25cIiAmJiBjb25zb2xlLndhcm4obXNnKTtcbn07XG5cbnZhciBfaGVsbWV0Q2FsbGJhY2sgPSBudWxsO1xuXG52YXIgaGFuZGxlQ2xpZW50U3RhdGVDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVDbGllbnRTdGF0ZUNoYW5nZShuZXdTdGF0ZSkge1xuICAgIGlmIChfaGVsbWV0Q2FsbGJhY2spIHtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoX2hlbG1ldENhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBpZiAobmV3U3RhdGUuZGVmZXIpIHtcbiAgICAgICAgX2hlbG1ldENhbGxiYWNrID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbW1pdFRhZ0NoYW5nZXMobmV3U3RhdGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfaGVsbWV0Q2FsbGJhY2sgPSBudWxsO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbW1pdFRhZ0NoYW5nZXMobmV3U3RhdGUpO1xuICAgICAgICBfaGVsbWV0Q2FsbGJhY2sgPSBudWxsO1xuICAgIH1cbn07XG5cbnZhciBjb21taXRUYWdDaGFuZ2VzID0gZnVuY3Rpb24gY29tbWl0VGFnQ2hhbmdlcyhuZXdTdGF0ZSwgY2IpIHtcbiAgICB2YXIgYmFzZVRhZyA9IG5ld1N0YXRlLmJhc2VUYWcsXG4gICAgICAgIGJvZHlBdHRyaWJ1dGVzID0gbmV3U3RhdGUuYm9keUF0dHJpYnV0ZXMsXG4gICAgICAgIGh0bWxBdHRyaWJ1dGVzID0gbmV3U3RhdGUuaHRtbEF0dHJpYnV0ZXMsXG4gICAgICAgIGxpbmtUYWdzID0gbmV3U3RhdGUubGlua1RhZ3MsXG4gICAgICAgIG1ldGFUYWdzID0gbmV3U3RhdGUubWV0YVRhZ3MsXG4gICAgICAgIG5vc2NyaXB0VGFncyA9IG5ld1N0YXRlLm5vc2NyaXB0VGFncyxcbiAgICAgICAgb25DaGFuZ2VDbGllbnRTdGF0ZSA9IG5ld1N0YXRlLm9uQ2hhbmdlQ2xpZW50U3RhdGUsXG4gICAgICAgIHNjcmlwdFRhZ3MgPSBuZXdTdGF0ZS5zY3JpcHRUYWdzLFxuICAgICAgICBzdHlsZVRhZ3MgPSBuZXdTdGF0ZS5zdHlsZVRhZ3MsXG4gICAgICAgIHRpdGxlID0gbmV3U3RhdGUudGl0bGUsXG4gICAgICAgIHRpdGxlQXR0cmlidXRlcyA9IG5ld1N0YXRlLnRpdGxlQXR0cmlidXRlcztcblxuICAgIHVwZGF0ZUF0dHJpYnV0ZXMoX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuQk9EWSwgYm9keUF0dHJpYnV0ZXMpO1xuICAgIHVwZGF0ZUF0dHJpYnV0ZXMoX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuSFRNTCwgaHRtbEF0dHJpYnV0ZXMpO1xuXG4gICAgdXBkYXRlVGl0bGUodGl0bGUsIHRpdGxlQXR0cmlidXRlcyk7XG5cbiAgICB2YXIgdGFnVXBkYXRlcyA9IHtcbiAgICAgICAgYmFzZVRhZzogdXBkYXRlVGFncyhfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5CQVNFLCBiYXNlVGFnKSxcbiAgICAgICAgbGlua1RhZ3M6IHVwZGF0ZVRhZ3MoX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuTElOSywgbGlua1RhZ3MpLFxuICAgICAgICBtZXRhVGFnczogdXBkYXRlVGFncyhfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5NRVRBLCBtZXRhVGFncyksXG4gICAgICAgIG5vc2NyaXB0VGFnczogdXBkYXRlVGFncyhfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5OT1NDUklQVCwgbm9zY3JpcHRUYWdzKSxcbiAgICAgICAgc2NyaXB0VGFnczogdXBkYXRlVGFncyhfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5TQ1JJUFQsIHNjcmlwdFRhZ3MpLFxuICAgICAgICBzdHlsZVRhZ3M6IHVwZGF0ZVRhZ3MoX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuU1RZTEUsIHN0eWxlVGFncylcbiAgICB9O1xuXG4gICAgdmFyIGFkZGVkVGFncyA9IHt9O1xuICAgIHZhciByZW1vdmVkVGFncyA9IHt9O1xuXG4gICAgT2JqZWN0LmtleXModGFnVXBkYXRlcykuZm9yRWFjaChmdW5jdGlvbiAodGFnVHlwZSkge1xuICAgICAgICB2YXIgX3RhZ1VwZGF0ZXMkdGFnVHlwZSA9IHRhZ1VwZGF0ZXNbdGFnVHlwZV0sXG4gICAgICAgICAgICBuZXdUYWdzID0gX3RhZ1VwZGF0ZXMkdGFnVHlwZS5uZXdUYWdzLFxuICAgICAgICAgICAgb2xkVGFncyA9IF90YWdVcGRhdGVzJHRhZ1R5cGUub2xkVGFncztcblxuXG4gICAgICAgIGlmIChuZXdUYWdzLmxlbmd0aCkge1xuICAgICAgICAgICAgYWRkZWRUYWdzW3RhZ1R5cGVdID0gbmV3VGFncztcbiAgICAgICAgfVxuICAgICAgICBpZiAob2xkVGFncy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJlbW92ZWRUYWdzW3RhZ1R5cGVdID0gdGFnVXBkYXRlc1t0YWdUeXBlXS5vbGRUYWdzO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBjYiAmJiBjYigpO1xuXG4gICAgb25DaGFuZ2VDbGllbnRTdGF0ZShuZXdTdGF0ZSwgYWRkZWRUYWdzLCByZW1vdmVkVGFncyk7XG59O1xuXG52YXIgZmxhdHRlbkFycmF5ID0gZnVuY3Rpb24gZmxhdHRlbkFycmF5KHBvc3NpYmxlQXJyYXkpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShwb3NzaWJsZUFycmF5KSA/IHBvc3NpYmxlQXJyYXkuam9pbihcIlwiKSA6IHBvc3NpYmxlQXJyYXk7XG59O1xuXG52YXIgdXBkYXRlVGl0bGUgPSBmdW5jdGlvbiB1cGRhdGVUaXRsZSh0aXRsZSwgYXR0cmlidXRlcykge1xuICAgIGlmICh0eXBlb2YgdGl0bGUgIT09IFwidW5kZWZpbmVkXCIgJiYgZG9jdW1lbnQudGl0bGUgIT09IHRpdGxlKSB7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gZmxhdHRlbkFycmF5KHRpdGxlKTtcbiAgICB9XG5cbiAgICB1cGRhdGVBdHRyaWJ1dGVzKF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLlRJVExFLCBhdHRyaWJ1dGVzKTtcbn07XG5cbnZhciB1cGRhdGVBdHRyaWJ1dGVzID0gZnVuY3Rpb24gdXBkYXRlQXR0cmlidXRlcyh0YWdOYW1lLCBhdHRyaWJ1dGVzKSB7XG4gICAgdmFyIGVsZW1lbnRUYWcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSh0YWdOYW1lKVswXTtcblxuICAgIGlmICghZWxlbWVudFRhZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGhlbG1ldEF0dHJpYnV0ZVN0cmluZyA9IGVsZW1lbnRUYWcuZ2V0QXR0cmlidXRlKF9IZWxtZXRDb25zdGFudHMuSEVMTUVUX0FUVFJJQlVURSk7XG4gICAgdmFyIGhlbG1ldEF0dHJpYnV0ZXMgPSBoZWxtZXRBdHRyaWJ1dGVTdHJpbmcgPyBoZWxtZXRBdHRyaWJ1dGVTdHJpbmcuc3BsaXQoXCIsXCIpIDogW107XG4gICAgdmFyIGF0dHJpYnV0ZXNUb1JlbW92ZSA9IFtdLmNvbmNhdChoZWxtZXRBdHRyaWJ1dGVzKTtcbiAgICB2YXIgYXR0cmlidXRlS2V5cyA9IE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhdHRyaWJ1dGVLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBhdHRyaWJ1dGUgPSBhdHRyaWJ1dGVLZXlzW2ldO1xuICAgICAgICB2YXIgdmFsdWUgPSBhdHRyaWJ1dGVzW2F0dHJpYnV0ZV0gfHwgXCJcIjtcblxuICAgICAgICBpZiAoZWxlbWVudFRhZy5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIGVsZW1lbnRUYWcuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhlbG1ldEF0dHJpYnV0ZXMuaW5kZXhPZihhdHRyaWJ1dGUpID09PSAtMSkge1xuICAgICAgICAgICAgaGVsbWV0QXR0cmlidXRlcy5wdXNoKGF0dHJpYnV0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaW5kZXhUb1NhdmUgPSBhdHRyaWJ1dGVzVG9SZW1vdmUuaW5kZXhPZihhdHRyaWJ1dGUpO1xuICAgICAgICBpZiAoaW5kZXhUb1NhdmUgIT09IC0xKSB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzVG9SZW1vdmUuc3BsaWNlKGluZGV4VG9TYXZlLCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gYXR0cmlidXRlc1RvUmVtb3ZlLmxlbmd0aCAtIDE7IF9pID49IDA7IF9pLS0pIHtcbiAgICAgICAgZWxlbWVudFRhZy5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlc1RvUmVtb3ZlW19pXSk7XG4gICAgfVxuXG4gICAgaWYgKGhlbG1ldEF0dHJpYnV0ZXMubGVuZ3RoID09PSBhdHRyaWJ1dGVzVG9SZW1vdmUubGVuZ3RoKSB7XG4gICAgICAgIGVsZW1lbnRUYWcucmVtb3ZlQXR0cmlidXRlKF9IZWxtZXRDb25zdGFudHMuSEVMTUVUX0FUVFJJQlVURSk7XG4gICAgfSBlbHNlIGlmIChlbGVtZW50VGFnLmdldEF0dHJpYnV0ZShfSGVsbWV0Q29uc3RhbnRzLkhFTE1FVF9BVFRSSUJVVEUpICE9PSBhdHRyaWJ1dGVLZXlzLmpvaW4oXCIsXCIpKSB7XG4gICAgICAgIGVsZW1lbnRUYWcuc2V0QXR0cmlidXRlKF9IZWxtZXRDb25zdGFudHMuSEVMTUVUX0FUVFJJQlVURSwgYXR0cmlidXRlS2V5cy5qb2luKFwiLFwiKSk7XG4gICAgfVxufTtcblxudmFyIHVwZGF0ZVRhZ3MgPSBmdW5jdGlvbiB1cGRhdGVUYWdzKHR5cGUsIHRhZ3MpIHtcbiAgICB2YXIgaGVhZEVsZW1lbnQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuSEVBRCk7XG4gICAgdmFyIHRhZ05vZGVzID0gaGVhZEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0eXBlICsgXCJbXCIgKyBfSGVsbWV0Q29uc3RhbnRzLkhFTE1FVF9BVFRSSUJVVEUgKyBcIl1cIik7XG4gICAgdmFyIG9sZFRhZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0YWdOb2Rlcyk7XG4gICAgdmFyIG5ld1RhZ3MgPSBbXTtcbiAgICB2YXIgaW5kZXhUb0RlbGV0ZSA9IHZvaWQgMDtcblxuICAgIGlmICh0YWdzICYmIHRhZ3MubGVuZ3RoKSB7XG4gICAgICAgIHRhZ3MuZm9yRWFjaChmdW5jdGlvbiAodGFnKSB7XG4gICAgICAgICAgICB2YXIgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGF0dHJpYnV0ZSBpbiB0YWcpIHtcbiAgICAgICAgICAgICAgICBpZiAodGFnLmhhc093blByb3BlcnR5KGF0dHJpYnV0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZSA9PT0gX0hlbG1ldENvbnN0YW50cy5UQUdfUFJPUEVSVElFUy5JTk5FUl9IVE1MKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdFbGVtZW50LmlubmVySFRNTCA9IHRhZy5pbm5lckhUTUw7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYXR0cmlidXRlID09PSBfSGVsbWV0Q29uc3RhbnRzLlRBR19QUk9QRVJUSUVTLkNTU19URVhUKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3RWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3RWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSB0YWcuY3NzVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0YWcuY3NzVGV4dCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdHlwZW9mIHRhZ1thdHRyaWJ1dGVdID09PSBcInVuZGVmaW5lZFwiID8gXCJcIiA6IHRhZ1thdHRyaWJ1dGVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKF9IZWxtZXRDb25zdGFudHMuSEVMTUVUX0FUVFJJQlVURSwgXCJ0cnVlXCIpO1xuXG4gICAgICAgICAgICAvLyBSZW1vdmUgYSBkdXBsaWNhdGUgdGFnIGZyb20gZG9tVGFnc3RvUmVtb3ZlLCBzbyBpdCBpc24ndCBjbGVhcmVkLlxuICAgICAgICAgICAgaWYgKG9sZFRhZ3Muc29tZShmdW5jdGlvbiAoZXhpc3RpbmdUYWcsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgaW5kZXhUb0RlbGV0ZSA9IGluZGV4O1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXdFbGVtZW50LmlzRXF1YWxOb2RlKGV4aXN0aW5nVGFnKTtcbiAgICAgICAgICAgIH0pKSB7XG4gICAgICAgICAgICAgICAgb2xkVGFncy5zcGxpY2UoaW5kZXhUb0RlbGV0ZSwgMSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld1RhZ3MucHVzaChuZXdFbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb2xkVGFncy5mb3JFYWNoKGZ1bmN0aW9uICh0YWcpIHtcbiAgICAgICAgcmV0dXJuIHRhZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRhZyk7XG4gICAgfSk7XG4gICAgbmV3VGFncy5mb3JFYWNoKGZ1bmN0aW9uICh0YWcpIHtcbiAgICAgICAgcmV0dXJuIGhlYWRFbGVtZW50LmFwcGVuZENoaWxkKHRhZyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBvbGRUYWdzOiBvbGRUYWdzLFxuICAgICAgICBuZXdUYWdzOiBuZXdUYWdzXG4gICAgfTtcbn07XG5cbnZhciBnZW5lcmF0ZUVsZW1lbnRBdHRyaWJ1dGVzQXNTdHJpbmcgPSBmdW5jdGlvbiBnZW5lcmF0ZUVsZW1lbnRBdHRyaWJ1dGVzQXNTdHJpbmcoYXR0cmlidXRlcykge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5yZWR1Y2UoZnVuY3Rpb24gKHN0ciwga2V5KSB7XG4gICAgICAgIHZhciBhdHRyID0gdHlwZW9mIGF0dHJpYnV0ZXNba2V5XSAhPT0gXCJ1bmRlZmluZWRcIiA/IGtleSArIFwiPVxcXCJcIiArIGF0dHJpYnV0ZXNba2V5XSArIFwiXFxcIlwiIDogXCJcIiArIGtleTtcbiAgICAgICAgcmV0dXJuIHN0ciA/IHN0ciArIFwiIFwiICsgYXR0ciA6IGF0dHI7XG4gICAgfSwgXCJcIik7XG59O1xuXG52YXIgZ2VuZXJhdGVUaXRsZUFzU3RyaW5nID0gZnVuY3Rpb24gZ2VuZXJhdGVUaXRsZUFzU3RyaW5nKHR5cGUsIHRpdGxlLCBhdHRyaWJ1dGVzLCBlbmNvZGUpIHtcbiAgICB2YXIgYXR0cmlidXRlU3RyaW5nID0gZ2VuZXJhdGVFbGVtZW50QXR0cmlidXRlc0FzU3RyaW5nKGF0dHJpYnV0ZXMpO1xuICAgIHZhciBmbGF0dGVuZWRUaXRsZSA9IGZsYXR0ZW5BcnJheSh0aXRsZSk7XG4gICAgcmV0dXJuIGF0dHJpYnV0ZVN0cmluZyA/IFwiPFwiICsgdHlwZSArIFwiIFwiICsgX0hlbG1ldENvbnN0YW50cy5IRUxNRVRfQVRUUklCVVRFICsgXCI9XFxcInRydWVcXFwiIFwiICsgYXR0cmlidXRlU3RyaW5nICsgXCI+XCIgKyBlbmNvZGVTcGVjaWFsQ2hhcmFjdGVycyhmbGF0dGVuZWRUaXRsZSwgZW5jb2RlKSArIFwiPC9cIiArIHR5cGUgKyBcIj5cIiA6IFwiPFwiICsgdHlwZSArIFwiIFwiICsgX0hlbG1ldENvbnN0YW50cy5IRUxNRVRfQVRUUklCVVRFICsgXCI9XFxcInRydWVcXFwiPlwiICsgZW5jb2RlU3BlY2lhbENoYXJhY3RlcnMoZmxhdHRlbmVkVGl0bGUsIGVuY29kZSkgKyBcIjwvXCIgKyB0eXBlICsgXCI+XCI7XG59O1xuXG52YXIgZ2VuZXJhdGVUYWdzQXNTdHJpbmcgPSBmdW5jdGlvbiBnZW5lcmF0ZVRhZ3NBc1N0cmluZyh0eXBlLCB0YWdzLCBlbmNvZGUpIHtcbiAgICByZXR1cm4gdGFncy5yZWR1Y2UoZnVuY3Rpb24gKHN0ciwgdGFnKSB7XG4gICAgICAgIHZhciBhdHRyaWJ1dGVIdG1sID0gT2JqZWN0LmtleXModGFnKS5maWx0ZXIoZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgcmV0dXJuICEoYXR0cmlidXRlID09PSBfSGVsbWV0Q29uc3RhbnRzLlRBR19QUk9QRVJUSUVTLklOTkVSX0hUTUwgfHwgYXR0cmlidXRlID09PSBfSGVsbWV0Q29uc3RhbnRzLlRBR19QUk9QRVJUSUVTLkNTU19URVhUKTtcbiAgICAgICAgfSkucmVkdWNlKGZ1bmN0aW9uIChzdHJpbmcsIGF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgdmFyIGF0dHIgPSB0eXBlb2YgdGFnW2F0dHJpYnV0ZV0gPT09IFwidW5kZWZpbmVkXCIgPyBhdHRyaWJ1dGUgOiBhdHRyaWJ1dGUgKyBcIj1cXFwiXCIgKyBlbmNvZGVTcGVjaWFsQ2hhcmFjdGVycyh0YWdbYXR0cmlidXRlXSwgZW5jb2RlKSArIFwiXFxcIlwiO1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZyA/IHN0cmluZyArIFwiIFwiICsgYXR0ciA6IGF0dHI7XG4gICAgICAgIH0sIFwiXCIpO1xuXG4gICAgICAgIHZhciB0YWdDb250ZW50ID0gdGFnLmlubmVySFRNTCB8fCB0YWcuY3NzVGV4dCB8fCBcIlwiO1xuXG4gICAgICAgIHZhciBpc1NlbGZDbG9zaW5nID0gX0hlbG1ldENvbnN0YW50cy5TRUxGX0NMT1NJTkdfVEFHUy5pbmRleE9mKHR5cGUpID09PSAtMTtcblxuICAgICAgICByZXR1cm4gc3RyICsgXCI8XCIgKyB0eXBlICsgXCIgXCIgKyBfSGVsbWV0Q29uc3RhbnRzLkhFTE1FVF9BVFRSSUJVVEUgKyBcIj1cXFwidHJ1ZVxcXCIgXCIgKyBhdHRyaWJ1dGVIdG1sICsgKGlzU2VsZkNsb3NpbmcgPyBcIi8+XCIgOiBcIj5cIiArIHRhZ0NvbnRlbnQgKyBcIjwvXCIgKyB0eXBlICsgXCI+XCIpO1xuICAgIH0sIFwiXCIpO1xufTtcblxudmFyIGNvbnZlcnRFbGVtZW50QXR0cmlidXRlc3RvUmVhY3RQcm9wcyA9IGZ1bmN0aW9uIGNvbnZlcnRFbGVtZW50QXR0cmlidXRlc3RvUmVhY3RQcm9wcyhhdHRyaWJ1dGVzKSB7XG4gICAgdmFyIGluaXRQcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMoYXR0cmlidXRlcykucmVkdWNlKGZ1bmN0aW9uIChvYmosIGtleSkge1xuICAgICAgICBvYmpbX0hlbG1ldENvbnN0YW50cy5SRUFDVF9UQUdfTUFQW2tleV0gfHwga2V5XSA9IGF0dHJpYnV0ZXNba2V5XTtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9LCBpbml0UHJvcHMpO1xufTtcblxudmFyIGNvbnZlcnRSZWFjdFByb3BzdG9IdG1sQXR0cmlidXRlcyA9IGZ1bmN0aW9uIGNvbnZlcnRSZWFjdFByb3BzdG9IdG1sQXR0cmlidXRlcyhwcm9wcykge1xuICAgIHZhciBpbml0QXR0cmlidXRlcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMocHJvcHMpLnJlZHVjZShmdW5jdGlvbiAob2JqLCBrZXkpIHtcbiAgICAgICAgb2JqW19IZWxtZXRDb25zdGFudHMuSFRNTF9UQUdfTUFQW2tleV0gfHwga2V5XSA9IHByb3BzW2tleV07XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfSwgaW5pdEF0dHJpYnV0ZXMpO1xufTtcblxudmFyIGdlbmVyYXRlVGl0bGVBc1JlYWN0Q29tcG9uZW50ID0gZnVuY3Rpb24gZ2VuZXJhdGVUaXRsZUFzUmVhY3RDb21wb25lbnQodHlwZSwgdGl0bGUsIGF0dHJpYnV0ZXMpIHtcbiAgICB2YXIgX2luaXRQcm9wcztcblxuICAgIC8vIGFzc2lnbmluZyBpbnRvIGFuIGFycmF5IHRvIGRlZmluZSB0b1N0cmluZyBmdW5jdGlvbiBvbiBpdFxuICAgIHZhciBpbml0UHJvcHMgPSAoX2luaXRQcm9wcyA9IHtcbiAgICAgICAga2V5OiB0aXRsZVxuICAgIH0sIF9pbml0UHJvcHNbX0hlbG1ldENvbnN0YW50cy5IRUxNRVRfQVRUUklCVVRFXSA9IHRydWUsIF9pbml0UHJvcHMpO1xuICAgIHZhciBwcm9wcyA9IGNvbnZlcnRFbGVtZW50QXR0cmlidXRlc3RvUmVhY3RQcm9wcyhhdHRyaWJ1dGVzLCBpbml0UHJvcHMpO1xuXG4gICAgcmV0dXJuIFtfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5USVRMRSwgcHJvcHMsIHRpdGxlKV07XG59O1xuXG52YXIgZ2VuZXJhdGVUYWdzQXNSZWFjdENvbXBvbmVudCA9IGZ1bmN0aW9uIGdlbmVyYXRlVGFnc0FzUmVhY3RDb21wb25lbnQodHlwZSwgdGFncykge1xuICAgIHJldHVybiB0YWdzLm1hcChmdW5jdGlvbiAodGFnLCBpKSB7XG4gICAgICAgIHZhciBfbWFwcGVkVGFnO1xuXG4gICAgICAgIHZhciBtYXBwZWRUYWcgPSAoX21hcHBlZFRhZyA9IHtcbiAgICAgICAgICAgIGtleTogaVxuICAgICAgICB9LCBfbWFwcGVkVGFnW19IZWxtZXRDb25zdGFudHMuSEVMTUVUX0FUVFJJQlVURV0gPSB0cnVlLCBfbWFwcGVkVGFnKTtcblxuICAgICAgICBPYmplY3Qua2V5cyh0YWcpLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgdmFyIG1hcHBlZEF0dHJpYnV0ZSA9IF9IZWxtZXRDb25zdGFudHMuUkVBQ1RfVEFHX01BUFthdHRyaWJ1dGVdIHx8IGF0dHJpYnV0ZTtcblxuICAgICAgICAgICAgaWYgKG1hcHBlZEF0dHJpYnV0ZSA9PT0gX0hlbG1ldENvbnN0YW50cy5UQUdfUFJPUEVSVElFUy5JTk5FUl9IVE1MIHx8IG1hcHBlZEF0dHJpYnV0ZSA9PT0gX0hlbG1ldENvbnN0YW50cy5UQUdfUFJPUEVSVElFUy5DU1NfVEVYVCkge1xuICAgICAgICAgICAgICAgIHZhciBjb250ZW50ID0gdGFnLmlubmVySFRNTCB8fCB0YWcuY3NzVGV4dDtcbiAgICAgICAgICAgICAgICBtYXBwZWRUYWcuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgPSB7IF9faHRtbDogY29udGVudCB9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtYXBwZWRUYWdbbWFwcGVkQXR0cmlidXRlXSA9IHRhZ1thdHRyaWJ1dGVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQodHlwZSwgbWFwcGVkVGFnKTtcbiAgICB9KTtcbn07XG5cbnZhciBnZXRNZXRob2RzRm9yVGFnID0gZnVuY3Rpb24gZ2V0TWV0aG9kc0ZvclRhZyh0eXBlLCB0YWdzLCBlbmNvZGUpIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5USVRMRTpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdG9Db21wb25lbnQ6IGZ1bmN0aW9uIHRvQ29tcG9uZW50KCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2VuZXJhdGVUaXRsZUFzUmVhY3RDb21wb25lbnQodHlwZSwgdGFncy50aXRsZSwgdGFncy50aXRsZUF0dHJpYnV0ZXMsIGVuY29kZSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0b1N0cmluZzogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZW5lcmF0ZVRpdGxlQXNTdHJpbmcodHlwZSwgdGFncy50aXRsZSwgdGFncy50aXRsZUF0dHJpYnV0ZXMsIGVuY29kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBfSGVsbWV0Q29uc3RhbnRzLkFUVFJJQlVURV9OQU1FUy5CT0RZOlxuICAgICAgICBjYXNlIF9IZWxtZXRDb25zdGFudHMuQVRUUklCVVRFX05BTUVTLkhUTUw6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRvQ29tcG9uZW50OiBmdW5jdGlvbiB0b0NvbXBvbmVudCgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnZlcnRFbGVtZW50QXR0cmlidXRlc3RvUmVhY3RQcm9wcyh0YWdzKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdlbmVyYXRlRWxlbWVudEF0dHJpYnV0ZXNBc1N0cmluZyh0YWdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0b0NvbXBvbmVudDogZnVuY3Rpb24gdG9Db21wb25lbnQoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZW5lcmF0ZVRhZ3NBc1JlYWN0Q29tcG9uZW50KHR5cGUsIHRhZ3MpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2VuZXJhdGVUYWdzQXNTdHJpbmcodHlwZSwgdGFncywgZW5jb2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgIH1cbn07XG5cbnZhciBtYXBTdGF0ZU9uU2VydmVyID0gZnVuY3Rpb24gbWFwU3RhdGVPblNlcnZlcihfcmVmKSB7XG4gICAgdmFyIGJhc2VUYWcgPSBfcmVmLmJhc2VUYWcsXG4gICAgICAgIGJvZHlBdHRyaWJ1dGVzID0gX3JlZi5ib2R5QXR0cmlidXRlcyxcbiAgICAgICAgZW5jb2RlID0gX3JlZi5lbmNvZGUsXG4gICAgICAgIGh0bWxBdHRyaWJ1dGVzID0gX3JlZi5odG1sQXR0cmlidXRlcyxcbiAgICAgICAgbGlua1RhZ3MgPSBfcmVmLmxpbmtUYWdzLFxuICAgICAgICBtZXRhVGFncyA9IF9yZWYubWV0YVRhZ3MsXG4gICAgICAgIG5vc2NyaXB0VGFncyA9IF9yZWYubm9zY3JpcHRUYWdzLFxuICAgICAgICBzY3JpcHRUYWdzID0gX3JlZi5zY3JpcHRUYWdzLFxuICAgICAgICBzdHlsZVRhZ3MgPSBfcmVmLnN0eWxlVGFncyxcbiAgICAgICAgX3JlZiR0aXRsZSA9IF9yZWYudGl0bGUsXG4gICAgICAgIHRpdGxlID0gX3JlZiR0aXRsZSA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IF9yZWYkdGl0bGUsXG4gICAgICAgIHRpdGxlQXR0cmlidXRlcyA9IF9yZWYudGl0bGVBdHRyaWJ1dGVzO1xuICAgIHJldHVybiB7XG4gICAgICAgIGJhc2U6IGdldE1ldGhvZHNGb3JUYWcoX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuQkFTRSwgYmFzZVRhZywgZW5jb2RlKSxcbiAgICAgICAgYm9keUF0dHJpYnV0ZXM6IGdldE1ldGhvZHNGb3JUYWcoX0hlbG1ldENvbnN0YW50cy5BVFRSSUJVVEVfTkFNRVMuQk9EWSwgYm9keUF0dHJpYnV0ZXMsIGVuY29kZSksXG4gICAgICAgIGh0bWxBdHRyaWJ1dGVzOiBnZXRNZXRob2RzRm9yVGFnKF9IZWxtZXRDb25zdGFudHMuQVRUUklCVVRFX05BTUVTLkhUTUwsIGh0bWxBdHRyaWJ1dGVzLCBlbmNvZGUpLFxuICAgICAgICBsaW5rOiBnZXRNZXRob2RzRm9yVGFnKF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLkxJTkssIGxpbmtUYWdzLCBlbmNvZGUpLFxuICAgICAgICBtZXRhOiBnZXRNZXRob2RzRm9yVGFnKF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLk1FVEEsIG1ldGFUYWdzLCBlbmNvZGUpLFxuICAgICAgICBub3NjcmlwdDogZ2V0TWV0aG9kc0ZvclRhZyhfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5OT1NDUklQVCwgbm9zY3JpcHRUYWdzLCBlbmNvZGUpLFxuICAgICAgICBzY3JpcHQ6IGdldE1ldGhvZHNGb3JUYWcoX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuU0NSSVBULCBzY3JpcHRUYWdzLCBlbmNvZGUpLFxuICAgICAgICBzdHlsZTogZ2V0TWV0aG9kc0ZvclRhZyhfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5TVFlMRSwgc3R5bGVUYWdzLCBlbmNvZGUpLFxuICAgICAgICB0aXRsZTogZ2V0TWV0aG9kc0ZvclRhZyhfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5USVRMRSwgeyB0aXRsZTogdGl0bGUsIHRpdGxlQXR0cmlidXRlczogdGl0bGVBdHRyaWJ1dGVzIH0sIGVuY29kZSlcbiAgICB9O1xufTtcblxuZXhwb3J0cy5jb252ZXJ0UmVhY3RQcm9wc3RvSHRtbEF0dHJpYnV0ZXMgPSBjb252ZXJ0UmVhY3RQcm9wc3RvSHRtbEF0dHJpYnV0ZXM7XG5leHBvcnRzLmhhbmRsZUNsaWVudFN0YXRlQ2hhbmdlID0gaGFuZGxlQ2xpZW50U3RhdGVDaGFuZ2U7XG5leHBvcnRzLm1hcFN0YXRlT25TZXJ2ZXIgPSBtYXBTdGF0ZU9uU2VydmVyO1xuZXhwb3J0cy5yZWR1Y2VQcm9wc1RvU3RhdGUgPSByZWR1Y2VQcm9wc1RvU3RhdGU7XG5leHBvcnRzLnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZTtcbmV4cG9ydHMud2FybiA9IHdhcm47IiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBfaW50ZXJvcERlZmF1bHQgKGV4KSB7IHJldHVybiAoZXggJiYgKHR5cGVvZiBleCA9PT0gJ29iamVjdCcpICYmICdkZWZhdWx0JyBpbiBleCkgPyBleFsnZGVmYXVsdCddIDogZXg7IH1cblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdF9fZGVmYXVsdCA9IF9pbnRlcm9wRGVmYXVsdChSZWFjdCk7XG52YXIgc2hhbGxvd0VxdWFsID0gX2ludGVyb3BEZWZhdWx0KHJlcXVpcmUoJ3NoYWxsb3dlcXVhbCcpKTtcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpO1xuICBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzcztcbiAgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn1cblxudmFyIGNhblVzZURPTSA9ICEhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5mdW5jdGlvbiB3aXRoU2lkZUVmZmVjdChyZWR1Y2VQcm9wc1RvU3RhdGUsIGhhbmRsZVN0YXRlQ2hhbmdlT25DbGllbnQsIG1hcFN0YXRlT25TZXJ2ZXIpIHtcbiAgaWYgKHR5cGVvZiByZWR1Y2VQcm9wc1RvU3RhdGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHJlZHVjZVByb3BzVG9TdGF0ZSB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBoYW5kbGVTdGF0ZUNoYW5nZU9uQ2xpZW50ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBoYW5kbGVTdGF0ZUNoYW5nZU9uQ2xpZW50IHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICBpZiAodHlwZW9mIG1hcFN0YXRlT25TZXJ2ZXIgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtYXBTdGF0ZU9uU2VydmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBtYXBTdGF0ZU9uU2VydmVyIHRvIGVpdGhlciBiZSB1bmRlZmluZWQgb3IgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKFdyYXBwZWRDb21wb25lbnQpIHtcbiAgICByZXR1cm4gV3JhcHBlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBXcmFwcGVkQ29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCc7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gd3JhcChXcmFwcGVkQ29tcG9uZW50KSB7XG4gICAgaWYgKHR5cGVvZiBXcmFwcGVkQ29tcG9uZW50ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIFdyYXBwZWRDb21wb25lbnQgdG8gYmUgYSBSZWFjdCBjb21wb25lbnQuJyk7XG4gICAgfVxuXG4gICAgdmFyIG1vdW50ZWRJbnN0YW5jZXMgPSBbXTtcbiAgICB2YXIgc3RhdGU7XG5cbiAgICBmdW5jdGlvbiBlbWl0Q2hhbmdlKCkge1xuICAgICAgc3RhdGUgPSByZWR1Y2VQcm9wc1RvU3RhdGUobW91bnRlZEluc3RhbmNlcy5tYXAoZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZS5wcm9wcztcbiAgICAgIH0pKTtcblxuICAgICAgaWYgKFNpZGVFZmZlY3QuY2FuVXNlRE9NKSB7XG4gICAgICAgIGhhbmRsZVN0YXRlQ2hhbmdlT25DbGllbnQoc3RhdGUpO1xuICAgICAgfSBlbHNlIGlmIChtYXBTdGF0ZU9uU2VydmVyKSB7XG4gICAgICAgIHN0YXRlID0gbWFwU3RhdGVPblNlcnZlcihzdGF0ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIFNpZGVFZmZlY3QgPVxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgICAgX2luaGVyaXRzTG9vc2UoU2lkZUVmZmVjdCwgX0NvbXBvbmVudCk7XG5cbiAgICAgIGZ1bmN0aW9uIFNpZGVFZmZlY3QoKSB7XG4gICAgICAgIHJldHVybiBfQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgIH1cblxuICAgICAgLy8gVHJ5IHRvIHVzZSBkaXNwbGF5TmFtZSBvZiB3cmFwcGVkIGNvbXBvbmVudFxuICAgICAgLy8gRXhwb3NlIGNhblVzZURPTSBzbyB0ZXN0cyBjYW4gbW9ua2V5cGF0Y2ggaXRcbiAgICAgIFNpZGVFZmZlY3QucGVlayA9IGZ1bmN0aW9uIHBlZWsoKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH07XG5cbiAgICAgIFNpZGVFZmZlY3QucmV3aW5kID0gZnVuY3Rpb24gcmV3aW5kKCkge1xuICAgICAgICBpZiAoU2lkZUVmZmVjdC5jYW5Vc2VET00pIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtYXkgb25seSBjYWxsIHJld2luZCgpIG9uIHRoZSBzZXJ2ZXIuIENhbGwgcGVlaygpIHRvIHJlYWQgdGhlIGN1cnJlbnQgc3RhdGUuJyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVjb3JkZWRTdGF0ZSA9IHN0YXRlO1xuICAgICAgICBzdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgbW91bnRlZEluc3RhbmNlcyA9IFtdO1xuICAgICAgICByZXR1cm4gcmVjb3JkZWRTdGF0ZTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBfcHJvdG8gPSBTaWRlRWZmZWN0LnByb3RvdHlwZTtcblxuICAgICAgX3Byb3RvLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICAgICAgcmV0dXJuICFzaGFsbG93RXF1YWwobmV4dFByb3BzLCB0aGlzLnByb3BzKTtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5jb21wb25lbnRXaWxsTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIG1vdW50ZWRJbnN0YW5jZXMucHVzaCh0aGlzKTtcbiAgICAgICAgZW1pdENoYW5nZSgpO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgZW1pdENoYW5nZSgpO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHZhciBpbmRleCA9IG1vdW50ZWRJbnN0YW5jZXMuaW5kZXhPZih0aGlzKTtcbiAgICAgICAgbW91bnRlZEluc3RhbmNlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBlbWl0Q2hhbmdlKCk7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChXcmFwcGVkQ29tcG9uZW50LCB0aGlzLnByb3BzKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBTaWRlRWZmZWN0O1xuICAgIH0oUmVhY3QuQ29tcG9uZW50KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShTaWRlRWZmZWN0LCBcImRpc3BsYXlOYW1lXCIsIFwiU2lkZUVmZmVjdChcIiArIGdldERpc3BsYXlOYW1lKFdyYXBwZWRDb21wb25lbnQpICsgXCIpXCIpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KFNpZGVFZmZlY3QsIFwiY2FuVXNlRE9NXCIsIGNhblVzZURPTSk7XG5cbiAgICByZXR1cm4gU2lkZUVmZmVjdDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3aXRoU2lkZUVmZmVjdDtcbiIsIi8vXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2hhbGxvd0VxdWFsKG9iakEsIG9iakIsIGNvbXBhcmUsIGNvbXBhcmVDb250ZXh0KSB7XG4gIHZhciByZXQgPSBjb21wYXJlID8gY29tcGFyZS5jYWxsKGNvbXBhcmVDb250ZXh0LCBvYmpBLCBvYmpCKSA6IHZvaWQgMDtcblxuICBpZiAocmV0ICE9PSB2b2lkIDApIHtcbiAgICByZXR1cm4gISFyZXQ7XG4gIH1cblxuICBpZiAob2JqQSA9PT0gb2JqQikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmpBICE9PSBcIm9iamVjdFwiIHx8ICFvYmpBIHx8IHR5cGVvZiBvYmpCICE9PSBcIm9iamVjdFwiIHx8ICFvYmpCKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGtleXNBID0gT2JqZWN0LmtleXMob2JqQSk7XG4gIHZhciBrZXlzQiA9IE9iamVjdC5rZXlzKG9iakIpO1xuXG4gIGlmIChrZXlzQS5sZW5ndGggIT09IGtleXNCLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBiSGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmJpbmQob2JqQik7XG5cbiAgLy8gVGVzdCBmb3IgQSdzIGtleXMgZGlmZmVyZW50IGZyb20gQi5cbiAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwga2V5c0EubGVuZ3RoOyBpZHgrKykge1xuICAgIHZhciBrZXkgPSBrZXlzQVtpZHhdO1xuXG4gICAgaWYgKCFiSGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZUEgPSBvYmpBW2tleV07XG4gICAgdmFyIHZhbHVlQiA9IG9iakJba2V5XTtcblxuICAgIHJldCA9IGNvbXBhcmUgPyBjb21wYXJlLmNhbGwoY29tcGFyZUNvbnRleHQsIHZhbHVlQSwgdmFsdWVCLCBrZXkpIDogdm9pZCAwO1xuXG4gICAgaWYgKHJldCA9PT0gZmFsc2UgfHwgKHJldCA9PT0gdm9pZCAwICYmIHZhbHVlQSAhPT0gdmFsdWVCKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=