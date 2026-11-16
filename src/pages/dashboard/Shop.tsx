import { CircleCheck, Eye, Brush, Phone, MessageSquareText, PhoneCall, Mail } from "lucide-react"
import { CopyField } from "../../components/dashboard/CopyField"
import { useState } from "react"

export function MyShop() {
    const [ShopName, setShopName] = useState('')
    const [slogan, setSlogan] = useState('')
    const [category, setCategory] = useState('')
    const [line, setLine] = useState('')
    const [description, setDescription] = useState('')
    const [call, setCall] = useState('')
    const [email, setEmail] = useState('')

    return (
        <main className="p-4 sm:p-5 font-jakarta">
            <form action="">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="w-full sm:w-2/3 lg:w-1/2">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight">Your Shop Profile</h1>
                        <p className="text-sm sm:text-md font-medium text-gray-500">Your shop's identity starts here. Manage your storefront, update your business information, and showcase what makes your business unique to potential customers.</p>
                    </div>

                    <div className="flex gap-2">
                            <a href="" className="shadow-md rounded-lg bg-[#f3f0f4] px-3 py-3 font-medium text-black hover:bg-[#dcd9dd] transition-colors w-full sm:w-auto text-center whitespace-nowrap">
                                <Eye className="inline-block mr-2" />
                                View Public Profile
                            </a>

                        <button type="submit" className="shadow-md rounded-lg bg-[#D95D28] px-3 py-3 font-medium text-white hover:bg-[#BD4D20] transition-colors w-full sm:w-auto text-center whitespace-nowrap">
                            <CircleCheck className="inline-block mr-2" />   
                            Save Changes
                        </button>
                    </div>
                </div>
                
                <div className="mt-5 p-4 border border-gray-100 shadow-md rounded-lg">
                    <p className="text-gray-500 mb-2 flex justify-between">Your shop's public URL: <span className="text-gray-500  text-sm">You can share your shop's public URL with others.</span></p>
                    <CopyField value="your-shop-public-url" />
                </div>

                <div className="grid grid-cols-2 gap-5 mt-15">
                    {/* branding */}
                    <div className="rounded-lg shadow-md border border-gray-100 p-5">
                        <div className="">
                            <h2 className="text-2xl font-extrabold"><span className="inline-flex items-center justify-center p-2 rounded-lg bg-[#ffb59a]"><Brush size={18} className="inline-block me-1"/></span> Branding & Visuals</h2>
                            <p className="text-gray-500">Customize your shop's appearance to reflect your brand identity.</p>
                        </div>
                        <div className=" mt-3">
                            <h3 className="font-extrabold">Shop Profile Image</h3>
                            <div className="w-full bg-[#dcd9dd] rounded-lg h-48 mt-2">
                                {/* shop image goes here */}
                            </div>
                            <a href="" className="inline-block mt-2 bg-[#D95D28] text-white rounded-lg px-3 py-2 hover:bg-[#BD4D20] transition-colors">Change Image</a>
                        </div>
                        {/* shop details */}
                        <div className="mt-5 flex flex-col gap-4">
                            <div className="">
                                <label htmlFor="name">Shop Name</label>
                                <input 
                                    type="text" 
                                    id="name"
                                    className="mt-2 border border-gray-100 bg-[#dcd9dd] rounded-lg p-2 w-full"
                                    value={ShopName}
                                    onChange={(e) => setShopName(e.target.value)}
                                />
                            </div>

                            <div className="">
                                <label htmlFor="slogan">Shop Slogan</label>
                                <input 
                                    type="text" 
                                    id="slogan"
                                    className="mt-2 border border-gray-100 bg-[#dcd9dd] rounded-lg p-2 w-full"
                                    value={slogan}
                                    onChange={(e) => setSlogan(e.target.value)}
                                />
                            </div>

                            <div className="mt-4">
                                <label htmlFor="description">Shop Description</label>
                                <textarea
                                    name="description"
                                    id="description"
                                    placeholder="Describe your shop..."
                                    onChange={(e) => setDescription(e.target.value)}
                                    rows={4}
                                    value={description}
                                    className="mt-2 w-full bg-[#dcd9dd] border border-gray-100 rounded-lg p-3 resize-y"
                                />
                            </div>

                            <div className="">
                                <label htmlFor="category">Shop Category</label>
                                <input 
                                    type="text" 
                                    id="category"
                                    className="mt-2 border border-gray-100 bg-[#dcd9dd] rounded-lg p-2 w-full"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-4">
                        {/* contact */}
                        <div className="rounded-lg shadow-md border border-gray-100 p-5 h-fit">
                            <div className="">
                                <h2 className="text-2xl font-extrabold"><span className="inline-flex items-center justify-center p-2 rounded-lg bg-[#92f5a4]"><Phone size={18} className="inline-block me-1"/></span> Contact and Channels</h2>
                                <p className="text-gray-500">Manage your shop's contact information and communication channels.</p>
                            </div>
                            <div className="mt-5 flex flex-col gap-4">
                                <div className="">
                                    <label htmlFor="line"><MessageSquareText size={18} className="inline-block me-1 text-[#79db8d]"/>Whatsapp Line</label>
                                    <div className="flex bg-[#dcd9dd] mt-2 border border-gray-100 rounded-lg p-2 w-full">
                                        <PhoneCall size={20} className="mt-1"/>
                                        <input
                                            type="number"
                                            id="line"
                                            className="w-full bg-transparent outline-none ms-3"
                                            value={line}
                                            onChange={(e) => setLine(e.target.value)}
                                        />
                                    </div>
                                    <p className="text-gray-500 text-sm mt-1">* All your product inquiries on Whatsapp will be directed to this number *</p>
                                </div>

                                <div className="">
                                    <label htmlFor="call"><Phone size={18} className="inline-block me-1 text-[#c54f1a]"/>Telephone Line (voice calls)</label>
                                    <div className="flex bg-[#dcd9dd] mt-2 border border-gray-100 rounded-lg p-2 w-full">
                                        <PhoneCall size={20} className="mt-1"/>
                                        <input
                                            type="number"
                                            id="call"
                                            className="w-full bg-transparent outline-none ms-3"
                                            value={call}
                                            onChange={(e) => setCall(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="">
                                    <label htmlFor="email"><Mail size={18} className="inline-block me-1 text-[#c54f1a]"/>Seller Email (Notifications)</label>
                                    <div className="flex bg-[#dcd9dd] mt-2 border border-gray-100 rounded-lg p-2 w-full">
                                        <Mail size={20} className="mt-1"/>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full bg-transparent outline-none ms-3"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        {/* location*/}
                        <div className="">

                        </div>
                    </div>
                </div>
            </form>
        </main>
    )
}