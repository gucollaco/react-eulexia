import React from 'react'
import PropTypes from 'prop-types'

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

EulexiaFab.propTypes = {
  id: PropTypes.string,
  backgroundColor: PropTypes.string,
  style: PropTypes.object,
  event: PropTypes.string,
  icon: PropTypes.any,
  children: PropTypes.node
}

export default EulexiaFab
