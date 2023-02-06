import React from 'react';

import s from './App.module.scss';
import Headers from "./components/Header/Headers";
import Greating from "./components/Greating/Greating";
import Catalog from "./components/Catalog/Catalog";
import {Questions} from "./components/Questions/Questions";
import {ParticlesContainer} from "./components/Particles";

function App() {
  return (
    <div className={s.app}>
        <div className={s.centerApp}>
           <Headers/>

            <Greating/>
            <div>
               <Catalog/>
            </div>
            <Questions/>

        </div>

      ЭТО СТОИТ МИЛЛИОНЫ ДОЛЛАРОВ ХАХАХАХАХАХАХАХАХАХХАХА
    </div>
  );
}

export default App;
