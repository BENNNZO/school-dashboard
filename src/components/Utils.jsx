"use client"

import { useState } from "react"

export default function Utils() {
    const [selectedStream, setSelectedStream] = useState("https://www.youtube.com/embed/jfKfPfyJRdk?si=W3hxSFDVBYkkMfQ-?autoplay=1");

    const playlist = [{
        name: 'Ribbit',
        writer: 'Juice WRLD',
        src: '/music/Juice WRLD/Ribbit.mp3',
        id: 1,
    }]

    const streams = {
        chill: 'https://www.youtube.com/embed/5qap5aO4i9A',
        beats: 'https://www.youtube.com/embed/DWcJFNfaw9c',
        jazz: 'https://www.youtube.com/embed/7NOSDKb0HlU',
    }

    return (
        <section className="border-b border-white/20">
            <div>
                <h3>Select a Stream</h3>
                <select onChange={(e) => setSelectedStream(streams[e.target.value])}>
                    <option value="chill">Lofi Hip Hop Radio - Chill</option>
                    <option value="beats">Lofi Hip Hop Radio - Beats</option>
                    <option value="jazz">Lofi Hip Hop Radio - Jazz</option>
                    <option value="jazz2">Lofi Hip Hop Radio - Jazz2</option>
                </select>
                <div style={{ width: '0', height: '0', overflow: 'hidden' }}>
                    <iframe
                        width="560"
                        height="315"
                        src={`${selectedStream}?autoplay=1`}
                        frameBorder="0"
                        allow="autoplay"
                        allowFullScreen
                    />
                </div>
            </div>
        </section>
    )
}