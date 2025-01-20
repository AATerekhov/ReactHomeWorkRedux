import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    users: [],
    login: null
  };

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getByEmail: (state, action) => {
            const result = state.users.find(u => {
                return u.email === action.payload.email
            });
              
            if (result !== null && result.password === action.payload.password) {
                state.login = result; 
            } else {
                state.login = null;
            }                           
        },
        addUser: (state, action) => {
            state.users = [...state.users, action.payload];
        }
    }
});

export const { getByEmail, addUser } = usersSlice.actions;
export default usersSlice.reducer;