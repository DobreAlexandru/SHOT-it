import { useState, useEffect } from "react";
import { doc, onSnapshot, getDoc } from "firebase/firestore";
import db from "../../firestore";
import { getAuth } from "firebase/auth";

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    const unsub = onSnapshot(doc(db, collection, user.uid), (doc) => {
      let documents = [];
      doc.data().links.forEach((doc) => {
        documents.push(doc);
      });
      setDocs(documents.reverse());
    });
    return () => unsub();
  }, [collection]);

  return { docs };
};

export default useFirestore;
