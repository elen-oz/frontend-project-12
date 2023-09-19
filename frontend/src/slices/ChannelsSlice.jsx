import { createSlice } from '@reduxjs/toolkit';

export const ChannelsSlice = createSlice({
  name: 'channels',
  initialState: [],
  reducers: {
    setChannels: (state, action) => action.payload,
  },
});

export const { setChannels } = ChannelsSlice.actions;

export default ChannelsSlice.reducer;
