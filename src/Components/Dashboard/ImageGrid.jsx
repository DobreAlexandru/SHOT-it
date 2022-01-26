import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import useFirestore from "./UseFirestore";
import { motion } from "framer-motion";

export default function ImageGrid({ setSelectedImg }) {
  const { docs } = useFirestore("users");

  return (
    <Box
      sx={{
        width: "100%",
        height: "80vh",
        overflowY: "scroll",
      }}
    >
      <ImageList cols={4} gap={20}>
        {docs &&
          docs.map((item) => (
            <ImageListItem
              component={motion.div}
              layout
              whileHover={{
                opacity: 0.5,
              }}
              onClick={() => {
                setSelectedImg(item);
              }}
            >
              <img
                src={item}
                loading="lazy"
                style={{
                  maxHeight: "250px",
                  maxWidth: "250px",
                }}
              />
            </ImageListItem>
          ))}
      </ImageList>
    </Box>
  );
}
