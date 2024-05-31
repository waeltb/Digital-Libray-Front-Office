import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import   logo  from "../assets/img/logo/logo.png";

import { useAuth } from "./auth";
const Navbar = () => {
  const auth = useAuth();
    useEffect(() => {
        document.body?.classList?.remove("menu-opened");
        return () => {
          document.body.className = "";
        };
      }, []);
    
      // change header background on scroll
      const [navbar, setNavbar] = useState(false);
      // Mobile Menu toggle
      const [setMobileMenu] = useState<any>(false);
      const [mobileSubMenu, setMobileSubMenu] = useState(false);
      const [mobileSubMenu2, setMobileSubMenu2] = useState(false);
      const [mobileSubMenu22, setMobileSubMenu22] = useState(false);
      const [mobileSubMenu3, setMobileSubMenu3] = useState(false);
      const [mobileSubMenu32, setMobileSubMenu32] = useState(false);
      const [mobileSubMenu4, setMobileSubMenu4] = useState(false);
      const [mobileSubMenu42, setMobileSubMenu42] = useState(false);
      const [mobileSubMenu43, setMobileSubMenu43] = useState(false);
      const [mobileSubMenu5, setMobileSubMenu5] = useState(false);
    
      const openMobileMenu = () => {
        document.body?.classList?.add("menu-opened");
        setMobileMenu(true);
      };
      const hideMobileMenu = () => {
        document.body?.classList?.remove("menu-opened");
        setMobileMenu(false);
      };
      
    
      const openMobileSubMenu = (e:any) => {
        e.preventDefault();
        setMobileSubMenu(!mobileSubMenu);
      };
      const openMobileSubMenu2 = (e:any) => {
        e.preventDefault();
        setMobileSubMenu2(!mobileSubMenu2);
      };
      const openMobileSubMenu22 = (e:any) => {
        e.preventDefault();
        setMobileSubMenu22(!mobileSubMenu22);
      };
      const openMobileSubMenu3 = (e:any) => {
        e.preventDefault();
        setMobileSubMenu3(!mobileSubMenu3);
      };
      const openMobileSubMenu32 = (e:any) => {
        e.preventDefault();
        setMobileSubMenu32(!mobileSubMenu32);
      };
      const openMobileSubMenu4 = (e:any) => {
        e.preventDefault();
        setMobileSubMenu4(!mobileSubMenu4);
      };
      const openMobileSubMenu42 = (e:any) => {
        e.preventDefault();
        setMobileSubMenu42(!mobileSubMenu42);
      };
      const openMobileSubMenu43 = (e:any) => {
        e.preventDefault();
        setMobileSubMenu43(!mobileSubMenu43);
      };
      const openMobileSubMenu5 = (e:any) => {
        e.preventDefault();
        setMobileSubMenu5(!mobileSubMenu5);
      };
    
      const changeHeaderBackground = () => {
        if (window.scrollY >= 90) {
          setNavbar(true);
        } else {
          setNavbar(false);
        }
      };
    
      window.addEventListener("scroll", changeHeaderBackground);
      return (
        <header className="header">
          <div className="header-fixed">
            <nav
              className={
                navbar
                  ? "navbar navbar-expand-lg header-nav scroll-sticky add-header-bg"
                  : "navbar navbar-expand-lg header-nav scroll-sticky"
              }
            >
              <div className="container">
                <div className="navbar-header">
                  <Link id="mobile_btn" to="/" onClick={openMobileMenu}>
                    <span className="bar-icon">
                      <span />
                      <span />
                      <span />
                    </span>
                  </Link>
                  <Link to="/" className="navbar-brand logo">
                    <img src={logo} className="img-fluid" alt="Logo" />
                  </Link>
                </div>
                <div className="main-menu-wrapper">
                  <div className="menu-header">
                    <Link to="/" className="menu-logo">
                      <img src={logo} className="img-fluid" alt="Logo" />
                    </Link>
                    <Link
                      id="menu_close"
                      className="menu-close"
                      to="/"
                      onClick={hideMobileMenu}
                    >
                      <i className="fas fa-times" />
                    </Link>
                  </div>
                  <ul className="main-nav">
                    <li className="has-submenu active">
                      <Link className={mobileSubMenu ? "submenu" : ""} to="/welcome">
                        Welcome{" "}
                      </Link>
                      
                    </li>
                    <li className="has-submenu">
                      <Link to="/jobs">
                        Jobs{" "}
                        
                      </Link>
                    
                    </li>
                    <li className="has-submenu">
                      <Link to="/messaging">
                        Messaging{" "}
                      </Link>
                    </li>
                    <li className="has-submenu">
                      <Link to="/course">
                        Course{" "}
                        <i
                          className="fas fa-chevron-down"
                          onClick={openMobileSubMenu4}
                        />
                      </Link>
                      <ul
                        className={
                          mobileSubMenu4 ? "submenu submenuShow" : "submenu"
                        }
                      >
                        <li className="has-submenu">
                          <Link to="/course-list">Course<i
                          className="fas fa-chevron-right listMob"
                          onClick={openMobileSubMenu42}
                        /></Link>
                          <ul className={
                              mobileSubMenu42 ? "submenu submenuShow" : "submenu"
                            }>
                            <li>
                              <Link to="/add-course">Add Course</Link>
                            </li>
                            <li>
                              <Link to="/course-list">Course List</Link>
                            </li>
                            <li>
                              <Link to="/course-grid">Course Grid</Link>
                            </li>
                            <li>
                              <Link to="/course-details">Course Details</Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    
                    <li className="login-link">
                      <Link to="/login">Login / Signup</Link>
                    </li>
                  </ul>
                </div>
                <ul className="nav header-navbar-rht">
                  <li className="nav-item">
                    {auth?.user &&(
                      <Link className="nav-link header-sign" to="/login">
                      Signin
                    </Link>
                    )}

                  </li>
                  <li className="nav-item">
                    {auth?.user &&(
                      <Link className="nav-link header-login" to="/signup">
                      Signup
                    </Link>
                    )}
                    
                  </li>
                </ul>
              </div>
            </nav>
          </div>
         
        </header>
      );
}

export default Navbar
