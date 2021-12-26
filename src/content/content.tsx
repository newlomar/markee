import { ChangeEvent, useState } from 'react'
import { activeFile } from 'ui/icons'
import styled, { css } from 'styled-components/macro'

function Content () {
  const [areaText, setAreaText] = useState('## Bootcamp Brainn Co\nLorem ipsum dolor sit amet simet')

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const target = event.target as HTMLTextAreaElement
    setAreaText(target.value)
  }

  return (
    <StyledSection>
      <StyledHeader>
        <LinkImage />
        <Input type='text' />
      </StyledHeader>
      <Main>
        <TextSection value={areaText} onChange={handleChange} />
        <ResultSection>
          <StyledHeading>Bootcamp Brainn Co.</StyledHeading>
          <P>Lorem ipsum dolor sit amet simet</P>
        </ResultSection>
      </Main>
    </StyledSection>
  )
}

const StyledSection = styled.section`${({ theme }) => css`
  flex-grow: 1;
  padding: 2rem;
  color: ${theme.colors.black}
`}`

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
`

const LinkImage = styled.img`
  content:url("${activeFile}")
`

const Input = styled.input`
  display: inline-block;
  border: none;
  width: 100%;
  font-size: 1.8rem;
  padding-left: 1rem;

  &:focus {
    outline: none;
  }
`

const Main = styled.main`
  display: flex;
  width: 100%;
  height: 99%;
  padding: 4rem 0;
  overflow: hidden;
`

const TextSection = styled.textarea`${({ theme }) => css`
  display: flex;
  flex-direction: column;
  font-size: 1.8rem;
  border: none;
  border-right: 2px solid ${theme.colors.gray};
  padding: 0 2rem 2rem 2rem;
  width: 50%;
  overflow: auto;
  overflow-x: hidden;
  resize: none;
  cursor: auto;

  &:focus {
    outline: none;
  }

  &::-webkit-scrollbar {
    width: 0rem;
  }

  // &::-webkit-scrollbar-track {
  //   background-color: transparent;
  // }

  // &::-webkit-scrollbar-thumb {
  //   background-color: #d6dee1;
  //   border-radius: 20px;
  //   border: 6px solid transparent;
  //   background-clip: content-box;
  // }

  // &::-webkit-scrollbar-thumb:hover {
  //   background-color: #a8bbbf;
  // }
`}`

const ResultSection = styled.section`
  padding: 0 2rem 2rem 2rem;
  width: 50%;
`

const StyledHeading = styled.h2`
  margin: 0;
`

const P = styled.p`
  margin: 0;
`

export { Content }
