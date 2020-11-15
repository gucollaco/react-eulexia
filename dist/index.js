"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var React=require("react"),clsx=require("clsx"),reactTinyFab=require("react-tiny-fab"),ReactTooltip=require("react-tooltip"),Dropdown=require("react-dropdown"),styled=require("styled-components"),Slider=require("react-rangeslider"),Toggle=require("react-toggle");function _interopDefaultLegacy(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var React__default=_interopDefaultLegacy(React),clsx__default=_interopDefaultLegacy(clsx),ReactTooltip__default=_interopDefaultLegacy(ReactTooltip),Dropdown__default=_interopDefaultLegacy(Dropdown),styled__default=_interopDefaultLegacy(styled),Slider__default=_interopDefaultLegacy(Slider),Toggle__default=_interopDefaultLegacy(Toggle);function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,a=arguments[t];for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};for(var n,a={},o=Object.keys(e),r=0;r<o.length;r++)n=o[r],0<=t.indexOf(n)||(a[n]=e[n]);return a}function _objectWithoutProperties(e,t){if(null==e)return{};var n,a=_objectWithoutPropertiesLoose(e,t);if(Object.getOwnPropertySymbols)for(var o=Object.getOwnPropertySymbols(e),r=0;r<o.length;r++)n=o[r],0<=t.indexOf(n)||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n]);return a}function _taggedTemplateLiteral(e,t){return t=t||e.slice(0),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _iterableToArrayLimit(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,o=!1,r=void 0;try{for(var l,i=e[Symbol.iterator]();!(a=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(e){o=!0,r=e}finally{try{a||null==i.return||i.return()}finally{if(o)throw r}}return n}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _createForOfIteratorHelper(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,t=function(){};return{s:t,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return r=e.done,e},e:function(e){l=!0,o=e},f:function(){try{r||null==n.return||n.return()}finally{if(l)throw o}}}}var Button=function(e){var t=e.className,e=_objectWithoutProperties(e,["className"]);return React__default.default.createElement("button",_extends({className:clsx__default.default(t,"lexia")},e))},Eulexia=function(e){e.className,_objectWithoutProperties(e,["className"]);var t=_slicedToArray(React.useState(0),2),e=(t[0],t[1],_slicedToArray(React.useState(!1),2)),t=e[0],n=e[1],a=React.useCallback(function(e){27===e.keyCode&&(function(e){var t=_createForOfIteratorHelper(e);try{for(t.s();!(a=t.n()).done;){var n=a.value,a=n.getAttribute("style"),a=a?a+"font-size:10px":"font-size:10px";n.setAttribute("style",a)}}catch(e){t.e(e)}finally{t.f()}}(document.querySelectorAll("p,li,span,b,i,strong,em,input,button,code")),n(function(e){return!e}))});return React.useEffect(function(){return document.addEventListener("keydown",a,!1),function(){document.removeEventListener("keydown",a,!1)}}),React__default.default.createElement("input",{value:t})},Input=function(e){var t=e.className,e=_objectWithoutProperties(e,["className"]);return React__default.default.createElement("input",_extends({className:clsx__default.default(t,"lexia")},e))};function _templateObject(){var e=_taggedTemplateLiteral(["\n    .Dropdown-root {\n        position: relative;\n    }\n\n    .Dropdown-control {\n        position: relative;\n        overflow: hidden;\n        background-color: white;\n        border: 1px solid #ccc;\n        border-radius: 2px;\n        box-sizing: border-box;\n        color: #333;\n        cursor: default;\n        outline: none;\n        padding: 8px 52px 8px 10px;\n        transition: all 200ms ease;\n    }\n    \n    .Dropdown-control:hover {\n        box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);\n    }\n    \n    .Dropdown-arrow {\n        border-color: #999 transparent transparent;\n        border-style: solid;\n        border-width: 5px 5px 0;\n        content: ' ';\n        display: block;\n        height: 0;\n        margin-top: -ceil(2.5);\n        position: absolute;\n        right: 10px;\n        top: 14px;\n        width: 0\n    }\n    \n    .is-open .Dropdown-arrow {\n        border-color: transparent transparent #999;\n        border-width: 0 5px 5px;\n    }\n    \n    .Dropdown-menu {\n        background-color: white;\n        border: 1px solid #ccc;\n        box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);\n        box-sizing: border-box;\n        margin-top: -1px;\n        max-height: 120px;\n        overflow-y: auto;\n        position: absolute;\n        top: 100%;\n        width: 100%;\n        z-index: 1000;\n        -webkit-overflow-scrolling: touch;\n    }\n    \n    .Dropdown-menu .Dropdown-group > .Dropdown-title{\n        padding: 8px 10px;\n        color: rgba(51, 51, 51, 1);\n        font-weight: bold;\n        text-transform: capitalize;\n    }\n    \n    .Dropdown-option {\n        box-sizing: border-box;\n        color: rgba(51, 51, 51, 0.8);\n        cursor: pointer;\n        display: block;\n        padding: 8px 10px;\n    }\n    \n    .Dropdown-option:last-child {\n        border-bottom-right-radius: 2px;\n        border-bottom-left-radius: 2px;\n    }\n    \n    .Dropdown-option:hover {\n        background-color: #f2f9fc;\n        color: #333;\n    }\n    \n    .Dropdown-option.is-selected {\n        background-color: #f2f9fc;\n        color: #333;\n    }\n    \n    .Dropdown-noresults {\n        box-sizing: border-box;\n        color: #ccc;\n        cursor: default;\n        display: block;\n        padding: 8px 10px;\n    }\n"]);return _templateObject=function(){return e},e}var StylesDropdown=styled.createGlobalStyle(_templateObject());function _templateObject$1(){var e=_taggedTemplateLiteral(["\n    .rangeslider {\n        margin: 20px 0;\n        position: relative;\n        background: #e6e6e6;\n        -ms-touch-action: none;\n        touch-action: none;\n    }\n    \n    .rangeslider,\n    .rangeslider .rangeslider__fill {\n        display: block;\n        box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.4);\n    }\n    \n    .rangeslider .rangeslider__handle {\n        background: #fff;\n        border: 1px solid #ccc;\n        cursor: pointer;\n        display: inline-block;\n        position: absolute;\n        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4), 0 -1px 3px rgba(0, 0, 0, 0.4);\n    }\n    \n    .rangeslider .rangeslider__handle .rangeslider__active {\n        opacity: 1;\n    }\n    \n    .rangeslider .rangeslider__handle-tooltip {\n        width: 40px;\n        height: 40px;\n        text-align: center;\n        position: absolute;\n        background-color: rgba(0, 0, 0, 0.8);\n        font-weight: normal;\n        font-size: 14px;\n        transition: all 100ms ease-in;\n        border-radius: 4px;\n        display: inline-block;\n        color: white;\n        left: 50%;\n        transform: translate3d(-50%, 0, 0);\n    }\n    \n    .rangeslider .rangeslider__handle-tooltip span {\n        margin-top: 12px;\n        display: inline-block;\n        line-height: 100%;\n    }\n    \n    .rangeslider .rangeslider__handle-tooltip:after {\n        content: ' ';\n        position: absolute;\n        width: 0;\n        height: 0;\n    }\n    \n    .rangeslider-horizontal {\n        height: 12px;\n        border-radius: 10px;\n    }\n    \n    .rangeslider-horizontal .rangeslider__fill {\n        height: 100%;\n        background-color: #7cb342;\n        border-radius: 10px;\n        top: 0;\n    }\n    \n    .rangeslider-horizontal .rangeslider__handle {\n        width: 30px;\n        height: 30px;\n        border-radius: 30px;\n        top: 50%;\n        transform: translate3d(-50%, -50%, 0);\n    }\n    \n    .rangeslider-horizontal .rangeslider__handle:after {\n        content: ' ';\n        position: absolute;\n        width: 16px;\n        height: 16px;\n        top: 6px;\n        left: 6px;\n        border-radius: 50%;\n        background-color: #dadada;\n        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4) inset, 0 -1px 3px rgba(0, 0, 0, 0.4) inset;\n    }\n    \n    .rangeslider-horizontal .rangeslider__handle-tooltip {\n        top: -55px;\n    }\n    \n    .rangeslider-horizontal .rangeslider__handle-tooltip:after {\n        border-left: 8px solid transparent;\n        border-right: 8px solid transparent;\n        border-top: 8px solid rgba(0, 0, 0, 0.8);\n        left: 50%;\n        bottom: -8px;\n        transform: translate3d(-50%, 0, 0);\n    }\n    \n    .rangeslider-vertical {\n        margin: 20px auto;\n        height: 150px;\n        max-width: 10px;\n        background-color: transparent;\n    }\n    \n    .rangeslider-vertical .rangeslider__fill,\n    .rangeslider-vertical .rangeslider__handle {\n        position: absolute;\n    }\n    \n    .rangeslider-vertical .rangeslider__fill {\n        width: 100%;\n        background-color: #7cb342;\n        box-shadow: none;\n        bottom: 0;\n    }\n    \n    .rangeslider-vertical .rangeslider__handle {\n        width: 30px;\n        height: 10px;\n        left: -10px;\n        box-shadow: none;\n    }\n    \n    .rangeslider-vertical .rangeslider__handle-tooltip {\n        left: -100%;\n        top: 50%;\n        transform: translate3d(-50%, -50%, 0);\n    }\n    \n    .rangeslider-vertical .rangeslider__handle-tooltip:after {\n        border-top: 8px solid transparent;\n        border-bottom: 8px solid transparent;\n        border-left: 8px solid rgba(0, 0, 0, 0.8);\n        left: 100%;\n        top: 12px;\n    }\n    \n    .rangeslider-reverse.rangeslider-horizontal .rangeslider__fill {\n        right: 0;\n    }\n    \n    .rangeslider-reverse.rangeslider-vertical .rangeslider__fill {\n        top: 0;\n        bottom: inherit;\n    }\n    \n    .rangeslider__labels {\n        position: relative;\n    }\n\n    .rangeslider-vertical .rangeslider__labels {\n        position: relative;\n        list-style-type: none;\n        margin: 0 0 0 24px;\n        padding: 0;\n        text-align: left;\n        width: 250px;\n        height: 100%;\n        left: 10px;\n    }\n    \n    .rangeslider-vertical .rangeslider__labels .rangeslider__label-item {\n        position: absolute;\n        transform: translate3d(0, -50%, 0);\n    }\n    \n    .rangeslider-vertical .rangeslider__labels .rangeslider__label-item::before {\n        content: '';\n        width: 10px;\n        height: 2px;\n        background: black;\n        position: absolute;\n        left: -14px;\n        top: 50%;\n        transform: translateY(-50%);\n        z-index: -1;\n    }\n\n    .rangeslider__labels .rangeslider__label-item {\n        position: absolute;\n        font-size: 14px;\n        cursor: pointer;\n        display: inline-block;\n        top: 10px;\n        transform: translate3d(-50%, 0, 0);\n    }\n"]);return _templateObject$1=function(){return e},e}var StylesSlider=styled.createGlobalStyle(_templateObject$1());function _templateObject$2(){var e=_taggedTemplateLiteral(["\n    .react-toggle {\n        touch-action: pan-x;\n    \n        display: inline-block;\n        position: relative;\n        cursor: pointer;\n        background-color: transparent;\n        border: 0;\n        padding: 0;\n    \n        -webkit-touch-callout: none;\n        -webkit-user-select: none;\n        -khtml-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n    \n        -webkit-tap-highlight-color: rgba(0,0,0,0);\n        -webkit-tap-highlight-color: transparent;\n    }\n    \n    .react-toggle-screenreader-only {\n        border: 0;\n        clip: rect(0 0 0 0);\n        height: 1px;\n        margin: -1px;\n        overflow: hidden;\n        padding: 0;\n        position: absolute;\n        width: 1px;\n    }\n    \n    .react-toggle--disabled {\n        cursor: not-allowed;\n        opacity: 0.5;\n        -webkit-transition: opacity 0.25s;\n        transition: opacity 0.25s;\n    }\n    \n    .react-toggle-track {\n        width: 50px;\n        height: 24px;\n        padding: 0;\n        border-radius: 30px;\n        background-color: #4D4D4D;\n        -webkit-transition: all 0.2s ease;\n        -moz-transition: all 0.2s ease;\n        transition: all 0.2s ease;\n    }\n    \n    .react-toggle:hover:not(.react-toggle--disabled) .react-toggle-track {\n        background-color: #000000;\n    }\n    \n    .react-toggle--checked .react-toggle-track {\n        background-color: #19AB27;\n    }\n    \n    .react-toggle--checked:hover:not(.react-toggle--disabled) .react-toggle-track {\n        background-color: #128D15;\n    }\n    \n    .react-toggle-track-check {\n        position: absolute;\n        width: 14px;\n        height: 10px;\n        top: 0px;\n        bottom: 0px;\n        margin-top: auto;\n        margin-bottom: auto;\n        line-height: 0;\n        left: 8px;\n        opacity: 0;\n        -webkit-transition: opacity 0.25s ease;\n        -moz-transition: opacity 0.25s ease;\n        transition: opacity 0.25s ease;\n    }\n    \n    .react-toggle--checked .react-toggle-track-check {\n        opacity: 1;\n        -webkit-transition: opacity 0.25s ease;\n        -moz-transition: opacity 0.25s ease;\n        transition: opacity 0.25s ease;\n    }\n    \n    .react-toggle-track-x {\n        position: absolute;\n        width: 10px;\n        height: 10px;\n        top: 0px;\n        bottom: 0px;\n        margin-top: auto;\n        margin-bottom: auto;\n        line-height: 0;\n        right: 10px;\n        opacity: 1;\n        -webkit-transition: opacity 0.25s ease;\n        -moz-transition: opacity 0.25s ease;\n        transition: opacity 0.25s ease;\n    }\n    \n    .react-toggle--checked .react-toggle-track-x {\n        opacity: 0;\n    }\n    \n    .react-toggle-thumb {\n        transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n        position: absolute;\n        top: 1px;\n        left: 1px;\n        width: 22px;\n        height: 22px;\n        border: 1px solid #4D4D4D;\n        border-radius: 50%;\n        background-color: #FAFAFA;\n    \n        -webkit-box-sizing: border-box;\n        -moz-box-sizing: border-box;\n        box-sizing: border-box;\n    \n        -webkit-transition: all 0.25s ease;\n        -moz-transition: all 0.25s ease;\n        transition: all 0.25s ease;\n    }\n    \n    .react-toggle--checked .react-toggle-thumb {\n        left: 27px;\n        border-color: #19AB27;\n    }\n    \n    .react-toggle--focus .react-toggle-thumb {\n        -webkit-box-shadow: 0px 0px 3px 2px #0099E0;\n        -moz-box-shadow: 0px 0px 3px 2px #0099E0;\n        box-shadow: 0px 0px 2px 3px #0099E0;\n    }\n    \n    .react-toggle:active:not(.react-toggle--disabled) .react-toggle-thumb {\n        -webkit-box-shadow: 0px 0px 5px 5px #0099E0;\n        -moz-box-shadow: 0px 0px 5px 5px #0099E0;\n        box-shadow: 0px 0px 5px 5px #0099E0;\n    }\n"]);return _templateObject$2=function(){return e},e}var StylesToggle=styled.createGlobalStyle(_templateObject$2());function _templateObject2(){var e=_taggedTemplateLiteral(["\n    .wrapper {\n        padding: 10px 0px 15px 0px;\n        font-size: 18px !important;\n        width: 280px;\n    }\n    .title {\n        font-size 21px !important;\n    }\n    .row {\n        display: flex;\n        flex-direction: row;\n    }\n    .column {\n        display: flex;\n        flex-direction: column;\n    }\n    .item {\n        flex: 1;\n        text-align: left;\n    }\n    .item-text-right {\n        flex: 1;\n        text-align: right;\n    }\n    @media (max-width: 600px) {\n        .wrapper {\n            width: 160px;\n        }\n    }\n    .hoverVisible {\n        pointer-events: auto !important;\n        &:hover {\n            visibility: visible !important;\n            opacity: 1 !important;\n        }\n    }\n"]);return _templateObject2=function(){return e},e}function _templateObject$3(){var e=_taggedTemplateLiteral(["\n    ","\n\n    ","\n"]);return _templateObject$3=function(){return e},e}var GlobalStyle=styled.createGlobalStyle(_templateObject$3(),function(e){return e.fontSizeEnabled?"\n        ".concat(e.headerFontSize?"\n            ".concat(e.htmlHeaders," {\n                font-size: ").concat(e.headerFontSize,"px !important;\n            }\n        "):"","\n        ").concat(e.textFontSize?"\n            ".concat(e.htmlTexts," {\n                font-size: ").concat(e.textFontSize,"px !important;\n            }\n        "):"","\n    "):""},function(e){return e.fontFamilyEnabled?"\n        ".concat(e.fontFamily?"\n            ".concat(e.htmlHeaders," ").concat(e.htmlTexts," {\n                font-family: ").concat(e.fontFamily,";\n            }\n        "):"","\n    "):""}),Styles=styled__default.default.div(_templateObject2()),EulexiaFab=function(e){var t=e.event,n=void 0===t?"hover":t,a=(e.icon,e.className,_objectWithoutProperties(e,["event","icon","className"]),_slicedToArray(React.useState(!1),2)),o=a[0],r=a[1],l=_slicedToArray(React.useState(0),2),i=l[0],c=l[1],t=_slicedToArray(React.useState(0),2),e=t[0],d=t[1],a=_slicedToArray(React.useState(!1),2),l=a[0],s=a[1],t=_slicedToArray(React.useState(""),2),a=t[0],u=t[1];React.useEffect(function(){var e=document.head,t=document.createElement("link");return t.type="text/css",t.rel="stylesheet",t.href="https://fonts.googleapis.com/css2?family=Courier&family=Open+Sans&family=Roboto&family=Roboto+Mono&display=swap",e.appendChild(t),1==window.localStorage.getItem("fontSizeEnabled")&&r(!0),1==window.localStorage.getItem("fontFamilyEnabled")&&s(!0),function(){e.removeChild(t)}}),React.useEffect(function(){window.localStorage.getItem("headerFontSizeValue")&&c(window.localStorage.getItem("headerFontSizeValue")),window.localStorage.getItem("textFontSizeValue")&&d(window.localStorage.getItem("textFontSizeValue"))},[o]),React.useEffect(function(){window.localStorage.getItem("fontFamilyValue")&&u(window.localStorage.getItem("fontFamilyValue"))},[l]);var p,f;return React__default.default.createElement(React__default.default.Fragment,null,React__default.default.createElement(GlobalStyle,{fontSizeEnabled:o,headerFontSize:i,textFontSize:e,fontFamilyEnabled:l,fontFamily:a,htmlHeaders:(f=[":not(.eulexia-test)"].join(""),["h1","h2","h3","h4","h5","h6"].join(f.concat(",")).concat(f)),htmlTexts:(p=[":not(.eulexia-test)",":not(.rtf--ab__c)",":not(.rtf--mb__c)",":not(.rtf--ab)",":not(.rtf--mb)"].join(""),["p","li","span"].join(p.concat(",")).concat(p))}),React__default.default.createElement(StylesDropdown,null),React__default.default.createElement(StylesToggle,null),React__default.default.createElement(StylesSlider,null),React__default.default.createElement(reactTinyFab.Fab,{id:"eulexiaFab",mainButtonStyles:{backgroundColor:"#A7C5E6"},style:{left:20,bottom:20},icon:React__default.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"},React__default.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),React__default.default.createElement("path",{d:"M9.954 2.21a9.99 9.99 0 0 1 4.091-.002A3.993 3.993 0 0 0 16 5.07a3.993 3.993 0 0 0 3.457.261A9.99 9.99 0 0 1 21.5 8.876 3.993 3.993 0 0 0 20 12c0 1.264.586 2.391 1.502 3.124a10.043 10.043 0 0 1-2.046 3.543 3.993 3.993 0 0 0-3.456.261 3.993 3.993 0 0 0-1.954 2.86 9.99 9.99 0 0 1-4.091.004A3.993 3.993 0 0 0 8 18.927a3.993 3.993 0 0 0-3.457-.26A9.99 9.99 0 0 1 2.5 15.121 3.993 3.993 0 0 0 4 11.999a3.993 3.993 0 0 0-1.502-3.124 10.043 10.043 0 0 1 2.046-3.543A3.993 3.993 0 0 0 8 5.071a3.993 3.993 0 0 0 1.954-2.86zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"})),event:n},React__default.default.createElement(reactTinyFab.Action,{"data-tip":!0,"data-for":"fontSize"},React__default.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"},React__default.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),React__default.default.createElement("path",{d:"M10 6v15H8V6H2V4h14v2h-6zm8 8v7h-2v-7h-3v-2h8v2h-3z"}))),React__default.default.createElement(reactTinyFab.Action,{"data-tip":!0,"data-for":"fontFamily"},React__default.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"},React__default.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),React__default.default.createElement("path",{d:"M13 6v15h-2V6H5V4h14v2z"}))),React__default.default.createElement(reactTinyFab.Action,{onMouseEnter:function(){return console.log("onmousenter RULER")},onMouseLeave:function(){return console.log("onmouseleave RULER")}},React__default.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"},React__default.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),React__default.default.createElement("path",{d:"M6.343 14.621L3.515 17.45l3.535 3.535L20.485 7.55 16.95 4.015l-2.122 2.121 1.415 1.414-1.415 1.414-1.414-1.414-2.121 2.122 2.121 2.12L12 13.208l-2.121-2.121-2.122 2.121 1.415 1.414-1.415 1.415-1.414-1.415zM17.657 1.893l4.95 4.95a1 1 0 0 1 0 1.414l-14.85 14.85a1 1 0 0 1-1.414 0l-4.95-4.95a1 1 0 0 1 0-1.414l14.85-14.85a1 1 0 0 1 1.414 0z"}))),React__default.default.createElement(reactTinyFab.Action,{onMouseEnter:function(){return console.log("onmousenter LISTEN")},onMouseLeave:function(){return console.log("onmouseleave LISTEN")}},React__default.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"},React__default.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),React__default.default.createElement("path",{d:"M5.889 16H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.889l5.294-4.332a.5.5 0 0 1 .817.387v15.89a.5.5 0 0 1-.817.387L5.89 16zm13.517 4.134l-1.416-1.416A8.978 8.978 0 0 0 21 12a8.982 8.982 0 0 0-3.304-6.968l1.42-1.42A10.976 10.976 0 0 1 23 12c0 3.223-1.386 6.122-3.594 8.134zm-3.543-3.543l-1.422-1.422A3.993 3.993 0 0 0 16 12c0-1.43-.75-2.685-1.88-3.392l1.439-1.439A5.991 5.991 0 0 1 18 12c0 1.842-.83 3.49-2.137 4.591z"}))),React__default.default.createElement(Styles,null,React__default.default.createElement(ReactTooltip__default.default,{id:"fontSize",place:"right",type:"light",effect:"solid",className:"hoverVisible eulexiaTooltip",delayHide:200},React__default.default.createElement("div",{className:"wrapper column"},React__default.default.createElement("div",{className:"item title row"},React__default.default.createElement("strong",{className:"item"},"Font size"),React__default.default.createElement("div",{className:"item-text-right"},React__default.default.createElement(Toggle__default.default,{checked:o,onChange:function(e){r(e.target.checked),e.target.checked?window.localStorage.setItem("fontSizeEnabled",1):(c(0),d(0),window.localStorage.removeItem("fontSizeEnabled"),window.localStorage.removeItem("headerFontSizeValue"),window.localStorage.removeItem("textFontSizeValue"))},icons:!1}))),React__default.default.createElement("div",{className:"item column",style:{marginTop:28}},React__default.default.createElement("span",{className:"item eulexia-text"},i?"Headers (".concat(i," px)"):"Headers"),React__default.default.createElement("div",{className:"item"},React__default.default.createElement(Slider__default.default,{min:8,max:72,step:2,tooltip:!1,value:i,onChange:function(e){o&&(c(e),window.localStorage.setItem("headerFontSizeValue",e))}}))),React__default.default.createElement("div",{className:"item column",style:{marginTop:28}},React__default.default.createElement("span",{className:"item eulexia-text"},e?"Texts (".concat(e," px)"):"Texts"),React__default.default.createElement("div",{className:"item"},React__default.default.createElement(Slider__default.default,{min:8,max:72,step:2,tooltip:!1,value:e,onChange:function(e){o&&(d(e),window.localStorage.setItem("textFontSizeValue",e))}}))))),React__default.default.createElement(ReactTooltip__default.default,{id:"fontFamily",place:"right",type:"light",effect:"solid",className:"hoverVisible eulexiaTooltip",delayHide:200},React__default.default.createElement("div",{className:"wrapper column"},React__default.default.createElement("div",{className:"item title row"},React__default.default.createElement("strong",{className:"item"},"Font family"),React__default.default.createElement("div",{className:"item-text-right"},React__default.default.createElement(Toggle__default.default,{checked:l,onChange:function(e){s(e.target.checked),e.target.checked?window.localStorage.setItem("fontFamilyEnabled",1):(u(null),window.localStorage.removeItem("fontFamilyEnabled"),window.localStorage.removeItem("fontFamilyValue"))},icons:!1}))),React__default.default.createElement("div",{className:"item column",style:{marginTop:28}},React__default.default.createElement("div",{className:"item"},React__default.default.createElement(Dropdown__default.default,{options:[{value:"Courier",label:"Courier"},{value:"Open Sans, sans-serif",label:"Open Sans"},{value:"Roboto",label:"Roboto"},{value:"Roboto Mono, monospace",label:"Roboto Mono"}],onChange:function(e){u(e.value),window.localStorage.setItem("fontFamilyValue",e.value)},value:a,placeholder:"Font family...",disabled:!l}))))))))};function _templateObject$4(){var e=_taggedTemplateLiteral(["\n    height: 48px;\n    width: 48px;\n    background-color: #aaaaaa;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    border: none;\n    border-radius: 50%;\n    box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);\n    cursor: pointer;\n    outline: none;\n    padding: 0;\n    -webkit-user-drag: none;\n    font-weight: bold;\n    color: #f1f1f1;\n    margin-right: 4px;\n    font-size: 16px;\n    z-index: 10000;\n"]);return _templateObject$4=function(){return e},e}var Action=styled__default.default.button(_templateObject$4());exports.Button=Button,exports.Eulexia=Eulexia,exports.EulexiaAction=Action,exports.EulexiaFab=EulexiaFab,exports.Input=Input;
