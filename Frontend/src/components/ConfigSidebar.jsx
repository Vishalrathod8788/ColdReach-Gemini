import { useState } from "react"

export const ConfigSidebar = ({ onSave }) => {
    const [localBio, setLocalBio] = useState({ bio: "", template: "" });
    return (
        <div className="w-80 p-6 bg-white border-r border-gray-200 shadow-sm">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Profile Setup</h3>
            
            <div className="space-y-4">
                <div>
                    <label className="block text-sm text-gray-600 mb-2">Your Bio</label>
                    <textarea
                        className="w-full h-32 p-3 border border-gray-300 rounded-lg resize-none focus:border-blue-500 focus:outline-none text-sm"
                        placeholder="Enter your bio..."
                        value={localBio.bio}
                        onChange={(e) => setLocalBio({ ...localBio, bio: e.target.value })}
                    ></textarea>
                </div>

                <div>
                    <label className="block text-sm text-gray-600 mb-2">Email Template Style</label>
                    <textarea
                        className="w-full h-32 p-3 border border-gray-300 rounded-lg resize-none focus:border-blue-500 focus:outline-none text-sm"
                        placeholder="Enter your favorite template style..."
                        value={localBio.template}
                        onChange={(e) => setLocalBio({ ...localBio, template: e.target.value })}
                    ></textarea>
                </div>
            </div>
            
            <button
                className="w-full mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                onClick={() => onSave({ bio: localBio.bio, template: localBio.template })}
            >
                Save Profile
            </button>
        </div>
    )
}