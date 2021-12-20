import styled, { css } from 'styled-components/macro'

function Content () {
  return (
    <StyledSection>
      <StyledDiv>
        <svg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M14 2.88062H6C5.46957 2.88062 4.96086 3.09133 4.58579 3.4664C4.21071 3.84147 4 4.35018 4 4.88062V20.8806C4 21.411 4.21071 21.9198 4.58579 22.2948C4.96086 22.6699 5.46957 22.8806 6 22.8806H18C18.5304 22.8806 19.0391 22.6699 19.4142 22.2948C19.7893 21.9198 20 21.411 20 20.8806V8.88062L14 2.88062Z' stroke='#1FC8E1' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M14 2.88062V8.88062H20' stroke='#1FC8E1' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M16 13.8806H8' stroke='#1FC8E1' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M16 17.8806H8' stroke='#1FC8E1' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10 9.88062H9H8' stroke='#1FC8E1' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
        <Input type='text' />
      </StyledDiv>
      <Main>
        <TextSection>
          a
        </TextSection>
        <ResultSection>
          <h2>Bootcamp Brainn Co.</h2>
          <p>Lorem ipsum dolor sit amet simet</p>
        </ResultSection>
      </Main>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  flex-grow: 1;
`

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

const Input = styled.input`
  display: inline-block;
  border: none;
  width: 100%;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px red;
  }
`

const Main = styled.main`
  display: flex;
`

const TextSection = styled.textarea`
  display: flex;
  flex-direction: column;
`
const ResultSection = styled.section`

`

export { Content }
