import './Header.css'
import logo from '../assets/logo.png'
import React, { useState } from 'react';

function Header() {

  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const showSidebar = () => {
    setSidebarVisible(true);
  };

  const hideSidebar = () => {
    setSidebarVisible(false);
  };
  
  return (
    <>
        <header>
          <nav>
           <ul class="header">
              {/*HEADER*/}
              <li><img src={logo} alt="Wikapedia logo" className="logo" /></li>
              <li class="wikapedia">Wikapedia</li>
              <li class= "hide"><a href="#">HOME</a></li>
              <li class= "hide"><a href="#">DIALECTS</a></li>
              <li class= "hide"><a href="#">ABOUT</a></li>

              {/*MENU BUTTON WHEN PAGE IS SMALL*/}
              {!isSidebarVisible && (
                <li className="menu-button" onClick={showSidebar}>
                  <a>
                    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#504B4E">
                      <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                    </svg>
                  </a>
                </li>
              )}
            </ul>

            {/*EXIT BUTTON - SIDEBAR*/}
            <div className={`exitsb ${isSidebarVisible ? 'show' : ''}`}>
              <button onClick={hideSidebar} >
                <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#504B4E">
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                </svg>
              </button>
            </div>

            {/*SIDEBAR*/}
            <ul className={`sidebar ${isSidebarVisible ? 'show' : ''}`}>
              <li><a href="#">HOME</a></li>
              <li><a href="#">DIALECTS</a></li>
              <li><a href="#">ABOUT</a></li>
            </ul>

            {/*BLUR BACKGROUND */}
            {isSidebarVisible && <div className="blur-overlay" onClick={hideSidebar}></div>}
          </nav>
        </header>
    </>
  );
}

export default Header;