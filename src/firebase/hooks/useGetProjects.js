import { useState, useEffect } from "react";
import getProjects from "../firestore/getProjects";

const useGetProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then((docs) => {
      setProjects(docs);
    });

    return () => {};
  }, []);

  return projects;
};

export default useGetProjects;
