import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import db from "../../../firestore";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useUserAuth } from "../../Contexts/AuthContext";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState("");
  const storage = getStorage();

  const { user } = useUserAuth();
  console.log(user);
  const linkRef = doc(db, "users", user.uid);
  const metadata = {
    contentType: "image/*",
  };

  useEffect(() => {
    const storageRef = ref(storage, "images/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        let percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
        console.log("Upload is " + percentage + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        switch (error.code) {
          case "storage/unauthorized":
            break;
          case "storage/canceled":
            break;
          case "storage/unknown":
            break;
        }
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setUrl(downloadURL);
          console.log("File available at", downloadURL);
          updateDoc(linkRef, {
            links: arrayUnion(downloadURL),
          });
        });
      }
    );
  }, [file]);

  return { progress, url };
};

export default useStorage;
