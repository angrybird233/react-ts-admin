
import Tianditu from './tianditu.tsx';

export default {
  path: '/myapp/maps/tianditu', // （*必填）
  meta: {
    type: 3, // 1: 菜单  2: 视图  3: 菜单+视图
    title: '天地图', // 菜单以及权限验证所显示的中文名 （*必填）
    key: 'myapp_maps_tianditu',
    filePath: 'myapp/maps/tianditu', // 模块路径
    menuIcon: '', // 左侧菜单的icon
    description: '天地图', // 模块描述
    keepAlive: false, // 是否缓存
    requiresAuth: true, // 是否需要登录
    isShowMenu: true // 是否在菜单中显示
  },
  children: [],
  element: <Tianditu />
}
