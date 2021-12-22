import styled, { css } from 'styled-components/macro'

function Sidebar () {
  interface Item {
    id: string
    name: string
    content: string
    active: boolean
    status: 'editing' | 'saving' | 'saved'
  }

  const array: Item[] = [
    {
      id: '1',
      name: 'Markdown',
      content: 'sdadsadsa',
      active: true,
      status: 'editing',
    },
    {
      id: '2',
      name: 'Markdown 2',
      content: 'sdadsadsa',
      active: false,
      status: 'saved',
    },
    {
      id: '3',
      name: 'Markdown 3',
      content: 'sdadsadsa',
      active: false,
      status: 'saved',
    },
    {
      id: '4',
      name: 'Markdown 4',
      content: 'sdadsadsa',
      active: false,
      status: 'saved',
    },
    {
      id: '5',
      name: 'Markdown 5',
      content: 'sdadsadsa',
      active: false,
      status: 'saved',
    },
    {
      id: '6',
      name: 'Markdown 6',
      content: 'sdadsadsa',
      active: false,
      status: 'saved',
    },
    {
      id: '7',
      name: 'Markdown 7',
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
                    <Link href='/'>
                      <svg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M14 2.88062H6C5.46957 2.88062 4.96086 3.09133 4.58579 3.4664C4.21071 3.84147 4 4.35018 4 4.88062V20.8806C4 21.411 4.21071 21.9198 4.58579 22.2948C4.96086 22.6699 5.46957 22.8806 6 22.8806H18C18.5304 22.8806 19.0391 22.6699 19.4142 22.2948C19.7893 21.9198 20 21.411 20 20.8806V8.88062L14 2.88062Z' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
                        <path d='M14 2.88062V8.88062H20' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
                        <path d='M16 13.8806H8' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
                        <path d='M16 17.8806H8' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
                        <path d='M10 9.88062H9H8' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
                      </svg>
                      <LinkText>{item.name}</LinkText>
                    </Link>
                    <DeleteButton>x</DeleteButton>
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

const Link = styled.a`${({ theme }) => css`
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
