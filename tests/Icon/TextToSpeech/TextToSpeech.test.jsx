import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { TextToSpeechIcon } from 'Icon/index.jsx'

describe('TextToSpeechIcon', () => {
  test('Checks if an image role is found on the document', () => {
    render(<TextToSpeechIcon />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
  test('Checks if the text to speech svg icon is found', () => {
    render(<TextToSpeechIcon />)
    expect(screen.getByTestId('text-to-speech-icon')).toBeInTheDocument()
  })
})
