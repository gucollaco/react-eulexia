# react-eulexia 
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-yellowgreen.svg)](https://standardjs.com) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) [![CircleCI](https://circleci.com/gh/gucollaco/react-eulexia.svg?style=shield)](https://circleci.com/gh/gucollaco/react-eulexia) [![codecov](https://codecov.io/gh/gucollaco/react-eulexia/branch/main/graph/badge.svg)](https://codecov.io/gh/gucollaco/react-eulexia)

Components library to allow UI customizations, giving the person the possibility to adjust the website according to their visual needs. The final goal is to provide accessibility, turning websites more inclusive for people with reading difficulties.

## Demo
[Here is an example](https://react-eulexia-example.vercel.app/) and [it's source code](https://github.com/gucollaco/ibge-news-portal)!

You can also try it over here.
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
    <>
      {/* Other page elements */}
      <EulexiaFab>
        <FontSizeAction />
        <FontFamilyAction />
        <ColorChangeAction />
        <RulerAction />
        <TextToSpeechAction />
      </EulexiaFab>
    </>
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

### EulexiaFab
The main component. It is basically a wrapper of the Fab provided by the [react-tiny-fab](https://github.com/dericgw/react-tiny-fab), with some default configurations.

| Prop              | Type          | Default                           | Description   |
| -------------     | ------------- | ---------------------             | ------------- |
| id                | string        | 'eulexiaFab'                      | The id for the component.  |
| backgroundColor   | string        | '#A7C5E6'                         | The Floating Action Button background color.  |
| style             | object        | { left: 20, bottom: 20 }          | The position the Fab is displayed on the screen.  |
| event             | string        | 'hover'                           | The way the EulexiaFab displays the other Action buttons. It defaults to 'hover', but can also be 'click' |
| icon              | string        | <ConfigIcon />                    | The icon to be displayed on the Floating Action Button. Defaults to <ConfigIcon /> , a customized icon that displays a 'cog' icon from the [Remix Icon](https://remixicon.com/) set.  |
| children          | node          |                                   | The children for this component should be the other components from this library. You can use the ones you want, no need to use all of them.   |

### ColorChangeAction
This component lets the user modify the text and background colors of the page.
### FontFamilyAction
This component lets the user modify the font family of the words on the page.
### FontSizeAction
This component lets the user modify the font size of the words on the page. The words are separated into categories, Headers and Texts, each has a different slider to set the value.
### RulerAction
This component lets the user display a reading ruler on the page, a useful tool for people with dyslexia. The ruler size can be modified through a slider, and there is also an inverted mode that can be activated.
### TextToSpeechAction
This component lets the user use the text-to-speech feature to read a selected text.

## Dependencies
This components on this library depends on some other great libraries. They are the following:
- [react-colorful](https://github.com/omgovich/react-colorful)
- [react-dropdown](https://github.com/fraserxu/react-dropdown)
- [react-range](https://github.com/tajo/react-range)
- [react-speech-kit](https://github.com/MikeyParton/react-speech-kit)
- [react-tiny-fab](https://github.com/dericgw/react-tiny-fab)
- [react-toggle](https://github.com/aaronshaf/react-toggle)
- [react-tooltip](https://github.com/wwayne/react-tooltip)

The icons used are from the [Remix Icon](https://remixicon.com/) set.

## License
Licensed under [MIT](./LICENSE).
