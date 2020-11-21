import React, { useEffect, useState } from 'react'

import { Fab, Action } from 'react-tiny-fab'
import ReactTooltip from 'react-tooltip'

import { Dropdown, StylesDropdown } from '../dropdown/index.jsx'
import { Slider, StylesSlider } from '../slider/index.jsx'
import { Toggle, StylesToggle } from '../toggle/index.jsx'
import {
  IconConfig,
  IconFontFamily,
  IconFontSize,
  IconRuler,
  IconTextToSpeech,
} from '../icons/index.jsx'

import style, { createGlobalStyle } from 'styled-components'

const RulerTop = style.div.attrs((props) => ({
  style: {
    height: props.rulerPosition - props.rulerSize / 2,
  },
}))`
  background-color: rgba(0,0,0,0.7);
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
`

const RulerBot = style.div.attrs((props) => ({
  style: {
    top: props.rulerPosition + props.rulerSize / 2,
  },
}))`
  background-color: rgba(0,0,0,0.7);
  width: 100%;
  bottom: 0;
  left: 0;
  position: fixed;
`

const RulerLine = style.div.attrs((props) => ({
  style: {
    top: props.rulerPosition - props.rulerSize / 2,
    height: props.rulerSize,
  },
}))`
  background-color: rgba(0,0,0,0.4);
  width: 100%;
  position: fixed;
`

