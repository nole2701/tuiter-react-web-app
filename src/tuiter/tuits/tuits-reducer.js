import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa-icon.png",
   };
   
   const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
   }
   


const tuitsSlice = createSlice({
 name: 'tuits',
 initialState: tuits,

 reducers: {
    deleteTuit(state, action) {
        const index = state
           .findIndex(tuit =>
              tuit._id === action.payload);
        state.splice(index, 1);
      },
   
    createTuit(state, action) {
        state.unshift({
          ...action.payload,
          ...templateTuit,
          _id: (new Date()).getTime(),
        })
      },
   
    toggleLike(state, action) {
        // console.log("LIKE PRESSED");
        const tuit = state.find((tuit) =>
            tuit._id === action.payload._id)
        if (tuit === undefined) {
            return;
        }
        if (tuit.liked === true) {
            tuit.likes--;
        } else {
            tuit.likes++;
        }
        tuit.liked = !tuit.liked;
    },
 }
});
export const {toggleLike, createTuit, deleteTuit} = tuitsSlice.actions
export default tuitsSlice.reducer;