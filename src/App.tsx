import styled from 'styled-components/macro'

function App () {
  return (
    <Title>App</Title>
  )
}

const Title = styled.h1`
  color: ${(props) => props.theme}
`

export { App }
