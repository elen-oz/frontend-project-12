import { createSlice } from '@reduxjs/toolkit';

export const MessagesSlice = createSlice({
  name: 'messages',
  initialState: [],
  reducers: {
    setMessages: (state, action) => action.payload,
  },
});

export const { setMessages } = MessagesSlice.actions;

export default MessagesSlice.reducer;
