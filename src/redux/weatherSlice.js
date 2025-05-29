import { createSlice } from '@reduxjs/toolkit';

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    city: localStorage.getItem('lastCity') || 'Delhi',
    unit: 'metric',
  },
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
      localStorage.setItem('lastCity', action.payload);
    },
    setUnit: (state, action) => {
      state.unit = action.payload;
    },
  },
});

export const { setCity, setUnit } = weatherSlice.actions;
export default weatherSlice.reducer;