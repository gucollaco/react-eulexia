import React from 'react'
import styled from 'styled-components'
import { Range, getTrackBackground } from 'react-range'

const TrackExternalDiv = styled.div.attrs((props) => ({
  style: props.propsStyle
}))`
  height: 42px;
  display: flex;
  width: 100%;
`

const TrackInternalDiv = styled.div`
  height: 8px;
  width: 100%;
  border-radius: 4px;
  align-self: center;
  ${({ value, min, max }) =>
    `background: ${getTrackBackground({
      values: [value],
      colors: ['#548BF4', '#ccc'],
      min,
      max
    })}`}
`

const Track = ({ props, children, value, min, max, dataTestId = 'slider' }) => (
  <TrackExternalDiv
    onMouseDown={props.onMouseDown}
    onTouchStart={props.onTouchStart}
    propsStyle={props.style}
  >
    <TrackInternalDiv
      data-testid={dataTestId}
      ref={props.ref}
      value={value}
      min={min}
      max={max}
    >
      {children}
    </TrackInternalDiv>
  </TrackExternalDiv>
)

const ThumbDiv = styled.div.attrs((props) => ({
  style: props.propsStyle
}))`
  height: 32px;
  width: 32px;
  border-radius: 20px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 6px #aaa;
`

const Thumb = ({ props }) => <ThumbDiv {...props} propsStyle={props.style} />

const Slider = ({ className, ...props }) => {
  const value = [props.values]
  const min = props.min
  const max = props.max
  const dataTestId = props['data-testid']

  return (
    <Range
      renderTrack={({ props, children }) =>
        Track({ props, children, value, min, max, dataTestId })}
      renderThumb={Thumb}
      className={className}
      {...props}
    />
  )
}

export default Slider
