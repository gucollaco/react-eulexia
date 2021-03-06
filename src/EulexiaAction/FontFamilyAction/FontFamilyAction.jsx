import React from 'react'
import PropTypes from 'prop-types'

import GlobalStyle from '../../GlobalStyle/GlobalStyle.jsx'
import { useEulexia } from '../../Context/eulexia-context.jsx'

import Action from '../../Action/Action.jsx'
import Dropdown from '../../Dropdown/Dropdown.jsx'
import Toggle from '../../Toggle/Toggle.jsx'
import Tooltip from '../../Tooltip/Tooltip.jsx'
import { FontFamilyIcon } from '../../Icon/index.jsx'

const FontFamilyAction = ({
  dropdownPlaceholder = 'Font family...',
  icon = <FontFamilyIcon />,
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
    'span',
    'a'
  ],
  tooltipBackgroundColor = '#FFFFFF',
  tooltipTextColor = '#000000',
  tooltipTitle = 'Font family'
}) => {
  const {
    fontFamily: {
      fontFamilyEnabled,
      setFontFamilyEnabled,
      fontFamily,
      setFontFamily
    }
  } = useEulexia()

  const fontOptions = [
    { value: "'Courier Prime', monospace", label: 'Courier Prime' },
    { value: "'Lexend Mega', sans-serif", label: 'Lexend Mega' },
    { value: "'Montserrat', sans-serif", label: 'Montserrat' },
    { value: "'Open Sans', sans-serif", label: 'Open Sans' },
    { value: "'Roboto', sans-serif", label: 'Roboto' },
    { value: "'Roboto Mono', monospace", label: 'Roboto Mono' },
    { value: "'Nunito', sans-serif", label: 'Nunito' }
  ]

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
        fontFamilyEnabled={fontFamilyEnabled}
        fontFamily={fontFamily}
        htmlTexts={getHtmlTexts()}
      />
      <Action data-tip data-for='fontFamily'>
        {icon}
      </Action>
      <Tooltip
        id='fontFamily'
        textColor={tooltipTextColor}
        backgroundColor={tooltipBackgroundColor}
      >
        <div className='eulexia-wrapper eulexia-column eulexia'>
          <div className='eulexia-item eulexia-title eulexia-row'>
            <strong className='eulexia-item'>{tooltipTitle}</strong>
            <div className='eulexia-item-text-right'>
              <Toggle
                data-testid='font-family-toggle'
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
          <div className='eulexia-item eulexia-column eulexia-tall-margin-top'>
            <div className='eulexia-item'>
              <Dropdown
                options={fontOptions}
                onChange={(obj) => {
                  setFontFamily(obj.value)
                  window.localStorage.setItem('fontFamilyValue', obj.value)
                }}
                value={fontFamily}
                placeholder={dropdownPlaceholder}
                disabled={!fontFamilyEnabled}
              />
            </div>
          </div>
        </div>
      </Tooltip>
    </>
  )
}

FontFamilyAction.propTypes = {
  dropdownPlaceholder: PropTypes.string,
  icon: PropTypes.any,
  textTags: PropTypes.arrayOf(PropTypes.string),
  tooltipBackgroundColor: PropTypes.string,
  tooltipTextColor: PropTypes.string,
  tooltipTitle: PropTypes.string
}

export default FontFamilyAction
