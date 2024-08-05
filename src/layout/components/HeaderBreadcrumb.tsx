import React from "react";
import { Breadcrumb,  } from "antd";
import { useLocation, Link } from "react-router-dom";
import type {BreadcrumbItemProps} from 'antd'
import authorizatedRoutes from '@/router/router-guard';

type BreadcrumbSeparatorType = { type: 'separator'; separator?: React.ReactNode; };
type BreadcrumbItemType =  { 
  key?: React.Key; 
  href?: string; 
  path?: string; 
  title?: React.ReactNode; 
  breadcrumbName?: string; 
  menu?: BreadcrumbItemProps['menu']; 
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLSpanElement>; 
  children?: Omit<BreadcrumbItemType, 'children'>[]; };
type crubItem = Partial<BreadcrumbItemType & BreadcrumbSeparatorType>;


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
      title: item.meta?.title || "",
      ...item
    }
  })
}

const matchRoutes = (pathname: string, routes: crubItem[], crumbItems: crubItem[] = []): crubItem[] => {
  const flatRoutes = []
  
  routes.forEach((item: crubItem) => {
    flatRoutes.push(item)
    if (item.children && item.children.length) {
      matchRoutes(pathname, item.children, crumbItems)
    }
    if (pathname.indexOf(item.path as string) > -1) {
      crumbItems.unshift(item)
    }
    
  })
  return crumbItems
}

const itemRender = ( currentRoute: crubItem, _params: unknown, items: crubItem[], paths: string[] ): React.ReactNode => {
  const isLast = currentRoute?.path === items[items.length - 1]?.path;
  return isLast ? (
    <span>{currentRoute.title}</span>
  ) : (
    <Link to={`/${paths.join("/")}`}>{currentRoute.title}</Link>
  );
  

}



const HeaderBreadcrumb: React.FC = () => {
  const { pathname } = useLocation()
  const { children } = authorizatedRoutes[0]
  const routes = fiterRouteItems(children || []);
  
  const crumbRoutes = convertRouteObjectsToCrumbItems(routes);
  const breadcrumbItems = matchRoutes(pathname, crumbRoutes, [])

  return (
    <Breadcrumb items={breadcrumbItems} itemRender={itemRender} />
  )
}

export default HeaderBreadcrumb;