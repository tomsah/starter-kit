import React, {useState} from 'react'
import {Redirect} from 'react-router'
import PropTypes from 'prop-types'
import {savePost} from './api'

function Editor({user}) {
  const [isSaving, setIsSaving] = useState(false)
  const [redirect, setRedirect] = useState(false)
  const [error, setError] = useState(null)

  // eslint-disable-next-line consistent-return
  function handleSubmit(e) {
    e.preventDefault()
    const {title, content, tags} = e.target.elements
    const newPost = {
      title: title.value,
      content: content.value,
      tags: tags.value.split(',').map((t) => t.trim()),
      date: new Date().toISOString(),
      authorId: user.id,
    }
    setIsSaving(true)
    savePost(newPost).then(
      () => setRedirect(true),
      (response) => {
        setIsSaving(false)
        setError(response.data.error)
      },
    )
    if (redirect) {
      return <Redirect to="/" />
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title-input">Title</label>
      <input id="title-input" name="title" />

      <label htmlFor="content-input">Content</label>
      <textarea id="content-input" name="content" />

      <label htmlFor="tags-input">Tags</label>
      <input id="tags-input" name="tags" />

      <button type="submit" disabled={isSaving}>
        Submit
      </button>
      {error ? <div role="alert">{error}</div> : null}
    </form>
  )
}

Editor.propTypes = {
  user: PropTypes.object,
}

export {Editor}
