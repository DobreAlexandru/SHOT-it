import React from "react";
import { motion } from "framer-motion";

const ImageModal = ({ selectedImg, setSelectedImg }) => {
  const handleClose = (e) => {
    if (e.target.classList.contains("backdrop")) setSelectedImg(null);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="backdrop"
      onClick={handleClose}
    >
      <motion.img
        src={selectedImg}
        alt="enlarged pic"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
};

export default ImageModal;
