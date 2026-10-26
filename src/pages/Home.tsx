import { CircleCheck } from "lucide-react";
import { HeroSearch } from "../components/HeroSearch"

export function Home() {
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
        </div>
    );
}
