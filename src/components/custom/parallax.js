import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Parallax = ({ children, offset = 100, className }) => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      controls.start({
        y: scrollY * -0.1,
        transition: { type: "spring", stiffness: 100, damping: 10 },
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <motion.div animate={controls} className={className}>
      {children}
    </motion.div>
  );
};

export default Parallax;
