import React from 'react'

import { EulexiaContextProvider } from '../Context/eulexia-context.jsx'

import Fab from '../Fab/Fab.jsx'
import RulerSetup from '../EulexiaAction/RulerSetup/RulerSetup.jsx'

const EulexiaFab = ({ children }) => {
  return (
    <EulexiaContextProvider>
      <RulerSetup />
      <Fab>{children}</Fab>
    </EulexiaContextProvider>
  )
}

export default EulexiaFab
