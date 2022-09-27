
import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to='/register' activeStyle>
                        Register
                    </NavLink>
                    <NavLink to='/login' activeStyle>
                        Login
                    </NavLink>
                    <NavLink to='/home' activeStyle>
                        Home
                    </NavLink>
                    <h1>HomeFinder</h1>
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/login'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;