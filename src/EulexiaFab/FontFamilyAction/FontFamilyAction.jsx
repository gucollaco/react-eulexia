import React, { useContext } from 'react'

import GlobalStyle from '../../GlobalStyle/GlobalStyle.jsx'
import { EulexiaContext } from '../../Context/eulexia-context.jsx'

import Action from '../../Action/Action.jsx'
import Dropdown from '../../Dropdown/Dropdown.jsx'
import Toggle from '../../Toggle/Toggle.jsx'
import Tooltip from '../../Tooltip/Tooltip.jsx'
import { FontFamilyIcon } from '../../Icon/index.jsx'

const FontFamilyAction = () => {
  const {
    fontFamily: {
      fontFamilyEnabled,
      setFontFamilyEnabled,
      fontFamily,
      setFontFamily
    }
  } = useContext(EulexiaContext)

  const fontOptions = [
    { value: 'Courier', label: 'Courier' },
    { value: 'Open Sans, sans-serif', label: 'Open Sans' },
    { value: 'Roboto', label: 'Roboto' },
    { value: 'Roboto Mono, monospace', label: 'Roboto Mono' }
  ]

  const getHtmlTexts = () => {
    const textTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'li', 'span']
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
        <FontFamilyIcon />
      </Action>
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
    </>
  )
}

export default FontFamilyAction
