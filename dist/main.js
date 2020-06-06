import React from 'react';

var Button = function Button(props) {
  return /*#__PURE__*/React.createElement("button", props);
};

var Eulexia = function Eulexia(props) {
  return /*#__PURE__*/React.createElement("div", props, "EULEXIA");
};

var Input = function Input() {
  return /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "test",
    name: "test",
    value: "test"
  });
};

export { Button, Eulexia, Input };
