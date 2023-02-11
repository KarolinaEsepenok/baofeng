import React from 'react';
import s from "../Catalog.module.scss";
import CatalogItems from "../CommonItem/CatalogItems";
import bf888ЫЫ from "src/components/img/bf888ЫЫ.jpg";

const Battery = () => {
    return (
        <> <h4 id={'battery'}>
            Батарейки
        </h4>
            <div className={s.catalogItemMain}>

                <CatalogItems img={bf888ЫЫ} nameItem={'Модель'} price={'30,00'} descriptionItem={'gdhdhhdhdh'}/>
                <CatalogItems img={bf888ЫЫ} nameItem={'Модель'} price={'30,00'} descriptionItem={'gdhdhhdhdh'}/>
                <CatalogItems img={bf888ЫЫ} nameItem={'Модель'} price={'30,00'} descriptionItem={'gdhdhhdhdh'}/>
                <CatalogItems img={bf888ЫЫ} nameItem={'Модель'} price={'30,00'} descriptionItem={'gdhdhhdhdh'}/>
            </div></>
    );
};

export default Battery;