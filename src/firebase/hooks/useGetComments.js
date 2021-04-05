import { useEffect, useState } from "react";
import getComments from "../firestore/getComments";

const useGetComments = (projectId) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(projectId).then((response) => {
      if (!response) {
      } else {
        setComments(response);
      }
    });
  }, [projectId]);

  return comments;
};

export default useGetComments;
