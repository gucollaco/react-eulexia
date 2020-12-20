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
    const { container } = render(<Dropdown placeholder='Font family...' />)
    expect(container.firstChild).toHaveClass('Dropdown-root')
    expect(container.firstChild.firstChild).toHaveClass('Dropdown-control')
    expect(container.firstChild.firstChild.firstChild).toHaveClass(
      'Dropdown-placeholder'
    )
    expect(container.firstChild.firstChild.lastChild).toHaveClass(
      'Dropdown-arrow-wrapper'
    )
    expect(container.firstChild.firstChild.lastChild.firstChild).toHaveClass(
      'Dropdown-arrow'
    )
  })
  test('Checks if a non disabled dropdown has the expected classes', () => {
    const { container } = render(<Dropdown placeholder='Font family...' />)
    expect(container.firstChild).toHaveClass('Dropdown-root')
    expect(container.firstChild.firstChild).toHaveClass('Dropdown-control')
    expect(container.firstChild.firstChild).not.toHaveClass(
      'Dropdown-disabled'
    )
  })
  test('Checks if a disabled dropdown has the expected classes', () => {
    const { container } = render(
      <Dropdown placeholder='Font family...' disabled />
    )
    expect(container.firstChild).toHaveClass('Dropdown-root')
    expect(container.firstChild.firstChild).toHaveClass('Dropdown-control')
    expect(container.firstChild.firstChild).toHaveClass('Dropdown-disabled')
  })
})
