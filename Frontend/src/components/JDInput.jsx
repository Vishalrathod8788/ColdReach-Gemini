export const JDInput = ({ jd, setJd }) => {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Job Description</h2>
                <p className="text-gray-600 mb-6">Paste the job description you want to apply for</p>
                
                <textarea
                    className="w-full h-80 p-6 border-2 border-gray-200 rounded-xl resize-none focus:border-blue-500 focus:outline-none transition-colors text-sm leading-relaxed"
                    value={jd}
                    required
                    placeholder="Paste the complete job description here...\n\nInclude:\n• Job title and company\n• Required skills and experience\n• Job responsibilities\n• Any specific requirements"
                    onChange={(e) => setJd(e.target.value)}
                ></textarea>
            </div>
        </div>
    )
}