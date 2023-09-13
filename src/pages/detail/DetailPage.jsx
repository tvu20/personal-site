import React from "react";
import { useParams } from "react-router-dom";

function Detail(props) {
  const { type } = props;
  const { projectId } = useParams();
  return (
    <div className="textbox">
      Detail page: {type} {projectId}
    </div>
  );
}

export default Detail;
