import React, { useState } from 'react'
import { MdMenu, MdHome, MdGroups, MdStars, MdSettings, MdOutlineExitToApp } from 'react-icons/md'


function Template({children}) {

  const [menuOpened, setMenuOpened] = useState(true);
  return (

    <div className="template">
      {menuOpened ? 
        <Navbar closeMenu={() => setMenuOpened(false)}/> : 
        <NavbarClosed openMenu={() => setMenuOpened(true)}/>
      }
      <div className="component">
        {children}
      </div>
    </div>
    
  )
}


function Navbar({closeMenu}) {
  return (
    <div className="navbar">
      <div className="top">
        <MdMenu onClick={closeMenu}/>
        <h2>Capital Fun</h2>
      </div>
      <div className="links">
        <ul>
          <li><MdHome/><h2><a href="#">Home</a></h2></li>
          <li><MdGroups/><h2><a href="#">Communities</a></h2></li>
          <li><MdStars/><h2><a href="#">Missions</a></h2></li>
          <li><MdSettings/><h2><a href="#">Setting</a></h2></li>
        </ul>
      </div>
      <div className="bottom">
        <div>
          <MdOutlineExitToApp/>
          <h2><a href="#">Sign out</a></h2>
        </div>
      </div>
    </div>
  )
}

function NavbarClosed({openMenu}) {
  return (
    <div className="navbar-closed">
      <div className="top">
        <MdMenu onClick={openMenu}/>
      </div>
    </div>
  )
}



export default Template
