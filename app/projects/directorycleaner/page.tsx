"use client"
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import directory_cleaner_showcase from "@/public/directory_cleaner_showcase.png"
import pdf_logo from "@/public/pdf_logo.png"
import mp4_logo from "@/public/mp4_logo.png"
import wav_logo from "@/public/wav_logo.png"
import document_folder_icon from "@/public/document_folder_icon.png"
import video_folder_icon from "@/public/video_folder_icon.png"
import music_folder_icon from "@/public/music_folder_icon.png"

import { motion } from "framer-motion";
import {ExpandableDesc} from "@/app/projects/components/expandableDesc";

export default function Home() {
    const features = [
        {
            title: "Effortless File Organization",
            description:
                "No more manual sorting! DirectoryCleaner automatically scans chosen folder, detects file types, and neatly arranges everything into structured subfolders.",
            skeleton: SkeletonOne(),
            className:
                "col-span-1 lg:col-span-4 border-b lg:border-r border-neutral-800",
        },
        {
            title: "Extension-Based Sorting",
            description:
                "You define the extensions, and the app does the rest — whether it’s sorting images, documents, music, or videos, everything goes exactly where it belongs.",
            skeleton: SkeletonTwo(),
            className: "border-b col-span-full flex flex-col lg:block justify-center items-center lg:col-span-2 border-neutral-800",
        },
        {
            title: "Full Folder Customization",
            description:
                "Customize your sorting system by adding, editing, or removing folders and assigning specific file extensions to each one. Whether it's .jpg for \"Images\" or .exe for \"Programs\", tailor it to fit your needs.",
            skeleton: SkeletonThree(),
            className:
                "col-span-full lg:col-span-full  flex flex-col lg:flex-row items-center gap-10 border-neutral-800",
        },
    ];
    return (
        <div className="relative z-20 lg:max-w-7xl max-w-full lg:mx-auto h-screen px-5 xl:px-40 2xl:px-5 p-0 lg:px-5">
            <div className="px-8">

                <ExpandableDesc title={"DirectoryCleaner"} image={"/directorycleaner_logo.png"}>
                    <div className="space-y-4">
                        {/* Tech Stack */}
                        <div className="mt-4">
                            <h4 className="text-lg font-semibold text-neutral-200">
                                🛠 Tech Stack
                            </h4>
                            <p className="text-neutral-400">
                                Python, Tkinter, ttkbootstrap, shutil, pathlib, JSON
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-neutral-200">
                                📂 Automated File Organization
                            </h4>
                            <p className="text-neutral-400">
                                Automatically sort files into categorized folders based on extensions.
                                Default folders: documents, images, videos, music.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-neutral-200">
                                🖥 Customizable Target Directory
                            </h4>
                            <p className="text-neutral-400">
                                Choose any folder as the target directory.
                                Easily switch between different locations, including the desktop.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-neutral-200">
                                ⚙️ Flexible Folder Management
                            </h4>
                            <p className="text-neutral-400">
                                Add, edit, or remove folder categories and define custom file extensions.
                                View all configurations in an interactive tree view.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-neutral-200">
                                🚀 One-Click Cleanup
                            </h4>
                            <p className="text-neutral-400">
                                Quickly organize your files with a single click.
                                Automatically creates missing folders and moves files to their appropriate locations.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-neutral-200">
                                🔄 Persistent Configuration
                            </h4>
                            <p className="text-neutral-400">
                                Saves user preferences and folder structures in a configuration file.
                                Restores settings automatically on the next launch.
                            </p>
                        </div>
                    </div>
                </ExpandableDesc>


                <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-center font-normal text-neutral-300">
                    Helping you maintain a clean and organized digital space.
                </p>
            </div>

            <div className="relative ">
                <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md border-neutral-800">
                    {features.map((feature) => (
                        <FeatureCard key={feature.title} className={feature.className}>
                            <FeatureTitle>{feature.title}</FeatureTitle>
                            <FeatureDescription>{feature.description}</FeatureDescription>
                            <div className="w-full flex justify-center">{feature.skeleton}</div>
                        </FeatureCard>
                    ))}
                </div>
            </div>
        </div>
    );
}

const FeatureCard = ({
                         children,
                         className,
                     }: {
    children?: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
            {children}
        </div>
    );
};

const FeatureTitle = ({children}: { children?: React.ReactNode }) => {
    if (!children) {
        children = "Error loading assets..."
    }
    return (
        <p className={` max-w-5xl mx-auto tracking-tight text-white text-xl md:text-2xl md:leading-snug ${children.toString() == "Effortless File Organization" ? "text-center" : "text-left"}`}>
            {children}
        </p>
    );
};

const FeatureDescription = ({children}: { children?: React.ReactNode }) => {
    if (!children) {
        children = "Error loading assets..."
    }
    return (
        <p
            className={cn(
                "text-sm md:text-base  max-w-4xl text-left mx-auto",
                "text-center font-normal text-neutral-300",
                `${children.toString().startsWith("No more manual sorting")?"text-center":"text-left mx-0"} max-w-sm md:text-sm my-2`
            )}
        >
            {children}
        </p>
    );
};

