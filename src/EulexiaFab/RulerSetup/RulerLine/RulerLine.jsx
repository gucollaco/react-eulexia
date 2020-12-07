import styled from 'styled-components'

const RulerLine = styled.div.attrs((props) => ({
  style: {
    top: props.rulerPosition - props.rulerSize / 2,
    height: props.rulerSize
  }
}))`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  position: fixed;
  pointer-events: none;
`

export default RulerLine
