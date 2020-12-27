import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Action from 'Action/Action.jsx'

describe('Action', () => {
  test('Checks if role button is found on the document', () => {
    render(<Action />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
  test('Checks if the button has the rtf--ab class', () => {
    render(<Action />)
    expect(screen.getByRole('button')).toHaveClass('rtf--ab')
  })
})
