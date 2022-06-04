import styled, { keyframes } from 'styled-components'

const size = 60
const borderSize = size / 5

const loadSpin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

// Source: https://www.w3schools.com/howto/howto_css_loader.asp
const Loader = styled.div`
  border: ${borderSize}px solid lightgray;
  border-top: ${borderSize}px solid blue;
  border-radius: 50%;
  width: ${size}px;
  height: ${size}px;
  animation: ${loadSpin} 2s linear infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export default Loader
