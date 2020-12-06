import React, { useContext } from 'react'

import { EulexiaContext } from '../../Context/eulexia-context.jsx'

import RulerBot from './RulerBot/RulerBot.jsx'
import RulerTop from './RulerTop/RulerTop.jsx'
import RulerLine from './RulerLine/RulerLine.jsx'

const RulerSetup = () => {
  const { rulerEnabled, rulerSize, rulerPosition, rulerInverted } = useContext(
    EulexiaContext
  )

  return (
    <>
      {rulerEnabled && !rulerInverted && (
        <div style={{ position: 'relative' }}>
          <RulerLine rulerPosition={rulerPosition} rulerSize={rulerSize} />
        </div>
      )}
      {rulerEnabled && rulerInverted && (
        <div style={{ position: 'relative' }}>
          <RulerTop rulerPosition={rulerPosition} rulerSize={rulerSize} />
          <RulerBot rulerPosition={rulerPosition} rulerSize={rulerSize} />
        </div>
      )}
    </>
  )
}

export default RulerSetup
