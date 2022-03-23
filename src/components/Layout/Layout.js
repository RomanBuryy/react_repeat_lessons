import React from 'react';
import {Outlet, NavLink} from "react-router-dom";

import css from "../Layout/Layout.module.css";

const Layout = () => {
    return (
        <>
            <div className={css.header}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>

            <Outlet/>
        </>
    );
};

export default Layout;