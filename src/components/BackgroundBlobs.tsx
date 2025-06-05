"use client";

import { motion } from "framer-motion";

const BackgroundBlobs = () => (
    <div className="fixed inset-0 pointer-events-none">
        <motion.div
            className="absolute w-96 h-96 rounded-full blur-3xl bg-gray-300/20 dark:bg-gray-600/20"
            animate={{ x: 50, y: 50 }}
            transition={{ type: "spring", stiffness: 50, damping: 30 }}
            style={{ left: "10%", top: "20%" }}
        />
        <motion.div
            className="absolute w-80 h-80 rounded-full blur-3xl bg-gray-400/15 dark:bg-gray-500/15"
            animate={{ x: -50, y: -50 }}
            transition={{ type: "spring", stiffness: 50, damping: 30 }}
            style={{ right: "10%", bottom: "20%" }}
        />
    </div>
);

export default BackgroundBlobs;
