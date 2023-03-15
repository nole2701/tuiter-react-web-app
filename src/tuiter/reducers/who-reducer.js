import { createSlice } from "@reduxjs/toolkit";
import whoArray from "../who-to-follow/who.json";

const whoSlice = createSlice({
 name: "who",
 initialState: whoArray
});

export default whoSlice.reducer;