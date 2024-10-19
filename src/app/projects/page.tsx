"use client";
import React from "react";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";
import ReusableProjectComponent from "./resusable-project";
import { LinkPreview } from "@/components/ui/link-preview";

function ProjectsPage() {
  return (
    <div className="p-6 bg-slate-950 text-white">
      <div className="mt-14 overflow-hidden">
        <LampContainer className="">
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            <div className="-mt-1 text-white">
              Check out my projects <br /> on GitHub <br />
              <LinkPreview
                url="https://github.com/AVidhanR?tab=repositories"
                className="text-3xl text-gray-400 dark:text-gray-300"
              >
                itsvidhanreddy (&gt;_~)
              </LinkPreview>
            </div>
          </motion.h1>
        </LampContainer>
        <ReusableProjectComponent />
      </div>
    </div>
  );
}

export default ProjectsPage;
