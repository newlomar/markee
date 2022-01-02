import { ChangeEvent, useState, useRef } from 'react'
import { Sidebar } from 'sidebar'
import { Content } from 'content'
import { File } from 'resources/files/types'
import { v4 } from 'uuid'

function App () {
  const [files, setFiles] = useState<File[]>([
    {
      id: v4(),
      name: 'Sem título',
      content: '',
      active: true,
      status: 'saved',
    },
  ])
  const [title, setTitle] = useState('Sem título')
  const [content, setContent] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  console.log('infinite loop check')

  const handleFileChange = (item: File) => {
    inputRef.current?.focus()
    setTitle(item.name)
    setContent(item.content)
    const idItemClicked = item.id
    const idActive = (files.find(item => item.active))?.id
    setFiles(files.map((item) => idItemClicked === idActive ? item : item.id === idActive ? { ...item, active: false } : item.id === idItemClicked ? { ...item, active: true } : item))
  }

  const handleAddNewFile = () => {
    inputRef.current?.focus()
    const obj:File = {
      id: v4(),
      name: 'Sem título',
      content: '',
      active: true,
      status: 'saved',
    }
    const oldFiles:File[] = files.map((item) => {
      return (
        {
          ...item,
          active: false,
        }
      )
    })
    setFiles(
      [
        ...oldFiles,
        obj,
      ],
    )
  }

  const handleTitleChange = (e:ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value
    setTitle(newTitle)
    const activeItemid = (files.find(item => item.active))?.id
    setFiles(
      files.map((file) => file.id === activeItemid ? { ...file, name: newTitle } : file),
    )
  }

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value
    setContent(newContent)
    const activeItemid = (files.find(item => item.active))?.id
    setFiles(
      files.map((file) => file.id === activeItemid ? { ...file, content: newContent } : file),
    )
  }

  return (
    <>
      <Sidebar
        handleAddNewFile={handleAddNewFile}
        files={files}
        handleFileChange={handleFileChange}
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
