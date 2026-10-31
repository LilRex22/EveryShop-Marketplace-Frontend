import { useState, useEffect } from 'react';
import logo from '../assets/everyshop-logo-lockup.svg';
import {Search, Store, LayoutDashboard, BadgePlus, CircleUserRound, Menu, X, House} from "lucide-react"
import { NavLink, type NavLinkRenderProps } from 'react-router-dom';

export function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const activeCheck = ({isActive}:NavLinkRenderProps): string => isActive ? 'text-[#D95D28] flex items-center gap-2' : 'flex items-center gap-2 hover:text-[#D95D28]'

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 0);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav className="font-jakarta flex flex-wrap items-center justify-between px-4 sm:px-6 py-4 bg-white sticky top-0 z-50 shadow-sm transition-shadow duration-200" style={{ boxShadow: scrolled ? "0 2px 10px rgba(0, 0, 0, 0.4)" : "none" }}>
            <a href="/"><img src={logo} alt="logo" className='h-8 sm:h-10 w-auto'/></a>

            {/* Mobile menu toggle */}
            <button
                type="button"
                className="lg:hidden rounded-lg p-2 hover:bg-gray-100 transition-colors"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                onClick={() => setOpen(!open)}
            >
                {open ? <X /> : <Menu />}
            </button>

            <div className={`${open ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6 w-full lg:w-auto mt-4 lg:mt-0`}>
                <NavLink to="/" className={activeCheck}><House/> Home</NavLink>
                <NavLink to="/explore-products" className={activeCheck}><Search/> Explore Products</NavLink>
                <NavLink to="/categories block" className={activeCheck}><Store /> Discover Shops</NavLink>
                <NavLink to="/merchant-center" className={activeCheck}><LayoutDashboard /> Merchant Center</NavLink>
            </div>

            {/* Actions */}
            <div className={`${open ? 'flex' : 'hidden'} lg:flex items-center gap-2 sm:gap-4 w-full lg:w-auto mt-4 lg:mt-0`}>
                <a href="" className=" flex flex-1 lg:flex-none justify-center items-center gap-2 rounded-lg bg-[#D95D28] px-3 py-2 font-medium text-white hover:bg-[#BD4D20] transition-colors"><BadgePlus /> List your shop</a>
                <a href="/login" className="flex flex-1 lg:flex-none justify-center items-center gap-2 rounded-lg bg-black px-3 py-2 font-medium text-white hover:bg-[#2b2b2bda] transition-colors"><CircleUserRound /> Login</a>
            </div>
        </nav>
    )
}