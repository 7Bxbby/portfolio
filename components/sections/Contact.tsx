'use client';

import { motion } from 'framer-motion';
import Container from '../layout/Container';
import { HoverBorderGradient } from '../common/hover-border-gradient';
import {FaEnvelope, FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa';
import React from 'react';
import Ribbons from "@/components/common/Ribbons";

export default function Contact() {
    return (
        <section
            className="h-screen flex items-center relative bg-black text-white border-t-[1px] border-amber-50/15"
            id="contact"
        >
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
            <motion.div className="absolute top-1/4 left-0 w-full h-px bg-amber-50/30 transform rotate-6 duration-1000 z-1"
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
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="text-center w-full flex flex-col items-center"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                        className="text-5xl md:text-6xl font-bold mb-6 [text-shadow:_0px_0px_20px_#ffffff] select-none"
                    >
                        Contact
                    </motion.h2>
                    <p className="text-lg text-gray-400 mb-10 max-w-xl">
                        Let’s connect — feel free to check out my work or say hi.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6">
                        <HoverBorderGradient
                            containerClassName="rounded-full"
                            as="button"
                            className="bg-black border-0 text-white flex items-center space-x-2 px-4 py-2"
                        >
                            <FaGithub />
                            <a href={"https://github.com/7Bxbby"}>Github</a>
                        </HoverBorderGradient>

                        <HoverBorderGradient
                            containerClassName="rounded-full"
                            as="button"
                            className="bg-black border-0 text-white flex items-center space-x-2 px-4 py-2"
                        >
                            <FaEnvelope />
                            <a href={"mailto:bxbbyafterhours@gmail.com"}>Email</a>
                        </HoverBorderGradient>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
