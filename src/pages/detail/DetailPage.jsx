import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import FadeInSection from "../../components/FadeInSection";

import { items as codeItems } from "../code/codeItems";
import { items as artItems } from "../art/artItems";

import "./detailpage.css";

function Detail(props) {
  const [item, setItem] = useState();
  const { type } = props;
  const { projectId } = useParams();

  useEffect(() => {
    if (type === "code") {
      const res = codeItems.find((c) => c.id === projectId);
      setItem(res);
    } else {
      const res = artItems.find((a) => a.id === projectId);
      setItem(res);
    }
  }, [projectId, type]);

  const renderImages = () => {
    return item?.images.map((image, i) => {
      return <img key={i} src={image} alt={item?.title} />;
    });
  };

  return (
    <div className="twocolumns">
      <div className="detail__column detail__column--left">
        <FadeInSection>
          <h3 style={{ marginBottom: "20px" }}>{item?.title}</h3>
          <h4>
            <b>{type === "code" ? "timeline" : "Date"}:</b> {item?.date}
          </h4>
          <h4>
            <b>{type === "code" ? "role" : "type"}:</b>{" "}
            {type === "code" ? item?.role : item?.type}
          </h4>
          <h4>
            <b>{type === "code" ? "stack" : "software"}:</b>{" "}
            {type === "code" ? item?.stack : item?.software}
          </h4>
          <h4 style={{ marginBottom: "35px" }}>
            <b>purpose: </b>
            {item?.purpose}
          </h4>
          <p dangerouslySetInnerHTML={{ __html: item?.description }} />
          {/* <p>{item?.description}</p> */}
        </FadeInSection>
      </div>

      <div className="detail__column detail__column--right">
        <FadeInSection delay={100}>{renderImages()}</FadeInSection>
      </div>
    </div>
  );
}

export default Detail;
