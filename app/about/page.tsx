"use client"
import Typewriter from 'typewriter-effect';
import Navigation from "../../components/navigation";
import React from "react";
import {LampContainer} from "@/components/ui/lamp";
export default function Home() {
    return <section>
        <header
            id="Introduction"
            className={`h-screen flex flex-col items-center justify-center text-center absolute top-0 left-0 w-full`}
        >
            <LampContainer className={"-mt-40"}>
                <h1 className="text-6xl font-bold gothic"><Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString("Hi, I'm Kamil")
                            .start()
                    }}
                /></h1>
                <p className="text-xl text-gray-400 mt-4">Web developer <span
                    className="text-gray-200">&</span> programmer.</p>
            </LampContainer>
        </header>
    </section>
}