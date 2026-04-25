// app/store/slices/appointmentSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

const initialState = {
  formData: {
    email: '',      // Required field
    location: '',   // Required field  
    selectService: '' // Required field
  },
  loading: false,
  error: null,
  success: false,
  showSuccessPopup: false,
};

// Async thunk for creating second appointment
export const submitAppointment = createAsyncThunk(
  'appointment/submitAppointment',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/create-second-appointment`, 
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      
      // Show success message from backend
      toast.success(response.data.message || 'Appointment created successfully! Sales team will contact you soon!');
      return response.data;
    } catch (error) {
      // Handle validation errors
      if (error.response?.status === 404) {
        toast.error(error.response?.data?.message || 'Invalid fields provided');
        return rejectWithValue(error.response?.data?.message);
      } else if (error.response?.data?.message) {
        toast.error(error.response.data.message);
        return rejectWithValue(error.response.data.message);
      } else {
        const errorMessage = error.message || 'Failed to book appointment';
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
        email: '',
        location: '',
        selectService: ''
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
        state.showSuccessPopup = true;
        // Reset form after successful submission
        state.formData = {
          email: '',
          location: '',
          selectService: ''
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