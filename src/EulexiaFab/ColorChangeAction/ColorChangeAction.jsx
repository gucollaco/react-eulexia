import React, { useContext } from 'react'

import GlobalStyle from '../../GlobalStyle/GlobalStyle.jsx'
import { EulexiaContext } from '../../Context/eulexia-context.jsx'

import Action from '../../Action/Action.jsx'
import Toggle from '../../Toggle/Toggle.jsx'
import Tooltip from '../../Tooltip/Tooltip.jsx'
import { ColorChangeIcon } from '../../Icon/index.jsx'
import { CirclePicker } from 'react-color'

const ColorChangeAction = () => {
  const {
    colorChangeEnabled,
    setColorChangeEnabled,
    newTextColor,
    setNewTextColor,
    newBackgroundColor,
    setNewBackgroundColor
  } = useContext(EulexiaContext)

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
    </>
  )
}

export default ColorChangeAction
