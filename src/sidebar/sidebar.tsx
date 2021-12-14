import styled, { css } from 'styled-components/macro'

function Sidebar () {
  return (
    <Aside>
      <Header>
        <Image src='logo192.png' alt='logo' />
        <Title>markee<Span>.</Span></Title>
      </Header>
      <Section>
        <Title2><Line />Arquivos <Line /></Title2>
        <Button>+ Adicionar arquivo</Button>
        <List>
          <li>Exemplo1</li>
          <li>Exemplo1</li>
          <li>Exemplo1</li>
          <li>Exemplo1</li>
        </List>
      </Section>
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

const Section = styled.section`
  padding: 3rem 3rem;
`

const Title2 = styled.h2`
  font-size: 1.5rem;
`
const Line = styled.span`${({ theme }) => css`
  height: 1px;
  border: 1px solid ${theme.colors.primary};
`}`

const Button = styled.button`
  font-size: 2rem;
`

const List = styled.ul`
  list-style-type: none;
`

export { Sidebar }
