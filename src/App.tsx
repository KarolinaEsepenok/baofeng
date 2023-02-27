import React from 'react';

import s from './App.module.scss';
import {RoutesComponents} from './routes/RoutesComponents';




function App() {
  return (

    <div className={s.app}>
        <div className={s.centerApp}>
           <RoutesComponents/>
        </div>
    </div>
  );
}

export default App;
