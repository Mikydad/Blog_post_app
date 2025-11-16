import React, { useState } from 'react'
import './createpage.css'

const Create_page: React.FC = () => {
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')

  const handle_description_change = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value)
  }

  const addPost = (e?: React.FormEvent) => {
    e && e.preventDefault()
    // TODO: wire this up to your post-creation logic / API
    console.log('create post', { title, description })
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

      <form className="detail" onSubmit={(e) => addPost(e)}>
        <label htmlFor="title" className="label">Title</label>
        <input
          id="title"
          value={title}
          placeholder="Enter your title here"
          onChange={(e) => setTitle(e.target.value)}
          className="text-input"
        />

        <label htmlFor="description" className="label">Body</label>
        <p className="helper">Provide details for your post below</p>
        <textarea
          id="description"
          name="Description"
          value={description}
          onChange={handle_description_change}
          rows={12}
          className="text-area"
        />

        <div className="buttons">
          <button type="submit" className="btn primary">Create post</button>
          <button type="button" className="btn" onClick={resetForm}>Cancel</button>
        </div>
      </form>
    </main>
  )
}

export default Create_page
