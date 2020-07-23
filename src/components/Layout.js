import React from "react";
import Cardnavbar from "./Cardnavbar";

function Layout(props) {
  const children = props.children;

  return (
    <React.Fragment>
      <Cardnavbar />
      {children}
    </React.Fragment>
  );
}

export default Layout;
