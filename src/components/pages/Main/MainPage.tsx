import React from 'react';
import {Catalog} from '../../Catalog/Catalog';
import s from './MainPage.module.scss';
import {Questions} from '../Main/Questions/Questions';
import {Footer} from '../../common/Footer/Footer';



export const MainPage = () => {
    return (
       <div >

            <div className={s.catalogContainer}><Catalog/></div>
            <Questions/>
           <Footer/>
       </div>
    );
};
