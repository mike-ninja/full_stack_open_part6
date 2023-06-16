import { useSelector, useDispatch } from "react-redux"
import { voteOf } from "../reducers/anecdoteReducer"

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
        .sort((a, b) => b.votes - a.votes)
    } else {
      return anecdotes
        .filter(anecdote => anecdote.content.indexOf(filter) !== -1)
        .sort((a, b) => b.votes - a.votes)
    }
  }) 

  console.log(anecdotes)
  return (
    <div>
      {anecdotes.map(anecdote =>
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          voteClick={() => 
            dispatch(voteOf(anecdote.id))
          }
        />
      )}
    </div>
  )
}

export default AnecdoteList
