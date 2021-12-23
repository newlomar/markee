import styled, { css } from 'styled-components/macro'
// import * as icon from 'ui/icons'
import { File } from 'resources/files/types'

function Sidebar () {
  const array: File[] = [
    {
      id: '1',
      name: 'Markdown',
      content: 'sdadsadsa',
      active: true,
      status: 'editing',
    },
    {
      id: '2',
      name: 'Markdown - 2',
      content: 'sdadsadsa',
      active: false,
      status: 'saved',
    },
  ]

  return (
    <>
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
            {
              array.map((item) => {
                return (
                  <ListItem key={item.id}>
                    <Link href='/' active={item.active}>

                      <LinkText>{item.name}</LinkText>

                    </Link>
                    <DeleteButton>mudarporicon</DeleteButton>
                  </ListItem>
                )
              })
            }
          </List>
        </Section>
      </Aside>
    </>
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
  color: ${theme.colors.black};

  &:hover {
    opacity: 0.65;
  }

`}`

const ButtonSpan = styled.span`
  font-size: 1.4rem;
`

const List = styled.ul`
  list-style-type: none;
  color: white;
  padding-left: 0rem;
`

const ListItem = styled.li`${({ theme }) => css`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  margin: 1rem 0rem;
  border-radius: 6px;
  opacity: 0.65;

  &:hover {
    background-color: ${theme.colors.lightBlack};
    color: white;
    opacity: 1;
  }

`}`

type LinkProps = {
  active: boolean
}
// background: url("${active ? icon.editingFile : icon.FileActive}") 10px calc(50% - 2px) no-repeat;
const Link = styled.a<LinkProps>`${({ theme }) => css`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: ${theme.colors.white};
  text-decoration: none;
  width: 100%;
`}`

const LinkText = styled.span`
  margin-left: 1rem;
`

const DeleteButton = styled.button`${({ theme }) => css`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: ${theme.colors.white};
  padding: 0rem 1rem;

  &:hover {
    opacity: 1;
    background-color: ${theme.colors.black};
    border-radius: 100px;
  };
`}`

export { Sidebar }
