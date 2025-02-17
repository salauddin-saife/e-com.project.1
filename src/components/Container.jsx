import React, { children } from "react";

const Container = ({ children, container_class }) => {
  return <div className={`max-w-container ${container_class}`}>{children}</div>;
};

export default Container;
