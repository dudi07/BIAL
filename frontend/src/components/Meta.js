import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content>
        {description}
      </meta>
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome To BIAL",
  description: "Plan Your Travel",
};

export default Meta;
