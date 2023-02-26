import React from 'react';
import s from "../Catalog.module.scss";
import CatalogItems from "../CommonItem/CatalogItems";
import bf888ЫЫ from "../../img/bf888ЫЫ.jpg";
import batUV5R from '../../img/batUV5R.jpg'

const Headphones = () => {
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
                <CatalogItems img={bf888ЫЫ} nameItem={'Модель'} price={'43,00'} descriptionItem={'hgkfjkjgdf dijf;dfjg dgfoijdoiugpoi efdjdroiufpo rfugoifdhj fgkjdfoikg fgkjfg;kdf iijgkdf '}/>
                <CatalogItems img={bf888ЫЫ} nameItem={'Модель'} price={'30,00'} descriptionItem={'gdhdhhdhdh'}/>
                <CatalogItems img={bf888ЫЫ} nameItem={'Модель'} price={'30,00'} descriptionItem={'gdhdhhdhdh'}/>
                <CatalogItems img={bf888ЫЫ} nameItem={'Модель'} price={'30,00'} descriptionItem={'gdhdhhdhdh'}/>
            </div></>
    );
};

export default Headphones;