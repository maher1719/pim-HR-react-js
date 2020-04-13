import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from 'features/auth/authSlice';

const  SliderBar =() => {
    const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  const onLogoutClick = e => {
    e.preventDefault();
    dispatch(logoutUser());
    console.log(dispatch(logoutUser()));
    window.location.href="/";
  };
        return (
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="../../index3.html" className="brand-link">
          <img src="../../dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
          <span className="brand-text font-weight-light">AdminLTE 3</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img src="../../dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
            </div>
            <div className="info">
              <a href="#" className="d-block">Alexander Pierce</a>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              {/* Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library */}
              <li className="nav-item has-treeview">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>
                    Dashboard
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="../../index.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Dashboard v1</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../../index2.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Dashboard v2</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../../index3.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Dashboard v3</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="/profile" className="nav-link">
                  <i className="nav-icon fas fa-th" />
                  <p>
                    Mon profile
                    <span className="right badge badge-danger">New</span>
                  </p>
                </a>
              </li>
              <li className="nav-item">
                
                  
                  <button className="btn btn-primary" onClick={onLogoutClick}>
                    Déconnexion
                    
                  </button>
              </li>
              </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    );
        
    };
   export default SliderBar;