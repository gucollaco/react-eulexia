import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

import EulexiaFab from 'EulexiaFab/EulexiaFab.jsx'
import TextToSpeechAction from 'EulexiaAction/TextToSpeechAction/TextToSpeechAction.jsx'

describe('TextToSpeechAction', () => {
  const defaultEnv = process.env

  beforeEach(() => {
    jest.resetModules()
    process.env = { ...defaultEnv }
  })

  afterAll(() => {
    process.env = defaultEnv
  })

  test('Checking the texts shown on the Action (in case TEST env is true)', () => {
    render(
      <EulexiaFab>
        <TextToSpeechAction />
      </EulexiaFab>
    )
    expect(screen.getByText('Text to speech')).toBeInTheDocument()
    expect(screen.getByText('Read selected')).toBeInTheDocument()
  })

  test('Checking the texts shown on the Action (in case TEST env is false)', () => {
    process.env.TEST = false
    render(
      <EulexiaFab>
        <TextToSpeechAction />
      </EulexiaFab>
    )
    expect(screen.getByText('Text to speech')).toBeInTheDocument()
    expect(screen.getByText('Browser not supported')).toBeInTheDocument()
  })

  test('Clicking on the play and stop button', () => {
    render(
      <EulexiaFab>
        <TextToSpeechAction />
      </EulexiaFab>
    )
    expect(screen.getByText('Text to speech')).toBeInTheDocument()
    expect(screen.getByText('Read selected')).toBeInTheDocument()
    expect(screen.getByTestId('play-button')).toBeInTheDocument()
    expect(screen.getByTestId('stop-button')).toBeInTheDocument()

    userEvent.click(screen.getByTestId('play-button'))
    userEvent.click(screen.getByTestId('stop-button'))
  })
})
