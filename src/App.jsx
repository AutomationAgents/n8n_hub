import React from "react";

export default function App() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <header className="bg-white shadow-md p-4 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Automation Agents Hub</h1>
          <a
            href="https://ko-fi.com/yacinedev"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
          >
            ☕ Support on Ko-fi
          </a>
        </div>
      </header>

      <section className="max-w-5xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">📚 Courses & Tutorials</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><a href="#" className="text-blue-600 hover:underline">Beginner’s Guide to n8n (YouTube)</a></li>
          <li><a href="#" className="text-blue-600 hover:underline">Advanced Automation with APIs (Udemy)</a></li>
        </ul>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-8 bg-white">
        <h2 className="text-2xl font-semibold mb-4">🎥 YouTube Channels</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><a href="#" className="text-blue-600 hover:underline">n8n Automation Lab</a></li>
          <li><a href="#" className="text-blue-600 hover:underline">The AI Agents Show</a></li>
        </ul>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">🧰 Free & Paid Templates</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><a href="#" className="text-blue-600 hover:underline">7,000+ Automation Workflows Pack</a></li>
          <li><a href="#" className="text-blue-600 hover:underline">Clinic Booking AI Agent (Free)</a></li>
        </ul>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-8 bg-white">
        <h2 className="text-2xl font-semibold mb-4">🛠️ Tools & APIs</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>OpenAI – GPT-4 API</li>
          <li>WhatsApp BAPI</li>
          <li>Google Sheets API</li>
        </ul>
      </section>

      <footer className="text-center text-sm text-gray-500 p-4 mt-8">
        Made with ❤️ by Yacine. If this hub saved you time, please consider <a href="https://ko-fi.com/yacine" className="text-blue-600 hover:underline">supporting me on Ko-fi</a>.
      </footer>
    </main>
  );
}
