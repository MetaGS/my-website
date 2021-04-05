import { useState, useEffect } from "react";
import getOneProject from "../firestore/getOneProject";

const useGetOneProject = (id) => {
  const [project, setProject] = useState({});
  console.log(id);

  useEffect(() => {
    getOneProject(id).then((project) => {
      if (project) {
        setProject(project);
      } else {
        setProject({ error: "Error Happened. Check source code" });
      }
      console.log(project);
    });
  }, [id]);

  return project;
};

export default useGetOneProject;
