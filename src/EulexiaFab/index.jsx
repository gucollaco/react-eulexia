import React from 'react'

import { EulexiaContextProvider } from '../Context/eulexia-context.jsx'

import Fab from '../Fab/Fab.jsx'
import FontSizeAction from './FontSizeAction/FontSizeAction.jsx'
import FontFamilyAction from './FontFamilyAction/FontFamilyAction.jsx'
import ColorChangeAction from './ColorChangeAction/ColorChangeAction.jsx'
import TextToSpeechAction from './TextToSpeechAction/TextToSpeechAction.jsx'
import RulerAction from './RulerAction/RulerAction.jsx'
import RulerSetup from './RulerSetup/RulerSetup.jsx'

const EulexiaFab = () => {
  return (
    <EulexiaContextProvider>
      <RulerSetup />
      <Fab>
        <FontSizeAction />
        <FontFamilyAction />
        <ColorChangeAction />
        <RulerAction />
        <TextToSpeechAction />
      </Fab>
    </EulexiaContextProvider>
  )
}

export default EulexiaFab
