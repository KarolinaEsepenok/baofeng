import React from 'react';
import {Catalog} from '../../Catalog/Catalog';
import s from './MainPage.module.scss';
import {Questions} from '../Main/Questions/Questions';


export const MainPage = () => {
    return (
       <div >
            <div className={s.catalogContainer}><Catalog/></div>
            <Questions/>
       </div>
    );
};
