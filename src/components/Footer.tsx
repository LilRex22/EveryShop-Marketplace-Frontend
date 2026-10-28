import logo from '../assets/everyshop-logo-lockup.svg';
import { CircleCheck } from "lucide-react";

export function Footer() {
    return (
        <footer className='font-jakarta px-4 sm:px-8 lg:px-15 py-10 mt-5'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-0 border-b border-gray-200 pt-5 pb-10">
                <div className="sm:col-span-2 lg:col-span-2 flex flex-col gap-6 items-start">
                    <img src={logo} alt="logo" className='h-8 sm:h-10 w-auto'/>
                    <p className='text-md text-gray-500 max-w-md lg:max-w-none'>A friction-free local commerce bridge connecting verified urban artisans
                        , neighbourhood workshops and independent merchants with city residents.
                    </p>
                    <div className="rounded-4xl w-fit p-1 px-3 text-xs sm:text-base" style={{backgroundColor: '#92f5a4'}}>
                        <p className='text-[#006d30] text-sm'><CircleCheck className="inline-block mr-1" size={20}/>Zero Commission <span className="me-1 font-extrabold">.</span>Peer-to-Peer.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className='font-extrabold mb-2'>Marketplace</h3>
                    <a href="" className='text-sm text-gray-500 hover:text-[#D95D28]'>Explore Products</a>
                    <a href="" className='text-sm text-gray-500 hover:text-[#D95D28]'>Discover Shops</a>
                    <a href="" className='text-sm text-gray-500 hover:text-[#D95D28]'>Featured Artisans</a>
                    <a href="" className='text-sm text-gray-500 hover:text-[#D95D28]'>Popular Listings</a>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className='font-extrabold mb-2'>Trust & Sellers</h3>
                    <a href="" className='text-sm text-gray-500 hover:text-[#D95D28]'>List Your Shop</a>
                    <a href="" className='text-sm text-gray-500 hover:text-[#D95D28]'>Merchant Center</a>
                    <a href="" className='text-sm text-gray-500 hover:text-[#D95D28]'>Seller Terms and Safety</a>
                </div>
            </div>
            <p className='text-gray-500 mt-5 text-sm'>&copy; 2026 EveryShop. Connecting Onitsha to local trusted businesses. <br />Powered by <a href="https://www.linkedin.com/in/chukwuemeka-rex-4b3bb63bb/" target='_blank' rel="noopener noreferrer" className='text-[#D95D28] hover:underline'>Code.Rx</a></p>
        </footer>
    )
}
