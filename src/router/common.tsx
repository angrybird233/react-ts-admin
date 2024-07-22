
import {  Navigate  } from 'react-router-dom';

import Login from  '@/views/common/login/login.tsx'
import ForibiddenPage from "@/views/common/403/403.tsx";
import NotFindPage from "@/views/common/404/404.tsx";


const commonRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/login" />,
  },
  {
    path: '/login',
    element: <Login />,
    meta: {
      requiresAuth: false,
      title: '登录',
      key: 'login',
    }
  },
  {
    path: '/403',
    element: <ForibiddenPage />,
    meta: {
      requiresAuth: false,
      title: '无权限',
      key: '403',
    }
  },
  {
    path: '/404',
    element: <NotFindPage />,
    meta: {
      requiresAuth: false,
      title: '404',
      key: '404',
    }
  },
  {
    path: '*',
    element: <NotFindPage />,
    meta: {
      requiresAuth: false,
      title: '404',
      key: '404',
    }
  },
]

export default commonRoutes