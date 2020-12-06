import { createGlobalStyle } from 'styled-components'

import BaseStyle from './Base/Style.jsx'
import DropdownStyle from '../Dropdown/Style.jsx'
import ToggleStyle from '../Toggle/Style.jsx'

const styledHeaderFontSize = ({
  fontSizeEnabled,
  headerFontSize,
  htmlHeaders
}) => {
  if (!fontSizeEnabled) return ''

  return headerFontSize
    ? `
      ${htmlHeaders} {
        font-size: ${headerFontSize}px !important;
      }
    `
    : ''
}

const styledTextFontSize = ({ fontSizeEnabled, textFontSize, htmlTexts }) => {
  if (!fontSizeEnabled) return ''

  return textFontSize
    ? `
      ${htmlTexts} {
        font-size: ${textFontSize}px !important;
      }
    `
    : ''
}

const styledFontFamily = ({ fontFamilyEnabled, fontFamily, htmlTexts }) => {
  if (!fontFamilyEnabled) return ''

  return fontFamily
    ? `
      ${htmlTexts} {
        font-family: ${fontFamily} !important;
      }
    `
    : ''
}

const styledBackgroundColorChange = ({
  colorChangeEnabled,
  newBackgroundColor
}) => {
  if (!colorChangeEnabled) return ''

  return newBackgroundColor
    ? `
      html, body, body:not(input), body:not(button) {
        background-color: ${newBackgroundColor} !important;
      }
    `
    : ''
}

const styledTextColorChange = ({
  colorChangeEnabled,
  newTextColor,
  htmlTexts
}) => {
  if (!colorChangeEnabled) return ''

  return newTextColor
    ? `
      ${htmlTexts} {
        color: ${newTextColor} !important;
      }
    `
    : ''
}

const GlobalStyle = createGlobalStyle`
  ${(props) => styledHeaderFontSize(props)}
  ${(props) => styledTextFontSize(props)}
  ${(props) => styledFontFamily(props)}
  ${(props) => styledBackgroundColorChange(props)}
  ${(props) => styledTextColorChange(props)}

  ${BaseStyle}
  ${DropdownStyle}
  ${ToggleStyle}
`

export default GlobalStyle
