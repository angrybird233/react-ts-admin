import React from "react";
import { Breadcrumb } from "antd";
import { useLocation } from "react-router-dom";
import authorizatedRoutes from '@/router/router-guard';

interface crubItem {
  path?: string;
  title?: string;
  children?: crubItem[];
}


/**
 * @description 筛选有title的菜单
 * @param routes  RouteObject[]
 * @returns crubItem[]
 */
const fiterRouteItems = (routes: RouteObject[]) => {
  const routeItems = routes.filter((item: RouteObject) => {
    if (item.children && item.children.length) {
      item.children = fiterRouteItems(item.children)
    }
    if (item.meta && item.meta.title) {
      return item
    }
  })
  return routeItems.map(item => item)
}

const convertRouteObjectsToCrumbItems = (routes: RouteObject[]): crubItem[] => {
  return routes.map(item => {
    if (item.children && item.children.length) {
      item.children = convertRouteObjectsToCrumbItems(item.children)
    }
    return {
      path: item.path,
      title: item.meta?.title,
      children: item.children,
      element: item.element
    }
  })
}

const matchRoutes = (pathname: string, routes: crubItem[], crumbItems: crubItem[] = []): crubItem[] => {
  const flatRoutes = []
  
  routes.forEach((item: crubItem) => {
    flatRoutes.push(item)
    if (item.children && item.children.length) {
      
      // matchRoutes(pathname, item.children, crumbItems)
    }
    if (pathname.indexOf(item.path as string) > -1) {
      crumbItems.push(item)
    }
    
  })
  return crumbItems
}



const HeaderBreadcrumb: React.FC = () => {
  const { pathname } = useLocation()
  const { children } = authorizatedRoutes[0]
  const routes = fiterRouteItems(children || []);
  // console.log('routes', routes);
  
  const crumbRoutes = convertRouteObjectsToCrumbItems(routes);
  console.log('crumbRoutes',crumbRoutes);
  
  const breadcrumbItems = matchRoutes(pathname, crumbRoutes, [])
  console.log("breadcrumbItems", breadcrumbItems);

  return (
    <Breadcrumb items={[]} >
      {/* {breadcrumbItems.map((item: crubItem) => (
        <Breadcrumb.Item key={item.path}>{item.title}</Breadcrumb.Item>
      ))} */}
    </Breadcrumb>
  )
}

export default HeaderBreadcrumb;