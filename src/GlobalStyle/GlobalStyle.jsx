import { createGlobalStyle } from 'styled-components'

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

  .wrapper {
    padding: 10px 0px 15px 0px;
    font-size: 18px !important;
    width: 280px;
  }
  .title {
    font-size 21px !important;
  }
  .row {
    display: flex;
    flex-direction: row;
  }
  .column {
    display: flex;
    flex-direction: column;
  }
  .tall-margin-top {
    margin-top: 28px;
  }
  .medium-margin-top {
    margin-top: 16px;
  }
  .align-center {
    align-items: center;
  }
  .item {
    flex: 1;
    text-align: left;
  }
  .item-text-right {
    flex: 1;
    text-align: right;
  }
  @media (max-width: 600px) {
    .wrapper {
        width: 180px;
    }
  }
`

export default GlobalStyle
