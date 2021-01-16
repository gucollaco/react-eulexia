import React from 'react'
import PropTypes from 'prop-types'

import { useEulexia } from '../../Context/eulexia-context.jsx'

import Action from '../../Action/Action.jsx'
import Slider from '../../Slider/Slider.jsx'
import Toggle from '../../Toggle/Toggle.jsx'
import Tooltip from '../../Tooltip/Tooltip.jsx'
import { RulerIcon } from '../../Icon/index.jsx'

const RulerAction = ({
  tooltipTitle = 'Reading ruler',
  sizeLabel = 'Size',
  invertedModeLabel = 'Inverted mode'
}) => {
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
        <div className='eulexia-wrapper eulexia-column eulexia'>
          <div className='eulexia-item eulexia-title eulexia-row'>
            <strong className='eulexia-item'>{tooltipTitle}</strong>
            <div className='eulexia-item-text-right'>
              <Toggle
                data-testid='ruler-toggle'
                checked={rulerEnabled}
                onChange={(e) => {
                  setRulerEnabled(e.target.checked)
                  if (e.target.checked) {
                    window.localStorage.setItem('rulerEnabled', 1)
                    window.localStorage.setItem('rulerSizeValue', 100)
                    window.localStorage.setItem('rulerInverted', 0)
                    return
                  }
                  setRulerSize(100)
                  setRulerInverted(false)
                  window.localStorage.removeItem('rulerEnabled')
                  window.localStorage.removeItem('rulerSizeValue')
                  window.localStorage.removeItem('rulerInverted')
                }}
                icons={false}
              />
            </div>
          </div>
          <div className='eulexia-item eulexia-column eulexia-tall-margin-top'>
            <span className='eulexia-item eulexia-text'>
              {rulerEnabled && rulerSize
                ? `${sizeLabel} (${rulerSize} px)`
                : sizeLabel}
            </span>
            <div className='eulexia-item'>
              <Slider
                data-testid='ruler-size-slider'
                disabled={!rulerEnabled}
                step={5}
                min={100}
                max={400}
                values={[rulerSize]}
                onChange={([values]) => {
                  setRulerSize(values)
                  window.localStorage.setItem('rulerSizeValue', values)
                }}
              />
            </div>
          </div>
          <div className='eulexia-item eulexia-row eulexia-tall-margin-top'>
            <span className='eulexia-item eulexia-text'>
              {invertedModeLabel}
            </span>
            <div className='eulexia-item'>
              <Toggle
                data-testid='inverted-mode-toggle'
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

RulerAction.propTypes = {
  tooltipTitle: PropTypes.string,
  sizeLabel: PropTypes.string,
  invertedModeLabel: PropTypes.string
}

export default RulerAction
