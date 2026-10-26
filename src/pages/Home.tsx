import { CircleCheck, Dot, MonitorSmartphone, ShoppingBasket, Shirt, Armchair, Flower2, Wrench, ArrowRight, Store } from "lucide-react";
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
    return (
        <div className="font-jakarta">
            <header className="header_img w-full h-screen bg-cover bg-center px-15 py-10">
                <div className="flex flex-col">
                    <div className="rounded-4xl w-fit p-1 px-3" style={{backgroundColor: '#92f5a4'}}>
                        <p><CircleCheck className="inline-block mr-1" size={20}/>Verified local trade <span className="me-1 font-extrabold">.</span>Direct buyer-to-seller.</p>
                    </div>
                    <div className="flex flex-row items-end justify-between">
                        <div className="mt-6 font-jakarta">
                            <h1 className="text-5xl font-extrabold tracking-tight leading-tight">Your City. Your Shops.</h1>
                            <p className="text-5xl font-extrabold tracking-tight leading-tight" style={{color: '#D95D28'}}>Everything Local.</p>
                            <p className="mt-4 max-w-2xl text-lg text-gray-600">Discover products from verified local businesses around Onitsha and connect directly with the people 
                                who sell them. Zero middlemen, zero hassle, just you and your local shops.
                            </p>
                        </div>
                        <div className="flex flex-row gap-3 bg-white w-fit rounded-lg p-4 ml-4">
                            <div className="flex flex-row mb-2">
                                <div className="w-fit p-2 border-3 border-white rounded-full" style={{backgroundColor: '#ffb59a'}}>NM</div>
                                <div className="w-fit p-2 border-3 border-white rounded-full -ms-3" style={{backgroundColor: '#92f5a4'}}>ZA</div>
                                <div className="w-fit p-2 border-3 border-white rounded-full -ms-3" style={{backgroundColor: '#e4e1e6'}}>+3K</div>
                            </div>
                            <div className="">
                                <p>1,500+ Merchants</p> 
                                <p className="text-gray-600">Active Sellers ready with your desired products.</p>
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
                <section className="px-15 py-10">
                    <div className="flex flex-row justify-between items-end">
                        <div className="">
                            <p className="text-[#D95D28] flex items-center"><Dot size={30}/>CLASSIFIED MARKETPLACE</p>
                            <h2 className="ms-3 text-2xl font-extrabold tracking-tight leading-tight">Browse by Category</h2>
                        </div>
                        <div className="">
                            <p className="text-gray-600 w-120">EveryShop connects you with local shops, trusted sellers, artisans, and businesses across Onitsha.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-6 gap-4 mt-12">
                        {category.map((item) => (
                            <div key={item.name} className="flex flex-col items-center justify-evenly bg-white h-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                                <div className={`w-16 h-16 ${item.bgColor} rounded-lg flex items-center justify-center`}>
                                    {item.icon}
                                </div>
                                <h3 className="mt-2 text-sm font-medium">{item.name}</h3>
                                <p className="text-xs text-gray-500">{item.description}</p>
                                <a href="" className="text-[#D95D28] text-xs">Explore <ArrowRight size={12} className="inline-block" /></a>
                            </div>
                        ))}
                    </div>
                </section>

                {/* featured products */}
                <section className="px-15 py-10 mt-20 bg-[#f6f2f7]">
                    <div className="flex flex-row justify-between items-end">
                        <div className="">
                            <p className="text-[#D95D28] flex items-center"><Dot size={30}/>Direct from neighbourhood workshops.</p>
                            <h2 className="ms-3 text-2xl font-extrabold tracking-tight leading-tight">Feautured Products</h2>
                        </div>
                        <div className="">
                            <a href="" className="text-[#D95D28] text-sm">Explore Products <ArrowRight size={12} className="inline-block"/></a>
                        </div>
                    </div>

                    <div className="grid grid-cols-4 gap-4 mt-8">
                        {featuredProducts.map((item) => (
                            <div key={item.name} className="flex flex-col items-start gap-1 justify-evenly bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <div className={`w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center`}>
                                    <img src={item.image} alt={item.name} className="object-cover w-full h-full rounded-lg" />
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
            </main>
        </div>
    );
}
