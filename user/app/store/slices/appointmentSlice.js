// app/store/slices/appointmentSlice.js (updated)
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

const initialState = {
  formData: {
    name: '',      // Matches backend: name
    email: '',
    phone: '',
    message: '',   // Matches backend: message
    selectService:''
  },
  loading: false,
  error: null,
  success: false,
  showSuccessPopup: false, // Add this
};

// Async thunk for submitting appointment with axios
// appointmentSlice.js - Update the submitAppointment thunk
export const submitAppointment = createAsyncThunk(
  'appointment/submitAppointment',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:4000/api/appointment', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      // Show success message from backend
      toast.success(response.data.message || 'Appointment booked successfully!');
      return response.data;
    } catch (error) {
      // Handle validation errors from backend
      if (error.response?.data?.errors) {
        // Multiple validation errors
        error.response.data.errors.forEach(err => {
          toast.error(err);
        });
        return rejectWithValue(error.response.data.errors);
      } else if (error.response?.data?.message) {
        // Single error message
        toast.error(error.response.data.message);
        return rejectWithValue(error.response.data.message);
      } else {
        const errorMessage = error.response?.data?.error || error.message || 'Failed to book appointment';
        toast.error(errorMessage);
        return rejectWithValue(errorMessage);
      }
    }
  }
);

const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {
    updateFormField: (state, action) => {
      const { field, value } = action.payload;
      state.formData[field] = value;
    },
    resetForm: (state) => {
      state.formData = {
        name: '',
        email: '',
        phone: '',
        message: '',
        selectService:''
      };
      state.success = false;
      state.error = null;
      state.loading = false;
      state.showSuccessPopup = false;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearSuccess: (state) => {
      state.success = false;
    },
    hideSuccessPopup: (state) => {
      state.showSuccessPopup = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitAppointment.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
        state.showSuccessPopup = false;
      })
      .addCase(submitAppointment.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.showSuccessPopup = true; // Show popup on success
        // Reset form after successful submission
        state.formData = {
          name: '',
          email: '',
          phone: '',
          message: '',
          selectService:''
        };
      })
      .addCase(submitAppointment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
        state.showSuccessPopup = false;
      });
  },
});

export const { 
  updateFormField, 
  resetForm, 
  clearError, 
  clearSuccess,
  hideSuccessPopup 
} = appointmentSlice.actions;

export const selectFormData = (state) => state.appointment.formData;
export const selectLoading = (state) => state.appointment.loading;
export const selectError = (state) => state.appointment.error;
export const selectSuccess = (state) => state.appointment.success;
export const selectShowSuccessPopup = (state) => state.appointment.showSuccessPopup;

export default appointmentSlice.reducer;