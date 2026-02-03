export const Header = () => {
    return (
        <nav className="border-b bg-white w-full">
            {/* Inner Container: Ye baaki components (1400px) ke saath align rahega */}
            <div className="max-w-[1150px] mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                    ColdReach Gemini 🪄
                </h1>

                <button className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition">
                    How it works?
                </button>
            </div>
        </nav>
    )
}