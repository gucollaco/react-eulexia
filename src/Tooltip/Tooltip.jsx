import React from 'react'
import styled from 'styled-components'
import ReactTooltip from 'react-tooltip'

const StyledTooltip = styled(ReactTooltip)`
  pointer-events: auto !important;
  &:hover {
    visibility: visible !important;
    opacity: 1 !important;
  }
`
const Tooltip = ({
  place = 'right',
  type = 'light',
  effect = 'solid',
  delayHide = 200,
  children,
  ...props
}) => (
  <StyledTooltip
    place={place}
    type={type}
    effect={effect}
    delayHide={delayHide}
    {...props}
  >
    {children}
  </StyledTooltip>
)

export default Tooltip
