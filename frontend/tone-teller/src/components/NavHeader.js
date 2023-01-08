import React, {useState} from 'react'
import { Link } from 'react-router-dom';

function NavHeader() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className='navheader'>
        <div className='navheader-container'>
            <Link to="/" className='navheader-logo'>
              ToneTeller <i className='fab fa-typo3'></i>
            </Link>   
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times':'fas fa-bars'}/>
            </div>
            <ul className = {click ? 'nav-menu active': 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
            </ul>
        </div>
      </nav>
    </>
  )
}

export default NavHeader
