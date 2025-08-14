import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface BlogState {
  postID: string
}

const initialState: BlogState = {
  postID: ''
}

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    startEditPost: (state, action: PayloadAction<string>) => {
      state.postID = action.payload
    },
    cancelEditPost: (state) => {
      state.postID = ''
    }
  }
})

const blogReducer = blogSlice.reducer

export const { cancelEditPost, startEditPost } = blogSlice.actions

export default blogReducer
