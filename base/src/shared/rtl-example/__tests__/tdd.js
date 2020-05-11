// Testing post-editor, this was a TDD exercise

import React from 'react'
import {render, fireEvent, waitFor} from '@testing-library/react'
import {build, fake, sequence} from 'test-data-bot'
import {Redirect as MockRedirect} from 'react-router'
import {Editor} from '../post-editor'
import {savePost as MockSavePost} from '../api'

jest.mock('react-router', () => {
  return {
    Redirect: jest.fn(() => null),
  }
})

jest.mock('../api')

afterEach(() => {
  jest.clearAllMocks()
})
const postBuilder = build('Post').fields({
  title: fake((f) => f.lorem.words()),
  content: fake((f) => f.lorem.paragraphs().replace(/\r/g, '')),
  tags: fake((f) => [f.lorem.words(), f.lorem.words(), f.lorem.words()]),
})

const userBuilder = build('User').fields({
  id: sequence((s) => `user-${s}`),
})

function renderEditor() {
  const fakeUser = userBuilder()
  const utils = render(<Editor user={fakeUser} />)
  const fakePost = postBuilder()

  utils.getByLabelText(/title/i).value = fakePost.title
  utils.getByLabelText(/content/i).value = fakePost.content
  utils.getByLabelText(/tags/i).value = fakePost.tags.join(',')

  const submitButton = utils.getByText(/submit/i)

  return {
    ...utils,
    fakeUser,
    fakePost,
    submitButton,
  }
}

test('renders a form with title, content, tags, and a submit button', () => {
  const preDate = new Date().getTime()
  MockSavePost.mockResolvedValueOnce()
  const {fakeUser, fakePost, submitButton} = renderEditor()

  fireEvent.click(submitButton)

  expect(submitButton).toBeDisabled()
  expect(MockSavePost).toHaveBeenCalledWith({
    ...fakePost,
    date: expect.any(String),
    authorId: fakeUser.id,
  })
  expect(MockSavePost).toHaveBeenCalledTimes(1)

  const postDate = new Date().getTime()
  const date = new Date(MockSavePost.mock.calls[0][0].date).getTime()
  expect(date).toBeGreaterThanOrEqual(preDate)
  expect(date).toBeLessThanOrEqual(postDate)

  waitFor(() => expect(MockRedirect).toHaveBeenCalledWith({to: '/'}, {}))
})

test('renders an error message from the server', async () => {
  const testError = 'test error'
  MockSavePost.mockRejectedValueOnce({data: {error: testError}})
  const {findByRole, submitButton} = renderEditor()

  fireEvent.click(submitButton)
  const postError = await findByRole('alert')
  expect(postError).toHaveTextContent(testError)
  expect(submitButton).not.toBeDisabled()
})
