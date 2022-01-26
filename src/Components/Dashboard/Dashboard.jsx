import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Upload from "./Upload/Upload";
import { useUserAuth } from "../Contexts/AuthContext";
import ImageGrid from "./ImageGrid";
import { Container } from "@mui/material";
import ImageModal from "./ImageModal";
import { useState } from "react";
import BasicSpeedDial from "./SpeedDial";

export default function Dashboard() {
  const [selectedImg, setSelectedImg] = useState(null);

  const { user } = useUserAuth();

  return (
    <Container style={{ minHeight: "90vh" }}>
      <CssBaseline />

      <Upload />
      {user.uid && <ImageGrid setSelectedImg={setSelectedImg} />}
      {selectedImg && (
        <ImageModal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
      {selectedImg && (
        <BasicSpeedDial
          selectedImg={selectedImg}
          setSelectedImg={setSelectedImg}
        />
      )}
    </Container>
  );
}
