import React, { useState, useCallback, useEffect } from 'react';
import clsx from 'clsx';
import styled from 'styled-components';

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

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = o[Symbol.iterator]();
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

var Button = function Button(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ["className"]);

  return /*#__PURE__*/React.createElement("button", _extends({
    className: clsx(className, 'lexia')
  }, props));
};

var Eulexia = function Eulexia(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ["className"]);

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      mode = _useState2[0],
      setMode = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      visible = _useState4[0],
      setVisible = _useState4[1];

  var changeFontSize = function changeFontSize(elements) {
    var _iterator = _createForOfIteratorHelper(elements),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var element = _step.value;
        var elementStyle = element.getAttribute('style');
        var newStyle = elementStyle ? elementStyle + 'font-size:10px' : 'font-size:10px';
        element.setAttribute('style', newStyle);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };

  var escFunction = useCallback(function (event) {
    if (event.keyCode === 27) {
      var textTags = 'p,li,span,b,i,strong,em,input,button,code';
      changeFontSize(document.querySelectorAll(textTags));
      setVisible(function (prev) {
        return !prev;
      });
    }
  });
  useEffect(function () {
    document.addEventListener('keydown', escFunction, false);
    return function () {
      document.removeEventListener('keydown', escFunction, false);
    };
  });
  return /*#__PURE__*/React.createElement("input", {
    value: visible
  });
};

var Input = function Input(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ["className"]);

  return /*#__PURE__*/React.createElement("input", _extends({
    className: clsx(className, 'lexia')
  }, props));
};

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        height: 56px;\n        width: 56px;\n        z-index: 9999;\n        background-color: #666666;\n        display: inline-flex;\n        justify-content: center;\n        align-items: center;\n        position: relative;\n        border: none;\n        border-radius: 50%;\n        box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);\n        cursor: pointer;\n        outline: none;\n        padding: 0;\n        -webkit-user-drag: none;\n        font-weight: bold;\n        color: #f1f1f1;\n        font-size: 18px;\n        > * {\n            transition: ease-in-out transform 0.2s;\n        }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        display: block;\n        position: absolute;\n        top: 0;\n        right: 1px;\n        padding: 10px 0;\n        margin: (-10px) 0;\n        transition: ease-in-out transform 0.2s;\n        > span {\n        opacity: 0;\n        transition: ease-in-out opacity 0.2s;\n        position: absolute;\n        top: 50%;\n        transform: translateY(-50%);\n        margin-right: 6px;\n        background: rgba(0, 0, 0, 0.75);\n        padding: 2px 4px;\n        border-radius: 2px;\n        color: white;\n        font-size: 13px;\n        box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);\n        &.right {\n            right: 100%;\n        }\n        }\n        &:nth-child(1) {\n        transform: translateY(-60px) scale(0);\n        transition-delay: 0.21s;\n        &.top {\n            transform: translateY(60px) scale(0);\n        }\n        }\n        &:nth-child(2) {\n        transform: translateY(-120px) scale(0);\n        transition-delay: 0.18s;\n        &.top {\n            transform: translateY(120px) scale(0);\n        }\n        }\n        &:nth-child(3) {\n        transform: translateY(-180px) scale(0);\n        transition-delay: 0.15s;\n        &.top {\n            transform: translateY(180px) scale(0);\n        }\n        }\n        &:nth-child(4) {\n        transform: translateY(-240px) scale(0);\n        transition-delay: 0.12s;\n        &.top {\n            transform: translateY(240px) scale(0);\n        }\n        }\n        &:nth-child(5) {\n        transform: translateY(-300px) scale(0);\n        transition-delay: 0.09s;\n        &.top {\n            transform: translateY(300px) scale(0);\n        }\n        }\n        &:nth-child(6) {\n        transform: translateY(-360px) scale(0);\n        transition-delay: 0.03s;\n        &.top {\n            transform: translateY(360px) scale(0);\n        }\n        }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        box-sizing: border-box;\n        margin: 25px;\n        position: fixed;\n        white-space: nowrap;\n        z-index: 9998;\n        padding-left: 0;\n        list-style: none;\n        font-size: 100px;\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var EulexiaFab = function EulexiaFab(_ref) {
  var _ref$event = _ref.event,
      event = _ref$event === void 0 ? 'hover' : _ref$event,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["event", "className"]);

  var StyledUl = styled.ul(_templateObject());
  var StyledLi = styled.li(_templateObject2());
  var MainButton = styled.button(_templateObject3());

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var open = function open() {
    return setIsOpen(true);
  };

  var close = function close() {
    return setIsOpen(false);
  };

  var enter = function enter() {
    return event === 'hover' && open();
  };

  var leave = function leave() {
    return event === 'hover' && close();
  };

  return /*#__PURE__*/React.createElement(StyledUl, {
    onMouseEnter: enter,
    onMouseLeave: leave
  }, /*#__PURE__*/React.createElement(StyledLi, null, /*#__PURE__*/React.createElement(MainButton, null, "asdasd")));
};

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n    height: 48px;\n    width: 48px;\n    background-color: #aaaaaa;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    border: none;\n    border-radius: 50%;\n    box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);\n    cursor: pointer;\n    outline: none;\n    padding: 0;\n    -webkit-user-drag: none;\n    font-weight: bold;\n    color: #f1f1f1;\n    margin-right: 4px;\n    font-size: 16px;\n    z-index: 10000;\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var Action = styled.button(_templateObject$1());

export { Button, Eulexia, Action as EulexiaAction, EulexiaFab, Input };
