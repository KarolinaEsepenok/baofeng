import React from 'react';
import s from "../Catalog.module.scss";
import CatalogItems from "../CommonItem/CatalogItems";
import bf888ЫЫ from "src/components/img/bf888ЫЫ.jpg";

const Headphones = () => {
    return (
        <>
            <h4 id={'headphones'} >
                Наушники
            </h4>
            <div className={s.catalogItemMain}>

                <CatalogItems img={bf888ЫЫ} nameItem={'Модель'} price={'30,00'} descriptionItem={'hgkfjkjgdf dijf;dfjg dgfoijdoiugpoi efdjdroiufpo rfugoifdhj fgkjdfoikg fgkjfg;kdf iijgkdf '}/>
                <CatalogItems img={bf888ЫЫ} nameItem={'Модель'} price={'30,00'} descriptionItem={'gdhdhhdhdh'}/>
                <CatalogItems img={bf888ЫЫ} nameItem={'Модель'} price={'30,00'} descriptionItem={'gdhdhhdhdh'}/>
                <CatalogItems img={bf888ЫЫ} nameItem={'Модель'} price={'30,00'} descriptionItem={'gdhdhhdhdh'}/>
                <CatalogItems img={bf888ЫЫ} nameItem={'Модель'} price={'30,00'} descriptionItem={'hgkfjkjgdf dijf;dfjg dgfoijdoiugpoi efdjdroiufpo rfugoifdhj fgkjdfoikg fgkjfg;kdf iijgkdf '}/>
                <CatalogItems img={bf888ЫЫ} nameItem={'Модель'} price={'30,00'} descriptionItem={'gdhdhhdhdh'}/>
                <CatalogItems img={bf888ЫЫ} nameItem={'Модель'} price={'30,00'} descriptionItem={'gdhdhhdhdh'}/>
                <CatalogItems img={bf888ЫЫ} nameItem={'Модель'} price={'30,00'} descriptionItem={'gdhdhhdhdh'}/>
            </div></>
    );
};

export default Headphones;