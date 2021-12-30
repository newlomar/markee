import { ChangeEvent, useState } from 'react'
import { Sidebar } from 'sidebar'
import { Content } from 'content'
import { File } from 'resources/files/types'
import { v4 } from 'uuid'

function App () {
  const [files, setFiles] = useState<File[]>([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }

  const handleTitleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
    const id = (files.find(item => item.active))?.id
    console.log(id)
  }

  const handleFileChange = (item: File) => {
    setTitle(item.name)
    setContent(item.content)
    console.log(item.id)
    const idItemClicked = item.id
    const idActive = (files.find(item => item.active))?.id
    setFiles(files.map((item) => item.id === idActive ? { ...item, active: false } : item.id === idItemClicked ? { ...item, active: true } : item))
  }

  const handleClick = () => {
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
  return (
    <>
      <Sidebar
        handleClick={handleClick}
        files={files}
        handleFileChange={handleFileChange}
      />
      <Content
        title={title}
        content={content}
        handleContentChange={handleContentChange}
        handleTitleChange={handleTitleChange}
      />
    </>
  )
}

export { App }
