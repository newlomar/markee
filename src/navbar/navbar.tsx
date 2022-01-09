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

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
`

const StyledList = styled.ul`
  padding: 0;
  display: flex;
`

type ListItemProp = {
  first?: boolean;
}

const ListItem = styled.li<ListItemProp>`${({ first }) => css`
  font-size: 1rem;
  list-style-type: none;
  ${first ? '' : 'padding-left: 1rem;'}
`}`

export { Navbar }
