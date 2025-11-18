import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'

import './creaet_page.css'
const Create_page: React.FC = () => {
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')

  const navigate = useNavigate()
  const { createPost } = useAppContext() // ✅ get createPost from context

  const handle_description_change = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(event.target.value)
  }

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault()

    // ✅ basic validation BEFORE doing anything else
    if (!title.trim() || !description.trim()) {
      alert('Please fill out all the fields')
      return
    }

    // ✅ call context function, NOT this handler again
    const newPostId = createPost({ title, description })

    // ✅ optional: clear the form
    setTitle('')
    setDescription('')

    // ✅ navigate to the new post page
    navigate(`/posts/${newPostId}`)
  }

  const resetForm = () => {
    setTitle('')
    setDescription('')
  }

  return (
    <main className="createpage_main_container">
      <div className="headline">
        <h1>Create your amazing blog</h1>
        <p className="headline-sub">Write something people will love to read.</p>
      </div>

      <form className="detail" onSubmit={handleCreatePost}>
        <label htmlFor="title" className="label">
          Title
        </label>
        <input
          id="title"
          value={title}
          placeholder="Enter your title here"
          onChange={(e) => setTitle(e.target.value)}
          className="text-input"
        />

        <label htmlFor="description" className="label">
          Body
        </label>
        <p className="helper">Provide details for your post below</p>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={handle_description_change}
          rows={12}
          className="text-area"
        />

        <div className="buttons">
          <button type="submit" className="btn primary">
            Create post
          </button>
          <button type="button" className="btn" onClick={resetForm}>
            Cancel
          </button>
        </div>
      </form>
    </main>
  )
}

export default Create_page
