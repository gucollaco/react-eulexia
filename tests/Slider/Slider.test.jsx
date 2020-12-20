import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Slider from 'Slider/Slider.jsx'

describe('Slider', () => {
  test('Checks if a slider role is found on the document', () => {
    render(<Slider step={5} min={50} max={400} values={[50]} />)
    expect(screen.getByRole('slider')).toBeInTheDocument()
  })
})
