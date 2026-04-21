import axios from 'axios'

// Next.js uses NEXT_PUBLIC_ prefix for client-side env variables
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://qrc4cazbl9bza690von9ce2i.76.13.221.207.sslip.io/api'

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

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        window.location.href = '/login'
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
  getAll: () => api.get('/appointment/get-all'),
  getById: (id) => api.get(`/appointment/${id}`),
  create: (data) => api.post('/appointment/', data),
  update: (id, data) => api.put(`/appointment/${id}`, data),
  delete: (id) => api.delete(`/appointment/delete/${id}`),
}

export default api