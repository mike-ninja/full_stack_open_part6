import { useDispatch } from "react-redux";

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch({ 
      type: 'anecdote/newAnecdote', 
      payload: content 
    })
    dispatch({ 
      type: 'notification/setNotification', 
      payload: `New anecdote added: ${content}`
    })
    setTimeout(() => {
      dispatch({ 
        type: 'notification/removeNotification', 
      })
    }, 5000)
  }

  return (
    <div>
      <h2>Create New</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
