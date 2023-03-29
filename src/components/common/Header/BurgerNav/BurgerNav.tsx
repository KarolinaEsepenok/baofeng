import React, {useState} from 'react';
import s from './BurgerNav.module.scss';
import {Link} from "react-router-dom";
import burger from '../../../../assets/img/burger.svg'

export const BurgerNav = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    const burgerOpenHandler = () => {
        setMenuIsOpen(!menuIsOpen)
    }
    return (
        <div className={s.burgerLinks}>
            <div className={menuIsOpen ? `${s.burgerLinksItems} + ${s.show}` : s.burgerLinksItems}>
                <Link to={'/headphones'}>Наушники</Link>
                <Link to={'/antennas'}>Антенны</Link>
                <Link to={'/batteries'}>Аккумуляторы</Link>
                <Link to='aboutUs'>О
                    нас</Link>
            </div>
            <img alt={'burgerMenu'} src={burger} onClick={burgerOpenHandler} className={s.burgerBtn}/>
        </div>
    );
};

