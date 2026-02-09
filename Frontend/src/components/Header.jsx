import { useAuth } from "../context/AuthContext";

export const Header = () => {
    const { logout } = useAuth();

    return (
        <nav className="border-b bg-white w-full">
            <div className="mx-auto px-6 sm:px-8 py-4 flex justify-between items-center" style={{ maxWidth: '1150px' }}>
                <h1 className="text-xl sm:text-2xl font-bold bg-linear-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                    ColdReach Gemini 🪄
                </h1>

                <button
                    onClick={logout}
                    className="px-3 py-2 sm:px-4 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                >
                    Logout
                </button>
            </div>
        </nav>
    )
}