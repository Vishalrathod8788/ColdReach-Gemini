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
        template: `Hi [Name],

I came across the [Position] opening at [Company] and was immediately drawn to [specific aspect].

With my background in [Your Skills], I believe I could contribute to [specific goal]. At [Previous Company], I [achievement].

Would you be open to a brief conversation?

Best regards,
[Your Name]`
      },
      {
        name: "Value-First",
        template: `Hi [Name],

I noticed [Company] is hiring for [Position]. I specialize in [Your Core Skill] and have helped achieve [specific result].

Here's what I bring:
• [Skill 1] - [Achievement]
• [Skill 2] - [Achievement]

I'd love to discuss how I can contribute. Are you available for a quick call?

[Your Name]`
      }
    ],
    email: [
      {
        name: "Professional Email",
        template: `Subject: [Position] Role at [Company] - Quick Question

Dear [Hiring Manager Name],

I came across the [Position] opening at [Company] and was immediately drawn to [specific aspect of the role/company].

With my background in [Your Key Skills], I believe I could contribute meaningfully to [specific project/goal mentioned in JD]. At [Previous Company], I [specific achievement that relates to the role].

I'd love to learn more about how [Company] is approaching [specific challenge] and explore how my experience could add value to your team.

Would you be open to a brief conversation this week?

Best regards,
[Your Name]`
      },
      {
        name: "Story-Driven Email",
        template: `Subject: [Your Unique Value] for [Company]'s [Team/Project]

Hello [Name],

When I saw the [Position] role at [Company], it felt like the perfect match.

I've spent the last [X years] working on [relevant experience], most recently at [Company] where I [specific achievement with numbers]. What excites me about [Company] is [specific aspect from JD or company mission].

I'm particularly drawn to [specific challenge/project mentioned in JD] because [personal connection or relevant experience].

I'd appreciate the opportunity to discuss how my experience with [specific skill] could support [Company's goal].

Would you have 15 minutes this week for a quick chat?

Warm regards,
[Your Name]
[LinkedIn Profile]`
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
        <div className="bg-liner-to-r from-indigo-600 to-purple-600 text-white p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold">How It Works? 🚀</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-indigo-900 hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-colors duration-150"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="flex-0 w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Enter Your Profile</h3>
                  <p className="text-slate-600">
                    Add your skills, experience, and background in the "Your Profile" section. Be specific about your expertise.
                  </p>
                  <div className="mt-2 p-3 bg-slate-50 rounded-lg text-sm">
                    <strong>Example:</strong> "Full-stack developer with 3 years experience in React, Node.js, and MongoDB. Built scalable applications serving 100K+ users."
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Choose a Template</h3>
                  <p className="text-slate-600">
                    Select a template from the "Templates" tab above, or create your own. Use placeholders like [Name], [Company], [Position].
                  </p>
                  <button
                    onClick={() => setActiveTab("templates")}
                    className="mt-2 text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                  >
                    → View Templates
                  </button>
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
