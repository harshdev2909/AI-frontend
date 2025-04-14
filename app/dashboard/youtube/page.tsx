"use client"
import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';

interface FormData {
  youtube_url: string;
  language_code: string;
  send_email: boolean;
  user_email: string;
}

interface ResponseData {
  video_url: string;
  language: string;
  summary: string;
  email_status?: string;
}

const languageOptions = [
  { value: 'en', label: 'English' },
  { value: 'hi', label: 'Hindi' },
  { value: 'bn', label: 'Bengali' },
  { value: 'ta', label: 'Tamil' },
  { value: 'te', label: 'Telugu' },
  { value: 'kn', label: 'Kannada' },
  { value: 'ml', label: 'Malayalam' },
  { value: 'mr', label: 'Marathi' },
  { value: 'pa', label: 'Punjabi' },
  { value: 'gu', label: 'Gujarati' },
  { value: 'ur', label: 'Urdu' },
];

const Page = () => {
  const [formData, setFormData] = useState<FormData>({
    youtube_url: '',
    language_code: 'en',
    send_email: false,
    user_email: '',
  });

  const [response, setResponse] = useState<ResponseData | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validateForm = () => {
    if (!formData.youtube_url) {
      toast.error('YouTube URL is required');
      return false;
    }
    if (formData.send_email && !formData.user_email) {
      toast.error('Email address is required when sending email');
      return false;
    }
    if (formData.send_email && !/\S+@\S+\.\S+/.test(formData.user_email)) {
      toast.error('Please enter a valid email address');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    try {
      const res = await fetch('https://ai-backend-krf6.onrender.com/youtube/youtube_summary/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('Failed to generate summary');
      }

      const data = await res.json();
      setResponse(data);
      toast.success('Summary generated successfully!');
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to generate summary. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen  bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="max-w-8xl w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <div>
          <h1 className="text-3xl font-bold text-center text-indigo-600">
            YouTube Summary Generator
          </h1>
          <p className="mt-2 text-center text-sm text-gray-600">
            Generate concise summaries of YouTube videos in your preferred language
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="youtube_url" className="block text-sm font-medium text-gray-700">
              YouTube URL
            </label>
            <input
              type="url"
              id="youtube_url"
              name="youtube_url"
              value={formData.youtube_url}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="https://www.youtube.com/watch?v=..."
            />
          </div>

          <div>
            <label htmlFor="language_code" className="block text-sm font-medium text-gray-700">
              Language
            </label>
            <select
              id="language_code"
              name="language_code"
              value={formData.language_code}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            >
              {languageOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="send_email"
              name="send_email"
              checked={formData.send_email}
              onChange={handleChange}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="send_email" className="ml-2 block text-sm text-gray-900">
              Send summary to email
            </label>
          </div>

          {formData.send_email && (
            <div>
              <label htmlFor="user_email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="your.email@example.com"
              />
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white ${
              loading ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 mr-3 text-white"
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
            ) : null}
            {loading ? 'Processing...' : 'Generate Summary'}
          </button>
        </form>

        {response && (
          <div className="mt-8 p-6 bg-gray-50 rounded-lg shadow-inner">
            <h2 className="text-xl font-semibold text-gray-900">Summary</h2>
            <div className="mt-4 space-y-4">
              <p>
                <span className="font-medium">Video URL: </span>
                <a
                  href={response.video_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800"
                >
                  {response.video_url}
                </a>
              </p>
              <p>
                <span className="font-medium">Language: </span>
                {response.language}
              </p>
              <p>
                <span className="font-medium">Summary: </span>
                {response.summary}
              </p>
              {response.email_status && (
                <p>
                  <span className="font-medium">Email Status: </span>
                  {response.email_status}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;