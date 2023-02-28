import React from 'react';
import s from "./Catalog.module.scss"
import {Antennas} from '../Catalog/Antennas/Antennas';
import {Headphones} from "../Catalog/Headphones/Headphones";
import {Battery} from "../Catalog/Battery/Battery";

export const Catalog = () => {
    return (
        <div className={s.catalog}>

            <Antennas/>
            <Battery/>
            <Headphones/>

        </div>
    );
};
