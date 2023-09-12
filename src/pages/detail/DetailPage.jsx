import React from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { projectId } = useParams();
  return <div>Detail page: {projectId}</div>;
}

export default Detail;
