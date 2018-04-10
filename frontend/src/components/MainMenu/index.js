import React from 'react';
import { Link } from 'react-router-dom';

import { MAIN_MENU_ITEMS } from './constants/mainMenu';

import './styles/mainMenu.css';

export const MainMenu = ({ match }) => {
    return (
        <div>
            <div className="main-menu">
                <ul>
                    {MAIN_MENU_ITEMS.map(item => {
                        return (
                            <li key={item.itemName}>
                                <Link to={`/${item.url}`}>{item.itemName}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};
