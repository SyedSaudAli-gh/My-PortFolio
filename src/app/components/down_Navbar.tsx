"use client";

import StylishDock from "@/components/ui/magicdock";
import {
    Home as HomeIcon,
    GraduationCap,
    Briefcase,
    FolderGit,
    Mail,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { IoInformation } from "react-icons/io5";

export default function Down_Navbar() {
    const router = useRouter();

    const dockItems = [
        {
            id: 1,
            icon: <HomeIcon className="text-white w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
            label: "Home",
            description: "Go to homepage",
            onClick: () => router.push("/"),
        }, {
            id: 2,
            icon: <IoInformation className="text-white w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
            label: "About",
            description: "Learn about me or skills",
            onClick: () => router.push("/aboutSkill"),
        },
        {
            id: 3,
            icon: <GraduationCap className="text-white w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
            label: "Education",
            description: "My education background",
            onClick: () => router.push("/educations"),
        },
        {
            id: 4,
            icon: <Briefcase className="text-white w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
            label: "Services",
            description: "What I offer",
            onClick: () => router.push("/services"),
        },
        {
            id: 5,
            icon: <FolderGit className="text-white w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
            label: "Projects or Assignments",
            description: "View my work",
            onClick: () => router.push("/projects"),
        },
        {
            id: 6,
            icon: <Mail className="text-white w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
            label: "Contact",
            description: "Get in touch",
            onClick: () => router.push("/contectToMail"),
        },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center items-end pb-2 sm:pb-3 md:pb-4 px-2">
            {/* Mobile (< 640px) */}
            <div className="block sm:hidden">
                <StylishDock
                    items={dockItems}
                    variant="tooltip"
                    magnification={40}
                    baseItemSize={36}
                    distance={100}
                />
            </div>

            {/* Tablet (640px - 1024px) */}
            <div className="hidden sm:block lg:hidden">
                <StylishDock
                    items={dockItems}
                    variant="tooltip"
                    magnification={55}
                    baseItemSize={42}
                    distance={120}
                />
            </div>

            {/* Desktop (> 1024px) */}
            <div className="hidden lg:block">
                <StylishDock
                    items={dockItems}
                    variant="tooltip"
                    magnification={70}
                    baseItemSize={48}
                    distance={150}
                />
            </div>
        </div>
    );
}