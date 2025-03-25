'use client';

import React, { useEffect, useState } from "react";
import {
    motion,
    useMotionValue,
    useAnimation,
    useTransform,
    PanInfo,
} from "framer-motion";
import StackIcon from "tech-stack-icons";

const skills: string[] = [
    "https://icon.icepanel.io/Technology/svg/HTML5.svg",
    "https://icon.icepanel.io/Technology/svg/CSS3.svg",
    "https://icon.icepanel.io/Technology/svg/JavaScript.svg",
    "https://icon.icepanel.io/Technology/svg/React.svg",
    "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",
    "https://www.tech-stack-icons.com/assets/dark/nextjs.svg"

    ];

interface RollingGalleryProps {
    autoplay?: boolean;
    pauseOnHover?: boolean;
    images?: string[];
}

const RollingGallery: React.FC<RollingGalleryProps> = ({
                                                           autoplay = false,
                                                           pauseOnHover = false,
                                                           images = [],
                                                       }) => {
    // Use default images if none provided
    const galleryImages = images.length > 0 ? images : skills;

    // Safe client-side window usage
    const [isScreenSizeSm, setIsScreenSizeSm] = useState<boolean>(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const checkScreenSize = () => setIsScreenSizeSm(window.innerWidth <= 640);
            checkScreenSize(); // Initial check
            window.addEventListener("resize", checkScreenSize);
            return () => window.removeEventListener("resize", checkScreenSize);
        }
    }, []);

    // 3D geometry
    const cylinderWidth: number = isScreenSizeSm ? 800 : 1000;
    const faceCount: number = galleryImages.length;
    const faceWidth: number = (cylinderWidth / faceCount) * 1.5;
    const radius: number = cylinderWidth / (2 * Math.PI);

    // Framer Motion values
    const dragFactor: number = 0.05;
    const rotation = useMotionValue(0);
    const controls = useAnimation();

    const transform = useTransform(
        rotation,
        (val: number) => `rotate3d(0,1,0,${val}deg)`
    );

    const startInfiniteSpin = (startAngle: number) => {
        controls.start({
            rotateY: [startAngle, startAngle - 360],
            transition: {
                duration: 20,
                ease: "linear",
                repeat: Infinity,
            },
        });
    };

    useEffect(() => {
        if (autoplay) {
            const currentAngle = rotation.get();
            startInfiniteSpin(currentAngle);
        } else {
            controls.stop();
        }
    }, [autoplay, rotation, controls]);

    const handleUpdate = (latest: any) => {
        if (typeof latest.rotateY === "number") {
            rotation.set(latest.rotateY);
        }
    };

    const handleDrag = (_: any, info: PanInfo): void => {
        controls.stop();
        rotation.set(rotation.get() + info.offset.x * dragFactor);
    };

    const handleDragEnd = (_: any, info: PanInfo): void => {
        const finalAngle = rotation.get() + info.velocity.x * dragFactor;
        rotation.set(finalAngle);
        if (autoplay) {
            startInfiniteSpin(finalAngle);
        }
    };

    const handleMouseEnter = (): void => {
        if (autoplay && pauseOnHover) {
            controls.stop();
        }
    };

    const handleMouseLeave = (): void => {
        if (autoplay && pauseOnHover) {
            const currentAngle = rotation.get();
            startInfiniteSpin(currentAngle);
        }
    };

    return (
        <div className="relative flex-1 overflow-hidden">
            <div
                className="absolute left-1/2 bottom-0 mb-6 rounded-full border-32 border-amber-50/15 h-[50%] w-[50%] z-10 transform -translate-x-1/2 -rotate-x-80"
            />
            <div className="flex h-full items-center justify-center [perspective:1000px] [transform-style:preserve-3d]">
                <motion.div
                    drag="x"
                    dragElastic={0}
                    onDrag={handleDrag}
                    onDragEnd={handleDragEnd}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    animate={controls}
                    onUpdate={handleUpdate}
                    style={{
                        transform: transform,
                        rotateY: rotation,
                        width: cylinderWidth,
                        transformStyle: "preserve-3d",
                    }}
                    className="flex min-h-[200px] cursor-grab items-center justify-center [transform-style:preserve-3d]"
                >
                    {galleryImages.map((url, i) => (
                        <div
                            key={i}
                            className="group absolute flex h-fit items-center justify-center p-[8%] [backface-visibility:hidden] md:p-[6%]"
                            style={{
                                width: `${faceWidth}px`,
                                transform: `rotateY(${(360 / faceCount) * i}deg) translateZ(${radius}px)`,
                            }}
                        >
                            <img src={url} alt={url} className={"select-none pointer-events-none"} draggable={false}/>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default RollingGallery;
