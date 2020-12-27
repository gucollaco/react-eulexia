import styled from 'styled-components'

const RulerBot = styled.div.attrs((props) => ({
  style: {
    top: props.rulerPosition + props.rulerSize / 2
  }
}))`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  bottom: 0;
  left: 0;
  position: fixed;
  pointer-events: none;
`

export default RulerBot
