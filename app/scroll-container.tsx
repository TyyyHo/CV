"use client";

import { AnimatePresence, motion } from "framer-motion";
// import { usePathname } from "next/navigation";

type ScrollContainerProps = {
  children: React.ReactNode;
};

export default function ScrollContainer({ children }: ScrollContainerProps) {
  // const pathname = usePathname();
  // const currentIndex = navigation.findIndex((item) => item.path === pathname);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        // key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="w-fit h-full bg-neutral-400"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
