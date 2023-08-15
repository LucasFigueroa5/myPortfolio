import React from "react";
import Page from "./routes/page/Page.jsx";
import Navigation from "./routes/navigation/Navigation.jsx";
import Whatsapp from "./routes/whatsapp/Whatsapp.jsx";
import Arrows from "./routes/arrows/Arrows.jsx";

const App = () => {

  return (
    <div>
      <Whatsapp />
      {/* <Arrows /> */}
      <Navigation />
      <Page />
    </div>
  );
};

export default App;
