import React, { children } from "react";

const Container = ({ children, container_class }) => {
  return <div className={`w-container mx-auto ${container_class}`}>{children}</div>;
};

export default Container;
