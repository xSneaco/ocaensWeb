"use client"

import {Navbar} from "@heroui/navbar";
import {SkillsSection} from "@/app/sneaco/components/SkillsSection";

export default function Home() {
    return (
        <main>
            <Navbar/>
            <div>
                <div className="size-18 rounded-full bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%">
                    <SkillsSection/>
                </div>
            </div>
        </main>
    );
}
