import styled from 'styled-components'

const RulerTop = styled.div.attrs((props) => ({
  style: {
    height: props.rulerPosition - props.rulerSize / 2
  }
}))`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  pointer-events: none;
`

export default RulerTop
