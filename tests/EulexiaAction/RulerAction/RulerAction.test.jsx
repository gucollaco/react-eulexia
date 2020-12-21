import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import EulexiaFab from 'EulexiaFab/EulexiaFab.jsx'
import RulerAction from 'EulexiaAction/RulerAction/RulerAction.jsx'

describe('RulerAction', () => {
  test('Checking the texts shown on the Action', () => {
    render(
      <EulexiaFab>
        <RulerAction />
      </EulexiaFab>
    )

    expect(screen.getByText('Reading ruler')).toBeInTheDocument()
    expect(screen.getByText('Size')).toBeInTheDocument()
    expect(screen.getByText('Inverted mode')).toBeInTheDocument()
  })

  test('Trying to edit slider value before activating toggle', () => {
    render(
      <EulexiaFab>
        <RulerAction />
      </EulexiaFab>
    )

    const rulerSizeSlider = screen.getByTestId('ruler-size-slider')
    expect(rulerSizeSlider).toHaveAttribute('value', '100')
    rulerSizeSlider.firstChild.focus()
    fireEvent.keyDown(rulerSizeSlider.firstChild, {
      key: 'ArrowUp',
      code: 38
    })
    expect(rulerSizeSlider).not.toHaveAttribute('value', '105')
  })

  test('Switching activation toggle button to on, changing the ruler size values and switching back off', () => {
    render(
      <EulexiaFab>
        <RulerAction />
      </EulexiaFab>
    )

    const rulerToggle = screen.getByTestId('ruler-toggle')
    expect(rulerToggle.checked).toEqual(false)
    fireEvent.click(rulerToggle)
    expect(rulerToggle.checked).toEqual(true)

    const rulerSizeSlider = screen.getByTestId('ruler-size-slider')
    expect(rulerSizeSlider).toHaveAttribute('value', '100')
    rulerSizeSlider.firstChild.focus()
    fireEvent.keyDown(rulerSizeSlider.firstChild, {
      key: 'ArrowUp',
      code: 38
    })
    expect(rulerSizeSlider).toHaveAttribute('value', '105')

    fireEvent.click(rulerToggle)
    expect(rulerToggle.checked).toEqual(false)
  })

  test('Checking if inverted mode toggle button starts disabled', () => {
    render(
      <EulexiaFab>
        <RulerAction />
      </EulexiaFab>
    )

    const invertedModeToggle = screen.getByTestId('inverted-mode-toggle')
    expect(invertedModeToggle).toBeDisabled()
  })

  test('Switching activation toggle button to on, switching the inverted mode toggle button to on and off sequentially, and finally switching activation toggle button back off', () => {
    render(
      <EulexiaFab>
        <RulerAction />
      </EulexiaFab>
    )

    const rulerToggle = screen.getByTestId('ruler-toggle')
    expect(rulerToggle.checked).toEqual(false)
    fireEvent.click(rulerToggle)
    expect(rulerToggle.checked).toEqual(true)

    const invertedModeToggle = screen.getByTestId('inverted-mode-toggle')
    expect(invertedModeToggle.checked).toEqual(false)
    fireEvent.click(invertedModeToggle)
    expect(invertedModeToggle.checked).toEqual(true)
    fireEvent.click(invertedModeToggle)
    expect(invertedModeToggle.checked).toEqual(false)

    fireEvent.click(rulerToggle)
    expect(rulerToggle.checked).toEqual(false)
    expect(invertedModeToggle.checked).toEqual(false)
    expect(invertedModeToggle).toBeDisabled()
  })
})
