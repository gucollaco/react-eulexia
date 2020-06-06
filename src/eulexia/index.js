import React, { useCallback, useEffect, useState } from 'react'

const Eulexia = ({className, ...props}) => {
    const [mode, setMode] = useState(0)
    const [visible, setVisible] = useState(false)

    const escFunction = useCallback((event) => {
        if(event.keyCode === 27) {
            setVisible((prev) => !prev)
        }
    })

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);

        return () => {
            document.removeEventListener("keydown", escFunction, false);
        }
    })
    
    return (
        <input value={visible}></input>
    )
}

export default Eulexia
