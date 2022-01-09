import { Sidebar } from 'sidebar'
import { Content } from 'content'
import { useFiles } from 'resources/files/use-files'
import { Navbar } from 'navbar'
import styled from 'styled-components'

function App () {
  const {
    files,
    title,
    content,
    handleSelectFile,
    handleAddNewFile,
    handleTitleChange,
    handleContentChange,
    handleRemoveFile,
    inputRef,
  } = useFiles()

  return (
    <>
      <Navbar />
      <StyledSection>
        <Sidebar
          files={files}
          handleAddNewFile={handleAddNewFile}
          onSelectFile={handleSelectFile}
          handleRemoveFile={handleRemoveFile}
        />
        <Content
          title={title}
          content={content}
          inputRef={inputRef}
          handleContentChange={handleContentChange}
          handleTitleChange={handleTitleChange}
        />
      </StyledSection>
    </>
  )
}

const StyledSection = styled.section`
  display: flex;

  @media(max-width: 800px) {
    flex-direction: column;
  }
`

export { App }
