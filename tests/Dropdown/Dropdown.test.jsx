import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Dropdown from 'Dropdown/Dropdown.jsx'

describe('Dropdown', () => {
  test('Checks if the dropdown has the specified placeholder as text', () => {
    render(<Dropdown placeholder='Font family...' />)
    expect(screen.getByText('Font family...')).toBeInTheDocument()
  })
  test('Checks if the dropdown classes match the react-dropdown expected classes', () => {
    render(<Dropdown placeholder='Font family...' />)
    const placeholderDiv = screen.getByText('Font family...')
    expect(placeholderDiv.parentElement.parentElement).toHaveClass(
      'Dropdown-root'
    )
    expect(placeholderDiv.parentElement).toHaveClass('Dropdown-control')
    expect(placeholderDiv).toHaveClass('Dropdown-placeholder')
    expect(placeholderDiv.parentElement.lastChild).toHaveClass(
      'Dropdown-arrow-wrapper'
    )
    expect(placeholderDiv.parentElement.lastChild.firstChild).toHaveClass(
      'Dropdown-arrow'
    )
  })
  test('Checks if a non disabled dropdown has the expected classes', () => {
    render(<Dropdown placeholder='Font family...' />)
    const placeholderDiv = screen.getByText('Font family...')
    expect(placeholderDiv.parentElement.parentElement).toHaveClass(
      'Dropdown-root'
    )
    expect(placeholderDiv.parentElement).toHaveClass('Dropdown-control')
    expect(placeholderDiv.parentElement).not.toHaveClass('Dropdown-disabled')
  })
  test('Checks if a disabled dropdown has the expected classes', () => {
    render(<Dropdown placeholder='Font family...' disabled />)
    const placeholderDiv = screen.getByText('Font family...')
    expect(placeholderDiv.parentElement.parentElement).toHaveClass(
      'Dropdown-root'
    )
    expect(placeholderDiv.parentElement).toHaveClass('Dropdown-control')
    expect(placeholderDiv.parentElement).toHaveClass('Dropdown-disabled')
  })
})
