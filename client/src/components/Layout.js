import React from 'react';
import Sidebar from './Sidebar';

const Layout = (props) => {

    return (
        <div className="app">
                <Sidebar className="sidebar"/>
            <div className="content"> 
                {props.children}
            </div>
        </div>
    );
};
export default Layout;
