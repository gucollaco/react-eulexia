import React, { useEffect, useState } from 'react'

import { Fab, Action } from 'react-tiny-fab'
import ReactTooltip from 'react-tooltip'

import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

import Toggle from 'react-toggle'
import 'react-toggle/style.css'

import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    .eulexia-font-size-header {
        ${props => (props.headerFontSize ? `font-size: ${props.headerFontSize}px !important;` : '')}
    }
    .eulexia-font-size-text {
        ${props => (props.textFontSize ? `font-size: ${props.textFontSize}px !important;` : '')}
    }
    .eulexia-font-family {
        ${props => (props.fontFamily ? `font-family: ${props.fontFamily} !important` : '')}
    }
`

const Styles = styled.div`
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
// Hook
function useLocalStorage(key, initialValue) {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState(() => {
      try {
        // Get from local storage by key
        const item = window.localStorage.getItem(key);
        // Parse stored json or if none return initialValue
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        // If error also return initialValue
        console.log(error);
        return initialValue;
      }
    });
  
    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = value => {
      try {
        // Allow value to be a function so we have same API as useState
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        // Save state
        setStoredValue(valueToStore);
        // Save to local storage
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        // A more advanced implementation would handle the error case
        console.log(error);
      }
    };
  
    return [storedValue, setValue];
  }
const EulexiaFab = ({ event='hover', icon='', className, ...props }) => {
    // const storageFontSizeEnabled = window.localStorage.getItem('fontSizeEnabled') ? true : false
    // const storageFontFamilyEnabled = window.localStorage.getItem('fontFamilyEnabled') ? true : false
    

    const [name, setName] = useLocalStorage('name', 'Bob')
    const [fontSizeEnabled, setFontSizeEnabled] = useState(false)
    const [headerFontSize, setHeaderFontSize] = useState('')
    const [textFontSize, setTextFontSize] = useState('')

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

        console.log('oiiiii')
        return () => { head.removeChild(link) }
    })

    useEffect(() => {
        if (window.localStorage.getItem('headerFontSizeValue')) {
            setHeaderFontSize(window.localStorage.getItem('headerFontSizeValue'))
            addClass(getHtmlHeaders(), 'eulexia-font-size-header')
        }
        if (window.localStorage.getItem('textFontSizeValue')) {
            setTextFontSize(window.localStorage.getItem('textFontSizeValue'))
            addClass(getHtmlTexts(), 'eulexia-font-size-text')
        }
        console.log('BEEN HERE 1')
    }, [fontSizeEnabled])

    useEffect(() => {
        if (window.localStorage.getItem('fontFamilyValue')) {
            setFontFamily(window.localStorage.getItem('fontFamilyValue'))
            addClass(getHtmlHeaders(), 'eulexia-font-family')
            addClass(getHtmlTexts(), 'eulexia-font-family')
        }
        console.log('BEEN HERE 2')

    }, [fontFamilyEnabled])

    const addClass = (elements, className) => {
        for(const element of elements) element.classList.add(className)
    }

    const removeClass = (elements, className) => {
        for(const element of elements) element.classList.remove(className)
    }

    const getHtmlHeaders = () => {
        const textTags = ['h1','h2','h3','h4','h5','h6']
        const exceptTags = [':not(.eulexia-test)']
        const exceptTagsJoined = exceptTags.join('')
        const textTagsJoined = textTags.join(exceptTagsJoined.concat(',')).concat(exceptTagsJoined)
        return document.querySelectorAll(textTagsJoined)
    }

    const getHtmlTexts = () => {
        const textTags = ['p','li','span']
        const exceptTags = [':not(.eulexia-test)', ':not(.rtf--ab__c)', ':not(.rtf--mb__c)', ':not(.rtf--ab)', ':not(.rtf--mb)']
        const exceptTagsJoined = exceptTags.join('')
        const textTagsJoined = textTags.join(exceptTagsJoined.concat(',')).concat(exceptTagsJoined)
        return document.querySelectorAll(textTagsJoined)
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
                headerFontSize={headerFontSize}
                textFontSize={textFontSize}
                fontFamily={fontFamily}
            />
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
                <Styles>
                    <ReactTooltip
                        id='fontSize'
                        place='right'
                        type='light'
                        effect='solid'
                        className='hoverVisible'
                        delayHide={200}
                    >
                        <div className="wrapper column">
                            <div className="item title row">
                                <strong className="item eulexia-test">Font size</strong>
                                <div className="item-text-right">
                                    <Toggle
                                        checked={fontSizeEnabled}
                                        onChange={e => {
                                            setFontSizeEnabled(e.target.checked)
                                            if(e.target.checked) {
                                                addClass(getHtmlHeaders(), 'eulexia-font-size-header')
                                                addClass(getHtmlTexts(), 'eulexia-font-size-text')
                                                window.localStorage.setItem('fontSizeEnabled', 1)
                                                return
                                            }
                                            setHeaderFontSize(0)
                                            setTextFontSize(0)
                                            removeClass(getHtmlHeaders(), 'eulexia-font-size-header')
                                            removeClass(getHtmlTexts(), 'eulexia-font-size-text')
                                            window.localStorage.removeItem('fontSizeEnabled')
                                            window.localStorage.removeItem('headerFontSizeValue')
                                            window.localStorage.removeItem('textFontSizeValue')
                                        }} 
                                        icons={false}
                                    />
                                </div>
                            </div>
                            <div className="item column" style={{ marginTop: 28 }}>
                                <span className="item eulexia-test">{headerFontSize ? `Headers (${headerFontSize} px)` : 'Headers'}</span>
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
                                <span className="item eulexia-test">{textFontSize ? `Texts (${textFontSize} px)` : 'Texts'}</span>
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
                        className='hoverVisible'
                        delayHide={200}
                    >
                        <div className="wrapper column">
                            <div className="item title row">
                                <strong className="item eulexia-test">Font family</strong>
                                <div className="item-text-right">
                                    <Toggle
                                        checked={fontFamilyEnabled}
                                        onChange={e => {
                                            setFontFamilyEnabled(e.target.checked)
                                            if(e.target.checked) {
                                                addClass(getHtmlHeaders(), 'eulexia-font-family')
                                                addClass(getHtmlTexts(), 'eulexia-font-family')
                                                window.localStorage.setItem('fontFamilyEnabled', 1)
                                                return
                                            }
                                            setFontFamily(null)
                                            removeClass(getHtmlHeaders(), 'eulexia-font-family')
                                            removeClass(getHtmlTexts(), 'eulexia-font-family')
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
                </Styles>
            </Fab>
        </>
    )
}

export default EulexiaFab
