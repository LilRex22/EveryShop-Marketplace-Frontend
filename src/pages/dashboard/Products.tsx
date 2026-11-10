import { CircleCheck, PackageX } from "lucide-react";


export function MyProducts() {
    return (
        <main className="p-5 font-jakarta ">
            <div className="flex items-center justify-between">
                <div className="w-1/2">
                    <h1 className="text-4xl font-extrabold leading-tight tracking-tight">Products & Catalog<span className="ms-2 text-gray-500 text-sm bg-[#f0edf1] rounded-full py-1 px-2">28 items</span></h1>
                    <p className="text-md font-medium text-gray-500">Manage the products in your shop and keep your listings up to date. Add new products or make changes whenever you need to.</p>
                </div>
            
                <a href="" className="shadow-md rounded-lg bg-[#D95D28] px-3 py-3 font-medium text-white hover:bg-[#BD4D20] transition-colors">+ Add New Product</a>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-10">
                <div className="shadow-md border border-gray-200 p-4 rounded-lg">
                    <h2 className="text-[#00873c] flex justify-between">Active Listings <span ><CircleCheck/></span></h2>
                    <h2 className="text-4xl font-bold mt-5">24 <span className="text-gray-500 font-normal text-lg">Items</span></h2>
                </div>
                <div className="shadow-md border border-gray-200 p-4 rounded-lg">
                    <h2 className="text-[#ba1a1a] flex justify-between">Out Of Stock <span ><PackageX/></span></h2>
                    <h2 className="text-4xl font-bold mt-5">5 <span className="text-[#ba1a1a] font-normal text-lg">Actions Recommended</span></h2>
                </div>
                <div className="shadow-md border border-gray-200 p-4 rounded-lg">
                    <h2 className="text-[#00873c] flex justify-between">Active Listings <span ><CircleCheck/></span></h2>
                    <h2 className="text-4xl font-bold mt-5">24 <span className="text-gray-500 font-normal text-lg">Items</span></h2>
                </div>
            </div>
        </main>    
    )
}