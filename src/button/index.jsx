import React from 'react'
import clsx from 'clsx'

const Button = ({ className, ...props }) => {
  return <button className={clsx(className, 'lexia')} {...props} />
}

export default Button
