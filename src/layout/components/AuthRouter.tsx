import React from 'react'
import { matchRoutes, useLocation, Navigate, Outlet  } from 'react-router-dom'
import routes from '@/router/myapp'
const getLoginStatus = () => {
  return true
}

export const RouterAuth: React.FC = () => {
  const isLogin  = getLoginStatus()
  const location = useLocation()
  // 匹配当前层级路由树
  const mathchs = matchRoutes(routes, location)
  // matchs是返回的层级路由， 第一个元素为根路由 最后一个元素为当前路由
  const isNeedLogin = mathchs?.some((item) => {
    const route: RouteObject = item.route
    // 没有配置meta字段直接返回
    if (!route.meta) return false
    // 返回是否需要登录
    return route.meta.requiresAuth
  })

  if (isNeedLogin && !isLogin) {
    // 跳转到登录页面，state保存原路由
    return <Navigate to='/login' state={{ from: location.pathname }} replace />
  }

  return <Outlet />
}