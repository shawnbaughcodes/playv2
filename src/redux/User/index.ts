import { createSlice } from '@reduxjs/toolkit';

const user = createSlice({
  name: 'user',
  initialState: {
    name: '',
    email: '',
    sports: [],
    friends: [],
    games: [],
  },
  reducers: {},
});

export default user.reducer;
