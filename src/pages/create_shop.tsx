import { BadgeCheck, CircleAlert, Handshake, MessageSquareText, Percent } from "lucide-react";
import { useState } from "react";


export function CreateShop () {
    const [Shopname, setShopname] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [area, setArea] = useState('')
    const [line, setLine] = useState('')
    const [detail, setDetail] = useState('')
    const [whatsappLine, setWhatsappLine] = useState('')
    const [callLine, setCallLine] = useState('')

    return (
        <main className="min-h-full text-black bg-[#eae7eb] font-jakarta overflow-x-hidden p-2 sm:p-5 flex justify-center">
            <form onSubmit={(e) => { e.preventDefault(); }} className="bg-white rounded-lg p-4 sm:p-5 shadow-md w-full max-w-200 min-w-0">
                {/* 1 */}
                <div className="">
                    <div className="flex flex-col gap-4">
                        <p className="px-2 py-1 rounded-full font-bold bg-[#92f5a4] w-fit flex items-center text-xs sm:text-base">
                            <BadgeCheck size={18} className="inline-block shrink-0 me-1"/>
                            Direct Merchant Onboarding
                        </p>
                        <h1 className="text-2xl sm:text-4xl font-bold tracking-tight leading-tight">Create Your Virtual Storefront</h1>
                        <p className="text-gray-500 text-sm sm:text-base">Join over 2,400 local merchants in Onitsha. Showcase your products and get direct customer Whatsapp inquires. </p>

                        <div className="p-4 sm:p-5 rounded-xl bg-[#eae7eb] text-[#007233] text-sm sm:text-base flex flex-col sm:flex-row gap-3 sm:gap-2 sm:items-center sm:justify-between">
                            <p><Percent size={18} className="inline-block me-1"/>Zero Commission</p>
                            <p><MessageSquareText size={18} className="inline-block me-1"/>Direct Whatsapp Leads</p>
                            <p><Handshake size={18} className="inline-block me-1"/>No Middleman Fees</p>
                        </div>
                    </div>

                    <div className="mt-8 sm:mt-10">
                        <h2 className="text-xl sm:text-2xl font-bold flex items-center mb-6 sm:mb-8">
                            <span className="px-3 me-2 rounded-lg text-lg sm:text-xl bg-[#ffdad6]">1</span>    
                            Store Identity
                        </h2>

                        <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-2 w-full">
                            <div className="w-full sm:w-1/2 min-w-0">
                                <label htmlFor="shop" className="font-bold">Shop Name <span className="text-[#D95D28]">*</span></label>
                                <input 
                                    type="text"
                                    id="shop"
                                    className="w-full min-w-0 p-3 rounded-lg outline-none bg-[#f6f2f7] mt-1"
                                    placeholder="E.g. Zeno Furnitures ltd."
                                    value={Shopname}
                                    onChange={e => setShopname(e.target.value)}
                                />
                                <p className="text-xs sm:text-sm text-gray-500">*Official trade name registered to your shop*</p>
                            </div>
                            
                            <div className="w-full sm:w-1/2 min-w-0">
                                <label htmlFor="category" className="font-bold">Shop Category <span className="text-[#D95D28]">*</span></label>
                                <select 
                                    id="category"
                                    className="w-full min-w-0 p-3 rounded-lg outline-none bg-[#f6f2f7] mt-1"
                                    value={category}
                                    onChange={e => setCategory(e.target.value)}
                                >
                                    <option value="" className="">Category</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Fashion">Fashion</option>
                                    <option value="Food">Food</option>
                                </select>
                                <p className="text-xs sm:text-sm text-gray-500">*where customers browse for your core items*</p>
                            </div>
                        </div>
                        
                        <div className="mt-5">
                            <label htmlFor="description">Shop Short Description <span className="text-[#D95D28]">*</span></label>
                            <textarea
                                name="description"
                                id="description"
                                placeholder="Describe your shop..."
                                onChange={(e) => setDescription(e.target.value)}
                                rows={4}
                                value={description}
                                className="mt-2 w-full min-w-0 bg-[#f6f2f7] border border-gray-100 rounded-lg p-3 resize-y"
                            />
                            <p className="text-xs sm:text-sm text-gray-500">*Brief overview highlighting your craftmanship or key products*</p>
                        </div>
                        
                    </div>
                </div>

                {/* 2 */}
                <div className="mt-8 sm:mt-10 bg-[#dcd9dd] -mx-2 sm:-mx-4 rounded-2xl p-4 sm:p-5">
                    <div className="text-xl sm:text-2xl font-bold flex items-center mb-6 sm:mb-8">
                        <span className="px-3 me-2 rounded-lg text-lg sm:text-xl bg-[#ffdad6]">2</span>
                        <div className="flex flex-col">
                            <h2>Store Visuals</h2>
                            <p className="text-xs sm:text-sm text-gray-700 font-normal sm:font-bold">Clear authentic imagery builds buyer trust.</p>    
                        </div>    
                    </div>

                    <div className="">
                        <h3 className="font-extrabold">Shop Profile Image</h3>
                        <div className="w-full bg-[#fbf8fc] rounded-lg h-40 sm:h-54 mt-2">
                            {/* shop image goes here */}
                        </div>
                        <a href="" className="inline-block mt-2 bg-[#D95D28] text-white rounded-lg px-3 py-2 hover:bg-[#BD4D20] transition-colors">Change Image</a>
                    </div>
                </div>

                {/* 3 */}
                <div className="mt-8 sm:mt-10">
                    <h2 className="text-xl sm:text-2xl font-bold flex items-center mb-6 sm:mb-8">
                        <span className="px-3 me-2 rounded-lg text-lg sm:text-xl bg-[#ffdad6]">3</span>    
                        Store Location
                    </h2>

                    <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-2 w-full">
                        <div className="w-full sm:w-1/2 min-w-0">
                            <label htmlFor="area" className="font-bold">Market Area <span className="text-[#D95D28]">*</span></label>
                            <input 
                                type="text"
                                id="area"
                                className="w-full min-w-0 p-3 rounded-lg outline-none bg-[#f6f2f7] mt-1"
                                placeholder="E.g. Main Market"
                                value={area}
                                onChange={e => setArea(e.target.value)}
                            />
                            <p className="text-xs sm:text-sm text-gray-500">*Help local buyers locate the area your shop is located.*</p>
                        </div>
                        
                        <div className="w-full sm:w-1/2 min-w-0">
                            <label htmlFor="line" className="font-bold">Section/Line <span className="text-[#D95D28]">*</span></label>
                            <input 
                                type="text"
                                id="line"
                                className="w-full min-w-0 p-3 rounded-lg outline-none bg-[#f6f2f7] mt-1"
                                placeholder="E.g. Line 3 Chika plaza"
                                value={line}
                                onChange={e => setLine(e.target.value)}
                            />
                            <p className="text-xs sm:text-sm text-gray-500">*Floor, Building or specific street location*</p>
                        </div>
                    </div>
                    <div className="mt-5">
                            <label htmlFor="detail">Additional Address Detail</label>
                            <textarea
                                name="detail"
                                id="detail"
                                placeholder="describe where your shop is located (optional)..."
                                onChange={(e) => setDetail(e.target.value)}
                                rows={4}
                                value={detail}
                                className="mt-2 w-full min-w-0 bg-[#f6f2f7] border border-gray-100 rounded-lg p-3 resize-y"
                            />
                            <p className="text-xs sm:text-sm text-gray-500">*Additional address details like landmarks and location description.*</p>
                        </div>
                </div>

                {/* 4 */}
                <div className="mt-8 sm:mt-10">
                    <div className="text-xl sm:text-2xl font-bold flex items-center mb-6 sm:mb-8">
                        <span className="px-3 me-2 rounded-lg text-lg sm:text-xl bg-[#ffdad6]">4</span>
                        <div className="flex flex-col">
                            <h2>Direct Contact Lines</h2>
                            <p className="text-xs sm:text-sm text-gray-700 font-normal sm:font-bold">Your direct merchant line for instant peer-to-peer commerce.</p>    
                        </div>    
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-2 w-full">
                        <div className="w-full sm:w-1/2 min-w-0">
                            <label htmlFor="whatsapp" className="font-bold">Whatsapp Inquiries Number <span className="text-[#D95D28]">*</span></label>
                            <input 
                                type="number"
                                id="whatsapp"
                                className="w-full min-w-0 p-3 rounded-lg outline-none bg-[#f6f2f7] mt-1"
                                placeholder="081......."
                                value={whatsappLine}
                                onChange={e => setWhatsappLine(e.target.value)}
                            />
                            <p className="text-xs sm:text-sm text-gray-500">*Where customers click directly to chat & arrange orders.*</p>
                        </div>
                        
                        <div className="w-full sm:w-1/2 min-w-0">
                            <label htmlFor="callLine" className="font-bold">Telephone for Direct Voice Calls <span className="text-[#D95D28]">*</span></label>
                            <input 
                                type="number"
                                id="callLine"
                                className="w-full min-w-0 p-3 rounded-lg outline-none bg-[#f6f2f7] mt-1"
                                placeholder="081........"
                                value={callLine}
                                onChange={e => setCallLine(e.target.value)}
                            />
                            <p className="text-xs sm:text-sm text-gray-500">*Alternative voice line for urgent delivery coordination*</p>
                        </div>
                    </div>
                </div>
                <div className="mt-5 w-full">
                    <button type="submit" className="p-3 rounded-lg bg-[#D95D28] text-white w-full hover:bg-[#BD4D20] transition-colors">Create Shop</button>
                </div>


                <div className="mt-8 sm:mt-10 p-4 sm:p-5 bg-[#f6f2f7] rounded-lg">
                    <p className="text-gray-500 text-sm sm:text-base">
                        <CircleAlert size={20} className="inline-block me-1 text-red-400"/>
                        <span className="font-extrabold text-black">EveryShop Peer-to-Peer Guarantee:</span> EveryShop DOES NOT take commission on your sales
                    nor handle payments. Buyers contact you directly via Whatsapp or Phone.</p>
                </div>
            </form>
        </main>
    )
}