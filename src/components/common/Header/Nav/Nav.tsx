import React from 'react';
import s from './Nav.module.scss';
import {Link} from "react-scroll";

const Nav = () => {
    return (
        <div className={s.headersLinks}>
            <Link activeClass={s.active}  to='headphones' spy={true} smooth={true} offset={0} duration={500}>Наушники</Link>
            <Link activeClass={s.active}  to='antenna' spy={true} smooth={true} offset={0} duration={500}>Антенны</Link>
            <Link activeClass={s.active}  to='battery' spy={true} smooth={true} offset={0} duration={500}>Батарейки</Link>
            <Link activeClass={s.active}  to='battery' spy={true} smooth={true} offset={0} duration={500}>О нас</Link>

        </div>
    );
};

export default Nav;