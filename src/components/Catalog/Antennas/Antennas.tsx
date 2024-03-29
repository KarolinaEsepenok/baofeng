import React from 'react';

import s from "./Antennas.module.scss"
import CatalogItems from "../CommonItem/CatalogItems";
import walkie from '../../../assets/img/walkie.jpg';
import {Link} from "react-router-dom";
import arrowLeft from "../../../assets/img/arrowLeft.svg"
import Headers from '../../common/Header/Headers';
import Greating from '../../pages/Main/Greating/Greating';
import {Footer} from '../../common/Footer/Footer';
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";


export const Antennas = () => {
    const items = new Array(5).fill('',0)
    // @ts-ignore
    return (
        <div className={s.antennasCont}>
            <Headers/>
            <Greating/>
            <Link className={s.linkBack} to='/'><img className={s.imgBackHome} src={arrowLeft}alt={'back'} />На главную страницу</Link>
        <div className={s.catalogContainer}>

            <div className={s.nameLink}>
                <h4>Антенны</h4>
        </div>
            <div className={s.catalogItemMain}>
                {items.map(()=>(<CatalogItems img={walkie} nameItem={'Основные характеристики'} price={'32/00'} descriptionItem={'lalalallalal'}/>))}
                <CatalogItems img={walkie} nameItem={'Основные характеристики'} price={'32/00'} descriptionItem={'lalalallalal'}/>
                <CatalogItems img={walkie} nameItem={'Основные характеристики'} price={'32/00'} descriptionItem={'lalalallalal'}/>
<ReactTooltip
                    anchorId="appTitle"
                    place="bottom"
                    content="Hello world! I'm a Tooltip"
                />
            </div>
        </div>
        <Footer/></div>
    );
};
