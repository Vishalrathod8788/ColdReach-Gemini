import { useState } from "react";
import { ConfigSidebar } from "../components/ConfigSidebar";
import { JDInput } from "../components/JDInput";
import { OutputDisplay } from "../components/OutputDisplay";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useAuth } from "../context/AuthContext";
import API from "../api/axios";

export const Home = () => {
  const [userProfile, setUserProfile] = useState({ bio: "", template: "" });
  const [jd, setJd] = useState("");
  const [finalResult, setFinalResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [showValidationToast, setShowValidationToast] = useState(false);
  const [validationMessage, setValidationMessage] = useState("");
  const [outputType, setOutputType] = useState("message");
  const { token } = useAuth();

  const updateProfile = (newData) => {
    setUserProfile(newData);
  };

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
      const response = await API.post("/generator/generate", {
        bio: userProfile.bio,
        template: userProfile.template,
        jd: jd,
        type: outputType
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = response.data;

      console.log(data);

      if (data.success && data.data && data.data.coldMessage) {
        setFinalResult(data.data.coldMessage);
      } else {
        showValidationError(
          data.error || "Failed to generate message. Please try again."
        );
      }
    } catch (error) {
      console.log("Network Error: ", error);
      showValidationError(
        "Network error. Please check your connection and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 font-sans text-slate-900 flex flex-col">
      <Header />

      {/* Main Content Container */}
      <main className="flex-1 w-ful">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">

            {/* Sidebar Section - Mobile: Full Width, Desktop: 5 columns */}
            <aside className="lg:col-span-5 xl:col-span-4">
              <div className="sticky top-4 space-y-4 sm:space-y-6">
                <ConfigSidebar onSave={updateProfile} />
              </div>
            </aside>

            {/* Main Content Section - Mobile: Full Width, Desktop: 7 columns */}
            <div className="lg:col-span-7 xl:col-span-8 space-y-4 sm:space-y-6">

              {/* Job Description Input Card */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-slate-200 overflow-hidden transition-all hover:shadow-md">
                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="flex gap-2 p-1 bg-slate-100 rounded-lg mb-4">
                    <button
                      onClick={() => setOutputType("message")}
                      className={`flex-1 py-2 px-4 rounded-md font-medium transition ${outputType === "message"
                        ? "bg-white text-indigo-600 shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                        }`}
                    >
                      💬 Cold Message
                    </button>
                    <button
                      onClick={() => setOutputType("email")}
                      className={`flex-1 py-2 px-4 rounded-md font-medium transition ${outputType === "email"
                        ? "bg-white text-indigo-600 shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                        }`}
                    >
                      📧 Cold Email
                    </button>
                  </div>
                  <JDInput jd={jd} setJd={setJd} />

                  {/* Generate Button */}
                  <button
                    disabled={loading}
                    className={`
                      w-full mt-4 sm:mt-6 py-3 sm:py-4 px-6
                      rounded-lg sm:rounded-xl
                      font-semibold sm:font-bold text-sm sm:text-base
                      flex items-center justify-center gap-2
                      transition-all duration-200 transform
                      focus:outline-none focus:ring-4 focus:ring-indigo-300
                      disabled:cursor-not-allowed disabled:transform-none
                      ${loading
                        ? "bg-slate-300 text-slate-500 cursor-wait"
                        : "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl hover:shadow-indigo-200 hover:-translate-y-0.5 active:translate-y-0"
                      }
                    `}
                    onClick={generateLogic}
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        <span>AI is Crafting...</span>
                      </>
                    ) : (
                      <>
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                        <span className="hidden xs:inline">Generate Personalized Message</span>
                        <span className="xs:hidden">Generate {outputType === "email" ? "Email" : "Message"}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Output Display Card */}
              <OutputDisplay result={finalResult} />
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Validation Toast - Improved Mobile Responsiveness */}
      {showValidationToast && (
        <div className="fixed top-4 left-4 right-4 sm:left-auto sm:right-4 sm:top-4 z-50 animate-in slide-in-from-top-2 duration-300">
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-3 sm:px-5 sm:py-4 rounded-xl shadow-2xl flex items-start sm:items-center gap-3 max-w-md mx-auto sm:mx-0 border border-red-500">
            <div className="flex-shrink-0">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="font-medium text-sm sm:text-base flex-1">
              {validationMessage}
            </span>
            <button
              onClick={() => setShowValidationToast(false)}
              className="flex-shrink-0 text-white hover:text-red-100 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};