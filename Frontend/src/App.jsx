import { useState } from "react"
import { ConfigSidebar } from "./components/ConfigSidebar";
import { JDInput } from "./components/JDInput"
import { OutputDisplay } from "./components/OutputDisplay"
import { Header } from "./components/Header"

export const App = () => {
  const [userProfile, setUserProfile] = useState({ bio: "", template: "" });
  const [jd, setJd] = useState("");
  const [finalRsult, setFinalResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [showValidationToast, setShowValidationToast] = useState(false);
  const [validationMessage, setValidationMessage] = useState("");

  const updateProfile = (newData) => {
    setUserProfile(newData)
  }

  const showValidationError = (message) => {
    setValidationMessage(message);
    setShowValidationToast(true);
    setTimeout(() => setShowValidationToast(false), 3000);
  };

  const generateLogic = async () => {
    // Validation with specific messages
    if (!userProfile.bio.trim()) {
      return showValidationError("Please add your bio in the sidebar");
    }
    if (!userProfile.template.trim()) {
      return showValidationError("Please select a template style");
    }
    if (!jd.trim()) {
      return showValidationError("Please paste the job description");
    }

    try {
      setLoading(true);
      const response = await fetch("http://localhost:5544/generate", {
        method: "POST",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          bio: userProfile.bio,
          template: userProfile.template,
          jd: jd,
        })
      });

      const data = await response.json();

      console.log(data);
      
      // Check if API call was successful
      if (data.success && data.data && data.data.coldMessage) {
        setFinalResult(data.data.coldMessage);
      } else {
        // Handle API errors
        showValidationError(data.error || "Failed to generate message. Please try again.");
      }
    } catch (error) {
      console.log("Network Error: ", error);
      showValidationError("Network error. Please check your connection and try again.");

    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Header />

      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">

        <div className="space-y-6">
          <ConfigSidebar onSave={updateProfile} />
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <JDInput jd={jd} setJd={setJd} />

            <button
              disabled={loading}
              className={`w-full mt-4 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${loading ? 'bg-slate-200 text-slate-500' : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg hover:shadow-indigo-200'
                }`}
              onClick={generateLogic}
            >
              {loading ? "AI is Crafting..." : <>✨ Generate Personalized Message</>}
            </button>
          </div>

          <OutputDisplay result={finalRsult} />
        </div>

      </div>

      {/* Validation Toast */}
      {showValidationToast && (
        <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-top-2 duration-300">
          <div className="bg-red-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 max-w-sm">
            <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">{validationMessage}</span>
          </div>
        </div>
      )}
    </div>
  )
}
export default App;