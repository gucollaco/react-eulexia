import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Tooltip from 'Tooltip/Tooltip.jsx'

describe('Tooltip', () => {
  test('Checks if a checkbox role is found on the document', () => {
    render(<Tooltip>Tooltip testing</Tooltip>)
    expect(screen.getByText('Tooltip testing')).toBeInTheDocument()
  })
})
