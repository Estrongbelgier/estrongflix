import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import "./styles.css";

function ArrowLeft() {
  const history = useHistory();

  return (
    <FontAwesomeIcon
      onClick={() => {
        history.goBack();
      }}
      icon={faAngleLeft}
      className="Arrow"
    />
  );
}

export default ArrowLeft;
