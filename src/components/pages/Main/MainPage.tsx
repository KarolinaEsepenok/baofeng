import React from 'react';
import Greating from './Greating/Greating';
import {Catalog} from '../../Catalog/Catalog';
import Header from '../../common/Header/Headers'
import s from '../../../App.module.scss';
import {Questions} from '../Main/Questions/Questions';

export const MainPage = () => {
    return (

        <div className={s.app}>
            <div className={s.centerApp}>
                <Header/>
                <Greating/>
                <div><Catalog/></div>
            </div>
            <Questions/>

        </div>
    );
};
