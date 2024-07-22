
import Myapp from './myapp.tsx';

const routeConfig: RouteObject = {
  path: '/myapp',
  meta: {
    type: 1, // 1 => 菜单 2 => 视图 3 => 菜单+视图
    title: '', // 菜单以及权限验证所显示的中文名 （*必填）
    key: 'myapp', 
    filePath: 'myapp', // 模块路径
    menuIcon: '', // 菜单以及权限验证所显示的 icon
    description: '', // 模块描述
    requiresAuth: false, // 是否需要权限验证
    isShowMenu: false // 是否在菜单中显示
  },
  children: [
  ],
  element: <Myapp />
}

export default routeConfig