import React, { useState } from 'react'
import clsx from 'clsx'
import styled, { css } from 'styled-components'

const EulexiaFab = ({ event='hover', className, ...props }) => {
    const StyledUl = styled.ul`
        box-sizing: border-box;
        margin: 25px;
        position: fixed;
        white-space: nowrap;
        z-index: 9998;
        padding-left: 0;
        list-style: none;
        font-size: 100px;
    `

    const StyledLi = styled.li`
        display: block;
        position: absolute;
        top: 0;
        right: 1px;
        padding: 10px 0;
        margin: (-10px) 0;
        transition: ease-in-out transform 0.2s;
        > span {
        opacity: 0;
        transition: ease-in-out opacity 0.2s;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        margin-right: 6px;
        background: rgba(0, 0, 0, 0.75);
        padding: 2px 4px;
        border-radius: 2px;
        color: white;
        font-size: 13px;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);
        &.right {
            right: 100%;
        }
        }
        &:nth-child(1) {
        transform: translateY(-60px) scale(0);
        transition-delay: 0.21s;
        &.top {
            transform: translateY(60px) scale(0);
        }
        }
        &:nth-child(2) {
        transform: translateY(-120px) scale(0);
        transition-delay: 0.18s;
        &.top {
            transform: translateY(120px) scale(0);
        }
        }
        &:nth-child(3) {
        transform: translateY(-180px) scale(0);
        transition-delay: 0.15s;
        &.top {
            transform: translateY(180px) scale(0);
        }
        }
        &:nth-child(4) {
        transform: translateY(-240px) scale(0);
        transition-delay: 0.12s;
        &.top {
            transform: translateY(240px) scale(0);
        }
        }
        &:nth-child(5) {
        transform: translateY(-300px) scale(0);
        transition-delay: 0.09s;
        &.top {
            transform: translateY(300px) scale(0);
        }
        }
        &:nth-child(6) {
        transform: translateY(-360px) scale(0);
        transition-delay: 0.03s;
        &.top {
            transform: translateY(360px) scale(0);
        }
        }
    `
    
    const MainButton = styled.button`
        height: 56px;
        width: 56px;
        z-index: 9999;
        background-color: #666666;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        position: relative;
        border: none;
        border-radius: 50%;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);
        cursor: pointer;
        outline: none;
        padding: 0;
        -webkit-user-drag: none;
        font-weight: bold;
        color: #f1f1f1;
        font-size: 18px;
        > * {
            transition: ease-in-out transform 0.2s;
        }
    `
  

    const [isOpen, setIsOpen] = useState(false)
    const open = () => setIsOpen(true)
    const close = () => setIsOpen(false)
    const enter = () => event === 'hover' && open()
    const leave = () => event === 'hover' && close()
    const toggle = (e) => {
        if (onClick) {
            return onClick(e)
        }
        e.persist()
        return event === 'click' ? (isOpen ? close() : open()) : null
    }
  
    return (
        <StyledUl
            onMouseEnter={enter}
            onMouseLeave={leave}
        >
            <StyledLi>
                <MainButton>
                    asdasd
                </MainButton>
            </StyledLi>
        </StyledUl>
    )
}

export default EulexiaFab
