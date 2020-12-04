import React from 'react'
import styled from 'styled-components'
import { StartIcon } from '../../Icon/index.jsx'

const StyledButton = styled.button`
  height: 32px;
  width: 40px;
  border-radius: 5px 0px 0px 5px;
  border: 0px;
  box-shadow: 0px 2px 6px #aaa;
  background-color: #a7c4f9;
  cursor: pointer;
`

const PlayButton = ({ className, ...props }) => (
  <StyledButton className={className} {...props}>
    <StartIcon />
  </StyledButton>
)

export default PlayButton
