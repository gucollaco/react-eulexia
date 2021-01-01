import React from 'react'

import GlobalStyle from '../../GlobalStyle/GlobalStyle.jsx'
import { useEulexia } from '../../Context/eulexia-context.jsx'

import Action from '../../Action/Action.jsx'
import Slider from '../../Slider/Slider.jsx'
import Toggle from '../../Toggle/Toggle.jsx'
import Tooltip from '../../Tooltip/Tooltip.jsx'
import { FontSizeIcon } from '../../Icon/index.jsx'

const FontSizeAction = () => {
  const {
    fontSize: {
      fontSizeEnabled,
      setFontSizeEnabled,
      headerFontSize,
      setHeaderFontSize,
      textFontSize,
      setTextFontSize
    }
  } = useEulexia()

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

  return (
    <>
      <GlobalStyle
        fontSizeEnabled={fontSizeEnabled}
        headerFontSize={headerFontSize}
        textFontSize={textFontSize}
        htmlHeaders={getHtmlHeaders()}
        htmlTexts={getHtmlTexts()}
      />
      <Action data-tip data-for='font-size'>
        <FontSizeIcon />
      </Action>
      <Tooltip id='font-size'>
        <div className='eulexia-wrapper eulexia-column eulexia'>
          <div className='eulexia-item eulexia-title eulexia-row'>
            <strong className='eulexia-item'>Font size</strong>
            <div className='eulexia-item-text-right'>
              <Toggle
                data-testid='font-size-toggle'
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
          <div className='eulexia-item eulexia-column eulexia-tall-margin-top'>
            <span className='eulexia-item eulexia-text'>
              {headerFontSize ? `Headers (${headerFontSize} px)` : 'Headers'}
            </span>
            <div className='eulexia-item'>
              <Slider
                data-testid='header-font-size-slider'
                disabled={!fontSizeEnabled}
                step={2}
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
          <div className='eulexia-item eulexia-column eulexia-tall-margin-top'>
            <span className='eulexia-item eulexia-text'>
              {textFontSize ? `Texts (${textFontSize} px)` : 'Texts'}
            </span>
            <div className='eulexia-item'>
              <Slider
                data-testid='text-font-size-slider'
                disabled={!fontSizeEnabled}
                step={2}
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
    </>
  )
}

export default FontSizeAction
