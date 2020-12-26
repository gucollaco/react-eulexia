import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { StartIcon } from 'Icon/index.jsx'

describe('StartIcon', () => {
  test('Checks if an img role is found on the document', () => {
    render(<StartIcon />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
  test('Checks if the start svg icon is found', () => {
    render(<StartIcon />)
    expect(screen.getByTestId('start-icon')).toBeInTheDocument()
  })
})
