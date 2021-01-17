import React from 'react'
import PropTypes from 'prop-types'

import { useSpeechSynthesis } from 'react-speech-kit'

import Action from '../../Action/Action.jsx'
import Tooltip from '../../Tooltip/Tooltip.jsx'
import { PlayButton, StopButton } from '../../Button/index.jsx'
import { TextToSpeechIcon } from '../../Icon/index.jsx'

const TextToSpeechAction = ({
  forceHtmlLang = false,
  htmlLang = 'en-us',
  icon = <TextToSpeechIcon />,
  readSelectedLabel = 'Read selected',
  tooltipTitle = 'Text to speech',
  unsupportedBrowserLabel = 'Browser not supported'
}) => {
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

  const getPageLang = () => {
    if (htmlLang && forceHtmlLang) return htmlLang
    return (
      document.documentElement.lang.toLowerCase() ||
      document.head.lang.toLowerCase() ||
      htmlLang
    )
  }

  return (
    <>
      <Action data-tip data-for='textToSpeech'>
        {icon}
      </Action>
      <Tooltip id='textToSpeech'>
        <div className='eulexia-wrapper eulexia-column eulexia'>
          <div className='eulexia-item eulexia-title eulexia-row'>
            <strong className='eulexia-item'>{tooltipTitle}</strong>
          </div>
          <div className='eulexia-item eulexia-row eulexia-tall-margin-top eulexia-align-center'>
            {!voices.length && (
              <span className='eulexia-item eulexia-text'>
                {unsupportedBrowserLabel}
              </span>
            )}
            {voices.length > 0 && (
              <>
                <span className='eulexia-item eulexia-text'>
                  {readSelectedLabel}
                </span>
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

TextToSpeechAction.propTypes = {
  forceHtmlLang: PropTypes.bool,
  htmlLang: PropTypes.string,
  icon: PropTypes.any,
  readSelectedLabel: PropTypes.string,
  tooltipTitle: PropTypes.string,
  unsupportedBrowserLabel: PropTypes.string
}

export default TextToSpeechAction
