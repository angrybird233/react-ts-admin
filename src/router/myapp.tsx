
import { Navigate } from 'react-router-dom';
const routeConfigModule =  import.meta.glob('@/views/myapp/**/config.tsx', { eager: true });

interface RouteModule {
  default: RouteObject;
}

const routeConfigList = Object.keys(routeConfigModule).map((key: string) => {
  const routeModule = routeConfigModule[key] as RouteModule;
  return routeModule.default;
})
/**
 * 构建路由树
 * @param routes 扁平的路由配置数组
 * @returns 树形结构数组
 */
const buildTree =(routes: RouteObject[]) =>{
  const tree: RouteObject[] = [];
  const routeMap = new Map();
  // 创建一个映射
  routes.forEach(route => {
    routeMap.set(route.path, { ...route, children: [] });
  });

  routes.forEach((route) => {
      const pathSegments = (route as { path: string }).path.split('/').filter(segment => segment);
      if (pathSegments.length === 1) {
          tree.push(routeMap.get(route.path));
      } else {
          const parentPath = '/' + pathSegments.slice(0, -1).join('/');
          if (routeMap.has(parentPath)) {
              routeMap.get(parentPath).children.push(routeMap.get(route.path));
          }
      }
  });

  return tree;
}

/**
 * 设置路由重定向
 * @param routes 
 * @returns 
 */
const setRedirectRoute = (routes: RouteObject[]) => {
  routes.forEach((route) => {
    if (route.children && route.children.length) {
      const { path } = route.children[0];
      const redirectRoute = {
        path: route.path,
        element: <Navigate to={path as string} />
      }
      route.children.unshift(redirectRoute);
      setRedirectRoute(route.children);
    }
  });
  return routes
}




let myappRoutes = buildTree(routeConfigList);
myappRoutes = setRedirectRoute(myappRoutes);


export default myappRoutes