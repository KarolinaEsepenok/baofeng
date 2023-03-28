import React from 'react';

import s from './App.module.scss';
import {RoutesComponents} from './routes/RoutesComponents';
import Greating from '../src/components/pages/Main/Greating/Greating';
import Headers from '../src/components/common/Header/Headers';
import {Footer} from '../src/components/common/Footer/Footer';




function App() {
  return (

    <div className={s.app}>
        <div className={s.centerApp}>
            <Headers/>
            <Greating/>
           <RoutesComponents/>
            <Footer/>
        </div>
    </div>
  );
}

export default App;
