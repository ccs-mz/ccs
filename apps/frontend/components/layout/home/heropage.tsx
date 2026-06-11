'use client';

import { useTranslations } from "next-intl";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";


export default function HeroPage(){

    const t = useTranslations("home");

    const [width, setWidth] = useState(0);

    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
    if (titleRef.current) {
        setWidth(titleRef.current.offsetWidth);
    }
    }, []);

    return(
        <main className="flex relative items-center justify-center flex-col gap-8 h-screen w-screen">

            <div className="w-full px-2 absolute top-17 ">
                <div className="relative flex h-8 md:h-10 w-full md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto border-edge px-4 before:absolute before:left-[-100vw] before:h-px before:bg-gray-500  before:w-[200vw] after:absolute after:left-[-100vw] after:h-px after:bg-gray-500 after:bottom-0 after:w-[200vw]">

                </div>
                <div className="absolute inset-0 -z-10
                bg-[repeating-linear-gradient(135deg,rgb(107,114,128,0.3)_0px,rgb(107,114,128,0.3)_1px,transparent_1px,transparent_7px)]
                " />
                </div>

            <div className=" p-2 border flex items-center justify-center gap-2">
               <span className="w-4 h-4 bg-amber-300"></span> 
               <span>{t("target")}</span>
            </div>

            <div className="flex flex-col items-center justify-center">
                    <h1 
                    ref={titleRef}
                    className="uppercase tracking-tight font-bold text-2xl md:text-5xl lg:text-6xl text-foreground leading-none whitespace-nowrap">
                    {t("h1focus")}
                    </h1>

                    <div 
                    style={{ width }}
                    className=" flex gap-4 items-start mt-2">

                    <h1 className="uppercase tracking-tight font-bold text-2xl md:text-5xl lg:text-6xl text-foreground leading-none">
                        {t("h1focus2")}
                    </h1>

                    <p className="flex-1  text-foreground/50 text-base text-justify ">
                        {t("content")}
                    </p>
                </div>
            </div>

            <button className=" relative border border-gray-500 p-2 mt-3 hover:bg-foreground text-foreground transition hover:text-background cursor-pointer">
                        <div className="absolute top-[-0.5px] -left-px h-3 w-3 border-t md:border-t-2 border-gray-500 border-l md:border-l-2 border-neutral"></div>
                        <div className="absolute top-[-0.5px] -right-px h-3 w-3 border-t border-r md:border-t-2 md:border-r-2 border-gray-500 "></div>
                        <div className="absolute bottom-[-0.1px] -left-px h-3 w-3 border-gray-500 border-b border-l md:border-b-2 md:border-l-2 "></div>
                        <div className="absolute bottom-[-0.1px] -right-px h-3 w-3 border-gray-500 border-b border-r md:border-b-2 md:border-r-2 "></div>
                        <div className="flex flex-1 items-center justify-start"></div>
                {t("cta")}
            </button>

            <div className="absolute top-[50%] rotate-180 inset-0 -z-1 bottom-0">
                <Image
                    src="/assets/img/background.svg"
                    alt="Background"
                    fill
                    className="
                        object-cover
                        opacity-30
                        invert
                        dark:invert-0
                    "
                    priority
                />
            </div>


        </main>
    );
}