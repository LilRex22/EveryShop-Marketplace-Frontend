import logo from '../assets/everyshop-logo-lockup.svg';
import { CircleCheck } from 'lucide-react';


export function Login() {
    return (
        <div className="font-jakarta bg-[#fbf8fc] flex min-h-screen">
            <form className="px-6 py-8 sm:px-12 lg:px-20 lg:py-10 w-full max-w-xl mx-auto lg:max-w-none lg:mx-0 lg:w-1/2">
                <img src={logo} alt="logo" className='w-48 sm:w-70'/>
                <h1 className='mt-10 font-bold leading-tight tracking-tight text-3xl sm:text-4xl'>Welcome back</h1>
                <p className='text-gray-500 text-md w-full sm:w-100 mt-3'>Log in to manage your shop, update product listings and keep your business information up to date.</p>

                <div className="flex flex-col gap-2 mt-5">
                    <label htmlFor="username" className='text-sm'>Username</label>
                    <input 
                        type="text" 
                        name="username" 
                        id="username"
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

                <div className="mt-2 flex justify-between text-sm">
                    <p><input type="checkbox" name="" id="" className='accent-[#D95D28] me-2'/>Keep me Logged In</p>
                    <a href='' className='text-[#D95D28]'>Forgot Password?</a>
                </div>

                <button type="submit" className='rounded-lg bg-[#D95D28] hover:bg-[#a73a01] transition-all duration-200 text-white p-3 w-full mt-4'>Log in</button>
                <p className='mt-2 text-sm'>New to EveryShop? <a href="signup" className='text-[#D95D28] ms-2'>Create an account</a></p>
            </form>
            <div className="login_img hidden lg:block w-1/2 bg-cover bg-center p-10">
                <div className="rounded-2xl bg-black/10 w-fit px-3 py-1 text-white">Onitsha. Anambra. Nigeria</div>
                <div className="relative rounded-lg rotate-[-4deg] bg-white w-fit mt-20 shadow-lg ms-5">
                    <div className="flex items-center justify-center bg-gray-200 rounded-tl-lg rounded-tr-lg w-80 h-50 text-center">{`[PRODUCT IMAGE]`}</div>
                    <div className="rounded-bl-lg rounded-br-lg w-80 bg-white p-3">
                        <p>{`[PRODUCT NAME]`}</p>
                        <p className='font-extrabold text-2xl'>NGN150,000</p>
                        <div className="bg-[#92f5a4] px-2 py-1 w-fit rounded-full"><CircleCheck className='inline-block'/> verified sellers.</div>
                    </div>
                    <div className="absolute bg-[#3de273] p-2 rotate-4 rounded-tl-lg rounded-tr-lg rounded-br-lg left-60 w-max top-75">is this still available?</div>
                </div>
                <div className="mt-6">
                    <h2 className='text-4xl font-extrabold text-white'>Every deal, <br /> In the Open.</h2>
                    <p className='text-white text-sm mt-2'>Real Sellers. Clear Prices.</p>
                </div>
            </div>
        </div>
    )
}
