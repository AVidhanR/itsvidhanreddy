import { TracingBeam } from "@/components/ui/tracing-beam";
import { projectData } from "@/data/project-data";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

function ReusableProjectComponent() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {projectData.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-slate-300 text-slate-900 font-medium rounded-full text-sm w-fit px-4 py-1 mb-4 max-[768px]:px-0 max-[768px]:py-0 max-[768px]:hidden">
              {item.badge}
            </h2>

            <p className={twMerge("calsans", "text-2xl mb-4 font-bold")}>
              {item.title}
            </p>

            <div className="text-lg prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="Project Thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}
export default ReusableProjectComponent;
