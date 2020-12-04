import React from 'react'
import { Action } from 'react-tiny-fab'

const EulexiaAction = ({ className, children, ...props }) => (
  <Action {...props}>{children}</Action>
)

export default EulexiaAction
