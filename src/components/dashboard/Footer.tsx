
export function Footer() {
    return (
        <footer className="w-full border-t border-[#eee8eb] bg-white px-6 py-5 font-jakarta">

            <div className="flex flex-col gap-4">

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">

                    <p className="text-xs text-[#786D70]">
                        © 2026 EveryShop. All rights reserved.
                    </p>

                    <div className="flex items-center gap-5 text-xs text-[#786D70]">
                        <a href="/help" className="hover:text-[#D95D28]">
                            Help Center
                        </a>

                        <a href="/support" className="hover:text-[#D95D28]">
                            Contact Support
                        </a>

                        <a href="/privacy" className="hover:text-[#D95D28]">
                            Privacy
                        </a>
                    </div>

                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-2">

                    <p className="text-xs text-[#A09699]">
                        Connecting Onitsha to trusted local businesses.
                    </p>

                    <p className="text-xs text-[#A09699]">
                        Powered by{" "}
                        <a
                            href="https://www.linkedin.com/in/chukwuemeka-rex-4b3bb63bb/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-[#D95D28] hover:underline"
                        >
                            Code.Rx
                        </a>
                    </p>

                </div>

            </div>

        </footer>
    );
}
