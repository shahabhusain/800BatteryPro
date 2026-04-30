import axios from 'axios'

// Next.js uses NEXT_PUBLIC_ prefix for client-side env variables
const API_URL = process.env.NEXT_PUBLIC_API_URL

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add token to requests (client-side only)
api.interceptors.request.use((config) => {
  // Only access localStorage in browser
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
  }
  return config
})

// ✅ FIXED Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Only handle 401 if not already on login page
    if (error.response?.status === 401) {
      if (typeof window !== 'undefined') {
        // Check if we're not already on login page to prevent loops
        if (!window.location.pathname.includes('/login')) {
          localStorage.removeItem('token')
          localStorage.removeItem('user')
          window.location.href = '/login'
        }
      }
    }
    return Promise.reject(error)
  }
)

// Auth API
export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/signup', userData),
  getCurrentUser: () => api.get('/auth/profile'),
}

// Appointment API
export const appointmentAPI = {
  getAll: () => api.get('/get-all-second-appointment'),
  getById: (id) => api.get(`/${id}`),
  create: (data) => api.post('/create-second-appointment', data),
  delete: (id) => api.delete(`/delete-second-appointment/${id}`),
}

export default api