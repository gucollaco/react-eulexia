import React, { createContext, useEffect, useState } from 'react'

const EulexiaContext = createContext(null)

const EulexiaContextProvider = ({ children }) => {
  const [rulerEnabled, setRulerEnabled] = useState(false)
  const [rulerSize, setRulerSize] = useState(50)
  const [rulerPosition, setRulerPosition] = useState(0)
  const [rulerInverted, setRulerInverted] = useState(false)

  const [fontSizeEnabled, setFontSizeEnabled] = useState(false)
  const [headerFontSize, setHeaderFontSize] = useState(0)
  const [textFontSize, setTextFontSize] = useState(0)

  const [colorChangeEnabled, setColorChangeEnabled] = useState(false)
  const [newTextColor, setNewTextColor] = useState('')
  const [newBackgroundColor, setNewBackgroundColor] = useState('')

  useEffect(() => {
    if (parseInt(window.localStorage.getItem('fontSizeEnabled'))) {
      setFontSizeEnabled(true)
    }
    if (parseInt(window.localStorage.getItem('colorChangeEnabled'))) {
      setColorChangeEnabled(true)
    }
    if (parseInt(window.localStorage.getItem('rulerEnabled'))) {
      setRulerEnabled(true)
    }
    if (parseInt(window.localStorage.getItem('rulerInverted'))) {
      setRulerInverted(true)
    }
  }, [])

  useEffect(() => {
    if (window.localStorage.getItem('headerFontSizeValue')) {
      setHeaderFontSize(
        parseInt(window.localStorage.getItem('headerFontSizeValue'))
      )
    }
    if (window.localStorage.getItem('textFontSizeValue')) {
      setTextFontSize(
        parseInt(window.localStorage.getItem('textFontSizeValue'))
      )
    }
  }, [fontSizeEnabled])

  useEffect(() => {
    if (window.localStorage.getItem('newTextColor')) {
      setNewTextColor(window.localStorage.getItem('newTextColor'))
    }
    if (window.localStorage.getItem('newBackgroundColor')) {
      setNewBackgroundColor(window.localStorage.getItem('newBackgroundColor'))
    }
  }, [colorChangeEnabled])

  useEffect(() => {
    if (window.localStorage.getItem('rulerSizeValue')) {
      setRulerSize(parseInt(window.localStorage.getItem('rulerSizeValue')))
    }
  }, [rulerEnabled])

  useEffect(() => {
    const rulerPositionUpdate = (e) =>
      rulerEnabled ? setRulerPosition(e.clientY) : {}

    document.addEventListener('mousemove', rulerPositionUpdate, false)
    return () => {
      document.removeEventListener('mousemove', rulerPositionUpdate, false)
    }
  })

  const values = {
    rulerEnabled,
    setRulerEnabled,
    rulerSize,
    setRulerSize,
    rulerPosition,
    setRulerPosition,
    rulerInverted,
    setRulerInverted,

    fontSizeEnabled,
    setFontSizeEnabled,
    headerFontSize,
    setHeaderFontSize,
    textFontSize,
    setTextFontSize,

    colorChangeEnabled,
    setColorChangeEnabled,
    newTextColor,
    setNewTextColor,
    newBackgroundColor,
    setNewBackgroundColor
  }

  return (
    <EulexiaContext.Provider value={values}>{children}</EulexiaContext.Provider>
  )
}

export { EulexiaContext, EulexiaContextProvider }
