import React, { useEffect, useState } from 'react'

import { Fab, Action } from 'react-tiny-fab'
import ReactTooltip from 'react-tooltip'

import { Dropdown, StylesDropdown } from '../dropdown/index.jsx'
import { Slider, StylesSlider } from '../slider/index.jsx'
import { Toggle, StylesToggle } from '../toggle/index.jsx'

import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    ${props => (props.fontSizeEnabled ? `
        ${props.headerFontSize ? `
            ${props.htmlHeaders} {
                font-size: ${props.headerFontSize}px !important;
            }
        ` : ''}
        ${props.textFontSize ? `
            ${props.htmlTexts} {
                font-size: ${props.textFontSize}px !important;
            }
        ` : ''}
    ` : '')}

    ${props => (props.fontFamilyEnabled ? `
        ${props.fontFamily ? `
            ${props.htmlHeaders} ${props.htmlTexts} {
                font-family: ${props.fontFamily};
            }
        ` : ''}
    ` : '')}

    .wrapper {
        padding: 10px 0px 15px 0px;
        font-size: 18px !important;
        width: 280px;
    }
    .title {
        font-size 21px !important;
    }
    .row {
        display: flex;
        flex-direction: row;
    }
    .column {
        display: flex;
        flex-direction: column;
    }
    .item {
        flex: 1;
        text-align: left;
    }
    .item-text-right {
        flex: 1;
        text-align: right;
    }
    @media (max-width: 600px) {
        .wrapper {
            width: 160px;
        }
    }
    .hoverVisible {
        pointer-events: auto !important;
        &:hover {
            visibility: visible !important;
            opacity: 1 !important;
        }
    }
