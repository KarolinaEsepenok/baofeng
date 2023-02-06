import React from 'react';
import s from './Headers.module.scss'
import logoBaofeng from '../img/logoBaofeng.svg'
import {Link} from "react-scroll";

const Headers = () => {
    return (
        <div className={s.headersPage}>
            <div className={s.headersLogo}><img src={logoBaofeng}/></div>
            <div className={s.headersLinks}>
                <Link activeClass={s.active}  to='headphones' spy={true} smooth={true} offset={0} duration={500}>Наушники</Link>
                <Link activeClass={s.active}  to='antenna' spy={true} smooth={true} offset={0} duration={500}>Антенны</Link>
                <Link activeClass={s.active}  to='battery' spy={true} smooth={true} offset={0} duration={500}>Батарейки</Link>

            </div>

        </div>
    );
};

export default Headers;