export const OutputDisplay = ({ result }) => {
    return (
        <div className="max-w-4xl mx-auto mt-8">
            {result && (
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <div className="flex items-center mb-6">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                        <h2 className="text-2xl font-semibold text-gray-800">Generated Cold Email</h2>
                    </div>
                    
                    <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-blue-500">
                        <pre className="whitespace-pre-wrap text-gray-700 leading-relaxed font-sans">
                            {result}
                        </pre>
                    </div>
                    
                    <div className="flex gap-3 mt-6">
                        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            Copy Email
                        </button>
                        <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                            Regenerate
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}   