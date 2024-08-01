import React from 'react'
import {useNavigate, useLocation  } from 'react-router-dom'
import {createStyles} from 'antd-style' 
import authorizatedRoutes from '@/router/router-guard'
import type { MenuProps } from 'antd';
import { Menu, Layout } from 'antd';
const { Sider } = Layout

type MenuItem = Required<MenuProps>['items'][number];

/**
 * @description 筛选路由菜单
 * @param menus  RouteObject[]
 * @returns RouteObject[]
 */
const getRouteMenus = (routes: RouteObject[]) => {
  routes = routes.filter((item:RouteObject) => {
    if(item.children && item.children.length){
      item.children = getRouteMenus(item.children)
    }
    if(item.meta && item.meta.isShowMenu && [1,3].includes(item.meta.type as number) && item.meta.title) {
      return item
    }
  })
  return routes
}

/**
 * @description: 将路由对象转换为菜单对象
 * @param routes  路由对象数组 RouteObject[] 
 * @returns  MenuItem[] 菜单对象数组
 */
const convertRouteObjectsToMenuItems = (routes: RouteObject[]): MenuItem[] => {
  return routes
    .map(route => {
      if(route.children && route.children.length){
        return {
          key: route.path!,
          label: route.meta!.title,
          icon: route.meta?.menuIcon,
          children: convertRouteObjectsToMenuItems(route.children) || [] 
        }
      }else{
        return {
          key: route.path!,
          label: route.meta!.title,
          icon: route.meta?.menuIcon
        }
      }
    });
}






const useStyles = createStyles(({css})=> {
  return {
    logoVertical: css`
      width: 100%;
      height: 60px;
      text-align: center;
      line-height: 60px;
      color: #fff;
      font-size: 20px;
      margin: 10px auto;
    `,
    menu: css`
      width: 100%;
      height: calc(100vh - 100px);
      color: #fff;
    }`,
  }
})

interface AsiderBarProps {
  collapsed: boolean
}

const AsiderBar: React.FC<AsiderBarProps> = ({collapsed}) => {
  const {styles } = useStyles()
  const navigate = useNavigate()
  const location = useLocation()
  const path = location.pathname
  const { children } = authorizatedRoutes[0]
  const menus = getRouteMenus(children || [])
  const menuItems = convertRouteObjectsToMenuItems(menus)
  const defaultOpenKeys: string[] = [];
  const defaultSelectedKeys :string[] = [];


  const clickMenuItem = (e: { key: string }) => {
    navigate(e.key)
  }
  
  const findDefaultKeys = (path: string, menuItems: MenuItem[]) => {
    menuItems.forEach((item: MenuItem) => {
      if (item && item.key === path) {
        defaultSelectedKeys.push(item.key);
      }
      if(item && path.indexOf(item.key as string) > -1) {
        defaultOpenKeys.push(item.key as string);
      }
      // 如果当前菜单项有子菜单，递归查找子菜单
      if (item && ('children' in item) && Array.isArray(item.children) &&item.children.length) {
        findDefaultKeys(path, item.children);
      }
    });
  }

  findDefaultKeys(path, menuItems)
  
  

  return (
    <Sider  collapsed={collapsed}>
      <div className={styles.logoVertical}>{collapsed ? 'A':'React Admin'}</div>
      <Menu
        className={styles.menu}
        defaultSelectedKeys={defaultSelectedKeys}
        defaultOpenKeys={defaultOpenKeys}
        mode="inline"
        theme="dark"
        items={menuItems}
        onClick={clickMenuItem}
      />
    </Sider>
  )
}

export default AsiderBar