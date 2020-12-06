import React, { useContext } from 'react'
import styled from 'styled-components'
import { RulerContext } from '../ruler-context.jsx'

const RulerTop = styled.div.attrs((props) => ({
  style: {
    height: props.rulerPosition - props.rulerSize / 2
  }
}))`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  pointer-events: none;
`

const RulerBot = styled.div.attrs((props) => ({
  style: {
    top: props.rulerPosition + props.rulerSize / 2
  }
}))`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  bottom: 0;
  left: 0;
  position: fixed;
  pointer-events: none;
`

const RulerLine = styled.div.attrs((props) => ({
  style: {
    top: props.rulerPosition - props.rulerSize / 2,
    height: props.rulerSize
  }
}))`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  position: fixed;
  pointer-events: none;
`

const RulerSetup = () => {
  const { rulerEnabled, rulerSize, rulerPosition, rulerInverted } = useContext(
    RulerContext
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
