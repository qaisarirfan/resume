import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";

import clients from "../../config/clients";

function MD({ id }) {
  const [description, setDescription] = useState(null);

  const getDescription = async () => {
    const response = await clients.default.client.get(`/markdown/${id}.md`);
    setDescription(response.data);
  };

  useEffect(() => {
    getDescription();
  }, [id]);

  return <ReactMarkdown>{description}</ReactMarkdown>;
}

MD.propTypes = {
  id: PropTypes.string,
};

MD.defaultProps = {
  id: null,
};

export default MD;
