import axios from 'axios'
const baseUrl = 'http://localhost:3001/anecdotes'

export const getAnecdotes = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export const createAnecdotes = async (content) => {
  const newObject = { content, votes: 0 }
  const response = await axios.post(baseUrl, newObject)
  console.log(response.data)
  return response.data
}

export const updateAnecdotes = async (id, newObject) => {
  const response = await axios.put(`${baseUrl}/${id}`, newObject)
  return response.data
}

export default { getAnecdotes, createAnecdotes, updateAnecdotes }
