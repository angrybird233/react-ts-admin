import { createBrowserRouter, Navigate  } from 'react-router-dom';
import Login from  '@/views/common/login/login.tsx'
import ForibiddenPage from "@/views/common/403/403.tsx";
import NotFindPage from "@/views/common/404/404.tsx";


interface MetaProps {
  keepAlive?: boolean
  requiresAuth?: boolean
  title: string
  key?: string
}

interface RouteObject {
  path?: string
  element: React.ReactElement,
  children?: RouteObject[]
  meta?: MetaProps
  isLink?: string
  caseSensitive?: boolean
}


const routes: RouteObject[] = [
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
]

const router = createBrowserRouter(routes)

 export default router