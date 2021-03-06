import React from 'react'
import PropTypes from 'prop-types'

import GlobalStyle from '../../GlobalStyle/GlobalStyle.jsx'
import { useEulexia } from '../../Context/eulexia-context.jsx'

import Action from '../../Action/Action.jsx'
import Slider from '../../Slider/Slider.jsx'
import Toggle from '../../Toggle/Toggle.jsx'
import Tooltip from '../../Tooltip/Tooltip.jsx'
import { FontSizeIcon } from '../../Icon/index.jsx'

const FontSizeAction = ({
  headerLabel = 'Headers',
  headerTags = [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    '.h1',
    '.h2',
    '.h3',
    '.h4',
    '.h5',
    '.h6'
  ],
  icon = <FontSizeIcon />,
  textLabel = 'Texts',
  textTags = ['p', 'li', 'span'],
  tooltipBackgroundColor = '#FFFFFF',
  tooltipTextColor = '#000000',
  tooltipTitle = 'Font size'
}) => {
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
    const exceptTags = [':not(.eulexia-text)']
    const exceptTagsJoined = exceptTags.join('')
    const headerTagsJoined = headerTags
      .join(exceptTagsJoined.concat(','))
      .concat(exceptTagsJoined)
    return headerTagsJoined
  }

  const getHtmlTexts = () => {
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
        {icon}
      </Action>
      <Tooltip
        id='font-size'
        textColor={tooltipTextColor}
        backgroundColor={tooltipBackgroundColor}
      >
        <div className='eulexia-wrapper eulexia-column eulexia'>
          <div className='eulexia-item eulexia-title eulexia-row'>
            <strong className='eulexia-item'>{tooltipTitle}</strong>
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
              {headerFontSize
                ? `${headerLabel} (${headerFontSize} px)`
                : headerLabel}
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
              {textFontSize ? `${textLabel} (${textFontSize} px)` : textLabel}
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

FontSizeAction.propTypes = {
  headerLabel: PropTypes.string,
  headerTags: PropTypes.arrayOf(PropTypes.string),
  icon: PropTypes.any,
  textLabel: PropTypes.string,
  textTags: PropTypes.arrayOf(PropTypes.string),
  tooltipBackgroundColor: PropTypes.string,
  tooltipTextColor: PropTypes.string,
  tooltipTitle: PropTypes.string
}

export default FontSizeAction
