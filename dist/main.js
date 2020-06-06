'use strict';

require('react');

var Header = function Header() {
  return /*#__PURE__*/React.createElement("h1", null, "OIE");
};

var Input = function Input() {
  return /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "fname",
    name: "fname"
  });
};

var main = {
  Header: Header,
  Input: Input
};

module.exports = main;
