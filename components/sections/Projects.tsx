'use client';
import Container from '../layout/Container';
import InfiniteMenu from "@/components/common/InfiniteMenu";
import studystreak_logo from "@/public/studystreak_logo.png"
import directorycleaner_logo from "@/public/directorycleaner_logo.png"
import vaultguard_logo from "@/public/vaultguard_logo.png"
import {motion} from "framer-motion";
import React from "react";

const items = [
    {
        image: studystreak_logo,
        link: '/projects/studystreak',
        title: 'StudyStreak',
        description: 'This is pretty cool, right?'
    },
    {
        image: directorycleaner_logo,
        link: '/projects/directorycleaner',
        title: 'DirCleaner',
        description: 'This is pretty cool, right?'
    },
    {
        image: vaultguard_logo,
        link: '/projects/vaultguard',
        title: 'VaultGuard',
        description: 'This is pretty cool, right?'
    }
];

export default function Projects() {
    return (
        <section className="h-screen w-full flex items-center relative z-10 bg-transparent text-white snap-start" id={"projects"}>
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
            <motion.h2
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                className="text-6xl font-bold absolute top-32 left-1/2 transform -translate-x-1/2 select-none [text-shadow:_0px_0px_20px_#ffffff]">Projects</motion.h2>
            <Container className={"h-full w-full bg-transparent"}>
                <div className={"h-full relative bg-transparent"}>
                    <InfiniteMenu items={items}/>
                </div>
            </Container>
        </section>
    );
}
