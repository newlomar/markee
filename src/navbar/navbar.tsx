import styled, { css } from 'styled-components'

function Navbar () {
  return (
    <StyledNav>
      <StyledList>
        <ListItem first>Inicio</ListItem>
        <ListItem>Arquivos</ListItem>
        <ListItem>Sobre</ListItem>
        <ListItem>Contato</ListItem>
      </StyledList>
    </StyledNav>
  )
}

const StyledNav = styled.nav`${({ theme }) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${theme.colors.blueNav};

  @media(max-width: 800px) {
    display: none;
  }
`}`

const StyledList = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
`

type ListItemProp = {
  first?: boolean;
}

const ListItem = styled.li<ListItemProp>`${({ theme, first }) => css`
  font-size: 1.5rem;
  font-weight: bold;
  color: orange;
  text-align: center;
  list-style-type: none;
  ${first ? '' : 'padding-left: 1rem;'}
  padding: 1rem 1rem;
  border-radius: 2rem;
  &:hover {
    background: ${theme.colors.black};
    cursor: pointer;
  }
`}`

export { Navbar }
