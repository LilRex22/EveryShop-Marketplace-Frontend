import { useState } from "react";
import {Search, ArrowRight, Store} from "lucide-react"
export function HeroSearch() {
    const [category, setCategory] = useState("All Listings");
    const [query, setQuery] = useState("");
    const trending: string[] = [
        "Solar Inverters",
        "Teak Furniture",
        "Local Fashion",
        "Handmade Crafts",
        "Organic Produce",
    ]

    return(
        <form className="bg-white rounded-lg shadow-sm p-4 mt-10">
            <div className="flex justify-between">
                <div className="">
                    {["All Listings", "Products", "Merchant Shops"].map((tab) => (
                        <button
                            key={tab}
                            type="button"
                            onClick={() => setCategory(tab)}
                            className={`rounded-full px-4 py-2 text-sm ${
                                category === tab
                                    ? "bg-black text-white"
                                    : "text-gray-600 hover:bg-gray-100"
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="">
                    <p className="text-gray-600 flex items-center gap-2"><Store className="text-[#006b2e]"/>Search.Shop.Buy</p>
                </div>
            </div>
            <div className="flex flex-row items-center gap-4 mt-5">
                <div className="flex flex-1 items-center gap-2 rounded-xl bg-[#f6f2f7] px-4">
                    <Search size={18} className="text-gray-500" />
                    <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="What are you looking for? e.g. Solar inverters, teak furniture..."
                        className="w-full bg-transparent py-3 outline-none"
                    />
                </div>
                <button
                    type="submit"
                    className="flex items-center justify-center gap-2 rounded-xl bg-[#D95D28] px-5 py-3 font-medium text-white hover:bg-[#bd4d20]"
                    >
                    Find Nearby <ArrowRight size={18} />
                </button>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
                <span className="mr-1 font-medium text-gray-500">
                    TRENDING SEARCHES:
                </span>

                {trending.map((item) => (
                    <button
                        key={item}
                        type="button"
                        onClick={() => setQuery(item)}
                        className="rounded-full bg-gray-100 px-3 py-1.5 text-gray-700 hover:bg-gray-200"
                    >
                        {item}
                    </button>
                ))}
            </div>
        </form>
    )
}