import React from "react";
import Page from "../components/Page";

function Index() {
  console.log(process.env.REACT_APP_BACKEND_HOST);
  return <Page></Page>;
}

export default Index;
