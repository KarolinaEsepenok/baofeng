import React from 'react';
import s from './Footer.module.scss'
import logoBaofeng from '../../../assets/img/logoBaofeng.svg';

export const Footer = () => {
    return (
        <div className={s.footerContainer}>
<div className={s.footerLogo}><img src={logoBaofeng} alt={'logo'}/></div>
            <div><a></a><a></a><a></a><a></a>
            </div>
            <div><a></a></div>
            <div className={s.footerSocial}><a></a></div>

        </div>
    );
};
