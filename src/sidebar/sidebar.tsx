import styled, { css } from 'styled-components/macro'

function Sidebar () {
  return (
    <Aside>
      <Header>
        <Image src='logo192.png' alt='logo' />
        <Title>markee<Span>.</Span></Title>
      </Header>
      <Section>
        <ArchiveSpan>
          <LineOne />
          <Title2>
            Arquivos
          </Title2>
          <LineTwo />
        </ArchiveSpan>
        <Button>+ <ButtonSpan>Adicionar arquivo</ButtonSpan></Button>
        <List>
          <li>
            <img src='a.png' alt='archive icon' />
            Exemplo1
          </li>
          <li>
            <img src='archive.png' alt='archive icon' />
            Exemplo1
          </li>
          <li>
            <img src='archive.png' alt='archive icon' />
            Exemplo1
          </li>
          <li>
            <img src='archive.png' alt='archive icon' />
            Exemplo1
          </li>
        </List>
      </Section>
    </Aside>
  )
}

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 3rem 3rem 3rem;
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
  padding: 2rem 3rem;
`

const ArchiveSpan = styled.span`
  display: flex;
  align-items: center;
`

const Title2 = styled.h2`${({ theme }) => css`
  font-size: 1.5rem;
  color: ${theme.colors.white};
  padding: 0rem 0.5rem;
`}`

const LineOne = styled.span`${({ theme }) => css`
  flex-basis: 10%;
  background: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};
  border-radius: 1px;
`}`

const LineTwo = styled(LineOne)`
  flex-basis: 90%;
`

const Button = styled.button`${({ theme }) => css`
  width: 100%;
  font-size: 2rem;
  margin: 1rem 0rem;
  padding: 0.5rem 0rem;
  background: ${theme.colors.primary};
  cursor: pointer;
  border: none;
  border-radius: 4px;
  color: ${theme.colors.black}
`}`

const ButtonSpan = styled.span`
  font-size: 1.4rem;
`

const List = styled.ul`
  list-style-type: none;
  color: white;
`

export { Sidebar }
