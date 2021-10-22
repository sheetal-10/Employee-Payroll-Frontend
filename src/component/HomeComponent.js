import React, { Component } from 'react';
import './HomeComponent.css';
import add from '../assets/icons/add-24px.svg'
import HeaderComponent from './HeaderComponent';

export class HomeComponent extends Component {
    render() {
        return (
            <div>
                <HeaderComponent/>
                <div className='main-content'>
                    <div className="header-content">
                        <div className="emp-detail-text">
                            Employee Details <div className="emp-count">10</div>
                            <div>
                                <a href="add.html" className="add-button">
                                    <img src = {add} alt="Add User Logo"></img>Add User
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeComponent