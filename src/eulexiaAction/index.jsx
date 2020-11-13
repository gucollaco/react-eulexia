import React, { useState } from 'react'
import styled from 'styled-components'

const Action = styled.button`
    height: 48px;
    width: 48px;
    background-color: #aaaaaa;
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
    margin-right: 4px;
    font-size: 16px;
    z-index: 10000;
`

export default Action