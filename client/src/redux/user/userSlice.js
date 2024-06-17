import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
    error: null,
    loading: false,
}


/* action : is what we get from server eg userInfo or error etc 
  * state: is like useState hook it looks for changes in variables*/
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart : (state) =>{
            state.loading = true;
        },

        signInSuccess : (state, action) => {
            state.current = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFailure : (state, action) => {
            state.error = action.payload;
            state.loading = false;
        }
    }
});

export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;

export default userSlice.reducer;
