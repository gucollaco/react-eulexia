import React from 'react'
import { Fab } from 'react-tiny-fab'
import { ConfigIcon } from '../Icon/index.jsx'

const EulexiaFab = ({
  id = 'eulexiaFab',
  mainButtonStyles = { backgroundColor: '#A7C5E6' },
  style = { left: 20, bottom: 20 },
  event = 'hover',
  icon = <ConfigIcon />,
  children,
  ...props
}) => (
  <Fab
    id={id}
    mainButtonStyles={mainButtonStyles}
    style={style}
    icon={icon}
    event={event}
    {...props}
  >
    {children}
  </Fab>
)

export default EulexiaFab
