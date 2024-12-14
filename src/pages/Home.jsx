import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Root from './Root';
import { useLocation } from 'react-router-dom';


export default function Home() {
    const location = useLocation();
    const locPath = location.pathname;
    return (
        <div>
            <Navbar />
            {locPath === '/'? <Root />: <Outlet />}
            <Footer />
        </div>
    )
}
