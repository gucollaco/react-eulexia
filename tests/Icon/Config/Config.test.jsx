import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { ConfigIcon } from 'Icon/index.jsx'

describe('Config', () => {
  test('Checks if an image role is found on the document', () => {
    render(<ConfigIcon />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
  test('Checks if the config change svg icon is found', () => {
    render(<ConfigIcon />)
    expect(screen.getByTestId('config-icon')).toBeInTheDocument()
  })
})
