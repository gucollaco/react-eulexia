import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { StopIcon } from 'Icon/index.jsx'

describe('StopIcon', () => {
  test('Checks if an image role is found on the document', () => {
    render(<StopIcon />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
  test('Checks if the stop svg icon is found', () => {
    render(<StopIcon />)
    expect(screen.getByTestId('stop-icon')).toBeInTheDocument()
  })
})
