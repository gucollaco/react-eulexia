import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

import EulexiaFab from 'EulexiaFab/EulexiaFab.jsx'
import FontSizeAction from 'EulexiaAction/FontSizeAction/FontSizeAction.jsx'

const resetFontSizeAction = () => {
  const fontSizeToggle = screen.getByTestId('font-size-toggle')
  if (fontSizeToggle.checked) userEvent.click(fontSizeToggle)
  expect(fontSizeToggle.checked).toEqual(false)
}

describe('FontSizeAction', () => {
  beforeEach(() => {
    render(
      <EulexiaFab>
        <FontSizeAction />
      </EulexiaFab>
    )
    resetFontSizeAction()
  })

  test('Checking the texts shown on the Action', () => {
    expect(screen.getByText('Font size')).toBeInTheDocument()
    expect(screen.getByText('Headers')).toBeInTheDocument()
    expect(screen.getByText('Texts')).toBeInTheDocument()
  })

  test('Trying to edit slider value before activating toggle', () => {
    const headerFontSizeSlider = screen.getByTestId('header-font-size-slider')
    expect(headerFontSizeSlider).toHaveAttribute('value', '0')
    headerFontSizeSlider.firstChild.focus()
    userEvent.type(headerFontSizeSlider.firstChild, '{arrowup}')
    expect(headerFontSizeSlider).not.toHaveAttribute('value', '2')
  })

  test('Switching toggle button to on, changing the text size values and switching back off', () => {
    const fontSizeToggle = screen.getByTestId('font-size-toggle')
    expect(fontSizeToggle.checked).toEqual(false)
    userEvent.click(fontSizeToggle)
    expect(fontSizeToggle.checked).toEqual(true)

    const headerFontSizeSlider = screen.getByTestId('header-font-size-slider')
    expect(headerFontSizeSlider).toHaveAttribute('value', '0')
    headerFontSizeSlider.firstChild.focus()
    userEvent.type(headerFontSizeSlider.firstChild, '{arrowup}')
    expect(headerFontSizeSlider).toHaveAttribute('value', '2')

    const textFontSizeSlider = screen.getByTestId('text-font-size-slider')
    expect(textFontSizeSlider).toHaveAttribute('value', '0')
    textFontSizeSlider.firstChild.focus()
    userEvent.type(textFontSizeSlider.firstChild, '{arrowup}')
    expect(textFontSizeSlider).toHaveAttribute('value', '2')

    userEvent.click(fontSizeToggle)
    expect(fontSizeToggle.checked).toEqual(false)
  })
})
