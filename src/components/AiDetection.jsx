'use client'

import { useState } from "react"
import axios from "axios"

export default function AiDetection() {
    const [text, setText] = useState("")
    const [result, setResult] = useState(null)

    const checkText = async () => {
        try {
            const response = await axios.post('https://zerogpt.net/api/v1/detectText', {
                "input_text": text
            })
            console.log(response.data)
            setResult(response.data)
        } catch (error) {
            console.error("Error detecting text:", error)
            setResult("Error occurred while detecting")
        }
    }

    return (
        <section className="bg-slate-800 text-white border border-white p-4">
            <input 
                type="text" 
                value={text} 
                onChange={e => setText(e.target.value)} 
                className="text-black p-2 mb-2 w-full"
            />
            <button 
                onClick={checkText} 
                className="bg-blue-500 text-white py-2 px-4 rounded"
            >
                Check Text
            </button>
            {result && <p className="mt-4">{result}</p>}
        </section>
    )
}