'use client';

import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../ui/ThemeToggle";
import LangButton from "../ui/langBtn";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";


const menuItems = [
    { key: "services", href: "/services" },
    { key: "projects", href: "/projects" },
    { key: "about", href: "/about" },
    { key: "blog", href: "/blog" },
    { key: "contact", href: "/contact" },
];


export default function Header(){

    const t = useTranslations("menu");

    const [isDark, setIsDark] = useState<boolean>(() => {
        if (typeof document === "undefined") return false;
        return document.documentElement.classList.contains("dark");
    });

    useEffect(() => {
        const target = document.documentElement;
        const obs = new MutationObserver(() => {
            setIsDark(target.classList.contains("dark"));
        });
        obs.observe(target, { attributes: true, attributeFilter: ["class"] });
        return () => obs.disconnect();
    }, []);



    return(
            <aside className=" bg-background w-screen fixed top-0 z-50 hidden lg:block">
                <header className="max-w-screen  px-2 pt-2">
                    <div className=" relative md:max-w-3xl  lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto  before:content-[''] before:w-[200vw] before:h-px before:bg-gray-500 before:absolute before:left-[-100vw] before:top-0 after:content-[''] after:w-[200vw] after:absolute after:h-px after:bg-gray-500  d after:bottom-0 after:left-[-100vw] flex h-14 md:h-16 w-full items-center justify-between gap-2 border-x border-gray-500 px-4 sm:gap-4 font-mono">
                        <div className="absolute top-[-0.5px] -left-px h-3 w-3 border-t md:border-t-2 border-gray-500  border-l md:border-l-2 border-neutral"></div>
                        <div className="absolute top-[-0.5px] -right-px h-3 w-3 border-t border-r md:border-t-2 md:border-r-2  border-gray-500 "></div>
                        <div className="absolute bottom-[-0.1px] -left-px h-3  w-3 border-gray-500 border-b border-l md:border-b-2 md:border-l-2 "></div>
                        <div className="absolute bottom-[-0.1px] -right-px h-3  w-3 border-gray-500 border-b border-r md:border-b-2 md:border-r-2 "></div>
                        <div className="flex flex-1 items-center justify-start">
                            <Link href="/">
                                <div className="relative h-40 w-30 flex items-center justify-center text-foreground">
                                    <Image
                                        alt="CCS logo"
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        className=" object-contain"
                                        style={{ position: "absolute", height: "100%", width: "100%", left: 0, top: 0, right: 0, bottom: 0, color: "transparent" }}
                                        src={isDark ? "/ccslogoligth.svg" : "/ccslogoDark.svg"}
                                        fill
                                    /> <span className="ml-20 tracking-tight font-bold text-2xl">CCS</span>
                                </div>
                            </Link>
                        </div>
                        
                        <nav data-active-id="/" className="hidden lg:flex items-center gap-6 justify-center">
                            {menuItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-[15px] tracking-tight font-sans transition-[color] "
                            >
                                {t(item.key)}
                            </Link>
                            ))}
                        </nav>
                        
                        <div className="flex flex-1 items-center justify-end">
                            <div className=" relative flex items-center justify-center gap-3">
                            
                                <LangButton/>
                                <ThemeToggle/>
                            </div>

                        </div>
                    </div>
                </header>
            </aside>
    );

}