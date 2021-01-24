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
    expect(screen.getByText('Link')).toBeInTheDocument()
    expect(screen.getByText('Background')).toBeInTheDocument()
  })

  test('Enabling functionality, selecting text color, selecting link color, selecting background color and disabling functionality', () => {
    const colorChangeToggle = screen.getByTestId('color-change-toggle')
    expect(colorChangeToggle.checked).toEqual(false)
    userEvent.click(colorChangeToggle)
    expect(colorChangeToggle.checked).toEqual(true)

    expect(screen.getByTestId('picker-button-text-0')).not.toHaveStyle(
      'background: white'
    )
    userEvent.click(screen.getByTestId('picker-button-text-0'))
    expect(screen.getByTestId('picker-button-text-0')).toHaveStyle(
      'background: white'
    )

    expect(screen.getByTestId('picker-button-link-0')).not.toHaveStyle(
      'background: white'
    )
    userEvent.click(screen.getByTestId('picker-button-link-0'))
    expect(screen.getByTestId('picker-button-link-0')).toHaveStyle(
      'background: white'
    )

    expect(screen.getByTestId('picker-button-background-0')).not.toHaveStyle(
      'background: white'
    )
    userEvent.click(screen.getByTestId('picker-button-background-0'))
    expect(screen.getByTestId('picker-button-background-0')).toHaveStyle(
      'background: white'
    )

    userEvent.click(colorChangeToggle)
    expect(colorChangeToggle.checked).toEqual(false)
  })
})
