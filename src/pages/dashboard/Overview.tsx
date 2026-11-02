import { BriefcaseBusiness, MapPin, BadgePlus } from "lucide-react"

export function Overview()  {
    return (
        <main className="p-5 font-jakarta ">
            <div className="flex items-center gap-4 p-8 border border-black/10 rounded-lg bg-white shadow-sm">
                <div className="w-30 h-24 sm:h-30 bg-gray-300 rounded-lg shrink-0">
                    <img src="" alt="shop image" className="object-cover w-full h-full rounded-2xl" loading="lazy"/>
                </div>
                <div className="flex-1">
                    <h1 className="text-4xl font-extrabold leading-tight tracking-tight">Zawadi Studio & Woodworks</h1>
                    <p className="flex items-center text-gray-500 text-sm"><BriefcaseBusiness size={20} className="inline-block mr-1"/>We make quality wooden furniture and home decor items.</p>
                    <p className="flex items-center bg-[#D95D28] py-1 px-2 rounded-full text-white w-fit mt-2 text-sm"><MapPin size={20} className="inline-block mr-1"/>No.10 Okoli Avenue, Onitsha</p>
                </div>
                <div className="shrink-0">
                    <a href="" className="rounded-lg py-4 px-3 bg-[#D95D28] text-white shadow-md hover:bg-[#a73a01] transition-all duration-100"><BadgePlus className="inline-block me-1"/>+ Add New Product</a> 
                </div>
            </div>
        </main>
    )
}