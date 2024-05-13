import React from 'react';
import { FaUtensils } from 'react-icons/fa';
import { FaChartLine, FaDumbbell, FaFire } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="fixed bottom-0 w-96 h-24 bg-gray-800 text-white shadow-lg">
            <div className="flex justify-around pt-5">
                <NavLink to="/" className="flex flex-col items-center justify-center active:text-orange-600">
                    <FaFire className="text-xl mb-1" />
                    Page1
                </NavLink>
                <NavLink to="/page2" className="flex flex-col items-center justify-center active:text-orange-600">
                    <FaDumbbell className="text-xl mb-1" />
                    Page2
                </NavLink>
                <NavLink to="/page3" className="flex flex-col items-center justify-center active:text-orange-600">
                    <FaUtensils className="text-xl mb-1" />
                    Page3
                </NavLink>
                <NavLink to="/page4" className="flex flex-col items-center justify-center active:text-orange-600">
                    <FaChartLine className="text-xl mb-1" />
                    Page4
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
