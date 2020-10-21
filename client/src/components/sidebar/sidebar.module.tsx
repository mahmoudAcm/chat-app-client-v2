import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

const Main = (props: any) => {
    useEffect(() => {
        console.log(props);    
    });
    return <div></div>;
}

const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="container">
                <div className="col-md-12">
                    <div className="tab-content">
                        <div className="tab-pane">
                            <Route path="/contacts" component={Main}/>
                            <Route path="/discussions" component={Main}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar ;