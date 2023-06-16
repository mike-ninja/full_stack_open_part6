import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: null,
  reducers: {
    setNotification(state, action) {
      const message = action.payload
      state = message
      return state
    },
    removeNotification(state) {
      state = null
      return state
    }
  }
})

export const { setNotification } = notificationSlice.actions
export default notificationSlice.reducer
