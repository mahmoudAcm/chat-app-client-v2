import React from 'react';

const DiscussionsHeader = () => {
    return (
        <header>
            <div className="search">
                <form className="form-inline position-relative">
                    <input type="search" className="form-control" id="conversations" placeholder="Search for conversations..." />
                    <button type="button" className="btn btn-link loop"><i className="material-icons">search</i></button>
                </form>
                <button className="btn create" data-toggle="modal" data-target="#startnewchat"><i className="material-icons">create</i></button>
            </div>
            <div className="list-group sort">
                <button className="btn filterDiscussionsBtn active show" data-toggle="list" data-filter="all">All</button>
            </div>	
        </header>
    );
};

export default DiscussionsHeader;