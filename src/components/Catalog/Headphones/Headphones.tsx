import React from 'react';
import s from "../Catalog.module.scss";
import CatalogItems from "../CommonItem/CatalogItems";
import walkie from '../../../assets/img/walkie.jpg';
import batUV5R from '../../../assets/img/batUV5R.jpg'
import {Link} from "react-router-dom";


export const Headphones = () => {
    return (
        <div>
            <div><Link to='/'>Назад</Link></div>
        <div className={s.catalogContainer}>

         <div  className={s.nameLink}><h4 id={'headphones'} >
             Наушники
         </h4>
             <Link className={s.linkToCatalog} to={'/headphones'}>Посмотреть все</Link>
         </div>
            <div className={s.catalogItemMain}>
                <CatalogItems img={walkie} nameItem={'Модель'} price={'30,00'} descriptionItem={'hdskjhf;dkj'}/>
                <CatalogItems img={batUV5R} nameItem={'Модель'} price={'45,00'} descriptionItem={'gdhdhhdhdh'}/>
                <CatalogItems img={walkie} nameItem={'Модель'} price={'10,00'} descriptionItem={'gdhdhhdhdh'}/>
                <CatalogItems img={walkie} nameItem={'Модель'} price={'20,00'} descriptionItem={'gdhdhhdhdh'}/>
                <CatalogItems img={walkie} nameItem={'Модель'} price={'20,00'} descriptionItem={'gdhdhhdhdh'}/>

            </div></div></div>
    );
};
