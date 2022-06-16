import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Card } from "../../components/SkillItem/SkillItem"
interface ModalState extends Card {
  isOpen?: boolean
}
const initialState = {
  isOpen: false,
  shortDescription: "",
  title: "",
  detailedDescription: "",
  id: "",
}

export const modalSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    toggleModal(state) {
      state.isOpen = !state.isOpen
    },
    updateModalState: (state, action: PayloadAction<ModalState>) => {
      return { ...state, ...action.payload }
    },
  },
})

export const { toggleModal, updateModalState } = modalSlice.actions

export default modalSlice.reducer
