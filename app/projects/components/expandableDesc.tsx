"use client";
import Image from "next/image";
import React, {JSX, useEffect, useRef, useState} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../../hooks/use-outside-click";

interface Props {
    children: React.ReactNode;
    title: string;
    image: string;
}

export function ExpandableDesc({title, children, image}:Props): JSX.Element {
    const [active, setActive] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }

        if (active) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(false));

    return (
        <>
            {/* Overlay */}
            <AnimatePresence>
                {active && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 h-full w-full z-10"
                    />
                )}
            </AnimatePresence>

            {/* Modal */}
            <AnimatePresence>
                {active && (
                    <div className="fixed inset-0 flex items-center justify-center z-[200]">
                        <motion.div
                            ref={ref}
                            initial={{opacity: 0, scale: 0.9}}
                            animate={{opacity: 1, scale: 1}}
                            exit={{opacity: 0, scale: 0.9}}
                            className="w-full max-w-5xl bg-black rounded-xl overflow-hidden border-[1px] border-neutral-800"
                        >
                            {/* Obrazek */}
                            <Image
                                width={400}
                                height={200}
                                src={image}
                                alt="Summertime Sadness"
                                className="w-full h-40 object-cover blur-sm"
                            />

                            {/* Treść */}
                            <div className="p-6 bg-black rounded-xl mx-auto">
                                {/* Nagłówek */}
                                <h3 className="text-2xl font-bold text-neutral-200 mb-2">
                                    {title} – An In-depth Overview
                                </h3>

                                {/* Lista funkcji */}
                                {children}
                            </div>

                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Przycisk Otwierania */}
            <span className={"flex w-full items-center justify-center cursor-pointer pt-12"}
                  onClick={() => setActive(true)}>
                <motion.h2
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                    className="text-6xl font-bold select-none [text-shadow:_0px_0px_20px_#ffffff]">{title}</motion.h2>
            <button
                className=" text-white rounded-lg font-bold cursor-pointer" onClick={() => setActive(true)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="32" height="32"
                     className={"fill-white pl-1"}>
                    <path
                        d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z"/>
                </svg>
            </button>
            </span>
        </>
    );
}
