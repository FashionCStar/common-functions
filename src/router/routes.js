// TODO:: separate route definitions by modules and just import here
// import routeModules from 'features/routes-index.js'
// import store from 'src/store'
// function authGuard (to, from, next) {
//   // console.log('to', store.getters['auth/token'])
//   // next()
//   if (LocalStorage.has('token')) {
//     // or however you store your logged in state
//     next() // allow to enter route
//   } else {
//     next('/login') // go to '/login';
//   }
// }
const routes = [
  {
    // path: '/',
    // component: () => import('pages/Home.vue')
    path: '/',
    name: 'Home',
    meta: {
      title: 'Seventh Root'
    },
    component: () => import('layouts/EmptyLayout.vue'),
    children: [
      {
        path: '/login',
        name: 'Login',
        meta: {
          title: 'Seventh Root Login'
        },
        component: () => import('pages/Authentication/login.vue')
      },
      {
        path: '/signup',
        name: 'Signup',
        meta: {
          title: 'Seventh Root Sign Up'
        },
        component: () => import('pages/Authentication/signup.vue')
      },
      {
        path: '/forgot-password',
        name: 'ForgotPassword',
        meta: {
          title: 'Forgot Password'
        },
        component: () => import('pages/Authentication/forgot-password.vue')
      },
      {
        path: '/reset-password',
        name: 'ResetPassword',
        meta: {
          title: 'Reset Password'
        },
        component: () => import('pages/Authentication/reset-password.vue'),
        props: (route) => ({ query: route.query.token })
      },
      {
        path: '/confirm-user',
        name: 'ConfirmUser',
        meta: {
          title: 'Confirm User'
        },
        component: () => import('pages/Authentication/confirm-user.vue'),
        props: (route) => ({ query: route.query.token })
      },
      {
        path: '/dashboard',
        name: 'Dashboard',
        meta: {
          title: 'Dashboard',
          needAuth: true
        },
        component: () => import('layouts/MyLayout.vue'),
        children: [
          { path: '/', component: () => import('pages/Dashboard/Index.vue') },
          {
            path: 'my-profile',
            name: 'MyProfile',
            meta: {
              title: 'Profile'
            },
            component: () => import('pages/Authentication/profile.vue')
          },
          {
            path: 'buyers',
            name: 'Buyers',
            meta: {
              title: 'Buyers'
            },
            component: () => import('pages/Dashboard/Admin/buyer/list.vue')
          },
          {
            path: 'buyers/new',
            name: 'NewBuyer',
            component: () => import('pages/Dashboard/Admin/buyer/detail.vue'),
            meta: {
              title: 'Create New Buyer'
            }
          },
          {
            path: 'buyers/:id/detail',
            name: 'BuyerDetail',
            component: () => import('pages/Dashboard/Admin/buyer/detail.vue'),
            meta: {
              title: 'Buyer Detail'
            }
          },
          {
            path: 'sellers',
            name: 'Sellers',
            meta: {
              title: 'Sellers'
            },
            component: () => import('pages/Dashboard/Admin/seller/list.vue')
          },
          {
            path: 'sellers/new',
            name: 'New Seller',
            component: () => import('pages/Dashboard/Admin/seller/detail.vue'),
            meta: {
              title: 'Create New Seller'
            }
          },
          {
            path: 'sellers/:id/detail',
            name: 'SellerDetail',
            component: () => import('pages/Dashboard/Admin/seller/detail.vue'),
            meta: {
              title: 'Seller Detail'
            }
          },
          {
            path: 'scheduling',
            meta: {
              title: 'Scheduling'
            },
            component: () => import('pages/Dashboard/Admin/scheduling.vue')
          },
          {
            path: 'dialog-sample',
            meta: {
              title: 'Form in Dialog sample'
            },
            component: () => import('pages/ComponentSamples/Samples.vue')
          }
        ]
      }
    ]
  }
  // add other routes
  // ...Object.keys(routeModules).map(v => routeModules[v])
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
