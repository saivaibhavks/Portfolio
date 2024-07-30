"use client";
import "./Cursor.scss";
import { useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

const Cursor = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { stiffness: 1000, damping: 60 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const mouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="cursor"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      ></motion.div>
      <motion.div
        className="cursor-trail"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
      ></motion.div>
    </>
  );
};

export default Cursor;
