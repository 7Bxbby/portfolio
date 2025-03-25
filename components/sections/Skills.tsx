'use client';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import RollingGallery from "@/components/common/RollingGallery";
import SpotlightCard from "@/components/common/SpotlightCard";
import React from "react";

export default function Skills() {
    return (
        <section id="skills" className="flex pt-26 h-screen w-full flex-col items-center justify-center text-white relative snap-start">
            <motion.div className="absolute top-1/4 left-0 w-screen h-px bg-amber-50/30 transform rotate-6 duration-1000 z-1"
                        initial={{background: "#fffbeb26"}}
                        whileInView={{background: "#fffbeb4d"}}

            ></motion.div>
            <motion.div className="absolute top-1/3 left-0 w-full h-px bg-amber-50/15 transform -rotate-3 duration-1000 z-1"
                        initial={{background: "#fffbeb12"}}
                        whileInView={{background: "#fffbeb26"}}
            ></motion.div>
            <motion.div className="absolute top-2/3 left-0 w-full h-px bg-amber-50/30 transform rotate-2 duration-1000 z-1"
                        initial={{background: "#fffbeb26"}}
                        whileInView={{background: "#fffbeb4d"}}
            ></motion.div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold select-none mb-12 break-words max-w-[90vw] leading-tight">
  <span className="[text-shadow:_0px_0px_20px_#ffffff] transition-all duration-300 hover:[text-shadow:_0px_0px_8px_#ffffff]">
    Skills
  </span>{" "}
                & Tech Stack
            </h2>
            <Container className={"lg:flex-row flex-col"}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="lg:flex-1 flex-1/4 max-w-4xl items-center flex justify-center"
                >
                    <SpotlightCard className={"z-3"}>
                        <h3 className="text-2xl font-bold mb-4 text-white">My Skillset</h3>
                        <ul className="space-y-4">
                            <li>
                                <p className="text-lg font-semibold text-white">HTML5</p>
                                <p className="text-sm text-gray-400">Semantic, accessible, SEO-friendly markup structure.</p>
                            </li>
                            <li>
                                <p className="text-lg font-semibold text-white">CSS3</p>
                                <p className="text-sm text-gray-400">Responsive layouts with Flexbox & Grid. Animations & transitions.</p>
                            </li>
                            <li>
                                <p className="text-lg font-semibold text-white">JavaScript (ES6+)</p>
                                <p className="text-sm text-gray-400">Dynamic, interactive UI logic. Clean, modular code.</p>
                            </li>
                            <li>
                                <p className="text-lg font-semibold text-white">React</p>
                                <p className="text-sm text-gray-400">Component-driven architecture, hooks, context API, state management.</p>
                            </li>
                            <li>
                                <p className="text-lg font-semibold text-white">Tailwind CSS</p>
                                <p className="text-sm text-gray-400">Utility-first CSS framework, custom themes, responsive design patterns.</p>
                            </li>
                            <li>
                                <p className="text-lg font-semibold text-white">Next.js</p>
                                <p className="text-sm text-gray-400">Fullstack React framework. SSR, SSG, API routes, optimized performance.</p>
                            </li>
                        </ul>
                    </SpotlightCard>
                </motion.div>
            <RollingGallery autoplay={true} pauseOnHover={false} />

            </Container>
        </section>

    );
}
