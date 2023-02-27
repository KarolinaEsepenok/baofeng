import React from 'react';

import {Catalog} from '../../Catalog/Catalog';

import s from '../../../App.module.scss';
import {Questions} from '../Main/Questions/Questions';


export const MainPage = () => {
    return (

        <div className={s.app}>

                <div><Catalog/></div>
            <Questions/>

        </div>
    );
};
