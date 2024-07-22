
// 声明页面额外属性
declare interface MetaProps {
  type?: number;
  title: string;
  description?: string;
  key?: string;
  filePath?: string;
  requiresAuth?: boolean;
  menuIcon?: string;
  keepAlive?: boolean;
  isShowMenu?: boolean;
}

// 路由配置
declare interface RouteObject {
  path?: string;
  element?: React.ReactElement | null;
  children?: RouteObject[];
  meta?: MetaProps;
  isLink?: string;
  caseSensitive?: boolean;
  lazy?: LazyRouteFunction<RouteObject>;
}

