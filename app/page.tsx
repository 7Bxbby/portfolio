'use client'
import Skills from '@/components/sections/Skills';
import Hero from '../components/sections/Hero';
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Ribbons from '../components/common/Ribbons';
import React, {useEffect} from "react";
export default function Home() {
    useEffect(() => {
        document.body.style.overflow = '';
        document.documentElement.style.overflowX = '';
    }, []);
    return (
        <>
            <Hero />
            <Skills />
            <Projects />
            <Contact />
            <div className="overflow-hidden absolute top-0 left-0 w-full h-screen">

                <Ribbons

                    baseThickness={30}

                    colors={['#ffffff']}

                    speedMultiplier={0.55}

                    maxAge={500}

                    enableFade={true}

                    enableShaderEffect={false}

                />

            </div>
        </>
    );
}
