import React from 'react';

var Header = function Header() {
  return /*#__PURE__*/React.createElement("h1", null, "OIE");
};

var Input = function Input() {
  return /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "test",
    name: "test",
    value: "test"
  });
};

export { Header, Input };
