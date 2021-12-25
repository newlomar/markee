import { ChangeEvent, useState } from 'react'
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
        <svg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M14 2.88062H6C5.46957 2.88062 4.96086 3.09133 4.58579 3.4664C4.21071 3.84147 4 4.35018 4 4.88062V20.8806C4 21.411 4.21071 21.9198 4.58579 22.2948C4.96086 22.6699 5.46957 22.8806 6 22.8806H18C18.5304 22.8806 19.0391 22.6699 19.4142 22.2948C19.7893 21.9198 20 21.411 20 20.8806V8.88062L14 2.88062Z' stroke='#1FC8E1' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M14 2.88062V8.88062H20' stroke='#1FC8E1' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M16 13.8806H8' stroke='#1FC8E1' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M16 17.8806H8' stroke='#1FC8E1' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10 9.88062H9H8' stroke='#1FC8E1' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
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
