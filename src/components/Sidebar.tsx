import { LayoutDashboard, Package, Store, ChartNoAxesCombined, Settings, CircleHelp, ChevronDown } from 'lucide-react'
import logo from '../assets/everyshop-logo-lockup.svg';
import { NavLink } from 'react-router-dom';


export function Sidebar({ open = false, onClose = () => {} }: { open?: boolean; onClose?: () => void }) {
    const navigation = [
        { label: 'Overview', path: '/dashboard', icon: LayoutDashboard },
        { label: 'Products', path: '/dashboard/products', icon: Package, badge: '28' },
        { label: 'Shop Profile & Storefront', path: '/dashboard/shop', icon: Store },
        { label: 'Analytics', path: '/dashboard/analytics', icon: ChartNoAxesCombined },
        { label: 'Settings', path: '/dashboard/settings', icon: Settings },
        { label: 'Support', path: '/dashboard/support', icon: CircleHelp },
    ]

    return (
        <>
            {/* Dark overlay behind the drawer (mobile/tablet only) */}
            {open && (
                <div
                    className="fixed inset-0 z-40 bg-black/40 lg:hidden"
                    onClick={onClose}
                    aria-hidden="true"
                />
            )}

            <aside className={`fixed inset-y-0 left-0 z-50 w-70 max-w-[85vw] overflow-y-auto transition-transform duration-200 ease-out ${open ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:max-w-none lg:w-70 border-r border-gray-200 p-5 font-jakarta bg-[#fbf8fc]`}>
                <NavLink to="/" onClick={onClose} className="flex items-center gap-2 mb-7 px-1">
                    <img src={logo} alt="logo" className='h-8 sm:h-10 w-auto' />
                </NavLink>

                <div className="w-full bg-white rounded-xl px-3 py-3 mb-6 flex items-center justify-between shadow-sm border border-[#eee7ee]">

                    <div className="text-left">
                        <p className="text-[10px] font-semibold tracking-wider text-[#806F6F] uppercase mb-1">
                            Active Shop
                        </p>

                        <p className="text-md font-bold text-[#302424]">
                            Zawadi Woodworks
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-1">
                        <span className="flex items-center gap-1 text-[10px] font-semibold text-green-700">
                            <span className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                            Live
                        </span>
                        <ChevronDown size={14} className="text-[#806F6F]" />
                    </div>
                </div>

                <nav className='flex flex-col gap-2'>
                    {navigation.map((link) => {
                        return (
                            <NavLink to={link.path}
                            end={link.path === "/dashboard"} // to ensure that the Overview link is only active on this exact path.
                            key={link.label} 
                            onClick={onClose}
                            className={({ isActive }) => isActive ? 'bg-[#D95D28] text-white rounded-lg px-3 py-2 flex items-center gap-2' : 'hover:bg-[#F5F5F5] rounded-lg px-3 py-2 flex items-center gap-2'}
                            >
                                <span className='flex-1'><link.icon size={16} className='inline-block me-1'/>{link.label}</span>
                            </NavLink>
                        )
                    })}
                </nav>
            </aside>
        </>
    )
}
