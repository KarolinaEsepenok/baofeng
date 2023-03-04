import React from 'react';
import s from './Headers.module.scss'
import logoBaofeng from '../../../assets/img/logoBaofeng.svg'
import Nav from '../Header/Nav/Nav';
import {BurgerNav} from '../Header/BurgerNav/BurgerNav';


export const Headers = () => {
    return (
        <div className={s.headersPage} id={'main'}>
            <div className={s.headersLogo}><img src={logoBaofeng} alt={'logo'}/></div>
            <Nav/>
            <BurgerNav/>

        </div>
    );
};

export default Headers;