import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'

export default class Logout extends Component {
  constructor(props) {
    super(props)

    // Logout process: Remove token from localStorage
    localStorage.removeItem('token');
  }
  render() {
    return (
      <Navigate
        to={'/login'}
        replace
      />
    );
  }
}
