import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { FontSizeIcon } from 'Icon/index.jsx'

describe('FontSizeIcon', () => {
  test('Checks if an img role is found on the document', () => {
    render(<FontSizeIcon />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
  test('Checks if the font size svg icon is found', () => {
    render(<FontSizeIcon />)
    expect(screen.getByTestId('font-size-icon')).toBeInTheDocument()
  })
})
