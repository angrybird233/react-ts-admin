import { createBrowserRouter  } from 'react-router-dom';
// import myappRoutes from './myapp'
import commonRoutes from './common'
import authorizatedRoutes from './router-guard';



const routes: RouteObject[] = [
  ...commonRoutes,
  ...authorizatedRoutes,
]
const router = createBrowserRouter(routes)
console.log('router', router);

 export default router