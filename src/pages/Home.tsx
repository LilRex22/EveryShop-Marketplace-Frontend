import { CircleCheck, Dot, MonitorSmartphone, ShoppingBasket, Shirt, Armchair, Flower2, Wrench, ArrowRight, Store, MapPin, Percent, MessagesSquare, HousePlus, ShieldCheck, Eye, MapPinCheck, MessageSquareLock } from "lucide-react";
import { HeroSearch } from "../components/HeroSearch"

export function Home() {
    const category = [
        { icon: <MonitorSmartphone />, name: 'Electronics', description: '', link: '', bgColor: 'bg-[#ffdbce]'},
        { icon: <ShoppingBasket />, name: 'Fashion', description: '', link: '', bgColor: 'bg-[#92f5a4]'},
        { icon: <Shirt />, name: 'Home & Furniture', description: '', link: '', bgColor: 'bg-[#ffb59a]'},
        { icon: <Flower2 />, name: 'Beauty & Care', description: '', link: '', bgColor: 'bg-[#e4e1e6]'},
        { icon: <Wrench />, name: 'Food & Groceries', description: '', link: '', bgColor: 'bg-[#92f5a4]'},
        { icon: <Armchair />, name: 'Hardware & Tools', description: '', link: '', bgColor: 'bg-[#ffdbce]'},
    ]

    const featuredProducts = [
        { image: '', name: 'Hard Woven Sisal Floor Rug', description: 'A durable, natural sisal rug with a rustic woven texture, perfect for adding warmth and style to any indoor space.', price: '50,000', shop: 'Emeka Classics', link: '', instock: true, featured: true},
        { image: '', name: 'Pure Raw Highland Honey', description: 'Pure, unprocessed highland honey with a rich natural sweetness and smooth texture, perfect for everyday enjoyment.', price: '10,000', shop: 'Amaka Honey ltd.', link: '', instock: true, featured: true},
        { image: '', name: 'Tailored African Linen Shirt', description: 'A stylish and comfortable linen shirt, tailored to perfection for a relaxed fit. Ideal for both casual and formal occasions.', price: '15,000', shop: 'Men\'s Fashion House', link: '', instock: true, featured: true},
        { image: '', name: 'Chordless Hammer Drill', description: 'A powerful and versatile cordless hammer drill, perfect for all your DIY projects and home improvements.', price: '25,000', shop: 'Tool World', link: '', instock: true, featured: true},
    ]

    const featuredShops = [
        { name: 'Zawar Home & Decor', location: 'Kilimani, Wood Avenue, Onitsha', description: 'Specialized in artisanal handwoven rugs, solid olive wood kitchenware, and custom architectural planters.', link: '', motto: 'Quick Replies ( under 30m )', activeListings: '48', featured: true, pic1: '', pic2: '', pic3: ''},
        { name: 'TechHub Karen', location: 'Karen Hub Plaza, 3rd Floor', description: 'Refurbished business laptops, backup solar systems, Li-ion batteries, and certified tech repair services.', link: '', motto: '100% Genuine Tech', activeListings: '92', featured: true, pic1: '', pic2: '', pic3: ''},
        { name: 'Mama Imani Textiles', location: 'Yaya Centre area, shopping district, Onitsha', description: 'Authentic West and East African fabrics, hand-dyed batiks, custom wedding dressmaking, and bespoke corporate wear.', motto: 'Same-day Fitting', activeListings: '75', featured: true, pic1: '', pic2: '', pic3: ''},
    ]
    return (
        <div className="font-jakarta">
            <header className="header_img w-full min-h-screen lg:h-screen bg-cover bg-center px-4 sm:px-8 lg:px-15 py-8 lg:py-10">
                <div className="flex flex-col">
                    <div className="rounded-4xl w-fit p-1 px-3 text-xs sm:text-base" style={{backgroundColor: '#92f5a4'}}>
                        <p><CircleCheck className="inline-block mr-1" size={20}/>Verified local trade <span className="me-1 font-extrabold">.</span>Direct buyer-to-seller.</p>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between">
                        <div className="mt-6 font-jakarta">
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">Your City. Your Shops.</h1>
                            <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight" style={{color: '#D95D28'}}>Everything Local.</p>
                            <p className="mt-4 max-w-2xl text-base sm:text-lg text-gray-600">Discover products from verified local businesses around Onitsha and connect directly with the people 
                                who sell them. Zero middlemen, zero hassle, just you and your local shops.
                            </p>
                        </div>
                        <div className="flex flex-row gap-3 bg-white w-full sm:w-fit rounded-lg p-4 mt-6 lg:mt-0 lg:ml-4">
                            <div className="flex flex-row mb-2">
                                <div className="w-fit p-2 border-3 border-white rounded-full" style={{backgroundColor: '#ffb59a'}}>NM</div>
                                <div className="w-fit p-2 border-3 border-white rounded-full -ms-3" style={{backgroundColor: '#92f5a4'}}>ZA</div>
                                <div className="w-fit p-2 border-3 border-white rounded-full -ms-3" style={{backgroundColor: '#e4e1e6'}}>+3K</div>
                            </div>
                            <div className="">
                                <p className="font-extrabold">1,500+ Merchants</p> 
                                <p className="text-gray-600 text-sm sm:text-base">Active Sellers ready with your desired products.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="">
                        <HeroSearch />
                    </div>
                </div>
            </header>

            <main className="text-black bg-[#fbf8fc]">
                {/* categories */}
                <section className="px-4 sm:px-8 lg:px-15 py-10">
                    <div className="flex flex-col md:flex-row justify-between md:items-end gap-4">
                        <div className="">
                            <p className="text-[#D95D28] flex items-center text-sm sm:text-base"><Dot size={30}/>CLASSIFIED MARKETPLACE</p>
                            <h2 className="ms-3 text-xl sm:text-2xl font-extrabold tracking-tight leading-tight">Browse by Category</h2>
                        </div>
                        <div className="">
                            <p className="text-gray-600 w-full md:w-96 lg:w-120">EveryShop connects you with local shops, trusted sellers, artisans, and businesses across Onitsha.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mt-8 md:mt-12">
                        {category.map((item) => (
                            <div key={item.name} className="flex flex-col items-center justify-evenly bg-white h-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                                <div className={`w-16 h-16 ${item.bgColor} rounded-lg flex items-center justify-center`}>
                                    {item.icon}
                                </div>
                                <h3 className="mt-2 text-sm font-medium text-center">{item.name}</h3>
                                <p className="text-xs text-gray-500">{item.description}</p>
                                <a href="" className="text-[#D95D28] text-xs">Explore <ArrowRight size={12} className="inline-block" /></a>
                            </div>
                        ))}
                    </div>
                </section>

                {/* featured products */}
                <section className="px-4 sm:px-8 lg:px-15 py-10 mt-10 sm:mt-20 bg-[#f6f2f7]">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-2">
                        <div className="">
                            <p className="text-[#D95D28] flex items-center text-sm sm:text-base"><Dot size={30} className="shrink-0"/>DIRECT FROM NEIGHBOURHOOD WORKSHOP.</p>
                            <h2 className="ms-3 text-xl sm:text-2xl font-extrabold tracking-tight leading-tight">Feautured Products</h2>
                        </div>
                        <div className="ms-3 sm:ms-0">
                            <a href="" className="text-[#D95D28] text-sm">Explore Products <ArrowRight size={12} className="inline-block"/></a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                        {featuredProducts.map((item) => (
                            <div key={item.name} className="flex flex-col items-start gap-1 justify-evenly bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <div className={`w-full h-56 sm:h-64 bg-gray-200 rounded-lg flex items-center justify-center`}>
                                    <img src={item.image} alt={item.name} loading="lazy" className="object-cover w-full h-full rounded-lg" />
                                </div>
                                <h3 className="mt-2 text-1xl font-extrabold tracking-tight leading-tight text-left">{item.name}</h3>
                                <p className="text-xs text-gray-500 border-b border-gray-200 pb-4">{item.description}</p>
                                <p className="mt-1 text-lg font-semibold">&#8358;{item.price}</p>
                                <a href="" className="text-xs text-gray-500 flex items-center gap-1 hover:text-[#D95D28]"><Store size={20} className="inline-block"/> {item.shop}</a>
                                <a href={item.link} className="text-[#D95D28] text-xs mt-3">View Product <ArrowRight size={12} className="inline-block"/></a>
                            </div>
                        ))}
                    </div>
                </section>

                {/* featured shops */}
                <section className="px-4 sm:px-8 lg:px-15 pt-10 mt-10 sm:mt-20 pb-5">
                    <div className="flex flex-col md:flex-row justify-between md:items-end gap-4">
                        <div className="">
                            <p className="text-[#D95D28] flex items-center text-sm sm:text-base"><Dot size={30}/>COMMUNITY MERCHANTS.</p>
                            <h2 className="ms-3 text-xl sm:text-2xl font-extrabold tracking-tight leading-tight">Popular Local Shops</h2>
                        </div>
                        <div className="">
                            <p className="text-gray-600 w-full md:w-96 lg:w-120">Browse established physical storefronts in your area with direct merchant phone lines and shop locations.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                        {featuredShops.map((shop) => (
                            <div key={shop.name} className="flex flex-col items-start gap-2 justify-evenly bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <div className="">
                                    <h3 className="mt-2 text-xl sm:text-2xl font-extrabold">{shop.name}</h3>
                                    <p className="text-md text-gray-500 flex items-center"><MapPin size={20} className="inline-block mr-1 shrink-0 text-[#D95D28]"/>{shop.location}</p>
                                </div>
                                <div className="rounded-4xl bg-[#f6f2f7] p-2">
                                    <p className="text-sm text-black"><CircleCheck size={20} className="inline-block text-[#006b2e]"/> {shop.motto}</p>
                                </div>
                                <p className="text-md text-gray-500">{shop.description}</p>
                                <div className="flex flex-row gap-1 w-full h-24 sm:h-30 items-center justify-center border-b border-gray-200 pb-4">
                                    <img src={shop.pic1} alt="shop_pic1" loading="lazy" className="object-cover w-full h-full rounded-lg bg-gray-200"/>
                                    <img src={shop.pic2} alt="shop_pic2" loading="lazy" className="object-cover w-full h-full rounded-lg bg-gray-200"/>
                                    <img src={shop.pic3} alt="shop_pic3" loading="lazy" className="object-cover w-full h-full rounded-lg bg-gray-200"/>
                                </div>
                                <div className="flex flex-row items-center justify-between w-full gap-2">
                                    <p className="mt-1 text-xs text-gray-500">{shop.activeListings} Active Listings</p>
                                    <a href={shop.link} className="bg-[#D95D28] text-xs mt-3 p-2 rounded-lg text-white flex gap-1 items-center shrink-0"><Store size={15} className="inline-block"/> Visit Shop <ArrowRight size={12} className="inline-block"/></a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* list your shop section */}
                <section className="px-4 sm:px-8 lg:px-15 py-10 mt-10 sm:mt-20 bg-[#f6f2f7]">
                    <div className="rounded-2xl shadow-md bg-white flex flex-col lg:flex-row gap-2">
                        <div className="flex-1 p-5 sm:p-8 flex flex-col justify-between gap-3">
                            <div className="mb-5 rounded-4xl flex items-center text-[#a73a01] bg-[#ffdad6] w-fit p-2 text-sm"><Store size={20} className="inline-block me-1"/>SELL ON EVERYSHOP</div>
                            <div className="">
                                <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight leading-tight">Why List Your Shop?</h2>
                                <p className="text-gray-500 mt-2">Join thousands of Onitsha entrepreneurs reaching verified buyers in their neighbourhood today.
                                    No complex commissions, no middlemen, just you and your customers. List your shop and start selling directly to your local community.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-2 mt-3">
                                <div className="">
                                    <div className="rounded-lg bg-[#92f5a4] w-10 h-10 p-2 flex items-center mb-3"><Percent size={20}/></div>
                                    <h3 className="font-extrabold">0% Commision</h3>
                                    <p className="text-sm text-gray-500">0% commisions.No hidden fees or charges. Keep all your earnings.</p>
                                </div>
                                <div className="">
                                    <div className="rounded-lg bg-[#ffdbce] w-10 h-10 p-2 flex items-center mb-3"><MessagesSquare size={20}/></div>
                                    <h3 className="font-extrabold">Direct Inquiries</h3>
                                    <p className="text-sm text-gray-500">Direct inquiries from potential customers. No middlemen involved.</p>
                                </div>
                                <div className="">
                                    <div className="rounded-lg bg-[#e4e1e6] w-10 h-10 p-2 flex items-center mb-3"><Percent size={20}/></div>
                                    <h3 className="font-extrabold">Live in +5 Mins.</h3>
                                    <p className="text-sm text-gray-500">Get your shop live in under 5 minutes. Start selling right away.</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-start sm:flex-row sm:items-center gap-2 sm:gap-5">
                                <a href="" className="bg-[#a73a01] text-sm mt-6 p-3 rounded-lg text-white flex gap-1 items-center hover:bg-[#c54f1a]"><HousePlus size={20}/>List Your Shop For Free</a>
                                <p className="text-xs text-gray-500 mt-0 sm:mt-6"> Start reaching local customers today.</p>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className={`w-full h-64 lg:h-full bg-gray-200 rounded-lg flex items-center justify-center`}>
                                <img src='src\assets\everyshop-merchant.webp' alt='merchant' className="object-cover w-full h-full rounded-bl-lg rounded-br-lg lg:rounded-bl-none lg:rounded-tr-lg lg:rounded-br-lg" loading="lazy"/>
                            </div>
                        </div>
                    </div>
                </section>

                {/* informative section */}
                <section className="px-4 sm:px-8 lg:px-15 py-10">
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 rounded-lg p-5 sm:p-8 bg-white shadow-lg gap-6 lg:gap-2">
                            <div className="flex items-center gap-3 md:col-span-3 lg:col-span-2">
                                <div className="rounded-lg p-3 bg-[#92f5a4] w-fit mt-2"><ShieldCheck size={20} className="inline-block"/></div>
                                <div className="">
                                    <h3 className="mt-2 text-xl sm:text-2xl font-extrabold">Direct Peer-to-Peer Protocol</h3>
                                    <p className="text-sm text-gray-500">How EveryShop protects buyers and merchants</p>        
                                </div>
                            </div>
                            <div className="">
                                <h3 className="text-md font-bold mb-1"><Eye size={20} className="inline-block me-2 text-[#a73a01]"/>Inspect Before Paying</h3>
                                <p className="text-gray-500 text-xs">Visit the shop or inspect products before making payment. Confirm the item's quality and condition before you buy.</p>
                            </div>
                            <div className="">
                                <h3 className="text-md font-bold mb-1"><MapPinCheck size={20} className="inline-block me-2 text-[#006d30]"/>Physical Address Check</h3>
                                <p className="text-gray-500 text-xs">We encourage verified merchants to provide accurate shop locations so customers can find and visit their businesses with confidence.</p>
                            </div>
                            <div className="">
                                <h3 className="text-md font-bold mb-1"><MessageSquareLock size={20} className="inline-block me-2 text-black"/>Direct Encrypted Chats</h3>
                                <p className="text-gray-500 text-xs">Message sellers directly to ask questions, confirm product details, and discuss availability before arranging your purchase.</p>
                            </div>
                        </div>
                </section>
            </main>
        </div>
    );
}
