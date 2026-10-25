import logo from '../assets/everyshop-logo-lockup.svg';
export function Navbar() {
    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-white" style={{ boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)" }}>
            <img src={logo} alt="logo" className='h-10 w-auto'/>

            <div className="flex items-center gap-6">
                <a href="/">Home</a>
                <a href="/explore">Explore</a>
                <a href="/categories">Categories</a>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
                
            </div>
        </nav>
    )
}