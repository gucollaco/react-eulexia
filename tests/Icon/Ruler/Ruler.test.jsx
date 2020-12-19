import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { RulerIcon } from 'Icon/index.jsx'

describe('RulerIcon', () => {
  test('Checks if an image role is found on the document', () => {
    render(<RulerIcon />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
  test('Checks if the ruler svg icon is found', () => {
    render(<RulerIcon />)
    expect(screen.getByTestId('ruler-icon')).toBeInTheDocument()
  })
})