const styledHeaderFontSize = ({
  fontSizeEnabled,
  headerFontSize,
  htmlHeaders,
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

const styledFontFamily = ({
  fontFamilyEnabled,
  fontFamily,
  htmlHeaders,
  htmlTexts,
}) => {
  if (!fontFamilyEnabled) return ''

  return fontFamily
    ? `
      ${htmlHeaders} {
        font-family: ${fontFamily} !important;
      }
      ${htmlTexts} {
        font-family: ${fontFamily} !important;
      }
    `
    : ''
}

const GlobalStyle = createGlobalStyle`
    ${(props) => styledHeaderFontSize(props)}
    ${(props) => styledTextFontSize(props)}
    ${(props) => styledFontFamily(props)}

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
            width: 160px;
        }
    }
    .hoverVisible {
        pointer-events: auto !important;
        &:hover {
            visibility: visible !important;
            opacity: 1 !important;
        }
    }
`

const EulexiaFab = ({ event = 'hover' }) => {
  const [fontSizeEnabled, setFontSizeEnabled] = useState(false)
  const [headerFontSize, setHeaderFontSize] = useState(0)
  const [textFontSize, setTextFontSize] = useState(0)

  const [fontFamilyEnabled, setFontFamilyEnabled] = useState(false)
  const [fontFamily, setFontFamily] = useState('')

  const [rulerEnabled, setRulerEnabled] = useState(false)
  const [rulerSize, setRulerSize] = useState(0)
  const [rulerPosition, setRulerPosition] = useState(0)
  const [rulerInverted, setRulerInverted] = useState(false)

  useEffect(() => {
    const head = document.head
    const link = document.createElement('link')

    link.type = 'text/css'
    link.rel = 'stylesheet'
    link.href =
      'https://fonts.googleapis.com/css2?family=Courier&family=Open+Sans&family=Roboto&family=Roboto+Mono&display=swap'

    head.appendChild(link)

    if (window.localStorage.getItem('fontSizeEnabled') == true)
      setFontSizeEnabled(true)
    if (window.localStorage.getItem('fontFamilyEnabled') == true)
      setFontFamilyEnabled(true)
    if (window.localStorage.getItem('rulerEnabled') == true)
      setRulerEnabled(true)
    if (window.localStorage.getItem('rulerInverted') == true)
      setRulerInverted(true)

    return () => {
      head.removeChild(link)
    }
  }, [])

  useEffect(() => {
    if (window.localStorage.getItem('headerFontSizeValue'))
      setHeaderFontSize(
        parseInt(window.localStorage.getItem('headerFontSizeValue'))
      )
    if (window.localStorage.getItem('textFontSizeValue'))
      setTextFontSize(
        parseInt(window.localStorage.getItem('textFontSizeValue'))
      )
  }, [fontSizeEnabled])

  useEffect(() => {
    if (window.localStorage.getItem('fontFamilyValue'))
      setFontFamily(window.localStorage.getItem('fontFamilyValue'))
  }, [fontFamilyEnabled])

  useEffect(() => {
    if (window.localStorage.getItem('rulerSizeValue'))
      setRulerSize(parseInt(window.localStorage.getItem('rulerSizeValue')))
  }, [rulerEnabled])

  useEffect(() => {
    const rulerPositionUpdate = (e) =>
      rulerEnabled ? setRulerPosition(e.clientY) : {}

    document.addEventListener('mousemove', rulerPositionUpdate, false)
    return () => {
      document.removeEventListener('mousemove', rulerPositionUpdate, false)
    }
  })

  const getHtmlHeaders = () => {
    const textTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
    const exceptTags = [':not(.eulexia-text)']
    const exceptTagsJoined = exceptTags.join('')
    const textTagsJoined = textTags
      .join(exceptTagsJoined.concat(','))
      .concat(exceptTagsJoined)
    return textTagsJoined
  }

  const getHtmlTexts = () => {
    const textTags = ['p', 'li', 'span']
    const exceptTags = [
      ':not(.eulexia-text)',
      ':not(.rtf--ab__c)',
      ':not(.rtf--mb__c)',
      ':not(.rtf--ab)',
      ':not(.rtf--mb)',
    ]
    const exceptTagsJoined = exceptTags.join('')
    const textTagsJoined = textTags
      .join(exceptTagsJoined.concat(','))
      .concat(exceptTagsJoined)
    return textTagsJoined
  }

  const fontOptions = [
    { value: 'Courier', label: 'Courier' },
    { value: 'Open Sans, sans-serif', label: 'Open Sans' },
    { value: 'Roboto', label: 'Roboto' },
    { value: 'Roboto Mono, monospace', label: 'Roboto Mono' },
  ]

  return (
    <>
      <GlobalStyle
        fontSizeEnabled={fontSizeEnabled}
        headerFontSize={headerFontSize}
        textFontSize={textFontSize}
        fontFamilyEnabled={fontFamilyEnabled}
        fontFamily={fontFamily}
        htmlHeaders={getHtmlHeaders()}
        htmlTexts={getHtmlTexts()}
      />
      <StylesDropdown />
      <StylesToggle />
      <StylesSlider />
      {rulerEnabled && !rulerInverted && (
        <div style={{ position: 'relative' }}>
          <RulerLine rulerPosition={rulerPosition} rulerSize={rulerSize} />
        </div>
      )}
      {rulerEnabled && rulerInverted && (
        <div style={{ position: 'relative' }}>
          <RulerTop rulerPosition={rulerPosition} rulerSize={rulerSize} />
          <RulerBot rulerPosition={rulerPosition} rulerSize={rulerSize} />
        </div>
      )}
      <Fab
        id="eulexiaFab"
        mainButtonStyles={{ backgroundColor: '#A7C5E6' }}
        style={{ left: 20, bottom: 20 }}
        icon={<IconConfig />}
        event={event}
      >
        <Action data-tip data-for="fontSize">
          <IconFontSize />
        </Action>
        <Action data-tip data-for="fontFamily">
          <IconFontFamily />
        </Action>
        <Action data-tip data-for="readingRuler">
          <IconRuler />
        </Action>
        <Action
          onMouseEnter={() => console.log('onmousenter LISTEN')}
          onMouseLeave={() => console.log('onmouseleave LISTEN')}
        >
          <IconTextToSpeech />
        </Action>
        <ReactTooltip
          id="fontSize"
          place="right"
          type="light"
          effect="solid"
          className="hoverVisible eulexiaTooltip"
          delayHide={200}
        >
          <div className="wrapper column">
            <div className="item title row">
              <strong className="item">Font size</strong>
              <div className="item-text-right">
                <Toggle
                  checked={fontSizeEnabled}
                  onChange={(e) => {
                    setFontSizeEnabled(e.target.checked)
                    if (e.target.checked) {
                      window.localStorage.setItem('fontSizeEnabled', 1)
                      return
                    }
                    setHeaderFontSize(0)
                    setTextFontSize(0)
                    window.localStorage.removeItem('fontSizeEnabled')
                    window.localStorage.removeItem('headerFontSizeValue')
                    window.localStorage.removeItem('textFontSizeValue')
                  }}
                  icons={false}
                />
              </div>
            </div>
            <div className="item column" style={{ marginTop: 28 }}>
              <span className="item eulexia-text">
                {headerFontSize ? `Headers (${headerFontSize} px)` : 'Headers'}
              </span>
              <div className="item">
                <Slider
                  min={8}
                  max={72}
                  step={2}
                  tooltip={false}
                  value={headerFontSize}
                  onChange={(value) => {
                    if (!fontSizeEnabled) return
                    setHeaderFontSize(value)
                    window.localStorage.setItem('headerFontSizeValue', value)
                  }}
                />
              </div>
            </div>
            <div className="item column" style={{ marginTop: 28 }}>
              <span className="item eulexia-text">
                {textFontSize ? `Texts (${textFontSize} px)` : 'Texts'}
              </span>
              <div className="item">
                <Slider
                  min={8}
                  max={72}
                  step={2}
                  tooltip={false}
                  value={textFontSize}
                  onChange={(value) => {
                    if (!fontSizeEnabled) return
                    setTextFontSize(value)
                    window.localStorage.setItem('textFontSizeValue', value)
                  }}
                />
              </div>
            </div>
          </div>
        </ReactTooltip>
        <ReactTooltip
          id="fontFamily"
          place="right"
          type="light"
          effect="solid"
          className="hoverVisible eulexiaTooltip"
          delayHide={200}
        >
          <div className="wrapper column">
            <div className="item title row">
              <strong className="item">Font family</strong>
              <div className="item-text-right">
                <Toggle
                  checked={fontFamilyEnabled}
                  onChange={(e) => {
                    setFontFamilyEnabled(e.target.checked)
                    if (e.target.checked) {
                      window.localStorage.setItem('fontFamilyEnabled', 1)
                      return
                    }
                    setFontFamily(null)
                    window.localStorage.removeItem('fontFamilyEnabled')
                    window.localStorage.removeItem('fontFamilyValue')
                  }}
                  icons={false}
                />
              </div>
            </div>
            <div className="item column" style={{ marginTop: 28 }}>
              <div className="item">
                <Dropdown
                  options={fontOptions}
                  onChange={(obj) => {
                    setFontFamily(obj.value)
                    window.localStorage.setItem('fontFamilyValue', obj.value)
                  }}
                  value={fontFamily}
                  placeholder="Font family..."
                  disabled={!fontFamilyEnabled}
                />
              </div>
            </div>
          </div>
        </ReactTooltip>
        <ReactTooltip
          id="readingRuler"
          place="right"
          type="light"
          effect="solid"
          className="hoverVisible eulexiaTooltip"
          delayHide={200}
        >
          <div className="wrapper column">
            <div className="item title row">
              <strong className="item">Reading ruler</strong>
              <div className="item-text-right">
                <Toggle
                  checked={rulerEnabled}
                  onChange={(e) => {
                    setRulerEnabled(e.target.checked)
                    if (e.target.checked) {
                      setRulerSize(100)
                      window.localStorage.setItem('rulerEnabled', 1)
                      window.localStorage.setItem('rulerSizeValue', 100)
                      window.localStorage.setItem('rulerInverted', 0)
                      return
                    }
                    setRulerSize(0)
                    setRulerInverted(false)
                    window.localStorage.removeItem('rulerEnabled')
                    window.localStorage.removeItem('rulerSizeValue')
                    window.localStorage.removeItem('rulerInverted')
                  }}
                  icons={false}
                />
              </div>
            </div>
            <div className="item column" style={{ marginTop: 28 }}>
              <span className="item eulexia-text">
                {rulerSize ? `Size (${rulerSize} px)` : 'Size'}
              </span>
              <div className="item">
                <Slider
                  min={50}
                  max={400}
                  step={5}
                  tooltip={false}
                  value={rulerSize}
                  onChange={(value) => {
                    if (!rulerEnabled) return
                    setRulerSize(value)
                    window.localStorage.setItem('rulerSizeValue', value)
                  }}
                />
              </div>
            </div>
            <div className="item row" style={{ marginTop: 28 }}>
              <span className="item eulexia-text">Inverted mode</span>
              <div className="item">
                <Toggle
                  disabled={!rulerEnabled}
                  checked={rulerInverted}
                  onChange={(e) => {
                    setRulerInverted(e.target.checked)
                    if (e.target.checked) {
                      window.localStorage.setItem('rulerInverted', 1)
                      return
                    }
                    window.localStorage.removeItem('rulerInverted')
                  }}
                  icons={false}
                />
              </div>
            </div>
          </div>
        </ReactTooltip>
      </Fab>
    </>
  )
}

export default EulexiaFab
