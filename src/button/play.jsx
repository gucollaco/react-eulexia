import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  height: 32px;
  width: 40px;
  border-radius: 5px 0px 0px 5px;
  border: 0px;
  box-shadow: 0px 2px 6px #aaa;
  background-color: #a7c4f9;
  cursor: pointer;
`

const PlayButton = ({ children, className, ...props }) => (
  <StyledButton className={className} {...props}>
    {children}
  </StyledButton>
)

export default PlayButton
