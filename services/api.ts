import axios from 'axios';
import { 
  ABOUT_DATA, 
  FULL_TIMELINE, 
  SKILLS_MATRIX, 
  ALL_SERVICES, 
  ALL_SOLUTIONS, 
  SHORTS_GALLERY, 
  EXTENDED_PROJECTS,
  SERVICES
} from '../constants';

// Configure your backend URL here
const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add JWT token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('adminToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// --- Generic Fetch with Fallback ---
// This helper tries to fetch from API, but returns constant data if API fails/is offline
async function fetchWithFallback<T>(endpoint: string, fallbackData: T): Promise<T> {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.warn(`API ${endpoint} unavailable, using static fallback.`);
    return fallbackData;
  }
}

// --- Public Data APIs ---

export const getAboutData = (mode: string) => fetchWithFallback(`/about/${mode}`, ABOUT_DATA[mode as keyof typeof ABOUT_DATA]);
export const getTimeline = () => fetchWithFallback('/about/timeline', FULL_TIMELINE);
export const getSkills = (mode: string) => fetchWithFallback(`/about/skills/${mode}`, SKILLS_MATRIX[mode as keyof typeof SKILLS_MATRIX]);

export const getServices = (mode: string) => fetchWithFallback(`/services/${mode}`, ALL_SERVICES[mode as keyof typeof ALL_SERVICES]);

export const getSolutions = (mode: string) => fetchWithFallback(`/solutions/${mode}`, ALL_SOLUTIONS[mode as keyof typeof ALL_SOLUTIONS]);

export const getShorts = () => fetchWithFallback('/shorts', SHORTS_GALLERY);

export const getProjects = () => fetchWithFallback('/projects', EXTENDED_PROJECTS);

// --- Contact API ---

export const sendContactMessage = async (data: any) => {
  try {
    const response = await api.post('/contact', data);
    return response.data;
  } catch (error) {
    console.error('Contact submission error:', error);
    // Mock success if backend is down for demo purposes
    return new Promise((resolve) => {
        setTimeout(() => resolve({ success: true, message: "Mock Sent" }), 1000);
    });
  }
};

// --- Admin/Auth APIs ---

export const loginAdmin = async (credentials: any) => {
  // For demo purposes, simple check if backend fails
  try {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  } catch (error) {
    // Fallback Mock Login for Demo
    if (credentials.email === 'admin@rudra.com' && credentials.password === 'admin123') {
        return { token: 'mock-jwt-token-12345', user: { name: 'Rudra Admin' }};
    }
    throw error;
  }
};

export const getDashboardStats = async () => {
  try {
    const response = await api.get('/admin/stats');
    return response.data;
  } catch (error) {
    return {
      visits: 12500,
      messages: 45,
      projects: 12,
      conversionRate: '3.2%'
    };
  }
};

export const getMessages = async () => {
  try {
    const response = await api.get('/admin/messages');
    return response.data;
  } catch (error) {
    // Mock Messages
    return [
      { _id: '1', name: 'John Doe', email: 'john@tech.com', service: 'Full Stack', budget: '$5k+', details: 'Need a SaaS platform.', date: new Date().toISOString() },
      { _id: '2', name: 'Sarah Lee', email: 'sarah@vlog.com', service: 'Video Editing', budget: '$1k-3k', details: 'Editing for YouTube channel.', date: new Date(Date.now() - 86400000).toISOString() },
    ];
  }
};

export default api;
