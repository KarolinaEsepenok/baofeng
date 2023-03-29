import React from 'react';
import s from './Nav.module.scss';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div className={s.headersLinks}>
            <Link  to={'/headphones'} >Наушники</Link>
            <Link  to={'/antennas'}>Антенны</Link>
            <Link  to={'/batteries'} >Аккумуляторы</Link>
            <Link  to='aboutUs' >О нас</Link>

        </div>
    );
};

export default Nav;