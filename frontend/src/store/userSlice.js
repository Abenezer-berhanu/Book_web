import { createSlice,} from "@reduxjs/toolkit";

const initialState = {
    isActive : false
}

const userSlice = createSlice({
    name : 'loggedIn',
    initialState,
    reducers : {
        login (state) {
            state.isActive = true
        },
        logout(state) {
            state.isActive = false
        }
    }
})

export default userSlice.reducer
export const {login, logout} = userSlice.actions
