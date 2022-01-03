import { Sidebar } from 'sidebar'
import { Content } from 'content'
import { useFiles } from 'resources/files/use-files'

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
    </>
  )
}

export { App }
