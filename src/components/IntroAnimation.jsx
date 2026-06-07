import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useMemo } from "react";

export default function IntroAnimation({ onFinish }) {
   const greetings = useMemo(
      () => [
         "Hello",
         "नमस्ते",
         "Hola",
         "Hello",
         "Ciao",
         "Olá",
         "Здравствуйте",
         "Merhaba",
         "Cześć",
         "Hej",
         "Hallo",
      ],
      [],
   );

   const [index, setIndex] = React.useState(0);
   const [visible, setVisible] = React.useState(true);

   useEffect(() => {
      if (index < greetings.length - 1) {
         const id = setInterval(() => setIndex((i) => i + 1), 100);
         return () => clearInterval(id);
      } else {
         const t = setTimeout(() => setVisible(false), 300);
         return () => clearTimeout(t);
      }
   }, [index, greetings.length]);

   return (
      <AnimatePresence onExitComplete={onFinish}>
         {visible && (
            <motion.div
               className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white overflow-hidden"
               style={{
                  pointerEvents: "none",
               }}
               initial={{ y: 0 }}
               exit={{ y: "-100%" }}
               transition={{
                  duration: 0.8,
                  ease: "easeOut",
               }}
            >
               <motion.h1
                  key={index}
                  className="text-5xl md:text-7xl lg:text-8xl font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.12 }}
               >
                  {greetings[index]}
               </motion.h1>
            </motion.div>
         )}
      </AnimatePresence>
   );
}
