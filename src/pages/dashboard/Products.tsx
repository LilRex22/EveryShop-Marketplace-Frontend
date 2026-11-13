import { CircleCheck, PackageX, Pencil, Search } from "lucide-react";
import { useState } from "react";

export function MyProducts() {
    const [query, setQuery] = useState("");
    const searchedProducts = [
        { name: 'Small Inverter 3.5kVA', description: 'A compact and reliable inverter that provides backup power for essential appliances, keeping your devices running during power outages.', image: '', price: '150,000', shop: 'Infinity Gadgets', location: 'Summervile', contact: '', shoplink: '', details: '', instock: false, category: 'Electronics' },
        { name: 'Small Inverter 3.5kVA', description: 'A compact and reliable inverter that provides backup power for essential appliances, keeping your devices running during power outages.', image: '', price: '150,000', shop: 'Infinity Gadgets', location: 'Summervile', contact: '', shoplink: '', details: '', instock: true, category: 'Electronics' },
        { name: 'Small Inverter 3.5kVA', description: 'A compact and reliable inverter that provides backup power for essential appliances, keeping your devices running during power outages.', image: '', price: '150,000', shop: 'Infinity Gadgets', location: 'Summervile', contact: '', shoplink: '', details: '', instock: false, category: 'Electronics' },
    ]

    return (
        <main className="p-4 sm:p-5 font-jakarta">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="w-full sm:w-2/3 lg:w-1/2">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight">Products & Catalog<span className="ms-2 text-gray-500 text-sm bg-[#f0edf1] rounded-full py-1 px-2 whitespace-nowrap inline-block align-middle">28 items</span></h1>
                    <p className="text-sm sm:text-md font-medium text-gray-500">Manage the products in your shop and keep your listings up to date. Add new products or make changes whenever you need to.</p>
                </div>
            
                <a href="" className="shadow-md rounded-lg bg-[#D95D28] px-3 py-3 font-medium text-white hover:bg-[#BD4D20] transition-colors w-full sm:w-auto text-center whitespace-nowrap">+ Add New Product</a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 sm:mt-10">
                <div className="shadow-md border border-gray-200 p-4 rounded-lg">
                    <h2 className="text-[#00873c] flex justify-between">Total Products <span ><CircleCheck/></span></h2>
                    <h2 className="text-3xl sm:text-4xl font-bold mt-5">28 <span className="text-gray-500 font-normal text-base sm:text-lg">Items</span></h2>
                </div>
                <div className="shadow-md border border-gray-200 p-4 rounded-lg">
                    <h2 className="text-[#ba1a1a] flex justify-between">Out Of Stock <span ><PackageX/></span></h2>
                    <h2 className="text-3xl sm:text-4xl font-bold mt-5">4 <span className="text-[#ba1a1a] font-normal text-base sm:text-lg">Actions Recommended</span></h2>
                </div>
                <div className="shadow-md border border-gray-200 p-4 rounded-lg sm:col-span-2 lg:col-span-1">
                    <h2 className="text-[#00873c] flex justify-between">In Stock <span ><CircleCheck/></span></h2>
                    <h2 className="text-3xl sm:text-4xl font-bold mt-5">24 <span className="text-gray-500 font-normal text-base sm:text-lg">Items</span></h2>
                </div>
            </div>

            <form className="flex flex-col md:flex-row bg-white rounded-lg shadow-sm p-4 mt-6 sm:mt-10 gap-3 md:gap-4 md:items-center border border-gray-200">
                <div className="bg-[#f3f0f4] flex w-full md:w-auto md:flex-1 items-center gap-2 rounded-xl px-4">
                    <Search size={18} className="text-gray-500" />
                    <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search for products in your shop..."
                        className="w-full min-w-0 py-3 px-2 rounded-lg outline-none"
                    />
                </div>
                <div className="bg-[#f3f0f4] flex items-center gap-2 rounded-xl px-4 w-full md:w-fit">
                    <select className="bg-transparent py-3 px-2 rounded-lg outline-none text-gray-500 w-full md:w-auto">
                        <option value="">Filter by:</option>
                        <option value="in-stock">In Stock</option>
                        <option value="out-of-stock">Out Of Stock</option>
                    </select>
                </div>
                <div className="bg-[#f3f0f4] flex items-center gap-2 rounded-xl px-4 w-full md:w-fit">
                    <select className="bg-transparent py-3 px-2 rounded-lg outline-none text-gray-500 w-full md:w-auto">
                        <option value="">Category:</option>
                        <option value="newest">Newest items</option>
                        <option value="oldest">Oldest items</option>
                        <option value="cheapest">Cheapest items</option>
                        <option value="expensive">Most expensive</option>
                    </select>
                </div>
                <div className="w-full md:w-auto">
                    <button type="submit" className="bg-[#D95D28] text-white rounded-lg px-3 py-3 md:py-2 font-medium w-full md:w-auto">Search</button>
                </div>
            </form>
        
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mt-8 sm:mt-15 gap-4">
                { searchedProducts.map((product) => (
                    <div key={product.name} className="bg-white rounded-lg p-4 shadow-sm flex flex-col gap-3 border border-gray-200">
                        <div className="w-full h-44 sm:h-48 lg:h-56 rounded-lg bg-gray-500">
                            <img src={product.image} alt="product_image" className="object-cover w-full h-full rounded-lg"/>
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold break-words">{product.name}</h2>
                        <p className="text-gray-500 text-sm border-b border-gray-200 pb-3">{product.category}</p>
                        <div className="flex justify-between items-center gap-2">
                            <p className="text-extrabold text-lg">&#8358; {product.price}</p>
                            {product.instock ? (
                                <span className="text-[#00873c] font-bold text-sm bg-[#92f5a4] p-1 rounded-full px-2 whitespace-nowrap">In Stock</span>
                            ) : (
                                <span className="text-[#ba1a1a] font-bold text-sm bg-[#f34e4eb6] p-1 rounded-full px-2 whitespace-nowrap">Out of Stock</span>
                            )}
                        </div>
                        <div className="flex justify-between gap-3 -mt-2">
                            <a href={product.details} className="bg-[#D95D28] text-sm mt-3 flex-1 text-white p-3 rounded-lg text-center font-bold">Edit <Pencil size={12} className="inline-block ms-1 -mt-1"/></a>
                        </div>
                    </div>
                ))}
                {/* what remains here now is pagination */}
            </div>
        </main>    
    )
}
