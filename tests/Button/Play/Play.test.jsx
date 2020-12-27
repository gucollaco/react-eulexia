import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Play from 'Button/Play/Play.jsx'

describe('Play', () => {
  test('Checks if a button role is found on the document', () => {
    render(<Play />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
  test('Checks if an img role is found on the document', () => {
    render(<Play />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
  test('Checks if the play svg icon is found', () => {
    render(<Play />)
    expect(screen.getByTestId('start-icon')).toBeInTheDocument()
  })
})
