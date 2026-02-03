export const OutputDisplay = ({ result }) => {
    return (
        <>
            {result && (
                <div className="bg-white p-6 rounded-2xl shadow-sm border-2 border-indigo-100 animate-in fade-in slide-in-from-bottom-4 duration-500">

                    {/* Header */}
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-semibold text-indigo-900">
                            Personalized Outreach
                        </h3>

                        <span className="text-xs font-medium px-3 py-1 rounded-full bg-indigo-50 text-indigo-700">
                            AI Generated
                        </span>
                    </div>

                    {/* Content */}
                    <div className="p-4 bg-slate-50 rounded-xl text-slate-700 leading-relaxed whitespace-pre-wrap text-sm">
                        {result}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 mt-4">
                        <button
                            className="px-5 py-2 text-sm font-medium rounded-lg
                         bg-indigo-600 text-white hover:bg-indigo-700
                         transition shadow hover:shadow-indigo-200"
                        >
                            Copy Message
                        </button>

                        <button
                            className="px-5 py-2 text-sm font-medium rounded-lg
                         bg-white border border-slate-300 text-slate-700
                         hover:bg-slate-50 transition"
                        >
                            Regenerate
                        </button>
                    </div>

                </div>
            )}
        </>
    )
}
