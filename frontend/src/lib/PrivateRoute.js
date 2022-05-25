import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import isAuthenticated from './isAuthenticated'

// Router that checks if user is logged-in
// If not, redirect to "/login"

const PrivateRouteWrapper = ({...props }) => {
  return isAuthenticated() ? (
    <Outlet />
  ) : (
    <Navigate
      to={'/login'}
      replace
      state={{ from: props.location }}
    />
  )
};

export default PrivateRouteWrapper;