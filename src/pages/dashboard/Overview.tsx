import { BriefcaseBusiness, MapPin, BadgePlus, Store, ChartNoAxesCombined } from "lucide-react"

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
            <div className="grid grid-cols-4 gap-4">
                <div className="rounded-lg bg-white shadow-sm p-4">
                    <div className="flex justify-between items-center mb-2">
                        <h2>Profile Views</h2>
                        <p className="rounded-lg p-2 bg-[#f6f2f7] text-[#D95D28] w-fit"><Store size={20} className="inline-block"/></p>
                    </div>
                    <h2 className="text-3xl font-extrabold">1,245 <span><ChartNoAxesCombined size={20} className="inline-block"/>+28%</span></h2>
                </div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
            </div>
        </main>
    )
}