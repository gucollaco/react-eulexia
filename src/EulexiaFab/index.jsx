import React, { useEffect, useState } from 'react'

import { useSpeechSynthesis } from 'react-speech-kit'
import { CirclePicker } from 'react-color'

import Fab from '../Fab/Fab.jsx'
import Action from '../Action/Action.jsx'
import Dropdown from '../Dropdown/Dropdown.jsx'
import Slider from '../Slider/Slider.jsx'
import Toggle from '../Toggle/Toggle.jsx'
import Tooltip from '../Tooltip/Tooltip.jsx'
import { PlayButton, StopButton } from '../Button/index.jsx'
import {
  ColorChangeIcon,
  FontFamilyIcon,
  FontSizeIcon,
  RulerIcon,
  TextToSpeechIcon
} from '../Icon/index.jsx'

import styled, { createGlobalStyle } from 'styled-components'

const RulerTop = styled.div.attrs((props) => ({
  style: {
    height: props.rulerPosition - props.rulerSize / 2
  }
}))`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  pointer-events: none;
`

const RulerBot = styled.div.attrs((props) => ({
  style: {
    top: props.rulerPosition + props.rulerSize / 2
  }
}))`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  bottom: 0;
  left: 0;
  position: fixed;
  pointer-events: none;
`

const RulerLine = styled.div.attrs((props) => ({
  style: {
    top: props.rulerPosition - props.rulerSize / 2,
    height: props.rulerSize
  }
}))`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  position: fixed;
  pointer-events: none;
`

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

