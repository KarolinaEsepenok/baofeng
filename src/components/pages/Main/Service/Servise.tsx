import React from 'react';
import s from '../Greating/Greating.module.scss';

export const Servise = () => {
    return (
        <div className={s.greatingService}>
            <div >Услуга по настройке радиостанции!</div>
            <button className={s.btn}>Заказать</button>
        </div>
    );
};

