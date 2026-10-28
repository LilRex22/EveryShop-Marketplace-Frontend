import { Dot, ShieldCheck, Zap } from "lucide-react"

export function Products() {
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
            <section>
                
            </section>
        </main>
    )
}