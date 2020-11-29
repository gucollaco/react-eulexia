import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  height: 32px;
  width: 40px;
  border-radius: 0px 5px 5px 0px;
  border: 0px;
  box-shadow: 0px 2px 6px #aaa;
  background-color: #c7d9fb;
  cursor: pointer;
`

const StopButton = ({ children, className, ...props }) => (
  <StyledButton className={className} {...props}>
    {children}
  </StyledButton>
)

export default StopButton
