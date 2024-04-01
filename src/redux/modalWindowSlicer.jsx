import { createSlice } from "@reduxjs/toolkit";

const modalWindowSlicer = createSlice({
    name: 'modalWindow',
    initialState: {
        isOpen: false
    },
    reducers: {
        modalOpen: state => {
            state.isOpen = true;
        },
        modalClose: state => {
            state.isOpen = false;
        },
        modalToggle: state => {
            state.isOpen = !state.isOpen;
        },
    }
});

export const { modalOpen, modalClose, modalToggle } = modalWindowSlicer.actions;
export const selectIsModalOpen = state => state.modalWindow.isOpen;
export default modalWindowSlicer.reducer;
