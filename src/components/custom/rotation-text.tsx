import React from "react";
import { motion } from "framer-motion";

const RotationText = ({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{
        transform:
          "translate3d(0%, 0%, 0%) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
      }}
      whileHover={{
        transform:
          "translate3d(50%, 0%, 0%) scale3d(1.1, 1.1, 1.1) rotateX(10deg) rotateY(10deg) rotateZ(10deg) skew(5deg, 5deg)",
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {text}
    </motion.div>
  );
};

export default RotationText;
