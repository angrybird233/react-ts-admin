import React from 'react'
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
    .map(route => ({
      key: route.path!,
      label: route.meta!.title,
      icon: route.meta?.menuIcon,
      children: route.children ? convertRouteObjectsToMenuItems(route.children) : []
    }));
}






const useStyles = createStyles(({ css})=> {
  return {
    logoVertical: css`
      width: 180px;
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

const AsiderBar: React.FC = () => {
  const {styles } = useStyles()
  const { children } = authorizatedRoutes[0]
  const menus = getRouteMenus(children || [])
  const menuItems = convertRouteObjectsToMenuItems(menus)


  return (
    <Sider>
      <div className={styles.logoVertical}>React Admin</div>
      <Menu
        className={styles.menu}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        items={menuItems}
      />
    </Sider>
  )
}

export default AsiderBar