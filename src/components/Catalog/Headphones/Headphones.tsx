import React from 'react';
import s from "../Catalog.module.scss";
import CatalogItems from "../CommonItem/CatalogItems";
import bf888ЫЫ from "../../../assets/img/bf888ЫЫ.jpg";
import batUV5R from '../../../assets/img/batUV5R.jpg'
import {Link} from "react-router-dom";


export const Headphones = () => {

    return (
        <>
            <h4 id={'headphones'} >
                Наушники
            </h4>
            <div className={s.catalogItemMain}>
                <CatalogItems img={bf888ЫЫ} nameItem={'Модель'} price={'30,00'} descriptionItem={'hgkfjkjgdf dijf;dfjg dgfoijdoiugpoi efdjdroiufpo rfugoifdhj fgkjdfoikg fgkjfg;kdf iijgkdf '}/>
                <CatalogItems img={batUV5R} nameItem={'Модель'} price={'45,00'} descriptionItem={'gdhdhhdhdh'}/>
                <CatalogItems img={bf888ЫЫ} nameItem={'Модель'} price={'10,00'} descriptionItem={'gdhdhhdhdh'}/>
                <CatalogItems img={bf888ЫЫ} nameItem={'Модель'} price={'20,00'} descriptionItem={'gdhdhhdhdh'}/>
               <div><Link to={'/headphones'}>Посмотреть все</Link></div>
            </div></>
    );
};
