import React from 'react'

import { useEulexia } from '../../Context/eulexia-context.jsx'

import Action from '../../Action/Action.jsx'
import Slider from '../../Slider/Slider.jsx'
import Toggle from '../../Toggle/Toggle.jsx'
import Tooltip from '../../Tooltip/Tooltip.jsx'
import { RulerIcon } from '../../Icon/index.jsx'

const RulerAction = () => {
  const {
    ruler: {
      rulerEnabled,
      setRulerEnabled,
      rulerSize,
      setRulerSize,
      rulerInverted,
      setRulerInverted
    }
  } = useEulexia()

  return (
    <>
      <Action data-tip data-for='readingRuler'>
        <RulerIcon />
      </Action>
      <Tooltip id='readingRuler'>
        <div className='wrapper column eulexia'>
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
    </>
  )
}

export default RulerAction
