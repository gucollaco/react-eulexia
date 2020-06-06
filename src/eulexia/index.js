import React from 'react'
import clsx from 'clsx'

const Eulexia = ({className, ...props}) => {
    return (
        <button
            className={clsx(className, 'lexia')}
            {...props}
            />
    )
}

export default Eulexia
