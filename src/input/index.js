import React from 'react'
import clsx from 'clsx'

const Input = ({className, ...props}) => {
    return (
        <input
            className={clsx(className, 'lexia')}
            {...props}
            />
    )
}

export default Input
