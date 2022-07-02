import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export interface FormsState {
  items: [];
  title: string;
  buttons: Array<IButton>
}
export interface IButton {
  label: string;
  color: string;
}

const initialState: FormsState = {
  items: [],
  title: "",
  buttons: []
};

export const FormsSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<Array<any>>) => {
      // @ts-ignore
      state.items = action.payload;
    },
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setFormButtons: (state, action: PayloadAction<Array<IButton>>) => {
      state.buttons = action.payload;
    },
  },
});

export const { setItems, setTitle, setFormButtons } = FormsSlice.actions;

export const selectFormItems = (state: RootState) => state.forms.items;
export const selectFormTitle = (state: RootState) => state.forms.title;
export const selectFormButtons = (state: RootState) => state.forms.buttons;


export default FormsSlice.reducer;
