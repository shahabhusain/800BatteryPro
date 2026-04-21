import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,  // Start with null instead of accessing localStorage directly
    token: null,
    isAuthenticated: false,
    loading: false,
    error: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        },
        loginSuccess: (state, action) => {
            state.user = action.payload.user
            state.token = action.payload.token
            state.isAuthenticated = true
            state.error = null
            state.loading = false
            
            // Only access localStorage in browser
            if (typeof window !== 'undefined') {
                localStorage.setItem("user", JSON.stringify(action.payload.user))
                localStorage.setItem("token", action.payload.token)
            }
        },
        logout: (state) => {
            state.user = null
            state.token = null
            state.isAuthenticated = false
            state.error = null
            state.loading = false
            
            if (typeof window !== 'undefined') {
                localStorage.removeItem('user')
                localStorage.removeItem('token')
            }
        },
        clearError: (state) => {
            state.error = null
        },
        // ADD THIS - hydrateAuth reducer
        hydrateAuth: (state, action) => {
            if (typeof window !== 'undefined' && action.payload) {
                state.user = action.payload.user
                state.token = action.payload.token
                state.isAuthenticated = !!action.payload.token
                state.loading = false
                state.error = null
            }
        }
    }
})

// Make sure to export hydrateAuth
export const { 
    setLoading, 
    setError, 
    loginSuccess, 
    logout, 
    clearError,
    hydrateAuth  // ← This must be exported
} = authSlice.actions

export default authSlice.reducer