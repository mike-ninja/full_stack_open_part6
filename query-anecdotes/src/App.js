import { useQuery } from 'react-query'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { getAnecdotes, addAnecdote, updateAnecdote } from './request'

const App = () => {

  const handleVote = (anecdote) => {
    console.log('vote', anecdote.content)
  }

  const result = useQuery(
    'anecdotes', getAnecdotes,
    {
      refetchOnWindowFocus: false,
      retry: 1
    }
  )
  console.log(result)

  if (result.isLoading) {
    return (
      <div>
        Anecdote data is loading
      </div>
    )
  } else if (result.isError) {
    return (
      <div>
        Anecdote service is not available due to server problem
      </div>
    )
  }

  const anecdotes = result.data

  return (
    <div>
      <h3>Anecdote app</h3>

      <Notification />
      <AnecdoteForm />

      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
