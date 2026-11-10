import { useState } from "react";
import {Sidebar} from "./Sidebar";
import { Outlet } from "react-router-dom";
import {Footer} from "./dashboard/Footer";
import {Navbar} from "./dashboard/Navbar";

function DashboardLayout() {
    const [open, setOpen] = useState(false)

    return (
    <>
        <div className="flex min-h-screen">
            <Sidebar open={open} onClose={() => setOpen(false)} />
            {/* main content shifted by the sidebar; content-with-sidebar CSS applies only here */}
            <div className="flex flex-col flex-1 min-w-0">
                <Navbar onMenuClick={() => setOpen(true)} />
                <main className="flex-1">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    </>
    );
}

export default DashboardLayout;