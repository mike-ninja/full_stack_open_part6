import { createSlice } from '@reduxjs/toolkit'

const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState: [],
  reducers: {
    newAnecdote(state, action) {
      state.push(action.payload)
    },
    voteOf(state, action) {
      const id = action.payload
      const anecdoteToChange = state.find(a => a.id === id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }
      return state.map(note =>
        note.id !== id ? note : changedAnecdote
      )
    },
    setAnecdotes(state, action) {
      state = action.payload
      return state
    }
  }
})

export const { newAnecdote, voteOf, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer
