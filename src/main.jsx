import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ThemeProvider, createTheme} from '@mui/material'
import { Auth } from '@supabase/auth-ui-react'
import { AuthProvider } from './store/authProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider> 
    <ThemeProvider theme={createTheme()}>
      <App />
    </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
)