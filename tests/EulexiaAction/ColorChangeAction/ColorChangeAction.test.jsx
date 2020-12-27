import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

import EulexiaFab from 'EulexiaFab/EulexiaFab.jsx'
import ColorChangeAction from 'EulexiaAction/ColorChangeAction/ColorChangeAction.jsx'

const resetColorChangeAction = () => {
  const colorChangeToggle = screen.getByTestId('color-change-toggle')
  if (colorChangeToggle.checked) userEvent.click(colorChangeToggle)
  expect(colorChangeToggle.checked).toEqual(false)
}

describe('ColorChangeAction', () => {
  beforeEach(() => {
    render(
      <EulexiaFab>
        <ColorChangeAction />
      </EulexiaFab>
    )
    resetColorChangeAction()
  })

  test('Checking the texts shown on the Action', () => {
    expect(screen.getByText('Change color')).toBeInTheDocument()
    expect(screen.getByText('Text')).toBeInTheDocument()
    expect(screen.getByText('Background')).toBeInTheDocument()
  })

  test('Enabling functionality, selecting text color, selecting background color and disabling functionality', () => {
    const colorChangeToggle = screen.getByTestId('color-change-toggle')
    expect(colorChangeToggle.checked).toEqual(false)
    userEvent.click(colorChangeToggle)
    expect(colorChangeToggle.checked).toEqual(true)

    expect(screen.getByTitle(/#00008b/i)).toHaveStyle(
      'box-shadow: inset 0 0 0 17px #00008B'
    )
    userEvent.click(screen.getByTitle(/#00008b/i))
    expect(screen.getByTitle(/#00008b/i)).not.toHaveStyle(
      'box-shadow: inset 0 0 0 17px #00008B'
    )

    expect(screen.getByTitle(/#ebe3e1/i)).toHaveStyle(
      'box-shadow: inset 0 0 0 17px #EBE3E1'
    )
    userEvent.click(screen.getByTitle(/#ebe3e1/i))
    expect(screen.getByTitle(/#ebe3e1/i)).not.toHaveStyle(
      'box-shadow: inset 0 0 0 17px #EBE3E1'
    )

    userEvent.click(colorChangeToggle)
    expect(colorChangeToggle.checked).toEqual(false)
  })
})
