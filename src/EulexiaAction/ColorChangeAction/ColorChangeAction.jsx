import React from 'react'
import PropTypes from 'prop-types'

import GlobalStyle from '../../GlobalStyle/GlobalStyle.jsx'
import { useEulexia } from '../../Context/eulexia-context.jsx'

import Action from '../../Action/Action.jsx'
import ColorPicker from '../../ColorPicker/ColorPicker.jsx'
import Toggle from '../../Toggle/Toggle.jsx'
import Tooltip from '../../Tooltip/Tooltip.jsx'
import { ColorChangeIcon } from '../../Icon/index.jsx'

const ColorChangeAction = ({
  backgroundColorOptions = ['#F8F5F4', '#EBE3E1', '#F5F5DC', '#030303'],
  backgroundLabel = 'Background',
  icon = <ColorChangeIcon />,
  linkColorOptions = ['#030303', '#191970', '#00008B', '#40E0D0'],
  linkLabel = 'Link',
  linkTags = ['a'],
  paletteColor = '#C1C1CC',
  textColorOptions = ['#030303', '#191970', '#00008B', '#40E0D0'],
  textLabel = 'Text',
  textTags = [
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
    '.h6',
    'p',
    'li',
    'span'
  ],
  tooltipBackgroundColor = '#FFFFFF',
  tooltipTextColor = '#000000',
  tooltipTitle = 'Change color'
}) => {
  const {
    colorChange: {
      colorChangeEnabled,
      setColorChangeEnabled,
      newTextColor,
      setNewTextColor,
      newLinkColor,
      setNewLinkColor,
      newBackgroundColor,
      setNewBackgroundColor
    }
  } = useEulexia()

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

  const getHtmlLinks = () => {
    const linkTagsJoined = linkTags.join(',')
    return linkTagsJoined
  }

  return (
    <>
      <GlobalStyle
        colorChangeEnabled={colorChangeEnabled}
        newBackgroundColor={newBackgroundColor}
        newTextColor={newTextColor}
        newLinkColor={newLinkColor}
        htmlTexts={getHtmlTexts()}
        htmlLinks={getHtmlLinks()}
      />
      <Action data-tip data-for='colorChange'>
        {icon}
      </Action>
      <Tooltip
        id='colorChange'
        textColor={tooltipTextColor}
        backgroundColor={tooltipBackgroundColor}
      >
        <div className='eulexia-wrapper eulexia-column eulexia'>
          <div className='eulexia-item eulexia-title eulexia-row'>
            <strong className='eulexia-item'>{tooltipTitle}</strong>
            <div className='eulexia-item-text-right'>
              <Toggle
                data-testid='color-change-toggle'
                checked={colorChangeEnabled}
                onChange={(e) => {
                  setColorChangeEnabled(e.target.checked)
                  if (e.target.checked) {
                    window.localStorage.setItem('colorChangeEnabled', 1)
                    return
                  }
                  setNewTextColor('')
                  setNewLinkColor('')
                  setNewBackgroundColor('')
                  window.localStorage.removeItem('colorChangeEnabled')
                  window.localStorage.removeItem('newTextColor')
                  window.localStorage.removeItem('newLinkColor')
                  window.localStorage.removeItem('newBackgroundColor')
                }}
                icons={false}
              />
            </div>
          </div>
          <div className='eulexia-item eulexia-column eulexia-tall-margin-top'>
            <span className='eulexia-item eulexia-text'>{textLabel}</span>
            <div className='eulexia-item' style={{ marginTop: 16 }}>
              <ColorPicker
                color={newTextColor}
                onChange={(value) => {
                  setNewTextColor(value)
                  window.localStorage.setItem('newTextColor', value)
                }}
                colors={textColorOptions}
                disabled={!colorChangeEnabled}
                paletteColor={paletteColor}
                testTag='text'
              />
            </div>
          </div>
          <div className='eulexia-item eulexia-column eulexia-tall-margin-top'>
            <span className='eulexia-item eulexia-text'>{linkLabel}</span>
            <div className='eulexia-item' style={{ marginTop: 16 }}>
              <ColorPicker
                color={newLinkColor}
                onChange={(value) => {
                  setNewLinkColor(value)
                  window.localStorage.setItem('newLinkColor', value)
                }}
                colors={linkColorOptions}
                disabled={!colorChangeEnabled}
                paletteColor={paletteColor}
                testTag='link'
              />
            </div>
          </div>
          <div className='eulexia-item eulexia-column eulexia-tall-margin-top'>
            <span className='eulexia-item eulexia-text'>{backgroundLabel}</span>
            <div className='eulexia-item' style={{ marginTop: 16 }}>
              <ColorPicker
                color={newBackgroundColor}
                onChange={(value) => {
                  setNewBackgroundColor(value)
                  window.localStorage.setItem('newBackgroundColor', value)
                }}
                colors={backgroundColorOptions}
                disabled={!colorChangeEnabled}
                paletteColor={paletteColor}
                testTag='background'
              />
            </div>
          </div>
        </div>
      </Tooltip>
    </>
  )
}

ColorChangeAction.propTypes = {
  backgroundColorOptions: PropTypes.arrayOf(PropTypes.string),
  backgroundLabel: PropTypes.string,
  icon: PropTypes.any,
  linkColorOptions: PropTypes.arrayOf(PropTypes.string),
  linkLabel: PropTypes.string,
  linkTags: PropTypes.arrayOf(PropTypes.string),
  paletteColor: PropTypes.string,
  textColorOptions: PropTypes.arrayOf(PropTypes.string),
  textLabel: PropTypes.string,
  textTags: PropTypes.arrayOf(PropTypes.string),
  tooltipBackgroundColor: PropTypes.string,
  tooltipTextColor: PropTypes.string,
  tooltipTitle: PropTypes.string
}

export default ColorChangeAction
