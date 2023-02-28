import React, {useState} from 'react';
import s from './BurgerNav.module.scss';
import {Link} from "react-scroll";
import burger from '../../../../assets/img/burger.svg'

export const BurgerNav = () => {
    const [menuIsOpen, setMenuIsOpen]= useState(false)

    const burgerOpenHandler=()=>{
       setMenuIsOpen(!menuIsOpen)
        console.log(menuIsOpen)
    }
    return (
        <div className={s.burgerLinks}>
            <div className={menuIsOpen ? `${s.burgerLinksItems} + ${s.show}` : s.burgerLinksItems}>
                <Link activeClass={s.active} to='headphones' spy={true} smooth={true} offset={0}
                      duration={500}>Наушники</Link>
                <Link activeClass={s.active} to='antenna' spy={true} smooth={true} offset={0}
                      duration={500}>Антенны</Link>
                <Link activeClass={s.active} to='battery' spy={true} smooth={true} offset={0}
                      duration={500}>Батарейки</Link>
                <Link activeClass={s.active} to='battery' spy={true} smooth={true} offset={0} duration={500}>О
                    нас</Link>
            </div>
            <img alt={'burgerMenu'} src={burger} onClick={burgerOpenHandler} className={s.burgerBtn}/>
        </div>
    );
};

