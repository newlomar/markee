import { ChangeEvent, useState } from 'react'
import { activeFile } from 'ui/icons'
import styled, { css } from 'styled-components/macro'
import { marked } from 'marked'
// import highlight from 'highlight.js'
import 'highlight.js/styles/github.css'

import('highlight.js').then((hljs) => {
  const h = hljs.default

  marked.setOptions({
    highlight: (code, language) => {
      if (language && h.getLanguage(language)) {
        return h.highlight(code, { language }).value
      }

      return h.highlightAuto(code).value
    },
  })
})

function Content () {
  const [content, setContent] = useState('')

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value)
  }

  return (
    <StyledSection>
      <StyledHeader>
        <LinkImage />
        <Input defaultValue='Sem título' />
      </StyledHeader>
      <Main>
        <TextSection
          placeholder='Digite aqui seu markdown'
          value={content}
          onChange={handleChange}
        />
        <ResultSection dangerouslySetInnerHTML={{ __html: marked(content) }} />
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
  font-size: 1.4rem;
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
  font-size: 1.4rem;

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

`
export { Content }
