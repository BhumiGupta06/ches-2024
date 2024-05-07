"use client";
import { motion } from "framer-motion";
const Template = ({ children }) => {
  return (
    <motion.main
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", duration: 0.5 }}>
      {children}
    </motion.main>
  );
};

export default Template;
