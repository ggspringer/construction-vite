import React from 'react'
import ReactDOM from 'react-dom/client'


import {
  Outlet,
  Router,
  Route,
  RootRoute,
  RouterProvider,
} from '@tanstack/react-router'
import { AppShell } from './AppShell';
import inject from '@stylexjs/dev-runtime';
import { Card } from './Card';

inject({
  dev: true,
  test: false,
  classNamePrefix: 'x',
  styleResolution: 'application-order',
  useRemForFontSize: true,
  runtimeInjection: true,
})
const rootRoute = new RootRoute({
  component: () => (
    <AppShell>
      <Outlet />
    </AppShell>
  ),
})

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: function Index() {
    return (
      <Card />
    )
  },
})

const routeTree = rootRoute.addChildren([indexRoute])

const router = new Router({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)