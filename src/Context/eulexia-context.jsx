import React, { createContext, useContext, useEffect, useState } from 'react'

const EulexiaContext = createContext(null)

const useEulexia = () => useContext(EulexiaContext)

const EulexiaContextProvider = ({ children }) => {
  const [rulerEnabled, setRulerEnabled] = useState(false)
  const [rulerSize, setRulerSize] = useState(100)
  const [rulerPosition, setRulerPosition] = useState(0)
  const [rulerInverted, setRulerInverted] = useState(false)

  const [fontSizeEnabled, setFontSizeEnabled] = useState(false)
  const [headerFontSize, setHeaderFontSize] = useState(0)
  const [textFontSize, setTextFontSize] = useState(0)

  const [colorChangeEnabled, setColorChangeEnabled] = useState(false)
  const [newTextColor, setNewTextColor] = useState('')
  const [newLinkColor, setNewLinkColor] = useState('')
  const [newBackgroundColor, setNewBackgroundColor] = useState('')

  const [fontFamilyEnabled, setFontFamilyEnabled] = useState(false)
  const [fontFamily, setFontFamily] = useState('')

  useEffect(() => {
    if (parseInt(window.localStorage.getItem('fontSizeEnabled'))) {
      setFontSizeEnabled(true)
    }
    if (parseInt(window.localStorage.getItem('fontFamilyEnabled'))) {
      setFontFamilyEnabled(true)
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
    if (window.localStorage.getItem('fontFamilyValue')) {
      setFontFamily(window.localStorage.getItem('fontFamilyValue'))
    }
  }, [fontFamilyEnabled])

  useEffect(() => {
    if (window.localStorage.getItem('newTextColor')) {
      setNewTextColor(window.localStorage.getItem('newTextColor'))
    }
    if (window.localStorage.getItem('newLinkColor')) {
      setNewLinkColor(window.localStorage.getItem('newLinkColor'))
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

  useEffect(() => {
    if (!fontFamilyEnabled) return

    const head = document.head
    const link = document.createElement('link')

    link.type = 'text/css'
    link.rel = 'stylesheet'
    link.href =
      'https://fonts.googleapis.com/css2?family=Courier&family=Open+Sans&family=Roboto&family=Roboto+Mono&display=swap'

    head.appendChild(link)

    return () => {
      head.removeChild(link)
    }
  }, [fontFamilyEnabled])

  const values = {
    ruler: {
      rulerEnabled,
      setRulerEnabled,
      rulerSize,
      setRulerSize,
      rulerPosition,
      setRulerPosition,
      rulerInverted,
      setRulerInverted
    },
    fontSize: {
      fontSizeEnabled,
      setFontSizeEnabled,
      headerFontSize,
      setHeaderFontSize,
      textFontSize,
      setTextFontSize
    },
    colorChange: {
      colorChangeEnabled,
      setColorChangeEnabled,
      newTextColor,
      setNewTextColor,
      newLinkColor,
      setNewLinkColor,
      newBackgroundColor,
      setNewBackgroundColor
    },
    fontFamily: {
      fontFamilyEnabled,
      setFontFamilyEnabled,
      fontFamily,
      setFontFamily
    }
  }

  return (
    <EulexiaContext.Provider value={values}>{children}</EulexiaContext.Provider>
  )
}

export { EulexiaContextProvider, useEulexia }
