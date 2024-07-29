
import Maps from './maps.tsx';
import { CompassOutlined } from '@ant-design/icons';


export default {
  path: '/myapp/maps', // （*必填）
  meta: {
    type: 1, // 1: 菜单  2: 视图  3: 菜单+视图
    title: '地图', // 菜单以及权限验证所显示的中文名 （*必填）
    key: 'myapp_maps',
    filePath: 'myapp/maps', // 模块路径
    menuIcon: <CompassOutlined />, // 左侧菜单的icon
    description: '地图', // 模块描述
    keepAlive: false, // 是否缓存
    requiresAuth: true, // 是否需要登录
    isShowMenu: true // 是否在菜单中显示
  },
  children: [],
  element: <Maps />
}
