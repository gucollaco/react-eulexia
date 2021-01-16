import React from 'react'

import { EulexiaContextProvider } from '../Context/eulexia-context.jsx'

import Fab from '../Fab/Fab.jsx'
import RulerSetup from '../EulexiaAction/RulerSetup/RulerSetup.jsx'
import { ConfigIcon } from '../Icon/index.jsx'

const EulexiaFab = ({
  id = 'eulexiaFab',
  backgroundColor = '#A7C5E6',
  style = { left: 20, bottom: 20 },
  event = 'hover',
  icon = <ConfigIcon />,
  children
}) => {
  return (
    <EulexiaContextProvider>
      <RulerSetup />
      <Fab
        id={id}
        mainButtonStyles={{ backgroundColor }}
        style={style}
        icon={icon}
        event={event}
      >
        {children}
      </Fab>
    </EulexiaContextProvider>
  )
}

export default EulexiaFab
