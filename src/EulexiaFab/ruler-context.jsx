import React, { useState, createContext } from 'react'

const RulerContext = createContext(null)

const RulerContextProvider = ({ children }) => {
  const [rulerEnabled, setRulerEnabled] = useState(false)
  const [rulerSize, setRulerSize] = useState(50)
  const [rulerPosition, setRulerPosition] = useState(0)
  const [rulerInverted, setRulerInverted] = useState(false)

  const values = {
    rulerEnabled,
    setRulerEnabled,
    rulerSize,
    setRulerSize,
    rulerPosition,
    setRulerPosition,
    rulerInverted,
    setRulerInverted
  }

  return (
    <RulerContext.Provider value={values}>{children}</RulerContext.Provider>
  )
}

export { RulerContext, RulerContextProvider }
