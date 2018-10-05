import React, { Component } from 'react';

const MonoDropdown = props => ( 
    <div ref={props.reference} className={`dropdown ${props.active?' is-active':''}`}>
        <div className="dropdown-trigger">
            {props.trigger}
        </div>
        <div className="dropdown-menu">
            <div className="dropdown-content">
                <div className="dropdown-item">
                    {props.content}
                </div>
            </div>
        </div>
    </div>
);
 
export default MonoDropdown;