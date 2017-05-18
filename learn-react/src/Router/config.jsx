const routes = [
  {
    path: '/sandwiches',
    component: Sandwiches
  },
  {
    path: '/tacos',
    component: Tacos,
    routes: [{
        path: '/tacos/bus',
        component: Bus
      },
      {
        path: '/tacos/cart',
        component: Cart
      }
    ]
  }
]

// JSX 可通过 RouteWithSubRoutes 将数组中的设置 挂载到JSX中
{routes.map((route, i) => (
  <RouteWithSubRoutes key={i} {...route}/>
))}

// JSXX