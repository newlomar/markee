import { Sidebar } from 'sidebar'
import { Content } from 'content'
import { useFiles } from 'resources/files/use-files'
import { Home } from 'home'
import { Navbar } from 'navbar'
import { Routes, Route } from 'react-router-dom'
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
    <Routes>
      <Route
        path='/files'
        element={
          <>
            <Navbar />
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
      }
      />
      <Route path='/' element={<Home />} />
    </Routes>
  )
}

export { App }
