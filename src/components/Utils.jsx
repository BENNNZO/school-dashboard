"use client"

import { useState, useEffect } from "react"
import YouTube from "react-youtube"
import Image from "next/image"
import IconButton from "./IconButton"

import { ArrowIcon, MailIcon, ChatGPTIcon, PortalIcon, CheckIcon, PairDropIcon } from '/public/assets'

export default function Utils() {
    const [selectedStream, setSelectedStream] = useState("jfKfPfyJRdk")
    const [copied, setCopied] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const [promptsModal, setPromptsModal] = useState(false)

    const prompts = [
        {
            text: "*Engage with a civil discussion forum post by adding to the conversation in a casual, friendly manner. Avoid repeating the original post, sounding condescending, or trying to appear overly intellectual. Keep your response concise and approachable.*"
        },
        {
            text: "Write a post similar to these responses. Keep it short, different but similar, and casual. Your response should be nothing but the new post."
        }
    ]

    useEffect(() => {
        if (copied) {
            const timer = setTimeout(() => {
                setCopied(false);
            }, 2500);

            return () => clearTimeout(timer)
        }
    }, [copied])

    const streams = [
        { title: 'Chill', id: 'jfKfPfyJRdk' },
        { title: 'Synth', id: '4xDzrJKXOOY' },
        { title: 'Piano', id: '4oStw0r33so' },
    ]

    function getKeyByValue(array, value) {
        const foundObject = array.find(obj => obj.id === value)
        return foundObject ? foundObject.title : null
    }

    return (
        <section className="border-b border-neutral-900 flex flex-row justify-between items-center p-2">

            {/* MUSIC OPTIONS */}
            <div>
                <div className="w-80 relative grid place-items-center shadow-md" onClick={() => setDropdown(prev => !prev)}>
                    <div className="flex flex-row justify-between items-center w-full z-20 py-2 px-4 h-12 bg-neutral-900/70 cursor-pointer rounded-sm">
                        <p className="text-white">♫ &gt; {getKeyByValue(streams, selectedStream).toUpperCase()}</p>
                        <Image src={ArrowIcon} width={25} height={25} className={`invert ${dropdown ? 'rotate-90' : 'rotate-0'} duration-300 ease-out`} />
                    </div>
                    {dropdown && (
                        <>
                            <ul className="absolute text-white z-20 overflow-hidden border fade-in border-neutral-800/20 bg-neutral-800/20 backdrop-blur-xl shadow-md rounded-sm top-full left-0 w-full flex flex-col mt-1">
                                {streams.map((e, i) => (
                                    <li key={i} className="px-4 py-2 hover:bg-neutral-300/5 duration-50" onClick={() => setSelectedStream(e.id)}>{e.title}</li>
                                ))}
                            </ul>
                            <div className="bg-black/50 fixed top-0 left-0 w-full h-full z-10 blur-in"></div>
                        </>
                    )}
                </div>
                <YouTube videoId={selectedStream} opts={{ playerVars: { autoplay: 1 } }} className="overflow-hidden w-0 h-0" />
            </div>

            {/* QUICK LINKS */}
            <ul className="flex flex-row gap-2">
                <IconButton href="https://chatgpt.com" icon={ChatGPTIcon} name={"AI"} setPromptsModal={setPromptsModal} />
                <IconButton href="https://pairdrop.net/" icon={PairDropIcon} name={"PearDrop"} />
                <IconButton href="https://outlook.office.com/owa/student.gmc.cc.ga.us" icon={MailIcon} name={"E-Mail"} setCopied={setCopied} />
                <IconButton href="https://selfservice.gmc.cc.ga.us/Student/?hideProxyDialog=false" icon={PortalIcon} name={"Portal"} />
            </ul>

            {/* COPY MESSAGE */}
            {copied && (
                <div className="fixed top-5 right-5 text-white bg-green-400 z-30 flex flex-row gap-2 px-2 py-1 rounded-sm slide-in-top pop-in fade-in">
                    <Image src={CheckIcon} width={15} height={15} alt="check" className="grayscale brightness-0 invert scale-125" />
                    <p>Copied</p>
                </div>
            )}

            {/* PROMPT MODAL */}
            {promptsModal && (
                <div className="absolute w-screen h-screen top-0 left-0 brightness-90 backdrop-blur-md z-20 blur-in grid place-items-center" onClick={() => { if (promptsModal == true) setPromptsModal(false) }}>
                    <ul className="bg-neutral-900/70 border border-neutral-900 rounded-md text-white/70 w-[500px] pop-fade-in">
                        {prompts.map((el, i) => (
                            <li key={i} className="hover:bg-black/10 px-8 py-5 text-white/80 hover:text-white duration-150 cursor-pointer" onClick={(e) => {
                                e.preventDefault()
                                navigator.clipboard.writeText(el.text)
                                setCopied(true)
                            }}>
                                {el.text}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </section>
    )
}
