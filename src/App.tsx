import { RouterProvider } from 'react-router-dom'
import React from 'react';
import './App.css'
import router from '@/router/index'
import { ConfigProvider } from 'antd';

function App() {
  return (
    <ConfigProvider
      theme={{
        // token: {
        //   colorPrimary: '#00b96b', // Seed Token，影响范围大
        //   borderRadius: 2,
        //   colorBgContainer: '#f6ffed',  // 派生变量，影响范围小
        // },
      }}
    >
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </ConfigProvider>

  )
}

export default App
