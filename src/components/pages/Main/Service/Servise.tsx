import React from 'react';
import s from '../Greating/Greating.module.scss';

export const Servise = () => {
    return (
        <div className={s.greatingService}>
            <div >НОВИНКА! Услуга по настройке радиостанции!</div>
            <button className={s.btn}>Заявка</button>
        </div>
    );
};

