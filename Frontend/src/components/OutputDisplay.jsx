import { useState } from "react";

export const OutputDisplay = ({ result }) => {
    const [showToast, setShowToast] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(result);
            setCopied(true);
            setShowToast(true);

            // Reset after 2 seconds
            setTimeout(() => {
                setCopied(false);
                setShowToast(false);
            }, 2000);
        } catch (err) {
            console.log("Failed to copy:", err);
        }
    }
    return (
        <>
            {result && (
                <div className="bg-white p-6 rounded-2xl shadow-sm border-2 border-indigo-100 animate-in fade-in slide-in-from-bottom-4 duration-500">

                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-semibold text-indigo-900">
                            Personalized Outreach
                        </h3>

                        <span className="text-xs font-medium px-3 py-1 rounded-full bg-indigo-50 text-indigo-700">
                            AI Generated
                        </span>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-xl text-slate-700 leading-relaxed whitespace-pre-wrap text-sm" >
                        {result}
                    </div>

                    <div className="flex gap-3 mt-4">
                        <button
                            className={`px-5 py-2 text-sm font-medium rounded-lg transition-all duration-200 shadow hover:shadow-indigo-200 ${copied
                                ? 'bg-green-600 text-white'
                                : 'bg-indigo-600 text-white hover:bg-indigo-700'
                                }`}
                            onClick={handleCopy}
                        >
                            {copied ? (
                                <span className="flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Copied!
                                </span>
                            ) : (
                                <span className="flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                    Copy Message
                                </span>
                            )}
                        </button>
                    </div>

                </div>
            )}

            {/* Toast Notification */}
            {showToast && (
                <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-top-2 duration-300">
                    <div className="bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium">Message copied to clipboard!</span>
                    </div>
                </div>
            )}
        </>
    )
}
