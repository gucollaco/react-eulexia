# react-eulexia
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-yellowgreen.svg)](https://standardjs.com) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) [![CircleCI](https://circleci.com/gh/gucollaco/react-eulexia.svg?style=shield)](https://circleci.com/gh/gucollaco/react-eulexia) [![codecov](https://codecov.io/gh/gucollaco/react-eulexia/branch/main/graph/badge.svg)](https://codecov.io/gh/gucollaco/react-eulexia)

Components library to allow UI customizations, giving the person the possibility to adjust the website according to their visual needs. The final goal is to provide accessibility, turning websites more inclusive for people with reading difficulties.

## Demo
[Here is an example](https://react-eulexia-example.vercel.app/) and [it's source code](https://github.com/gucollaco/ibge-news-portal)!

You can also try it over here.</br>
[![Edit react-eulexia](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/bhgvb)

## Install
```
yarn add react-eulexia
```
or
```
npm install react-eulexia
```

## Usage

```jsx
import React from 'react'
import {
  EulexiaFab,
  ColorChangeAction,
  FontFamilyAction,
  FontSizeAction,
  RulerAction,
  TextToSpeechAction
} from 'react-eulexia'

function App () {
  return (
    <div>
      {/* Other page elements */}
      <EulexiaFab>
        <FontSizeAction />
        <FontFamilyAction />
        <ColorChangeAction />
        <RulerAction />
        <TextToSpeechAction />
      </EulexiaFab>
    </div>
  )
}

export default App
```

## Features
Gives the user the possibility to:
- Change the page's text and background color
- Change the page's font family
- Change the page's font size
- Display a reading ruler
- Use text-to-speech to read the selected text

## Components
The main component is called EulexiaFab.
Inside it, we can pass some Action buttons, which can be used independently from each other, and each provide some unique features.

The configurations made by the user that is visting the website are stored on the localStorage, so that the setup can be kept through the pages the user visits within the website.
</br>

### EulexiaFab
The main component. It is basically a wrapper of the Fab provided by [react-tiny-fab](https://github.com/dericgw/react-tiny-fab), with some default configurations.

| Prop              | Type          | Default                           | Description   |
| -------------     | ------------- | ---------------------             | ------------- |
| id                | `string`        | `'eulexiaFab'`                      | The id for the component.  |
| backgroundColor   | `string`        | `'#A7C5E6'`                         | The Floating Action Button background color.  |
| style             | `object`        | `{ left: 20, bottom: 20 }`          | The position the Fab is displayed on the screen.  |
| event             | `string`        | `'hover'`                           | The way the EulexiaFab displays the other Action buttons. It defaults to 'hover', but can also be 'click' |
| icon              | `any`        | ```<ConfigIcon />```                   | The icon to be displayed on the Floating Action Button. Defaults to `<ConfigIcon />`, a customized icon that displays a 'settings' icon from the [Remix Icon](https://remixicon.com/) set.  |
| children          | `node`          |                                   | The children for this component should be the other components from this library. You can use the ones you want, no need to use all of them.   |
</br>

### ColorChangeAction
This component lets the user modify the text and background colors of the page. The color picker component is provided by [react-colorful](https://github.com/omgovich/react-colorful).

| Prop              | Type          | Default                           | Description   |
| -------------     | ------------- | ---------------------             | ------------- |
| backgroundColorOptions                | `array`        | ```['#F8F5F4', '#EBE3E1', '#F5F5DC', '#030303']```                      | The background color options.  |
| backgroundLabel   | `string`        | `'Background'`                         | The label for the change background color feature.  |
| icon             | `any`        | 	```<ColorChangeIcon />```          | The icon to be displayed on the Floating Action Button. Defaults to `<ColorChangeIcon />`, a customized icon that displays a `paint-brush` icon from the [Remix Icon](https://remixicon.com/) set.  |
| paletteColor             | `string`        | `'#C1C1CC'`                          | The palette color. Palette is a div that wraps the color options displayed. |
| textColorOptions              | `array`        | ```['#030303', '#191970', '#00008B', '#40E0D0']```                    | The text color options.  |
| textLabel          | `string`          |        `'Text'`                           | The label for the change text color feature.   |
| textTags          | `array`          |             ```['h1', 'h2', 'h3', 'h4', 'h5', 'h6', '.h1', '.h2', '.h3', '.h4', '.h5', '.h6', 'p', 'li', 'span']```                     | The tags that should be considered text, and will have the color change applied.   |
| tooltipBackgroundColor          | `string`          |   `'#FFFFFF'`                             | The background color for the tooltip.   |
| tooltipTextColor          | `string`          |              `'#000000'`                     | The text color for the tooltip.   |
| tooltipTitle          | `string`          |            `'Change color'`                       | The title displayed for the color change tooltip.   |
</br>

### FontFamilyAction
This component lets the user modify the font family of the words on the page. The fonts are collected from [Google Fonts](https://fonts.google.com/). Today, the four fonts available on react-eulexia are 'Courier', 'Open Sans', 'Roboto' and 'Roboto Mono', all of them are either sans serif or monospaced, which are recommended for people with dyslexia.

| Prop              | Type          | Default                           | Description   |
| -------------     | ------------- | ---------------------             | ------------- |
| dropdownPlaceholder                | `string`        | `'Font family...'`                      | The font family dropdown placeholder.  |
| icon             | `any`        | 	```<FontFamilyIcon />```          | The icon to be displayed on the Floating Action Button. Defaults to `<FontFamilyIcon />`, a customized icon that displays a `text` icon from the [Remix Icon](https://remixicon.com/) set.  |
| textTags          | `array`          |             ```['h1', 'h2', 'h3', 'h4', 'h5', 'h6', '.h1', '.h2', '.h3', '.h4', '.h5', '.h6', 'p', 'li', 'span']```                     | The tags that should be considered text, and will have the font family change applied.   |
| tooltipBackgroundColor          | `string`          |   `'#FFFFFF'`                             | The background color for the tooltip.   |
| tooltipTextColor          | `string`          |              `'#000000'`                     | The text color for the tooltip.   |
| tooltipTitle          | `string`          |            `'Font family'`                       | The title displayed for the font family tooltip.   |
</br>

### FontSizeAction
This component lets the user modify the font size of the words on the page. The words are separated into two categories, Headers and Texts, each has a different slider to set the value.

| Prop              | Type          | Default                           | Description   |
| -------------     | ------------- | ---------------------             | ------------- |
| headerLabel          | `string`          |        `'Headers'`                           | The label for the change headers font size feature.   |
| headerTags          | `array`          |             ```['h1', 'h2', 'h3', 'h4', 'h5', 'h6', '.h1', '.h2', '.h3', '.h4', '.h5', '.h6']```                     | The tags that should be considered headers, and will have the font size change applied, as headers.   |
| icon             | `any`        | 	```<FontSizeIcon />```          | The icon to be displayed on the Floating Action Button. Defaults to `<FontSizeIcon />`, a customized icon that displays a `font-size` icon from the [Remix Icon](https://remixicon.com/) set.  |
| textLabel          | `string`          |        `'Texts'`                           | The label for the change texts font size feature.   |
| textTags          | `array`          |             ```['p', 'li', 'span']```                     | The tags that should be considered texts, and will have the font size change applied, as texts.   |
| tooltipBackgroundColor          | `string`          |   `'#FFFFFF'`                             | The background color for the tooltip.   |
| tooltipTextColor          | `string`          |              `'#000000'`                     | The text color for the tooltip.   |
| tooltipTitle          | `string`          |            `'Font size'`                       | The title displayed for the font size change tooltip.   |
</br>

### RulerAction
This component lets the user display a reading ruler on the page, a useful tool for people with dyslexia. The ruler size can be modified through a slider, and there is also an inverted mode that can be activated.

| Prop              | Type          | Default                           | Description   |
| -------------     | ------------- | ---------------------             | ------------- |
| icon             | `any`        | 	```<RulerIcon />```          | The icon to be displayed on the Floating Action Button. Defaults to `<RulerIcon />`, a customized icon that displays a `ruler` icon from the [Remix Icon](https://remixicon.com/) set.  |
| invertedModeLabel                | `string`        | `'Inverted mode'`                      | The label for the inverted mode feature.  |
| sizeLabel                | `string`        | `'Size'`                      | The label for the ruler size modifier slider.  |
| tooltipBackgroundColor          | `string`          |   `'#FFFFFF'`                             | The background color for the tooltip.   |
| tooltipTextColor          | `string`          |              `'#000000'`                     | The text color for the tooltip.   |
| tooltipTitle          | `string`          |            `'Reading ruler'`                       | The title displayed for the reading ruler tooltip.   |
</br>

### TextToSpeechAction
This component lets the user use the text-to-speech feature to read a selected text. The [Speech Synthesis API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis) is used through [react-speech-kit](https://github.com/MikeyParton/react-speech-kit), so not all browsers are supported. If browser is not supported, a 'Browser not supported' label will be shown.

| Prop              | Type          | Default                           | Description   |
| -------------     | ------------- | ---------------------             | ------------- |
| forceHtmlLang          | `boolean`          |            `false`                       | If set to true, considers the value passed on `htmlLang` as the language. If false, the language considered will be caught from the `lang` attribute on the document.documentElement; if no `lang` value is found there, it will look for the `lang` value on the document.head; if no value is found there too, it will get the value from the `htmlLang` prop.    |
| htmlLang          | `string`          |            `'en-us'`                       | The htmlLang value. It's use varies according to the value of the `forceHtmlLang` prop.   |
| icon             | `any`        | 	```<TextToSpeechIcon />```          | The icon to be displayed on the Floating Action Button. Defaults to `<TextToSpeechIcon />`, a customized icon that displays a `volume` icon from the [Remix Icon](https://remixicon.com/) set.  |
| readSelectedLabel                | `string`        | `'Read selected'`                      | The label for the read selected feature.  |
| tooltipBackgroundColor          | `string`          |   `'#FFFFFF'`                             | The background color for the tooltip.   |
| tooltipTextColor          | `string`          |              `'#000000'`                     | The text color for the tooltip.   |
| tooltipTitle          | `string`          |            `'Text to speech'`                       | The title displayed for the text-to-speech tooltip.   |
| unsupportedBrowserLabel          | `string`          |            `'Browser not supported'`                       | The label displayed is case the browser is not supported.   |

## Dependencies
This components on this library depends on some other great libraries. They are the following:
- [react-colorful](https://github.com/omgovich/react-colorful)
- [react-dropdown](https://github.com/fraserxu/react-dropdown)
- [react-range](https://github.com/tajo/react-range)
- [react-speech-kit](https://github.com/MikeyParton/react-speech-kit)
- [react-tiny-fab](https://github.com/dericgw/react-tiny-fab)
- [react-toggle](https://github.com/aaronshaf/react-toggle)
- [react-tooltip](https://github.com/wwayne/react-tooltip)

## License
Licensed under [MIT](./LICENSE).
