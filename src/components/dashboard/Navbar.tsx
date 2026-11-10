import { House, User, Menu } from "lucide-react";
import { NavLink } from "react-router-dom";

export function Navbar({ onMenuClick }: { onMenuClick: () => void }) {
    return (
        <nav className="bg-[#fbf8fc] border-b border-[#eee7ee] px-3 sm:px-6 py-3 sm:py-4 font-jakarta">
            <div className="flex items-center justify-between gap-2 sm:gap-4">
                <button onClick={onMenuClick} className="lg:hidden p-2 -ml-1 shrink-0" aria-label="Open menu">
                    <Menu size={22} />
                </button>
                <div className="flex flex-1 min-w-0 gap-2 items-center">
                    <div className="flex items-center gap-1 rounded-full bg-[#92f5a4] py-1 px-2 text-xs sm:text-sm whitespace-nowrap shrink-0"><House size={20} className="inline-block"/> Store Open<span className="hidden sm:inline">&nbsp;to Orders</span></div>
                    <p className="hidden md:block text-md truncate">Welcome back, Zawadi</p>
                </div>
                <div className="flex items-center gap-2 sm:gap-4 shrink-0">
                    <NavLink to='/profile' className="rounded-full bg-[#D95D28] p-2 cursor-pointer">
                        <User size={20} className="text-white"/>
                    </NavLink>
                    <span className="hidden sm:inline">|</span>
                    <button className="text-sm text-[#D95D28] cursor-pointer">Logout</button>
                </div>
            </div>
        </nav>
    );
}
