import { motion, useScroll, useTransform } from "framer-motion";
import React, { useLayoutEffect, useMemo, useRef, useState } from "react";

const experiences = [
      {
      role: "Web Designer",
      company: "ARDENT COMPUTECH PVT LTD",
      duration: "Jul 2024",
      description: "Designed and prototyped a comprehensive Bus Booking Web application. Leveraged core frontend technologies to deliver an intuitive and user-centric interface.",
   },
   {
      role: "Web Developer Intern",
      company: "ApexPlanet Software Pvt Ltd",
      duration: "Jul 2025 - Aug 2025",
      description: "Engineered high-performance, responsive web interfaces. Developed dynamic UI components that significantly enhanced overall user experience and site usability.",
   },
   

];

function ExperienceItem({ exp, idx, start, end, scrollYProgress, layout }) {
   const y = useTransform(scrollYProgress, [start, end], [50, 0]);
   const opacity = useTransform(y, [50, 40], [0, 1]);
   const scale = useTransform(opacity, [0, 1], [0.8, 1]);
   const mobileX = useTransform(scrollYProgress, [start, end], [-30, 0]);
   const mobileY = useTransform(scrollYProgress, [start, end], [30, 0]);

   if (layout === "desktop") {
      return (
         <div className="w-full flex justify-center">
            <div className="relative h-96">
               <motion.div
                  className="absolute w-7 h-7 rounded-full bg-white shadow-[0_0_0_8px_rgba(255,255,255,0.1)] z-10 top-1/2 -translate-y-1/2"
                  style={{ scale, opacity }}
               />
               <motion.article
                  className={`absolute bg-gray-900/80 backdrop-blur border border-gray-700/70 rounded-xl p-6 w-72 min-h-56 shadow-lg left-1/2 -translate-x-1/2 ${idx % 2 === 0
                     ? "bottom-[calc(50%+2rem)]"
                     : "top-[calc(50%+2rem)]"
                     }`}
                  style={{ opacity, y }}
               >
                  <h3 className="text-lg font-semibold mb-1">{exp.role}</h3>
                  <div className="text-xs text-gray-300 mb-3">
                     <span className="block font-medium">{exp.company}</span>
                     <span className="block italic text-gray-400 mt-1">{exp.duration}</span>
                  </div>
                  <p className="text-sm sm:text-base text-gray-300 break-words">
                     {exp.description}
                  </p>
               </motion.article>
            </div>
         </div>
      );
   }

   return (
      <div className="relative flex items-start">
         <motion.div
            className="absolute -left-[14px] top-3 z-10 w-7 h-7 rounded-full bg-white shadow-[0_0_0_8px_rgba(255,255,255,0.1)]"
            style={{ scale, opacity }}
         />
         <motion.article
            className="bg-gray-900/80 backdrop-blur border border-gray-700/70 rounded-xl p-5 w-full ml-6 shadow-lg"
            style={{
               opacity,
               x: mobileX,
               y: mobileY,
            }}
         >
            <h3 className="text-base font-semibold break-words">{exp.role}</h3>
            <div className="text-xs text-gray-400 mb-2 break-words">
               <span className="block font-medium text-gray-300">{exp.company}</span>
               <span className="block italic mt-1">{exp.duration}</span>
            </div>
            <p className="text-sm text-gray-300 break-words">
               {exp.description}
            </p>
         </motion.article>
      </div>
   );
}

export default function Experience() {
   const [isMobile, setIsMobile] = useState(false);
   const sceneRef = useRef(null);

   useLayoutEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth < 768);
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
   }, []);

   const SCENE_HEIGHT_VH = isMobile
      ? 80 * experiences.length
      : 100 * experiences.length;

   const { scrollYProgress } = useScroll({
      target: sceneRef,
      offset: ["start start", "end end"],
   });

   const thresholds = useMemo(
      () => experiences.map((_, i) => (i + 1) / experiences.length),
      [experiences.length],
   );
   const lineSize = useTransform(scrollYProgress, [0, 0.85], ["0%", "100%"], { clamp: true });

   return (
      <section id="experience" className="relative bg-black text-white">
         <div
            ref={sceneRef}
            style={{ height: `${SCENE_HEIGHT_VH}vh`, minHeight: "120vh" }}
            className="relative"
         >
            <div className="sticky top-0 h-screen flex flex-col">
               <h2 className="text-4xl sm:text-5xl font-semibold mt-20 text-center">
                  Experience
               </h2>

               <div className="flex-grow flex items-center justify-center px-6 pb-10">
                  {isMobile ? (
                     <div className="relative w-full max-w-md">
                        <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-white/15 rounded" />
                        <motion.div
                           className="absolute left-0 top-0 bottom-0 w-[6px] bg-white rounded origin-top"
                           style={{ height: lineSize }}
                        />
                        <div className="relative flex flex-col gap-16 ml-10 mt-6 pb-28">
                           {experiences.map((exp, idx) => (
                              <ExperienceItem
                                 key={idx}
                                 exp={exp}
                                 idx={idx}
                                 start={idx === 0 ? 0 : thresholds[idx - 1]}
                                 end={thresholds[idx]}
                                 scrollYProgress={scrollYProgress}
                                 layout="mobile"
                              />
                           ))}
                        </div>
                     </div>
                  ) : (
                     <div className="relative w-full max-w-7xl">
                        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-[6px] bg-white/15 rounded" />
                        <motion.div
                           className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-[6px] bg-white rounded origin-left"
                           style={{ width: lineSize }}
                        />
                        <div className="relative flex justify-between">
                           {experiences.map((exp, idx) => (
                              <ExperienceItem
                                 key={idx}
                                 exp={exp}
                                 idx={idx}
                                 start={idx === 0 ? 0 : thresholds[idx - 1]}
                                 end={thresholds[idx]}
                                 scrollYProgress={scrollYProgress}
                                 layout="desktop"
                              />
                           ))}
                        </div>
                     </div>
                  )}
               </div>
            </div>
         </div>
      </section>
   );
}
