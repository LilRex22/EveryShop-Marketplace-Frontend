import { Store, ShieldCheck, Search, MessageSquareText, ArrowRight } from "lucide-react";
import { useState } from "react";


export function Shops () {
    const [query, setQuery] = useState('')
    const [category, setCategory] = useState('')
    const [filter, setFilter] = useState('')

    const searchedShops = [
        { name: 'Zawadi Studio & Woodworks', description: '', image: '', location: '', whatsapp: '', verified: false, rating: 0, reviews: 0, product1img: '', product2img: '', product3img: '', workinghours: '', shoplink: ''},
    ]

    return (
        <main className="min-h-full text-black bg-[#fbf8fc] font-jakarta">
            <section className="px-4 sm:px-8 lg:px-15 py-6 lg:py-10 flex flex-col gap-2 lg:flex-row lg:justify-between lg:items-end">
                <div className="w-3/4">
                    <div className="text-sm bg-[#92f5a4] text-[#006d30] rounded-2xl px-2 py-1 w-fit mb-1"><Store size={20} className="inline-block me-1 text-[#006d30]"/> Onitsha Merchant Network</div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">Discover Local Shops & Verified Workshops In Onitsha</h1>
                    <p className="text-gray-500 w-full lg:w-150 mt-3">Browse over 1000+ verified neighbourhood artisans, physical workshop and independent traders across onitsha. Connect
                        instantly via whatsapp or visit their show rooms in person to see their products and services without any middleman.
                    </p>
                </div>
                <div className="p-1 w-full sm:w-fit flex flex-col text-right gap-2 justify-center items-end">
                    <a href="" className=" flex flex-1 lg:flex-none justify-center items-center gap-2 rounded-lg bg-[#D95D28] px-3 py-2 font-medium text-white hover:bg-[#BD4D20] transition-colors">
                        <Store size={20} className="text-white"/>
                        List your shop
                    </a>
                    <p className="text-xs flex items-center">
                        <ShieldCheck size={18} className="inline-block  text-[#006d30]"/>
                        No sign-up fee. 0% commission on sales.</p>
                </div>
            </section>

            {/* shop searching and filtering */}
            <section className="px-4 sm:px-8 lg:px-15 py-6 lg:py-10">
                <form onSubmit={() => setCategory(category)} className="bg-white p-4 rounded-lg shadow-sm -mt-5 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
                    <div className="flex flex-wrap sm:flex-nowrap lg:flex-1 items-center gap-2 rounded-xl bg-[#f6f2f7] px-4">
                        <Search size={30} className="text-gray-500 shrink-0" />
                        
                        <div className="min-w-0 w-50">
                            <select className="text-[#D95D28] py-2 px-3 max-w-full" value={category} onChange={(event) => setCategory(event.target.value)}>
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
                        className="w-full min-w-0 bg-transparent py-3 outline-none"
                        />
                    </div>
                    <div className="flex gap-2 w-full lg:w-auto">
                        <div className=" border border-gray-300 p-1 rounded-lg flex-1 lg:flex-none">
                            <select className="text-gray-500 py-2 px-3 w-full" value={filter} onChange={(event) => setFilter(event.target.value)}>
                                <option value="">Sort by:</option>
                                <option value="newest">Verified Shops</option>
                                <option value="oldest">Most rated Shops</option>
                                <option value="cheapest">Featured Shops</option>
                                {/* <option value="expensive"></option> */}
                            </select>
                        </div>
                        <button type="submit" className="bg-[#D95D28] text-white rounded-lg px-3 py-2 font-medium">Find Shops</button>
                    </div>
                </form>
            </section>

            {/* searched shops */}
            <section className="px-4 sm:px-8 lg:px-15 py-6 lg:py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {searchedShops.map((shop) => (
                        <div key={shop.name} className="bg-white rounded-lg p-4 shadow-sm flex flex-col gap-3 border border-gray-200">
                            <div className="w-full h-48 sm:h-56 rounded-lg bg-gray-500">
                                <img src={shop.image} alt="shop_image" className="object-cover w-full h-full rounded-lg"/>
                            </div>
                            <h2 className="text-xl sm:text-2xl font-extrabold">{shop.name}</h2>
                            <p className="text-gray-500 text-sm border-b border-gray-200 pb-3">{shop.description}</p>
                            <div className="flex justify-between items-center">
                                <p className="text-extrabold text-lg">{shop.location}</p>
                                <a href={shop.shoplink} className="text-xs text-gray-500 flex items-center gap-1 hover:text-[#D95D28]"><Store size={20} className="inline-block"/> {shop.name}</a>
                            </div>
                            <div className="flex justify-between gap-3 -mt-2">
                                <a href={shop.product1img} className="bg-[#D95D28] text-sm mt-3 flex-1 text-white p-3 rounded-lg text-center font-bold">Product 1 <ArrowRight size={12} className="inline-block"/></a>
                                <a href={shop.product2img} className="mt-3 bg-[#005322] p-3 rounded-lg"><MessageSquareText size={20} className="text-white font-bold"/></a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}