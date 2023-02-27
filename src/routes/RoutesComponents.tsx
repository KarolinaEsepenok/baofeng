import React from 'react';
import { Navigate, Route, Routes} from "react-router-dom";
import {Error404} from '../components/common/Error404/Error404';
import {MainPage} from '../components/pages/Main/MainPage';
import Headphones from '../components/Catalog/Headphones/Headphones';
import Battery from '../components/Catalog/Battery/Battery';
import Antennas from 'src/components/Catalog/Antennas/Antennas';

export const RoutesComponents = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainPage/>}/>
                <Route path={'/headphones'} element={<Headphones/>}/>
                <Route path={'/antennas'} element={<Antennas/>}/>
                <Route path={'/batteries'} element={<Battery/>}/>
                <Route path={'/404'} element={<Error404/>}/>
                <Route path={'/*'} element={<Navigate to={'/404'}/>}/>
            </Routes>
        </div>
    );
};
