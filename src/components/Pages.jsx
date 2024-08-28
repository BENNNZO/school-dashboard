'use client'

import { useState } from "react"

export default function Pages() {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = [
        { title: "Example 1", url: 'https://www.example.com' },
        { title: "Example 2", url: 'https://www.chatgpt.com' },
        { title: "Example 3", url: 'https://www.bing.com' },
        { title: "Example 4", url: 'https://www.google.com' }
    ];

    return (
        <section className="p-4">
            <div className="flex space-x-4 mb-4">
                {tabs.map((tab, i) => (
                    <button
                        key={i}
                        className={`py-2 px-4 rounded ${activeTab === i ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                        onClick={() => setActiveTab(i)}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>
            <div className="border border-gray-300">
                <iframe
                    src={tabs[activeTab].url}
                    className="w-full h-[500px]"
                    title={`Tab ${tabs[activeTab].title}`}
                ></iframe>
            </div>
        </section>
    )
}