`

const EulexiaFab = ({ event='hover', icon='', className }) => {
    const [fontSizeEnabled, setFontSizeEnabled] = useState(false)
    const [headerFontSize, setHeaderFontSize] = useState(0)
    const [textFontSize, setTextFontSize] = useState(0)

    const [fontFamilyEnabled, setFontFamilyEnabled] = useState(false)
    const [fontFamily, setFontFamily] = useState('')

    useEffect(() => {
        const head = document.head
        const link = document.createElement('link')
    
        link.type = 'text/css'
        link.rel = 'stylesheet'
        link.href = 'https://fonts.googleapis.com/css2?family=Courier&family=Open+Sans&family=Roboto&family=Roboto+Mono&display=swap'
    
        head.appendChild(link)

        if (window.localStorage.getItem('fontSizeEnabled') == true) setFontSizeEnabled(true)
        if (window.localStorage.getItem('fontFamilyEnabled') == true) setFontFamilyEnabled(true)

        return () => { head.removeChild(link) }
    })

    useEffect(() => {
        if (window.localStorage.getItem('headerFontSizeValue')) setHeaderFontSize(window.localStorage.getItem('headerFontSizeValue'))
        if (window.localStorage.getItem('textFontSizeValue')) setTextFontSize(window.localStorage.getItem('textFontSizeValue'))
    }, [fontSizeEnabled])

    useEffect(() => {
        if (window.localStorage.getItem('fontFamilyValue')) setFontFamily(window.localStorage.getItem('fontFamilyValue'))
    }, [fontFamilyEnabled])

    const getHtmlHeaders = () => {
        const textTags = ['h1','h2','h3','h4','h5','h6']
        const exceptTags = [':not(.eulexia-text)']
        const exceptTagsJoined = exceptTags.join('')
        const textTagsJoined = textTags.join(exceptTagsJoined.concat(',')).concat(exceptTagsJoined)
        return textTagsJoined
    }

    const getHtmlTexts = () => {
        const textTags = ['p','li','span']
        const exceptTags = [':not(.eulexia-text)', ':not(.rtf--ab__c)', ':not(.rtf--mb__c)', ':not(.rtf--ab)', ':not(.rtf--mb)']
        const exceptTagsJoined = exceptTags.join('')
        const textTagsJoined = textTags.join(exceptTagsJoined.concat(',')).concat(exceptTagsJoined)
        return textTagsJoined
    }

    const fontOptions = [
        { value: 'Courier', label: 'Courier' },
        { value: 'Open Sans, sans-serif', label: 'Open Sans' },
        { value: 'Roboto', label: 'Roboto' },
        { value: 'Roboto Mono, monospace', label: 'Roboto Mono' }
    ]

    return (
        <>
            <GlobalStyle
                fontSizeEnabled={fontSizeEnabled}
                headerFontSize={headerFontSize}
                textFontSize={textFontSize}
                fontFamilyEnabled={fontFamilyEnabled}
                fontFamily={fontFamily}
                htmlHeaders={getHtmlHeaders()}
                htmlTexts={getHtmlTexts()}
            />
            <StylesDropdown />
            <StylesToggle />
            <StylesSlider />
            <Fab
                id="eulexiaFab"
                mainButtonStyles={{ backgroundColor: '#A7C5E6' }}
                style={{ left: 20, bottom: 20 }}
                icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M9.954 2.21a9.99 9.99 0 0 1 4.091-.002A3.993 3.993 0 0 0 16 5.07a3.993 3.993 0 0 0 3.457.261A9.99 9.99 0 0 1 21.5 8.876 3.993 3.993 0 0 0 20 12c0 1.264.586 2.391 1.502 3.124a10.043 10.043 0 0 1-2.046 3.543 3.993 3.993 0 0 0-3.456.261 3.993 3.993 0 0 0-1.954 2.86 9.99 9.99 0 0 1-4.091.004A3.993 3.993 0 0 0 8 18.927a3.993 3.993 0 0 0-3.457-.26A9.99 9.99 0 0 1 2.5 15.121 3.993 3.993 0 0 0 4 11.999a3.993 3.993 0 0 0-1.502-3.124 10.043 10.043 0 0 1 2.046-3.543A3.993 3.993 0 0 0 8 5.071a3.993 3.993 0 0 0 1.954-2.86zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>}
                event={event}
            >
                <Action data-tip data-for='fontSize'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M10 6v15H8V6H2V4h14v2h-6zm8 8v7h-2v-7h-3v-2h8v2h-3z"/></svg>
                </Action>

                <Action data-tip data-for='fontFamily'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13 6v15h-2V6H5V4h14v2z"/></svg>
                </Action>
                <Action
                    onMouseEnter={() => console.log('onmousenter RULER')}
                    onMouseLeave={() => console.log('onmouseleave RULER')}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M6.343 14.621L3.515 17.45l3.535 3.535L20.485 7.55 16.95 4.015l-2.122 2.121 1.415 1.414-1.415 1.414-1.414-1.414-2.121 2.122 2.121 2.12L12 13.208l-2.121-2.121-2.122 2.121 1.415 1.414-1.415 1.415-1.414-1.415zM17.657 1.893l4.95 4.95a1 1 0 0 1 0 1.414l-14.85 14.85a1 1 0 0 1-1.414 0l-4.95-4.95a1 1 0 0 1 0-1.414l14.85-14.85a1 1 0 0 1 1.414 0z"/></svg>
                </Action>
                <Action
                    onMouseEnter={() => console.log('onmousenter LISTEN')}
                    onMouseLeave={() => console.log('onmouseleave LISTEN')}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M5.889 16H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.889l5.294-4.332a.5.5 0 0 1 .817.387v15.89a.5.5 0 0 1-.817.387L5.89 16zm13.517 4.134l-1.416-1.416A8.978 8.978 0 0 0 21 12a8.982 8.982 0 0 0-3.304-6.968l1.42-1.42A10.976 10.976 0 0 1 23 12c0 3.223-1.386 6.122-3.594 8.134zm-3.543-3.543l-1.422-1.422A3.993 3.993 0 0 0 16 12c0-1.43-.75-2.685-1.88-3.392l1.439-1.439A5.991 5.991 0 0 1 18 12c0 1.842-.83 3.49-2.137 4.591z"/></svg>
                </Action>
                <ReactTooltip
                    id='fontSize'
                    place='right'
                    type='light'
                    effect='solid'
                    className='hoverVisible eulexiaTooltip'
                    delayHide={200}
                >
                    <div className="wrapper column">
                        <div className="item title row">
                            <strong className="item">Font size</strong>
                            <div className="item-text-right">
                                <Toggle
                                    checked={fontSizeEnabled}
                                    onChange={e => {
                                        setFontSizeEnabled(e.target.checked)
                                        if(e.target.checked) {
                                            window.localStorage.setItem('fontSizeEnabled', 1)
                                            return
                                        }
                                        setHeaderFontSize(0)
                                        setTextFontSize(0)
                                        window.localStorage.removeItem('fontSizeEnabled')
                                        window.localStorage.removeItem('headerFontSizeValue')
                                        window.localStorage.removeItem('textFontSizeValue')
                                    }} 
                                    icons={false}
                                />
                            </div>
                        </div>
                        <div className="item column" style={{ marginTop: 28 }}>
                            <span className="item eulexia-text">{headerFontSize ? `Headers (${headerFontSize} px)` : 'Headers'}</span>
                            <div className="item">
                                <Slider
                                    min={8}
                                    max={72}
                                    step={2}
                                    tooltip={false}
                                    value={headerFontSize}
                                    onChange={value => {
                                        if(!fontSizeEnabled) return
                                        setHeaderFontSize(value)
                                        window.localStorage.setItem('headerFontSizeValue', value)
                                    }}
                                />
                            </div>
                        </div>
                        <div className="item column" style={{ marginTop: 28 }}>
                            <span className="item eulexia-text">{textFontSize ? `Texts (${textFontSize} px)` : 'Texts'}</span>
                            <div className="item">
                                <Slider
                                    min={8}
                                    max={72}
                                    step={2}
                                    tooltip={false}
                                    value={textFontSize}
                                    onChange={value => {
                                        if(!fontSizeEnabled) return
                                        setTextFontSize(value)
                                        window.localStorage.setItem('textFontSizeValue', value)
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </ReactTooltip>
                <ReactTooltip
                    id='fontFamily'
                    place='right'
                    type='light'
                    effect='solid'
                    className='hoverVisible eulexiaTooltip'
                    delayHide={200}
                >
                    <div className="wrapper column">
                        <div className="item title row">
                            <strong className="item">Font family</strong>
                            <div className="item-text-right">
                                <Toggle
                                    checked={fontFamilyEnabled}
                                    onChange={e => {
                                        setFontFamilyEnabled(e.target.checked)
                                        if(e.target.checked) {
                                            window.localStorage.setItem('fontFamilyEnabled', 1)
                                            return
                                        }
                                        setFontFamily(null)
                                        window.localStorage.removeItem('fontFamilyEnabled')
                                        window.localStorage.removeItem('fontFamilyValue')
                                    }} 
                                    icons={false}
                                />
                            </div>
                        </div>
                        <div className="item column" style={{ marginTop: 28 }}>
                            <div className="item">
                                <Dropdown
                                    options={fontOptions}
                                    onChange={(obj) => {
                                        setFontFamily(obj.value)
                                        window.localStorage.setItem('fontFamilyValue', obj.value)
                                    }}
                                    value={fontFamily}
                                    placeholder="Font family..."
                                    disabled={!fontFamilyEnabled}
                                />
                            </div>
                        </div>
                    </div>
                </ReactTooltip>
            </Fab>
        </>
    )
}

export default EulexiaFab
