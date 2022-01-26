import * as React from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SaveIcon from "@mui/icons-material/Save";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ShareIcon from "@mui/icons-material/Share";
import { doc, updateDoc, arrayRemove } from "firebase/firestore";
import db from "../../firestore";
import { getAuth } from "firebase/auth";

export default function BasicSpeedDial({ selectedImg, setSelectedImg }) {
  const auth = getAuth();
  const user = auth.currentUser;
  const docRef = doc(db, "users", user.uid);

  let shareData = {
    title: "MDN",
    text: "Check out this photo!",
    url: selectedImg,
  };

  const handleSave = (e) => {
    e.preventDefault();
    window.open(selectedImg);
  };

  const handleShare = async (e) => {
    e.preventDefault();
    navigator.share(shareData);
  };
  const handleDelete = (e) => {
    e.preventDefault();
    updateDoc(docRef, {
      links: arrayRemove(selectedImg),
    });

    setSelectedImg(null);
  };

  return (
    <SpeedDial
      ariaLabel="SpeedDial basic example"
      sx={{ position: "absolute", bottom: 16, left: 16 }}
      icon={<SpeedDialIcon />}
    >
      <SpeedDialAction
        key="Save"
        icon={<SaveIcon />}
        tooltipTitle="Save"
        onClick={(e) => handleSave(e)}
      />
      <SpeedDialAction
        key="Share"
        icon={<ShareIcon />}
        tooltipTitle="Share"
        onClick={(e) => {
          handleShare(e);
        }}
      />
      <SpeedDialAction
        key="Delete"
        icon={<DeleteForeverIcon />}
        tooltipTitle="Delete"
        onClick={(e) => {
          handleDelete(e);
        }}
      />
    </SpeedDial>
  );
}
