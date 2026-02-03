import { useState } from "react"
import { ConfigSidebar } from "./components/ConfigSidebar";
import { JDInput } from "./components/JDInput"
import { OutputDisplay } from "./components/OutputDisplay"
import { Header } from "./components/Header"
// 1. Gemini SDK import karein
import { GoogleGenerativeAI } from "@google/generative-ai";

export const App = () => {
  const [userProfile, setUserProfile] = useState({ bio: "", template: "" });
  const [jd, setJd] = useState("");
  const [finalRsult, setFinalResult] = useState("");
  const [loading, setLoading] = useState(false);

  const updateProfile = (newData) => {
    setUserProfile(newData)
  }

  const generateLogic = async () => {
    if (!userProfile.bio.trim() || !userProfile.template.trim() || !jd.trim()) {
      alert("Please fill all fields: Bio, Template, and Job Description");
      return;
    }

    const FinalData = `User Bio: ${userProfile.bio} \nUser Template ${userProfile.template} \nJob Description: ${jd}`

    try {
      setFinalResult(FinalData)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }


  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Header />

      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Sidebar - Configuration */}
        <div className="space-y-6">
          <ConfigSidebar onSave={updateProfile} />
        </div>

        {/* Main Input & Output */}
        <div className="lg:col-span-2 space-y-6">
          {/* Input Box */}
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

          {/* Result Box */}
          <OutputDisplay result={finalRsult} />
        </div>

      </div>
    </div>
  )
}