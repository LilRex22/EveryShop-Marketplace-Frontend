import { Store, ShieldCheck, Search, Clock, MessageSquareText, CircleCheck, Star, MapPin } from "lucide-react";
import { useState } from "react";


export function Shops () {
    const [query, setQuery] = useState('')
    const [category, setCategory] = useState('')
    const [filter, setFilter] = useState('')

    const searchedShops = [
        { name: 'Zawadi Studio & Woodworks', description: 'Specialized in artisanal handwoven rugs, solid olive wood kitchenware, and custom architectural planters.', image: '', location: '26 main market line', whatsapp: '', verified: false, rating: 0, reviews: 0, product1img: '', product2img: '', product3img: '', workinghours: 'Mon - Fri: 9.00am - 6.00pm', shoplink: ''},
    ]

    return (
        <main className="min-h-full text-black bg-[#fbf8fc] font-jakarta overflow-x-hidden">
            <section className="px-4 sm:px-8 lg:px-15 py-6 lg:py-10 flex flex-col gap-4 lg:gap-2 lg:flex-row lg:justify-between lg:items-end">
                <div className="w-full lg:w-3/4">
                    <div className="text-xs sm:text-sm bg-[#92f5a4] text-[#006d30] rounded-2xl px-2 py-1 w-fit mb-1"><Store size={20} className="inline-block me-1 text-[#006d30]"/> Onitsha Merchant Network</div>
                    <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">Discover Local Shops & Verified Workshops In Onitsha</h1>
                    <p className="text-gray-500 text-sm sm:text-base w-full lg:w-150 mt-3">Browse over 1000+ verified neighbourhood artisans, physical workshop and independent traders across onitsha. Connect
                        instantly via whatsapp or visit their show rooms in person to see their products and services without any middleman.
                    </p>
                </div>
                <div className="p-1 w-full sm:w-fit flex flex-col text-left lg:text-right gap-2 justify-center items-start lg:items-end">
                    <a href="" className="flex w-full sm:w-auto justify-center items-center gap-2 rounded-lg bg-[#D95D28] px-3 py-2 font-medium text-white hover:bg-[#BD4D20] transition-colors">
                        <Store size={20} className="text-white"/>
                        List your shop
                    </a>
                    <p className="text-xs flex items-center">
                        <ShieldCheck size={18} className="inline-block shrink-0 text-[#006d30]"/>
                        No sign-up fee. 0% commission on sales.</p>
                </div>
            </section>

            {/* shop searching and filtering */}
            <section className="px-4 sm:px-8 lg:px-15 py-6 lg:py-10">
                <form onSubmit={() => setCategory(category)} className="bg-white p-3 sm:p-4 rounded-lg shadow-sm -mt-5 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
                    <div className="flex flex-col sm:flex-row sm:flex-nowrap lg:flex-1 items-stretch sm:items-center gap-1 sm:gap-2 rounded-xl bg-[#f6f2f7] px-3 sm:px-4 py-1 sm:py-0">
                        <Search size={30} className="text-gray-500 shrink-0 hidden sm:block" />
                        
                        <div className="min-w-0 w-full sm:w-50">
                            <select className="text-[#D95D28] py-2 px-1 sm:px-3 w-full max-w-full bg-transparent" value={category} onChange={(event) => setCategory(event.target.value)}>
                                <option value="">Category</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Fashion">Fashion</option>
                                <option value="Food">Food</option>
                            </select>
                        </div>

                        <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search in this category(eg.,inverter, solar, charger)....."
                        className="w-full min-w-0 bg-transparent py-3 px-1 sm:px-0 text-sm sm:text-base outline-none"
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
                        <div className="border border-gray-300 p-1 rounded-lg w-full sm:flex-1 lg:flex-none">
                            <select className="text-gray-500 py-2 px-3 w-full" value={filter} onChange={(event) => setFilter(event.target.value)}>
                                <option value="">Sort by:</option>
                                <option value="newest">Verified Shops</option>
                                <option value="oldest">Most rated Shops</option>
                                <option value="cheapest">Featured Shops</option>
                                {/* <option value="expensive"></option> */}
                            </select>
                        </div>
                        <button type="submit" className="bg-[#D95D28] text-white rounded-lg px-4 py-3 sm:py-2 w-full sm:w-auto font-medium">Find Shops</button>
                    </div>
                </form>
            </section>

            {/* searched shops */}
            <section className="px-4 sm:px-8 lg:px-15 py-6 lg:py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                    {searchedShops.map((shop) => (
                        <div key={shop.name} className="w-full min-w-0 bg-white rounded-lg p-3 sm:p-4 shadow-sm flex flex-col gap-3 border border-gray-200">
                            <div className="w-full h-44 sm:h-56 rounded-lg bg-gray-500 relative">
                                <img src={shop.image} alt="shop_image" className="object-cover w-full h-full rounded-lg"/>
                                <div className="absolute top-2 left-2">
                                    <p className="px-2 py-1 bg-[#f3f0f4] rounded-full text-black flex items-center text-xs sm:text-sm"><CircleCheck size={16} className="inline-block me-1 text-[#006b2e]"/>verified</p>
                                </div>
                                <div className="absolute top-2 right-2">
                                    <p className="px-2 py-1 bg-[#92f5a4] rounded-full text-black flex items-center text-xs sm:text-sm"><Star size={14} className="inline-block me-1 text-black fill-black"/>{shop.rating} rating</p>
                                </div>
                                <div className="bg-white p-1 rounded-lg text-xs sm:text-sm absolute bottom-2 left-2 max-w-[calc(100%-1rem)] flex items-center">
                                    <MapPin size={16} className="inline-block shrink-0 me-1"/>
                                    <span className="truncate">{shop.location}</span>
                                </div>
                            </div>
                            <h2 className="text-lg sm:text-2xl font-extrabold wrap-break-word">{shop.name}</h2>
                            <p className="text-gray-500 text-sm pb-1">{shop.description}</p>
                            <div className="rounded-lg bg-[#f6f2f7] p-2 text-xs sm:text-sm text-gray-500 w-fit max-w-full flex items-center">
                                <Clock size={18} className="inline-block shrink-0 me-1"/>
                                {shop.workinghours}
                            </div>
                            <div className="flex justify-between gap-2">
                                <p className="text-sm sm:text-base">Catalog Samples</p>
                                <p className="text-[#D95D28] text-xs sm:text-sm">28 listed items</p>
                            </div>
                            <div className="grid grid-cols-3 gap-1 sm:gap-2">
                                <div className="min-w-0">
                                    <img src={shop.product1img} alt="prod1" loading="lazy" className="object-cover w-full h-20 sm:h-24 lg:h-28 rounded-lg bg-gray-200"/>
                                    <p className="text-xs sm:text-sm font-semibold mt-1">&#8358; 12,000</p>
                                </div>
                                <div className="min-w-0">
                                    <img src={shop.product2img} alt="prod2" loading="lazy" className="object-cover w-full h-20 sm:h-24 lg:h-28 rounded-lg bg-gray-200"/>
                                    <p className="text-xs sm:text-sm font-semibold mt-1">&#8358; 9,000</p>
                                </div>
                                <div className="min-w-0">
                                    <img src={shop.product3img} alt="prod3" loading="lazy" className="object-cover w-full h-20 sm:h-24 lg:h-28 rounded-lg bg-gray-200"/>
                                    <p className="text-xs sm:text-sm font-semibold mt-1">&#8358; 23,000</p>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-between gap-2">
                                <a href={shop.shoplink} className="bg-[#e4e1e6] p-3 sm:p-4 rounded-lg text-sm flex items-center w-full sm:w-1/2 justify-center"><Store size={18} className="inline-block me-1"/> Visit Shop</a>
                                <a href={shop.whatsapp} className="bg-[#92f5a4] p-3 sm:p-4 rounded-lg text-sm flex items-center text-[#006b2e] w-full sm:w-1/2 justify-center"><MessageSquareText size={18} className="inline-block me-1"/> Whatsapp</a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}