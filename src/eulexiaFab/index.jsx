import React, { useState } from 'react'

import { Fab, Action } from 'react-tiny-fab'
import ReactTooltip from 'react-tooltip'
// import NumericInput from 'react-numeric-input'
// import ReactSlider from 'react-slider'

import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

import Toggle from 'react-toggle'
import 'react-toggle/style.css'

import styled from 'styled-components'

const Styles = styled.div`
    .flex {
        display: flex;
        flex-direction: column;
        padding: 10px 0px 15px 0px;
        font-size: 18px !important;
        width: 240px;
    }
    @media (max-width: 600px) {
        .flex {
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

const EulexiaFab = ({ event='hover', icon='', className, ...props }) => {
    const [fontSizeEnabled, setFontSizeEnabled] = useState(false)
    const [headerFontSize, setHeaderFontSize] = useState('')
    const [paragraphFontSize, setParagraphFontSize] = useState('')

    return (
        <Fab
            mainButtonStyles={{ backgroundColor: '#A7C5E6' }}
            style={{ left: 20, bottom: 20 }}
            icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M9.954 2.21a9.99 9.99 0 0 1 4.091-.002A3.993 3.993 0 0 0 16 5.07a3.993 3.993 0 0 0 3.457.261A9.99 9.99 0 0 1 21.5 8.876 3.993 3.993 0 0 0 20 12c0 1.264.586 2.391 1.502 3.124a10.043 10.043 0 0 1-2.046 3.543 3.993 3.993 0 0 0-3.456.261 3.993 3.993 0 0 0-1.954 2.86 9.99 9.99 0 0 1-4.091.004A3.993 3.993 0 0 0 8 18.927a3.993 3.993 0 0 0-3.457-.26A9.99 9.99 0 0 1 2.5 15.121 3.993 3.993 0 0 0 4 11.999a3.993 3.993 0 0 0-1.502-3.124 10.043 10.043 0 0 1 2.046-3.543A3.993 3.993 0 0 0 8 5.071a3.993 3.993 0 0 0 1.954-2.86zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>}
            event={event}
        >
            <Action
                data-tip
                data-for='fontSize'
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M10 6v15H8V6H2V4h14v2h-6zm8 8v7h-2v-7h-3v-2h8v2h-3z"/></svg>

            </Action>

            <Action
                data-tip
                data-for='fontFamily'
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13 6v15h-2V6H5V4h14v2z"/></svg>
            </Action>
            <Action
                text="Ruler"
                onMouseEnter={() => console.log('onmousenter RULER')}
                onMouseLeave={() => console.log('onmouseleave RULER')}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M6.343 14.621L3.515 17.45l3.535 3.535L20.485 7.55 16.95 4.015l-2.122 2.121 1.415 1.414-1.415 1.414-1.414-1.414-2.121 2.122 2.121 2.12L12 13.208l-2.121-2.121-2.122 2.121 1.415 1.414-1.415 1.415-1.414-1.415zM17.657 1.893l4.95 4.95a1 1 0 0 1 0 1.414l-14.85 14.85a1 1 0 0 1-1.414 0l-4.95-4.95a1 1 0 0 1 0-1.414l14.85-14.85a1 1 0 0 1 1.414 0z"/></svg>
            </Action>
            <Action
                text="Listen Selected Text"
                onMouseEnter={() => console.log('onmousenter LISTEN')}
                onMouseLeave={() => console.log('onmouseleave LISTEN')}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M5.889 16H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.889l5.294-4.332a.5.5 0 0 1 .817.387v15.89a.5.5 0 0 1-.817.387L5.89 16zm13.517 4.134l-1.416-1.416A8.978 8.978 0 0 0 21 12a8.982 8.982 0 0 0-3.304-6.968l1.42-1.42A10.976 10.976 0 0 1 23 12c0 3.223-1.386 6.122-3.594 8.134zm-3.543-3.543l-1.422-1.422A3.993 3.993 0 0 0 16 12c0-1.43-.75-2.685-1.88-3.392l1.439-1.439A5.991 5.991 0 0 1 18 12c0 1.842-.83 3.49-2.137 4.591z"/></svg>
            </Action>
            <Styles>
                <ReactTooltip
                    id='fontSize'
                    place='right'
                    type='light'
                    effect='solid'
                    className='hoverVisible'
                    delayHide={200}
                >
                    <div className='flex'>
                        <span>Font size</span>
                        <span>Enabled</span>
                        <Toggle 
                            defaultChecked={false}
                            onChange={e => {
                                setFontSizeEnabled(e.target.checked)
                                setHeaderFontSize(0)
                                setParagraphFontSize(0)
                            }} 
                            icons={false} />
                        <span>{headerFontSize ? `Headers (${headerFontSize} px)` : 'Headers'}</span>
                        <Slider
                            min={8}
                            max={72}
                            step={2}
                            tooltip={false}
                            value={fontSizeEnabled ? headerFontSize : 0}
                            disabled={true}
                            onChange={value => setHeaderFontSize(fontSizeEnabled ? value : 0)}
                        />
                        <span>{paragraphFontSize ? `Paragraphs (${paragraphFontSize} px)` : 'Paragraphs'}</span>
                        <Slider
                            min={8}
                            max={72}
                            step={2}
                            tooltip={false}
                            value={fontSizeEnabled ? paragraphFontSize : 0}
                            disabled={true}
                            onChange={value => setParagraphFontSize(fontSizeEnabled ? value : 0)}
                        />
                    </div>
                </ReactTooltip>
                <ReactTooltip
                    id='fontFamily'
                    place='right'
                    type='light'
                    effect='solid'
                    className='hoverVisible'
                    delayHide={200}
                >
                    Font family tooltip
                </ReactTooltip>
            </Styles>
        </Fab>
    )
}

export default EulexiaFab
