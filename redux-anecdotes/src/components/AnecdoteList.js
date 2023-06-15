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
  const anecdotes = useSelector(state => state.sort(
    (a, b) => b.votes - a.votes)
  )
  const dispatch = useDispatch()

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
