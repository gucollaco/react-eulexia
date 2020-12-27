import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { ColorChangeIcon } from 'Icon/index.jsx'

describe('ColorChangeIcon', () => {
  test('Checks if an img role is found on the document', () => {
    render(<ColorChangeIcon />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
  test('Checks if the color change svg icon is found', () => {
    render(<ColorChangeIcon />)
    expect(screen.getByTestId('color-change-icon')).toBeInTheDocument()
  })
})
