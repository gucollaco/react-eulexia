import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { FontFamilyIcon } from 'Icon/index.jsx'

describe('FontFamilyIcon', () => {
  test('Checks if an image role is found on the document', () => {
    render(<FontFamilyIcon />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
  test('Checks if the font family svg icon is found', () => {
    render(<FontFamilyIcon />)
    expect(screen.getByTestId('font-family-icon')).toBeInTheDocument()
  })
})
