import styled, { css, keyframes } from 'styled-components/macro'
import * as icon from 'ui/icons'
import { File } from 'resources/files/types'
import { MouseEventHandler, MouseEvent } from 'react'

interface Props {
  handleAddNewFile: MouseEventHandler;
  files: File[];
  onSelectFile: (item: File) => (e: MouseEvent) => void;
  handleRemoveFile: (item: File) => void;
}

function Sidebar ({ handleAddNewFile, files, onSelectFile, handleRemoveFile }: Props) {
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
          <Button onClick={handleAddNewFile}>+ <ButtonSpan>Adicionar arquivo</ButtonSpan></Button>
          <List>
            {
              files.map((item) => {
                return (
                  <ListItem key={item.id}>
                    <Link
                      href={`/file/${item.id}`}
                      onClick={onSelectFile(item)}
                    >
                      <LinkImage active={item.active} />
                      <LinkText>{item.name}</LinkText>
                    </Link>
                    <StatusButton>
                      <ButtonImage
                        active={item.active}
                        status={item.status}
                        onClick={() => handleRemoveFile(item)}
                      />
                    </StatusButton>
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
  width: 35rem;
  background: ${theme.colors.black};
  overflow: scroll;

  &:focus {
    outline: none;
  }

  &::-webkit-scrollbar {
    width: 0rem;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #a8bbbf;
  }

  @media(max-width: 800px) {
    width: 100%;
    height: auto;
  }

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

type LinkImageProps = {
  active: boolean
}

const LinkImage = styled.img<LinkImageProps>`${({ active }) => css`
  content:url("${active ? icon.activeFile : icon.savedFile}")
`}`

const LinkText = styled.span`
  margin-left: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
`

const StatusButton = styled.button`${({ theme }) => css`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: ${theme.colors.white};
  padding: 1rem;
`}`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const animation = () => css`
  ${rotate} 0.5s linear infinite;
`

type StatusButtonProps = {
  active: boolean
  status: string
}

const ButtonImage = styled.img<StatusButtonProps>`${({ active, status }) => css`
  content:url("${active === false ? icon.deletebutton : status === 'editing' ? icon.ellipse1 : status === 'saving' ? icon.ellipse2 : icon.savedIcon}");
  animation: ${status === 'saving' && animation};
`}`

export { Sidebar }
