import React, { useState } from "react";
import PropTypes from "prop-types";

import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const Content = styled("div")(({ isHidden }) => {
  return isHidden
    ? {
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: 4,
        display: "-webkit-box",
        overflow: "hidden",
      }
    : null;
});

export default function ReadMore({ children }) {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <>
      <Content isHidden={isHidden}>{children}</Content>
      <Button onClick={() => setIsHidden(!isHidden)} size="small">
        {isHidden ? "⬇ More" : "⬆ Less"}
      </Button>
    </>
  );
}

ReadMore.propTypes = {
  children: PropTypes.shape(PropTypes.elementType).isRequired,
};
