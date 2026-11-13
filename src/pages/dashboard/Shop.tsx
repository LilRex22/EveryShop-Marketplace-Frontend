import { CircleCheck, Eye } from "lucide-react"
import { CopyField } from "../../components/dashboard/CopyField"

export function MyShop() {
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
            </form>
        </main>
    )
}