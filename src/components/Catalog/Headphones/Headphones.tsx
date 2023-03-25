import React from 'react';

import s from "./HeadPhones.module.scss"
import CatalogItems from "../CommonItem/CatalogItems";
import walkie from '../../../assets/img/walkie.jpg';
import {Link} from "react-router-dom";
import arrowLeft from "../../../assets/img/arrowLeft.svg"
export const Headphones = () => {
    return (
        <div className={s.antennasCont}>
            <Link className={s.linkBack} to='/'><img className={s.imgBackHome} src={arrowLeft} />На главную страницу</Link>
            <div className={s.catalogContainer}>

                <div className={s.nameLink}>
                    <h4 >Наушники</h4>
                </div>
                <div className={s.catalogItemMain}>
                    <CatalogItems img={walkie} nameItem={'Модель'} price={'48,00'} descriptionItem={'Наушники'}/>
                    <CatalogItems img={walkie} nameItem={'Модель'} price={'34,00'} descriptionItem={'Наушники'}/>
                    <CatalogItems img={walkie} nameItem={'Модель'} price={'30,00'} descriptionItem={'Наушники'}/>
                    <CatalogItems img={walkie} nameItem={'Модель'} price={'31,00'} descriptionItem={'Наушники'}/>
                    <CatalogItems img={walkie} nameItem={'Модель'} price={'20,00'} descriptionItem={'Наушники'}/>
                    <CatalogItems img={walkie} nameItem={'Модель'} price={'15,00'} descriptionItem={'Наушники'}/>
                    <CatalogItems img={walkie} nameItem={'Модель'} price={'34,00'} descriptionItem={'Наушники'}/>
                    <CatalogItems img={walkie} nameItem={'Модель'} price={'39,00'} descriptionItem={'Наушники'}/>

                </div></div></div>
    );
};
