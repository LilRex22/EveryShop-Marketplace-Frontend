

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
        </main>    
    )
}