import React from 'react';
import {Catalog} from '../../Catalog/Catalog';
import s from './MainPage.module.scss';
import {Questions} from '../Main/Questions/Questions';
import {Footer} from '../../common/Footer/Footer';
import Headers from '../../common/Header/Headers';
import Greating from '../../pages/Main/Greating/Greating';



export const MainPage = () => {
    return (
       <div >
<Headers/>
           <Greating/>
            <div className={s.catalogContainer}><Catalog/></div>
            <Questions/>
           <Footer/>
       </div>
    );
};
