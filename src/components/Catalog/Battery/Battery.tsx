import React from 'react';

import s from "./Battery.module.scss"
import CatalogItems from "../CommonItem/CatalogItems";
import walkie from '../../../assets/img/walkie.jpg';
import {Link} from "react-router-dom";
import arrowLeft from "../../../assets/img/arrowLeft.svg"
import Headers from '../../common/Header/Headers';
import Greating from '../../pages/Main/Greating/Greating';
import {Footer} from '../../common/Footer/Footer';
export const Battery = () => {
    return (
        <div className={s.antennasCont}>
            <Headers/>
            <Greating/>
            <Link className={s.linkBack} to='/'><img className={s.imgBackHome} src={arrowLeft}alt={'back'}/>На главную страницу</Link>
            <div className={s.catalogContainer}>

                <div className={s.nameLink}>
                    <h4  >Аккумуляторы</h4>
                </div>
                <div className={s.catalogItemMain}>
                    <CatalogItems  img={walkie} nameItem={'Основные характеристики'} price={'32,00'} descriptionItem={'gdhdhhdhdh'}/>
                    <CatalogItems img={walkie} nameItem={'Основные характеристики'} price={'28,00'} descriptionItem={'gdhdhhdhdh'}/>
                    <CatalogItems img={walkie} nameItem={'Основные характеристики'} price={'34,00'} descriptionItem={'gdhdhhdhdh'}/>
                    <CatalogItems img={walkie} nameItem={'Основные характеристики'} price={'34,00'} descriptionItem={'gdhdhhdhdh'}/>
                    <CatalogItems img={walkie} nameItem={'Основные характеристики'} price={'34,00'} descriptionItem={'gdhdhhdhdh'}/>
                    <CatalogItems img={walkie} nameItem={'Основные характеристики'} price={'34,00'} descriptionItem={'gdhdhhdhdh'}/>
                    <CatalogItems img={walkie} nameItem={'Основные характеристики'} price={'34,00'} descriptionItem={'gdhdhhdhdh'}/>
                    <CatalogItems img={walkie} nameItem={'Основные характеристики'} price={'34,00'} descriptionItem={'gdhdhhdhdh'}/>
                    <CatalogItems img={walkie} nameItem={'Основные характеристики'} price={'34,00'} descriptionItem={'gdhdhhdhdh'}/>
                    <CatalogItems img={walkie} nameItem={'Основные характеристики'} price={'34,00'} descriptionItem={'gdhdhhdhdh'}/> <CatalogItems img={walkie} nameItem={'Основные характеристики'} price={'34,00'} descriptionItem={'gdhdhhdhdh'}/>
                    <CatalogItems img={walkie} nameItem={'Основные характеристики'} price={'34,00'} descriptionItem={'gdhdhhdhdh'}/>

                </div></div>
        <Footer/></div>
    );
};
