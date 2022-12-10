import React from 'react';
import s from './Headers.module.scss'
import logoBaofeng from '../img/logoBaofeng.svg'

const Headers = () => {
    return (
        <div className={s.headersPage}>
            <div className={s.headersLogo}><img src={logoBaofeng}/></div>
            <div className={s.headersLinks}>
                <a href={''}>Наушники</a>
                <a href={''}>Батарейки</a>
                <a href={''}>Антенны</a>

            </div>

        </div>
    );
};

export default Headers;