import { createSlice } from "@reduxjs/toolkit";

// const initNav = [
//     {
//         _id: "1",
//         name: "Home",
//         active: false,
//     },
//     {
//         _id: "2",
//         name: "Explore",
//         active: true,
//     },
//     {
//         _id: "3",
//         name: "Notifications",
//         active: false,
//     },
//     {
//         _id: "4",
//         name: "Messages",
//         active: false,
//     },
//     {
//         _id: "5",
//         name: "Bookmarks",
//         active: false,
//     },
//     {
//         _id: "6",
//         name: "Lists",
//         active: false,
//     },
//     {
//         _id: "7",
//         name: "Profile",
//         active: false,
//     },
//     {
//         _id: "8",
//         name: "More",
//         active: false,
//     },
//    ];

const navSlice = createSlice({
 name: "nav",
 initialState: "Explore",

 reducers: {
    setNav: (state, action) => {
        console.log("navigation set to " + action.payload);
        // state.active = !state.active
        return action.payload;
    },
}
});
export const {setNav} = navSlice.actions
export default navSlice.reducer;