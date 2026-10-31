import { CircleCheck } from 'lucide-react';
import logo from '../assets/everyshop-logo-lockup.svg';


export function Signup() {
    return (
        <div className="font-jakarta bg-[#fbf8fc] flex min-h-screen">
            <form className="px-6 py-8 sm:px-12 lg:px-20 lg:py-10 w-full max-w-xl mx-auto lg:max-w-none lg:mx-0 lg:w-1/2">
                <img src={logo} alt="logo" className='w-48 sm:w-70'/>
                <h1 className='mt-10 font-bold leading-tight tracking-tight text-3xl sm:text-4xl'>Create your account</h1>
                <p className='text-gray-500 text-md w-full sm:w-100 mt-3'>Join in under a minute. Buy and Sell directly.</p>

                <div className="flex flex-col gap-2 mt-5">
                    <label htmlFor="fullname" className='text-sm'>Fullname</label>
                    <input 
                        type="text" 
                        name="fullname" 
                        id="fullname"
                        className='py-3 px-2 rounded-lg bg-white border border-gray-200 outline-none focus:ring-2 focus:ring-[#D95D28]/20 transition-all duration-200 focus:border-[#D95D28]'
                    />
                </div>

                <div className="flex flex-col gap-2 mt-5">
                    <label htmlFor="phone" className='text-sm'>Phone number</label>
                    <input 
                        type="number" 
                        name="phone" 
                        id="phone"
                        className='py-3 px-2 rounded-lg bg-white border border-gray-200 outline-none focus:ring-2 focus:ring-[#D95D28]/20 transition-all duration-200 focus:border-[#D95D28]'
                    />
                </div>


                <div className="flex flex-col gap-2 mt-5">
                    <label htmlFor="password" className='text-sm'>Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password"
                        className='py-3 px-2 rounded-lg bg-white border border-gray-200 outline-none focus:ring-2 focus:ring-[#D95D28]/20 transition-all duration-200 focus:border-[#D95D28]'
                    />
                </div>

                <button type="submit" className='rounded-lg bg-[#D95D28] hover:bg-[#a73a01] transition-all duration-200 text-white p-3 w-full mt-4'>Create account</button>
                <p className='mt-2 text-sm'>Already have an account? <a href="login" className='text-[#D95D28] ms-2'>Log in</a></p>
            </form>
            <div className="login_img hidden lg:block w-1/2 bg-cover bg-center p-10">
                <div className="rounded-2xl bg-black/10 w-fit px-3 py-1 text-white">For Sellers and Shop owners.</div>
                <div className="mt-15">
                    <h2 className='text-4xl font-extrabold text-white'>Sell to Your <br /> Whole City.</h2>
                </div>
                <div className="flex flex-col gap-3 mt-50">
                    <p className='p-3 bg-black/20 text-white rounded-lg border border-[#f7fff3]/20'><CircleCheck className='text-[#00873c] inline-block me-2 fill-white'/>Your own online shop, in minutes</p>
                    <p className='p-3 bg-black/20 text-white rounded-lg border border-[#f7fff3]/20'><CircleCheck className='text-[#00873c] inline-block me-2 fill-white'/>Manage your listings anytime</p>
                    <p className='p-3 bg-black/20 text-white rounded-lg border border-[#f7fff3]/20'><CircleCheck className='text-[#00873c] inline-block me-2 fill-white'/>Buyers reach you on WhatsApp in one tap</p>                    
                </div>
            </div>
        </div>
    )
}
