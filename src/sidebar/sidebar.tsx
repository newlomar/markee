import styled, { css } from 'styled-components/macro'

function Sidebar () {
  return (
    <Aside>
      <Header>
        <Image src='logo192.png' alt='logo' />
        <Title>markee<Span>.</Span></Title>
      </Header>
    </Aside>
  )
}

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 3rem;
`

const Aside = styled.aside`${({ theme }) => css`
  height: 100vh;
  width: 30rem;
  background: ${theme.colors.black}
`}`

const Title = styled.h1`${({ theme }) => css`
  font-size: 3rem;
  color: ${theme.colors.white};
  margin: 0;
`}`

const Span = styled.span`${({ theme }) => css`
  color: ${theme.colors.primary}
`}`

const Image = styled.img`
  width: 4rem;
  padding-right: 1rem;
`

export { Sidebar }
