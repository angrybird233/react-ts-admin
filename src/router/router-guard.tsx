

import myappRoutes from "./myapp"


/**
 * 获取用户权限路由
 * @param routes 前端路由
 * @param backEndRoutes 后端路由path数组
 * @returns 过滤后已授权的路由
 */
const getAuthorizatedRoutes = (routes: RouteObject[], backEndRoutes: string[]) : RouteObject[] => {
  routes = routes.filter((route: RouteObject) => {
    if(backEndRoutes.includes(route.path as string) && !route.meta?.requiresAuth){
      if(route.children && route.children.length){
        getAuthorizatedRoutes(route.children, backEndRoutes)
      }
      return route
    }
  })
  return routes
}



// 后端保存的路由权限信息
const permission: string = "*"
const backEndRoutes: string[] = permission === '*'? [] : permission.split(',') 

let myappChildren: RouteObject[] = myappRoutes[0]?.children ?? [];
if(backEndRoutes.length){
  myappChildren = getAuthorizatedRoutes(myappChildren, backEndRoutes);
}
const authorizatedRoutes: RouteObject[] = [
  {
    path: '/myapp',
    children: myappChildren
  }
]



export default authorizatedRoutes