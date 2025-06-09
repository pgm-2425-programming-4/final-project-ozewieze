import * as React from 'react';
import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import '../../main.css';
import { Sidebar } from '../components/Sidebar';

export const Route = createRootRoute({
  component: () => (
    <React.Fragment>
      <div className="app-container">
        <Sidebar />

        <div className="content-container">
          {/* <Header /> */}

          <Outlet />
          <TanStackRouterDevtools />
        </div>
      </div>
    </React.Fragment>
  ),
});
