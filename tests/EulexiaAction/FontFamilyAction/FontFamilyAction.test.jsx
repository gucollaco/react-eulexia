import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

import EulexiaFab from 'EulexiaFab/EulexiaFab.jsx'
import FontFamilyAction from 'EulexiaAction/FontFamilyAction/FontFamilyAction.jsx'

const resetFontFamilyAction = () => {
  const fontFamilyToggle = screen.getByTestId('font-family-toggle')
  if (fontFamilyToggle.checked) userEvent.click(fontFamilyToggle)
}

describe('FontFamilyAction', () => {
  beforeEach(() => {
    render(
      <EulexiaFab>
        <FontFamilyAction />
      </EulexiaFab>
    )
    resetFontFamilyAction()
  })

  test('Checking the texts shown on the Action', () => {
    expect(screen.getByText('Font family')).toBeInTheDocument()
  })

  test('Checks if the dropdown starts disabled', () => {
    const fontFamilyDiv = screen.getByText('Font family...')
    expect(fontFamilyDiv.parentElement).toHaveClass('Dropdown-disabled')
  })

  test('Checks if the dropdown gets enabled when switching activation toggle to on', () => {
    const fontFamilyDiv = screen.getByText('Font family...')
    expect(fontFamilyDiv.parentElement).toHaveClass('Dropdown-disabled')

    const fontFamilyToggle = screen.getByTestId('font-family-toggle')
    expect(fontFamilyToggle.checked).toEqual(false)
    userEvent.click(fontFamilyToggle)
    expect(fontFamilyToggle.checked).toEqual(true)

    expect(fontFamilyDiv.parentElement).not.toHaveClass('Dropdown-disabled')

    userEvent.click(fontFamilyDiv)
    expect(screen.getAllByRole('option').length).toBeGreaterThan(2)

    userEvent.click(screen.getByText('Open Sans'))
    expect(screen.getByText('Open Sans')).toBeInTheDocument()
  })

  test('Enables the functionality, selects a font family, checks if it was selected, then disabled functionality', () => {
    const fontFamilyToggle = screen.getByTestId('font-family-toggle')
    expect(fontFamilyToggle.checked).toEqual(false)
    userEvent.click(fontFamilyToggle)
    expect(fontFamilyToggle.checked).toEqual(true)

    userEvent.click(screen.getByText('Font family...'))
    expect(screen.getAllByRole('option').length).toBeGreaterThan(2)

    userEvent.click(screen.getByText('Open Sans'))
    expect(screen.getByText('Open Sans')).toBeInTheDocument()

    userEvent.click(fontFamilyToggle)
    expect(fontFamilyToggle.checked).toEqual(false)
    expect(screen.getByText('Font family...')).toBeInTheDocument()
  })
})
