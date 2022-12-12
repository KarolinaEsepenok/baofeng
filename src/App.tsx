import React from 'react';
import logo from './logo.svg';
import s from './App.module.scss';
import Headers from "./components/Header/Headers";
import Greating from "./components/Greating/Greating";
import CatalogItems from "./components/Catalog/CatalogItems";
import bf888ЫЫ from "./components/img/bf888ЫЫ.jpg"
import Catalog from "./components/Catalog/Catalog";

function App() {
  return (
    <div className={s.app}>
        <div className={s.centerApp}>
           <Headers/>
            <Greating/>
            <div>
               <Catalog/>

            </div>

        </div>

      ЭТО СТОИТ МИЛЛИОНЫ ДОЛЛАРОВ ХАХАХАХАХАХАХАХАХАХХАХА
    </div>
  );
}

export default App;
