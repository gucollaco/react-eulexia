import React from 'react'

import { useEulexia } from '../../Context/eulexia-context.jsx'

import RulerBot from './RulerBot/RulerBot.jsx'
import RulerTop from './RulerTop/RulerTop.jsx'
import RulerLine from './RulerLine/RulerLine.jsx'

const RulerSetup = () => {
  const {
    ruler: { rulerEnabled, rulerSize, rulerPosition, rulerInverted }
  } = useEulexia()

  return (
    <>
      {rulerEnabled && !rulerInverted && (
        <div style={{ position: 'relative' }}>
          <RulerLine
            rulerPosition={rulerPosition}
            rulerSize={rulerSize}
            className='eulexia-ruler'
          />
        </div>
      )}
      {rulerEnabled && rulerInverted && (
        <div style={{ position: 'relative' }}>
          <RulerTop
            rulerPosition={rulerPosition}
            rulerSize={rulerSize}
            className='eulexia-ruler'
          />
          <RulerBot
            rulerPosition={rulerPosition}
            rulerSize={rulerSize}
            className='eulexia-ruler'
          />
        </div>
      )}
    </>
  )
}

export default RulerSetup
