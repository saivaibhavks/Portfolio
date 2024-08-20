"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = {
  title: "About me",
  description:
    "Experienced front-end developer 🌐 specializing in creating dynamic, user-friendly interfaces with expertise in React ⚛️, Angular 🔧, and modern CSS frameworks 🎨",
  info: [
    {
      fieldName: "Name",
      fieldValue: "K S Saivaibhav",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 9354738597",
    },
    {
      fieldName: "Email",
      fieldValue: "saivaibhavks2022@gmail.com",
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ Years",
    },

    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  items: [
    {
      company: "JUSPAY - CLIENT",
      position: "Software Developer",
      duration: "AUG 2022 - PRESENT",
      logo: "/assets/resume/juspay-logo.png",
    },
    {
      company: "ACCOLITE DIGITAL",
      position: "Software Developer",
      duration: "AUG 2022 - PRESENT",
      logo: "/assets/resume/accolite-img.png",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  items: [
    {
      instituion: "abcccc",
      degree: "uhiuhiu",
      duration: "ugiugiugiu",
    },
    {
      instituion: "abcccc",
      degree: "uhiuhiu",
      duration: "ugiugiugiu",
    },
    {
      instituion: "abcccc",
      degree: "uhiuhiu",
      duration: "ugiugiugiu",
    },
    {
      instituion: "abcccc",
      degree: "uhiuhiu",
      duration: "ugiugiugiu",
    },
  ],
};

const skills = {
  title: "My skills",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[60vh] flex items-center justify-center"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[40px]"
        >
          <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-4">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[60vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[20px] text-center xl:text-left">
                <h3 className="text-3xl font-bold">{experience.title}</h3>
                <ScrollArea className="h-[300px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[150px] py-4 px-8 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <div className="flex gap-16">
                            <div>
                              <span className="text-accent">
                                {item.company}
                              </span>
                              <h3 className="text-lg text-center lg:text-left">
                                {item.position}
                              </h3>
                              <div className="flex items-center gap-2">
                                <p className="text-white/60">{item.duration}</p>
                              </div>
                            </div>
                            <div>
                              <img
                                src={item.logo}
                                alt={`${item.company} logo`}
                                className="w-20 h-20
                                 object-cover rounded-full"
                              />
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[20px] text-center xl:text-left">
                <h3 className="text-3xl font-bold">{education.title}</h3>

                <ScrollArea className="h-[300px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[150px] py-4 px-8 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-lg max-w-[220px] min-h-[50px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-2">
                            <span className="w-[4px] h-[4px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.instituion}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col gap-[20px] text-center xl:text-left">
                  <h3 className="text-3xl font-bold">{skills.title}</h3>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[20px]">
                    {skills.skillList.map((skill, ind) => {
                      return (
                        <li key={ind}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[120px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-5xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[20px]">
                <h3 className="text-3xl font-bold">{about.title}</h3>
                <p className="max-w-[1000px] text-white/60 mx-auto xl:mx-0 pb-4">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-4 max-w-[800px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-2"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-lg">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
