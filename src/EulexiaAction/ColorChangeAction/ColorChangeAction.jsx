import React from 'react'

import GlobalStyle from '../../GlobalStyle/GlobalStyle.jsx'
import { useEulexia } from '../../Context/eulexia-context.jsx'
import Action from '../../Action/Action.jsx'
import ColorPicker from '../../ColorPicker/ColorPicker.jsx'
import Toggle from '../../Toggle/Toggle.jsx'
import Tooltip from '../../Tooltip/Tooltip.jsx'
import { ColorChangeIcon } from '../../Icon/index.jsx'

const ColorChangeAction = () => {
  const {
    colorChange: {
      colorChangeEnabled,
      setColorChangeEnabled,
      newTextColor,
      setNewTextColor,
      newBackgroundColor,
      setNewBackgroundColor
    }
  } = useEulexia()

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
        colorChangeEnabled={colorChangeEnabled}
        newBackgroundColor={newBackgroundColor}
        newTextColor={newTextColor}
        htmlTexts={getHtmlTexts()}
      />
      <Action data-tip data-for='colorChange'>
        <ColorChangeIcon />
      </Action>
      <Tooltip id='colorChange'>
        <div className='eulexia-wrapper eulexia-column eulexia'>
          <div className='eulexia-item eulexia-title eulexia-row'>
            <strong className='eulexia-item'>Change color</strong>
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
                  setNewBackgroundColor('')
                  window.localStorage.removeItem('colorChangeEnabled')
                  window.localStorage.removeItem('newTextColor')
                  window.localStorage.removeItem('newBackgroundColor')
                }}
                icons={false}
              />
            </div>
          </div>
          <div className='eulexia-item eulexia-column eulexia-tall-margin-top'>
            <span className='eulexia-item eulexia-text'>Text</span>
            <div className='eulexia-item' style={{ marginTop: 16 }}>
              <ColorPicker
                color={newTextColor}
                onChange={(value) => {
                  setNewTextColor(value)
                  window.localStorage.setItem('newTextColor', value)
                }}
                colors={['#030303', '#191970', '#00008B', '#40E0D0']}
                disabled={!colorChangeEnabled}
              />
            </div>
          </div>
          <div className='eulexia-item eulexia-column eulexia-tall-margin-top'>
            <span className='eulexia-item eulexia-text'>Background</span>
            <div className='eulexia-item' style={{ marginTop: 16 }}>
              <ColorPicker
                color={newBackgroundColor}
                onChange={(value) => {
                  setNewBackgroundColor(value)
                  window.localStorage.setItem('newBackgroundColor', value)
                }}
                colors={['#F8F5F4', '#EBE3E1', '#F5F5DC', '#030303']}
                disabled={!colorChangeEnabled}
              />
            </div>
          </div>
        </div>
      </Tooltip>
    </>
  )
}

export default ColorChangeAction
