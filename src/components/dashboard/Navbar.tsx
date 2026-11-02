import { House, User } from "lucide-react";
import { NavLink } from "react-router-dom";

export function Navbar() {
    return (
        <nav className="bg-[#fbf8fc] border-b border-[#eee7ee] px-6 py-4  font-jakarta">
            <div className="flex items-center justify-between">
                <div className="flex gap-2 items-center">
                    <div className="flex items-center gap-1 rounded-full bg-[#92f5a4] py-1 px-2 text-sm"><House size={20} className="inline-block"/> Store Open to Orders</div>
                    <p className="text-sm">No.10 Okoli Avenue, Onitsha</p>
                </div>
                <div className="flex items-center gap-4">
                    <NavLink to='/profile' className="rounded-full bg-[#D95D28] p-2 cursor-pointer">
                        <User size={20} className="text-white"/>
                    </NavLink>
                    |
                    <button className="text-sm text-[#D95D28] cursor-pointer">Logout</button>
                </div>
            </div>
        </nav>
    );
}
