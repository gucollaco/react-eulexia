import React from 'react'
import { useSpeechSynthesis } from 'react-speech-kit'
import Action from '../../Action/Action.jsx'
import Tooltip from '../../Tooltip/Tooltip.jsx'
import { PlayButton, StopButton } from '../../Button/index.jsx'
import { TextToSpeechIcon } from '../../Icon/index.jsx'

const TextToSpeechAction = () => {
  const { speak, voices: browserVoices, cancel } = useSpeechSynthesis()
  const voices = [].concat(
    browserVoices,
    process.env.TEST
      ? [
          {
            default: true,
            lang: 'en-AU',
            localService: true,
            name: 'Karen',
            voiceURI: 'Karen'
          }
        ]
      : []
  )

  const getSelectedText = () => {
    return window.getSelection
      ? window.getSelection().toString()
      : document.selection && document.selection.type !== 'Control'
        ? document.selection.createRange().text
        : ''
  }

  const getPageLang = () =>
    document.documentElement.lang.toLowerCase() ||
    document.head.lang.toLowerCase() ||
    'en-us'

  return (
    <>
      <Action data-tip data-for='textToSpeech'>
        <TextToSpeechIcon />
      </Action>
      <Tooltip id='textToSpeech'>
        <div className='eulexia-wrapper eulexia-column eulexia'>
          <div className='eulexia-item title row'>
            <strong className='eulexia-item'>Text to speech</strong>
          </div>
          <div className='eulexia-item eulexia-row eulexia-tall-margin-top eulexia-align-center'>
            {!voices.length && (
              <span className='eulexia-item eulexia-text'>
                Browser not supported
              </span>
            )}
            {voices.length > 0 && (
              <>
                <span className='eulexia-item eulexia-text'>Read selected</span>
                <div className='eulexia-item'>
                  <PlayButton
                    data-testid='play-button'
                    onClick={() => {
                      const text = getSelectedText()
                      const voice = voices.find((voice) =>
                        voice.lang.toLowerCase().includes(getPageLang())
                      )
                      if (!text) return
                      speak({ text, voice })
                    }}
                  />
                  <StopButton
                    data-testid='stop-button'
                    onClick={() => cancel()}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </Tooltip>
    </>
  )
}

export default TextToSpeechAction
