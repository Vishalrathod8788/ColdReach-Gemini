import { useState } from "react"
import { ConfigSidebar } from "./components/ConfigSidebar";
import { JDInput } from "./components/JDInput"
import { OutputDisplay } from "./components/OutputDisplay"
import { Header } from "./components/Header"
export const App = () => {

  const [userProfile, setUserProfile] = useState({ bio: "", template: "" });
  const [jd, setJd] = useState("");
  const [finalRsult, setFinalResult] = useState("")

  const updateProfile = (newData) => {
    setUserProfile(newData)
  }

  const generateLogic = () => {
    if (!userProfile.bio.trim() || !userProfile.template.trim() || !jd.trim()) {
      alert("Please fill all fields: Bio, Template, and Job Description");
      return;
    }

    const finalData = `Bio: ${userProfile.bio}\n\nTemplate: ${userProfile.template}\n\nJob Description: ${jd}`;
    setFinalResult(finalData);
  }

  return (

    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100">
      <Header />
      <div className="flex">
        <ConfigSidebar onSave={updateProfile} />

        <main className="flex-1 flex flex-col">

          <div className="flex-1 p-8 overflow-auto">
            <JDInput jd={jd} setJd={setJd} />

            <div className="max-w-4xl mx-auto mt-6">
              <button
                className="w-full py-4 px-8 bg-linear-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg"
                onClick={generateLogic}
              >
                Generate Cold Email
              </button>
            </div>

            <OutputDisplay result={finalRsult} />
          </div>
        </main>
      </div>
    </div>
  )
}