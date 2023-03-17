import React from 'react';
import s from './Greating.module.scss'
import bf888 from '../../../../assets/img/bf888.png'
import {ParticlesContainer} from '../../../Particles';



const Greating = () => {
    return (
        <div>
        <div id={'main'} className={s.greatingPage}>
            <div className={s.particles}><ParticlesContainer /></div>
            <div className={s.greatingName}>
                <h2>Аксессуары для раций Baofeng
                </h2>
            </div>
            <div className={s.greatingImg}>
                <img alt={'bao'} src={bf888}/>
            </div>



        </div></div>
    );
};

export default Greating;