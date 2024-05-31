import React, { useRef, useState } from "react";
import { Home, LogOut, Moon, Star } from "react-feather";
import { Link } from "react-router-dom";

import {
  Cart,
  Course14,
  Course15,
  Course4,
  logo,
  Messages,
  Notification,
  ProfileAvatar,
  User1,
  User15,
  User2,
  User3,
  Wish,
} from "../../components/imagepath";
import Navbar from "../../components/navbar";

// eslint-disable-next-line react/prop-types
const Header:React.FC<any>= ({activeMenu}) => {
  const [navbar, setNavbar] = useState(false);

  const [showCart, setShowCart] = useState(false);
  const [showWish, setShowWish] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  // Mobile Menu toggle
  const [mobileMenu, setMobileMenu] = useState(false);
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
    document.body.classList.add("menu-opened");
    setMobileMenu(true);
  };
  const hideMobileMenu = () => {
    document.body.classList.remove("menu-opened");
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


  // Cart Click
  const cartClick = (e:any) => {
    e.preventDefault();
    // if (showWish) {
    //   setShowWish(false);
    // }
    setShowCart(!showCart);
    console.log(showCart);
  };

  const wishClick = (e:any) => {
    e.preventDefault();
    // if (showCart) {
    //   setShowCart(false);
    // }
    setShowWish(!showWish);
  };

  const notificationClick = (e:any) => {
    e.preventDefault();
    setShowNotification(!showNotification);
  };
  const profileClick = (e:any) => {
    e.preventDefault();
    setShowProfile(!showProfile);
  };

  const changeHeaderBackground = () => {
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeHeaderBackground);

  return (
    <header className="header header-page">
      <div className="header-fixed">
        
        <Navbar/>
        
      </div>
    </header>
  );
}
export default Header;