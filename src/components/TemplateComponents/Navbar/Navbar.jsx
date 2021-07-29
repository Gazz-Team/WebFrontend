import React, {useState, useContext} from 'react';
import {NavbarRoutes} from '../../../routes/routes'
import {NavLink, useLocation} from 'react-router-dom'
import './Navbar.css'
import {AllOpenRoutes} from '../../../routes/routes';
import { AuthContext } from "../../../Auth";
import * as controller from '../../../controller'

const AllOpenRoutesPath = AllOpenRoutes.map(route=>route.path)

const Navbar = () => {
    const location = useLocation();

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click)

    const {currentUser} = useContext(AuthContext);

    return (
            <nav className="navbar">
                <div className="">
                    <NavLink exact to='/' className='nav-logo'>
                        EduChallenge
                    </NavLink>
                </div>

                <div className='navbar-content' >
                    <ul className={click? 'nav-menu active' : 'nav-menu'}>
                    {
                        NavbarRoutes.map((item, index)=>{
                            return (
                                <NavLink exact to = {NavbarRoutes[index].path} className='nav-links' onClick={handleClick} key={index}>{NavbarRoutes[index].label} </NavLink>
                                )
                            })
                        }
                        {
                            currentUser 
                            ?
                            <a className='nav-links' onClick={()=>controller.handleLogout()} key={10}>Logout</a>
                            :
                            <NavLink exact to={"/login"} className='nav-links' key={10}>Login</NavLink>
                        }
                    </ul>
                    <div className="nav-icon"  onClick={handleClick}>
                        <i className={click? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                </div>
            </nav>
    );
}

export default Navbar;
