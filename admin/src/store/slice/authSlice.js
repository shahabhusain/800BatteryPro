import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`;

// Create axios instance with default config
const api = axios.create({
  baseURL: API_URL,
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Async thunks for user management
export const getAllUsers = createAsyncThunk(
  'auth/getAllUsers',
  async ({ page = 1, limit = 10, search = '', role = '' }, { rejectWithValue }) => {
    try {
      const response = await api.get(`/auth/get-all`, {
        params: { page, limit, search, role }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch users');
    }
  }
);

export const updateUserRole = createAsyncThunk(
  'auth/updateUserRole',
  async ({ userId, role }, { rejectWithValue }) => {
    try {
      const response = await api.put(`/auth/update-role/${userId}`, { role });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to update user role');
    }
  }
);

export const deleteUser = createAsyncThunk(
  'auth/deleteUser',
  async ({ userId }, { rejectWithValue }) => {
    try {
      const response = await api.delete(`/auth/delete-user/${userId}`);
      return { ...response.data, userId };
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to delete user');
    }
  }
);

export const getProfile = createAsyncThunk(
  'auth/getProfile',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/auth/profile');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to get profile');
    }
  }
);

export const updateProfile = createAsyncThunk(
  'auth/updateProfile',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await api.put('/auth/update', userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to update profile');
    }
  }
);

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  // User management state
  users: [],
  pagination: {
    currentPage: 1,
    totalPages: 1,
    totalUsers: 0,
    limit: 10
  },
  updatingRole: false,
  deletingUser: false,
  userActionSuccess: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.error = null;
      state.loading = false;
      state.userActionSuccess = null;
      
      // Only access localStorage in browser
      if (typeof window !== 'undefined') {
        localStorage.setItem("user", JSON.stringify(action.payload.user));
        localStorage.setItem("token", action.payload.token);
      }
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
      state.loading = false;
      state.users = [];
      state.pagination = initialState.pagination;
      state.userActionSuccess = null;
      
      if (typeof window !== 'undefined') {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
      }
    },
    clearError: (state) => {
      state.error = null;
    },
    clearUserActionSuccess: (state) => {
      state.userActionSuccess = null;
    },
    hydrateAuth: (state, action) => {
      if (typeof window !== 'undefined' && action.payload) {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = !!action.payload.token;
        state.loading = false;
        state.error = null;
      }
    },
    setCurrentPage: (state, action) => {
      state.pagination.currentPage = action.payload;
    },
    clearUsersState: (state) => {
      state.users = [];
      state.pagination = initialState.pagination;
      state.userActionSuccess = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Get All Users
      .addCase(getAllUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.users;
        state.pagination = action.payload.pagination;
        state.error = null;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Update User Role
      .addCase(updateUserRole.pending, (state) => {
        state.updatingRole = true;
        state.error = null;
        state.userActionSuccess = null;
      })
      .addCase(updateUserRole.fulfilled, (state, action) => {
        state.updatingRole = false;
        state.userActionSuccess = action.payload.message;
        // Update the user in the users array if it exists
        if (state.users.length > 0 && action.payload.user) {
          const index = state.users.findIndex(u => u.id === action.payload.user.id);
          if (index !== -1) {
            state.users[index] = action.payload.user;
          }
        }
        // Update current user if it's the same user
        if (state.user && state.user.id === action.payload.user.id) {
          state.user = action.payload.user;
          if (typeof window !== 'undefined') {
            localStorage.setItem("user", JSON.stringify(state.user));
          }
        }
        state.error = null;
      })
      .addCase(updateUserRole.rejected, (state, action) => {
        state.updatingRole = false;
        state.error = action.payload;
      })
      
      // Delete User
      .addCase(deleteUser.pending, (state) => {
        state.deletingUser = true;
        state.error = null;
        state.userActionSuccess = null;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.deletingUser = false;
        state.userActionSuccess = action.payload.message;
        // Remove user from users array
        state.users = state.users.filter(u => u.id !== action.payload.userId);
        // Update total users count
        if (state.pagination.totalUsers > 0) {
          state.pagination.totalUsers -= 1;
        }
        state.error = null;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.deletingUser = false;
        state.error = action.payload;
      })
      
      // Get Profile
      .addCase(getProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        if (typeof window !== 'undefined') {
          localStorage.setItem("user", JSON.stringify(action.payload));
        }
        state.error = null;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        if (action.payload === 'Unauthorized') {
          state.isAuthenticated = false;
          state.user = null;
          state.token = null;
        }
      })
      
      // Update Profile
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        if (typeof window !== 'undefined') {
          localStorage.setItem("user", JSON.stringify(action.payload));
        }
        state.userActionSuccess = 'Profile updated successfully';
        state.error = null;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

// Export actions
export const { 
  setLoading, 
  setError, 
  loginSuccess, 
  logout, 
  clearError,
  hydrateAuth,
  clearUserActionSuccess,
  setCurrentPage,
  clearUsersState
} = authSlice.actions;

// Export selectors
export const selectAllUsers = (state) => state.auth.users;
export const selectPagination = (state) => state.auth.pagination;
export const selectUserManagementLoading = (state) => state.auth.loading;
export const selectUpdatingRole = (state) => state.auth.updatingRole;
export const selectDeletingUser = (state) => state.auth.deletingUser;
export const selectUserActionSuccess = (state) => state.auth.userActionSuccess;

export default authSlice.reducer;