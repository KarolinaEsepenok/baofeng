import React from 'react';
import s from "./Catalog.module.scss"
import Antenns from "../Catalog/Antenns/Antenns";
import Headphones from "../Catalog/Headphones/Headphones";
import Battery from "../Catalog/Battery/Battery";

const Catalog = () => {
    return (
        <div className={s.catalog}>
            <Headphones/>
            <Antenns/>
            <Battery/>
        </div>
    );
};

export default Catalog;