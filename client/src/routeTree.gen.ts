/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as ProjectsIdImport } from './routes/projects.$id'
import { Route as PaginatedBacklogIdImport } from './routes/paginated-backlog.$id'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ProjectsIdRoute = ProjectsIdImport.update({
  id: '/projects/$id',
  path: '/projects/$id',
  getParentRoute: () => rootRoute,
} as any)

const PaginatedBacklogIdRoute = PaginatedBacklogIdImport.update({
  id: '/paginated-backlog/$id',
  path: '/paginated-backlog/$id',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/paginated-backlog/$id': {
      id: '/paginated-backlog/$id'
      path: '/paginated-backlog/$id'
      fullPath: '/paginated-backlog/$id'
      preLoaderRoute: typeof PaginatedBacklogIdImport
      parentRoute: typeof rootRoute
    }
    '/projects/$id': {
      id: '/projects/$id'
      path: '/projects/$id'
      fullPath: '/projects/$id'
      preLoaderRoute: typeof ProjectsIdImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/paginated-backlog/$id': typeof PaginatedBacklogIdRoute
  '/projects/$id': typeof ProjectsIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/paginated-backlog/$id': typeof PaginatedBacklogIdRoute
  '/projects/$id': typeof ProjectsIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/paginated-backlog/$id': typeof PaginatedBacklogIdRoute
  '/projects/$id': typeof ProjectsIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/paginated-backlog/$id' | '/projects/$id'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/paginated-backlog/$id' | '/projects/$id'
  id: '__root__' | '/' | '/paginated-backlog/$id' | '/projects/$id'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  PaginatedBacklogIdRoute: typeof PaginatedBacklogIdRoute
  ProjectsIdRoute: typeof ProjectsIdRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  PaginatedBacklogIdRoute: PaginatedBacklogIdRoute,
  ProjectsIdRoute: ProjectsIdRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.jsx",
      "children": [
        "/",
        "/paginated-backlog/$id",
        "/projects/$id"
      ]
    },
    "/": {
      "filePath": "index.jsx"
    },
    "/paginated-backlog/$id": {
      "filePath": "paginated-backlog.$id.jsx"
    },
    "/projects/$id": {
      "filePath": "projects.$id.jsx"
    }
  }
}
ROUTE_MANIFEST_END */
