"use client";
import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import axios from 'axios';

export default function LearningPathPage() {
  type FormData = {
    goal: string;
    sendEmail: boolean;
    userEmail: string;
  };

  const [formData, setFormData] = useState<FormData>({
    goal: '',
    sendEmail: false,
    userEmail: '',
  });
  interface LearningPathResponse {
    goal: string;
    required_skills: string[];
    learning_path: string[];
    email_status: string;
  }
  const [response, setResponse] = useState<LearningPathResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload: any = {
      goal: formData.goal,
      send_email: formData.sendEmail,
    };

    if (formData.sendEmail) {
      payload.user_email = formData.userEmail;
    }

    const res = await axios.post<LearningPathResponse>(
      'https://ai-backend-krf6.onrender.com/learning/generate_learning_path/',
      payload
    );
      setResponse(res.data);
      toast.success('Learning path generated successfully!');
    } catch (error) {
      toast.error('Failed to generate learning path. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const isChecked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({
        ...prev,
        [name]: isChecked,
        // Reset userEmail when unchecking to avoid sending to stale email
        userEmail: isChecked ? prev.userEmail : '',
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Generate Your Learning Path
        </h1>

        <div className="bg-white shadow-2xl rounded-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="goal"
                className="block text-sm font-medium text-gray-700"
              >
                Your Learning Goal
              </label>
              <textarea
                id="goal"
                name="goal"
                value={formData.goal}
                onChange={handleInputChange}
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="e.g., Become a Python developer"
                required
              />
            </div>

            <div className="flex items-center">
              <input
                id="sendEmail"
                name="sendEmail"
                type="checkbox"
                checked={formData.sendEmail}
                onChange={handleInputChange}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="sendEmail"
                className="ml-2 block text-sm text-gray-900"
              >
                Send learning path to email
              </label>
            </div>

            {formData.sendEmail && (
              <div>
                <label
                  htmlFor="userEmail"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  id="userEmail"
                  name="userEmail"
                  type="email"
                  value={formData.userEmail}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                  loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {loading ? 'Generating...' : 'Generate Learning Path'}
              </button>
            </div>
          </form>
        </div>

        {response && (
          <div className="mt-8 bg-white shadow-2xl rounded-lg p-8 animate-fade-in">
            <h2 className="text-3xl font-bold text-indigo-600 mb-6">
              Your Learning Journey
            </h2>
            <div className="space-y-8">
              {/* Goal Section */}
              <div className="bg-indigo-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-indigo-700 mb-3">
                  Your Goal
                </h3>
                <p className="text-lg text-gray-800 capitalize">
                  {response.goal}
                </p>
              </div>

              {/* Required Skills Section */}
              <div>
                <h3 className="text-xl font-semibold text-indigo-700 mb-4">
                  Required Skills
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {response.required_skills.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full text-center hover:bg-blue-200 transition"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Learning Path Section */}
              <div>
                <h3 className="text-xl font-semibold text-indigo-700 mb-4">
                  Your Learning Path
                </h3>
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-indigo-200"></div>
                  {response.learning_path.map((step, index) => (
                    <div key={index} className="mb-6 flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold z-10">
                        {index + 1}
                      </div>
                      <div className="ml-6 bg-white border border-gray-200 rounded-lg p-4 shadow-sm w-full">
                        <p className="text-gray-800">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Email Status Section */}
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Email Status
                </h3>
                <p className="text-lg text-green-800 flex items-center">
                  <span className="mr-2">{response.email_status.includes('sent') ? '✅' : '❌'}</span>
                  {response.email_status}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}