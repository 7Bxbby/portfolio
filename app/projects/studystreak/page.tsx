"use client"
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {ExpandableDesc} from "@/app/projects/components/expandableDesc";
import studystreak_session from "@/public/studystreak_session.png"
import studystreak_subjects from "@/public/studystreak_subjects.png"
import studystreak_plant from "@/public/studystreak_plant.png"
import studystreak_dailyprogress from "@/public/studystreak_todayprogress.png"

export default function Home() {
    const features = [
        {
            title: "Focused Study Sessions",
            description:
                "Choose your favorite learning technique, set timers, and boost your productivity with structured study sessions.",
            skeleton: SkeletonOne(),
            className:
                "col-span-1 lg:col-span-3 border-b lg:border-r border-neutral-800",
        },
        {
            title: "Track Your Learning Progress",
            description:
                "Track your study time with visual progress bars and view detailed insights from your recent study sessions.",
            skeleton: SkeletonTwo(),
            className: "border-b col-span-1 lg:col-span-3 border-neutral-800",
        },
        {
            title: "Today's Progress at a Glance",
            description:
                "Set daily study goals and easily track your morning and afternoon study hours separately, helping you balance your study routine.",
            skeleton: SkeletonThree(),
            className:
                "col-span-1 lg:col-span-3 lg:border-r  border-neutral-800",
        },
        {
            title: "Grow Your Study Plant",
            description:
                "Stay motivated as your virtual plant grows in real-time, reflecting your active study sessions and encouraging continuous learning.",
            skeleton: SkeletonFour(),
            className: "col-span-1 lg:col-span-3 border-b lg:border-none",
        },
    ];
    return (
        <div className="relative z-20 lg:max-w-7xl max-w-full lg:mx-auto h-screen px-5 xl:px-40 2xl:px-5 p-0 lg:px-5">
            <div className="px-8">

                <ExpandableDesc title={"StudyStreak"} image={"/studystreak_logo.png"}>
                    <div className="space-y-4">
                        <div className="mt-4">
                            <h4 className="text-lg font-semibold text-neutral-200">🔎 Tech Stack</h4>
                            <p className="text-neutral-400">
                                NextJS, Tailwind CSS, HTML/CSS, MongoDB
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-neutral-200">🎯 Focused Study Sessions</h4>
                            <p className="text-neutral-400">
                                Select daily targets and initiate structured study sessions using built-in productivity
                                timers.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-neutral-200">📊 Learning Progress</h4>
                            <p className="text-neutral-400">
                                Easily track your recent study sessions and analyze your learning consistency over time.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-neutral-200">📅 Daily Study Goals</h4>
                            <p className="text-neutral-400">
                                Set clear daily study goals, separating your morning and afternoon sessions to balance
                                your routine.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-neutral-200">🌱 Study Plant Motivation</h4>
                            <p className="text-neutral-400">
                                Watch your virtual plant grow as you actively study, providing visual motivation to
                                maintain consistency.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-neutral-200">📚 Subject Distribution</h4>
                            <p className="text-neutral-400">
                                Clearly visualize your study hours across various subjects, helping you refine your
                                study schedule effectively.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-neutral-200">🏅 Level Up System</h4>
                            <p className="text-neutral-400">
                                Accumulate hours, earn experience, level up, and make your studying a rewarding and
                                engaging journey.
                            </p>
                        </div>
                    </div>
                </ExpandableDesc>


                <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-center font-normal text-neutral-300">
                    Monitor your studying consistency, set timers, boost your productivity
                </p>
            </div>

            <div className="relative ">
                <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md border-neutral-800">
                    {features.map((feature) => (
                        <FeatureCard key={feature.title} className={feature.className}>
                            <FeatureTitle>{feature.title}</FeatureTitle>
                            <FeatureDescription>{feature.description}</FeatureDescription>
                            <div className="w-full">{feature.skeleton}</div>
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
        <div className="relative flex py-8 px-2 pt-16 gap-10 h-full">
            <div className="w-full  mx-auto bg-black shadow-2xl group h-full">
                <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
                    {/* TODO */}
                    <Image
                        src={studystreak_session}
                        alt="header"
                        width={800}
                        height={1000}
                        className="h-full w-full object-contain object-top rounded-sm"
                    />
                </div>
            </div>

            <div
                className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-black via-transparent to-transparent w-full pointer-events-none"/>
            <div
                className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-black via-black via-15% to-transparent w-full pointer-events-none"/>
        </div>
    );
};

 const SkeletonThree = () => {
    return (
        <div className="w-full mx-auto bg-transparent pt-16 group">
            <div className="flex items-center justify-center relative">
                {/* TODO */}
                <Image
                    src={studystreak_dailyprogress}
                    alt="header"
                    width={800}
                    height={800}
                    className="object-contain object-center"
                />
                <div
                    className="absolute bottom-0 z-40 inset-x-0 h-32 bg-gradient-to-t from-black via-transparent to-transparent w-full pointer-events-none"/>
                <div
                    className="absolute top-0 z-40 inset-x-0 h-32 bg-gradient-to-b from-black via-black via-15% to-transparent w-full pointer-events-none"/>
            </div>
        </div>
    );
};

 const SkeletonTwo = () => {
    return (
        <div className="relative flex flex-col pt-16 items-center justify-center h-full">
            {/* TODO */}
            <div className="flex items-center justify-center relative">
                <Image
                    src={studystreak_subjects}
                    alt="header"
                    className="object-contain object-center"
                />
                <div
                    className="absolute bottom-0 z-40 inset-x-0 h-16 bg-gradient-to-t from-black via-black via-15% to-transparent w-full pointer-events-none"/>
                <div
                    className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-black via-transparent to-transparent w-full pointer-events-none"/>
            </div>

        </div>
    );
};

 const SkeletonFour = () => {
    return (
        <div className="flex flex-col items-center pt-16 relative bg-transparent">
            <Image
                src={studystreak_plant}
                alt="header"
                width={800}
                height={800}
                className="object-contain object-center"
            />
            <div
                className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-black via-transparent to-transparent w-full pointer-events-none"/>
            <div
                className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-black via-black via-15% to-transparent w-full pointer-events-none"/>
        </div>
    );
};
