import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <div className="container">
                <div className="inside">
                    <div className="nav nav-tab menu">
                        <button className="btn"><img className="avatar-xl" src="/dist/img/avatar.png" alt="avatar" /></button>
                        <NavLink to="/contacts" className="material-icons" activeClassName="active">account_circle</NavLink>
                        <NavLink to="/discussions" className="material-icons" activeClassName="active">chat_bubble_outline</NavLink>
                        <NavLink to="/logout" className="btn power material-icons">power_settings_new</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Navigation;