import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Fab from 'Fab/Fab.jsx'
import Action from 'Action/Action.jsx'

describe('Fab', () => {
  test('Checks if a two elements with list as role are found', () => {
    render(<Fab />)
    expect(screen.getAllByRole('list').length).toEqual(2)
  })
  test('Checks if a listitem role is found on the document', () => {
    render(<Fab />)
    expect(screen.getByRole('listitem')).toBeInTheDocument()
  })
  test('Checks if a button role is found on the document', () => {
    render(<Fab />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
  test('Checks if an img role is found on the document', () => {
    render(<Fab />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
  test('Checks if the text Some Action is found on the document', () => {
    render(
      <Fab>
        <Action>Some action</Action>
      </Fab>
    )
    expect(screen.getByText('Some action')).toBeInTheDocument()
  })
})
