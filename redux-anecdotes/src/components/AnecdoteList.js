import { useSelector, useDispatch } from "react-redux"

const Anecdote = ({ anecdote, voteClick }) => {
  return (
    <div>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes} 
        <button onClick={voteClick}>vote</button>
      </div>
    </div>
  )
}

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(({ filter, anecdotes }) => {
    if ( filter === '' ) {
      return anecdotes
        .map(anecdote => anecdote)
        .sort((a, b) => b.votes - a.votes)
    } else {
      return anecdotes
        .filter(anecdote => anecdote.content.indexOf(filter) !== -1)
        .sort((a, b) => b.votes - a.votes)
    }
  }) 

  const vote = (anecdote) => {
    console.log(anecdote)
    dispatch({ 
      type: 'anecdote/voteOf', 
      payload: anecdote.id 
    })
    dispatch({ 
      type: 'notification/setNotification', 
      payload: `You voted for: ${anecdote.content}`
    })
    setTimeout(() => {
      dispatch({ 
        type: 'notification/setNotification', 
        payload: null
      })
    }, 5000)
  }

  return (
    <div>
      {anecdotes.map(anecdote =>
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          voteClick={() => vote(anecdote)}
        />
      )}
    </div>
  )
}

export default AnecdoteList
