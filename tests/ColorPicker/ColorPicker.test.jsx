import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

import ColorPicker from 'ColorPicker/ColorPicker.jsx'

describe('ColorPicker', () => {
  test('Checks if four buttons are found on the document when four colors are passed as attributes', async () => {
    render(
      <ColorPicker
        color='#F8F5F4'
        onChange={() => {}}
        colors={['#F8F5F4', '#EBE3E1', '#F5F5DC', '#030303']}
      />
    )
    expect(screen.getAllByRole('button').length).toEqual(4)
  })

  test('Checks if a clicking on a button changes the color to its value', () => {
    render(
      <ColorPicker
        color='#F8F5F4'
        onChange={(value) => expect(value).toBe('#EBE3E1')}
        colors={['#F8F5F4', '#EBE3E1']}
      />
    )
    expect(screen.getAllByRole('button').length).toEqual(2)
    expect(screen.getByTestId('picker-button-1')).toBeInTheDocument()
    userEvent.click(screen.getByTestId('picker-button-1'))
  })
  test('Checks if there are no buttons when no colors are passed as attributes', () => {
    render(<ColorPicker color='' onChange={() => {}} />)
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })
})
