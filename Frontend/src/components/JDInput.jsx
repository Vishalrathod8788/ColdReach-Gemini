export const JDInput = ({ jd, setJd }) => {
    return (
        <div className="">

            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-slate-800">
                    Paste Job Description
                </h3>
            </div>

            {/* Textarea */}
            <textarea
                className="w-full h-64 p-4 border rounded-xl resize-none
                   focus:ring-2 focus:ring-indigo-500 focus:outline-none
                   text-sm leading-relaxed bg-white"
                value={jd}
                required
                placeholder="Drop the LinkedIn / Indeed job description here..."
                onChange={(e) => setJd(e.target.value)}
            />

        </div>
    )
}
