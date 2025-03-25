'use client';

import { useEffect, useState } from "react";
import GooeyNav from '../common/GooeyNav';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react'; // ikona strzałki

export default function Navbar() {
    const pathname = usePathname();
    const isSubpage = pathname !== '/' && !pathname.startsWith('/#');

    const navItems = [
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
        { label: 'Connect', href: '#connect' },
    ];

    const sectionIds = navItems.map((item) => item.href.replace('#', ''));
    const [activeIndex, setActiveIndex] = useState(0);
    const [observerEnabled, setObserverEnabled] = useState(true);

    useEffect(() => {
        if (isSubpage) return;

        const sections = sectionIds.map((id) => document.getElementById(id));

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (observerEnabled && entry.isIntersecting) {
                        const index = sectionIds.indexOf(entry.target.id);
                        if (index !== -1) {
                            setActiveIndex(index);
                        }
                    }
                });
            },
            {
                threshold: 0.3,
                rootMargin: '0px 0px -20% 0px',
            }
        );

        sections.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, [observerEnabled, isSubpage]);

    return (
        <aside className="fixed top-0 left-0 h-screen w-64 border-r border-amber-50/15 flex flex-col items-center justify-between py-8 z-50">
            {isSubpage ? (
                <div className="flex flex-col items-center justify-center h-full">
                    <Link
                        href="/#projects"
                        className="text-black bg-white rounded-[8px] py-[0.6em] px-[1em] relative cursor-pointer transition-all duration-300 ease shadow flex items-center justify-around"
                    >
                        <ArrowLeft size={20} />
                        Projects
                    </Link>

                </div>
            ) : (
                <>
                    <aside className="fixed top-0 right-0 h-screen w-64 border-l border-amber-50/15 flex flex-col items-center justify-between py-8 z-50" />
                    <div className="flex items-center justify-center h-screen w-full -z-50">
                        <GooeyNav
                            items={navItems}
                            animationTime={600}
                            particleCount={20}
                            particleDistances={[90, 10]}
                            particleR={100}
                            initialActiveIndex={activeIndex}
                            setObserverEnabled={setObserverEnabled}
                        />
                    </div>
                    <div className="text-sm text-gray-500 mt-8">
                        &copy; {new Date().getFullYear()}
                    </div>
                </>
            )}
        </aside>
    );
}
