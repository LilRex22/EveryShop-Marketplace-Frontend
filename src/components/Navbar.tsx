import logo from '../assets/everyshop-logo-lockup.svg';
import {Search, Store, LayoutDashboard, BadgePlus, CircleUserRound} from "lucide-react"
export function Navbar() {
    return (
        <nav className="font-jakarta flex items-center justify-between px-6 py-4 bg-white" style={{ boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)" }}>
            <a href="/"><img src={logo} alt="logo" className='h-10 w-auto'/></a>

            <div className="flex items-center gap-6">
                <a href="/explore" className='flex items-center gap-2 hover:text-[#D95D28]'><Search/> Explore Products</a>
                <a href="/categories block" className='flex items-center gap-2 hover:text-[#D95D28]'><Store /> Discover Shops</a>
                <a href="/merchant-center" className='flex items-center gap-2 hover:text-[#D95D28]'><LayoutDashboard /> Merchant Center</a>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
                <a href="" className=" flex items-center gap-2 rounded-lg bg-[#D95D28] px-3 py-2 font-medium text-white hover:bg-[#BD4D20] transition-colors"><BadgePlus /> List your shop</a>
                <a href="/login" className="flex items-center gap-2 rounded-lg bg-black px-3 py-2 font-medium text-white hover:bg-[#2b2b2bda] transition-colors"><CircleUserRound /> Login</a>
            </div>
        </nav>
    )
}