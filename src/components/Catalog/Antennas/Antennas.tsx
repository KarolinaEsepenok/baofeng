import React from 'react';
import s from "../Catalog.module.scss";
import CatalogItems from "../CommonItem/CatalogItems";
import bf888ЫЫ from "../../../assets/img/bf888ЫЫ.jpg";
import {Link} from "react-router-dom";
import Headers from '../../common/Header/Headers';

export const Antennas = () => {
    return (
        <> <div className={s.nameLink}><h4 id={'antenna'} >
            Антенны
        </h4> <Link className={s.linkToCatalog} to={'/antennas'}>Посмотреть все</Link>
        </div>
            <div className={s.catalogItemMain}>
                <CatalogItems img={bf888ЫЫ} nameItem={'Модель'} price={'30,00'} descriptionItem={'gdhdhhdhdh'}/>
                <CatalogItems img={bf888ЫЫ} nameItem={'Модель'} price={'30,00'} descriptionItem={'gdhdhhdhdh'}/>
                <CatalogItems img={bf888ЫЫ} nameItem={'Модель'} price={'30,00'} descriptionItem={'gdhdhhdhdh'}/>
                <CatalogItems img={bf888ЫЫ} nameItem={'Модель'} price={'30,00'} descriptionItem={'gdhdhhdhdh'}/>

            </div></>
    );
};
