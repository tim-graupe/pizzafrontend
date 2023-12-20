import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  selectedOption: string;
}

const initialState: AppState = {
  selectedOption: 'option1',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setSelectedOption: (state, action: PayloadAction<string>) => {
      state.selectedOption = action.payload;
    },
  },
});

export const { setSelectedOption } = appSlice.actions;
export default appSlice.reducer;
