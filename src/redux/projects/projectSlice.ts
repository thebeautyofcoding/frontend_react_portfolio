import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Card } from "./../../components/SkillItem/SkillItem"
// cardData to put in modal

const initialState: Card = {
  shortDescription: "",
  title: "",
  detailedDescription: "",
  id: "",
}
export const skillSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    updateProjectModalState: (state, action: PayloadAction<Card>) => {
      return { ...state, ...action.payload }
    },
  },
})

export const { updateProjectModalState } = skillSlice.actions

export default skillSlice.reducer
