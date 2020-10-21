import React, { useEffect, createRef } from 'react';
import { Route } from 'react-router-dom';
import Contacts from './contacts/contacts.module';
import Discussions from './discussions/discussions.module';

const SideBar = () => {
    const sideBarTabPane = createRef<HTMLDivElement>();
    useEffect(() => {
        const { current } = sideBarTabPane;

        current?.classList.toggle('active');
        current?.classList.toggle('show');

        current?.classList.add("active");
        current?.classList.add("show");
    });

    return (
        <div className="sidebar">
            <div className="container">
                <div className="col-md-12">
                    <div className="tab-content">
                        <div className="tab-pane fade" ref={sideBarTabPane}>
                            <Route path="/contacts" component={Contacts}/>
                            <Route path="/discussions" component={Discussions}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar ;