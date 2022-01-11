import { ChangeEvent, useState, useRef, useEffect, MouseEvent } from 'react'
import { File } from 'resources/files/types'
import { v4 } from 'uuid'
import localforage from 'localforage'

export function useFiles () {
  const [files, setFiles] = useState<File[]>([])
  const [title, setTitle] = useState('Sem título')
  const [content, setContent] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

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
        }, 300)
      }, 1000)
    }

    updateStatus()

    return () => clearTimeout(timer)
  }, [files])

  useEffect(() => {
    async function storage () {
      const localFiles: File[] | null = await localforage.getItem('files')

      if (localFiles) {
        setFiles(localFiles)

        const activeFile = localFiles.find(item => item.active)
        const activeItemid = activeFile?.id
        const activeTitle = activeFile?.name
        const activeContent = activeFile?.content

        setTitle(activeTitle!)
        setContent(activeContent!)

        window.history.pushState(null, '', `/files/${activeItemid}`)
      } else {
        const id = v4()
        await localforage.setItem('files', [
          {
            id: id,
            name: 'Sem título',
            content: '',
            active: true,
            status: 'saved',
          },
        ])

        setFiles([
          {
            id: id,
            name: 'Sem título',
            content: '',
            active: true,
            status: 'saved',
          },
        ])

        window.history.pushState(null, '', `/files/${id}`)
      }
    }

    storage()
  }, [])

  useEffect(() => {
    localforage.setItem('files', files)
  }, [files])

  const handleSelectFile = (item: File) => (e: MouseEvent) => {
    e.preventDefault()

    inputRef.current?.focus()
    setTitle(item.name)
    setContent(item.content)
    const idItemClicked = item.id
    const idActive = (files.find(item => item.active))?.id
    setFiles(files.map((item) => idItemClicked === idActive ? item : item.id === idActive ? { ...item, active: false } : item.id === idItemClicked ? { ...item, active: true } : item))
    window.history.pushState(null, '', `/files/${idItemClicked}`)
  }

  const handleAddNewFile = () => {
    inputRef.current?.focus()
    const id = v4()
    const obj:File = {
      id: id,
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
    window.history.pushState(null, '', `/files/${id}`)
  }

  const handleTitleChange = (e:ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value
    const activeItemid = (files.find(item => item.active))?.id
    setTitle(newTitle)
    setFiles(
      files.map((file) => file.id === activeItemid ? { ...file, name: newTitle, status: 'editing' } : file),
    )
  }

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value
    setContent(newContent)
    const activeItemid = (files.find(item => item.active))?.id
    setFiles(
      files.map((file) => file.id === activeItemid ? { ...file, content: newContent, status: 'editing' } : file),
    )
  }

  const handleRemoveFile = (item: File) => {
    if (!item.active) {
      setFiles(files.filter(file => file.id !== item.id))
    }
  }

  return {
    files,
    title,
    content,
    handleSelectFile,
    handleAddNewFile,
    handleTitleChange,
    handleContentChange,
    handleRemoveFile,
    inputRef,
  }
}
