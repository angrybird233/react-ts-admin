import { RouterProvider } from 'react-router-dom'
import React from 'react';
import './App.css'
import router from '@/router/index'
import { ConfigProvider } from 'antd';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          // colorPrimary: '#101e52', // Seed Token，影响范围大

        },
      }}
    >
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </ConfigProvider>

  )
}

export default App
