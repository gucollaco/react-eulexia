import e,{useState as n,useEffect as t}from"react";import r from"clsx";import{Fab as o,Action as a}from"react-tiny-fab";import i from"react-tooltip";import{useSpeechSynthesis as l}from"react-speech-kit";import c from"react-dropdown";import s,{createGlobalStyle as d}from"styled-components";import p from"react-rangeslider";import m from"react-toggle";function g(){return(g=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function h(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function x(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return t}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return b(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return b(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var f=function(n){var t=n.className,o=u(n,["className"]);return e.createElement("button",g({className:r(t,"lexia")},o))},w=function(n){var t=n.className,o=u(n,["className"]);return e.createElement("input",g({className:r(t,"lexia")},o))};function v(){var e=h(["\n    .Dropdown-root {\n        position: relative;\n    }\n\n    .Dropdown-control {\n        position: relative;\n        overflow: hidden;\n        background-color: white;\n        border: 1px solid #ccc;\n        border-radius: 2px;\n        box-sizing: border-box;\n        color: #333;\n        cursor: default;\n        outline: none;\n        padding: 8px 52px 8px 10px;\n        transition: all 200ms ease;\n    }\n    \n    .Dropdown-control:hover {\n        box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);\n    }\n    \n    .Dropdown-arrow {\n        border-color: #999 transparent transparent;\n        border-style: solid;\n        border-width: 5px 5px 0;\n        content: ' ';\n        display: block;\n        height: 0;\n        margin-top: -ceil(2.5);\n        position: absolute;\n        right: 10px;\n        top: 14px;\n        width: 0\n    }\n    \n    .is-open .Dropdown-arrow {\n        border-color: transparent transparent #999;\n        border-width: 0 5px 5px;\n    }\n    \n    .Dropdown-menu {\n        background-color: white;\n        border: 1px solid #ccc;\n        box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);\n        box-sizing: border-box;\n        margin-top: -1px;\n        max-height: 120px;\n        overflow-y: auto;\n        position: absolute;\n        top: 100%;\n        width: 100%;\n        z-index: 1000;\n        -webkit-overflow-scrolling: touch;\n    }\n    \n    .Dropdown-menu .Dropdown-group > .Dropdown-title{\n        padding: 8px 10px;\n        color: rgba(51, 51, 51, 1);\n        font-weight: bold;\n        text-transform: capitalize;\n    }\n    \n    .Dropdown-option {\n        box-sizing: border-box;\n        color: rgba(51, 51, 51, 0.8);\n        cursor: pointer;\n        display: block;\n        padding: 8px 10px;\n    }\n    \n    .Dropdown-option:last-child {\n        border-bottom-right-radius: 2px;\n        border-bottom-left-radius: 2px;\n    }\n    \n    .Dropdown-option:hover {\n        background-color: #f2f9fc;\n        color: #333;\n    }\n    \n    .Dropdown-option.is-selected {\n        background-color: #f2f9fc;\n        color: #333;\n    }\n    \n    .Dropdown-noresults {\n        box-sizing: border-box;\n        color: #ccc;\n        cursor: default;\n        display: block;\n        padding: 8px 10px;\n    }\n"]);return v=function(){return e},e}var y=d(v());function E(){var e=h(["\n    .rangeslider {\n        margin: 20px 0;\n        position: relative;\n        background: #e6e6e6;\n        -ms-touch-action: none;\n        touch-action: none;\n    }\n    \n    .rangeslider,\n    .rangeslider .rangeslider__fill {\n        display: block;\n        box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.4);\n    }\n    \n    .rangeslider .rangeslider__handle {\n        background: #fff;\n        border: 1px solid #ccc;\n        cursor: pointer;\n        display: inline-block;\n        position: absolute;\n        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4), 0 -1px 3px rgba(0, 0, 0, 0.4);\n    }\n    \n    .rangeslider .rangeslider__handle .rangeslider__active {\n        opacity: 1;\n    }\n    \n    .rangeslider .rangeslider__handle-tooltip {\n        width: 40px;\n        height: 40px;\n        text-align: center;\n        position: absolute;\n        background-color: rgba(0, 0, 0, 0.8);\n        font-weight: normal;\n        font-size: 14px;\n        transition: all 100ms ease-in;\n        border-radius: 4px;\n        display: inline-block;\n        color: white;\n        left: 50%;\n        transform: translate3d(-50%, 0, 0);\n    }\n    \n    .rangeslider .rangeslider__handle-tooltip span {\n        margin-top: 12px;\n        display: inline-block;\n        line-height: 100%;\n    }\n    \n    .rangeslider .rangeslider__handle-tooltip:after {\n        content: ' ';\n        position: absolute;\n        width: 0;\n        height: 0;\n    }\n    \n    .rangeslider-horizontal {\n        height: 12px;\n        border-radius: 10px;\n    }\n    \n    .rangeslider-horizontal .rangeslider__fill {\n        height: 100%;\n        background-color: #7cb342;\n        border-radius: 10px;\n        top: 0;\n    }\n    \n    .rangeslider-horizontal .rangeslider__handle {\n        width: 30px;\n        height: 30px;\n        border-radius: 30px;\n        top: 50%;\n        transform: translate3d(-50%, -50%, 0);\n    }\n    \n    .rangeslider-horizontal .rangeslider__handle:after {\n        content: ' ';\n        position: absolute;\n        width: 16px;\n        height: 16px;\n        top: 6px;\n        left: 6px;\n        border-radius: 50%;\n        background-color: #dadada;\n        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4) inset, 0 -1px 3px rgba(0, 0, 0, 0.4) inset;\n    }\n    \n    .rangeslider-horizontal .rangeslider__handle-tooltip {\n        top: -55px;\n    }\n    \n    .rangeslider-horizontal .rangeslider__handle-tooltip:after {\n        border-left: 8px solid transparent;\n        border-right: 8px solid transparent;\n        border-top: 8px solid rgba(0, 0, 0, 0.8);\n        left: 50%;\n        bottom: -8px;\n        transform: translate3d(-50%, 0, 0);\n    }\n    \n    .rangeslider-vertical {\n        margin: 20px auto;\n        height: 150px;\n        max-width: 10px;\n        background-color: transparent;\n    }\n    \n    .rangeslider-vertical .rangeslider__fill,\n    .rangeslider-vertical .rangeslider__handle {\n        position: absolute;\n    }\n    \n    .rangeslider-vertical .rangeslider__fill {\n        width: 100%;\n        background-color: #7cb342;\n        box-shadow: none;\n        bottom: 0;\n    }\n    \n    .rangeslider-vertical .rangeslider__handle {\n        width: 30px;\n        height: 10px;\n        left: -10px;\n        box-shadow: none;\n    }\n    \n    .rangeslider-vertical .rangeslider__handle-tooltip {\n        left: -100%;\n        top: 50%;\n        transform: translate3d(-50%, -50%, 0);\n    }\n    \n    .rangeslider-vertical .rangeslider__handle-tooltip:after {\n        border-top: 8px solid transparent;\n        border-bottom: 8px solid transparent;\n        border-left: 8px solid rgba(0, 0, 0, 0.8);\n        left: 100%;\n        top: 12px;\n    }\n    \n    .rangeslider-reverse.rangeslider-horizontal .rangeslider__fill {\n        right: 0;\n    }\n    \n    .rangeslider-reverse.rangeslider-vertical .rangeslider__fill {\n        top: 0;\n        bottom: inherit;\n    }\n    \n    .rangeslider__labels {\n        position: relative;\n    }\n\n    .rangeslider-vertical .rangeslider__labels {\n        position: relative;\n        list-style-type: none;\n        margin: 0 0 0 24px;\n        padding: 0;\n        text-align: left;\n        width: 250px;\n        height: 100%;\n        left: 10px;\n    }\n    \n    .rangeslider-vertical .rangeslider__labels .rangeslider__label-item {\n        position: absolute;\n        transform: translate3d(0, -50%, 0);\n    }\n    \n    .rangeslider-vertical .rangeslider__labels .rangeslider__label-item::before {\n        content: '';\n        width: 10px;\n        height: 2px;\n        background: black;\n        position: absolute;\n        left: -14px;\n        top: 50%;\n        transform: translateY(-50%);\n        z-index: -1;\n    }\n\n    .rangeslider__labels .rangeslider__label-item {\n        position: absolute;\n        font-size: 14px;\n        cursor: pointer;\n        display: inline-block;\n        top: 10px;\n        transform: translate3d(-50%, 0, 0);\n    }\n"]);return E=function(){return e},e}var z=d(E());function S(){var e=h(["\n    .react-toggle {\n        touch-action: pan-x;\n    \n        display: inline-block;\n        position: relative;\n        cursor: pointer;\n        background-color: transparent;\n        border: 0;\n        padding: 0;\n    \n        -webkit-touch-callout: none;\n        -webkit-user-select: none;\n        -khtml-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n    \n        -webkit-tap-highlight-color: rgba(0,0,0,0);\n        -webkit-tap-highlight-color: transparent;\n    }\n    \n    .react-toggle-screenreader-only {\n        border: 0;\n        clip: rect(0 0 0 0);\n        height: 1px;\n        margin: -1px;\n        overflow: hidden;\n        padding: 0;\n        position: absolute;\n        width: 1px;\n    }\n    \n    .react-toggle--disabled {\n        cursor: not-allowed;\n        opacity: 0.5;\n        -webkit-transition: opacity 0.25s;\n        transition: opacity 0.25s;\n    }\n    \n    .react-toggle-track {\n        width: 50px;\n        height: 24px;\n        padding: 0;\n        border-radius: 30px;\n        background-color: #4D4D4D;\n        -webkit-transition: all 0.2s ease;\n        -moz-transition: all 0.2s ease;\n        transition: all 0.2s ease;\n    }\n    \n    .react-toggle:hover:not(.react-toggle--disabled) .react-toggle-track {\n        background-color: #000000;\n    }\n    \n    .react-toggle--checked .react-toggle-track {\n        background-color: #19AB27;\n    }\n    \n    .react-toggle--checked:hover:not(.react-toggle--disabled) .react-toggle-track {\n        background-color: #128D15;\n    }\n    \n    .react-toggle-track-check {\n        position: absolute;\n        width: 14px;\n        height: 10px;\n        top: 0px;\n        bottom: 0px;\n        margin-top: auto;\n        margin-bottom: auto;\n        line-height: 0;\n        left: 8px;\n        opacity: 0;\n        -webkit-transition: opacity 0.25s ease;\n        -moz-transition: opacity 0.25s ease;\n        transition: opacity 0.25s ease;\n    }\n    \n    .react-toggle--checked .react-toggle-track-check {\n        opacity: 1;\n        -webkit-transition: opacity 0.25s ease;\n        -moz-transition: opacity 0.25s ease;\n        transition: opacity 0.25s ease;\n    }\n    \n    .react-toggle-track-x {\n        position: absolute;\n        width: 10px;\n        height: 10px;\n        top: 0px;\n        bottom: 0px;\n        margin-top: auto;\n        margin-bottom: auto;\n        line-height: 0;\n        right: 10px;\n        opacity: 1;\n        -webkit-transition: opacity 0.25s ease;\n        -moz-transition: opacity 0.25s ease;\n        transition: opacity 0.25s ease;\n    }\n    \n    .react-toggle--checked .react-toggle-track-x {\n        opacity: 0;\n    }\n    \n    .react-toggle-thumb {\n        transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n        position: absolute;\n        top: 1px;\n        left: 1px;\n        width: 22px;\n        height: 22px;\n        border: 1px solid #4D4D4D;\n        border-radius: 50%;\n        background-color: #FAFAFA;\n    \n        -webkit-box-sizing: border-box;\n        -moz-box-sizing: border-box;\n        box-sizing: border-box;\n    \n        -webkit-transition: all 0.25s ease;\n        -moz-transition: all 0.25s ease;\n        transition: all 0.25s ease;\n    }\n    \n    .react-toggle--checked .react-toggle-thumb {\n        left: 27px;\n        border-color: #19AB27;\n    }\n    \n    .react-toggle--focus .react-toggle-thumb {\n        -webkit-box-shadow: 0px 0px 3px 2px #0099E0;\n        -moz-box-shadow: 0px 0px 3px 2px #0099E0;\n        box-shadow: 0px 0px 2px 3px #0099E0;\n    }\n    \n    .react-toggle:active:not(.react-toggle--disabled) .react-toggle-thumb {\n        -webkit-box-shadow: 0px 0px 5px 5px #0099E0;\n        -moz-box-shadow: 0px 0px 5px 5px #0099E0;\n        box-shadow: 0px 0px 5px 5px #0099E0;\n    }\n"]);return S=function(){return e},e}var k=d(S()),_=function(){return e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"},e.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),e.createElement("path",{d:"M9.954 2.21a9.99 9.99 0 0 1 4.091-.002A3.993 3.993 0 0 0 16 5.07a3.993 3.993 0 0 0 3.457.261A9.99 9.99 0 0 1 21.5 8.876 3.993 3.993 0 0 0 20 12c0 1.264.586 2.391 1.502 3.124a10.043 10.043 0 0 1-2.046 3.543 3.993 3.993 0 0 0-3.456.261 3.993 3.993 0 0 0-1.954 2.86 9.99 9.99 0 0 1-4.091.004A3.993 3.993 0 0 0 8 18.927a3.993 3.993 0 0 0-3.457-.26A9.99 9.99 0 0 1 2.5 15.121 3.993 3.993 0 0 0 4 11.999a3.993 3.993 0 0 0-1.502-3.124 10.043 10.043 0 0 1 2.046-3.543A3.993 3.993 0 0 0 8 5.071a3.993 3.993 0 0 0 1.954-2.86zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}))},I=function(){return e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"},e.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),e.createElement("path",{d:"M13 6v15h-2V6H5V4h14v2z"}))},N=function(){return e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"},e.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),e.createElement("path",{d:"M10 6v15H8V6H2V4h14v2h-6zm8 8v7h-2v-7h-3v-2h8v2h-3z"}))},F=function(){return e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"},e.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),e.createElement("path",{d:"M6.343 14.621L3.515 17.45l3.535 3.535L20.485 7.55 16.95 4.015l-2.122 2.121 1.415 1.414-1.415 1.414-1.414-1.414-2.121 2.122 2.121 2.12L12 13.208l-2.121-2.121-2.122 2.121 1.415 1.414-1.415 1.415-1.414-1.415zM17.657 1.893l4.95 4.95a1 1 0 0 1 0 1.414l-14.85 14.85a1 1 0 0 1-1.414 0l-4.95-4.95a1 1 0 0 1 0-1.414l14.85-14.85a1 1 0 0 1 1.414 0z"}))},V=function(){return e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"},e.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),e.createElement("path",{d:"M5.889 16H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.889l5.294-4.332a.5.5 0 0 1 .817.387v15.89a.5.5 0 0 1-.817.387L5.89 16zm13.517 4.134l-1.416-1.416A8.978 8.978 0 0 0 21 12a8.982 8.982 0 0 0-3.304-6.968l1.42-1.42A10.976 10.976 0 0 1 23 12c0 3.223-1.386 6.122-3.594 8.134zm-3.543-3.543l-1.422-1.422A3.993 3.993 0 0 0 16 12c0-1.43-.75-2.685-1.88-3.392l1.439-1.439A5.991 5.991 0 0 1 18 12c0 1.842-.83 3.49-2.137 4.591z"}))};function A(){var e=h(["\n    ","\n    ","\n    ","\n\n    .wrapper {\n        padding: 10px 0px 15px 0px;\n        font-size: 18px !important;\n        width: 280px;\n    }\n    .title {\n        font-size 21px !important;\n    }\n    .row {\n        display: flex;\n        flex-direction: row;\n    }\n    .column {\n        display: flex;\n        flex-direction: column;\n    }\n    .item {\n        flex: 1;\n        text-align: left;\n    }\n    .item-text-right {\n        flex: 1;\n        text-align: right;\n    }\n    @media (max-width: 600px) {\n        .wrapper {\n            width: 180px;\n        }\n    }\n    .hoverVisible {\n        pointer-events: auto !important;\n        &:hover {\n            visibility: visible !important;\n            opacity: 1 !important;\n        }\n    }\n"]);return A=function(){return e},e}function D(){var e=h(["\n  background-color: rgba(0,0,0,0.4);\n  width: 100%;\n  position: fixed;\n  pointer-events: none;\n"]);return D=function(){return e},e}function O(){var e=h(["\n  background-color: rgba(0,0,0,0.7);\n  width: 100%;\n  bottom: 0;\n  left: 0;\n  position: fixed;\n"]);return O=function(){return e},e}function C(){var e=h(["\n  background-color: rgba(0,0,0,0.7);\n  width: 100%;\n  top: 0;\n  left: 0;\n  position: fixed;\n"]);return C=function(){return e},e}var T=s.div.attrs((function(e){return{style:{height:e.rulerPosition-e.rulerSize/2}}}))(C()),j=s.div.attrs((function(e){return{style:{top:e.rulerPosition+e.rulerSize/2}}}))(O()),H=s.div.attrs((function(e){return{style:{top:e.rulerPosition-e.rulerSize/2,height:e.rulerSize}}}))(D()),M=d(A(),(function(e){return t=(n=e).fontSizeEnabled,r=n.headerFontSize,o=n.htmlHeaders,t&&r?"\n      ".concat(o," {\n        font-size: ").concat(r,"px !important;\n      }\n    "):"";var n,t,r,o}),(function(e){return t=(n=e).fontSizeEnabled,r=n.textFontSize,o=n.htmlTexts,t&&r?"\n      ".concat(o," {\n        font-size: ").concat(r,"px !important;\n      }\n    "):"";var n,t,r,o}),(function(e){return t=(n=e).fontFamilyEnabled,r=n.fontFamily,o=n.htmlHeaders,a=n.htmlTexts,t&&r?"\n      ".concat(o," {\n        font-family: ").concat(r," !important;\n      }\n      ").concat(a," {\n        font-family: ").concat(r," !important;\n      }\n    "):"";var n,t,r,o,a})),P=function(r){var s=r.event,d=void 0===s?"hover":s,g=x(n(!1),2),u=g[0],h=g[1],b=x(n(0),2),f=b[0],w=b[1],v=x(n(0),2),E=v[0],S=v[1],A=x(n(!1),2),D=A[0],O=A[1],C=x(n(""),2),P=C[0],R=C[1],B=x(n(!1),2),L=B[0],Y=B[1],U=x(n(0),2),$=U[0],q=U[1],G=x(n(0),2),J=G[0],K=G[1],Q=x(n(!1),2),W=Q[0],X=Q[1],Z=l(),ee=Z.speak,ne=Z.voices;t((function(){var e=document.head,n=document.createElement("link");return n.type="text/css",n.rel="stylesheet",n.href="https://fonts.googleapis.com/css2?family=Courier&family=Open+Sans&family=Roboto&family=Roboto+Mono&display=swap",e.appendChild(n),parseInt(window.localStorage.getItem("fontSizeEnabled"))&&h(!0),parseInt(window.localStorage.getItem("fontFamilyEnabled"))&&O(!0),parseInt(window.localStorage.getItem("rulerEnabled"))&&Y(!0),parseInt(window.localStorage.getItem("rulerInverted"))&&X(!0),function(){e.removeChild(n)}}),[]),t((function(){window.localStorage.getItem("headerFontSizeValue")&&w(parseInt(window.localStorage.getItem("headerFontSizeValue"))),window.localStorage.getItem("textFontSizeValue")&&S(parseInt(window.localStorage.getItem("textFontSizeValue")))}),[u]),t((function(){window.localStorage.getItem("fontFamilyValue")&&R(window.localStorage.getItem("fontFamilyValue"))}),[D]),t((function(){window.localStorage.getItem("rulerSizeValue")&&q(parseInt(window.localStorage.getItem("rulerSizeValue")))}),[L]),t((function(){var e=function(e){return L?K(e.clientY):{}};return document.addEventListener("mousemove",e,!1),function(){document.removeEventListener("mousemove",e,!1)}})),t((function(){console.log(ne)}),[ne]);var te;return e.createElement(e.Fragment,null,e.createElement(M,{fontSizeEnabled:u,headerFontSize:f,textFontSize:E,fontFamilyEnabled:D,fontFamily:P,htmlHeaders:(te=[":not(.eulexia-text)"].join(""),["h1","h2","h3","h4","h5","h6"].join(te.concat(",")).concat(te)),htmlTexts:function(){var e=[":not(.eulexia-text)",":not(.rtf--ab__c)",":not(.rtf--mb__c)",":not(.rtf--ab)",":not(.rtf--mb)"].join("");return["p","li","span"].join(e.concat(",")).concat(e)}()}),e.createElement(y,null),e.createElement(k,null),e.createElement(z,null),L&&!W&&e.createElement("div",{style:{position:"relative"}},e.createElement(H,{rulerPosition:J,rulerSize:$})),L&&W&&e.createElement("div",{style:{position:"relative"}},e.createElement(T,{rulerPosition:J,rulerSize:$}),e.createElement(j,{rulerPosition:J,rulerSize:$})),e.createElement(o,{id:"eulexiaFab",mainButtonStyles:{backgroundColor:"#A7C5E6"},style:{left:20,bottom:20},icon:e.createElement(_,null),event:d},e.createElement(a,{"data-tip":!0,"data-for":"fontSize"},e.createElement(N,null)),e.createElement(a,{"data-tip":!0,"data-for":"fontFamily"},e.createElement(I,null)),e.createElement(a,{"data-tip":!0,"data-for":"readingRuler"},e.createElement(F,null)),e.createElement(a,{"data-tip":!0,"data-for":"textToSpeech"},e.createElement(V,null)),e.createElement(i,{id:"fontSize",place:"right",type:"light",effect:"solid",className:"hoverVisible eulexiaTooltip",delayHide:200},e.createElement("div",{className:"wrapper column"},e.createElement("div",{className:"item title row"},e.createElement("strong",{className:"item"},"Font size"),e.createElement("div",{className:"item-text-right"},e.createElement(m,{checked:u,onChange:function(e){h(e.target.checked),e.target.checked?window.localStorage.setItem("fontSizeEnabled",1):(w(0),S(0),window.localStorage.removeItem("fontSizeEnabled"),window.localStorage.removeItem("headerFontSizeValue"),window.localStorage.removeItem("textFontSizeValue"))},icons:!1}))),e.createElement("div",{className:"item column",style:{marginTop:28}},e.createElement("span",{className:"item eulexia-text"},f?"Headers (".concat(f," px)"):"Headers"),e.createElement("div",{className:"item"},e.createElement(p,{min:8,max:72,step:2,tooltip:!1,value:f,onChange:function(e){u&&(w(e),window.localStorage.setItem("headerFontSizeValue",e))}}))),e.createElement("div",{className:"item column",style:{marginTop:28}},e.createElement("span",{className:"item eulexia-text"},E?"Texts (".concat(E," px)"):"Texts"),e.createElement("div",{className:"item"},e.createElement(p,{min:8,max:72,step:2,tooltip:!1,value:E,onChange:function(e){u&&(S(e),window.localStorage.setItem("textFontSizeValue",e))}}))))),e.createElement(i,{id:"fontFamily",place:"right",type:"light",effect:"solid",className:"hoverVisible eulexiaTooltip",delayHide:200},e.createElement("div",{className:"wrapper column"},e.createElement("div",{className:"item title row"},e.createElement("strong",{className:"item"},"Font family"),e.createElement("div",{className:"item-text-right"},e.createElement(m,{checked:D,onChange:function(e){O(e.target.checked),e.target.checked?window.localStorage.setItem("fontFamilyEnabled",1):(R(null),window.localStorage.removeItem("fontFamilyEnabled"),window.localStorage.removeItem("fontFamilyValue"))},icons:!1}))),e.createElement("div",{className:"item column",style:{marginTop:28}},e.createElement("div",{className:"item"},e.createElement(c,{options:[{value:"Courier",label:"Courier"},{value:"Open Sans, sans-serif",label:"Open Sans"},{value:"Roboto",label:"Roboto"},{value:"Roboto Mono, monospace",label:"Roboto Mono"}],onChange:function(e){R(e.value),window.localStorage.setItem("fontFamilyValue",e.value)},value:P,placeholder:"Font family...",disabled:!D}))))),e.createElement(i,{id:"readingRuler",place:"right",type:"light",effect:"solid",className:"hoverVisible eulexiaTooltip",delayHide:200},e.createElement("div",{className:"wrapper column"},e.createElement("div",{className:"item title row"},e.createElement("strong",{className:"item"},"Reading ruler"),e.createElement("div",{className:"item-text-right"},e.createElement(m,{checked:L,onChange:function(e){if(Y(e.target.checked),e.target.checked)return q(100),window.localStorage.setItem("rulerEnabled",1),window.localStorage.setItem("rulerSizeValue",100),void window.localStorage.setItem("rulerInverted",0);q(0),X(!1),window.localStorage.removeItem("rulerEnabled"),window.localStorage.removeItem("rulerSizeValue"),window.localStorage.removeItem("rulerInverted")},icons:!1}))),e.createElement("div",{className:"item column",style:{marginTop:28}},e.createElement("span",{className:"item eulexia-text"},$?"Size (".concat($," px)"):"Size"),e.createElement("div",{className:"item"},e.createElement(p,{min:50,max:400,step:5,tooltip:!1,value:$,onChange:function(e){L&&(q(e),window.localStorage.setItem("rulerSizeValue",e))}}))),e.createElement("div",{className:"item row",style:{marginTop:28}},e.createElement("span",{className:"item eulexia-text"},"Inverted mode"),e.createElement("div",{className:"item"},e.createElement(m,{disabled:!L,checked:W,onChange:function(e){X(e.target.checked),e.target.checked?window.localStorage.setItem("rulerInverted",1):window.localStorage.removeItem("rulerInverted")},icons:!1}))))),e.createElement(i,{id:"textToSpeech",place:"right",type:"light",effect:"solid",className:"hoverVisible eulexiaTooltip",delayHide:200},e.createElement("div",{className:"wrapper column"},e.createElement("div",{className:"item title row"},e.createElement("strong",{className:"item"},"Text to speech")),e.createElement("div",{className:"item row",style:{marginTop:28}},e.createElement("span",{className:"item eulexia-text"},"Read selected"),e.createElement("div",{className:"item"},e.createElement("button",{onClick:function(){return ee({text:window.getSelection?window.getSelection().toString():document.selection&&"Control"!==document.selection.type?document.selection.createRange().text:"",voice:ne[1]})}},"Play"),e.createElement("button",null,"Cancel")))))))};function R(){var e=h(["\n  height: 48px;\n  width: 48px;\n  background-color: #aaaaaa;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  border: none;\n  border-radius: 50%;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);\n  cursor: pointer;\n  outline: none;\n  padding: 0;\n  -webkit-user-drag: none;\n  font-weight: bold;\n  color: #f1f1f1;\n  margin-right: 4px;\n  font-size: 16px;\n  z-index: 10000;\n"]);return R=function(){return e},e}var B=s.button(R());export{f as Button,B as EulexiaAction,P as EulexiaFab,w as Input};
