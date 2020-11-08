import React, { useState, useCallback, useEffect } from 'react';
import clsx from 'clsx';
import { Fab, Action as Action$1 } from 'react-tiny-fab';
import ReactTooltip from 'react-tooltip';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
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

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    .wrapper {\n        padding: 10px 0px 15px 0px;\n        font-size: 18px !important;\n        width: 280px;\n    }\n    .title {\n        font-size 21px !important;\n    }\n    .row {\n        display: flex;\n        flex-direction: row;\n    }\n    .column {\n        display: flex;\n        flex-direction: column;\n    }\n    .item {\n        flex: 1;\n        text-align: left;\n    }\n    .item-text-right {\n        flex: 1;\n        text-align: right;\n    }\n    @media (max-width: 600px) {\n        .wrapper {\n            width: 160px;\n        }\n    }\n    .hoverVisible {\n        pointer-events: auto !important;\n        &:hover {\n            visibility: visible !important;\n            opacity: 1 !important;\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Styles = styled.div(_templateObject());

var EulexiaFab = function EulexiaFab(_ref) {
  var _ref$event = _ref.event,
      event = _ref$event === void 0 ? 'hover' : _ref$event,
      _ref$icon = _ref.icon,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["event", "icon", "className"]);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      fontSizeEnabled = _useState2[0],
      setFontSizeEnabled = _useState2[1];

  var _useState3 = useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      headerFontSize = _useState4[0],
      setHeaderFontSize = _useState4[1];

  var _useState5 = useState(''),
      _useState6 = _slicedToArray(_useState5, 2),
      textFontSize = _useState6[0],
      setTextFontSize = _useState6[1];

  var clearFontSize = function clearFontSize(elements) {
    var _iterator = _createForOfIteratorHelper(elements),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var element = _step.value;
        element.style.removeProperty('font-size');
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };

  var changeFontSize = function changeFontSize(elements, fontSize) {
    var _iterator2 = _createForOfIteratorHelper(elements),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var element = _step2.value;
        element.style.fontSize = "".concat(fontSize, "px");
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  };

  var getHtmlHeaders = function getHtmlHeaders() {
    var textTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
    var exceptTags = [':not(.eulexiaText)'];
    var exceptTagsJoined = exceptTags.join('');
    var textTagsJoined = textTags.join(exceptTagsJoined.concat(',')).concat(exceptTagsJoined);
    return document.querySelectorAll(textTagsJoined);
  };

  var getHtmlTexts = function getHtmlTexts() {
    var textTags = ['p', 'li', 'span', 'b', 'i', 'strong', 'em', 'code'];
    var exceptTags = [':not(.eulexiaText)', ':not(.rtf--ab__c)', ':not(.rtf--mb__c)', ':not(.rtf--ab)', ':not(.rtf--mb)'];
    var exceptTagsJoined = exceptTags.join('');
    var textTagsJoined = textTags.join(exceptTagsJoined.concat(',')).concat(exceptTagsJoined);
    return document.querySelectorAll(textTagsJoined);
  };

  return /*#__PURE__*/React.createElement(Fab, {
    id: "eulexiaFab",
    mainButtonStyles: {
      backgroundColor: '#A7C5E6'
    },
    style: {
      left: 20,
      bottom: 20
    },
    icon: /*#__PURE__*/React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "24",
      height: "24"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      d: "M0 0h24v24H0z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9.954 2.21a9.99 9.99 0 0 1 4.091-.002A3.993 3.993 0 0 0 16 5.07a3.993 3.993 0 0 0 3.457.261A9.99 9.99 0 0 1 21.5 8.876 3.993 3.993 0 0 0 20 12c0 1.264.586 2.391 1.502 3.124a10.043 10.043 0 0 1-2.046 3.543 3.993 3.993 0 0 0-3.456.261 3.993 3.993 0 0 0-1.954 2.86 9.99 9.99 0 0 1-4.091.004A3.993 3.993 0 0 0 8 18.927a3.993 3.993 0 0 0-3.457-.26A9.99 9.99 0 0 1 2.5 15.121 3.993 3.993 0 0 0 4 11.999a3.993 3.993 0 0 0-1.502-3.124 10.043 10.043 0 0 1 2.046-3.543A3.993 3.993 0 0 0 8 5.071a3.993 3.993 0 0 0 1.954-2.86zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
    })),
    event: event
  }, /*#__PURE__*/React.createElement(Action$1, {
    "data-tip": true,
    "data-for": "fontSize"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 6v15H8V6H2V4h14v2h-6zm8 8v7h-2v-7h-3v-2h8v2h-3z"
  }))), /*#__PURE__*/React.createElement(Action$1, {
    "data-tip": true,
    "data-for": "fontFamily"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 6v15h-2V6H5V4h14v2z"
  }))), /*#__PURE__*/React.createElement(Action$1, {
    onMouseEnter: function onMouseEnter() {
      return console.log('onmousenter RULER');
    },
    onMouseLeave: function onMouseLeave() {
      return console.log('onmouseleave RULER');
    }
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.343 14.621L3.515 17.45l3.535 3.535L20.485 7.55 16.95 4.015l-2.122 2.121 1.415 1.414-1.415 1.414-1.414-1.414-2.121 2.122 2.121 2.12L12 13.208l-2.121-2.121-2.122 2.121 1.415 1.414-1.415 1.415-1.414-1.415zM17.657 1.893l4.95 4.95a1 1 0 0 1 0 1.414l-14.85 14.85a1 1 0 0 1-1.414 0l-4.95-4.95a1 1 0 0 1 0-1.414l14.85-14.85a1 1 0 0 1 1.414 0z"
  }))), /*#__PURE__*/React.createElement(Action$1, {
    onMouseEnter: function onMouseEnter() {
      return console.log('onmousenter LISTEN');
    },
    onMouseLeave: function onMouseLeave() {
      return console.log('onmouseleave LISTEN');
    }
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.889 16H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.889l5.294-4.332a.5.5 0 0 1 .817.387v15.89a.5.5 0 0 1-.817.387L5.89 16zm13.517 4.134l-1.416-1.416A8.978 8.978 0 0 0 21 12a8.982 8.982 0 0 0-3.304-6.968l1.42-1.42A10.976 10.976 0 0 1 23 12c0 3.223-1.386 6.122-3.594 8.134zm-3.543-3.543l-1.422-1.422A3.993 3.993 0 0 0 16 12c0-1.43-.75-2.685-1.88-3.392l1.439-1.439A5.991 5.991 0 0 1 18 12c0 1.842-.83 3.49-2.137 4.591z"
  }))), /*#__PURE__*/React.createElement(Styles, null, /*#__PURE__*/React.createElement(ReactTooltip, {
    id: "fontSize",
    place: "right",
    type: "light",
    effect: "solid",
    className: "hoverVisible",
    delayHide: 200
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrapper column"
  }, /*#__PURE__*/React.createElement("div", {
    className: "item title row"
  }, /*#__PURE__*/React.createElement("strong", {
    className: "item eulexiaText"
  }, "Font size"), /*#__PURE__*/React.createElement("div", {
    className: "item-text-right"
  }, /*#__PURE__*/React.createElement(Toggle, {
    defaultChecked: false,
    onChange: function onChange(e) {
      setFontSizeEnabled(e.target.checked);
      setHeaderFontSize(0);
      setTextFontSize(0);
      clearFontSize(getHtmlHeaders());
      clearFontSize(getHtmlTexts());
    },
    icons: false
  }))), /*#__PURE__*/React.createElement("div", {
    className: "item column",
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "item eulexiaText"
  }, headerFontSize ? "Headers (".concat(headerFontSize, " px)") : 'Headers'), /*#__PURE__*/React.createElement("div", {
    className: "item"
  }, /*#__PURE__*/React.createElement(Slider, {
    min: 8,
    max: 72,
    step: 2,
    tooltip: false,
    value: fontSizeEnabled ? headerFontSize : 0,
    onChange: function onChange(value) {
      if (!fontSizeEnabled) return;
      setHeaderFontSize(value);
    },
    onChangeComplete: function onChangeComplete() {
      if (!fontSizeEnabled) return;
      changeFontSize(getHtmlHeaders(), headerFontSize);
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "item column",
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "item eulexiaText"
  }, textFontSize ? "Texts (".concat(textFontSize, " px)") : 'Texts'), /*#__PURE__*/React.createElement("div", {
    className: "item"
  }, /*#__PURE__*/React.createElement(Slider, {
    min: 8,
    max: 72,
    step: 2,
    tooltip: false,
    value: fontSizeEnabled ? textFontSize : 0,
    disabled: true,
    onChange: function onChange(value) {
      if (!fontSizeEnabled) return;
      setTextFontSize(value);
    },
    onChangeComplete: function onChangeComplete() {
      if (!fontSizeEnabled) return;
      changeFontSize(getHtmlTexts(), textFontSize);
    }
  }))))), /*#__PURE__*/React.createElement(ReactTooltip, {
    id: "fontFamily",
    place: "right",
    type: "light",
    effect: "solid",
    className: "hoverVisible",
    delayHide: 200
  }, "Font family tooltip")));
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
