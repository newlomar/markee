import styled, { css } from 'styled-components/macro'

function Sidebar () {
  return (
    <Aside>
      <Title>Markee</Title>
    </Aside>
  )
}

const Aside = styled.aside`${({ theme }) => css`
  height: 100vh;
  background: ${theme.colors.black}
`}`

const Title = styled.h1`${({ theme }) => css`
  background: ${theme.colors.black};
  color: ${theme.colors.primary};
  margin: 0;
`}`

export { Sidebar }
