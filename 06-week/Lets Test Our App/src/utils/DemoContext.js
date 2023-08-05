import { createContext, useState } from "react";
const DemoContext = createContext({


  demo: "HEllo",
});
DemoContext.displayName = "DemoContext";
export default DemoContext;
