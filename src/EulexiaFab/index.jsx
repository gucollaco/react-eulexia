import React from 'react'
import Fab from '../Fab/Fab.jsx'

import FontSizeAction from './FontSizeAction/FontSizeAction.jsx'
import FontFamilyAction from './FontFamilyAction/FontFamilyAction.jsx'
import ColorChangeAction from './ColorChangeAction/ColorChangeAction.jsx'
import TextToSpeechAction from './TextToSpeechAction/TextToSpeechAction.jsx'
import RulerAction from './RulerAction/RulerAction.jsx'
import RulerSetup from './RulerSetup/RulerSetup.jsx'

import { RulerContextProvider } from './ruler-context.jsx'

const EulexiaFab = () => {
  return (
    <RulerContextProvider>
      <RulerSetup />
      <Fab>
        <FontSizeAction />
        <FontFamilyAction />
        <ColorChangeAction />
        <RulerAction />
        <TextToSpeechAction />
      </Fab>
    </RulerContextProvider>
  )
}

export default EulexiaFab
