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
      html, body, body:not(input), body:not(button), div:first-child:not(.eulexia-item):not(.react-toggle):not(.react-toggle-track):not(.react-toggle-track-check):not(.Dropdown-root):not(.Dropdown-control):not(.Dropdown-placeholder):not(.eulexia-slider):not(.eulexia-colorpicker):not(.eulexia-ruler) {
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

const styledLinkColorChange = ({
  colorChangeEnabled,
  newLinkColor,
  htmlLinks
}) => {
  if (!colorChangeEnabled) return ''

  return newLinkColor
    ? `
      ${htmlLinks} {
        color: ${newLinkColor} !important;
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
  ${(props) => styledLinkColorChange(props)}

  ${BaseStyle}
  ${DropdownStyle}
  ${ToggleStyle}
`

export default GlobalStyle
