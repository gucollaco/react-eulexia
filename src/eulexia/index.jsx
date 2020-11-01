import React, { useCallback, useEffect, useState } from 'react'

const Eulexia = ({ className, ...props }) => {
    const [mode, setMode] = useState(0)
    const [visible, setVisible] = useState(false)

    const changeFontSize = (elements) => {
        for(const element of elements) {
            const elementStyle = element.getAttribute('style')
            const newStyle = elementStyle ? elementStyle + 'font-size:10px' : 'font-size:10px'
            element.setAttribute('style', newStyle)                
        }
    }
    
    const escFunction = useCallback((event) => {
        if (event.keyCode === 27) {
            const textTags = 'p,li,span,b,i,strong,em,input,button,code'
            changeFontSize(document.querySelectorAll(textTags))
            setVisible((prev) => !prev)
        }
    })

    useEffect(() => {
        document.addEventListener('keydown', escFunction, false)

        return () => {
            document.removeEventListener('keydown', escFunction, false)
        }
    })

    return (
        <input value={visible}></input>
    )
}

export default Eulexia
