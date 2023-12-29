import './parallax.scss'
import { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";


const Parallax = ({type}) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"],
    });
  
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "400%"]);
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "110%"]);
  
    return (
      <div
        className="parallax"
        ref={ref}
        style={{
          background:
            type === "projects"
              ? "linear-gradient(180deg, #111132, #0c0c1d)"
              : "linear-gradient(180deg, #111132, #404043)",
        }}
      >
        <motion.h1 style={{ y: yText }}>
          {type === "projects" ? "What I Did?" : "Skils"}
        </motion.h1>
        <motion.div style={{y: yBg,}} className="mountains"></motion.div>
        <motion.div  className="mountains" ></motion.div>
        {/* <motion.div style={{y: yBg,}}></motion.div> */}
        <motion.div style={{ x: yBg }} className="stars"></motion.div>
      </div>
    );
  
};

export default Parallax