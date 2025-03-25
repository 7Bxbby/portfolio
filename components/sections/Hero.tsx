'use client';

import { motion } from 'framer-motion';
import Container from '../layout/Container';
import BlurText from "@/components/common/BlurText";
import { HoverBorderGradient } from '../common/hover-border-gradient';
import React from "react";

export default function Hero() {
    return (
        <section className="h-screen flex items-center bg-black text-white border-b-[1px] border-amber-50/15 snap-start" id={"about"}>
            <div className="inset-0 overflow-hidden">
                <motion.div className="absolute top-1/4 left-0 w-full h-px bg-amber-50/30 transform -rotate-6 duration-1000 z-1"
                            initial={{background: "#fffbeb26"}}
                            whileInView={{background: "#fffbeb4d"}}

                ></motion.div>
                <motion.div className="absolute top-1/3 left-0 w-full h-px bg-amber-50/15 transform rotate-3 duration-1000 z-1"
                            initial={{background: "#fffbeb12"}}
                            whileInView={{background: "#fffbeb26"}}
                ></motion.div>
                <motion.div className="absolute top-2/3 left-0 w-full h-px bg-amber-50/30 transform -rotate-2 duration-1000 z-1"
                            initial={{background: "#fffbeb26"}}
                            whileInView={{background: "#fffbeb4d"}}
                ></motion.div>
            </div>
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="text-center flex flex-col justify-center items-center"
                >
                    <div className="flex items-center">
                        <BlurText
                            text="Hi, I'm"
                            direction={"bottom"}
                            animateBy="letters"
                            className="text-5xl md:text-6xl font-bold mb-6 "

                        /><BlurText
                            text=" Kamil"
                            animateBy="letters"
                            direction="bottom"
                            className="text-5xl md:text-6xl font-bold mb-6 [text-shadow:_0px_0px_20px_#ffffff]"

                        />
                    </div>
                    <p className="text-lg text-gray-400 mb-8">
                        Fullstack Developer | Building modern, elegant solutions.
                    </p>
                    <div className="flex justify-center gap-6">

                        <HoverBorderGradient
                            containerClassName="rounded-full"
                            as="button"
                            className="bg-black border-0 text-white flex items-center space-x-2"
                        >
                            <a href="#projects" className={"px-4"}>Projects</a>
                        </HoverBorderGradient>
                        <HoverBorderGradient
                            containerClassName="rounded-full"
                            as="button"
                            className="bg-white border-0 text-black flex items-center space-x-2"
                        >
                            <a href="#connect" className={"px-4"}>Contact</a>
                        </HoverBorderGradient>

                    </div>
                </motion.div>
            </Container>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col justify-center items-center">
                <span className={"pb-1"}>SCROLL DOWN</span>
                <div className={"w-[1px] h-24 bg-gradient-to-b from-[#fffbeb4d] to-transparent animate-pulse-slow"}/>
            </div>

        </section>
    );
}
