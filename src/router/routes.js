// TODO:: separate route definitions by modules and just import here
import routeModules from 'features/routes-index.js'
const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'Take Charge NXT'
    },
    component: () => import('pages/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: 'Depo AI Login'
    },
    component: () => import('pages/Authentication/login.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    meta: {
      title: 'Depo AI Sign Up'
    },
    component: () => import('pages/Authentication/signup.vue')
  },
  {
    path: '/dashboard',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Dashboard/Index.vue') },
    ]
  },
  // add other routes
  ...Object.keys(routeModules).map(v => routeModules[v])
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
