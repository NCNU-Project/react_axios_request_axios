import React, { useState } from "react";
import Demo from "./DemoPage";

function index() {
  const [data, setData] = useState([123]);
  return (
    <Demo />
  );
}

export default index;
