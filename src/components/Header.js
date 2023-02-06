import React from 'react'
import emblem from '../images/bg-emblem-gold.svg';
import menu from '../images/icon-menu.svg';

const Header = () => {
    return (
        <header className="app-header">

            <div className="header-container">

                <div className='header-profile'>

                    <div className='header-profile-image'>
                        <img src={emblem} alt="User emblem" width={45} height={45} />
                    </div>

                    <div className='header-profile-info'>
                        <h2>JOHN DOE</h2>
                        <div className='header-profile-stats'>
                            <p>&#47;&#47; Level 99 &#47;</p>
                            <p><span></span>000</p>
                        </div>
                        <div className='header-profile-level-bar'>
                            <span></span>
                        </div>
                    </div>

                </div>


                <nav>
                    <ul>
                        <li>
                            <p>Clan</p>
                        </li>
                        <li className='active'>
                            <p>Character</p>
                        </li>
                        <li>
                            <p>Inventory</p>
                        </li>
                        <li>
                            <p>Settings</p>
                        </li>
                    </ul>

                    <div className='menu-hamburger'>
                        <img src={menu} alt="Menu" />
                    </div>

                </nav>

            </div>

        </header>
    )
}

export default Header