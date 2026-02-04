import { useState, useEffect } from "react"

export const ConfigSidebar = ({ onSave }) => {
    const [localBio, setLocalBio] = useState({ bio: "", template: "" });

    // Auto-save when user types
    useEffect(() => {
        onSave(localBio);
    }, [localBio, onSave]);

    return (
        <div className="space-y-6">

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                    👤 Your Profile
                </h3>

                <textarea
                    className="w-full h-32 p-3 text-sm border rounded-xl resize-none bg-slate-50
                     focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    placeholder="Briefly describe your skills (e.g. React, Node, MongoDB...)"
                    value={localBio.bio}
                    onChange={(e) =>
                        setLocalBio({ ...localBio, bio: e.target.value })
                    }
                />
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <h3 className="font-semibold mb-4">
                    📝 Base Template
                </h3>

                <textarea
                    className="w-full h-40 p-3 text-sm border rounded-xl resize-none bg-slate-50
                     focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    placeholder="Hi [Name], I'm interested in the [Role]..."
                    value={localBio.template}
                    onChange={(e) =>
                        setLocalBio({ ...localBio, template: e.target.value })
                    }
                />
            </div>

        </div>
    )
}
