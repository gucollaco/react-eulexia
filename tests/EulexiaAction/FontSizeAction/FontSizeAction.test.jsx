import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import EulexiaFab from 'EulexiaFab/EulexiaFab.jsx'
import FontSizeAction from 'EulexiaAction/FontSizeAction/FontSizeAction.jsx'

describe('FontSizeAction', () => {
  test('Checking the texts shown on the Action', () => {
    render(
      <EulexiaFab>
        <FontSizeAction />
      </EulexiaFab>
    )

    expect(screen.getByText('Font size')).toBeInTheDocument()
    expect(screen.getByText('Headers')).toBeInTheDocument()
    expect(screen.getByText('Texts')).toBeInTheDocument()
  })

  test('Trying to edit slider value before activating toggle', () => {
    render(
      <EulexiaFab>
        <FontSizeAction />
      </EulexiaFab>
    )

    const headerFontSizeSlider = screen.getByTestId('header-font-size-slider')
    expect(headerFontSizeSlider).toHaveValue('0')
    headerFontSizeSlider.firstChild.focus()
    fireEvent.keyDown(headerFontSizeSlider.firstChild, {
      key: 'ArrowUp',
      code: 38
    })
    expect(headerFontSizeSlider).not.toHaveValue('2')
  })

  test('Switching toggle button to on, changing the text size values and switching back off', () => {
    render(
      <EulexiaFab>
        <FontSizeAction />
      </EulexiaFab>
    )

    const fontSizeToggle = screen.getByTestId('font-size-toggle')
    expect(fontSizeToggle.checked).toEqual(false)
    fireEvent.click(fontSizeToggle)
    expect(fontSizeToggle.checked).toEqual(true)

    const headerFontSizeSlider = screen.getByTestId('header-font-size-slider')
    expect(headerFontSizeSlider).toHaveValue('0')
    headerFontSizeSlider.firstChild.focus()
    fireEvent.keyDown(headerFontSizeSlider.firstChild, {
      key: 'ArrowUp',
      code: 38
    })
    expect(headerFontSizeSlider).toHaveValue('2')

    const textFontSizeSlider = screen.getByTestId('text-font-size-slider')
    expect(textFontSizeSlider).toHaveValue('0')
    textFontSizeSlider.firstChild.focus()
    fireEvent.keyDown(textFontSizeSlider.firstChild, {
      key: 'ArrowUp',
      code: 38
    })
    expect(textFontSizeSlider).toHaveValue('2')

    fireEvent.click(fontSizeToggle)
    expect(fontSizeToggle.checked).toEqual(false)
  })
})
