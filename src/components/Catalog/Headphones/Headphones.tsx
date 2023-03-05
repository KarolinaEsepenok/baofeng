import React from 'react';
import s from "../Catalog.module.scss";
import CatalogItems from "../CommonItem/CatalogItems";
import walkie from '../../../assets/img/walkie.jpg';

import {Link} from "react-router-dom";


export const Headphones = () => {
    return (
        <div>
            <div><Link to='/'>Назад</Link></div>
            <div className={s.catalogContainer}>

                <div className={s.nameLink}><h4 id={'headphones'}>Наушники</h4></div>

                <div className={s.catalogItemMain}>
                    <CatalogItems img={walkie} nameItem={'Модель'} price={'30,00'} descriptionItem={'gdhdhhdhdh'}/>
                    <CatalogItems img={walkie} nameItem={'Модель'} price={'30,00'} descriptionItem={'gdhdhhdhdh'}/>
                    <CatalogItems img={walkie} nameItem={'Модель'} price={'30,00'} descriptionItem={'gdhdhhdhdh'}/>
                    <CatalogItems img={walkie} nameItem={'Модель'} price={'30,00'} descriptionItem={'gdhdhhdhdh'}/>
                    <CatalogItems img={walkie} nameItem={'Модель'} price={'20,00'} descriptionItem={'gdhdhhdhdh'}/>

                </div>
            </div>
        </div>
    );
};