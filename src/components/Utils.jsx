"use client"

import { useState, useEffect } from "react"
import YouTube from "react-youtube"
import Image from "next/image"

import { ArrowIcon, MailIcon, ChatGPTIcon, PortalIcon, CopyIcon, CheckIcon, PairDropIcon, UndetectableIcon, GhostIcon } from '/public/assets'
import { SSG_FALLBACK_EXPORT_ERROR } from "next/dist/lib/constants"

export default function Utils() {
    const [selectedStream, setSelectedStream] = useState("jfKfPfyJRdk")
    const [copied, setCopied] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const [promptsModal, setPromptsModal] = useState(true)

    const prompts = [
        {
            text: "*Engage with a civil discussion forum post by adding to the conversation in a casual, friendly manner. Avoid repeating the original post, sounding condescending, or trying to appear overly intellectual. Keep your response concise and approachable.*"
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

    function hoverText(title) {
        return (
            <div className="group-hover:inline-block hidden fade-in bg-neutral-900 text-white absolute bottom-full left-1/2 -translate-x-1/2 -translate-y-2 drop-shadow-lg rounded-sm whitespace-nowrap px-1 pop-in">
                <div className="w-3 h-3 bg-neutral-900 absolute top-full left-1/2 -translate-x-1/2 -translate-y-2.5 rotate-45 rounded-sm -z-10"></div>
                <p className="z-10">{title}</p>
            </div>
        )
    }

    const IconButton = ({ href, icon, text }) => (
        <li className="bg-neutral-900/50 cursor-pointer hover:bg-neutral-900 duration-100 rounded-sm h-12 aspect-square border border-neutral-800/50 shadow-md group relative">
            <a href={href} target="_blank" className="w-full h-full grid place-items-center" onContextMenu={e => {
                e.preventDefault()
                
                if (text === "E-Mail") {
                    setCopied(true)
                    navigator.clipboard.writeText("bphillips0826@bulldog.gmc.edu")
                } else if (text === "AI") {
                    setPromptsModal(true)
                    // navigator.clipboard.writeText("*respond to this civil discussion forum post in a humane and human like way. do not repeat it just add to the discussion. do not belittle or try to sound smart just discuss.*")
                }
            }}>
                <Image src={icon} width={30} height={30} className="invert" alt={text} />
            </a>
        </li>
    )

    return (
        <section className="border-b border-neutral-700/50 flex flex-row justify-between items-center p-2">

            {/* MUSIC OPTIONS */}
            <div>
                <div className="w-80 relative grid place-items-center shadow-md" onClick={() => setDropdown(prev => !prev)}>
                    <div className="flex flex-row justify-between items-center w-full z-20 border border-neutral-800/50 py-2 px-4 h-12 bg-neutral-900/50 cursor-pointer rounded-sm">
                        <p className="text-white">♫ &gt; {getKeyByValue(streams, selectedStream).toUpperCase()}</p>
                        <Image src={ArrowIcon} width={25} height={25} className={`invert ${dropdown ? 'rotate-90' : 'rotate-0'} duration-300 ease-out`} />
                    </div>
                    {dropdown && (
                        <>
                            <ul className="absolute text-white z-20 overflow-hidden border fade-in border-neutral-800/50 bg-neutral-800/20 backdrop-blur-xl shadow-md rounded-sm top-full left-0 w-full flex flex-col mt-1">
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
                <IconButton href="https://chatgpt.com" icon={ChatGPTIcon} text={"AI"} />
                <IconButton href="https://undetectable.ai/" icon={UndetectableIcon} text={"AI Checker"} />
                <IconButton href="https://www.the-ghost-ai.com/" icon={GhostIcon} text={"Ghost AI"} />
                <IconButton href="https://pairdrop.net/" icon={PairDropIcon} text={"PearDrop"} />
                <IconButton href="https://outlook.office.com/owa/student.gmc.cc.ga.us" icon={MailIcon} text={"E-Mail"} />
                <IconButton href="https://selfservice.gmc.cc.ga.us/Student/?hideProxyDialog=false" icon={PortalIcon} text={"Portal"} />
            </ul>

            {/* UTIL UTILITES */}
            {copied && (
                <div className="fixed top-5 right-5 text-white bg-green-400 z-30 flex flex-row gap-2 px-2 py-1 rounded-sm slide-in-top pop-in fade-in">
                    <Image src={CheckIcon} width={15} height={15} alt="check" className="grayscale brightness-0 invert scale-125" />
                    <p>Copied</p>
                </div>
            )}

            {promptsModal && (
                <div className="absolute w-screen h-screen top-0 left-0 brightness-90 backdrop-blur-md z-20 blur-in grid place-items-center" onClick={() => { if (promptsModal == true) setPromptsModal(false) }}>
                    <ul className="bg-neutral-900 border border-neutral-800 rounded-md text-white/70 w-[500px] pop-fade-in">
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