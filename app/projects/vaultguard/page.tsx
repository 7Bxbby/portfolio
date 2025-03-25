"use client"
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {ExpandableDesc} from "@/app/projects/components/expandableDesc";
import instagram_logo from "@/public/instagram_logo.png"
import facebook_logo from "@/public/facebook_logo.png"
import whatsapp_logo from "@/public/whatsapp_logo.png"
import x_logo from "@/public/x_logo.png"
import snapchat_logo from "@/public/snapchat_logo.png"
import youtube_logo from "@/public/youtube_logo.png"
import vaultguard_generate_password_showcase from "@/public/vaultguard_generate_password_showcase.png"
import saved_passwords_showcase from "@/public/saved_passwords_showcase.png"




export default function Home() {
    const features = [
        {
            title: "Generate Strong and Secure Passwords",
            description:
                "Adjust length, add symbols, numbers, then generate and save it instantly with a username and website.",
            skeleton: SkeletonOne(),
            className:
                "col-span-1 lg:col-span-4 border-b lg:border-r border-neutral-800",
        },
        {
            title: "All Passwords, One Vault",
            description:
                "Save and manage passwords for all your favorite apps in one secure place.",
            skeleton: SkeletonTwo(),
            className: "border-b col-span-1 lg:col-span-2 border-neutral-800",
        },
        {
            title: "Manage and Access Your Passwords",
            description:
                "Easily copy, edit, or delete passwords and usernames with one click.",
            skeleton: SkeletonThree(),
            className:
                "col-span-1 lg:col-span-3 lg:border-r  border-neutral-800",
        },
        {
            title: "Access Anywhere, Anytime",
            description:
                "With VaultGuard, you can securely log in from any device, at any time, using just your email. No matter where you are, your account is always accessible, providing you with the flexibility and convenience to manage your passwords on the go.",
            skeleton: SkeletonFour(),
            className: "col-span-1 lg:col-span-3 border-b lg:border-none",
        },
    ];
    return (
        <div className="relative z-20 lg:max-w-7xl max-w-full lg:mx-auto h-screen px-5 xl:px-40 2xl:px-5 p-0 lg:px-5">
            <div className="px-8">

                <ExpandableDesc title={"VaultGuard"} image={"/vaultguard_logo.png"}>
                    <div className="space-y-4">
                        {/* Tech Stack */}
                        <div className="mt-4">
                            <h4 className="text-lg font-semibold text-neutral-200">
                                🔎 Tech Stack
                            </h4>
                            <p className="text-neutral-400">
                                Flask, SQLite, Werkzeug, HTML/CSS, Tailwind, Javascript
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-neutral-200">
                                🔐 Secure Password Storage
                            </h4>
                            <p className="text-neutral-400">
                                Store credentials for different websites and apps in an encrypted vault.
                                Organize accounts with icons and copy login details with one click.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-neutral-200">
                                ⚡ Password Generation
                            </h4>
                            <p className="text-neutral-400">
                                Generate strong, unique passwords based on your preferences.
                                Customize length, uppercase letters, numbers, and symbols.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-neutral-200">
                                🌍 Universal Access
                            </h4>
                            <p className="text-neutral-400">
                                Log in securely from anywhere using your email and access your passwords
                                across multiple devices.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-neutral-200">
                                🛠️ Easy Management
                            </h4>
                            <p className="text-neutral-400">
                                Edit or delete saved credentials effortlessly.
                                Search and filter stored accounts quickly.
                            </p>
                        </div>
                    </div>
                </ExpandableDesc>


                <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-center font-normal text-neutral-300">
                    Create, generate, and store strong passwords safely.
                </p>
            </div>

            <div className="relative ">
                <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md border-neutral-800">
                    {features.map((feature) => (
                        <FeatureCard key={feature.title} className={feature.className}>
                            <FeatureTitle>{feature.title}</FeatureTitle>
                            <FeatureDescription>{feature.description}</FeatureDescription>
                            <div className="h-full w-full">{feature.skeleton}</div>
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
    return (
        <p className=" max-w-5xl mx-auto text-left tracking-tight text-white text-xl md:text-2xl md:leading-snug">
            {children}
        </p>
    );
};

const FeatureDescription = ({children}: { children?: React.ReactNode }) => {
    return (
        <p
            className={cn(
                "text-sm md:text-base  max-w-4xl text-left mx-auto",
                "text-center font-normal text-neutral-300",
                "text-left max-w-sm mx-0 md:text-sm my-2"
            )}
        >
            {children}
        </p>
    );
};

 const SkeletonOne = () => {
    return (
        <div className="relative flex py-8 px-2 gap-10 h-full">
            <div className="w-full  p-5  mx-auto bg-black shadow-2xl group h-full">
                <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
                    {/* TODO */}
                    <Image
                        src={vaultguard_generate_password_showcase}
                        alt="header"
                        width={800}
                        height={1000}
                        className="h-full w-full aspect-square object-cover object-left-top rounded-sm"
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
    return (
        <div className="w-full mx-auto bg-transparent group h-full">
            <div className="flex flex-1 w-full h-full flex-col space-y-2  relative">
            {/* TODO */}
                <Image
                    src={saved_passwords_showcase}
                    alt="header"
                    width={800}
                    height={800}
                    className="h-full w-full mt-12 aspect-auto object-contain object-left-top rounded-sm blur-none border-[1px] border-neutral-800 group-hover/image:blur-md transition-all duration-200"
                />
            </div>
        </div>
    );
};

 const SkeletonTwo = () => {
    const images = [
        instagram_logo,facebook_logo,whatsapp_logo,x_logo,snapchat_logo,youtube_logo,whatsapp_logo
    ];

    const imageVariants = {
        whileHover: {
            scale: 1.1,
            rotate: 0,
            zIndex: 100,
        },
        whileTap: {
            scale: 1.1,
            rotate: 0,
            zIndex: 100,
        },
    };
    return (
        <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
            {/* TODO */}
            <div className="flex flex-row -ml-20">
                {images.map((image, idx) => (
                    <motion.div
                        variants={imageVariants}
                        key={"images-first" + idx}
                        style={{
                            rotate: idx % 2 == 0 ? (3 * idx - 10) : (3 * idx + 10)
                        }}
                        whileHover="whileHover"
                        whileTap="whileTap"
                        className="rounded-xl -mr-4 mt-4 p-1 bg-neutral-800 border-neutral-700 border shrink-0 overflow-hidden"
                    >
                        <Image
                            src={image}
                            alt="bali images"
                            width="500"
                            height="500"
                            className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
                        />
                    </motion.div>
                ))}
            </div>
            <div className="hidden sm:flex flex-row -ml-110">
                {images.map((image, idx) => (
                    <motion.div
                        key={"images-second" + idx}
                        style={{
                            rotate: idx % 2 == 0 ? (3 * idx - 10) : (3 * idx + 10)
                        }}
                        variants={imageVariants}
                        whileHover="whileHover"
                        whileTap="whileTap"
                        className="rounded-xl -mr-4 mt-4 p-1 bg-neutral-800 border-neutral-700 border shrink-0 overflow-hidden"
                    >
                        <Image
                            src={image}
                            alt="bali images"
                            width="500"
                            height="500"
                            className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
                        />
                    </motion.div>
                ))}
            </div>
            <div className="flex flex-row -ml-180">
                {images.map((image, idx) => (
                    <motion.div
                        key={"images-second" + idx}
                        style={{
                            rotate: idx % 2 == 0 ? (3 * idx - 10) : (3 * idx + 10)
                        }}
                        variants={imageVariants}
                        whileHover="whileHover"
                        whileTap="whileTap"
                        className="rounded-xl -mr-4 mt-4 p-1 bg-neutral-800 border-neutral-700 border shrink-0 overflow-hidden"
                    >
                        <Image
                            src={image}
                            alt="bali images"
                            width="500"
                            height="500"
                            className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
                        />
                    </motion.div>
                ))}
            </div>

            <div
                className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-black to-transparent  h-full pointer-events-none"/>
            <div
                className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-black  to-transparent h-full pointer-events-none"/>
        </div>
    );
};

 const SkeletonFour = () => {
    return (
        <div className="h-60 md:h-60  flex flex-col items-center relative bg-transparent mt-10">
            {Globe({className:"absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72"})}
        </div>
    );
};

 const Globe = ({className}: { className?: string }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let phi = 0;

        if (!canvasRef.current) return;

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: 600 * 2,
            height: 600 * 2,
            phi: 0,
            theta: 0,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.3, 0.3, 0.3],
            markerColor: [0.1, 0.8, 1],
            glowColor: [1, 1, 1],
            markers: [
                // longitude latitude
                {location: [37.7595, -122.4367], size: 0.03},
                { location: [40.7128, -74.006], size: 0.1 },
            ],
            onRender: (state) => {
                // Called on every animation frame.
                // `state` will be an empty object, return updated params.
                state.phi = phi;
                phi += 0.01;
            },
        });

        return () => {
            globe.destroy();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
            className={className}
        />
    );
};
