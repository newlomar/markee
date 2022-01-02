import { ChangeEvent, useState, useRef, useEffect } from 'react'
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
  const [isEditing, setIsEditing] = useState(false)
  const [content, setContent] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  console.log('infinite loop check')

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    function updateStatus () {
      const file = files.find(file => file.active === true)

      if (!file || file.status !== 'editing') {
        return
      }

      timer = setTimeout(() => {
        setFiles(files => files.map(file => {
          if (file.active) {
            return {
              ...file,
              status: 'saving',
            }
          }

          return file
        }))

        setTimeout(() => {
          setFiles(files => files.map(file => {
            if (file.active) {
              return {
                ...file,
                status: 'saved',
              }
            }

            return file
          }))
        }, 500)
      }, 500)
    }

    updateStatus()

    return () => clearTimeout(timer)
  }, [files])
  console.log('check editing: ', isEditing)

  const handleFileChange = (item: File) => {
    inputRef.current?.focus()
    setTitle(item.name)
    setContent(item.content)
    const idItemClicked = item.id
    console.log(idItemClicked)
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
    const activeItemid = (files.find(item => item.active))?.id
    setTitle(newTitle)
    setFiles(
      files.map((file) => file.id === activeItemid ? { ...file, name: newTitle, status: 'editing' } : file),
    )
    setIsEditing(true)
  }

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value
    setContent(newContent)
    const activeItemid = (files.find(item => item.active))?.id
    setFiles(
      files.map((file) => file.id === activeItemid ? { ...file, content: newContent, status: 'editing' } : file),
    )
  }

  return (
    <>
      <Sidebar
        files={files}
        handleAddNewFile={handleAddNewFile}
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
