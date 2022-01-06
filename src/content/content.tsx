import { ChangeEventHandler, RefObject } from 'react'
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

interface Props {
  title: string;
  handleTitleChange: ChangeEventHandler;
  content: string;
  handleContentChange: ChangeEventHandler;
  inputRef: RefObject<HTMLInputElement>;
}

function Content ({ title, handleTitleChange, content, handleContentChange, inputRef }: Props) {
  return (
    <StyledSection>
      <StyledHeader>
        <LinkImage />
        <Input
          autoFocus
          value={title}
          onChange={handleTitleChange}
          ref={inputRef}
        />
      </StyledHeader>
      <Main>
        <TextSection
          placeholder='Digite aqui seu markdown'
          value={content}
          onChange={handleContentChange}
        />
        <ResultSection dangerouslySetInnerHTML={{ __html: marked(content) }} />
      </Main>
    </StyledSection>
  )
}

const StyledSection = styled.section`${({ theme }) => css`
  flex-grow: 1;
  width: 100%;
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
  height: 90vh;
  padding: 4rem 0;
  overflow-y: hidden;

  @media(max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`

const TextSection = styled.textarea`${({ theme }) => css`
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  border: none;
  border-right: 2px solid ${theme.colors.gray};
  padding: 0 2rem 2rem 2rem;
  height: 100%;
  min-width: 50%;
  max-width: 50%;
  overflow: auto;
  overflow-y: scroll;
  resize: none;
  cursor: auto;
  word-break: break-all;

  &:focus {
    outline: none;
  }

  &::-webkit-scrollbar {
    width: 0rem;
  }

  @media(max-width: 800px) {
    max-width: 100%;
    border: none;
    border-bottom: 2px solid ${theme.colors.gray};
    &:focus {
      outline: none;
    }

    &::-webkit-scrollbar {
      width: 1rem;
    }
  }
`}`

const ResultSection = styled.section`
  padding: 0 2rem 2rem 2rem;
  height: 100%;
  width: 50%;
  font-size: 1.4rem;
  overflow: scroll;
  overflow-x: hidden;
  resize: none;
  cursor: auto;
  word-break: break-all;
  &:focus {
    outline: none;
  }

  &::-webkit-scrollbar {
    width: 0rem;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin-top: 0;
  }
`
export { Content }
