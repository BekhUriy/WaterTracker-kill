import { createSlice } from "@reduxjs/toolkit";

const settingModalSlicer = createSlice({
    name: 'settingModal',
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

export const { modalOpen, modalClose, modalToggle } = settingModalSlicer.actions;
export const selectIsModalOpen = state => state.settingModal.isOpen;
export default settingModalSlicer.reducer;
