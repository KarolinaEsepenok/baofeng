import React from 'react';
import s from "../Catalog.module.scss";
import CatalogItems from "../CommonItem/CatalogItems";
import walkie from '../../../assets/img/walkie.jpg';
import {Link} from "react-router-dom";
export const Antennas = () => {
    return (
        <div>
        <div><Link to='/'>Назад</Link></div>
        <div className={s.catalogContainer}>

            <div className={s.nameLink}>
                <h4 id={'antenna'} >Антенны</h4>
                <Link className={s.linkToCatalog} to={'/antennas'}>Посмотреть все</Link>
        </div>
            <div className={s.catalogItemMain}>
                <CatalogItems img={walkie} nameItem={'Модель'} price={'30,00'} descriptionItem={'gdhdhhdhdh'}/>
                <CatalogItems img={walkie} nameItem={'Модель'} price={'30,00'} descriptionItem={'gdhdhhdhdh'}/>
                <CatalogItems img={walkie} nameItem={'Модель'} price={'30,00'} descriptionItem={'gdhdhhdhdh'}/>
                <CatalogItems img={walkie} nameItem={'Модель'} price={'30,00'} descriptionItem={'gdhdhhdhdh'}/>
                <CatalogItems img={walkie} nameItem={'Модель'} price={'20,00'} descriptionItem={'gdhdhhdhdh'}/>

            </div></div></div>
    );
};
