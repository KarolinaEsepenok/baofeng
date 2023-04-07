import React, {ReactNode} from 'react';
import s from "./Catalog.module.scss"
import {Link} from "react-router-dom";

import walkie from '../../assets/img/walkie.jpg';
import CatalogItems from '../Catalog/CommonItem/CatalogItems';
import batUV5R from '../../assets/img/batUV5R.jpg';
import Tooltip from "@mui/material/Tooltip";


//type PropsWithChildren<P> = P & { children?: ReactNode }
//export interface YourType {
 //   type1: string,
  //  children?: any;
//}


export const Catalog= () => {

    return (
        <div className={s.catalog}>
            <div className={s.catalogContainer}>
                <div className={s.nameLink}>
                    <h4 id={'antenna'}>Антенны</h4>
                </div>
                <div className={s.catalogItemMain}>
                    <CatalogItems img={walkie} nameItem={'Основные характеристики'} price={'30,00'}
                                            descriptionItem={'gdhdhhdhdh'}/>
                    <CatalogItems img={batUV5R} nameItem={'Основные характеристики'} price={'30,00'}
                                  descriptionItem={'gdhdhhdhdh'}/>
                    <CatalogItems img={walkie} nameItem={'Основные характеристики'} price={'30,00'}
                                  descriptionItem={'gdhdhhdhdh'}/>
                    <CatalogItems img={walkie} nameItem={'Основные характеристики'} price={'30,00'}
                                  descriptionItem={'gdhdhhdhdh'}/>
                </div>
                <Link className={s.linkToCatalog} to={'/antennas'}>Посмотреть все</Link></div>
            <div className={s.catalogContainer}>

                <div className={s.nameLink}><h4 id={'battery'}>
                    Аккумуляторы
                </h4>
                </div>

                <div className={s.catalogItemMain}>
                    <CatalogItems img={walkie} nameItem={'Основные характеристики'} price={'30,00'}
                                  descriptionItem={'gdhdhhdhdh'}/>
                    <CatalogItems img={walkie} nameItem={'Основные характеристики'} price={'30,00'}
                                  descriptionItem={'gdhdhhdhdh'}/>
                    <CatalogItems img={walkie} nameItem={'Основные характеристики'} price={'30,00'}
                                  descriptionItem={'gdhdhhdhdh'}/>
                    <CatalogItems img={walkie} nameItem={'Основные характеристики'} price={'30,00'}
                                  descriptionItem={'gdhdhhdhdh'}/>


                </div>
                <Link className={s.linkToCatalog} to={'/batteries'}>Посмотреть все</Link>
            </div>
            <div className={s.catalogContainer}>

                <div className={s.nameLink}><h4 id={'headphones'}>
                    Наушники
                </h4>
                </div>
                <div className={s.catalogItemMain}>
                    <CatalogItems img={walkie} nameItem={'Основные характеристики'} price={'30,00'}
                                  descriptionItem={'hdskjhf;dkj'}/>
                    <CatalogItems img={batUV5R} nameItem={'Основные характеристики'} price={'45,00'}
                                  descriptionItem={'gdhdhhdhdh'}/>
                    <CatalogItems img={walkie} nameItem={'Основные характеристики'} price={'10,00'}
                                  descriptionItem={'gdhdhhdhdh'}/>
                    <CatalogItems img={walkie} nameItem={'Основные характеристики'} price={'10,00'}
                                  descriptionItem={'gdhdhhdhdh'}/>

                </div>
                <Link className={s.linkToCatalog} to={'/headphones'}>Посмотреть все</Link></div>


        </div>
    );
};
