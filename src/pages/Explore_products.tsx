import { Dot, ShieldCheck, Zap, Search } from "lucide-react"
import { useState } from "react"

export function Products() {
    const [query, setQuery] = useState('')
    const [category, setCategory] = useState('')
    const [filter, setFilter] = useState('')

    return (
        <main className="min-h-full text-black bg-[#fbf8fc] font-jakarta">
            <section className="px-15 py-10 flex justify-between items-end">
                <div className="">
                    <div className="text-sm bg-[#92f5a4] text-[#006d30] rounded-2xl px-2 py-1 w-fit mb-1"><Dot size={20} className="inline-block"/>Live City Stock</div>
                    <h1 className="text-5xl font-extrabold tracking-tight leading-tight">All Available Listings</h1>
                    <p className="text-gray-500 w-150 mt-3">Over 1000 verified products available for instant collection or direct dispatch from 
                        local urban workshops. Browse through our extensive catalog and find the perfect product for your needs.
                    </p>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-3 w-fit flex gap-2">
                    <div className="text-sm flex items-center gap-2">
                        <ShieldCheck size={20} className="text-[#D95D28]"/>
                        <div className="border-r border-gray-300 pr-3">
                            <h2>BUYER PROTECTED</h2>
                            <p className="font-extrabold text-gray-500">Direct P2P Handover</p>
                        </div>
                    </div>
                    <div className="text-sm flex items-center gap-2">
                        <Zap size={20} className="text-[#005322]"/>
                        <div className="">
                            <h2>INSTANT PICKUP</h2>
                            <p className="font-extrabold text-gray-500">Within 2 Hours</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* products searching and filtering */}
            <section className="px-15 py-10">
                <form className="bg-white p-4 rounded-lg shadow-sm -mt-5 flex items-center justify-between gap-3">
                    <div className="flex flex-1 items-center gap-2 rounded-xl bg-[#f6f2f7] px-4">
                        <Search size={30} className="text-gray-500" />
                        
                        <div className="">
                            <select className="text-[#D95D28] py-2 px-3" value={category} onChange={(event) => setCategory(event.target.value)}>
                                <option value="">Select a category</option>
                                <option value="electronics">Electronics</option>
                                <option value="fashion">Fashion</option>
                                <option value="food">Food</option>
                            </select>
                        </div>

                        <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search in this category(eg.,inverter, solar, charger)....."
                        className="w-full bg-transparent py-3 outline-none"
                        />
                    </div>
                    <div className="flex gap-2">
                        <div className=" border border-gray-300 p-1 rounded-lg">
                            <select className="text-gray-500 py-2 px-3" value={filter} onChange={(event) => setFilter(event.target.value)}>
                                <option value="">Newest items</option>
                                <option value="electronics">oldest items</option>
                                <option value="fashion">cheapest items</option>
                                <option value="food">most expensive</option>
                            </select>
                        </div>
                        <button type="submit" className="bg-[#D95D28] text-white rounded-lg px-3 py-2 font-medium">Search</button>
                    </div>
                </form>
            </section>
        </main>
    )
}