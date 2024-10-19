import { Boxes } from "@/components/ui/background-boxes";
import React from "react";
import { cn } from "@/utils/cn";
import { LinkPreview } from "@/components/ui/link-preview";
import "@/app/globals.css";

function About() {
  return (
    <div className="">
      <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        <h1 className={cn("md:text-4xl text-2xl text-white relative z-20")}>
          Myself A Vidhan Reddy,
        </h1>
        <p className="list-item-custom text-center mt-2 text-neutral-300 text-lg relative z-20">
          I&apos;m a web and android developer who loves to build things.
        </p>
      </div>
      <div className="flex-col flex items-center m-6">
        <article className="w-[80%] mb-6">
          <h2 className="text-2xl font-bold mb-2">Objective</h2>
          <div className="text-lg">
            <p className="list-item-custom list-item">
              To work in a challenging environment where I can utilize my skills
              and knowledge to the best of my abilities and contribute to the
              growth of the organization.
            </p>
            <p className="list-item-custom list-item">
              Seeking a challenging web development position where I can utilize
              my expertise in front-end and back-end technologies to create
              innovative and user-friendly web solutions.
            </p>
            <p className="list-item-custom list-item">
              Dedicated to staying current with industry trends and
              technologies, I aim to contribute to a dynamic team environment
              while continuously enhancing my skills and delivering
              high-quality, responsive websites that exceed client expectations.
            </p>
          </div>
        </article>
        <article className="w-[80%] mb-6">
          <h2 className="text-2xl font-bold mb-2">Technical Skills</h2>
          <div className="text-lg">
            <p className="list-item-custom list-item">
              Proficient in C, C++, Java, Python, and Kotlin. Basic knowledge in
              Firebase (Backend Service).
            </p>
            <p className="list-item-custom list-item">
              Skilled in HTML5, CSS3, SCSS, Tailwind CSS, and JavaScript.
              Familiar with web frameworks such as Bootstrap, Tailwind CSS, and
              ReactJs. Knowledgeable and basic practice in MySQL and PL/SQL.
            </p>
            <p className="list-item-custom list-item">
              Experienced in{" "}
              <LinkPreview
                url="https://github.com/AVidhanR/MobileAppDevelopment"
                className="font-bold"
              >
                Android development
              </LinkPreview>{" "}
              using XML and Java.
            </p>
            <p className="list-item-custom list-item">
              Proficient with tools like IntelliJ, Visual Studio Code, Android
              Studio, and Jetbrains Fleet. Beginner-level experience with Google
              Cloud.
            </p>
            <p className="list-item-custom list-item">
              Comfortable working with both Linux and Windows environments.
            </p>
            <p className="list-item-custom list-item">
              Proficient with Git and GitHub for version control. Experienced
              with web hosting on platforms like Netlify, Vercel, and GitHub
              Pages.
            </p>
          </div>
        </article>
        <article className="w-[80%] mb-6">
          <h2 className="text-2xl font-bold mb-2">Education</h2>
          <div className="text-lg">
            <p className="list-item-custom list-item">
              Bachelor of Technology in Computer Science and Engineering
              (2021-2025),{" "}
              <LinkPreview
                url="https://www.raghuenggcollege.com/"
                className="font-bold"
              >
                Raghu Engineering College
              </LinkPreview>
              , Visakhapatnam, Andhra Pradesh.
            </p>
            <p className="list-item-custom list-item">
              Relevant Coursework: Data Structures using C, Design and Analysis
              of Algorithms, Database Management Systems, Artificial
              Intelligence, Software Engineering, Operating Systems.
            </p>
          </div>
        </article>
        <article className="w-[80%] mb-6">
          <h2 className="text-2xl font-bold mb-2">
            Extracurricular Activities
          </h2>
          <div className="text-lg">
            <p className="list-item-custom list-item">
              Former Core Team member, Google Developers Student Clubs (GDSC) -
              Now know as{" "}
              <LinkPreview
                url="https://gdg.community.dev"
                className="font-bold"
              >
                Google Developer Groups (GDG)
              </LinkPreview>
              , Raghu Engineering College.
            </p>
            <p className="list-item-custom list-item">
              Achieved recognition as a Top 10 Participant at the national-level
              hackathon,{" "}
              <LinkPreview
                url="https://phcet.ac.in/hackoverflow-2-0-3-day-long-national-level-hackathon/"
                className="font-bold"
              >
                Hack Overflow 2.0
              </LinkPreview>
              , hosted by Pillai HOC, Mumbai.
            </p>
            <p className="list-item list-item-custom">
              Attended{" "}
              <LinkPreview
                url="https://gdg.community.dev/events/details/google-gdg-vizag-presents-devfest-vizag-2023/"
                className="font-bold"
              >
                DevFest
              </LinkPreview>{" "}
              2022 and 2023, annual technology conferences organized by Google
              Developer Groups (GDG) Vizag at GITAM University.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}

export default About;
