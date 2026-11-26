export function CreateProduct() {
    return (
        <main className="min-h-full text-black bg-[#eae7eb] font-jakarta overflow-x-hidden p-2 sm:p-5 flex justify-center">
            <form onSubmit={(e) => { e.preventDefault(); }} className="bg-white rounded-lg p-4 sm:p-5 shadow-md w-full max-w-250 min-w-0">
                <div className="">
                    <p className="px-2 py-1 rounded-full font-bold bg-[#92f5a4] w-fit flex items-center text-xs sm:text-base">
                        Zero Commission
                    </p>
                    <h1 className="text-2xl sm:text-4xl font-bold tracking-tight leading-tight">Create A New Product</h1>
                    <p className="text-gray-500 text-sm sm:text-base">Publish a high-visibility listing to Onitsha buyers. Inquiries route directly to
                        your Whatsapp or workshop hotline with zero platform transaction fee.
                    </p>
                </div>
            </form>
        </main>
    )
}