import React, { useEffect } from "react";
import Home from "./components/Home";
import {AppContext} from './context/form'
function App() {


  return (
    <>
    <AppContext>
      <Home />
      </AppContext>
    </>
  )
}

export default App;
