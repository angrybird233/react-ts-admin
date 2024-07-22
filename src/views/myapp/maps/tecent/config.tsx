
import Tecent from './tecent.tsx';

export default {
  path: '/myapp/maps/tecent', // （*必填）
  meta: {
    type: 3, // 1: 菜单  2: 视图  3: 菜单+视图
    title: '腾讯地图', // 菜单以及权限验证所显示的中文名 （*必填）
    key: 'myapp_maps_tecent',
    filePath: 'myapp/maps/tecent', // 模块路径
    menuIcon: '', // 左侧菜单的icon
    description: '腾讯地图', // 模块描述
    keepAlive: false, // 是否缓存
    requiresAuth: true, // 是否需要登录
    isShowMenu: true // 是否在菜单中显示
  },
  children: [],
  element: <Tecent />
}
