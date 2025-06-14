"use client";

import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

const DarkModeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        if (isDark) document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");
    }, [isDark]);

    return (
        <div
            onClick={() => setIsDark((prev) => !prev)}
            className="fixed top-8 left-8 z-50 p-3 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300 transition-all duration-300 cursor-pointer dark:bg-gray-700 dark:text-yellow-400 dark:hover:bg-gray-600"
        >
            <Icon icon={isDark ? "solar:sun-bold" : "tabler:moon-filled"} className="w-5 h-5" />
        </div>
    );
}

export default DarkModeToggle;
