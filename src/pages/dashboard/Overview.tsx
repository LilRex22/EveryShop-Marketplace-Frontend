import { BriefcaseBusiness, MapPin, BadgePlus, ShieldCheck, Store, ChartNoAxesCombined, MousePointerClick, MessageSquareQuote, ZapIcon, Package, CircleCheck, ArrowRight} from "lucide-react"

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
                    <p className="flex items-center italic bg-gray-200 py-1 px-3 rounded-full w-fit mt-2 text-gray-600"><CircleCheck size={20} className="inline-block me-1"/> Not Verified</p>
                </div>
                <div className="shrink-0">
                    <a href="" className="rounded-lg py-4 px-3 bg-[#D95D28] text-white shadow-md hover:bg-[#a73a01] transition-all duration-100"><BadgePlus className="inline-block me-1"/>+ Add New Product</a> 
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-5">
                <div className="rounded-lg bg-white shadow-sm p-4">
                    <div className="flex justify-between items-center mb-2">
                        <h2>Shop Views</h2>
                        <p className="rounded-lg p-2 bg-[#f6f2f7] text-[#D95D28] w-fit"><Store size={20} className="inline-block"/></p>
                    </div>
                    <div className="border-b border-gray-200  pb-4">
                        <h2 className="text-3xl font-extrabold flex justify-between items-center">1,245 <span className="text-sm text-[#006d30]"><ChartNoAxesCombined size={20} className="inline-block"/>+28%</span></h2>
                        <p className="text-sm text-gray-500">past 90 days</p>
                    </div>
                    <img src="src/assets/everyshop-trend-icon.svg" alt="graph"/>
                </div>
                <div className="rounded-lg bg-white shadow-sm p-4">
                    <div className="flex justify-between items-center mb-2">
                        <h2>Listing Clicks</h2>
                        <p className="rounded-lg p-2 bg-[#f6f2f7] text-[#D95D28] w-fit"><MousePointerClick size={20} className="inline-block"/></p>
                    </div>
                    <div className="border-b border-gray-200  pb-4">
                        <h2 className="text-3xl font-extrabold flex justify-between items-center">364 <span className="text-sm text-[#006d30]"><ChartNoAxesCombined size={20} className="inline-block"/>+12%</span></h2>
                        <p className="text-sm text-gray-500">past 90 days</p>
                    </div>
                    <img src="src/assets/everyshop-performance-chart.svg" alt="graph"/>
                </div>
                <div className="rounded-lg bg-white shadow-sm p-4">
                    <div className="flex justify-between items-center mb-2">
                        <h2>WhatsApp Leads</h2>
                        <p className="rounded-lg p-2 bg-[#f6f2f7] text-[#D95D28] w-fit"><MessageSquareQuote size={20} className="inline-block"/></p>
                    </div>
                    <div className="border-b border-gray-200  pb-4">
                        <h2 className="text-3xl font-extrabold flex justify-between items-center">47 <span className="text-sm text-[#006d30]"><ZapIcon size={20} className="inline-block"/>fast response</span></h2>
                        <p className="text-sm text-gray-500">Direct Onitsha buyer chats</p>
                    </div>
                    <img src="src/assets/bars.svg" alt="graph" className="mt-2"/>
                </div>
                <div className="rounded-lg bg-white shadow-sm p-4">
                    <div className="flex justify-between items-center mb-2">
                        <h2>Listed Items</h2>
                        <p className="rounded-lg p-2 bg-[#f6f2f7] text-[#D95D28] w-fit"><Package size={20} className="inline-block"/></p>
                    </div>
                    <div className="border-b border-gray-200  pb-4">
                        <h2 className="text-3xl font-extrabold flex justify-between items-center">24</h2>
                        <p className="text-sm text-gray-500">All active stock</p>
                    </div>
                    <img src="src/assets/stock.svg" alt="graph" className="mt-2"/>
                </div>
            </div>
            <div className="rounded-lg shadow-md p-4 mt-5 bg-[#fbf8fc]">
                <div className="flex justify-between items-center mb-2">
                    <h2><span className="bg-[#92f5a4]/50 p-2 rounded-full"><ShieldCheck size={20} className="inline-block"/></span>Seller Verification</h2>
                    <p className="text-sm bg-[#D95D28] text-white text-bold py-1 px-3 rounded-full w-fit">Not Verified</p>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl mt-5">Build trust with a verified badge.</h2>
                    <p className="text-gray-500">Show buyers that your business is genuine. Get verified and make your shop stand out on EveryShop.</p>
                    <p className="flex items-center"><CircleCheck size={20} className="inline-block text-[#007233] me-1"/>Build buyer confidence</p>
                    <p className="flex items-center"><CircleCheck size={20} className="inline-block text-[#007233] me-1"/>Stand out from other sellers</p>
                    <a href="" className="flex items-center rounded-full justify-center py-1 px-2 bg-[#D95D28] text-white hover:bg-[#a73a01] transition-all duration-200">Get Verified<ArrowRight size={20} className="inline-block ms-1"/></a>
                </div>
            </div>
        </main>
    )
}