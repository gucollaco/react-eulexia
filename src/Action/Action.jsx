import React from 'react'
import { Action } from 'react-tiny-fab'

const EulexiaAction = ({ children, ...props }) => (
  <Action {...props}>{children}</Action>
)

export default EulexiaAction
