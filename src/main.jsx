import { createRoot } from 'react-dom/client';
import React from 'react';
import {Provider} from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import store from './redux/store.js';
import './index.css'
import App from './App.jsx'

// Create a QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1, // Retry failed requests once
      staleTime: 30000, // Data is fresh for 30 seconds to align with polling
    },
  },
});

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Provider>
);