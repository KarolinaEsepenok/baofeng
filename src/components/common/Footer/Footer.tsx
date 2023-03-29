import React from 'react';
import s from './Footer.module.scss'
import logoBaofeng from '../../../assets/img/logoBaofeng.svg';
import {Link} from "react-router-dom";

export const Footer = () => {
    return (
        <div className={s.footerContainer}>
<div className={s.footerLogo}><img src={logoBaofeng} alt={'logo'}/></div>
            <div className={s.footerLinks}>
                <Link  to={'/headphones'} >Наушники</Link>
                <Link  to={'/antennas'}>Антенны</Link>
                <Link  to={'/batteries'} >Аккумуляторы</Link>

            </div>
            <div><Link  to='aboutUs' >О нас</Link></div>
            <div className={s.footerSocial}><a></a></div>

        </div>
    );
};
