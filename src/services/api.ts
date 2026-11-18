import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

// Ready for future Node.js & Express backend integration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://api.bangalore-elite.in/v1';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Request Interceptor
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const token = localStorage.getItem('be_auth_token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError): Promise<never> => {
    return Promise.reject(error);
  }
);

interface ApiErrorData {
  message?: string;
}

// Response Interceptor
apiClient.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => response,
  (error: AxiosError<ApiErrorData>): Promise<never> => {
    // Standardized error handling for future API endpoints
    const message = error.response?.data?.message || error.message || 'An unexpected error occurred';
    console.warn('[API Client Notice]:', message);
    return Promise.reject(error);
  }
);

export default apiClient;
