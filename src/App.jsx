import { Fragment } from "react";
import "./App.css";
import { Footer, Navbar } from "./components";
import { AllRoutes } from "./routes/AllRoutes";

function App() {
  return (
    <Fragment>
      <Navbar />
      <AllRoutes />
      <Footer />
    </Fragment>
  );
}

export default App;
