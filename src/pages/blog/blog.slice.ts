import { createSlice } from "@reduxjs/toolkit"


interface BlogState {
  postID : string
}

const initialState : BlogState ={
  postID : ''
}

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers:{}
})


const blogReducer = blogSlice.reducer

export default blogReducer