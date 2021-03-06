import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Stop from 'Button/Stop/Stop.jsx'

describe('Stop', () => {
  test('Checks if a button role is found on the document', () => {
    render(<Stop />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
  test('Checks if an img role is found on the document', () => {
    render(<Stop />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
  test('Checks if the stop svg icon is found', () => {
    render(<Stop />)
    expect(screen.getByTestId('stop-icon')).toBeInTheDocument()
  })
})
