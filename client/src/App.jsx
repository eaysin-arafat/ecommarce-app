import { Fragment } from "react";
import "./App.css";
import { Footer, Navbar, Sidebar } from "./components";
import { AllRoutes } from "./routes/AllRoutes";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Sidebar />
      <AllRoutes />
      <Footer />
    </Fragment>
  );
}

export default App;
