import { configureStore } from "@reduxjs/toolkit"
import skillReducer from "./redux/skills/skillSlice"
import modalReducer from "./redux/modal/modal"
import projectModalReducer from "./redux/projects/projectSlice"
export const store = configureStore({
  reducer: {
    skills: skillReducer,
    modal: modalReducer,
    projectModal: projectModalReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
