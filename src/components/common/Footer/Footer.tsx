import React from 'react';
import s from './Footer.module.scss'
import logoBaofeng from '../../../assets/img/logoBaofeng.svg';
import {Link} from "react-router-dom";
import telegram from '../../../assets/img/telegram.svg'
import viber from '../../../assets/img/viber.svg'

export const Footer = () => {
    return (
        <div className={s.footerContainer}>
<div className={s.footerLogo}><img src={logoBaofeng} alt={'logo'}/></div>
            <div className={s.footerLinks}>
                <Link  to={'/headphones'} >Наушники</Link>
                <Link  to={'/antennas'}>Антенны</Link>
                <Link  to={'/batteries'} >Аккумуляторы</Link>

            </div>
            <div className={s.footerLinks}><Link  to='aboutUs' >О нас</Link></div>
            <div className={s.footerSocial}><a><img alt={'telegram'}src={telegram}/></a><a><img src={viber} alt={viber}/></a></div>

        </div>
    );
};