const SkeletonOne = () => {
    return (
        <div className="relative flex py-8 px-2 gap-10 h-full w-full justify-items-end text-end">
            <div className="w-full  p-5  mx-auto bg-black shadow-2xl group h-full">
                <div className="flex flex-1 w-full h-full flex-col space-y-2 justify-items-end text-end">
                    {/* TODO */}
                    <Image
                        src={directory_cleaner_showcase}
                        alt="header"
                        width={800}
                        height={1000}
                        className="h-full w-full object-contain object-top rounded-sm"
                    />
                </div>
            </div>

            <div
                className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-black via-black to-transparent w-full pointer-events-none"/>
            <div
                className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-black via-transparent to-transparent w-full pointer-events-none"/>
        </div>
    );
};

const SkeletonThree = () => {
    const folders = Array(5).fill("/document_folder_icon.png"); // Mniejsza liczba, ale powielona

    return (
        <div className="w-full relative overflow-hidden">
            <motion.div
                className="flex gap-10" // w-max pozwala na dłuższą "taśmę"
                animate={{ x: ["0%", "-50%"] }} // Płynne przesunięcie
                transition={{ repeat: Infinity, duration: 5, ease: "linear", repeatType: "loop" }}
            >
                {/* Podwajamy listę folderów dla płynnego efektu */}
                {[...folders, ...folders].map((folder, index) => (
                    <Image
                        key={index}
                        src={folder}
                        width={80}
                        height={40}
                        alt="Folder"
                        className="object-contain grow"
                    />
                ))}
            </motion.div>
        </div>
    );

};

const SkeletonTwo = () => {
    const images = [pdf_logo, mp4_logo, wav_logo];
    const folder_images = [document_folder_icon, video_folder_icon, music_folder_icon];
    const folder_names = ["Docs", "Videos", "Music"];
    const text = [".PDF", ".MP4", ".WAV"];

    return (
        <div className="w-full flex lg:pt-32 lg:items-center">
            {/* Container for both columns that acts as a viewport */}
            <motion.div
                initial={{opacity: 1}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
                className="w-full flex justify-center items-center"
            >
                {/* Files column - stays centered */}
                <motion.div
                    className="hidden flex-col gap-6 items-center justify-center lg:flex"
                >
                    {images.map((image, idx) => (
                        <motion.div
                            key={"file-" + idx}
                            initial={{scale: 1}}
                            animate={{
                                x: [0, "-75%", "-75%", 0],
                                z: [10, 10, 10, 5]
                            }}
                            transition={{
                                duration: 5,
                                times: [0, 0.2, 0.8, 1],
                                repeat: Infinity,
                                repeatDelay: 1,
                            }}
                            className="rounded-xl p-2 bg-neutral-800 border-neutral-700 border flex items-center gap-3"
                        >
                            <Image
                                src={image}
                                alt={text[idx] + " logo"}
                                width={500}
                                height={500}
                                className="rounded-lg h-12 w-12 object-cover"
                            />
                            <span className="text-white font-medium">{text[idx]}</span>
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div
                    className="w-full h-full flex gap-6 items-start pt-6 justify-center lg:hidden"
                >
                    {images.map((image, idx) => (
                        <motion.div
                            key={"file-" + idx}
                            initial={{scale: 1}}
                            animate={{

                            }}
                            transition={{
                                duration: 1,
                            }}
                            className="rounded-xl p-2 bg-neutral-800 border-neutral-700 border flex items-center gap-3"
                        >
                            <Image
                                src={image}
                                alt={text[idx] + " logo"}
                                width={500}
                                height={500}
                                className="rounded-lg h-12 w-12 object-cover"
                            />
                            <span className="text-white font-medium">{text[idx]}</span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Folders column - initially overlapping, then slides out */}
                <motion.div
                    initial={{x: 0, opacity: 0}} // Initially overlapped and semi-transparent
                    animate={{
                        x: [0, "50%", "50%", 0], // Slide right, stay, slide back
                        z: [5, 10, 10, 10],
                        opacity: [0, 1, 1, 1], // Fade in, stay visible, fade out
                    }}
                    transition={{
                        duration: 5,
                        times: [0, 0.2, 0.8, 1], // Control timing of movement phases
                        repeat: Infinity,
                        repeatDelay: 1
                    }}
                    className="absolute hidden lg:flex flex-col gap-6 items-center justify-center"
                >
                    {folder_images.map((image, idx) => (
                        <motion.div
                            key={"folder-" + idx}
                            initial={{scale: 1}}
                            animate={{
                                scale: [1, 1.1, 1],
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                delay: 2,
                                repeatDelay: 11,
                            }}
                            className="rounded-xl p-2 bg-neutral-800 border-neutral-700 border flex items-center gap-3"
                        >
                            <Image
                                src={image}
                                alt={"folder " + idx}
                                width={500}
                                height={500}
                                className="rounded-lg h-12 w-12 object-cover"
                            />
                            <span className="text-white font-medium">{folder_names[idx]}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};
