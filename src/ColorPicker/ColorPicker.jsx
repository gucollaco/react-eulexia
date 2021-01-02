import React from 'react'
import styled from 'styled-components'
import { HexColorPicker } from 'react-colorful'

const WrapperDiv = styled.div`
  background: #c1c1cc;
  border-radius: 12px;
  padding: 8px;
`

const InvisibleDiv = styled.div`
  display: none;
`

const PickerExternal = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const PickerButton = styled.button`
  width: 32px;
  height: 32px;
  margin: 4px;
  border: 6px solid black;
  padding: 0;
  border-radius: 16px;
  cursor: pointer;
  outline: none;
`

const ColorPicker = ({
  disabled,
  color: colorValue,
  onChange,
  colors = []
}) => (
  <WrapperDiv>
    <InvisibleDiv>
      <HexColorPicker color={colorValue} onChange={onChange} />
    </InvisibleDiv>
    <PickerExternal>
      {colors.map((color) => (
        <PickerButton
          key={color}
          style={{
            background: colorValue === color ? 'white' : color,
            borderColor: color
          }}
          onClick={() => onChange(color)}
          disabled={disabled}
        />
      ))}
    </PickerExternal>
  </WrapperDiv>
)

export default ColorPicker
