import React from 'react';
import logo from './logo.svg';
import s from './App.module.scss';
import Headers from "./components/Header/Headers";
import Greating from "./components/Greating/Greating";

function App() {
  return (
    <div className={s.app}>
        <div className={s.centerApp}>
           <Headers/>
            <Greating/>
        </div>

      ЭТО СТОИТ МИЛЛИОНЫ ДОЛЛАРОВ ХАХАХАХАХАХАХАХАХАХХАХА
    </div>
  );
}

export default App;