const styledFontFamily = ({
  fontFamilyEnabled,
  fontFamily,
  htmlHeaders,
  htmlTexts
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
  htmlHeaders,
  htmlTexts
}) => {
  if (!colorChangeEnabled) return ''

  return newTextColor
    ? `
      ${htmlHeaders} {
        color: ${newTextColor} !important;
      }
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

const EulexiaFab = ({ event = 'hover' }) => {
  const [fontSizeEnabled, setFontSizeEnabled] = useState(false)
  const [headerFontSize, setHeaderFontSize] = useState(0)
  const [textFontSize, setTextFontSize] = useState(0)

  const [fontFamilyEnabled, setFontFamilyEnabled] = useState(false)
  const [fontFamily, setFontFamily] = useState('')

  const [rulerEnabled, setRulerEnabled] = useState(false)
  const [rulerSize, setRulerSize] = useState(50)
  const [rulerPosition, setRulerPosition] = useState(0)
  const [rulerInverted, setRulerInverted] = useState(false)

  const [colorChangeEnabled, setColorChangeEnabled] = useState(false)
  const [newTextColor, setNewTextColor] = useState('')
  const [newBackgroundColor, setNewBackgroundColor] = useState('')

  const { speak, voices, cancel } = useSpeechSynthesis()

  useEffect(() => {
    const head = document.head
    const link = document.createElement('link')

    link.type = 'text/css'
    link.rel = 'stylesheet'
    link.href =
      'https://fonts.googleapis.com/css2?family=Courier&family=Open+Sans&family=Roboto&family=Roboto+Mono&display=swap'

    head.appendChild(link)

    if (parseInt(window.localStorage.getItem('fontSizeEnabled'))) {
      setFontSizeEnabled(true)
    }
    if (parseInt(window.localStorage.getItem('fontFamilyEnabled'))) {
      setFontFamilyEnabled(true)
    }
    if (parseInt(window.localStorage.getItem('rulerEnabled'))) {
      setRulerEnabled(true)
    }
    if (parseInt(window.localStorage.getItem('rulerInverted'))) {
      setRulerInverted(true)
    }
    if (parseInt(window.localStorage.getItem('colorChangeEnabled'))) {
      setColorChangeEnabled(true)
    }

    return () => {
      head.removeChild(link)
    }
  }, [])

  useEffect(() => {
    if (window.localStorage.getItem('headerFontSizeValue')) {
      setHeaderFontSize(
        parseInt(window.localStorage.getItem('headerFontSizeValue'))
      )
    }
    if (window.localStorage.getItem('textFontSizeValue')) {
      setTextFontSize(
        parseInt(window.localStorage.getItem('textFontSizeValue'))
      )
    }
  }, [fontSizeEnabled])

  useEffect(() => {
    if (window.localStorage.getItem('fontFamilyValue')) {
      setFontFamily(window.localStorage.getItem('fontFamilyValue'))
    }
  }, [fontFamilyEnabled])

  useEffect(() => {
    if (window.localStorage.getItem('rulerSizeValue')) {
      setRulerSize(parseInt(window.localStorage.getItem('rulerSizeValue')))
    }
  }, [rulerEnabled])

  useEffect(() => {
    if (window.localStorage.getItem('newTextColor')) {
      setNewTextColor(window.localStorage.getItem('newTextColor'))
    }
    if (window.localStorage.getItem('newBackgroundColor')) {
      setNewBackgroundColor(window.localStorage.getItem('newBackgroundColor'))
    }
  }, [colorChangeEnabled])

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
      ':not(.rtf--mb)'
    ]
    const exceptTagsJoined = exceptTags.join('')
    const textTagsJoined = textTags
      .join(exceptTagsJoined.concat(','))
      .concat(exceptTagsJoined)
    return textTagsJoined
  }

  const getSelectedText = () => {
    return window.getSelection
      ? window.getSelection().toString()
      : document.selection && document.selection.type !== 'Control'
        ? document.selection.createRange().text
        : ''
  }

  const getPageLang = () =>
    document.documentElement.lang.toLowerCase() ||
    document.head.lang.toLowerCase() ||
    'en-us'

  const fontOptions = [
    { value: 'Courier', label: 'Courier' },
    { value: 'Open Sans, sans-serif', label: 'Open Sans' },
    { value: 'Roboto', label: 'Roboto' },
    { value: 'Roboto Mono, monospace', label: 'Roboto Mono' }
  ]

  return (
    <>
      <GlobalStyle
        fontSizeEnabled={fontSizeEnabled}
        headerFontSize={headerFontSize}
        textFontSize={textFontSize}
        fontFamilyEnabled={fontFamilyEnabled}
        fontFamily={fontFamily}
        colorChangeEnabled={colorChangeEnabled}
        newBackgroundColor={newBackgroundColor}
        newTextColor={newTextColor}
        htmlHeaders={getHtmlHeaders()}
        htmlTexts={getHtmlTexts()}
      />
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
      <Fab>
        <Action data-tip data-for='fontSize'>
          <FontSizeIcon />
        </Action>
        <Action data-tip data-for='fontFamily'>
          <FontFamilyIcon />
        </Action>
        <Action data-tip data-for='colorChange'>
          <ColorChangeIcon />
        </Action>
        <Action data-tip data-for='readingRuler'>
          <RulerIcon />
        </Action>
        <Action data-tip data-for='textToSpeech'>
          <TextToSpeechIcon />
        </Action>
        <Tooltip id='fontSize'>
          <div className='wrapper column'>
            <div className='item title row eulexia'>
              <strong className='item'>Font size</strong>
              <div className='item-text-right'>
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
            <div className='item column tall-margin-top'>
              <span className='item eulexia-text'>
                {headerFontSize ? `Headers (${headerFontSize} px)` : 'Headers'}
              </span>
              <div className='item'>
                <Slider
                  disabled={!fontSizeEnabled}
                  step={1}
                  min={0}
                  max={72}
                  values={[headerFontSize]}
                  onChange={([values]) => {
                    setHeaderFontSize(values)
                    window.localStorage.setItem('headerFontSizeValue', values)
                  }}
                />
              </div>
            </div>
            <div className='item column tall-margin-top'>
              <span className='item eulexia-text'>
                {textFontSize ? `Texts (${textFontSize} px)` : 'Texts'}
              </span>
              <div className='item'>
                <Slider
                  disabled={!fontSizeEnabled}
                  step={1}
                  min={0}
                  max={72}
                  values={[textFontSize]}
                  onChange={([values]) => {
                    setTextFontSize(values)
                    window.localStorage.setItem('textFontSizeValue', values)
                  }}
                />
              </div>
            </div>
          </div>
        </Tooltip>
        <Tooltip id='fontFamily'>
          <div className='wrapper column eulexia'>
            <div className='item title row'>
              <strong className='item'>Font family</strong>
              <div className='item-text-right'>
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
            <div className='item column tall-margin-top'>
              <div className='item'>
                <Dropdown
                  options={fontOptions}
                  onChange={(obj) => {
                    setFontFamily(obj.value)
                    window.localStorage.setItem('fontFamilyValue', obj.value)
                  }}
                  value={fontFamily}
                  placeholder='Font family...'
                  disabled={!fontFamilyEnabled}
                />
              </div>
            </div>
          </div>
        </Tooltip>
        <Tooltip id='colorChange'>
          <div className='wrapper column eulexia'>
            <div className='item title row eulexia'>
              <strong className='item'>Change color</strong>
              <div className='item-text-right eulexia'>
                <Toggle
                  checked={colorChangeEnabled}
                  onChange={(e) => {
                    setColorChangeEnabled(e.target.checked)
                    if (e.target.checked) {
                      window.localStorage.setItem('colorChangeEnabled', 1)
                      return
                    }
                    setNewTextColor('')
                    setNewBackgroundColor('')
                    window.localStorage.removeItem('colorChangeEnabled')
                    window.localStorage.removeItem('newTextColor')
                    window.localStorage.removeItem('newBackgroundColor')
                  }}
                  icons={false}
                />
              </div>
            </div>
            <div className='item column tall-margin-top'>
              <span className='item eulexia-text'>Text</span>
              <div className='item' style={{ marginTop: 16 }}>
                <CirclePicker
                  width='276'
                  circleSize={32}
                  circleSpacing={16}
                  color={newTextColor}
                  colors={['#030303', '#191970', '#00008B', '#40E0D0']}
                  onChangeComplete={({ hex }) => {
                    if (!colorChangeEnabled) return
                    setNewTextColor(hex)
                    window.localStorage.setItem('newTextColor', hex)
                  }}
                />
              </div>
            </div>
            <div className='item column tall-margin-top'>
              <span className='item eulexia-text'>Background</span>
              <div className='item' style={{ marginTop: 16 }}>
                <CirclePicker
                  width='276'
                  circleSize={32}
                  circleSpacing={16}
                  color={newBackgroundColor}
                  colors={['#F8F5F4', '#EBE3E1', '#F5F5DC', '#030303']}
                  onChangeComplete={({ hex }) => {
                    if (!colorChangeEnabled) return
                    setNewBackgroundColor(hex)
                    window.localStorage.setItem('newBackgroundColor', hex)
                  }}
                />
              </div>
            </div>
          </div>
        </Tooltip>
        <Tooltip id='readingRuler'>
          <div className='wrapper column'>
            <div className='item title row'>
              <strong className='item'>Reading ruler</strong>
              <div className='item-text-right'>
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
                    setRulerSize(50)
                    setRulerInverted(false)
                    window.localStorage.removeItem('rulerEnabled')
                    window.localStorage.removeItem('rulerSizeValue')
                    window.localStorage.removeItem('rulerInverted')
                  }}
                  icons={false}
                />
              </div>
            </div>
            <div className='item column tall-margin-top'>
              <span className='item eulexia-text'>
                {rulerEnabled && rulerSize ? `Size (${rulerSize} px)` : 'Size'}
              </span>
              <div className='item'>
                <Slider
                  disabled={!rulerEnabled}
                  step={5}
                  min={50}
                  max={400}
                  values={[rulerSize]}
                  onChange={([values]) => {
                    setRulerSize(values)
                    window.localStorage.setItem('rulerSizeValue', values)
                  }}
                />
              </div>
            </div>
            <div className='item row tall-margin-top'>
              <span className='item eulexia-text'>Inverted mode</span>
              <div className='item'>
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
        </Tooltip>
        <Tooltip id='textToSpeech'>
          <div className='wrapper column'>
            <div className='item title row'>
              <strong className='item'>Text to speech</strong>
            </div>
            <div className='item row tall-margin-top align-center'>
              {!voices.length && (
                <span className='item eulexia-text'>Browser not supported</span>
              )}
              {voices.length > 0 && (
                <>
                  <span className='item eulexia-text'>Read selected</span>
                  <div className='item'>
                    <PlayButton
                      onClick={() => {
                        const text = getSelectedText()
                        const voice = voices.find((voice) =>
                          voice.lang.toLowerCase().includes(getPageLang())
                        )
                        if (!text) return
                        speak({ text, voice })
                      }}
                    />
                    <StopButton onClick={() => cancel()} />
                  </div>
                </>
              )}
            </div>
          </div>
        </Tooltip>
      </Fab>
    </>
  )
}

export default EulexiaFab
