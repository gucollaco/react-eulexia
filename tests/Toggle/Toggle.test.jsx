import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Toggle from 'Toggle/Toggle.jsx'

describe('Toggle', () => {
  test('Checks if a checkbox role is found on the document', () => {
    render(<Toggle icons={false} />)
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })
})
