import { useState, useEffect } from "react";

export const HowItWorksModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("guide");
  const [visible, setVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
    } else {
      const t = setTimeout(() => setVisible(false), 200);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  if (!visible) return null;

  const templates = {
    message: [
      {
        name: "Professional & Direct",
        template: `Hi [Recruiter Name],

I’m Vishal Rathod, a full stack developer proficient in the MERN stack (React, Node, Express, MongoDB). I was excited to find your job posting as it aligns perfectly with my skills and aspirations to work on impactful projects.

You can view my portfolio at https://vishal88.com/ and my resume here: https://drive.google.com/file/d/1vrdazR4u6ffQhxmlUFX9NNQLkXADcWkX/view

I look forward to discussing how I can contribute to [Company Name]’s success.

Best,
Vishal Rathod`
      },
      //       {
      //         name: "Value-First",
      //         template: `Hi [Name],

      // I noticed [Company] is hiring for [Position]. I specialize in [Your Core Skill] and have helped achieve [specific result].

      // Here's what I bring:
      // • [Skill 1] - [Achievement]
      // • [Skill 2] - [Achievement]

      // I'd love to discuss how I can contribute. Are you available for a quick call?

      // [Your Name]`
      //       }
    ],
    email: [
      {
        name: "React.js Focused",
        template: `Subject: Application for Frontend Developer | MERN Stack | Vishal Rathod
Hi [Recruiter Name],

I’m Vishal Rathod, a Full Stack Developer specializing in the MERN stack. I was excited to reach out because your job posting for the Frontend Developer role aligns perfectly with my skill set, especially my focus on React.js.

My recent projects use a tech stack that matches your requirements perfectly. I’ve focused on building responsive, high-performance interfaces and clean frontend architecture.

You can check my relevant work and portfolio here:
Portfolio: https://vishal88.com/
Resume: https://drive.google.com/file/d/1vrdazR4u6ffQhxmlUFX9NNQLkXADcWkX/view

I look forward to discussing how I can contribute to [Company Name]’s success.

Best regards,
Vishal Rathod
Contact: 6353008705
LinkedIn: https://www.linkedin.com/in/rathod-vishal/
GitHub: https://github.com/vishalrathod8788/`
      },
      {
        name: "Backend Focused",
        template: `Subject: Application for Backend Developer | MERN Stack | Vishal Rathod
Hi [Recruiter Name],

I hope you’re doing well.

I’m Vishal Rathod, a Full Stack Developer specializing in the MERN stack. I was excited to reach out because your job posting for the Backend Developer role aligns perfectly with my skill set, especially my focus on Node.js, Express, and MongoDB.

My recent projects use a tech stack that matches your requirements perfectly. I’ve focused on building scalable server-side logic, efficient APIs, and managing database architectures.

You can check my relevant work and portfolio here:
Portfolio: https://vishal88.com/
Resume: https://drive.google.com/file/d/1vrdazR4u6ffQhxmlUFX9NNQLkXADcWkX/view

I look forward to discussing how I can contribute to [Company Name]’s success.

Best regards,
Vishal Rathod
Contact: 6353008705
LinkedIn: https://www.linkedin.com/in/rathod-vishal/
GitHub: https://github.com/vishalrathod8788/`
      },
      {
        name: "Full Stack Focused",
        template: `Subject: Application for Full Stack Developer | MERN Stack | Vishal Rathod
Hi [Recruiter Name],

I hope you’re doing well.

I’m Vishal Rathod, a Full Stack Developer specializing in the MERN stack. I was excited to reach out because your job posting for the Full Stack role aligns perfectly with my skill set. I have hands-on experience in building end-to-end applications using React.js, Node.js, Express, and MongoDB.

My recent projects, including an AI-powered email automation tool, use a tech stack that matches your requirements perfectly. I focus on creating seamless user interfaces while ensuring robust and scalable backend architecture.

You can check my relevant work and portfolio here:

Portfolio: https://vishal88.com/
Resume: https://drive.google.com/file/d/1vrdazR4u6ffQhxmlUFX9NNQLkXADcWkX/view

I look forward to discussing how my ability to handle both frontend and backend development can contribute to [Company Name]’s success.

Best regards,
Vishal Rathod
Contact: 6353008705
LinkedIn: https://www.linkedin.com/in/rathod-vishal/
GitHub: https://github.com/vishalrathod8788/`
      }
    ]
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Template copied to clipboard! ✅");
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent backdrop-blur-sm transition-opacity duration-200 ${isOpen ? "opacity-100" : "opacity-0"
        }`}
    >
      <div
        className={`bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col transform transition-all duration-200 ${isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-2"
          }`}
      >
        {/* Header */}
        <div className="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 text-white p-6 flex justify-between items-center shadow-lg">
          <h2 className="text-2xl font-bold tracking-tight">How It Works? 🚀</h2>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 hover:scale-110 active:scale-95 rounded-full p-2"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6 transition-transform duration-300 group-hover:rotate-90"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b bg-slate-50">
          <button
            onClick={() => setActiveTab("guide")}
            className={`flex-1 py-3 px-6 font-medium transition ${activeTab === "guide"
              ? "bg-white text-indigo-600 border-b-2 border-indigo-600"
              : "text-slate-600 hover:text-slate-900"
              }`}
          >
            📖 Step-by-Step Guide
          </button>
          <button
            onClick={() => setActiveTab("templates")}
            className={`flex-1 py-3 px-6 font-medium transition ${activeTab === "templates"
              ? "bg-white text-indigo-600 border-b-2 border-indigo-600"
              : "text-slate-600 hover:text-slate-900"
              }`}
          >
            📝 Templates
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === "guide" ? (
            <div className="space-y-6">
              {/* Step 1 - Refined Version */}
              <div className="flex items-start gap-4 group">
                {/* Circle Icon: added shrink-0 to prevent squeezing */}
                <div className="shrink-0 w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-lg shadow-sm">
                  1
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-slate-900 mb-1 leading-tight">
                    Enter Your Profile
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Add your skills, experience, and background in the
                    <span className="font-medium text-indigo-600"> "Your Profile" </span>
                    section. Be specific about your expertise.
                  </p>

                  {/* Example Box: Added border for better definition */}
                  <div className="mt-3 p-3 bg-slate-50 border border-slate-100 rounded-xl text-sm italic">
                    <span className="font-bold text-slate-700 not-italic">Example: </span>
                    "Full-stack developer with 3 years experience in React, Node.js, and MongoDB. Built scalable applications serving 100K+ users."
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              {/* Step 2 - Choose Your Template */}
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-lg shadow-sm">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-slate-900 mb-1 leading-tight">
                    Select Your Template
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Choose the pre-filled template that matches the role whether it's React, Backend, or Full Stack.
                  </p>
                  <div className="mt-3">
                    <button
                      onClick={() => setActiveTab("templates")}
                      className="inline-flex items-center px-4 py-2 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 rounded-lg font-medium text-sm border border-indigo-100 transition-colors"
                    >
                      <span className="mr-2">📝</span> View My Templates
                    </button>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Paste Job Description</h3>
                  <p className="text-slate-600">
                    Copy the complete job description from the job posting and paste it in the "Job Description" field.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Select Message or Email</h3>
                  <p className="text-slate-600">
                    Choose whether you want to generate a LinkedIn message or a professional email with subject line.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold">
                  5
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Generate & Copy</h3>
                  <p className="text-slate-600">
                    Click "Generate" and AI will create a personalized message. Copy it and send it to the recruiter!
                  </p>
                </div>
              </div>

              {/* Tips */}
              <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <h4 className="font-semibold text-amber-900 mb-2">💡 Pro Tips:</h4>
                <ul className="space-y-1 text-sm text-amber-800">
                  <li>• Be specific about your achievements with numbers</li>
                  <li>• Customize the template to match your style</li>
                  <li>• Always review and personalize the generated message</li>
                  <li>• Keep it concise and focused on value</li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Message Templates */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-indigo-600">💬 LinkedIn Message Templates</h3>
                <div className="space-y-4">
                  {templates.message.map((item, index) => (
                    <div key={index} className="border border-slate-200 rounded-lg p-4 hover:border-indigo-300 transition">
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="font-semibold text-slate-900">{item.name}</h4>
                        <button
                          onClick={() => copyToClipboard(item.template)}
                          className="px-3 py-1 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition flex items-center gap-1"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                          Copy
                        </button>
                      </div>
                      <pre className="text-sm text-slate-600 whitespace-pre-wrap font-sans bg-slate-50 p-3 rounded">
                        {item.template}
                      </pre>
                    </div>
                  ))}
                </div>
              </div>

              {/* Email Templates */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-purple-600">📧 Email Templates</h3>
                <div className="space-y-4">
                  {templates.email.map((item, index) => (
                    <div key={index} className="border border-slate-200 rounded-lg p-4 hover:border-purple-300 transition">
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="font-semibold text-slate-900">{item.name}</h4>
                        <button
                          onClick={() => copyToClipboard(item.template)}
                          className="px-3 py-1 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700 transition flex items-center gap-1"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                          Copy
                        </button>
                      </div>
                      <pre className="text-sm text-slate-600 whitespace-pre-wrap font-sans bg-slate-50 p-3 rounded">
                        {item.template}
                      </pre>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t p-4 bg-slate-50 text-center">
          <p className="text-sm text-slate-600">
            Need help? Check out our{" "}
            <a href="https://github.com/Vishalrathod8788/ColdReach-Gemini" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
              GitHub Repository
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
